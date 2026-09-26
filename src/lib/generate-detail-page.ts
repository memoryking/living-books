/**
 * 아임웹 쇼핑 상세페이지 HTML 생성기
 * 각 책마다 고유한 스토리텔링·디자인으로 구성
 *
 * 빌더 함수들은 파일 크기 제한으로 별도 파일로 분리:
 *   detail-builders-1.ts — 1~9번 (diet-secrets ~ eisenhower-matrix)
 *   detail-builders-2.ts — 10~18번 (deep-focus ~ sns-growth)
 *   detail-builders-3.ts — 19~28번 (personal-branding ~ negotiation-skills)
 */

import { hanjaDetails } from './hanja-marketing';
import {
  buildDietSecrets,
  buildEndocrineDisruptors,
  buildDeclutterClean,
  buildGlp1Guide,
  buildSlowAging,
  buildAiSidejob,
  buildThreadsMarketing,
  buildLoveSkills,
  buildEisenhowerMatrix,
} from "./detail-builders-1";

import {
  buildDeepFocus,
  buildStorytelling,
  buildCustomerRetention,
  buildLaunchStorytelling,
  buildMoneyPsychology,
  buildIdeaValidation,
  buildMicroAudience,
  buildWritingFormula,
  buildSnsGrowth,
} from "./detail-builders-2";

import {
  buildPersonalBranding,
  buildBusinessModel,
  buildSellingInvisible,
  buildDiabetesGuide,
  buildOdysseyLife,
  buildHypertensionGuide,
  buildCholesterolGuide,
  buildOtcMedicineGuide,
  buildSpeakingSkills,
  buildNegotiationSkills,
  buildSayingNo,
} from "./detail-builders-3";


function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/* ═══════════════════════════════════════════
   공통 섹션 빌더 (다양한 레이아웃)
   ═══════════════════════════════════════════ */

/** 모바일 반응형 스타일 — 각 상세페이지 상단에 삽입 */
export const mobileStyles = `<style>
  @media(max-width:640px){
    .dp-wrap section{padding-left:20px!important;padding-right:20px!important;padding-top:48px!important;padding-bottom:48px!important}
    .dp-wrap h2{font-size:26px!important}
    .dp-wrap [style*="font-size:42"]{font-size:26px!important;line-height:1.3!important;padding:6px 12px!important}
    .dp-wrap [style*="font-size:40px"]{font-size:28px!important}
    .dp-wrap [style*="font-size:32px"]{font-size:24px!important}
    .dp-wrap [style*="font-size:28px"]{font-size:22px!important}
    .dp-wrap [style*="font-size:24px"]{font-size:20px!important}
    .dp-wrap [style*="flex:1 1 280px"]{flex:1 1 100%!important;max-width:100%!important}
    .dp-wrap [style*="flex:1 1 240px"]{flex:1 1 100%!important;max-width:100%!important}
    .dp-wrap [style*="flex:1 1 220px"]{flex:1 1 100%!important;max-width:100%!important}
    .dp-wrap [style*="flex:1 1 200px"]{flex:1 1 45%!important;max-width:48%!important}
    .dp-wrap blockquote,.dp-wrap [style*="max-width:580px"],.dp-wrap [style*="max-width:600px"],.dp-wrap [style*="max-width:620px"]{max-width:100%!important}
  }
</style>`;

/** 풀폭 섹션 래퍼 */
export const sec = (bg: string, extra = "") =>
  `display:block;box-sizing:border-box;width:100%;max-width:860px;margin:0 auto;padding:72px 40px;text-align:center;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;${bg}${extra}`;

/** 큰 숫자 강조 카드 */
export function statGrid(items: { num: string; label: string; color: string }[]): string {
  return `<div style="display:flex;flex-wrap:wrap;justify-content:center;gap:20px;margin:32px 0;">
${items
  .map(
    (i) => `<div style="flex:1 1 200px;max-width:240px;padding:28px 20px;background:#fff;border-radius:16px;box-shadow:0 2px 12px rgba(0,0,0,.06);">
      <div style="font-size:40px;font-weight:800;color:${i.color};line-height:1.1;margin-bottom:8px;">${i.num}</div>
      <div style="font-size:14px;color:#6b7280;">${esc(i.label)}</div>
    </div>`
  )
  .join("\n")}
</div>`;
}

/** Reddit 스타일 인용 */
export function redditQuote(text: string, sub: string): string {
  return `<div style="max-width:580px;margin:20px auto;padding:24px 28px;background:#fff;border-radius:16px;border-left:4px solid #ff4500;text-align:left;box-shadow:0 1px 8px rgba(0,0,0,.05);">
  <div style="font-size:15px;line-height:1.75;color:#374151;font-style:italic;">"${esc(text)}"</div>
  <div style="margin-top:12px;font-size:12px;color:#9ca3af;">— r/${esc(sub)}</div>
</div>`;
}

/** Before → After 비교 */
export function beforeAfter(
  befores: string[],
  afters: string[],
  beforeLabel: string,
  afterLabel: string,
  beforeColor: string,
  afterColor: string
): string {
  return `<div style="display:flex;flex-wrap:wrap;gap:20px;justify-content:center;margin:32px 0;">
  <div style="flex:1 1 280px;max-width:380px;padding:32px 28px;background:${beforeColor};border-radius:16px;text-align:left;">
    <div style="font-size:18px;font-weight:700;margin-bottom:16px;color:#991b1b;">${esc(beforeLabel)}</div>
    ${befores.map((b) => `<div style="padding:8px 0;font-size:15px;line-height:1.6;color:#7f1d1d;border-bottom:1px solid rgba(0,0,0,.06);">✕ ${esc(b)}</div>`).join("\n")}
  </div>
  <div style="flex:1 1 280px;max-width:380px;padding:32px 28px;background:${afterColor};border-radius:16px;text-align:left;">
    <div style="font-size:18px;font-weight:700;margin-bottom:16px;color:#166534;">${esc(afterLabel)}</div>
    ${afters.map((a) => `<div style="padding:8px 0;font-size:15px;line-height:1.6;color:#14532d;border-bottom:1px solid rgba(0,0,0,.06);">✓ ${esc(a)}</div>`).join("\n")}
  </div>
</div>`;
}

/** 체크리스트 스타일 아이템 */
export function checkList(items: string[], emoji: string, bg: string): string {
  return items
    .map(
      (item) =>
        `<div style="display:flex;align-items:center;gap:14px;padding:16px 20px;margin:10px auto;max-width:600px;background:${bg};border-radius:12px;text-align:left;">
    <span style="font-size:20px;flex-shrink:0;">${emoji}</span>
    <span style="font-size:15px;line-height:1.6;color:#1f2937;">${esc(item)}</span>
  </div>`
    )
    .join("\n");
}

/** 목차 아이템 — 하이라이트 표시 가능 */
export function tocItem(num: string, title: string, highlight: boolean, accent: string): string {
  const bg = highlight
    ? `background:${accent};color:#fff;font-weight:700;`
    : "background:#f9fafb;color:#374151;";
  return `<div style="display:flex;align-items:center;gap:14px;padding:14px 20px;margin:8px auto;max-width:600px;border-radius:10px;text-align:left;${bg}">
  <span style="font-size:13px;font-weight:800;opacity:.6;width:28px;">${num}</span>
  <span style="font-size:15px;line-height:1.5;">${esc(title)}${highlight ? " ⭐" : ""}</span>
</div>`;
}

/** FAQ 아이템 */
export function faqItem(q: string, a: string): string {
  return `<div style="max-width:600px;margin:12px auto;padding:20px 24px;background:#fff;border-radius:12px;text-align:left;box-shadow:0 1px 4px rgba(0,0,0,.04);">
  <div style="font-size:15px;font-weight:700;color:#111827;margin-bottom:8px;">${esc(q)}</div>
  <div style="font-size:14px;line-height:1.7;color:#6b7280;">${esc(a)}</div>
</div>`;
}

/** 큰 텍스트 헤드라인 */
export function bigTitle(line1: string, line2?: string, color = "#111827"): string {
  const text = line2 ? `${esc(line1)}<br>${esc(line2)}` : esc(line1);
  return `<h2 style="margin:0 0 16px;font-size:clamp(28px,5vw,44px);font-weight:800;line-height:1.3;color:${color};letter-spacing:-0.5px;">${text}</h2>`;
}

export function subtitle(text: string, color = "#6b7280"): string {
  return `<p style="margin:0 0 32px;font-size:17px;line-height:1.7;color:${color};">${esc(text)}</p>`;
}

export function label(text: string, color = "#9ca3af"): string {
  return `<div style="font-size:12px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:${color};margin-bottom:12px;">${esc(text)}</div>`;
}

export function divider(): string {
  return `<div style="width:60px;height:3px;background:#e5e7eb;margin:0 auto 0;border-radius:2px;"></div>`;
}

export function spacer(h = 40): string {
  return `<div style="height:${h}px;"></div>`;
}

/** 가격 뱃지 — 취소선 정가 + 특가 */
export function priceBadge(originalPrice: string, salePrice: string, note: string): string {
  return `<div style="display:inline-flex;align-items:center;gap:12px;padding:12px 28px;background:#fff;border-radius:999px;box-shadow:0 2px 12px rgba(0,0,0,.08);margin:16px 0;">
  <span style="font-size:15px;color:#9ca3af;text-decoration:line-through;">${esc(originalPrice)}</span>
  <span style="font-size:28px;font-weight:800;color:#dc2626;">${esc(salePrice)}</span>
  <span style="font-size:11px;color:#fff;background:#dc2626;padding:3px 10px;border-radius:20px;font-weight:700;">${esc(note)}</span>
</div>`;
}

/** 긴급성 띠배너 — 히어로 하단 */
export function urgencyBanner(): string {
  return `<div style="max-width:500px;margin:24px auto 0;padding:14px 20px;background:linear-gradient(135deg,#fef3c7,#fde68a);border-radius:10px;border:1px solid #f59e0b;">
  <span style="font-size:14px;font-weight:600;color:#92400e;">⏰ 출시 특가 — 이 가격은 곧 인상될 수 있습니다</span>
</div>`;
}

/** CTA 버튼 블록 — 취소선 가격 포함 */
export function ctaBlock(emoji: string, headline1: string, headline2: string, subtext: string, accent: string): string {
  return `<section style="${sec(`background:linear-gradient(160deg,${accent},${accent}cc);`)}padding:80px 40px;">
    <div style="font-size:48px;margin-bottom:16px;">${emoji}</div>
    <h2 style="font-size:clamp(24px,4.5vw,38px);font-weight:800;color:#fff;margin:0 0 16px;line-height:1.3;">${esc(headline1)}<br>${esc(headline2)}</h2>
    <p style="font-size:16px;color:rgba(255,255,255,.8);margin:0 0 8px;line-height:1.7;">${esc(subtext)}</p>
    <div style="margin:16px 0 24px;">
      <span style="font-size:16px;color:rgba(255,255,255,.5);text-decoration:line-through;">정가 3,900원</span>
      <span style="font-size:14px;color:rgba(255,255,255,.6);margin:0 8px;">→</span>
      <span style="font-size:28px;font-weight:800;color:#fff;">1,000원</span>
      <span style="font-size:12px;color:#fde68a;margin-left:8px;font-weight:600;">출시 특가</span>
    </div>
    <div style="display:inline-block;padding:16px 48px;background:#fff;color:${accent};font-size:18px;font-weight:700;border-radius:999px;box-shadow:0 4px 16px rgba(0,0,0,.15);">지금 시작하기</div>
    ${spacer(16)}
    <div style="font-size:13px;color:rgba(255,255,255,.5);">1개월 열람 · 계속 업데이트 · 비법연구소</div>
  </section>`;
}

/** 풀 미리보기 섹션 — 실제 본문 + 섹션 헤딩 목록 */
export function fullPreview(
  chapterNum: string,
  chapterTitle: string,
  sectionHeadings: string[],
  contentHtml: string,
  accentColor: string,
  bgGradient: string
): string {
  return `
  <section style="${sec(`background:${bgGradient};`)}">
    ${label("PREVIEW · 본문 미리보기")}
    ${bigTitle("이런 내용이 들어있습니다")}
    ${subtitle(`챕터 ${chapterNum}에서 발췌 — "${chapterTitle}"`)}

    <!-- 이 챕터의 섹션 목록 -->
    <div style="max-width:480px;margin:0 auto 28px;padding:20px 24px;background:rgba(255,255,255,.7);border-radius:12px;text-align:left;border:1px solid rgba(0,0,0,.06);">
      <div style="font-size:12px;font-weight:700;color:${accentColor};margin-bottom:10px;">📂 이 챕터에 포함된 내용</div>
      ${sectionHeadings.map((h, i) => `<div style="padding:4px 0;font-size:13px;color:#4b5563;${i === 0 ? "font-weight:600;" : ""}">${i === 0 ? "▶ " : "· "}${esc(h)}</div>`).join("\n")}
    </div>

    <!-- 실제 본문 발췌 -->
    <div style="max-width:620px;margin:0 auto;padding:36px 32px;background:#fff;border-radius:20px;text-align:left;box-shadow:0 4px 24px rgba(0,0,0,.07);line-height:1.85;font-size:15px;color:#374151;position:relative;">
      <div style="position:absolute;top:-14px;left:50%;transform:translateX(-50%);background:${accentColor};color:#fff;font-size:12px;font-weight:700;padding:6px 16px;border-radius:20px;">실제 본문</div>
      ${contentHtml}
      <div style="margin-top:24px;padding-top:16px;border-top:1px solid #e5e7eb;text-align:center;">
        <span style="font-size:13px;color:#9ca3af;">이 내용은 전체 가이드의 일부입니다 · 10개 챕터 + 보너스 5개</span>
      </div>
    </div>

    <!-- 블러 효과 안내 -->
    <div style="margin-top:24px;font-size:14px;color:${accentColor};font-weight:600;">
      ↓ 나머지 내용은 가이드에서 확인하세요
    </div>
  </section>`;
}

/** 가격 앵커링 섹션 */
export function priceAnchor(
  comparisons: { what: string; price: string; note: string }[],
  ourPrice: string,
  ourNote: string,
  accent: string
): string {
  return `<div style="max-width:600px;margin:32px auto;">
${comparisons
  .map(
    (c) => `<div style="display:flex;justify-content:space-between;align-items:center;padding:14px 20px;margin:6px 0;background:#f9fafb;border-radius:10px;">
    <div>
      <span style="font-size:15px;color:#6b7280;">${esc(c.what)}</span>
      <span style="font-size:12px;color:#9ca3af;margin-left:8px;">${esc(c.note)}</span>
    </div>
    <span style="font-size:15px;color:#9ca3af;text-decoration:line-through;">${esc(c.price)}</span>
  </div>`
  )
  .join("\n")}
  <div style="display:flex;justify-content:space-between;align-items:center;padding:18px 24px;margin:12px 0 0;background:${accent};border-radius:12px;">
    <div>
      <span style="font-size:17px;font-weight:700;color:#fff;">이 가이드</span>
      <span style="font-size:13px;color:rgba(255,255,255,.8);margin-left:8px;">${esc(ourNote)}</span>
    </div>
    <span style="font-size:24px;font-weight:800;color:#fff;">${esc(ourPrice)}</span>
  </div>
</div>`;
}

/** 중간 CTA 배너 */
export function midCta(text: string, accent: string): string {
  return `<div style="max-width:600px;margin:40px auto;padding:24px 32px;background:linear-gradient(135deg,${accent},${accent}dd);border-radius:16px;text-align:center;">
  <p style="font-size:17px;font-weight:700;color:#fff;margin:0 0 4px;">${esc(text)}</p>
  <p style="font-size:13px;color:rgba(255,255,255,.7);margin:0;">↓ 아래에서 계속 읽어보세요</p>
</div>`;
}

/** 소셜프루프 띠배너 */
export function proofBanner(items: string[], bg: string, color: string): string {
  return `<div style="display:flex;flex-wrap:wrap;justify-content:center;gap:24px;padding:20px;background:${bg};border-radius:12px;margin:24px 0;">
${items
  .map(
    (item) =>
      `<span style="font-size:13px;font-weight:600;color:${color};">${esc(item)}</span>`
  )
  .join("\n")}
</div>`;
}

/** 카테고리 매핑 */
const BOOK_CATEGORIES: Record<string, string> = {
  "diet-secrets": "건강·생활",
  "endocrine-disruptors": "건강·생활",
  "declutter-clean": "건강·생활",
  "glp1-guide": "건강·생활",
  "slow-aging": "건강·생활",
  "diabetes-guide": "건강·생활",
  "hypertension-guide": "건강·생활",
  "cholesterol-guide": "건강·생활",
  "otc-medicine-guide": "건강·생활",
  "love-skills": "관계·소통",
  "speaking-skills": "관계·소통",
  "negotiation-skills": "관계·소통",
  "saying-no": "관계·소통",
  "ai-sidejob": "비즈니스·부업",
  "threads-marketing": "비즈니스·부업",
  "sns-growth": "비즈니스·부업",
  "micro-audience": "비즈니스·부업",
  "selling-invisible": "비즈니스·부업",
  "storytelling": "비즈니스·부업",
  "customer-retention": "비즈니스·부업",
  "launch-storytelling": "비즈니스·부업",
  "business-model": "비즈니스·부업",
  "writing-formula": "자기계발·생산성",
  "eisenhower-matrix": "자기계발·생산성",
  "deep-focus": "자기계발·생산성",
  "money-psychology": "자기계발·생산성",
  "idea-validation": "자기계발·생산성",
  "personal-branding": "자기계발·생산성",
  "odyssey-life": "인문학",
};

/** 크로스셀 섹션 (카테고리별 그룹) */
export function crossSell(
  currentId: string,
  books: { id: string; emoji: string; title: string; oneLiner: string }[]
): string {
  const others = books.filter((b) => b.id !== currentId);
  const currentCat = BOOK_CATEGORIES[currentId] || "";

  // 같은 카테고리 먼저, 나머지는 카테고리별 그룹
  const sameCat = others.filter((b) => BOOK_CATEGORIES[b.id] === currentCat);
  const otherCats: Record<string, typeof others> = {};
  for (const b of others) {
    const cat = BOOK_CATEGORIES[b.id] || "기타";
    if (cat === currentCat) continue;
    if (!otherCats[cat]) otherCats[cat] = [];
    otherCats[cat].push(b);
  }

  function renderGroup(title: string, items: typeof others): string {
    return `<div style="margin-bottom:20px;">
    <p style="font-size:12px;font-weight:700;color:#6b7280;margin:0 0 8px;letter-spacing:1px;">${esc(title)}</p>
${items
  .map(
    (b) => `<div style="display:flex;align-items:center;gap:14px;padding:12px 16px;margin:6px 0;background:#fff;border-radius:10px;border:1px solid #f3f4f6;">
      <span style="font-size:28px;flex-shrink:0;">${b.emoji}</span>
      <div style="text-align:left;min-width:0;">
        <div style="font-size:14px;font-weight:700;color:#111827;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${esc(b.title)}</div>
        <div style="font-size:12px;color:#6b7280;margin-top:1px;">${esc(b.oneLiner)}</div>
      </div>
      <span style="margin-left:auto;font-size:13px;font-weight:700;color:#2563eb;flex-shrink:0;">1,000원</span>
    </div>`
  )
  .join("\n")}
  </div>`;
  }

  let html = `<div style="max-width:600px;margin:32px auto;">
  <p style="font-size:15px;font-weight:700;color:#374151;margin-bottom:20px;text-align:center;">📚 이런 책도 함께 읽어보세요</p>`;

  if (sameCat.length > 0) {
    html += renderGroup(`같은 주제 — ${currentCat}`, sameCat);
  }
  for (const [cat, items] of Object.entries(otherCats)) {
    html += renderGroup(cat, items);
  }
  html += `</div>`;
  return html;
}

export const ALL_BOOKS_FOR_CROSSSELL = [
  { id: "diet-secrets", emoji: "🏋️", title: "다이어트 서바이벌 시스템", oneLiner: "1,673명의 실전 데이터 기반 생존 가이드" },
  { id: "endocrine-disruptors", emoji: "🧪", title: "생활 속 환경호르몬과 질병", oneLiner: "20%만 바꿔도 80% 노출 감소" },
  { id: "declutter-clean", emoji: "🧹", title: "정리와 청소의 기술", oneLiner: "서랍 하나, 5분 타이머로 시작" },
  { id: "glp1-guide", emoji: "💊", title: "GLP-1 비만약 완전 가이드", oneLiner: "41만 명 경험 + 약사가 직접 정리" },
  { id: "slow-aging", emoji: "🌿", title: "4주 저속노화 리셋", oneLiner: "식단·혈당·운동·수면 28일 프로그램" },
  { id: "love-skills", emoji: "💕", title: "밀당 없이 사랑받는 연애의 기술", oneLiner: "애착·소통·관계 심리학 수업" },
  { id: "ai-sidejob", emoji: "🤖", title: "AI 부업 자동화 시스템", oneLiner: "하루 1시간, 수익 파이프라인 3개" },
  { id: "threads-marketing", emoji: "🧵", title: "0팔로워 스레드 마케팅", oneLiner: "28일 공략집 + 훅 템플릿 30개" },
  { id: "eisenhower-matrix", emoji: "⏱️", title: "아이젠하워 매트릭스", oneLiner: "하루 15분 결정 관리 시스템" },
  { id: "deep-focus", emoji: "🎯", title: "딥포커스, 초집중의 기술", oneLiner: "3분마다 방해받는 시대의 집중력" },
  { id: "storytelling", emoji: "📖", title: "스토리텔링의 기술", oneLiner: "브랜드 스토리로 팬을 만드는 법" },
  { id: "customer-retention", emoji: "🤝", title: "평생고객 만들기", oneLiner: "이탈 방지 + 추천 엔진" },
  { id: "launch-storytelling", emoji: "🚀", title: "완판의 런칭 스토리텔링", oneLiner: "프리런칭→수익화 루프" },
  { id: "money-psychology", emoji: "💰", title: "돈의 심리학", oneLiner: "CLEAR·IMPACT 모델" },
  { id: "idea-validation", emoji: "🔬", title: "사업 아이디어 검증법", oneLiner: "시장조사→MVP→피벗" },
  { id: "micro-audience", emoji: "👥", title: "팔로워 1,000명 수익화", oneLiner: "100명 진짜 팬이면 충분" },
  { id: "writing-formula", emoji: "✍️", title: "뇌에 박히는 글쓰기 공식", oneLiner: "호기심 갭+치알디니 6원칙" },
  { id: "sns-growth", emoji: "📱", title: "0원 SNS 계정 키우기", oneLiner: "60일 성장 로드맵" },
  { id: "personal-branding", emoji: "🎤", title: "퍼스널 브랜딩 가이드", oneLiner: "UVP→수익화 90일 로드맵" },
  { id: "business-model", emoji: "📊", title: "비즈니스 모델 설계법", oneLiner: "구독·SaaS·마켓플레이스" },
  { id: "selling-invisible", emoji: "💎", title: "무형 상품 완판 설득법", oneLiner: "디지털상품·강의·컨설팅" },
  { id: "diabetes-guide", emoji: "🩸", title: "당뇨 완전 가이드", oneLiner: "약물·식단·혈당·합병증" },
  { id: "odyssey-life", emoji: "⚓", title: "오디세이아 인생 항해술", oneLiner: "리더십·인내·유혹·귀환" },
  { id: "hypertension-guide", emoji: "🫀", title: "혈압 완전 가이드", oneLiner: "5대 약물·DASH·합병증" },
  { id: "cholesterol-guide", emoji: "🧬", title: "고지혈증 완전 가이드", oneLiner: "스타틴·식이요법·LDL" },
  { id: "otc-medicine-guide", emoji: "💊", title: "상비약 완전 가이드", oneLiner: "타이레놀·감기약·소화제" },
  { id: "speaking-skills", emoji: "🎙️", title: "말 잘하는 사람들의 비밀", oneLiner: "대화·설득·스피치" },
  { id: "negotiation-skills", emoji: "🤝", title: "협상의 기술", oneLiner: "연봉·계약·일상 협상" },
  { id: "saying-no", emoji: "🛡️", title: "거절 잘하는 사람들의 비밀", oneLiner: "관계 지키며 나를 지키기" },
];

/* ═══════════════════════════════════════════
   표지 프롬프트 / 마케팅문구 (기존 유지)
   ═══════════════════════════════════════════ */

interface CoverInfo {
  title: string;
  subtitle: string;
  author: string;
  gradient: string;
  symbol: string;
  mood: string;
}

const COVER_INFO: Record<string, CoverInfo> = {
  "diet-secrets": {
    title: "다이어트 서바이벌 시스템",
    subtitle: "1,673명의 실패와 성공에서 뽑아낸 생존 가이드",
    author: "비법연구소",
    gradient: "그린(#16a34a)에서 짙은 에메랄드(#064e3b)로",
    symbol: "체중계 위에 올라선 사람 실루엣, 주위로 채소·운동화·시계 아이콘이 도는 플랫 일러스트",
    mood: "청량, 생기, 실행력",
  },
  "endocrine-disruptors": {
    title: "생활 속 환경호르몬과 질병",
    subtitle: "BPA Free의 함정부터 PFAS, 미세플라스틱까지",
    author: "비법연구소",
    gradient: "틸(#0d9488)에서 짙은 다크틸(#134e4a)로",
    symbol: "깨진 플라스틱 용기에서 경고 기호가 떠오르는 플랫 일러스트, 주위에 분자 구조·돋보기 아이콘",
    mood: "과학적, 신뢰, 경각심",
  },
  "declutter-clean": {
    title: "정리와 청소의 기술",
    subtitle: "서랍 하나부터 시작하는 살아있는 가이드",
    author: "비법연구소",
    gradient: "앰버(#d97706)에서 짙은 브라운(#78350f)으로",
    symbol: "깔끔하게 정리된 서랍장, 위에 타이머 아이콘이 떠 있는 미니멀 플랫 일러스트",
    mood: "깔끔, 따뜻함, 실행력",
  },
  "glp1-guide": {
    title: "약사가 알려주는 GLP-1 비만약 완전 가이드",
    subtitle: "오젬픽·위고비·마운자로 — 실제 경험 + 최신 연구 기반",
    author: "비법연구소",
    gradient: "딥블루(#2563eb)에서 짙은 네이비(#1e3a5f)로",
    symbol: "주사기(펜형)와 체중계, 주위에 분자 구조·그래프 아이콘이 도는 의료 플랫 일러스트",
    mood: "전문적, 신뢰, 안심",
  },
  "slow-aging": {
    title: "몸이 젊어지는 4주 저속노화 리셋",
    subtitle: "식단·혈당·운동·수면, 28일 실전 프로그램",
    author: "비법연구소",
    gradient: "밝은 민트(#a7f3d0)에서 딥그린(#14532d)으로",
    symbol: "모래시계 안에서 초록 새싹이 자라나는 모습의 플랫 일러스트 (노화 시간을 되돌리는 상징)",
    mood: "청량, 생기, 실행력",
  },
  "love-skills": {
    title: "밀당 없이 사랑받는 연애의 기술",
    subtitle: "애착·소통·관계 심리학 수업",
    author: "비법연구소",
    gradient: "로즈핑크(#db2777)에서 웜톤 살구색(#fda4af)으로",
    symbol: "두 개의 원이 부드럽게 겹쳐지고 겹친 부분에 작은 하트가 있는 플랫 일러스트 (건강한 관계의 상징)",
    mood: "따뜻함, 공감, 포근함",
  },
  "ai-sidejob": {
    title: "하루 1시간, AI 부업 자동화 시스템",
    subtitle: "수익 파이프라인 3개를 만드는 실전 가이드",
    author: "비법연구소",
    gradient: "딥블루(#2563eb)에서 짙은 네이비(#1e3a5f)로",
    symbol: "노트북 화면에서 3개의 빛나는 파이프라인이 뻗어 나와 동전·그래프·문서로 연결되는 플랫 일러스트",
    mood: "테크, 미래적, 실행력",
  },
  "threads-marketing": {
    title: "0팔로워로 시작하는 스레드 마케팅",
    subtitle: "텍스트 한 줄로 성장하는 28일 공략집",
    author: "비법연구소",
    gradient: "퍼플(#7c3aed)에서 딥퍼플(#4c1d95)로",
    symbol: "실 뭉치(스레드)에서 말풍선들이 연결되어 퍼져나가는 플랫 일러스트 (텍스트로 연결되는 커뮤니티)",
    mood: "트렌디, 활기, 성장",
  },
  "eisenhower-matrix": {
    title: "일잘러의 비밀무기, 아이젠하워 매트릭스",
    subtitle: "하루 15분 결정 관리 시스템",
    author: "비법연구소",
    gradient: "슬레이트(#334155)에서 다크네이비(#0f172a)로",
    symbol: "네 칸으로 나뉜 매트릭스 보드, 중앙에 시계 아이콘이 있는 미니멀 플랫 일러스트 (결정의 프레임워크)",
    mood: "전문적, 명확, 집중",
  },
  "deep-focus": {
    title: "딥포커스, 초집중의 기술",
    subtitle: "3분마다 방해받는 시대의 집중력 시스템",
    author: "비법연구소",
    gradient: "인디고(#4f46e5)에서 딥인디고(#1e1b4b)로",
    symbol: "뇌 실루엣 안에 과녁이 있고 주변의 알림·소음 아이콘이 차단되는 플랫 일러스트 (집중의 방패)",
    mood: "집중, 명확, 고요",
  },
  "storytelling": {
    title: "사람의 마음을 휘어잡는 스토리텔링의 기술",
    subtitle: "브랜드 스토리로 팬을 만드는 법",
    author: "비법연구소",
    gradient: "앰버(#f59e0b)에서 딥오렌지(#c2410c)로",
    symbol: "펼쳐진 책에서 빛나는 하트와 말풍선이 퍼져나가는 플랫 일러스트 (이야기의 힘)",
    mood: "따뜻함, 영감, 연결",
  },
  "customer-retention": {
    title: "한번 온 고객을 평생고객으로 만들기",
    subtitle: "이탈 방지부터 추천 엔진까지",
    author: "비법연구소",
    gradient: "에메랄드(#059669)에서 딥틸(#065f46)로",
    symbol: "두 손이 맞잡혀 있고 주변에 하트·별·반복 화살표가 도는 플랫 일러스트 (관계의 순환)",
    mood: "신뢰, 따뜻함, 지속성",
  },
  "launch-storytelling": {
    title: "완판의 치트키, 런칭 스토리텔링의 비밀",
    subtitle: "프리런칭부터 수익화 루프까지",
    author: "비법연구소",
    gradient: "레드오렌지(#ea580c)에서 딥레드(#991b1b)로",
    symbol: "로켓이 발사되면서 주변에 이메일·차트·메가폰 아이콘이 퍼져나가는 플랫 일러스트 (런칭의 폭발력)",
    mood: "열정, 실행력, 폭발적 성장",
  },
  "money-psychology": {
    title: "사업 성패를 좌우하는 돈의 심리학",
    subtitle: "감정에 흔들리지 않는 재정 판단력",
    author: "비법연구소",
    gradient: "골드(#ca8a04)에서 딥브라운(#78350f)으로",
    symbol: "뇌와 동전이 연결된 저울, 한쪽에 감정 아이콘 다른 쪽에 차트 아이콘이 있는 플랫 일러스트 (감정과 이성의 균형)",
    mood: "지혜, 균형, 통찰",
  },
  "idea-validation": {
    title: "망하지 않는 사업 아이디어 검증법",
    subtitle: "시장 조사부터 MVP·피벗까지",
    author: "비법연구소",
    gradient: "시안(#0891b2)에서 딥시안(#164e63)으로",
    symbol: "현미경 렌즈 안에 체크마크와 그래프가 보이는 플랫 일러스트 (아이디어 검증의 과학)",
    mood: "정밀, 실험, 확신",
  },
  "micro-audience": {
    title: "팔로워 1,000명으로 평생 먹고 사는 법",
    subtitle: "100명의 진짜 팬이면 충분합니다",
    author: "비법연구소",
    gradient: "보라(#7c3aed)에서 딥퍼플(#4c1d95)로",
    symbol: "작은 원(팬)들이 중앙의 큰 하트에 연결된 네트워크 플랫 일러스트 (마이크로 커뮤니티)",
    mood: "연결, 따뜻함, 성장",
  },
  "writing-formula": {
    title: "뇌에 박히는 글쓰기 공식",
    subtitle: "읽히고 팔리는 글을 쓰는 과학적 시스템",
    author: "비법연구소",
    gradient: "앰버(#f59e0b)에서 딥브라운(#78350f)으로",
    symbol: "연필에서 빛나는 전구가 떠오르고 주위에 글자·느낌표·물결이 퍼져나가는 플랫 일러스트 (글의 임팩트)",
    mood: "영감, 실행력, 명쾌함",
  },
  "sns-growth": {
    title: "돈 한푼 들이지 않고 SNS 계정 키우기",
    subtitle: "광고비 0원, 60일 성장 전략",
    author: "비법연구소",
    gradient: "바이올렛(#6d28d9)에서 딥퍼플(#3b0764)로",
    symbol: "스마트폰 화면에서 상승 그래프와 하트·댓글 아이콘이 솟아오르는 플랫 일러스트 (오가닉 성장)",
    mood: "성장, 에너지, 연결",
  },
  "personal-branding": {
    title: "사업가를 위한 퍼스널 브랜딩 가이드",
    subtitle: "당신이 곧 브랜드입니다",
    author: "비법연구소",
    gradient: "핑크(#be185d)에서 딥로즈(#831843)로",
    symbol: "사람 실루엣 위에 빛나는 왕관과 마이크가 있고 주변에 하트·별이 도는 플랫 일러스트 (퍼스널 브랜드)",
    mood: "자신감, 존재감, 성장",
  },
  "business-model": {
    title: "수익성을 극대화하는 비즈니스 모델 설계법",
    subtitle: "돈을 버는 구조를 설계하는 완전 가이드",
    author: "비법연구소",
    gradient: "에메랄드(#047857)에서 딥그린(#064e3b)으로",
    symbol: "톱니바퀴 안에 동전과 상승 그래프가 맞물려 도는 플랫 일러스트 (수익 구조의 메커니즘)",
    mood: "체계, 성장, 정밀",
  },
  "selling-invisible": {
    title: "만져볼 수 없는 상품을 완판시키는 설득 시스템",
    subtitle: "무형의 가치를 매출로 바꾸는 실전 가이드",
    author: "비법연구소",
    gradient: "바이올렛(#7c3aed)에서 딥퍼플(#3b0764)로",
    symbol: "투명한 다이아몬드가 빛을 발하며 주변에 가격표·별점·하트가 떠오르는 플랫 일러스트 (보이지 않는 가치의 가시화)",
    mood: "신비, 설득, 전환",
  },
  "diabetes-guide": {
    title: "약사가 알려주는 당뇨에 대한 모든 것",
    subtitle: "진단부터 약물·식단·생활습관까지 — 당뇨인이 알아야 할 완전 가이드",
    author: "비법연구소",
    gradient: "레드(#e11d48)에서 딥로즈(#881337)로",
    symbol: "혈당 측정기와 건강한 음식(사과, 채소)이 하트 모양으로 배치된 플랫 일러스트",
    mood: "안심, 희망, 실행력",
  },
  "odyssey-life": {
    title: "오디세이아 인생 항해술",
    subtitle: "3,000년 전 영웅의 지혜로 항해하는 현대인의 인생 가이드",
    author: "비법연구소",
    gradient: "네이비(#1e3a5f)에서 딥인디고(#0f172a)로",
    symbol: "거친 바다 위 항해하는 배와 별자리가 빛나는 플랫 일러스트",
    mood: "모험, 지혜, 귀환",
  },
  "hypertension-guide": {
    title: "약사가 알려주는 혈압에 대한 모든 것",
    subtitle: "5대 혈압약 비교·DASH 식단·합병증 예방·90일 관리 로드맵",
    author: "유원소망약국 약사",
    gradient: "레드(#dc2626)에서 딥레드(#7f1d1d)로",
    symbol: "심장과 혈압계가 나란히 놓여 있고 주변에 약·채소·운동화 아이콘이 도는 플랫 일러스트",
    mood: "안심, 건강, 실행력",
  },
  "cholesterol-guide": {
    title: "약사가 알려주는 고지혈증에 대한 모든 것",
    subtitle: "스타틴 비교·콜레스테롤 식이요법·합병증 예방·90일 관리 로드맵",
    author: "유원소망약국 약사",
    gradient: "앰버(#d97706)에서 딥앰버(#78350f)로",
    symbol: "혈관 단면과 콜레스테롤 분자가 나란히 놓여 있고 주변에 약·채소·운동화 아이콘이 도는 플랫 일러스트",
    mood: "이해, 관리, 건강",
  },
  "otc-medicine-guide": {
    title: "약사가 알려주는 상비약 완전 가이드",
    subtitle: "해열제·감기약·소화제·상처약·알레르기약·영양제 — 50+ 약품 분석",
    author: "유원소망약국 약사",
    gradient: "에메랄드(#059669)에서 딥그린(#064e3b)로",
    symbol: "약 상자에서 다양한 약품이 정리된 플랫 일러스트",
    mood: "안심, 신뢰, 실용",
  },
  "speaking-skills": {
    title: "말 잘하는 사람들의 비밀",
    subtitle: "PREP 법칙 · 설득 심리학 · 경청 · 30일 업그레이드 플랜",
    author: "비법연구소",
    gradient: "틸(#0891b2)에서 딥틸(#164e63)로",
    symbol: "마이크와 말풍선이 연결되어 빛나는 플랫 일러스트, 주위에 사람·하트·체크마크 아이콘",
    mood: "자신감, 소통, 성장",
  },
  "negotiation-skills": {
    title: "협상의 기술",
    subtitle: "BATNA 전략부터 연봉 스크립트까지 — 한국 문화에 맞는 실전 협상 시스템",
    author: "비법연구소",
    gradient: "오렌지(#ea580c)에서 딥오렌지(#9a3412)로",
    symbol: "악수하는 두 손 위에 저울이 균형을 이루고 주위에 체크마크·동전·계약서 아이콘이 도는 플랫 일러스트",
    mood: "자신감, 전략, 윈윈",
  },
  "saying-no": {
    title: "거절 잘하는 사람들의 비밀",
    subtitle: "관계를 지키면서 나를 지키는 거절의 기술",
    author: "비법연구소",
    gradient: "보라(#7c3aed)에서 딥퍼플(#4c1d95)로",
    symbol: "방패와 하트가 겹쳐진 플랫 일러스트, 방패가 부정적 요청을 막고 하트가 관계를 지키는 상징",
    mood: "자기보호, 따뜻함, 단호함",
  },
};

function buildCoverPrompt(id: string): string {
  const c = COVER_INFO[id];
  if (!c) return "";
  return `# 표지 이미지 프롬프트 — ${c.title}

나노바나나(Gemini) 또는 ChatGPT에 복사해 붙여넣으세요.
같은 프롬프트로 3~4장 생성해서 가장 좋은 것을 고르세요.

---

## ① 메인 표지 (세로 2:3)

전자책 표지 디자인을 만들어 주세요. 세로형 2:3 비율.
스타일: 미니멀하고 전문적인 한국 베스트셀러 실용서 표지. ${c.gradient} 떨어지는 대각선 그라데이션 배경. 중앙 하단에 ${c.symbol}. ${c.mood} 분위기.
텍스트(정확한 철자로 크고 선명하게): 메인 타이틀 "${c.title}" 을 상단에 흰색 굵은 고딕체로, 서브 타이틀 "${c.subtitle}" 을 작게, 하단에 "${c.author}".
실존 인물, 브랜드 로고, 워터마크 없음.

## ② 스퀘어 썸네일 (1:1)

전자책 홍보용 정사각형(1:1) 썸네일. ${c.gradient} 그라데이션 배경. 중앙에 ${c.symbol.split(",")[0]}. 여백 충분히.
텍스트: "${c.title}" 을 노란색(#facc15) 굵은 고딕체로 크게. 다른 텍스트 없음.

## ③ 와이드 배너 (16:9)

전자책 판매 페이지용 와이드 배너(16:9). 왼쪽 ${c.gradient} 그라데이션에 텍스트, 오른쪽 ${c.symbol.split(",")[0]} 아이소메트릭 일러스트.
텍스트: "${c.title}" 흰색 굵은 고딕체, 아래 "${c.subtitle.slice(0, 25)}".

## ④ 텍스트 없는 배경만 (한글 깨질 때)

전자책 표지용 배경 디자인. 세로형 2:3. 텍스트 절대 넣지 마세요.
${c.gradient} 대각선 그라데이션. 중앙 하단에 ${c.symbol}. 상단 2/3는 비워두세요.

---
**팁**: 한글이 깨지면 ④번으로 배경만 만든 뒤 캔바(Canva)에서 제목을 얹으세요.
`;
}

interface MarketingInfo {
  title: string;
  hook: string;
  stat: string;
  quote: string;
  cta: string;
  tags: string;
}

const MARKETING: Record<string, MarketingInfo> = {
  "diet-secrets": {
    title: "다이어트 서바이벌 시스템",
    hook: "수십 번 다이어트, 수십 번 요요. 문제는 의지력이 아닙니다.",
    stat: "1,673명의 실패와 성공 데이터 분석 · 10챕터 + 보너스 5개",
    quote: "환경을 바꾸면 의지력이 필요 없습니다. 냉장고를 바꾸면 몸이 바뀝니다.",
    cta: "이번이 마지막 다이어트가 되는 시스템, 1,000원에 시작하세요.",
    tags: "#다이어트 #요요탈출 #다이어트시스템 #살빼기 #체중관리",
  },
  "endocrine-disruptors": {
    title: "생활 속 환경호르몬과 질병",
    hook: "'BPA Free'라고 안전한 거 아닌가요? 아닙니다. BPS가 대신 들어갑니다.",
    stat: "NIH/EPA 교차 검증 · 20%만 바꿔도 80% 노출 감소",
    quote: "모든 것을 바꿀 필요 없습니다. 주방 하나만 바꿔도 80%가 줄어듭니다.",
    cta: "불안 대신 실천을, 1,000원에 시작하세요.",
    tags: "#환경호르몬 #BPA #미세플라스틱 #PFAS #건강생활",
  },
  "declutter-clean": {
    title: "정리와 청소의 기술",
    hook: "집 전체를 보면 압도돼서 아무것도 못 하겠죠? 서랍 하나부터 시작하세요.",
    stat: "Reddit 수백 명 실전 경험 · ADHD 맞춤 가이드 포함",
    quote: "깨끗한 집을 유지하는 사람들은 '대청소'를 하지 않았습니다. 매일 5분이면 됩니다.",
    cta: "서랍 하나, 5분 타이머. 1,000원에 시작하세요.",
    tags: "#정리정돈 #미니멀리즘 #청소습관 #집정리 #ADHD정리",
  },
  "glp1-guide": {
    title: "약사가 알려주는 GLP-1 비만약 완전 가이드",
    hook: "오젬픽, 마운자로... 정보는 넘치는데 정리된 답은 없죠? 약사가 정리해드립니다.",
    stat: "41만 명 Reddit 경험 + BMJ·NEJM 연구 교차 검증 · 현직 약사 저자",
    quote: "대부분의 실패는 '약이 안 듣는 것'이 아니라 '정보 없이 시작한 것'이었습니다.",
    cta: "30분짜리 약사 상담을 한 권에, 1,000원에 시작하세요.",
    tags: "#오젬픽 #마운자로 #GLP1 #비만약 #위고비",
  },
  "slow-aging": {
    title: "몸이 젊어지는 4주 저속노화 리셋",
    hook: "저속노화 영상 100개 봤는데 렌틸콩은 아직 냉장고에 방치 중이시죠?",
    stat: "10챕터 + 실행 키트 부록 · 28일 O/X 체크리스트 · 무너져도 복구 프로토콜",
    quote: "무너짐은 변수가 아니라 상수입니다. 성패는 복귀 속도가 결정합니다.",
    cta: "오늘 저녁 식탁부터 늙는 속도가 달라집니다. 1,000원에 시작하세요.",
    tags: "#저속노화 #혈당관리 #건강루틴 #4주챌린지 #습관만들기",
  },
  "love-skills": {
    title: "밀당 없이 사랑받는 연애의 기술",
    hook: "답장이 한 시간만 늦어도 마음이 바닥까지 내려가시죠? 그 패턴에는 이름이 있어요.",
    stat: "10챕터 + 대화 스크립트 15개 + 질문 30개 · 애착 심리학 기반",
    quote: "밀당이 만드는 건 사랑이 아니라 불안이에요. 불안 위에 지어진 관계는 오래 못 가요.",
    cta: "새벽 두 시의 불안 대신, 오늘 저녁의 다정한 한마디. 1,000원에 시작하세요.",
    tags: "#연애심리 #애착유형 #관계심리학 #밀당 #자존감",
  },
  "ai-sidejob": {
    title: "하루 1시간, AI 부업 자동화 시스템",
    hook: "부업 영상 100개 봤는데 아직 시작 못 하셨죠? 부족한 건 정보가 아니라 순서입니다.",
    stat: "8챕터 + AI 프롬프트 15개 + 30일 실행 캘린더 · 하루 1시간 전제",
    quote: "블로그 글 1개 = 쇼츠 3개. 소재를 새로 찾지 않습니다. AI가 쪼개줍니다.",
    cta: "부업 영상 100개 대신 실행 매뉴얼 1권. 1,000원에 시작하세요.",
    tags: "#AI부업 #자동화 #부업추천 #직장인부업 #사이드잡",
  },
  "threads-marketing": {
    title: "0팔로워로 시작하는 스레드 마케팅",
    hook: "유튜브는 늦은 것 같고, 인스타는 사진이 필요하고. 글 몇 줄로 시작할 수 있는 판이 있어요.",
    stat: "10챕터 + 훅 템플릿 30개 + 글감 60개 · 28일 데일리 미션 로드맵",
    quote: "첫 줄의 사명은 단 하나, 엄지를 멈추는 것. 검증된 공식 6개를 드릴게요.",
    cta: "글 몇 줄로 시작하는 나만의 브랜드. 1,000원에 시작하세요.",
    tags: "#스레드 #스레드마케팅 #SNS부업 #텍스트마케팅 #0팔로워",
  },
  "eisenhower-matrix": {
    title: "일잘러의 비밀무기, 아이젠하워 매트릭스",
    hook: "하루 종일 바빴는데 뭘 했는지 기억이 안 나시죠? 바쁜 것과 생산적인 것은 전혀 다릅니다.",
    stat: "10챕터 + 실행 키트 부록 · 하루 15분 시스템 · 90일 로드맵",
    quote: "시간을 관리하는 게 아니라, 결정을 관리해야 합니다. 두 질문이면 충분합니다.",
    cta: "바쁜 것을 멈추고 효과적으로 사세요. 1,000원에 시작하세요.",
    tags: "#아이젠하워매트릭스 #시간관리 #생산성 #우선순위 #자기계발",
  },
  "deep-focus": {
    title: "딥포커스, 초집중의 기술",
    hook: "평균 직장인은 3분마다 방해받고, 복구에 25분이 걸립니다. 집중력은 재능이 아니라 기술입니다.",
    stat: "10챕터 + 실행 키트 부록 · 포모도로+개구리먹기+딥워크 · 90일 챌린지",
    quote: "알림을 무시해도 그것이 있다는 것만으로 성과가 떨어집니다. 환경을 바꿔야 합니다.",
    cta: "3분마다 방해받는 시대, 집중력을 되찾으세요. 1,000원에 시작하세요.",
    tags: "#딥포커스 #집중력 #생산성 #포모도로 #딥워크",
  },
  "storytelling": {
    title: "사람의 마음을 휘어잡는 스토리텔링의 기술",
    hook: "왜 어떤 브랜드는 기억에 남고 어떤 브랜드는 사라질까요? 답은 스토리텔링에 있습니다.",
    stat: "10챕터 + 실행 키트 · 스토리텔링 공식 7가지 · 오리진 스토리 템플릿",
    quote: "사람들은 데이터를 잊지만 이야기는 기억합니다. 진짜 스토리가 브랜드의 심장입니다.",
    cta: "팔로워를 팬으로, 고객을 전도사로. 1,000원에 시작하세요.",
    tags: "#스토리텔링 #브랜딩 #퍼스널브랜드 #마케팅 #콘텐츠",
  },
  "customer-retention": {
    title: "한번 온 고객을 평생고객으로 만들기",
    hook: "신규 고객 1명 확보 비용으로 기존 고객 5명을 지킬 수 있습니다. 그런데 왜 확보에만 집중하시나요?",
    stat: "10챕터 + 실행 키트 · 이탈 경고 7가지 + 추천 엔진 · 18개월 로드맵",
    quote: "고객 유지율을 5%만 높여도 수익이 25~95% 증가합니다. — Bain & Company",
    cta: "한번 온 고객을 평생고객으로. 1,000원에 시작하세요.",
    tags: "#고객유지 #리텐션 #충성고객 #CRM #재구매",
  },
  "launch-storytelling": {
    title: "완판의 치트키, 런칭 스토리텔링의 비밀",
    hook: "아무리 좋은 제품이라도 런칭을 못 하면 소용없습니다. 스타트업 실패의 2번째 이유는 '시장 필요성 부재'입니다.",
    stat: "10챕터 + 실행 키트 · 5단계 서사 + 4통 이메일 + D-Day 체크리스트 · 런칭 루프",
    quote: "성공적인 런칭은 이벤트가 아니라 반복 가능한 시스템입니다. 매번 더 강해집니다.",
    cta: "프리런칭부터 수익화 루프까지. 1,000원에 시작하세요.",
    tags: "#런칭 #제품출시 #프리런칭 #완판 #마케팅전략",
  },
  "money-psychology": {
    title: "사업 성패를 좌우하는 돈의 심리학",
    hook: "같은 실력인데 어떤 창업가는 성장하고 어떤 창업가는 제자리인 이유? 돈에 대한 '심리적 이해'가 다릅니다.",
    stat: "10챕터 + 실행 키트 · CLEAR 5단계 + IMPACT 6단계 · 대시보드 5대 지표",
    quote: "감정 지능이 높은 창업가는 경제 위기에서 65% 더 생존합니다. — Frontiers of Psychology",
    cta: "돈 앞에서 흔들리지 마세요. 1,000원에 시작하세요.",
    tags: "#돈심리학 #재정관리 #인지편향 #CLEAR모델 #창업마인드",
  },
  "idea-validation": {
    title: "망하지 않는 사업 아이디어 검증법",
    hook: "스타트업 실패의 42%는 '시장이 원하지 않는 것을 만들었기 때문'입니다. 검증 없이 시작하지 마세요.",
    stat: "10챕터 + 실행 키트 · MVP 5유형 + 피벗/지속 판단 · 90일 검증 로드맵",
    quote: "좋은 아이디어는 시장에서 검증된 아이디어입니다. 감이 아니라 데이터로 확인하세요.",
    cta: "실패 확률을 줄이는 검증 시스템. 1,000원에 시작하세요.",
    tags: "#아이디어검증 #MVP #린스타트업 #스타트업 #사업검증",
  },
  "micro-audience": {
    title: "팔로워 1,000명으로 평생 먹고 사는 법",
    hook: "10만 팔로워가 필요하다는 건 거짓말입니다. 진짜 팬 100명이면 연 3,000만원이 가능합니다.",
    stat: "10챕터 + 실행 키트 · 3가지 수익 모델 · 30일 빌딩 로드맵",
    quote: "팔로워 수보다 DM 답장률이 수익을 결정합니다. 적은 팔로워, 깊은 관계가 답입니다.",
    cta: "마이크로 오디언스 수익화 시스템. 1,000원에 시작하세요.",
    tags: "#마이크로오디언스 #크리에이터수익화 #팔로워 #진짜팬 #수익화",
  },
  "writing-formula": {
    title: "뇌에 박히는 글쓰기 공식",
    hook: "열심히 쓴 글인데 조회수 10? 문제는 재능이 아니라 공식입니다.",
    stat: "10챕터 + 헤드라인 템플릿 30개 · 훅 공식 6가지 · 30일 글쓰기 챌린지",
    quote: "설득의 90%는 구조로 결정됩니다. 공식을 알면 누구나 읽히는 글을 씁니다.",
    cta: "뇌에 박히는 글쓰기 시스템. 1,000원에 시작하세요.",
    tags: "#글쓰기 #카피라이팅 #콘텐츠 #설득 #마케팅글쓰기",
  },
  "sns-growth": {
    title: "돈 한푼 들이지 않고 SNS 계정 키우기",
    hook: "광고비 0원. 참여율 8%인 1,000명 계정이 참여율 1%인 10,000명보다 수익이 높습니다.",
    stat: "10챕터 + 6대 플랫폼 비교 · 콘텐츠 캘린더 · 60일 성장 로드맵",
    quote: "알고리즘이 좋아하는 건 광고비가 아니라 참여율입니다. 소통이 곧 성장입니다.",
    cta: "광고비 0원 SNS 성장 시스템. 1,000원에 시작하세요.",
    tags: "#SNS성장 #인스타그램 #무료마케팅 #알고리즘 #팔로워",
  },
  "personal-branding": {
    title: "사업가를 위한 퍼스널 브랜딩 가이드",
    hook: "사업이 안 되는 게 아닙니다. 당신이 안 보이는 겁니다.",
    stat: "10챕터 + UVP 워크시트 · 7단계 브랜드 구축 · 90일 브랜딩 로드맵",
    quote: "퍼스널 브랜드는 21세기 최고의 안전장치다. — Gary Vaynerchuk",
    cta: "당신이 곧 브랜드입니다. 1,000원에 시작하세요.",
    tags: "#퍼스널브랜딩 #브랜드 #사업가 #1인사업 #자기계발",
  },
  "business-model": {
    title: "수익성을 극대화하는 비즈니스 모델 설계법",
    hook: "좋은 아이디어로는 못 법니다. 좋은 모델로 법니다.",
    stat: "10챕터 + 7가지 수익 모델 비교 · 가격전략 5가지 · 90일 설계 로드맵",
    quote: "Netflix가 DVD에서 구독으로 피벗하지 않았다면 지금의 Netflix는 없습니다.",
    cta: "수익 구조를 설계하세요. 1,000원에 시작하세요.",
    tags: "#비즈니스모델 #수익구조 #스타트업 #SaaS #구독경제",
  },
  "selling-invisible": {
    title: "만져볼 수 없는 상품을 완판시키는 설득 시스템",
    hook: "좋은 상품인데 왜 안 팔릴까? 만져볼 수 없기 때문입니다. 보여주는 기술이 답입니다.",
    stat: "10챕터 + 판매 페이지 공식 · 신뢰 장치 5가지 · CTA 템플릿 10개 · 30일 로드맵",
    quote: "무형 상품 판매의 80%는 '보여주는 기술'로 결정됩니다. 상품이 아니라 설득을 설계하세요.",
    cta: "무형 상품 판매 설득 시스템. 1,000원에 시작하세요.",
    tags: "#무형상품 #디지털판매 #설득심리학 #판매페이지 #전환율",
  },
  "diabetes-guide": {
    title: "약사가 알려주는 당뇨에 대한 모든 것",
    hook: "당뇨 진단을 받고 유튜브를 뒤졌는데 정보가 너무 많고 서로 다른 말을 해서 뭘 믿어야 할지 모르겠죠? 약사가 정리해드립니다.",
    stat: "10챕터 + 90일 A1C 개선 로드맵 · Reddit 실제 경험 · 부록 5개",
    quote: "약이 무섭다고 안 먹으면 합병증이 옵니다. 원리를 알면 두렵지 않습니다. — 약사의 조언",
    cta: "당뇨 관리 시스템, 1,000원에 시작하세요.",
    tags: "#당뇨 #당뇨관리 #혈당관리 #당뇨식단 #A1C",
  },
  "odyssey-life": {
    title: "오디세이아 인생 항해술",
    hook: "3,000년 전 영웅이 저지른 10가지 실수 — 당신의 인생 실수와 똑같습니다. 오디세우스가 이미 답을 알고 있습니다.",
    stat: "10에피소드 + 30일 인생 항해 플래너 · 고전의 현대적 적용 · 보너스 5개",
    quote: "귀를 막지 않고 돛대에 묶는 것이 진짜 지혜입니다. 자신이 약하다는 것을 아는 것이 가장 강한 전략입니다.",
    cta: "3,000년의 지혜로 인생을 항해하세요. 1,000원에 시작합니다.",
    tags: "#인문학 #고전 #오디세이아 #리더십 #자기계발",
  },
  "hypertension-guide": {
    title: "약사가 알려주는 혈압에 대한 모든 것",
    hook: "혈압약 한번 먹으면 평생 먹어야 한다면서요? 그 말이 맞는지, 약사가 답해드립니다.",
    stat: "10챕터 + 5대 약물 비교 · DASH 식단 · 90일 혈압 관리 로드맵 · 부록 5개",
    quote: "고혈압은 '소리 없는 살인자'입니다. 증상이 없다고 괜찮은 게 아닙니다. 관리하면 합병증은 예방할 수 있습니다. — 약사의 조언",
    cta: "혈압 관리 시스템, 1,000원에 시작하세요.",
    tags: "#고혈압 #혈압관리 #혈압약 #DASH식단 #약사",
  },
  "cholesterol-guide": {
    title: "약사가 알려주는 고지혈증에 대한 모든 것",
    hook: "콜레스테롤 약 평생 먹어야 하나요? 스타틴이 간을 망친다는데 진짜인가요? 약사가 답해드립니다.",
    stat: "10챕터 + 스타틴 6종 비교 · 식이요법 · 90일 콜레스테롤 관리 로드맵 · 부록 6개",
    quote: "콜레스테롤은 '침묵의 살인자'입니다. 증상이 없다고 괜찮은 게 아닙니다. 관리하면 합병증은 예방할 수 있습니다. — 약사의 조언",
    cta: "콜레스테롤 관리 시스템, 1,000원에 시작하세요.",
    tags: "#고지혈증 #콜레스테롤 #스타틴 #LDL #약사",
  },
  "otc-medicine-guide": {
    title: "약사가 알려주는 상비약 완전 가이드",
    hook: "타이레놀 몇 알 먹어야 하나요? 감기약 겹쳐 먹으면 안 되나요? 약사가 답해드립니다.",
    stat: "10챕터 + 50+ 약품 분석 · 한국 브랜드 기준 · 증상별 가이드 · 부록 6개",
    quote: "약은 올바르게 쓰면 고마운 존재이지만, 잘못 쓰면 독이 됩니다. 알고 쓰면 안전합니다. — 약사의 조언",
    cta: "가정 상비약 가이드, 1,000원에 시작하세요.",
    tags: "#상비약 #타이레놀 #감기약 #소화제 #약사",
  },
  "speaking-skills": {
    title: "말 잘하는 사람들의 비밀",
    hook: "회의에서 한마디도 못하고 나와서 후회한 적 있으세요? 말 못하는 게 아닙니다. 순서를 모르는 겁니다.",
    stat: "10챕터 + PREP 법칙 · 설득 심리학 6기법 · 30일 업그레이드 플랜 · 부록 5개",
    quote: "좋은 말하기는 할 말이 많아서가 아니라, 핵심을 골라서 순서대로 전달하는 것이다.",
    cta: "말하기 업그레이드 시스템, 1,000원에 시작하세요.",
    tags: "#말하기 #소통 #PREP #설득 #스피치",
  },
  "negotiation-skills": {
    title: "협상의 기술",
    hook: "기업의 84%는 연봉 협상을 기대하고 있습니다. 그런데 한국 직장인의 62%는 한 번도 해본 적이 없습니다.",
    stat: "10챕터 + BATNA 전략 · 연봉 스크립트 3종 · 30일 업그레이드 플랜 · 부록 5개",
    quote: "인생에서 원하는 것을 얻지 못하는 이유는 단 하나, 요청하지 않았기 때문이다.",
    cta: "협상 업그레이드 시스템, 1,000원에 시작하세요.",
    tags: "#협상 #연봉협상 #BATNA #비즈니스 #커뮤니케이션",
  },
  "saying-no": {
    title: "거절 잘하는 사람들의 비밀",
    hook: "'괜찮아, 내가 할게.' 그 말이 진심인 적이 몇 번이나 되시나요? 거절 못하는 건 성격이 아니라 학습된 행동입니다.",
    stat: "10챕터 + 거절 스크립트 20개 · 경계 설정 워크시트 · 30일 거절 연습 플랜 · 부록 5개",
    quote: "모든 것에 '네'라고 말하는 사람의 '네'는 아무 가치가 없습니다. 진심으로 '네'를 말하려면 '아니오'를 말할 수 있어야 합니다.",
    cta: "관계를 지키면서 나를 지키는 거절의 기술, 1,000원에 시작하세요.",
    tags: "#거절 #자기보호 #경계 #인간관계 #착한아이콤플렉스",
  },
};

function buildMarketingCopy(id: string): string {
  const m = MARKETING[id];
  if (!m) return "";
  return `# SNS 홍보 카피 — ${m.title}

## 인스타그램 1 (문제 제기형)
${m.hook}
${m.stat}
프로필 링크에서 목차를 확인하세요.
${m.tags}

## 인스타그램 2 (인용형)
"${m.quote}"
— 살아있는 정보책 《${m.title}》에서
${m.cta}
${m.tags}

## 스레드 1 (스토리형)
${m.hook}
${m.quote}
이 내용이 담긴 가이드, 1,000원입니다.

## 스레드 2 (한 줄 반전)
${m.cta}

## 블로그 제목
"${m.hook} — ${m.title} (${m.stat.split("·")[0]})"
`;
}

/* ═══════════════════════════════════════════
   썸네일 프롬프트 & 메타 설명
   ═══════════════════════════════════════════ */

const PRODUCT_INFO: Record<string, { prompt: string; metaDesc: string }> = {
  "diet-secrets": {
    prompt: `정사각형 1:1 비율, 750x750px 프리미엄 디지털 일러스트.
검은 배경 위에 거대한 네온 빨간색 숫자 "1,673명"이 화면 상단 40%를 지배.
그 아래 체중계가 산산조각 깨지며 파편이 날아가는 역동적 장면.
깨진 체중계 조각 사이로 황금빛 빛줄기가 솟아오름.
하단에 굵은 흰색 한글 텍스트: "의지력이 아닙니다".
그 아래 작게 "시스템이 다릅니다".
전체적으로 시네마틱 조명, 네온 레드와 골드 악센트.
실제 사람 없음, 브랜드 로고 없음.`,
    metaDesc: `수십 번 다이어트, 수십 번 요요. 1,673명 데이터가 증명한 건 "의지력 문제가 아니다"라는 사실입니다. 10챕터 + 식단 템플릿 + 환경 리셋 체크리스트 + 보너스 5개 · 프로필 링크에서 목차를 확인하세요. #다이어트 #요요탈출 #다이어트시스템 #살빼기 #체중관리`,
  },
  "endocrine-disruptors": {
    prompt: `정사각형 1:1 비율, 750x750px 프리미엄 디지털 일러스트.
어두운 보라색 배경, 중앙에 투명한 유리 인체 실루엣(성별 불명).
인체 내부에 형광 초록색으로 빛나는 독성 분자 구조가 떠다님.
인체 주위로 일상용품(플라스틱 물병, 영수증, 캔) 실루엣이 원형으로 둘러쌈.
각 물건에서 형광 초록 연기가 인체를 향해 흘러들어감.
상단에 거대한 형광 초록 텍스트: "42%".
하단에 흰색 굵은 글씨: "당신의 집에 숨어 있습니다".
네온 독성 초록 + 어두운 보라색 무드, 시네마틱 조명.
실제 사람 없음, 브랜드 로고 없음.`,
    metaDesc: `지금 손에 들고 있는 영수증에서 환경호르몬이 나옵니다. 하루 평균 42가지 경로로 노출되는 내분비교란물질, 피하는 법을 아시나요? 10챕터 + 생활 속 체크리스트 + 대체제 가이드 + 보너스 5개 · 프로필 링크에서 목차를 확인하세요. #환경호르몬 #내분비교란 #건강관리 #생활독소 #해독`,
  },
  "declutter-clean": {
    prompt: `정사각형 1:1 비율, 750x750px 프리미엄 디지털 일러스트.
화면을 정확히 세로 반으로 분할(Before/After 구성).
왼쪽: 어둡고 혼란스러운 방, 물건이 산더미처럼 쌓여 있고 먼지 파티클이 떠다님, 붉은 조명.
오른쪽: 같은 방이 미니멀하게 정리됨, 밝은 자연광, 화분 하나, 빈 공간이 빛남.
중앙 분할선에 번개 모양 금색 라인.
상단에 굵은 흰색 텍스트: "같은 방, 다른 인생".
하단에 작게: "15분이면 시작됩니다".
왼쪽은 어둡고 붉은 톤, 오른쪽은 밝고 따뜻한 톤.
실제 사람 없음, 브랜드 로고 없음.`,
    metaDesc: `방이 어지러우면 머릿속도 어지럽습니다. 하루 15분, 한 서랍부터 시작하면 3주 후 완전히 다른 공간이 됩니다. 10챕터 + 구역별 정리 체크리스트 + 청소 루틴표 + 보너스 5개 · 프로필 링크에서 목차를 확인하세요. #정리정돈 #미니멀라이프 #청소 #공간정리 #생활정리`,
  },
  "glp1-guide": {
    prompt: `정사각형 1:1 비율, 750x750px 프리미엄 디지털 일러스트.
완전한 검은 배경, 중앙에 거대한 주사 펜이 수직으로 서 있음.
주사 펜에서 황금빛 액체가 방울방울 떨어지며 아래에서 빛의 물결이 퍼져나감.
주사 펜 주변으로 "위고비" "마운자로" "삭센다" 글자가 궤도를 돌듯 떠다님(반투명).
상단에 거대한 금색 텍스트: "100만 명".
중앙에 흰색 굵은 글씨: "선택 전에 읽으세요".
시네마틱 스포트라이트, 골드 & 블랙 무드.
실제 사람 없음, 브랜드 로고 없음.`,
    metaDesc: `위고비, 마운자로, 삭센다... 이름은 들었는데 뭐가 다른지 모르겠다고요? 약사가 정리한 GLP-1 비만약의 원리·비교·부작용·비용까지 전부. 10챕터 + 약물 비교표 + 부작용 대응법 + 보너스 5개 · 프로필 링크에서 목차를 확인하세요. #비만약 #GLP1 #위고비 #다이어트약 #약사`,
  },
  "slow-aging": {
    prompt: `정사각형 1:1 비율, 750x750px 프리미엄 디지털 일러스트.
어두운 남색 배경, 중앙에 거대한 모래시계.
모래시계 윗부분: 빠르게 떨어지는 붉은 모래(노화).
모래시계 아랫부분: 떨어진 모래가 초록색 새싹으로 변하며 자라남.
모래시계 유리에 균열이 가며 그 틈에서 청록색 빛이 새어나옴.
상단에 굵은 흰색 텍스트: "4주 후, 세포가 바뀝니다".
하단에 네온 청록색: "저속노화 리셋".
시네마틱 조명, 청록 네온 + 다크네이비 무드.
실제 사람 없음, 브랜드 로고 없음.`,
    metaDesc: `같은 나이인데 왜 누군가는 10살 더 젊어 보일까요? 노화 속도는 유전자가 아니라 생활습관이 결정합니다. 4주 프로그램으로 세포부터 리셋. 10챕터 + 주차별 실천표 + 혈액검사 체크리스트 + 보너스 5개 · 프로필 링크에서 목차를 확인하세요. #저속노화 #안티에이징 #건강습관 #노화방지 #웰에이징`,
  },
  "love-skills": {
    prompt: `정사각형 1:1 비율, 750x750px 프리미엄 디지털 일러스트.
어두운 와인색 배경, 중앙에 두 개의 자석이 서로 끌리는 장면.
한쪽 자석은 차가운 파란색(밀당), 반대쪽은 따뜻한 장밋빛 골드(진심).
자석 사이 공간에서 전기 스파크가 튀며 하트 모양 에너지파가 퍼져나감.
파란 자석에 큰 X 표시, 장밋빛 자석이 더 크고 빛남.
상단에 굵은 흰색 텍스트: "밀당의 반대말은".
하단에 로즈골드: "끌림입니다".
시네마틱 조명, 로즈골드 + 다크와인 무드.
실제 사람 없음, 브랜드 로고 없음.`,
    metaDesc: `답장이 한 시간만 늦어도 마음이 바닥까지 내려가시죠? 그 패턴에는 이름이 있어요. 10챕터 + 대화 스크립트 15개 + 자기진단 질문 30개 · 애착 심리학 기반 프로필 링크에서 목차를 확인하세요. #연애심리 #애착유형 #관계심리학 #밀당 #자존감`,
  },
  "ai-sidejob": {
    prompt: `정사각형 1:1 비율, 750x750px 프리미엄 디지털 일러스트.
검은 배경, 중앙에 로봇 팔이 지폐 다발을 조립하고 있는 장면.
로봇 팔에서 시안색 네온 라인이 빛나며, 컨베이어 벨트 위로 완성된 수익 패키지가 줄지어 나감.
배경에 코드 라인이 홀로그램처럼 떠다님.
상단에 거대한 네온 시안 텍스트: "월 300만원".
하단에 흰색 굵은 글씨: "AI가 대신 일합니다".
그 아래 작게: "당신은 시스템만 만드세요".
사이버펑크 무드, 시안 네온 + 블랙.
실제 사람 없음, 브랜드 로고 없음.`,
    metaDesc: `퇴근 후 3시간, AI에게 시키면 30분입니다. ChatGPT·미드저니·자동화 툴로 만드는 6가지 수익 파이프라인. 10챕터 + 프롬프트 템플릿 50개 + 자동화 워크플로우 + 보너스 5개 · 프로필 링크에서 목차를 확인하세요. #AI부업 #ChatGPT #자동화 #부업 #패시브인컴`,
  },
  "threads-marketing": {
    prompt: `정사각형 1:1 비율, 750x750px 프리미엄 디지털 일러스트.
진한 남색 배경, 중앙에 거대한 숫자 "0"이 네온 오렌지색으로 빛남.
"0" 안쪽에서 실(thread) 가닥들이 폭발하듯 사방으로 뻗어나가며,
실 끝마다 작은 팔로워 아이콘이 매달려 점점 늘어남.
"0" 위에 화살표가 급상승하는 그래프 라인(네온 오렌지).
상단에 흰색 굵은 텍스트: "0에서 시작합니다".
하단에 네온 오렌지: "팔로워가 없어도 됩니다".
시네마틱 조명, 네온 오렌지 + 다크네이비 무드.
실제 사람 없음, 브랜드 로고 없음.`,
    metaDesc: `팔로워 0명인데 마케팅을 어떻게 하냐고요? 스레드는 팔로워 수가 아니라 '첫 문장'이 도달률을 결정합니다. 10챕터 + 바이럴 템플릿 20개 + 첫 30일 로드맵 + 보너스 5개 · 프로필 링크에서 목차를 확인하세요. #스레드마케팅 #SNS마케팅 #0팔로워 #바이럴 #콘텐츠마케팅`,
  },
  "eisenhower-matrix": {
    prompt: `정사각형 1:1 비율, 750x750px 프리미엄 디지털 일러스트.
검은 배경 위에 2x2 매트릭스 그리드가 네온 라인으로 그려짐.
4칸 중 "긴급+중요" 칸만 붉은색으로 불타오르고 나머지 3칸은 차분한 파란색.
불타는 칸에서 연쇄적으로 업무 아이콘이 폭발하는 비주얼.
매트릭스 위를 가로지르는 거대한 X 표시(금색).
상단에 흰색 굵은 텍스트: "바쁜데 왜 성과가 없을까?".
하단에 금색: "긴급한 것이 중요한 게 아닙니다".
시네마틱 조명, 레드 & 골드 악센트.
실제 사람 없음, 브랜드 로고 없음.`,
    metaDesc: `하루 종일 바쁜데 정작 중요한 건 하나도 못 했다면, 긴급함에 속고 있는 겁니다. 아이젠하워가 쓴 시간관리법. 10챕터 + 주간 플래너 템플릿 + 위임 체크리스트 + 보너스 5개 · 프로필 링크에서 목차를 확인하세요. #시간관리 #아이젠하워 #생산성 #우선순위 #업무관리`,
  },
  "deep-focus": {
    prompt: `정사각형 1:1 비율, 750x750px 프리미엄 디지털 일러스트.
완전한 검은 배경, 중앙에 하나의 거대한 눈동자 클로즈업.
눈동자 안에 시계 기어 메커니즘이 정밀하게 돌아가고 있음.
눈 주변으로 알림 아이콘, SNS 아이콘, 메시지 버블이 부서지며 사라짐.
눈동자에서 레이저처럼 한 줄기 빛이 앞으로 쏘아져 나감.
상단에 거대한 흰색 텍스트: "2시간".
하단에 네온 퍼플: "하루 종일보다 강합니다".
시네마틱 조명, 네온 퍼플 + 블랙 무드.
실제 사람 없음, 브랜드 로고 없음.`,
    metaDesc: `8시간 일해도 진짜 집중한 시간은 평균 2시간 11분뿐입니다. 그 2시간을 4시간으로 늘리면 인생이 바뀝니다. 10챕터 + 딥워크 타이머 세팅법 + 방해 차단 체크리스트 + 보너스 5개 · 프로필 링크에서 목차를 확인하세요. #딥포커스 #초집중 #생산성 #딥워크 #집중력`,
  },
  "storytelling": {
    prompt: `정사각형 1:1 비율, 750x750px 프리미엄 디지털 일러스트.
어두운 네이비 배경, 중앙에 펼쳐진 책 한 권.
책 페이지에서 황금빛 글자들이 3D로 솟아오르며 공중에서 소용돌이침.
글자 소용돌이가 위로 올라가며 왕관 형태를 만듦.
책 아래에서 스포트라이트가 위를 향해 비춤.
상단에 굵은 흰색 텍스트: "팩트는 잊혀도".
하단에 골드: "이야기는 남습니다".
시네마틱 스포트라이트, 골드 + 다크네이비 무드.
실제 사람 없음, 브랜드 로고 없음.`,
    metaDesc: `같은 제품인데 어떤 브랜드는 10배 비싸게 팝니다. 차이는 '이야기'입니다. 사람의 뇌는 데이터보다 스토리에 22배 더 반응합니다. 10챕터 + 스토리 프레임워크 7개 + 업종별 예시 + 보너스 5개 · 프로필 링크에서 목차를 확인하세요. #스토리텔링 #마케팅 #브랜딩 #카피라이팅 #콘텐츠`,
  },
  "customer-retention": {
    prompt: `정사각형 1:1 비율, 750x750px 프리미엄 디지털 일러스트.
검은 배경, 중앙에 끊어지기 직전의 쇠사슬 한 고리.
끊어진 부분에서 금색 용접 불꽃이 튀며 다시 연결되는 순간 포착.
쇠사슬이 원형으로 이어져 무한 루프(∞) 형태를 만듦.
체인 고리마다 작은 하트 아이콘이 빛남.
상단에 거대한 빨간 텍스트: "5배".
하단에 흰색 굵은 글씨: "신규보다 유지가 5배 쌉니다".
시네마틱 조명, 골드 스파크 + 블랙 무드.
실제 사람 없음, 브랜드 로고 없음.`,
    metaDesc: `신규 고객 1명 유치 비용 = 기존 고객 유지 비용의 5배. 그런데 왜 신규 고객만 쫓고 계세요? 10챕터 + 리텐션 이메일 템플릿 + 고객 세그먼트 체크리스트 + 보너스 5개 · 프로필 링크에서 목차를 확인하세요. #고객유지 #리텐션 #CRM #평생고객 #매출성장`,
  },
  "launch-storytelling": {
    prompt: `정사각형 1:1 비율, 750x750px 프리미엄 디지털 일러스트.
검은 배경, 화면 하단에서 로켓이 발사되는 순간.
로켓 화염이 무지개빛 그라데이션(골드→오렌지→레드)으로 폭발적.
로켓 연기 속에 "SOLD OUT" 글자가 네온으로 빛남.
로켓이 지나간 궤적에 별들이 흩뿌려짐.
상단에 굵은 흰색 텍스트: "런칭 72시간".
하단에 네온 오렌지: "완판의 시나리오가 있습니다".
시네마틱 조명, 오렌지 화염 + 블랙 무드.
실제 사람 없음, 브랜드 로고 없음.`,
    metaDesc: `런칭 첫 72시간이 전체 매출의 60%를 결정합니다. 완판되는 런칭에는 '시나리오'가 있습니다. 10챕터 + 런칭 타임라인 템플릿 + D-30 체크리스트 + 보너스 5개 · 프로필 링크에서 목차를 확인하세요. #런칭 #완판 #스토리텔링 #마케팅 #신제품출시`,
  },
  "money-psychology": {
    prompt: `정사각형 1:1 비율, 750x750px 프리미엄 디지털 일러스트.
검은 배경, 중앙에 뇌의 단면도가 반투명하게 떠 있음.
뇌의 각 영역이 지폐 패턴으로 채워져 있고, 특정 영역(편도체)만 붉게 빛남.
뇌 주변으로 금화가 궤도를 도는 행성처럼 떠다님.
뇌에서 아래로 쇠사슬이 늘어져 지갑을 묶고 있음.
상단에 거대한 금색 텍스트: "87%".
하단에 흰색 굵은 글씨: "돈 결정은 감정이 합니다".
시네마틱 조명, 골드 + 레드 악센트 + 블랙.
실제 사람 없음, 브랜드 로고 없음.`,
    metaDesc: `당신의 돈 문제는 수학이 아니라 심리학입니다. 지출의 87%는 감정이 결정합니다. 부자들이 '다르게 생각하는' 7가지 패턴. 10챕터 + 머니 심리 진단표 + 소비 패턴 리셋 워크시트 + 보너스 5개 · 프로필 링크에서 목차를 확인하세요. #돈심리학 #재테크 #부자마인드 #돈관리 #경제적자유`,
  },
  "idea-validation": {
    prompt: `정사각형 1:1 비율, 750x750px 프리미엄 디지털 일러스트.
검은 배경, 중앙에 거대한 현미경 렌즈.
렌즈 안에 전구(아이디어)가 확대되어 보이고, 전구 내부에 초록 체크(✓)와 빨간 엑스(✗)가 공존.
현미경 주변으로 "검증됨" "실패" "피벗" 라벨이 떠다님.
렌즈에서 초록색 레이저 스캔 라인이 전구를 훑고 지나감.
상단에 거대한 빨간 텍스트: "90%".
하단에 흰색 굵은 글씨: "아이디어가 아니라 검증이 문제입니다".
시네마틱 조명, 네온 그린 스캔 + 블랙 무드.
실제 사람 없음, 브랜드 로고 없음.`,
    metaDesc: `스타트업 90%가 망하는 이유는 '나쁜 아이디어'가 아니라 '검증 없는 실행'입니다. 돈 들이기 전에 48시간 안에 검증하는 프레임워크. 10챕터 + 고객 인터뷰 스크립트 + MVP 체크리스트 + 보너스 5개 · 프로필 링크에서 목차를 확인하세요. #사업검증 #스타트업 #MVP #린스타트업 #창업`,
  },
  "micro-audience": {
    prompt: `정사각형 1:1 비율, 750x750px 프리미엄 디지털 일러스트.
어두운 배경, 중앙에 작은 빛나는 구체 하나.
구체 안에 숫자 "1,000"이 황금빛으로 빛남.
구체에서 1,000개의 가느다란 금색 실이 사방으로 뻗어나가며 각 끝에 동전이 매달림.
전체가 거미줄처럼 아름다운 네트워크를 형성.
작은 구체가 거대한 빌딩보다 밝게 빛나는 대비.
상단에 흰색 굵은 텍스트: "100만 팔로워는 필요 없습니다".
하단에 골드: "1,000명이면 평생 먹고 삽니다".
시네마틱 조명, 골드 네트워크 + 다크 무드.
실제 사람 없음, 브랜드 로고 없음.`,
    metaDesc: `100만 팔로워 인플루언서보다 1,000명의 진성 팬이 더 많이 법니다. 케빈 켈리의 '1,000명의 진정한 팬' 이론을 실전으로. 10챕터 + 수익화 퍼널 템플릿 + 커뮤니티 운영 가이드 + 보너스 5개 · 프로필 링크에서 목차를 확인하세요. #마이크로오디언스 #1000명 #수익화 #크리에이터 #팬비즈니스`,
  },
  "writing-formula": {
    prompt: `정사각형 1:1 비율, 750x750px 프리미엄 디지털 일러스트.
검은 배경, 중앙에 거대한 뇌가 반으로 갈라진 단면.
뇌의 왼쪽(논리)은 회색이고, 오른쪽(감정)은 네온 핑크로 활활 타오름.
오른쪽 뇌에서 글자들이 총알처럼 발사되어 화면 밖으로 뚫고 나감.
글자 궤적에 핑크 네온 잔상이 남음.
상단에 굵은 흰색 텍스트: "읽히는 글에는".
하단에 네온 핑크: "공식이 있습니다".
시네마틱 조명, 네온 핑크 + 블랙 무드.
실제 사람 없음, 브랜드 로고 없음.`,
    metaDesc: `같은 내용인데 어떤 글은 10만 뷰, 어떤 글은 10뷰. 차이는 재능이 아니라 '공식'입니다. 뇌과학 기반 후킹 기법 7가지. 10챕터 + 제목 공식 30개 + 본문 템플릿 + 보너스 5개 · 프로필 링크에서 목차를 확인하세요. #글쓰기 #카피라이팅 #콘텐츠 #블로그 #후킹`,
  },
  "sns-growth": {
    prompt: `정사각형 1:1 비율, 750x750px 프리미엄 디지털 일러스트.
검은 배경, 중앙에 동전 하나가 놓여 있고 그 위에 "₩0"이 새겨져 있음.
동전에서 거대한 소셜 미디어 그래프가 폭발적으로 치솟아 오름.
그래프 라인이 네온 초록색이고, 꼭대기에서 불꽃놀이가 터짐.
배경에 인스타·유튜브·블로그 아이콘 실루엣이 희미하게.
상단에 거대한 네온 초록 텍스트: "광고비 ₩0".
하단에 흰색 굵은 글씨: "그런데 왜 이 계정은 성장할까?".
시네마틱 조명, 네온 그린 + 블랙 무드.
실제 사람 없음, 브랜드 로고 없음.`,
    metaDesc: `광고비 0원으로 팔로워 1만 명 만든 계정들의 공통점은 '알고리즘을 이해한다'는 것입니다. 10챕터 + 플랫폼별 알고리즘 해킹법 + 콘텐츠 캘린더 + 보너스 5개 · 프로필 링크에서 목차를 확인하세요. #SNS성장 #인스타그램 #유튜브 #팔로워늘리기 #무료마케팅`,
  },
  "personal-branding": {
    prompt: `정사각형 1:1 비율, 750x750px 프리미엄 디지털 일러스트.
어두운 배경, 중앙에 거대한 거울이 서 있음.
거울 앞: 평범한 비즈니스 서류가방 실루엣(흐릿하고 어두움).
거울 속 반사: 왕관을 쓴 황금빛 아이콘 실루엣(밝고 강렬).
거울 프레임이 네온 골드로 빛나며, 거울 유리에서 빛 입자가 쏟아져 나옴.
상단에 흰색 굵은 텍스트: "당신은 누구입니까?".
하단에 골드: "답을 정하면, 시장이 기억합니다".
시네마틱 조명, 골드 + 다크 무드.
실제 사람 없음, 브랜드 로고 없음.`,
    metaDesc: `사업은 잘하는데 '나'를 모르면 가격 경쟁에서 벗어날 수 없습니다. 퍼스널 브랜딩은 유명해지는 게 아니라 '선택받는 이유'를 만드는 것입니다. 10챕터 + 브랜드 포지셔닝 캔버스 + SNS 프로필 공식 + 보너스 5개 · 프로필 링크에서 목차를 확인하세요. #퍼스널브랜딩 #브랜딩 #사업가 #전문가 #차별화`,
  },
  "business-model": {
    prompt: `정사각형 1:1 비율, 750x750px 프리미엄 디지털 일러스트.
검은 배경, 중앙에 거대한 루빅스 큐브.
큐브의 각 면이 다른 수익 모델을 상징하는 색상(구독=파랑, 광고=노랑, SaaS=초록, 커머스=빨강 등).
큐브가 완성되는 마지막 한 조각이 금색으로 빛나며 제자리에 끼워지는 순간.
큐브에서 사방으로 금색 에너지 파동이 퍼져나감.
상단에 흰색 굵은 텍스트: "좋은 아이디어로는 못 법니다".
하단에 골드: "좋은 모델로 법니다".
시네마틱 조명, 멀티컬러 큐브 + 골드 에너지 + 블랙.
실제 사람 없음, 브랜드 로고 없음.`,
    metaDesc: `Netflix가 DVD 대여점에 머물렀다면? 좋은 아이디어와 좋은 비즈니스 모델은 완전히 다릅니다. 7가지 수익 모델 비교 + 가격 전략 5가지. 10챕터 + 비즈니스 모델 캔버스 + 90일 설계 로드맵 + 보너스 5개 · 프로필 링크에서 목차를 확인하세요. #비즈니스모델 #수익구조 #스타트업 #SaaS #구독경제`,
  },
  "selling-invisible": {
    prompt: `정사각형 1:1 비율, 750x750px 프리미엄 디지털 일러스트.
깊은 보라-검정 배경, 중앙에 투명한 다이아몬드가 떠 있다.
다이아몬드 내부에서 무지개빛 프리즘 광선이 사방으로 퍼짐.
다이아몬드 주변에 가격표, 별 5개 리뷰, 결제 완료 아이콘이 떠돌며 빛남.
"보이지 않는 것도 팔 수 있다" 느낌의 마법적 분위기.
상단에 흰색 굵은 텍스트: "좋은 상품인데 왜 안 팔릴까?".
하단에 골드: "보여주는 기술이 답입니다".
시네마틱 조명, 다이아몬드 프리즘 + 보라 글로우 + 골드 악센트.
실제 사람 없음, 브랜드 로고 없음.`,
    metaDesc: `좋은 상품인데 왜 안 팔릴까요? 만져볼 수 없기 때문입니다. 무형 상품 판매의 80%는 '보여주는 기술'로 결정됩니다. 10챕터 + 판매 페이지 황금 공식 + 신뢰 장치 5가지 + CTA 템플릿 10개 · 프로필 링크에서 목차를 확인하세요. #무형상품 #디지털판매 #설득심리학 #판매페이지 #전환율`,
  },
  "diabetes-guide": {
    prompt: `정사각형 1:1 비율, 750x750px 프리미엄 디지털 일러스트.
짙은 크림슨-로즈 그라데이션 배경, 중앙에 혈당 측정기가 빛을 발하며 떠 있음.
측정기 화면에 "6.5%" 숫자가 녹색으로 빛나고 (목표 A1C 달성 상징).
측정기 주변으로 사과·브로콜리·당근 아이콘이 하트 모양으로 배치되어 빛남.
배경에서 레드-로즈 톤 에너지 파동이 퍼져나옴.
상단에 거대한 흰색 텍스트: "A1C".
중앙 하단에 굵은 흰색 글씨: "90일 안에 바꿀 수 있습니다".
시네마틱 조명, 크림슨 레드 + 로즈 글로우 + 흰색 악센트.
실제 사람 없음, 브랜드 로고 없음.`,
    metaDesc: `당뇨 진단 후 뭘 해야 할지 모르겠다면 여기서 시작하세요. 메트포르민부터 인슐린까지 약물 원리, 혈당 스파이크를 막는 식사 전략, 90일 A1C 개선 로드맵. 10챕터 + 합병증 체크리스트 + 혈당일지 템플릿 + 부록 5개 · 프로필 링크에서 목차를 확인하세요. #당뇨 #당뇨관리 #혈당관리 #A1C #약사`,
  },
  "odyssey-life": {
    prompt: `정사각형 1:1 비율, 750x750px 프리미엄 디지털 일러스트.
깊은 네이비-인디고 그라데이션 배경(#1e3a5f → #0f172a), 중앙에 고대 범선이 거친 파도 위를 항해하는 장면.
배경 하늘에 별자리(오리온자리)가 빛나고, 수평선 너머로 현대 도시 스카이라인이 희미하게 보임 — 고대와 현대의 연결.
배의 돛에서 황금빛 빛줄기가 퍼져나오며 파도를 밝힘.
상단에 흰색 굵은 텍스트: "3,000년의 지혜".
하단에 골드(#facc15): "당신의 항해를 시작하세요".
시네마틱 조명, 딥 네이비 + 별빛 + 골드 악센트.
실제 사람 없음, 브랜드 로고 없음.`,
    metaDesc: `3,000년 전 오디세우스가 저지른 10가지 실수가 당신의 인생 실수와 같습니다. 세이렌의 유혹, 키클롭스의 분노, 이타카로의 귀환 — 고전을 현대 삶의 언어로 풀어낸 인생 항해 가이드. 10에피소드 + 30일 플래너 + 보너스 5개 · 프로필 링크에서 목차를 확인하세요. #인문학 #오디세이아 #고전 #리더십 #자기계발`,
  },
  "hypertension-guide": {
    prompt: `정사각형 1:1 비율, 750x750px 프리미엄 디지털 일러스트.
짙은 크림슨-레드 그라데이션 배경(#dc2626 → #7f1d1d), 중앙에 심장과 혈압계가 나란히 배치되어 빛을 발함.
혈압계 화면에 "120/80" 숫자가 녹색으로 빛나고 (정상 혈압 달성 상징).
심장 주변으로 약 캡슐·채소·운동화 아이콘이 원형으로 배치되어 빛남.
배경에서 레드-크림슨 톤 에너지 파동이 퍼져나옴.
상단에 거대한 흰색 텍스트: "1,200만 명".
중앙 하단에 굵은 흰색 글씨: "혈압은 관리할 수 있습니다".
시네마틱 조명, 크림슨 레드 + 딥레드 글로우 + 흰색 악센트.
실제 사람 없음, 브랜드 로고 없음.`,
    metaDesc: `혈압약 한번 먹으면 평생 먹어야 하나요? 약사가 답해드립니다. ARB·ACE·CCB·이뇨제·베타차단제 5대 계열 완전 비교, DASH 식단, 합병증 예방, 90일 혈압 관리 로드맵. 10챕터 + 혈압 기록표 + 약물 비교 카드 + 부록 5개 · 프로필 링크에서 목차를 확인하세요. #고혈압 #혈압관리 #혈압약 #DASH식단 #약사`,
  },
  "cholesterol-guide": {
    prompt: `정사각형 1:1 비율, 750x750px 프리미엄 디지털 일러스트.
짙은 앰버-딥앰버 그라데이션 배경(#d97706 → #78350f), 중앙에 혈관 단면과 콜레스테롤 분자가 배치되어 빛을 발함.
혈관 단면에서 LDL 입자가 줄어들고 HDL 입자가 청소하는 장면.
주변으로 약 캡슐·견과류·올리브오일·운동화 아이콘이 원형으로 배치되어 빛남.
배경에서 앰버-골드 톤 에너지 파동이 퍼져나옴.
상단에 거대한 흰색 텍스트: "성인 40%".
중앙 하단에 굵은 흰색 글씨: "콜레스테롤은 관리할 수 있습니다".
시네마틱 조명, 앰버 + 딥앰버 글로우 + 흰색 악센트.
실제 사람 없음, 브랜드 로고 없음.`,
    metaDesc: `콜레스테롤 약 평생 먹어야 하나요? 약사가 답해드립니다. 스타틴 6종 완전 비교, 포화지방 줄이는 식이요법, 동맥경화·심근경색 예방, 90일 콜레스테롤 관리 로드맵. 10챕터 + 지질 검사 기록표 + 스타틴 비교 카드 + 부록 6개 · 프로필 링크에서 목차를 확인하세요. #고지혈증 #콜레스테롤 #스타틴 #LDL #약사`,
  },
  "otc-medicine-guide": {
    prompt: `정사각형 1:1 비율, 750x750px 프리미엄 디지털 일러스트.
짙은 에메랄드-딥그린 그라데이션 배경(#059669 → #064e3b), 중앙에 열린 약 상자가 빛을 발하며 떠 있음.
약 상자에서 정제·캡슐·시럽·연고·반창고 아이콘이 정리된 모습으로 배열되어 빛남.
배경에서 에메랄드-민트 톤 에너지 파동이 퍼져나옴.
상단에 거대한 흰색 텍스트: "50+ 약품".
중앙 하단에 굵은 흰색 글씨: "알고 쓰면 안전합니다".
시네마틱 조명, 에메랄드 + 딥그린 글로우 + 흰색 악센트.
실제 사람 없음, 브랜드 로고 없음.`,
    metaDesc: `타이레놀 몇 알 먹어야 하나요? 감기약 겹쳐 먹으면 안 되나요? 약사가 답해드립니다. 해열제·감기약·소화제·상처약·알레르기약·영양제 50+ 약품 분석. 10챕터 + 상비약 체크리스트 + 체중별 용량표 + 부록 6개 · 프로필 링크에서 목차를 확인하세요. #상비약 #타이레놀 #감기약 #소화제 #약사`,
  },
  "speaking-skills": {
    prompt: `정사각형 1:1 비율, 750x750px 프리미엄 디지털 일러스트.
짙은 틸-딥틸 그라데이션 배경(#0891b2 → #164e63), 중앙에 마이크가 빛을 발하며 떠 있음.
마이크에서 말풍선들이 사방으로 퍼져나가며 각 말풍선 안에 체크마크·하트·별이 빛남.
배경에서 틸-시안 톤 음파가 동심원으로 퍼져나옴.
상단에 거대한 흰색 텍스트: "30일".
중앙 하단에 굵은 흰색 글씨: "말이 달라지면 인생이 달라집니다".
시네마틱 조명, 틸 + 딥틸 글로우 + 흰색 악센트.
실제 사람 없음, 브랜드 로고 없음.`,
    metaDesc: `회의에서 한마디도 못하고 나오시나요? 말 못하는 게 아닙니다, 순서를 모르는 겁니다. PREP 법칙·설득 심리학·경청 5단계·I-Message·30일 업그레이드 플랜. 10챕터 + PREP 템플릿 + STAR 보고 템플릿 + 30일 플래너 + 부록 5개 · 프로필 링크에서 목차를 확인하세요. #말하기 #소통 #PREP #설득 #스피치`,
  },
  "negotiation-skills": {
    prompt: `정사각형 1:1 비율, 750x750px 프리미엄 디지털 일러스트.
짙은 오렌지-딥오렌지 그라데이션 배경(#ea580c → #9a3412), 중앙에 악수하는 두 손이 빛을 발하며 떠 있음.
악수 위에 균형 잡힌 저울이 황금빛으로 빛나고, 주변으로 동전·계약서·체크마크 아이콘이 원형으로 배치되어 빛남.
배경에서 오렌지-앰버 톤 에너지 파동이 퍼져나옴.
상단에 거대한 흰색 텍스트: "84%".
중앙 하단에 굵은 흰색 글씨: "기업은 협상을 기대하고 있습니다".
시네마틱 조명, 오렌지 + 딥오렌지 글로우 + 흰색 악센트.
실제 사람 없음, 브랜드 로고 없음.`,
    metaDesc: `기업의 84%는 연봉 협상을 기대하는데, 62%의 직장인은 한 번도 안 합니다. BATNA 전략·앵커링·FBI 라벨링·미러링·연봉 스크립트 3종·한국 문화 협상법·30일 플랜. 10챕터 + 준비 체크리스트 + BATNA 워크시트 + 이메일 템플릿 + 부록 5개 · 프로필 링크에서 목차를 확인하세요. #협상 #연봉협상 #BATNA #비즈니스 #커뮤니케이션`,
  },
  "saying-no": {
    prompt: `정사각형 1:1 비율, 750x750px 프리미엄 디지털 일러스트.
짙은 보라-딥퍼플 그라데이션 배경(#7c3aed → #4c1d95), 중앙에 방패와 하트가 겹쳐진 형태가 빛을 발하며 떠 있음.
방패 표면에서 부정적 요청(말풍선)이 튕겨나가고, 하트에서 따뜻한 보라빛 에너지가 퍼져나옴.
배경에서 보라-라벤더 톤 에너지 파동이 퍼져나옴.
상단에 거대한 흰색 텍스트: "20개".
중앙 하단에 굵은 흰색 글씨: "거절 스크립트로 나를 지키세요".
시네마틱 조명, 보라 + 딥퍼플 글로우 + 흰색 악센트.
실제 사람 없음, 브랜드 로고 없음.`,
    metaDesc: `'괜찮아, 내가 할게' — 그 말이 진심인 적이 몇 번이나 되시나요? 거절 못하는 건 성격이 아니라 학습된 행동입니다. 직장·친구·가족·소비 상황별 거절 스크립트 20개 + 경계 설정 워크시트 + 30일 거절 연습 플랜. 10챕터 + 부록 5개 · 프로필 링크에서 목차를 확인하세요. #거절 #자기보호 #경계 #인간관계 #착한아이콤플렉스`,
  },
};

function buildThumbnailPrompt(id: string): string {
  const p = PRODUCT_INFO[id];
  if (!p) return "";
  return p.prompt;
}

function buildMetaDesc(id: string): string {
  const p = PRODUCT_INFO[id];
  if (!p) return "";
  return p.metaDesc;
}

/* ═══════════════════════════════════════════
   외부 API
   ═══════════════════════════════════════════ */

export interface DetailOutput {
  id: string;
  title: string;
  emoji: string;
  detailHtml: string;
  detailSize: number;
  coverPrompt: string;
  marketingCopy: string;
  thumbnailPrompt: string;
  metaDesc: string;
}

const BOOK_META = [
  { id: "diet-secrets", title: "다이어트 서바이벌 시스템", emoji: "🏋️", builder: buildDietSecrets },
  { id: "endocrine-disruptors", title: "생활 속 환경호르몬과 질병", emoji: "🧪", builder: buildEndocrineDisruptors },
  { id: "declutter-clean", title: "정리와 청소의 기술", emoji: "🧹", builder: buildDeclutterClean },
  { id: "glp1-guide", title: "GLP-1 비만약 완전 가이드", emoji: "💊", builder: buildGlp1Guide },
  { id: "slow-aging", title: "4주 저속노화 리셋", emoji: "🌿", builder: buildSlowAging },
  { id: "love-skills", title: "밀당 없이 사랑받는 연애의 기술", emoji: "💕", builder: buildLoveSkills },
  { id: "ai-sidejob", title: "AI 부업 자동화 시스템", emoji: "🤖", builder: buildAiSidejob },
  { id: "threads-marketing", title: "0팔로워 스레드 마케팅", emoji: "🧵", builder: buildThreadsMarketing },
  { id: "eisenhower-matrix", title: "아이젠하워 매트릭스", emoji: "⏱️", builder: buildEisenhowerMatrix },
  { id: "deep-focus", title: "딥포커스, 초집중의 기술", emoji: "🎯", builder: buildDeepFocus },
  { id: "storytelling", title: "스토리텔링의 기술", emoji: "📖", builder: buildStorytelling },
  { id: "customer-retention", title: "평생고객 만들기", emoji: "🤝", builder: buildCustomerRetention },
  { id: "launch-storytelling", title: "완판의 런칭 스토리텔링", emoji: "🚀", builder: buildLaunchStorytelling },
  { id: "money-psychology", title: "돈의 심리학", emoji: "💰", builder: buildMoneyPsychology },
  { id: "idea-validation", title: "사업 아이디어 검증법", emoji: "🔬", builder: buildIdeaValidation },
  { id: "micro-audience", title: "팔로워 1,000명 수익화", emoji: "👥", builder: buildMicroAudience },
  { id: "writing-formula", title: "뇌에 박히는 글쓰기 공식", emoji: "✍️", builder: buildWritingFormula },
  { id: "sns-growth", title: "0원 SNS 계정 키우기", emoji: "📱", builder: buildSnsGrowth },
  { id: "personal-branding", title: "퍼스널 브랜딩 가이드", emoji: "🎤", builder: buildPersonalBranding },
  { id: "business-model", title: "비즈니스 모델 설계법", emoji: "📊", builder: buildBusinessModel },
  { id: "selling-invisible", title: "무형 상품 완판 설득법", emoji: "💎", builder: buildSellingInvisible },
  { id: "diabetes-guide", title: "당뇨 완전 가이드", emoji: "🩸", builder: buildDiabetesGuide },
  { id: "odyssey-life", title: "오디세이아 인생 항해술", emoji: "⚓", builder: buildOdysseyLife },
  { id: "hypertension-guide", title: "혈압 완전 가이드", emoji: "🫀", builder: buildHypertensionGuide },
  { id: "cholesterol-guide", title: "고지혈증 완전 가이드", emoji: "🧬", builder: buildCholesterolGuide },
  { id: "otc-medicine-guide", title: "상비약 완전 가이드", emoji: "💊", builder: buildOtcMedicineGuide },
  { id: "speaking-skills", title: "말 잘하는 사람들의 비밀", emoji: "🎙️", builder: buildSpeakingSkills },
  { id: "negotiation-skills", title: "협상의 기술", emoji: "🤝", builder: buildNegotiationSkills },
  { id: "saying-no", title: "거절 잘하는 사람들의 비밀", emoji: "🛡️", builder: buildSayingNo },
];

export function generateAllDetails(): DetailOutput[] {
  return [...hanjaDetails(), ...BOOK_META.map((b) => {
    const html = b.builder();
    return {
      id: b.id,
      title: b.title,
      emoji: b.emoji,
      detailHtml: html,
      detailSize: html.length,
      coverPrompt: buildCoverPrompt(b.id),
      marketingCopy: buildMarketingCopy(b.id),
      thumbnailPrompt: buildThumbnailPrompt(b.id),
      metaDesc: buildMetaDesc(b.id),
    };
  })];
}
