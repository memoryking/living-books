import GuideBook from "@/components/GuideBook";
import type {
  TopItem,
  ContentSection,
  UpdateLog,
} from "@/components/GuideBook";

export const metadata = {
  title:
    "수익성을 극대화하는 비즈니스 모델 설계법 — 본문 | 살아있는 정보책",
  description:
    "구독·SaaS·마켓플레이스 — 돈을 버는 구조를 설계하는 완전 가이드. 서문 + 10개 챕터 + 부록 전문. 수익 모델 7가지, 가치 제안 캔버스, 가격 전략, 린 운영, MVP, 피벗, KPI 대시보드, AI 시대 전략, 90일 로드맵까지.",
};

const topItems: TopItem[] = [
  {
    number: 1,
    title: "비즈니스 모델이란 무엇인가 — 돈을 버는 구조의 설계도",
    oneLiner:
      "아이디어의 질이 아니라 비즈니스 모델의 설계가 사업의 성패를 결정한다.",
    description:
      "BMC 9개 블록, 가치 창출·전달·포착·방어 4요소, 비즈니스 모델 3세대(파이프라인→플랫폼→생태계), 한국 시장 5대 특성, 자가 진단 체크리스트.",
    situation: "좋은 아이디어인데 왜 돈이 안 되는지 모르겠을 때",
    action:
      "비즈니스 모델 캔버스 9개 블록을 빈칸 없이 한 장으로 채워보세요.",
    mission:
      "자가 진단 5문항에 답하고, 3개 이상 못 채운 블록을 이 책으로 보완하세요.",
  },
  {
    number: 2,
    title: "7가지 수익 모델 비교 — 구독·프리미엄·마켓플레이스·SaaS·하이브리드",
    oneLiner:
      "같은 제품이라도 수익 모델에 따라 기업 가치가 10배 이상 달라진다.",
    description:
      "구독·프리미엄·마켓플레이스·라이선스·광고·SaaS·하이브리드 7가지 모델 비교표, 의사결정 매트릭스 5문항, Dollar Shave Club 사례.",
    situation: "매출은 있는데 남는 게 없거나, 수익 모델을 못 정했을 때",
    action:
      "7가지 모델 중 핵심 1개를 선택하고 보조 수익원 1~2개를 추가 검토하세요.",
    mission:
      "현재 모델의 장점·한계를 적고, 대안 모델 전환 시 예상 효과를 시뮬레이션하세요.",
  },
  {
    number: 3,
    title: "가치 제안 캔버스 — 고객이 지갑을 여는 진짜 이유 찾기",
    oneLiner:
      "고객이 돈을 내는 이유는 제품 기능이 아니라 자신의 문제가 해결되기 때문이다.",
    description:
      "가치 제안 캔버스(고객 프로필 3요소 + 가치 맵 3요소), 핏(Fit) 확인법, Uber·Airbnb·배달의민족·무신사 사례, 경쟁 분석 매트릭스, A/B 테스트 검증.",
    situation:
      "제품 기능은 많은데 고객이 왜 사야 하는지 한마디로 설명이 안 될 때",
    action:
      "고객의 할 일·고통·이득을 각 3개씩 적고, 가치 맵과 매칭하세요.",
    mission:
      "'우리는 (타겟)에게 (핵심 가치)를 제공하여 (고통)을 해결합니다' 한 문장을 완성하세요.",
  },
  {
    number: 4,
    title: "가격 전략의 과학 — 최적 가격을 찾는 5가지 방법",
    oneLiner:
      "가격을 1% 올리면 영업이익이 평균 11% 증가한다 — 가격은 수익성의 가장 강력한 레버다.",
    description:
      "원가 기반·가치 기반·경쟁 기반·심리적·동적 가격 5가지 방법, Van Westendorp 분석, 심리적 기법 5종(끝자리·앵커링·디코이·번들·제로 가격), SaaS 3단계 요금제.",
    situation: "가격을 감으로 정하고 있거나, 가격 인상이 두려울 때",
    action:
      "5가지 방법으로 각각 가격을 산출한 뒤 최종 가격 후보를 정하세요.",
    mission:
      "랜딩 페이지 2개(가격만 다른)를 만들어 A/B 테스트로 최적 가격을 검증하세요.",
  },
  {
    number: 5,
    title: "린 운영과 비용 구조 — 수익성을 극대화하는 비용 관리",
    oneLiner:
      "린 운영은 무조건 아끼는 것이 아니라 가치 창출에 집중하고 낭비를 제거하는 것이다.",
    description:
      "고정비 vs 변동비 구조, 7가지 낭비 제거, Skills Mapping·Cross-Training, OKR vs KPI, 번레이트·런웨이 계산, SOP 구축, JIT 원칙, 클라우드 비용 최적화.",
    situation: "매출은 느는데 이익이 안 남거나, 비용 구조가 파악이 안 될 때",
    action:
      "월간 비용을 고정비/변동비로 분류하고 영업이익률을 계산하세요.",
    mission:
      "린 운영 체크리스트 5항목을 점검하고, 사용률 50% 미만 SaaS 도구를 정리하세요.",
  },
  {
    number: 6,
    title: "MVP에서 스케일업까지 — 검증 후 확장하는 단계별 전략",
    oneLiner:
      "완벽한 제품을 만들기 전에 고객이 원하는 것인지 먼저 검증하라.",
    description:
      "MVP 4유형(랜딩 페이지·오즈의 마법사·컨시어지·기능 축소), MoSCoW 우선순위, 성공/실패 기준 설정, Build-Measure-Learn 루프, 스케일업 5단계, Netflix 사례.",
    situation: "완벽한 제품을 만들려다 출시가 계속 늦어질 때",
    action: "MoSCoW로 기능을 분류하고 Must Have만 남긴 MVP를 설계하세요.",
    mission:
      "MVP 유형 1개를 선택하고 2주 내 출시할 수 있는 범위로 축소하세요.",
  },
  {
    number: 7,
    title: "피벗의 기술 — 방향 전환으로 살아남은 기업들의 비밀",
    oneLiner:
      "피벗은 실패가 아니라 학습의 결과물이다 — 데이터에 기반한 전략적 진화.",
    description:
      "피벗 10가지 유형, Slack·Netflix·당근마켓·무신사 피벗 사례, 피벗 타이밍 Red Flags 5개, 피벗 실행 프레임워크 4단계.",
    situation:
      "MVP 반응이 기대에 못 미쳐 계속할지 방향을 바꿀지 고민될 때",
    action:
      "피벗 Red Flags 5개 체크리스트를 솔직하게 점검하세요.",
    mission:
      "보존할 핵심 자산(기술·고객·데이터·브랜드)을 식별하고 피벗 옵션 3개를 도출하세요.",
  },
  {
    number: 8,
    title: "핵심 지표 대시보드 — CAC, LTV, MRR로 사업 건강 체크",
    oneLiner:
      "숫자를 보지 않고 사업을 하는 것은 계기판 없이 비행기를 조종하는 것이다.",
    description:
      "CAC·LTV·LTV/CAC·MRR·Churn·NRR·매출총이익률·Payback 8가지 핵심 지표, A/B 테스트 6단계, 위험 신호 대응표, CEO용 주간 대시보드 설계.",
    situation: "감에 의존해 경영하거나, 어떤 숫자를 봐야 할지 모를 때",
    action:
      "CAC와 LTV를 계산하고 LTV/CAC 비율이 3:1 이상인지 확인하세요.",
    mission:
      "구글 시트로 주간 KPI 대시보드를 만들고 매주 월요일 업데이트를 습관화하세요.",
  },
  {
    number: 9,
    title: "미래를 읽는 비즈니스 모델 — AI·구독·플랫폼 시대의 전략",
    oneLiner:
      "미래의 비즈니스 모델은 AI, 구독, 플랫폼, 데이터의 교차점에서 탄생한다.",
    description:
      "5대 메가 트렌드(AI 네이티브·구독 2.0·플랫폼·IoT·블록체인), AI 비즈니스 3유형, 구독 5세대, 양손잡이 조직, 혁신 포트폴리오(70-20-10).",
    situation: "지금 모델이 3~5년 후에도 통할지 불안할 때",
    action:
      "미래 대비 체크리스트 6항목을 점검하고 빈 항목을 채우세요.",
    mission:
      "혁신 포트폴리오를 핵심 70%·인접 20%·변혁 10%로 설계해보세요.",
  },
  {
    number: 10,
    title: "90일 비즈니스 모델 설계 로드맵 — 오늘부터 시작하기",
    oneLiner:
      "완벽한 계획보다 빠른 실행이 더 중요하다 — 오늘 바로 Week 1을 시작하세요.",
    description:
      "Phase 1 설계(1~4주) + Phase 2 검증(5~8주) + Phase 3 최적화(9~12주), 주차별 핵심 활동과 산출물, PMF 판단 매트릭스, 흔한 실수 예방법.",
    situation: "모든 이론은 배웠지만 어디서부터 시작할지 막막할 때",
    action: "캘린더를 열고 오늘부터 12주를 표시하세요.",
    mission:
      "Week 1 할 일(고객 5~10명 인터뷰, BMC 초안)을 내일부터 시작하세요.",
  },
];

const sections: ContentSection[] = [
  {
    id: "sec-0",
    title: "들어가며 — 아이디어가 아니라 모델이 사업의 성패를 결정합니다",
    body: (
      <>
        <p>하버드 비즈니스 리뷰에 따르면, 혁신적인 비즈니스 모델을 가진 기업이 제품만 혁신한 기업보다 <strong>6배 이상 높은 수익률</strong>을 달성했습니다. 아이디어는 출발점일 뿐, 목적지까지 데려다주는 것은 비즈니스 모델입니다.</p>
        <p>배달의민족은 <strong>플랫폼 모델</strong>로, 토스는 <strong>금융 슈퍼앱 모델</strong>로, 당근마켓은 <strong>하이퍼로컬 커뮤니티 모델</strong>로 수조 원의 가치를 만들었습니다. 공통점은 <strong>돈을 버는 구조를 과학적으로 설계</strong>했다는 것입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">이 책의 구성</h3>
        <p><strong>1~2장</strong> — 비즈니스 모델의 기초와 7가지 수익 모델을 비교합니다.</p>
        <p><strong>3~4장</strong> — 가치 제안 캔버스와 과학적 가격 전략을 다룹니다.</p>
        <p><strong>5~6장</strong> — 린 운영으로 비용을 관리하고 MVP에서 스케일업합니다.</p>
        <p><strong>7~8장</strong> — 피벗 타이밍 판단과 KPI 대시보드를 설계합니다.</p>
        <p><strong>9~10장</strong> — AI 시대 전략과 90일 실행 로드맵을 제시합니다.</p>
        <p><strong>부록</strong> — BMC·VPC·가격 전략·KPI·90일 플래너 양식 5종 + 추천 자료.</p>

        <blockquote className="border-l-4 border-emerald-400 pl-4 py-2 my-4 bg-emerald-50 dark:bg-emerald-950 rounded-r-lg">
          <p><strong>서문 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>사업 실패 1위 원인은 &lsquo;시장 수요 부재&rsquo; &mdash; 모델 없이 시작하면 42%가 실패한다.</li>
            <li>이 책은 읽고 끝나는 책이 아니라, 읽으면서 바로 실행하는 워크북이다.</li>
            <li><strong>1~2장이 모든 챕터의 기초이므로 반드시 먼저 읽으세요.</strong></li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-1",
    title: "Ch.1 비즈니스 모델이란 무엇인가 — 돈을 버는 구조의 설계도",
    body: (
      <>
        <p><strong>비즈니스 모델</strong>이란 기업이 가치를 창출하고, 전달하고, 수익으로 전환하는 전체 구조입니다. 오스터왈더의 <strong>BMC(비즈니스 모델 캔버스)</strong> 9개 블록으로 체계화할 수 있습니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">4가지 핵심 요소</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>가치 창출</strong> &mdash; 고객에게 제공하는 핵심 가치 (토스: 간편 송금)</li>
          <li><strong>가치 전달</strong> &mdash; 가치를 전달하는 채널 전략 (무신사: 커뮤니티&rarr;커머스)</li>
          <li><strong>가치 포착</strong> &mdash; 수익으로 전환하는 메커니즘 (당근: 지역 광고)</li>
          <li><strong>가치 방어</strong> &mdash; 경쟁자가 따라할 수 없는 해자 (네이버: 검색 트래픽)</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">비즈니스 모델 3세대</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>1세대 파이프라인</strong> &mdash; 생산자&rarr;소비자 일방향 (삼성전자, 이마트)</li>
          <li><strong>2세대 플랫폼</strong> &mdash; 양면 시장, 네트워크 효과 (배달의민족, Uber)</li>
          <li><strong>3세대 생태계</strong> &mdash; 다수 참여자 공동 창출 (카카오, 애플)</li>
        </ol>

        <blockquote className="border-l-4 border-emerald-400 pl-4 py-2 my-4 bg-emerald-50 dark:bg-emerald-950 rounded-r-lg">
          <p><strong>1챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>비즈니스 모델 = 아이디어를 수익으로 전환하는 설계도.</li>
            <li>같은 아이디어(음식 배달)도 모델 차이로 4.8조 원 vs 폐업이 갈린다.</li>
            <li><strong>오늘부터 실행</strong>: BMC 9개 블록을 빈칸 없이 한 장으로 채워보세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-2",
    title: "Ch.2 7가지 수익 모델 비교",
    body: (
      <>
        <p>같은 제품이라도 수익 모델에 따라 기업 가치가 <strong>10배 이상</strong> 달라집니다. Adobe는 패키지 판매에서 <strong>SaaS 구독</strong>으로 전환한 후 기업 가치가 약 5배 성장했습니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">7가지 모델 요약</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>구독</strong> &mdash; 예측 가능한 반복 매출 (Netflix, 밀리의서재)</li>
          <li><strong>프리미엄</strong> &mdash; 무료로 모객, 유료로 전환 (Spotify 전환율 37%, 토스)</li>
          <li><strong>마켓플레이스</strong> &mdash; 양면 시장 수수료 (배달의민족, 당근마켓)</li>
          <li><strong>라이선스</strong> &mdash; IP 사용권 판매, 한계비용 0 (한컴오피스)</li>
          <li><strong>광고</strong> &mdash; 사용자=상품, 규모 필요 (네이버, YouTube)</li>
          <li><strong>SaaS</strong> &mdash; 클라우드 소프트웨어, 확장성 (토스페이먼츠, Salesforce)</li>
          <li><strong>하이브리드</strong> &mdash; 복합 수익원, 리스크 분산 (쿠팡 4가지 수익원)</li>
        </ul>

        <blockquote className="border-l-4 border-emerald-400 pl-4 py-2 my-4 bg-emerald-50 dark:bg-emerald-950 rounded-r-lg">
          <p><strong>2챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>수익 모델은 하나만 고를 필요 없다 &mdash; 핵심 1개 + 보조 수익원이 가장 안정적.</li>
            <li>Dollar Shave Club은 면도기를 구독 모델로 바꿔 10억 달러 인수를 이끌어냈다.</li>
            <li><strong>오늘부터 실행</strong>: 현재 모델의 장점·한계를 적고, 대안 모델 2개를 비교하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-3",
    title: "Ch.3 가치 제안 캔버스 — 고객이 지갑을 여는 진짜 이유",
    body: (
      <>
        <p><strong>가치 제안(Value Proposition)</strong>이 약하면 아무리 좋은 수익 모델도 작동하지 않습니다. 고객이 지갑을 열지 않기 때문입니다. 좋은 가치 제안의 조건은 <strong>명확성·차별성·공감성</strong> 세 가지입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">가치 제안 캔버스 구조</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>고객 프로필</strong> &mdash; 할 일(Jobs) + 고통(Pains) + 이득(Gains)</li>
          <li><strong>가치 맵</strong> &mdash; 제품/서비스 + 고통 해결제 + 이득 창출제</li>
          <li><strong>핏(Fit)</strong> &mdash; 고객 프로필과 가치 맵이 정확히 맞물릴 때 강력한 가치 제안 완성</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">한국 기업 사례</h3>
        <p><strong>배달의민족</strong>: &quot;뭘 시켜먹지?&quot; 결정 피로 &rarr; 맞춤 추천·리뷰 시스템. <strong>무신사</strong>: &quot;뭘 입어야 할지 모르겠다&quot; &rarr; 코디 추천·실측 사이즈·브랜드 랭킹으로 패션 고통 해결 후 커머스 연결.</p>

        <blockquote className="border-l-4 border-emerald-400 pl-4 py-2 my-4 bg-emerald-50 dark:bg-emerald-950 rounded-r-lg">
          <p><strong>3챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>모든 요소에서 1등이 될 필요 없다 &mdash; 고객이 가장 중요시하는 1~2개에서 압도적 우위.</li>
            <li>가치 제안은 가설이다 &mdash; 반드시 A/B 테스트로 검증하라.</li>
            <li><strong>오늘부터 실행</strong>: &quot;우리는 (타겟)에게 (핵심 가치)를 제공하여 (고통)을 해결합니다&quot; 한 문장을 완성하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-4",
    title: "Ch.4 가격 전략의 과학 — 최적 가격을 찾는 5가지 방법",
    body: (
      <>
        <p>맥킨지에 따르면 <strong>가격을 1% 올리면 영업이익이 평균 11% 증가</strong>합니다. 판매량 1% 증가는 3.3% 효과에 그칩니다. 가격은 수익성에 가장 강력한 레버입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">5가지 가격 책정 방법</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>원가 기반</strong> &mdash; 원가 + 목표 마진 (가장 기본, 가치 반영 불가)</li>
          <li><strong>가치 기반</strong> &mdash; 고객의 다음 최선 대안(NBA) 가격 + 차별화 가치</li>
          <li><strong>경쟁 기반</strong> &mdash; 프리미엄/동일/침투 포지셔닝 (쿠팡: 침투 전략)</li>
          <li><strong>심리적</strong> &mdash; 끝자리(-900원), 앵커링, 디코이, 번들, 제로 가격</li>
          <li><strong>동적</strong> &mdash; 수요·시간·세그먼트별 실시간 조정 (Uber 서지 프라이싱)</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">SaaS 3단계 요금제</h3>
        <p><strong>Basic</strong>(진입) &rarr; <strong>Pro</strong>(핵심 타겟, 가장 많이 팔려야 함) &rarr; <strong>Enterprise</strong>(고객 단가 극대화). Pro가 가장 합리적으로 보이도록 디코이 효과를 활용합니다.</p>

        <blockquote className="border-l-4 border-emerald-400 pl-4 py-2 my-4 bg-emerald-50 dark:bg-emerald-950 rounded-r-lg">
          <p><strong>4챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>가격은 예술이 아니라 과학이다 &mdash; 5가지 방법을 조합하고 A/B 테스트로 검증.</li>
            <li>한국에서는 끝자리 효과(-900원)와 할인율 표시, 번들이 특히 효과적.</li>
            <li><strong>오늘부터 실행</strong>: 5가지 방법으로 각각 가격을 산출하고 최종 후보를 정하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-5",
    title: "Ch.5 린 운영과 비용 구조 — 수익성을 극대화하는 비용 관리",
    body: (
      <>
        <p>수익성을 높이는 방법은 두 가지뿐입니다: 매출을 늘리거나, 비용을 줄이거나. <strong>린(Lean) 운영</strong>은 낭비를 제거하고 가치 창출에 집중하는 철학입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">7가지 낭비 제거 (디지털 비즈니스 적용)</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>과잉 생산</strong> &mdash; 사용되지 않는 기능 개발</li>
          <li><strong>대기</strong> &mdash; 의사결정 지연, 승인 병목</li>
          <li><strong>재고</strong> &mdash; 미완성 프로젝트, 기술 부채</li>
          <li><strong>결함</strong> &mdash; 버그, 고객 불만, 환불</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">핵심 운영 지표</h3>
        <p><strong>번레이트</strong> = 월간 지출 - 수입, <strong>런웨이</strong> = 보유 현금 / 번레이트. 런웨이 18개월 이상 확보가 건강한 수준이며, SPOF(한 사람만 할 수 있는 업무)를 Cross-Training으로 방지해야 합니다.</p>

        <blockquote className="border-l-4 border-emerald-400 pl-4 py-2 my-4 bg-emerald-50 dark:bg-emerald-950 rounded-r-lg">
          <p><strong>5챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>비용 절감이 항상 답은 아니다 &mdash; 쿠팡의 물류 투자처럼 전략적 비용이 해자가 되기도.</li>
            <li>KPI로 측정, SOP로 표준화, 분기마다 SaaS 비용 감사.</li>
            <li><strong>오늘부터 실행</strong>: 월간 비용을 고정비/변동비로 분류하고 영업이익률을 계산하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-6",
    title: "Ch.6 MVP에서 스케일업까지 — 검증 후 확장하는 단계별 전략",
    body: (
      <>
        <p>수개월을 투자해 완벽한 제품을 만들었는데 고객이 원하지 않는다면? <strong>MVP</strong>는 핵심 가치만 담은 최소 제품으로 시장 반응을 확인한 후, 검증된 방향으로 확장하는 전략입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">MVP 4가지 유형</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>랜딩 페이지</strong> &mdash; 제품 없이 수요 테스트 (비용 거의 0원)</li>
          <li><strong>오즈의 마법사</strong> &mdash; 겉은 자동화, 뒤에서 수동 (초기 배달의민족)</li>
          <li><strong>컨시어지</strong> &mdash; 소수에게 직접 서비스 (초기 토스)</li>
          <li><strong>기능 축소</strong> &mdash; 핵심 기능 딱 하나 (초기 당근마켓: 중고 게시판만)</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">스케일업 5단계</h3>
        <p><strong>PMF 확인(0&rarr;1)</strong> &rarr; 반복 가능한 성장 채널(1&rarr;10) &rarr; 운영 체계 구축(10&rarr;100) &rarr; 시장 확장(100&rarr;1,000) &rarr; 생태계 구축(1,000&rarr;&infin;)</p>

        <blockquote className="border-l-4 border-emerald-400 pl-4 py-2 my-4 bg-emerald-50 dark:bg-emerald-950 rounded-r-lg">
          <p><strong>6챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>PMF 없이 스케일하면 &quot;밑 빠진 독에 물 붓기&quot;다.</li>
            <li>Netflix는 DVD&rarr;구독&rarr;스트리밍&rarr;오리지널로 매 단계 이전 모델을 과감히 버렸다.</li>
            <li><strong>오늘부터 실행</strong>: MoSCoW로 기능을 분류하고 Must Have만 남긴 MVP를 설계하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-7",
    title: "Ch.7 피벗의 기술 — 방향 전환으로 살아남은 기업들의 비밀",
    body: (
      <>
        <p>피벗은 실패가 아닙니다. <strong>핵심 가설이 틀렸음을 인정하고 더 나은 방향으로 전환하는 전략적 결정</strong>입니다. Slack은 게임 회사에서, Netflix는 DVD 우편에서, 당근마켓은 판교장터에서 시작했습니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">피벗 10가지 유형 (대표 사례)</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>고객 세그먼트</strong> (Slack: 게임&rarr;기업 메신저), <strong>고객 니즈</strong> (YouTube: 데이팅&rarr;동영상)</li>
          <li><strong>플랫폼</strong> (당근: 중고거래&rarr;지역 플랫폼), <strong>수익 모델</strong> (Adobe: 패키지&rarr;SaaS)</li>
          <li><strong>채널</strong> (무신사: 잡지&rarr;이커머스), <strong>기술</strong> (Netflix: DVD&rarr;스트리밍)</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">피벗 타이밍 Red Flags</h3>
        <p>3개월 이상 핵심 지표 정체, CAC 지속 상승, 반복적 같은 불만, 팀의 확신 상실, 경쟁사 압도적 우위 &mdash; 이 중 3개 이상이면 피벗을 검토해야 합니다.</p>

        <blockquote className="border-l-4 border-emerald-400 pl-4 py-2 my-4 bg-emerald-50 dark:bg-emerald-950 rounded-r-lg">
          <p><strong>7챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>피벗 실행 4단계: 현상 진단 &rarr; 보존 자산 식별 &rarr; 린 방식 재검증 &rarr; 빠른 실행.</li>
            <li>반쯤 피벗한 상태(한 발은 기존, 한 발은 신규)가 가장 위험하다.</li>
            <li><strong>오늘부터 실행</strong>: Red Flags 5개를 솔직하게 체크하고, 해당 시 피벗 옵션 3개를 도출하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-8",
    title: "Ch.8 핵심 지표 대시보드 — CAC, LTV, MRR로 사업 건강 체크",
    body: (
      <>
        <p>&quot;측정할 수 없으면 관리할 수 없다.&quot; 감에 의존하는 경영은 눈을 가리고 운전하는 것과 같습니다. 사업의 건강을 <strong>8가지 핵심 지표</strong>로 진단할 수 있습니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">필수 지표 8가지</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>CAC</strong> &mdash; 고객 1명 획득 비용 (LTV의 1/3 이하가 이상적)</li>
          <li><strong>LTV</strong> &mdash; 고객 생애 가치 = 월 매출 &times; 유지 기간 &times; 이익률</li>
          <li><strong>LTV/CAC</strong> &mdash; 3:1이 건강, 5:1 이상이면 성장 투자 여지</li>
          <li><strong>MRR</strong> &mdash; 월간 반복 매출 (투자자가 가장 먼저 보는 지표)</li>
          <li><strong>Churn</strong> &mdash; 월 5%면 1년 후 고객 절반 이탈</li>
          <li><strong>NRR</strong> &mdash; 100% 이상이면 신규 없이도 매출 성장</li>
          <li><strong>매출총이익률</strong> &mdash; SaaS 70~85%, 이커머스 20~40%</li>
          <li><strong>Payback</strong> &mdash; CAC 회수 기간, 12개월 이하가 건강</li>
        </ul>

        <blockquote className="border-l-4 border-emerald-400 pl-4 py-2 my-4 bg-emerald-50 dark:bg-emerald-950 rounded-r-lg">
          <p><strong>8챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>지표는 개별이 아닌 인과 관계 시스템으로 이해해야 한다.</li>
            <li>Spotify는 Discover Weekly 사용&rarr;유료 전환 상관관계를 발견해 집중 투자했다.</li>
            <li><strong>오늘부터 실행</strong>: CAC와 LTV를 계산하고 구글 시트로 주간 대시보드를 만드세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-9",
    title: "Ch.9 미래를 읽는 비즈니스 모델 — AI·구독·플랫폼 시대의 전략",
    body: (
      <>
        <p>과거에는 비즈니스 모델의 수명이 수십 년이었지만, 지금은 <strong>3~5년 안에 산업 판이 뒤집힙니다</strong>. 향후 5~10년을 지배할 5가지 메가 트렌드를 다룹니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">5대 메가 트렌드</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>AI 네이티브</strong> &mdash; AI 제품형 / AI 기능형 / AI 인프라형 (뤼튼, 업스테이지)</li>
          <li><strong>구독 2.0</strong> &mdash; 콘텐츠&rarr;SaaS&rarr;제품&rarr;생활&rarr;AI 개인화 5세대 진화</li>
          <li><strong>플랫폼 확장</strong> &mdash; 네트워크 효과, 생태계 잠금 (카카오 슈퍼앱)</li>
          <li><strong>IoT 데이터</strong> &mdash; 제품 판매&rarr;사용량 과금 (코웨이: 깨끗한 물 구독)</li>
          <li><strong>블록체인</strong> &mdash; 토큰 이코노미, 기존 비즈니스에 요소 결합</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">혁신 포트폴리오 (70-20-10)</h3>
        <p><strong>핵심 70%</strong>(0~1년, 기존 최적화) + <strong>인접 20%</strong>(1~3년, 확장) + <strong>변혁 10%</strong>(3~5년, 파괴적 혁신). 양손잡이 조직으로 현재 운영(80%)과 미래 탐색(20%)을 병행합니다.</p>

        <blockquote className="border-l-4 border-emerald-400 pl-4 py-2 my-4 bg-emerald-50 dark:bg-emerald-950 rounded-r-lg">
          <p><strong>9챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>트렌드를 따라가는 것이 아니라 자신의 비즈니스 맥락에 맞게 적용하는 것이 핵심.</li>
            <li>미래 대비 체크리스트: AI 자동화, 반복 매출, 네트워크 효과, 데이터 체계.</li>
            <li><strong>오늘부터 실행</strong>: 혁신 포트폴리오를 핵심/인접/변혁으로 설계해보세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-10",
    title: "Ch.10 90일 비즈니스 모델 설계 로드맵 — 오늘부터 시작하기",
    body: (
      <>
        <p>90일은 가설을 세우고, 검증하고, 첫 번째 결과를 확인하기에 <strong>충분한 기간</strong>입니다. 1~9장의 모든 프레임워크를 실행 가능한 로드맵으로 통합합니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">Phase 1: 설계 (1~4주)</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>Week 1</strong> &mdash; 고객 5~10명 인터뷰, BMC 초안, 팀 리뷰</li>
          <li><strong>Week 2</strong> &mdash; 가치 제안 캔버스, 경쟁 분석 매트릭스, 한 문장 가치 제안</li>
          <li><strong>Week 3</strong> &mdash; 수익 모델 결정, 가격 전략 설계, 재무 시뮬레이션</li>
          <li><strong>Week 4</strong> &mdash; 운영 프로세스·기술 인프라 설계, Phase 1 리뷰</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">Phase 2: 검증 (5~8주) &amp; Phase 3: 최적화 (9~12주)</h3>
        <p><strong>Phase 2</strong>: MVP 제작(노코드 활용) &rarr; 50~100만 원 테스트 예산 &rarr; 50명+ 피드백 &rarr; 숀 엘리스 테스트(40% &quot;매우 실망&quot; = PMF)</p>
        <p><strong>Phase 3</strong>: KPI 대시보드 구축 &rarr; 주간 최적화 루틴(월: 리뷰, 화: 가설, 수~목: 실행, 금: 측정) &rarr; 90일 회고 &rarr; 스케일/피벗 결정</p>

        <blockquote className="border-l-4 border-emerald-400 pl-4 py-2 my-4 bg-emerald-50 dark:bg-emerald-950 rounded-r-lg">
          <p><strong>10챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>흔한 실수: 설계에 머무름, MVP 과다 기능, 감정적 PMF 판단, 여러 지표 동시 개선.</li>
            <li>완벽한 계획보다 빠른 실행 &mdash; 이 로드맵은 하루 1~2시간으로 가능하다.</li>
            <li><strong>오늘부터 실행</strong>: 캘린더에 12주를 표시하고 Week 1(고객 인터뷰 + BMC)을 시작하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-11",
    title: "부록 — 비즈니스 모델 설계 도구 모음",
    body: (
      <>
        <p>본문에서 다룬 모든 프레임워크를 <strong>바로 복사해서 사용할 수 있는 양식</strong>으로 정리했습니다. 출력하거나 노션·구글 독스에 복사해서 활용하세요.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">5종 템플릿 목록</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>비즈니스 모델 캔버스(BMC)</strong> &mdash; 9개 블록 + 각 블록 작성 가이드</li>
          <li><strong>가치 제안 캔버스(VPC)</strong> &mdash; 고객 프로필·가치 맵 매칭 + 핏 확인</li>
          <li><strong>가격 전략 워크시트</strong> &mdash; 원가·가치·경쟁·심리·최종 가격 5단계</li>
          <li><strong>KPI 대시보드 양식</strong> &mdash; 수익·성장·유지·건강 4영역 주간 추적</li>
          <li><strong>90일 로드맵 플래너</strong> &mdash; Phase 1~3 주차별 할 일 + 완료 체크</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">추천 도서 &amp; 도구</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>도서</strong>: 비즈니스 모델 제너레이션(오스터왈더), 린 스타트업(에릭 리스), 제로 투 원(피터 틸)</li>
          <li><strong>도구</strong>: Strategyzer(BMC), 핵클(A/B 테스트), 아임웹·Bubble(MVP), 스티비(이메일), 노션(고객 관리)</li>
          <li><strong>지원 기관</strong>: TIPS, K-Startup(창업진흥원), 서울창업허브, 각 지역 창조경제혁신센터</li>
        </ul>

        <blockquote className="border-l-4 border-emerald-400 pl-4 py-2 my-4 bg-emerald-50 dark:bg-emerald-950 rounded-r-lg">
          <p><strong>부록 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>모든 양식은 자유롭게 복사·수정·배포 가능하다.</li>
            <li>완벽하게 채우려 하지 마세요 &mdash; 반복할수록 더 정교해진다.</li>
            <li>90일 후에는 여러분만의 <strong>검증된 비즈니스 모델</strong>이 완성되어 있을 것입니다.</li>
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
    changes: [
      "초판 발행: 비즈니스 모델 설계 10챕터 + 부록 실행 키트",
    ],
  },
];

export default function BusinessModelRead() {
  return (
    <GuideBook
      bookId="business-model"
      title="수익성을 극대화하는 비즈니스 모델 설계법"
      emoji="📊"
      subtitle="구독·SaaS·마켓플레이스 — 돈을 버는 구조를 설계하는 완전 가이드"
      topItems={topItems}
      sections={sections}
      updateLogs={updateLogs}
      currentVersion={1}
    />
  );
}
