import GuideBook from "@/components/GuideBook";
import type {
  TopItem,
  ContentSection,
  UpdateLog,
} from "@/components/GuideBook";

export const metadata = {
  title: "말 잘하는 사람들의 비밀 — 본문 | 살아있는 정보책",
  description:
    "PREP 법칙 · 설득 심리학 · 경청 5단계 · 갈등 해결 · 30일 업그레이드 플랜. 서문 + 10개 챕터 + 부록 전문. 두괄식, 적극적 경청, 비언어 소통, 일상 대화, 설득, 직장 말하기, 갈등 해결, 프레젠테이션, 디지털 소통, 30일 플랜.",
};

const topItems: TopItem[] = [
  {
    number: 1,
    title: "말의 순서 — 두괄식과 PREP 법칙",
    oneLiner: "말을 못하는 게 아니라 순서를 모르는 것이다.",
    description:
      "두괄식 소통 공식, PREP 4단계(주장→이유→예시→재강조), 30초 엘리베이터 피치, 회의 발언 5가지 전략.",
    situation: "회의에서 '그래서 결론이 뭐야?'를 들을 때",
    action: "오늘 하루 대화에서 결론부터 말하는 연습을 3회 하세요.",
    mission: "PREP 일기를 써보세요 — 오늘 있었던 일 하나를 P-R-E-P로 정리.",
  },
  {
    number: 2,
    title: "경청 — 말 잘하는 사람의 진짜 비밀 무기",
    oneLiner: "말 잘하는 사람의 진짜 비밀은 잘 듣는 것이다.",
    description:
      "적극적 경청 5단계(집중→인정→반영→확인→요약), 80/20 법칙, 맞장구 5레벨, 공감 vs 해결 구별법.",
    situation: "대화 후 상대가 '이 사람은 내 말에 관심 없구나'라고 느낄 때",
    action: "오늘 누군가와 대화할 때 질문만 하고 내 이야기는 5분간 하지 마세요.",
    mission: "경청 나쁜 습관 7가지 중 자신에게 해당하는 것을 체크하세요.",
  },
  {
    number: 3,
    title: "비언어 소통 — 목소리와 바디랭귀지",
    oneLiner: "무엇을 말하느냐만큼 어떻게 말하느냐가 중요하다.",
    description:
      "목소리 톤·속도 조절, 아이컨택 3초 법칙, 제스처 가이드, 미러링, 간투사 줄이기, 파워 포즈 2분 루틴.",
    situation: "같은 말인데 자신감 없어 보인다는 피드백을 받을 때",
    action: "스마트폰으로 자기소개를 녹음해서 들어보세요.",
    mission: "거울 앞에서 1분 자기소개를 하며 아이컨택과 제스처를 점검하세요.",
  },
  {
    number: 4,
    title: "일상 대화 — 어색함을 없애는 법",
    oneLiner: "할 말이 없는 게 아니라 대화를 이어가는 방법을 모르는 것이다.",
    description:
      "첫 대화 시작 5공식, 닫힌→열린 질문, 연결 고리 기법, 칭찬 3요소, 유머 사용법, 대화 마무리 5가지.",
    situation: "처음 만난 사람과 어색한 침묵이 계속될 때",
    action: "오늘 대화에서 닫힌 질문 대신 열린 질문을 3개 이상 사용하세요.",
    mission: "대화에서 상대 말의 키워드를 잡아 다음 질문으로 연결해 보세요.",
  },
  {
    number: 5,
    title: "설득의 심리학 — 상대의 마음을 움직이는 말",
    oneLiner: "설득은 이기는 것이 아니라 상대가 스스로 납득하게 만드는 것이다.",
    description:
      "아리스토텔레스 3요소(에토스·파토스·로고스), '왜냐하면' 93% 효과, 양면 제시법, 프레이밍, 상사/부모님 설득법.",
    situation: "좋은 제안인데 상대가 수용하지 않을 때",
    action: "최근 추천하고 싶은 것을 양면 제시법으로 정리해 보세요.",
    mission: "부정 프레이밍 3개를 긍정 프레이밍으로 변환해 보세요.",
  },
  {
    number: 6,
    title: "직장에서 인정받는 말하기",
    oneLiner: "일 잘하는 것과 일 잘한다는 평가를 받는 것은 다르다.",
    description:
      "STAR 보고법(상황→과제→행동→결과), 회의 발언 타이밍, 이메일·슬랙 원칙, 피드백 주고받기, 거절 3단계.",
    situation: "능력은 있는데 어필이 안 돼서 인정받지 못할 때",
    action: "최근 업무 하나를 STAR로 정리해 보세요.",
    mission: "최근 보낸 이메일 하나를 결론 먼저·핵심 볼드 처리로 다시 써보세요.",
  },
  {
    number: 7,
    title: "갈등과 어려운 대화 다루기",
    oneLiner: "어려운 대화를 잘 다루는 것이 진짜 소통 능력이다.",
    description:
      "I-Message(나-메시지), 감정 조절 4단계, 사과 4단계, 피드백 샌드위치, 가족 갈등 대화법, 고객 응대 HEAT 공식.",
    situation: "갈등 상황에서 말하면 관계가 더 나빠질 때",
    action: "You-Message 3개를 I-Message로 변환해 보세요.",
    mission: "사과해야 할 상황을 4단계(잘못→감정→재발방지→보상)로 정리하세요.",
  },
  {
    number: 8,
    title: "프레젠테이션과 스피치",
    oneLiner: "좋은 발표는 많이 아는 사람이 아니라 잘 준비한 사람이 한다.",
    description:
      "긴장 극복 5방법(4-7-8 호흡), 청중 분석, 오프닝 3공식, 6x6 슬라이드 규칙, 클로징 기술, Q&A ARC 공식.",
    situation: "발표만 생각하면 손이 떨리고 머릿속이 하얘질 때",
    action: "다음 발표의 오프닝을 질문·사실·스토리 3가지 버전으로 만들어 보세요.",
    mission: "1분 스피치를 녹음하고 자가 평가표로 점검하세요.",
  },
  {
    number: 9,
    title: "디지털 시대의 소통",
    oneLiner: "도구가 발전해도 소통의 본질은 사람과 사람 사이의 연결이다.",
    description:
      "카톡 메시지 원칙, 이메일 제목 공식, 화상회의 에티켓, SNS 30분 규칙, 세대별 소통 차이, AI 시대 소통 능력.",
    situation: "카톡이나 이메일로 소통할 때 오해가 자주 생길 때",
    action: "최근 보낸 카톡 3개를 용건·줄바꿈·이모티콘 기준으로 점검하세요.",
    mission: "최근 이메일 제목 3개를 '핵심 키워드+행동 요청+기한' 공식으로 개선하세요.",
  },
  {
    number: 10,
    title: "30일 말하기 업그레이드 플랜",
    oneLiner: "30일이 인생을 바꾸는 것이 아니라 30일의 습관이 평생을 바꾼다.",
    description:
      "Week 1 경청 → Week 2 두괄식 → Week 3 질문 → Week 4 실전. 매일 미션, 3분 스피치 연습, 자가 평가표.",
    situation: "모든 이론은 알겠는데 어디서부터 시작할지 막막할 때",
    action: "캘린더를 열고 오늘부터 30일을 표시하세요.",
    mission: "Day 1 미션부터 시작하세요 — 오늘 대화에서 상대 말 끊지 않기.",
  },
];

const sections: ContentSection[] = [
  {
    id: "preface",
    title: "들어가며 — 왜 말하기가 인생을 바꾸는가",
    body: (
      <>
        <p>&ldquo;말 잘하는 사람이 부럽다.&rdquo; 이 한마디에 공감하시나요? 대부분의 사람들은 &ldquo;나는 원래 말주변이 없어서&hellip;&rdquo;라고 생각합니다. <strong>이것은 착각입니다.</strong> 말하기는 타고나는 것이 아닙니다. 말 잘하는 사람들에게는 공통된 <strong>습관과 기술</strong>이 있을 뿐입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">말하기가 바꾸는 것들</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>직장</strong> — &ldquo;할 말은 많은데 정리가 안 돼요&rdquo; → 보고 한 번에 OK</li>
          <li><strong>인간관계</strong> — &ldquo;대화가 어색해요&rdquo; → 처음 만난 사람과도 자연스럽게</li>
          <li><strong>갈등 상황</strong> — &ldquo;화가 나면 말이 안 나와요&rdquo; → 감정 상하지 않게 문제 해결</li>
          <li><strong>자존감</strong> — &ldquo;나는 왜 말을 못하지&rdquo; → &ldquo;내 의견을 당당하게 전달할 수 있어&rdquo;</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">이 책의 구성</h3>
        <p><strong>1~3장</strong> — 말의 순서, 경청, 비언어 소통 (기초 체력)</p>
        <p><strong>4~5장</strong> — 일상 대화와 설득의 심리학 (응용 기술)</p>
        <p><strong>6~7장</strong> — 직장 말하기와 갈등 해결 (실전 적용)</p>
        <p><strong>8~9장</strong> — 프레젠테이션과 디지털 소통 (확장)</p>
        <p><strong>10장</strong> — 30일 말하기 업그레이드 플랜 (실행)</p>
        <p><strong>부록</strong> — PREP·STAR·프레젠테이션·경청·30일 플래너 템플릿 5종</p>

        <blockquote className="border-l-4 border-teal-400 pl-4 py-2 my-4 bg-teal-50 dark:bg-teal-950 rounded-r-lg">
          <p><strong>서문 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>말하기는 타고나는 것이 아니라 배울 수 있는 <strong>기술</strong>이다.</li>
            <li>이 책은 읽고 끝나는 책이 아니라, 오늘 배워서 내일 바로 쓰는 실전서다.</li>
            <li><strong>1~3장이 모든 챕터의 기초이므로 반드시 먼저 읽으세요.</strong></li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch1",
    title: "Ch.1 말의 순서 — 두괄식과 PREP 법칙",
    body: (
      <>
        <p>같은 내용인데 전달력이 완전히 다른 이유는 단 하나, <strong>말의 순서</strong>입니다. 한국어 문장 구조는 동사가 맨 끝에 오기 때문에 배경 설명을 먼저, 결론을 나중에 말하는 습관이 있습니다. 하지만 상대가 원하는 것은 <strong>결론</strong>입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">PREP 법칙: 논리적 말하기 4단계</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>P(Point)</strong> — 하고 싶은 말의 핵심을 먼저</li>
          <li><strong>R(Reason)</strong> — 왜 그렇게 생각하는지 근거</li>
          <li><strong>E(Example)</strong> — 구체적 사례나 경험</li>
          <li><strong>P(Point)</strong> — 처음 주장을 다시 강조</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">30초 엘리베이터 피치</h3>
        <p><strong>문제 제기(5초)</strong> → <strong>해결책(10초)</strong> → <strong>기대 효과(10초)</strong> → <strong>행동 요청(5초)</strong>. 30초 안에 핵심을 전달하는 연습은 모든 말하기의 기초입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">회의에서 존재감 있게 말하기 5전략</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>먼저 말하기</strong> — 초반 3분 안에 짧게라도 발언</li>
          <li><strong>정리해 주기</strong> — &ldquo;지금까지 나온 의견을 정리하면 세 가지입니다&rdquo;</li>
          <li><strong>질문하기</strong> — 좋은 질문은 좋은 발언보다 강하다</li>
          <li><strong>숫자 사용하기</strong> — &ldquo;약 20% 절감될 것으로 보입니다&rdquo;</li>
          <li><strong>다음 단계 제안하기</strong> — &ldquo;비용 비교표를 만들어 오는 건 어떨까요?&rdquo;</li>
        </ol>

        <blockquote className="border-l-4 border-teal-400 pl-4 py-2 my-4 bg-teal-50 dark:bg-teal-950 rounded-r-lg">
          <p><strong>1챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>말을 못하는 게 아니라 <strong>순서를 모르는 것</strong>이다.</li>
            <li>PREP 법칙으로 어떤 상황에서든 논리적 말하기가 가능하다.</li>
            <li><strong>오늘부터 실행</strong>: 말하기 전 3초만 생각하세요. &ldquo;핵심이 뭐지?&rdquo;</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch2",
    title: "Ch.2 경청 — 말 잘하는 사람의 진짜 비밀 무기",
    body: (
      <>
        <p>진짜 말 잘하는 사람들의 비밀은 <strong>&ldquo;잘 듣는 것&rdquo;</strong>입니다. 대화 후 &ldquo;이 사람이랑 얘기하니까 좋다&rdquo;고 느꼈던 사람은 혼자 많이 떠든 사람이 아니라 <strong>내 이야기를 잘 들어줬던 사람</strong>입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">적극적 경청 5단계</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>집중하기</strong> — 핸드폰 내려놓고, 눈 맞추고, 몸을 상대 쪽으로</li>
          <li><strong>인정하기</strong> — 고개 끄덕임, &ldquo;응&rdquo;, &ldquo;그래&rdquo; 추임새</li>
          <li><strong>반영하기</strong> — &ldquo;정말 힘들겠다. 많이 지쳤구나.&rdquo;</li>
          <li><strong>확인하기</strong> — &ldquo;그러니까 이런 뜻이야?&rdquo;</li>
          <li><strong>요약하기</strong> — &ldquo;핵심은 시간 부족 문제인 것 같아.&rdquo;</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">공감 vs 해결</h3>
        <p>상대가 원하는 것이 뭔지 모르겠으면 직접 물어보세요. <strong>&ldquo;지금 같이 해결책을 찾아줄까, 아니면 그냥 들어줄까?&rdquo;</strong> 이 한마디가 대화의 질을 완전히 바꿉니다. 대부분의 경우 순서는: <strong>공감 먼저 → 충분히 듣기 → 허락 구하기 → 제안</strong>입니다.</p>

        <blockquote className="border-l-4 border-teal-400 pl-4 py-2 my-4 bg-teal-50 dark:bg-teal-950 rounded-r-lg">
          <p><strong>2챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li><strong>80% 듣기, 20% 말하기</strong>가 대화의 황금 비율이다.</li>
            <li>맞장구 최고 레벨은 <strong>핵심어 반복 + 확장 질문</strong>이다.</li>
            <li><strong>오늘부터 실행</strong>: 의식적으로 질문만 하고 내 이야기는 5분간 하지 않기.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch3",
    title: "Ch.3 비언어 소통 — 목소리와 바디랭귀지",
    body: (
      <>
        <p>UCLA 메라비언 연구에 따르면 말의 내용은 7%, 목소리 톤은 38%, 표정·자세·제스처는 55%의 전달력을 차지합니다. <strong>&ldquo;무엇을 말하느냐&rdquo;만큼 &ldquo;어떻게 말하느냐&rdquo;가 중요합니다.</strong></p>

        <h3 className="text-xl font-bold mt-8 mb-4">목소리 조절 핵심 팁</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>첫마디는 밝게</strong> — 반 톤 높여서 밝은 인상</li>
          <li><strong>중요한 말은 천천히</strong> — 숫자, 핵심 결론은 속도를 늦추기</li>
          <li><strong>문장 끝을 흐리지 말기</strong> — &ldquo;~인 것 같고요...&rdquo;는 자신감 없어 보임</li>
          <li><strong>&ldquo;음...&rdquo; 대신 짧은 침묵</strong> — 침묵이 간투사보다 프로페셔널</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">아이컨택 3초 법칙과 파워 포즈</h3>
        <p>1:1 대화에서는 <strong>3초 눈 맞춤 → 1초 시선 이동</strong>을 반복합니다. 발표 전에는 2분간 <strong>파워 포즈</strong>(어깨 펴기, 양팔 벌리기)를 유지하면 자신감 호르몬이 증가합니다.</p>

        <blockquote className="border-l-4 border-teal-400 pl-4 py-2 my-4 bg-teal-50 dark:bg-teal-950 rounded-r-lg">
          <p><strong>3챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>소통의 93%는 <strong>목소리(38%)+바디랭귀지(55%)</strong>로 결정된다.</li>
            <li><strong>미러링</strong>으로 무의식적 호감을 만들어라.</li>
            <li><strong>오늘부터 실행</strong>: 자기소개를 녹음해서 들어보세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch4",
    title: "Ch.4 일상 대화 — 어색함을 없애는 법",
    body: (
      <>
        <p>&ldquo;할 말이 없어서&rdquo;가 아닙니다. <strong>대화를 시작하고 이어가는 방법을 모르는 것</strong>입니다. 일상 대화는 기술이고, 연습하면 누구나 늘 수 있습니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">대화 시작 5가지 공식</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>환경 관찰 + 질문</strong> — &ldquo;여기 커피 맛있네요. 자주 오시나요?&rdquo;</li>
          <li><strong>공통점 발견</strong> — &ldquo;혹시 마케팅팀이세요? 저도요!&rdquo;</li>
          <li><strong>칭찬 + 질문</strong> — &ldquo;발표 정말 잘 하셨어요. 어떻게 준비하셨어요?&rdquo;</li>
          <li><strong>최근 이슈 + 의견</strong> — &ldquo;요즘 넷플릭스에서 OO 보셨어요?&rdquo;</li>
          <li><strong>자기 공개 + 질문</strong> — &ldquo;저 이런 자리가 좀 어색한데, 혹시 저만 그런가요?&rdquo;</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">연결 고리 기법</h3>
        <p>상대의 말에서 <strong>키워드를 잡아</strong> 다음 질문으로 연결합니다. &ldquo;부산에 다녀왔어요&rdquo; → 부산(맛집), 친구(관계), 결혼식(스타일) — 한 문장에서 연결 고리가 3개 나옵니다.</p>

        <blockquote className="border-l-4 border-teal-400 pl-4 py-2 my-4 bg-teal-50 dark:bg-teal-950 rounded-r-lg">
          <p><strong>4챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li><strong>닫힌 질문 → 열린 질문</strong>으로 대화를 확장하라.</li>
            <li>칭찬은 <strong>구체적으로, 과정을 중심으로</strong> 하라.</li>
            <li><strong>오늘부터 실행</strong>: 대화에서 키워드 포착 → 다음 질문 연결을 3회 연습.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch5",
    title: "Ch.5 설득의 심리학 — 상대의 마음을 움직이는 말",
    body: (
      <>
        <p>설득은 강요가 아닙니다. <strong>상대가 스스로 &ldquo;그래, 그게 맞다&rdquo;고 느끼게 만드는 기술</strong>입니다. 아리스토텔레스가 정리한 설득 3요소는 2,300년이 지난 지금도 유효합니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">설득의 3요소</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>에토스(신뢰)</strong> — 전문성, 솔직함, 일관성으로 &ldquo;이 사람 말은 믿을 수 있어&rdquo;</li>
          <li><strong>파토스(감정)</strong> — 스토리텔링, 미래 상상, 위기감으로 감정에 호소</li>
          <li><strong>로고스(논리)</strong> — 숫자, 비교, 인과관계, 전문가 인용</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">&ldquo;왜냐하면&rdquo;의 힘</h3>
        <p>하버드 엘렌 랭어 실험: 이유 없이 요청하면 60%, <strong>&ldquo;왜냐하면&rdquo;을 붙이면 93~94%</strong>가 양보했습니다. 이유의 질보다 <strong>&ldquo;왜냐하면&rdquo;이라는 구조 자체</strong>가 설득력을 가집니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">양면 제시법</h3>
        <p><strong>단점 인정 → 하지만 → 장점 강조 → 결론</strong>. 단점을 먼저 인정하면 신뢰가 올라갑니다. 포인트: 단점은 짧게, 장점은 구체적으로.</p>

        <blockquote className="border-l-4 border-teal-400 pl-4 py-2 my-4 bg-teal-50 dark:bg-teal-950 rounded-r-lg">
          <p><strong>5챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>상사에게는 <strong>숫자와 대안</strong>, 부모님에게는 <strong>안심과 계획</strong>으로 설득.</li>
            <li><strong>프레이밍</strong>: 같은 사실도 긍정적으로 포장하면 인식이 달라진다.</li>
            <li><strong>오늘부터 실행</strong>: &ldquo;No&rdquo;를 받으면 이유를 파악하고, 작은 Yes부터 시작하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch6",
    title: "Ch.6 직장에서 인정받는 말하기",
    body: (
      <>
        <p>업무 능력이 90점이어도 전달력이 50점이면 상사 눈에는 50점짜리 직원입니다. <strong>일도 잘하고, 말도 잘해야</strong> 합니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">STAR 보고법</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>S(Situation)</strong> — 어떤 상황이었는가</li>
          <li><strong>T(Task)</strong> — 해결할 과제는 무엇이었는가</li>
          <li><strong>A(Action)</strong> — 구체적으로 무엇을 했는가</li>
          <li><strong>R(Result)</strong> — 결과와 성과를 숫자로</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">거절의 3단계</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>감사 표현</strong> — &ldquo;제안해 주셔서 감사합니다.&rdquo;</li>
          <li><strong>명확한 거절 + 이유</strong> — &ldquo;현재 프로젝트 마감이 다음 주라서요.&rdquo;</li>
          <li><strong>대안 제시</strong> — &ldquo;이번 달 말에는 가능합니다.&rdquo;</li>
        </ol>

        <blockquote className="border-l-4 border-teal-400 pl-4 py-2 my-4 bg-teal-50 dark:bg-teal-950 rounded-r-lg">
          <p><strong>6챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>회의에서는 <strong>초반 3분 안에 첫 발언</strong>을 하라.</li>
            <li>이메일 제목은 <strong>구체적으로</strong>, 본문은 <strong>결론 먼저</strong>.</li>
            <li><strong>오늘부터 실행</strong>: 업무 하나를 STAR로 정리해 보세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch7",
    title: "Ch.7 갈등과 어려운 대화 다루기",
    body: (
      <>
        <p>어려운 대화를 피하면 문제는 더 커집니다. 잘못 대화하면 관계가 깨집니다. <strong>어려운 대화를 잘 다루는 것이 진짜 소통 능력</strong>입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">I-Message (나-메시지)</h3>
        <p>공식: <strong>&ldquo;(상황)일 때, 나는 (감정)을 느껴. (원하는 것)해주면 좋겠어.&rdquo;</strong></p>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li>You: &ldquo;넌 왜 맨날 늦어?&rdquo; → I: &ldquo;약속 시간에 늦으면 나는 걱정이 돼.&rdquo;</li>
          <li>You: &ldquo;너는 항상 내 말을 무시해&rdquo; → I: &ldquo;내 의견이 반영되지 않으면 나는 소외감을 느껴.&rdquo;</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">진심 있는 사과 4단계</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>잘못 인정</strong> — 구체적으로 무엇을 잘못했는지</li>
          <li><strong>감정 인정</strong> — &ldquo;많이 기다렸고, 화도 났을 거야&rdquo;</li>
          <li><strong>재발 방지</strong> — &ldquo;다음부터는 30분 전에 출발할게&rdquo;</li>
          <li><strong>보상</strong> — &ldquo;오늘 저녁은 내가 살게&rdquo;</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">피드백 샌드위치</h3>
        <p><strong>긍정(잘한 점)</strong> → <strong>개선(보완할 점)</strong> → <strong>격려(기대)</strong>. &ldquo;하지만&rdquo; 대신 <strong>&ldquo;그리고&rdquo;</strong>를 사용하면 앞의 긍정이 지워지지 않습니다.</p>

        <blockquote className="border-l-4 border-teal-400 pl-4 py-2 my-4 bg-teal-50 dark:bg-teal-950 rounded-r-lg">
          <p><strong>7챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>감정적일 때는 <strong>멈추고, 시간을 벌어라</strong>.</li>
            <li>가족 갈등에서는 <strong>&ldquo;항상&rdquo;, &ldquo;맨날&rdquo; 같은 극단적 단어를 피하라</strong>.</li>
            <li><strong>오늘부터 실행</strong>: You-Message 하나를 I-Message로 바꿔 보세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch8",
    title: "Ch.8 프레젠테이션과 스피치",
    body: (
      <>
        <p>긴장할 때 우리 몸에서 일어나는 반응은 <strong>흥분과 같은 생리적 반응</strong>입니다. &ldquo;나는 긴장하고 있다&rdquo;를 <strong>&ldquo;나는 에너지가 넘친다&rdquo;</strong>로 바꿔 말해보세요.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">긴장 완화 5가지 방법</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>4-7-8 호흡법</strong> — 4초 들이마시기 → 7초 참기 → 8초 내쉬기, 3회</li>
          <li><strong>파워 포즈</strong> — 양팔 벌리고 가슴 피기, 2분간 유지</li>
          <li><strong>첫 30초 암기</strong> — 시작의 불안만 넘기면 나머지는 흐른다</li>
          <li><strong>리허설 3회</strong> — 거울·동료·녹화 앞에서</li>
          <li><strong>시각화</strong> — 성공적 발표 후 박수받는 장면 상상</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">오프닝 3가지 공식</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>질문</strong> — &ldquo;여러분, 하루에 스마트폰을 몇 시간 사용하시나요?&rdquo;</li>
          <li><strong>놀라운 사실</strong> — &ldquo;전 세계에서 매일 5억 개의 트윗이 올라옵니다.&rdquo;</li>
          <li><strong>짧은 스토리</strong> — &ldquo;3년 전, 첫 발표에서 대본을 떨어뜨렸습니다.&rdquo;</li>
        </ul>

        <blockquote className="border-l-4 border-teal-400 pl-4 py-2 my-4 bg-teal-50 dark:bg-teal-950 rounded-r-lg">
          <p><strong>8챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>슬라이드는 <strong>한 장에 한 메시지, 6x6 규칙</strong>.</li>
            <li>Q&amp;A는 <strong>ARC 공식</strong>(인정→답변→확인)으로 대처.</li>
            <li><strong>오늘부터 실행</strong>: 1분 스피치를 녹음하고 자가 평가표로 점검하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch9",
    title: "Ch.9 디지털 시대의 소통",
    body: (
      <>
        <p>디지털 소통에서는 표정, 목소리, 바디랭귀지가 제한됩니다. &ldquo;네&rdquo; 한 글자가 &ldquo;알겠다&rdquo;가 될 수도, &ldquo;기분 나쁘다&rdquo;가 될 수도 있습니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">카톡 오해 줄이기</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li>&ldquo;네.&rdquo;(차갑게) → <strong>&ldquo;네!&rdquo; 또는 &ldquo;넵!&rdquo;</strong></li>
          <li>읽씹 → <strong>&ldquo;확인했어요, 좀 이따 답할게요!&rdquo;</strong></li>
          <li>장문 메시지 폭탄 → <strong>긴 내용은 전화나 대면으로</strong></li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">화상회의 존재감</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>카메라 렌즈</strong>를 보면 상대 화면에서 눈 마주치는 것으로 보임</li>
          <li>리액션은 평소보다 <strong>20% 더 크게</strong></li>
          <li><strong>이름 불러주기</strong> — 온라인에서 존재감과 연결감 향상</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">AI 시대에 더 중요한 소통</h3>
        <p>AI가 대체할 수 없는 영역: <strong>공감, 신뢰 기반 설득, 관계 구축, 갈등 해결, 리더십</strong>. 질문력·공감력·스토리텔링의 가치가 더 올라갑니다.</p>

        <blockquote className="border-l-4 border-teal-400 pl-4 py-2 my-4 bg-teal-50 dark:bg-teal-950 rounded-r-lg">
          <p><strong>9챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>이메일 제목은 <strong>핵심 키워드 + 행동 요청 + 기한</strong>.</li>
            <li>SNS에서는 <strong>30분 규칙</strong>으로 감정적 반응 자제.</li>
            <li><strong>오늘부터 실행</strong>: 상대의 세대에 맞는 소통 방식을 선택하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch10",
    title: "Ch.10 30일 말하기 업그레이드 플랜",
    body: (
      <>
        <p>일상 속에서 매일 조금씩 연습하면 됩니다. 4주로 나뉘어 <strong>매주 하나의 핵심 스킬에 집중</strong>합니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">4주 플랜 요약</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>Week 1 경청</strong> — 말 끊지 않기, 핵심어 반복, 확인 질문, 80/20 실천</li>
          <li><strong>Week 2 두괄식</strong> — 결론 먼저, PREP 연습, 30초 핵심 전달, 카톡 용건 첫 줄</li>
          <li><strong>Week 3 질문</strong> — 열린 질문, 연결 고리, 칭찬+질문, 처음 보는 사람에게 말 걸기</li>
          <li><strong>Week 4 실전</strong> — PREP 회의 발언, I-Message, 피드백 샌드위치, 3분 스피치 녹음</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">매일 3분 스피치</h3>
        <p>아무 주제나 골라 타이머 3분을 맞추고 바로 말하기. <strong>1분 — 결론부터(PREP P-R)</strong>, <strong>2분 — 예시 전개(E)</strong>, <strong>3분 — 마무리(P 재강조)</strong>. 녹음해서 들어보면 효과가 배가됩니다.</p>

        <blockquote className="border-l-4 border-teal-400 pl-4 py-2 my-4 bg-teal-50 dark:bg-teal-950 rounded-r-lg">
          <p><strong>10챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li><strong>매일 3분 스피치</strong>가 가장 효과적인 연습법이다.</li>
            <li>30일 후에도 <strong>주 1회 3분 스피치, 월 1회 녹음 점검</strong>을 유지하라.</li>
            <li><strong>오늘부터 실행</strong>: Day 1 미션 — 오늘 대화에서 상대 말 끊지 않기.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "appendix",
    title: "부록 — 실전 템플릿과 체크리스트",
    body: (
      <>
        <p>이 부록에는 책에서 다룬 모든 프레임워크를 <strong>바로 복사해서 사용할 수 있는 템플릿</strong>으로 정리했습니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">5종 템플릿 목록</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>PREP 템플릿</strong> — P(주장)→R(이유)→E(예시)→P(재강조) + 상황별 활용 예시 3가지 + 빈 연습지 5회분</li>
          <li><strong>STAR 보고 템플릿</strong> — S(상황)→T(과제)→A(행동)→R(결과) + 업무 보고·면접 답변 활용 예시 + 빈 연습지 3회분</li>
          <li><strong>프레젠테이션 구조 시트</strong> — 청중 분석, 구조 설계(오프닝~Q&amp;A), 오프닝 3버전, 예상 질문 5개, 발표 전 체크리스트</li>
          <li><strong>경청 자가 진단 체크리스트</strong> — 8항목 5점 척도 자가 진단 + 점수 해석 + 주간 경청 개선 기록표</li>
          <li><strong>30일 플래너</strong> — Week 1~4 일별 미션 + 완료 체크 + 한줄 소감 + 최종 리뷰 (Day 1 vs Day 30 비교)</li>
        </ol>

        <blockquote className="border-l-4 border-teal-400 pl-4 py-2 my-4 bg-teal-50 dark:bg-teal-950 rounded-r-lg">
          <p><strong>부록 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>모든 템플릿은 노션·구글 독스·종이에 바로 옮겨 쓸 수 있다.</li>
            <li>완벽하게 채우려 하지 마세요 — 하나씩, 조금씩, 꾸준히.</li>
            <li>말하기는 기술이고, 기술은 연습으로 완성됩니다. <strong>오늘 한 마디가 내일의 당신을 만듭니다.</strong></li>
          </ul>
        </blockquote>
      </>
    ),
  },
];

const updateLogs: UpdateLog[] = [
  {
    version: 1,
    date: "2026-09-16",
    changes: ["초판 발행"],
  },
];

export default function SpeakingSkillsRead() {
  return (
    <GuideBook
      bookId="speaking-skills"
      title="말 잘하는 사람들의 비밀"
      emoji="🎙️"
      subtitle="PREP 법칙 · 설득 심리학 · 경청 · 갈등 해결 · 30일 업그레이드 플랜"
      topItems={topItems}
      sections={sections}
      updateLogs={updateLogs}
      currentVersion={1}
    />
  );
}
