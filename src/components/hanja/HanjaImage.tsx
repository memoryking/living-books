import type { HanjaEntry } from '@/lib/hanja-book';
import type { CSSProperties } from 'react';

export default function HanjaImage({ entry, className = '' }: { entry: HanjaEntry; className?: string }) {
  const [x, y, width, height] = entry.imageCrop;
  return <div className={className} role="img" aria-label={`${entry.scene} — ${entry.reading}의 암기 연상 그림`}
    style={{ '--image-ratio': width / height, aspectRatio: `${width} / ${height}`, backgroundColor: '#fff', backgroundImage: `url("${entry.image}")`, backgroundSize: `${100 / width}% ${100 / height}%`, backgroundPosition: `${x / (1 - width) * 100}% ${y / (1 - height) * 100}%`, backgroundRepeat: 'no-repeat', clipPath: entry.imageMask || undefined } as CSSProperties} />;
}
