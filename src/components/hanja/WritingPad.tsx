'use client';
import { useRef, type PointerEvent } from 'react';
import styles from './hanja.module.css';

export default function WritingPad({ answer = '' }: { answer?: string }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);
  const point = (event: PointerEvent<HTMLCanvasElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    return [(event.clientX - rect.left) * 600 / rect.width, (event.clientY - rect.top) * 600 / rect.height];
  };
  const down = (event: PointerEvent<HTMLCanvasElement>) => {
    const context = canvas.current?.getContext('2d');
    if (!context) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    drawing.current = true;
    const [x, y] = point(event);
    context.strokeStyle = '#1c453b'; context.lineWidth = 9; context.lineCap = 'round'; context.lineJoin = 'round';
    context.beginPath(); context.moveTo(x, y); context.lineTo(x + .1, y + .1); context.stroke();
  };
  const move = (event: PointerEvent<HTMLCanvasElement>) => {
    if (!drawing.current) return;
    const context = canvas.current?.getContext('2d');
    const [x, y] = point(event);
    context?.lineTo(x, y); context?.stroke();
  };
  return <div className={styles.padWrap}>
    <div className={styles.writingSurface}>
    {answer && <span className={styles.traceAnswer} aria-label="비교용 정답" style={{fontSize: [...answer].length > 1 ? '65cqw' : '80cqw'}}>{answer}</span>}
    <canvas ref={canvas} width={600} height={600} className={styles.pad} aria-label="한자 손글씨 연습판. 마우스나 손가락으로 쓰세요. 키보드 사용자는 종이에 적고 답과 비교할 수 있습니다."
      onPointerDown={down} onPointerMove={move} onPointerUp={() => { drawing.current = false; }} onPointerCancel={() => { drawing.current = false; }} onLostPointerCapture={() => { drawing.current = false; }} />
    </div>
    <div className={styles.padCaption}><span>{answer ? '초록: 내 글씨 · 붉은색: 정답' : '직접 쓰기 · 자동 채점 없음'}</span><button className={styles.textButton} onClick={() => canvas.current?.getContext('2d')?.clearRect(0, 0, 600, 600)}>지우기</button></div>
  </div>;
}
