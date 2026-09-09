import Link from "next/link";
import BackToHome from "@/components/BackToHome";

export const metadata = {
  title: "딥포커스, 초집중의 기술 | 살아있는 정보책",
  description:
    "3분마다 방해받는 시대 — 집중력을 되찾는 과학적 시스템. 카네기멜론·플로리다주립대 연구 기반, 한국 직장인 현실 반영.",
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
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
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

export default function DeepFocusLanding() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <BackToHome />

      {/* Hero */}
      <header className="text-center mb-16">
        <span className="text-6xl mb-6 block">&#127919;</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          딥포커스, 초집중의 기술
          <br />
          <span className="text-indigo-600 dark:text-indigo-400">
            3분마다 방해받는 시대 — 집중력을 되찾는 과학적 시스템
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          집중력은 재능이 아닙니다. 기술입니다.
        </p>
        <p className="text-sm text-gray-400">
          김약사 · 유원소망약국
        </p>
      </header>

      {/* Empathy Quote */}
      <div className="text-center mb-16 p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <p className="text-xl italic text-gray-600 dark:text-gray-400 mb-4">
          &quot;하루 종일 일했는데 뭘 했는지 모르겠다고요?&quot;
        </p>
        <p className="text-base font-semibold text-indigo-700 dark:text-indigo-300">
          집중력은 재능이 아닙니다. 기술입니다.
        </p>
      </div>

      {/* Pain Points */}
      <SectionTitle>지금 이런 상태 아닌가요?</SectionTitle>
      <div className="space-y-1 mb-12">
        <PainPoint>
          3분마다 방해받고, 집중력 복구에 25분이 걸림
        </PainPoint>
        <PainPoint>
          카톡 알림 소리에 반사적으로 반응하는 자신을 발견
        </PainPoint>
        <PainPoint>
          하루 종일 바빴지만 돌아보면 성과가 0인 날
        </PainPoint>
        <PainPoint>
          멀티태스킹이 효율적이라는 착각 속에서 모든 게 엉킴
        </PainPoint>
        <PainPoint>
          중요한 프로젝트는 계속 내일로, 내일로 미루기
        </PainPoint>
        <PainPoint>
          밤에도 일 생각이 머리에서 떠나지 않아 제대로 쉬지 못함
        </PainPoint>
        <PainPoint>
          휴식 없이 8시간 앉아있어도 정작 한 일이 없는 느낌
        </PainPoint>
      </div>

      {/* Failed Solutions */}
      <SectionTitle>
        &quot;집중력 방법, 이미 찾아봤습니다&quot;
      </SectionTitle>
      <div className="space-y-1 mb-12">
        <FailedSolution
          title="의지력으로 버티기"
          reason="의지력은 소모품, 쓸수록 고갈됨"
        />
        <FailedSolution
          title="생산성 앱만 바꾸기"
          reason="도구의 문제가 아니라 시스템의 문제"
        />
        <FailedSolution
          title="야근으로 해결"
          reason="더 많이가 아니라 더 잘 집중해야 함"
        />
        <FailedSolution
          title="카페인에 의존"
          reason="일시적 에너지, 반동으로 더 지침"
        />
        <FailedSolution
          title="멀티태스킹"
          reason="뇌는 설계상 동시에 두 가지를 처리할 수 없음"
        />
      </div>

      {/* Discovery */}
      <div className="p-8 rounded-2xl bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800 mb-16">
        <h2 className="text-2xl font-bold mb-4 text-center">
          집중력은 타고나는 것이 아닙니다
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          카네기멜론 대학과 플로리다주립대 연구에 따르면, 방해 후 완전한 집중 복구에 평균 23분이 걸립니다. 하루에 10번 방해받으면 3시간 이상이 날아갑니다. 문제는 의지력이 아니라 환경 설계와 뇌의 작동 방식을 이해하지 못한 것입니다.
        </p>
        <p className="text-lg font-semibold text-center mb-6">
          딥포커스는 환경을 설계하고, 뇌 메커니즘을 활용해
          <br />
          집중력을 기술로 습득하는 과학적 시스템입니다.
        </p>
        <div className="space-y-2">
          <Benefit>
            뇌의 집중 메커니즘(하향식/상향식 주의)을 이해하고 활용하는 법
          </Benefit>
          <Benefit>
            포모도로 기법과 개구리 먹기를 결합한 실전 집중 루틴
          </Benefit>
          <Benefit>
            디지털 미니멀리즘으로 방해 없는 집중 환경 설계
          </Benefit>
          <Benefit>
            수면·식단·휴식의 과학으로 집중력의 연료를 채우는 법
          </Benefit>
          <Benefit>
            90일 딥포커스 챌린지로 초집중을 완전한 습관으로 만들기
          </Benefit>
        </div>
        <div className="mt-6 p-4 rounded-lg bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800">
          <p className="text-sm text-center font-medium">
            가장 중요한 사실:
            <br />
            <strong>
              &quot;집중력은 타고난 재능이 아니라, 설계하고 훈련할 수 있는 기술입니다.&quot;
            </strong>
            <br />
            딥포커스가 그 시스템을 알려줍니다.
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
            <li>&#128560; 3분마다 방해받아 아무것도 못 끝냄</li>
            <li>&#128560; 카톡 알림에 반사적으로 반응</li>
            <li>&#128560; 하루 종일 바빴지만 성과는 0</li>
            <li>&#128560; 멀티태스킹으로 모든 게 엉킴</li>
            <li>&#128560; 밤에도 일 생각으로 제대로 쉬지 못함</li>
            <li>&#128560; 중요한 일은 계속 내일로 미룸</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <h3 className="font-bold mb-3 text-green-600 dark:text-green-400">
            After
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>&#128522; 방해 없는 딥워크 블록을 하루에 확보</li>
            <li>&#128522; 알림을 통제하는 디지털 미니멀리즘 환경</li>
            <li>&#128522; 가장 어려운 일부터 끝내는 개구리 먹기</li>
            <li>&#128522; 단일 집중으로 깊고 빠른 결과물 완성</li>
            <li>&#128522; 퇴근 후엔 완전히 끊어내는 회복 루틴</li>
            <li>&#128522; 90일 후 초집중이 자연스러운 습관으로</li>
          </ul>
        </div>
      </div>

      {/* Chapter Preview */}
      <SectionTitle>10개 챕터 + 부록 미리보기</SectionTitle>
      <div className="space-y-3 mb-16">
        <ChapterPreview
          num={1}
          title="뇌의 집중 메커니즘 ⭐"
          desc="하향식·상향식 주의 시스템의 차이. 방해가 집중력에 미치는 실제 비용과 뇌 과학이 말하는 딥포커스의 원리."
        />
        <ChapterPreview
          num={2}
          title="의지력과 동기 찾기"
          desc="의지력은 왜 소모품인가. 동기를 외부에서 내부로 전환하는 법과 집중력의 심리적 기반을 다지는 방법."
        />
        <ChapterPreview
          num={3}
          title="집중 환경 설계 ⭐"
          desc="방해받지 않는 물리적·디지털 환경을 만드는 구체적인 전략. 책상, 알림, 소음까지 집중을 위한 공간 재설계."
        />
        <ChapterPreview
          num={4}
          title="디지털 미니멀리즘"
          desc="스마트폰과 SNS가 집중력을 빼앗는 원리. 디지털 미니멀리즘을 일상에 적용하는 단계별 실행 가이드."
        />
        <ChapterPreview
          num={5}
          title="시간 통제의 기술 ⭐"
          desc="타임블로킹으로 딥워크 구간을 확보하는 법. 하루의 에너지 곡선에 맞춰 집중 시간을 배치하는 실전 스케줄."
        />
        <ChapterPreview
          num={6}
          title="개구리 먹기 — 가장 어려운 일부터 ⭐"
          desc="미루기의 심리학과 개구리 먹기 전략. 포모도로 기법과 결합해 가장 중요한 일을 아침에 끝내는 루틴."
        />
        <ChapterPreview
          num={7}
          title="휴식의 과학"
          desc="휴식 없이 앉아있는 것이 왜 비효율인가. 울트라디안 리듬에 따른 90분 집중·20분 회복 사이클 설계."
        />
        <ChapterPreview
          num={8}
          title="집중력의 연료: 수면과 식단"
          desc="수면 부족이 집중력에 미치는 영향과 최적 수면 루틴. 뇌 기능을 높이는 식단과 카페인 활용 전략."
        />
        <ChapterPreview
          num={9}
          title="습관으로 만들기"
          desc="딥포커스 루틴을 자동화하는 습관 설계 원리. 무너지는 날을 빠르게 복구하는 처방전과 장기 유지 전략."
        />
        <ChapterPreview
          num={10}
          title="딥워크: 초집중의 기적 ⭐"
          desc="칼 뉴포트의 딥워크 개념을 현실에 적용하는 법. 얕은 일과 깊은 일을 분리해 커리어를 바꾸는 초집중 전략."
        />
        <ChapterPreview
          num="부록"
          title="초집중 실행 키트 ⭐"
          desc="즉시 쓸 수 있는 딥포커스 데일리 플래너, 개구리 먹기 워크시트, 디지털 미니멀리즘 체크리스트, 90일 딥포커스 챌린지 플래너."
        />
      </div>

      {/* Trust */}
      <SectionTitle>왜 이 가이드를 신뢰할 수 있나요?</SectionTitle>
      <div className="space-y-1 mb-16 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <TrustItem icon="&#127891;" text="연구 기반 — 카네기멜론·플로리다주립대 집중력 연구와 칼 뉴포트 딥워크 이론을 현실에 맞게 재구성" />
        <TrustItem icon="&#127470;&#127479;" text="한국 직장인 현실 반영 — 카톡 즉답 문화, 오픈 오피스 환경, 야근 문화에 맞춘 실전 적용법" />
        <TrustItem icon="&#128260;" text="계속 업데이트 — 독자 피드백과 최신 연구를 반영해 내용이 살아있음" />
        <TrustItem icon="&#127919;" text="90일 챌린지 설계 — 읽고 끝나는 책이 아니라 습관으로 굳히는 실행 중심 구조" />
      </div>

      {/* CTA */}
      <div className="text-center mb-16">
        <p className="text-lg font-semibold mb-4">
          집중력을 기술로 만드세요. 재능이 아닙니다.
        </p>
        <Link
          href="/premium/deep-focus/read"
          className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg rounded-xl transition-colors shadow-lg"
        >
          &#128214; 본문 보기
        </Link>
        <p className="text-sm text-gray-400 mt-3">
          서문 + 10개 챕터 + 부록 초집중 실행 키트
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-8">
        <p>
          이 가이드는 집중력 과학 연구와 딥워크 이론을 한국 직장인의 현실에 맞게 재구성한 실행 중심의 자기계발 가이드입니다.
        </p>
        <p className="mt-2">
          개인의 성과를 보장하지 않습니다. 실행 결과는 개인의 노력과 환경에 따라 다를 수 있습니다.
        </p>
        <p className="mt-4">
          <Link href="/" className="text-indigo-600 dark:text-indigo-400 hover:underline">
            &#8592; 살아있는 정보책 전체 목록
          </Link>
        </p>
      </footer>
    </main>
  );
}
