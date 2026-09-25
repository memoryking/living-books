'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './hanja.module.css';

// Keep long explanations readable in a small viewport without hiding text or requiring scrolling.
export default function TextPages({ text }: { text: string }) {
  const box = useRef<HTMLDivElement>(null);
  const [pages, setPages] = useState([text]);
  const [page, setPage] = useState(0);
  useEffect(() => {
    const element = box.current;
    if (!element) return;
    const measure = () => {
      const style = getComputedStyle(element);
      const context = document.createElement('canvas').getContext('2d');
      if (!context) return;
      context.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
      const width = Math.max(20, element.clientWidth - 10);
      const count = Math.max(1, Math.floor((element.clientHeight - 38) / parseFloat(style.lineHeight)));
      const lines: string[] = []; let line = '';
      for (const char of text) {
        if (char === '\n') { lines.push(line); line = ''; }
        else if (line && context.measureText(line + char).width > width) { lines.push(line); line = char; }
        else line += char;
      }
      if (line) lines.push(line);
      const result: string[] = [];
      for (let i = 0; i < lines.length; i += count) result.push(lines.slice(i, i + count).join('\n'));
      setPages(result.length ? result : ['']); setPage(0);
    };
    measure(); const observer = new ResizeObserver(measure); observer.observe(element);
    return () => observer.disconnect();
  }, [text]);
  return <div ref={box} className={styles.textPages}>
    <p>{pages[Math.min(page, pages.length - 1)]}</p>
    {pages.length > 1 && <nav aria-label="설명 페이지"><button disabled={page === 0} onClick={() => setPage(page - 1)}>이전 설명</button><span>{page + 1} / {pages.length}</span><button disabled={page === pages.length - 1} onClick={() => setPage(page + 1)}>다음 설명</button></nav>}
  </div>;
}
