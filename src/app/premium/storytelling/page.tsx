import Link from "next/link";
import BackToHome from "@/components/BackToHome";

export const metadata = {
  title: "사람의 마음을 휘어잡는 스토리텔링의 기술 | 살아있는 정보책",
  description:
    "브랜드 스토리로 팔로워를 팬으로, 고객을 전도사로 만드는 법. TOMS·파타고니아·나이키·에어비앤비 사례, 한국 사업자 현실 반영.",
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold mt-16 mb-6 text-center">{children}</h2>
  );
}

function PainPoint({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 py-2">
      <span className="text-red-500 flex-shrink-0">&#10060;</span>
      <p className="text-gray-700 dark:text-gray-300">{children}</p>
    </div>
  );
}

function FailedSolution({
  title,
  reason,
}: {
  title: string;
  reason: string;
}) {
  return (
    <div className="flex items-start gap-3 py-2">
      <span className="text-gray-400 flex-shrink-0">&#128683;</span>
      <p className="text-gray-700 dark:text-gray-300">
        <strong>{title}</strong>{" "}
        <span className="text-gray-500">({reason})</span>
      </p>
    </div>
  );
}

function Benefit({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 py-2">
      <span className="text-green-500 flex-shrink-0">&#9989;</span>
      <p className="text-gray-700 dark:text-gray-300">{children}</p>
    </div>
  );
}

function ChapterPreview({
  num,
  title,
  desc,
}: {
  num: number | string;
  title: string;
  desc: string;
}) {
  return (
    <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-3 mb-2">
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-sm">
          {num}
        </span>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 ml-11">{desc}</p>
    </div>
  );
}

function TrustItem({
  icon,
  text,
}: {
  icon: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3 py-2">
      <span className="flex-shrink-0">{icon}</span>
      <p className="text-sm text-gray-700 dark:text-gray-300">{text}</p>
    </div>
  );
}

export default function StorytellingLanding() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <BackToHome />

      {/* Hero */}
      <header className="text-center mb-16">
        <span className="text-6xl mb-6 block">&#128214;</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          사람의 마음을 휘어잡는 스토리텔링의 기술
          <br />
          <span className="text-amber-600 dark:text-amber-400">
            브랜드 스토리로 팔로워를 팬으로, 고객을 전도사로 만드는 법
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          사람들은 스펙을 기억하지 않습니다. 이야기를 기억합니다.
        </p>
        <p className="text-sm text-gray-400">
          김약사 · 유원소망약국
        </p>
      </header>

      {/* Empathy Quote */}
      <div className="text-center mb-16 p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <p className="text-xl italic text-gray-600 dark:text-gray-400 mb-4">
          &quot;왜 어떤 브랜드는 기억에 남고, 어떤 브랜드는 사라질까요?&quot;
        </p>
        <p className="text-base font-semibold text-amber-700 dark:text-amber-300">
          답은 스토리텔링에 있습니다.
        </p>
      </div>

      {/* Pain Points */}
      <SectionTitle>지금 이런 상태 아닌가요?</SectionTitle>
      <div className="space-y-1 mb-12">
        <PainPoint>
          제품은 분명히 좋은데, 사람들이 기억하지 못함
        </PainPoint>
        <PainPoint>
          SNS에 열심히 올려도 반응이 0에 가까움
        </PainPoint>
        <PainPoint>
          경쟁자와 뭐가 다른지 한 문장으로 말하지 못함
        </PainPoint>
        <PainPoint>
          고객 후기가 쌓여 있어도 마케팅에 활용하지 못함
        </PainPoint>
        <PainPoint>
          브랜드 소개를 쓰면 항상 딱딱하고 지루해짐
        </PainPoint>
        <PainPoint>
          인스타·블로그·유튜브 플랫폼마다 뭘 올려야 할지 모름
        </PainPoint>
        <PainPoint>
          진짜 팬이 아닌 할인만 찾는 일회성 고객만 모임
        </PainPoint>
      </div>

      {/* Failed Solutions */}
      <SectionTitle>
        &quot;이미 이것저것 해봤습니다&quot;
      </SectionTitle>
      <div className="space-y-1 mb-12">
        <FailedSolution
          title="스펙 나열"
          reason="기능만 말하면 안 팔림 — 사람은 이야기에 반응함"
        />
        <FailedSolution
          title="할인 경쟁"
          reason="가격이 아니라 가치로 싸워야 팬이 생김"
        />
        <FailedSolution
          title="트렌드 따라하기"
          reason="남의 이야기를 흉내 내면 기억에 남지 않음"
        />
        <FailedSolution
          title="광고비 쏟기"
          reason="돈이 떨어지면 끝 — 스토리는 돈 없이도 퍼짐"
        />
        <FailedSolution
          title="완벽주의"
          reason="다듬다가 못 올리는 사이 경쟁자가 시장을 가져감"
        />
      </div>

      {/* Discovery */}
      <div className="p-8 rounded-2xl bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 mb-16">
        <h2 className="text-2xl font-bold mb-4 text-center">
          팔리는 브랜드는 이야기를 팝니다
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          TOMS는 신발 품질을 말하지 않았습니다. "한 켤레를 사면 한 켤레를 기증한다"는 이야기를 했습니다. 파타고니아는 옷을 팔면서 "이 재킷을 사지 마세요"라고 말했습니다. 나이키는 운동화가 아니라 "Just Do It"의 정신을 팝니다. 에어비앤비는 숙소가 아니라 "어디서나 집처럼"을 팝니다. 공통점은 하나 — 모두 이야기를 팔았다는 것입니다.
        </p>
        <p className="text-lg font-semibold text-center mb-6">
          스토리텔링은 대기업만의 것이 아닙니다.
          <br />
          작은 브랜드일수록 진정성 있는 이야기가 더 강력합니다.
        </p>
        <div className="space-y-2">
          <Benefit>
            영웅의 여정 구조로 내 브랜드만의 핵심 스토리를 발굴하는 법
          </Benefit>
          <Benefit>
            BAB·PAS·AIDA 등 스토리텔링 공식 7가지를 실전에 바로 적용
          </Benefit>
          <Benefit>
            고객 후기를 설득력 있는 사례 연구(케이스 스터디)로 변환하는 법
          </Benefit>
          <Benefit>
            인스타·블로그·유튜브 플랫폼별 맞춤 스토리 전략
          </Benefit>
          <Benefit>
            오리진 스토리 3분 템플릿 — 브랜드 탄생 이야기를 즉시 쓰는 법
          </Benefit>
        </div>
        <div className="mt-6 p-4 rounded-lg bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800">
          <p className="text-sm text-center font-medium">
            가장 중요한 사실:
            <br />
            <strong>
              &quot;사람들은 스펙을 기억하지 않습니다. 이야기를 기억합니다.&quot;
            </strong>
            <br />
            스토리텔링의 기술이 그 이야기를 만드는 법을 알려줍니다.
          </p>
        </div>
      </div>

      {/* Before / After */}
      <SectionTitle>이 책을 읽고 나면 달라지는 것들</SectionTitle>
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800">
          <h3 className="font-bold mb-3 text-red-600 dark:text-red-400">
            Before
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>&#128560; 좋은 제품인데 아무도 기억하지 못함</li>
            <li>&#128560; SNS에 올려도 반응 0, 팔로워 정체</li>
            <li>&#128560; 브랜드 소개가 딱딱하고 아무도 안 읽음</li>
            <li>&#128560; 할인할 때만 반응하는 일회성 고객들</li>
            <li>&#128560; 플랫폼마다 뭘 올릴지 몰라 결국 아무것도 안 올림</li>
            <li>&#128560; 경쟁자와 다른 게 뭔지 설명 못 함</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <h3 className="font-bold mb-3 text-green-600 dark:text-green-400">
            After
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>&#128522; 브랜드 핵심 스토리 한 문장으로 말할 수 있음</li>
            <li>&#128522; 콘텐츠 올리면 저장·공유가 자연스럽게 일어남</li>
            <li>&#128522; 고객이 먼저 다른 사람에게 소개해 주는 팬층 형성</li>
            <li>&#128522; 할인 없이도 사는 고객, 가격보다 가치로 선택받음</li>
            <li>&#128522; 플랫폼별 스토리 전략이 생겨 꾸준히 올릴 수 있음</li>
            <li>&#128522; 오리진 스토리로 경쟁자와 명확히 차별화됨</li>
          </ul>
        </div>
      </div>

      {/* Chapter Preview */}
      <SectionTitle>10개 챕터 + 부록 미리보기</SectionTitle>
      <div className="space-y-3 mb-16">
        <ChapterPreview
          num={1}
          title="핵심 스토리 발굴 ⭐"
          desc="영웅의 여정 구조로 내 브랜드만의 스토리를 찾는 법. 어떤 사업이든 숨겨진 이야기가 있습니다 — 그것을 꺼내는 구체적인 질문들."
        />
        <ChapterPreview
          num={2}
          title="서사의 구조"
          desc="사람의 뇌가 이야기에 반응하는 원리. 시작·갈등·해결의 3막 구조와 브랜드에 적용하는 방법."
        />
        <ChapterPreview
          num={3}
          title="오리진 스토리 ⭐"
          desc="브랜드 탄생 이야기를 3분 안에 쓰는 템플릿. 창업자의 실패·전환·각오가 팬을 만드는 이유와 실전 작성법."
        />
        <ChapterPreview
          num={4}
          title="고객을 주인공으로 ⭐"
          desc="브랜드가 아니라 고객이 영웅인 이야기 만들기. 고객 후기를 설득력 있는 케이스 스터디로 변환하는 5단계 프레임."
        />
        <ChapterPreview
          num={5}
          title="플랫폼별 스토리텔링"
          desc="인스타그램·블로그·유튜브·뉴스레터 각 플랫폼의 스토리 문법. 같은 이야기를 각 채널에 맞게 재편집하는 법."
        />
        <ChapterPreview
          num={6}
          title="감정의 고리 ⭐"
          desc="사람이 구매를 결정하는 감정 메커니즘. 공포·희망·소속감·정체성을 스토리에 윤리적으로 활용하는 법."
        />
        <ChapterPreview
          num={7}
          title="진정성의 시대"
          desc="과장 광고가 통하지 않는 시대의 스토리텔링. 약점과 실패를 솔직하게 드러냈을 때 신뢰가 쌓이는 역설."
        />
        <ChapterPreview
          num={8}
          title="스토리텔링 공식 7가지 ⭐"
          desc="BAB(Before-After-Bridge), PAS(Problem-Agitate-Solution), AIDA 등 검증된 7가지 공식. 상황별 어떤 공식을 쓸지 선택하는 기준."
        />
        <ChapterPreview
          num={9}
          title="측정과 진화"
          desc="스토리의 효과를 데이터로 측정하는 법. 반응률·저장·공유·전환율로 어떤 이야기가 통하는지 파악하고 진화시키기."
        />
        <ChapterPreview
          num={10}
          title="행동을 이끌어라"
          desc="스토리 끝에 자연스럽게 행동을 유도하는 CTA 설계. 강요 없이 팬이 스스로 움직이게 만드는 마지막 한 문장."
        />
        <ChapterPreview
          num="부록"
          title="스토리텔링 실행 키트 ⭐"
          desc="즉시 쓸 수 있는 오리진 스토리 3분 템플릿, 고객 후기 케이스 스터디 변환 워크시트, 플랫폼별 콘텐츠 캘린더, 스토리텔링 공식 7가지 치트시트."
        />
      </div>

      {/* Trust */}
      <SectionTitle>왜 이 가이드를 신뢰할 수 있나요?</SectionTitle>
      <div className="space-y-1 mb-16 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <TrustItem icon="&#127758;" text="글로벌 브랜드 사례 — TOMS·파타고니아·나이키·에어비앤비의 스토리텔링 전략을 해부하고 소규모 브랜드에 적용하는 방법으로 재구성" />
        <TrustItem icon="&#127470;&#127479;" text="한국 사업자 현실 반영 — 스마트스토어·인스타 쇼핑·블로그 마켓 등 한국 플랫폼 환경과 정서에 맞춘 실전 적용법" />
        <TrustItem icon="&#128260;" text="계속 업데이트 — 독자 피드백과 새로운 플랫폼 변화를 반영해 내용이 살아있음" />
        <TrustItem icon="&#128214;" text="즉시 실행 구조 — 읽고 끝나는 책이 아니라 템플릿과 워크시트로 바로 써먹는 실행 중심 구성" />
      </div>

      {/* CTA */}
      <div className="text-center mb-16">
        <p className="text-lg font-semibold mb-4">
          지금 내 브랜드의 이야기를 만드세요.
        </p>
        <Link
          href="/premium/storytelling/read"
          className="inline-block px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold text-lg rounded-xl transition-colors shadow-lg"
        >
          &#128214; 본문 보기
        </Link>
        <p className="text-sm text-gray-400 mt-3">
          서문 + 10개 챕터 + 부록 스토리텔링 실행 키트
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-8">
        <p>
          이 가이드는 브랜드 스토리텔링 이론과 글로벌 사례를 한국 사업자의 현실에 맞게 재구성한 실행 중심의 마케팅 가이드입니다.
        </p>
        <p className="mt-2">
          개인의 성과를 보장하지 않습니다. 실행 결과는 개인의 노력과 환경에 따라 다를 수 있습니다.
        </p>
        <p className="mt-4">
          <Link href="/" className="text-amber-600 dark:text-amber-400 hover:underline">
            &#8592; 살아있는 정보책 전체 목록
          </Link>
        </p>
      </footer>
    </main>
  );
}
