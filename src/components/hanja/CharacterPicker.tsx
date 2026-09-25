'use client';
import {useEffect,useRef} from 'react';
import {REVIEW_STAGES,reviewStage,type StudyRecord} from '@/lib/hanja-study';
import styles from './hanja.module.css';

export default function CharacterPicker({entries,records,value,now,onChange}:{entries:{id:number;char:string}[];records:Record<number,StudyRecord>;value:number;now:number;onChange:(id:number)=>void}) {
  const root=useRef<HTMLDetailsElement>(null);
  const selected=entries.find(e=>e.id===value);
  const stage=reviewStage(selected?records[selected.id]:undefined);
  useEffect(()=>{
    const close=(event:PointerEvent)=>{if(event.target instanceof Node && !root.current?.contains(event.target))root.current?.removeAttribute('open');};
    document.addEventListener('pointerdown',close);return()=>document.removeEventListener('pointerdown',close);
  },[]);
  return <div className={styles.characterField}><span>글자 선택</span>
    <details className={styles.characterPicker} ref={root} onKeyDown={e=>{if(e.key==='Escape'){root.current?.removeAttribute('open');root.current?.querySelector('summary')?.focus();}}}>
      <summary aria-label="글자 선택" style={{background:stage.background,color:stage.color}}>
        <span>{selected?String(selected.id).padStart(3,'0')+' · '+selected.char:entries.length?'직접 선택':'해당 항목 없음'}</span>
        {selected&&<small>{stage.label}{records[selected.id] && records[selected.id].due<=now?' · 시간 됨':''}</small>}
      </summary>
      <div className={styles.characterMenu} aria-label="복습 단계별 글자 목록">
        <p>색은 남은 시간이 아닌 복습 단계입니다.</p>
        <div className={styles.stageLegend}>{REVIEW_STAGES.map(s=><span key={s.label} style={{background:s.background,color:s.color}}>{s.label}</span>)}</div>
        <div className={styles.characterOptions}>
          {!entries.length&&<p>선택한 범위에 글자가 없습니다.</p>}
          {entries.map(e=>{const r=records[e.id],s=reviewStage(r);return <button key={e.id} type="button" data-character-id={e.id} aria-current={e.id===value?'true':undefined} style={{background:s.background,color:s.color}} onClick={()=>{onChange(e.id);root.current?.removeAttribute('open');root.current?.querySelector('summary')?.focus();}}>
            <strong>{String(e.id).padStart(3,'0')} · {e.char}</strong><span>{s.label}{r&&r.due<=now?' · 복습 시간 됨':''}</span>
          </button>;})}
        </div>
      </div>
    </details>
  </div>;
}
