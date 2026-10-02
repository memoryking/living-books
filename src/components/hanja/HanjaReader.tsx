'use client';
/* eslint-disable react-hooks/set-state-in-effect -- restore browser storage and report persistence failures after hydration */
import {useEffect,useRef,useState,type ChangeEvent} from 'react';
import Link from 'next/link';
import {hanjaBook} from '@/lib/hanja-book';
import {EMPTY_STUDY,parseStudy,evaluate,beginRound,activeRound,roundRemaining,orderIds,dueIds,dailyPlan,dayKey,reviewStage,type StudyState,type SortOrder,type AnswerResult} from '@/lib/hanja-study';
import HanjaImage from './HanjaImage';
import WritingPad from './WritingPad';
import TextPages from './TextPages';
import StudyGuide from './StudyGuide';
import CharacterPicker from './CharacterPicker';
import MetaRound from './MetaRound';
import styles from './hanja.module.css';
const STORAGE_KEY='living-books-hanja-memory-v1'; // Preserve the installed app's storage address.
const {entries,chapters}=hanjaBook;
type Tab='read'|'recall'|'guide';
type Scope='all'|'chapter'|'bookmarks';
type Session={ids:number[];index:number;good:number;missed:number[];learning:boolean;practice:boolean;reverse:boolean;token:string};
const date=(n:number)=>new Date(n).toLocaleString('ko-KR',{month:'long',day:'numeric',hour:'2-digit',minute:'2-digit'});
export default function HanjaReader(){
 const [tab,setTab]=useState<Tab>('recall'),[study,setStudy]=useState<StudyState>(EMPTY_STUDY),[ready,setReady]=useState(false);
 const [notice,setNotice]=useState(''),[storageError,setStorageError]=useState(''),[checked,setChecked]=useState<number[]>([]),[scope,setScope]=useState<Scope>('all'),[chapter,setChapter]=useState(0);
 const [session,setSession]=useState<Session|null>(null),[showAnswer,setShowAnswer]=useState(false),[memoOpen,setMemoOpen]=useState(false),[result,setResult]=useState<AnswerResult|null>(null),[seconds,setSeconds]=useState(5),[prepared,setPrepared]=useState(false),[now,setNow]=useState(0),[order,setOrder]=useState<SortOrder>('weak');
 const [pendingImport,setPendingImport]=useState<StudyState|null>(null),[replaceRound,setReplaceRound]=useState(false);
 const grading=useRef(false),importInput=useRef<HTMLInputElement>(null),picker=useRef<HTMLDetailsElement>(null),canSave=useRef(true);
 useEffect(()=>{
  let initial=EMPTY_STUDY;
  try{const raw=localStorage.getItem(STORAGE_KEY);if(raw){const parsed=parseStudy(JSON.parse(raw));if(parsed){initial=parsed;if(JSON.parse(raw).version===1&&!localStorage.getItem(STORAGE_KEY+'-legacy-backup'))localStorage.setItem(STORAGE_KEY+'-legacy-backup',raw);}else{canSave.current=false;setStorageError('기존 기록을 읽지 못해 자동 저장을 중지했습니다. 백업을 가져오기 전에는 기존 데이터를 덮어쓰지 않습니다.');}}}catch{canSave.current=false;setStorageError('브라우저 기록을 읽을 수 없습니다. 학습 후 기록을 내보내세요.');}

  setStudy(initial);setOrder(activeRound(initial)?.order||'weak');
  try{const p=JSON.parse(localStorage.getItem(STORAGE_KEY+'-preferences')||'{}');if([3,5,7,10,15,20,30].includes(p.seconds))setSeconds(p.seconds);}catch{/* Keep default. */}
  const hash=()=>{const id=Number(location.hash.replace('#item-',''));if(entries.some(e=>e.id===id)){setChecked([id]);setTab('read');setSession(null);}};
  hash();window.addEventListener('hashchange',hash);setNow(Date.now());setReady(true);
  const clock=setInterval(()=>setNow(Date.now()),1000);return()=>{clearInterval(clock);window.removeEventListener('hashchange',hash);};
 },[]);
 useEffect(()=>{if(!ready||!canSave.current)return;try{localStorage.setItem(STORAGE_KEY,JSON.stringify(study));}catch{setStorageError('기록을 저장하지 못했습니다. 학습 안내에서 기록을 내보내세요.');}},[study,ready]);
 // Count visible, focused study time (including image/answer reading), never background waiting.
 const studying=!!session && session.index<session.ids.length;
 useEffect(()=>{if(!studying)return;const clock=setInterval(()=>{if(document.hidden||!document.hasFocus())return;const key=dayKey(Date.now());setStudy(s=>({...s,activity:{...s.activity,[key]:(s.activity[key]||0)+1}}));},1000);return()=>clearInterval(clock);},[studying]);
 const round=activeRound(study),remaining=roundRemaining(round),plan=dailyPlan(study,entries.length,now);
 const due=dueIds(entries.map(e=>e.id),study.records,now),nextDue=Math.min(...Object.values(study.records).map(r=>r.due).filter(t=>t>now));
 const filtered=entries.filter(e=>study.records[e.id]?.attempts&&(scope!=='chapter'||!chapter||e.chapter===chapter)&&(scope!=='bookmarks'||study.bookmarks.includes(e.id)));
 const visibleChecked=checked.filter(id=>filtered.some(e=>e.id===id)),practiceIds=filtered.filter(e=>!visibleChecked.length||visibleChecked.includes(e.id)).map(e=>e.id);
 const newIds=entries.filter(e=>!study.records[e.id]).slice(0,Math.min(10,plan.newGoal)).map(e=>e.id);
 const quiz=session&&session.index<session.ids.length?entries.find(e=>e.id===session.ids[session.index]):undefined;
 const reset=()=>{setSession(null);setShowAnswer(false);setResult(null);setPrepared(false);grading.current=false;};
 const start=(ids:number[],practice=false,learning=false,reverse=false)=>{if(!ids.length)return;picker.current?.removeAttribute('open');setSession({ids:ids.slice(0,10),index:0,good:0,missed:[],practice,learning,reverse,token:crypto.randomUUID()});setShowAnswer(false);setResult(null);setPrepared(false);grading.current=false;setMemoOpen(false);setNotice('');setTab(practice||reverse?'read':'recall');};
 const startPractice=(fresh=false)=>{
  if(!fresh&&round&&remaining.length){start(orderIds(remaining,study,order),true);return;}
  if(!practiceIds.length){setNotice('먼저 오늘 학습에서 새 글자를 배워 주세요.');return;}
  const next=beginRound(study,practiceIds,order,Date.now());setStudy(next);start(orderIds(roundRemaining(activeRound(next)),next,order),true);setReplaceRound(false);
 };
 const changeOrder=(next:SortOrder)=>{
  setOrder(next);setStudy(s=>({...s,rounds:s.rounds.map(r=>r.id===s.activeRound?{...r,order:next}:r)}));
  setSession(s=>{if(!s?.practice)return s;return {...s,ids:[...s.ids.slice(0,s.index+1),...orderIds(remaining.filter(id=>!s.ids.slice(0,s.index+1).includes(id)),study,next).slice(0,Math.max(0,9-s.index))]};});
 };
 const assess=(answer:AnswerResult)=>{
  if(!session||!quiz||grading.current)return;grading.current=true;
  const t=Date.now(),id=quiz.id,key=`${session.token}:${session.index}:${id}`;
  if(!session.reverse)setStudy(s=>evaluate(s,id,answer,session.practice?'practice':'today',t,key));
  setSession(s=>s?{...s,good:s.good+(answer==='correct'?1:0),missed:answer==='correct'?s.missed:[...s.missed,id]}:s);
  setResult(answer);setShowAnswer(true);setNow(t);
 };
 const next=()=>{if(!session)return;grading.current=false;setSession(s=>s?{...s,index:s.index+1}:s);setShowAnswer(false);setResult(null);setMemoOpen(false);};
 const learnNext=()=>{setSession(s=>s?s.index+1<s.ids.length?{...s,index:s.index+1}:{...s,index:0,learning:false}:s);setPrepared(false);setShowAnswer(false);grading.current=false;};
 const changeSeconds=(n:number)=>{setSeconds(n);reset();try{localStorage.setItem(STORAGE_KEY+'-preferences',JSON.stringify({seconds:n}));}catch{setStorageError('제한 시간을 저장하지 못했습니다.');}};
 const bookmark=(id:number)=>setStudy(s=>({...s,bookmarks:s.bookmarks.includes(id)?s.bookmarks.filter(n=>n!==id):[...s.bookmarks,id]}));
 const exportStudy=()=>{const url=URL.createObjectURL(new Blob([JSON.stringify(study,null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download=`한자-학습기록-${dayKey(Date.now())}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
 const readImport=async(e:ChangeEvent<HTMLInputElement>)=>{const file=e.target.files?.[0];if(!file)return;try{if(file.size>20000000)throw Error();const s=parseStudy(JSON.parse(await file.text()));if(!s)throw Error();setPendingImport(s);}catch{setNotice('유효한 한자 앱 학습 기록 JSON 파일인지 확인해 주세요.');}e.target.value='';};
 const firstCorrect=round?Object.values(round.answers).filter(a=>a.result==='correct').length:0;
 const progress=round?Object.keys(round.answers).length:0;
 const question=quiz&&session&&<div className={styles.quizQuestion}>{session.reverse?<h3>{quiz.reading}</h3>:<><div className={`${styles.bigHanja} ${quiz.kind==='component'?styles.compound:''}`} lang="ko">{quiz.char}</div>{[2,56].includes(quiz.id)&&<small>{quiz.id===56?'신체 관련 글자에 쓰이는 부수':'하늘의 자연물'}</small>}</>}<p>{session.reverse?'뜻과 음을 보고 한자를 직접 써 보세요.':'훈음의 첫 글자를 고르세요.'}</p></div>;
 return <div className={`${styles.book} ${styles.compactReader} ${tab!=='guide'?styles.focusApp:''}`}>
  <a className={styles.skipLink} href="#hanja-main">학습 본문으로 건너뛰기</a>
  <header className={styles.readerHeader}><nav className={styles.tabs} aria-label="학습 메뉴">{([['recall','오늘 학습'],['read','미리 복습'],['guide','학습 안내']] as const).map(([id,label])=><button key={id} aria-pressed={tab===id} onClick={()=>{reset();setTab(id);setNotice('');}}>{label}</button>)}</nav></header>
  {storageError&&<p role="alert" className={styles.alert}>{storageError}</p>}{notice&&<p role="status" className={styles.notice}>{notice}<button onClick={()=>setNotice('')}>닫기</button></p>}
  <main id="hanja-main" tabIndex={-1} className={styles.main}>
  {tab!=='guide'&&<section className={styles.recallSection}>
   {!session?.reverse&&<div className={styles.modeControls}><span>첫 글자 메타 학습</span><label>제한 시간 <select aria-label="제한 시간" value={seconds} onChange={e=>changeSeconds(Number(e.target.value))}>{[3,5,7,10,15,20,30].map(n=><option key={n} value={n}>{n}초</option>)}</select></label></div>}
   {tab==='read'&&<>
    <div className={styles.quickSelect}>
     <label>복습 범위<select value={scope} onChange={e=>{setScope(e.target.value as Scope);setChecked([]);reset();}}><option value="all">학습한 한자 전체</option><option value="chapter">단원 선택</option><option value="bookmarks">책갈피</option></select></label>
     {scope==='chapter'&&<label>단원<select value={chapter} onChange={e=>{setChapter(Number(e.target.value));setChecked([]);reset();}}><option value={0}>전체 단원</option>{chapters.map(c=><option key={c.id} value={c.id}>{c.id}. {c.title}</option>)}</select></label>}
     <label>출제 순서<select aria-label="출제 순서" value={order} onChange={e=>changeOrder(e.target.value as SortOrder)}><option value="weak">약한 한자부터</option><option value="random">무작위</option><option value="oldest">오래 안 본 한자부터</option></select></label>
     <details ref={picker} className={styles.directChoice}><summary>한자 직접 고르기{visibleChecked.length?` · ${visibleChecked.length}개`:''}</summary><CharacterPicker entries={filtered} records={study.records} checked={visibleChecked} now={now} onChange={ids=>{setChecked(ids);reset();}} onClose={()=>picker.current?.removeAttribute('open')}/></details>
    </div>
    {!session&&<div className={styles.studyHome}>
     <h3>{round?`${round.number}회차 · ${progress} / ${round.ids.length}개 확인`:'한 바퀴씩, 미리 복습'}</h3>
     {round&&<p>첫 시도 정답 {firstCorrect}개 · 오답·시간 초과 {progress-firstCorrect}개 · 남은 {remaining.length}개</p>}
     <p>{visibleChecked.length?`새 회차 범위: 체크한 ${practiceIds.length}개`:`선택 안 함 · 새 회차는 현재 범위 전체 ${practiceIds.length}개`}</p>
     <div className={styles.buttonRow}>{remaining.length>0&&<button className={styles.primary} onClick={()=>startPractice()}>회차 이어하기 · {Math.min(10,remaining.length)}개</button>}<button className={remaining.length?styles.secondary:styles.primary} disabled={!ready||!practiceIds.length} onClick={()=>remaining.length?setReplaceRound(true):startPractice(true)}>{round?'새 회차 시작':'미리 복습 시작'}</button></div>
     {replaceRound&&<div role="region" aria-label="새 회차 확인"><p>현재 회차는 기록에 보존하고 선택한 범위로 새 회차를 시작합니다.</p><button onClick={()=>startPractice(true)}>이 범위로 새 회차 만들기</button><button onClick={()=>setReplaceRound(false)}>취소</button></div>}
     <small>예정 전 정답은 안정성과 일정을 유지해요. 오답은 오늘 학습에서 10분 뒤 다시 확인해요.</small>
     <small>오늘 학습의 평가도 진행 중인 회차에 한 번 인정해요. 순서 변경은 아직 풀지 않은 한자에만 적용돼요.</small>
     {plan.remaining===0&&<button className={styles.secondary} onClick={()=>start(practiceIds,false,false,true)}>보조 학습 · 뜻과 음 → 쓰기</button>}
     {study.rounds.length>0&&<details className={styles.roundHistory}><summary>회차 기록 · {study.rounds.length}회</summary>{[...study.rounds].reverse().map(r=><p key={r.id}>{r.number}회차 · {dayKey(r.started)} · {Object.keys(r.answers).length}/{r.ids.length}개 · 첫 정답 {Object.values(r.answers).filter(a=>a.result==='correct').length}개 · {r.completed?'확인 완료':'진행 보관'}</p>)}</details>}
    </div>}
   </>}
   {tab==='recall'&&!session&&<>
    <div className={styles.planStrip}><strong>{plan.day}일째 / {study.course.days}일 · 하루 {study.course.minutes}분 계획</strong><span>첫 학습 {plan.learned}/{entries.length}개 · 오늘 공부 약 {Math.floor(plan.used/60)}분</span><span>권장 복습 {plan.reviewGoal}회 · 추가 새 학습 {plan.newGoal}개</span></div>
    <div className={styles.dailyHome}>
     <section className={styles.dailyCard} aria-label="지금 복습"><span className={styles.dailyLabel}>시각이 된 한자 자동 선택</span><h3>지금 복습</h3><p className={styles.dailyStatus}>{due.length?<><strong>{due.length}개</strong>를 지금 복습할 수 있어요.</>:'지금 복습할 한자가 없습니다.'}</p>{due.length>0&&<button className={styles.primary} onClick={()=>start(dueIds(entries.map(e=>e.id),study.records,Date.now()))}>지금 학습 시작 · {Math.min(10,due.length)}개</button>}<small>재학습·회상 가능성을 고려해 10개씩. 회차의 미확인 항목도 함께 확인합니다.</small><div className={styles.upcomingReview}><span>다음 복습</span>{Number.isFinite(nextDue)?<strong>{date(nextDue)}</strong>:<small>아직 예정된 복습이 없어요.</small>}</div></section>
     <section className={styles.dailyCard} aria-label="새 글자 학습"><span className={styles.dailyLabel}>첫 {study.course.learningDays}일 신규 · 이후 반복</span><h3>{plan.remaining?'새 글자 학습':'한 바퀴 복습'}</h3><p>{plan.remaining?`아직 배우지 않은 한자 ${plan.remaining}개`:'모든 한자의 첫 학습을 마쳤어요. 회차를 반복하며 기억을 확인하세요.'}</p>{newIds.length>0?<button className={styles.secondary} onClick={()=>start(newIds,false,true)}>새 글자 배우기 · {newIds.length}개</button>:<p>{plan.remaining?'오늘 권장 새 학습을 마쳤거나 복습에 시간을 배정했어요.':'별도 마지막 시험 없이 오늘 학습과 회차 복습을 계속합니다.'}</p>}<button className={styles.textButton} onClick={()=>setTab('read')}>미리 복습으로 이동</button></section>
    </div>
    {(plan.overload||plan.late||plan.used>=study.course.minutes*60)&&<p className={styles.notice}>남은 학습을 숨기지 않고 다음 날 계획에 반영합니다. {plan.late?'신규 진도 기간이 지났습니다. 학습 안내에서 목표 기간을 늘려 주세요.':'오늘 시간이 부족하면 쉬었다 이어가세요. 목표일 내 완료가 보장되지는 않습니다.'}</p>}
   </>}
   {session&&quiz&&<article className={styles.quizCard} key={`${session.token}-${session.index}`}>
    <div className={styles.cardBar}><span>{session.learning?'그림으로 배우기':session.reverse?'보조 쓰기':'첫 글자 확인'} · {session.index+1}/{session.ids.length}</span><button className={styles.textButton} onClick={reset}>복습 나가기</button></div>
    {!session.learning&&!session.reverse&&!showAnswer?<MetaRound practice={session.practice} reading={quiz.reading} seconds={seconds} prepared={prepared} onPrepared={()=>setPrepared(true)} onResult={assess}>{question}</MetaRound>:question}
    {session.reverse&&<WritingPad answer={showAnswer?quiz.char:''}/>}
    {session.reverse&&!showAnswer&&<button className={styles.primary} onClick={()=>setShowAnswer(true)}>정답 보기</button>}
    {(session.learning||showAnswer)&&<div className={styles.quizAnswer}>
     <div className={styles.answerPair}><HanjaImage entry={quiz} className={styles.answerImage}/><div><span className={styles.answerHanja} lang="ko">{quiz.char}</span><h3>{quiz.reading}</h3>{study.records[quiz.id]&&<small>{reviewStage(study.records[quiz.id]).label} · {study.records[quiz.id].needsReview?'재학습 ':''}{date(study.records[quiz.id].due)}</small>}</div></div>
     <div className={styles.practiceLinks}><button onClick={()=>bookmark(quiz.id)}>{study.bookmarks.includes(quiz.id)?'★ 책갈피 해제':'☆ 책갈피'}</button><button onClick={()=>setMemoOpen(!memoOpen)}>{memoOpen?'설명 보기':'메모'}</button></div>
     {memoOpen?<textarea className={styles.quizMemo} aria-label="개인 메모" value={study.notes[quiz.id]||''} maxLength={2000} onChange={e=>{const value=e.target.value;setStudy(s=>({...s,notes:{...s.notes,[quiz.id]:value}}));}}/>:<TextPages text={[quiz.memory,...quiz.examples,quiz.note].filter(Boolean).join('\n\n')}/>}
     <div className={styles.gradeButtons}>{session.learning?<button className={styles.primary} onClick={learnNext}>{session.index+1===session.ids.length?'이제 가리고 확인':'다음 그림 배우기'}</button>:<button className={styles.primary} onClick={next}>다음<small>{session.reverse?'직접 비교 · 주 학습 기록은 그대로':result==='correct'?'정답 · 저장 완료':result==='timeout'?'시간 초과 · 10분 재학습':'오답 · 10분 재학습'}</small></button>}</div>
     <p className={styles.muted}>{session.reverse?'손글씨 자동 채점은 하지 않습니다.':'전체 뜻과 음도 함께 확인하세요. 첫 글자 선택 성공이 전체 훈음 암기를 보장하지는 않습니다.'}</p>
    </div>}
   </article>}
   {session&&!quiz&&<div className={styles.sessionSummary}><span className={styles.finishMark}>✓</span><h3>이번 묶음을 마쳤어요.</h3>{!session.reverse&&<p>정답 {session.good}개 · 오답·시간 초과 {session.missed.length}개</p>}<p>{session.reverse?'주 학습 일정은 변경하지 않았습니다.':'오답은 오늘 학습의 10분 재학습으로 이어집니다. 회차의 최초 결과는 보존됩니다.'}</p>{round&&<p>{round.number}회차 · {progress}/{round.ids.length}개 확인 · 남은 {remaining.length}개</p>}<div className={styles.buttonRow}>{session.practice&&remaining.length>0&&<button className={styles.primary} onClick={()=>startPractice()}>다음 {Math.min(10,remaining.length)}개 학습</button>}<button className={styles.secondary} onClick={reset}>여기서 마치기 · 진행 저장</button><button className={styles.secondary} onClick={()=>{reset();setTab('recall');}}>오늘 학습으로</button></div>{Number.isFinite(nextDue)&&<small>다음 복습: {date(nextDue)}</small>}</div>}
  </section>}
  {tab==='guide'&&<section className={styles.guideSection}><p className={styles.eyebrow}>HOW TO LEARN</p><h2>한자 학습앱 사용 안내</h2><StudyGuide/><div className={styles.guideProse}>
   <h3>학습 계획 조정</h3><p>기본 30일 중 마지막 10일은 반복 기간입니다. 기간을 늘려도 기존 복습 예정일과 회차 기록은 유지됩니다. 일일 권장량은 남은 항목과 공부 시간을 기준으로 다시 배분합니다.</p><label>과정 기간 <select aria-label="과정 기간" value={study.course.days} onChange={e=>{const days=Number(e.target.value);setStudy(s=>({...s,course:{...s.course,days,learningDays:days-10}}));}}>{[30,40,50,60,90].map(n=><option key={n} value={n}>{n}일</option>)}</select></label>
   <h3>학습 기록 관리</h3><p>이 브라우저에 저장됩니다. 다른 기기로 자동 동기화되지 않습니다. 기록에는 회차·평가 이력·책갈피·메모가 포함됩니다. 기존 v1 백업도 읽을 수 있습니다.</p><div className={styles.buttonRow}><button className={styles.primary} disabled={!ready} onClick={exportStudy}>학습 기록 내보내기</button><button className={styles.secondary} onClick={()=>importInput.current?.click()}>기록 파일 가져오기</button><input ref={importInput} type="file" accept="application/json,.json" hidden onChange={readImport}/></div>
   {pendingImport&&<div className={styles.importConfirm}><p>학습 {Object.keys(pendingImport.records).length}개·회차 {pendingImport.rounds.length}개로 현재 기록을 교체합니다.</p><button onClick={()=>{canSave.current=true;setStudy(pendingImport);setOrder(activeRound(pendingImport)?.order||'weak');setPendingImport(null);setStorageError('');reset();}}>이 기록으로 바꾸기</button><button onClick={()=>setPendingImport(null)}>취소</button></div>}
   <p><Link href="/premium/hanja/read">그림·암기법·헷갈림 비교 부록을 전자책으로 읽기 →</Link></p>
  </div></section>}
  </main>
 </div>;
}
