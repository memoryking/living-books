/**
 * Detail page builder functions — Group 3 (builders 19–28)
 * Auto-split from generate-detail-page.ts
 */
import {
  mobileStyles,
  sec,
  statGrid,
  redditQuote,
  beforeAfter,
  checkList,
  tocItem,
  faqItem,
  bigTitle,
  subtitle,
  label,
  spacer,
  priceBadge,
  urgencyBanner,
  ctaBlock,
  fullPreview,
  priceAnchor,
  proofBanner,
  crossSell,
  ALL_BOOKS_FOR_CROSSSELL,
} from "./generate-detail-page";

/* ═══════════════════════════════════════════
   19. 사업가를 위한 퍼스널 브랜딩 가이드
   ═══════════════════════════════════════════ */

export function buildPersonalBranding(): string {
  return `<!-- 🎤 사업가를 위한 퍼스널 브랜딩 가이드 — 아임웹 상세페이지 -->
<div class="dp-wrap" style="max-width:860px;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
${mobileStyles}
  <section style="${sec("background:linear-gradient(160deg,#fce7f3,#fbcfe8,#f9a8d4);")}">
    ${label("LIVING GUIDE · 살아있는 정보책")}
    <div style="font-size:64px;margin-bottom:16px;">🎤</div>
    <h2 style="margin:0 0 16px;font-size:clamp(28px,5vw,44px);font-weight:800;line-height:1.3;color:#831843;">사업이 안 되는 게 아닙니다.<br>당신이 안 보이는 겁니다.</h2>
    <p style="font-size:18px;color:#be185d;font-weight:600;margin:0 0 8px;">당신이 곧 브랜드입니다.</p>
    ${subtitle("UVP 발견부터 수익화까지 — 사업가를 위한 퍼스널 브랜딩 90일 로드맵")}
    ${statGrid([
      { num: "7", label: "단계 브랜드 구축 프로세스", color: "#be185d" },
      { num: "10", label: "챕터 + 실행 키트", color: "#be185d" },
      { num: "90일", label: "브랜딩 로드맵", color: "#be185d" },
    ])}
    ${priceBadge("3,900원", "1,000원", "출시 특가")}
    ${urgencyBanner()}
  </section>

  <section style="${sec("background:#fff;")}">
    ${bigTitle("이런 상태 아닌가요?")}
    ${beforeAfter(
      ["좋은 제품인데 아무도 모름", "전문성은 있는데 신뢰가 안 쌓임", "SNS에 뭘 올려야 할지 모름"],
      ["이름만으로 신뢰가 생김", "콘텐츠가 영업사원 역할을 함", "브랜드가 고객을 데려옴"],
      "브랜딩 전", "90일 후",
      "#fef2f2", "#f0fdf4"
    )}
    <p style="font-size:15px;color:#6b7280;margin-top:16px;"><strong style="color:#be185d;">Gary Vaynerchuk: "퍼스널 브랜드는 21세기 최고의 안전장치다."</strong></p>
  </section>

  <section style="${sec("background:#831843;color:#fff;")}">
    <div style="font-size:13px;color:#f9a8d4;font-weight:600;letter-spacing:2px;margin-bottom:24px;">PERSONAL BRAND SYSTEM</div>
    <h2 style="font-size:clamp(24px,4vw,36px);font-weight:800;color:#fff;margin:0 0 24px;">7단계 브랜드 구축</h2>
    <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;">
      <div style="padding:14px 16px;background:rgba(249,168,212,.15);border:1px solid rgba(249,168,212,.3);border-radius:12px;"><span style="color:#f9a8d4;font-weight:700;">1</span> <span style="color:rgba(255,255,255,.8);">핵심가치</span></div>
      <div style="padding:14px 16px;background:rgba(249,168,212,.15);border:1px solid rgba(249,168,212,.3);border-radius:12px;"><span style="color:#f9a8d4;font-weight:700;">2</span> <span style="color:rgba(255,255,255,.8);">전문영역</span></div>
      <div style="padding:14px 16px;background:rgba(249,168,212,.15);border:1px solid rgba(249,168,212,.3);border-radius:12px;"><span style="color:#f9a8d4;font-weight:700;">3</span> <span style="color:rgba(255,255,255,.8);">타겟</span></div>
      <div style="padding:14px 16px;background:rgba(249,168,212,.15);border:1px solid rgba(249,168,212,.3);border-radius:12px;"><span style="color:#f9a8d4;font-weight:700;">4</span> <span style="color:rgba(255,255,255,.8);">채널</span></div>
      <div style="padding:14px 16px;background:rgba(249,168,212,.15);border:1px solid rgba(249,168,212,.3);border-radius:12px;"><span style="color:#f9a8d4;font-weight:700;">5</span> <span style="color:rgba(255,255,255,.8);">콘텐츠</span></div>
      <div style="padding:14px 16px;background:rgba(249,168,212,.15);border:1px solid rgba(249,168,212,.3);border-radius:12px;"><span style="color:#f9a8d4;font-weight:700;">6</span> <span style="color:rgba(255,255,255,.8);">포맷</span></div>
      <div style="padding:14px 16px;background:rgba(249,168,212,.15);border:1px solid rgba(249,168,212,.3);border-radius:12px;"><span style="color:#f9a8d4;font-weight:700;">7</span> <span style="color:rgba(255,255,255,.8);">평가</span></div>
    </div>
  </section>

  <section style="${sec("background:#fff;")}">
    ${label("TABLE OF CONTENTS")}
    ${bigTitle("무엇을 알게 되나요?")}
    ${tocItem("01", "왜 퍼스널 브랜딩인가: 브랜드가 자산인 이유", true, "#be185d")}
    ${tocItem("02", "나의 UVP 찾기: 고유 가치 제안 설계법", true, "#be185d")}
    ${tocItem("03", "브랜드 아이덴티티: 시각·언어·스토리의 삼위일체", true, "#be185d")}
    ${tocItem("04", "온라인 존재감 설계: 플랫폼 선택~콘텐츠 전략", false, "#be185d")}
    ${tocItem("05", "신뢰를 쌓는 콘텐츠: 전문성 증명 5가지 유형", false, "#be185d")}
    ${tocItem("06", "네트워킹의 기술: 관계를 비즈니스 자산으로", false, "#be185d")}
    ${tocItem("07", "커뮤니티 빌딩: 팬 생태계 만들기", false, "#be185d")}
    ${tocItem("08", "위기관리와 평판 보호: 브랜드를 지키는 매뉴얼", false, "#be185d")}
    ${tocItem("09", "퍼스널 브랜드 수익화: 5가지 수익 모델", true, "#be185d")}
    ${tocItem("10", "90일 퍼스널 브랜딩 로드맵", true, "#be185d")}
    ${spacer(16)}
    <div style="font-size:13px;color:#9ca3af;">+ 부록: UVP 워크시트 / 브랜드 보이스 가이드 / 콘텐츠 캘린더 / 위기 대응 체크리스트 / 90일 로드맵</div>
  </section>

  <section style="${sec("background:#f9fafb;")}">
    ${bigTitle("이런 분께 추천합니다")}
    ${checkList(["1인 사업을 하는데 자기 이름이 브랜드가 안 된 분", "전문성은 있는데 온라인에서 존재감이 없는 분", "SNS·블로그를 하는데 방향성이 불명확한 분", "네트워킹을 해도 비즈니스로 연결이 안 되는 분"], "✅", "#fce7f3")}
    ${spacer(16)}
    ${checkList(["대기업 브랜드 매니저(B2C 기업 브랜딩과는 다름)", "이미 퍼스널 브랜드로 수익화에 성공한 분"], "🚫", "#fef2f2")}
    ${spacer(40)}
    ${bigTitle("자주 묻는 질문")}
    ${faqItem("사업 초기인데 브랜딩을 시작해도 되나요?", "오히려 초기일수록 효과적입니다. 90일 로드맵을 따라가면 사업과 동시에 브랜드를 구축할 수 있습니다.")}
    ${faqItem("내성적인데 퍼스널 브랜딩이 가능한가요?", "네. Brene Brown은 내성적이지만 세계적 브랜드를 만들었습니다. 글쓰기 중심 전략을 안내합니다.")}
    ${faqItem("이 가이드는 어떤 형식인가요?", "웹에서 읽는 디지털 가이드입니다. 결제 후 1개월간 열람 가능하며, 계속 업데이트됩니다.")}
  </section>

  <section style="${sec("background:#fff;")}">
    ${bigTitle("이 가이드의 가치")}
    ${priceAnchor([
      { what: "브랜딩 컨설팅 1회", price: "500,000원~", note: "1시간" },
      { what: "퍼스널 브랜딩 강의", price: "250,000원~", note: "일방적 강의" },
      { what: "브랜딩 서적", price: "20,000원~", note: "업데이트 없음" },
    ], "1,000원", "10챕터 + 워크시트 5종 + 90일 로드맵 + 업데이트", "#be185d")}
    ${proofBanner(["🎤 UVP 워크시트", "🎨 브랜드 아이덴티티 가이드", "📅 90일 로드맵", "🔄 계속 업데이트"], "#fce7f3", "#be185d")}
  </section>

  <section style="${sec("background:#f9fafb;")}">
    ${crossSell("personal-branding", ALL_BOOKS_FOR_CROSSSELL)}
  </section>

  ${ctaBlock("🎤", "당신이 곧 브랜드입니다.", "90일이면 이름이 신뢰가 됩니다.", "퍼스널 브랜딩 시스템.", "#be185d")}
</div>`;
}

/* ═══════════════════════════════════════════
   20. 수익성을 극대화하는 비즈니스 모델 설계법
   ═══════════════════════════════════════════ */

export function buildBusinessModel(): string {
  return `<!-- 📊 수익성을 극대화하는 비즈니스 모델 설계법 — 아임웹 상세페이지 -->
<div class="dp-wrap" style="max-width:860px;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
${mobileStyles}
  <section style="${sec("background:linear-gradient(160deg,#ecfdf5,#d1fae5,#6ee7b7);")}">
    ${label("LIVING GUIDE · 살아있는 정보책")}
    <div style="font-size:64px;margin-bottom:16px;">📊</div>
    <h2 style="margin:0 0 16px;font-size:clamp(28px,5vw,44px);font-weight:800;line-height:1.3;color:#064e3b;">좋은 아이디어로는 못 법니다.<br>좋은 모델로 법니다.</h2>
    <p style="font-size:18px;color:#047857;font-weight:600;margin:0 0 8px;">수익 구조를 설계하는 것이 진짜 사업입니다.</p>
    ${subtitle("구독·SaaS·마켓플레이스 — 돈을 버는 구조를 설계하는 완전 가이드")}
    ${statGrid([
      { num: "7", label: "가지 수익 모델 비교", color: "#047857" },
      { num: "10", label: "챕터 + 실행 키트", color: "#047857" },
      { num: "90일", label: "모델 설계 로드맵", color: "#047857" },
    ])}
    ${priceBadge("3,900원", "1,000원", "출시 특가")}
    ${urgencyBanner()}
  </section>

  <section style="${sec("background:#fff;")}">
    ${bigTitle("이 실수, 하고 있지 않나요?")}
    ${beforeAfter(
      ["좋은 제품인데 수익 구조가 불분명", "가격을 감으로 정함", "성장해도 이익이 안 남음"],
      ["7가지 수익 모델 중 최적 선택", "데이터 기반 가격 전략 수립", "CAC·LTV로 수익성 관리"],
      "모델 없이", "모델 설계 후",
      "#fef2f2", "#f0fdf4"
    )}
    <p style="font-size:15px;color:#6b7280;margin-top:16px;"><strong style="color:#047857;">Netflix: DVD 대여 → 구독 스트리밍 피벗으로 시가총액 200조원 달성.</strong></p>
  </section>

  <section style="${sec("background:#064e3b;color:#fff;")}">
    <div style="font-size:13px;color:#6ee7b7;font-weight:600;letter-spacing:2px;margin-bottom:24px;">BUSINESS MODEL DESIGN</div>
    <h2 style="font-size:clamp(24px,4vw,36px);font-weight:800;color:#fff;margin:0 0 24px;">비즈니스 모델 설계 5단계</h2>
    <div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center;">
      <div style="padding:16px 20px;background:rgba(110,231,183,.15);border:1px solid rgba(110,231,183,.3);border-radius:12px;"><span style="color:#6ee7b7;font-weight:700;">1</span> <span style="color:rgba(255,255,255,.8);">수익 모델 선택</span></div>
      <div style="padding:16px 20px;background:rgba(110,231,183,.15);border:1px solid rgba(110,231,183,.3);border-radius:12px;"><span style="color:#6ee7b7;font-weight:700;">2</span> <span style="color:rgba(255,255,255,.8);">가치 제안</span></div>
      <div style="padding:16px 20px;background:rgba(110,231,183,.15);border:1px solid rgba(110,231,183,.3);border-radius:12px;"><span style="color:#6ee7b7;font-weight:700;">3</span> <span style="color:rgba(255,255,255,.8);">가격 전략</span></div>
      <div style="padding:16px 20px;background:rgba(110,231,183,.15);border:1px solid rgba(110,231,183,.3);border-radius:12px;"><span style="color:#6ee7b7;font-weight:700;">4</span> <span style="color:rgba(255,255,255,.8);">검증·최적화</span></div>
      <div style="padding:16px 20px;background:rgba(110,231,183,.15);border:1px solid rgba(110,231,183,.3);border-radius:12px;"><span style="color:#6ee7b7;font-weight:700;">5</span> <span style="color:rgba(255,255,255,.8);">스케일업</span></div>
    </div>
  </section>

  <section style="${sec("background:#fff;")}">
    ${label("TABLE OF CONTENTS")}
    ${bigTitle("무엇을 알게 되나요?")}
    ${tocItem("01", "비즈니스 모델이란: 돈을 버는 구조의 설계도", true, "#047857")}
    ${tocItem("02", "7가지 수익 모델 비교: 구독·프리미엄·SaaS·마켓플레이스", true, "#047857")}
    ${tocItem("03", "가치 제안 캔버스: 고객이 지갑을 여는 진짜 이유", true, "#047857")}
    ${tocItem("04", "가격 전략의 과학: 최적 가격 찾는 5가지 방법", true, "#047857")}
    ${tocItem("05", "린 운영과 비용 구조: 수익성 극대화 비용 관리", false, "#047857")}
    ${tocItem("06", "MVP에서 스케일업까지: 검증 후 확장 전략", false, "#047857")}
    ${tocItem("07", "피벗의 기술: 방향 전환으로 살아남은 기업들", false, "#047857")}
    ${tocItem("08", "핵심 지표 대시보드: CAC·LTV·MRR 사업 건강 체크", true, "#047857")}
    ${tocItem("09", "미래 비즈니스 모델: AI·구독·플랫폼 시대의 전략", false, "#047857")}
    ${tocItem("10", "90일 비즈니스 모델 설계 로드맵", true, "#047857")}
    ${spacer(16)}
    <div style="font-size:13px;color:#9ca3af;">+ 부록: 비즈니스 모델 캔버스 / 가치제안 캔버스 / 가격전략 워크시트 / KPI 대시보드 / 90일 플래너</div>
  </section>

  <section style="${sec("background:#f9fafb;")}">
    ${bigTitle("이런 분께 추천합니다")}
    ${checkList(["사업을 시작하는데 수익 구조가 불명확한 분", "매출은 있지만 이익이 안 남는 분", "구독 모델·SaaS로 전환을 고려하는 분", "투자 유치를 위해 비즈니스 모델을 정리해야 하는 분"], "✅", "#ecfdf5")}
    ${spacer(16)}
    ${checkList(["대기업 전략 기획 담당자(다른 스케일)", "이미 PMF를 달성한 시리즈B+ 스타트업"], "🚫", "#fef2f2")}
    ${spacer(40)}
    ${bigTitle("자주 묻는 질문")}
    ${faqItem("아직 사업 초기인데 비즈니스 모델이 필요한가요?", "초기일수록 중요합니다. 수익 구조 없이 시작하면 매출이 나도 이익이 남지 않습니다.")}
    ${faqItem("어떤 산업에 적용할 수 있나요?", "온라인 비즈니스, 1인 사업, 스타트업, 소규모 서비스업 모두에 적용 가능합니다.")}
    ${faqItem("이 가이드는 어떤 형식인가요?", "웹에서 읽는 디지털 가이드입니다. 결제 후 1개월간 열람 가능하며, 계속 업데이트됩니다.")}
  </section>

  <section style="${sec("background:#fff;")}">
    ${bigTitle("이 가이드의 가치")}
    ${priceAnchor([
      { what: "경영 컨설팅 1회", price: "500,000원~", note: "1시간" },
      { what: "비즈니스 모델 온라인 강의", price: "250,000원~", note: "일방적 강의" },
      { what: "경영 전략 서적", price: "22,000원~", note: "업데이트 없음" },
    ], "1,000원", "10챕터 + 캔버스 5종 + 90일 로드맵 + 업데이트", "#047857")}
    ${proofBanner(["📊 7가지 수익 모델 비교", "💰 가격 전략 워크시트", "📅 90일 설계 로드맵", "🔄 계속 업데이트"], "#ecfdf5", "#047857")}
  </section>

  <section style="${sec("background:#f9fafb;")}">
    ${crossSell("business-model", ALL_BOOKS_FOR_CROSSSELL)}
  </section>

  ${ctaBlock("📊", "아이디어가 아니라 모델이 답입니다.", "수익 구조를 설계하면 사업이 달라집니다.", "90일 비즈니스 모델 설계 시스템.", "#047857")}
</div>`;
}

/* ═══════════════════════════════════════════
   21. 만져볼 수 없는 상품을 완판시키는 설득 시스템
   ═══════════════════════════════════════════ */

export function buildSellingInvisible(): string {
  return `<!-- 💎 만져볼 수 없는 상품을 완판시키는 설득 시스템 — 아임웹 상세페이지 -->
<div class="dp-wrap" style="max-width:860px;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
${mobileStyles}
  <section style="${sec("background:linear-gradient(160deg,#f5f3ff,#ede9fe,#ddd6fe);")}">
    ${label("LIVING GUIDE · 살아있는 정보책")}
    <div style="font-size:64px;margin-bottom:16px;">💎</div>
    <h2 style="margin:0 0 16px;font-size:clamp(28px,5vw,44px);font-weight:800;line-height:1.3;color:#3b0764;">좋은 상품인데 왜 안 팔릴까?<br>보이지 않기 때문입니다.</h2>
    <p style="font-size:18px;color:#7c3aed;font-weight:600;margin:0 0 8px;">무형의 가치를 유형의 매출로 바꾸는 설득 시스템.</p>
    ${subtitle("디지털 상품·온라인 강의·컨설팅·서비스 — 만져볼 수 없는 상품의 판매 공식")}
    ${statGrid([
      { num: "5", label: "가지 신뢰 설계 장치", color: "#7c3aed" },
      { num: "10", label: "챕터 + 실행 키트", color: "#7c3aed" },
      { num: "30일", label: "세일즈 개선 로드맵", color: "#7c3aed" },
    ])}
    ${priceBadge("3,900원", "1,000원", "출시 특가")}
    ${urgencyBanner()}
  </section>

  <section style="${sec("background:#fff;")}">
    ${bigTitle("이런 경험, 있으시죠?")}
    ${beforeAfter(
      ["좋은 상품인데 설명이 안 됨", "가격 얘기하면 '비싸요' 반응", "무료 샘플만 받고 구매는 안 함"],
      ["가치가 숫자로 보임", "'이 가격이면 싸네요' 반응", "판매 페이지 하나로 자동 전환"],
      "지금", "설득 시스템 적용 후",
      "#fef2f2", "#f0fdf4"
    )}
    <p style="font-size:15px;color:#6b7280;margin-top:16px;"><strong style="color:#7c3aed;">무형 상품 판매의 80%는 '보여주는 기술'로 결정됩니다.</strong></p>
  </section>

  <section style="${sec("background:#3b0764;color:#fff;")}">
    <div style="font-size:13px;color:#c4b5fd;font-weight:600;letter-spacing:2px;margin-bottom:24px;">THE SELLING SYSTEM</div>
    <h2 style="font-size:clamp(24px,4vw,36px);font-weight:800;color:#fff;margin:0 0 24px;">무형 상품 판매 5단계</h2>
    <div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center;">
      <div style="padding:16px 20px;background:rgba(196,181,253,.15);border:1px solid rgba(196,181,253,.3);border-radius:12px;"><span style="color:#c4b5fd;font-weight:700;">1</span> <span style="color:rgba(255,255,255,.8);">가치 번역</span></div>
      <div style="padding:16px 20px;background:rgba(196,181,253,.15);border:1px solid rgba(196,181,253,.3);border-radius:12px;"><span style="color:#c4b5fd;font-weight:700;">2</span> <span style="color:rgba(255,255,255,.8);">신뢰 설계</span></div>
      <div style="padding:16px 20px;background:rgba(196,181,253,.15);border:1px solid rgba(196,181,253,.3);border-radius:12px;"><span style="color:#c4b5fd;font-weight:700;">3</span> <span style="color:rgba(255,255,255,.8);">가격 프레이밍</span></div>
      <div style="padding:16px 20px;background:rgba(196,181,253,.15);border:1px solid rgba(196,181,253,.3);border-radius:12px;"><span style="color:#c4b5fd;font-weight:700;">4</span> <span style="color:rgba(255,255,255,.8);">전환 설계</span></div>
      <div style="padding:16px 20px;background:rgba(196,181,253,.15);border:1px solid rgba(196,181,253,.3);border-radius:12px;"><span style="color:#c4b5fd;font-weight:700;">5</span> <span style="color:rgba(255,255,255,.8);">평생 고객</span></div>
    </div>
  </section>

  <section style="${sec("background:#fff;")}">
    ${label("TABLE OF CONTENTS")}
    ${bigTitle("무엇을 알게 되나요?")}
    ${tocItem("01", "무형 상품이 안 팔리는 진짜 이유: 보이지 않는 3가지 벽", true, "#7c3aed")}
    ${tocItem("02", "가치를 '숫자'로 번역하는 기술: 추상→구체 5가지 공식", true, "#7c3aed")}
    ${tocItem("03", "신뢰를 설계하는 법: 불안→확신 5가지 장치", true, "#7c3aed")}
    ${tocItem("04", "가격 저항을 녹이는 프레이밍: '비싸요' 극복 4가지", true, "#7c3aed")}
    ${tocItem("05", "판매 페이지의 황금 공식: Pain→공감→해결→증거→CTA", false, "#7c3aed")}
    ${tocItem("06", "지금 사게 만드는 긴급성의 심리학", false, "#7c3aed")}
    ${tocItem("07", "고객이 찾아오는 콘텐츠 세일즈: 구매 여정 4단계", false, "#7c3aed")}
    ${tocItem("08", "경험을 무기로: Before-During-After 스토리텔링", false, "#7c3aed")}
    ${tocItem("09", "맥락 세일즈: 상황·타이밍·메시지 일치 기술", false, "#7c3aed")}
    ${tocItem("10", "한 번 산 고객을 평생 고객으로: LTV 극대화 전략", true, "#7c3aed")}
    ${spacer(16)}
    <div style="font-size:13px;color:#9ca3af;">+ 부록: 판매 페이지 체크리스트 / 가격 프레이밍 워크시트 / 신뢰 장치 점검표 / CTA 템플릿 10개 / 30일 로드맵</div>
  </section>

  <section style="${sec("background:#f9fafb;")}">
    ${bigTitle("이런 분께 추천합니다")}
    ${checkList(["디지털 상품·전자책·온라인 강의를 판매하는 분", "컨설팅·코칭·서비스를 파는 1인 사업자", "크몽·클래스101·아임웹에서 판매 중인 분", "좋은 상품인데 판매 페이지 전환율이 낮은 분"], "✅", "#f5f3ff")}
    ${spacer(16)}
    ${checkList(["유형 상품(의류·식품 등) 판매자", "이미 전환율 10% 이상인 분"], "🚫", "#fef2f2")}
    ${spacer(40)}
    ${bigTitle("자주 묻는 질문")}
    ${faqItem("어떤 무형 상품에 적용되나요?", "전자책, 온라인 강의, 컨설팅, 코칭, SaaS, 템플릿, 디자인 서비스 등 만져볼 수 없는 모든 상품에 적용됩니다.")}
    ${faqItem("판매 경험이 없어도 되나요?", "네. 판매 페이지 작성 공식부터 CTA 템플릿까지 바로 쓸 수 있는 도구가 포함되어 있습니다.")}
    ${faqItem("이 가이드는 어떤 형식인가요?", "웹에서 읽는 디지털 가이드입니다. 결제 후 1개월간 열람 가능하며, 계속 업데이트됩니다.")}
  </section>

  <section style="${sec("background:#fff;")}">
    ${bigTitle("이 가이드의 가치")}
    ${priceAnchor([
      { what: "세일즈 카피라이팅 강의", price: "300,000원~", note: "일방적 강의" },
      { what: "판매 페이지 외주 제작", price: "500,000원~", note: "1회성" },
      { what: "마케팅 컨설팅 1회", price: "200,000원~", note: "1시간" },
    ], "1,000원", "10챕터 + CTA 템플릿 10개 + 30일 로드맵 + 업데이트", "#7c3aed")}
    ${proofBanner(["💎 판매 페이지 황금 공식", "🛡️ 신뢰 장치 5가지", "📅 30일 개선 로드맵", "🔄 계속 업데이트"], "#f5f3ff", "#7c3aed")}
  </section>

  <section style="${sec("background:#f9fafb;")}">
    ${crossSell("selling-invisible", ALL_BOOKS_FOR_CROSSSELL)}
  </section>

  ${ctaBlock("💎", "좋은 상품이 안 팔리는 건", "보여주는 기술이 없기 때문입니다.", "무형 상품 판매 설득 시스템.", "#7c3aed")}
</div>`;
}

/* ═══════════════════════════════════════════
   22. 당뇨 완전 가이드
   ═══════════════════════════════════════════ */

export function buildDiabetesGuide(): string {
  return `<!-- 🩸 약사가 알려주는 당뇨에 대한 모든 것 — 아임웹 상세페이지 -->
<div class="dp-wrap" style="max-width:860px;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
${mobileStyles}

  <!-- Hero -->
  <section style="${sec("background:linear-gradient(160deg,#fff1f2,#ffe4e6,#fecdd3);")}">
    ${label("LIVING GUIDE · 살아있는 정보책")}
    <div style="font-size:64px;margin-bottom:16px;">🩸</div>
    <h2 style="margin:0 0 16px;font-size:clamp(28px,5vw,44px);font-weight:800;line-height:1.3;color:#881337;letter-spacing:-0.5px;">당뇨 진단을 받고<br>뭘 해야 할지 모르겠다면,<br>여기서 시작하세요.</h2>
    ${subtitle("진단부터 약물·식단·생활습관까지 — 당뇨인이 알아야 할 완전 가이드")}
    ${statGrid([
      { num: "10", label: "챕터 완전 구성", color: "#e11d48" },
      { num: "Reddit", label: "실제 당뇨인 경험 분석", color: "#e11d48" },
      { num: "90일", label: "A1C 개선 로드맵", color: "#e11d48" },
    ])}
    ${priceBadge("3,900원", "1,000원", "출시 특가")}
    ${urgencyBanner()}
  </section>

  <!-- 공감: 진단 직후의 혼란 -->
  <section style="${sec("background:#fff7f7;")}">
    ${bigTitle("진단 직후, 이런 감정이었나요?")}
    ${subtitle("당뇨 커뮤니티 실제 목소리를 담았습니다")}
    ${redditQuote("의사가 '당뇨입니다'라고 했을 때 머리가 하얘졌어요. 뭘 먹어야 하는지, 약은 언제 먹는지, 운동은 어떻게 해야 하는지 아무것도 몰랐어요.", "diabetes")}
    ${redditQuote("유튜브를 뒤지고 블로그를 찾아봤는데 정보가 너무 많고 서로 다른 말을 해서 뭘 믿어야 할지 모르겠어요. 약사한테 물어보고 싶었어요.", "diabetes_t2")}
    ${redditQuote("A1C가 9.2였는데 90일 후에 6.8로 떨어졌어요. 극단적인 식단이 아니었어요. 뭘 바꿔야 하는지 알았을 뿐이에요.", "diabetes")}
  </section>

  <!-- Before → After -->
  <section style="${sec("background:#f9fafb;")}">
    ${bigTitle("진단 직후와 90일 후,", "이렇게 달라집니다")}
    ${beforeAfter(
      [
        "진단 후 공포 — 평생 합병증이 올까봐",
        "먹고 싶은 것도 못 먹는다는 절망",
        "약이 점점 늘어날 것 같은 두려움",
        "혈당 숫자에 매일 울고 웃고",
      ],
      [
        "A1C 정상 범위 — 90일 로드맵으로",
        "혈당을 올리지 않는 식사 전략 완성",
        "약물의 원리를 알고 의사와 대화 가능",
        "혈당 변동 패턴을 읽고 주도적으로 관리",
      ],
      "진단 직후 (지금)",
      "90일 후",
      "#fef2f2",
      "#f0fdf4"
    )}
  </section>

  <!-- 목차 -->
  <section style="${sec("background:#fff;")}">
    ${label("TABLE OF CONTENTS")}
    ${bigTitle("무엇을 알게 되나요?")}
    ${subtitle("각 챕터는 독립적으로 읽을 수 있습니다")}
    ${tocItem("01", "당뇨란 무엇인가 — 1형·2형·전당뇨의 차이와 진단 기준", false, "#e11d48")}
    ${tocItem("02", "혈당 지표 완전 정복 — A1C·공복혈당·식후혈당 읽는 법", true, "#e11d48")}
    ${tocItem("03", "당뇨약 완전 가이드 — 메트포르민부터 인슐린까지 원리와 부작용", true, "#e11d48")}
    ${tocItem("04", "식단의 과학 — 혈당 스파이크를 막는 실전 식사 전략", true, "#e11d48")}
    ${tocItem("05", "혈당을 낮추는 운동 — 유산소·근력 운동 타이밍과 방법", false, "#e11d48")}
    ${tocItem("06", "합병증 예방 — 눈·신장·발·신경 손상 조기 발견 체크리스트", true, "#e11d48")}
    ${tocItem("07", "스트레스·수면과 혈당 — 생활습관이 A1C를 바꾼다", false, "#e11d48")}
    ${tocItem("08", "혈당 측정기 & CGM — 데이터로 관리하는 방법", false, "#e11d48")}
    ${tocItem("09", "외식·술·여행 — 일상 속 혈당 관리 실전 매뉴얼", false, "#e11d48")}
    ${tocItem("10", "90일 A1C 개선 로드맵 — 지금 당장 시작하는 단계별 계획", true, "#e11d48")}
    ${spacer(16)}
    <div style="font-size:13px;color:#9ca3af;">+ 부록: 혈당일지 템플릿 / 당뇨약 부작용 대응법 / 합병증 검사 일정표 / 저혈당 응급 프로토콜 / 가족에게 알려주는 당뇨 Q&A</div>
  </section>

  <!-- 미리보기 -->
  ${fullPreview(
    "3",
    "당뇨약 완전 가이드 — 메트포르민부터 인슐린까지",
    [
      "메트포르민: 왜 가장 먼저 처방받는가",
      "SGLT-2 억제제·GLP-1 작용제의 혁신",
      "인슐린이 필요한 시점과 종류",
      "약 부작용 — 언제 의사에게 말해야 하는가",
      "약을 줄이는 것이 가능한가",
    ],
    `<p style="margin:0 0 16px;">당뇨 진단 후 가장 흔히 처방받는 약은 <strong>메트포르민</strong>입니다. 그런데 왜 하필 이 약일까요?</p>
      <p style="margin:0 0 16px;">메트포르민은 간에서 포도당이 지나치게 많이 만들어지는 것을 억제합니다. 혈당을 '직접' 내리는 약이 아니라, 간이 혈당을 올리는 행위를 줄이는 약입니다. 덕분에 저혈당 위험이 낮고, 50년 이상 안전성이 검증되었습니다.</p>
      <p style="margin:0 0 16px;padding:16px;background:#fff1f2;border-radius:10px;font-weight:600;color:#e11d48;">💊 처음 메트포르민을 먹으면 속이 불편할 수 있습니다. 식사 중에 먹거나, 서방형(XR) 제형으로 바꾸면 대부분 해결됩니다. 4주가 지나도 불편하다면 반드시 약사나 의사와 상담하세요.</p>
      <p style="margin:0;">최근에는 SGLT-2 억제제(포시가, 자디앙)와 GLP-1 작용제(오젬픽, 트룰리시티)가 심장·신장 보호 효과까지 있다는 연구가 나오면서 처방 패턴이 빠르게 바뀌고 있습니다. 약이 바뀌었다고 당황하지 마세요. <strong>약의 원리를 알면 의사와 더 잘 대화할 수 있습니다.</strong></p>`,
    "#e11d48",
    "linear-gradient(160deg,#fff1f2,#fff7f7)"
  )}

  <!-- 추천 대상 -->
  <section style="${sec("background:#fff;")}">
    ${bigTitle("이런 분이라면,", "이 가이드가 답입니다")}
    ${checkList(
      [
        "최근 당뇨 진단을 받고 뭘 해야 할지 모르는 분",
        "당뇨인 가족을 곁에서 돕고 싶은 보호자",
        "당뇨약 부작용이 걱정되어 약사에게 물어보고 싶은 분",
        "A1C를 낮추고 합병증 없이 오래 살고 싶은 분",
      ],
      "✅",
      "#fff1f2"
    )}
    ${spacer(16)}
    ${checkList(
      [
        "전문적인 의료 진단을 대체하고 싶은 분 (이 책은 의료 행위가 아닙니다)",
        "읽기만 하고 생활습관은 바꾸지 않을 분",
      ],
      "🚫",
      "#fef2f2"
    )}
  </section>

  <!-- FAQ -->
  <section style="${sec("background:#f9fafb;")}">
    ${bigTitle("자주 묻는 질문")}
    ${faqItem("당뇨약을 먹으면 평생 먹어야 하나요?", "2형 당뇨는 생활습관 개선으로 약을 줄이거나 중단한 사례가 있습니다. 다만 무단으로 끊는 것은 위험합니다. 이 가이드에서 올바른 접근 방법을 설명합니다.")}
    ${faqItem("A1C 목표치는 얼마인가요?", "일반적으로 7.0% 미만이 목표이지만, 나이·합병증 여부에 따라 개인화됩니다. 90일 로드맵에서 단계별 목표 설정법을 안내합니다.")}
    ${faqItem("이 가이드는 어떤 형식인가요?", "웹에서 읽는 디지털 가이드입니다. 결제 후 1개월간 열람 가능하며, 새로운 연구·가이드라인이 나오면 계속 업데이트됩니다.")}
  </section>

  <!-- 가격 앵커링 -->
  <section style="${sec("background:#fff;")}">
    ${bigTitle("이 가이드의 가치")}
    ${priceAnchor(
      [
        { what: "당뇨 교육 프로그램 (병원)", price: "100,000원~", note: "1회 수업" },
        { what: "당뇨 전문 서적", price: "18,000원~", note: "업데이트 없음" },
        { what: "유튜브 검색 3시간", price: "무료", note: "정보 파편화·신뢰도 불명" },
      ],
      "1,000원",
      "10챕터 + 부록 5개 · 계속 업데이트 · 약사 검증",
      "#e11d48"
    )}
    ${proofBanner(
      ["🩸 약사가 직접 정리", "📊 Reddit 실제 경험", "🔄 계속 업데이트", "📱 모바일 최적화"],
      "#fff1f2",
      "#e11d48"
    )}
  </section>

  <!-- 크로스셀 -->
  <section style="${sec("background:#f9fafb;")}">
    ${crossSell("diabetes-guide", ALL_BOOKS_FOR_CROSSSELL)}
  </section>

  <!-- CTA -->
  ${ctaBlock("🩸", "당뇨 관리 시스템을", "지금 시작하세요.", "진단부터 90일 로드맵까지 — 약사가 정리한 완전 가이드", "#e11d48")}

</div>`;
}

/* ═══════════════════════════════════════════
   23. 오디세이아 인생 항해술
   ═══════════════════════════════════════════ */

export function buildOdysseyLife(): string {
  return `<!-- ⚓ 오디세이아 인생 항해술 — 아임웹 상세페이지 -->
<div class="dp-wrap" style="max-width:860px;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
${mobileStyles}

  <!-- Hero -->
  <section style="${sec("background:linear-gradient(160deg,#1e3a5f,#0f172a);")}">
    ${label("LIVING GUIDE · 살아있는 정보책")}
    <div style="font-size:64px;margin-bottom:16px;">⚓</div>
    <h2 style="margin:0 0 16px;font-size:clamp(28px,5vw,44px);font-weight:800;line-height:1.3;color:#fff;letter-spacing:-0.5px;">3,000년 전 영웅의 항해가<br>당신의 인생 지도입니다.</h2>
    ${subtitle("오디세우스의 10가지 시련 — 현대인의 10가지 인생 과제로 풀어낸 지혜 가이드")}
    ${statGrid([
      { num: "10", label: "에피소드 · 현대적 적용", color: "#60a5fa" },
      { num: "3,000", label: "년의 지혜, 오늘의 언어로", color: "#60a5fa" },
      { num: "30일", label: "인생 항해 플래너 수록", color: "#60a5fa" },
    ])}
    ${priceBadge("3,900원", "1,000원", "출시 특가")}
    ${urgencyBanner()}
  </section>

  <!-- 공감 -->
  <section style="${sec("background:#f8fafc;")}">
    ${bigTitle("인생의 방향을 잃고", "표류하고 있지는 않으신가요?")}
    ${subtitle("3,000년 전 오디세우스도 똑같은 고민을 했습니다")}
    ${redditQuote("열심히 살고 있는데 뭔가 방향을 잃은 것 같아요. 목적지가 없이 그냥 바쁜 느낌. 어디로 가야 할지 모르겠어요.", "selfimprovement")}
    ${redditQuote("리더십 책을 많이 읽었는데 다 뜬구름 잡는 이야기 같아요. 실제 압박 상황에서 어떻게 결단해야 하는지 배우고 싶어요.", "Leadership")}
    ${redditQuote("고전이 좋다고 하는데 막상 펼치면 너무 어렵고 지루해서 포기해요. 현실에 어떻게 적용하는지 누가 쉽게 설명해줬으면.", "books")}
  </section>

  <!-- Before → After -->
  <section style="${sec("background:#fff;")}">
    ${bigTitle("읽기 전과 후,", "이렇게 달라집니다")}
    ${beforeAfter(
      [
        "목적 없이 바쁜 일상 — 표류 상태",
        "유혹 앞에서 매번 무너지는 의지",
        "리더십 이론은 알지만 현장에서 막막",
        "고전은 어렵다는 편견으로 포기",
      ],
      [
        "귀환할 목적지를 설정 — 나만의 이타카",
        "세이렌의 유혹을 다루는 실전 전략",
        "오디세우스의 결단에서 배우는 리더십",
        "10개 에피소드로 익히는 고전의 실용 지혜",
      ],
      "지금 (표류 중)",
      "이 가이드 이후",
      "#eff6ff",
      "#f0f9ff"
    )}
  </section>

  <!-- 목차 -->
  <section style="${sec("background:#f8fafc;")}">
    ${label("TABLE OF CONTENTS")}
    ${bigTitle("무엇을 알게 되나요?")}
    ${subtitle("10개 에피소드는 각각 독립적으로 읽을 수 있습니다")}
    ${tocItem("01", "이타카를 기억하라 — 목적 없이 열심히 사는 함정", true, "#1e3a5f")}
    ${tocItem("02", "키클롭스의 동굴 — 분노를 지연시키는 리더의 기술", false, "#1e3a5f")}
    ${tocItem("03", "세이렌의 유혹 — 내가 약하다는 걸 아는 용기", true, "#1e3a5f")}
    ${tocItem("04", "카립디스와 스킬라 — 두 악 중 하나를 고르는 결단", true, "#1e3a5f")}
    ${tocItem("05", "키르케의 섬 — 편안함이 나를 잠재우는 시간", false, "#1e3a5f")}
    ${tocItem("06", "하데스로의 하강 — 두려움을 통과해야 지혜가 온다", true, "#1e3a5f")}
    ${tocItem("07", "포세이돈의 분노 — 내가 통제할 수 없는 것들과 살기", false, "#1e3a5f")}
    ${tocItem("08", "페넬로페의 인내 — 기다림을 전략으로 만드는 법", false, "#1e3a5f")}
    ${tocItem("09", "텔레마코스의 성장 — 리더는 어떻게 다음 세대를 키우나", false, "#1e3a5f")}
    ${tocItem("10", "귀환의 완성 — 집에 돌아온다는 것의 진짜 의미", true, "#1e3a5f")}
    ${spacer(16)}
    <div style="font-size:13px;color:#9ca3af;">+ 보너스: 30일 인생 항해 플래너 / 나만의 이타카 워크시트 / 유혹 방어 전략 5가지 / 리더십 결단 프레임워크 / 오디세이아 핵심 구절 50선</div>
  </section>

  <!-- 미리보기 -->
  ${fullPreview(
    "3",
    "세이렌의 유혹 — 내가 약하다는 걸 아는 용기",
    [
      "세이렌이란 무엇인가 — 현대적 재해석",
      "오디세우스는 왜 귀를 막지 않았나",
      "자기인식 + 사전 설계 전략",
      "나의 세이렌을 찾는 법",
      "실천 과제: 유혹 방어 계획",
    ],
    `<p style="margin:0 0 16px;">세이렌의 노래를 들으면 선원들은 바다로 뛰어들어 죽었습니다. 오디세우스는 이 사실을 알고 있었습니다. 그래서 어떻게 했을까요?</p>
      <p style="margin:0 0 16px;">그는 귀를 막지 않았습니다. 오히려 <strong>자신을 돛대에 묶어달라고 명령했습니다.</strong> 세이렌의 노래를 직접 들으면서도, 바다로 뛰어들 수 없게 미리 구조를 만들었습니다.</p>
      <p style="margin:0 0 16px;padding:16px;background:#eff6ff;border-radius:10px;font-weight:600;color:#1e3a5f;">💡 "나는 유혹에 넘어가지 않을 것"이라는 의지보다, "유혹에 넘어갈 수 없는 구조"가 더 강합니다.</p>
      <p style="margin:0;">현대의 세이렌은 스마트폰, SNS, 즉각적 보상입니다. 오디세우스의 전략은 오늘날 행동경제학의 '사전 약속(precommitment)' 개념과 정확히 일치합니다. <strong>자신이 약하다는 것을 인정하는 것이 가장 강한 전략입니다.</strong></p>`,
    "#1e3a5f",
    "linear-gradient(160deg,#eff6ff,#f8fafc)"
  )}

  <!-- 추천 대상 -->
  <section style="${sec("background:#fff;")}">
    ${bigTitle("이런 분이라면,", "이 가이드가 답입니다")}
    ${checkList(
      [
        "인생의 방향을 잃고 표류 중인 분",
        "리더십을 실전에서 배우고 싶은 분",
        "고전을 실용적으로 읽고 싶은 분",
        "유혹과 결단의 순간에 나침반이 필요한 분",
      ],
      "✅",
      "#eff6ff"
    )}
    ${spacer(16)}
    ${checkList(
      [
        "고전 문학 학문적 분석을 원하는 분 (이 책은 실용서입니다)",
        "읽기만 하고 실천하지 않을 분",
      ],
      "🚫",
      "#fef2f2"
    )}
  </section>

  <!-- FAQ -->
  <section style="${sec("background:#f8fafc;")}">
    ${bigTitle("자주 묻는 질문")}
    ${faqItem("오디세이아를 미리 읽어야 하나요?", "아닙니다. 각 에피소드의 내용을 쉽게 요약해드리고, 바로 현대적 적용으로 넘어갑니다. 고전 지식이 없어도 됩니다.")}
    ${faqItem("어떤 순서로 읽는 게 좋나요?", "처음부터 순서대로 읽으시면 오디세우스의 귀환 서사를 따라가며 메시지가 누적됩니다. 하지만 관심 있는 챕터부터 읽어도 됩니다.")}
    ${faqItem("이 가이드는 어떤 형식인가요?", "웹에서 읽는 디지털 가이드입니다. 결제 후 1개월간 열람 가능하며, 내용은 계속 업데이트됩니다.")}
  </section>

  <!-- 가격 앵커링 -->
  <section style="${sec("background:#fff;")}">
    ${bigTitle("이 가이드의 가치")}
    ${priceAnchor(
      [
        { what: "인문학 강의 1회", price: "50,000원~", note: "일방적 강의" },
        { what: "고전 해설서", price: "16,000원~", note: "업데이트 없음" },
        { what: "리더십 코칭 1시간", price: "100,000원~", note: "1회성" },
      ],
      "1,000원",
      "10챕터 + 보너스 5개 · 30일 플래너 · 계속 업데이트",
      "#1e3a5f"
    )}
    ${proofBanner(
      ["⚓ 3,000년 검증된 지혜", "📖 실용적 현대 적용", "🔄 계속 업데이트", "📱 모바일 최적화"],
      "#eff6ff",
      "#1e3a5f"
    )}
  </section>

  <!-- 크로스셀 -->
  <section style="${sec("background:#f8fafc;")}">
    ${crossSell("odyssey-life", ALL_BOOKS_FOR_CROSSSELL)}
  </section>

  <!-- CTA -->
  ${ctaBlock("⚓", "당신의 이타카를 향한", "항해를 시작하세요.", "3,000년의 지혜로 오늘의 인생을 항해하는 가이드", "#1e3a5f")}

</div>`;
}

/* ═══════════════════════════════════════════
   24. 혈압 완전 가이드
   ═══════════════════════════════════════════ */

export function buildHypertensionGuide(): string {
  return `<!-- 🫀 약사가 알려주는 혈압에 대한 모든 것 — 아임웹 상세페이지 -->
<div class="dp-wrap" style="max-width:860px;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
${mobileStyles}

  <!-- Hero -->
  <section style="${sec("background:linear-gradient(160deg,#fef2f2,#fecaca,#fca5a5);")}">
    ${label("LIVING GUIDE · 살아있는 정보책")}
    <div style="font-size:64px;margin-bottom:16px;">🫀</div>
    <h2 style="margin:0 0 16px;font-size:clamp(28px,5vw,44px);font-weight:800;line-height:1.3;color:#7f1d1d;letter-spacing:-0.5px;">혈압약 한번 먹으면<br>평생 먹어야 한다면서요?<br>약사가 답해드립니다.</h2>
    ${subtitle("5대 혈압약 완전 비교 · DASH 식단 · 합병증 예방 · 90일 혈압 관리 로드맵")}
    ${statGrid([
      { num: "5대 약물", label: "혈압약 계열 완전 비교", color: "#dc2626" },
      { num: "DASH", label: "혈압 낮추는 식단 전략", color: "#dc2626" },
      { num: "90일", label: "혈압 관리 로드맵", color: "#dc2626" },
    ])}
    ${priceBadge("3,900원", "1,000원", "출시 특가")}
    ${urgencyBanner()}
  </section>

  <!-- 공감: 혈압 진단 후 혼란 -->
  <section style="${sec("background:#fff5f5;")}">
    ${bigTitle("혈압약 처방받고,", "이런 생각 하셨죠?")}
    ${subtitle("고혈압 환자 1,200만 명의 공통된 걱정입니다")}
    ${redditQuote("의사가 혈압약을 처방했는데 한번 시작하면 평생 먹어야 한다고 해서 너무 무서웠어요. 진짜 끊을 수 없는 건가요?", "hypertension")}
    ${redditQuote("인터넷에서 혈압약 부작용을 검색했다가 겁이 나서 처방받은 약을 먹지 않았어요. 3개월 후 응급실에 갔습니다.", "bloodpressure")}
    ${redditQuote("DASH 식단을 시작하고 나트륨을 줄였더니 3개월 만에 약을 한 알 줄일 수 있었어요. 식단이 이렇게 중요한 줄 몰랐어요.", "hypertension")}
  </section>

  <!-- Before → After -->
  <section style="${sec("background:#f9fafb;")}">
    ${bigTitle("진단 직후와 90일 후,", "이렇게 달라집니다")}
    ${beforeAfter(
      [
        "혈압약 부작용이 무서워서 약을 안 먹음",
        "짜게 먹으면 안 된다는데 뭘 먹어야 할지 모름",
        "혈압을 집에서 재는데 매번 달라 혼란스러움",
        "합병증이 두렵지만 뭘 해야 할지 모름",
      ],
      [
        "5대 약물 원리를 알고 의사와 자신 있게 대화",
        "DASH 식단으로 나트륨을 줄이는 구체적 방법 실천",
        "올바른 측정법으로 정확한 가정혈압 기록 습관화",
        "합병증 예방 체크리스트로 정기 검진 실천 중",
      ],
      "진단 직후 (지금)",
      "90일 후",
      "#fef2f2",
      "#f0fdf4"
    )}
  </section>

  <!-- 목차 -->
  <section style="${sec("background:#fff;")}">
    ${label("TABLE OF CONTENTS")}
    ${bigTitle("무엇을 알게 되나요?")}
    ${subtitle("각 챕터는 독립적으로 읽을 수 있습니다")}
    ${tocItem("01", "혈압의 기초 — 수축기·이완기 숫자의 의미와 혈압 분류 기준", false, "#dc2626")}
    ${tocItem("02", "원인과 위험인자 — 본태성·이차성 고혈압, 유전·나이·생활습관 영향", false, "#dc2626")}
    ${tocItem("03", "혈압 측정의 기술 — 팔뚝형 vs 손목형, 정확한 측정법 7단계", true, "#dc2626")}
    ${tocItem("04", "약물 완전 가이드 — ARB·ACE·CCB·이뇨제·베타차단제 5대 계열 비교", true, "#dc2626")}
    ${tocItem("05", "DASH 식단 — 나트륨 줄이기 + 혈압 낮추는 식단 전략", true, "#dc2626")}
    ${tocItem("06", "운동과 혈압 — 유산소·근력 운동 처방과 안전 가이드", false, "#dc2626")}
    ${tocItem("07", "스트레스·수면·체중 — 생활습관이 혈압을 바꾼다", false, "#dc2626")}
    ${tocItem("08", "합병증 — 뇌졸중·심근경색·신부전 예방과 경고 증상", true, "#dc2626")}
    ${tocItem("09", "특수 상황 — 임신·당뇨·고령자·저항성 고혈압 관리", false, "#dc2626")}
    ${tocItem("10", "90일 혈압 관리 로드맵 — 지금 당장 시작하는 단계별 계획", true, "#dc2626")}
    ${spacer(16)}
    <div style="font-size:13px;color:#9ca3af;">+ 부록: 혈압 기록표 / 5대 혈압약 비교 카드 / 나트륨 함량표 / 응급 상황 대처 카드 / DASH 식단 1주 플래너</div>
  </section>

  <!-- 미리보기 -->
  ${fullPreview(
    "4",
    "고혈압 약물 완전 가이드 — 5대 계열 비교",
    [
      "ARB: 한국에서 가장 많이 처방되는 이유",
      "ACE 억제제: 마른기침 부작용의 진실",
      "CCB: 한국인 식습관에 잘 맞는 약",
      "이뇨제·베타차단제의 역할과 주의사항",
      "복합제: 왜 약을 2~3가지 함께 먹는가",
    ],
    `<p style="margin:0 0 16px;">고혈압 약물의 1차 선택지는 <strong>ARB, ACE 억제제, CCB, 이뇨제</strong> — 이 네 가지입니다. 약의 이름은 어렵지만 원리는 단순합니다.</p>
      <p style="margin:0 0 16px;">ARB와 ACE 억제제는 혈관을 수축시키는 안지오텐신의 작용을 차단합니다. CCB는 혈관 근육세포로 칼슘이 들어가는 것을 막아 혈관을 이완시킵니다. 이뇨제는 나트륨과 수분을 배출하여 혈액량을 줄입니다.</p>
      <p style="margin:0 0 16px;padding:16px;background:#fef2f2;border-radius:10px;font-weight:600;color:#dc2626;">💊 혈압약 한 가지로 목표 혈압에 도달하는 환자는 약 30~50%입니다. 나머지는 2~3가지를 병용해야 합니다. 약이 늘어났다고 상태가 나빠진 것이 아닙니다.</p>
      <p style="margin:0;">약의 원리를 알면 부작용이 왜 생기는지, 왜 이 약을 처방받았는지 이해할 수 있습니다. <strong>이해하면 두렵지 않습니다.</strong></p>`,
    "#dc2626",
    "linear-gradient(160deg,#fef2f2,#fff5f5)"
  )}

  <!-- 추천 대상 -->
  <section style="${sec("background:#fff;")}">
    ${bigTitle("이런 분이라면,", "이 가이드가 답입니다")}
    ${checkList(
      [
        "처음 고혈압 진단을 받고 막막한 분",
        "혈압약을 먹고 있지만 내가 먹는 약이 뭔지 모르는 분",
        "부모님이 고혈압인데 곁에서 돕고 싶은 분",
        "약 없이 생활습관으로 혈압을 관리하고 싶은 분",
      ],
      "✅",
      "#fef2f2"
    )}
    ${spacer(16)}
    ${checkList(
      [
        "전문적인 의료 진단을 대체하고 싶은 분 (이 책은 의료 행위가 아닙니다)",
        "읽기만 하고 생활습관은 바꾸지 않을 분",
      ],
      "🚫",
      "#fef2f2"
    )}
  </section>

  <!-- FAQ -->
  <section style="${sec("background:#f9fafb;")}">
    ${bigTitle("자주 묻는 질문")}
    ${faqItem("혈압약은 정말 평생 먹어야 하나요?", "생활습관 개선으로 약을 줄이거나 중단한 사례가 있습니다. 다만 의사와 상의 없이 무단으로 끊는 것은 매우 위험합니다. 이 가이드에서 올바른 접근 방법을 설명합니다.")}
    ${faqItem("혈압 목표치는 얼마인가요?", "일반적으로 130/80 미만이 목표이지만, 나이·합병증 여부에 따라 달라집니다. 90일 로드맵에서 단계별 목표 설정법을 안내합니다.")}
    ${faqItem("이 가이드는 어떤 형식인가요?", "웹에서 읽는 디지털 가이드입니다. 결제 후 1개월간 열람 가능하며, 새로운 연구·가이드라인이 나오면 계속 업데이트됩니다.")}
  </section>

  <!-- 가격 앵커링 -->
  <section style="${sec("background:#fff;")}">
    ${bigTitle("이 가이드의 가치")}
    ${priceAnchor(
      [
        { what: "고혈압 교육 프로그램 (병원)", price: "50,000원~", note: "1회 수업" },
        { what: "고혈압 전문 서적", price: "18,000원~", note: "업데이트 없음" },
        { what: "유튜브 검색 3시간", price: "무료", note: "정보 파편화·신뢰도 불명" },
      ],
      "1,000원",
      "10챕터 + 부록 5개 · 계속 업데이트 · 약사 검증",
      "#dc2626"
    )}
    ${proofBanner(
      ["🫀 약사가 직접 정리", "📊 Reddit 실제 경험", "🔄 계속 업데이트", "📱 모바일 최적화"],
      "#fef2f2",
      "#dc2626"
    )}
  </section>

  <!-- 크로스셀 -->
  <section style="${sec("background:#f9fafb;")}">
    ${crossSell("hypertension-guide", ALL_BOOKS_FOR_CROSSSELL)}
  </section>

  <!-- CTA -->
  ${ctaBlock("🫀", "혈압 관리 시스템을", "지금 시작하세요.", "5대 약물 비교부터 90일 로드맵까지 — 약사가 정리한 완전 가이드", "#dc2626")}

</div>`;
}

export function buildCholesterolGuide(): string {
  return `<!-- 🧬 고지혈증 완전 가이드 — 아임웹 상세페이지 -->
<div class="dp-wrap" style="max-width:860px;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
${mobileStyles}

  <!-- Hero -->
  <section style="${sec("background:linear-gradient(160deg,#fffbeb,#fde68a,#fbbf24);")}">
    ${label("LIVING GUIDE · 살아있는 정보책")}
    <div style="font-size:64px;margin-bottom:16px;">🧬</div>
    <h2 style="margin:0 0 16px;font-size:clamp(28px,5vw,44px);font-weight:800;line-height:1.3;color:#78350f;letter-spacing:-0.5px;">콜레스테롤 약 평생<br>먹어야 하나요?<br>약사가 답해드립니다.</h2>
    ${subtitle("스타틴 6종 완전 비교 · 콜레스테롤 낮추는 식이요법 · 90일 관리 로드맵")}
    ${statGrid([
      { num: "스타틴 비교", label: "6종 스타틴 완전 비교", color: "#d97706" },
      { num: "식이요법", label: "LDL 10~15% 낮추는 식단", color: "#d97706" },
      { num: "90일", label: "콜레스테롤 관리 로드맵", color: "#d97706" },
    ])}
    ${priceBadge("3,900원", "1,000원", "출시 특가")}
    ${urgencyBanner()}
  </section>

  <!-- 공감: 콜레스테롤 진단 후 혼란 -->
  <section style="${sec("background:#fffbeb;")}">
    ${bigTitle("콜레스테롤 약 처방받고,", "이런 생각 하셨죠?")}
    ${subtitle("성인 40% 이상이 이상지질혈증 — 그런데 제대로 아는 사람은 30%뿐입니다")}
    ${redditQuote("콜레스테롤 약을 처방받았는데 간이 망가진다는 글을 봤어요. 무서워서 안 먹고 있습니다.", "cholesterol")}
    ${redditQuote("계란을 먹으면 안 된다는 사람과 괜찮다는 사람이 있어서 뭘 믿어야 할지 모르겠어요.", "nutrition")}
    ${redditQuote("스타틴 먹으면서 식단도 바꿨더니 3개월 만에 LDL이 130에서 85로 떨어졌어요. 진작 시작할 걸.", "cholesterol")}
  </section>

  <!-- Before → After -->
  <section style="${sec("background:#f9fafb;")}">
    ${bigTitle("진단 직후와 90일 후,", "이렇게 달라집니다")}
    ${beforeAfter(
      [
        "스타틴 부작용이 무서워서 약을 안 먹음",
        "LDL, HDL, 중성지방 숫자가 뭔지 모름",
        "계란을 먹어야 하는지 말아야 하는지 혼란",
        "합병증이 두렵지만 뭘 해야 할지 모름",
      ],
      [
        "스타틴 6종의 원리를 알고 의사와 자신 있게 대화",
        "검사 결과지를 직접 읽고 위험 등급을 판단",
        "포화지방이 진짜 범인임을 알고 식단을 구체적으로 개선",
        "합병증 예방 체크리스트로 정기 검진 실천 중",
      ],
      "진단 직후 (지금)",
      "90일 후",
      "#fffbeb",
      "#f0fdf4"
    )}
  </section>

  <!-- 목차 -->
  <section style="${sec("background:#fff;")}">
    ${label("TABLE OF CONTENTS")}
    ${bigTitle("무엇을 알게 되나요?")}
    ${subtitle("각 챕터는 독립적으로 읽을 수 있습니다")}
    ${tocItem("01", "콜레스테롤의 진실 — LDL·HDL·중성지방의 역할과 계란 논쟁의 결론", false, "#d97706")}
    ${tocItem("02", "검사 결과 읽는 법 — 4가지 핵심 수치 해석과 위험 등급별 LDL 목표", true, "#d97706")}
    ${tocItem("03", "스타틴 완전 가이드 — 6종 스타틴 비교, 부작용 팩트 체크, 복용 시간", true, "#d97706")}
    ${tocItem("04", "스타틴 외 약물 — 에제티미브·PCSK9·피브레이트·오메가3 처방약", false, "#d97706")}
    ${tocItem("05", "콜레스테롤 낮추는 식단 — 포화지방 줄이기, 수용성 식이섬유, 한국식 적용", true, "#d97706")}
    ${tocItem("06", "운동과 콜레스테롤 — HDL 올리고 중성지방 낮추는 운동 처방", false, "#d97706")}
    ${tocItem("07", "체중·음주·스트레스 — 내장지방, 금연, 대사증후군과 콜레스테롤", false, "#d97706")}
    ${tocItem("08", "합병증 — 동맥경화·심근경색·뇌졸중의 진행 과정과 예방", true, "#d97706")}
    ${tocItem("09", "특수 상황 — 가족성 고콜레스테롤혈증·당뇨·신장병·임신·고령자", false, "#d97706")}
    ${tocItem("10", "90일 콜레스테롤 관리 로드맵 — 주차별 실행 계획과 재검사 전략", true, "#d97706")}
    ${spacer(16)}
    <div style="font-size:13px;color:#9ca3af;">+ 부록: 지질 검사 기록표 / 스타틴 비교 카드 / 식이섬유 식품표 / 오메가3 식품표 / 포화지방 함량표 / 연간 검사 체크리스트</div>
  </section>

  <!-- 미리보기 -->
  ${fullPreview(
    "3",
    "스타틴 완전 가이드 — 6종 스타틴 비교",
    [
      "스타틴이 왜 가장 중요한 약인가",
      "한국에서 사용되는 주요 스타틴 6종 비교",
      "부작용: 근육통·간수치·당뇨 위험의 진실",
      "그레이프프루트 주의 — 어떤 스타틴이 해당되나",
      "복용 시간: 아침 vs 저녁, 제네릭 vs 오리지널",
    ],
    `<p style="margin:0 0 16px;">스타틴은 간에서 콜레스테롤을 만드는 효소 <strong>HMG-CoA 환원효소</strong>를 억제합니다. 간에서 콜레스테롤 생산이 줄어들면, LDL 수용체가 더 많이 만들어져 혈중 LDL을 잡아당깁니다.</p>
      <p style="margin:0 0 16px;">한국에서 가장 많이 처방되는 스타틴은 <strong>로수바스타틴(크레스토)</strong>과 <strong>아토르바스타틴(리피토)</strong>입니다. 로수바스타틴 5~10mg, 아토르바스타틴 10~20mg이 가장 흔한 처방입니다.</p>
      <p style="margin:0 0 16px;padding:16px;background:#fffbeb;border-radius:10px;font-weight:600;color:#d97706;">💊 부작용 중 근육통을 호소하는 사람의 상당수가 노시보 효과(부작용을 기대하면 실제로 느끼는 현상)라는 연구 결과가 있습니다. 심각한 부작용은 극히 드뭅니다.</p>
      <p style="margin:0;">약의 원리를 알면 부작용이 왜 생기는지 이해할 수 있습니다. <strong>이해하면 두렵지 않습니다.</strong></p>`,
    "#d97706",
    "linear-gradient(160deg,#fffbeb,#fef3c7)"
  )}

  <!-- 추천 대상 -->
  <section style="${sec("background:#fff;")}">
    ${bigTitle("이런 분이라면,", "이 가이드가 답입니다")}
    ${checkList(
      [
        "콜레스테롤이 높다는 진단을 처음 받고 막막한 분",
        "스타틴을 먹고 있지만 내가 먹는 약이 뭔지 모르는 분",
        "부모님이 고지혈증인데 곁에서 돕고 싶은 분",
        "식이요법으로 콜레스테롤을 관리하고 싶은 분",
      ],
      "✅",
      "#fffbeb"
    )}
    ${spacer(16)}
    ${checkList(
      [
        "전문적인 의료 진단을 대체하고 싶은 분 (이 책은 의료 행위가 아닙니다)",
        "읽기만 하고 생활습관은 바꾸지 않을 분",
      ],
      "🚫",
      "#fffbeb"
    )}
  </section>

  <!-- FAQ -->
  <section style="${sec("background:#f9fafb;")}">
    ${bigTitle("자주 묻는 질문")}
    ${faqItem("콜레스테롤 약은 정말 평생 먹어야 하나요?", "생활습관 개선으로 약을 줄이거나 중단한 사례가 있습니다. 다만 의사와 상의 없이 무단으로 끊는 것은 LDL이 반동으로 올라가 매우 위험합니다. 이 가이드에서 올바른 접근 방법을 설명합니다.")}
    ${faqItem("계란을 먹어도 되나요?", "건강한 성인은 하루 1~2개 괜찮습니다. 진짜 범인은 계란이 아니라 포화지방(삼겹살, 버터, 크림)입니다. 1장에서 자세히 설명합니다.")}
    ${faqItem("이 가이드는 어떤 형식인가요?", "웹에서 읽는 디지털 가이드입니다. 결제 후 1개월간 열람 가능하며, 새로운 연구·가이드라인이 나오면 계속 업데이트됩니다.")}
  </section>

  <!-- 가격 앵커링 -->
  <section style="${sec("background:#fff;")}">
    ${bigTitle("이 가이드의 가치")}
    ${priceAnchor(
      [
        { what: "이상지질혈증 교육 프로그램 (병원)", price: "50,000원~", note: "1회 수업" },
        { what: "고지혈증 전문 서적", price: "18,000원~", note: "업데이트 없음" },
        { what: "유튜브 검색 3시간", price: "무료", note: "정보 파편화·신뢰도 불명" },
      ],
      "1,000원",
      "10챕터 + 부록 6개 · 계속 업데이트 · 약사 검증",
      "#d97706"
    )}
    ${proofBanner(
      ["🧬 약사가 직접 정리", "📊 Reddit 실제 경험", "🔄 계속 업데이트", "📱 모바일 최적화"],
      "#fffbeb",
      "#d97706"
    )}
  </section>

  <!-- 크로스셀 -->
  <section style="${sec("background:#f9fafb;")}">
    ${crossSell("cholesterol-guide", ALL_BOOKS_FOR_CROSSSELL)}
  </section>

  <!-- CTA -->
  ${ctaBlock("🧬", "콜레스테롤 관리 시스템을", "지금 시작하세요.", "스타틴 비교부터 90일 로드맵까지 — 약사가 정리한 완전 가이드", "#d97706")}

</div>`;
}

/* ═══════════════════════════════════════════
   26. 상비약 완전 가이드
   ═══════════════════════════════════════════ */

export function buildOtcMedicineGuide(): string {
  return `<!-- 💊 상비약 완전 가이드 — 아임웹 상세페이지 -->
<div class="dp-wrap" style="max-width:860px;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
${mobileStyles}

  <!-- Hero -->
  <section style="${sec("background:linear-gradient(160deg,#ecfdf5,#a7f3d0,#059669);")}">
    ${label("LIVING GUIDE · 살아있는 정보책")}
    <div style="font-size:64px;margin-bottom:16px;">💊</div>
    ${bigTitle("타이레놀 몇 알 먹어야 하나요?", "약사가 답해드립니다.")}
    ${subtitle("해열제·감기약·소화제·상처약·알레르기약·영양제 — 가정 상비약 완전 가이드")}
    ${statGrid([
      { num: "50+", label: "약품 분석", color: "#059669" },
      { num: "한국 브랜드", label: "실제 구입 가능한 약만", color: "#059669" },
      { num: "증상별", label: "가이드 수록", color: "#059669" },
    ])}
    ${priceBadge("3,900원", "1,000원", "출시 특가")}
    ${urgencyBanner()}
  </section>

  <!-- 공감 -->
  <section style="${sec("background:#ecfdf5;")}">
    ${bigTitle("약 앞에서 이런 적 있으시죠?")}
    ${subtitle("약국에서 가장 많이 받는 질문들 — 정해진 답이 있지만, 제때 얻기 어려운 것들")}
    ${redditQuote("타이레놀 먹고 술 마셔도 되나요? 간이 망가진다는데...", "pharmacy")}
    ${redditQuote("감기약 두 종류를 같이 먹어도 되나요? 성분이 겹치는지 어떻게 확인하죠?", "health")}
    ${redditQuote("아이 열이 39도인데 응급실 가야 하나요? 해열제 교차 복용은 어떻게 하는 건가요?", "parenting")}
  </section>

  <!-- Before → After -->
  <section style="${sec("background:#f9fafb;")}">
    ${bigTitle("이 가이드를 읽기 전과 후,", "이렇게 달라집니다")}
    ${beforeAfter(
      [
        "타이레놀과 감기약을 동시에 먹어 간독성 위험",
        "후시딘과 마데카솔 중 아무거나 바름",
        "아이 해열제 용량을 나이로 대충 맞춤",
        "소화제를 매 식사마다 습관적으로 복용",
      ],
      [
        "성분 겹침을 확인하고 안전하게 약을 선택",
        "상황에 따라 항생제/재생 연고를 구분",
        "체중 기준으로 정확한 용량을 계산",
        "속쓰림과 소화불량에 다른 약을 적용",
      ],
      "읽기 전 (지금)",
      "읽은 후",
      "#fef2f2",
      "#f0fdf4"
    )}
  </section>

  <!-- 목차 -->
  <section style="${sec("background:#fff;")}">
    ${label("TABLE OF CONTENTS")}
    ${bigTitle("무엇을 알게 되나요?")}
    ${subtitle("각 챕터는 독립적으로 읽을 수 있습니다")}
    ${tocItem("01", "해열진통제의 모든 것 — 타이레놀 vs 부루펜, 어린이 체중별 용량, 교차 복용법", true, "#059669")}
    ${tocItem("02", "감기약 완전 분석 — 판콜·판피린·화이투벤 성분 비교, 겹침 위험", true, "#059669")}
    ${tocItem("03", "위장약과 소화제 — 겔포스·게비스콘·PPI 비교, 속쓰림 vs 소화불량", true, "#059669")}
    ${tocItem("04", "쌍화탕과 한방 상비약 — 쌍화탕·우황청심환·정로환, 한약 양약 상호작용", false, "#059669")}
    ${tocItem("05", "상처/화상/피부 약 — 후시딘 vs 마데카솔 vs 베판텐, 습윤 드레싱", true, "#059669")}
    ${tocItem("06", "알레르기/비염약 — 지르텍·클라리틴·알레그라 비교, 비염 스프레이 주의", false, "#059669")}
    ${tocItem("07", "변비/설사/장 건강 — 둘코락스·마그밀, 유산균 진짜 효과, 설사 수분 보충", false, "#059669")}
    ${tocItem("08", "눈/귀/입 약 — 인공눈물 선택, 구내염(오라메디 vs 알보칠), 가글", false, "#059669")}
    ${tocItem("09", "구충제/비타민/영양제 — 비타민D·오메가3·철분제, 정직한 효과 평가", true, "#059669")}
    ${tocItem("10", "보관/폐기/응급 대처 — 상비약 체크리스트, 유효기간, 119 기준", true, "#059669")}
    ${spacer(16)}
    <div style="font-size:13px;color:#9ca3af;">+ 부록: 상비약 체크리스트 / 해열제 체중별 용량표 / 약물 상호작용 위험표 / 증상별 추천 약품표 / 어린이 약 용량표 / 응급 전화번호 카드</div>
  </section>

  <!-- 미리보기 -->
  ${fullPreview(
    "1",
    "해열진통제의 모든 것",
    [
      "아세트아미노펜 vs NSAIDs 비교",
      "한국에서 구입할 수 있는 제품 총정리",
      "어린이 체중별 용량 계산표",
      "해열제 교차 복용법",
      "39도 응급실 기준",
    ],
    `<p style="margin:0 0 16px;">해열진통제는 크게 두 계열로 나뉩니다. <strong>아세트아미노펜(타이레놀)</strong>은 간에서 대사되며 소염 효과는 없지만 공복 복용이 가능합니다. <strong>NSAIDs(부루펜)</strong>는 소염 효과가 있지만 위장 부작용이 있으므로 식후에 복용해야 합니다.</p>
      <p style="margin:0 0 16px;">어린이 해열제는 <strong>나이가 아니라 체중</strong>으로 계산합니다. 같은 5살이라도 체중이 다르면 용량이 다릅니다.</p>
      <p style="margin:0 0 16px;padding:16px;background:#ecfdf5;border-radius:10px;font-weight:600;color:#059669;">⚠️ 핵심 경고: 타이레놀을 복용하는 날에는 술을 마시지 마세요. 많은 감기약에도 아세트아미노펜이 들어 있어 이중 복용 위험이 있습니다.</p>
      <p style="margin:0;">약의 원리를 알면 안전하게 쓸 수 있습니다. <strong>제대로 알고 쓰면 고마운 존재입니다.</strong></p>`,
    "#059669",
    "linear-gradient(160deg,#ecfdf5,#d1fae5)"
  )}

  <!-- 추천 대상 -->
  <section style="${sec("background:#fff;")}">
    ${bigTitle("이런 분이라면,", "이 가이드가 답입니다")}
    ${checkList(
      [
        "약 앞에서 뭘 사야 할지 항상 고민되는 분",
        "어린 자녀가 있어 해열제 용량이 걱정되는 부모",
        "부모님 약 관리를 돕고 싶은 분",
        "약의 원리를 알고 안전하게 사용하고 싶은 분",
      ],
      "✅",
      "#ecfdf5"
    )}
    ${spacer(16)}
    ${checkList(
      [
        "전문적인 의료 진단을 대체하고 싶은 분 (이 책은 의료 행위가 아닙니다)",
        "처방전이 필요한 전문의약품 정보를 원하시는 분",
      ],
      "🚫",
      "#ecfdf5"
    )}
  </section>

  <!-- FAQ -->
  <section style="${sec("background:#f9fafb;")}">
    ${bigTitle("자주 묻는 질문")}
    ${faqItem("타이레놀과 감기약을 같이 먹어도 되나요?", "대부분의 종합감기약에는 아세트아미노펜이 이미 들어 있습니다. 타이레놀을 추가로 먹으면 이중 복용이 됩니다. 1장에서 성분 겹침 확인 방법을 자세히 설명합니다.")}
    ${faqItem("후시딘과 마데카솔, 어떤 걸 발라야 하나요?", "감염 위험이 있는 상처는 후시딘(항생제), 깨끗한 상처에 흉터를 예방하려면 마데카솔(재생)입니다. 5장에서 상황별 선택 가이드를 확인하세요.")}
    ${faqItem("이 가이드는 어떤 형식인가요?", "웹에서 읽는 디지털 가이드입니다. 결제 후 1개월간 열람 가능하며, 새로운 정보가 나오면 계속 업데이트됩니다.")}
  </section>

  <!-- 가격 앵커링 -->
  <section style="${sec("background:#fff;")}">
    ${bigTitle("이 가이드의 가치")}
    ${priceAnchor(
      [
        { what: "약국 30분 상담", price: "무료이지만", note: "대기 시간, 짧은 설명" },
        { what: "건강 정보 서적", price: "18,000원~", note: "외국 약 기준, 업데이트 없음" },
        { what: "유튜브 검색 3시간", price: "무료", note: "정보 파편화·광고·과장" },
      ],
      "1,000원",
      "10챕터 + 부록 6개 · 한국 약품 기준 · 약사 검증 · 계속 업데이트",
      "#059669"
    )}
    ${proofBanner(
      ["💊 약사가 직접 정리", "🇰🇷 한국 약품 기준", "🔄 계속 업데이트", "📱 모바일 최적화"],
      "#ecfdf5",
      "#059669"
    )}
  </section>

  <!-- 크로스셀 -->
  <section style="${sec("background:#f9fafb;")}">
    ${crossSell("otc-medicine-guide", ALL_BOOKS_FOR_CROSSSELL)}
  </section>

  <!-- CTA -->
  ${ctaBlock("💊", "가정 상비약 가이드를", "지금 시작하세요.", "해열제부터 영양제까지 — 약사가 정리한 50+ 약품 완전 가이드", "#059669")}

</div>`;
}

/* ═══════════════════════════════════════════
   27. 말 잘하는 사람들의 비밀
   ═══════════════════════════════════════════ */

export function buildSpeakingSkills(): string {
  return `<!-- 🎙️ 말 잘하는 사람들의 비밀 — 아임웹 상세페이지 -->
<div class="dp-wrap" style="max-width:860px;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
${mobileStyles}

  <!-- Hero -->
  <section style="${sec("background:linear-gradient(160deg,#ecfeff,#a5f3fc,#0891b2);")}">
    ${label("LIVING GUIDE · 살아있는 정보책")}
    <div style="font-size:64px;margin-bottom:16px;">🎙️</div>
    ${bigTitle("말 잘하는 사람들에게는", "공통된 비밀이 있습니다.")}
    ${subtitle("PREP 법칙 · 설득 심리학 · 경청 5단계 · 갈등 해결 · 30일 업그레이드 플랜")}
    ${statGrid([
      { num: "PREP", label: "법칙 — 논리적 말하기 공식", color: "#0891b2" },
      { num: "6가지", label: "설득 심리학 기법", color: "#0891b2" },
      { num: "30일", label: "말하기 업그레이드 플랜", color: "#0891b2" },
    ])}
    ${priceBadge("3,900원", "1,000원", "출시 특가")}
    ${urgencyBanner()}
  </section>

  <!-- 공감 -->
  <section style="${sec("background:#fff;")}">
    ${bigTitle("이런 적 있으시죠?")}
    ${subtitle("말하기 때문에 손해 본 경험, 누구나 있습니다")}
    ${redditQuote("회의에서 할 말이 있는데 머릿속에서 정리가 안 돼서 결국 입을 닫았다.", "socialskills")}
    ${redditQuote("발표만 하면 목소리가 떨리고 머릿속이 하얘진다. 내용은 알고 있는데...", "PublicSpeaking")}
    ${redditQuote("카톡 답장 하나에도 30분을 고민한다. 이 말이 오해를 살까봐.", "relationships")}
  </section>

  <!-- Before → After -->
  <section style="${sec("background:#f9fafb;")}">
    ${bigTitle("이 가이드를 읽기 전과 후,", "이렇게 달라집니다")}
    ${beforeAfter(
      [
        "회의에서 한마디도 못하고 나옴",
        "하고 싶은 말이 정리가 안 됨",
        "어색한 침묵이 두려움",
        "설득이 안 됨 — 근거 없이 감정으로만",
        "발표하면 떨림이 멈추지 않음",
      ],
      [
        "PREP로 논리적 발언, 존재감 확보",
        "3초 정리 후 결론부터 — 두괄식 습관",
        "질문의 기술로 대화를 자연스럽게 이어감",
        "양면제시+프레이밍으로 상대가 스스로 납득",
        "4-7-8 호흡+파워포즈로 긴장을 에너지로 전환",
      ],
      "읽기 전 (지금)",
      "읽은 후",
      "#fef2f2",
      "#f0fdf4"
    )}
  </section>

  <!-- 핵심 시스템 -->
  <section style="${sec("background:#164e63;color:#fff;")}">
    <div style="font-size:13px;color:#67e8f9;font-weight:600;letter-spacing:2px;margin-bottom:24px;">THE SPEAKING SYSTEM</div>
    <h2 style="font-size:clamp(24px,4vw,36px);font-weight:800;color:#fff;margin:0 0 24px;">말 잘하는 사람의 5가지 무기</h2>
    <div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center;">
      <div style="padding:16px 20px;background:rgba(103,232,249,.15);border:1px solid rgba(103,232,249,.3);border-radius:12px;"><span style="color:#67e8f9;font-weight:700;">1</span> <span style="color:rgba(255,255,255,.8);">순서의 기술</span></div>
      <div style="padding:16px 20px;background:rgba(103,232,249,.15);border:1px solid rgba(103,232,249,.3);border-radius:12px;"><span style="color:#67e8f9;font-weight:700;">2</span> <span style="color:rgba(255,255,255,.8);">경청의 힘</span></div>
      <div style="padding:16px 20px;background:rgba(103,232,249,.15);border:1px solid rgba(103,232,249,.3);border-radius:12px;"><span style="color:#67e8f9;font-weight:700;">3</span> <span style="color:rgba(255,255,255,.8);">설득 심리학</span></div>
      <div style="padding:16px 20px;background:rgba(103,232,249,.15);border:1px solid rgba(103,232,249,.3);border-radius:12px;"><span style="color:#67e8f9;font-weight:700;">4</span> <span style="color:rgba(255,255,255,.8);">갈등 해결</span></div>
      <div style="padding:16px 20px;background:rgba(103,232,249,.15);border:1px solid rgba(103,232,249,.3);border-radius:12px;"><span style="color:#67e8f9;font-weight:700;">5</span> <span style="color:rgba(255,255,255,.8);">30일 플랜</span></div>
    </div>
  </section>

  <!-- 목차 -->
  <section style="${sec("background:#fff;")}">
    ${label("TABLE OF CONTENTS")}
    ${bigTitle("무엇을 알게 되나요?")}
    ${subtitle("각 챕터는 독립적으로 읽을 수 있습니다")}
    ${tocItem("01", "말의 순서 — 두괄식, PREP 법칙, 30초 엘리베이터 피치", true, "#0891b2")}
    ${tocItem("02", "경청 — 적극적 경청 5단계, 맞장구 레벨, 80/20 법칙", true, "#0891b2")}
    ${tocItem("03", "비언어 소통 — 목소리 톤, 아이컨택 3초 법칙, 미러링", true, "#0891b2")}
    ${tocItem("04", "일상 대화 — 어색함 없애기, 질문의 기술, 칭찬법", false, "#0891b2")}
    ${tocItem("05", "설득의 심리학 — 아리스토텔레스 3요소, 프레이밍, 양면제시법", true, "#0891b2")}
    ${tocItem("06", "직장 말하기 — STAR 보고법, 회의 발언, 거절의 기술", true, "#0891b2")}
    ${tocItem("07", "갈등 해결 — I-Message, 사과 4단계, 피드백 샌드위치", true, "#0891b2")}
    ${tocItem("08", "프레젠테이션 — 긴장 극복, 오프닝 공식, Q&A 대처법", false, "#0891b2")}
    ${tocItem("09", "디지털 소통 — 카톡 에티켓, 화상회의, 세대별 차이", false, "#0891b2")}
    ${tocItem("10", "30일 업그레이드 플랜 — 4주 실전 프로그램", true, "#0891b2")}
    ${spacer(16)}
    <div style="font-size:13px;color:#9ca3af;">+ 부록: PREP 템플릿 / STAR 보고 템플릿 / 프레젠테이션 구조 시트 / 경청 체크리스트 / 30일 플래너</div>
  </section>

  <!-- 미리보기 -->
  ${fullPreview(
    "1",
    "말의 순서 — 두괄식과 PREP 법칙",
    [
      "왜 당신의 말은 전달이 안 될까",
      "두괄식 소통: 결론부터 말하라",
      "PREP 법칙: 4단계 공식",
      "30초 엘리베이터 피치",
      "회의에서 존재감 있게 말하기",
    ],
    `<p style="margin:0 0 16px;">회의 시간에 팀장이 묻습니다. "이번 프로젝트 진행 상황이 어떻게 돼?" 같은 내용인데 전달력이 완전히 다른 두 대리의 차이는 단 하나, <strong>말의 순서</strong>입니다.</p>
      <p style="margin:0 0 16px;"><strong>PREP 법칙</strong>은 가장 강력한 말하기 프레임워크입니다. <strong>P(주장)</strong> → <strong>R(이유)</strong> → <strong>E(예시)</strong> → <strong>P(재강조)</strong>. 이 순서만 지키면 어떤 상황에서든 논리적으로 말할 수 있습니다.</p>
      <p style="margin:0 0 16px;padding:16px;background:#ecfeff;border-radius:10px;font-weight:600;color:#0891b2;">핵심: 말하기 전 3초만 생각하세요. "내가 지금 하고 싶은 말의 핵심은 뭐지?" 머릿속에서 한 문장으로 요약한 뒤 입을 여세요.</p>
      <p style="margin:0;">말을 못하는 게 아닙니다. <strong>순서를 모르는 것입니다.</strong></p>`,
    "#0891b2",
    "linear-gradient(160deg,#ecfeff,#cffafe)"
  )}

  <!-- 추천 대상 -->
  <section style="${sec("background:#fff;")}">
    ${bigTitle("이런 분이라면,", "이 가이드가 답입니다")}
    ${checkList(
      [
        "회의에서 한마디도 못하고 나와서 후회하는 분",
        "하고 싶은 말이 있는데 정리가 안 되는 분",
        "발표나 프레젠테이션이 두려운 분",
        "갈등 상황에서 감정적으로 대응해 후회하는 분",
        "카톡 답장 하나에도 고민이 많은 분",
      ],
      "✅",
      "#ecfeff"
    )}
    ${spacer(16)}
    ${checkList(
      [
        "이미 소통 전문가인 분 (강연자, 아나운서 등)",
        "이론만 원하고 실천할 의지가 없는 분",
      ],
      "🚫",
      "#fef2f2"
    )}
  </section>

  <!-- FAQ -->
  <section style="${sec("background:#f9fafb;")}">
    ${bigTitle("자주 묻는 질문")}
    ${faqItem("말하기 능력은 타고나는 것 아닌가요?", "아닙니다. 말 잘하는 사람들에게는 공통된 습관과 기술이 있을 뿐입니다. PREP, 경청, 프레이밍 — 모두 배울 수 있는 기술입니다.")}
    ${faqItem("30일이면 정말 달라지나요?", "매일 3분 스피치와 주차별 미션을 따라하면 한 달 뒤 주변 사람들이 '뭔가 달라졌다'고 말합니다. 실제 연습 프로그램이 포함되어 있습니다.")}
    ${faqItem("이 가이드는 어떤 형식인가요?", "웹에서 읽는 디지털 가이드입니다. 결제 후 1개월간 열람 가능하며, 계속 업데이트됩니다.")}
  </section>

  <!-- 가격 앵커링 -->
  <section style="${sec("background:#fff;")}">
    ${bigTitle("이 가이드의 가치")}
    ${priceAnchor(
      [
        { what: "스피치 학원 1개월", price: "200,000원~", note: "시간·장소 제약" },
        { what: "커뮤니케이션 온라인 강의", price: "99,000원~", note: "일방적 강의" },
        { what: "자기계발 서적", price: "18,000원~", note: "업데이트 없음" },
      ],
      "1,000원",
      "10챕터 + 부록 5개 · 30일 플랜 · PREP/STAR 템플릿 · 업데이트",
      "#0891b2"
    )}
    ${proofBanner(
      ["🎙️ PREP+STAR 프레임워크", "🧠 설득 심리학 6기법", "📋 30일 실전 플랜", "🔄 계속 업데이트"],
      "#ecfeff",
      "#0891b2"
    )}
  </section>

  <!-- 크로스셀 -->
  <section style="${sec("background:#f9fafb;")}">
    ${crossSell("speaking-skills", ALL_BOOKS_FOR_CROSSSELL)}
  </section>

  <!-- CTA -->
  ${ctaBlock("🎙️", "말하기는 기술입니다.", "기술은 배울 수 있습니다.", "PREP 법칙 · 설득 심리학 · 경청 · 갈등 해결 · 30일 플랜", "#0891b2")}

</div>`;
}

/* ═══════════════════════════════════════════
   28. 협상의 기술
   ═══════════════════════════════════════════ */

export function buildNegotiationSkills(): string {
  return `<!-- 🤝 협상의 기술 — 아임웹 상세페이지 -->
<div class="dp-wrap" style="max-width:860px;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
${mobileStyles}
  <section style="${sec("background:linear-gradient(160deg,#fed7aa,#fb923c,#ea580c);")}">
    ${label("LIVING GUIDE · 살아있는 정보책")}
    <div style="font-size:64px;margin-bottom:16px;">🤝</div>
    <h2 style="margin:0 0 16px;font-size:clamp(28px,5vw,44px);font-weight:800;line-height:1.3;color:#7c2d12;">원하는 것을 얻지 못하는 이유는<br>요청하지 않았기 때문입니다.</h2>
    <p style="font-size:18px;color:#9a3412;font-weight:600;margin:0 0 8px;">협상은 싸움이 아니라 문제 해결입니다.</p>
    ${subtitle("BATNA 전략부터 연봉 스크립트까지 — 한국 문화에 맞는 실전 협상 시스템")}
    ${statGrid([
      { num: "BATNA", label: "전략 프레임워크", color: "#ea580c" },
      { num: "3종", label: "연봉 스크립트", color: "#ea580c" },
      { num: "30일", label: "업그레이드 플랜", color: "#ea580c" },
    ])}
    ${priceBadge("3,900원", "1,000원", "출시 특가")}
    ${urgencyBanner()}
  </section>

  <section style="${sec("background:#fff;")}">
    ${bigTitle("이런 상태 아닌가요?")}
    ${beforeAfter(
      ["연봉 협상 한 번 못 하고 3년째 같은 급여", "'안 돼요' 들으면 그 자리에서 포기", "갑을 관계에서 불리한 조건 그대로 수용"],
      ["BATNA 준비하고 여유 있게 연봉 협상", "'No'를 협상 시작으로 활용하는 기법", "을의 협상 카드로 합리적 조건 확보"],
      "협상 전", "30일 후",
      "#fef2f2", "#f0fdf4"
    )}
    <p style="font-size:15px;color:#6b7280;margin-top:16px;"><strong style="color:#ea580c;">잭 캔필드: "인생에서 원하는 것을 얻지 못하는 이유는 단 하나, 요청하지 않았기 때문이다."</strong></p>
  </section>

  <section style="${sec("background:#7c2d12;color:#fff;")}">
    <div style="font-size:13px;color:#fb923c;font-weight:600;letter-spacing:2px;margin-bottom:24px;">NEGOTIATION SYSTEM</div>
    <h2 style="font-size:clamp(24px,4vw,36px);font-weight:800;color:#fff;margin:0 0 24px;">핵심 협상 기술</h2>
    <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;">
      <div style="padding:14px 16px;background:rgba(251,146,60,.15);border:1px solid rgba(251,146,60,.3);border-radius:12px;"><span style="color:#fb923c;font-weight:700;">1</span> <span style="color:rgba(255,255,255,.8);">BATNA</span></div>
      <div style="padding:14px 16px;background:rgba(251,146,60,.15);border:1px solid rgba(251,146,60,.3);border-radius:12px;"><span style="color:#fb923c;font-weight:700;">2</span> <span style="color:rgba(255,255,255,.8);">앵커링</span></div>
      <div style="padding:14px 16px;background:rgba(251,146,60,.15);border:1px solid rgba(251,146,60,.3);border-radius:12px;"><span style="color:#fb923c;font-weight:700;">3</span> <span style="color:rgba(255,255,255,.8);">라벨링</span></div>
      <div style="padding:14px 16px;background:rgba(251,146,60,.15);border:1px solid rgba(251,146,60,.3);border-radius:12px;"><span style="color:#fb923c;font-weight:700;">4</span> <span style="color:rgba(255,255,255,.8);">미러링</span></div>
      <div style="padding:14px 16px;background:rgba(251,146,60,.15);border:1px solid rgba(251,146,60,.3);border-radius:12px;"><span style="color:#fb923c;font-weight:700;">5</span> <span style="color:rgba(255,255,255,.8);">침묵</span></div>
      <div style="padding:14px 16px;background:rgba(251,146,60,.15);border:1px solid rgba(251,146,60,.3);border-radius:12px;"><span style="color:#fb923c;font-weight:700;">6</span> <span style="color:rgba(255,255,255,.8);">열린 질문</span></div>
    </div>
  </section>

  <section style="${sec("background:#fff;")}">
    ${redditQuote("연봉 협상 안 해서 3년 동안 500만 원 차이 벌어짐. 동기가 알려줘서 올해 처음 해봤는데 15% 올랐어요. 왜 진작 안 했을까.", "korea")}
    ${redditQuote("협상은 말재주가 아니라 준비라는 거 이번에 체감. BATNA 하나 만들어뒀더니 여유가 생기더라.", "negotiation")}
  </section>

  <section style="${sec("background:#fff;")}">
    ${label("TABLE OF CONTENTS")}
    ${bigTitle("무엇을 알게 되나요?")}
    ${tocItem("01", "마인드셋 전환: 협상은 싸움이 아니라 문제 해결", true, "#ea580c")}
    ${tocItem("02", "준비가 90%: BATNA·ZOPA·5분 루틴", true, "#ea580c")}
    ${tocItem("03", "앵커링: 누가 먼저 숫자를 말할 것인가", true, "#ea580c")}
    ${tocItem("04", "No를 다루는 기술: 라벨링·미러링·침묵", true, "#ea580c")}
    ${tocItem("05", "연봉 협상 완전 공략: 스크립트 3종", true, "#ea580c")}
    ${tocItem("06", "비즈니스 협상: 계약·거래·파트너십", false, "#ea580c")}
    ${tocItem("07", "일상의 협상: 가족·친구·서비스", false, "#ea580c")}
    ${tocItem("08", "한국 문화와 협상: 위계·체면·눈치 활용", false, "#ea580c")}
    ${tocItem("09", "디지털 시대 협상: 이메일·화상·AI", false, "#ea580c")}
    ${tocItem("10", "30일 협상 업그레이드 플랜", true, "#ea580c")}
    ${spacer(16)}
    <div style="font-size:13px;color:#9ca3af;">+ 부록: 준비 체크리스트 3종 / 연봉 스크립트 3종 / BATNA 워크시트 / 이메일 템플릿 3종 / 30일 플래너</div>
  </section>

  <section style="${sec("background:#f9fafb;")}">
    ${bigTitle("이런 분께 추천합니다")}
    ${checkList(["연봉 협상을 한 번도 해본 적 없는 직장인", "클라이언트에게 '비싸요' 들으면 바로 할인하는 프리랜서", "갑을 관계에서 불리한 조건을 수용하는 소상공인", "가족과 대화하면 감정만 상하고 합의가 안 되는 분", "이메일·카톡으로 협상할 때 오해가 자주 생기는 분"], "✅", "#fff7ed")}
    ${spacer(16)}
    ${checkList(["이미 전문 협상가인 분 (변호사, M&A 전문가 등)", "이론만 원하고 실천할 의지가 없는 분"], "🚫", "#fef2f2")}
    ${spacer(40)}
    ${bigTitle("자주 묻는 질문")}
    ${faqItem("말재주가 없어도 협상을 잘할 수 있나요?", "네. 협상은 말재주가 아니라 준비의 기술입니다. BATNA, 앵커링, 라벨링 — 모두 배울 수 있는 기술이고, 30일 플랜을 따라하면 체화됩니다.")}
    ${faqItem("한국 직장에서 연봉 협상하면 찍히지 않나요?", "기업의 84%가 연봉 협상을 기대합니다. 이 책에서 다루는 한국적 화법 패턴(8장)을 활용하면 존중하면서도 원하는 것을 얻을 수 있습니다.")}
    ${faqItem("이 가이드는 어떤 형식인가요?", "웹에서 읽는 디지털 가이드입니다. 결제 후 1개월간 열람 가능하며, 계속 업데이트됩니다.")}
  </section>

  <!-- 가격 앵커링 -->
  <section style="${sec("background:#fff;")}">
    ${bigTitle("이 가이드의 가치")}
    ${priceAnchor(
      [
        { what: "협상 전문 컨설팅 1회", price: "500,000원~", note: "1회성, 범용 조언" },
        { what: "비즈니스 협상 온라인 강의", price: "150,000원~", note: "일방적 강의" },
        { what: "자기계발 서적", price: "18,000원~", note: "업데이트 없음" },
      ],
      "1,000원",
      "10챕터 + 부록 5종 · 30일 플랜 · 연봉 스크립트 3종 · BATNA 워크시트 · 업데이트",
      "#ea580c"
    )}
    ${proofBanner(
      ["🤝 BATNA·앵커링 전략", "🎯 FBI 라벨링·미러링", "📋 30일 실전 플랜", "🔄 계속 업데이트"],
      "#fff7ed",
      "#ea580c"
    )}
  </section>

  <!-- 크로스셀 -->
  <section style="${sec("background:#f9fafb;")}">
    ${crossSell("negotiation-skills", ALL_BOOKS_FOR_CROSSSELL)}
  </section>

  <!-- CTA -->
  ${ctaBlock("🤝", "협상은 기술입니다.", "기술은 배울 수 있습니다.", "BATNA · 앵커링 · 라벨링 · 연봉 스크립트 · 30일 플랜", "#ea580c")}

</div>`;
}
