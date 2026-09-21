import { marked } from "marked";
import fs from "fs";
import path from "path";

// ~ 가 취소선으로 렌더링되는 것 방지
function escapeTildes(md: string): string {
  return md.replace(/~/g, "&#126;");
}

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
  {
    id: "storytelling",
    title: "사람의 마음을 휘어잡는 스토리텔링의 기술",
    emoji: "📖",
    subtitle: "브랜드 스토리로 팬을 만드는 법",
  },
  {
    id: "customer-retention",
    title: "한번 온 고객을 평생고객으로 만들기",
    emoji: "🤝",
    subtitle: "유지 전략 — 이탈 방지부터 추천 엔진까지",
  },
  {
    id: "launch-storytelling",
    title: "완판의 치트키, 런칭 스토리텔링의 비밀",
    emoji: "🚀",
    subtitle: "프리런칭부터 수익화 루프까지",
  },
  {
    id: "money-psychology",
    title: "사업 성패를 좌우하는 돈의 심리학",
    emoji: "💰",
    subtitle: "감정에 흔들리지 않는 재정 판단력",
  },
  {
    id: "idea-validation",
    title: "망하지 않는 사업 아이디어 검증법",
    emoji: "🔬",
    subtitle: "시장 조사부터 MVP·피벗까지",
  },
  {
    id: "micro-audience",
    title: "팔로워 1,000명으로 평생 먹고 사는 법",
    emoji: "👥",
    subtitle: "100명의 진짜 팬이면 충분합니다",
  },
  {
    id: "writing-formula",
    title: "뇌에 박히는 글쓰기 공식",
    emoji: "✍️",
    subtitle: "읽히고 팔리는 글을 쓰는 과학적 시스템",
  },
  {
    id: "sns-growth",
    title: "돈 한푼 들이지 않고 SNS 계정 키우기",
    emoji: "📱",
    subtitle: "광고비 0원, 60일 성장 전략",
  },
  {
    id: "personal-branding",
    title: "사업가를 위한 퍼스널 브랜딩 가이드",
    emoji: "🎤",
    subtitle: "UVP 발견부터 수익화까지 90일 로드맵",
  },
  {
    id: "business-model",
    title: "수익성을 극대화하는 비즈니스 모델 설계법",
    emoji: "📊",
    subtitle: "돈을 버는 구조를 설계하는 완전 가이드",
  },
  {
    id: "selling-invisible",
    title: "만져볼 수 없는 상품을 완판시키는 설득 시스템",
    emoji: "💎",
    subtitle: "무형의 가치를 매출로 바꾸는 실전 가이드",
  },
  {
    id: "diabetes-guide",
    title: "약사가 알려주는 당뇨에 대한 모든 것",
    emoji: "🩸",
    subtitle: "진단부터 약물·식단·생활습관까지",
  },
  {
    id: "odyssey-life",
    title: "오디세이아, 3,000년 전 영웅이 알려주는 인생 항해술",
    emoji: "⚓",
    subtitle: "리더십·인내·유혹·귀환의 심리학",
  },
  {
    id: "hypertension-guide",
    title: "약사가 알려주는 혈압에 대한 모든 것",
    emoji: "🫀",
    subtitle: "5대 약물·DASH 식단·합병증 예방",
  },
  {
    id: "cholesterol-guide",
    title: "약사가 알려주는 고지혈증에 대한 모든 것",
    emoji: "🧬",
    subtitle: "스타틴·식이요법·콜레스테롤 관리",
  },
  {
    id: "otc-medicine-guide",
    title: "집에서 알아야 할 상비약 완전 가이드",
    emoji: "💊",
    subtitle: "타이레놀·감기약·소화제·연고·구충제",
  },
  {
    id: "speaking-skills",
    title: "말 잘하는 사람들의 비밀",
    emoji: "🎙️",
    subtitle: "대화·설득·스피치의 심리학",
  },
  {
    id: "negotiation-skills",
    title: "원하는 것을 얻는 협상의 기술",
    emoji: "🤝",
    subtitle: "연봉·계약·일상 실전 협상",
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
    const html = marked.parse(escapeTildes(md), { async: false }) as string;
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
  { id: "storytelling", emoji: "📖", title: "스토리텔링의 기술", sub: "브랜드 스토리로 팬을 만드는 법" },
  { id: "customer-retention", emoji: "🤝", title: "평생고객 만들기", sub: "이탈 방지 + 추천 엔진" },
  { id: "launch-storytelling", emoji: "🚀", title: "완판의 런칭 스토리텔링", sub: "프리런칭→수익화 루프" },
  { id: "money-psychology", emoji: "💰", title: "돈의 심리학", sub: "CLEAR·IMPACT 모델" },
  { id: "idea-validation", emoji: "🔬", title: "사업 아이디어 검증법", sub: "시장조사→MVP→피벗" },
  { id: "micro-audience", emoji: "👥", title: "팔로워 1,000명 수익화", sub: "100명 진짜 팬이면 충분" },
  { id: "writing-formula", emoji: "✍️", title: "뇌에 박히는 글쓰기 공식", sub: "호기심 갭+치알디니 6원칙" },
  { id: "sns-growth", emoji: "📱", title: "0원 SNS 계정 키우기", sub: "60일 성장 로드맵" },
  { id: "personal-branding", emoji: "🎤", title: "퍼스널 브랜딩 가이드", sub: "UVP→수익화 90일 로드맵" },
  { id: "business-model", emoji: "📊", title: "비즈니스 모델 설계법", sub: "구독·SaaS·마켓플레이스" },
  { id: "selling-invisible", emoji: "💎", title: "무형 상품 완판 설득법", sub: "디지털상품·강의·컨설팅" },
  { id: "diabetes-guide", emoji: "🩸", title: "당뇨 완전 가이드", sub: "약물·식단·혈당·합병증" },
  { id: "odyssey-life", emoji: "⚓", title: "오디세이아 인생 항해술", sub: "리더십·인내·유혹·귀환" },
  { id: "hypertension-guide", emoji: "🫀", title: "혈압 완전 가이드", sub: "5대 약물·DASH·합병증" },
  { id: "cholesterol-guide", emoji: "🧬", title: "고지혈증 완전 가이드", sub: "스타틴·식이요법·LDL" },
  { id: "otc-medicine-guide", emoji: "💊", title: "상비약 완전 가이드", sub: "타이레놀·감기약·소화제" },
  { id: "speaking-skills", emoji: "🎙️", title: "말 잘하는 사람들의 비밀", sub: "대화·설득·스피치" },
  { id: "negotiation-skills", emoji: "🤝", title: "협상의 기술", sub: "연봉·계약·일상 협상" },
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

  const CDN = "https://living-books-beta.vercel.app/widget";

  return `<!-- ${escHtml(book.emoji)} ${escHtml(book.title)} — 아임웹 위젯용 -->
<link rel="stylesheet" href="${CDN}/eb-style.css?v=5">

<div id="eb-root" class="eb-viewer eb-md">
  <div class="eb-progress"><div id="eb-prog-bar" class="eb-progress-bar"></div></div>
  <div class="eb-bar">
    <button data-size="sm" onclick="ebFont('sm',this)">가-</button>
    <button data-size="md" class="active" onclick="ebFont('md',this)">가</button>
    <button data-size="lg" onclick="ebFont('lg',this)">가+</button>
    <button id="eb-dark-btn" onclick="ebDark()" style="margin-left:8px">🌙</button>
    <button id="eb-mode-btn" onclick="ebToggleMode()" style="margin-left:8px">📖</button>
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

  <div id="eb-content" class="eb-content">
  ${contentSections}

  ${buildCrossSell(book.id)}
  </div>

  <button id="eb-arrow-l" class="eb-arrow eb-arrow-l" onclick="ebPrevPage()">‹</button>
  <button id="eb-arrow-r" class="eb-arrow eb-arrow-r" onclick="ebNextPage()">›</button>

  <div id="eb-page-bar" class="eb-page-bar">
    <span id="eb-page-info">1 / 1</span>
    <button onclick="ebShowToc()">📋 목차</button>
  </div>

  <div id="eb-toc-overlay" class="eb-toc-overlay">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
      <h2 style="margin:0;font-size:1.2em;font-weight:700;">📋 목차</h2>
      <button onclick="ebHideToc()" style="border:none;background:none;font-size:24px;cursor:pointer;color:#666;">✕</button>
    </div>
    <ol style="padding-left:20px;">
      ${tocItems}
    </ol>
  </div>
</div>

<button id="eb-float-toc" class="eb-float" onclick="ebNav('eb-toc')">📋 목차</button>

<script src="${CDN}/eb-script.js?v=5"></script>`;
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

export function getBookIds(): string[] {
  return PREMIUM_BOOKS.map((b) => b.id);
}
