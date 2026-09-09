import GuideBook from "@/components/GuideBook";
import type {
  TopItem,
  ContentSection,
  UpdateLog,
} from "@/components/GuideBook";

export const metadata = {
  title: "사업가를 위한 퍼스널 브랜딩 가이드 — 본문 | 살아있는 정보책",
  description:
    "UVP 발견부터 수익화까지 90일 로드맵 — 당신이 곧 브랜드입니다. 서문 + 10개 챕터 + 부록 전문. 브랜드 아이덴티티, 콘텐츠 전략, 네트워킹, 커뮤니티, 위기관리, 수익화, 90일 실행 플랜까지.",
};

const topItems: TopItem[] = [
  {
    number: 1,
    title: "왜 퍼스널 브랜딩인가 — 브랜드가 자산인 이유",
    oneLiner: "당신이 없는 자리에서 사람들이 하는 이야기, 그것이 퍼스널 브랜드다.",
    description:
      "퍼스널 브랜드의 정의, 자산이 되는 3가지 이유(가격 경쟁 탈출·신뢰 복리·생존율), Gary Vee 7단계 구축법, Brene Brown 진정성 리더십, 한국 사업가 3대 성공 사례, 5가지 오해와 진실, 7가지 핵심 원칙.",
    situation: "사업은 하고 있지만 브랜드가 뭔지, 왜 필요한지 감이 안 올 때",
    action: "1장 브랜딩 현황 진단 10문항을 솔직하게 채점하세요.",
    mission: "나의 현재 점수를 기록하고, 90일 후 다시 측정할 날짜를 정하세요.",
  },
  {
    number: 2,
    title: "나의 UVP 찾기 — 고유 가치 제안 설계법",
    oneLiner: "'왜 다른 사람이 아닌 나를 선택해야 하는가?'에 대한 한 문장 답.",
    description:
      "UVP 3요소(타겟·가치·차별점), 강점 발굴 매트릭스, 시장 니즈 분석 5가지 방법, 스위트 스팟 교차 모델, 경쟁 분석 프레임워크, 블루오션 포지셔닝 5전략, 브랜드 보이스 설계 4요소.",
    situation: "경쟁자와 나의 차이를 한 문장으로 설명하지 못할 때",
    action: "강점 발굴 매트릭스 5문항에 답하고, 경쟁자 3명을 분석하세요.",
    mission: "UVP 한 문장을 완성하고 주변 3명에게 피드백을 받으세요.",
  },
  {
    number: 3,
    title: "브랜드 아이덴티티 구축 — 시각·언어·스토리 삼위일체",
    oneLiner: "시각, 언어, 스토리가 하나의 목소리로 말할 때 브랜드가 완성된다.",
    description:
      "시각 아이덴티티(프로필 사진·컬러·폰트), 언어 아이덴티티(슬로건·키워드·톤), 스토리텔링(영웅의 여정 5단계), 원 페이지 브랜드 가이드, 채널별 스토리 형태.",
    situation: "채널마다 톤이 다르고 시각적 일관성이 없어 고객이 혼란스러울 때",
    action: "메인 컬러 1개 + 보조 컬러 1개를 정하고 브랜드 키트를 세팅하세요.",
    mission: "원 페이지 브랜드 가이드를 완성하세요.",
  },
  {
    number: 4,
    title: "온라인 존재감 설계 — 플랫폼 선택부터 콘텐츠 전략까지",
    oneLiner: "7개를 대충 하는 것보다 3개를 깊이 운영하는 것이 10배 효과적이다.",
    description:
      "한국 주요 플랫폼 7종 비교, 2+1 법칙(메인+서브+소통), 업종별 추천 조합, 콘텐츠 기둥 설정, 70-20-10 비율, 네이버 블로그·인스타·카카오톡 채널 최적화, SEO 기초, KPI 추적.",
    situation: "모든 플랫폼에 가입만 해두고 어디에 집중해야 할지 모를 때",
    action: "2+1 법칙으로 메인·서브·소통 채널을 확정하세요.",
    mission: "첫 달 콘텐츠 캘린더 8개 주제를 미리 정하세요.",
  },
  {
    number: 5,
    title: "신뢰를 쌓는 콘텐츠 — 전문성을 증명하는 5가지 유형",
    oneLiner: "줄 수 있는 사람만이 팔 수 있다 — 먼저 가치를 증명하라.",
    description:
      "5가지 콘텐츠 유형(교육·사례·비하인드·큐레이션·오피니언), 교육 콘텐츠 5단계 공식, Before-Process-After 사례 구조, OSMU(원소스 멀티유즈) 전략, 주간 콘텐츠 제작 루틴.",
    situation: "콘텐츠를 올리긴 하는데 전문가로 인식되지 않을 때",
    action: "5가지 유형별 콘텐츠 아이디어를 각 3개씩 적어보세요.",
    mission: "이번 주 안에 가장 자신 있는 유형으로 콘텐츠 1개를 발행하세요.",
  },
  {
    number: 6,
    title: "네트워킹의 기술 — 관계를 비즈니스 자산으로",
    oneLiner: "3번 주고 1번 요청하라 — Jab, Jab, Jab, Right Hook.",
    description:
      "Gary Vee의 네트워킹 철학, 온라인 네트워킹 5단계(관찰→소통→연결→가치제공→유지), DM 템플릿, 오프라인 네트워킹(Before·During·After), 멘토십 구축, 협업 5유형, CRM 간소화.",
    situation: "인맥은 있는데 비즈니스로 연결되지 않을 때",
    action: "나의 네트워크를 4레벨로 분류하고 VIP 5명을 선정하세요.",
    mission: "이번 주 3명에게 요청 없이 순수하게 가치만 제공하는 메시지를 보내세요.",
  },
  {
    number: 7,
    title: "커뮤니티 빌딩 — 팬 생태계 만들기",
    oneLiner: "10명의 진짜 팬이 10,000명의 팔로워보다 강력하다.",
    description:
      "팔로워·팬·커뮤니티 차이, 커뮤니티 빌딩 4단계(씨앗→뿌리→성장→열매), 한국 플랫폼별 추천(카톡 오픈채팅·네이버 카페·디스코드), 참여도 7가지 방법, 유료 전환 시기와 가격대.",
    situation: "팔로워는 있는데 충성 고객이 없고 구전이 일어나지 않을 때",
    action: "커뮤니티 이름, 목적, 운영 규칙 3가지를 기획하세요.",
    mission: "핵심 멤버가 될 수 있는 10명을 리스트업하고 이번 주 안에 초대하세요.",
  },
  {
    number: 8,
    title: "위기관리와 평판 보호 — 브랜드를 지키는 실전 매뉴얼",
    oneLiner: "위기의 골든타임은 24시간 — 준비된 사람만이 기회로 바꿀 수 있다.",
    description:
      "위기 5유형(악성 댓글·정보 오류·개인정보 노출·경쟁자 공격·도덕적 논란), 평판 관리 4원칙(투명성·신속성·진정성·일관성), 악성 댓글 분류 프로토콜, 사과문 구조, 평판 방어벽 구축, 법적 보호 기본.",
    situation: "악성 댓글이나 고객 불만이 터졌는데 어떻게 대응해야 할지 모를 때",
    action: "구글 알리미와 네이버 알리미에 이름·브랜드명을 등록하세요.",
    mission: "내 사업에서 발생 가능한 위기 시나리오 3개와 대응 계획을 작성하세요.",
  },
  {
    number: 9,
    title: "퍼스널 브랜드 수익화 — 브랜드를 돈으로 바꾸는 5가지 모델",
    oneLiner: "수익화는 충분한 신뢰가 쌓인 후의 자연스러운 결과여야 한다.",
    description:
      "수익화 준비도 체크, 5가지 모델(지식 상품·온라인 강의·서비스/컨설팅·커뮤니티 멤버십·제휴/협업), 가치 사다리(무료→저가→중가→고가), 전환율 벤치마크, 가격 책정 실전 가이드.",
    situation: "브랜드는 성장하는데 매출로 이어지지 않을 때",
    action: "5가지 모델 중 가장 빠르게 시작할 수 있는 1개를 선택하세요.",
    mission: "첫 유료 상품의 이름·가격·판매 채널·런칭일을 정하세요.",
  },
  {
    number: 10,
    title: "90일 퍼스널 브랜딩 로드맵 — 오늘부터 시작하기",
    oneLiner: "완벽한 준비를 기다리면 영원히 시작하지 못한다. 부족한 채로 시작하라.",
    description:
      "Phase 1(기반 구축, 1~30일): UVP+아이덴티티+채널. Phase 2(콘텐츠 & 성장, 31~60일): 발행 루틴+네트워킹. Phase 3(수익화 & 확장, 61~90일): 첫 유료 상품+커뮤니티. 주간 리뷰 템플릿, 장기 성장 마일스톤.",
    situation: "모든 이론은 배웠지만 어디서부터 시작할지 막막할 때",
    action: "캘린더를 열고 오늘부터 12주(90일)를 표시하세요.",
    mission: "90일 선언문을 작성하고 Day 1 과제를 오늘 실행하세요.",
  },
];

const sections: ContentSection[] = [
  {
    id: "sec-0",
    title: "들어가며 — 당신이 곧 브랜드입니다",
    body: (
      <>
        <p>상품이 아니라 <strong>사람을 먼저 선택하는 시대</strong>입니다. 한국의 1인 사업가 수는 2024년 약 102만 명을 돌파했고, 경쟁이 심해질수록 <strong>&quot;무엇을 파느냐&quot;보다 &quot;누가 파느냐&quot;</strong>가 결정적 차이를 만듭니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">이 책의 구성</h3>
        <p><strong>1~3장</strong> — 퍼스널 브랜드의 필요성, UVP(고유 가치 제안) 설계, 브랜드 아이덴티티를 구축합니다.</p>
        <p><strong>4~5장</strong> — 플랫폼 선택과 콘텐츠 전략으로 온라인 존재감을 만듭니다.</p>
        <p><strong>6~7장</strong> — 네트워킹과 커뮤니티로 팬 생태계를 설계합니다.</p>
        <p><strong>8~9장</strong> — 위기관리로 브랜드를 보호하고, 5가지 모델로 수익화합니다.</p>
        <p><strong>10장</strong> — 90일 로드맵으로 오늘부터 바로 실행합니다.</p>
        <p><strong>부록</strong> — UVP 워크시트, 브랜드 보이스 가이드, 콘텐츠 캘린더, 위기 대응 체크리스트, 90일 플래너까지 5종 실행 키트.</p>

        <blockquote className="border-l-4 border-pink-400 pl-4 py-2 my-4 bg-pink-50 dark:bg-pink-950 rounded-r-lg">
          <p><strong>서문 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>같은 가격이면 고객은 신뢰할 수 있는 사람에게 간다 — 그 신뢰를 체계적으로 만드는 것이 퍼스널 브랜딩.</li>
            <li>이 책은 읽기만 하는 책이 아니라 쓰고 실행하는 워크북이다.</li>
            <li><strong>1~3장이 모든 챕터의 기초이므로 반드시 먼저 읽으세요.</strong></li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-1",
    title: "Ch.1 왜 퍼스널 브랜딩인가 — 브랜드가 자산인 이유",
    body: (
      <>
        <p>Jeff Bezos의 말처럼 <strong>&quot;당신이 없는 자리에서 사람들이 하는 이야기&quot;</strong>가 곧 퍼스널 브랜드입니다. 브랜드가 없으면 가격으로 경쟁하지만, 브랜드가 있으면 <strong>가치로 경쟁</strong>할 수 있습니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">퍼스널 브랜드가 자산인 3가지 이유</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>가격 경쟁 탈출</strong> — 브랜드 없는 사업자는 할인으로, 있는 사업자는 프리미엄으로 경쟁한다.</li>
          <li><strong>신뢰의 복리 효과</strong> — Gary Vee는 13년간 매일 콘텐츠를 올려 세계적 기업가가 되었다. 1개월→인지, 6개월→입소문, 12개월→자산.</li>
          <li><strong>생존율 향상</strong> — 5년 생존율 약 30%. 살아남는 사업자의 공통점은 대표 개인의 브랜드 파워.</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">7가지 핵심 원칙 (요약)</h3>
        <p>진정성이 전략을 이긴다 / 일관성이 퀄리티를 이긴다 / 좁게 시작해서 넓게 확장 / 먼저 주고 나중에 받아라 / 데이터로 검증 / 혼자 하지 말고 함께 / 장기 게임을 하라.</p>

        <blockquote className="border-l-4 border-pink-400 pl-4 py-2 my-4 bg-pink-50 dark:bg-pink-950 rounded-r-lg">
          <p><strong>1챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>퍼스널 브랜드는 선택이 아니라 필수 — 당신이 만들지 않으면 시장이 대신 만든다.</li>
            <li>퍼스널 브랜딩 5가지 오해: 유명해야 한다(X), 돈이 많이 든다(X), 시간이 오래 걸린다(X).</li>
            <li><strong>오늘부터 실행</strong>: 브랜딩 현황 진단 10문항을 채점하고 현재 위치를 파악하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-2",
    title: "Ch.2 나의 UVP 찾기 — 고유 가치 제안 설계법",
    body: (
      <>
        <p><strong>UVP(Unique Value Proposition)</strong>는 &quot;왜 고객이 다른 사람이 아닌 나를 선택해야 하는가?&quot;에 대한 명확한 답입니다. 좋은 UVP는 <strong>누구를 위한 것(타겟) + 어떤 문제를 해결하는가(가치) + 왜 나만 할 수 있는가(차별점)</strong>을 포함합니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">UVP 설계 3단계</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>강점 발굴</strong> — 사람들이 자주 조언을 구하는 분야, 돈 없이도 하는 일, 10년 이상 해온 것</li>
          <li><strong>시장 니즈 분석</strong> — 네이버 키워드 도구, 크몽/클래스101 인기 상품, 커뮤니티 반복 질문</li>
          <li><strong>교차점(스위트 스팟) 찾기</strong> — 나의 강점 + 시장 니즈 + 경쟁 공백 = UVP</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">블루오션 포지셔닝 5전략</h3>
        <p>니치+니치 조합 / 경험 기반 차별화 / 포맷 차별화 / 타겟 세분화 / 프로세스 공개. &quot;요가 강사&quot;가 아니라 <strong>&quot;IT 직장인을 위한 거북목 요가 전문가&quot;</strong>처럼.</p>

        <blockquote className="border-l-4 border-pink-400 pl-4 py-2 my-4 bg-pink-50 dark:bg-pink-950 rounded-r-lg">
          <p><strong>2챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>UVP 공식: &quot;[타겟]이 [문제]를 해결할 수 있도록, [차별점]을 활용한 [서비스]를 제공합니다.&quot;</li>
            <li>UVP는 한 번에 완성되지 않는다 — 시장과 대화하면서 3개월마다 다듬어가라.</li>
            <li><strong>오늘부터 실행</strong>: UVP 한 문장을 완성하고 3명에게 피드백을 받으세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-3",
    title: "Ch.3 브랜드 아이덴티티 구축 — 시각·언어·스토리 삼위일체",
    body: (
      <>
        <p>브랜드 아이덴티티는 <strong>시각(프로필·컬러·폰트), 언어(슬로건·키워드·톤), 스토리(개인 서사·가치관·비전)</strong>가 삼위일체로 작동할 때 사람들의 마음에 각인됩니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">시각 요소</h3>
        <p>전문적인 프로필 사진의 사업자를 선택할 확률이 2.3배. 브랜드 컬러는 감정을 전달합니다 — 파랑(신뢰), 초록(건강), 주황(에너지), 보라(고급감), 검정(세련됨).</p>

        <h3 className="text-xl font-bold mt-8 mb-4">언어 요소 + 스토리텔링</h3>
        <p>슬로건 3공식: 약속형(&quot;~만들어드립니다&quot;), 정체성형(&quot;나는 ~하는 사람&quot;), 가치형(&quot;~이 ~을 바꿉니다&quot;). 스토리는 <strong>영웅의 여정</strong>(평범한 일상→전환점→시련→성장→현재와 비전)으로 구성하세요. 사람의 뇌는 데이터보다 스토리를 22배 더 잘 기억합니다.</p>

        <blockquote className="border-l-4 border-pink-400 pl-4 py-2 my-4 bg-pink-50 dark:bg-pink-950 rounded-r-lg">
          <p><strong>3챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>세 요소가 따로 놀면 고객은 혼란, 일관되면 신뢰를 느낀다.</li>
            <li>핵심 키워드 3개를 정하고 모든 소통에서 반복 사용하라.</li>
            <li><strong>오늘부터 실행</strong>: 원 페이지 브랜드 가이드를 완성하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-4",
    title: "Ch.4 온라인 존재감 설계 — 플랫폼 선택부터 콘텐츠 전략까지",
    body: (
      <>
        <p>Gary Vaynerchuk: <strong>&quot;온라인에 없다면, 존재하지 않는 것이다.&quot;</strong> 한국인의 87%가 구매 전 온라인 검색을 합니다. 하지만 모든 플랫폼에 있을 필요는 없습니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">2+1 법칙</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>메인 1개</strong> — 가장 많은 에너지를 투자하는 곳 (블로그/인스타/유튜브)</li>
          <li><strong>서브 1개</strong> — 메인을 보완하는 채널</li>
          <li><strong>소통 1개</strong> — 고객과 직접 대화 (보통 카카오톡 채널)</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">콘텐츠 비율: 70-20-10</h3>
        <p><strong>70%</strong> 가치 제공(교육/정보) + <strong>20%</strong> 관계 형성(소통/일상) + <strong>10%</strong> 판매. 가장 흔한 실수는 판매 비율을 높이는 것입니다.</p>

        <blockquote className="border-l-4 border-pink-400 pl-4 py-2 my-4 bg-pink-50 dark:bg-pink-950 rounded-r-lg">
          <p><strong>4챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>SEO 핵심: 롱테일 키워드(&quot;다이어트&quot;보다 &quot;30대 직장인 점심 다이어트 식단&quot;).</li>
            <li>허영 지표(팔로워 수)가 아닌 실질 지표(저장/공유, 전환율)를 추적하라.</li>
            <li><strong>오늘부터 실행</strong>: 메인·서브·소통 채널을 확정하고 첫 콘텐츠를 발행하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-5",
    title: "Ch.5 신뢰를 쌓는 콘텐츠 — 전문성을 증명하는 5가지 유형",
    body: (
      <>
        <p>콘텐츠는 <strong>&quot;이 사람은 나를 도울 수 있고, 도울 의지가 있다&quot;</strong>는 확신을 심어주는 도구입니다. 5가지 유형을 균형 있게 활용하세요.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">5가지 콘텐츠 유형</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>교육</strong> — &quot;이 사람은 전문가다&quot; (How-to, 체크리스트, 미니 강의)</li>
          <li><strong>사례</strong> — &quot;이 사람은 결과를 만든다&quot; (Before→Process→After→Insight)</li>
          <li><strong>비하인드</strong> — &quot;이 사람은 진짜다&quot; (작업 과정, 실패, 성장 기록)</li>
          <li><strong>큐레이션</strong> — &quot;이 사람은 안목이 있다&quot; (업계 뉴스 + 나의 해석)</li>
          <li><strong>오피니언</strong> — &quot;이 사람은 관점이 있다&quot; (업계 통념에 대한 독자적 시각)</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">OSMU 전략</h3>
        <p>1개 블로그 글(원본)에서 → 인스타 카드뉴스 + 릴스 + 카카오톡 메시지 + 유튜브 쇼츠로 재가공. 주간 루틴(월: 주제 선정, 화: 작성, 수: OSMU 변환, 목: 발행+소통, 금: 성과 확인).</p>

        <blockquote className="border-l-4 border-pink-400 pl-4 py-2 my-4 bg-pink-50 dark:bg-pink-950 rounded-r-lg">
          <p><strong>5챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>교육으로 전문성, 사례로 결과, 비하인드로 진정성, 큐레이션으로 안목, 오피니언으로 관점.</li>
            <li>Brene Brown이 가르쳐준 교훈: 완벽한 모습만 보여주면 동경은 받지만 신뢰는 못 얻는다.</li>
            <li><strong>오늘부터 실행</strong>: 5가지 유형별 아이디어 3개씩 적고 이번 주 1개 발행하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-6",
    title: "Ch.6 네트워킹의 기술 — 관계를 비즈니스 자산으로",
    body: (
      <>
        <p>진정한 네트워킹은 명함 교환이 아니라 <strong>상호 가치를 교환하는 관계 구축</strong>입니다. Gary Vaynerchuk의 <strong>&quot;Jab, Jab, Jab, Right Hook&quot;</strong> — 3번 가치를 주고 1번 요청하라.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">온라인 네트워킹 5단계</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>관찰</strong> (1~2주) — 타겟 인물의 콘텐츠를 꾸준히 소비</li>
          <li><strong>의미 있는 소통</strong> (2~4주) — &quot;좋아요&quot;가 아닌 구체적 댓글</li>
          <li><strong>1:1 연결</strong> (4~6주) — 커피챗 또는 온라인 미팅 제안</li>
          <li><strong>가치 제공</strong> (지속) — 도움이 될 정보·연결 제공</li>
          <li><strong>관계 유지</strong> (지속) — 정기적 안부 + 연 1~2회 오프라인</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">오프라인 후속 조치 — 가장 중요!</h3>
        <p>24시간 이내 감사 메시지, 약속한 자료 즉시 공유, 1주일 이내 후속 미팅, SNS 서로 팔로우.</p>

        <blockquote className="border-l-4 border-pink-400 pl-4 py-2 my-4 bg-pink-50 dark:bg-pink-950 rounded-r-lg">
          <p><strong>6챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>네트워크 CRM: 노션이나 엑셀로 VIP/친밀/보통/새로운 4레벨 관리.</li>
            <li>좋은 협업 파트너: 보완적 전문성 + 비슷한 가치관 + 같은 타겟.</li>
            <li><strong>오늘부터 실행</strong>: 이번 주 3명에게 요청 없이 가치만 제공하는 메시지를 보내세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-7",
    title: "Ch.7 커뮤니티 빌딩 — 팬 생태계 만들기",
    body: (
      <>
        <p>팔로워는 보기만 하고, 팬은 응원하고 공유하지만, <strong>커뮤니티는 서로 돕고 성장</strong>합니다. Marie Forleo의 B-School 커뮤니티는 Marie 없이도 자생적으로 움직입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">커뮤니티 빌딩 4단계</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>씨앗</strong> — 핵심 멤버 10명 모으기 (꾸준히 댓글 다는 사람, 만족 고객)</li>
          <li><strong>뿌리</strong> — 규칙과 문화 만들기 (목적, 행동 규칙, 기여 방법, 소통 방식)</li>
          <li><strong>성장</strong> — 가치의 순환 (월요 체크인, 수요 Q&amp;A, 금요 성과 공유, 월간 챌린지)</li>
          <li><strong>열매</strong> — 운영자 없이도 소통이 이루어지는 자생적 커뮤니티</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">유료 전환 시기</h3>
        <p>무료 활성 멤버 50명 이상 + &quot;더 깊은 과정 없나요?&quot; 질문 + 유료 전환 시 따라올 핵심 멤버 20명 예상 → 전환 준비 완료.</p>

        <blockquote className="border-l-4 border-pink-400 pl-4 py-2 my-4 bg-pink-50 dark:bg-pink-950 rounded-r-lg">
          <p><strong>7챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>커뮤니티 건강도: 주간 활성 멤버 비율 30% 이상, 멤버 간 소통 50% 이상이 목표.</li>
            <li>10명의 진짜 팬이 10,000명의 팔로워보다 강력하다.</li>
            <li><strong>오늘부터 실행</strong>: 핵심 멤버 10명을 리스트업하고 이번 주 안에 초대하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-8",
    title: "Ch.8 위기관리와 평판 보호 — 브랜드를 지키는 실전 매뉴얼",
    body: (
      <>
        <p>Brene Brown: <strong>&quot;비판을 받지 않는 유일한 방법은 아무것도 하지 않는 것이다.&quot;</strong> 위기는 반드시 옵니다. 중요한 것은 사전에 시스템을 갖추는 것입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">평판 관리 4원칙</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>투명성</strong> — 숨기면 더 커진다. 실수를 인정하고 빠르게 사과.</li>
          <li><strong>신속성</strong> — 골든타임 24시간. 48시간 넘으면 여론 형성 후 회복 어려움.</li>
          <li><strong>진정성</strong> — 형식적 사과가 아닌 진심(인정→공감→해결→방지).</li>
          <li><strong>일관성</strong> — 위기 상황에서도 평소 브랜드 톤을 유지.</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">평판 방어벽 5요소</h3>
        <p>검색 1페이지 장악 / 고객 후기 누적 / 전문 매체 기고 / 수상·인증 이력 / 위기 시 옹호해주는 팬층.</p>

        <blockquote className="border-l-4 border-pink-400 pl-4 py-2 my-4 bg-pink-50 dark:bg-pink-950 rounded-r-lg">
          <p><strong>8챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>악성 댓글 분류: 사실 기반 비판 → 감사+개선 / 근거 없는 비방 → 무시 또는 삭제 / 명예훼손 → 증거 확보+법적 검토.</li>
            <li>Gary Vee는 부정적 댓글을 &quot;무료 컨설팅&quot;이라 부른다 — 모든 불만에 개선 힌트가 있다.</li>
            <li><strong>오늘부터 실행</strong>: 구글·네이버 알리미에 이름과 브랜드명을 등록하세요 (5분).</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-9",
    title: "Ch.9 퍼스널 브랜드 수익화 — 브랜드를 돈으로 바꾸는 5가지 모델",
    body: (
      <>
        <p>수익화는 <strong>충분한 신뢰가 쌓인 후의 자연스러운 결과</strong>여야 합니다. 수익화 준비도 체크 5항목 중 3개 이상이면 시작할 때입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">5가지 수익화 모델</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>지식 상품</strong> — 전자책·템플릿·가이드. 한번 만들면 무한 판매 (크몽, 아임웹, 스마트스토어).</li>
          <li><strong>온라인 강의</strong> — 클래스101, 인프런, 자체 플랫폼. 체계적 교육 콘텐츠.</li>
          <li><strong>서비스/컨설팅</strong> — 1:1 상담(5~15만원) → 4주 프로그램(30~80만원) → 12주 심화(100~300만원).</li>
          <li><strong>커뮤니티/멤버십</strong> — 월 구독 모델. 100명 x 29,900원 = 월 299만원.</li>
          <li><strong>제휴/협업</strong> — 앰배서더, 콜라보 제품, 강연, 출판.</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">가치 사다리</h3>
        <p>무료(블로그/SNS) → 저가(전자책 1,000~19,900원) → 중가(온라인 강의 10~80만원) → 고가(1:1 컨설팅 100만원+) → 최고가(연간 자문).</p>

        <blockquote className="border-l-4 border-pink-400 pl-4 py-2 my-4 bg-pink-50 dark:bg-pink-950 rounded-r-lg">
          <p><strong>9챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>가격 실수 3가지: 너무 싸게 시작 / 시간 단가 계산 / 경쟁사 따라가기.</li>
            <li>시간이 아닌 가치로 가격을 매기세요 — 고객이 얻을 결과를 기준으로.</li>
            <li><strong>오늘부터 실행</strong>: 5가지 모델 중 1개를 선택하고 런칭 목표일을 정하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-10",
    title: "Ch.10 90일 퍼스널 브랜딩 로드맵 — 오늘부터 시작하기",
    body: (
      <>
        <p>90일은 <strong>습관이 정착되고 첫 결과가 보이기 시작하는 시간</strong>입니다. 이 챕터는 9개 챕터의 모든 것을 실행 가능한 일정표로 압축합니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">Phase 1: 기반 구축 (Day 1~30)</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>1~2주</strong> — UVP 완성, 경쟁 분석, 페르소나 작성, 브랜드 아이덴티티 구축</li>
          <li><strong>3~4주</strong> — 플랫폼 세팅, 콘텐츠 캘린더 작성, 첫 콘텐츠 발행, 발행 루틴 확립</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">Phase 2: 콘텐츠 &amp; 성장 (Day 31~60)</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>5~6주</strong> — 주 2회 발행 가속, 5가지 콘텐츠 유형 시도, OSMU 전략 실행</li>
          <li><strong>7~8주</strong> — 네트워킹 본격화, 타겟 인물 5명 관찰, 첫 커피챗, CRM 구축</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">Phase 3: 수익화 &amp; 확장 (Day 61~90)</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>9~10주</strong> — 수익화 모델 확정, 첫 유료 상품 기획·런칭</li>
          <li><strong>11~12주</strong> — 커뮤니티 시작, 위기 대응 매뉴얼, 90일 리뷰, 다음 90일 계획</li>
        </ul>

        <blockquote className="border-l-4 border-pink-400 pl-4 py-2 my-4 bg-pink-50 dark:bg-pink-950 rounded-r-lg">
          <p><strong>10챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>이 로드맵은 하루 30분~1시간 투자 기준 — 직장 다니면서도 가능하다.</li>
            <li>매주 금요일 10분 리뷰: 잘한 것 3가지, 개선할 것 2가지, 다음 주 핵심 목표 1가지.</li>
            <li><strong>오늘부터 실행</strong>: 90일 선언문을 작성하고 Day 1 과제를 지금 시작하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-11",
    title: "부록 — 복사해 쓰는 퍼스널 브랜딩 실행 키트",
    body: (
      <>
        <p>이 부록에는 책에서 다룬 모든 프레임워크를 <strong>바로 복사해서 사용할 수 있는 워크시트와 템플릿</strong>으로 정리했습니다. 프린트하거나 노션에 복사해서 활용하세요.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">5종 워크시트 &amp; 템플릿</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>UVP 워크시트</strong> — 강점 발굴 매트릭스 + 경쟁 분석 + UVP 작성 공식 + 엘리베이터 피치 + 검증 체크리스트</li>
          <li><strong>브랜드 보이스 가이드</strong> — 원 페이지 브랜드 가이드 + Do &amp; Don&apos;t + 브랜드 스토리 작성 워크시트</li>
          <li><strong>콘텐츠 캘린더</strong> — 월간 캘린더 + 아이디어 뱅크 10칸 + OSMU 변환 시트</li>
          <li><strong>위기 대응 체크리스트</strong> — 위기 유형별 매트릭스 + 사과문 템플릿 + 모니터링 설정 가이드</li>
          <li><strong>90일 로드맵 플래너</strong> — 전체 타임라인 + 주간 추적 시트(12주분) + 90일 선언문 + 주간 리뷰 템플릿</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">추천 도구</h3>
        <p><strong>콘텐츠 제작:</strong> 미리캔버스, Canva, CapCut, Notion. <strong>마케팅/분석:</strong> 네이버 키워드 도구, Google Analytics, 인스타그램 인사이트, Google Alerts.</p>

        <blockquote className="border-l-4 border-pink-400 pl-4 py-2 my-4 bg-pink-50 dark:bg-pink-950 rounded-r-lg">
          <p><strong>부록 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>처음에는 손으로 직접 채워보세요 — 디지털 정리보다 생각을 더 깊이 정리해 준다.</li>
            <li>완벽하게 채우려 하지 마세요 — 하나씩, 조금씩, 꾸준히가 최고의 전략.</li>
            <li>이 책의 모든 과정을 마친 당신은 이미 대부분의 사업가보다 앞서 있습니다. 이제 실행만 남았습니다.</li>
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
    changes: ["초판 발행: 퍼스널 브랜딩 10챕터 + 부록 실행 키트"],
  },
];

export default function PersonalBrandingRead() {
  return (
    <GuideBook
      bookId="personal-branding"
      title="사업가를 위한 퍼스널 브랜딩 가이드"
      emoji="🎤"
      subtitle="당신이 곧 브랜드입니다 — UVP 발견부터 수익화까지 90일 로드맵"
      topItems={topItems}
      sections={sections}
      updateLogs={updateLogs}
      currentVersion={1}
    />
  );
}
