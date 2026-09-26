'use client';
import {reviewStage,type StudyRecord} from '@/lib/hanja-study';
import styles from './hanja.module.css';

export default function CharacterPicker({entries,records,checked,now,onChange,onClose}:{entries:{id:number;char:string}[];records:Record<number,StudyRecord>;checked:number[];now:number;onChange:(ids:number[])=>void;onClose:()=>void}) {
  return <div className={styles.checklist} aria-label="복습할 한자 선택">
    <p role="status">{checked.length ? `${checked.length}개 선택 · 선택한 한자만 학습` : `선택 안 함 · 현재 범위 전체 ${entries.length}개 학습`}</p>
    <small>훈음은 숨겨져 있어요. 색은 원래 복습 단계입니다.</small>
    <div className={styles.checklistTools}><button type="button" disabled={!entries.length} onClick={()=>onChange(entries.map(e=>e.id))}>모두 체크</button><button type="button" disabled={!checked.length} onClick={()=>onChange([])}>체크 해제</button><button type="button" onClick={onClose}>선택 완료</button></div>
    <div className={styles.checklistItems}>
      {!entries.length && <p>이 범위에는 학습한 한자가 없어요.</p>}
      {entries.map(e=>{const r=records[e.id],s=reviewStage(r);return <label key={e.id} style={{background:s.background,color:s.color}}>
        <input type="checkbox" data-character-id={e.id} checked={checked.includes(e.id)} onChange={event=>onChange(event.target.checked?[...checked,e.id]:checked.filter(id=>id!==e.id))}/>
        <strong>{String(e.id).padStart(3,'0')} · {e.char}</strong><span>{s.label}{r&&r.due<=now?' · 시간 됨':''}</span>
      </label>;})}
    </div>
  </div>;
}
