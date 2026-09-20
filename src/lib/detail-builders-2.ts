/**
 * Detail page builder functions — Group 2 (builders 10–18)
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
   10. 딥포커스, 초집중의 기술
   ═══════════════════════════════════════════ */

export function buildDeepFocus(): string {
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

export function buildStorytelling(): string {
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

export function buildCustomerRetention(): string {
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

export function buildLaunchStorytelling(): string {
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

export function buildMoneyPsychology(): string {
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
   15. 사업 아이디어 검증법
   ═══════════════════════════════════════════ */

export function buildIdeaValidation(): string {
  return `<!-- 🔬 망하지 않는 사업 아이디어 검증법 — 아임웹 상세페이지 -->
<div class="dp-wrap" style="max-width:860px;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
${mobileStyles}
  <section style="${sec("background:linear-gradient(160deg,#ecfeff,#cffafe,#a5f3fc);")}">
    ${label("LIVING GUIDE · 살아있는 정보책")}
    <div style="font-size:64px;margin-bottom:16px;">🔬</div>
    <h2 style="margin:0 0 16px;font-size:clamp(28px,5vw,44px);font-weight:800;line-height:1.3;color:#164e63;">스타트업 실패의 42%는<br>'시장이 원하지 않는 것을 만들었기 때문'</h2>
    <p style="font-size:18px;color:#0891b2;font-weight:600;margin:0 0 8px;">검증 없이 시작하지 마세요.</p>
    ${subtitle("시장 조사부터 MVP·피벗까지 — 실패 확률을 줄이는 데이터 중심 검증 시스템")}
    ${statGrid([
      { num: "5", label: "가지 MVP 유형 비교", color: "#0891b2" },
      { num: "6", label: "단계 실험 설계 프로세스", color: "#0891b2" },
      { num: "90일", label: "아이디어 검증 로드맵", color: "#0891b2" },
    ])}
    ${priceBadge("3,900원", "1,000원", "출시 특가")}
    ${urgencyBanner()}
  </section>

  <section style="${sec("background:#fff;")}">
    ${bigTitle("이 실수, 하고 계시죠?")}
    <div style="display:flex;flex-wrap:wrap;gap:20px;justify-content:center;margin:32px 0;">
      <div style="flex:1 1 220px;max-width:260px;padding:28px 24px;background:#fef2f2;border-radius:16px;text-align:center;">
        <div style="font-size:36px;margin-bottom:12px;">💡</div>
        <div style="font-size:16px;font-weight:700;color:#991b1b;margin-bottom:8px;">감으로 시작</div>
        <div style="font-size:14px;color:#7f1d1d;line-height:1.6;">검증 없이 "될 것 같아서"<br>바로 개발 시작</div>
      </div>
      <div style="flex:1 1 220px;max-width:260px;padding:28px 24px;background:#ecfeff;border-radius:16px;text-align:center;">
        <div style="font-size:36px;margin-bottom:12px;">🎯</div>
        <div style="font-size:16px;font-weight:700;color:#164e63;margin-bottom:8px;">고객 부재</div>
        <div style="font-size:14px;color:#155e75;line-height:1.6;">누가 살지도 모르면서<br>완벽한 제품 만들기</div>
      </div>
      <div style="flex:1 1 220px;max-width:260px;padding:28px 24px;background:#fefce8;border-radius:16px;text-align:center;">
        <div style="font-size:36px;margin-bottom:12px;">💸</div>
        <div style="font-size:16px;font-weight:700;color:#854d0e;margin-bottom:8px;">자원 낭비</div>
        <div style="font-size:14px;color:#713f12;line-height:1.6;">시장이 원하지 않는 것에<br>시간과 돈을 쏟음</div>
      </div>
    </div>
    <p style="font-size:15px;color:#6b7280;margin-top:16px;"><strong style="color:#0891b2;">CB Insights: 스타트업이 실패하는 2번째 이유는 '시장의 필요성 부재'입니다.</strong></p>
  </section>

  <section style="${sec("background:#164e63;color:#fff;")}">
    <div style="font-size:13px;color:#67e8f9;font-weight:600;letter-spacing:2px;margin-bottom:24px;">THE VALIDATION SYSTEM</div>
    <h2 style="font-size:clamp(24px,4vw,36px);font-weight:800;color:#fff;margin:0 0 24px;">5단계 검증 시스템</h2>
    <div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center;">
      <div style="padding:16px 20px;background:rgba(103,232,249,.15);border:1px solid rgba(103,232,249,.3);border-radius:12px;"><span style="color:#67e8f9;font-weight:700;">1</span> <span style="color:rgba(255,255,255,.8);">시장 찾기</span></div>
      <div style="padding:16px 20px;background:rgba(103,232,249,.15);border:1px solid rgba(103,232,249,.3);border-radius:12px;"><span style="color:#67e8f9;font-weight:700;">2</span> <span style="color:rgba(255,255,255,.8);">가설 검증</span></div>
      <div style="padding:16px 20px;background:rgba(103,232,249,.15);border:1px solid rgba(103,232,249,.3);border-radius:12px;"><span style="color:#67e8f9;font-weight:700;">3</span> <span style="color:rgba(255,255,255,.8);">MVP 개발</span></div>
      <div style="padding:16px 20px;background:rgba(103,232,249,.15);border:1px solid rgba(103,232,249,.3);border-radius:12px;"><span style="color:#67e8f9;font-weight:700;">4</span> <span style="color:rgba(255,255,255,.8);">피드백 루프</span></div>
      <div style="padding:16px 20px;background:rgba(103,232,249,.15);border:1px solid rgba(103,232,249,.3);border-radius:12px;"><span style="color:#67e8f9;font-weight:700;">5</span> <span style="color:rgba(255,255,255,.8);">피벗 or 확장</span></div>
    </div>
  </section>

  <section style="${sec("background:#fff;")}">
    ${label("TABLE OF CONTENTS")}
    ${bigTitle("무엇을 알게 되나요?")}
    ${tocItem("01", "내게 맞는 시장 찾기: 페르소나부터 틈새시장까지", true, "#0891b2")}
    ${tocItem("02", "가설 검증하기: 4가지 가정 유형과 우선순위", true, "#0891b2")}
    ${tocItem("03", "심화 검증: A/B 테스트, 파일럿, 스모크 테스트", true, "#0891b2")}
    ${tocItem("04", "MVP 만들기: 5가지 유형과 범위 정의", true, "#0891b2")}
    ${tocItem("05", "애자일 MVP 개발: 단순함과 정교함의 균형", false, "#0891b2")}
    ${tocItem("06", "피벗인가 지속인가: 방향 전환의 기술", true, "#0891b2")}
    ${tocItem("07", "고객 피드백 루프: 5단계 시스템", false, "#0891b2")}
    ${tocItem("08", "검증에서 실행으로: MVP를 확장 가능한 사업으로", false, "#0891b2")}
    ${tocItem("09", "지속적 검증: 시장은 멈추지 않는다", false, "#0891b2")}
    ${tocItem("10", "90일 아이디어 검증 로드맵", true, "#0891b2")}
    ${spacer(16)}
    <div style="font-size:13px;color:#9ca3af;">+ 부록: 페르소나 워크시트 / 경쟁사 매트릭스 / 실험 설계 템플릿 / MVP 선택 가이드 / 피벗 판단 프레임워크 / 90일 캘린더</div>
  </section>

  <section style="${sec("background:#f9fafb;")}">
    ${bigTitle("이런 분께 추천합니다")}
    ${checkList(["사업 아이디어가 있는데 시장에서 통할지 확신이 없는 분", "검증 없이 시작했다가 실패한 경험이 있는 분", "MVP를 어떻게 만들어야 할지 모르는 분", "피벗해야 할지 밀어붙여야 할지 고민 중인 분"], "✅", "#ecfeff")}
    ${spacer(16)}
    ${checkList(["검증 없이 감으로 밀어붙이고 싶은 분", "완벽한 제품을 만든 후에 시장을 찾겠다는 분"], "🚫", "#fef2f2")}
    ${spacer(40)}
    ${bigTitle("자주 묻는 질문")}
    ${faqItem("아이디어가 아직 막연한 상태인데 시작할 수 있나요?", "오히려 막연할 때 시작하는 것이 가장 좋습니다. 챕터 1의 시장 조사부터 시작하면 아이디어가 구체화됩니다.")}
    ${faqItem("기술 없이도 MVP를 만들 수 있나요?", "네. 5가지 MVP 유형 중 코딩 없이 만들 수 있는 유형(랜딩페이지, 컨시어지, 조각모음)을 안내합니다.")}
    ${faqItem("이 가이드는 어떤 형식인가요?", "웹에서 읽는 디지털 가이드입니다. 결제 후 1개월간 열람 가능하며, 계속 업데이트됩니다.")}
  </section>

  <section style="${sec("background:#fff;")}">
    ${bigTitle("이 가이드의 가치")}
    ${priceAnchor([
      { what: "스타트업 컨설팅 1회", price: "300,000원~", note: "1시간" },
      { what: "린스타트업 온라인 강의", price: "199,000원~", note: "일방적 강의" },
      { what: "창업 서적", price: "20,000원~", note: "업데이트 없음" },
    ], "1,000원", "10챕터 + 실행 키트 9종 + 90일 로드맵 + 업데이트", "#0891b2")}
    ${proofBanner(["🔬 MVP 5유형 비교", "📋 90일 검증 로드맵", "🔄 피벗/지속 프레임워크", "🔄 계속 업데이트"], "#ecfeff", "#0891b2")}
  </section>

  <section style="${sec("background:#f9fafb;")}">
    ${crossSell("idea-validation", ALL_BOOKS_FOR_CROSSSELL)}
  </section>

  ${ctaBlock("🔬", "검증 없이 시작하지 마세요.", "데이터로 확인된 아이디어만 살아남습니다.", "실패 확률을 줄이는 90일 검증 시스템.", "#0891b2")}
</div>`;
}

/* ═══════════════════════════════════════════
   16. 팔로워 1,000명으로 평생 먹고 사는 법
   ═══════════════════════════════════════════ */

export function buildMicroAudience(): string {
  return `<!-- 👥 팔로워 1,000명으로 평생 먹고 사는 법 — 아임웹 상세페이지 -->
<div class="dp-wrap" style="max-width:860px;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
${mobileStyles}

  <!-- Hero -->
  <section style="${sec("background:linear-gradient(160deg,#faf5ff,#ede9fe,#ddd6fe);")}">
    ${label("LIVING GUIDE · 살아있는 정보책")}
    <div style="font-size:64px;margin-bottom:16px;">👥</div>
    <h2 style="margin:0 0 16px;font-size:clamp(28px,5vw,44px);font-weight:800;line-height:1.3;color:#4c1d95;">10만 팔로워가 필요하다는<br>거짓말을 멈추세요.</h2>
    <p style="font-size:18px;color:#7c3aed;font-weight:600;margin:0 0 8px;">100명의 진짜 팬이면 충분합니다.</p>
    ${subtitle("마이크로 오디언스 수익화 — 500~5,000명 사이에서 월 수익 만드는 완전 가이드")}
    ${statGrid([
      { num: "100", label: "명의 진짜 팬이면 충분", color: "#7c3aed" },
      { num: "10", label: "챕터 + 실행 키트", color: "#7c3aed" },
      { num: "30일", label: "수익화 로드맵", color: "#7c3aed" },
    ])}
    ${priceBadge("3,900원", "1,000원", "출시 특가")}
    ${urgencyBanner()}
  </section>

  <section style="${sec("background:#fff;")}">
    ${bigTitle("이 착각, 하고 계시죠?")}
    ${beforeAfter(
      ["팔로워 10만은 되어야 돈이 되지", "광고·협찬 아니면 수익이 안 나", "아직 전문가가 아니라서..."],
      ["진짜 팬 100명이면 연 3,000만원 가능", "자체 상품 하나가 광고 100개보다 강력", "70점 전문성 + 솔직함 = 최강 조합"],
      "흔한 착각", "실제 현실",
      "#fef2f2", "#f0fdf4"
    )}
    <p style="font-size:15px;color:#6b7280;margin-top:16px;"><strong style="color:#7c3aed;">Kevin Kelly의 '1,000 True Fans' 이론: 1,000명이 연 10만원씩 쓰면 연 1억입니다.</strong></p>
  </section>

  <section style="${sec("background:#4c1d95;color:#fff;")}">
    <div style="font-size:13px;color:#c4b5fd;font-weight:600;letter-spacing:2px;margin-bottom:24px;">THE MICRO-AUDIENCE SYSTEM</div>
    <h2 style="font-size:clamp(24px,4vw,36px);font-weight:800;color:#fff;margin:0 0 24px;">마이크로 오디언스 수익화 5단계</h2>
    <div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center;">
      <div style="padding:16px 20px;background:rgba(196,181,253,.15);border:1px solid rgba(196,181,253,.3);border-radius:12px;"><span style="color:#c4b5fd;font-weight:700;">1</span> <span style="color:rgba(255,255,255,.8);">전문 영역 찾기</span></div>
      <div style="padding:16px 20px;background:rgba(196,181,253,.15);border:1px solid rgba(196,181,253,.3);border-radius:12px;"><span style="color:#c4b5fd;font-weight:700;">2</span> <span style="color:rgba(255,255,255,.8);">진짜 팬 프로필</span></div>
      <div style="padding:16px 20px;background:rgba(196,181,253,.15);border:1px solid rgba(196,181,253,.3);border-radius:12px;"><span style="color:#c4b5fd;font-weight:700;">3</span> <span style="color:rgba(255,255,255,.8);">마이크로 오퍼 설계</span></div>
      <div style="padding:16px 20px;background:rgba(196,181,253,.15);border:1px solid rgba(196,181,253,.3);border-radius:12px;"><span style="color:#c4b5fd;font-weight:700;">4</span> <span style="color:rgba(255,255,255,.8);">수익 모델 구축</span></div>
      <div style="padding:16px 20px;background:rgba(196,181,253,.15);border:1px solid rgba(196,181,253,.3);border-radius:12px;"><span style="color:#c4b5fd;font-weight:700;">5</span> <span style="color:rgba(255,255,255,.8);">30일 실행</span></div>
    </div>
  </section>

  <section style="${sec("background:#fff;")}">
    ${label("TABLE OF CONTENTS")}
    ${bigTitle("무엇을 알게 되나요?")}
    ${tocItem("01", "마이크로 수학: 100명의 진짜 팬이면 충분한 이유", true, "#7c3aed")}
    ${tocItem("02", "내 전문 영역 찾기: 70점 전문성의 스위트 스팟", true, "#7c3aed")}
    ${tocItem("03", "진짜 팬 프로필: 구독자가 아닌 관계 설계", true, "#7c3aed")}
    ${tocItem("04", "마이크로 오퍼 설계: 카페 테스트부터 가격 전략까지", true, "#7c3aed")}
    ${tocItem("05", "3가지 수익 모델: 지식형·서비스형·하이브리드", false, "#7c3aed")}
    ${tocItem("06", "콘텐츠 전략: 알고리즘이 아닌 신뢰를 쌓는 법", false, "#7c3aed")}
    ${tocItem("07", "커뮤니티 빌딩: 팬이 팬을 데려오는 구조", false, "#7c3aed")}
    ${tocItem("08", "수익화 실행: 첫 상품 출시부터 반복 매출까지", false, "#7c3aed")}
    ${tocItem("09", "확장과 보호: 번아웃 없이 성장하는 시스템", false, "#7c3aed")}
    ${tocItem("10", "30일 마이크로 오디언스 빌딩 로드맵", true, "#7c3aed")}
    ${spacer(16)}
    <div style="font-size:13px;color:#9ca3af;">+ 부록: 전문성 진단 워크시트 / 진짜 팬 프로필 템플릿 / 마이크로 오퍼 캔버스 / 가격 전략 가이드 / 30일 캘린더</div>
  </section>

  <section style="${sec("background:linear-gradient(160deg,#faf5ff,#f5f3ff);")}">
    ${bigTitle("숫자로 보는 마이크로 오디언스")}
    ${statGrid([
      { num: "500", label: "팔로워면 월 100만원 시작", color: "#7c3aed" },
      { num: "3가지", label: "수익 모델 조합", color: "#7c3aed" },
      { num: "30일", label: "첫 수익까지의 로드맵", color: "#7c3aed" },
    ])}
    ${redditQuote("I quit my 100K follower account and started fresh with 800 followers in my niche. I make 3x more money now.", "EntrepreneurRideAlong")}
    ${redditQuote("팔로워 수보다 DM 답장률이 수익을 결정합니다. 500명이지만 월 200만원 벌고 있어요.", "creator_economy")}
  </section>

  <section style="${sec("background:#fff;")}">
    ${bigTitle("이런 분께 추천합니다")}
    ${checkList(["SNS를 하고 있지만 수익화 방법을 모르는 분", "팔로워 수에 집착하다 지쳐버린 분", "전문 지식은 있는데 어떻게 팔지 모르는 분", "부업으로 안정적인 수익 파이프라인을 만들고 싶은 분"], "✅", "#faf5ff")}
    ${spacer(16)}
    ${checkList(["단기간에 팔로워 10만 명을 만들고 싶은 분", "광고 수익만으로 돈 벌고 싶은 분"], "🚫", "#fef2f2")}
    ${spacer(40)}
    ${bigTitle("자주 묻는 질문")}
    ${faqItem("팔로워가 거의 없는데 시작할 수 있나요?", "0명부터 시작하는 30일 로드맵이 포함되어 있습니다. 핵심은 팔로워 수가 아니라 진짜 팬 밀도입니다.")}
    ${faqItem("어떤 플랫폼이 가장 좋은가요?", "플랫폼보다 당신의 전문 영역에 맞는 곳이 중요합니다. 챕터 6에서 플랫폼별 전략을 다룹니다.")}
    ${faqItem("이 가이드는 어떤 형식인가요?", "웹에서 읽는 디지털 가이드입니다. 결제 후 1개월간 열람 가능하며, 계속 업데이트됩니다.")}
  </section>

  <section style="${sec("background:#fff;")}">
    ${bigTitle("이 가이드의 가치")}
    ${priceAnchor([
      { what: "크리에이터 수익화 컨설팅", price: "500,000원~", note: "1시간" },
      { what: "온라인 크리에이터 강의", price: "299,000원~", note: "일방적 강의" },
      { what: "SNS 마케팅 서적", price: "18,000원~", note: "업데이트 없음" },
    ], "1,000원", "10챕터 + 실행 키트 5종 + 30일 로드맵 + 업데이트", "#7c3aed")}
    ${proofBanner(["👥 진짜 팬 프로필 템플릿", "💰 3가지 수익 모델 설계", "📅 30일 빌딩 로드맵", "🔄 계속 업데이트"], "#faf5ff", "#7c3aed")}
  </section>

  <section style="${sec("background:#f9fafb;")}">
    ${crossSell("micro-audience", ALL_BOOKS_FOR_CROSSSELL)}
  </section>

  ${ctaBlock("👥", "10만 팔로워는 필요 없습니다.", "100명의 진짜 팬이면 충분합니다.", "마이크로 오디언스 수익화 30일 로드맵.", "#7c3aed")}
</div>`;
}

/* ═══════════════════════════════════════════
   17. 뇌에 박히는 글쓰기 공식
   ═══════════════════════════════════════════ */

export function buildWritingFormula(): string {
  return `<!-- ✍️ 뇌에 박히는 글쓰기 공식 — 아임웹 상세페이지 -->
<div class="dp-wrap" style="max-width:860px;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
${mobileStyles}
  <section style="${sec("background:linear-gradient(160deg,#fef3c7,#fde68a,#fbbf24);")}">
    ${label("LIVING GUIDE · 살아있는 정보책")}
    <div style="font-size:64px;margin-bottom:16px;">✍️</div>
    <h2 style="margin:0 0 16px;font-size:clamp(28px,5vw,44px);font-weight:800;line-height:1.3;color:#78350f;">당신의 글이 읽히지 않는 건<br>재능이 아니라 공식의 문제입니다.</h2>
    <p style="font-size:18px;color:#92400e;font-weight:600;margin:0 0 8px;">뇌에 박히는 글에는 과학이 있습니다.</p>
    ${subtitle("5 Whys·호기심 갭·치알디니 6원칙 — 읽히고 팔리는 글을 쓰는 시스템")}
    ${statGrid([
      { num: "6", label: "가지 훅 공식", color: "#b45309" },
      { num: "10", label: "챕터 + 실행 키트", color: "#b45309" },
      { num: "30일", label: "글쓰기 챌린지", color: "#b45309" },
    ])}
    ${priceBadge("3,900원", "1,000원", "출시 특가")}
    ${urgencyBanner()}
  </section>

  <section style="${sec("background:#fff;")}">
    ${bigTitle("이런 경험, 있으시죠?")}
    ${beforeAfter(
      ["열심히 쓴 글인데 조회수 10", "좋은 내용인데 아무도 끝까지 안 읽음", "CTA를 넣어도 클릭이 안 됨"],
      ["첫 문장에서 스크롤이 멈춤", "끝까지 읽고 댓글까지 달림", "글 하나가 매출로 이어짐"],
      "글쓰기 전", "공식 적용 후",
      "#fef2f2", "#f0fdf4"
    )}
    <p style="font-size:15px;color:#6b7280;margin-top:16px;"><strong style="color:#b45309;">치알디니 교수의 연구: 설득의 90%는 구조로 결정됩니다.</strong></p>
  </section>

  <section style="${sec("background:#78350f;color:#fff;")}">
    <div style="font-size:13px;color:#fbbf24;font-weight:600;letter-spacing:2px;margin-bottom:24px;">THE WRITING FORMULA</div>
    <h2 style="font-size:clamp(24px,4vw,36px);font-weight:800;color:#fff;margin:0 0 24px;">읽히는 글의 5단계 공식</h2>
    <div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center;">
      <div style="padding:16px 20px;background:rgba(251,191,36,.15);border:1px solid rgba(251,191,36,.3);border-radius:12px;"><span style="color:#fbbf24;font-weight:700;">1</span> <span style="color:rgba(255,255,255,.8);">독자 분석</span></div>
      <div style="padding:16px 20px;background:rgba(251,191,36,.15);border:1px solid rgba(251,191,36,.3);border-radius:12px;"><span style="color:#fbbf24;font-weight:700;">2</span> <span style="color:rgba(255,255,255,.8);">훅 설계</span></div>
      <div style="padding:16px 20px;background:rgba(251,191,36,.15);border:1px solid rgba(251,191,36,.3);border-radius:12px;"><span style="color:#fbbf24;font-weight:700;">3</span> <span style="color:rgba(255,255,255,.8);">구조 잡기</span></div>
      <div style="padding:16px 20px;background:rgba(251,191,36,.15);border:1px solid rgba(251,191,36,.3);border-radius:12px;"><span style="color:#fbbf24;font-weight:700;">4</span> <span style="color:rgba(255,255,255,.8);">설득 장치</span></div>
      <div style="padding:16px 20px;background:rgba(251,191,36,.15);border:1px solid rgba(251,191,36,.3);border-radius:12px;"><span style="color:#fbbf24;font-weight:700;">5</span> <span style="color:rgba(255,255,255,.8);">실전 적용</span></div>
    </div>
  </section>

  <section style="${sec("background:#fff;")}">
    ${label("TABLE OF CONTENTS")}
    ${bigTitle("무엇을 알게 되나요?")}
    ${tocItem("01", "독자를 꿰뚫는 기술: 5 Whys부터 공감 맵까지", true, "#b45309")}
    ${tocItem("02", "뇌에 박히는 첫 문장: 호기심 갭과 6가지 훅 공식", true, "#b45309")}
    ${tocItem("03", "멈출 수 없는 글의 비밀: 스토리텔링과 클리프행어", true, "#b45309")}
    ${tocItem("04", "필사부터 스와이프 파일까지: 글쓰기 근육 만들기", false, "#b45309")}
    ${tocItem("05", "설득하는 문장의 과학: 치알디니 6원칙 적용법", true, "#b45309")}
    ${tocItem("06", "대화하듯 쓰는 기술: 1:1 대화 만드는 5가지 기법", false, "#b45309")}
    ${tocItem("07", "팔리는 글의 구조: 문제→해결→증거→행동", true, "#b45309")}
    ${tocItem("08", "플랫폼별 글쓰기 전략: 블로그·SNS·뉴스레터", false, "#b45309")}
    ${tocItem("09", "글쓰기 루틴 시스템: 매일 쓰는 사람이 되는 법", false, "#b45309")}
    ${tocItem("10", "30일 글쓰기 챌린지 로드맵", true, "#b45309")}
    ${spacer(16)}
    <div style="font-size:13px;color:#9ca3af;">+ 부록: 헤드라인 템플릿 30개 / 훅 공식 카드 / 스와이프 파일 체크리스트 / CTA 작성 가이드 / 30일 챌린지 캘린더</div>
  </section>

  <section style="${sec("background:#f9fafb;")}">
    ${bigTitle("이런 분께 추천합니다")}
    ${checkList(["블로그·SNS 글을 쓰는데 반응이 없는 분", "상세페이지·광고 문구를 써야 하는 사업자", "뉴스레터·이메일 마케팅을 시작하려는 분", "글쓰기가 두려워 시작을 미루고 있는 분"], "✅", "#fef3c7")}
    ${spacer(16)}
    ${checkList(["문학적 글쓰기를 배우고 싶은 분", "이미 전문 카피라이터인 분"], "🚫", "#fef2f2")}
    ${spacer(40)}
    ${bigTitle("자주 묻는 질문")}
    ${faqItem("글쓰기를 전혀 못하는데 시작할 수 있나요?", "이 가이드는 재능이 아니라 공식을 다룹니다. 30일 챌린지로 누구나 시작할 수 있습니다.")}
    ${faqItem("어떤 플랫폼 글쓰기에 적용되나요?", "블로그, SNS, 뉴스레터, 상세페이지, 이메일 등 모든 텍스트 기반 콘텐츠에 적용됩니다.")}
    ${faqItem("이 가이드는 어떤 형식인가요?", "웹에서 읽는 디지털 가이드입니다. 결제 후 1개월간 열람 가능하며, 계속 업데이트됩니다.")}
  </section>

  <section style="${sec("background:#fff;")}">
    ${bigTitle("이 가이드의 가치")}
    ${priceAnchor([
      { what: "카피라이팅 강의", price: "300,000원~", note: "일방적 강의" },
      { what: "글쓰기 코칭 1회", price: "200,000원~", note: "1시간" },
      { what: "마케팅 글쓰기 서적", price: "18,000원~", note: "업데이트 없음" },
    ], "1,000원", "10챕터 + 템플릿 30개 + 30일 챌린지 + 업데이트", "#b45309")}
    ${proofBanner(["✍️ 헤드라인 템플릿 30개", "🎯 훅 공식 6가지", "📅 30일 챌린지", "🔄 계속 업데이트"], "#fef3c7", "#b45309")}
  </section>

  <section style="${sec("background:#f9fafb;")}">
    ${crossSell("writing-formula", ALL_BOOKS_FOR_CROSSSELL)}
  </section>

  ${ctaBlock("✍️", "재능이 아니라 공식입니다.", "뇌에 박히는 글, 30일이면 쓸 수 있습니다.", "읽히고 팔리는 글쓰기 시스템.", "#b45309")}
</div>`;
}

/* ═══════════════════════════════════════════
   18. 돈 한푼 들이지 않고 SNS 계정 키우기
   ═══════════════════════════════════════════ */

export function buildSnsGrowth(): string {
  return `<!-- 📱 돈 한푼 들이지 않고 SNS 계정 키우기 — 아임웹 상세페이지 -->
<div class="dp-wrap" style="max-width:860px;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
${mobileStyles}
  <section style="${sec("background:linear-gradient(160deg,#ede9fe,#ddd6fe,#c4b5fd);")}">
    ${label("LIVING GUIDE · 살아있는 정보책")}
    <div style="font-size:64px;margin-bottom:16px;">📱</div>
    <h2 style="margin:0 0 16px;font-size:clamp(28px,5vw,44px);font-weight:800;line-height:1.3;color:#3b0764;">광고비 0원.<br>SNS만으로 사업을 키우는 시대.</h2>
    <p style="font-size:18px;color:#6d28d9;font-weight:600;margin:0 0 8px;">팔로워 수가 아니라 참여율이 답입니다.</p>
    ${subtitle("AIDA 프레임워크·해시태그 SEO·콘텐츠 캘린더 — 60일 무료 성장 전략")}
    ${statGrid([
      { num: "6", label: "대 플랫폼 완전 비교", color: "#6d28d9" },
      { num: "10", label: "챕터 + 실행 키트", color: "#6d28d9" },
      { num: "60일", label: "성장 로드맵", color: "#6d28d9" },
    ])}
    ${priceBadge("3,900원", "1,000원", "출시 특가")}
    ${urgencyBanner()}
  </section>

  <section style="${sec("background:#fff;")}">
    ${bigTitle("이런 고민, 하고 계시죠?")}
    ${beforeAfter(
      ["매일 올려도 팔로워가 안 늠", "광고 없이 노출이 안 됨", "어떤 콘텐츠를 올려야 할지 모름"],
      ["주 3회 게시로 꾸준히 성장", "알고리즘이 밀어주는 콘텐츠 설계", "콘텐츠 캘린더로 고민 제로"],
      "지금", "60일 후",
      "#fef2f2", "#f0fdf4"
    )}
    <p style="font-size:15px;color:#6b7280;margin-top:16px;"><strong style="color:#6d28d9;">참여율 8%인 1,000명 계정이 참여율 1%인 10,000명 계정보다 수익이 높습니다.</strong></p>
  </section>

  <section style="${sec("background:#3b0764;color:#fff;")}">
    <div style="font-size:13px;color:#c4b5fd;font-weight:600;letter-spacing:2px;margin-bottom:24px;">THE SNS GROWTH SYSTEM</div>
    <h2 style="font-size:clamp(24px,4vw,36px);font-weight:800;color:#fff;margin:0 0 24px;">0원 성장 5단계</h2>
    <div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center;">
      <div style="padding:16px 20px;background:rgba(196,181,253,.15);border:1px solid rgba(196,181,253,.3);border-radius:12px;"><span style="color:#c4b5fd;font-weight:700;">1</span> <span style="color:rgba(255,255,255,.8);">플랫폼 선택</span></div>
      <div style="padding:16px 20px;background:rgba(196,181,253,.15);border:1px solid rgba(196,181,253,.3);border-radius:12px;"><span style="color:#c4b5fd;font-weight:700;">2</span> <span style="color:rgba(255,255,255,.8);">콘텐츠 설계</span></div>
      <div style="padding:16px 20px;background:rgba(196,181,253,.15);border:1px solid rgba(196,181,253,.3);border-radius:12px;"><span style="color:#c4b5fd;font-weight:700;">3</span> <span style="color:rgba(255,255,255,.8);">소통 전략</span></div>
      <div style="padding:16px 20px;background:rgba(196,181,253,.15);border:1px solid rgba(196,181,253,.3);border-radius:12px;"><span style="color:#c4b5fd;font-weight:700;">4</span> <span style="color:rgba(255,255,255,.8);">분석·최적화</span></div>
      <div style="padding:16px 20px;background:rgba(196,181,253,.15);border:1px solid rgba(196,181,253,.3);border-radius:12px;"><span style="color:#c4b5fd;font-weight:700;">5</span> <span style="color:rgba(255,255,255,.8);">스케일업</span></div>
    </div>
  </section>

  <section style="${sec("background:#fff;")}">
    ${label("TABLE OF CONTENTS")}
    ${bigTitle("무엇을 알게 되나요?")}
    ${tocItem("01", "0원 SNS 성장의 원리: 참여율 > 팔로워 수", true, "#6d28d9")}
    ${tocItem("02", "나에게 맞는 플랫폼 찾기: 6대 SNS 완전 비교", true, "#6d28d9")}
    ${tocItem("03", "첫 100명의 진짜 팔로워 만들기", true, "#6d28d9")}
    ${tocItem("04", "AIDA로 만드는 중독성 콘텐츠", true, "#6d28d9")}
    ${tocItem("05", "해시태그·SEO·알고리즘: 무료 노출 극대화", false, "#6d28d9")}
    ${tocItem("06", "댓글·DM·스토리: 관계를 수익으로 바꾸는 소통", false, "#6d28d9")}
    ${tocItem("07", "콘텐츠 캘린더 시스템: 주 3회로 매일 성장", false, "#6d28d9")}
    ${tocItem("08", "협업과 크로스 프로모션: 팔로워 2배 전략", false, "#6d28d9")}
    ${tocItem("09", "분석과 최적화: 숫자로 보는 계정 건강 상태", false, "#6d28d9")}
    ${tocItem("10", "60일 SNS 성장 로드맵: 0→1,000 팔로워", true, "#6d28d9")}
    ${spacer(16)}
    <div style="font-size:13px;color:#9ca3af;">+ 부록: 플랫폼별 체크리스트 / 해시태그 리서치 템플릿 / 콘텐츠 캘린더 / 바이오 공식 / 60일 캘린더</div>
  </section>

  <section style="${sec("background:#f9fafb;")}">
    ${bigTitle("이런 분께 추천합니다")}
    ${checkList(["SNS로 사업을 시작하고 싶지만 광고비가 없는 분", "팔로워가 정체되어 돌파구를 찾는 분", "어떤 플랫폼을 선택해야 할지 모르는 분", "콘텐츠 아이디어가 매번 고갈되는 분"], "✅", "#ede9fe")}
    ${spacer(16)}
    ${checkList(["유료 광고로 빠르게 성장하고 싶은 분", "이미 팔로워 1만 명 이상인 분"], "🚫", "#fef2f2")}
    ${spacer(40)}
    ${bigTitle("자주 묻는 질문")}
    ${faqItem("진짜 돈이 하나도 안 드나요?", "네. 이 가이드의 모든 전략은 유료 광고 없이 오가닉 성장에 집중합니다.")}
    ${faqItem("어떤 플랫폼을 다루나요?", "인스타그램·유튜브·틱톡·스레드·링크드인·네이버 블로그까지 6대 플랫폼을 비교합니다.")}
    ${faqItem("이 가이드는 어떤 형식인가요?", "웹에서 읽는 디지털 가이드입니다. 결제 후 1개월간 열람 가능하며, 계속 업데이트됩니다.")}
  </section>

  <section style="${sec("background:#fff;")}">
    ${bigTitle("이 가이드의 가치")}
    ${priceAnchor([
      { what: "SNS 마케팅 컨설팅", price: "300,000원~", note: "1시간" },
      { what: "SNS 성장 온라인 강의", price: "199,000원~", note: "일방적 강의" },
      { what: "SNS 마케팅 서적", price: "18,000원~", note: "업데이트 없음" },
    ], "1,000원", "10챕터 + 60일 로드맵 + 실행 키트 + 업데이트", "#6d28d9")}
    ${proofBanner(["📱 6대 플랫폼 비교표", "📋 콘텐츠 캘린더 템플릿", "📅 60일 성장 로드맵", "🔄 계속 업데이트"], "#ede9fe", "#6d28d9")}
  </section>

  <section style="${sec("background:#f9fafb;")}">
    ${crossSell("sns-growth", ALL_BOOKS_FOR_CROSSSELL)}
  </section>

  ${ctaBlock("📱", "광고비 0원으로 시작하세요.", "60일이면 1,000명의 진짜 팔로워를 만들 수 있습니다.", "무료 SNS 성장 시스템.", "#6d28d9")}
</div>`;
}
