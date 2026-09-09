import GuideBook from "@/components/GuideBook";
import type {
  TopItem,
  ContentSection,
  UpdateLog,
} from "@/components/GuideBook";

export const metadata = {
  title: "완판의 치트키, 런칭 스토리텔링의 비밀 — 본문 | 살아있는 정보책",
  description:
    "프리런칭부터 수익화 루프까지 — 제품 출시의 A to Z 실전 가이드. 서문 + 10개 챕터 + 부록 전문. 고객 발견, 스토리라인 설계, 브랜드 목소리, 프리런칭, 이메일 시퀀스, D-Day 실행, 제한하기 전략, 수익화 루프, 데이터 최적화, 런칭 루프까지.",
};

const topItems: TopItem[] = [
  {
    number: 1,
    title: "내 상품을 구매할 '진짜 고객' 찾기",
    oneLiner: "모든 사람에게 팔려고 하면 아무에게도 팔리지 않는다.",
    description:
      "6가지 데이터 소스(인터뷰·설문·지원로그·카페·리뷰·레딧)와 4R 페르소나 프레임워크. 공감지점 분석 3단계로 고객의 '날것의 언어'를 수집하고, 감정 온도 7 이상인 고충점을 런칭 메시지의 핵심으로 활용합니다.",
    situation: "'제 제품은 누구에게나 좋습니다'라고 말하고 있을 때",
    action: "4R 프레임워크로 핵심 페르소나 2개를 작성하세요.",
    mission: "고객의 고충 언어 20개를 수집하고, 감정 온도 7 이상 3개를 선별하세요.",
  },
  {
    number: 2,
    title: "스토리라인 설계도: 이야기가 제품을 팔게 만든다",
    oneLiner: "스토리텔링은 감성 에세이가 아니라 고객 이동 경로 설계다.",
    description:
      "5단계 서사 구조(현재 상태→긴장→큰 발견→변화→미래 비전), 변화의 순간 정의, 핵심 메시지 축 3개, 메시지 매트릭스(페르소나x퍼널). 스모크 테스트로 돈 쓰기 전에 반응을 검증합니다.",
    situation: "제품은 좋은데 어떻게 설명해야 할지 모르겠을 때",
    action: "5단계 서사 구조 초안을 작성하고 변화의 순간을 한 문장으로 정의하세요.",
    mission: "핵심 메시지 3개를 SNS에 올려 스모크 테스트를 실행하세요.",
  },
  {
    number: 3,
    title: "브랜드 목소리 잡기: 일관성이 신뢰를 만든다",
    oneLiner: "고객이 로고 없이도 '이 브랜드 글이구나' 알아보게 하라.",
    description:
      "보이스 트라이앵글(성격·어휘·리듬)으로 브랜드 목소리를 설계하고, 채널별 톤 조절 가이드를 만듭니다. 1페이지 스타일 시트로 모든 콘텐츠의 일관성을 보장합니다.",
    situation: "콘텐츠마다 톤이 달라서 브랜드 정체성이 흔들릴 때",
    action: "보이스 트라이앵글 3요소(성격·어휘·리듬)를 정의하세요.",
    mission: "1페이지 스타일 시트를 완성하고 기존 콘텐츠 3개를 재작성 연습하세요.",
  },
  {
    number: 4,
    title: "프리런칭 붐 조성하기: 공식 공개 전에 이미 이기는 법",
    oneLiner: "런칭 당일 매출은 그 전 2~4주에 이미 결정된다.",
    description:
      "리드마그넷 설계(즉시 가치·빠른 승리·본 제품 연결), 대기명단 최적화 6요소, 윤리적 제한하기 원칙, 티저 6형식(D-21~D-1), 마이크로 인플루언서 활용 전략.",
    situation: "런칭 당일 SNS에 올렸는데 아무 반응이 없을 때",
    action: "리드마그넷 1개를 제작하고 대기명단 페이지를 개설하세요.",
    mission: "D-21~D-1 티저 발행 캘린더를 작성하고 최소 4가지 티저를 사전 제작하세요.",
  },
  {
    number: 5,
    title: "이메일 시퀀스: 구독자를 예비 구매자로 바꾸는 4통의 편지",
    oneLiner: "이메일은 여전히 가장 높은 ROI를 가진 마케팅 채널이다.",
    description:
      "환영+리드마그넷→문제 재정의→해결 원리+티저→공개 예고, 4회 프리런칭 이메일 시퀀스. 세그먼트별 개인화, 간격 조절의 원리, 한국 이메일 마케팅 현실 대응법.",
    situation: "대기명단은 모았는데 어떤 이메일을 보내야 할지 모를 때",
    action: "4회 이메일 시퀀스 본문 초안을 작성하세요.",
    mission: "세그먼트 기준을 설정하고 자동 발송 간격을 세팅 후 테스트 발송하세요.",
  },
  {
    number: 6,
    title: "런칭 컨트롤타워: D-Day 48시간의 완벽한 실행",
    oneLiner: "기대감은 높였는데 실행에서 삐걱거리면 끝이다.",
    description:
      "기술 리허설 체크리스트(D-3~D-1), 미션 컨트롤 명단, 3통의 런칭 이메일(T-0/T+4h/T+8h), 다채널 동기화 시퀀스, 플랜 B 대응 매뉴얼, 15% 변화 룰.",
    situation: "런칭 당일 결제 링크 오류·스팸 이메일 등 예상 못한 사고가 날 때",
    action: "D-3부터 기술 리허설 체크리스트를 전체 완료하세요.",
    mission: "런칭 이메일 3통을 예약 발송하고 다채널 동기화 일정표를 확정하세요.",
  },
  {
    number: 7,
    title: "제한하기 전략과 실시간 최적화",
    oneLiner: "제한하기는 도구다, 무기가 아니다 — 거짓 마감은 신뢰를 파괴한다.",
    description:
      "윤리적 제한하기 3원칙(진짜·이유·일관), 3가지 유형(얼리버드·베타·시간한정 보너스), 실시간 카운트다운 활용법, 15분 간격 모니터링 체계, 전환율 드롭 대응 매뉴얼.",
    situation: "'한정 수량' '오늘만'을 남발했더니 고객이 안 믿을 때",
    action: "윤리적 제한하기 유형을 결정하고 제한 이유를 한 문장으로 설명하세요.",
    mission: "15분 간격 모니터링 시트를 준비하고 전환율 드롭 3가지 시나리오 대응 방안을 세우세요.",
  },
  {
    number: 8,
    title: "런칭 이후: 수익화 루프 시스템 만들기",
    oneLiner: "런칭 당일만 반짝하면 '원히트원더'로 끝난다.",
    description:
      "콘텐츠 재활용 3-R 기준(Results·Relevance·Refresh), 상시 퍼널 전환, 고객 관리 시퀀스(0/3/7/14/30일), 커뮤니티 선순환 3단계, 추천 프로그램 설계.",
    situation: "런칭은 성공했는데 그 이후 매출이 뚝 끊겼을 때",
    action: "런칭 콘텐츠를 3-R 기준으로 재활용 후보를 선별하세요.",
    mission: "고객 관리 시퀀스 5단계 메시지를 작성하고 커뮤니티 플랫폼을 결정하세요.",
  },
  {
    number: 9,
    title: "데이터로 진화하라: KPI 추적과 코호트 분석",
    oneLiner: "'느낌적으로 잘 된 것 같아요'는 다음 런칭 실패의 전조다.",
    description:
      "5가지 핵심 KPI(오가닉 성장률·활성화율·LTV/CAC·이탈률·추천율), 코호트 분석표, 30일 콘텐츠 리뉴얼 사이클, GA4+루커 스튜디오 대시보드 구축.",
    situation: "감으로 마케팅하고 무엇이 효과적이었는지 모를 때",
    action: "5가지 핵심 KPI 기준선을 설정하고 GA4 전환 이벤트를 세팅하세요.",
    mission: "코호트 분석 시트를 만들고 30일 콘텐츠 리뉴얼 첫 사이클을 계획하세요.",
  },
  {
    number: 10,
    title: "런칭 루프: 반복할수록 강해지는 성장 엔진",
    oneLiner: "한 번의 런칭 경험이 다음 런칭의 자산이 되는 시스템.",
    description:
      "런칭 루프 4단계(Build→Launch→Learn→Optimize), ICE 실험 프레임워크, 마이크로 런칭 전략, 연간 런칭 캘린더 설계, 80/20 재활용 원칙, 번아웃 방지 5원칙.",
    situation: "매번 런칭을 처음부터 다시 시작하느라 탈진할 때",
    action: "ICE 스코어카드로 다음 실험 3가지 우선순위를 설정하세요.",
    mission: "연간 런칭 캘린더 초안을 작성하고 리커버리 주간을 미리 블록하세요.",
  },
];

const sections: ContentSection[] = [
  {
    id: "preface",
    title: "들어가며 — 아무리 좋은 제품이라도 런칭을 못 하면 소용없습니다",
    body: (
      <>
        <p>CB인사이츠 분석에 따르면 스타트업 실패 원인 2위는 <strong>&quot;시장 필요성 부재&quot;</strong>로, 42%가 아무도 원하지 않는 것을 만들었다는 이유로 사라졌습니다. 하지만 정말로 아무도 원하지 않았던 것일까요? 대부분은 제품이 아니라 <strong>제품을 세상에 내놓는 방식</strong>이 문제였습니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">런칭은 이벤트가 아니라 시스템입니다</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li>&quot;제품 만들고 SNS에 올리고 기다린다&quot; — 이건 기도입니다</li>
          <li>진짜 런칭은 제품 공개 <strong>전</strong>에 이미 80%가 결정됩니다</li>
          <li>고객 파악 &rarr; 스토리 설계 &rarr; 기대감 구축 &rarr; 구매 동선이 <strong>하나의 시스템</strong>으로 연결될 때, 런칭은 반복 가능한 성장 엔진이 됩니다</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">이 책의 구성</h3>
        <p><strong>1~3장 (기초)</strong> — 진짜 고객 찾기, 스토리라인 설계, 브랜드 목소리.</p>
        <p><strong>4~5장 (준비)</strong> — 프리런칭 붐 조성, 이메일 시퀀스.</p>
        <p><strong>6~7장 (실행)</strong> — D-Day 컨트롤타워, 제한하기 전략.</p>
        <p><strong>8~10장 (성장)</strong> — 수익화 루프, 데이터 최적화, 런칭 루프.</p>
        <p><strong>부록</strong> — 바로 복사해서 쓸 수 있는 워크시트·체크리스트·템플릿·FAQ.</p>

        <blockquote className="border-l-4 border-orange-400 pl-4 py-2 my-4 bg-orange-50 dark:bg-orange-950 rounded-r-lg">
          <p><strong>서문 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>검증된 프레임워크를 한국 사업 환경(네이버·스마트스토어·카카오톡)에 맞게 재설계했다.</li>
            <li>런칭 전-중-후 전체 여정을 하나의 흐름으로 연결한다.</li>
            <li>1장(고객 찾기)과 2장(스토리라인)은 모든 챕터의 기초이므로 반드시 먼저 읽으세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch1",
    title: "Ch.1 내 상품을 구매할 '진짜 고객' 찾기",
    body: (
      <>
        <p>&quot;제 제품은 누구에게나 좋습니다.&quot; — 이 말이 나오는 순간, 아직 고객을 못 찾은 것입니다. 런칭의 첫 단계는 <strong>내 제품을 &quot;지금 당장&quot; 사고 싶어 할 사람을 구체적으로 정의하는 것</strong>입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">6가지 데이터 소스</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>고객 인터뷰</strong> — 5~10명과 30분 대화, &quot;이 문제를 해결하려고 뭘 시도해 보셨어요?&quot;</li>
          <li><strong>설문 조사</strong> — 구글 폼 50~100명, 주관식으로 &quot;그들의 언어&quot; 수집</li>
          <li><strong>고객 지원 로그</strong> — 카카오톡 상담 내역에서 반복되는 질문 = 반복되는 고충점</li>
          <li><strong>네이버 카페/블로그</strong> — 인기 게시글 TOP 50에서 고객의 단어·표현·감정 수집</li>
          <li><strong>스마트스토어/쿠팡 리뷰</strong> — 별점 3점 리뷰가 가장 중요 (장단점 동시)</li>
          <li><strong>레딧/해외 커뮤니티</strong> — 한국 시장에 없는 니즈 발견</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">4R 페르소나 프레임워크</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>Role (역할)</strong> — 이 사람은 누구인가?</li>
          <li><strong>Roadblock (장애물)</strong> — 무엇이 막고 있는가?</li>
          <li><strong>Reward (보상)</strong> — 해결되면 무엇을 얻는가?</li>
          <li><strong>Rationale (근거)</strong> — 왜 지금, 왜 나에게 사야 하는가?</li>
        </ul>
        <p>핵심 페르소나 2개 + 보조 페르소나 1개가 적정선. 5~7개 만들면 메시지가 희석됩니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">공감지점 분석 3단계</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>고충 언어 수집</strong> — 리뷰·댓글·상담에서 날것의 표현을 그대로 메모</li>
          <li><strong>감정 온도 측정</strong> — 온도 7 이상이 런칭 메시지의 핵심</li>
          <li><strong>전환 언어 발견</strong> — &quot;이걸 알고 나서 달라졌어요&quot; = 변화의 약속</li>
        </ol>

        <blockquote className="border-l-4 border-orange-400 pl-4 py-2 my-4 bg-orange-50 dark:bg-orange-950 rounded-r-lg">
          <p><strong>1챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>추측이 아니라 데이터로 고객을 찾아라 — 6가지 소스 중 최소 3개 활용.</li>
            <li>마케팅 카피는 사업자의 머리가 아니라 고객의 입에서 나와야 한다.</li>
            <li><strong>오늘부터 실행</strong>: 4R 프레임워크로 핵심 페르소나 2개를 작성하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch2",
    title: "Ch.2 스토리라인 설계도: 이야기가 제품을 팔게 만든다",
    body: (
      <>
        <p>런칭 스토리텔링은 감동적인 에세이가 아닙니다. <strong>고객이 &quot;현재 상태&quot;에서 &quot;원하는 상태&quot;로 이동하는 경로를 설계하는 것</strong>입니다. 설계도가 있어야 고객의 마음을 움직일 수 있습니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">5단계 서사 구조</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>Status Quo (현재 상태)</strong> — 고객의 고충을 그들의 언어로 묘사. &quot;맞아, 내 이야기야&quot; 끄덕임 유발</li>
          <li><strong>Tension (긴장)</strong> — 변화의 필요성. 공포 조장이 아니라 인식의 전환</li>
          <li><strong>Big Reveal (큰 발견)</strong> — 제품 소개 전에 방법론/프레임워크를 먼저 공유</li>
          <li><strong>Transformation (변화)</strong> — 추상적 약속이 아니라 구체적인 변화 장면</li>
          <li><strong>Future Vision (미래 비전)</strong> — &quot;나도 저렇게 될 수 있겠다&quot; 시각화</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">핵심 메시지 축 3개 + 메시지 매트릭스</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>메시지 1: 문제 재정의</strong> — &quot;간식 고민은 레시피 부족이 아니라 원칙 부재&quot;</li>
          <li><strong>메시지 2: 해결 원리</strong> — &quot;3가지 재료 원칙이면 충분합니다&quot;</li>
          <li><strong>메시지 3: 결과 약속</strong> — &quot;2주 안에 아이가 먼저 찾는 간식을 만들 수 있습니다&quot;</li>
        </ul>
        <p>메시지 매트릭스: 페르소나별 x 퍼널 단계별(인지·관심·결정)로 세분화합니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">스모크 테스트로 검증하기</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>SNS 1문장 테스트</strong> — 핵심 메시지 3개를 올려 반응이 가장 많은 것이 승자</li>
          <li><strong>오픈채팅 미니 FGI</strong> — 5~8명에게 &quot;이거 들으니까 궁금해지세요?&quot;</li>
          <li><strong>광고 A/B 테스트</strong> — 메타 광고 5만 원으로 CTR 비교</li>
        </ol>

        <blockquote className="border-l-4 border-orange-400 pl-4 py-2 my-4 bg-orange-50 dark:bg-orange-950 rounded-r-lg">
          <p><strong>2챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>2단계(긴장)와 3단계(큰 발견) 사이의 &quot;변화의 순간&quot;이 서사의 핵심이다.</li>
            <li>핵심 메시지는 최대 3개 — 4개 이상이면 기억에 남지 않는다.</li>
            <li><strong>오늘부터 실행</strong>: 5단계 서사 구조 초안을 작성하고 스모크 테스트 1가지를 실행하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch3",
    title: "Ch.3 브랜드 목소리 잡기: 일관성이 신뢰를 만든다",
    body: (
      <>
        <p>같은 내용이라도 <strong>누가, 어떻게 말하느냐</strong>에 따라 신뢰도는 하늘과 땅 차이입니다. 브랜드 목소리는 고객이 여러분의 콘텐츠를 <strong>로고 없이도 알아볼 수 있게</strong> 만드는 일관된 톤입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">보이스 트라이앵글 (Voice Triangle)</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>성격 (Personality)</strong> — 3~5개 형용사. &quot;~이 아니다&quot;를 정의하는 것이 더 중요 (경계선 명확화)</li>
          <li><strong>어휘 (Vocabulary)</strong> — 쓰는 단어/안 쓰는 단어, 존칭 수준, 외래어 빈도, 이모지 여부</li>
          <li><strong>리듬 (Rhythm)</strong> — 짧은 리듬(임팩트) + 중간(설명) + 짧은(마무리)의 혼합 리듬 추천</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">채널별 톤 조절</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>인스타그램</strong> — 가장 캐주얼, 시각 중심</li>
          <li><strong>블로그/브런치</strong> — 깊이 있는 설명, 경험 공유</li>
          <li><strong>이메일</strong> — 1:1 대화, 솔직한 톤</li>
          <li><strong>상세페이지</strong> — 구조적, 혜택 중심</li>
          <li><strong>카카오톡 채널</strong> — 간결, 행동 유도</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">한국어 목소리 설계 팁</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>&quot;-요체&quot;의 힘</strong> — 친근하면서도 존중, 1인 사업자 브랜드 기본값</li>
          <li><strong>의성어/의태어 활용</strong> — &quot;쓱쓱&quot;, &quot;뚝딱&quot;, &quot;술술&quot;로 생동감 추가</li>
          <li><strong>번역투 제거</strong> — &quot;~하는 것은 중요합니다&quot;보다 &quot;~이 중요합니다&quot;</li>
        </ul>

        <blockquote className="border-l-4 border-orange-400 pl-4 py-2 my-4 bg-orange-50 dark:bg-orange-950 rounded-r-lg">
          <p><strong>3챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>목소리는 바꾸지 않되, 채널에 따라 볼륨과 속도를 조절한다.</li>
            <li>1페이지 스타일 시트가 모든 콘텐츠의 나침반이 된다.</li>
            <li><strong>오늘부터 실행</strong>: 보이스 트라이앵글을 정의하고 스타일 시트를 완성하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch4",
    title: "Ch.4 프리런칭 붐 조성하기: 공식 공개 전에 이미 이기는 법",
    body: (
      <>
        <p>런칭 당일 매출은 <strong>그 전 2~4주 동안 무엇을 쌓아왔느냐</strong>에 결정됩니다. 프리런칭의 3가지 목표: 인지(&quot;이런 게 나온대&quot;) &rarr; 관심(&quot;좀 더 알고 싶어&quot;) &rarr; 기대(&quot;빨리 나왔으면&quot;).</p>

        <h3 className="text-xl font-bold mt-8 mb-4">리드마그넷의 3가지 조건</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>즉시 가치</strong> — 받자마자 5분 안에 &quot;이거 좋네&quot;</li>
          <li><strong>빠른 승리</strong> — 작지만 실제 결과를 만들어 주는 것</li>
          <li><strong>본 제품 연결</strong> — 다음 단계가 자연스럽게 유료 제품</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">대기명단 페이지 필수 6요소</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li>한 줄 헤드라인 (변화의 약속) + 3줄 서브카피</li>
          <li>리드마그넷 제안 + 사회적 증거</li>
          <li>행동 지향 CTA 버튼 + 타이머/제한</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">티저 6가지 형식 (D-21~D-1)</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>트레일러 (D-21~D-14)</strong> — 60~90초 영상 또는 카드뉴스</li>
          <li><strong>GIF/짧은 클립 (D-14~D-10)</strong> — 15~30초 스낵 콘텐츠</li>
          <li><strong>AMA (D-10~D-7)</strong> — 오픈채팅/인스타 라이브 Q&amp;A</li>
          <li><strong>미스터리 (D-7~D-5)</strong> — 핵심 기능 부분 공개 시리즈</li>
          <li><strong>마일스톤 (D-5~D-3)</strong> — 대기명단 000명 돌파! 사회적 증거</li>
          <li><strong>카운트다운 (D-3~D-1)</strong> — 인스타 스티커, 카카오톡 알림 예약</li>
        </ol>

        <blockquote className="border-l-4 border-orange-400 pl-4 py-2 my-4 bg-orange-50 dark:bg-orange-950 rounded-r-lg">
          <p><strong>4챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>윤리적 제한하기 원칙: 실제 한계 기반 + 이유 설명 + 약속 이행.</li>
            <li>팔로워 100만보다 1,000~10,000명 마이크로 인플루언서가 런칭에 효과적.</li>
            <li><strong>오늘부터 실행</strong>: 리드마그넷 1개를 제작하고 대기명단 페이지를 개설하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch5",
    title: "Ch.5 이메일 시퀀스: 구독자를 예비 구매자로 바꾸는 4통의 편지",
    body: (
      <>
        <p>&quot;이메일 마케팅? 한국에서 되나요?&quot; — <strong>됩니다.</strong> 소유 가능한 채널(알고리즘 영향 없음), 깊은 대화 가능, 구매 전환율 SNS 대비 3~5배. 다만 카카오톡과 병행이 정답입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">4회 프리런칭 이메일 시퀀스</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>환영 + 리드마그넷 (등록 즉시)</strong> — 감사 + 다운로드 링크 + &quot;이것 먼저 해보세요&quot; + PS 질문</li>
          <li><strong>문제 재정의 (3~4일 후)</strong> — 흔한 오해 지적 + 진짜 원인 + 미니 사례</li>
          <li><strong>해결 원리 + 티저 (2~3일 후)</strong> — 프레임워크 20% 공유 + 제품 첫 언급 + 특별 혜택 예고</li>
          <li><strong>공개 예고 (2일 후, D-1)</strong> — 일시 확정 + 전체 구성 + 얼리버드 조건 + 명확한 CTA</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">세그먼트별 개인화</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>활성 구독자</strong> (이메일 2개 이상 오픈) &rarr; 제품 상세, 얼리버드 우선</li>
          <li><strong>비활성 구독자</strong> (미오픈) &rarr; 제목줄 변경 재발송, 핵심 혜택 강조</li>
          <li><strong>리드마그넷 활용자</strong> &rarr; &quot;다음 단계&quot;로 제품 연결</li>
          <li><strong>질문/답장자</strong> &rarr; 개인 맞춤 후속 메시지</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">간격 조절의 원리</h3>
        <p>초반 넓게(관계 구축) &rarr; 후반 좁게(기대감 가속) &rarr; 런칭 전날 마지막 리마인더.</p>

        <blockquote className="border-l-4 border-orange-400 pl-4 py-2 my-4 bg-orange-50 dark:bg-orange-950 rounded-r-lg">
          <p><strong>5챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>첫 이메일의 PS 질문에 대한 답장은 고객 언어를 추가 수집하는 금광.</li>
            <li>이메일은 &quot;파는 도구&quot;, 카카오톡은 &quot;알리는 도구&quot; — 역할 분담이 핵심.</li>
            <li><strong>오늘부터 실행</strong>: 4회 이메일 시퀀스 초안을 작성하고 테스트 발송하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch6",
    title: "Ch.6 런칭 컨트롤타워: D-Day 48시간의 완벽한 실행",
    body: (
      <>
        <p>기대감은 최고조인데 <strong>결제 링크가 안 열리고, 이메일이 스팸함에 들어가고, 쿠폰 코드가 작동하지 않는다</strong> — 사소한 기술적 문제 하나가 며칠간 쌓아온 기대감을 무너뜨립니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">기술 리허설 (D-3~D-1)</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>결제 동선</strong> — 로딩 3초, 카드/계좌/카카오페이/네이버페이, 모바일 별도 테스트</li>
          <li><strong>이메일/메시지</strong> — 예약 발송, 스팸 테스트, 카카오 알림톡</li>
          <li><strong>웹사이트</strong> — 트래픽 대비 서버, 브라우저별 테스트, OG 태그, GA4 전환 추적</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">3통의 런칭 이메일</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>T-0 (오전 10시)</strong> — &quot;지금 열렸습니다!&quot; 핵심 가치 3줄 + 얼리버드 + CTA 1개</li>
          <li><strong>T+4h (오후 2시)</strong> — 미확인자 전환. FAQ 2~3개 + 실시간 현황</li>
          <li><strong>T+8h (저녁 6시)</strong> — 마지막 기회. 고객 반응 공유 + 마감 시간 명시</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">플랜 B 원칙</h3>
        <p><strong>문제가 생기면 숨기지 말고, 즉시 소통하고, 보상하세요.</strong> 결제 다운 &rarr; 백업 링크, 이메일 실패 &rarr; 카카오 대체, 서버 과부하 &rarr; 대기 페이지. 위기를 잘 처리하면 오히려 신뢰가 높아집니다.</p>

        <blockquote className="border-l-4 border-orange-400 pl-4 py-2 my-4 bg-orange-50 dark:bg-orange-950 rounded-r-lg">
          <p><strong>6챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>1인 사업자도 런칭 당일 CS만이라도 지인이나 VA에게 부탁하라.</li>
            <li>15% 변화 룰: 기준선 대비 15% 이상 변화에만 조치한다.</li>
            <li><strong>오늘부터 실행</strong>: 기술 리허설 체크리스트를 만들고 D-3부터 전체 테스트하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch7",
    title: "Ch.7 제한하기 전략과 실시간 최적화",
    body: (
      <>
        <p>제한하기(Scarcity)는 가장 강력한 설득 도구이지만, 남용하면 <strong>가장 빠르게 신뢰를 파괴하는 도구</strong>이기도 합니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">윤리적 제한하기 3원칙</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>진짜여야 한다</strong> — 거짓 마감 한 번이면 그 고객은 다시 안 믿는다</li>
          <li><strong>이유가 있어야 한다</strong> — &quot;소규모 시작 이유는 피드백을 충분히 반영하기 위해서&quot;</li>
          <li><strong>일관되어야 한다</strong> — 마감이라 했으면 진짜 마감. 연장 세일 반복 금지</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">3가지 제한하기 유형</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>얼리버드</strong> — 20~40% 할인, 48~72시간, 종료 일시 명확히</li>
          <li><strong>베타테스터 모집</strong> — 10~50명, 할인+추가 가치, 솔직한 후기 의무</li>
          <li><strong>시간 한정 보너스</strong> — 본 제품 연관 보너스, 가치 구체적 표시, 마감 후 실제 제거</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">전환율 드롭 대응</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>방문 많고 결제 클릭 적음</strong> &rarr; &quot;월 OO원꼴&quot; 환산 + 후기 보강 + CTA 문구 변경</li>
          <li><strong>결제 클릭하고 완료 안 됨</strong> &rarr; 결제 프로세스 테스트 + 간편 결제 추가</li>
          <li><strong>이메일 오픈율 극저</strong> &rarr; 제목줄 변경 재발송 + 개인화 + 카카오톡 보조</li>
        </ul>

        <blockquote className="border-l-4 border-orange-400 pl-4 py-2 my-4 bg-orange-50 dark:bg-orange-950 rounded-r-lg">
          <p><strong>7챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>카운트다운이 0이 되면 진짜 마감하라 — &quot;많은 요청으로 연장&quot;은 최악의 수.</li>
            <li>런칭 첫 4시간은 15분 단위 모니터링이 필수.</li>
            <li><strong>오늘부터 실행</strong>: 제한하기 유형을 결정하고 모니터링 시트를 준비하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch8",
    title: "Ch.8 런칭 이후: 수익화 루프 시스템 만들기",
    body: (
      <>
        <p>런칭 당일 매출에만 집중하고 이후를 방치하면 <strong>한 번 반짝하고 사라지는 &quot;원히트원더&quot;</strong>가 됩니다. 진짜 사업은 런칭 이후에 만들어집니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">콘텐츠 재활용: 3-R 기준</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>Results</strong> — 실제 성과가 있었는가? (높은 인게이지먼트, 오픈율, 공유)</li>
          <li><strong>Relevance</strong> — 현재 고객에게 여전히 유효한가?</li>
          <li><strong>Refresh</strong> — 새 형태로 변환 가능한가? (블로그 &rarr; 카드뉴스 &rarr; 숏폼 &rarr; 뉴스레터)</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">고객 관리 시퀀스 (0/3/7/14/30일)</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>D+0</strong> — 환영, 시작 가이드: &quot;먼저 이것부터 해보세요&quot;</li>
          <li><strong>D+3</strong> — 진행 확인: &quot;어떠세요? 막히는 부분 있으시면 알려주세요&quot;</li>
          <li><strong>D+7</strong> — 성과 공유: &quot;다른 분들은 이렇게 활용하고 계세요&quot;</li>
          <li><strong>D+14</strong> — 심화 안내: &quot;여기까지 오셨으면 이 기능도 활용해 보세요&quot;</li>
          <li><strong>D+30</strong> — 후기 요청 + 추천 유도</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">추천 프로그램 설계 원칙</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>양쪽 보상</strong> — 추천인과 피추천인 모두에게 혜택</li>
          <li><strong>간단한 프로세스</strong> — 링크 하나로 추천 가능</li>
          <li><strong>즉시 보상</strong> — 확인 즉시 보상 전달</li>
        </ul>

        <blockquote className="border-l-4 border-orange-400 pl-4 py-2 my-4 bg-orange-50 dark:bg-orange-950 rounded-r-lg">
          <p><strong>8챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>상시 퍼널: 런칭 웨비나 녹화본 + 자동 이메일 + 상시 판매 페이지로 전환.</li>
            <li>커뮤니티 추천 조합: 카카오 오픈채팅(일상 소통) + 노션(자료 저장소).</li>
            <li><strong>오늘부터 실행</strong>: 고객 관리 시퀀스 5단계 메시지를 작성하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch9",
    title: "Ch.9 데이터로 진화하라: KPI 추적과 코호트 분석",
    body: (
      <>
        <p>&quot;느낌적으로 잘 된 것 같아요&quot; — 이 말을 하는 순간, 다음 런칭에서 <strong>똑같은 실수를 반복할 준비</strong>를 하고 있는 것입니다. 5가지 핵심 숫자만 추적하면 됩니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">5가지 핵심 KPI</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>오가닉 성장률</strong> — 광고 없이 자연 유입 증가율. 월 5~10% 건강, 20%+ 바이럴 작동</li>
          <li><strong>활성화율</strong> — 구매 후 실제 사용 시작 비율. 60%+ 건강, 40% 이하 온보딩 문제</li>
          <li><strong>LTV/CAC 비율</strong> — 3:1 이상 건강, 1:1 적자, 5:1+ 투자 여지</li>
          <li><strong>이탈률</strong> — 월 5% 이하 건강, 10%+ 심각한 문제</li>
          <li><strong>추천율</strong> — 10%+ 우수, 20%+ PMF 매우 높음</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">코호트 분석</h3>
        <p>같은 시기에 유입된 고객 그룹별 행동을 비교합니다. 3월 코호트 유지율이 가장 높다면, <strong>3월에 무엇이 달랐는지</strong>(온보딩 이메일 변경?)를 분석하세요.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">30일 콘텐츠 리뉴얼 사이클</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>1주차</strong> — 데이터 수집 (GA4, 이메일 리포트, 고객 피드백)</li>
          <li><strong>2주차</strong> — 분석 (상위 20% 재활용, 하위 20% 개선/폐기, FAQ 새 콘텐츠)</li>
          <li><strong>3주차</strong> — 제작 및 수정</li>
          <li><strong>4주차</strong> — 발행 및 다음 30일 측정 기준 설정</li>
        </ul>

        <blockquote className="border-l-4 border-orange-400 pl-4 py-2 my-4 bg-orange-50 dark:bg-orange-950 rounded-r-lg">
          <p><strong>9챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>대시보드: GA4(무료) + 구글 루커 스튜디오(무료) + 구글 시트면 충분하다.</li>
            <li>UTM 파라미터 규칙을 정하면 채널별 ROI를 정확히 추적할 수 있다.</li>
            <li><strong>오늘부터 실행</strong>: GA4를 설치하고 전환 이벤트를 설정하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch10",
    title: "Ch.10 런칭 루프: 반복할수록 강해지는 성장 엔진",
    body: (
      <>
        <p>첫 런칭을 성공적으로 마쳤다면 축하합니다. 하지만 진짜 질문은 이것입니다: <strong>&quot;두 번째, 세 번째 런칭도 성공할 수 있는가?&quot;</strong> 런칭 루프는 한 번의 경험이 다음 런칭의 자산이 되는 반복 가능한 엔진입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">런칭 루프 4단계</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>Build (준비)</strong> — 이전 런칭의 데이터와 피드백을 바탕으로 다음 제품 설계</li>
          <li><strong>Launch (실행)</strong> — 이미 리스트·커뮤니티·콘텐츠 자산이 있으므로 훨씬 효율적</li>
          <li><strong>Learn (학습)</strong> — KPI와 코호트 분석으로 효과/비효과 정확히 파악</li>
          <li><strong>Optimize (최적화)</strong> — ICE 프레임워크로 실험 우선순위 결정</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">ICE 실험 프레임워크</h3>
        <p><strong>ICE = (Impact + Confidence + Ease) / 3</strong>. 점수가 높은 것부터 실행하되, <strong>한 번에 하나의 실험만</strong> 진행하세요.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">마이크로 런칭 + 연간 캘린더</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>대규모 런칭 연 2~3회</strong> — 에너지 집중 시기</li>
          <li><strong>마이크로 런칭 분기별 1~2회</strong> — 보너스 모듈, 시즌 번들, 무료 챌린지, 라이브 워크숍</li>
          <li><strong>한국 시즌 활용</strong> — 새해(1월), 봄(3~4월), 추석(9월), 연말(11~12월)</li>
          <li><strong>80/20 원칙</strong> — 전환율 상위 20% 콘텐츠의 구조와 앵글을 반복 활용</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">번아웃 방지 5원칙</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li>런칭 후 리커버리 주간 — 1주일 가벼운 업무만</li>
          <li>자동화 우선 — 사람은 판단과 창의력에만 집중</li>
          <li>체크리스트 문화 — 매번 새로 생각하지 않기</li>
          <li>에너지 관리 — 런칭 주간 다른 프로젝트 정지</li>
          <li>회고 미팅 — 3일 이내 &quot;잘한 점·개선할 점·다음에 시도할 것&quot; 기록</li>
        </ol>

        <blockquote className="border-l-4 border-orange-400 pl-4 py-2 my-4 bg-orange-50 dark:bg-orange-950 rounded-r-lg">
          <p><strong>10챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>대부분의 성공적인 제품은 2~3번째 런칭에서 빛을 본다.</li>
            <li>계획 없이 &quot;때 되면 하자&quot;는 가장 위험한 전략이다.</li>
            <li><strong>오늘부터 실행</strong>: 연간 런칭 캘린더 초안을 작성하고 리커버리 주간을 미리 블록하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "appendix",
    title: "부록 — 복사해 쓰는 런칭 실행 키트",
    body: (
      <>
        <p>이 부록의 모든 워크시트·체크리스트·템플릿은 그대로 복사하거나 사업에 맞게 수정해서 사용하세요. <strong>빈칸 하나라도 채우면 어제보다 나은 런칭 전략이 시작됩니다.</strong></p>

        <h3 className="text-xl font-bold mt-8 mb-4">실행 키트 9종</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>고객 레이더 워크시트</strong> — 4R 페르소나 카드 + 고충점 수집표 + 고객 언어 사전</li>
          <li><strong>5단계 서사 구조 템플릿</strong> — 변화의 순간 정의 + 핵심 메시지 축</li>
          <li><strong>메시지 매트릭스</strong> — 페르소나별 x 퍼널 단계별 메시지 세분화</li>
          <li><strong>대기명단 페이지 체크리스트</strong> — 필수 6요소 + 신뢰 요소 + 기술 요소</li>
          <li><strong>프리런칭 이메일 4통 뼈대</strong> — 각 이메일 구조와 템플릿</li>
          <li><strong>런칭 D-Day 체크리스트</strong> — D-3, D-2, D-1, D-Day 단계별</li>
          <li><strong>콘텐츠 재활용 플래너</strong> — 3-R 평가표 + 재활용 변환 맵</li>
          <li><strong>ICE 실험 스코어카드</strong> — 실험 기록 카드 포함</li>
          <li><strong>연간 런칭 캘린더</strong> — 월별 활동 + 런칭별 리소스 계획</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">FAQ 하이라이트</h3>
        <p><strong>Q. 구독자 100명도 안 되는데 런칭해도 되나요?</strong> 됩니다. 100명의 열정적인 구독자가 10,000명의 무관심한 팔로워보다 낫습니다.</p>
        <p><strong>Q. 런칭에 실패하면?</strong> 실패한 런칭은 없습니다. 배움이 적은 런칭이 있을 뿐입니다. 대부분 2~3번째에서 빛을 봅니다.</p>
        <p><strong>Q. 혼자서 가능한가요?</strong> 가능합니다. 1장(고객 찾기)과 5장(이메일 시퀀스)에 80% 에너지를 투입하세요.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">오늘 할 수 있는 3가지</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>4R 페르소나 카드 작성 (15분)</strong> — 내 고객이 누구인지 명확히 하면 모든 것이 달라집니다.</li>
          <li><strong>핵심 메시지 3개 적기 (10분)</strong> — 문제 재정의, 해결 원리, 결과 약속을 한 문장씩.</li>
          <li><strong>리드마그넷 아이디어 3개 브레인스토밍 (10분)</strong> — 체크리스트, 템플릿, 미니 강의 중 가장 빠르게 만들 수 있는 것.</li>
        </ol>

        <blockquote className="border-l-4 border-orange-400 pl-4 py-2 my-4 bg-orange-50 dark:bg-orange-950 rounded-r-lg">
          <p><strong>부록 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>모든 템플릿은 노션·구글 독스·종이에 바로 옮겨 쓸 수 있다.</li>
            <li>완벽하게 채우려 하지 마세요 — 하나씩, 조금씩, 꾸준히가 최고의 전략.</li>
            <li>런칭은 이론이 아니라 실행의 게임이다 — <strong>읽고 나서 반드시 한 가지라도 실행하세요.</strong></li>
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

export default function LaunchStorytellingReadPage() {
  return (
    <GuideBook
      bookId="launch-storytelling"
      title="완판의 치트키, 런칭 스토리텔링의 비밀"
      emoji="🚀"
      subtitle="프리런칭부터 수익화 루프까지 — 제품 출시의 A to Z 실전 가이드"
      topItems={topItems}
      sections={sections}
      updateLogs={updateLogs}
      currentVersion={1}
    />
  );
}
