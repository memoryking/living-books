'use client';

import { useEffect, useRef, useState, type ChangeEvent } from 'react';
import Link from 'next/link';
import { hanjaBook } from '@/lib/hanja-book';
import { EMPTY_STUDY, gradeRecord, parseStudy, shuffled, type StudyState } from '@/lib/hanja-study';
import HanjaImage from './HanjaImage';
import WritingPad from './WritingPad';
import TextPages from './TextPages';
import StudyGuide from './StudyGuide';
import CharacterPicker from './CharacterPicker';
import MetaRound, { type MetaResult } from './MetaRound';
import styles from './hanja.module.css';

const STORAGE_KEY = 'living-books-hanja-memory-v1';
const { entries, chapters, comparisons } = hanjaBook;
type Tab = 'read' | 'recall' | 'compare' | 'guide';
type Scope = 'all' | 'chapter' | 'bookmarks';
type Session = { ids: number[]; index: number; good: number; missed: number[]; learning: boolean; reverse: boolean; practice: boolean; total: number; remaining: number[]; batchTotal: number };
const formatDate = (time: number) => new Date(time).toLocaleString('ko-KR', { month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });

export default function HanjaReader() {
  const [tab, setTab] = useState<Tab>('recall');
  const [study, setStudy] = useState<StudyState>(EMPTY_STUDY);
  const [ready, setReady] = useState(false);
  const [notice, setNotice] = useState('');
  const [storageError, setStorageError] = useState('');
  const [checked, setChecked] = useState<number[]>([]);
  const [chapter, setChapter] = useState(0);
  const [scope, setScope] = useState<Scope>('all');
  const [memoOpen, setMemoOpen] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [reverse, setReverse] = useState(false);
  const [mode, setMode] = useState<'free' | 'meta'>('free');
  const [seconds, setSeconds] = useState(5);
  const [metaPrepared, setMetaPrepared] = useState(false);
  const [metaResult, setMetaResult] = useState<MetaResult | null>(null);
  const [sessionKey, setSessionKey] = useState(0);
  const [session, setSession] = useState<Session | null>(null);
  const [now, setNow] = useState(0);
  const [pendingImport, setPendingImport] = useState<StudyState | null>(null);
  const importInput = useRef<HTMLInputElement>(null);
  const mainRef = useRef<HTMLElement>(null);
  const directChoiceRef = useRef<HTMLDetailsElement>(null);
  const grading = useRef(false);

  useEffect(() => {
    // Browser-only persistence is loaded after hydration; never overwrite it with the SSR default.
    let initial = EMPTY_STUDY;
    let message = '';
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) { const parsed = parseStudy(JSON.parse(raw)); if (parsed) initial = parsed; else message = '저장된 기록 형식을 읽지 못했습니다. 백업 파일이 있으면 학습 안내에서 가져오세요.'; }
    } catch { message = '브라우저 저장소를 읽을 수 없습니다. 이번 화면에서는 공부할 수 있지만 새로고침 전에 기록을 내보내세요.'; }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- restoring browser storage after SSR
    setStudy(initial);
    try {
      const prefs = JSON.parse(localStorage.getItem(STORAGE_KEY+'-preferences') || '{}');
      if (prefs.mode === 'meta') setMode('meta');
      if ([3,5,7,10,15,20,30].includes(prefs.seconds)) setSeconds(prefs.seconds);
    } catch { /* Invalid preferences fall back to untimed study and five seconds. */ }
    const followHash = () => {
      const linkedId = Number(window.location.hash.replace('#item-', ''));
      if (Number.isInteger(linkedId) && linkedId >= 1 && linkedId <= entries.length) {
        setChecked([linkedId]); setTab('read'); setShowAnswer(false);
        setMetaPrepared(false); setMetaResult(null); grading.current = false;
        setSessionKey(key=>key+1);
        let linkedStudy = initial;
        try { linkedStudy = parseStudy(JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null')) || initial; } catch { /* Use restored state if storage is unavailable. */ }
        setReverse(false); setScope('all');
        if (linkedStudy.records[linkedId]?.attempts) {
          setSession({ids:[linkedId],index:0,good:0,total:1,remaining:[],batchTotal:1,missed:[],learning:false,reverse:false,practice:true});
        } else {
          setSession(null); setTab('recall');
          setNotice('아직 배우지 않은 한자입니다. 오늘 학습의 새 글자 배우기로 시작하세요.');
        }
        setStudy(prev => ({ ...prev, lastId: linkedId }));
      }
    };
    followHash();
    window.addEventListener('hashchange', followHash);
    setStorageError(message); setNow(Date.now()); setReady(true);
    const id = window.setInterval(() => setNow(Date.now()), 30_000);
    return () => { window.clearInterval(id); window.removeEventListener('hashchange', followHash); };
  }, []);

  useEffect(() => {
    if (!ready) return;
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(study)); }
    catch { /* Keep the working state even when browser storage is full or blocked. */
      // eslint-disable-next-line react-hooks/set-state-in-effect -- report a persistence failure
      setStorageError('기록을 브라우저에 저장하지 못했습니다. 학습 안내의 기록 내보내기로 백업하세요.');
    }
  }, [study, ready]);

  const due = entries.filter(e => study.records[e.id] && study.records[e.id].due <= now);
  useEffect(() => {
    if (!ready) return;
    const refresh = () => setNow(Date.now());
    const clock = Date.now();
    const next = Math.min(...Object.values(study.records).map(r=>r.due).filter(t=>t>clock));
    const timer = window.setTimeout(refresh, Math.min(2_147_483_647, Number.isFinite(next) ? next-clock+20 : 86_400_000));
    window.addEventListener('focus', refresh);
    document.addEventListener('visibilitychange', refresh);
    return () => { clearTimeout(timer); window.removeEventListener('focus',refresh); document.removeEventListener('visibilitychange',refresh); };
  }, [ready, study.records, now]);
  const endOfToday = new Date(now); endOfToday.setHours(24,0,0,0);
  const laterToday = Object.values(study.records).filter(r=>r.due>now && r.due<endOfToday.getTime()).length;
  const filterEntries = (c: number, list: Scope) => entries.filter(e => {
    if (list === 'chapter' && c && e.chapter !== c) return false;
    const r = study.records[e.id];
    if (list === 'bookmarks' && !study.bookmarks.includes(e.id)) return false;
    if (!r || r.attempts === 0) return false;
    return true;
  }).sort((a,b) => list === 'bookmarks' ? study.bookmarks.indexOf(a.id)-study.bookmarks.indexOf(b.id) : a.id-b.id);
  const filtered = filterEntries(chapter, scope);
  const nextDue = Math.min(...Object.values(study.records).map(r => r.due).filter(t => t > now));
  const visibleChecked = checked.filter(id=>filtered.some(e=>e.id===id));
  const practiceIds = filtered.filter(e=>!visibleChecked.length || visibleChecked.includes(e.id)).map(e=>e.id);

  const go = (id: number) => { if (!study.records[id]?.attempts) { setTab('recall'); setSession(null); setNotice('아직 배우지 않은 한자입니다. 오늘 학습의 새 글자 배우기로 시작하세요.'); return; } setChecked([id]); setStudy(prev=>({...prev,lastId:id})); start([id], false, true, true); };
  const changeRange = (c: number, list: Scope) => {
    setChapter(c); setScope(list);
    setChecked([]); setSession(null); setShowAnswer(false);
    directChoiceRef.current?.removeAttribute('open');
  };
  const toggleBookmark = (id: number) => setStudy(prev => ({ ...prev, bookmarks: prev.bookmarks.includes(id) ? prev.bookmarks.filter(n => n !== id) : [...prev.bookmarks, id] }));
  const start = (ids: number[], learning = false, ordered = false, practice = false, progress?: { total: number; good: number; remaining?: number[]; batchTotal?: number }) => {
    if (!ids.length) { setNotice('선택한 범위에 학습한 한자가 없습니다. 오늘 학습에서 새 글자를 먼저 배워 보세요.'); return; }
    directChoiceRef.current?.removeAttribute('open');
    setSession({ ids: (ordered ? ids : shuffled(ids)).slice(0, 10), index: 0, good: progress?.good ?? 0, total: progress?.total ?? ids.length, remaining: practice ? progress?.remaining ?? ids.slice(10) : [], batchTotal: progress?.batchTotal ?? Math.min(10,ids.length), missed: [], learning, reverse, practice });
    setMetaPrepared(false); setMetaResult(null);
    setSessionKey(key=>key+1);
    setShowAnswer(false); setMemoOpen(false); setTab(practice ? 'read' : 'recall'); grading.current = false; setNotice('');
  };
  const grade = (remembered: boolean) => {
    if (!session || !showAnswer || grading.current || session.index >= session.ids.length) return;
    grading.current = true;
    const id = session.ids[session.index]; const time = Date.now();
    if (!session.practice) setStudy(prev => ({ ...prev, records: { ...prev.records, [id]: gradeRecord(prev.records[id], remembered, time) } }));
    setSession(prev => prev ? { ...prev, index: prev.index + 1, good: prev.good + (remembered ? 1 : 0), missed: remembered ? prev.missed : [...prev.missed, id] } : prev);
    setShowAnswer(false); setMemoOpen(false); setNow(time);
  };
  const reveal = () => { grading.current = false; setShowAnswer(true); };
  const handleStartToday = () => {
    // eslint-disable-next-line react-hooks/purity -- click handler rechecks eligibility, never called during render
    const clock = Date.now(); setNow(clock);
    const ids = entries.filter(e=>study.records[e.id]?.due<=clock).sort((a,b)=>study.records[a.id].due-study.records[b.id].due).slice(0,10).map(e=>e.id);
    if (!ids.length) { setNotice('아직 복습 시각이 되지 않아 지금 복습할 한자가 없습니다.'); return; }
    start(ids,false,true);
  };
  const newIds = entries.filter(e=>!study.records[e.id]).slice(0,5).map(e=>e.id);
  const learnNext = () => {
    setMetaPrepared(false); setMetaResult(null);
    setSession(prev => prev ? (prev.index + 1 < prev.ids.length ? { ...prev, index: prev.index + 1 } : { ...prev, index: 0, learning: false }) : prev);
    setShowAnswer(false); grading.current = false;
  };
  const exportStudy = () => {
    const url = URL.createObjectURL(new Blob([JSON.stringify(study, null, 2)], { type: 'application/json' }));
    const link = document.createElement('a'); link.href = url; link.download = `한자453-학습기록-${new Date().toISOString().slice(0, 10)}.json`; link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  const readImport = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; if (!file) return;
    try {
      if (file.size > 3_000_000) throw new Error('size');
      const parsed = parseStudy(JSON.parse(await file.text()));
      if (!parsed) throw new Error('format');
      setPendingImport(parsed); setNotice('');
    } catch { setNotice('이 책의 학습 기록 파일이 아닙니다. 내보낸 JSON 파일을 선택하세요.'); }
    event.target.value = '';
  };
  const quiz = session && session.index < session.ids.length ? entries[session.ids[session.index] - 1] : null;
  const isMeta = mode === 'meta' && !!session && !session.reverse && !session.learning;
  const preferences = (nextMode: 'free' | 'meta', nextSeconds: number) => {
    setMode(nextMode); setSeconds(nextSeconds); setSession(null); setShowAnswer(false); setMetaPrepared(false); setMetaResult(null);
    try { localStorage.setItem(STORAGE_KEY+'-preferences', JSON.stringify({mode:nextMode,seconds:nextSeconds})); }
    catch { setStorageError('학습 모드 설정을 저장하지 못했습니다.'); }
  };
  const metaGrade = (result: MetaResult) => {
    if (!session || !quiz || !isMeta || grading.current) return;
    grading.current = true;
    const time = Date.now(), remembered = result === 'correct', id = quiz.id;
    if (!session.practice) setStudy(prev => ({...prev, records:{...prev.records,[id]:gradeRecord(prev.records[id],remembered,time)}}));
    setSession(prev => prev ? {...prev,good:prev.good+(remembered?1:0),missed:remembered?prev.missed:[...prev.missed,id]} : prev);
    setMetaResult(result); setShowAnswer(true); setNow(time);
  };
  const metaNext = () => {
    if (!metaResult || !grading.current) return;
    grading.current = false;
    setSession(prev=>prev?{...prev,index:prev.index+1}:prev);
    setShowAnswer(false); setMemoOpen(false); setMetaResult(null); grading.current=false;
  };
  const question = quiz && session && <div className={styles.quizQuestion}>{session.reverse ? <h3>{quiz.reading}</h3> : <><div className={`${styles.bigHanja} ${quiz.kind === 'component' ? styles.compound : ''}`} lang="ko">{quiz.char}</div>{[2,56].includes(quiz.id) && <small>{quiz.id === 56 ? '신체 관련 글자에 쓰이는 부수' : '하늘의 자연물'}</small>}{quiz.kind === 'component' && <small>독립 한자가 아닌 구성 학습 항목</small>}</>}<p>{isMeta ? '훈음의 첫 글자를 고르세요.' : session.reverse ? '이 뜻의 글자를 떠올려 직접 써 보세요.' : '뜻과 음을 소리 내어 말해 보세요.'}</p></div>;

  return <div className={`${styles.book} ${styles.compactReader} ${tab === 'read' || tab === 'recall' ? styles.focusApp : ''}`}>
    <a className={styles.skipLink} href="#hanja-main">학습 본문으로 건너뛰기</a>
    <header className={styles.readerHeader}>
      <nav className={styles.tabs} aria-label="학습 메뉴">
        {([['recall', '01', '오늘 학습'], ['read', '02', '미리 복습'], ['compare', '03', '헷갈림 비교'], ['guide', '04', '학습 안내']] as const).map(([id, number, label]) => <button key={id} aria-pressed={tab === id} onClick={() => { setTab(id); setNotice(''); setSession(null); setShowAnswer(false); }}><span>{number}</span>{label}</button>)}
      </nav>
    </header>
    {storageError && <p role="alert" className={styles.alert}>{storageError}</p>}
    {notice && <p role="status" className={styles.notice}>{notice}<button aria-label="알림 닫기" onClick={() => setNotice('')}>×</button></p>}
    <main id="hanja-main" ref={mainRef} tabIndex={-1} className={styles.main}>
    {(tab === 'read' || tab === 'recall') && <section className={styles.recallSection}>
      {!reverse && <div className={styles.modeControls} aria-label="학습 모드"><button aria-pressed={mode==='free'} onClick={()=>preferences('free',seconds)}>자율 학습</button><button aria-pressed={mode==='meta'} onClick={()=>preferences('meta',seconds)}>메타 학습</button>{mode==='meta' && <label>제한 시간 <select aria-label="제한 시간" value={seconds} onChange={e=>preferences('meta',Number(e.target.value))}>{[3,5,7,10,15,20,30].map(n=><option key={n} value={n}>{n}초</option>)}</select></label>}</div>}
      {tab === 'read' ? <>
        <div className={styles.quickSelect}>
          <label>복습 범위<select value={scope} onChange={e=>changeRange(chapter,e.target.value as Scope)}><option value="all">학습한 한자 전체</option><option value="chapter">단원 선택</option><option value="bookmarks">책갈피 · 담은 순</option></select></label>
          {scope === 'chapter' && <label>단원<select value={chapter} onChange={e=>changeRange(Number(e.target.value),scope)}><option value={0}>전체 단원</option>{chapters.map(c=><option key={c.id} value={c.id}>{c.id}. {c.title}</option>)}</select></label>}
          <details ref={directChoiceRef} className={styles.directChoice} onKeyDown={e=>{if(e.key==='Escape'){e.currentTarget.open=false;e.currentTarget.querySelector('summary')?.focus();}}}><summary>한자 직접 고르기{visibleChecked.length>0 ? ' · '+visibleChecked.length+'개' : ''}</summary><CharacterPicker entries={filtered} records={study.records} checked={visibleChecked} now={now} onChange={ids=>{setChecked(ids);setSession(null);setShowAnswer(false);}} onClose={()=>{directChoiceRef.current?.removeAttribute('open');directChoiceRef.current?.querySelector('summary')?.focus();}}/></details>
        </div>
        <div className={styles.practiceLinks}><button onClick={()=>{setReverse(false);setSession(null);setShowAnswer(false);}} aria-pressed={!reverse}>한자 → 뜻과 음</button><button onClick={()=>{setReverse(true);setSession(null);setShowAnswer(false);}} aria-pressed={reverse}>뜻과 음 → 쓰기</button>{session && <button onClick={()=>setSession(null)}>범위 다시 선택</button>}</div>
        {!session && <div className={styles.studyHome}><h3>예정일 전에, 미리 복습</h3><p>{filtered.length ? visibleChecked.length ? '체크한 '+practiceIds.length+'개를 10개씩 학습해요.' : '선택 안 함 · 현재 범위 전체 '+practiceIds.length+'개를 10개씩 학습해요.' : '이 범위에는 학습한 한자가 없어요.'}</p>{filtered.length ? <button className={styles.primary} disabled={!ready} onClick={()=>start(practiceIds,false,true,true)}>미리 복습 시작 · {Math.min(10,practiceIds.length)}개</button> : <button className={styles.primary} onClick={()=>setTab('recall')}>오늘 학습에서 새 글자 배우기</button>}<small>맞아도 틀려도 기존 복습 일정은 그대로예요.</small><small>틀린 한자는 기다리지 않고 바로 다시 확인해요.</small></div>}
      </> : !session && <>
        <div className={styles.dailyHome}>
          <section className={styles.dailyCard} aria-label="지금 복습">
            <span className={styles.dailyLabel}>배운 한자 다시 확인하기</span><h3>지금 복습</h3>
            <p className={styles.dailyStatus}>{due.length ? <><strong>{due.length}개</strong>를 지금 복습할 수 있어요.</> : '지금 복습할 한자가 없습니다.'}</p>
            {due.length>0 && <><button className={styles.primary} disabled={!ready} onClick={handleStartToday}>지금 학습 시작 · {Math.min(due.length,10)}개</button><small>복습 시간이 지난 한자부터 최대 10개씩</small></>}
            <div className={styles.upcomingReview}><span>다음 복습</span>{Number.isFinite(nextDue) ? <><strong>{formatDate(nextDue)}</strong><small>{laterToday>0 ? `오늘 대기 중 ${laterToday}개 · 아직 복습 시각 전이에요.` : '예정 시각이 되면 시작 버튼이 나타나요.'}</small></> : <small>아직 예정된 복습이 없어요.</small>}</div>
          </section>
          <section className={styles.dailyCard} aria-label="새 글자 학습">
            <span className={styles.dailyLabel}>처음 보는 한자 익히기</span><h3>새 글자 학습</h3>
            <p>{newIds.length ? due.length ? '새 한자를 그림으로 익혀 보세요.' : '복습을 기다리는 동안 새 글자를 배워 보세요.' : '모든 한자의 첫 학습을 마쳤어요.'}</p>
            {newIds.length>0 && <><button className={due.length ? styles.secondary : styles.primary} disabled={!ready} onClick={()=>start(newIds,true,true)}>새 글자 배우기 · {newIds.length}개</button><small>그림으로 익힌 뒤, 가리고 확인해요.</small></>}
          </section>
        </div>
        <div className={styles.direction}><button aria-pressed={!reverse} onClick={()=>setReverse(false)}>한자 → 뜻과 음</button><button aria-pressed={reverse} onClick={()=>setReverse(true)}>뜻과 음 → 쓰기</button></div>
      </>}
      {session && quiz && <article className={styles.quizCard} key={`${sessionKey}-${session.index}-${quiz.id}`}>
        <div className={styles.cardBar}><span>{session.learning ? '그림으로 배우기' : '가리고 확인'} · {session.index + 1} / {session.ids.length} · {session.reverse ? '뜻에서 한자 떠올리기' : '한자에서 훈음 떠올리기'}</span><button className={styles.textButton} onClick={() => { setSession(null); setShowAnswer(false); }}>복습 나가기</button></div>
        {isMeta && !showAnswer ? <MetaRound practice={session.practice} reading={quiz.reading} seconds={seconds} prepared={metaPrepared} onPrepared={()=>setMetaPrepared(true)} onResult={metaGrade}>{question}</MetaRound> : question}
        {session.reverse && !session.learning && <WritingPad answer={showAnswer ? quiz.char : ''}/>}
        {!showAnswer && !session.learning ? isMeta ? null : <div className={styles.quizActions}><button className={styles.primary} onClick={reveal}>정답 보기</button><small>먼저 떠올려 보세요. 몰라도 괜찮아요.</small></div> : <div className={styles.quizAnswer}>
          <div className={styles.answerPair}><HanjaImage entry={quiz} className={styles.answerImage}/><div><span className={styles.answerHanja} lang="ko">{quiz.char}</span><h3>{quiz.reading}</h3></div></div>
          <div className={styles.practiceLinks}><button onClick={()=>toggleBookmark(quiz.id)} aria-pressed={study.bookmarks.includes(quiz.id)}>{study.bookmarks.includes(quiz.id)?'★ 책갈피 해제':'☆ 책갈피'}</button><button onClick={()=>setMemoOpen(!memoOpen)}>{memoOpen?'설명 보기':'메모'}</button></div>
          {memoOpen ? <textarea className={styles.quizMemo} aria-label="개인 메모" value={study.notes[quiz.id]||''} maxLength={2000} onChange={e=>{const value=e.target.value;setStudy(prev=>({...prev,notes:{...prev.notes,[quiz.id]:value}}));}}/> : <TextPages text={[quiz.memory,...quiz.examples,quiz.note].filter(Boolean).join('\n\n')}/>}
          {session.learning ? <div className={styles.gradeButtons}><button className={styles.primary} onClick={learnNext}>{session.index + 1 === session.ids.length ? '이제 가리고 확인' : '다음 그림 배우기'}</button></div> : isMeta ? <div className={styles.gradeButtons}><button className={styles.primary} onClick={metaNext}>다음<small>{metaResult === 'correct' ? '정답' : metaResult === 'timeout' ? '시간 초과' : '오답'} · {session.practice ? '이번 연습에 반영' : '저장 완료'}</small></button></div> : <div className={styles.gradeButtons}><button className={styles.secondary} onClick={() => grade(false)}>{session.practice ? '다시 확인' : '다시 연습'} <small>{session.practice ? '이번 연습에서 한 번 더' : '10분 뒤 · 답 보고 알았어요'}</small></button><button className={styles.primary} onClick={() => grade(true)}>맞혔어요 <small>{session.practice ? '원래 일정 유지' : formatDate(gradeRecord(study.records[quiz.id], true, now).due)+' 복습'}</small></button></div>}
          <p className={styles.muted}>답을 본 뒤 알았다면 {session.practice ? '다시 확인' : '다시 연습'}을 선택하세요. 손글씨는 직접 정답과 비교합니다.</p>
        </div>}
      </article>}
      {session && !quiz && <div className={styles.sessionSummary}><span className={styles.finishMark}>✓</span><h3>{session.practice ? session.missed.length ? '이번 묶음의 틀린 한자를 다시 확인해요.' : session.remaining.length ? '이번 '+session.batchTotal+'개를 모두 맞혔어요.' : '선택한 '+session.total+'개를 이번 연습에서 모두 맞혔어요.' : '이번 학습을 마쳤어요.'}</h3><p>{session.practice ? '전체 누적 맞힘' : '이번에 맞힘'} <strong>{session.good}</strong> · 다시 확인 <strong>{session.missed.length}</strong></p><p className={styles.muted}>{session.practice ? '원래 복습 일정과 학습 기록은 바뀌지 않았어요. 연습 결과는 이 화면에서만 유지됩니다.' : '학습 결과이며 완전 암기를 뜻하지는 않습니다.'}</p>{session.practice && <p>전체 {session.total}개 중 {session.total-session.remaining.length}개 확인 · 아직 확인할 한자 {session.remaining.length}개</p>}{session.practice && session.missed.length > 0 && <div className={styles.missedList}>{session.missed.map(id => <span key={id}>{entries[id - 1].char} · {entries[id - 1].reading}</span>)}</div>}<div className={styles.buttonRow}>{session.practice && session.missed.length > 0 && <button className={styles.primary} onClick={() => start(session.missed,false,true,true,{total:session.total,good:session.good,remaining:session.remaining,batchTotal:session.batchTotal})}>틀린 한자 다시 확인 · {session.missed.length}개</button>}{session.practice && !session.missed.length && session.remaining.length>0 && <button className={styles.primary} onClick={()=>start(session.remaining,false,true,true,{total:session.total,good:session.good})}>다음 {Math.min(10,session.remaining.length)}개 학습</button>}<button className={styles.secondary} onClick={() => setSession(null)}>{session.practice?'여기서 마치기':'오늘 학습으로'}</button></div></div>}
      {tab==='recall' && session && !quiz && <div className={styles.completionDue}>
        {due.length ? <><p>지금 복습할 한자 {due.length}개가 남아 있습니다.</p><button className={styles.primary} onClick={handleStartToday}>지금 학습 시작 · {Math.min(due.length,10)}개</button></> : <><p>아직 복습 시각이 되지 않아 지금 복습할 한자가 없습니다.</p>{Number.isFinite(nextDue) && <p>다음 복습: {formatDate(nextDue)}</p>}</>}
        {session.missed.length>0 && <small>틀린 한자는 평가한 시각부터 10분 뒤에 다시 나옵니다.</small>}
        {laterToday>0 && <small>오늘 남은 예정 {laterToday}개 · 정확한 복습 시각이 되면 시작할 수 있습니다.</small>}
      </div>}
    </section>}

    {tab === 'compare' && <section className={styles.compareSection}><p className={styles.eyebrow}>NOTICE THE DIFFERENCE</p><h2>차이 하나가, 기억을 가릅니다.</h2><p className={styles.lead}>비슷한 글자를 함께 보고 다른 획 하나를 말하세요. 설명을 읽은 뒤에는 비교 질문의 답도 가려 보세요.</p><div className={styles.comparisonGrid}>{comparisons.map(c => <article key={c.title} className={styles.comparison}><h3>{c.title}</h3><div className={styles.compareChars}>{c.ids.map(id => <button key={id} onClick={() => { go(id); }}><span lang="ko">{entries[id - 1].char}</span><small>{entries[id - 1].reading}</small></button>)}</div><p>{c.cue}</p><details><summary>{c.question}</summary><p>{c.answer}</p></details></article>)}</div></section>}

    {tab === 'guide' && <section className={styles.guideSection}><p className={styles.eyebrow}>HOW TO LEARN</p><h2>한자 학습앱 사용 안내</h2><p className={styles.lead}>처음 시작하는 방법부터 복습 일정과 기록 백업까지, 실제 버튼 순서대로 안내합니다.</p>
      <StudyGuide/>
      <div className={styles.guideProse}>
      <h3>학습 기록 관리</h3><p>기록은 이 브라우저에 저장됩니다. 다른 기기로 자동 동기화되지 않습니다. 기록 파일에는 책갈피와 개인 메모도 포함됩니다.</p><div className={styles.buttonRow}><button disabled={!ready} className={styles.primary} onClick={exportStudy}>학습 기록 내보내기</button><button disabled={!ready} className={styles.secondary} onClick={() => importInput.current?.click()}>기록 파일 가져오기</button><input ref={importInput} type="file" accept="application/json,.json" hidden onChange={readImport}/></div>
      {pendingImport && <div className={styles.importConfirm} role="region" aria-label="기록 가져오기 확인"><p>파일에 공부 기록 {Object.keys(pendingImport.records).length}개, 책갈피 {pendingImport.bookmarks.length}개가 있습니다. 현재 기록을 이 파일로 바꿉니다.</p><div className={styles.buttonRow}><button className={styles.primary} onClick={() => { setStudy(pendingImport); setChecked([]); setSession(null); setPendingImport(null); setNotice('학습 기록을 가져왔습니다.'); }}>이 기록으로 바꾸기</button><button className={styles.secondary} onClick={() => setPendingImport(null)}>취소</button></div></div>}
      <h3>공부 방법 참고</h3><p>꺼내 보기와 간격을 둔 연습을 참고해 구성했습니다. 이 책의 이미지나 일정이 모든 글자에 대해 별도 실험으로 검증되었다는 뜻은 아닙니다.</p><ul><li><a href="https://www.retrievalpractice.org/spacing" target="_blank" rel="noreferrer">Retrieval Practice · 간격을 둔 연습</a></li><li><a href="https://doi.org/10.1111/j.1467-9280.2006.01693.x" target="_blank" rel="noreferrer">Roediger·Karpicke · Test-Enhanced Learning</a></li></ul><p><Link href="/premium/hanja-memory/read/full">서문·29개 단원·복습 안내·비교표·교정표 전체 읽기 →</Link></p></div>
    </section>}
    </main>

  </div>;
}
