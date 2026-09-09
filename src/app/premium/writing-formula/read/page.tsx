import GuideBook from "@/components/GuideBook";
import type {
  TopItem,
  ContentSection,
  UpdateLog,
} from "@/components/GuideBook";

export const metadata = {
  title: "뇌에 박히는 글쓰기 공식 — 본문 | 살아있는 정보책",
  description:
    "5 Whys·호기심 갭·치알디니 6원칙 — 읽히고 팔리는 글을 쓰는 과학적 시스템. 서문 + 10개 챕터 + 부록 전문. 독자 분석, 훅·헤드라인, 스토리텔링, 필사·스와이프 파일, 설득 심리, 대화체, PSEA 구조, 플랫폼 전략, 루틴 시스템, 30일 챌린지까지.",
};

const topItems: TopItem[] = [
  {
    number: 1,
    title: "독자를 꿰뚫는 기술: 5 Whys부터 공감 맵까지",
    oneLiner: "글쓰기의 출발점은 '나'가 아니라 '독자'다.",
    description:
      "5 Whys로 독자의 진짜 욕구 파헤치기, 엘리베이터 피치 30초 공식, 공감 맵 4분면, SMART 글쓰기 목표, 역설계(CTA→증거→훅) 3단계.",
    situation: "글을 써도 반응이 없고 누구를 위한 글인지 모호할 때",
    action: "5 Whys로 독자의 표면 욕구 뒤 진짜 동기를 5단계로 파고드세요.",
    mission: "내 타겟 독자의 공감 맵(생각/감정/보는 것/듣는 것/말과 행동)을 채워보세요.",
  },
  {
    number: 2,
    title: "뇌에 박히는 첫 문장: 호기심 갭과 6가지 훅 공식",
    oneLiner: "3초 안에 잡지 못하면 끝이다 — 첫 문장이 곧 생존이다.",
    description:
      "호기심 갭 3유형(정보·결과·반직관), 6가지 헤드라인 공식(How-To·List·Question·Secret·Negative·Challenge), 리드 문장 5패턴, 헤드라인 점검 체크리스트.",
    situation: "제목과 서두가 약해서 클릭률이 낮을 때",
    action: "하나의 주제로 6가지 헤드라인 공식을 각각 적용해 후보를 만드세요.",
    mission: "7항목 헤드라인 체크리스트로 점수를 매기고 최고점 제목을 선택하세요.",
  },
  {
    number: 3,
    title: "멈출 수 없는 글의 비밀: 스토리텔링과 클리프행어",
    oneLiner: "뇌는 정보보다 이야기에 22배 더 강하게 반응한다.",
    description:
      "스토리텔링 5요소(배경·인물·갈등·절정·해결), 3줄 스토리(Before→Turning Point→After), 클리프행어 5기법, 자이가르닉 효과, Bucket Brigade 20선.",
    situation: "글 중간에서 독자가 이탈하고 끝까지 읽히지 않을 때",
    action: "내 비즈니스 경험을 스토리텔링 5요소로 분해해 보세요.",
    mission: "기존 글에 클리프행어 3개와 Bucket Brigade 2개를 삽입하세요.",
  },
  {
    number: 4,
    title: "필사부터 스와이프 파일까지: 글쓰기 근육 만들기",
    oneLiner: "글쓰기는 재능이 아니라 근육이다 — 매일 15분이면 충분하다.",
    description:
      "필사 3단계 프로토콜(읽기·필사·분석), 스와이프 파일 6카테고리 구축법, 능동태 변환 3규칙, 3의 법칙(Rule of Three), 비유 만드는 공식, CTA 작성 4단계.",
    situation: "글을 쓰려 앉으면 막막하고 참고할 레퍼런스가 없을 때",
    action: "노션에 스와이프 파일 6카테고리(헤드라인/서두/CTA/구조/스토리/문장)를 만드세요.",
    mission: "오늘 네이버 블로그 상위 글 1편의 서두를 필사하고 3가지 분석 포인트를 적으세요.",
  },
  {
    number: 5,
    title: "설득하는 문장의 과학: 치알디니 6원칙 글쓰기 적용",
    oneLiner: "설득은 속이는 게 아니라, 독자가 원하는 행동을 돕는 기술이다.",
    description:
      "상호성(먼저 가치 제공), 일관성(작은 동의→큰 동의), 사회적 증거(숫자·후기), 호감(유사성·자기 개방), 권위(데이터·실적), 희소성(수량·시간 한정). 6원칙 조합 전략.",
    situation: "좋은 정보를 담았는데 독자가 행동하지 않을 때",
    action: "최근 구매한 제품의 상세페이지에서 6원칙이 어떻게 쓰였는지 분석하세요.",
    mission: "내 글 1편에 치알디니 6원칙 중 3가지를 적용해 다시 써보세요.",
  },
  {
    number: 6,
    title: "대화하듯 쓰는 기술: 독자와 1:1 대화 만드는 5가지 기법",
    oneLiner: "글이 아니라 대화를 하세요 — 교과서 말고 옆자리 친구처럼.",
    description:
      "2인칭 직접 호칭, 1인칭 경험 공유, 질문 던지기 4유형(공감·호기심·선택·반성), 구어체 변환 사전, 감각적 묘사(오감 글쓰기), 톤 스펙트럼 설정.",
    situation: "글이 딱딱하고 교과서 같아서 독자가 친밀감을 느끼지 못할 때",
    action: "격식체 문장 3개를 대화체로 변환해 보세요.",
    mission: "내 글에 공감 질문·호기심 질문·선택 질문을 각 1개씩 삽입하세요.",
  },
  {
    number: 7,
    title: "팔리는 글의 구조: 문제→해결→증거→행동 프레임워크",
    oneLiner: "구조 없는 글은 무너진다 — PSEA가 글의 기본 뼈대다.",
    description:
      "PSEA(Problem→Solution→Evidence→Action) 핵심 구조, AIDA·PAS·FAB 추가 구조 3가지, 플랫폼별 PSEA 템플릿(블로그·인스타·상세페이지), 페이싱(속도 조절) 기법.",
    situation: "좋은 내용인데 글의 흐름이 산만하고 결론이 약할 때",
    action: "PSEA 구조로 내 분야 주제 하나를 800자 이상 써보세요.",
    mission: "과거에 쓴 글 중 반응 좋은 것과 나쁜 것을 구조 관점에서 비교 분석하세요.",
  },
  {
    number: 8,
    title: "플랫폼별 글쓰기 전략: 블로그·SNS·뉴스레터·상세페이지",
    oneLiner: "같은 이야기, 다른 옷을 입혀라 — 1편을 6개로 리퍼포징.",
    description:
      "6대 플랫폼 특성 비교(네이버·인스타·브런치·스레드·뉴스레터·상세페이지), 네이버 SEO 키워드 3단계, 인스타 첫 줄 공식 5가지, 콘텐츠 리퍼포징 워크플로우.",
    situation: "하나의 플랫폼에만 글을 쓰고 다른 채널을 활용하지 못할 때",
    action: "하나의 주제를 네이버 블로그·인스타·스레드 각각에 맞게 써보세요.",
    mission: "이번 주 쓴 글 1편을 다른 2개 플랫폼용으로 리퍼포징하세요.",
  },
  {
    number: 9,
    title: "글쓰기 루틴 시스템: 매일 쓰는 사람이 되는 법",
    oneLiner: "영감을 기다리면 영원히 못 쓴다 — 시스템으로 쓰세요.",
    description:
      "습관 루프(신호→루틴→보상), 66일의 법칙, 5단계 루틴 시스템(15분 확보→환경 설계→주간 캘린더→초고/편집 분리→데이터 피드백), 슬럼프 유형별 처방, 글쓰기 도구 추천.",
    situation: "글쓰기를 시작해도 꾸준히 이어가지 못하고 중단될 때",
    action: "내일부터 글쓰기에 사용할 15분의 시간·장소·장벽 제거 방법을 정하세요.",
    mission: "이번 주 7일간의 글쓰기 캘린더(요일별 활동)를 작성하세요.",
  },
  {
    number: 10,
    title: "30일 글쓰기 챌린지 로드맵: 지금 바로 시작하기",
    oneLiner: "읽기만 하면 바뀌지 않는다 — 30일이 글쓰기 근육을 만든다.",
    description:
      "4주 로드맵: Week 1 기초 근육, Week 2 공식 적용, Week 3 플랫폼 최적화, Week 4 시스템 구축. 매일 미션 + 주간 체크포인트 + 30일 추적 시트 + 글쓰기 선언문 템플릿.",
    situation: "모든 이론은 배웠지만 어디서부터 실행해야 할지 모를 때",
    action: "오늘을 Day 1로 정하고 첫 미션(독자 프로필 작성)을 실행하세요.",
    mission: "SNS에 '30일 글쓰기 챌린지 시작합니다'를 공개 선언하세요.",
  },
];

const sections: ContentSection[] = [
  {
    id: "sec-0",
    title: "서문 — 왜 글쓰기가 모든 비즈니스의 핵심 무기인가",
    body: (
      <>
        <p>하루에도 수천 자의 글을 쓰면서 &quot;나는 글을 못 써&quot;라고 말하는 사람이 너무 많습니다. 글쓰기를 못하는 게 아니라 <strong>글쓰기의 공식을 모를 뿐</strong>입니다. 이 책은 사람의 뇌에 박히는 글 — 읽히고, 기억되고, 행동하게 만드는 글의 공식을 알려드립니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">글 하나가 매출을 바꾼다</h3>
        <p>훅을 쓸 줄 알면 클릭률 2~5배, 스토리텔링을 알면 체류시간 3배, 설득 구조를 알면 전환율 150% 향상. 네이버 블로그 하나로 월 3,000만 원을 만드는 1인 사업자의 비결은 <strong>글쓰기 구조를 안다는 것</strong>입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">이 책의 구조</h3>
        <p><strong>1~3장</strong> — 독자 분석, 훅·헤드라인, 스토리텔링으로 읽히는 글의 기초를 잡습니다.</p>
        <p><strong>4~6장</strong> — 필사·스와이프 파일, 치알디니 설득 원칙, 대화체 기법으로 글에 힘을 더합니다.</p>
        <p><strong>7~9장</strong> — PSEA 구조, 플랫폼 전략, 루틴 시스템으로 실전 글쓰기를 완성합니다.</p>
        <p><strong>10장+부록</strong> — 30일 챌린지 로드맵과 바로 복사해 쓰는 실행 키트 6종.</p>

        <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-amber-50 dark:bg-amber-950 rounded-r-lg">
          <p><strong>서문 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>글쓰기는 타고나는 재능이 아니라 배울 수 있는 기술이다.</li>
            <li>이 책은 읽는 책이 아니라 읽으면서 바로 실행하는 워크북이다.</li>
            <li><strong>1~3장이 모든 챕터의 기초이므로 반드시 먼저 읽으세요.</strong></li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-1",
    title: "Ch.1 독자를 꿰뚫는 기술: 5 Whys부터 공감 맵까지",
    body: (
      <>
        <p>글을 잘 쓰고 싶다면 첫 번째로 할 일은 키보드에 손을 올리는 게 아닙니다. <strong>&quot;이 글을 읽을 사람이 누구인가?&quot;</strong>를 명확히 하는 겁니다. 독자를 모르면 글이 공중에 뜨고, 독자를 알면 글이 심장을 찌릅니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">5 Whys: 표면 욕구 뒤의 진짜 동기</h3>
        <p>도요타의 문제 분석 기법을 글쓰기에 적용하면 독자의 진짜 욕구를 찾을 수 있습니다. &quot;글을 잘 쓰고 싶다&quot; → &quot;블로그 방문자를 늘리고 싶다&quot; → &quot;매출을 올리고 싶다&quot; → &quot;독립하고 싶다&quot; → <strong>&quot;자유로운 삶을 원한다&quot;</strong>. 5번째 Why가 글의 톤과 결론을 완전히 바꿉니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">공감 맵 + SMART 목표 + 역설계</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>공감 맵</strong> — 생각/감정, 보는 것, 듣는 것, 말과 행동, Pain/Gain 4분면으로 독자의 머릿속에 들어가기</li>
          <li><strong>SMART 목표</strong> — &quot;좋은 글을 쓰자&quot;가 아니라 &quot;1주 내 일평균 방문자 300명 달성&quot;으로 구체화</li>
          <li><strong>역설계</strong> — CTA(행동)→증거→훅 순서로 결론부터 구조를 짜는 방법</li>
        </ul>

        <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-amber-50 dark:bg-amber-950 rounded-r-lg">
          <p><strong>1챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>글을 쓰기 전에 독자를 분석하는 시간이 글 쓰는 시간보다 중요하다.</li>
            <li>5 Whys로 진짜 욕구를 찾고, 공감 맵으로 머릿속에 들어가라.</li>
            <li><strong>오늘부터 실행</strong>: 5 Whys + 공감 맵 + SMART 목표를 한 장에 작성하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-2",
    title: "Ch.2 뇌에 박히는 첫 문장: 호기심 갭과 6가지 훅 공식",
    body: (
      <>
        <p>네이버 블로그에서 제목을 보고 0.3초 만에 클릭 여부가 결정됩니다. 인스타 피드에서 첫 줄이 &quot;더 보기&quot;를 누를지 결정합니다. <strong>첫 문장이 곧 생존</strong>입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">호기심 갭(Curiosity Gap)</h3>
        <p>&quot;독자가 아는 것&quot;과 &quot;알고 싶은 것&quot; 사이의 간극을 만드는 기법입니다. <strong>정보 갭</strong>(모르는 정보 알려줌), <strong>결과 갭</strong>(결과가 궁금하게), <strong>반직관 갭</strong>(상식과 반대)의 3가지 유형을 상황에 맞게 활용하세요.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">6가지 헤드라인 공식</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>How-To</strong> — &quot;~하는 N가지 방법&quot; (가장 보편적)</li>
          <li><strong>List</strong> — &quot;N가지 ~&quot; (숫자의 구체성)</li>
          <li><strong>Question</strong> — &quot;왜 ~할까?&quot; (답을 찾는 본능 자극)</li>
          <li><strong>Secret</strong> — &quot;~의 비밀&quot; (독점 정보 느낌)</li>
          <li><strong>Negative</strong> — &quot;~하지 마세요&quot; (손실 회피 심리)</li>
          <li><strong>Challenge</strong> — &quot;N일 안에 ~하기&quot; (성취 욕구 자극)</li>
        </ol>

        <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-amber-50 dark:bg-amber-950 rounded-r-lg">
          <p><strong>2챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>호기심 갭으로 뇌의 빈칸을 만들고, 6가지 공식으로 클릭을 유도하라.</li>
            <li>리드 문장(본문 첫 3줄)으로 스크롤을 멈추게 하라.</li>
            <li><strong>오늘부터 실행</strong>: 하나의 주제로 6가지 헤드라인을 만들고 체크리스트로 점수를 매기세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-3",
    title: "Ch.3 멈출 수 없는 글의 비밀: 스토리텔링과 클리프행어",
    body: (
      <>
        <p>사람의 뇌는 정보보다 <strong>이야기에 22배 더 강하게 반응</strong>합니다(스탠포드 연구). 데이터를 나열하면 좌뇌만, 이야기를 들으면 좌뇌+우뇌+옥시토신까지. 글에 이야기를 입히는 것이 독자를 끝까지 잡아두는 비밀입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">스토리텔링 5요소 + 3줄 스토리</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>5요소</strong> — 배경(구체적 시간/장소), 인물(독자가 감정이입할 사람), 갈등(엔진), 절정(전환점), 해결(교훈+행동)</li>
          <li><strong>3줄 스토리</strong> — Before → Turning Point → After로 인스타/상세페이지에서 활용</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">클리프행어 + Bucket Brigade</h3>
        <p><strong>자이가르닉 효과</strong>: 미완성 과제가 기억에 2배 강하게 남습니다. 예고형(&quot;다음 챕터에서 진짜 비밀을&quot;), 반전 암시형(&quot;치명적 함정이 하나&quot;), 결과 보류형(&quot;결과가 어떻게 됐을까요?&quot;) 등 5가지 클리프행어와 &quot;그런데 말이죠&quot; &quot;여기서 반전입니다&quot; 같은 <strong>Bucket Brigade 20선</strong>으로 스크롤을 이어가세요.</p>

        <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-amber-50 dark:bg-amber-950 rounded-r-lg">
          <p><strong>3챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>스토리텔링 5요소로 뼈대를 만들고, 클리프행어로 독자를 붙잡아라.</li>
            <li>Bucket Brigade는 2~3 스크롤마다 1개, 문단 첫 줄에 배치.</li>
            <li><strong>오늘부터 실행</strong>: 내 비즈니스 경험을 5요소로 분해하고 3줄 스토리 3개를 만드세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-4",
    title: "Ch.4 필사부터 스와이프 파일까지: 글쓰기 근육 만들기",
    body: (
      <>
        <p>글쓰기는 <strong>훈련으로 키우는 근육</strong>입니다. 뇌과학 연구에 따르면 손으로 쓰는 행위는 타이핑보다 기억 정착률이 29% 높습니다. 좋은 문장을 손으로 옮기면 그 패턴이 무의식에 저장됩니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">필사 3단계 프로토콜 (매일 15분)</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>읽기 3분</strong> — 원문을 소리 내어 2번 읽기</li>
          <li><strong>필사 7분</strong> — 손으로 또는 직접 타이핑으로 옮겨 쓰기</li>
          <li><strong>분석 5분</strong> — 첫 문장 공식, 문단 전환, 감정 자극 포인트 분석</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">스와이프 파일 + 문장력 도구</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>스와이프 파일</strong> — 헤드라인/서두/CTA/구조/스토리/문장 6카테고리로 분류, 주간 루틴으로 수집</li>
          <li><strong>능동태</strong> — &quot;~되다&quot;를 &quot;~하다&quot;로, 주어를 명확히, 동사를 강하고 구체적으로</li>
          <li><strong>3의 법칙</strong> — 뇌는 3개 항목을 가장 편안하게 처리한다. 제목·본문·CTA 모두에 활용</li>
          <li><strong>비유</strong> — 모르는 것을 아는 것에 연결하여 이해와 기억을 동시에</li>
        </ul>

        <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-amber-50 dark:bg-amber-950 rounded-r-lg">
          <p><strong>4챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>필사로 패턴을 체득하고, 스와이프 파일로 영감의 무기고를 만들어라.</li>
            <li>능동태 + 3의 법칙 + 비유로 글에 힘과 리듬을 실어라.</li>
            <li><strong>오늘부터 실행</strong>: 블로그 상위 글 1편 서두를 필사하고 스와이프 파일을 생성하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-5",
    title: "Ch.5 설득하는 문장의 과학: 치알디니 6원칙 글쓰기 적용",
    body: (
      <>
        <p>좋은 제품도 설득 없이는 안 팔리고, 좋은 정보도 설득 없이는 안 읽힙니다. 설득은 <strong>독자가 이미 원하는 것을 행동으로 옮기도록 돕는 기술</strong>입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">치알디니 6원칙</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>상호성</strong> — 먼저 유용한 정보를 무료로 제공하면 보답 심리 작동</li>
          <li><strong>일관성</strong> — 작은 &quot;맞아&quot;를 이끌면 큰 행동까지 자연스럽게 연결</li>
          <li><strong>사회적 증거</strong> — &quot;3,247명이 선택&quot;처럼 구체적 숫자와 후기로 신뢰 구축</li>
          <li><strong>호감</strong> — 유사성(&quot;저도 그랬어요&quot;), 자기 개방, 대화하는 톤으로 거리 좁히기</li>
          <li><strong>권위</strong> — 데이터 인용, 실적 공개, 과정 공개로 전문성 전달</li>
          <li><strong>희소성</strong> — 수량·시간·자격 한정으로 &quot;놓치면 안 돼&quot; 심리 유발</li>
        </ol>

        <p>하나의 글에서 여러 원칙을 조합하면 설득력이 폭발합니다. 호감→권위→사회적 증거→상호성→일관성→희소성 순서로 배치하는 것이 효과적입니다.</p>

        <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-amber-50 dark:bg-amber-950 rounded-r-lg">
          <p><strong>5챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>6원칙은 독자를 행동하게 만드는 과학적 도구다.</li>
            <li>거짓 후기·거짓 희소성은 신뢰를 한 번에 무너뜨린다.</li>
            <li><strong>오늘부터 실행</strong>: 내 글 1편에 6원칙 중 3가지를 적용해 다시 써보세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-6",
    title: "Ch.6 대화하듯 쓰는 기술: 독자와 1:1 대화 만드는 5가지 기법",
    body: (
      <>
        <p>인스타에서 가장 많이 저장되는 글의 공통점은 <strong>친구가 카톡으로 보내준 것 같은 느낌</strong>입니다. 대화체를 읽으면 뇌가 &quot;누군가와 대화하고 있다&quot;고 인식하며 집중도가 올라갑니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">5가지 대화체 기법</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>2인칭 직접 호칭</strong> — &quot;사람들은&quot; 대신 &quot;당신도&quot;로 바꾸면 몰입 시작</li>
          <li><strong>1인칭 경험 공유</strong> — &quot;저도 처음에는...&quot;으로 진정성과 유사성 전달</li>
          <li><strong>질문 던지기</strong> — 공감·호기심·선택·반성 4유형, 3~5 문단마다 1개</li>
          <li><strong>구어체 표현</strong> — &quot;효과가 극대화된다&quot; → &quot;효과가 확 올라가요&quot;</li>
          <li><strong>감각적 묘사</strong> — 오감으로 추상을 구체로 (&quot;성과가 좋았다&quot; → &quot;그래프가 수직 상승하는 걸 보았다&quot;)</li>
        </ol>

        <p>플랫폼에 따라 톤 스펙트럼을 조절하세요. 논문/보고서(격식) ↔ 뉴스레터/브런치(중간) ↔ 인스타/스레드(캐주얼). 한국어의 강점인 반말+존댓말 Mix로 친근하면서 예의 바른 톤을 만들 수 있습니다.</p>

        <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-amber-50 dark:bg-amber-950 rounded-r-lg">
          <p><strong>6챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>글이 아니라 대화다 — 2인칭으로 부르고, 질문으로 뇌를 활성화하라.</li>
            <li>구어체로 거리를 줄이되, 전문성은 유지하라.</li>
            <li><strong>오늘부터 실행</strong>: 격식체 문장 3개를 대화체로 변환하고 질문 3개를 삽입하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-7",
    title: "Ch.7 팔리는 글의 구조: 문제→해결→증거→행동 프레임워크",
    body: (
      <>
        <p>좋은 재료가 있어도 레시피가 없으면 요리가 안 되듯이, 좋은 정보가 있어도 <strong>구조가 없으면 글이 안 됩니다</strong>. 독자가 끝까지 읽고 행동하게 만드는 글에는 반드시 뼈대가 있습니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">PSEA 핵심 구조</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>P(Problem)</strong> — 독자의 고통을 대신 말해주기. 감정까지 건드려야 신뢰 시작</li>
          <li><strong>S(Solution)</strong> — 단계별로 쪼개고, 당장 실행 가능하게, 왜 이 방법인지 설명</li>
          <li><strong>E(Evidence)</strong> — 데이터·사례·비포/애프터. 숫자를 쓰고 3개 이상 제시</li>
          <li><strong>A(Action)</strong> — 행동 안내 + 장벽 제거 + 미래 약속 3단계</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">추가 구조 3가지 + 페이싱</h3>
        <p><strong>AIDA</strong>(주의→흥미→욕구→행동), <strong>PAS</strong>(문제→악화→해결), <strong>FAB</strong>(기능→장점→혜택)를 상황에 맞게 선택하세요. 짧은 문장(빠름)과 긴 문장(느림), 질문(멈춤)으로 <strong>페이싱</strong>을 조절하면 글에 리듬이 생깁니다.</p>

        <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-amber-50 dark:bg-amber-950 rounded-r-lg">
          <p><strong>7챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>PSEA가 글의 기본 뼈대 — Feature에서 멈추지 말고 Benefit까지 연결하라.</li>
            <li>페이싱으로 속도를 조절하면 독자는 절대 지루하지 않다.</li>
            <li><strong>오늘부터 실행</strong>: PSEA 구조로 800자 이상 글 1편을 작성하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-8",
    title: "Ch.8 플랫폼별 글쓰기 전략: 블로그·SNS·뉴스레터·상세페이지",
    body: (
      <>
        <p>인스타에서 먹히는 글이 네이버 블로그에서 먹히지 않습니다. <strong>플랫폼마다 독자의 기대, 알고리즘, 소비 방식이 다르기 때문</strong>입니다. 하나의 메시지를 플랫폼에 맞게 변환하는 <strong>콘텐츠 리퍼포징</strong>이 핵심입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">6대 플랫폼 핵심 전략</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>네이버 블로그</strong> — SEO 키워드 3단계(메인→롱테일→배치), 1,500자 이상, H2 소제목 3개+</li>
          <li><strong>인스타그램</strong> — 첫 줄이 전부(금지형·정체성형·고백형·경고형·결과형), 300~500자</li>
          <li><strong>브런치</strong> — 깊이 있는 스토리텔링, 에디터 큐레이션, 주 1~2회 꾸준히</li>
          <li><strong>스레드</strong> — 짧고 강하게(100~300자), 단문 임팩트·리스트·반전형</li>
          <li><strong>뉴스레터</strong> — 가장 개인적인 채널, 오픈율 30%+ 목표, PSEA 구조 활용</li>
          <li><strong>상세페이지</strong> — 매출 최전선, 후킹→해결→증거→상세→CTA 5영역</li>
        </ul>

        <p><strong>리퍼포징 워크플로우</strong>: 블로그 원본(60분) → 인스타(10분) → 스레드(5분) → 뉴스레터(15분) → 브런치(20분). 총 110분으로 1편을 5편으로 확장할 수 있습니다.</p>

        <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-amber-50 dark:bg-amber-950 rounded-r-lg">
          <p><strong>8챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>플랫폼마다 글의 옷을 갈아입혀라 — 같은 메시지, 다른 형태.</li>
            <li>1편을 6개로 리퍼포징하면 투입 대비 도달률이 폭발적으로 올라간다.</li>
            <li><strong>오늘부터 실행</strong>: 하나의 주제를 3개 플랫폼에 맞게 각각 써보세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-9",
    title: "Ch.9 글쓰기 루틴 시스템: 매일 쓰는 사람이 되는 법",
    body: (
      <>
        <p>&quot;오늘은 영감이 안 와서 못 쓰겠어.&quot; 이 말을 하는 순간 아마추어입니다. 프로는 영감을 기다리지 않아요. <strong>시스템을 만들고 그 안에서 씁니다.</strong> 새로운 습관이 자동화되는 데 평균 66일이 걸립니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">5단계 루틴 시스템</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>15분 확보</strong> — 출근 전·낮잠 시간·오픈 전 등 15분은 누구에게나 있다</li>
          <li><strong>환경 설계</strong> — 전용 공간, 스마트폰 치우기, 커피 한 잔 의식(Ritual)</li>
          <li><strong>주간 캘린더</strong> — 월(주제 선정) → 화~토(아웃라인·초고·편집·발행) → 일(정리)</li>
          <li><strong>초고/편집 분리</strong> — 쓸 때는 수정 금지, 최소 몇 시간 후에 5단계 편집</li>
          <li><strong>데이터 피드백</strong> — 발행 48시간 후 잘된 점 1개·개선할 점 1개 기록</li>
        </ol>

        <p><strong>슬럼프 처방</strong>: 빈 화면 공포증(아무 말이나 쓰기), 완벽주의 마비(타이머 15분+지우기 금지), 소재 고갈(스와이프 파일+댓글 소재), 동기 상실(초기 목표 재확인), 비교 함정(&quot;1년 전의 나 vs 지금의 나&quot;로 전환).</p>

        <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-amber-50 dark:bg-amber-950 rounded-r-lg">
          <p><strong>9챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>영감이 아니라 시스템으로 쓰세요 — 습관 루프(신호→루틴→보상)를 설계하라.</li>
            <li>처음 2주만 버티면 66일 후 &quot;안 쓰면 불편한&quot; 상태가 된다.</li>
            <li><strong>오늘부터 실행</strong>: 15분 시간·장소를 정하고 주간 캘린더를 작성하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-10",
    title: "Ch.10 30일 글쓰기 챌린지 로드맵: 지금 바로 시작하기",
    body: (
      <>
        <p>9개 챕터의 핵심 공식을 모두 배웠습니다. 하지만 <strong>읽기만 하면 아무것도 바뀌지 않습니다</strong>. 글쓰기 실력은 &quot;아는 것&quot;이 아니라 &quot;쓰는 것&quot;으로 만들어집니다. 규칙은 4가지: 매일 15분, 공개 발행, 완벽 버리기, 매일 기록.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">4주 로드맵</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>Week 1 (기초 근육)</strong> — 독자 프로필, 헤드라인 6종, 3줄 스토리, 필사, PSEA 글 발행</li>
          <li><strong>Week 2 (공식 적용)</strong> — 호기심 갭 서두, 치알디니 글, 대화체 변환, Bucket Brigade, FAB 글</li>
          <li><strong>Week 3 (플랫폼 최적화)</strong> — 블로그 SEO 글, 인스타+스레드, 뉴스레터, 상세페이지, 리퍼포징</li>
          <li><strong>Week 4 (시스템 구축)</strong> — 톤 가이드, 헤드라인 10개, 대표 스토리, 콘텐츠 캘린더, 글쓰기 선언문</li>
        </ul>

        <p><strong>챌린지 이후</strong>: 31~60일 심화(주 3~5편+시리즈 연재), 61~90일 전문가(스타일 확립+수익화), 91일~ 확장(전자책·강의·커뮤니티). 하루 빼먹어도 다음 날 이어서 하면 됩니다. 30일 중 25일만 해도 대단합니다.</p>

        <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-amber-50 dark:bg-amber-950 rounded-r-lg">
          <p><strong>10챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>30일 챌린지는 이 책의 모든 내용을 실력으로 바꾸는 실행 프로그램이다.</li>
            <li>완벽하지 않아도 된다 — 매일 15분, 30일만 쓰면 글이 달라진다.</li>
            <li><strong>오늘부터 실행</strong>: Day 1 미션(독자 프로필 작성)을 지금 바로 시작하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-11",
    title: "부록 — 복사해 쓰는 글쓰기 실행 키트",
    body: (
      <>
        <p>이 부록에는 책에서 다룬 모든 공식을 <strong>바로 복사해서 사용할 수 있는 템플릿</strong>으로 정리했습니다. 노션, 구글 독스, 메모장 어디에든 옮겨서 활용하세요.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">6종 실행 키트</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>헤드라인 템플릿 30개</strong> — 6가지 유형별 5개씩, [ ] 안을 내 주제로 교체</li>
          <li><strong>훅 공식 카드 10장</strong> — 충격 통계, 반직관, 고백, 약속, 장면 묘사, 질문 등</li>
          <li><strong>스와이프 파일 체크리스트</strong> — 수집 시 기록 항목 8개 + 주간/월간 관리 루틴</li>
          <li><strong>CTA 작성 가이드</strong> — 기본 공식 + 플랫폼별 CTA 템플릿 20개</li>
          <li><strong>30일 챌린지 캘린더</strong> — 4주 치 일별 미션 + 체크박스</li>
          <li><strong>글쓰기 자가 진단표</strong> — 10항목 50점 만점, 3개월마다 실력 변화 측정</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">자가 진단 기준</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>40점 이상</strong> — 글쓰기 프로. 남을 가르칠 수 있는 수준</li>
          <li><strong>30~39점</strong> — 중급자. 약한 부분만 보강하면 된다</li>
          <li><strong>20~29점</strong> — 초급자. 30일 챌린지를 한 번 더</li>
          <li><strong>19점 이하</strong> — 이 책을 처음부터 다시 읽고 Day 1부터 시작</li>
        </ul>

        <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-amber-50 dark:bg-amber-950 rounded-r-lg">
          <p><strong>부록 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>모든 템플릿은 노션·구글 독스·종이에 바로 옮겨 쓸 수 있다.</li>
            <li>도구는 쓸 때만 가치가 있다 — 지금 바로 꺼내 쓰세요.</li>
            <li>완벽하게 채우려 하지 말고 하나씩, 조금씩, 꾸준히가 최고의 전략이다.</li>
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
    changes: ["초판 발행: 뇌에 박히는 글쓰기 10챕터 + 부록 실행 키트"],
  },
];

export default function WritingFormulaRead() {
  return (
    <GuideBook
      bookId="writing-formula"
      title="뇌에 박히는 글쓰기 공식"
      emoji="✍️"
      subtitle="5 Whys·호기심 갭·치알디니 6원칙 — 읽히고 팔리는 글을 쓰는 과학적 시스템"
      topItems={topItems}
      sections={sections}
      updateLogs={updateLogs}
      currentVersion={1}
    />
  );
}
