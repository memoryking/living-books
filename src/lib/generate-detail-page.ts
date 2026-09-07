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
];

/* ═══════════════════════════════════════════
   1. 다이어트 서바이벌 시스템
   ═══════════════════════════════════════════ */

function buildDietSecrets(): string {
  return `<!-- 🏋️ 다이어트 서바이벌 시스템 — 아임웹 상세페이지 -->
<div style="max-width:860px;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">

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
  <section style="${sec("background:linear-gradient(160deg,#f0fdf4,#ecfdf5);")}">
    ${label("PREVIEW")}
    ${bigTitle("본문 미리보기")}
    <div style="max-width:580px;margin:0 auto;padding:32px;background:#fff;border-radius:16px;text-align:left;box-shadow:0 4px 20px rgba(0,0,0,.06);line-height:1.8;font-size:15px;color:#374151;">
      <p style="margin:0 0 16px;">실제로 성공한 사람들은 <strong>'다이어트'를 하지 않았습니다.</strong></p>
      <p style="margin:0 0 16px;">의지력이 아니라 환경을 바꿨습니다. 냉장고를 열었을 때 건강한 선택이 가장 쉬운 선택이 되도록. 접시 크기를 바꾸면 무의식적으로 양이 줄도록.</p>
      <p style="margin:0;"><strong>이것이 시스템입니다.</strong> 의지력은 소모되지만, 시스템은 자동으로 작동합니다.</p>
    </div>
    <div style="margin-top:12px;font-size:13px;color:#9ca3af;">— 챕터 3에서 발췌</div>
  </section>

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
  <section style="${sec("background:linear-gradient(160deg,#059669,#047857);")}padding:80px 40px;">
    <div style="font-size:48px;margin-bottom:16px;">🏋️</div>
    <h2 style="font-size:clamp(24px,4.5vw,38px);font-weight:800;color:#fff;margin:0 0 16px;line-height:1.3;">"이번이 마지막 다이어트"가<br>진짜가 되는 시스템</h2>
    <p style="font-size:16px;color:rgba(255,255,255,.8);margin:0 0 32px;line-height:1.7;">커피 한 잔보다 저렴한 1,000원.<br>계속 업데이트되는 살아있는 가이드.</p>
    <div style="display:inline-block;padding:16px 48px;background:#fff;color:#059669;font-size:18px;font-weight:700;border-radius:999px;">지금 시작하기</div>
    ${spacer(24)}
    <div style="font-size:13px;color:rgba(255,255,255,.6);">유원소망약국 김약사 · 살아있는 정보책</div>
  </section>

</div>`;
}

/* ═══════════════════════════════════════════
   2. 생활 속 환경호르몬과 질병
   ═══════════════════════════════════════════ */

function buildEndocrineDisruptors(): string {
  return `<!-- 🧪 생활 속 환경호르몬과 질병 — 아임웹 상세페이지 -->
<div style="max-width:860px;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">

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
  <section style="${sec("background:linear-gradient(160deg,#0d9488,#115e59);")}padding:80px 40px;">
    <div style="font-size:48px;margin-bottom:16px;">🧪</div>
    <h2 style="font-size:clamp(24px,4.5vw,38px);font-weight:800;color:#fff;margin:0 0 16px;line-height:1.3;">불안하지 않아도 됩니다.<br>할 수 있는 것부터 바꾸세요.</h2>
    <p style="font-size:16px;color:rgba(255,255,255,.8);margin:0 0 32px;line-height:1.7;">3가지만 바꾸면 80%가 해결됩니다.<br>1,000원 · 계속 업데이트되는 살아있는 가이드.</p>
    <div style="display:inline-block;padding:16px 48px;background:#fff;color:#0d9488;font-size:18px;font-weight:700;border-radius:999px;">지금 시작하기</div>
    ${spacer(24)}
    <div style="font-size:13px;color:rgba(255,255,255,.6);">유원소망약국 김약사 · 살아있는 정보책</div>
  </section>

</div>`;
}

/* ═══════════════════════════════════════════
   3. 정리와 청소의 기술
   ═══════════════════════════════════════════ */

function buildDeclutterClean(): string {
  return `<!-- 🧹 정리와 청소의 기술 — 아임웹 상세페이지 -->
<div style="max-width:860px;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">

  <!-- Hero -->
  <section style="${sec("background:linear-gradient(160deg,#fffbeb,#fef3c7,#fde68a);")}">
    ${label("LIVING GUIDE · 살아있는 정보책")}
    <div style="font-size:64px;margin-bottom:16px;">🧹</div>
    ${bigTitle("서랍 하나.", "5분 타이머.")}
    <p style="font-size:20px;color:#92400e;font-weight:600;margin:0 0 8px;">이것만으로 시작됩니다.</p>
    ${subtitle("정리는 의지력이 아닙니다. 시스템입니다. — Reddit 수백 명의 실전 경험 기반")}
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
  <section style="${sec("background:linear-gradient(160deg,#d97706,#b45309);")}padding:80px 40px;">
    <div style="font-size:48px;margin-bottom:16px;">🧹</div>
    <h2 style="font-size:clamp(24px,4.5vw,38px);font-weight:800;color:#fff;margin:0 0 16px;line-height:1.3;">서랍 하나, 5분 타이머.<br>오늘부터 시스템이 대신 해줍니다.</h2>
    <p style="font-size:16px;color:rgba(255,255,255,.8);margin:0 0 32px;line-height:1.7;">1,000원 · 계속 업데이트되는 살아있는 가이드.</p>
    <div style="display:inline-block;padding:16px 48px;background:#fff;color:#d97706;font-size:18px;font-weight:700;border-radius:999px;">지금 시작하기</div>
    ${spacer(24)}
    <div style="font-size:13px;color:rgba(255,255,255,.6);">유원소망약국 김약사 · 살아있는 정보책</div>
  </section>

</div>`;
}

/* ═══════════════════════════════════════════
   4. GLP-1 비만약 완전 가이드
   ═══════════════════════════════════════════ */

function buildGlp1Guide(): string {
  return `<!-- 💊 GLP-1 비만약 완전 가이드 — 아임웹 상세페이지 -->
<div style="max-width:860px;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">

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
  <section style="${sec("background:linear-gradient(160deg,#2563eb,#1e40af);")}padding:80px 40px;">
    <div style="font-size:48px;margin-bottom:16px;">💊</div>
    <h2 style="font-size:clamp(24px,4.5vw,38px);font-weight:800;color:#fff;margin:0 0 16px;line-height:1.3;">30분짜리 약사 상담을<br>한 권에 담았습니다.</h2>
    <p style="font-size:16px;color:rgba(255,255,255,.8);margin:0 0 32px;line-height:1.7;">지금 결정을 도와드립니다.<br>1,000원 · 계속 업데이트되는 살아있는 가이드.</p>
    <div style="display:inline-block;padding:16px 48px;background:#fff;color:#2563eb;font-size:18px;font-weight:700;border-radius:999px;">지금 시작하기</div>
    ${spacer(24)}
    <div style="font-size:13px;color:rgba(255,255,255,.6);">유원소망약국 김약사 · 살아있는 정보책</div>
  </section>

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
