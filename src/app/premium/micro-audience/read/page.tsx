import GuideBook from "@/components/GuideBook";
import type {
  TopItem,
  ContentSection,
  UpdateLog,
} from "@/components/GuideBook";

export const metadata = {
  title: "팔로워 1,000명으로 평생 먹고 사는 법 — 본문 | 살아있는 정보책",
  description:
    "100명의 진짜 팬이면 충분합니다 — 마이크로 오디언스 수익화 완전 가이드. 서문 + 10개 챕터 + 부록 전문. 팔로워당 수익, 진성 팬 시스템, 마이크로 오퍼, 다이렉트 세일즈, 구독 모델, 전략적 파트너십, 30일 로드맵까지.",
};

const topItems: TopItem[] = [
  {
    number: 1,
    title: "100명의 진짜 팬이 10,000명의 무관심보다 나은 이유",
    oneLiner: "중요한 건 팔로워의 '수'가 아니라 팔로워의 '질'이다.",
    description:
      "팔로워당 수익(RPF) 개념, 참여율의 역설, 100명 진짜 팬 공식(100명 x 월 3만 원 = 300만 원), 황금 구간 500~5,000명, 핵심 참여 지표 5가지.",
    situation: "팔로워 수에 집착하며 '만 명이 되면 수익화할 수 있겠지'라고 생각할 때",
    action: "최근 게시물 10개의 참여율을 계산하세요. 5% 이상이면 수익화 준비 완료.",
    mission: "RPF(팔로워당 수익) 개념으로 내 계정의 현재 가치를 숫자로 파악하세요.",
  },
  {
    number: 2,
    title: "진성 팬 판별 시스템: 내 팔로워 중 누가 돈을 쓸까",
    oneLiner: "팔로워는 평등하지 않다 — 3~10%의 진성 팬이 수익의 핵심이다.",
    description:
      "팔로워 4유형(유령·구경꾼·활성·진성), 플랫폼별 진성 팬 찾기, 3단계 DM 소통법(감사·질문·가치), 진성 팬 프로필 템플릿, '시끄러운 소수' 경고.",
    situation: "누가 진짜 고객이 될 수 있는지 구분하지 못해 모든 팔로워에게 똑같이 대할 때",
    action: "최근 30일간 DM을 보낸 사람 목록을 정리하세요. 10명 이상이면 수익화 준비 완료.",
    mission: "진성 팬 프로필 카드를 최소 5명분 작성하세요.",
  },
  {
    number: 3,
    title: "진성 팬의 심리학: 왜 작은 크리에이터에게 돈을 쓰는가",
    oneLiner: "사람들은 알고리즘이 추천한 사람이 아니라, 관계를 맺은 사람에게 돈을 쓴다.",
    description:
      "준사회적 관계에서 진짜 관계로의 전환, 신뢰→구매 5단계 심리 여정, 입소문 폭발력(진성 팬 1명 = 3~5명 노출), 접근성·맞춤화·정체성 프리미엄.",
    situation: "'나 같은 작은 계정에 왜 돈을 쓰겠어?'라는 의구심이 들 때",
    action: "신뢰→구매 5단계 중 내 팔로워가 현재 어디에 있는지 파악하세요.",
    mission: "진성 팬 3명에게 DM을 보내 '관계'를 한 단계 깊게 만드세요.",
  },
  {
    number: 4,
    title: "전문성 진단: 내 안의 숨겨진 보물 찾기",
    oneLiner: "당신에게 '당연한 것'이 다른 사람에게는 '간절한 것'이다.",
    description:
      "지식의 저주 개념, 판매 가능 전문성 공식(기술+결과), 전문성 발견 질문 10가지, 스마트폰 갤러리 테스트, 한국 크리에이터 수익 사례 4가지.",
    situation: "'나는 특별한 전문성이 없는데' 하며 수익화를 주저할 때",
    action: "전문성 발견 질문 10가지에 답하세요. 3개 이상 '예'면 판매 가능합니다.",
    mission: "전문성 선언문을 한 문장으로 완성하세요.",
  },
  {
    number: 5,
    title: "마이크로 오퍼 설계: 지식을 상품으로 패키징하는 법",
    oneLiner: "절대로 상품을 완성한 후에 팔지 마라. 팔린다는 확인 후에 만들어라.",
    description:
      "마이크로 오퍼 정의, 디지털 상품 3대 카테고리(템플릿·미니강의·컨설팅), 카페 테스트 가격 설정법, 사전 검증 3단계(투표→설문→사전판매).",
    situation: "어떤 상품을 얼마에 어떻게 팔아야 할지 감이 잡히지 않을 때",
    action: "디지털 상품 3대 카테고리 중 내 상황에 맞는 1가지를 선택하세요.",
    mission: "마이크로 오퍼 아이디어 3개를 적고, 스토리 투표로 사전 검증하세요.",
  },
  {
    number: 6,
    title: "수익모델 1: 다이렉트 세일즈의 달인 되기",
    oneLiner: "팔려고 하지 마라. 도우려고 하라. 판매는 도움의 자연스러운 연장선이다.",
    description:
      "소프트 셀 전략과 80/20 법칙, 7가지 소프트 셀 기법, 진짜 희소성 vs 가짜 희소성, 한국형 결제 시스템(입문→성장→확장).",
    situation: "'영업하는 느낌'이 싫어서 상품 소개를 꺼리는 크리에이터",
    action: "80/20 콘텐츠 플랜을 세우세요 — 80%는 가치 제공, 20%만 상품 관련.",
    mission: "다이렉트 세일즈 체크리스트 5항목을 확인하고 부족한 것을 채우세요.",
  },
  {
    number: 7,
    title: "수익모델 2: 구독 경제의 강력한 힘",
    oneLiner: "매달 0원에서 시작하지 않는 안정감 — 구독이 크리에이터의 정신 건강을 바꾼다.",
    description:
      "깊이 전략(마이크로) vs 넓이 전략(대형), 프리미엄 콘텐츠 경계(WHAT/WHY vs HOW/EXACTLY), 이탈 방지 5전략, 구독 가격 설정 가이드.",
    situation: "매달 수익이 들쭉날쭉해서 불안하고, 안정적 기반 수입이 필요할 때",
    action: "무료 콘텐츠와 유료 콘텐츠의 경계를 WHAT/WHY vs HOW/EXACTLY로 정리하세요.",
    mission: "구독 서비스 시작 체크리스트 5항목을 점검하세요.",
  },
  {
    number: 8,
    title: "수익모델 3: 전략적 파트너십과 제휴",
    oneLiner: "팔로워 1,000명도 매력적인 제휴 대상이다 — 높은 참여율이 무기다.",
    description:
      "마이크로 제휴가 가능한 이유 4가지, 진정성 있는 제휴 원칙, 투명한 협찬 공개법, 크리에이터 공동 작업 4유형, 3가지 수익 모델 시너지 조합.",
    situation: "'나처럼 작은 계정에 제휴 제안이 올까?'라고 생각할 때",
    action: "제휴 전 3가지 체크(실사용·팬 도움·자율성)를 기준으로 삼으세요.",
    mission: "비슷한 규모의 크리에이터 3명에게 크로스 프로모션을 제안하세요.",
  },
  {
    number: 9,
    title: "30일 수익창출 로드맵: 오늘부터 시작하기",
    oneLiner: "완벽한 준비는 없다. 30일 안에 불완전하게라도 시작하는 것이 10배 더 많이 배운다.",
    description:
      "Week 1 기반 구축(진성 팬 분석+사전 검증), Week 2 MVO 제작(최소 실행 가능 오퍼), Week 3 3-Touch 출시법, Week 4 데이터 분석+최적화.",
    situation: "이론은 다 배웠지만 '어디서부터 시작하지?'가 막막할 때",
    action: "Day 1 할 일: 최근 30일 DM 발신자 목록을 정리하세요.",
    mission: "캘린더에 오늘부터 30일을 표시하고 Week 1 할 일 3가지를 적으세요.",
  },
  {
    number: 10,
    title: "30일 이후: 마이크로 크리에이터의 지속 가능한 성장",
    oneLiner: "복잡함을 추가하기 전에, 검증된 것을 2배로 만들어라.",
    description:
      "확장 전 체크리스트, 가치 사다리(Value Ladder) 5단계, 추천 시스템 구축법, 수익 다각화 순서, RPF 추적 시스템, 크리에이터→브랜드 전환 로드맵.",
    situation: "첫 상품이 팔렸는데 다음에 무엇을 해야 할지 모를 때",
    action: "확장 전 체크리스트 4가지가 모두 '예'인지 확인하세요.",
    mission: "매달 RPF(팔로워당 수익)를 기록하는 대시보드를 만들고 추적을 시작하세요.",
  },
];

const sections: ContentSection[] = [
  {
    id: "preface",
    title: "들어가며 — 팔로워 숫자의 함정에서 벗어나기",
    body: (
      <>
        <p>팔로워 850명으로 <strong>월 420만 원</strong>을 버는 홈카페 크리에이터, 1,233명으로 <strong>월 680만 원</strong>을 버는 반려동물 영양 상담가. 반면 52,000명으로 월 30만 원밖에 못 버는 라이프스타일 크리에이터. 이 격차의 비밀은 팔로워의 &lsquo;수&rsquo;가 아니라 &lsquo;질&rsquo;에 있습니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">이 책에서 배울 5가지</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li>왜 100명의 진짜 팬이 10,000명의 무관심보다 나은지 (수학적 증명)</li>
          <li>내 팔로워 중 누가 진짜 돈을 쓸 사람인지 찾는 법</li>
          <li>내 전문성을 &lsquo;팔리는 상품&rsquo;으로 바꾸는 법</li>
          <li>3가지 수익 모델을 내 상황에 맞게 조합하는 법</li>
          <li>30일 안에 첫 수익을 만드는 실전 로드맵</li>
        </ol>

        <blockquote className="border-l-4 border-purple-400 pl-4 py-2 my-4 bg-purple-50 dark:bg-purple-950 rounded-r-lg">
          <p><strong>서문 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>팔로워 1만 이상 중 월 100만 원 이상 자체 수익 비율: 약 3%. 1,000~5,000명 비율: 약 8%.</li>
            <li>더 이상 숫자를 쫓지 마세요. 관계를 깊게 만드세요.</li>
            <li><strong>1~3장이 전체 전략의 기초이므로 반드시 먼저 읽으세요.</strong></li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch1",
    title: "Ch.1 100명의 진짜 팬이 10,000명의 무관심보다 나은 이유",
    body: (
      <>
        <p>비즈니스 관점에서 진짜 중요한 지표는 <strong>팔로워당 수익(RPF)</strong>입니다. 10만 팔로워 = RPF 30원 vs 1,200명 = RPF 3,000원. 소수에게 깊이 파고드는 전략이 <strong>100배</strong> 효율적입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">참여율의 역설</h3>
        <p>팔로워 1,000명 이하의 인스타 참여율은 8~12%, 50,000명 이상은 0.5~1.5%. <strong>작을수록 참여율이 높습니다.</strong></p>

        <h3 className="text-xl font-bold mt-8 mb-4">100명 진짜 팬 공식</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li>진짜 팬 100명 x 월 3만 원 = <strong>월 300만 원</strong></li>
          <li>월 3만 원 = 전자책 1권 + 뉴스레터 구독, 또는 분기 강의 환산</li>
          <li><strong>황금 구간: 500~5,000명</strong> — 전환율 5~15%로 수익화 최적</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">매일 체크할 핵심 지표 5가지</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>DM 답장률</strong> — 20% 이상이면 건강, 40% 이상이면 수익화 준비 완료</li>
          <li><strong>스토리 반응률</strong> — 5% 이상이면 우수</li>
          <li><strong>이메일 오픈율</strong> — 40% 이상이면 진성 팬 비율 높음</li>
          <li><strong>저장/공유 비율</strong> — 저장 3%+, 공유 1%+ 목표</li>
          <li><strong>깊은 댓글 비율</strong> — 전체 댓글 중 30% 이상이면 진짜 영향력</li>
        </ol>

        <blockquote className="border-l-4 border-purple-400 pl-4 py-2 my-4 bg-purple-50 dark:bg-purple-950 rounded-r-lg">
          <p><strong>1챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>참여율 5% 이상이면 수익화 준비가 되어 있을 가능성이 높다.</li>
            <li>팔로워를 더 모으는 것이 아니라, 지금 있는 팬과의 관계를 전환하는 것이 핵심.</li>
            <li><strong>오늘부터 실행</strong>: 최근 게시물 10개의 참여율을 계산하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch2",
    title: "Ch.2 진성 팬 판별 시스템: 내 팔로워 중 누가 돈을 쓸까",
    body: (
      <>
        <p>팔로워 1,000명 안에는 4유형이 섞여 있습니다. <strong>유령(40~60%)</strong>, 구경꾼(20~30%), 활성 팬(10~20%), 그리고 수익화 핵심인 <strong>진성 팬(3~10%)</strong>.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">플랫폼별 진성 팬 신호</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>인스타그램</strong> — 스토리 반복 답장자, DM 먼저 보내는 사람, 릴스 공유자</li>
          <li><strong>유튜브/틱톡</strong> — 반복 댓글러, 알림 설정자, 슈퍼챗 후원자</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">3단계 DM 소통법</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>감사 DM</strong> — 팔로우/댓글 감사 + 관심 분야 질문</li>
          <li><strong>질문 DM</strong> — 고민 파악 (&quot;지금 가장 고민되는 부분이 뭔가요?&quot;)</li>
          <li><strong>가치 DM</strong> — 무료 자료/조언 제공 (호혜성의 법칙 작동)</li>
        </ol>

        <blockquote className="border-l-4 border-purple-400 pl-4 py-2 my-4 bg-purple-50 dark:bg-purple-950 rounded-r-lg">
          <p><strong>2챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>&quot;시끄러운 소수&quot;에 속지 마라 — 표면적 반응 vs 깊은 참여를 구분하라.</li>
            <li>진성 팬 프로필 20~30개가 모이면 수익화 데이터가 충분하다.</li>
            <li><strong>오늘부터 실행</strong>: 최근 30일 DM 발신자 목록을 엑셀에 정리하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch3",
    title: "Ch.3 진성 팬의 심리학: 왜 작은 크리에이터에게 돈을 쓰는가",
    body: (
      <>
        <p>마이크로 크리에이터에게 DM을 보내면 답장이 옵니다. 이 순간 <strong>준사회적 관계가 진짜 관계로 전환</strong>됩니다. &quot;이 사람은 나를 안다. 나를 기억한다.&quot; — 이것이 수익화의 심리적 기반입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">신뢰에서 구매까지 5단계</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>발견</strong> — &quot;콘텐츠 괜찮은데?&quot;</li>
          <li><strong>인식</strong> — &quot;이 분야의 사람이구나&quot;</li>
          <li><strong>신뢰</strong> — &quot;이 사람 말은 믿을 수 있어&quot; (직접 소통이 가속)</li>
          <li><strong>확신</strong> — &quot;배우면 나도 할 수 있겠다&quot;</li>
          <li><strong>구매</strong> — &quot;더 깊이 배우고 싶다&quot;</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">높은 가격도 지불하는 3가지 이유</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>접근성 프리미엄</strong> — 직접 물어볼 수 있다는 것 자체가 가치</li>
          <li><strong>맞춤화 기대</strong> — 개인 상황에 맞는 조언에 대한 기대</li>
          <li><strong>정체성 투자</strong> — &quot;나는 이 분야에 진지한 사람&quot;이라는 자기 표현</li>
        </ul>

        <blockquote className="border-l-4 border-purple-400 pl-4 py-2 my-4 bg-purple-50 dark:bg-purple-950 rounded-r-lg">
          <p><strong>3챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>마이크로 크리에이터는 5단계를 2~4주 만에 통과시킬 수 있다. 직접 소통이 시간 압축기.</li>
            <li>진성 팬 1명이 평균 3~5명에게 입소문 = 무료이고 지속적이며 신뢰도 높은 마케팅.</li>
            <li><strong>오늘부터 실행</strong>: 내 팔로워가 5단계 중 어디에 있는지 파악하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch4",
    title: "Ch.4 전문성 진단: 내 안의 숨겨진 보물 찾기",
    body: (
      <>
        <p>&quot;저는 특별한 전문성이 없는데요.&quot; — 이것이 <strong>지식의 저주</strong>입니다. 무언가를 잘 알게 되면, 그것을 모르는 상태를 상상하지 못하게 됩니다. 당신에게 &lsquo;당연한 것&rsquo;이 다른 사람에게는 &lsquo;간절한 것&rsquo;입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">판매 가능 전문성 공식</h3>
        <p><strong>판매 가능 전문성 = 당신의 기술(Skill) + 증명 가능한 결과(Result)</strong></p>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li>&quot;요리를 잘해요&quot; &rarr; 판매 불가</li>
          <li>&quot;주말 2시간으로 평일 5일 도시락을 3년째 운영&quot; &rarr; <strong>판매 가능</strong></li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">한국 마이크로 크리에이터 수익 사례</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li>엑셀 자동화 (1,800명) — 템플릿+코칭으로 <strong>월 280만 원</strong></li>
          <li>소형견 수제 간식 (2,400명) — 레시피북+월구독으로 <strong>월 190만 원</strong></li>
          <li>중년 남성 패션 (900명) — 코디 가이드+쇼핑 동행으로 <strong>월 350만 원</strong></li>
          <li>노션 업무 시스템 (3,200명) — 템플릿+팀 컨설팅으로 <strong>월 520만 원</strong></li>
        </ul>

        <blockquote className="border-l-4 border-purple-400 pl-4 py-2 my-4 bg-purple-50 dark:bg-purple-950 rounded-r-lg">
          <p><strong>4챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>스마트폰 갤러리 테스트: 가장 많이 찍은 사진 카테고리가 당신의 전문성이다.</li>
            <li>전문성 발견 질문 10가지 중 3개 이상 &quot;예&quot;면 판매 가능한 전문성이 있다.</li>
            <li><strong>오늘부터 실행</strong>: 전문성 선언문을 한 문장으로 완성하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch5",
    title: "Ch.5 마이크로 오퍼 설계: 지식을 상품으로 패키징하는 법",
    body: (
      <>
        <p>마이크로 오퍼는 <strong>작고, 구체적이고, 즉시 결과를 주는 디지털 상품</strong>입니다. 1~2주면 제작 가능하고, 실패해도 리스크가 낮으며, 한번 만들면 반복 판매할 수 있습니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">디지털 상품 3대 카테고리</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>템플릿/도구</strong> (5천~3만 원, 3~7일) — 노션·엑셀·식단표 등 바로 쓸 수 있는 것</li>
          <li><strong>미니 강의/가이드</strong> (1~10만 원, 1~3주) — 전자책, 동영상, 이메일 코스</li>
          <li><strong>컨설팅/코칭</strong> (3~30만 원, 준비 1~2일) — 1:1 줌, 소그룹, 맞춤 플랜</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">사전 검증 3단계</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>투표</strong> (확신도 30%) — 스토리 투표로 관심도 확인</li>
          <li><strong>설문</strong> (확신도 50%) — 구글 폼으로 구매 의향·과거 지출 확인</li>
          <li><strong>사전 판매</strong> (확신도 90%) — 얼리버드 할인으로 실제 결제. <strong>10명 이상이면 제작 가치 있음</strong></li>
        </ol>

        <blockquote className="border-l-4 border-purple-400 pl-4 py-2 my-4 bg-purple-50 dark:bg-purple-950 rounded-r-lg">
          <p><strong>5챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>카페 테스트: 첫 오퍼는 브런치 세트 가격(1~3만 원)에서 시작하라.</li>
            <li>순서: 문제 정의 &rarr; 카테고리 선택 &rarr; 가격 설정 &rarr; 사전 검증 &rarr; 제작.</li>
            <li><strong>오늘부터 실행</strong>: 마이크로 오퍼 아이디어 3개를 적고 스토리 투표를 올리세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch6",
    title: "Ch.6 수익모델 1: 다이렉트 세일즈의 달인 되기",
    body: (
      <>
        <p>다이렉트 세일즈는 디지털 상품을 팔로워에게 직접 판매하는 모델입니다. <strong>100% 당신의 수익</strong>이며, 관계 기반 판매이므로 이미 쌓은 신뢰를 바로 활용할 수 있습니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">소프트 셀 7가지 기법</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>문제-해결 스토리텔링</strong> — 80% 해결 후 &quot;더 자세한 방법은 상품에서&quot;</li>
          <li><strong>비포-애프터 공유</strong> — 고객 변화를 보여주기만 해도 판매됨</li>
          <li><strong>DM 자연스러운 추천</strong> — 무료 조언 후 &quot;체계적 자료가 있는데 관심 있으시면&quot;</li>
          <li><strong>한정판/시즌 상품</strong> — 자연스러운 소개가 가능한 구조</li>
          <li><strong>커뮤니티 질문 활용</strong> — 자주 받는 질문을 상품으로 연결</li>
          <li><strong>무료 미리보기</strong> — 맛보기 경험이 전체 구매 욕구 유발</li>
          <li><strong>추천인 혜택</strong> — 기존 구매자의 입소문 구조화</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">한국형 결제 시스템</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>입문</strong> — 네이버 스마트스토어, 카카오톡+토스 송금, 크몽</li>
          <li><strong>성장</strong> — 아임웹/카페24, 클래스101, 스텝페이</li>
          <li><strong>확장</strong> — 자체 홈페이지+결제, 멤버십 플랫폼</li>
        </ul>

        <blockquote className="border-l-4 border-purple-400 pl-4 py-2 my-4 bg-purple-50 dark:bg-purple-950 rounded-r-lg">
          <p><strong>6챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>80/20 법칙: 콘텐츠 80%는 가치 제공, 20%만 상품 관련.</li>
            <li>진짜 희소성은 신뢰를 쌓고, 가짜 희소성은 신뢰를 깎는다.</li>
            <li><strong>오늘부터 실행</strong>: 카카오톡 송금이라도 준비하고 첫 10명에게 팔아보세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch7",
    title: "Ch.7 수익모델 2: 구독 경제의 강력한 힘",
    body: (
      <>
        <p>구독자 50명 x 월 3만 원 = <strong>매달 150만 원이 자동으로 시작</strong>됩니다. 매달 0원에서 출발하지 않는 안정감은 크리에이터의 정신 건강과 콘텐츠 품질에 엄청난 영향을 미칩니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">깊이 전략의 핵심 무기</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>전용 Q&amp;A 채널</strong> — 카카오톡 오픈채팅, 디스코드</li>
          <li><strong>월간 딥다이브 콘텐츠</strong> — 무료에서 다루지 않는 심화 내용</li>
          <li><strong>비하인드 씬</strong> — 실패 경험, 수익 보고 등 진짜 이야기</li>
          <li><strong>얼리 액세스</strong> — 신규 상품 먼저 제공 = 특별 대우</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">이탈 방지 5전략</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>첫 7일이 승부</strong> — 웰컴 키트+온보딩으로 즉시 가치 경험</li>
          <li><strong>월 1회 와우 모먼트</strong> — &quot;구독료 이상의 가치&quot; 경험</li>
          <li><strong>커뮤니티 소속감</strong> — 콘텐츠보다 커뮤니티에 더 오래 머묾</li>
          <li><strong>진행 상황 가시화</strong> — 월간 체크리스트, 성장 로그</li>
          <li><strong>해지 사유 파악</strong> — 이유를 알아야 개선 가능</li>
        </ol>

        <blockquote className="border-l-4 border-purple-400 pl-4 py-2 my-4 bg-purple-50 dark:bg-purple-950 rounded-r-lg">
          <p><strong>7챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>무료/유료 경계: 무료는 WHAT+WHY, 유료는 HOW+EXACTLY.</li>
            <li>월 이탈률 5% 이하가 목표 — 10% 이상이면 즉시 대응 필요.</li>
            <li><strong>오늘부터 실행</strong>: 구독 시작 체크리스트 5항목을 점검하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch8",
    title: "Ch.8 수익모델 3: 전략적 파트너십과 제휴",
    body: (
      <>
        <p>팔로워 1,000명도 제휴 대상이 됩니다. 10만 팔로워의 1% 참여 vs 1,000명의 10% 참여 &mdash; <strong>실질 도달은 비슷하고 전환율은 3~5배 높습니다.</strong></p>

        <h3 className="text-xl font-bold mt-8 mb-4">제휴 전 3가지 체크</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>내가 실제로 쓰는 제품인가?</strong> — 사용하지 않는 제품 추천 순간 팬은 알아챔</li>
          <li><strong>팔로워에게 실제로 도움이 되는가?</strong> — 진성 팬 프로필 기준으로 판단</li>
          <li><strong>나의 자율성을 침해하지 않는가?</strong> — 내 톤과 스타일 유지 가능해야 함</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">크리에이터 공동 작업 4유형</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>크로스 프로모션</strong> — 서로의 채널에서 소개 (같은 타겟, 다른 분야)</li>
          <li><strong>공동 상품 제작</strong> — 두 전문성을 합친 번들</li>
          <li><strong>합동 라이브/세미나</strong> — 양쪽 팔로워 동시 유입</li>
          <li><strong>번들 패키지</strong> — 기존 상품을 묶어 제작 비용 없이 새 상품</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">3가지 모델 시너지 조합</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>안정+성장형</strong> — 구독(150만) + 분기 상품(100만) + 연 2~3회 제휴</li>
          <li><strong>고단가 집중형</strong> — 1:1 컨설팅 + 소그룹 코칭 + 도구 제휴</li>
          <li><strong>자동화 중심형</strong> — 전자책 + 녹화 강의 + 구독 뉴스레터 + 제휴</li>
        </ul>

        <blockquote className="border-l-4 border-purple-400 pl-4 py-2 my-4 bg-purple-50 dark:bg-purple-950 rounded-r-lg">
          <p><strong>8챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>협찬은 콘텐츠 시작 부분에 투명하게 공개하라 — 투명성이 오히려 전략적 무기.</li>
            <li>1가지 모델로 월 100만 원 만든 후, 하나씩 추가하라.</li>
            <li><strong>오늘부터 실행</strong>: 비슷한 규모의 크리에이터 3명에게 협업을 제안하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch9",
    title: "Ch.9 30일 수익창출 로드맵: 오늘부터 시작하기",
    body: (
      <>
        <p>이 로드맵의 목표는 &lsquo;완벽한 상품 출시&rsquo;가 아니라 <strong>&lsquo;첫 유료 고객 확보&rsquo;</strong>입니다. 첫 1명에게 돈을 받는 경험이 10권의 마케팅 책보다 강력합니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">4주 로드맵 요약</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>Week 1 (기반 구축)</strong> — 진성 팬 분석, 모델 선택, 사전 검증. 완료 기준: 5명+ 관심 확인</li>
          <li><strong>Week 2 (MVO 제작)</strong> — 최소 실행 가능 오퍼 제작 + 테스트 판매. 완료 기준: 3명+ 테스트 판매</li>
          <li><strong>Week 3 (3-Touch 출시)</strong> — 티저 &rarr; 공식 출시 &rarr; 마감 안내. 완료 기준: 10명+ 판매</li>
          <li><strong>Week 4 (최적화)</strong> — 데이터 분석, 피드백 수집, 다음 계획. 완료 기준: 개선안+90일 계획</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">구매자에게 물어볼 핵심 3질문</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li>&quot;가장 도움이 된 부분은?&quot;</li>
          <li>&quot;추가되었으면 하는 내용은?&quot;</li>
          <li>&quot;주변에 추천한다면, 누구에게 어떻게 소개하시겠어요?&quot; — <strong>고객의 언어가 최고의 마케팅 카피</strong></li>
        </ol>

        <blockquote className="border-l-4 border-purple-400 pl-4 py-2 my-4 bg-purple-50 dark:bg-purple-950 rounded-r-lg">
          <p><strong>9챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>MVO = 80% 완성도로 출시. 나머지 20%는 고객 피드백으로 개선.</li>
            <li>출시 주간에는 평소보다 2배 이상 소통하라.</li>
            <li><strong>오늘부터 실행</strong>: 캘린더에 30일을 표시하고 Day 1 할 일을 시작하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch10",
    title: "Ch.10 30일 이후: 마이크로 크리에이터의 지속 가능한 성장",
    body: (
      <>
        <p>첫 성공 후 가장 흔한 실패 패턴은 <strong>&lsquo;너무 빨리 확장하는 것&rsquo;</strong>입니다. 두 번째 상품 전에, 첫 상품을 월 100만 원에서 200만 원으로 만드는 방법을 먼저 찾으세요.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">가치 사다리(Value Ladder) 5단계</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>무료 콘텐츠</strong> &rarr; 팔로워</li>
          <li><strong>저가 상품</strong> (1~3만 원) &rarr; 첫 구매자</li>
          <li><strong>중가 상품</strong> (5~15만 원) &rarr; 충성 고객</li>
          <li><strong>고가 상품</strong> (20~100만 원) &rarr; VIP 고객</li>
          <li><strong>프리미엄</strong> (100만 원+) &rarr; 파트너</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">RPF 목표 기준</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>시작 단계</strong> — 월 500~1,000원</li>
          <li><strong>안정 단계</strong> — 월 1,000~3,000원</li>
          <li><strong>성장 단계</strong> — 월 3,000~5,000원</li>
          <li><strong>고수 단계</strong> — 월 5,000원 이상</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">크리에이터에서 브랜드로: 4가지 전환</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>사람 &rarr; 시스템</strong> — 자동화 상품 비중을 높여 시간과 수익 분리</li>
          <li><strong>1:1 &rarr; 1:다</strong> — 노하우 체계화 후 그룹 코칭·강의·커뮤니티</li>
          <li><strong>콘텐츠 &rarr; 커뮤니티</strong> — 커뮤니티가 콘텐츠보다 강한 잠금 효과</li>
          <li><strong>수익 &rarr; 영향력</strong> — 출판, 강연, 새로운 사업 영역으로 확장</li>
        </ul>

        <blockquote className="border-l-4 border-purple-400 pl-4 py-2 my-4 bg-purple-50 dark:bg-purple-950 rounded-r-lg">
          <p><strong>10챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>확장 전 체크리스트: 현재 상품 3개월 안정 + 만족도 높음 + 마케팅 여지 + 시간 여유.</li>
            <li>RPF가 올라가면 전략이 맞는 것, 내려가면 관계 깊이가 얕아진 것.</li>
            <li><strong>오늘부터 실행</strong>: RPF 추적 대시보드를 만들고 매달 기록하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "appendix",
    title: "부록 — 복사해 쓰는 마이크로 수익화 실행 키트",
    body: (
      <>
        <p>본문의 핵심 도구를 <strong>바로 복사해서 쓸 수 있는 템플릿</strong>으로 정리했습니다. 출력하거나 노션에 복사해서 활용하세요.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">8종 템플릿 목록</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>진성 팬 프로필 카드</strong> — 기본정보+핵심분석+참여수준+소통이력+추천상품</li>
          <li><strong>전문성 진단 워크시트</strong> — 기술 발굴 &rarr; 결과 증명 &rarr; 전문성 선언문</li>
          <li><strong>마이크로 오퍼 설계 캔버스</strong> — 타겟·가치·형태·가격·검증·일정</li>
          <li><strong>가격 설정 가이드</strong> — 팔로워 규모별 상품 유형별 가격표</li>
          <li><strong>30일 로드맵 일일 체크리스트</strong> — Day 1~30 할 일 + 주차별 완료 기준</li>
          <li><strong>DM 소통 스크립트 5가지</strong> — 신규 환영·후속·무료 자료·의견 수집·상품 소개</li>
          <li><strong>사전 판매 페이지 템플릿</strong> — 헤드라인~FAQ 8단계 구조</li>
          <li><strong>월간 수익 대시보드</strong> — RPF·수익 구성·참여 지표·고객 지표 추적</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">FAQ 핵심 5선</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>팔로워 500명 미만도 시작 가능?</strong> — 진성 팬 10명이면 충분. DM 중심 판매로.</li>
          <li><strong>무료/유료 콘텐츠 경계는?</strong> — 무료=WHAT+WHY, 유료=HOW+EXACTLY.</li>
          <li><strong>아무도 안 사면?</strong> — 대부분 사전 검증 부재가 원인. 진성 팬 5명에게 먼저 물어보세요.</li>
          <li><strong>세금은?</strong> — 초기에는 간이과세자, 월 100만 원 넘으면 세무사 상담 추천.</li>
          <li><strong>팔로워 늘면 전략을 바꿔야?</strong> — 아니요. 자동화(이메일·챗봇)를 추가해 깊이 유지+효율 향상.</li>
        </ul>

        <blockquote className="border-l-4 border-purple-400 pl-4 py-2 my-4 bg-purple-50 dark:bg-purple-950 rounded-r-lg">
          <p><strong>부록 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>모든 템플릿은 노션·구글 독스·종이에 바로 옮겨 쓸 수 있다.</li>
            <li>완벽한 준비보다 불완전한 실행이 100배 낫다.</li>
            <li>오늘, 진성 팬 프로필 카드 1장부터 작성해 보세요.</li>
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
    changes: ["초판 발행: 마이크로 오디언스 수익화 10챕터 + 부록 실행 키트"],
  },
];

export default function MicroAudienceRead() {
  return (
    <GuideBook
      bookId="micro-audience"
      title="팔로워 1,000명으로 평생 먹고 사는 법"
      emoji="👥"
      subtitle="100명의 진짜 팬이면 충분합니다 — 마이크로 오디언스 수익화 완전 가이드"
      topItems={topItems}
      sections={sections}
      updateLogs={updateLogs}
      currentVersion={1}
    />
  );
}
