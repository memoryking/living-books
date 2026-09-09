import { marked } from "marked";
import fs from "fs";
import path from "path";

interface BookMeta {
  id: string;
  title: string;
  emoji: string;
  subtitle: string;
}

export const PREMIUM_BOOKS: BookMeta[] = [
  {
    id: "diet-secrets",
    title: "다이어트 서바이벌 시스템",
    emoji: "🏋️",
    subtitle: "1,673명의 실패와 성공에서 뽑아낸 생존 가이드",
  },
  {
    id: "endocrine-disruptors",
    title: "생활 속 환경호르몬과 질병",
    emoji: "🧪",
    subtitle: "BPA Free의 함정부터 PFAS, 미세플라스틱까지",
  },
  {
    id: "declutter-clean",
    title: "정리와 청소의 기술",
    emoji: "🧹",
    subtitle: "서랍 하나부터 시작하는 살아있는 가이드",
  },
  {
    id: "glp1-guide",
    title: "약사가 알려주는 GLP-1 비만약 완전 가이드",
    emoji: "💊",
    subtitle: "오젬픽·위고비·마운자로 — 실제 경험 + 최신 의학 연구 기반",
  },
  {
    id: "slow-aging",
    title: "몸이 젊어지는 4주 저속노화 리셋",
    emoji: "🌿",
    subtitle: "식단·혈당·운동·수면 — 노화 속도를 되돌리는 28일 실전 프로그램",
  },
  {
    id: "love-skills",
    title: "밀당 없이 사랑받는 연애의 기술",
    emoji: "💕",
    subtitle: "애착·소통·관계 심리학 수업",
  },
  {
    id: "ai-sidejob",
    title: "하루 1시간, AI 부업 자동화 시스템",
    emoji: "🤖",
    subtitle: "퇴근 후 1시간, 수익 파이프라인 3개를 만드는 실전 가이드",
  },
  {
    id: "threads-marketing",
    title: "0팔로워로 시작하는 스레드 마케팅",
    emoji: "🧵",
    subtitle: "텍스트 한 줄로 성장하는 28일 공략집",
  },
  {
    id: "eisenhower-matrix",
    title: "일잘러의 비밀무기, 아이젠하워 매트릭스",
    emoji: "⏱️",
    subtitle: "하루 15분 결정 관리 시스템",
  },
  {
    id: "deep-focus",
    title: "딥포커스, 초집중의 기술",
    emoji: "🎯",
    subtitle: "3분마다 방해받는 시대의 집중력 시스템",
  },
];

interface Section {
  id: string;
  title: string;
  html: string;
}

function readBookSections(bookId: string): Section[] {
  const contentDir = path.join(
    process.cwd(),
    "data",
    bookId,
    "content"
  );
  const files = fs.readdirSync(contentDir).sort();
  const sections: Section[] = [];

  for (const file of files) {
    if (!file.endsWith(".md")) continue;
    const md = fs.readFileSync(path.join(contentDir, file), "utf-8");
    // Extract first heading as title
    const titleMatch = md.match(/^#\s+(.+)/m);
    const title = titleMatch ? titleMatch[1] : file.replace(".md", "");
    const sectionId = "eb-s" + sections.length;
    const html = marked.parse(md, { async: false }) as string;
    sections.push({ id: sectionId, title, html });
  }

  return sections;
}

const CROSS_SELL_BOOKS = [
  { id: "diet-secrets", emoji: "🏋️", title: "다이어트 서바이벌 시스템", sub: "1,673명 실전 데이터 기반" },
  { id: "endocrine-disruptors", emoji: "🧪", title: "생활 속 환경호르몬과 질병", sub: "20%만 바꿔도 80% 감소" },
  { id: "declutter-clean", emoji: "🧹", title: "정리와 청소의 기술", sub: "서랍 하나, 5분 타이머" },
  { id: "glp1-guide", emoji: "💊", title: "GLP-1 비만약 완전 가이드", sub: "41만 명 경험 + 약사 검증" },
  { id: "slow-aging", emoji: "🌿", title: "4주 저속노화 리셋", sub: "식단·혈당·운동·수면 28일 프로그램" },
  { id: "love-skills", emoji: "💕", title: "밀당 없이 사랑받는 연애의 기술", sub: "애착·소통·관계 심리학 수업" },
  { id: "ai-sidejob", emoji: "🤖", title: "AI 부업 자동화 시스템", sub: "하루 1시간, 수익 파이프라인 3개" },
  { id: "threads-marketing", emoji: "🧵", title: "0팔로워 스레드 마케팅", sub: "28일 공략집 + 훅 템플릿 30개" },
  { id: "eisenhower-matrix", emoji: "⏱️", title: "아이젠하워 매트릭스", sub: "하루 15분 결정 관리 시스템" },
  { id: "deep-focus", emoji: "🎯", title: "딥포커스, 초집중의 기술", sub: "3분마다 방해받는 시대의 집중력" },
];

function buildCrossSell(currentId: string): string {
  const others = CROSS_SELL_BOOKS.filter((b) => b.id !== currentId);
  return `<div class="eb-cross">
    <h3>이 가이드를 읽은 분들이 함께 본 책</h3>
    ${others
      .map(
        (b) => `<div class="eb-cross-item">
      <span class="eb-ci-emoji">${b.emoji}</span>
      <div>
        <div class="eb-ci-title">${escHtml(b.title)}</div>
        <div class="eb-ci-sub">${escHtml(b.sub)}</div>
      </div>
      <span class="eb-ci-price">1,000원</span>
    </div>`
      )
      .join("\n")}
  </div>`;
}

function buildWidgetHTML(book: BookMeta, sections: Section[]): string {
  // Build TOC
  const tocItems = sections
    .map(
      (s, i) =>
        `<li><a href="#${s.id}" onclick="ebNav('${s.id}');return false;">${i + 1}. ${escHtml(s.title)}</a></li>`
    )
    .join("\n        ");

  // Build content sections
  const contentSections = sections
    .map(
      (s) => `
      <div id="${s.id}" class="eb-section">
        ${s.html}
        <span class="eb-back" onclick="ebNav('eb-toc')">↑ 목차로</span>
      </div>`
    )
    .join("\n");

  return `<!-- ${escHtml(book.emoji)} ${escHtml(book.title)} — 아임웹 위젯용 -->
<style>
  .eb-viewer{font-family:'Pretendard',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;line-height:1.85;color:#333;max-width:780px;margin:0 auto;padding:0 16px 80px;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;transition:background .3s,color .3s}
  .eb-viewer.eb-sm{font-size:15px}
  .eb-viewer.eb-md{font-size:17px}
  .eb-viewer.eb-lg{font-size:20px}

  .eb-viewer.eb-dark{background:#1a1a2e;color:#e0e0e0}
  .eb-viewer.eb-dark .eb-bar{background:#1a1a2e;border-color:#333}
  .eb-viewer.eb-dark .eb-bar button{background:#2a2a3e;color:#ccc;border-color:#444}
  .eb-viewer.eb-dark .eb-bar button.active{background:#2563eb;color:#fff;border-color:#2563eb}
  .eb-viewer.eb-dark .eb-toc{background:#222;border-color:#333}
  .eb-viewer.eb-dark .eb-toc a{color:#60a5fa}
  .eb-viewer.eb-dark .eb-section{color:#d1d5db}
  .eb-viewer.eb-dark h1,.eb-viewer.eb-dark h2,.eb-viewer.eb-dark h3{color:#f3f4f6}
  .eb-viewer.eb-dark blockquote{background:#222;border-color:#3b82f6;color:#93c5fd}
  .eb-viewer.eb-dark th{background:#2a2a3e}
  .eb-viewer.eb-dark td,.eb-viewer.eb-dark th{border-color:#444}
  .eb-viewer.eb-dark tr:nth-child(even){background:#222}
  .eb-viewer.eb-dark code{background:#2a2a3e;color:#e0e0e0}
  .eb-viewer.eb-dark .eb-cross{background:#222;border-color:#333}

  .eb-progress{position:sticky;top:0;z-index:110;height:3px;background:#e5e7eb}
  .eb-progress-bar{height:100%;background:linear-gradient(90deg,#2563eb,#7c3aed);width:0%;transition:width .15s}
  .eb-viewer.eb-dark .eb-progress{background:#333}

  .eb-bar{position:sticky;top:3px;background:#fff;border-bottom:1px solid #eee;padding:10px 0;z-index:100;display:flex;justify-content:center;gap:8px;flex-wrap:wrap}
  .eb-bar button{padding:7px 18px;border:1px solid #d1d5db;background:#fff;border-radius:24px;cursor:pointer;font-size:14px;font-weight:600;color:#555;transition:all .2s}
  .eb-bar button:hover{border-color:#2563eb;color:#2563eb}
  .eb-bar button.active{background:#2563eb;color:#fff;border-color:#2563eb}

  .eb-float{position:fixed;bottom:24px;right:24px;background:#2563eb;color:#fff;padding:10px 18px;border-radius:50px;cursor:pointer;font-size:14px;font-weight:600;box-shadow:0 2px 12px rgba(37,99,235,.35);z-index:200;display:none;transition:opacity .2s;border:none}
  .eb-float:hover{background:#1d4ed8}

  .eb-toc{background:#f8f9fa;padding:20px 24px;border-radius:12px;margin:24px 0 32px;border:1px solid #e5e7eb}
  .eb-toc h2{margin:0 0 12px;font-size:1.1em;font-weight:700}
  .eb-toc ol{padding-left:20px;margin:0}
  .eb-toc li{margin:6px 0}
  .eb-toc a{color:#2563eb;text-decoration:none}
  .eb-toc a:hover{text-decoration:underline}

  .eb-header{text-align:center;padding:32px 0 8px}
  .eb-header .eb-emoji{font-size:48px;display:block;margin-bottom:12px}
  .eb-header h1{font-size:1.6em;font-weight:800;margin:0 0 8px;color:#111}
  .eb-header p{color:#888;font-size:.95em;margin:0}

  .eb-section{margin-bottom:48px}
  .eb-viewer h1{font-size:1.45em;font-weight:700;margin:2em 0 .8em;color:#111;border-bottom:2px solid #e5e7eb;padding-bottom:.4em}
  .eb-viewer h2{font-size:1.25em;font-weight:700;margin:1.8em 0 .7em;color:#222}
  .eb-viewer h3{font-size:1.1em;font-weight:600;margin:1.5em 0 .5em;color:#333}
  .eb-viewer h4{font-size:1em;font-weight:600;margin:1.2em 0 .4em;color:#444}
  .eb-viewer p{margin:.7em 0}
  .eb-viewer blockquote{border-left:3px solid #2563eb;padding:12px 16px;margin:1em 0;background:#eff6ff;border-radius:0 8px 8px 0;color:#1e40af}
  .eb-viewer blockquote em{font-style:italic;color:#3b82f6}
  .eb-viewer ul,.eb-viewer ol{padding-left:24px;margin:.8em 0}
  .eb-viewer li{margin:.35em 0}
  .eb-viewer table{width:100%;border-collapse:collapse;margin:1em 0;font-size:.9em;overflow-x:auto;display:block}
  .eb-viewer th,.eb-viewer td{border:1px solid #d1d5db;padding:8px 12px;text-align:left}
  .eb-viewer th{background:#f3f4f6;font-weight:600}
  .eb-viewer tr:nth-child(even){background:#fafafa}
  .eb-viewer hr{border:none;border-top:1px solid #e5e7eb;margin:2em 0}
  .eb-viewer strong{font-weight:700;color:#111}
  .eb-viewer code{background:#f3f4f6;padding:2px 6px;border-radius:4px;font-size:.9em}
  .eb-viewer img{max-width:100%;height:auto;border-radius:8px}
  .eb-viewer input[type="checkbox"]{margin-right:6px}

  .eb-back{display:inline-block;margin:24px 0 8px;color:#2563eb;font-size:14px;cursor:pointer;font-weight:500}
  .eb-back:hover{text-decoration:underline}

  .eb-cross{margin:48px 0 0;padding:32px 24px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:16px;text-align:center}
  .eb-cross h3{font-size:14px;font-weight:600;color:#9ca3af;margin:0 0 16px}
  .eb-cross-item{display:flex;align-items:center;gap:14px;padding:14px 16px;margin:8px 0;background:#fff;border-radius:10px;border:1px solid #f3f4f6;text-align:left;cursor:default}
  .eb-cross-item .eb-ci-emoji{font-size:28px;flex-shrink:0}
  .eb-cross-item .eb-ci-title{font-size:14px;font-weight:700;color:#111}
  .eb-cross-item .eb-ci-sub{font-size:12px;color:#6b7280;margin-top:2px}
  .eb-cross-item .eb-ci-price{margin-left:auto;font-size:13px;font-weight:700;color:#2563eb;flex-shrink:0}

  @media(max-width:640px){
    .eb-viewer{padding:0 12px 80px}
    .eb-float{bottom:16px;right:16px;padding:9px 15px;font-size:13px}
    .eb-viewer table{font-size:.8em}
    .eb-toc{padding:16px 18px}
  }
</style>

<div id="eb-root" class="eb-viewer eb-md">
  <div class="eb-progress"><div id="eb-prog-bar" class="eb-progress-bar"></div></div>
  <div class="eb-bar">
    <button data-size="sm" onclick="ebFont('sm',this)">가-</button>
    <button data-size="md" class="active" onclick="ebFont('md',this)">가</button>
    <button data-size="lg" onclick="ebFont('lg',this)">가+</button>
    <button id="eb-dark-btn" onclick="ebDark()" style="margin-left:8px">🌙</button>
  </div>

  <div class="eb-header">
    <span class="eb-emoji">${book.emoji}</span>
    <h1>${escHtml(book.title)}</h1>
    <p>${escHtml(book.subtitle)}</p>
  </div>

  <div id="eb-toc" class="eb-toc">
    <h2>📋 목차</h2>
    <ol>
      ${tocItems}
    </ol>
  </div>

  ${contentSections}

  ${buildCrossSell(book.id)}
</div>

<button id="eb-float-toc" class="eb-float" onclick="ebNav('eb-toc')">📋 목차</button>

<script>
(function(){
  var root=document.getElementById('eb-root');
  var fb=document.getElementById('eb-float-toc');
  var toc=document.getElementById('eb-toc');
  var progBar=document.getElementById('eb-prog-bar');

  window.ebFont=function(s,btn){
    root.className=root.className.replace(/eb-(sm|md|lg)/g,'eb-'+s);
    root.querySelectorAll('.eb-bar button[data-size]').forEach(function(b){b.classList.remove('active')});
    if(btn)btn.classList.add('active');
  };

  window.ebDark=function(){
    root.classList.toggle('eb-dark');
    var btn=document.getElementById('eb-dark-btn');
    btn.textContent=root.classList.contains('eb-dark')?'☀️':'🌙';
  };

  window.ebNav=function(id){
    var el=document.getElementById(id);
    if(el)el.scrollIntoView({behavior:'smooth',block:'start'});
  };

  var lastScroll=0;
  function onScroll(){
    var now=Date.now();
    if(now-lastScroll<50)return;
    lastScroll=now;
    // floating toc
    if(toc){var r=toc.getBoundingClientRect();fb.style.display=r.bottom<0?'block':'none';}
    // progress bar
    var h=document.documentElement.scrollHeight-window.innerHeight;
    if(h>0&&progBar){progBar.style.width=Math.min(100,Math.round(window.scrollY/h*100))+'%';}
  }
  window.addEventListener('scroll',onScroll);
  onScroll();
})();
</script>`;
}

function escHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function generateWidget(bookId: string): string | null {
  const book = PREMIUM_BOOKS.find((b) => b.id === bookId);
  if (!book) return null;

  const sections = readBookSections(bookId);
  if (sections.length === 0) return null;

  return buildWidgetHTML(book, sections);
}

export function generateAllWidgets(): { book: BookMeta; html: string }[] {
  return PREMIUM_BOOKS.map((book) => {
    const sections = readBookSections(book.id);
    return { book, html: buildWidgetHTML(book, sections) };
  });
}
