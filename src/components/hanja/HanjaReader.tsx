'use client';

import { useEffect, useRef, useState, type ChangeEvent } from 'react';
import Link from 'next/link';
import { hanjaBook } from '@/lib/hanja-book';
import { EMPTY_STUDY, gradeRecord, parseStudy, shuffled, type StudyState } from '@/lib/hanja-study';
import HanjaImage from './HanjaImage';
import WritingPad from './WritingPad';
import TextPages from './TextPages';
import StudyGuide from './StudyGuide';
import styles from './hanja.module.css';

const STORAGE_KEY = 'living-books-hanja-memory-v1';
const { entries, chapters, comparisons } = hanjaBook;
type Tab = 'read' | 'recall' | 'compare' | 'guide';
type Scope = 'all' | 'bookmarks' | 'review' | 'due' | 'new';
type Session = { ids: number[]; index: number; good: number; missed: number[]; learning: boolean; reverse: boolean; practice: boolean };
const formatDate = (time: number) => new Date(time).toLocaleString('ko-KR', { month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });

export default function HanjaReader() {
  const [tab, setTab] = useState<Tab>('recall');
  const [study, setStudy] = useState<StudyState>(EMPTY_STUDY);
  const [ready, setReady] = useState(false);
  const [notice, setNotice] = useState('');
  const [storageError, setStorageError] = useState('');
  const [selected, setSelected] = useState(1);
  const [chapter, setChapter] = useState(0);
  const [scope, setScope] = useState<Scope>('all');
  const [memoOpen, setMemoOpen] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [reverse, setReverse] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const [now, setNow] = useState(0);
  const [pendingImport, setPendingImport] = useState<StudyState | null>(null);
  const importInput = useRef<HTMLInputElement>(null);
  const mainRef = useRef<HTMLElement>(null);
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
    const followHash = () => {
      const linkedId = Number(window.location.hash.replace('#item-', ''));
      if (Number.isInteger(linkedId) && linkedId >= 1 && linkedId <= entries.length) {
        setSelected(linkedId); setTab('read'); setShowAnswer(false);
        setSession({ids:[linkedId],index:0,good:0,missed:[],learning:false,reverse:false,practice:true});
        setStudy(prev => ({ ...prev, lastId: linkedId }));
      }
    };
    setSelected(initial.lastId); followHash();
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
  const filterEntries = (c: number, list: Scope) => entries.filter(e => {
    if (c && e.chapter !== c) return false;
    const r = study.records[e.id];
    if (list === 'bookmarks' && !study.bookmarks.includes(e.id)) return false;
    if (list === 'review' && !r?.needsReview) return false;
    if (list === 'due' && !(r && r.due <= now)) return false;
    if (list === 'new' && r) return false;
    return true;
  }).sort((a,b) => list === 'bookmarks' ? study.bookmarks.indexOf(a.id)-study.bookmarks.indexOf(b.id) : a.id-b.id);
  const filtered = filterEntries(chapter, scope);
  const nextDue = Math.min(...Object.values(study.records).map(r => r.due).filter(t => t > now));
  const filteredIndex = filtered.findIndex(e => e.id === selected);

  const go = (id: number) => { setSelected(id); setStudy(prev=>({...prev,lastId:id})); start([id], false, true, true); };
  const changeRange = (c: number, list: Scope) => {
    setChapter(c); setScope(list); const ids = filterEntries(c,list).map(e=>e.id);
    setSelected(ids[0] || 0); setSession(null); setShowAnswer(false);
    if(ids.length) start(ids,false,true,true);
  };
  const toggleBookmark = (id: number) => setStudy(prev => ({ ...prev, bookmarks: prev.bookmarks.includes(id) ? prev.bookmarks.filter(n => n !== id) : [...prev.bookmarks, id] }));
  const start = (ids: number[], learning = false, ordered = false, practice = false) => {
    if (!ids.length) { setNotice('선택한 범위에 복습할 항목이 없습니다. 책을 읽고 다시 볼 글자를 담아 보세요.'); return; }
    setSession({ ids: (ordered ? ids : shuffled(ids)).slice(0, practice ? ids.length : 10), index: 0, good: 0, missed: [], learning, reverse, practice });
    setShowAnswer(false); setMemoOpen(false); setTab(practice ? 'read' : 'recall'); grading.current = false; setNotice('');
  };
  const grade = (remembered: boolean) => {
    if (!session || !showAnswer || grading.current || session.index >= session.ids.length) return;
    grading.current = true;
    const id = session.ids[session.index]; const time = Date.now();
    setStudy(prev => ({ ...prev, records: { ...prev.records, [id]: gradeRecord(prev.records[id], remembered, time, session.practice) } }));
    setSession(prev => prev ? { ...prev, index: prev.index + 1, good: prev.good + (remembered ? 1 : 0), missed: remembered ? prev.missed : [...prev.missed, id] } : prev);
    setShowAnswer(false); setMemoOpen(false); setNow(time);
  };
  const reveal = () => { grading.current = false; setShowAnswer(true); };
  const startToday = () => start(due.sort((a,b)=>study.records[a.id].due-study.records[b.id].due).slice(0,10).map(e=>e.id), false, true);
  const newIds = entries.filter(e=>!study.records[e.id]).slice(0,5).map(e=>e.id);
  const learnNext = () => {
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

  return <div className={`${styles.book} ${styles.compactReader} ${tab === 'read' || tab === 'recall' ? styles.focusApp : ''}`}>
    <a className={styles.skipLink} href="#hanja-main">학습 본문으로 건너뛰기</a>
    <header className={styles.readerHeader}>
      <nav className={styles.tabs} aria-label="학습 메뉴">
        {([['read', '01', '골라 학습'], ['recall', '02', '오늘 학습'], ['compare', '03', '헷갈림 비교'], ['guide', '04', '학습 안내']] as const).map(([id, number, label]) => <button key={id} aria-pressed={tab === id} onClick={() => { setTab(id); setNotice(''); setSession(null); setShowAnswer(false); if(id==='read' && filtered.length) start(filtered.map(e=>e.id),false,true,true); }}><span>{number}</span>{label}</button>)}
      </nav>
    </header>
    {storageError && <p role="alert" className={styles.alert}>{storageError}</p>}
    {notice && <p role="status" className={styles.notice}>{notice}<button aria-label="알림 닫기" onClick={() => setNotice('')}>×</button></p>}
    <main id="hanja-main" ref={mainRef} tabIndex={-1} className={styles.main}>
    {(tab === 'read' || tab === 'recall') && <section className={styles.recallSection}>
      {tab === 'read' ? <>
        <div className={styles.quickSelect}>
          <label>단원<select value={chapter} onChange={e=>changeRange(Number(e.target.value),scope)}><option value={0}>전체 단원</option>{chapters.map(c=><option key={c.id} value={c.id}>{c.id}. {c.title}</option>)}</select></label>
          <label>학습 목록<select value={scope} onChange={e=>changeRange(chapter,e.target.value as Scope)}><option value="all">전체 항목</option><option value="bookmarks">책갈피 · 담은 순</option><option value="review">다시 볼 항목</option><option value="due">복습할 항목</option><option value="new">새 항목</option></select></label>
          <label>글자 선택<select aria-label="글자 선택" value={quiz && filtered.some(e=>e.id===quiz.id)?quiz.id:filteredIndex>=0?selected:''} onChange={e=>go(Number(e.target.value))}><option value="" disabled>{filtered.length?'직접 선택':'해당 항목 없음'}</option>{filtered.map(e=><option key={e.id} value={e.id}>{String(e.id).padStart(3,'0')} · {e.char}</option>)}</select></label>
        </div>
        <div className={styles.practiceLinks}><button onClick={()=>{setReverse(false);setSession(null);setShowAnswer(false);}} aria-pressed={!reverse}>한자 → 뜻과 음</button><button onClick={()=>{setReverse(true);setSession(null);setShowAnswer(false);}} aria-pressed={reverse}>뜻과 음 → 쓰기</button><button disabled={!filtered.length} onClick={()=>start(filtered.map(e=>e.id),false,true,true)}>범위 처음부터</button></div>
        {!session && <div className={styles.studyHome}><p>{filtered.length ? '선택한 범위를 순서대로 확인합니다.' : '이 범위에는 글자가 없습니다.'}</p><button disabled={!filtered.length} className={styles.primary} onClick={()=>start(filtered.map(e=>e.id),false,true,true)}>선택 범위 시작 · {filtered.length}개</button><small>맞히면 기존 일정 유지 · 모르면 10분 뒤 다시 연습</small></div>}
      </> : !session && <>
        <div className={styles.studyHome}>
          <h3>오늘 예정된 복습</h3><p>지금 복습할 글자 {due.length}개</p>
          <button className={styles.primary} disabled={!ready || !due.length} onClick={startToday}>오늘 복습 시작 · {Math.min(due.length,10)}개</button>
          <small>{due.length ? '오래 기다린 글자부터 최대 10개씩' : Number.isFinite(nextDue) ? '다음 복습: '+formatDate(nextDue) : '아래에서 새 글자 학습을 시작하세요.'}</small>
          <button className={styles.secondary} disabled={!ready || !newIds.length} onClick={()=>start(newIds,true,true)}>새 글자 배우기 · {newIds.length}개</button>
          <small>새 글자는 그림으로 배운 다음 가리고 확인합니다.</small>
        </div>
        <div className={styles.direction}><button aria-pressed={!reverse} onClick={()=>setReverse(false)}>한자 → 뜻과 음</button><button aria-pressed={reverse} onClick={()=>setReverse(true)}>뜻과 음 → 쓰기</button></div>
      </>}
      {session && quiz && <article className={styles.quizCard} key={`${session.index}-${quiz.id}`}>
        <div className={styles.cardBar}><span>{session.learning ? '그림으로 배우기' : '가리고 확인'} · {session.index + 1} / {session.ids.length} · {session.reverse ? '뜻에서 한자 떠올리기' : '한자에서 훈음 떠올리기'}</span><button className={styles.textButton} onClick={() => { setSession(null); setShowAnswer(false); }}>복습 나가기</button></div>
        <div className={styles.quizQuestion}>{session.reverse ? <h3>{quiz.reading}</h3> : <><div className={`${styles.bigHanja} ${quiz.kind === 'component' ? styles.compound : ''}`} lang="ko">{quiz.char}</div>{[2,56].includes(quiz.id) && <small>{quiz.id === 56 ? '신체 관련 글자에 쓰이는 부수' : '하늘의 자연물'}</small>}{quiz.kind === 'component' && <small>독립 한자가 아닌 구성 학습 항목</small>}</>}<p>{session.reverse ? '이 뜻의 글자를 떠올려 직접 써 보세요.' : '뜻과 음을 소리 내어 말해 보세요.'}</p></div>
        {session.reverse && !session.learning && <WritingPad answer={showAnswer ? quiz.char : ''}/>}
        {!showAnswer && !session.learning ? <div className={styles.quizActions}><button className={styles.primary} onClick={reveal}>정답 보기</button><small>먼저 떠올려 보세요. 몰라도 괜찮아요.</small></div> : <div className={styles.quizAnswer}>
          <div className={styles.answerPair}><HanjaImage entry={quiz} className={styles.answerImage}/><div><span className={styles.answerHanja} lang="ko">{quiz.char}</span><h3>{quiz.reading}</h3></div></div>
          <div className={styles.practiceLinks}><button onClick={()=>toggleBookmark(quiz.id)} aria-pressed={study.bookmarks.includes(quiz.id)}>{study.bookmarks.includes(quiz.id)?'★ 책갈피 해제':'☆ 책갈피'}</button><button onClick={()=>setMemoOpen(!memoOpen)}>{memoOpen?'설명 보기':'메모'}</button></div>
          {memoOpen ? <textarea className={styles.quizMemo} aria-label="개인 메모" value={study.notes[quiz.id]||''} maxLength={2000} onChange={e=>{const value=e.target.value;setStudy(prev=>({...prev,notes:{...prev.notes,[quiz.id]:value}}));}}/> : <TextPages text={[quiz.memory,...quiz.examples,quiz.note].filter(Boolean).join('\n\n')}/>}
          {session.learning ? <div className={styles.gradeButtons}><button className={styles.primary} onClick={learnNext}>{session.index + 1 === session.ids.length ? '이제 가리고 확인' : '다음 그림 배우기'}</button></div> : <div className={styles.gradeButtons}><button className={styles.secondary} onClick={() => grade(false)}>다시 연습 <small>10분 뒤 · 답 보고 알았어요</small></button><button className={styles.primary} onClick={() => grade(true)}>맞혔어요 <small>{formatDate(gradeRecord(study.records[quiz.id], true, now, session.practice).due)} 복습</small></button></div>}
          <p className={styles.muted}>답을 본 뒤 알았다면 다시 연습을 선택하세요. 손글씨는 직접 정답과 비교합니다.</p>
        </div>}
      </article>}
      {session && !quiz && <div className={styles.sessionSummary}><span className={styles.finishMark}>✓</span><h3>이번 학습을 마쳤어요.</h3><p>기억남 <strong>{session.good}</strong> · 다시 보기 <strong>{session.missed.length}</strong></p><p className={styles.muted}>자기평가 결과이며 완전 암기를 뜻하지는 않습니다.</p>{session.missed.length > 0 && <div className={styles.missedList}>{session.missed.map(id => <button key={id} onClick={() => { go(id); setTab('read'); }}>{entries[id - 1].char} · {entries[id - 1].reading}</button>)}</div>}<div className={styles.buttonRow}>{session.missed.length > 0 && <button className={styles.primary} onClick={() => start(session.missed,false,true,true)}>헷갈린 글자만 한 번 더</button>}<button className={styles.secondary} onClick={() => setSession(null)}>{tab==='read'?'범위 선택으로':'오늘 학습으로'}</button></div></div>}
    </section>}

    {tab === 'compare' && <section className={styles.compareSection}><p className={styles.eyebrow}>NOTICE THE DIFFERENCE</p><h2>차이 하나가, 기억을 가릅니다.</h2><p className={styles.lead}>비슷한 글자를 함께 보고 다른 획 하나를 말하세요. 설명을 읽은 뒤에는 비교 질문의 답도 가려 보세요.</p><div className={styles.comparisonGrid}>{comparisons.map(c => <article key={c.title} className={styles.comparison}><h3>{c.title}</h3><div className={styles.compareChars}>{c.ids.map(id => <button key={id} onClick={() => { go(id); setTab('read'); }}><span lang="ko">{entries[id - 1].char}</span><small>{entries[id - 1].reading}</small></button>)}</div><p>{c.cue}</p><details><summary>{c.question}</summary><p>{c.answer}</p></details></article>)}</div></section>}

    {tab === 'guide' && <section className={styles.guideSection}><p className={styles.eyebrow}>HOW TO LEARN</p><h2>한자 학습앱 사용 안내</h2><p className={styles.lead}>처음 시작하는 방법부터 복습 일정과 기록 백업까지, 실제 버튼 순서대로 안내합니다.</p>
      <StudyGuide/>
      <div className={styles.guideProse}>
      <h3>학습 기록 관리</h3><p>기록은 이 브라우저에 저장됩니다. 다른 기기로 자동 동기화되지 않습니다. 기록 파일에는 책갈피와 개인 메모도 포함됩니다.</p><div className={styles.buttonRow}><button disabled={!ready} className={styles.primary} onClick={exportStudy}>학습 기록 내보내기</button><button disabled={!ready} className={styles.secondary} onClick={() => importInput.current?.click()}>기록 파일 가져오기</button><input ref={importInput} type="file" accept="application/json,.json" hidden onChange={readImport}/></div>
      {pendingImport && <div className={styles.importConfirm} role="region" aria-label="기록 가져오기 확인"><p>파일에 공부 기록 {Object.keys(pendingImport.records).length}개, 책갈피 {pendingImport.bookmarks.length}개가 있습니다. 현재 기록을 이 파일로 바꿉니다.</p><div className={styles.buttonRow}><button className={styles.primary} onClick={() => { setStudy(pendingImport); setSelected(pendingImport.lastId); setSession(null); setPendingImport(null); setNotice('학습 기록을 가져왔습니다.'); }}>이 기록으로 바꾸기</button><button className={styles.secondary} onClick={() => setPendingImport(null)}>취소</button></div></div>}
      <h3>공부 방법 참고</h3><p>꺼내 보기와 간격을 둔 연습을 참고해 구성했습니다. 이 책의 이미지나 일정이 모든 글자에 대해 별도 실험으로 검증되었다는 뜻은 아닙니다.</p><ul><li><a href="https://www.retrievalpractice.org/spacing" target="_blank" rel="noreferrer">Retrieval Practice · 간격을 둔 연습</a></li><li><a href="https://doi.org/10.1111/j.1467-9280.2006.01693.x" target="_blank" rel="noreferrer">Roediger·Karpicke · Test-Enhanced Learning</a></li></ul><p><Link href="/premium/hanja-memory/read/full">서문·29개 단원·복습 안내·비교표·교정표 전체 읽기 →</Link></p></div>
    </section>}
    </main>

  </div>;
}
