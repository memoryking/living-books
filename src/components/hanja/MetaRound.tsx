'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { hanjaBook } from '@/lib/hanja-book';
import { shuffled } from '@/lib/hanja-study';
import styles from './hanja.module.css';

export type MetaResult = 'correct' | 'wrong' | 'timeout';
const first = (text: string) => Array.from(text.trim())[0];

export default function MetaRound({ reading, seconds, prepared, onPrepared, onResult, children }: {
  reading: string; seconds: number; prepared: boolean; onPrepared: () => void;
  onResult: (result: MetaResult) => void; children: ReactNode;
}) {
  const answer = first(reading);
  const [choices] = useState(() => {
    const other = shuffled([...new Set(hanjaBook.entries.map(e => first(e.reading)))].filter(c => c && c !== answer))[0];
    return shuffled([answer, other]);
  });
  const [phase, setPhase] = useState<'ready' | 'running' | 'paused'>(prepared ? 'running' : 'ready');
  const [remaining, setRemaining] = useState(seconds * 1000);
  const deadline = useRef(0);
  const active = useRef(false);
  const left = useRef(seconds * 1000);
  const locked = useRef(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const callback = useRef(onResult);
  useEffect(() => { callback.current = onResult; }, [onResult]);
  const finish = (result: MetaResult) => {
    if (locked.current || !active.current) return;
    locked.current = true;
    callback.current(result);
  };
  useEffect(() => {
    if (phase !== 'running') { dialog.current?.showModal(); return; }
    if (!deadline.current) deadline.current = performance.now() + left.current;
    active.current = true;
    const pause = () => {
      if (locked.current) return;
      active.current = false;
      left.current = Math.max(0, deadline.current - performance.now());
      setRemaining(left.current); setPhase('paused');
    };
    const visibility = () => { if (document.hidden) pause(); };
    const timer = window.setInterval(() => {
      if (document.hidden || locked.current || !active.current) return;
      const ms = Math.max(0, deadline.current - performance.now());
      setRemaining(ms);
      if (ms === 0) { locked.current = true; callback.current('timeout'); }
    }, 50);
    window.addEventListener('blur', pause);
    document.addEventListener('visibilitychange', visibility);
    return () => { clearInterval(timer); window.removeEventListener('blur', pause); document.removeEventListener('visibilitychange', visibility); };
  }, [phase]);
  const begin = () => {
    deadline.current = performance.now() + left.current;
    dialog.current?.close(); onPrepared(); setPhase('running');
  };
  return <>
    {phase === 'running' ? <>{children}<div className={styles.metaActions}>
      <progress className={remaining <= 1000 ? styles.metaUrgent : undefined} max={seconds * 1000} value={remaining} aria-label="남은 시간"/>
      <div className={styles.metaChoices}>{choices.map(choice => <button key={choice} onClick={() => finish(performance.now() >= deadline.current ? 'timeout' : choice === answer ? 'correct' : 'wrong')}>{choice}</button>)}</div>
      <small>훈음의 첫 글자를 선택하세요.</small>
    </div></> : <div className={styles.listPrompt}><p>학습 준비</p></div>}
    {phase !== 'running' && <dialog ref={dialog} className={styles.metaDialog} aria-labelledby="meta-ready-title" onCancel={e => e.preventDefault()}>
      <h2 id="meta-ready-title">{phase === 'ready' ? '메타 학습 준비' : '학습 일시정지'}</h2>
      <p>{phase === 'ready' ? `한 글자당 ${seconds}초 · 훈음의 첫 글자 고르기` : '계속하기를 누르면 남은 시간부터 이어집니다.'}</p>
      <p>선택 또는 시간 초과 시 자동으로 평가·저장합니다.</p>
      <button autoFocus className={styles.primary} onClick={begin}>{phase === 'ready' ? '시작' : '계속하기'}</button>
    </dialog>}
  </>;
}
