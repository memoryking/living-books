import GuideBook from "@/components/GuideBook";
import type {
  TopItem,
  ContentSection,
  UpdateLog,
} from "@/components/GuideBook";

export const metadata = {
  title: "한번 온 고객을 평생고객으로 만들기 — 본문 | 살아있는 정보책",
  description:
    "신규 확보보다 5배 저렴한 유지 전략. 서문 + 10개 챕터 + 부록 전문. 유지의 경제학, 충성도 심리학, 로열티 프로그램, 개인화, 능동형 서비스, 커뮤니티, 이탈 방지, 추천 엔진, 18개월 로드맵까지.",
};

const topItems: TopItem[] = [
  {
    number: 1,
    title: "고객을 지키는 것이 중요한 이유: 유지의 경제학",
    oneLiner: "유지율 5%만 올려도 수익이 25~95% 증가한다.",
    description:
      "생애가치(CLV) 계산법, 스타벅스 리워드 사례, 한국 디지털 환경에서의 유지 전략 우위. CLV 기반 의사결정 프레임워크로 확보 중심에서 유지 중심 사고로 전환합니다.",
    situation: "광고비는 계속 쓰는데 재구매가 일어나지 않을 때",
    action: "우리 사업의 CLV를 기본 공식으로 직접 계산해 보세요.",
    mission: "마케팅 예산을 '확보 60% + 유지 40%'로 재배분 계획을 세우세요.",
  },
  {
    number: 2,
    title: "고객이 떠나지 않는 심리학: 충성도의 4가지 기둥",
    oneLiner: "가격이 아니라 심리적 관성이 고객을 붙잡는다.",
    description:
      "인지적 편안함, 정체성 통합, 손실 회피, 신뢰 구축 — 4가지 심리 기둥과 자가 진단 체크리스트. 쿠팡 로켓배송, 오늘의집, 네이버 멤버십 한국 사례 분석.",
    situation: "더 좋은 제품인데 고객이 경쟁사를 계속 이용할 때",
    action: "4가지 기둥 자가 진단 체크리스트로 유지 전략의 구멍을 찾으세요.",
    mission: "가장 약한 기둥 1개를 골라 이번 달 안에 개선 액션을 실행하세요.",
  },
  {
    number: 3,
    title: "단발성 구매를 반복 구매로: 로열티 프로그램 설계",
    oneLiner: "포인트만 쌓는 것은 로열티가 아니다.",
    description:
      "명확한 가치 제안, 사용 편의성, 달성 가능한 보상, 다채널 통합, 개인화 — 5가지 핵심 요소. CJ ONE·배민·해피포인트 사례와 감정적 유대를 만드는 방법.",
    situation: "적립 프로그램을 만들었는데 아무도 사용하지 않을 때",
    action: "현재 로열티 프로그램을 5가지 핵심 요소 체크리스트로 점검하세요.",
    mission: "로열티 프로그램 설계 캔버스 8개 항목을 채워 프로그램을 재설계하세요.",
  },
  {
    number: 4,
    title: "고객이 '나를 알아주는구나'라고 느끼게 만드는 법",
    oneLiner: "개인화는 기술이 아니라 '당신을 기억하고 있다'는 느낌이다.",
    description:
      "5가지 데이터 유형(인구통계·행동·거래·선호도·상황)과 넷플릭스 개인화 철학. 1인 사업자도 가능한 저비용 5단계 개인화, 불쾌한 골짜기를 피하는 원칙.",
    situation: "모든 고객에게 같은 메시지를 보내고 있어 반응이 없을 때",
    action: "구글 시트에 고객 이름·구매 이력·특이사항 메모를 시작하세요.",
    mission: "고객을 3그룹(신규/재구매/VIP)으로 나눠 각각 다른 메시지를 보내세요.",
  },
  {
    number: 5,
    title: "고객이 떠나기 전에 문제를 해결하라: 능동형 서비스",
    oneLiner: "고객의 68%는 '무관심하다고 느껴서' 떠난다.",
    description:
      "선제적 알림, 구매 후 지원 타임라인, 문제 감지와 해결, 교육·가치 제공, 마일스톤 축하 — 5가지 실행 전략. 조기 경보 시스템 구축법과 한국 SaaS 사례.",
    situation: "CS 문의가 올 때만 대응하고, 고객이 조용히 사라질 때",
    action: "구매 후 3일째 '잘 받으셨나요?' 체크인 메시지를 보내세요.",
    mission: "구매 후 능동형 서비스 타임라인 5단계를 설계하고 자동화하세요.",
  },
  {
    number: 6,
    title: "고객을 팬으로, 팬을 전도사로: 커뮤니티 구축",
    oneLiner: "제품은 대체할 수 있지만 소속감은 대체할 수 없다.",
    description:
      "멀티채널 참여 프레임워크, 콘텐츠 생태계 4가지 유형(교육 40%·오락 25%·커뮤니티 25%·비하인드 10%), 4단계 등급 시스템. GoPro·당근마켓·오늘의집 사례.",
    situation: "팔로워는 많은데 진심으로 참여하는 팬이 없을 때",
    action: "카카오톡 오픈채팅방에 구매 고객 10명을 초대하세요.",
    mission: "주 2회 콘텐츠(월요일 팁 + 금요일 Q&A)를 4주간 운영해 보세요.",
  },
  {
    number: 7,
    title: "이탈의 경고 신호 7가지와 즉시 대응법",
    oneLiner: "이탈 고객의 91%는 떠나기 전에 불만을 말하지 않는다.",
    description:
      "사용량 감소, CS 급증, 결제 지연, 부정 피드백, 메시지 무반응, 경쟁사 언급, 데이터 내보내기 — 7가지 신호별 대응 프로토콜. 이탈 인터뷰 질문 세트와 종합 대시보드.",
    situation: "고객이 갑자기 사라지는데 이유를 모를 때",
    action: "최근 이탈 고객 3명에게 '어떤 점이 아쉬우셨는지' 전화하세요.",
    mission: "고객 건강 점수 산정 기준을 만들고 모니터링 대시보드를 구축하세요.",
  },
  {
    number: 8,
    title: "충성 고객이 새 고객을 데려오는 추천 엔진 만들기",
    oneLiner: "소비자의 92%가 광고보다 지인의 추천을 신뢰한다.",
    description:
      "양측 보상형·기부형·등급 연계형 3가지 추천 유형, 바이럴 루프 설계, NPS를 추천으로 전환하는 워크플로우. 토스·마켓컬리 사례와 리뷰 자산 활용법.",
    situation: "만족한 고객은 많은데 추천으로 이어지지 않을 때",
    action: "NPS 9~10점 고객에게 추천 링크와 양측 보상 혜택을 안내하세요.",
    mission: "추천 프로그램 설계 체크리스트 8개 항목을 채워 프로그램을 출시하세요.",
  },
  {
    number: 9,
    title: "모든 전략을 하나로 통합하기: 18개월 실행 로드맵",
    oneLiner: "완벽한 전략보다 단계적 실행이 중요하다.",
    description:
      "진단 → 기반 구축 → 핵심 전략 → 커뮤니티/추천 → 최적화, 5단계 프레임워크. SaaS 이탈률 15%→3% 전환 실사례, 팀 역할 정의, 측정 지표 체계, 예산 배분 가이드.",
    situation: "전략은 많은데 어디서부터 시작해야 할지 모를 때",
    action: "1단계 진단부터 시작 — 현재 이탈률을 측정하고 이탈 고객 5명을 인터뷰하세요.",
    mission: "5단계 프레임워크에 우리 사업의 일정과 담당자를 배정해 로드맵을 완성하세요.",
  },
  {
    number: 10,
    title: "미래에 대비하는 고객 유지 전략",
    oneLiner: "본질은 변하지 않지만 전달 방법은 빠르게 변한다.",
    description:
      "AI 초개인화, 프라이버시 우선 개인화, 몰입형 경험, 지속 가능한 참여 — 4가지 변화와 PDCA 개선 사이클. 혁신 예산 배분법과 10년 후에도 유효한 3가지 원칙.",
    situation: "현재 전략은 잘 돌아가는데 미래가 불안할 때",
    action: "마케팅 예산의 10~15%를 '미래 전략 실험 예산'으로 분리하세요.",
    mission: "AI 도구 하나를 선택해 소규모 고객 그룹(5~10%)에서 4주간 실험하세요.",
  },
];

const sections: ContentSection[] = [
  {
    id: "preface",
    title: "들어가며 — 신규 고객 1명 확보 비용으로 기존 고객 5명을 지킬 수 있습니다",
    body: (
      <>
        <p>사업을 시작하면 누구나 &quot;어떻게 하면 고객을 더 많이 모을 수 있을까?&quot;에 집중합니다. 그런데 한 번 찾아온 고객이 다시 돌아오는지는 확인하지 않습니다. 이것은 <strong>밑 빠진 독에 물 붓기</strong>입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">핵심 수치 5가지</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>신규 확보 vs 유지 비용</strong>: 5:1 (Bain &amp; Company)</li>
          <li><strong>유지율 5% 증가 시 수익 변화</strong>: +25~95%</li>
          <li><strong>충성 고객 지출 증가율</strong>: 67% 더 높음 (Edelman)</li>
          <li><strong>고객이 떠나는 1순위 이유</strong>: 무관심 68% (Gartner)</li>
          <li><strong>기존 고객 재구매 확률</strong>: 60~70% (Marketing Metrics)</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">이 책의 구성</h3>
        <p><strong>1~2장 (왜)</strong> — 유지의 경제학과 심리학.</p>
        <p><strong>3~6장 (무엇을)</strong> — 로열티, 개인화, 능동형 서비스, 커뮤니티.</p>
        <p><strong>7~8장 (위기 관리)</strong> — 이탈 방지 + 추천 엔진.</p>
        <p><strong>9~10장 (실행과 미래)</strong> — 18개월 로드맵 + AI 시대 대비.</p>
        <p><strong>부록</strong> — 바로 복사해서 쓸 수 있는 워크시트·체크리스트·템플릿.</p>

        <blockquote className="border-l-4 border-emerald-400 pl-4 py-2 my-4 bg-emerald-50 dark:bg-emerald-950 rounded-r-lg">
          <p><strong>서문 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>신규 고객 확보 비용은 기존 고객 유지 비용의 5배다.</li>
            <li>한국의 높은 디지털 침투율은 유지 전략에 최적의 환경이다.</li>
            <li>지금 이 순간에도 한 번 왔다 간 고객이 경쟁사로 향하고 있다.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch1",
    title: "Ch.1 고객을 지키는 것이 중요한 이유: 유지의 경제학",
    body: (
      <>
        <p>카페 김 대표는 인스타그램 광고에 월 200만 원을 쓰고, 신규 고객 100명을 유치합니다. 그중 20명이 주 1회 재방문하면 1년간 고객 1명의 <strong>생애가치(CLV)</strong>는 312,000원. 첫 구매의 52배입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">유지율 5%가 만드는 4가지 수익 엔진</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>구매 빈도 증가</strong> — 신뢰가 쌓이면 더 자주 삽니다</li>
          <li><strong>객단가 상승</strong> — 익숙해지면 더 비싼 상품도 시도합니다</li>
          <li><strong>운영 비용 감소</strong> — 시스템을 아는 고객은 문의가 줄어듭니다</li>
          <li><strong>추천 효과</strong> — 만족한 고객은 주변에 이야기합니다</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">CLV 계산 공식</h3>
        <p><strong>CLV = 평균 구매 금액 x 연간 구매 횟수 x 평균 유지 기간(년)</strong></p>
        <p>건강기능식품 예시: 50,000원 x 4회 x 5년 = <strong>1,000,000원</strong>. 확보 비용 3만 원 대비 ROI 3,233%.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">한국에서 유지 전략이 특히 효과적인 3가지 이유</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>높은 디지털 침투율</strong> — 카카오톡·네이버·배달앱 접점이 이미 디지털화</li>
          <li><strong>리뷰 문화의 힘</strong> — 충성 고객 1명의 입소문이 광고 10회분</li>
          <li><strong>구독 경제의 성장</strong> — 쿠팡 로켓와우, 네이버 멤버십 등 유지형 소비에 익숙</li>
        </ul>

        <blockquote className="border-l-4 border-emerald-400 pl-4 py-2 my-4 bg-emerald-50 dark:bg-emerald-950 rounded-r-lg">
          <p><strong>1챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>첫 구매 금액이 아니라 생애가치(CLV)로 고객을 바라보라.</li>
            <li>신규 10명 모으기보다 기존 2명의 재구매가 수익에 더 크다.</li>
            <li><strong>오늘부터 실행</strong>: CLV 공식에 우리 사업 숫자를 넣어 계산하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch2",
    title: "Ch.2 고객이 떠나지 않는 심리학: 충성도의 4가지 기둥",
    body: (
      <>
        <p>고객이 특정 브랜드에 머무는 진짜 이유는 품질이나 가격이 아닙니다. 가격이 조금 비싸도, 더 좋은 대안이 있어도 떠나지 않는 데는 <strong>4가지 심리적 기둥</strong>이 작동합니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">기둥 1: 인지적 편안함 (Cognitive Ease)</h3>
        <p>뇌는 익숙한 것을 선호하도록 설계되어 있습니다. 새 브랜드를 탐색하는 것은 인지적 노력을 요구하므로, 이미 경험한 브랜드가 기본값이 됩니다.</p>
        <p><strong>실전</strong>: 주문 과정 단순화, &quot;이전 주문 다시 하기&quot; 기능 필수.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">기둥 2: 정체성 통합 (Identity Integration)</h3>
        <p>&quot;나는 애플 유저야&quot;라고 말하는 순간, 브랜드는 자기 표현의 도구가 됩니다. 명확한 가치관, 커뮤니티 소속감이 핵심.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">기둥 3: 손실 회피 (Loss Aversion)</h3>
        <p>같은 크기의 손실이 이득보다 <strong>2배 더 강하게</strong> 느껴집니다. &quot;적립 포인트 12,500원이 30일 후 소멸&quot; — 이것이 네이버 멤버십, 아마존 프라임의 핵심 설계.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">기둥 4: 신뢰 구축 (Trust Building)</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>일관성</strong> — 매번 같은 품질, 같은 서비스</li>
          <li><strong>투명성</strong> — 문제가 생기면 숨기지 말고 먼저 알림</li>
          <li><strong>전문성</strong> — 관련 지식과 정보 공유</li>
          <li><strong>공감</strong> — 고객 상황을 이해하고 있음을 표현</li>
          <li><strong>약속 이행</strong> — 말한 것은 반드시 지킴</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">자가 진단 체크리스트</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li>우리 서비스는 재이용이 쉽고 편한가? (인지적 편안함)</li>
          <li>고객이 &quot;나는 OO 유저&quot;라고 말하는가? (정체성 통합)</li>
          <li>떠날 때 잃는 것이 명확한가? (손실 회피)</li>
          <li>문제 발생 시 고객이 우리를 먼저 찾는가? (신뢰)</li>
        </ul>

        <blockquote className="border-l-4 border-emerald-400 pl-4 py-2 my-4 bg-emerald-50 dark:bg-emerald-950 rounded-r-lg">
          <p><strong>2챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>4가지 기둥이 결합되면 거의 무적의 충성도가 만들어진다.</li>
            <li>4가지 중 2가지 이하라면 유지 전략에 심각한 구멍이 있다.</li>
            <li><strong>오늘부터 실행</strong>: 자가 진단 체크리스트로 가장 약한 기둥을 찾으세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch3",
    title: "Ch.3 단발성 구매를 반복 구매로: 로열티 프로그램 설계",
    body: (
      <>
        <p>소비자의 54%가 로열티 프로그램에 가입하고도 한 번도 사용하지 않았습니다. 문제는 프로그램 자체가 아니라 <strong>설계</strong>입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">효과적인 로열티 프로그램의 5가지 핵심 요소</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>명확한 가치 제안</strong> — 혜택이 3초 안에 이해되어야 합니다</li>
          <li><strong>사용 편의성</strong> — 가입 30초 이내, 적립/사용 자동화</li>
          <li><strong>달성 가능한 보상</strong> — 첫 보상까지 3회 구매 이내 (목표 기울기 효과)</li>
          <li><strong>다채널 통합</strong> — 오프라인·웹·카카오톡·배달앱 일관 작동</li>
          <li><strong>개인화</strong> — 이름 호칭, 구매 이력 기반 추천, 행동 예측 혜택</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">감정적 유대: 포인트를 넘어서</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>서프라이즈 보상</strong> — 예고 없이 &quot;VIP 감사 선물&quot;</li>
          <li><strong>경험 보상</strong> — 포인트 대신 &quot;신제품 먼저 체험&quot;</li>
          <li><strong>사회적 보상</strong> — &quot;OO님의 구매로 어린이 급식 1끼 후원&quot;</li>
          <li><strong>인정 보상</strong> — &quot;올해 가장 사랑받은 VIP 고객&quot; 타이틀</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">1인 사업자를 위한 저비용 통합</h3>
        <p><strong>카카오톡 채널 + 구글 스프레드시트</strong>로 시작하세요. 고객 이름·구매 내역·적립 현황을 기록하고, 카카오톡으로 맞춤 쿠폰을 보내는 것만으로도 충분합니다.</p>

        <blockquote className="border-l-4 border-emerald-400 pl-4 py-2 my-4 bg-emerald-50 dark:bg-emerald-950 rounded-r-lg">
          <p><strong>3챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>성공하는 로열티 프로그램은 &quot;포인트를 쌓으세요&quot;가 아니라 &quot;함께하면 좋은 일이 있어요&quot;다.</li>
            <li>12칸 중 2칸 미리 채운 스탬프 카드가 10칸짜리보다 완성률 82% 높다.</li>
            <li><strong>오늘부터 실행</strong>: 로열티 프로그램 설계 캔버스 8개 항목을 채우세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch4",
    title: "Ch.4 고객이 '나를 알아주는구나'라고 느끼게 만드는 법",
    body: (
      <>
        <p>소비자의 71%가 개인화된 경험을 기대하며, 76%는 충족되지 않으면 불만을 느낍니다. 개인화의 본질은 AI가 아니라 <strong>&quot;당신을 한 명의 사람으로 대하고 있습니다&quot;</strong>라는 느낌입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">5가지 데이터 유형</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>인구통계</strong> — 나이, 성별, 지역 &rarr; 세그먼트 분류, 톤 조절</li>
          <li><strong>행동</strong> — 방문 패턴, 클릭 경로 &rarr; 관심사 파악, 이탈 예측</li>
          <li><strong>거래</strong> — 구매 이력, 주기 &rarr; CLV 계산, 재구매 시점 예측</li>
          <li><strong>선호도</strong> — 선호 채널, 관심 카테고리 &rarr; 맞춤 추천</li>
          <li><strong>상황</strong> — 기기, 시간대, 날씨 &rarr; 실시간 맞춤 경험</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">1인 사업자도 가능한 저비용 개인화 5단계</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>고객 노트</strong> — 구글 시트에 이름·이력·특이사항 기록 (0원)</li>
          <li><strong>구매 주기 파악</strong> — 3개월 데이터로 패턴 발견 (0원)</li>
          <li><strong>생일/기념일 자동 발송</strong> — 스티비 or 카카오톡 채널 (월 1~3만 원)</li>
          <li><strong>구매 후 맞춤 후속 조치</strong> — &quot;잘 받으셨나요?&quot; 한마디로 재구매율 30% 상승 (0원)</li>
          <li><strong>세그먼트 기반 콘텐츠</strong> — 신규/재구매/VIP 3그룹 분리 발송 (월 0~5만 원)</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">개인화의 경계: 불쾌한 골짜기</h3>
        <p>고객이 &quot;어떻게 그걸 알았지?&quot;라고 불편하게 느끼면 역효과. 고객이 직접 제공한 데이터를 활용하고, 수집 범위를 최소화하세요.</p>

        <blockquote className="border-l-4 border-emerald-400 pl-4 py-2 my-4 bg-emerald-50 dark:bg-emerald-950 rounded-r-lg">
          <p><strong>4챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>개인화의 목표는 &quot;모든 것을 안다&quot;가 아니라 &quot;필요를 이해한다&quot;이다.</li>
            <li>넷플릭스 추천이 전체 시청의 80%를 만든다 — 작은 사업도 원리는 같다.</li>
            <li><strong>오늘부터 실행</strong>: 구글 시트에 고객 노트를 만들고 메모를 시작하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch5",
    title: "Ch.5 고객이 떠나기 전에 문제를 해결하라: 능동형 서비스",
    body: (
      <>
        <p>고객의 68%가 &quot;무관심하다고 느껴서&quot; 떠납니다. <strong>고객이 연락하기 전에 먼저 연락하는 기업이 고객을 지킵니다.</strong></p>

        <h3 className="text-xl font-bold mt-8 mb-4">반응형 vs 능동형</h3>
        <p><strong>반응형</strong>: 고객이 문제 제기 &rarr; 불만 발생 후 대응 = 소화기.</p>
        <p><strong>능동형</strong>: 기업이 문제 감지 &rarr; 불만 발생 전 대응 = 화재 예방 시스템.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">5가지 실행 전략</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>선제적 상태 알림</strong> — 배송·결제·포인트 소멸 등 고객이 궁금해하기 전에 알림</li>
          <li><strong>구매 후 선제적 지원</strong> — 직후 감사 &rarr; 3일 후 만족도 &rarr; 2주 후 팁 &rarr; 1개월 후 니즈 파악 &rarr; 재구매 전 유도</li>
          <li><strong>문제 감지와 선제적 해결</strong> — 나쁜 소식은 빠르게, 해결책과 함께</li>
          <li><strong>교육과 가치 제공</strong> — 제품 사용법, 업계 트렌드, 활용 팁 정기 제공</li>
          <li><strong>마일스톤 축하</strong> — 첫 구매 기념일, 10번째 주문, 누적 100만 원 등</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">조기 경보 시스템 핵심 지표</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li>구매 주기 50% 이상 지연 &rarr; 체크인 메시지</li>
          <li>2주 이상 미접속 &rarr; 맞춤 콘텐츠 발송</li>
          <li>CS 문의 월 3회 이상 &rarr; 담당자 배정, 직접 통화</li>
          <li>이메일 열람률 10% 미만 &rarr; 채널 변경 또는 콘텐츠 개편</li>
        </ul>

        <blockquote className="border-l-4 border-emerald-400 pl-4 py-2 my-4 bg-emerald-50 dark:bg-emerald-950 rounded-r-lg">
          <p><strong>5챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>능동형 서비스의 본질은 비용이 아니라 관심이다.</li>
            <li>한국 SaaS 기업이 능동형 서비스 도입 후 이탈률 8% &rarr; 3.2%로 감소.</li>
            <li><strong>오늘부터 실행</strong>: 구매 후 3일째 체크인 메시지 자동화를 설정하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch6",
    title: "Ch.6 고객을 팬으로, 팬을 전도사로: 커뮤니티 구축",
    body: (
      <>
        <p>애플 유저에게 &quot;삼성으로 바꿀 생각 없어?&quot;라고 물으면 &quot;왜 바꿔?&quot;라고 답합니다. 이것은 제품 충성도가 아니라 <strong>정체성과 커뮤니티에 대한 충성도</strong>입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">콘텐츠 생태계 4가지 유형</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>교육 콘텐츠 (40%)</strong> — 사용법, 팁, 튜토리얼, FAQ</li>
          <li><strong>오락 콘텐츠 (25%)</strong> — 밈, 챌린지, 퀴즈, 투표</li>
          <li><strong>커뮤니티 콘텐츠 (25%)</strong> — 고객 후기, 인터뷰, 경험 공유</li>
          <li><strong>비하인드 콘텐츠 (10%)</strong> — 제작 과정, 팀 소개, 실패담</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">4단계 등급 시스템</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>관찰자 (70~80%)</strong> — 부담 없는 콘텐츠 소비, 이모지 반응으로 참여 유도</li>
          <li><strong>기여자 (15~25%)</strong> — 댓글·후기·질문, 즉각적 인정과 소소한 보상</li>
          <li><strong>리더 (3~5%)</strong> — 공식 역할 부여(서포터즈), 독점 경험 제공</li>
          <li><strong>옹호자 (1~2%)</strong> — 파트너로 대우, 인정과 관계가 최고의 보상</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">1인 사업자 미니 커뮤니티 시작법</h3>
        <p><strong>Day 1</strong>: 카카오톡 오픈채팅방에 구매 고객 10명 초대.</p>
        <p><strong>Week 1~4</strong>: 주 2회 콘텐츠 (월요일 팁, 금요일 Q&amp;A).</p>
        <p><strong>Month 2</strong>: &quot;사용 후기 인증 &rarr; 할인&quot; 이벤트.</p>
        <p><strong>Month 3~6</strong>: 적극 참여자 2~3명에게 서포터즈 제안.</p>

        <blockquote className="border-l-4 border-emerald-400 pl-4 py-2 my-4 bg-emerald-50 dark:bg-emerald-950 rounded-r-lg">
          <p><strong>6챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>커뮤니티의 크기보다 깊이가 중요하다 — 팔로워 10,000명보다 참여하는 100명.</li>
            <li>GoPro는 고객 영상을 핵심 마케팅 자산으로 활용해 유튜브 구독자 1,000만 달성.</li>
            <li><strong>오늘부터 실행</strong>: 오픈채팅방을 개설하고 첫 10명을 초대하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch7",
    title: "Ch.7 이탈의 경고 신호 7가지와 즉시 대응법",
    body: (
      <>
        <p>이탈 고객의 <strong>91%는 떠나기 전에 한 번도 불만을 표현하지 않습니다.</strong> 진짜 위험한 것은 조용히 사라지는 고객입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">7가지 경고 신호</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>사용량/방문 빈도 감소</strong> &rarr; 개인화 메시지 + 복귀 인센티브</li>
          <li><strong>CS 문의 급증</strong> &rarr; 전담 담당자 배정 + 근본 원인 해결</li>
          <li><strong>결제 지연/다운그레이드</strong> &rarr; 맞춤 플랜 제안 + 한시적 혜택</li>
          <li><strong>부정적 피드백</strong> &rarr; 24시간 내 개인 연락 + 해결책 제시</li>
          <li><strong>이메일/메시지 무반응</strong> &rarr; 발송 빈도 조정 + 채널 변경</li>
          <li><strong>경쟁사 언급</strong> &rarr; 우리만의 강점 부각 + 피드백 루프</li>
          <li><strong>데이터 내보내기/계정 변경</strong> &rarr; 고급 담당자 즉시 연락</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">서비스 패러독스</h3>
        <p>불만을 제기하고 <strong>만족스럽게 해결된 고객의 70%가 재구매</strong>합니다. 이는 불만이 없었던 고객의 재구매율보다도 높습니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">고객 건강 점수</h3>
        <p>사용 빈도(30%) + 구매 금액 추이(20%) + CS 문의(15%) + 피드백 점수(15%) + 커뮤니케이션 반응률(10%) + 계정 활동(10%)</p>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>80 이상</strong>: 건강 &rarr; 유지 및 확장</li>
          <li><strong>50~79</strong>: 주의 &rarr; 선제적 개입</li>
          <li><strong>50 미만</strong>: 위험 &rarr; 즉시 대응</li>
        </ul>

        <blockquote className="border-l-4 border-emerald-400 pl-4 py-2 my-4 bg-emerald-50 dark:bg-emerald-950 rounded-r-lg">
          <p><strong>7챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>이탈 방지의 핵심은 &quot;붙잡는 것&quot;이 아니라 &quot;떠나고 싶지 않게 만드는 것&quot;이다.</li>
            <li>떠나더라도 이탈 인터뷰로 배우면 다음 고객은 지킬 수 있다.</li>
            <li><strong>오늘부터 실행</strong>: 이탈 고객 3명에게 전화하고, 건강 점수 기준을 만드세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch8",
    title: "Ch.8 충성 고객이 새 고객을 데려오는 추천 엔진 만들기",
    body: (
      <>
        <p>소비자의 92%가 광고보다 지인의 추천을 신뢰합니다. 추천으로 온 고객의 생애가치는 일반 고객보다 <strong>16~25% 높습니다.</strong></p>

        <h3 className="text-xl font-bold mt-8 mb-4">3가지 추천 유형</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>양측 보상형</strong> — &quot;초대하면 둘 다 5,000원&quot; (토스 사례: 즉각적+간편+공평)</li>
          <li><strong>기부형</strong> — &quot;초대 1명 = 어린이 급식 1끼 후원&quot; (공유율 2~3배 높음)</li>
          <li><strong>등급/포인트 연계형</strong> — 1명=5% 쿠폰, 3명=무료 이용, 10명=연간 이용권</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">바이럴 루프 강화 5요소</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>공유 순간 포착</strong> — 만족 직후에 추천 버튼 노출</li>
          <li><strong>공유 마찰 최소화</strong> — 클릭 한 번으로 카카오톡 공유</li>
          <li><strong>맞춤 메시지</strong> — &quot;OO이 추천하는 이유&quot; 개인화</li>
          <li><strong>진행 상황 가시화</strong> — &quot;3명 중 2명 완료! 1명 더 초대하면 혜택&quot;</li>
          <li><strong>소셜 증거</strong> — &quot;12,450명이 친구에게 추천했어요&quot;</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">NPS &rarr; 추천 전환 워크플로우</h3>
        <p><strong>9~10점</strong>: 즉시 추천 링크 + 보상 안내. <strong>7~8점</strong>: 피드백 수집 &rarr; 개선 &rarr; 재조사. <strong>6점 이하</strong>: 이탈 방지 프로토콜 가동.</p>

        <blockquote className="border-l-4 border-emerald-400 pl-4 py-2 my-4 bg-emerald-50 dark:bg-emerald-950 rounded-r-lg">
          <p><strong>8챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>최고의 마케팅은 광고가 아니라 만족한 고객의 한마디다.</li>
            <li>마켓컬리 추천 유입 고객의 재구매율이 일반 대비 1.4배, 이탈률 30% 낮음.</li>
            <li><strong>오늘부터 실행</strong>: 추천 프로그램 설계 체크리스트 8개 항목을 채우세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch9",
    title: "Ch.9 모든 전략을 하나로 통합하기: 18개월 실행 로드맵",
    body: (
      <>
        <p>전략이 많다는 것은 좋은 일이지만 &quot;뭐부터 해야 하지?&quot;라는 마비를 일으킬 수 있습니다. 18개월이면 경쟁사가 따라올 수 없는 <strong>고객 유지 시스템</strong>을 만들 수 있습니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">실사례: SaaS 이탈률 15% &rarr; 3%</h3>
        <p>B2B SaaS C사(직원 45명, 고객사 800개)가 18개월간 단계적으로 실행한 결과:</p>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li>이탈률: 15% &rarr; 3% | CLV: 1,200만 &rarr; 2,800만 원 (+133%)</li>
          <li>추천 유입: 5% &rarr; 28% | 연매출: 12억 &rarr; 31억 원</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">5단계 구현 프레임워크</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>진단 (1~2개월)</strong> — 이탈률 측정, 이탈 인터뷰 20건, CLV 계산, 고객 여정 매핑</li>
          <li><strong>기반 구축 (3~5개월)</strong> — 조기 경보 대시보드, 고객 건강 점수, 온보딩 재설계</li>
          <li><strong>핵심 전략 (6~10개월)</strong> — 로열티 프로그램, 개인화 1단계, 능동형 서비스 가동</li>
          <li><strong>커뮤니티와 추천 (11~14개월)</strong> — 커뮤니티 개설, 추천 엔진 출시, 리더 발굴</li>
          <li><strong>최적화와 확장 (15~18개월)</strong> — ROI 분석, AI/자동화 도입, 차기 로드맵 수립</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">측정 지표 체계</h3>
        <p><strong>1차 (비즈니스)</strong>: 이탈률, CLV, NPS, 매출 유지율.</p>
        <p><strong>2차 (운영)</strong>: 재구매율, 건강 점수 분포, 로열티 참여율, 추천 전환율.</p>
        <p><strong>3차 (선행)</strong>: 온보딩 완료율, 열람률, 커뮤니티 활동, CS 만족도.</p>

        <blockquote className="border-l-4 border-emerald-400 pl-4 py-2 my-4 bg-emerald-50 dark:bg-emerald-950 rounded-r-lg">
          <p><strong>9챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>완벽한 전략보다 단계적 실행이 중요하다 — 1단계부터 차근차근.</li>
            <li>1인 사업자는 구글 시트 + 카카오톡 + 스티비면 전 단계 커버 가능.</li>
            <li><strong>오늘부터 실행</strong>: 현재 이탈률을 측정하고 이탈 고객 5명을 인터뷰하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch10",
    title: "Ch.10 미래에 대비하는 고객 유지 전략",
    body: (
      <>
        <p>고객 유지의 본질은 변하지 않습니다. <strong>&quot;이 브랜드가 나를 이해하고 신경 쓴다&quot;는 느낌.</strong> 하지만 전달 방법은 빠르게 변하고 있습니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">앞으로 3~5년의 4가지 변화</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>AI 초개인화</strong> — 각 고객에게 완전히 다른 경험 자체를 제공. 과거 이력 기억하는 AI 상담원, 동적 가격/혜택, 예측적 추천.</li>
          <li><strong>프라이버시 우선 개인화</strong> — 써드파티 쿠키 소멸, 제로파티 데이터(고객 자발 제공) 중심. &quot;가치 교환&quot;을 명확히.</li>
          <li><strong>몰입형 경험</strong> — AR 제품 체험, 가상 매장, 라이브 커머스 양방향 소통.</li>
          <li><strong>지속 가능한 참여</strong> — 환경·사회적 가치 연계. 포인트 기부, 공병 수거, 다회용기.</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">PDCA 개선 사이클</h3>
        <p><strong>Plan</strong> 분기별 목표 &rarr; <strong>Do</strong> 전략 실행 + 데이터 수집 &rarr; <strong>Check</strong> 핵심 지표 리뷰 &rarr; <strong>Act</strong> 성공 확대/실패 수정 &rarr; 반복.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">10년 후에도 유효한 3가지 원칙</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>고객의 성공이 우리의 성공이다</strong> — 제품이 아니라 결과를 돕는 것</li>
          <li><strong>데이터는 도구이지 목적이 아니다</strong> — 더 나은 경험을 만드는 것이 목적</li>
          <li><strong>관계는 상호적이다</strong> — 가치를 주고 받는 건강한 순환 구조</li>
        </ol>

        <blockquote className="border-l-4 border-emerald-400 pl-4 py-2 my-4 bg-emerald-50 dark:bg-emerald-950 rounded-r-lg">
          <p><strong>10챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>미래 대비 = 현재 기본을 탄탄하게 + 작은 실험을 꾸준히.</li>
            <li>혁신 예산 10~15%를 분리하고, 2~4주 실험 후 데이터로 판단.</li>
            <li><strong>오늘부터 실행</strong>: AI 도구 하나를 골라 소규모 그룹에서 4주간 실험하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "appendix",
    title: "부록 — 복사해 쓰는 고객 유지 실행 키트",
    body: (
      <>
        <p>이 부록의 모든 워크시트·체크리스트·템플릿은 그대로 복사해서 사용하셔도, 사업에 맞게 수정하셔도 좋습니다. <strong>빈칸 하나라도 채우면 어제보다 나은 유지 전략이 시작됩니다.</strong></p>

        <h3 className="text-xl font-bold mt-8 mb-4">도구 모음 한눈에 보기</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>CLV 계산 워크시트</strong> — 기본 공식 + 세그먼트별 비교 + 투자 판단</li>
          <li><strong>로열티 프로그램 설계 체크리스트</strong> — 적립 구조, 보상 메뉴, 등급 체계</li>
          <li><strong>이탈 경고 모니터링 대시보드</strong> — 건강 점수 산정 + 상태별 프로토콜</li>
          <li><strong>고객 여정 매핑 템플릿</strong> — 인지~옹호 7단계별 경험 설계</li>
          <li><strong>능동형 서비스 프로토콜 가이드</strong> — 상황별 스크립트 + 타임라인</li>
          <li><strong>추천 프로그램 설계 템플릿</strong> — 보상 구조, 메시지, 성과 측정</li>
          <li><strong>18개월 로드맵</strong> — 5개 Phase별 체크리스트</li>
          <li><strong>FAQ 10선</strong> — 매출 규모, 이탈률 기준, B2B 적용, 윈백 등</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">FAQ 하이라이트</h3>
        <p><strong>Q. 가장 먼저 해야 할 한 가지?</strong> 이탈 고객 인터뷰. 떠난 고객 5명에게만 물어봐도 원인이 보입니다.</p>
        <p><strong>Q. 할인 쿠폰 자주 주면 역효과?</strong> 맞습니다. 할인은 20% 이하로 제한, 나머지는 경험적·감정적·편의적 보상으로.</p>
        <p><strong>Q. 이미 떠난 고객을 다시?</strong> 윈백 캠페인으로 5~15% 복귀 가능. 핵심은 떠난 이유가 해결되었음을 보여주는 것.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">오늘 할 수 있는 3가지</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>CLV 계산 (10분)</strong> — 고객 한 명의 진짜 가치를 알면 모든 의사결정이 달라집니다.</li>
          <li><strong>이탈 고객 1명에게 전화 (15분)</strong> — &quot;어떤 점이 아쉬우셨는지 듣고 싶습니다.&quot;</li>
          <li><strong>최근 구매 고객 3명에게 메시지 (5분)</strong> — &quot;잘 받으셨나요? 궁금한 점 있으시면 편하게 물어보세요.&quot;</li>
        </ol>

        <blockquote className="border-l-4 border-emerald-400 pl-4 py-2 my-4 bg-emerald-50 dark:bg-emerald-950 rounded-r-lg">
          <p><strong>부록 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>모든 템플릿은 노션·구글 독스·종이에 바로 옮겨 쓸 수 있다.</li>
            <li>완벽하게 채우려 하지 마세요 — 하나씩, 조금씩, 꾸준히가 최고의 전략.</li>
            <li>고객 유지는 시스템이 아니라 <strong>고객을 한 사람의 사람으로 대하겠다는 결심</strong>에서 시작된다.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
];

const updateLogs: UpdateLog[] = [
  {
    version: 1,
    date: "2026-09-09",
    changes: ["초판 발행"],
  },
];

export default function CustomerRetentionReadPage() {
  return (
    <GuideBook
      bookId="customer-retention"
      title="한번 온 고객을 평생고객으로 만들기"
      emoji="🤝"
      subtitle="신규 확보보다 5배 저렴한 유지 전략 — 이탈 방지부터 추천 엔진까지"
      topItems={topItems}
      sections={sections}
      updateLogs={updateLogs}
      currentVersion={1}
    />
  );
}
