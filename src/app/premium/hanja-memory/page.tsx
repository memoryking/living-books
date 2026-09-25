import Image from 'next/image';
import Link from 'next/link';
import { hanjaBook } from '@/lib/hanja-book';
import HanjaImage from '@/components/hanja/HanjaImage';
import styles from '@/components/hanja/hanja.module.css';

export const metadata = { title: '그림으로 기억하는 한자 453 | 살아있는 정보책', description: '한 글자에 한 장면을 붙이고, 답을 가리고 꺼내 보는 한자 암기 전자책. 453개 학습 항목, 29개 단원, 이미지 연상과 단어·구성 예시 906개.' };

export default function HanjaMemoryPage() {
  return <div className={styles.book}><main className={styles.landing}>
    <nav className={styles.landingNav}><Link href="/" className={styles.brand}>비법연구소 · 살아있는 정보책</Link><Link className={styles.textButton} href="/premium/hanja-memory/read">내 책 펼치기 ↗</Link></nav>
    <section className={styles.hero}><div><p className={styles.eyebrow}>A PICTURE FOR EVERY CHARACTER</p><h1>그림으로<br/>기억하는 한자<br/><em>453</em></h1><p className={styles.heroText}>복잡한 획에, 잊히지 않는 한 장면.<br/>보고 연결하고, 가리고 꺼내며<br/>내 것이 되는 한자 공부를 시작하세요.</p><div className={styles.buttonRow}><Link href="/premium/hanja-memory/read" className={styles.primary}>첫 장면부터 공부하기 →</Link><Link href="/premium/hanja-memory/read/full" className={styles.secondary}>전체 본문 읽기</Link></div><p className={styles.heroCaption}>한자·부수·구성 요소 포함 453개 항목 · 브라우저에 학습 기록 저장</p></div><Image className={styles.cover} src="/hanja-memory/cover.webp" alt="황금빛 태양과 달, 초록 산과 푸른 물, 새와 불꽃이 모인 한자 암기책 표지" width={1024} height={1536} priority/></section>
    <div className={styles.landingStats}><div><strong>453</strong><span>원문을 보존한 학습 항목</span></div><div><strong>29</strong><span>장면으로 이어지는 단원</span></div><div><strong>906</strong><span>단어·구성 활용 예시</span></div></div>
    <section className={styles.landingSection}><p className={styles.eyebrow}>LOOK. CONNECT. RECALL.</p><h2>그림을 본 다음,<br/>한자의 획으로 돌아옵니다.</h2><p>태양만 기억하면 태양 그림 공부입니다. 日의 한 획과 ‘날 일’이 함께 떠올라야 한자 공부가 됩니다. 모든 항목에 그림과 모양을 잇는 짧은 문장, 실제 쓰임, 가리고 확인하는 연습을 붙였습니다.</p><div className={styles.previewGrid}>{[1,21,176].map(id => { const entry = hanjaBook.entries[id - 1]; return <article key={id} className={styles.previewCard}><span lang="ko">{entry.char}</span><HanjaImage entry={entry} className={styles.previewArt}/><h3>{entry.reading} · {entry.scene}</h3><p>{entry.memory}</p></article>; })}</div></section>
    <section className={styles.landingSection}><h2>내가 기억했는지,<br/>책을 가리고 확인하세요.</h2><div className={styles.guideSteps}>{[['01','이미지와 한 문장','색과 모양이 선명한 그림으로 뜻을 연결합니다.'],['02','양방향 꺼내 보기','한자에서 훈음을, 훈음에서 글자를 떠올립니다.'],['03','헷갈림 비교','土·士, 日·曰, 두 가지 月을 함께 비교합니다.'],['04','나에게 맞춘 복습','다시 볼 글자, 책갈피, 나만의 연상을 남깁니다.']].map(([n,title,body]) => <div key={n}><span>{n}</span><h3>{title}</h3><p>{body}</p></div>)}</div></section>
    <section className={styles.landingSection}><p className={styles.eyebrow}>CONTENTS</p><h2>453개 장면을 잇는 29개 단원</h2><p>자연과 동물, 사람과 도구에서 추상적인 뜻까지. 입력 순서를 보존하며 한 단원에 16개씩, 마지막에는 5개를 담았습니다.</p><div className={styles.tocGrid}>{hanjaBook.chapters.map(c => <Link key={c.id} href={"/premium/hanja-memory/read#item-" + ((c.id - 1) * 16 + 1)}><span>{String(c.id).padStart(2,'0')}</span>{c.title}</Link>)}</div></section>
    <section className={styles.landingSection}><h2>재미있는 연상과 정확한 표기를 함께.</h2><p>암기 이야기는 창작 연상이며 역사적 자원 설명과 구별합니다. 드문 부수는 관련 글자의 구성 예시로 배웁니다. 교정이 필요한 원문은 바꾼 표기와 나란히 남겨, 무엇을 왜 다르게 익히는지 확인할 수 있습니다.</p></section>
    <section className={styles.closing}><p className={styles.eyebrow}>START WITH FIVE</p><h2>오늘은 다섯 글자.<br/>내일은 그 다섯 글자부터.</h2><Link href="/premium/hanja-memory/read" className={styles.primary}>한자책 펼치기 →</Link></section>
  </main><footer className={styles.footer}><span>비법연구소 · 살아있는 정보책</span><span>2026.09.23 초판</span></footer></div>;
}
