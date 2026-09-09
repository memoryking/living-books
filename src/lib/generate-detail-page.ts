/**
 * 아임웹 쇼핑 상세페이지 HTML 생성기
 * 각 책마다 고유한 스토리텔링·디자인으로 구성
 */

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/* ═══════════════════════════════════════════
   공통 섹션 빌더 (다양한 레이아웃)
   ═══════════════════════════════════════════ */

/** 모바일 반응형 스타일 — 각 상세페이지 상단에 삽입 */
const mobileStyles = `<style>
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
const sec = (bg: string, extra = "") =>
  `display:block;box-sizing:border-box;width:100%;max-width:860px;margin:0 auto;padding:72px 40px;text-align:center;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;${bg}${extra}`;

/** 큰 숫자 강조 카드 */
function statGrid(items: { num: string; label: string; color: string }[]): string {
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
function redditQuote(text: string, sub: string): string {
  return `<div style="max-width:580px;margin:20px auto;padding:24px 28px;background:#fff;border-radius:16px;border-left:4px solid #ff4500;text-align:left;box-shadow:0 1px 8px rgba(0,0,0,.05);">
  <div style="font-size:15px;line-height:1.75;color:#374151;font-style:italic;">"${esc(text)}"</div>
  <div style="margin-top:12px;font-size:12px;color:#9ca3af;">— r/${esc(sub)}</div>
</div>`;
}

/** Before → After 비교 */
function beforeAfter(
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
function checkList(items: string[], emoji: string, bg: string): string {
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
function tocItem(num: string, title: string, highlight: boolean, accent: string): string {
  const bg = highlight
    ? `background:${accent};color:#fff;font-weight:700;`
    : "background:#f9fafb;color:#374151;";
  return `<div style="display:flex;align-items:center;gap:14px;padding:14px 20px;margin:8px auto;max-width:600px;border-radius:10px;text-align:left;${bg}">
  <span style="font-size:13px;font-weight:800;opacity:.6;width:28px;">${num}</span>
  <span style="font-size:15px;line-height:1.5;">${esc(title)}${highlight ? " ⭐" : ""}</span>
</div>`;
}

/** FAQ 아이템 */
function faqItem(q: string, a: string): string {
  return `<div style="max-width:600px;margin:12px auto;padding:20px 24px;background:#fff;border-radius:12px;text-align:left;box-shadow:0 1px 4px rgba(0,0,0,.04);">
  <div style="font-size:15px;font-weight:700;color:#111827;margin-bottom:8px;">${esc(q)}</div>
  <div style="font-size:14px;line-height:1.7;color:#6b7280;">${esc(a)}</div>
</div>`;
}

/** 큰 텍스트 헤드라인 */
function bigTitle(line1: string, line2?: string, color = "#111827"): string {
  const text = line2 ? `${esc(line1)}<br>${esc(line2)}` : esc(line1);
  return `<h2 style="margin:0 0 16px;font-size:clamp(28px,5vw,44px);font-weight:800;line-height:1.3;color:${color};letter-spacing:-0.5px;">${text}</h2>`;
}

function subtitle(text: string, color = "#6b7280"): string {
  return `<p style="margin:0 0 32px;font-size:17px;line-height:1.7;color:${color};">${esc(text)}</p>`;
}

function label(text: string, color = "#9ca3af"): string {
  return `<div style="font-size:12px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:${color};margin-bottom:12px;">${esc(text)}</div>`;
}

function divider(): string {
  return `<div style="width:60px;height:3px;background:#e5e7eb;margin:0 auto 0;border-radius:2px;"></div>`;
}

function spacer(h = 40): string {
  return `<div style="height:${h}px;"></div>`;
}

/** 가격 뱃지 — 취소선 정가 + 특가 */
function priceBadge(originalPrice: string, salePrice: string, note: string): string {
  return `<div style="display:inline-flex;align-items:center;gap:12px;padding:12px 28px;background:#fff;border-radius:999px;box-shadow:0 2px 12px rgba(0,0,0,.08);margin:16px 0;">
  <span style="font-size:15px;color:#9ca3af;text-decoration:line-through;">${esc(originalPrice)}</span>
  <span style="font-size:28px;font-weight:800;color:#dc2626;">${esc(salePrice)}</span>
  <span style="font-size:11px;color:#fff;background:#dc2626;padding:3px 10px;border-radius:20px;font-weight:700;">${esc(note)}</span>
</div>`;
}

/** 긴급성 띠배너 — 히어로 하단 */
function urgencyBanner(): string {
  return `<div style="max-width:500px;margin:24px auto 0;padding:14px 20px;background:linear-gradient(135deg,#fef3c7,#fde68a);border-radius:10px;border:1px solid #f59e0b;">
  <span style="font-size:14px;font-weight:600;color:#92400e;">⏰ 출시 특가 — 이 가격은 곧 인상될 수 있습니다</span>
</div>`;
}

/** CTA 버튼 블록 — 취소선 가격 포함 */
function ctaBlock(emoji: string, headline1: string, headline2: string, subtext: string, accent: string): string {
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
    <div style="font-size:13px;color:rgba(255,255,255,.5);">1개월 열람 · 계속 업데이트 · 유원소망약국 김약사</div>
  </section>`;
}

/** 풀 미리보기 섹션 — 실제 본문 + 섹션 헤딩 목록 */
function fullPreview(
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
function priceAnchor(
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
function midCta(text: string, accent: string): string {
  return `<div style="max-width:600px;margin:40px auto;padding:24px 32px;background:linear-gradient(135deg,${accent},${accent}dd);border-radius:16px;text-align:center;">
  <p style="font-size:17px;font-weight:700;color:#fff;margin:0 0 4px;">${esc(text)}</p>
  <p style="font-size:13px;color:rgba(255,255,255,.7);margin:0;">↓ 아래에서 계속 읽어보세요</p>
</div>`;
}

/** 소셜프루프 띠배너 */
function proofBanner(items: string[], bg: string, color: string): string {
  return `<div style="display:flex;flex-wrap:wrap;justify-content:center;gap:24px;padding:20px;background:${bg};border-radius:12px;margin:24px 0;">
${items
  .map(
    (item) =>
      `<span style="font-size:13px;font-weight:600;color:${color};">${esc(item)}</span>`
  )
  .join("\n")}
</div>`;
}

/** 크로스셀 섹션 */
function crossSell(
  currentId: string,
  books: { id: string; emoji: string; title: string; oneLiner: string }[]
): string {
  const others = books.filter((b) => b.id !== currentId);
  return `<div style="max-width:600px;margin:32px auto;">
  <p style="font-size:14px;font-weight:600;color:#9ca3af;margin-bottom:16px;text-align:center;">이 가이드를 읽은 분들이 함께 본 책</p>
${others
  .map(
    (b) => `<div style="display:flex;align-items:center;gap:16px;padding:16px 20px;margin:8px 0;background:#fff;border-radius:12px;border:1px solid #f3f4f6;">
    <span style="font-size:32px;flex-shrink:0;">${b.emoji}</span>
    <div style="text-align:left;">
      <div style="font-size:15px;font-weight:700;color:#111827;">${esc(b.title)}</div>
      <div style="font-size:13px;color:#6b7280;margin-top:2px;">${esc(b.oneLiner)}</div>
    </div>
    <span style="margin-left:auto;font-size:14px;font-weight:700;color:#2563eb;flex-shrink:0;">1,000원</span>
  </div>`
  )
  .join("\n")}
</div>`;
}

const ALL_BOOKS_FOR_CROSSSELL = [
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
];

/* ═══════════════════════════════════════════
   1. 다이어트 서바이벌 시스템
   ═══════════════════════════════════════════ */

function buildDietSecrets(): string {
  return `<!-- 🏋️ 다이어트 서바이벌 시스템 — 아임웹 상세페이지 -->
<div class="dp-wrap" style="max-width:860px;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
${mobileStyles}

  <!-- Hero -->
  <section style="${sec("background:linear-gradient(160deg,#ecfdf5,#d1fae5,#a7f3d0);")}">
    ${label("LIVING GUIDE · 살아있는 정보책")}
    <div style="font-size:64px;margin-bottom:16px;">🏋️</div>
    ${bigTitle("다이어트는 의지력이 아닙니다.", "시스템입니다.")}
    ${subtitle("1,673명의 실패와 성공 데이터에서 뽑아낸 — 요요 없이 진짜 빠지는 법")}
    ${statGrid([
      { num: "1,673", label: "명의 실전 경험 분석", color: "#059669" },
      { num: "10", label: "개 챕터 + 보너스 5개", color: "#059669" },
      { num: "1,000", label: "원 · 1개월 열람", color: "#059669" },
    ])}
    ${priceBadge("3,900원", "1,000원", "출시 특가")}
    ${urgencyBanner()}
  </section>

  <!-- 공감: 실패 경험 -->
  <section style="${sec("background:#fff7ed;")}">
    ${bigTitle("수십 번 시도했는데", "3주 차에 항상 무너지죠?")}
    ${subtitle("혹시 이런 경험, 있지 않으세요?")}
    ${redditQuote("첫 2주는 항상 잘 돼. 체중계도 반응하고, 의지도 있고. 그런데 3주 차부터 폭식이 시작되고, 한 달이면 원래 체중 + 2kg이야. 이걸 10년째 반복 중.", "loseit")}
    ${redditQuote("다이어트의 진짜 적은 음식이 아니야. 퇴근 후 지친 상태에서 냉장고 앞에 서는 그 순간이야.", "fitness")}
    ${redditQuote("요요는 의지력 문제가 아니에요. 뇌가 '기근이다!'라고 판단해서 식욕 호르몬을 폭발시키는 거예요. 과학입니다.", "nutrition")}
  </section>

  <!-- Before → After -->
  <section style="${sec("background:#f9fafb;")}">
    ${bigTitle("읽기 전과 후,", "이렇게 달라집니다")}
    ${beforeAfter(
      [
        "극단적 칼로리 제한 → 3주 폭식 → 요요",
        "의지력에 의존 → 자기 비난의 악순환",
        "유행 다이어트를 전전긍긍",
        "감정적 식사를 의지로 참으려 함",
      ],
      [
        "300~500kcal 적자 → 느리지만 지속 가능",
        "환경 설계 → 의지력이 필요 없는 시스템",
        "CICO 원리 이해 → 어떤 방법이든 적용",
        "감정 인식 → '왜 먹는지' 파악 후 대처",
      ],
      "지금까지의 다이어트",
      "이 가이드 이후",
      "#fef2f2",
      "#f0fdf4"
    )}
  </section>

  <!-- 목차 -->
  <section style="${sec("background:#fff;")}">
    ${label("TABLE OF CONTENTS")}
    ${bigTitle("무엇을 알게 되나요?")}
    ${subtitle("각 챕터는 독립적으로 읽을 수 있습니다")}
    ${tocItem("01", "다이어트의 진짜 적은 음식이 아니다", false, "#059669")}
    ${tocItem("02", "CICO — 유일한 법칙, 하지만 함정이 있다", false, "#059669")}
    ${tocItem("03", "환경을 바꾸면 의지력이 필요 없다", true, "#059669")}
    ${tocItem("04", "감정적 식사 — '왜 먹는지'가 더 중요하다", true, "#059669")}
    ${tocItem("05", "3주 벽 — 모든 다이어트가 무너지는 그 시점", true, "#059669")}
    ${tocItem("06", "Fail Fast — 한 끼 실수를 30초에 리셋", false, "#059669")}
    ${tocItem("07", "즐기면서 빠지는 식단의 현실적 규칙", false, "#059669")}
    ${tocItem("08", "아침 산책이 인생을 바꾼다", false, "#059669")}
    ${tocItem("09", "체중계 숫자에 휘둘리지 마라", false, "#059669")}
    ${tocItem("10", "유지 모드 — 감량보다 중요한 것", true, "#059669")}
    ${spacer(16)}
    <div style="font-size:13px;color:#9ca3af;">+ 보너스 5개: 3주 돌파 전략 / 감정적 식사 탈출 / 회식 서바이벌 / 냉장고 리셋 / 유지 모드 체크리스트</div>
  </section>

  <!-- 미리보기 -->
  ${fullPreview(
    "3",
    "환경을 바꾸면 의지력이 필요 없다",
    [
      '"냉장고를 바꾸면 몸이 바뀐다"',
      "행동경제학이 알려주는 비밀: 기본값을 바꿔라",
      "환경 설계 전략 6가지",
      "환경 vs 의지력: 최종 비교",
      "실천 과제",
    ],
    `<p style="margin:0 0 16px;">노벨경제학상을 받은 행동경제학자 리처드 탈러는 이런 사실을 발견했습니다:</p>
      <p style="margin:0 0 16px;font-weight:700;font-size:17px;color:#111;">사람들은 "기본 선택지(default)"를 거의 항상 고른다.</p>
      <p style="margin:0 0 16px;">구내식당 실험에서, 과일을 눈높이에 놓고 디저트를 구석에 놓자 과일 소비가 <strong>25% 증가</strong>했습니다. 메뉴가 바뀐 것이 아닙니다. <strong>위치만 바뀌었습니다.</strong></p>
      <p style="margin:0 0 16px;padding:16px;background:#f0fdf4;border-radius:10px;font-weight:600;color:#059669;">💡 의지력으로 행동을 바꾸려 하지 말고, 환경을 바꿔서 행동이 자동으로 바뀌게 하라.</p>
      <p style="margin:0;">코넬 대학교 연구: 접시 크기를 12인치에서 10인치로 줄이면, 같은 양의 음식이 <strong>22% 더 많아 보입니다.</strong> 작은 접시에 가득 담으면, 적게 먹으면서도 "충분히 먹었다"는 만족감을 느낍니다.</p>`,
    "#059669",
    "linear-gradient(160deg,#f0fdf4,#ecfdf5)"
  )}

  <!-- 추천 대상 -->
  <section style="${sec("background:#fff;")}">
    ${bigTitle("이런 분이라면,", "이 가이드가 답입니다")}
    ${checkList(
      [
        "수십 번 다이어트를 시도했지만 3주를 못 넘긴 분",
        "요요를 반복하며 '나는 의지가 약하다'고 자책하는 분",
        "먹는 즐거움은 포기하고 싶지 않은 분",
        "과학적 원리를 이해하고 자기만의 시스템을 만들고 싶은 분",
      ],
      "✅",
      "#f0fdf4"
    )}
    ${spacer(16)}
    ${checkList(
      [
        "마법의 다이어트 약을 찾는 분 (그런 건 없습니다)",
        "읽기만 하고 실천하지 않을 분",
      ],
      "🚫",
      "#fef2f2"
    )}
  </section>

  <!-- FAQ -->
  <section style="${sec("background:#f9fafb;")}">
    ${bigTitle("자주 묻는 질문")}
    ${faqItem("극단적 칼로리 제한 없이 정말 빠질 수 있나요?", "네. 300~500kcal 적자면 한 달 2~3kg, 1년이면 24~36kg입니다. 극단적 제한은 뇌의 생존 반응을 깨워 오히려 역효과입니다.")}
    ${faqItem("3주 차에 무너지는 이유가 뭔가요?", "초기 동기 소멸 + 수분 빠진 후 진짜 지방 감량 속도만 남아 정체감 상승. 습관 형성 66일 중 가장 힘든 중간 지점입니다.")}
    ${faqItem("이 가이드는 어떤 형식인가요?", "웹에서 읽는 디지털 가이드입니다. 결제 후 1개월간 열람 가능하며, 내용은 계속 업데이트됩니다.")}
  </section>

  <!-- 가격 앵커링 -->
  <section style="${sec("background:#fff;")}">
    ${bigTitle("이 가이드의 가치")}
    ${priceAnchor(
      [
        { what: "영양사 1:1 상담", price: "50,000원~", note: "1회" },
        { what: "다이어트 전문 서적", price: "18,000원~", note: "업데이트 없음" },
        { what: "온라인 다이어트 강의", price: "99,000원~", note: "일방적 강의" },
      ],
      "1,000원",
      "1개월 열람 · 계속 업데이트",
      "#059669"
    )}
    ${proofBanner(
      ["📊 Reddit 1,673명 분석", "🔄 계속 업데이트", "💊 약사가 검증", "📱 모바일 최적화"],
      "#f0fdf4",
      "#059669"
    )}
  </section>

  <!-- 크로스셀 -->
  <section style="${sec("background:#f9fafb;")}">
    ${crossSell("diet-secrets", ALL_BOOKS_FOR_CROSSSELL)}
  </section>

  <!-- CTA -->
  ${ctaBlock("🏋️", '"이번이 마지막 다이어트"가', "진짜가 되는 시스템", "계속 업데이트되는 살아있는 가이드", "#059669")}

</div>`;
}

/* ═══════════════════════════════════════════
   2. 생활 속 환경호르몬과 질병
   ═══════════════════════════════════════════ */

function buildEndocrineDisruptors(): string {
  return `<!-- 🧪 생활 속 환경호르몬과 질병 — 아임웹 상세페이지 -->
<div class="dp-wrap" style="max-width:860px;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
${mobileStyles}

  <!-- Hero -->
  <section style="${sec("background:linear-gradient(160deg,#f0fdfa,#ccfbf1,#99f6e4);")}">
    ${label("LIVING GUIDE · 살아있는 정보책")}
    <div style="font-size:64px;margin-bottom:16px;">🧪</div>
    <h2 style="margin:0 0 16px;font-size:clamp(28px,5vw,44px);font-weight:800;line-height:1.3;color:#134e4a;letter-spacing:-0.5px;">"BPA Free"라고 쓰여 있으면<br>안전한 거 아닌가요?</h2>
    ${subtitle("아닙니다. BPS, BPF가 대신 들어갑니다. — 이 가이드가 진짜를 알려드립니다.")}
    ${statGrid([
      { num: "80%", label: "노출 감소 — 주방만 바꿔도", color: "#0d9488" },
      { num: "20", label: "개 피해야 할 성분 정리", color: "#0d9488" },
      { num: "10+5", label: "챕터 + 보너스 체크리스트", color: "#0d9488" },
    ])}
    ${priceBadge("3,900원", "1,000원", "출시 특가")}
    ${urgencyBanner()}
  </section>

  <!-- 문제 인식: 충격 팩트 -->
  <section style="${sec("background:#1a1a2e;color:#fff;")}">
    <div style="font-size:13px;color:#5eead4;font-weight:600;letter-spacing:2px;margin-bottom:24px;">FACTS YOU NEED TO KNOW</div>
    <div style="display:flex;flex-wrap:wrap;gap:20px;justify-content:center;margin:24px 0;">
      <div style="flex:1 1 240px;max-width:260px;padding:32px 24px;background:rgba(255,255,255,.05);border:1px solid rgba(94,234,212,.2);border-radius:16px;">
        <div style="font-size:32px;font-weight:800;color:#5eead4;margin-bottom:8px;">93%</div>
        <div style="font-size:14px;color:rgba(255,255,255,.7);line-height:1.6;">미국인의 소변에서<br>BPA가 검출됩니다</div>
        <div style="font-size:11px;color:rgba(255,255,255,.4);margin-top:8px;">— CDC NHANES</div>
      </div>
      <div style="flex:1 1 240px;max-width:260px;padding:32px 24px;background:rgba(255,255,255,.05);border:1px solid rgba(94,234,212,.2);border-radius:16px;">
        <div style="font-size:32px;font-weight:800;color:#5eead4;margin-bottom:8px;">영원히</div>
        <div style="font-size:14px;color:rgba(255,255,255,.7);line-height:1.6;">PFAS는 분해되지 않아<br>"영원한 화학물질"이라 불립니다</div>
        <div style="font-size:11px;color:rgba(255,255,255,.4);margin-top:8px;">— EPA</div>
      </div>
      <div style="flex:1 1 240px;max-width:260px;padding:32px 24px;background:rgba(255,255,255,.05);border:1px solid rgba(94,234,212,.2);border-radius:16px;">
        <div style="font-size:32px;font-weight:800;color:#5eead4;margin-bottom:8px;">5g</div>
        <div style="font-size:14px;color:rgba(255,255,255,.7);line-height:1.6;">매주 신용카드 1장 분량의<br>미세플라스틱을 섭취합니다</div>
        <div style="font-size:11px;color:rgba(255,255,255,.4);margin-top:8px;">— WWF 연구</div>
      </div>
    </div>
    <p style="font-size:15px;color:rgba(255,255,255,.6);margin-top:24px;">하지만 공포에 빠질 필요는 없습니다. <strong style="color:#5eead4;">할 수 있는 것부터</strong> 바꾸면 됩니다.</p>
  </section>

  <!-- 공감 -->
  <section style="${sec("background:#fff7ed;")}">
    ${bigTitle("이런 혼란,", "느끼고 계시죠?")}
    ${redditQuote("BPA Free 텀블러를 샀는데, 나중에 보니 BPS가 들어있대. 그게 더 나쁠 수 있다고? 뭘 믿어야 하는 거야.", "science")}
    ${redditQuote("아이 젖병, 장난감, 카시트... 전부 걱정인데 하나하나 찾아볼 시간이 없어. 누가 정리 좀 해줬으면.", "Parenting")}
    ${redditQuote("유기농만 사면 되는 줄 알았는데 PFAS는 유기농 농장 토양에도 있다고? 도대체 어디서부터 시작해야 해?", "environment")}
  </section>

  <!-- 해결: 핵심 원칙 -->
  <section style="${sec("background:linear-gradient(160deg,#f0fdfa,#fff);")}">
    <div style="max-width:560px;margin:0 auto;padding:40px;background:#fff;border-radius:20px;border:2px solid #99f6e4;box-shadow:0 4px 24px rgba(13,148,136,.08);">
      <div style="font-size:48px;margin-bottom:16px;">💡</div>
      <h2 style="font-size:28px;font-weight:800;color:#134e4a;margin:0 0 16px;">이 가이드의 핵심 원칙</h2>
      <p style="font-size:20px;font-weight:700;color:#0d9488;margin:0 0 12px;">20%만 바꿔도 80% 노출이 줄어듭니다</p>
      <p style="font-size:15px;color:#6b7280;line-height:1.7;margin:0;">모든 것을 바꿀 필요 없습니다.<br>주방 → 세면도구 → 아이 용품 순서로,<br>예산에 맞게, 할 수 있는 것부터.</p>
    </div>
  </section>

  <!-- 목차 -->
  <section style="${sec("background:#fff;")}">
    ${label("TABLE OF CONTENTS")}
    ${bigTitle("무엇을 알게 되나요?")}
    ${tocItem("01", "환경호르몬이란 무엇인가 — 과학적 정의와 작동 원리", false, "#0d9488")}
    ${tocItem("02", "BPA/BPS/프탈레이트 — 'BPA Free'의 함정", true, "#0d9488")}
    ${tocItem("03", "PFAS — 영원한 화학물질의 실체", true, "#0d9488")}
    ${tocItem("04", "미세플라스틱 — 이미 당신 안에 있다", false, "#0d9488")}
    ${tocItem("05", "주방 — 가장 쉽게 바꿀 수 있는 곳", true, "#0d9488")}
    ${tocItem("06", "화장품·세면도구 — '향료'가 위험한 이유", false, "#0d9488")}
    ${tocItem("07", "아이와 임산부 — 가장 취약한 그룹", true, "#0d9488")}
    ${tocItem("08", "식품과 물 — 먹고 마시는 것의 진실", false, "#0d9488")}
    ${spacer(16)}
    <div style="font-size:13px;color:#9ca3af;">+ 보너스 5개: 주방 교체 가이드 / 성분표 해독기 / 아이 안전 체크리스트 / 세면도구 교체 / 가정 리셋</div>
  </section>

  <!-- 미리보기 -->
  ${fullPreview(
    "5",
    "주방 — 가장 쉽게 바꿀 수 있는 곳",
    [
      "왜 주방부터인가",
      "1단계: 플라스틱 용기 → 유리/스테인리스",
      "2단계: 논스틱 팬 → 스테인리스/주철/세라믹",
      "3단계: 랩 → 밀랍랩 또는 실리콘 뚜껑",
      "4단계: 정수기 — 수돗물의 진실",
    ],
    `<p style="margin:0 0 16px;">프탈레이트의 체내 반감기는 약 12시간입니다. BPA도 6시간 정도입니다. <strong>노출원을 차단하면 며칠 안에 체내 농도가 크게 감소합니다.</strong></p>
      <p style="margin:0 0 16px;padding:16px;background:#fef2f2;border-radius:10px;font-weight:700;color:#991b1b;">🚨 가장 위험한 행동: 플라스틱 용기에 음식을 넣고 전자레인지 돌리기</p>
      <p style="margin:0 0 16px;">이것 하나만 멈추세요. 이것이 이 책 전체에서 <strong>가장 중요한 실천 사항</strong>일 수 있습니다.</p>
      <p style="margin:0 0 16px;">2023년 네브래스카 대학 연구에 따르면, 전자레인지에 3분간 가열한 플라스틱 용기에서 <strong>수십억 개의 나노플라스틱</strong>이 방출되었습니다.</p>
      <p style="margin:0;padding:16px;background:#f0fdfa;border-radius:10px;color:#0d9488;">💡 그리고 한 가지 더: 생수 속 미세플라스틱은 수돗물의 <strong>2배 이상</strong>입니다 (2018년 SUNY 연구). 안전하려고 선택한 것이 오히려 더 위험했던 셈입니다.</p>`,
    "#0d9488",
    "linear-gradient(160deg,#f0fdfa,#ecfdf5)"
  )}

  <!-- 추천 + FAQ -->
  <section style="${sec("background:#f9fafb;")}">
    ${bigTitle("이런 분께 추천합니다")}
    ${checkList(
      [
        "환경호르몬 정보를 봤지만 무엇이 과장인지 구분 못 하는 분",
        "아이를 키우며 용품 선택이 불안한 부모",
        "유기농·안전 제품을 사고 싶지만 예산이 한정된 분",
        "과학적 근거 기반으로 실천법을 정리하고 싶은 분",
      ],
      "✅",
      "#f0fdfa"
    )}
    ${spacer(40)}
    ${bigTitle("자주 묻는 질문")}
    ${faqItem("BPA Free 제품이 정말 안전한가요?", "아닙니다. BPS, BPF 등 대체물질이 사용되며 일부는 BPA만큼 위험합니다. 가이드에서 대안을 구체적으로 알려드립니다.")}
    ${faqItem("예산이 적다면 뭘 먼저 바꿔야 하나요?", "주방 플라스틱 용기 → 스테인리스/유리로 교체가 1순위입니다. 가장 적은 비용으로 가장 큰 노출 감소 효과를 봅니다.")}
    ${faqItem("이 가이드는 어떤 형식인가요?", "웹에서 읽는 디지털 가이드입니다. 결제 후 1개월간 열람 가능하며, 새 연구가 나오면 업데이트됩니다.")}
  </section>

  <!-- 가격 앵커링 -->
  <section style="${sec("background:#fff;")}">
    ${bigTitle("이 가이드의 가치")}
    ${priceAnchor(
      [
        { what: "환경 컨설팅 업체", price: "200,000원~", note: "가정용" },
        { what: "환경호르몬 관련 서적", price: "20,000원~", note: "업데이트 없음" },
        { what: "성분 분석 앱 구독", price: "5,000원/월", note: "성분만 확인" },
      ],
      "1,000원",
      "실천 가이드 + 체크리스트 5개 + 업데이트",
      "#0d9488"
    )}
    ${proofBanner(
      ["🔬 NIH/EPA 교차 검증", "📋 체크리스트 5종", "💊 약사가 검증", "🔄 새 연구 반영 업데이트"],
      "#f0fdfa",
      "#0d9488"
    )}
  </section>

  <!-- 크로스셀 -->
  <section style="${sec("background:#f9fafb;")}">
    ${crossSell("endocrine-disruptors", ALL_BOOKS_FOR_CROSSSELL)}
  </section>

  <!-- CTA -->
  ${ctaBlock("🧪", "불안하지 않아도 됩니다.", "할 수 있는 것부터 바꾸세요.", "3가지만 바꾸면 80%가 해결됩니다.", "#0d9488")}

</div>`;
}

/* ═══════════════════════════════════════════
   3. 정리와 청소의 기술
   ═══════════════════════════════════════════ */

function buildDeclutterClean(): string {
  return `<!-- 🧹 정리와 청소의 기술 — 아임웹 상세페이지 -->
<div class="dp-wrap" style="max-width:860px;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
${mobileStyles}

  <!-- Hero -->
  <section style="${sec("background:linear-gradient(160deg,#fffbeb,#fef3c7,#fde68a);")}">
    ${label("LIVING GUIDE · 살아있는 정보책")}
    <div style="font-size:64px;margin-bottom:16px;">🧹</div>
    ${bigTitle("서랍 하나.", "5분 타이머.")}
    <p style="font-size:20px;color:#92400e;font-weight:600;margin:0 0 8px;">이것만으로 시작됩니다.</p>
    ${subtitle("정리는 의지력이 아닙니다. 시스템입니다. — Reddit 수백 명의 실전 경험 기반")}
    ${priceBadge("3,900원", "1,000원", "출시 특가")}
    ${urgencyBanner()}
  </section>

  <!-- 공감: 3단계 감정 -->
  <section style="${sec("background:#fff;")}">
    ${bigTitle("이 감정들,", "익숙하시죠?")}
    <div style="display:flex;flex-wrap:wrap;gap:20px;justify-content:center;margin:32px 0;">
      <div style="flex:1 1 220px;max-width:260px;padding:28px 24px;background:#fef2f2;border-radius:16px;text-align:center;">
        <div style="font-size:36px;margin-bottom:12px;">😰</div>
        <div style="font-size:16px;font-weight:700;color:#991b1b;margin-bottom:8px;">압도감</div>
        <div style="font-size:14px;color:#7f1d1d;line-height:1.6;">집 전체를 보면<br>아무것도 못 하겠다</div>
      </div>
      <div style="flex:1 1 220px;max-width:260px;padding:28px 24px;background:#fff7ed;border-radius:16px;text-align:center;">
        <div style="font-size:36px;margin-bottom:12px;">🔄</div>
        <div style="font-size:16px;font-weight:700;color:#9a3412;margin-bottom:8px;">무한 반복</div>
        <div style="font-size:14px;color:#7c2d12;line-height:1.6;">주말 폭풍 청소 →<br>3일 만에 원점</div>
      </div>
      <div style="flex:1 1 220px;max-width:260px;padding:28px 24px;background:#fefce8;border-radius:16px;text-align:center;">
        <div style="font-size:36px;margin-bottom:12px;">💔</div>
        <div style="font-size:16px;font-weight:700;color:#854d0e;margin-bottom:8px;">감정적 짐</div>
        <div style="font-size:14px;color:#713f12;line-height:1.6;">물건에 감정이 담겨서<br>차마 못 버린다</div>
      </div>
    </div>
    ${redditQuote("ADHD 있는 사람으로서 말할게. 정리는 'clean your room' 같은 큰 명령이 문제야. '서랍 하나만 해'가 정답이야. 5분이면 돼.", "ADHD")}
  </section>

  <!-- 핵심 시스템 -->
  <section style="${sec("background:#78350f;color:#fff;")}">
    <div style="font-size:13px;color:#fde68a;font-weight:600;letter-spacing:2px;margin-bottom:24px;">THE SYSTEM</div>
    <h2 style="font-size:clamp(28px,5vw,44px);font-weight:800;color:#fff;margin:0 0 16px;">깨끗한 집을 유지하는 사람들의 비밀</h2>
    <p style="font-size:17px;color:rgba(255,255,255,.7);margin:0 0 32px;line-height:1.7;">그들은 '대청소'를 하지 않습니다.</p>
    <div style="display:flex;flex-wrap:wrap;gap:16px;justify-content:center;">
      <div style="flex:1 1 200px;max-width:260px;padding:24px;background:rgba(255,255,255,.08);border-radius:16px;border:1px solid rgba(253,230,138,.2);">
        <div style="font-size:28px;font-weight:800;color:#fde68a;">규칙 1</div>
        <div style="font-size:15px;color:rgba(255,255,255,.8);margin-top:8px;line-height:1.6;">모든 물건에 자리를 정한다<br><small style="color:rgba(255,255,255,.5);">"내려놓지 말고 치워라"</small></div>
      </div>
      <div style="flex:1 1 200px;max-width:260px;padding:24px;background:rgba(255,255,255,.08);border-radius:16px;border:1px solid rgba(253,230,138,.2);">
        <div style="font-size:28px;font-weight:800;color:#fde68a;">규칙 2</div>
        <div style="font-size:15px;color:rgba(255,255,255,.8);margin-top:8px;line-height:1.6;">매일 5~10분만 한다<br><small style="color:rgba(255,255,255,.5);">타이머를 켜고 시작</small></div>
      </div>
      <div style="flex:1 1 200px;max-width:260px;padding:24px;background:rgba(255,255,255,.08);border-radius:16px;border:1px solid rgba(253,230,138,.2);">
        <div style="font-size:28px;font-weight:800;color:#fde68a;">규칙 3</div>
        <div style="font-size:15px;color:rgba(255,255,255,.8);margin-top:8px;line-height:1.6;">매일 밤 주방만 리셋한다<br><small style="color:rgba(255,255,255,.5);">아침이 달라진다</small></div>
      </div>
    </div>
  </section>

  <!-- 목차 -->
  <section style="${sec("background:#fffbeb;")}">
    ${label("TABLE OF CONTENTS")}
    ${bigTitle("무엇을 알게 되나요?")}
    ${tocItem("01", "왜 정리가 안 되는가 — 뇌과학적 이유", false, "#d97706")}
    ${tocItem("02", "서랍 하나부터 — 시작의 기술", true, "#d97706")}
    ${tocItem("03", "'내려놓지 말고 치워라' — 원터치 규칙", false, "#d97706")}
    ${tocItem("04", "5분 타이머의 마법", true, "#d97706")}
    ${tocItem("05", "매일 밤 주방 리셋", true, "#d97706")}
    ${tocItem("06", "감정적 짐 내려놓기 — 못 버리는 것들", false, "#d97706")}
    ${tocItem("07", "The Basket — ADHD 친화적 시스템", true, "#d97706")}
    ${tocItem("08", "방별·시간별 루틴 설계", false, "#d97706")}
    ${tocItem("09", "가족/동거인과 함께하는 법", false, "#d97706")}
    ${tocItem("10", "정리는 끝나지 않는다 — 그래서 시스템이다", false, "#d97706")}
    ${spacer(16)}
    <div style="font-size:13px;color:#9ca3af;">+ 보너스 5개: 30일 챌린지 / 주방 완전 리셋 / 옷장 정리 / ADHD·우울증 특별 가이드 / 가족 참여 전략</div>
  </section>

  <!-- 미리보기 -->
  ${fullPreview(
    "4",
    "5분 타이머의 마법",
    [
      "압도감을 이기는 가장 쉬운 무기",
      "왜 5분인가",
      "5분 타이머 실전 가이드",
      "ADHD와 5분 타이머",
      "우울증과 5분 타이머",
    ],
    `<p style="margin:0 0 16px;">정리에서 가장 어려운 것은 <strong>"시작하는 것"</strong>입니다. 일단 시작하면, 관성이 생깁니다.</p>
      <p style="margin:0 0 16px;">심리학에서 이것을 <strong>"제이가르닉 효과(Zeigarnik Effect)"</strong>라고 합니다. 시작한 일은 끝내고 싶어지는 심리입니다. 5분 타이머는 시작의 장벽을 극도로 낮춰서 관성을 만들어줍니다.</p>
      <p style="margin:0 0 16px;">이것이 5분 타이머의 진짜 비밀입니다. "5분만 하자"고 시작하면, 대부분의 사람들은 <strong>15~20분을 하게 됩니다.</strong> 일단 시작하면 "여기까지만 더 하자"가 반복되기 때문입니다.</p>
      <p style="margin:0 0 16px;">수학적으로, 매일 5분씩 정리하면 한 달에 <strong>150분(2시간 30분)</strong>입니다. 일주일에 한 번 "제대로" 해야지 하면서 결국 안 하면 <strong>0분</strong>입니다.</p>
      <p style="margin:0;padding:16px;background:#fffbeb;border-radius:10px;font-weight:700;font-size:17px;color:#92400e;">💡 불완벽한 5분이 완벽한 0분보다 백 배 낫습니다.</p>`,
    "#d97706",
    "linear-gradient(160deg,#fffbeb,#fef3c7)"
  )}

  <!-- 추천 + FAQ -->
  <section style="${sec("background:#fff;")}">
    ${bigTitle("이런 분이라면,", "이 가이드가 답입니다")}
    ${checkList(
      [
        "시작할 수 없어 얼어붙는 분 (ADHD/우울증 포함)",
        "주말 대청소를 반복하지만 유지가 안 되는 분",
        "가족이 안 도와줘서 혼자 전쟁하는 분",
        "미니멀리즘이 아닌, 현실적인 정리법을 원하는 분",
      ],
      "✅",
      "#fffbeb"
    )}
    ${spacer(40)}
    ${bigTitle("자주 묻는 질문")}
    ${faqItem("서랍 하나부터 시작하면 집 전체가 정말 바뀌나요?", "네. 작은 성공이 동기를 만들고, 동기가 다음 행동을 만듭니다. Reddit에서 가장 많이 추천된 방법이 바로 이것입니다.")}
    ${faqItem("ADHD가 있어도 따라할 수 있나요?", "이 가이드는 ADHD를 전제로 설계되었습니다. 'The Basket' 시스템, 5분 타이머 등 ADHD 친화적 방법만 모았습니다.")}
    ${faqItem("이 가이드는 어떤 형식인가요?", "웹에서 읽는 디지털 가이드입니다. 결제 후 1개월간 열람 가능하며, 내용은 계속 업데이트됩니다.")}
  </section>

  <!-- 가격 앵커링 -->
  <section style="${sec("background:#fff;")}">
    ${bigTitle("이 가이드의 가치")}
    ${priceAnchor(
      [
        { what: "정리 컨설턴트 방문", price: "150,000원~", note: "1회" },
        { what: "정리 관련 서적", price: "16,000원~", note: "업데이트 없음" },
        { what: "정리 온라인 클래스", price: "49,000원~", note: "일방적 강의" },
      ],
      "1,000원",
      "ADHD 가이드 포함 · 계속 업데이트",
      "#d97706"
    )}
    ${proofBanner(
      ["🧹 Reddit 실전 경험", "🧠 ADHD 맞춤 설계", "👨‍👩‍👧 가족 참여 전략", "🔄 계속 업데이트"],
      "#fffbeb",
      "#92400e"
    )}
  </section>

  <!-- 크로스셀 -->
  <section style="${sec("background:#f9fafb;")}">
    ${crossSell("declutter-clean", ALL_BOOKS_FOR_CROSSSELL)}
  </section>

  <!-- CTA -->
  ${ctaBlock("🧹", "서랍 하나, 5분 타이머.", "오늘부터 시스템이 대신 해줍니다.", "계속 업데이트되는 살아있는 가이드", "#d97706")}

</div>`;
}

/* ═══════════════════════════════════════════
   4. GLP-1 비만약 완전 가이드
   ═══════════════════════════════════════════ */

function buildGlp1Guide(): string {
  return `<!-- 💊 GLP-1 비만약 완전 가이드 — 아임웹 상세페이지 -->
<div class="dp-wrap" style="max-width:860px;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
${mobileStyles}

  <!-- Hero -->
  <section style="${sec("background:linear-gradient(160deg,#eff6ff,#dbeafe,#bfdbfe);")}">
    ${label("LIVING GUIDE · 살아있는 정보책")}
    <div style="font-size:64px;margin-bottom:16px;">💊</div>
    <h2 style="margin:0 0 16px;font-size:clamp(28px,5vw,44px);font-weight:800;line-height:1.3;color:#1e3a5f;letter-spacing:-0.5px;">오젬픽, 위고비, 마운자로<br>약사가 정리해드립니다</h2>
    ${subtitle("41만 명의 실제 복용 경험 + BMJ·NEJM·Harvard 최신 연구 기반")}
    ${statGrid([
      { num: "41만+", label: "명의 Reddit 경험 분석", color: "#2563eb" },
      { num: "10+5", label: "챕터 + 보너스 가이드", color: "#2563eb" },
      { num: "약사", label: "가 직접 쓴 전문 가이드", color: "#2563eb" },
    ])}
    ${priceBadge("3,900원", "1,000원", "출시 특가")}
    ${urgencyBanner()}
  </section>

  <!-- 공감: 불안 -->
  <section style="${sec("background:#fff;")}">
    ${bigTitle('"이 약, 맞아도 될까요?"')}
    <p style="font-size:17px;color:#6b7280;margin:0 0 32px;line-height:1.7;">요즘 약국에서 가장 많이 듣는 질문입니다.<br>유튜브에선 20kg 뺐다 하고, 뉴스에선 부작용이 위험하다 하고.<br><strong style="color:#1e3a5f;">정보는 넘치는데, 정리된 답은 없습니다.</strong></p>
    ${redditQuote("진료실에서 3분 만에 처방받고, 약국에서 30초 만에 약 받고, 집에 와서 혼자 주사기 들고 고민해. '이게 정말 맞는 건가?' 물어볼 곳이 없어.", "Ozempic")}
    ${redditQuote("Food noise가 사라졌어. 다음 끼니를 항상 생각했는데, 이제는 먹으라고 알림을 설정해야 해. 인생이 바뀌었어.", "tirzepatide")}
    ${redditQuote("끊은 지 3개월, 17kg 중 12kg가 돌아왔어. 습관을 안 만들고 약만 믿은 게 실수였어.", "loseit")}
  </section>

  <!-- 약물 비교 하이라이트 -->
  <section style="${sec("background:#1e3a5f;color:#fff;")}">
    <div style="font-size:13px;color:#93c5fd;font-weight:600;letter-spacing:2px;margin-bottom:24px;">DRUG COMPARISON</div>
    <h2 style="font-size:clamp(24px,4vw,36px);font-weight:800;color:#fff;margin:0 0 24px;">오젬픽 vs 마운자로, 뭐가 다른가요?</h2>
    <div style="display:flex;flex-wrap:wrap;gap:20px;justify-content:center;margin:24px 0;">
      <div style="flex:1 1 280px;max-width:380px;padding:32px 28px;background:rgba(255,255,255,.06);border:1px solid rgba(147,197,253,.3);border-radius:16px;text-align:left;">
        <div style="font-size:24px;font-weight:800;color:#93c5fd;margin-bottom:16px;">세마글루타이드</div>
        <div style="font-size:13px;color:rgba(255,255,255,.5);margin-bottom:16px;">오젬픽 · 위고비</div>
        <div style="font-size:15px;color:rgba(255,255,255,.8);line-height:1.8;">
          GLP-1 단일 수용체<br>
          평균 체중 감소 15~17%<br>
          Food noise 감소 효과<br>
          주 1회 피하주사
        </div>
      </div>
      <div style="flex:1 1 280px;max-width:380px;padding:32px 28px;background:rgba(147,197,253,.1);border:2px solid rgba(147,197,253,.4);border-radius:16px;text-align:left;">
        <div style="font-size:24px;font-weight:800;color:#93c5fd;margin-bottom:4px;">티르제파타이드</div>
        <div style="font-size:13px;color:#fde68a;margin-bottom:16px;">마운자로 · 젭바운드 — 41만 명 분석 결과 우위</div>
        <div style="font-size:15px;color:rgba(255,255,255,.8);line-height:1.8;">
          GLP-1 + GIP 이중 수용체<br>
          평균 체중 감소 22~26%<br>
          Food noise 억제 더 강력<br>
          주 1회 피하주사
        </div>
      </div>
    </div>
    <p style="font-size:13px;color:rgba(255,255,255,.4);margin-top:16px;">이 비교는 챕터 2에서 더 자세히 다룹니다</p>
  </section>

  <!-- Before → After -->
  <section style="${sec("background:#f9fafb;")}">
    ${bigTitle("읽기 전과 후,", "이렇게 달라집니다")}
    ${beforeAfter(
      [
        "부작용이 무서워서 시작을 못 함",
        "3분 진료로 궁금증 해소 불가",
        "근손실 위험을 모른 채 감량만 진행",
        "약 중단 후 체중 전부 반등",
      ],
      [
        "부작용별 대처법을 미리 숙지",
        "약사가 정리한 완전 가이드 보유",
        "단백질 1.2~1.5g/kg + 근력운동 병행",
        "12주 유지 로드맵으로 체계적 전환",
      ],
      "가이드 없이",
      "이 가이드와 함께",
      "#fef2f2",
      "#eff6ff"
    )}
  </section>

  <!-- 목차 -->
  <section style="${sec("background:#fff;")}">
    ${label("TABLE OF CONTENTS")}
    ${bigTitle("무엇을 알게 되나요?")}
    ${tocItem("01", "GLP-1이 뭔가요? — 약사가 쉽게 설명하는 원리", false, "#2563eb")}
    ${tocItem("02", "오젬픽 vs 마운자로 — 41만 명 분석 비교", true, "#2563eb")}
    ${tocItem("03", "시작하기 전에 — 필수 검사·약물 상호작용", false, "#2563eb")}
    ${tocItem("04", "부작용 완전 정복 — 증상별 대처법", true, "#2563eb")}
    ${tocItem("05", "Food Noise의 소멸 — 뇌가 바뀌는 경험", true, "#2563eb")}
    ${tocItem("06", "근손실을 막아라 — 단백질·운동 전략", true, "#2563eb")}
    ${tocItem("07", "위장 관리 — GERD, IBS 대처법", false, "#2563eb")}
    ${tocItem("08", "비용과 접근성 — 한국에서의 현실", false, "#2563eb")}
    ${tocItem("09", "끊을 것인가, 유지할 것인가 — 3가지 전략", true, "#2563eb")}
    ${tocItem("10", "약 너머의 삶 — 5가지 습관 만들기", false, "#2563eb")}
    ${spacer(16)}
    <div style="font-size:13px;color:#9ca3af;">+ 보너스 5개: 부작용 119 매뉴얼 / 식단 가이드 / 약물 비교표 / 약물 상호작용 체크 / 중단 후 12주 로드맵</div>
  </section>

  <!-- 미리보기 -->
  ${fullPreview(
    "5",
    '"Food Noise"의 소멸 — 뇌가 바뀌는 경험',
    [
      '"그냥... 멈췄어요"',
      "Food Noise는 어떤 느낌인가?",
      "과학적으로 무슨 일이 일어나는가",
      "알코올 갈망도 줄어든다?",
      "약을 끊으면 food noise는 돌아오나?",
    ],
    `<p style="margin:0 0 16px;font-style:italic;color:#6b7280;">"아침을 먹으면서 점심에 뭘 먹을지 생각했어요. 점심을 먹으면서 저녁에 뭘 먹을지 생각했어요. 매 순간이 다음 식사를 향한 카운트다운이었어요."</p>
      <p style="margin:0 0 16px;font-style:italic;color:#6b7280;">"회의 중에도 머릿속에서는 '냉장고에 치즈케이크가 있었지...'가 재생되고 있었어요. 집중할 수가 없었어요."</p>
      <div style="margin:16px 0;padding:20px;background:#eff6ff;border-radius:12px;border-left:4px solid #2563eb;">
        <p style="margin:0 0 8px;font-size:13px;color:#2563eb;font-weight:600;">Reddit 사용자 Salty_beach:</p>
        <p style="margin:0;font-style:italic;font-size:14px;line-height:1.8;color:#374151;">"ADHD가 있어서 제 뇌는 탄수화물이나 단것에서 오는 도파민 히트를 사랑했어요. TV를 보다가 무의식적으로 부엌에 가서 시리얼 한 줌을 입에 넣고 있었어요. 일어난 것도, 시리얼을 꺼낸 것도 기억이 안 나요. <strong>자기 뇌와 싸워서 이길 수 있는 사람이 있나요?</strong> 이 약을 먹고 나서 음식은 더 이상 제 관심사가 아니에요."</p>
      </div>
      <p style="margin:0;font-style:italic;text-align:center;font-size:17px;font-weight:600;color:#1e3a5f;">"먹어. 지금. 항상. — 이렇게 떠들던 머릿속 목소리가 꺼진 것이 정말 놀라워요."</p>`,
    "#2563eb",
    "linear-gradient(160deg,#eff6ff,#dbeafe)"
  )}

  <!-- 추천 + FAQ -->
  <section style="${sec("background:#f9fafb;")}">
    ${bigTitle("이런 분께 추천합니다")}
    ${checkList(
      [
        "GLP-1에 관심 있지만 정보 혼란으로 결정 못 하는 분",
        "이미 복용 중인데 부작용·용량·식단이 불안한 분",
        "한국에서 처방 방법·비용·보험 정보가 궁금한 분",
        "약 중단 후 체중 유지 전략이 필요한 분",
      ],
      "✅",
      "#eff6ff"
    )}
    ${spacer(40)}
    ${bigTitle("자주 묻는 질문")}
    ${faqItem("오젬픽과 마운자로 중 어떤 것이 맞나요?", "챕터 2에서 41만 명 분석 데이터를 기반으로 상세 비교합니다. 일반적으로 티르제파타이드(마운자로)가 더 강력하지만, 개인 상황에 따라 다릅니다.")}
    ${faqItem("근육이 빠진다는데 어떻게 막나요?", "체중 감소분의 25~40%가 근육일 수 있습니다. 단백질 1.2~1.5g/kg, 주 3회 근력운동이 핵심입니다. 챕터 6에서 구체적 식단·운동 프로토콜을 다룹니다.")}
    ${faqItem("이 가이드는 어떤 형식인가요?", "웹에서 읽는 디지털 가이드입니다. 결제 후 1개월간 열람 가능하며, 새 연구·약물 정보가 나오면 업데이트됩니다.")}
  </section>

  <!-- 가격 앵커링 -->
  <section style="${sec("background:#fff;")}">
    ${bigTitle("이 가이드의 가치")}
    ${priceAnchor(
      [
        { what: "약사 1:1 상담 30분", price: "50,000원~", note: "1회성" },
        { what: "비만 클리닉 초진", price: "80,000원~", note: "검사비 별도" },
        { what: "GLP-1 관련 해외 서적", price: "25,000원~", note: "영어·업데이트 없음" },
      ],
      "1,000원",
      "10챕터 + 보너스 5개 + 계속 업데이트",
      "#2563eb"
    )}
    ${proofBanner(
      ["👨‍⚕️ 현직 약사 저자", "📊 41만 명 분석", "📚 BMJ·NEJM 검증", "🔄 새 약물 정보 업데이트"],
      "#eff6ff",
      "#2563eb"
    )}
  </section>

  <!-- 크로스셀 -->
  <section style="${sec("background:#f9fafb;")}">
    ${crossSell("glp1-guide", ALL_BOOKS_FOR_CROSSSELL)}
  </section>

  <!-- CTA -->
  ${ctaBlock("💊", "30분짜리 약사 상담을", "한 권에 담았습니다.", "지금 결정을 도와드립니다.", "#2563eb")}

</div>`;
}

/* ═══════════════════════════════════════════
   5. 몸이 젊어지는 4주 저속노화 리셋
   ═══════════════════════════════════════════ */

function buildSlowAging(): string {
  return `<!-- 🌿 몸이 젊어지는 4주 저속노화 리셋 — 아임웹 상세페이지 -->
<div class="dp-wrap" style="max-width:860px;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
${mobileStyles}

  <!-- Hero -->
  <section style="${sec("background:linear-gradient(160deg,#ecfdf5,#d1fae5,#a7f3d0);")}">
    ${label("LIVING GUIDE · 살아있는 정보책")}
    <div style="font-size:64px;margin-bottom:16px;">🌿</div>
    <h2 style="margin:0 0 16px;font-size:clamp(28px,5vw,44px);font-weight:800;line-height:1.3;color:#14532d;letter-spacing:-0.5px;">저속노화 영상 100개 봤는데<br>렌틸콩은 아직 냉장고에?</h2>
    <p style="font-size:20px;color:#166534;font-weight:600;margin:0 0 8px;">이 책은 응원하지 않습니다. 시킵니다.</p>
    ${subtitle("식단·혈당·운동·수면, 4주 28일 실전 프로그램 — 매일 O/X만 체크하세요")}
    ${statGrid([
      { num: "4주", label: "28일 실전 프로그램", color: "#059669" },
      { num: "10+1", label: "챕터 + 실행 키트 부록", color: "#059669" },
      { num: "70%", label: "합격선 — 무너져도 OK", color: "#059669" },
    ])}
    ${priceBadge("3,900원", "1,000원", "출시 특가")}
    ${urgencyBanner()}
  </section>

  <!-- 공감: 가속노화 신호 -->
  <section style="${sec("background:#fff;")}">
    ${bigTitle("이 신호들,", "익숙하시죠?")}
    <div style="display:flex;flex-wrap:wrap;gap:20px;justify-content:center;margin:32px 0;">
      <div style="flex:1 1 220px;max-width:260px;padding:28px 24px;background:#fff7ed;border-radius:16px;text-align:center;">
        <div style="font-size:36px;margin-bottom:12px;">😴</div>
        <div style="font-size:16px;font-weight:700;color:#9a3412;margin-bottom:8px;">식후 졸음</div>
        <div style="font-size:14px;color:#7c2d12;line-height:1.6;">점심만 먹으면<br>쏟아지는 잠</div>
      </div>
      <div style="flex:1 1 220px;max-width:260px;padding:28px 24px;background:#fef2f2;border-radius:16px;text-align:center;">
        <div style="font-size:36px;margin-bottom:12px;">🪞</div>
        <div style="font-size:16px;font-weight:700;color:#991b1b;margin-bottom:8px;">거울 속 변화</div>
        <div style="font-size:14px;color:#7f1d1d;line-height:1.6;">1년 새 부쩍<br>달라진 얼굴</div>
      </div>
      <div style="flex:1 1 220px;max-width:260px;padding:28px 24px;background:#fefce8;border-radius:16px;text-align:center;">
        <div style="font-size:36px;margin-bottom:12px;">🔋</div>
        <div style="font-size:16px;font-weight:700;color:#854d0e;margin-bottom:8px;">오후 무기력</div>
        <div style="font-size:14px;color:#713f12;line-height:1.6;">안 개운한 아침,<br>계단 앞 엘리베이터</div>
      </div>
    </div>
    <p style="font-size:15px;color:#6b7280;margin-top:16px;">이것들은 나이 탓이 아닙니다. <strong style="color:#059669;">가속노화 신호</strong>이고, 되돌릴 수 있습니다.</p>
  </section>

  <!-- 핵심 시스템 -->
  <section style="${sec("background:#14532d;color:#fff;")}">
    <div style="font-size:13px;color:#86efac;font-weight:600;letter-spacing:2px;margin-bottom:24px;">THE 4-WEEK SYSTEM</div>
    <h2 style="font-size:clamp(24px,4vw,36px);font-weight:800;color:#fff;margin:0 0 24px;">매주 하나씩, 4가지만 바꿉니다</h2>
    <div style="display:flex;flex-wrap:wrap;gap:16px;justify-content:center;">
      <div style="flex:1 1 200px;max-width:200px;padding:24px 20px;background:rgba(255,255,255,.08);border-radius:16px;border:1px solid rgba(134,239,172,.2);">
        <div style="font-size:28px;font-weight:800;color:#86efac;">1주차</div>
        <div style="font-size:15px;color:rgba(255,255,255,.8);margin-top:8px;">식탁 리셋<br><small style="color:rgba(255,255,255,.5);">밥솥 기본값 교체</small></div>
      </div>
      <div style="flex:1 1 200px;max-width:200px;padding:24px 20px;background:rgba(255,255,255,.08);border-radius:16px;border:1px solid rgba(134,239,172,.2);">
        <div style="font-size:28px;font-weight:800;color:#86efac;">2주차</div>
        <div style="font-size:15px;color:rgba(255,255,255,.8);margin-top:8px;">혈당 안정<br><small style="color:rgba(255,255,255,.5);">거꾸로 먹기+식후 걷기</small></div>
      </div>
      <div style="flex:1 1 200px;max-width:200px;padding:24px 20px;background:rgba(255,255,255,.08);border-radius:16px;border:1px solid rgba(134,239,172,.2);">
        <div style="font-size:28px;font-weight:800;color:#86efac;">3주차</div>
        <div style="font-size:15px;color:rgba(255,255,255,.8);margin-top:8px;">움직임 리셋<br><small style="color:rgba(255,255,255,.5);">거실 근력 주 2회</small></div>
      </div>
      <div style="flex:1 1 200px;max-width:200px;padding:24px 20px;background:rgba(255,255,255,.08);border-radius:16px;border:1px solid rgba(134,239,172,.2);">
        <div style="font-size:28px;font-weight:800;color:#86efac;">4주차</div>
        <div style="font-size:15px;color:rgba(255,255,255,.8);margin-top:8px;">수면 리셋<br><small style="color:rgba(255,255,255,.5);">취침 전 90분 활주로</small></div>
      </div>
    </div>
    <p style="font-size:14px;color:rgba(255,255,255,.5);margin-top:24px;">판단은 책이 하고, 당신은 O/X만 체크하면 됩니다</p>
  </section>

  <!-- 목차 -->
  <section style="${sec("background:#fff;")}">
    ${label("TABLE OF CONTENTS")}
    ${bigTitle("무엇을 알게 되나요?")}
    ${tocItem("00", "들어가며: 이 책은 응원하지 않습니다, 시킵니다", false, "#059669")}
    ${tocItem("01", "당신은 지금도 늙고 있다: 가속노화 자가진단", false, "#059669")}
    ${tocItem("02", "저속노화의 과학: 노화 속도를 정하는 5개의 스위치", false, "#059669")}
    ${tocItem("03", "시작 전 준비: 측정하고, 비우고, 채워라", false, "#059669")}
    ${tocItem("04", "1주차 — 식탁 리셋: 저속노화 식단의 뼈대", true, "#059669")}
    ${tocItem("05", "2주차 — 혈당 안정: 혈당 스파이크를 잡는 기술", true, "#059669")}
    ${tocItem("06", "3주차 — 움직임 리셋: 근육은 노후 연금이다", true, "#059669")}
    ${tocItem("07", "4주차 — 수면·회복 리셋: 자는 동안 젊어져라", true, "#059669")}
    ${tocItem("08", "보이지 않는 액셀: 스트레스와 뇌의 저속노화", false, "#059669")}
    ${tocItem("09", "트러블슈팅: 무너지는 7가지 순간과 복구 프로토콜", true, "#059669")}
    ${tocItem("10", "28일 이후: 평생 가는 저속노화 시스템", false, "#059669")}
    ${spacer(16)}
    <div style="font-size:13px;color:#9ca3af;">+ 부록: 4주 식단표 / 28일 로드맵 / 주간 체크리스트 / 외식 생존 가이드 / 15분 레시피 7선</div>
  </section>

  <!-- 미리보기 -->
  ${fullPreview(
    "9",
    "트러블슈팅: 무너지는 7가지 순간과 복구 프로토콜",
    [
      "무너짐은 변수인가, 상수인가",
      "상황 1: 회식과 외식이 연달아 잡혔다",
      "상황 2: 야식 욕구가 폭발했다",
      "상황 3: 여행·명절·휴가로 리듬이 깨졌다",
      "상황 4: 2주째, 체중이 꿈쩍도 하지 않는다",
      "상황 5: 운동할 시간이 도저히 안 나온다",
      "상황 6: 가족이 협조하지 않는다",
      "상황 7: 다 귀찮고 의욕이 사라졌다",
    ],
    `<p style="margin:0 0 16px;">4주짜리 습관 프로그램을 시작한 사람 중 끝까지 한 번도 안 무너지는 사람은 없습니다. <strong>무너짐은 변수가 아니라 상수입니다.</strong></p>
      <p style="margin:0 0 16px;">그렇다면 성패를 가르는 것은 무너지느냐가 아니라, <strong>무너진 뒤 몇 시간 만에 복귀하느냐</strong>입니다.</p>
      <p style="margin:0 0 16px;">실패자는 한 번의 일탈을 "다 망했다"로 해석해 폭주하고, 성공자는 같은 일탈을 <strong>"다음 끼니에 복구"</strong>로 처리합니다. 심리학에서는 전자를 <em>"에라 모르겠다 효과(what-the-hell effect)"</em>라고 부릅니다.</p>
      <p style="margin:0;padding:16px;background:#f0fdf4;border-radius:10px;font-weight:600;color:#059669;">💡 그래서 이 챕터는 사과문이 아니라 정비 매뉴얼입니다. 사고가 난 뒤에 매뉴얼을 찾는 정비사는 없습니다.</p>`,
    "#059669",
    "linear-gradient(160deg,#f0fdf4,#ecfdf5)"
  )}

  <!-- 추천 + FAQ -->
  <section style="${sec("background:#f9fafb;")}">
    ${bigTitle("이런 분께 추천합니다")}
    ${checkList(
      [
        "저속노화 정보는 많이 봤지만 실행으로 옮기지 못한 분",
        "식후 졸음, 오후 무기력이 일상이 된 30~50대",
        "헬스장 없이 집과 일상 안에서 시작하고 싶은 분",
        "다이어트가 아니라 '천천히 늙는 몸'을 원하는 분",
      ],
      "✅",
      "#f0fdf4"
    )}
    ${spacer(16)}
    ${checkList(
      [
        "읽기만 하고 실행하지 않을 분",
        "4주 만에 극적인 체중 감량을 원하는 분",
        "질환 치료 목적의 의학 정보를 찾는 분",
      ],
      "🚫",
      "#fef2f2"
    )}
    ${spacer(40)}
    ${bigTitle("자주 묻는 질문")}
    ${faqItem("운동 완전 초보도 가능한가요?", "네. 모든 운동은 맨몸·거실 기준이며, 50대 이상을 위한 강도 조절 안내도 포함되어 있습니다.")}
    ${faqItem("식단이 어렵거나 비싸지 않나요?", "대형마트 1회 장보기로 시작할 수 있고, 모든 레시피는 15분 이내 조리 기준입니다. 외식/편의점 대응 가이드도 들어 있습니다.")}
    ${faqItem("이 가이드는 어떤 형식인가요?", "웹에서 읽는 디지털 가이드입니다. 결제 후 1개월간 열람 가능하며, 내용은 계속 업데이트됩니다.")}
  </section>

  <!-- 가격 앵커링 -->
  <section style="${sec("background:#fff;")}">
    ${bigTitle("이 가이드의 가치")}
    ${priceAnchor(
      [
        { what: "저속노화 온라인 강의", price: "89,000원~", note: "일방적 강의" },
        { what: "건강 코칭 1:1 상담", price: "100,000원~", note: "1회" },
        { what: "저속노화 관련 서적", price: "18,000원~", note: "업데이트 없음" },
      ],
      "1,000원",
      "10챕터 + 실행 키트 + 계속 업데이트",
      "#059669"
    )}
    ${proofBanner(
      ["💊 현직 약사 저자", "📋 28일 로드맵 포함", "🍽️ 15분 레시피 7선", "🔄 계속 업데이트"],
      "#f0fdf4",
      "#059669"
    )}
  </section>

  <!-- 크로스셀 -->
  <section style="${sec("background:#f9fafb;")}">
    ${crossSell("slow-aging", ALL_BOOKS_FOR_CROSSSELL)}
  </section>

  <!-- CTA -->
  ${ctaBlock("🌿", "오늘 저녁 식탁부터,", "늙는 속도가 달라집니다.", "매일 O/X만 체크하세요. 판단은 책이 합니다.", "#059669")}

</div>`;
}

/* ═══════════════════════════════════════════
   6. 하루 1시간, AI 부업 자동화 시스템
   ═══════════════════════════════════════════ */

function buildAiSidejob(): string {
  return `<!-- 🤖 하루 1시간, AI 부업 자동화 시스템 — 아임웹 상세페이지 -->
<div class="dp-wrap" style="max-width:860px;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
${mobileStyles}
  <section style="${sec("background:linear-gradient(160deg,#eff6ff,#dbeafe,#bfdbfe);")}">
    ${label("LIVING GUIDE · 살아있는 정보책")}
    <div style="font-size:64px;margin-bottom:16px;">🤖</div>
    <h2 style="margin:0 0 16px;font-size:clamp(28px,5vw,44px);font-weight:800;line-height:1.3;color:#1e3a5f;">부업 영상 100개 봤는데<br>아직 시작을 못 하셨나요?</h2>
    <p style="font-size:18px;color:#1d4ed8;font-weight:600;margin:0 0 8px;">부족한 건 정보가 아니라 '순서'입니다.</p>
    ${subtitle("퇴근 후 1시간, 블로그→숏폼→디지털상품 — AI가 대신하는 파이프라인")}
    ${statGrid([
      { num: "1시간", label: "하루 투자 시간", color: "#2563eb" },
      { num: "15", label: "복사해 쓰는 AI 프롬프트", color: "#2563eb" },
      { num: "3", label: "수익 파이프라인", color: "#2563eb" },
    ])}
    ${priceBadge("3,900원", "1,000원", "출시 특가")}
    ${urgencyBanner()}
  </section>
  <section style="${sec("background:#fff;")}">
    ${bigTitle("이 루프에 갇혀 있지 않나요?")}
    ${redditQuote("블로그 3번 만들었고, 3번 다 글 5개에서 멈췄어. 문제는 소재 고갈이야. AI로 해결할 수 있다는 걸 너무 늦게 알았어.", "sidehustle")}
    ${redditQuote("유튜브 편집이 무서워서 시작도 못 했는데, 텍스트 오버레이 쇼츠는 30분이면 3개 만들 수 있더라.", "passive_income")}
  </section>
  <section style="${sec("background:#1e3a5f;color:#fff;")}">
    <div style="font-size:13px;color:#93c5fd;font-weight:600;letter-spacing:2px;margin-bottom:24px;">THE SYSTEM</div>
    <h2 style="font-size:clamp(24px,4vw,36px);font-weight:800;color:#fff;margin:0 0 24px;">하루 1시간, 3개의 파이프라인</h2>
    <div style="display:flex;flex-wrap:wrap;gap:16px;justify-content:center;">
      <div style="flex:1 1 200px;max-width:240px;padding:24px 20px;background:rgba(255,255,255,.08);border-radius:16px;border:1px solid rgba(147,197,253,.2);">
        <div style="font-size:28px;font-weight:800;color:#93c5fd;">1</div>
        <div style="font-size:15px;color:rgba(255,255,255,.8);margin-top:8px;">블로그 자동화<br><small style="color:rgba(255,255,255,.5);">검색이 일하게 하라</small></div>
      </div>
      <div style="flex:1 1 200px;max-width:240px;padding:24px 20px;background:rgba(255,255,255,.08);border-radius:16px;border:1px solid rgba(147,197,253,.2);">
        <div style="font-size:28px;font-weight:800;color:#93c5fd;">2</div>
        <div style="font-size:15px;color:rgba(255,255,255,.8);margin-top:8px;">숏폼 자동화<br><small style="color:rgba(255,255,255,.5);">얼굴 없이 조회수</small></div>
      </div>
      <div style="flex:1 1 200px;max-width:240px;padding:24px 20px;background:rgba(255,255,255,.08);border-radius:16px;border:1px solid rgba(147,197,253,.2);">
        <div style="font-size:28px;font-weight:800;color:#93c5fd;">3</div>
        <div style="font-size:15px;color:rgba(255,255,255,.8);margin-top:8px;">디지털 상품<br><small style="color:rgba(255,255,255,.5);">단가를 끌어올리는 엔진</small></div>
      </div>
    </div>
  </section>
  <section style="${sec("background:#fff;")}">
    ${label("TABLE OF CONTENTS")}
    ${bigTitle("무엇을 알게 되나요?")}
    ${tocItem("01", "왜 지금, AI 부업인가", false, "#2563eb")}
    ${tocItem("02", "시작 전 준비: 도구, 계정, 마인드셋", false, "#2563eb")}
    ${tocItem("03", "1단계: 팔리는 주제를 데이터로 찾는 법", true, "#2563eb")}
    ${tocItem("04", "2단계: 블로그 자동화 — 검색이 일하게 하라", false, "#2563eb")}
    ${tocItem("05", "3단계: 숏폼 자동화 — 얼굴 없이 조회수 만들기", true, "#2563eb")}
    ${tocItem("06", "4단계: 디지털 상품 — 단가를 끌어올리는 엔진", false, "#2563eb")}
    ${tocItem("07", "막히는 지점 해결: 실패 패턴 7가지와 처방전", true, "#2563eb")}
    ${tocItem("08", "시스템 유지와 확장: 30일 실행 캘린더", false, "#2563eb")}
    ${spacer(16)}
    <div style="font-size:13px;color:#9ca3af;">+ 부록: 바로 복사해 쓰는 AI 프롬프트 15선 ⭐</div>
  </section>
  ${fullPreview(
    "5",
    "3단계: 숏폼 자동화 — 얼굴 없이 조회수 만들기",
    ["얼굴·목소리 없이 가능한 3가지 포맷", "블로그 글 1개 = 쇼츠 3개", "잘 터지는 쇼츠 대본의 공통 구조", "해시태그·제목 전략", "30개까지는 같은 포맷"],
    `<p style="margin:0 0 16px;">직장인 부업의 최대 걸림돌인 '신상 노출'은 포맷 선택으로 해결합니다.</p>
      <p style="margin:0 0 16px;"><strong>1. 텍스트 오버레이형</strong> — 배경 영상(무료 스톡) 위에 자막이 흐르는 형식. 정보성 주제에 최적이며 제작이 가장 빠릅니다.</p>
      <p style="margin:0 0 16px;"><strong>2. AI 보이스 내레이션형</strong> — 대본을 AI 음성이 읽어 줍니다. VREW, 캡컷 내장 기능으로 자연스러운 한국어 음성을 쓸 수 있습니다.</p>
      <p style="margin:0 0 16px;"><strong>3. 슬라이드 카드형</strong> — 캔바로 만든 카드 이미지 5~7장을 넘기는 형식. 릴스와 스레드에 동시 활용됩니다.</p>
      <p style="margin:0;padding:16px;background:#eff6ff;border-radius:10px;font-weight:600;color:#1d4ed8;">💡 이미 발행한 블로그 글을 AI에게 주면 60초 쇼츠 대본 3개로 쪼개줍니다. 소재를 새로 찾지 않습니다.</p>`,
    "#2563eb",
    "linear-gradient(160deg,#eff6ff,#dbeafe)"
  )}
  <section style="${sec("background:#f9fafb;")}">
    ${bigTitle("이런 분께 추천합니다")}
    ${checkList(["부업 정보만 모으다 6개월이 지난 직장인", "얼굴·실명 없이 온라인 수익을 만들고 싶은 분", "AI 프롬프트부터 막히는 분", "블로그·유튜브를 시작했다가 소재 고갈로 멈춘 분"], "✅", "#eff6ff")}
    ${spacer(16)}
    ${checkList(["한 달 안에 수백만 원 비법을 찾는 분", "읽기만 하고 실행하지 않을 분"], "🚫", "#fef2f2")}
    ${spacer(40)}
    ${bigTitle("자주 묻는 질문")}
    ${faqItem("완전 초보도 따라 할 수 있나요?", "네. 계정 개설부터 분 단위로 안내합니다. 프롬프트 15개를 복사해 붙여넣기만 하면 됩니다.")}
    ${faqItem("수익이 보장되나요?", "아니요. 이 책이 제공하는 건 검증된 '구조와 순서'이며, 결과는 주제 선택과 실행에 따라 달라집니다.")}
    ${faqItem("이 가이드는 어떤 형식인가요?", "웹에서 읽는 디지털 가이드입니다. 결제 후 1개월간 열람 가능하며, 계속 업데이트됩니다.")}
  </section>
  <section style="${sec("background:#fff;")}">
    ${bigTitle("이 가이드의 가치")}
    ${priceAnchor([
      { what: "부업 온라인 강의", price: "99,000원~", note: "일방적 강의" },
      { what: "부업 코칭 1:1", price: "200,000원~", note: "1회" },
      { what: "AI 부업 서적", price: "18,000원~", note: "업데이트 없음" },
    ], "1,000원", "8챕터 + 프롬프트 15개 + 계속 업데이트", "#2563eb")}
    ${proofBanner(["🤖 AI 프롬프트 15개", "📅 30일 실행 캘린더", "📋 체크리스트 12개", "🔄 계속 업데이트"], "#eff6ff", "#2563eb")}
  </section>
  <section style="${sec("background:#f9fafb;")}">
    ${crossSell("ai-sidejob", ALL_BOOKS_FOR_CROSSSELL)}
  </section>
  ${ctaBlock("🤖", "부업 영상 100개 대신,", "실행 매뉴얼 1권으로 시작하세요.", "하루 1시간, AI가 대신하는 파이프라인.", "#2563eb")}
</div>`;
}

/* ═══════════════════════════════════════════
   7. 0팔로워로 시작하는 스레드 마케팅
   ═══════════════════════════════════════════ */

function buildThreadsMarketing(): string {
  return `<!-- 🧵 0팔로워로 시작하는 스레드 마케팅 — 아임웹 상세페이지 -->
<div class="dp-wrap" style="max-width:860px;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
${mobileStyles}
  <section style="${sec("background:linear-gradient(160deg,#f5f3ff,#ede9fe,#ddd6fe);")}">
    ${label("LIVING GUIDE · 살아있는 정보책")}
    <div style="font-size:64px;margin-bottom:16px;">🧵</div>
    <h2 style="margin:0 0 16px;font-size:clamp(28px,5vw,44px);font-weight:800;line-height:1.3;color:#4c1d95;">유튜브는 늦은 것 같고,<br>인스타는 사진 감각이 없고?</h2>
    <p style="font-size:18px;color:#6d28d9;font-weight:600;margin:0 0 8px;">글 몇 줄로 시작할 수 있는 판이 열려 있어요.</p>
    ${subtitle("0팔로워부터 수익화까지 — 스레드 28일 공략집")}
    ${statGrid([
      { num: "30", label: "첫 줄 훅 템플릿", color: "#7c3aed" },
      { num: "60", label: "글감 아이디어", color: "#7c3aed" },
      { num: "28일", label: "데일리 미션 로드맵", color: "#7c3aed" },
    ])}
    ${priceBadge("3,900원", "1,000원", "출시 특가")}
    ${urgencyBanner()}
  </section>
  <section style="${sec("background:#4c1d95;color:#fff;")}">
    <div style="font-size:13px;color:#c4b5fd;font-weight:600;letter-spacing:2px;margin-bottom:24px;">WHY THREADS, WHY NOW</div>
    <h2 style="font-size:clamp(24px,4vw,36px);font-weight:800;color:#fff;margin:0 0 24px;">스레드, 지금이 골든타임입니다</h2>
    <div style="display:flex;flex-wrap:wrap;gap:20px;justify-content:center;margin:24px 0;">
      <div style="flex:1 1 200px;max-width:240px;padding:28px 20px;background:rgba(255,255,255,.06);border-radius:16px;border:1px solid rgba(196,181,253,.2);">
        <div style="font-size:32px;font-weight:800;color:#c4b5fd;">1.4억</div>
        <div style="font-size:14px;color:rgba(255,255,255,.7);margin-top:8px;">글로벌 DAU<br><small style="color:rgba(255,255,255,.4);">X 추월 보도</small></div>
      </div>
      <div style="flex:1 1 200px;max-width:240px;padding:28px 20px;background:rgba(255,255,255,.06);border-radius:16px;border:1px solid rgba(196,181,253,.2);">
        <div style="font-size:32px;font-weight:800;color:#c4b5fd;">543만</div>
        <div style="font-size:14px;color:rgba(255,255,255,.7);margin-top:8px;">국내 MAU<br><small style="color:rgba(255,255,255,.4);">전년 대비 2배</small></div>
      </div>
      <div style="flex:1 1 200px;max-width:240px;padding:28px 20px;background:rgba(255,255,255,.06);border-radius:16px;border:1px solid rgba(196,181,253,.2);">
        <div style="font-size:32px;font-weight:800;color:#c4b5fd;">텍스트</div>
        <div style="font-size:14px;color:rgba(255,255,255,.7);margin-top:8px;">사진·영상 없이<br><small style="color:rgba(255,255,255,.4);">글 몇 줄로 시작</small></div>
      </div>
    </div>
  </section>
  <section style="${sec("background:#fff;")}">
    ${bigTitle("이런 분들이 고민하시죠")}
    ${redditQuote("솔직히 스레드를 우습게 봤어. 그런데 사진 없이 글 몇 줄로 모르는 사람들이 반응하고 팔로우하는 경험을 하면서 생각이 바뀌었어.", "socialmedia")}
    ${redditQuote("문제는 제대로 된 공략집이 없다는 거야. 0팔로워가 첫 4주에 뭘 해야 하는지 순서대로 알려 주는 자료가 없더라.", "marketing")}
  </section>
  <section style="${sec("background:#f5f3ff;")}">
    ${label("TABLE OF CONTENTS")}
    ${bigTitle("무엇을 알게 되나요?")}
    ${tocItem("01", "왜 지금 스레드인가: 텍스트 SNS의 골든타임", false, "#7c3aed")}
    ${tocItem("02", "알고리즘이 보는 것들: 한 편의 글이 겪는 24시간", true, "#7c3aed")}
    ${tocItem("03", "계정 세팅: 시작 3일 안에 끝내는 기초 공사", false, "#7c3aed")}
    ${tocItem("04", "글쓰기 공식: 멈추게 하고, 대답하게 하라", true, "#7c3aed")}
    ${tocItem("05", "콘텐츠 시스템: 글감이 마르지 않는 공장", false, "#7c3aed")}
    ${tocItem("06", "팔로워 참여 전략: 혼자 크는 계정은 없다", true, "#7c3aed")}
    ${tocItem("07", "플랫폼 연계: 스레드를 허브로 만드는 법", false, "#7c3aed")}
    ${tocItem("08", "수익화: 돈이 들어오는 5갈래 길", true, "#7c3aed")}
    ${tocItem("09", "트러블슈팅: 막히는 순간들의 해결책", false, "#7c3aed")}
    ${tocItem("10", "28일 이후: 90일 로드맵과 브랜드로 가는 길", false, "#7c3aed")}
    ${spacer(16)}
    <div style="font-size:13px;color:#9ca3af;">+ 부록: 훅 템플릿 30 / 발행 캘린더 / 글감 60 / 체크리스트 / 용어 사전</div>
  </section>
  ${fullPreview(
    "4",
    "글쓰기 공식: 멈추게 하고, 대답하게 하라",
    ["스레드 글의 해부학", "첫 줄 공식 6가지", "몸통 구성법", "마지막 줄: 참여 유도", "실전 첨삭 사례"],
    `<p style="margin:0 0 16px;">첫 줄의 사명은 단 하나, <strong>엄지를 멈추는 것</strong>이에요. 검증된 공식 6개:</p>
      <p style="margin:0 0 8px;"><strong>1. 숫자 선언형</strong> — "월급 250만 원에서 매달 100만 원을 저축하게 된 방법 3가지"</p>
      <p style="margin:0 0 8px;"><strong>2. 의외성/반전형</strong> — "저는 새벽 기상을 포기하고 나서 더 부지런해졌어요"</p>
      <p style="margin:0 0 8px;"><strong>3. 실패 고백형</strong> — "스마트스토어로 3개월간 매출 0원이었던 이유"</p>
      <p style="margin:0 0 8px;"><strong>4. 질문 직격형</strong> — "혹시 적금 만기 되면 그 돈 어디에 두세요?"</p>
      <p style="margin:0 0 8px;"><strong>5. 손해 회피형</strong> — "이거 모르고 연말정산 하면 몇십만 원 날립니다"</p>
      <p style="margin:0 0 16px;"><strong>6. 경험 티저형</strong> — "어제 퇴사 통보하고 왔습니다"</p>
      <p style="margin:0;padding:16px;background:#f5f3ff;border-radius:10px;font-weight:600;color:#6d28d9;">💡 부록에 이 6가지를 변주한 템플릿 30개를 담아 뒀어요. 막힐 때마다 꺼내 쓰세요.</p>`,
    "#7c3aed",
    "linear-gradient(160deg,#f5f3ff,#ede9fe)"
  )}
  <section style="${sec("background:#f9fafb;")}">
    ${bigTitle("이런 분께 추천해요")}
    ${checkList(["SNS 부업을 시작하고 싶지만 얼굴 공개가 부담스러운 분", "팔로워 0명에서 무엇부터 할지 순서를 알고 싶은 분", "글 쓰는 건 괜찮은데 뭘 언제 올릴지 막막한 분", "내 전자책·서비스·브랜드로 수익을 만들고 싶은 분"], "✅", "#f5f3ff")}
    ${spacer(16)}
    ${checkList(["1주일 만에 만 팔로워를 약속받고 싶은 분", "글 쓰는 걸 전혀 하고 싶지 않은 분"], "🚫", "#fef2f2")}
    ${spacer(40)}
    ${bigTitle("자주 묻는 질문")}
    ${faqItem("팔로워 0명인데 의미가 있나요?", "이 책이 바로 0팔로워를 위한 28일 로드맵입니다. 1일차 세팅부터 28일차 결산까지 순서대로 따라가면 됩니다.")}
    ${faqItem("글쓰기에 자신이 없는데요?", "공식이 있습니다. 첫 줄 훅 템플릿 30개 + 글감 60개를 부록으로 드려요. 복사해서 변주하면 됩니다.")}
    ${faqItem("이 가이드는 어떤 형식인가요?", "웹에서 읽는 디지털 가이드입니다. 결제 후 1개월간 열람 가능하며, 계속 업데이트됩니다.")}
  </section>
  <section style="${sec("background:#fff;")}">
    ${bigTitle("이 가이드의 가치")}
    ${priceAnchor([
      { what: "SNS 마케팅 강의", price: "149,000원~", note: "일방적 강의" },
      { what: "마케팅 컨설팅 1회", price: "150,000원~", note: "1시간" },
      { what: "SNS 관련 서적", price: "18,000원~", note: "업데이트 없음" },
    ], "1,000원", "10챕터 + 훅 30개 + 글감 60개 + 업데이트", "#7c3aed")}
    ${proofBanner(["📝 훅 템플릿 30개", "💡 글감 60개", "📅 28일 캘린더", "🔄 계속 업데이트"], "#f5f3ff", "#7c3aed")}
  </section>
  <section style="${sec("background:#f9fafb;")}">
    ${crossSell("threads-marketing", ALL_BOOKS_FOR_CROSSSELL)}
  </section>
  ${ctaBlock("🧵", "글 몇 줄로 시작하는", "나만의 브랜드, 오늘부터.", "0팔로워도 괜찮아요. 28일이면 달라집니다.", "#7c3aed")}
</div>`;
}

/* ═══════════════════════════════════════════
   8. 밀당 없이 사랑받는 연애의 기술
   ═══════════════════════════════════════════ */

function buildLoveSkills(): string {
  return `<!-- 💕 밀당 없이 사랑받는 연애의 기술 — 아임웹 상세페이지 -->
<div class="dp-wrap" style="max-width:860px;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
${mobileStyles}

  <!-- Hero -->
  <section style="${sec("background:linear-gradient(160deg,#fdf2f8,#fce7f3,#fbcfe8);")}">
    ${label("LIVING GUIDE · 살아있는 정보책")}
    <div style="font-size:64px;margin-bottom:16px;">💕</div>
    <h2 style="margin:0 0 16px;font-size:clamp(28px,5vw,44px);font-weight:800;line-height:1.3;color:#831843;letter-spacing:-0.5px;">새벽 두 시,<br>메시지를 썼다 지웠다 하시나요?</h2>
    <p style="font-size:18px;color:#9d174d;font-weight:600;margin:0 0 8px;">그 패턴에는 이름과 이유가 있고, 바꾸는 방법도 있습니다.</p>
    ${subtitle("밀당이 아닌 진정성으로 — 애착·소통·관계 심리학 수업")}
    ${statGrid([
      { num: "10+1", label: "챕터 + 관계 도구함 부록", color: "#db2777" },
      { num: "15", label: "상황별 대화 스크립트", color: "#db2777" },
      { num: "30", label: "마음이 깊어지는 질문", color: "#db2777" },
    ])}
    ${priceBadge("3,900원", "1,000원", "출시 특가")}
    ${urgencyBanner()}
  </section>

  <!-- 공감: 불안 패턴 -->
  <section style="${sec("background:#fff;")}">
    ${bigTitle("이 감정들,", "익숙하시죠?")}
    <div style="display:flex;flex-wrap:wrap;gap:20px;justify-content:center;margin:32px 0;">
      <div style="flex:1 1 220px;max-width:260px;padding:28px 24px;background:#fdf2f8;border-radius:16px;text-align:center;">
        <div style="font-size:36px;margin-bottom:12px;">📱</div>
        <div style="font-size:16px;font-weight:700;color:#9d174d;margin-bottom:8px;">답장 불안</div>
        <div style="font-size:14px;color:#831843;line-height:1.6;">답장이 한 시간만 늦어도<br>마음이 바닥까지 내려감</div>
      </div>
      <div style="flex:1 1 220px;max-width:260px;padding:28px 24px;background:#fff7ed;border-radius:16px;text-align:center;">
        <div style="font-size:36px;margin-bottom:12px;">🔄</div>
        <div style="font-size:16px;font-weight:700;color:#9a3412;margin-bottom:8px;">반복 패턴</div>
        <div style="font-size:14px;color:#7c2d12;line-height:1.6;">연애할 때마다<br>비슷한 지점에서 무너짐</div>
      </div>
      <div style="flex:1 1 220px;max-width:260px;padding:28px 24px;background:#fefce8;border-radius:16px;text-align:center;">
        <div style="font-size:36px;margin-bottom:12px;">🤐</div>
        <div style="font-size:16px;font-weight:700;color:#854d0e;margin-bottom:8px;">소통 어려움</div>
        <div style="font-size:14px;color:#713f12;line-height:1.6;">서운함을 말 못 하고<br>쌓아 두다 터뜨림</div>
      </div>
    </div>
    <p style="font-size:15px;color:#6b7280;margin-top:16px;">이것은 성격 문제가 아닙니다. <strong style="color:#db2777;">사랑을 다르게 배운 것</strong>뿐이고, 바꿀 수 있습니다.</p>
  </section>

  <!-- 밀당의 진실 -->
  <section style="${sec("background:#831843;color:#fff;")}">
    <div style="font-size:13px;color:#f9a8d4;font-weight:600;letter-spacing:2px;margin-bottom:24px;">THE TRUTH ABOUT PUSH-PULL</div>
    <h2 style="font-size:clamp(24px,4vw,36px);font-weight:800;color:#fff;margin:0 0 24px;">밀당이 만드는 건<br>사랑이 아니라 불안입니다</h2>
    <div style="max-width:560px;margin:0 auto;padding:28px;background:rgba(255,255,255,.08);border-radius:16px;border:1px solid rgba(249,168,212,.3);text-align:left;">
      <p style="font-size:15px;color:rgba(255,255,255,.85);line-height:1.8;margin:0 0 16px;">밀당은 <strong>불확실성을 제조하는 기술</strong>이에요. 보상이 예측 불가능하게 주어질 때 집착이 강해지는 건 잘 알려진 심리 현상이죠.</p>
      <p style="font-size:15px;color:rgba(255,255,255,.85);line-height:1.8;margin:0 0 16px;">밀당이 만들어 낸 그 마음의 정체가 뭘까요? <strong style="color:#f9a8d4;">사랑이 아니라 불안이에요.</strong></p>
      <p style="font-size:15px;color:rgba(255,255,255,.6);line-height:1.8;margin:0;">불안 위에 지어진 관계는 두 가지 길로 가요. 상대가 떠나거나, 경보 상태가 기본값이 되거나. 어느 쪽이든, 원하던 사랑은 아니에요.</p>
    </div>
    <p style="font-size:14px;color:rgba(255,255,255,.5);margin-top:20px;">이 책은 밀당 대신 <strong style="color:#f9a8d4;">진정성의 기술</strong>을 알려드립니다</p>
  </section>

  <!-- 목차 -->
  <section style="${sec("background:#fff;")}">
    ${label("TABLE OF CONTENTS")}
    ${bigTitle("무엇을 알게 되나요?")}
    ${tocItem("00", "들어가며: 사랑이 어려운 건 당신 탓이 아니에요", false, "#db2777")}
    ${tocItem("01", "반복되는 패턴: 왜 늘 비슷한 지점에서 무너질까", false, "#db2777")}
    ${tocItem("02", "애착 유형: 내 연애의 설계도 읽기", true, "#db2777")}
    ${tocItem("03", "자존감이라는 그릇: 사랑받을 준비에 대하여", false, "#db2777")}
    ${tocItem("04", "시작의 심리학: 호감은 기술이 아니라 조건에서 자란다", false, "#db2777")}
    ${tocItem("05", "밀당의 진실: 불안을 파는 게임을 그만두면 생기는 일", true, "#db2777")}
    ${tocItem("06", "대화의 기술: 마음은 저절로 통하지 않는다", true, "#db2777")}
    ${tocItem("07", "싸움의 기술: 갈등은 관계의 끝이 아니라 문법이다", true, "#db2777")}
    ${tocItem("08", "경계선의 기술: 둘이면서 각자로 사는 법", false, "#db2777")}
    ${tocItem("09", "흔들리는 순간들: 관계의 응급실", true, "#db2777")}
    ${tocItem("10", "오래가는 사랑: 유지가 아니라 가꾸기", false, "#db2777")}
    ${spacer(16)}
    <div style="font-size:13px;color:#9ca3af;">+ 부록: 대화 스크립트 15개 / 월간 관계 점검표 / 마음이 깊어지는 질문 30 / 감정 단어 사전</div>
  </section>

  <!-- 미리보기 -->
  ${fullPreview(
    "5",
    "밀당의 진실: 불안을 파는 게임을 그만두면 생기는 일",
    [
      "밀당은 왜 통하는 것처럼 보이는가",
      "불확실성과 간헐적 강화",
      "밀당이 만들어 내는 감정의 정체",
      "진정성의 기술: 밀당을 대체하는 것",
      "밀당 없이 관계를 시작하는 법",
    ],
    `<p style="margin:0 0 16px;">심리학적으로 보면 밀당은 <strong>불확실성을 제조하는 기술</strong>이에요. 보상이 예측 불가능하게 주어질 때 집착이 강해지는 것은 잘 알려진 심리 현상이죠. 답장이 올 듯 말 듯한 상대에게 자꾸 마음이 쓰이는 건 그래서예요.</p>
      <p style="margin:0 0 16px;">인정할 건 인정할게요. 밀당은 상대의 주의를 붙잡는 데 종종 성공해요. 문제는 그다음이에요. 밀당이 만들어 낸 그 마음의 정체가 뭘까요? <strong>사랑일까요?</strong></p>
      <p style="margin:0 0 16px;padding:16px;background:#fdf2f8;border-radius:10px;font-weight:700;color:#9d174d;">아니요. 그건 불안이에요. 밀당은 상대의 애착 시스템에 경보를 울려서, 불안을 사랑으로 착각하게 만드는 기술이에요.</p>
      <p style="margin:0;">그리고 불안 위에 지어진 관계는 두 가지 길로 가요. 경보에 지친 상대가 떠나거나, 경보 상태가 관계의 기본값이 되거나. 어느 쪽이든, 우리가 원하던 사랑의 모습은 아니에요.</p>`,
    "#db2777",
    "linear-gradient(160deg,#fdf2f8,#fce7f3)"
  )}

  <!-- 추천 + FAQ -->
  <section style="${sec("background:#f9fafb;")}">
    ${bigTitle("이런 분께 추천해요")}
    ${checkList(
      [
        "연애할 때마다 비슷한 지점에서 무너지는 패턴을 반복하는 분",
        "상대의 답장 속도에 하루의 기분이 좌우되는 분",
        "서운함을 말하는 법을 몰라 쌓아 두다 터뜨리는 분",
        "지금의 관계를 더 단단하게 가꾸고 싶은 커플",
      ],
      "✅",
      "#fdf2f8"
    )}
    ${spacer(16)}
    ${checkList(
      [
        "상대를 '넘어오게 만드는' 공략법을 찾는 분",
        "읽기만 하고 대화 연습은 하지 않을 분",
        "심리 치료를 대신할 자료를 찾는 분",
      ],
      "🚫",
      "#fef2f2"
    )}
    ${spacer(40)}
    ${bigTitle("자주 묻는 질문")}
    ${faqItem("모태솔로도 볼 수 있나요?", "네. 앞 절반이 관계 시작 전 준비(패턴·자존감·시작의 기술)이고, 대화·갈등 기술은 우정과 가족 관계에도 그대로 쓰여요.")}
    ${faqItem("연애 중인데 도움이 되나요?", "후반부(대화·싸움·경계선·권태기·오래가는 습관)가 연애 중인 분들을 위한 파트예요. 커플이 함께 읽기에도 좋아요.")}
    ${faqItem("이 가이드는 어떤 형식인가요?", "웹에서 읽는 디지털 가이드입니다. 결제 후 1개월간 열람 가능하며, 내용은 계속 업데이트됩니다.")}
  </section>

  <!-- 가격 앵커링 -->
  <section style="${sec("background:#fff;")}">
    ${bigTitle("이 가이드의 가치")}
    ${priceAnchor(
      [
        { what: "커플 심리상담 1회", price: "100,000원~", note: "1시간" },
        { what: "연애·심리 서적", price: "16,000원~", note: "업데이트 없음" },
        { what: "관계 코칭 프로그램", price: "200,000원~", note: "4주" },
      ],
      "1,000원",
      "10챕터 + 대화 스크립트 15개 + 질문 30개 + 업데이트",
      "#db2777"
    )}
    ${proofBanner(
      ["💬 대화 스크립트 15개", "❤️ 질문 30개", "📋 월간 점검표", "🔄 계속 업데이트"],
      "#fdf2f8",
      "#db2777"
    )}
  </section>

  <!-- 크로스셀 -->
  <section style="${sec("background:#f9fafb;")}">
    ${crossSell("love-skills", ALL_BOOKS_FOR_CROSSSELL)}
  </section>

  <!-- CTA -->
  ${ctaBlock("💕", "새벽 두 시의 불안 대신,", "오늘 저녁의 다정한 한마디부터.", "밀당 대신 진정성의 기술을 배우세요.", "#db2777")}

</div>`;
}

/* ═══════════════════════════════════════════
   9. 일잘러의 비밀무기, 아이젠하워 매트릭스
   ═══════════════════════════════════════════ */

function buildEisenhowerMatrix(): string {
  return `<!-- ⏱️ 일잘러의 비밀무기, 아이젠하워 매트릭스 — 아임웹 상세페이지 -->
<div class="dp-wrap" style="max-width:860px;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
${mobileStyles}
  <section style="${sec("background:linear-gradient(160deg,#f8fafc,#e2e8f0,#cbd5e1);")}">
    ${label("LIVING GUIDE · 살아있는 정보책")}
    <div style="font-size:64px;margin-bottom:16px;">⏱️</div>
    <h2 style="margin:0 0 16px;font-size:clamp(28px,5vw,44px);font-weight:800;line-height:1.3;color:#0f172a;">하루 종일 바빴는데<br>뭘 했는지 기억이 안 나시죠?</h2>
    <p style="font-size:18px;color:#334155;font-weight:600;margin:0 0 8px;">시간을 관리하는 게 아니라, 결정을 관리해야 합니다.</p>
    ${subtitle("아이젠하워 대통령이 실제 사용한 검증된 프레임워크 — 하루 15분 시스템")}
    ${statGrid([
      { num: "15분", label: "아침 리추얼이면 충분", color: "#334155" },
      { num: "4", label: "사분면으로 모든 업무 분류", color: "#334155" },
      { num: "90일", label: "실행 계획 + 체크리스트", color: "#334155" },
    ])}
    ${priceBadge("3,900원", "1,000원", "출시 특가")}
    ${urgencyBanner()}
  </section>

  <section style="${sec("background:#fff;")}">
    ${bigTitle("이 함정에 빠져 있지 않나요?")}
    <div style="display:flex;flex-wrap:wrap;gap:20px;justify-content:center;margin:32px 0;">
      <div style="flex:1 1 220px;max-width:260px;padding:28px 24px;background:#fef2f2;border-radius:16px;text-align:center;">
        <div style="font-size:36px;margin-bottom:12px;">🔥</div>
        <div style="font-size:16px;font-weight:700;color:#991b1b;margin-bottom:8px;">긴급성 중독</div>
        <div style="font-size:14px;color:#7f1d1d;line-height:1.6;">카톡이 울리면 즉시 확인<br>하루 종일 불 끄기</div>
      </div>
      <div style="flex:1 1 220px;max-width:260px;padding:28px 24px;background:#fff7ed;border-radius:16px;text-align:center;">
        <div style="font-size:36px;margin-bottom:12px;">🎭</div>
        <div style="font-size:16px;font-weight:700;color:#9a3412;margin-bottom:8px;">바쁨의 배지</div>
        <div style="font-size:14px;color:#7c2d12;line-height:1.6;">"엄청 바빠!"를<br>자랑처럼 말하기</div>
      </div>
      <div style="flex:1 1 220px;max-width:260px;padding:28px 24px;background:#f5f3ff;border-radius:16px;text-align:center;">
        <div style="font-size:36px;margin-bottom:12px;">🤹</div>
        <div style="font-size:16px;font-weight:700;color:#5b21b6;margin-bottom:8px;">완벽주의 역설</div>
        <div style="font-size:14px;color:#4c1d95;line-height:1.6;">모든 걸 잘하려다<br>하나도 못 함</div>
      </div>
    </div>
    <p style="font-size:15px;color:#6b7280;margin-top:16px;"><strong style="color:#0f172a;">바쁜 것과 생산적인 것은 전혀 다릅니다.</strong> 이건 게으름이 아니라 시스템의 문제입니다.</p>
  </section>

  <section style="${sec("background:#0f172a;color:#fff;")}">
    <div style="font-size:13px;color:#94a3b8;font-weight:600;letter-spacing:2px;margin-bottom:24px;">THE 4 QUADRANTS</div>
    <h2 style="font-size:clamp(24px,4vw,36px);font-weight:800;color:#fff;margin:0 0 24px;">모든 업무는 4가지 중 하나입니다</h2>
    <div style="display:flex;flex-wrap:wrap;gap:16px;justify-content:center;">
      <div style="flex:1 1 200px;max-width:200px;padding:24px 20px;background:rgba(239,68,68,.15);border-radius:16px;border:1px solid rgba(239,68,68,.3);">
        <div style="font-size:24px;font-weight:800;color:#ef4444;">Q1</div>
        <div style="font-size:15px;color:rgba(255,255,255,.8);margin-top:8px;">소방서<br><small style="color:rgba(255,255,255,.5);">긴급+중요 → 즉시 처리</small></div>
      </div>
      <div style="flex:1 1 200px;max-width:200px;padding:24px 20px;background:rgba(34,197,94,.15);border-radius:16px;border:1px solid rgba(34,197,94,.3);">
        <div style="font-size:24px;font-weight:800;color:#22c55e;">Q2</div>
        <div style="font-size:15px;color:rgba(255,255,255,.8);margin-top:8px;">성공 존<br><small style="color:rgba(255,255,255,.5);">중요+비긴급 → 일정 보호</small></div>
      </div>
      <div style="flex:1 1 200px;max-width:200px;padding:24px 20px;background:rgba(251,191,36,.15);border-radius:16px;border:1px solid rgba(251,191,36,.3);">
        <div style="font-size:24px;font-weight:800;color:#fbbf24;">Q3</div>
        <div style="font-size:15px;color:rgba(255,255,255,.8);margin-top:8px;">속임수 존<br><small style="color:rgba(255,255,255,.5);">긴급+비중요 → 위임</small></div>
      </div>
      <div style="flex:1 1 200px;max-width:200px;padding:24px 20px;background:rgba(148,163,184,.15);border-radius:16px;border:1px solid rgba(148,163,184,.3);">
        <div style="font-size:24px;font-weight:800;color:#94a3b8;">Q4</div>
        <div style="font-size:15px;color:rgba(255,255,255,.8);margin-top:8px;">시간 낭비 존<br><small style="color:rgba(255,255,255,.5);">비긴급+비중요 → 제거</small></div>
      </div>
    </div>
    <p style="font-size:14px;color:rgba(255,255,255,.5);margin-top:20px;">성공한 사람들은 시간의 65~80%를 <strong style="color:#22c55e;">Q2(성공 존)</strong>에서 보냅니다</p>
  </section>

  <section style="${sec("background:#fff;")}">
    ${label("TABLE OF CONTENTS")}
    ${bigTitle("무엇을 알게 되나요?")}
    ${tocItem("01", "왜 똑똑한 사람들이 바쁜 일에 갇혀 있는가", false, "#334155")}
    ${tocItem("02", "당신의 삶을 지배하는 네 가지 사분면", true, "#334155")}
    ${tocItem("03", "하루 15분, 모든 것을 바꾸는 매트릭스 리추얼", true, "#334155")}
    ${tocItem("04", "사분면 2를 위한 요새 만들기", true, "#334155")}
    ${tocItem("05", "전략적 위임과 '노'라고 말하는 기술", true, "#334155")}
    ${tocItem("06", "매트릭스를 극대화하는 보조 시스템", false, "#334155")}
    ${tocItem("07", "주간 매트릭스 마스터 세션", false, "#334155")}
    ${tocItem("08", "업무를 넘어 삶 전체에 적용하기", false, "#334155")}
    ${tocItem("09", "무너지는 순간들과 복구 프로토콜", true, "#334155")}
    ${tocItem("10", "90일 이후: 매트릭스 마스터의 삶", false, "#334155")}
    ${spacer(16)}
    <div style="font-size:13px;color:#9ca3af;">+ 부록: 매트릭스 실행 키트 (체크리스트, 리뷰 템플릿, 거절 스크립트, 90일 로드맵, FAQ)</div>
  </section>

  ${fullPreview(
    "3",
    "하루 15분, 모든 것을 바꾸는 매트릭스 리추얼",
    ["왜 아침인가", "최적의 시간 설정", "5단계 매트릭스 리추얼", "주간 마스터 세션", "실생활 적용"],
    `<p style="margin:0 0 16px;">의지력은 소모품이다. 아침에 가장 충만하고, 하루가 지나면서 고갈된다. <strong>결정 피로가 쌓이기 전에 가장 중요한 결정</strong> — 오늘 무엇에 집중할 것인가 — 을 내려야 한다.</p>
      <p style="margin:0 0 16px;"><strong>1단계: 브레인 덤프 (3분)</strong> — 머릿속의 모든 할 일을 쏟아내라. 판단하지 마라.</p>
      <p style="margin:0 0 16px;"><strong>2단계: 분류 (5분)</strong> — 각 항목에 "긴급한가?" "중요한가?" 두 질문. 직감을 믿어라.</p>
      <p style="margin:0 0 16px;"><strong>3단계: 일정 (3분)</strong> — Q1과 Q2를 먼저 캘린더에 블록. Q2 시간을 금처럼 보호.</p>
      <p style="margin:0;padding:16px;background:#f1f5f9;border-radius:10px;font-weight:600;color:#334155;">💡 이 시스템은 매일 2~3시간을 확보해줄 수 있다. 비밀은 더 열심히 일하는 게 아니라 무엇이 주의를 받을 자격이 있는지 더 나은 결정을 내리는 것이다.</p>`,
    "#334155",
    "linear-gradient(160deg,#f8fafc,#e2e8f0)"
  )}

  <section style="${sec("background:#f9fafb;")}">
    ${bigTitle("이런 분께 추천합니다")}
    ${checkList(["하루 종일 바빴는데 성과가 없는 직장인", "긴급한 일에만 반응하며 중요한 프로젝트를 미루는 분", "모든 부탁에 예스라고 하는 분", "멀티태스킹이 생산적이라고 믿었던 분"], "✅", "#f1f5f9")}
    ${spacer(16)}
    ${checkList(["읽기만 하고 15분 리추얼을 실행하지 않을 분", "마법 같은 즉시 효과를 기대하는 분"], "🚫", "#fef2f2")}
    ${spacer(40)}
    ${bigTitle("자주 묻는 질문")}
    ${faqItem("생산성 앱을 많이 써봤는데 뭐가 다른가요?", "앱은 도구이고 매트릭스는 사고방식입니다. 어떤 앱을 쓰든 '무엇에 집중할 것인가'라는 결정이 먼저입니다. 매트릭스는 그 결정을 내리는 프레임워크입니다.")}
    ${faqItem("직장 상사가 준 일을 거절할 수 있나요?", "챕터 5에서 한국 직장 문화에 맞는 '우아하게 거절하기' 스크립트 5가지를 구체적으로 다룹니다.")}
    ${faqItem("이 가이드는 어떤 형식인가요?", "웹에서 읽는 디지털 가이드입니다. 결제 후 1개월간 열람 가능하며, 계속 업데이트됩니다.")}
  </section>

  <section style="${sec("background:#fff;")}">
    ${bigTitle("이 가이드의 가치")}
    ${priceAnchor([
      { what: "생산성 코칭 1:1", price: "150,000원~", note: "1회" },
      { what: "시간관리 온라인 강의", price: "89,000원~", note: "일방적 강의" },
      { what: "자기계발 서적", price: "18,000원~", note: "업데이트 없음" },
    ], "1,000원", "10챕터 + 실행 키트 + 90일 로드맵 + 업데이트", "#334155")}
    ${proofBanner(["⏱️ 하루 15분 시스템", "📋 90일 실행 로드맵", "🙅 거절 스크립트 5종", "🔄 계속 업데이트"], "#f1f5f9", "#334155")}
  </section>

  <section style="${sec("background:#f9fafb;")}">
    ${crossSell("eisenhower-matrix", ALL_BOOKS_FOR_CROSSSELL)}
  </section>

  ${ctaBlock("⏱️", "바쁜 것을 멈추고,", "효과적으로 사세요.", "하루 15분, 결정을 관리하는 시스템.", "#334155")}
</div>`;
}

/* ═══════════════════════════════════════════
   10. 딥포커스, 초집중의 기술
   ═══════════════════════════════════════════ */

function buildDeepFocus(): string {
  return `<!-- 🎯 딥포커스, 초집중의 기술 — 아임웹 상세페이지 -->
<div class="dp-wrap" style="max-width:860px;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
${mobileStyles}
  <section style="${sec("background:linear-gradient(160deg,#eef2ff,#e0e7ff,#c7d2fe);")}">
    ${label("LIVING GUIDE · 살아있는 정보책")}
    <div style="font-size:64px;margin-bottom:16px;">🎯</div>
    <h2 style="margin:0 0 16px;font-size:clamp(28px,5vw,44px);font-weight:800;line-height:1.3;color:#1e1b4b;">하루 종일 일했는데<br>뭘 했는지 모르겠다고요?</h2>
    <p style="font-size:18px;color:#4338ca;font-weight:600;margin:0 0 8px;">집중력은 재능이 아닙니다. 기술입니다.</p>
    ${subtitle("3분마다 방해받는 시대 — 뇌과학 기반 집중력 시스템")}
    ${statGrid([
      { num: "3분", label: "마다 방해받는 직장인 평균", color: "#4f46e5" },
      { num: "25분", label: "집중 복구에 걸리는 시간", color: "#4f46e5" },
      { num: "90일", label: "딥포커스 챌린지 로드맵", color: "#4f46e5" },
    ])}
    ${priceBadge("3,900원", "1,000원", "출시 특가")}
    ${urgencyBanner()}
  </section>

  <section style="${sec("background:#fff;")}">
    ${bigTitle("이 패턴에 갇혀 있지 않나요?")}
    <div style="display:flex;flex-wrap:wrap;gap:20px;justify-content:center;margin:32px 0;">
      <div style="flex:1 1 220px;max-width:260px;padding:28px 24px;background:#fef2f2;border-radius:16px;text-align:center;">
        <div style="font-size:36px;margin-bottom:12px;">📱</div>
        <div style="font-size:16px;font-weight:700;color:#991b1b;margin-bottom:8px;">알림 반사</div>
        <div style="font-size:14px;color:#7f1d1d;line-height:1.6;">카톡이 울리면<br>반사적으로 확인</div>
      </div>
      <div style="flex:1 1 220px;max-width:260px;padding:28px 24px;background:#fff7ed;border-radius:16px;text-align:center;">
        <div style="font-size:36px;margin-bottom:12px;">🐹</div>
        <div style="font-size:16px;font-weight:700;color:#9a3412;margin-bottom:8px;">쳇바퀴</div>
        <div style="font-size:14px;color:#7c2d12;line-height:1.6;">8시간 바빴는데<br>성과는 0</div>
      </div>
      <div style="flex:1 1 220px;max-width:260px;padding:28px 24px;background:#eef2ff;border-radius:16px;text-align:center;">
        <div style="font-size:36px;margin-bottom:12px;">🧠</div>
        <div style="font-size:16px;font-weight:700;color:#3730a3;margin-bottom:8px;">의지력 고갈</div>
        <div style="font-size:14px;color:#312e81;line-height:1.6;">오후 2시면<br>뇌가 멍해짐</div>
      </div>
    </div>
    <p style="font-size:15px;color:#6b7280;margin-top:16px;">플로리다주립대 연구: <strong style="color:#4f46e5;">알림을 무시해도 그것이 있다는 것만으로 성과가 떨어집니다.</strong></p>
  </section>

  <section style="${sec("background:#1e1b4b;color:#fff;")}">
    <div style="font-size:13px;color:#a5b4fc;font-weight:600;letter-spacing:2px;margin-bottom:24px;">THE SCIENCE OF FOCUS</div>
    <h2 style="font-size:clamp(24px,4vw,36px);font-weight:800;color:#fff;margin:0 0 24px;">집중력의 두 가지 시스템</h2>
    <div style="display:flex;flex-wrap:wrap;gap:20px;justify-content:center;">
      <div style="flex:1 1 280px;max-width:380px;padding:32px 28px;background:rgba(99,102,241,.15);border:1px solid rgba(165,180,252,.3);border-radius:16px;text-align:left;">
        <div style="font-size:24px;font-weight:800;color:#a5b4fc;margin-bottom:8px;">하향식 주의</div>
        <div style="font-size:13px;color:rgba(255,255,255,.5);margin-bottom:12px;">Top-Down · 의도적 집중</div>
        <div style="font-size:15px;color:rgba(255,255,255,.8);line-height:1.8;">"기획안을 완성하겠다"<br>→ 목표 지향 · 의식적 노력<br>→ <strong>에너지 소모 큼</strong></div>
      </div>
      <div style="flex:1 1 280px;max-width:380px;padding:32px 28px;background:rgba(239,68,68,.1);border:1px solid rgba(252,165,165,.3);border-radius:16px;text-align:left;">
        <div style="font-size:24px;font-weight:800;color:#fca5a5;margin-bottom:8px;">상향식 주의</div>
        <div style="font-size:13px;color:rgba(255,255,255,.5);margin-bottom:12px;">Bottom-Up · 자극 반응형</div>
        <div style="font-size:15px;color:rgba(255,255,255,.8);line-height:1.8;">알림이 뜨면 확인해야 함<br>→ 자극 주도 · 무의식적<br>→ <strong>대부분이 여기에 갇힘</strong></div>
      </div>
    </div>
    <p style="font-size:14px;color:rgba(255,255,255,.5);margin-top:20px;">이 가이드는 상향식에서 하향식으로 전환하는 <strong style="color:#a5b4fc;">구체적인 기술</strong>을 알려드립니다</p>
  </section>

  <section style="${sec("background:#fff;")}">
    ${label("TABLE OF CONTENTS")}
    ${bigTitle("무엇을 알게 되나요?")}
    ${tocItem("01", "뇌는 어떻게 집중할 대상을 선택하는가", true, "#4f46e5")}
    ${tocItem("02", "나의 의지력과 동기를 찾는 법", false, "#4f46e5")}
    ${tocItem("03", "집중을 위한 환경 설계", true, "#4f46e5")}
    ${tocItem("04", "디지털 시대의 집중력 생존법", false, "#4f46e5")}
    ${tocItem("05", "시간은 당신이 통제하는 것이다", true, "#4f46e5")}
    ${tocItem("06", "개구리를 먹어라 — 가장 어려운 일부터", true, "#4f46e5")}
    ${tocItem("07", "휴식은 선택이 아니라 필수다", false, "#4f46e5")}
    ${tocItem("08", "집중력의 연료: 수면과 식단", false, "#4f46e5")}
    ${tocItem("09", "집중력을 습관으로 만들기", false, "#4f46e5")}
    ${tocItem("10", "딥워크: 초집중이 만드는 기적의 결과", true, "#4f46e5")}
    ${spacer(16)}
    <div style="font-size:13px;color:#9ca3af;">+ 부록: 일일 집중 루틴 / 포모도로 기록 시트 / 개구리 먹기 플래너 / 디지털 미니멀리즘 체크리스트 / 90일 챌린지</div>
  </section>

  ${fullPreview(
    "1",
    "뇌는 어떻게 집중할 대상을 선택하는가",
    ["두 가지 주의 시스템", "알림의 과학적 방해 효과", "의지력은 소모품이다", "한국 직장인의 집중력 현실", "오늘의 액션"],
    `<p style="margin:0 0 16px;">카네기멜론 대학교 연구: 방해를 받은 후 <strong>다시 원래 업무에 집중하기까지 25분이 걸립니다.</strong> 3분마다 방해받는 직장인은 하루 종일 복구만 하고 있는 셈입니다.</p>
      <p style="margin:0 0 16px;">플로리다주립대 연구: 알림을 <strong>무시해도</strong> 그것이 있다는 것만으로 성과가 떨어집니다. 전화든 문자든, 확인하지 않아도 뇌는 이미 주의를 빼앗겼습니다.</p>
      <p style="margin:0;padding:16px;background:#eef2ff;border-radius:10px;font-weight:600;color:#4338ca;">💡 집중력을 잃는 건 쉽지만, 다시 되찾는 건 어렵습니다. 그래서 환경을 먼저 바꿔야 합니다. 알림이 존재하지 않는 환경을 만드는 것이 시작입니다.</p>`,
    "#4f46e5",
    "linear-gradient(160deg,#eef2ff,#e0e7ff)"
  )}

  <section style="${sec("background:#f9fafb;")}">
    ${bigTitle("이런 분께 추천합니다")}
    ${checkList(["3분마다 방해받는데 방법을 모르는 직장인", "멀티태스킹이 효율적이라고 믿었던 분", "중요한 프로젝트를 계속 미루는 분", "퇴근 후에도 일 생각이 머리에서 안 떠나는 분"], "✅", "#eef2ff")}
    ${spacer(16)}
    ${checkList(["읽기만 하고 환경을 바꾸지 않을 분", "마법 같은 즉시 효과를 기대하는 분"], "🚫", "#fef2f2")}
    ${spacer(40)}
    ${bigTitle("자주 묻는 질문")}
    ${faqItem("포모도로 기법을 이미 알고 있는데 뭐가 다른가요?", "포모도로는 이 가이드의 일부일 뿐입니다. 뇌과학 기반 주의 시스템 이해, 환경 설계, 개구리 먹기, 디지털 미니멀리즘, 딥워크까지 통합된 시스템을 다룹니다.")}
    ${faqItem("집중력이 선천적으로 약한데 가능한가요?", "집중력은 재능이 아니라 기술입니다. 환경을 바꾸고 올바른 기법을 쓰면 누구나 개선할 수 있습니다. 90일 챌린지로 습관화까지 안내합니다.")}
    ${faqItem("이 가이드는 어떤 형식인가요?", "웹에서 읽는 디지털 가이드입니다. 결제 후 1개월간 열람 가능하며, 계속 업데이트됩니다.")}
  </section>

  <section style="${sec("background:#fff;")}">
    ${bigTitle("이 가이드의 가치")}
    ${priceAnchor([
      { what: "집중력 코칭 1:1", price: "120,000원~", note: "1회" },
      { what: "생산성 온라인 강의", price: "89,000원~", note: "일방적 강의" },
      { what: "자기계발 서적", price: "16,000원~", note: "업데이트 없음" },
    ], "1,000원", "10챕터 + 실행 키트 + 90일 챌린지 + 업데이트", "#4f46e5")}
    ${proofBanner(["🧠 뇌과학 연구 기반", "🍅 포모도로+개구리+딥워크", "📋 90일 챌린지 로드맵", "🔄 계속 업데이트"], "#eef2ff", "#4f46e5")}
  </section>

  <section style="${sec("background:#f9fafb;")}">
    ${crossSell("deep-focus", ALL_BOOKS_FOR_CROSSSELL)}
  </section>

  ${ctaBlock("🎯", "3분마다 방해받는 시대,", "집중력을 되찾으세요.", "집중력은 재능이 아닙니다. 기술입니다.", "#4f46e5")}
</div>`;
}

/* ═══════════════════════════════════════════
   11. 스토리텔링의 기술
   ═══════════════════════════════════════════ */

function buildStorytelling(): string {
  return `<!-- 📖 사람의 마음을 휘어잡는 스토리텔링의 기술 — 아임웹 상세페이지 -->
<div class="dp-wrap" style="max-width:860px;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
${mobileStyles}
  <section style="${sec("background:linear-gradient(160deg,#fffbeb,#fef3c7,#fde68a);")}">
    ${label("LIVING GUIDE · 살아있는 정보책")}
    <div style="font-size:64px;margin-bottom:16px;">📖</div>
    <h2 style="margin:0 0 16px;font-size:clamp(28px,5vw,44px);font-weight:800;line-height:1.3;color:#78350f;">왜 어떤 브랜드는 기억에 남고<br>어떤 브랜드는 사라질까요?</h2>
    <p style="font-size:18px;color:#92400e;font-weight:600;margin:0 0 8px;">답은 스토리텔링에 있습니다.</p>
    ${subtitle("데이터는 설득하지만, 이야기는 감동시킵니다 — 브랜드 스토리 마스터 가이드")}
    ${statGrid([
      { num: "7", label: "가지 스토리텔링 공식", color: "#d97706" },
      { num: "12", label: "핵심 스토리 발굴 질문", color: "#d97706" },
      { num: "3분", label: "오리진 스토리 템플릿", color: "#d97706" },
    ])}
    ${priceBadge("3,900원", "1,000원", "출시 특가")}
    ${urgencyBanner()}
  </section>

  <section style="${sec("background:#fff;")}">
    ${bigTitle("이 고민, 해보셨죠?")}
    <div style="display:flex;flex-wrap:wrap;gap:20px;justify-content:center;margin:32px 0;">
      <div style="flex:1 1 220px;max-width:260px;padding:28px 24px;background:#fef2f2;border-radius:16px;text-align:center;">
        <div style="font-size:36px;margin-bottom:12px;">👻</div>
        <div style="font-size:16px;font-weight:700;color:#991b1b;margin-bottom:8px;">투명 인간</div>
        <div style="font-size:14px;color:#7f1d1d;line-height:1.6;">제품은 좋은데<br>아무도 기억 못 함</div>
      </div>
      <div style="flex:1 1 220px;max-width:260px;padding:28px 24px;background:#fffbeb;border-radius:16px;text-align:center;">
        <div style="font-size:36px;margin-bottom:12px;">📊</div>
        <div style="font-size:16px;font-weight:700;color:#92400e;margin-bottom:8px;">스펙 나열</div>
        <div style="font-size:14px;color:#78350f;line-height:1.6;">기능만 말하니까<br>고객이 안 움직임</div>
      </div>
      <div style="flex:1 1 220px;max-width:260px;padding:28px 24px;background:#f0fdf4;border-radius:16px;text-align:center;">
        <div style="font-size:36px;margin-bottom:12px;">💸</div>
        <div style="font-size:16px;font-weight:700;color:#166534;margin-bottom:8px;">일회성 고객</div>
        <div style="font-size:14px;color:#14532d;line-height:1.6;">진짜 팬이 아닌<br>할인 때만 오는 사람들</div>
      </div>
    </div>
    <p style="font-size:15px;color:#6b7280;margin-top:16px;"><strong style="color:#92400e;">사람들은 데이터를 잊지만, 이야기는 기억합니다.</strong> 스토리텔링이 브랜드의 생사를 가릅니다.</p>
  </section>

  <section style="${sec("background:#78350f;color:#fff;")}">
    <div style="font-size:13px;color:#fde68a;font-weight:600;letter-spacing:2px;margin-bottom:24px;">THE POWER OF STORYTELLING</div>
    <h2 style="font-size:clamp(24px,4vw,36px);font-weight:800;color:#fff;margin:0 0 24px;">스토리텔링 공식 7가지</h2>
    <div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center;">
      <div style="padding:14px 20px;background:rgba(253,230,138,.15);border:1px solid rgba(253,230,138,.3);border-radius:12px;"><span style="color:#fde68a;font-weight:700;">1</span> <span style="color:rgba(255,255,255,.8);">영웅의 여정</span></div>
      <div style="padding:14px 20px;background:rgba(253,230,138,.15);border:1px solid rgba(253,230,138,.3);border-radius:12px;"><span style="color:#fde68a;font-weight:700;">2</span> <span style="color:rgba(255,255,255,.8);">BAB</span></div>
      <div style="padding:14px 20px;background:rgba(253,230,138,.15);border:1px solid rgba(253,230,138,.3);border-radius:12px;"><span style="color:#fde68a;font-weight:700;">3</span> <span style="color:rgba(255,255,255,.8);">PAS</span></div>
      <div style="padding:14px 20px;background:rgba(253,230,138,.15);border:1px solid rgba(253,230,138,.3);border-radius:12px;"><span style="color:#fde68a;font-weight:700;">4</span> <span style="color:rgba(255,255,255,.8);">AIDA</span></div>
      <div style="padding:14px 20px;background:rgba(253,230,138,.15);border:1px solid rgba(253,230,138,.3);border-radius:12px;"><span style="color:#fde68a;font-weight:700;">5</span> <span style="color:rgba(255,255,255,.8);">Star-Chain-Hook</span></div>
      <div style="padding:14px 20px;background:rgba(253,230,138,.15);border:1px solid rgba(253,230,138,.3);border-radius:12px;"><span style="color:#fde68a;font-weight:700;">6</span> <span style="color:rgba(255,255,255,.8);">3막 구조</span></div>
      <div style="padding:14px 20px;background:rgba(253,230,138,.15);border:1px solid rgba(253,230,138,.3);border-radius:12px;"><span style="color:#fde68a;font-weight:700;">7</span> <span style="color:rgba(255,255,255,.8);">비포-애프터-브릿지</span></div>
    </div>
    <p style="font-size:14px;color:rgba(255,255,255,.5);margin-top:20px;">각 공식의 한국어 예시와 즉시 적용 가이드를 챕터 8에서 다룹니다</p>
  </section>

  <section style="${sec("background:#fff;")}">
    ${label("TABLE OF CONTENTS")}
    ${bigTitle("무엇을 알게 되나요?")}
    ${tocItem("01", "브랜드의 심장을 찾아라: 핵심 스토리 발굴", true, "#d97706")}
    ${tocItem("02", "사람을 사로잡는 서사의 구조", false, "#d97706")}
    ${tocItem("03", "오리진 스토리: 시작의 순간을 무기로", true, "#d97706")}
    ${tocItem("04", "고객을 주인공으로 — 최고의 마케팅", true, "#d97706")}
    ${tocItem("05", "플랫폼별 스토리텔링 전략", false, "#d97706")}
    ${tocItem("06", "감정의 고리: 행동하게 만드는 비밀", true, "#d97706")}
    ${tocItem("07", "진정성의 시대: 진짜가 되는 법", false, "#d97706")}
    ${tocItem("08", "바로 쓰는 스토리텔링 공식 7가지", true, "#d97706")}
    ${tocItem("09", "측정하고 진화하라", false, "#d97706")}
    ${tocItem("10", "스토리로 행동을 이끌어라", false, "#d97706")}
    ${spacer(16)}
    <div style="font-size:13px;color:#9ca3af;">+ 부록: 핵심 스토리 발굴 워크시트 / 오리진 스토리 3분 템플릿 / 공식 치트시트 / 브랜드 스토리 바이블</div>
  </section>

  <section style="${sec("background:#f9fafb;")}">
    ${bigTitle("이런 분께 추천합니다")}
    ${checkList(["제품은 좋은데 사람들이 기억 못 하는 사업자", "SNS에 올려도 반응이 없는 1인 브랜드", "고객 후기를 마케팅 자산으로 활용하고 싶은 분", "경쟁자와 확실히 차별화하고 싶은 분"], "✅", "#fffbeb")}
    ${spacer(16)}
    ${checkList(["스토리 없이 할인만으로 승부하고 싶은 분", "읽기만 하고 자기 이야기를 쓰지 않을 분"], "🚫", "#fef2f2")}
    ${spacer(40)}
    ${bigTitle("자주 묻는 질문")}
    ${faqItem("저는 평범한 사람인데 스토리가 있을까요?", "모든 사업의 시작에는 이유가 있습니다. 챕터 3의 오리진 스토리 워크숍으로 누구나 자기만의 이야기를 발굴할 수 있습니다.")}
    ${faqItem("마케팅 경험이 없어도 가능한가요?", "7가지 공식에 빈칸만 채우면 됩니다. 템플릿과 예시가 모두 포함되어 있어 바로 적용 가능합니다.")}
    ${faqItem("이 가이드는 어떤 형식인가요?", "웹에서 읽는 디지털 가이드입니다. 결제 후 1개월간 열람 가능하며, 계속 업데이트됩니다.")}
  </section>

  <section style="${sec("background:#fff;")}">
    ${bigTitle("이 가이드의 가치")}
    ${priceAnchor([
      { what: "브랜딩 컨설팅 1회", price: "200,000원~", note: "1시간" },
      { what: "마케팅 온라인 강의", price: "99,000원~", note: "일방적 강의" },
      { what: "브랜딩 서적", price: "18,000원~", note: "업데이트 없음" },
    ], "1,000원", "10챕터 + 공식 7가지 + 실행 키트 + 업데이트", "#d97706")}
    ${proofBanner(["📖 스토리텔링 공식 7가지", "✍️ 오리진 스토리 템플릿", "📋 브랜드 스토리 바이블", "🔄 계속 업데이트"], "#fffbeb", "#92400e")}
  </section>

  <section style="${sec("background:#f9fafb;")}">
    ${crossSell("storytelling", ALL_BOOKS_FOR_CROSSSELL)}
  </section>

  ${ctaBlock("📖", "사람들은 데이터를 잊지만,", "이야기는 기억합니다.", "팔로워를 팬으로, 고객을 전도사로.", "#d97706")}
</div>`;
}

/* ═══════════════════════════════════════════
   12. 한번 온 고객을 평생고객으로 만들기
   ═══════════════════════════════════════════ */

function buildCustomerRetention(): string {
  return `<!-- 🤝 한번 온 고객을 평생고객으로 만들기 — 아임웹 상세페이지 -->
<div class="dp-wrap" style="max-width:860px;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
${mobileStyles}
  <section style="${sec("background:linear-gradient(160deg,#ecfdf5,#d1fae5,#a7f3d0);")}">
    ${label("LIVING GUIDE · 살아있는 정보책")}
    <div style="font-size:64px;margin-bottom:16px;">🤝</div>
    <h2 style="margin:0 0 16px;font-size:clamp(28px,5vw,44px);font-weight:800;line-height:1.3;color:#065f46;">신규 고객 1명 확보 비용으로<br>기존 고객 5명을 지킬 수 있습니다</h2>
    <p style="font-size:18px;color:#059669;font-weight:600;margin:0 0 8px;">그런데 왜 확보에만 집중하시나요?</p>
    ${subtitle("고객 유지율 5%만 높여도 수익이 25~95% 증가합니다 — Bain & Company")}
    ${statGrid([
      { num: "5배", label: "신규 확보 vs 유지 비용 차이", color: "#059669" },
      { num: "10배", label: "충성 고객의 생애 가치", color: "#059669" },
      { num: "18개월", label: "실행 로드맵 포함", color: "#059669" },
    ])}
    ${priceBadge("3,900원", "1,000원", "출시 특가")}
    ${urgencyBanner()}
  </section>

  <section style="${sec("background:#fff;")}">
    ${bigTitle("이 상황, 겪어보셨죠?")}
    <div style="display:flex;flex-wrap:wrap;gap:20px;justify-content:center;margin:32px 0;">
      <div style="flex:1 1 220px;max-width:260px;padding:28px 24px;background:#fef2f2;border-radius:16px;text-align:center;">
        <div style="font-size:36px;margin-bottom:12px;">🚪</div>
        <div style="font-size:16px;font-weight:700;color:#991b1b;margin-bottom:8px;">조용한 이탈</div>
        <div style="font-size:14px;color:#7f1d1d;line-height:1.6;">열심히 서비스했는데<br>고객이 말없이 떠남</div>
      </div>
      <div style="flex:1 1 220px;max-width:260px;padding:28px 24px;background:#fff7ed;border-radius:16px;text-align:center;">
        <div style="font-size:36px;margin-bottom:12px;">💸</div>
        <div style="font-size:16px;font-weight:700;color:#9a3412;margin-bottom:8px;">확보 비용 폭등</div>
        <div style="font-size:14px;color:#7c2d12;line-height:1.6;">광고비는 늘어나는데<br>재구매율은 제자리</div>
      </div>
      <div style="flex:1 1 220px;max-width:260px;padding:28px 24px;background:#ecfdf5;border-radius:16px;text-align:center;">
        <div style="font-size:36px;margin-bottom:12px;">📢</div>
        <div style="font-size:16px;font-weight:700;color:#065f46;margin-bottom:8px;">추천 0건</div>
        <div style="font-size:14px;color:#064e3b;line-height:1.6;">만족한다고 했는데<br>주변에 추천은 안 함</div>
      </div>
    </div>
    <p style="font-size:15px;color:#6b7280;margin-top:16px;"><strong style="color:#059669;">68%의 고객이 떠나는 이유: "이 회사가 나를 신경 쓰지 않는다고 느꼈기 때문"</strong> — Gartner</p>
  </section>

  <section style="${sec("background:#065f46;color:#fff;")}">
    <div style="font-size:13px;color:#6ee7b7;font-weight:600;letter-spacing:2px;margin-bottom:24px;">THE PSYCHOLOGY OF LOYALTY</div>
    <h2 style="font-size:clamp(24px,4vw,36px);font-weight:800;color:#fff;margin:0 0 24px;">고객이 떠나지 않는 4가지 심리</h2>
    <div style="display:flex;flex-wrap:wrap;gap:16px;justify-content:center;">
      <div style="flex:1 1 200px;max-width:200px;padding:24px 20px;background:rgba(110,231,183,.1);border-radius:16px;border:1px solid rgba(110,231,183,.2);">
        <div style="font-size:24px;font-weight:800;color:#6ee7b7;">1</div>
        <div style="font-size:15px;color:rgba(255,255,255,.8);margin-top:8px;">인지적 편안함<br><small style="color:rgba(255,255,255,.5);">익숙함이 장벽을 만든다</small></div>
      </div>
      <div style="flex:1 1 200px;max-width:200px;padding:24px 20px;background:rgba(110,231,183,.1);border-radius:16px;border:1px solid rgba(110,231,183,.2);">
        <div style="font-size:24px;font-weight:800;color:#6ee7b7;">2</div>
        <div style="font-size:15px;color:rgba(255,255,255,.8);margin-top:8px;">정체성 통합<br><small style="color:rgba(255,255,255,.5);">브랜드가 나의 일부가 됨</small></div>
      </div>
      <div style="flex:1 1 200px;max-width:200px;padding:24px 20px;background:rgba(110,231,183,.1);border-radius:16px;border:1px solid rgba(110,231,183,.2);">
        <div style="font-size:24px;font-weight:800;color:#6ee7b7;">3</div>
        <div style="font-size:15px;color:rgba(255,255,255,.8);margin-top:8px;">손실 회피<br><small style="color:rgba(255,255,255,.5);">투자한 것을 잃기 싫음</small></div>
      </div>
      <div style="flex:1 1 200px;max-width:200px;padding:24px 20px;background:rgba(110,231,183,.1);border-radius:16px;border:1px solid rgba(110,231,183,.2);">
        <div style="font-size:24px;font-weight:800;color:#6ee7b7;">4</div>
        <div style="font-size:15px;color:rgba(255,255,255,.8);margin-top:8px;">신뢰 구축<br><small style="color:rgba(255,255,255,.5);">긍정 경험이 쌓이면 탄력적</small></div>
      </div>
    </div>
  </section>

  <section style="${sec("background:#fff;")}">
    ${label("TABLE OF CONTENTS")}
    ${bigTitle("무엇을 알게 되나요?")}
    ${tocItem("01", "고객을 지키는 것이 중요한 이유: 유지의 경제학", true, "#059669")}
    ${tocItem("02", "고객이 떠나지 않는 심리학: 충성도의 4가지 기둥", true, "#059669")}
    ${tocItem("03", "단발성 구매를 반복 구매로: 로열티 프로그램 설계", true, "#059669")}
    ${tocItem("04", "고객이 '나를 알아주는구나'라고 느끼게 만드는 법", false, "#059669")}
    ${tocItem("05", "고객이 떠나기 전에 문제를 해결하라: 능동형 서비스", true, "#059669")}
    ${tocItem("06", "고객을 팬으로, 팬을 전도사로: 커뮤니티 구축", false, "#059669")}
    ${tocItem("07", "이탈의 경고 신호 7가지와 즉시 대응법", true, "#059669")}
    ${tocItem("08", "충성 고객이 새 고객을 데려오는 추천 엔진", false, "#059669")}
    ${tocItem("09", "모든 전략을 하나로: 18개월 실행 로드맵", false, "#059669")}
    ${tocItem("10", "미래에 대비하는 고객 유지 전략", false, "#059669")}
    ${spacer(16)}
    <div style="font-size:13px;color:#9ca3af;">+ 부록: CLV 계산 워크시트 / 로열티 설계 체크리스트 / 이탈 모니터링 템플릿 / 추천 엔진 설계 / 18개월 로드맵</div>
  </section>

  <section style="${sec("background:#f9fafb;")}">
    ${bigTitle("이런 분께 추천합니다")}
    ${checkList(["고객은 오는데 재구매율이 낮은 사업자", "광고비가 계속 늘어나는데 매출 성장이 더딘 분", "고객 이탈 이유를 모르겠는 분", "충성 고객을 추천 엔진으로 활용하고 싶은 분"], "✅", "#ecfdf5")}
    ${spacer(16)}
    ${checkList(["신규 고객 확보만으로 충분하다고 생각하는 분", "고객 관계에 투자할 의지가 없는 분"], "🚫", "#fef2f2")}
    ${spacer(40)}
    ${bigTitle("자주 묻는 질문")}
    ${faqItem("소규모 사업자도 로열티 프로그램을 만들 수 있나요?", "네. 챕터 3에서 1인 사업자도 바로 적용할 수 있는 간단한 포인트/스탬프 시스템부터 안내합니다. 카카오톡 채널만으로도 시작 가능합니다.")}
    ${faqItem("고객 이탈을 어떻게 미리 알 수 있나요?", "챕터 7에서 이탈의 경고 신호 7가지와 각각의 즉시 대응 프로토콜을 구체적으로 다룹니다.")}
    ${faqItem("이 가이드는 어떤 형식인가요?", "웹에서 읽는 디지털 가이드입니다. 결제 후 1개월간 열람 가능하며, 계속 업데이트됩니다.")}
  </section>

  <section style="${sec("background:#fff;")}">
    ${bigTitle("이 가이드의 가치")}
    ${priceAnchor([
      { what: "CRM 컨설팅 1회", price: "300,000원~", note: "1시간" },
      { what: "고객관리 온라인 강의", price: "149,000원~", note: "일방적 강의" },
      { what: "마케팅 서적", price: "20,000원~", note: "업데이트 없음" },
    ], "1,000원", "10챕터 + 실행 키트 + 18개월 로드맵 + 업데이트", "#059669")}
    ${proofBanner(["📊 Bain & Company 연구 기반", "🏪 스타벅스·아마존 사례", "📋 18개월 실행 로드맵", "🔄 계속 업데이트"], "#ecfdf5", "#059669")}
  </section>

  <section style="${sec("background:#f9fafb;")}">
    ${crossSell("customer-retention", ALL_BOOKS_FOR_CROSSSELL)}
  </section>

  ${ctaBlock("🤝", "한번 온 고객을", "평생고객으로 만드세요.", "유지율 5%만 높여도 수익이 25~95% 증가합니다.", "#059669")}
</div>`;
}

/* ═══════════════════════════════════════════
   13. 완판의 런칭 스토리텔링
   ═══════════════════════════════════════════ */

function buildLaunchStorytelling(): string {
  return `<!-- 🚀 완판의 치트키, 런칭 스토리텔링의 비밀 — 아임웹 상세페이지 -->
<div class="dp-wrap" style="max-width:860px;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
${mobileStyles}
  <section style="${sec("background:linear-gradient(160deg,#fff7ed,#fed7aa,#fdba74);")}">
    ${label("LIVING GUIDE · 살아있는 정보책")}
    <div style="font-size:64px;margin-bottom:16px;">🚀</div>
    <h2 style="margin:0 0 16px;font-size:clamp(28px,5vw,44px);font-weight:800;line-height:1.3;color:#7c2d12;">아무리 좋은 제품이라도<br>런칭을 못 하면 소용없습니다</h2>
    <p style="font-size:18px;color:#ea580c;font-weight:600;margin:0 0 8px;">스타트업 실패의 2번째 이유: 시장 필요성 부재</p>
    ${subtitle("프리런칭부터 수익화 루프까지 — 제품 출시의 A to Z 실전 가이드")}
    ${statGrid([
      { num: "5단계", label: "런칭 서사 구조", color: "#ea580c" },
      { num: "4통", label: "프리런칭 이메일 시퀀스", color: "#ea580c" },
      { num: "D-Day", label: "48시간 실행 체크리스트", color: "#ea580c" },
    ])}
    ${priceBadge("3,900원", "1,000원", "출시 특가")}
    ${urgencyBanner()}
  </section>

  <section style="${sec("background:#fff;")}">
    ${bigTitle("이 실수, 하고 계시죠?")}
    <div style="display:flex;flex-wrap:wrap;gap:20px;justify-content:center;margin:32px 0;">
      <div style="flex:1 1 220px;max-width:260px;padding:28px 24px;background:#fef2f2;border-radius:16px;text-align:center;">
        <div style="font-size:36px;margin-bottom:12px;">🎯</div>
        <div style="font-size:16px;font-weight:700;color:#991b1b;margin-bottom:8px;">엉뚱한 고객</div>
        <div style="font-size:14px;color:#7f1d1d;line-height:1.6;">모두에게 사랑받으려다<br>누구에게도 인상 못 남김</div>
      </div>
      <div style="flex:1 1 220px;max-width:260px;padding:28px 24px;background:#fff7ed;border-radius:16px;text-align:center;">
        <div style="font-size:36px;margin-bottom:12px;">📢</div>
        <div style="font-size:16px;font-weight:700;color:#9a3412;margin-bottom:8px;">스토리 없는 런칭</div>
        <div style="font-size:14px;color:#7c2d12;line-height:1.6;">기능만 나열하니<br>아무도 설레지 않음</div>
      </div>
      <div style="flex:1 1 220px;max-width:260px;padding:28px 24px;background:#ecfdf5;border-radius:16px;text-align:center;">
        <div style="font-size:36px;margin-bottom:12px;">📉</div>
        <div style="font-size:16px;font-weight:700;color:#065f46;margin-bottom:8px;">한번 하고 끝</div>
        <div style="font-size:14px;color:#064e3b;line-height:1.6;">런칭 후 수익화 루프<br>시스템이 없음</div>
      </div>
    </div>
  </section>

  <section style="${sec("background:#7c2d12;color:#fff;")}">
    <div style="font-size:13px;color:#fdba74;font-weight:600;letter-spacing:2px;margin-bottom:24px;">THE LAUNCH SYSTEM</div>
    <h2 style="font-size:clamp(24px,4vw,36px);font-weight:800;color:#fff;margin:0 0 24px;">런칭은 이벤트가 아니라 시스템입니다</h2>
    <div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center;">
      <div style="padding:16px 20px;background:rgba(253,186,116,.15);border:1px solid rgba(253,186,116,.3);border-radius:12px;"><span style="color:#fdba74;font-weight:700;">1</span> <span style="color:rgba(255,255,255,.8);">진짜 고객 찾기</span></div>
      <div style="padding:16px 20px;background:rgba(253,186,116,.15);border:1px solid rgba(253,186,116,.3);border-radius:12px;"><span style="color:#fdba74;font-weight:700;">2</span> <span style="color:rgba(255,255,255,.8);">스토리라인 설계</span></div>
      <div style="padding:16px 20px;background:rgba(253,186,116,.15);border:1px solid rgba(253,186,116,.3);border-radius:12px;"><span style="color:#fdba74;font-weight:700;">3</span> <span style="color:rgba(255,255,255,.8);">프리런칭 붐</span></div>
      <div style="padding:16px 20px;background:rgba(253,186,116,.15);border:1px solid rgba(253,186,116,.3);border-radius:12px;"><span style="color:#fdba74;font-weight:700;">4</span> <span style="color:rgba(255,255,255,.8);">D-Day 실행</span></div>
      <div style="padding:16px 20px;background:rgba(253,186,116,.15);border:1px solid rgba(253,186,116,.3);border-radius:12px;"><span style="color:#fdba74;font-weight:700;">5</span> <span style="color:rgba(255,255,255,.8);">수익화 루프</span></div>
    </div>
    <p style="font-size:14px;color:rgba(255,255,255,.5);margin-top:20px;">반복할수록 강해지는 런칭 루프 — 매번 더 정교하게</p>
  </section>

  <section style="${sec("background:#fff;")}">
    ${label("TABLE OF CONTENTS")}
    ${bigTitle("무엇을 알게 되나요?")}
    ${tocItem("01", "내 상품을 구매할 '진짜 고객' 찾기", true, "#ea580c")}
    ${tocItem("02", "스토리라인 설계도: 5단계 서사 구조", true, "#ea580c")}
    ${tocItem("03", "브랜드 목소리 잡기: 보이스 트라이앵글", false, "#ea580c")}
    ${tocItem("04", "프리런칭 붐 조성하기: 대기명단 + 티저 6가지", true, "#ea580c")}
    ${tocItem("05", "이메일 시퀀스: 구독자를 예비 구매자로 바꾸는 4통", true, "#ea580c")}
    ${tocItem("06", "런칭 컨트롤타워: D-Day 48시간 실행", true, "#ea580c")}
    ${tocItem("07", "제한하기 전략과 실시간 최적화", false, "#ea580c")}
    ${tocItem("08", "런칭 이후: 수익화 루프 시스템", true, "#ea580c")}
    ${tocItem("09", "데이터로 진화하라: KPI + 코호트 분석", false, "#ea580c")}
    ${tocItem("10", "런칭 루프: 반복할수록 강해지는 성장 엔진", false, "#ea580c")}
    ${spacer(16)}
    <div style="font-size:13px;color:#9ca3af;">+ 부록: 고객 레이더 워크시트 / 서사 템플릿 / 메시지 매트릭스 / D-Day 체크리스트 / ICE 스코어카드 / 연간 캘린더</div>
  </section>

  <section style="${sec("background:#f9fafb;")}">
    ${bigTitle("이런 분께 추천합니다")}
    ${checkList(["제품은 만들었는데 어떻게 출시할지 모르는 분", "런칭했는데 반응이 없었던 경험이 있는 분", "프리런칭 전략을 체계적으로 배우고 싶은 분", "한번 런칭하고 끝이 아니라 반복 수익을 원하는 분"], "✅", "#fff7ed")}
    ${spacer(16)}
    ${checkList(["제품 없이 마케팅만으로 팔려는 분", "읽기만 하고 실행하지 않을 분"], "🚫", "#fef2f2")}
    ${spacer(40)}
    ${bigTitle("자주 묻는 질문")}
    ${faqItem("디지털 제품이 아닌 실물 제품에도 적용되나요?", "네. 핵심 프레임워크(고객 찾기, 서사 구조, 프리런칭, 수익화 루프)는 모든 제품 출시에 적용 가능합니다.")}
    ${faqItem("혼자서도 할 수 있나요?", "네. 부록의 체크리스트와 템플릿을 따라하면 1인 사업자도 체계적인 런칭이 가능합니다.")}
    ${faqItem("이 가이드는 어떤 형식인가요?", "웹에서 읽는 디지털 가이드입니다. 결제 후 1개월간 열람 가능하며, 계속 업데이트됩니다.")}
  </section>

  <section style="${sec("background:#fff;")}">
    ${bigTitle("이 가이드의 가치")}
    ${priceAnchor([
      { what: "런칭 컨설팅 1회", price: "500,000원~", note: "1시간" },
      { what: "마케팅 온라인 강의", price: "199,000원~", note: "일방적 강의" },
      { what: "마케팅 서적", price: "22,000원~", note: "업데이트 없음" },
    ], "1,000원", "10챕터 + 실행 키트 10종 + 런칭 루프 + 업데이트", "#ea580c")}
    ${proofBanner(["🎯 4R 페르소나 프레임워크", "📧 4통 이메일 시퀀스", "🔥 D-Day 체크리스트", "🔄 런칭 루프 시스템"], "#fff7ed", "#ea580c")}
  </section>

  <section style="${sec("background:#f9fafb;")}">
    ${crossSell("launch-storytelling", ALL_BOOKS_FOR_CROSSSELL)}
  </section>

  ${ctaBlock("🚀", "런칭은 이벤트가 아니라", "반복 가능한 시스템입니다.", "프리런칭부터 수익화 루프까지, 완판의 비밀.", "#ea580c")}
</div>`;
}

/* ═══════════════════════════════════════════
   14. 돈의 심리학
   ═══════════════════════════════════════════ */

function buildMoneyPsychology(): string {
  return `<!-- 💰 사업 성패를 좌우하는 돈의 심리학 — 아임웹 상세페이지 -->
<div class="dp-wrap" style="max-width:860px;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
${mobileStyles}
  <section style="${sec("background:linear-gradient(160deg,#fefce8,#fef3c7,#fde68a);")}">
    ${label("LIVING GUIDE · 살아있는 정보책")}
    <div style="font-size:64px;margin-bottom:16px;">💰</div>
    <h2 style="margin:0 0 16px;font-size:clamp(28px,5vw,44px);font-weight:800;line-height:1.3;color:#78350f;">같은 실력인데 왜 어떤 창업가만<br>돈 걱정 없이 성장할까요?</h2>
    <p style="font-size:18px;color:#92400e;font-weight:600;margin:0 0 8px;">차이는 '돈에 대한 심리적 이해'에서 시작됩니다.</p>
    ${subtitle("인지 편향부터 CLEAR·IMPACT 모델까지 — 감정에 흔들리지 않는 재정 판단력")}
    ${statGrid([
      { num: "CLEAR", label: "5단계 의사결정 모델", color: "#ca8a04" },
      { num: "IMPACT", label: "6단계 심리 구조 프레임워크", color: "#ca8a04" },
      { num: "65%", label: "감정 지능 높은 창업가의 위기 생존율 향상", color: "#ca8a04" },
    ])}
    ${priceBadge("3,900원", "1,000원", "출시 특가")}
    ${urgencyBanner()}
  </section>

  <section style="${sec("background:#fff;")}">
    ${bigTitle("이 함정에 빠져 있지 않나요?")}
    <div style="display:flex;flex-wrap:wrap;gap:20px;justify-content:center;margin:32px 0;">
      <div style="flex:1 1 220px;max-width:260px;padding:28px 24px;background:#fef2f2;border-radius:16px;text-align:center;">
        <div style="font-size:36px;margin-bottom:12px;">😰</div>
        <div style="font-size:16px;font-weight:700;color:#991b1b;margin-bottom:8px;">손실 공포</div>
        <div style="font-size:14px;color:#7f1d1d;line-height:1.6;">잃을까봐 두려워서<br>기회를 계속 놓침</div>
      </div>
      <div style="flex:1 1 220px;max-width:260px;padding:28px 24px;background:#fefce8;border-radius:16px;text-align:center;">
        <div style="font-size:36px;margin-bottom:12px;">🧠</div>
        <div style="font-size:16px;font-weight:700;color:#854d0e;margin-bottom:8px;">과신 편향</div>
        <div style="font-size:14px;color:#713f12;line-height:1.6;">"이번엔 확실해"라며<br>데이터 없이 결정</div>
      </div>
      <div style="flex:1 1 220px;max-width:260px;padding:28px 24px;background:#f0fdf4;border-radius:16px;text-align:center;">
        <div style="font-size:36px;margin-bottom:12px;">🎭</div>
        <div style="font-size:16px;font-weight:700;color:#166534;margin-bottom:8px;">감정적 판단</div>
        <div style="font-size:14px;color:#14532d;line-height:1.6;">"이성적 판단"이라 믿지만<br>실은 감정이 먼저 결정</div>
      </div>
    </div>
    <p style="font-size:15px;color:#6b7280;margin-top:16px;"><strong style="color:#92400e;">100만원을 잃는 두려움은 100만원을 버는 기쁨보다 2배 강합니다.</strong> 이것이 당신의 판단을 왜곡합니다.</p>
  </section>

  <section style="${sec("background:#78350f;color:#fff;")}">
    <div style="font-size:13px;color:#fde68a;font-weight:600;letter-spacing:2px;margin-bottom:24px;">TWO PROVEN FRAMEWORKS</div>
    <h2 style="font-size:clamp(24px,4vw,36px);font-weight:800;color:#fff;margin:0 0 24px;">감정과 이성을 함께 다루는 2가지 모델</h2>
    <div style="display:flex;flex-wrap:wrap;gap:20px;justify-content:center;">
      <div style="flex:1 1 280px;max-width:380px;padding:32px 28px;background:rgba(253,230,138,.1);border:1px solid rgba(253,230,138,.3);border-radius:16px;text-align:left;">
        <div style="font-size:24px;font-weight:800;color:#fde68a;margin-bottom:12px;">CLEAR</div>
        <div style="font-size:14px;color:rgba(255,255,255,.8);line-height:1.8;">C — 감정 포착<br>L — 사실 목록화<br>E — 영향 평가<br>A — 대안 분석<br>R — 균형 결정</div>
      </div>
      <div style="flex:1 1 280px;max-width:380px;padding:32px 28px;background:rgba(253,230,138,.1);border:1px solid rgba(253,230,138,.3);border-radius:16px;text-align:left;">
        <div style="font-size:24px;font-weight:800;color:#fde68a;margin-bottom:12px;">IMPACT</div>
        <div style="font-size:14px;color:rgba(255,255,255,.8);line-height:1.8;">I — 감정 상태 인식<br>M — 인지 편향 매핑<br>P — 데이터 처리<br>A — 대안 분석<br>C — 문화 요인 고려<br>T — 결과 추적</div>
      </div>
    </div>
  </section>

  <section style="${sec("background:#fff;")}">
    ${label("TABLE OF CONTENTS")}
    ${bigTitle("무엇을 알게 되나요?")}
    ${tocItem("01", "금전적 결정 뒤에 숨어있는 힘: 인지 편향과 문화", true, "#ca8a04")}
    ${tocItem("02", "재정적 성공을 위한 성장 마인드셋", false, "#ca8a04")}
    ${tocItem("03", "미래를 결정하는 매일의 작은 습관: 30분 루틴", true, "#ca8a04")}
    ${tocItem("04", "돈 앞에서 흔들릴 때: CLEAR 의사결정 모델", true, "#ca8a04")}
    ${tocItem("05", "사업적 결정에서 인지 편향 극복하기", true, "#ca8a04")}
    ${tocItem("06", "위기 인식과 리스크 관리: 4단계 프레임워크", false, "#ca8a04")}
    ${tocItem("07", "부를 만드는 마인드셋 장착하기", false, "#ca8a04")}
    ${tocItem("08", "IMPACT 모델: 심리 구조로 부를 설계하기", true, "#ca8a04")}
    ${tocItem("09", "팀 전체가 똑똑하게 판단하는 조직 문화", false, "#ca8a04")}
    ${tocItem("10", "변화 속에서도 흔들리지 않는 재정 판단력", false, "#ca8a04")}
    ${spacer(16)}
    <div style="font-size:13px;color:#9ca3af;">+ 부록: 인지 편향 자가진단 / CLEAR 워크시트 / 30분 루틴 / 대시보드 5대 지표 / IMPACT 카드 / 리스크 매트릭스</div>
  </section>

  <section style="${sec("background:#f9fafb;")}">
    ${bigTitle("이런 분께 추천합니다")}
    ${checkList(["돈 앞에서 감정적으로 흔들리는 사업자", "인지 편향을 인식하고 극복하고 싶은 분", "재정 판단에 체계적인 프레임워크가 필요한 분", "팀 전체의 의사결정 품질을 높이고 싶은 리더"], "✅", "#fefce8")}
    ${spacer(16)}
    ${checkList(["숫자만으로 충분하다고 생각하는 분", "자기 인식에 관심이 없는 분"], "🚫", "#fef2f2")}
    ${spacer(40)}
    ${bigTitle("자주 묻는 질문")}
    ${faqItem("심리학을 몰라도 이해할 수 있나요?", "네. 모든 개념은 사업 현장의 구체적인 사례로 설명되어 있고, CLEAR·IMPACT 모델은 빈칸만 채우면 바로 사용 가능합니다.")}
    ${faqItem("1인 사업자에게도 적용 가능한가요?", "오히려 혼자 결정을 내려야 하는 1인 사업자에게 더 필요합니다. 감정에 휘둘리지 않는 판단 구조가 곧 수익 구조입니다.")}
    ${faqItem("이 가이드는 어떤 형식인가요?", "웹에서 읽는 디지털 가이드입니다. 결제 후 1개월간 열람 가능하며, 계속 업데이트됩니다.")}
  </section>

  <section style="${sec("background:#fff;")}">
    ${bigTitle("이 가이드의 가치")}
    ${priceAnchor([
      { what: "재무 심리 코칭 1회", price: "200,000원~", note: "1시간" },
      { what: "행동경제학 온라인 강의", price: "149,000원~", note: "일방적 강의" },
      { what: "심리학 서적", price: "20,000원~", note: "업데이트 없음" },
    ], "1,000원", "10챕터 + CLEAR·IMPACT 모델 + 실행 키트 + 업데이트", "#ca8a04")}
    ${proofBanner(["🧠 CLEAR 5단계 모델", "📊 IMPACT 6단계", "📋 대시보드 5대 지표", "🔄 계속 업데이트"], "#fefce8", "#92400e")}
  </section>

  <section style="${sec("background:#f9fafb;")}">
    ${crossSell("money-psychology", ALL_BOOKS_FOR_CROSSSELL)}
  </section>

  ${ctaBlock("💰", "돈 앞에서 흔들리지 마세요.", "감정이 아니라 구조로 판단하세요.", "감정 지능 높은 창업가가 65% 더 생존합니다.", "#ca8a04")}
</div>`;
}

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
    author: "김약사 · 유원소망약국",
    gradient: "그린(#16a34a)에서 짙은 에메랄드(#064e3b)로",
    symbol: "체중계 위에 올라선 사람 실루엣, 주위로 채소·운동화·시계 아이콘이 도는 플랫 일러스트",
    mood: "청량, 생기, 실행력",
  },
  "endocrine-disruptors": {
    title: "생활 속 환경호르몬과 질병",
    subtitle: "BPA Free의 함정부터 PFAS, 미세플라스틱까지",
    author: "김약사 · 유원소망약국",
    gradient: "틸(#0d9488)에서 짙은 다크틸(#134e4a)로",
    symbol: "깨진 플라스틱 용기에서 경고 기호가 떠오르는 플랫 일러스트, 주위에 분자 구조·돋보기 아이콘",
    mood: "과학적, 신뢰, 경각심",
  },
  "declutter-clean": {
    title: "정리와 청소의 기술",
    subtitle: "서랍 하나부터 시작하는 살아있는 가이드",
    author: "김약사 · 유원소망약국",
    gradient: "앰버(#d97706)에서 짙은 브라운(#78350f)으로",
    symbol: "깔끔하게 정리된 서랍장, 위에 타이머 아이콘이 떠 있는 미니멀 플랫 일러스트",
    mood: "깔끔, 따뜻함, 실행력",
  },
  "glp1-guide": {
    title: "약사가 알려주는 GLP-1 비만약 완전 가이드",
    subtitle: "오젬픽·위고비·마운자로 — 실제 경험 + 최신 연구 기반",
    author: "김약사 · 유원소망약국",
    gradient: "딥블루(#2563eb)에서 짙은 네이비(#1e3a5f)로",
    symbol: "주사기(펜형)와 체중계, 주위에 분자 구조·그래프 아이콘이 도는 의료 플랫 일러스트",
    mood: "전문적, 신뢰, 안심",
  },
  "slow-aging": {
    title: "몸이 젊어지는 4주 저속노화 리셋",
    subtitle: "식단·혈당·운동·수면, 28일 실전 프로그램",
    author: "김약사 · 유원소망약국",
    gradient: "밝은 민트(#a7f3d0)에서 딥그린(#14532d)으로",
    symbol: "모래시계 안에서 초록 새싹이 자라나는 모습의 플랫 일러스트 (노화 시간을 되돌리는 상징)",
    mood: "청량, 생기, 실행력",
  },
  "love-skills": {
    title: "밀당 없이 사랑받는 연애의 기술",
    subtitle: "애착·소통·관계 심리학 수업",
    author: "김약사 · 유원소망약국",
    gradient: "로즈핑크(#db2777)에서 웜톤 살구색(#fda4af)으로",
    symbol: "두 개의 원이 부드럽게 겹쳐지고 겹친 부분에 작은 하트가 있는 플랫 일러스트 (건강한 관계의 상징)",
    mood: "따뜻함, 공감, 포근함",
  },
  "ai-sidejob": {
    title: "하루 1시간, AI 부업 자동화 시스템",
    subtitle: "수익 파이프라인 3개를 만드는 실전 가이드",
    author: "김약사 · 유원소망약국",
    gradient: "딥블루(#2563eb)에서 짙은 네이비(#1e3a5f)로",
    symbol: "노트북 화면에서 3개의 빛나는 파이프라인이 뻗어 나와 동전·그래프·문서로 연결되는 플랫 일러스트",
    mood: "테크, 미래적, 실행력",
  },
  "threads-marketing": {
    title: "0팔로워로 시작하는 스레드 마케팅",
    subtitle: "텍스트 한 줄로 성장하는 28일 공략집",
    author: "김약사 · 유원소망약국",
    gradient: "퍼플(#7c3aed)에서 딥퍼플(#4c1d95)로",
    symbol: "실 뭉치(스레드)에서 말풍선들이 연결되어 퍼져나가는 플랫 일러스트 (텍스트로 연결되는 커뮤니티)",
    mood: "트렌디, 활기, 성장",
  },
  "eisenhower-matrix": {
    title: "일잘러의 비밀무기, 아이젠하워 매트릭스",
    subtitle: "하루 15분 결정 관리 시스템",
    author: "김약사 · 유원소망약국",
    gradient: "슬레이트(#334155)에서 다크네이비(#0f172a)로",
    symbol: "네 칸으로 나뉜 매트릭스 보드, 중앙에 시계 아이콘이 있는 미니멀 플랫 일러스트 (결정의 프레임워크)",
    mood: "전문적, 명확, 집중",
  },
  "deep-focus": {
    title: "딥포커스, 초집중의 기술",
    subtitle: "3분마다 방해받는 시대의 집중력 시스템",
    author: "김약사 · 유원소망약국",
    gradient: "인디고(#4f46e5)에서 딥인디고(#1e1b4b)로",
    symbol: "뇌 실루엣 안에 과녁이 있고 주변의 알림·소음 아이콘이 차단되는 플랫 일러스트 (집중의 방패)",
    mood: "집중, 명확, 고요",
  },
  "storytelling": {
    title: "사람의 마음을 휘어잡는 스토리텔링의 기술",
    subtitle: "브랜드 스토리로 팬을 만드는 법",
    author: "김약사 · 유원소망약국",
    gradient: "앰버(#f59e0b)에서 딥오렌지(#c2410c)로",
    symbol: "펼쳐진 책에서 빛나는 하트와 말풍선이 퍼져나가는 플랫 일러스트 (이야기의 힘)",
    mood: "따뜻함, 영감, 연결",
  },
  "customer-retention": {
    title: "한번 온 고객을 평생고객으로 만들기",
    subtitle: "이탈 방지부터 추천 엔진까지",
    author: "김약사 · 유원소망약국",
    gradient: "에메랄드(#059669)에서 딥틸(#065f46)로",
    symbol: "두 손이 맞잡혀 있고 주변에 하트·별·반복 화살표가 도는 플랫 일러스트 (관계의 순환)",
    mood: "신뢰, 따뜻함, 지속성",
  },
  "launch-storytelling": {
    title: "완판의 치트키, 런칭 스토리텔링의 비밀",
    subtitle: "프리런칭부터 수익화 루프까지",
    author: "김약사 · 유원소망약국",
    gradient: "레드오렌지(#ea580c)에서 딥레드(#991b1b)로",
    symbol: "로켓이 발사되면서 주변에 이메일·차트·메가폰 아이콘이 퍼져나가는 플랫 일러스트 (런칭의 폭발력)",
    mood: "열정, 실행력, 폭발적 성장",
  },
  "money-psychology": {
    title: "사업 성패를 좌우하는 돈의 심리학",
    subtitle: "감정에 흔들리지 않는 재정 판단력",
    author: "김약사 · 유원소망약국",
    gradient: "골드(#ca8a04)에서 딥브라운(#78350f)으로",
    symbol: "뇌와 동전이 연결된 저울, 한쪽에 감정 아이콘 다른 쪽에 차트 아이콘이 있는 플랫 일러스트 (감정과 이성의 균형)",
    mood: "지혜, 균형, 통찰",
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
];

export function generateAllDetails(): DetailOutput[] {
  return BOOK_META.map((b) => {
    const html = b.builder();
    return {
      id: b.id,
      title: b.title,
      emoji: b.emoji,
      detailHtml: html,
      detailSize: html.length,
      coverPrompt: buildCoverPrompt(b.id),
      marketingCopy: buildMarketingCopy(b.id),
    };
  });
}
