import GuideBook from "@/components/GuideBook";
import type {
  TopItem,
  ContentSection,
  UpdateLog,
} from "@/components/GuideBook";

export const metadata = {
  title: "사람의 마음을 휘어잡는 스토리텔링의 기술 — 본문 | 살아있는 정보책",
  description:
    "브랜드 스토리로 팔로워를 팬으로, 고객을 전도사로 만드는 법. 서문 + 10개 챕터 + 부록 전문. 영웅의 여정, BAB·PAS·AIDA 공식, 오리진 스토리 템플릿, 감정 트리거, 플랫폼별 전략까지.",
};

const topItems: TopItem[] = [
  {
    number: 1,
    title: "브랜드의 심장을 찾아라: 핵심 스토리 발굴",
    oneLiner: "핵심 스토리 하나가 예약률을 3배로 만든다.",
    description:
      "영웅의 여정 프레임워크로 브랜드가 존재하는 진짜 이유를 찾습니다. TOMS·파타고니아·마켓컬리 사례 분석, 12가지 질문 세트로 핵심 가치를 발굴하고 3단계 필터로 정제합니다.",
    situation: "제품은 좋은데 소개 한 줄 쓰지 못해 SNS 반응이 0일 때",
    action: "12가지 질문 세트에 솔직하게 답하고, 감정이 가장 움직이는 답변 3개를 골라보세요.",
    mission: "핵심 스토리 한 문단 템플릿을 채워 브랜드 소개에 넣어보세요.",
  },
  {
    number: 2,
    title: "사람을 사로잡는 서사의 구조",
    oneLiner: "구조가 없으면, 아무리 좋은 내용이라도 사람들이 떠난다.",
    description:
      "주인공·갈등·해결의 3요소와 BAB·PAS 프레임워크. 고객이 영웅이고 브랜드가 가이드인 StoryBrand 모델, 감정적 트리거 4가지, 입체적 캐릭터형 페르소나 설계법.",
    situation: "브랜드 소개를 쓰면 항상 딱딱하고 지루해져서 아무도 안 읽을 때",
    action: "BAB 구조로 고객의 Before·After·Bridge를 한 줄씩 써보세요.",
    mission: "서사 구조 설계 워크시트 8칸을 채워 웹사이트 메인 카피에 적용하세요.",
  },
  {
    number: 3,
    title: "오리진 스토리: 시작의 순간을 무기로 만드는 법",
    oneLiner: "사람들은 당신이 무엇을 하는지보다 왜 하는지에 끌린다.",
    description:
      "사이먼 사이넥의 골든서클 이론, 취약함이 신뢰를 만드는 브레네 브라운 연구. 한국 1인 사업자를 위한 5단계 오리진 스토리 작성법과 3분 엘리베이터 피치 템플릿.",
    situation: "네트워킹 모임에서 자기소개가 매번 어색하고 기억에 안 남을 때",
    action: "5단계 작성법으로 각 단계별 2~3문장씩 오리진 스토리 초안을 쓰세요.",
    mission: "3분 엘리베이터 피치 템플릿을 완성해 다음 모임에서 사용하세요.",
  },
  {
    number: 4,
    title: "고객을 주인공으로: 그들의 이야기가 최고의 마케팅이다",
    oneLiner: "당신이 100번 말하는 것보다 고객 한 명의 한마디가 더 강하다.",
    description:
      "고객 후기를 서사로 변환하는 5단계 프레임. 스토리 추출 질문 5가지, 진정성 있는 후기 수집법, 부정적 피드백 활용 3단계, 사례 연구(Case Study) 작성 구조.",
    situation: "고객 후기가 '좋았습니다. 별 다섯 개'뿐이어서 마케팅에 활용 못 할 때",
    action: "가장 만족한 고객에게 스토리 추출 질문 5가지를 보내보세요.",
    mission: "베스트 고객 한 명의 이야기를 사례 연구 구조에 맞춰 완성하세요.",
  },
  {
    number: 5,
    title: "플랫폼별 스토리텔링: 같은 이야기, 다른 무대",
    oneLiner: "좋은 이야기를 하나의 플랫폼에만 쓰는 것은 낭비다.",
    description:
      "인스타그램·스레드·유튜브·블로그·이메일·팟캐스트 6개 플랫폼 맞춤 전략. 콘텐츠 재활용(Content Repurposing) 전략과 브랜드 스토리 바이블 만들기.",
    situation: "인스타·블로그·유튜브 플랫폼마다 뭘 올려야 할지 몰라 결국 안 올릴 때",
    action: "핵심 스토리 하나를 정해 3개 플랫폼에 형식만 바꿔서 올려보세요.",
    mission: "브랜드 스토리 바이블 7개 항목을 채워 콘텐츠 일관성을 확보하세요.",
  },
  {
    number: 6,
    title: "감정의 고리: 사람들이 행동하게 만드는 스토리의 비밀",
    oneLiner: "논리는 생각하게 하고, 감정은 행동하게 한다.",
    description:
      "감정적 트리거 6가지(공감·놀라움·희망·분노·소속감·자부심), 은유와 비유 활용법, 클리프행어 기법 4가지, CTA를 서사에 녹이는 공식. 감정 맵 설계.",
    situation: "좋아요는 많은데 실제 문의나 구매로 이어지지 않을 때",
    action: "다음 콘텐츠에 감정적 트리거 2개 이상을 의식적으로 넣어보세요.",
    mission: "타깃 고객의 감정 맵(5단계)을 그려 각 단계에 맞는 스토리를 설계하세요.",
  },
  {
    number: 7,
    title: "진정성의 시대: AI가 넘치는 세상에서 진짜가 되는 법",
    oneLiner: "AI가 만든 매끄러운 글 사이에서 진짜 이야기가 더 빛난다.",
    description:
      "가짜 스토리가 들통나는 이유, 취약함(vulnerability)의 적정 수준, 실수 인정의 4단계 공식, 브랜드 보이스 설계 워크시트, AI 시대 진정성 전략 5가지.",
    situation: "AI로 쓴 매끄러운 글인데 사람들의 반응이 냉담할 때",
    action: "최근 SNS 게시물 10개를 진정성 자가 점검 체크리스트로 검토하세요.",
    mission: "비하인드 더 씬 콘텐츠를 하나 올려보고 반응 변화를 확인하세요.",
  },
  {
    number: 8,
    title: "바로 쓰는 스토리텔링 공식 7가지",
    oneLiner: "프로는 영감이 아니라 공식(framework)으로 쓴다.",
    description:
      "영웅의 여정, BAB, PAS, AIDA, Star-Chain-Hook, BAB 확장형, 3막 구조 — 7가지 공식과 상황별 선택 가이드. 같은 주제를 7가지로 풀어보는 실전 워크숍.",
    situation: "매번 콘텐츠 주제는 있는데 어떻게 시작해야 할지 빈 화면 앞에서 멈출 때",
    action: "핵심 서비스 하나를 BAB 공식으로 3문장 써보세요.",
    mission: "같은 주제를 7가지 공식으로 각각 3문장씩 써보고, 가장 자연스러운 것을 찾으세요.",
  },
  {
    number: 9,
    title: "측정하고 진화하라: 스토리의 성과를 추적하는 법",
    oneLiner: "감으로 하는 스토리텔링은 한계가 있다.",
    description:
      "참여율·전환율·감정 분석의 3축 측정 체계, A/B 테스트로 스토리 최적화, 분기별 리뷰 체크리스트, 스토리 성과 추적 대시보드 만들기.",
    situation: "콘텐츠 반응이 좋은지 나쁜지 감으로만 판단하고 개선 방향을 모를 때",
    action: "이번 달 콘텐츠 중 가장 반응이 좋은 것과 나쁜 것 하나씩 꺼내 차이를 분석하세요.",
    mission: "구글 스프레드시트에 스토리 성과 추적 대시보드를 만들고 1주일간 기록하세요.",
  },
  {
    number: 10,
    title: "스토리로 행동을 이끌어라: 팔로워를 고객으로, 고객을 팬으로",
    oneLiner: "팔로워 1만 명이어도, 행동으로 연결하는 다리가 없으면 매출은 0이다.",
    description:
      "감정→결정→행동의 3단계 흐름, 성공의 생생한 그림 그리기, 스토리 기반 긴급성 3가지, 커뮤니티 구축 4단계, 나이키·에어비앤비 사례, 팔로워→팬 전환 로드맵.",
    situation: "팔로워는 많은데 실제 매출이 거의 없을 때",
    action: "고객이 서비스 사용 후의 삶을 구체적 장면(시간·장소·행동·감각·감정)으로 묘사하세요.",
    mission: "전환 퍼널 각 단계에 배치할 스토리를 하나씩 설계하세요.",
  },
];

const sections: ContentSection[] = [
  {
    id: "preface",
    title: "들어가며 — 왜 어떤 브랜드는 기억에 남고, 어떤 브랜드는 사라지는가",
    body: (
      <>
        <p>2024년, 한국에서 신규 창업한 사업자 수는 약 130만 명이었습니다. 그중 3년을 넘기는 비율은 40%가 채 되지 않습니다. 살아남은 브랜드와 사라진 브랜드의 차이는 무엇일까요? 자본력? 기술력? 물론 중요합니다. 하지만 결정적인 차이는 <strong>이야기</strong>에 있습니다.</p>
        <p>뇌과학 연구에 따르면, 팩트를 들을 때는 뇌의 언어 처리 영역 2곳만 활성화되지만, 이야기를 들을 때는 감각, 운동, 감정 영역까지 총 <strong>7개 영역</strong>이 동시에 반응합니다. 이야기는 단순한 커뮤니케이션 기법이 아닙니다. 인간의 뇌가 정보를 받아들이는 가장 자연스러운 방식입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">스토리텔링이 브랜드의 생사를 가른다</h3>
        <p>&quot;좋은 원두로 맛있는 커피를 만듭니다&quot;라고 말하는 카페와, &quot;저는 10년간 회사원이었는데, 매일 아침 편의점 커피로 하루를 시작하는 게 너무 슬펐습니다. 그래서 퇴사하고 에티오피아 농장을 직접 찾아갔습니다&quot;라고 말하는 카페. 첫 번째는 <strong>정보</strong>이고, 두 번째는 <strong>이야기</strong>입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">이 책이 당신에게 드리는 약속</h3>
        <p><strong>1장~3장: 발견</strong> — 핵심 이야기를 찾고, 서사 구조를 잡고, 오리진 스토리를 완성합니다.</p>
        <p><strong>4장~6장: 확산</strong> — 고객의 이야기를 활용하고, 플랫폼별 최적화하고, 감정의 고리를 만듭니다.</p>
        <p><strong>7장~8장: 심화</strong> — AI 시대의 진정성을 확보하고, 7가지 스토리텔링 공식을 마스터합니다.</p>
        <p><strong>9장~10장: 성장</strong> — 스토리의 성과를 측정하고, 팔로워를 팬으로 전환합니다.</p>
        <p><strong>부록: 실행 키트</strong> — 워크시트, 템플릿, 치트시트를 복사해서 바로 사용합니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">누구를 위한 책인가</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li>개인 브랜드를 구축하려는 1인 사업자, 프리랜서, 코치, 컨설턴트</li>
          <li>자사 브랜드의 이야기를 체계적으로 정리하고 싶은 소규모 사업자</li>
          <li>SNS 마케팅에서 &quot;팔리는 콘텐츠&quot;를 만들고 싶은 마케터</li>
          <li>고객과 깊은 관계를 만들고 싶은 모든 사람</li>
        </ul>
        <p>스토리텔링은 타고나는 재능이 아닙니다. 구조를 알면 누구나 할 수 있는 <strong>기술</strong>입니다. 이제 당신의 이야기를 시작할 시간입니다.</p>
      </>
    ),
  },
  {
    id: "ch1",
    title: "Ch.1 브랜드의 심장을 찾아라: 핵심 스토리 발굴",
    body: (
      <>
        <p>강남역 근처에서 네일숍을 운영하는 지원 씨는 고민이 있었습니다. 기술은 좋은데, 고객이 자꾸 더 싼 곳으로 갑니다. 그런데 지원 씨에게는 이런 이야기가 있었습니다. 어린 시절 아토피가 심해서 손을 늘 숨겼고, 손톱을 예쁘게 꾸미는 게 유일한 자신감의 원천이었다는 것. &quot;손끝에서 시작되는 자신감&quot;이라는 핵심 스토리를 찾은 후, 예약률은 3배가 되었습니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">영웅의 여정(Hero&apos;s Journey) 프레임워크</h3>
        <p><strong>1단계: 일상 세계</strong> — 창업 전의 당신. 평범한 직장인, 학생, 주부였던 시절.</p>
        <p><strong>2단계: 모험의 부름</strong> — &quot;이건 아닌데...&quot; 하고 느낀 그 순간.</p>
        <p><strong>3단계: 문턱 넘기</strong> — 퇴사, 첫 상품 출시, 첫 고객.</p>
        <p><strong>4단계: 시련과 동맹</strong> — 통장 잔고 0원, 첫 악성 리뷰.</p>
        <p><strong>5단계: 보물 획득</strong> — 비즈니스 모델의 전환점.</p>
        <p><strong>6단계: 귀환과 변화</strong> — 그 깨달음으로 세상에 가치를 돌려주는 지금.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">핵심 가치 찾기: 12가지 질문 세트</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li>이 일을 시작하기 전, 가장 불만이었던 것은?</li>
          <li>&quot;이건 내가 해야 해&quot;라고 느낀 구체적인 순간이 있나요?</li>
          <li>주변에서 가장 많이 만류한 것은?</li>
          <li>가장 힘들었던 순간 세 가지를 꼽는다면?</li>
          <li>그 위기를 넘길 수 있었던 결정적 이유는?</li>
          <li>첫 고객(또는 첫 성공)의 반응은 어땠나요?</li>
          <li>이 일을 하면서 가장 보람을 느끼는 순간은?</li>
          <li>고객에게 가장 자주 듣는 감사의 말은?</li>
          <li>경쟁자와 비교해서, 당신만이 줄 수 있는 것은?</li>
          <li>5년 후 이 브랜드가 세상에 어떤 변화를 만들었으면 좋겠나요?</li>
          <li>당신의 일을 한 문장으로 설명한다면? (가치 중심으로)</li>
          <li>어린 시절의 어떤 경험이 지금의 일과 연결되나요?</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">핵심 스토리 정제하기: 3단계 필터</h3>
        <p><strong>필터 1: 감정 테스트</strong> — 이 이야기를 말할 때 당신의 가슴이 뛰는가?</p>
        <p><strong>필터 2: 공감 테스트</strong> — 타깃 고객이 &quot;나도 그래!&quot;라고 말할 수 있는 이야기인가?</p>
        <p><strong>필터 3: 차별화 테스트</strong> — 이 이야기를 경쟁자가 똑같이 할 수 있는가?</p>

        <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-amber-50 dark:bg-amber-950 rounded-r-lg">
          <p><strong>1챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>핵심 스토리란 브랜드가 존재하는 진짜 이유다 — 제품이 아니라 사람의 이야기.</li>
            <li>12가지 질문으로 발굴하고, 3단계 필터(감정·공감·차별화)로 정제하라.</li>
            <li><strong>오늘부터 실행</strong>: 핵심 스토리 한 문단 템플릿을 채워보세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch2",
    title: "Ch.2 사람을 사로잡는 서사의 구조",
    body: (
      <>
        <p>넷플릭스를 켜면 30초 안에 계속 볼지 결정합니다. 인스타그램 스토리는 1초 만에 넘겨집니다. 당신의 브랜드 이야기도 마찬가지입니다. <strong>구조가 없으면, 아무리 좋은 내용이라도 사람들이 떠납니다.</strong></p>

        <h3 className="text-xl font-bold mt-8 mb-4">서사의 3요소: 주인공, 갈등, 해결</h3>
        <h4 className="text-lg font-semibold mt-6 mb-3">1. 주인공: 브랜드인가, 고객인가?</h4>
        <p>도날드 밀러의 StoryBrand 프레임워크: <strong>&quot;당신의 브랜드는 주인공이 아니라 가이드다.&quot;</strong> 루크 스카이워커가 주인공이고, 요다가 가이드인 것처럼. 고객이 영웅이고, 당신의 브랜드는 그 영웅을 돕는 현자입니다.</p>

        <h4 className="text-lg font-semibold mt-6 mb-3">2. 갈등: 이야기의 엔진</h4>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>외적 갈등</strong>: 구체적 문제. &quot;피부가 건조해서 화장이 안 먹어요.&quot;</li>
          <li><strong>내적 갈등</strong>: 감정적 고통. &quot;자신감이 떨어져서 사람 만나기가 싫어요.&quot;</li>
          <li><strong>철학적 갈등</strong>: 가치관 충돌. &quot;좋은 화장품은 왜 이렇게 비싸야 하는 거죠?&quot;</li>
        </ul>

        <h4 className="text-lg font-semibold mt-6 mb-3">3. 해결: 변화의 약속</h4>
        <p>&quot;건조함이 사라진다&quot;가 아니라 &quot;아침에 거울을 보며 웃게 된다&quot;입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">실전 프레임워크: BAB &amp; PAS</h3>
        <p><strong>BAB (Before-After-Bridge)</strong>: 고객의 현재 고통 &rarr; 변화된 미래 &rarr; 당신의 솔루션.</p>
        <p><strong>PAS (Problem-Agitate-Solution)</strong>: 문제 제시 &rarr; 문제 심화(감정 자극) &rarr; 해결책 제시.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">실전 워크숍: 나의 브랜드 서사 구조 설계</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>주인공 (고객)</strong>: 구체적으로 누구인가?</li>
          <li><strong>외적 갈등</strong>: 어떤 구체적 문제를 겪고 있는가?</li>
          <li><strong>내적 갈등</strong>: 그 문제 때문에 어떤 감정을 느끼는가?</li>
          <li><strong>가이드 (당신)</strong>: 왜 이 문제를 해결할 자격이 있는가?</li>
          <li><strong>계획</strong>: 고객이 따라야 할 단계는? (3단계 이내)</li>
          <li><strong>행동 촉구</strong>: 지금 바로 할 수 있는 첫 번째 행동은?</li>
          <li><strong>성공의 모습</strong>: 문제가 해결된 후의 구체적 장면은?</li>
          <li><strong>실패의 모습</strong>: 행동하지 않으면 어떻게 되는가?</li>
        </ol>

        <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-amber-50 dark:bg-amber-950 rounded-r-lg">
          <p><strong>2챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>모든 이야기는 주인공·갈등·해결 세 요소로 이루어져 있다.</li>
            <li>BAB와 PAS 프레임워크를 상황에 맞게 선택하라.</li>
            <li><strong>오늘부터 실행</strong>: 서사 구조 설계 워크시트 8칸을 채워보세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch3",
    title: "Ch.3 오리진 스토리: 시작의 순간을 무기로 만드는 법",
    body: (
      <>
        <p>사람들은 당신이 <strong>무엇을</strong> 하는지보다 <strong>왜</strong> 하는지에 끌립니다. 사이먼 사이넥의 골든서클 이론이 증명한 것이 바로 이것입니다. 당신의 오리진 스토리는 브랜드의 DNA입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">취약함의 힘: 완벽한 척 하지 마세요</h3>
        <p>브레네 브라운 교수의 연구에 따르면, <strong>취약함(vulnerability)을 보여줄 때 신뢰가 형성됩니다.</strong> &quot;처음부터 잘했다&quot;는 이야기는 감탄을 주지만 공감을 주지 못합니다. &quot;처음에 완전히 망했다&quot;는 이야기가 &quot;나도 그런 적 있는데&quot;라는 연결고리를 만듭니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">실패와 도전을 솔직하게 말하는 기술</h3>
        <p><strong>피해야 할 것:</strong> 동정을 구하는 톤, 과장된 비극, 남 탓.</p>
        <p><strong>해야 할 것:</strong> 구체적 장면 묘사(&quot;통장 잔고가 23만 원이었던 2019년 3월&quot;), 감정의 솔직한 표현, 전환점 강조, 현재와 연결.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">한국 1인 사업자를 위한 오리진 스토리 5단계</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>과거의 나</strong> — 지금의 일을 시작하기 전, 어떤 삶을 살고 있었는가?</li>
          <li><strong>균열의 순간</strong> — 무언가가 달라져야 한다고 느낀 결정적 사건은?</li>
          <li><strong>결심과 행동</strong> — 무엇을 결심했고, 어떻게 시작했는가?</li>
          <li><strong>위기와 돌파</strong> — 가장 힘든 순간과 그것을 극복한 방법은?</li>
          <li><strong>지금의 사명</strong> — 이 경험이 지금의 일과 어떻게 연결되는가?</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">3분 엘리베이터 피치 스토리 템플릿</h3>
        <p>[도입 30초] 공감 가는 질문 &rarr; [과거 40초] 구체적 장면 &rarr; [전환점 30초] 결정적 사건 &rarr; [깨달음 20초] 핵심 통찰 &rarr; [현재 40초] 지금 하는 일과 가치 &rarr; [마무리 20초] 청자에게 연결.</p>

        <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-amber-50 dark:bg-amber-950 rounded-r-lg">
          <p><strong>3챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>&quot;왜 시작했는가&quot;가 가장 강력한 마케팅이다.</li>
            <li>취약함을 보여줄 때 신뢰가 형성된다 — 단, &quot;실패 &rarr; 깨달음 &rarr; 성장&quot;의 아크를 만들어라.</li>
            <li><strong>오늘부터 실행</strong>: 5단계 작성법으로 오리진 스토리 초안을 써보세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch4",
    title: "Ch.4 고객을 주인공으로: 그들의 이야기가 최고의 마케팅이다",
    body: (
      <>
        <p>닐슨 리서치에 따르면, 소비자의 92%가 브랜드 광고보다 다른 소비자의 추천을 더 신뢰합니다. 당신이 &quot;우리 서비스는 최고입니다&quot;라고 100번 말하는 것보다, 고객 한 명이 &quot;이 서비스 덕분에 인생이 바뀌었어요&quot;라고 한 번 말하는 게 더 효과적입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">고객 후기를 서사로 변환하는 5단계</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>깊이 있는 후기 수집</strong> — 스토리 추출 질문 5가지로 이야기를 이끌어냅니다.</li>
          <li><strong>핵심 서사 아크 추출</strong> — Before(이전 고통) &rarr; Turning Point(전환점) &rarr; After(변화된 현재).</li>
          <li><strong>구체적 장면으로 변환</strong> — &quot;효과가 좋았어요&quot; &rarr; &quot;3년 만에 처음으로 기지개를 켜면서 웃었습니다.&quot;</li>
          <li><strong>감정 포인트 강화</strong> — 사실에 감정을 더합니다.</li>
          <li><strong>고객 확인과 동의</strong> — 이 과정 자체가 관계를 더 깊게 만듭니다.</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">사회적 증거의 5가지 유형</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>숫자의 힘</strong>: &quot;3,000명이 선택한 프로그램&quot;</li>
          <li><strong>유사성</strong>: 타깃과 비슷한 사람의 후기가 가장 강력</li>
          <li><strong>권위</strong>: 전문가 추천</li>
          <li><strong>생생함</strong>: &quot;3주 만에 체중 2.3kg 감량&quot;</li>
          <li><strong>최신성</strong>: 어제의 후기가 6개월 전 후기보다 강력</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">부정적 피드백 활용 3단계</h3>
        <p><strong>1. 인정</strong>: &quot;맞습니다. 저희가 부족했습니다.&quot; <strong>2. 행동</strong>: &quot;이렇게 개선했습니다.&quot; <strong>3. 감사</strong>: &quot;덕분에 더 나아졌습니다.&quot;</p>

        <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-amber-50 dark:bg-amber-950 rounded-r-lg">
          <p><strong>4챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>고객의 말이 당신의 말보다 10배 강력하다.</li>
            <li>후기를 서사로 바꿔야 마케팅 자산이 된다 — Before &rarr; Turning Point &rarr; After.</li>
            <li><strong>오늘부터 실행</strong>: 가장 만족한 고객에게 스토리 추출 질문 5가지를 보내보세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch5",
    title: "Ch.5 플랫폼별 스토리텔링: 같은 이야기, 다른 무대",
    body: (
      <>
        <p>좋은 이야기를 하나 만들었다면, 그것을 하나의 플랫폼에만 쓰는 것은 낭비입니다. 핵심 원칙: <strong>메시지는 같되, 형식은 다르게.</strong></p>

        <h3 className="text-xl font-bold mt-8 mb-4">6개 플랫폼 맞춤 전략</h3>
        <h4 className="text-lg font-semibold mt-6 mb-3">1. 인스타그램: 시각으로 말하라</h4>
        <p>카루셀 포스트로 서사 구조 활용. 첫 장은 후크, 마지막 장은 CTA. 릴스 15~30초에 비포-애프터 압축.</p>

        <h4 className="text-lg font-semibold mt-6 mb-3">2. 스레드/X: 텍스트의 힘</h4>
        <p>첫 문장에 반드시 후크. &quot;5년 전 통장 잔고 0원이었습니다.&quot; 개인적 실패/깨달음이 특히 잘 먹힘.</p>

        <h4 className="text-lg font-semibold mt-6 mb-3">3. 유튜브: 영상으로 몰입시켜라</h4>
        <p>처음 30초에 &quot;이 영상을 끝까지 보면 얻는 것&quot; 명시. 고객 인터뷰 영상은 최고의 사회적 증거.</p>

        <h4 className="text-lg font-semibold mt-6 mb-3">4. 블로그: 깊이 있는 서사</h4>
        <p>키워드와 스토리의 결합. &quot;직장인 영양제 추천&quot; &rarr; &quot;만성 피로에 시달리던 직장인이 찾은 답&quot;.</p>

        <h4 className="text-lg font-semibold mt-6 mb-3">5. 이메일 뉴스레터: 시리즈의 힘</h4>
        <p>웰컴 시퀀스에 오리진 스토리 배치. 개인적 에피소드 &rarr; 교훈 &rarr; 실행 팁 구조.</p>

        <h4 className="text-lg font-semibold mt-6 mb-3">6. 팟캐스트: 목소리의 진정성</h4>
        <p>대화형 스토리텔링. &quot;요즘 제가 겪고 있는 일&quot;처럼 현재진행형 스토리.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">브랜드 스토리 바이블 만들기</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li>핵심 메시지: 한 문장으로 된 브랜드의 존재 이유</li>
          <li>오리진 스토리: 100자, 300자, 1000자 세 가지 버전</li>
          <li>톤 &amp; 보이스: 말투, 금지어, 감정 온도</li>
          <li>주요 스토리 자산: 반복 사용할 에피소드 5~10개</li>
          <li>고객 스토리 라이브러리: 수집된 고객 사례 모음</li>
          <li>비주얼 가이드: 사진/영상 스타일, 색상, 폰트</li>
          <li>금지 사항: 절대 하지 않을 것들 (경쟁사 비방, 과장 광고 등)</li>
        </ol>

        <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-amber-50 dark:bg-amber-950 rounded-r-lg">
          <p><strong>5챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>하나의 스토리를 6개 플랫폼에 맞춰 변환하면 콘텐츠 효율이 6배.</li>
            <li>브랜드 스토리 바이블로 일관성을 유지하라.</li>
            <li><strong>오늘부터 실행</strong>: 핵심 스토리 하나를 3개 플랫폼에 형식만 바꿔서 올려보세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch6",
    title: "Ch.6 감정의 고리: 사람들이 행동하게 만드는 스토리의 비밀",
    body: (
      <>
        <p>안토니오 다마지오 교수의 연구: 뇌의 감정 영역이 손상된 환자들은 논리적 사고는 완벽하지만, <strong>결정을 내리지 못합니다</strong>. 점심 메뉴도 정하지 못합니다. 스토리텔링의 진짜 힘은 <strong>감정을 설계하는 것</strong>에 있습니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">감정적 트리거 6가지</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>공감</strong>: &quot;Zoom 회의 중 아이가 울어서 음소거 버튼을 누르고 돌아왔더니 이미 다음 안건&quot;</li>
          <li><strong>놀라움</strong>: &quot;월 매출 1억을 찍고 나서 가장 먼저 한 일은 사업을 접을까 고민한 것&quot;</li>
          <li><strong>희망</strong>: 비포-애프터에서 &apos;비포&apos;가 독자와 비슷할수록 효과적</li>
          <li><strong>분노/정의감</strong>: 업계의 불합리한 관행에 대한 문제 제기</li>
          <li><strong>소속감</strong>: 커뮤니티 언어 만들기. &quot;새벽 전사&quot;</li>
          <li><strong>자부심</strong>: &quot;이 제품을 선택한 당신은 현명한 소비자입니다&quot;</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">은유와 비유 활용법</h3>
        <p><strong>일상 비유</strong>: &quot;브랜딩 없는 마케팅은 내비 없이 운전하는 것.&quot;</p>
        <p><strong>감각 비유</strong>: &quot;그 순간 가슴이 쿵 내려앉았습니다.&quot;</p>
        <p><strong>대비 비유</strong>: &quot;어제까지는 사막에서 물을 찾는 느낌, 오늘은 오아시스를 발견한 기분.&quot;</p>

        <h3 className="text-xl font-bold mt-8 mb-4">CTA를 서사에 녹이는 공식</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li>고객 사례로 가능성 보여주기</li>
          <li>고객의 말 직접 인용</li>
          <li>독자와 사례 고객을 연결</li>
          <li>구체적이고 부담 없는 첫 행동 제시</li>
        </ol>

        <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-amber-50 dark:bg-amber-950 rounded-r-lg">
          <p><strong>6챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>논리는 생각하게 하고, 감정은 행동하게 한다.</li>
            <li>콘텐츠마다 감정적 트리거 최소 2개를 의식적으로 넣어라.</li>
            <li><strong>오늘부터 실행</strong>: 타깃 고객의 감정 맵(5단계)을 그려보세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch7",
    title: "Ch.7 진정성의 시대: AI가 넘치는 세상에서 진짜가 되는 법",
    body: (
      <>
        <p>2024년, ChatGPT가 보편화되면서 콘텐츠의 양이 폭발했습니다. 역설적으로, AI가 만든 매끄러운 글 사이에서 <strong>불완전하지만 진짜인 이야기</strong>가 더욱 빛나게 되었습니다. 진정성은 더 이상 &apos;있으면 좋은 것&apos;이 아니라, 브랜드 생존의 조건입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">가짜의 신호 vs 진짜의 신호</h3>
        <p><strong>가짜</strong>: 너무 완벽한 이야기, 감정의 부재, 과도한 수치 자랑, 일관성 없는 메시지.</p>
        <p><strong>진짜</strong>: 구체적 장면과 디테일, 적절한 취약함, 일관된 목소리, 시간의 흔적.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">실수 인정의 4단계 공식</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>빠른 인정</strong>: &quot;저희가 실수했습니다.&quot; (변명 없이)</li>
          <li><strong>구체적 설명</strong>: &quot;이런 원인으로 이런 문제가 발생했습니다.&quot;</li>
          <li><strong>조치 내용</strong>: &quot;이렇게 해결했고, 재발 방지를 위해 이렇게 바꿨습니다.&quot;</li>
          <li><strong>감사 표현</strong>: &quot;알려주셔서 감사합니다.&quot;</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">AI 시대의 진정성 전략 5가지</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>나만의 경험 말하기</strong> — AI는 &quot;내가 2023년 5월에 경험한 일&quot;은 쓸 수 없다.</li>
          <li><strong>의견 표명하기</strong> — AI는 중립적이다. 입장을 밝히는 것은 사람만 한다.</li>
          <li><strong>실시간 반응하기</strong> — 어제의 뉴스, 방금 겪은 일에 대한 반응.</li>
          <li><strong>불완전함 허용하기</strong> — 약간의 오타, 즉흥적 표현이 사람의 증거.</li>
          <li><strong>관계 깊이 보여주기</strong> — 단골 고객, 거래처와의 오래된 인연.</li>
        </ul>

        <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-amber-50 dark:bg-amber-950 rounded-r-lg">
          <p><strong>7챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>AI 시대에 진정성은 브랜드 생존의 조건이다.</li>
            <li>취약함을 적정 수준으로 보여주고, 실수는 먼저 인정하라.</li>
            <li><strong>오늘부터 실행</strong>: 비하인드 더 씬 콘텐츠를 하나 올려보세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch8",
    title: "Ch.8 바로 쓰는 스토리텔링 공식 7가지",
    body: (
      <>
        <p>&quot;오늘 뭘 쓰지?&quot; 영감이 올 때까지 기다리면, 영원히 못 씁니다. 프로는 <strong>공식(framework)</strong>으로 씁니다. 공식은 창의성을 가두는 틀이 아니라, 창의성이 흘러가는 수로입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">공식 1: 영웅의 여정</h3>
        <p>일상 &rarr; 부름 &rarr; 문턱 &rarr; 시련 &rarr; 보물 &rarr; 귀환. <strong>적합</strong>: 자기소개, 브랜드 소개, 강연 오프닝.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">공식 2: BAB (Before-After-Bridge)</h3>
        <p>이전 상태 &rarr; 이상적 상태 &rarr; 솔루션. <strong>적합</strong>: SNS 캡션, 이메일, 짧은 광고 카피.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">공식 3: PAS (Problem-Agitate-Solution)</h3>
        <p>문제 제시 &rarr; 문제 심화 &rarr; 해결책. <strong>적합</strong>: 블로그, 세일즈 레터, 상세 페이지.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">공식 4: AIDA (Attention-Interest-Desire-Action)</h3>
        <p>주의 끌기 &rarr; 관심 유발 &rarr; 욕구 자극 &rarr; 행동 촉구. <strong>적합</strong>: 제품 상세 페이지, 광고, 영상 스크립트.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">공식 5: Star-Chain-Hook</h3>
        <p>주인공 소개 &rarr; 근거의 사슬 &rarr; 행동 유도. <strong>적합</strong>: 뉴스레터, 사례 연구, 제안서.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">공식 6: BAB 확장형</h3>
        <p>과거 상태 &rarr; 시도와 실패 &rarr; 발견 &rarr; 현재 상태 &rarr; 제안. <strong>적합</strong>: 유튜브, 웨비나, 강의 도입.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">공식 7: 3막 구조</h3>
        <p>1막 설정 &rarr; 2막 대립 &rarr; 3막 해결. <strong>적합</strong>: 브랜드 영상, 강연, 투자 피칭.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">공식 선택 가이드</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li>SNS 짧은 글 &rarr; BAB</li>
          <li>블로그/SEO 글 &rarr; PAS, 3막 구조</li>
          <li>제품 상세 페이지 &rarr; AIDA</li>
          <li>이메일/뉴스레터 &rarr; Star-Chain-Hook</li>
          <li>자기소개/브랜드 소개 &rarr; 영웅의 여정</li>
          <li>영상 콘텐츠 &rarr; BAB 확장형, 3막 구조</li>
        </ul>

        <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-amber-50 dark:bg-amber-950 rounded-r-lg">
          <p><strong>8챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>7가지 공식을 마스터하면 어떤 주제든 30분 안에 초안 완성.</li>
            <li>상황에 맞는 공식을 선택하는 것이 핵심이다.</li>
            <li><strong>오늘부터 실행</strong>: 같은 주제를 7가지 공식으로 각각 3문장씩 써보세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch9",
    title: "Ch.9 측정하고 진화하라: 스토리의 성과를 추적하는 법",
    body: (
      <>
        <p>&quot;이번 게시물 반응이 좋았다.&quot; 대부분의 1인 사업자는 스토리텔링의 성과를 <strong>감</strong>으로 판단합니다. 하지만 감은 편향됩니다. 스토리텔링도 마케팅입니다. 마케팅은 측정해야 개선됩니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">스토리텔링 성과 측정의 3가지 축</h3>
        <h4 className="text-lg font-semibold mt-6 mb-3">1축: 참여율 (Engagement)</h4>
        <p>좋아요/하트 비율, 댓글 수와 질, 저장/북마크 수, 공유 수, 체류 시간.</p>
        <p>벤치마크: 인스타 참여율 3% 이상 양호/5% 이상 우수, 블로그 체류 2분 이상, 이메일 오픈율 25% 이상.</p>

        <h4 className="text-lg font-semibold mt-6 mb-3">2축: 전환율 (Conversion)</h4>
        <p>링크 클릭율, 문의/상담 전환율, 구매 전환율. UTM 파라미터와 구글 애널리틱스로 추적합니다.</p>

        <h4 className="text-lg font-semibold mt-6 mb-3">3축: 감정 분석 (Sentiment)</h4>
        <p>댓글 감정 분류, DM/메시지 분석, 후기 키워드 분석, NPS(순추천지수).</p>

        <h3 className="text-xl font-bold mt-8 mb-4">A/B 테스트로 스토리 최적화</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>제목/첫 문장</strong>: 스토리형이 정보형보다 클릭율 20~40% 높음</li>
          <li><strong>스토리 구조</strong>: 팩트 중심 vs 스토리 중심 전환율 비교</li>
          <li><strong>감정 톤</strong>: 전문가 톤 vs 친구 톤 참여율 비교</li>
          <li><strong>CTA 방식</strong>: 직접적 vs 서사형 클릭율 비교</li>
        </ul>
        <p>핵심: 한 번에 하나만 변경, 최소 100명 이상 노출 후 판단, 결과를 스프레드시트에 누적.</p>

        <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-amber-50 dark:bg-amber-950 rounded-r-lg">
          <p><strong>9챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>참여율·전환율·감정 분석의 3축으로 스토리 성과를 측정하라.</li>
            <li>A/B 테스트와 분기별 리뷰로 데이터 기반 진화를 하라.</li>
            <li><strong>오늘부터 실행</strong>: 이번 달 콘텐츠 Best/Worst를 분석하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch10",
    title: "Ch.10 스토리로 행동을 이끌어라: 팔로워를 고객으로, 고객을 팬으로",
    body: (
      <>
        <p>&quot;팔로워 1만 명인데, 실제 매출은 거의 없어요.&quot; 문제는 간단합니다. <strong>감정은 움직였는데, 행동으로 연결하는 다리가 없는 것</strong>입니다. 스토리텔링의 최종 목표는 박수가 아니라 <strong>행동</strong>입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">감정 &rarr; 결정 &rarr; 행동의 3단계</h3>
        <p><strong>1단계: 감정적 공명</strong> — &quot;이 브랜드가 나를 이해한다.&quot; (스토리텔링이 여기서 작동)</p>
        <p><strong>2단계: 논리적 정당화</strong> — &quot;이건 합리적인 선택이야.&quot; (스펙, 가격, 후기)</p>
        <p><strong>3단계: 행동 트리거</strong> — &quot;지금 해야 해.&quot; (긴급성, 한정성, 첫 걸음)</p>

        <h3 className="text-xl font-bold mt-8 mb-4">성공의 생생한 그림 그리기</h3>
        <p><strong>나쁜 예</strong>: &quot;매출이 올라갑니다.&quot;</p>
        <p><strong>좋은 예</strong>: &quot;3개월 후, 당신은 월요일 아침에 카페에서 노트북을 열며 매출 알림을 확인합니다. 주말 동안 자동으로 들어온 주문 15건. 커피를 마시며 고객 한 분 한 분에게 감사 메시지를 보내는 여유.&quot;</p>

        <h3 className="text-xl font-bold mt-8 mb-4">커뮤니티 구축 4단계</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>공유된 가치</strong> — &quot;우리는 이것을 믿는 사람들이다.&quot;</li>
          <li><strong>공유된 언어</strong> — 그룹만의 표현과 밈.</li>
          <li><strong>공유된 경험</strong> — 챌린지, 라이브, 오프라인 모임.</li>
          <li><strong>공유된 성과</strong> — 함께 이룬 것을 축하.</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">팔로워 &rarr; 팬 전환 로드맵</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>팔로워</strong>: 무료 콘텐츠 + 감정적 연결 (공감과 가치)</li>
          <li><strong>구독자</strong>: 이메일/카카오톡으로 더 깊은 관계 (신뢰와 깊이)</li>
          <li><strong>첫 구매</strong>: 저가 상품 또는 무료 체험 (사회적 증거와 희망)</li>
          <li><strong>반복 구매</strong>: 만족 &rarr; 재구매 + 업셀 (자부심과 소속감)</li>
          <li><strong>팬/옹호자</strong>: 자발적 추천 + 커뮤니티 참여 (정체성과 사명)</li>
        </ul>

        <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-amber-50 dark:bg-amber-950 rounded-r-lg">
          <p><strong>10챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>스토리텔링의 최종 목표는 행동이다 — 감정 &rarr; 결정 &rarr; 행동의 흐름을 설계하라.</li>
            <li>팔로워 &rarr; 구독자 &rarr; 고객 &rarr; 팬, 각 단계마다 다른 스토리를 배치하라.</li>
            <li><strong>오늘부터 실행</strong>: 전환 퍼널 각 단계에 배치할 스토리를 하나씩 설계하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "appendix",
    title: "부록 — 복사해 쓰는 스토리텔링 실행 키트",
    body: (
      <>
        <p>이 부록의 모든 워크시트와 템플릿은 바로 복사하여 사용할 수 있도록 설계되었습니다. 노션, 구글 독스, 종이 노트 어디에든 옮겨서 활용하세요.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">1. 브랜드 핵심 스토리 발굴 워크시트</h3>
        <p>12개 질문(존재의 이유 3개, 고유한 경험 3개, 성장의 흔적 3개, 미래의 비전 3개)에 답한 뒤 가장 가슴 뛰는 것 3개를 골라 한 문단으로 연결합니다.</p>
        <p><strong>핵심 스토리 템플릿:</strong> &quot;나는 [과거의 상황]을 경험했다. 그래서 [깨달음]을 결심했고, [구체적 행동]을 시작했다. 지금 나는 [타깃 고객]이 [얻게 되는 가치]를 경험할 수 있도록 [하는 일]을 하고 있다.&quot;</p>

        <h3 className="text-xl font-bold mt-8 mb-4">2. 오리진 스토리 3분 템플릿</h3>
        <p>[도입 30초] 공감 질문 + &quot;저도 그랬습니다&quot; &rarr; [과거의 나 40초] 구체적 장면 &rarr; [전환점 30초] 결정적 사건 하나 &rarr; [깨달음 20초] 핵심 통찰 &rarr; [지금의 나 40초] 하는 일과 가치 &rarr; [마무리 20초] 청자에게 연결.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">3. 고객 후기 &rarr; 사례 연구 변환 가이드</h3>
        <p><strong>인터뷰 질문 8가지:</strong> 이전 상황, 힘들었던 순간, 이전 해결책, 알게 된 계기, 망설인 점, 달라진 점, 주변 반응, 소개 멘트.</p>
        <p><strong>작성 구조:</strong> 제목(성과) &rarr; 배경 &rarr; 문제 &rarr; 이전 시도 &rarr; 만남 &rarr; 솔루션 &rarr; 결과(수치) &rarr; 고객의 말 &rarr; 핵심 교훈.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">4. 플랫폼별 콘텐츠 캘린더 템플릿</h3>
        <p>월~토 요일별로 플랫폼, 콘텐츠 유형, 스토리 공식을 배정합니다. 월간 콘텐츠 밸런스: 가치 제공(40%) + 스토리(30%) + 커뮤니티(15%) + 세일즈(15%).</p>

        <h3 className="text-xl font-bold mt-8 mb-4">5. 스토리텔링 공식 치트시트</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>BAB</strong>: Before &rarr; After &rarr; Bridge (SNS, 이메일)</li>
          <li><strong>PAS</strong>: Problem &rarr; Agitate &rarr; Solution (블로그, 상세 페이지)</li>
          <li><strong>AIDA</strong>: Attention &rarr; Interest &rarr; Desire &rarr; Action (광고, 영상)</li>
          <li><strong>Star-Chain-Hook</strong>: 주인공 &rarr; 근거 사슬 &rarr; 행동 유도 (뉴스레터, 제안서)</li>
          <li><strong>영웅의 여정</strong>: 일상 &rarr; 부름 &rarr; 시련 &rarr; 보물 &rarr; 귀환 (자기소개, 강연)</li>
          <li><strong>BAB 확장형</strong>: 과거 &rarr; 시도/실패 &rarr; 발견 &rarr; 현재 &rarr; 제안 (유튜브, 웨비나)</li>
          <li><strong>3막 구조</strong>: 설정 &rarr; 대립 &rarr; 해결 (브랜드 영상, 투자 피칭)</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">6. 감정적 트리거 체크리스트</h3>
        <p><strong>필수 체크(최소 2개)</strong>: 공감, 놀라움, 희망, 분노/정의감, 소속감, 자부심.</p>
        <p><strong>감정 강도</strong>: 감정이 움직이는가? 구체적 장면이 그려지는가? 은유/비유가 효과적인가?</p>
        <p><strong>진정성</strong>: 실제 경험이 포함되었는가? 과장은 없는가? 브랜드 보이스와 일관적인가?</p>

        <h3 className="text-xl font-bold mt-8 mb-4">7. 브랜드 스토리 바이블 템플릿</h3>
        <p><strong>파트 1: 정체성</strong> — 브랜드명, 한 줄 소개, 핵심 가치 3가지, 존재 이유, 타깃 고객, 핵심 문제, 가치, 차별점.</p>
        <p><strong>파트 2: 스토리 자산</strong> — 오리진 스토리(100/300/1000자), 핵심 에피소드 5개, 고객 사례 3개, 실패/위기/전환점 스토리.</p>
        <p><strong>파트 3: 톤 &amp; 보이스</strong> — 전체 톤, 1인칭, 고객 호칭, 유머 범위, 전문 용어 수준, 금지어.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">8. FAQ 10선</h3>
        <p><strong>Q1. 스토리텔링이 정말 매출에 영향을 주나요?</strong> 감정적으로 연결된 고객은 만족한 고객보다 52% 더 높은 가치를 제공합니다.</p>
        <p><strong>Q2. 글을 잘 못 쓰는데요?</strong> 공식을 따르면 누구나 할 수 있습니다. 빈칸만 채우세요.</p>
        <p><strong>Q3. 개인적 이야기 공개가 부담돼요.</strong> &quot;사업과 관련된 경험&quot; 중 &quot;고객에게 도움이 되는 것&quot;만 선별적으로 공유하세요.</p>
        <p><strong>Q4. B2B에도 효과가 있나요?</strong> 오히려 B2B에서 더 효과적입니다. 구매 결정자도 사람입니다.</p>
        <p><strong>Q5. 경쟁자가 따라 하면?</strong> 구조는 따라 할 수 있지만, 당신의 실제 경험은 따라 할 수 없습니다.</p>
        <p><strong>Q6. 얼마나 자주 올려야 하나요?</strong> 주 2~3회, 일관성 있게. 양보다 질, 질보다 지속성.</p>
        <p><strong>Q7. AI로 써도 되나요?</strong> 초안에 활용은 OK. 최종본에는 반드시 당신의 경험·감정·의견을 넣으세요.</p>
        <p><strong>Q8. 스토리텔링 첫 번째로 뭘 해야 하나요?</strong> 이 부록의 첫 번째 워크시트(핵심 스토리 발굴)를 채우세요.</p>

        <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-amber-50 dark:bg-amber-950 rounded-r-lg">
          <p><strong>부록 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>이 실행 키트의 모든 템플릿은 노션·구글 독스·종이에 바로 옮겨 쓸 수 있다.</li>
            <li>완벽하게 채우려 하지 마세요 — 하나씩, 조금씩, 꾸준히가 최고의 전략.</li>
            <li>지금 당장 핵심 스토리 발굴 워크시트부터 시작하라.</li>
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

export default function StorytellingReadPage() {
  return (
    <GuideBook
      bookId="storytelling"
      title="사람의 마음을 휘어잡는 스토리텔링의 기술"
      emoji="📖"
      subtitle="브랜드 스토리로 팔로워를 팬으로, 고객을 전도사로 만드는 법"
      topItems={topItems}
      sections={sections}
      updateLogs={updateLogs}
      currentVersion={1}
    />
  );
}
