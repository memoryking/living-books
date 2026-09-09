import Link from "next/link";
import BackToHome from "@/components/BackToHome";

export const metadata = {
  title: "일잘러의 비밀무기, 아이젠하워 매트릭스 | 살아있는 정보책",
  description:
    "바쁜 것을 멈추고 효과적으로 사는 법 — 하루 15분 결정 관리 시스템. 아이젠하워 대통령이 실제 사용한 검증된 프레임워크.",
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
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-700 text-white flex items-center justify-center font-bold text-sm">
          {num}
        </span>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 ml-11">{desc}</p>
    </div>
  );
}

function BonusItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800">
      <h4 className="font-semibold mb-1">&#127873; {title}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
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

export default function EisenhowerMatrixLanding() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <BackToHome />

      {/* Hero */}
      <header className="text-center mb-16">
        <span className="text-6xl mb-6 block">&#9201;</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          일잘러의 비밀무기, 아이젠하워 매트릭스
          <br />
          <span className="text-slate-600 dark:text-slate-400">
            바쁜 것을 멈추고 효과적으로 사는 법
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          하루 15분 결정 관리 시스템
        </p>
        <p className="text-sm text-gray-400">
          김약사 · 유원소망약국
        </p>
      </header>

      {/* Empathy Quote */}
      <div className="text-center mb-16 p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <p className="text-xl italic text-gray-600 dark:text-gray-400 mb-4">
          &quot;하루 종일 바빴는데 뭘 했는지 기억이 안 나시죠?&quot;
        </p>
        <p className="text-base font-semibold text-slate-700 dark:text-slate-300">
          시간을 관리하는 게 아니라, 결정을 관리해야 합니다.
        </p>
      </div>

      {/* Pain Points */}
      <SectionTitle>지금 이런 상태 아닌가요?</SectionTitle>
      <div className="space-y-1 mb-12">
        <PainPoint>
          하루 종일 바빴는데 성과는 0, 무언가 놓친 기분
        </PainPoint>
        <PainPoint>
          카톡 즉답 + 불필요한 회의에 정작 중요한 시간을 뺏김
        </PainPoint>
        <PainPoint>
          긴급하다는 이유만으로 모든 일에 즉시 반응하며 살기
        </PainPoint>
        <PainPoint>
          중요한 프로젝트는 계속 내일로 미루기
        </PainPoint>
        <PainPoint>
          모든 부탁에 예스, 정작 내 할 일이 쌓여가는 현실
        </PainPoint>
        <PainPoint>
          퇴근 후에도 일 생각이 머리를 떠나지 않음
        </PainPoint>
        <PainPoint>
          멀티태스킹이 생산적이라는 착각 속에서 모든 게 엉킴
        </PainPoint>
      </div>

      {/* Failed Solutions */}
      <SectionTitle>
        &quot;생산성 방법, 이미 찾아봤습니다&quot;
      </SectionTitle>
      <div className="space-y-1 mb-12">
        <FailedSolution
          title="투두리스트 작성"
          reason="순서 없이 나열만 하다 끝남"
        />
        <FailedSolution
          title="생산성 앱 교체"
          reason="도구만 바꾸고 습관은 그대로"
        />
        <FailedSolution
          title="야근으로 버티기"
          reason="더 많이가 아니라 더 잘 해야 함"
        />
        <FailedSolution
          title="멀티태스킹"
          reason="뇌는 설계상 동시에 두 가지를 할 수 없음"
        />
        <FailedSolution
          title="완벽주의"
          reason="모든 걸 잘하려다 하나도 제대로 못 함"
        />
      </div>

      {/* Discovery */}
      <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 mb-16">
        <h2 className="text-2xl font-bold mb-4 text-center">
          바쁜 것과 효과적인 것은 다릅니다
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          아이젠하워 대통령은 하루도 쉬지 않고 세계 최고 수준의 의사결정을 내렸습니다. 비결은 단 하나였습니다. &quot;긴급한 것&quot;과 &quot;중요한 것&quot;을 분리하는 것. 이 프레임워크를 하루 15분 아침 리추얼로 만들면, 하루 전체가 바뀝니다.
        </p>
        <p className="text-lg font-semibold text-center mb-6">
          결정을 관리하면, 시간이 따라옵니다.
          <br />
          이 책은 그 결정 시스템을 하루 15분으로 작동시키는 방법을 알려줍니다.
        </p>
        <div className="space-y-2">
          <Benefit>
            하루 15분 아침 리추얼로 하루 전체의 방향이 바뀜
          </Benefit>
          <Benefit>
            긴급 vs 중요를 즉시 구분하는 판단 기준 장착
          </Benefit>
          <Benefit>
            사분면2(성공존)에 시간을 투자해 미래 위기를 예방
          </Benefit>
          <Benefit>
            우아하게 거절하는 기술로 내 시간을 지키는 법
          </Benefit>
          <Benefit>
            90일 실행 계획으로 매트릭스를 완전한 습관으로 굳히기
          </Benefit>
        </div>
        <div className="mt-6 p-4 rounded-lg bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800">
          <p className="text-sm text-center font-medium">
            가장 중요한 사실:
            <br />
            <strong>
              &quot;바쁜 사람과 효과적인 사람의 차이는 결정 시스템에 있습니다.&quot;
            </strong>
            <br />
            아이젠하워 매트릭스가 그 시스템입니다.
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
            <li>&#128560; 하루가 끝나도 뭘 했는지 모름</li>
            <li>&#128560; 긴급한 일에만 끌려다님</li>
            <li>&#128560; 중요한 일은 계속 내일로 미룸</li>
            <li>&#128560; 거절 한마디 못 하고 시간 뺏김</li>
            <li>&#128560; 퇴근 후에도 일 걱정으로 쉬지 못함</li>
            <li>&#128560; 멀티태스킹으로 모든 게 엉킴</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <h3 className="font-bold mb-3 text-green-600 dark:text-green-400">
            After
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>&#128522; 하루 15분으로 하루 전체를 설계</li>
            <li>&#128522; 긴급 vs 중요를 즉시 분리</li>
            <li>&#128522; 사분면2(성공존)에 매일 시간 투자</li>
            <li>&#128522; 우아한 거절로 내 시간을 지킴</li>
            <li>&#128522; 퇴근 후엔 완전히 끊어내는 루틴</li>
            <li>&#128522; 90일 후 완전한 습관으로 굳어짐</li>
          </ul>
        </div>
      </div>

      {/* Chapter Preview */}
      <SectionTitle>10개 챕터 + 부록 미리보기</SectionTitle>
      <div className="space-y-3 mb-16">
        <ChapterPreview
          num={1}
          title="바쁜 일의 함정"
          desc="왜 열심히 할수록 더 바빠지는가. 긴급함이 만들어내는 착각과, 효과적인 사람이 보는 다른 시각."
        />
        <ChapterPreview
          num={2}
          title="네 가지 사분면"
          desc="아이젠하워 매트릭스의 구조 — 긴급·중요 두 축으로 모든 일을 4가지로 나누는 법."
        />
        <ChapterPreview
          num={3}
          title="15분 매트릭스 리추얼 ⭐"
          desc="매일 아침 15분으로 하루를 설계하는 구체적인 루틴. 실제 따라 할 수 있는 단계별 아침 의식."
        />
        <ChapterPreview
          num={4}
          title="사분면2 요새 만들기 ⭐"
          desc="중요하지만 긴급하지 않은 성공존에 시간을 확보하는 전략. 방해받지 않는 딥워크 블록 설계."
        />
        <ChapterPreview
          num={5}
          title="전략적 위임과 거절 ⭐"
          desc="사분면3·4의 일을 우아하게 위임하고 거절하는 기술. 관계를 해치지 않으면서 내 시간을 지키는 법."
        />
        <ChapterPreview
          num={6}
          title="보조 시스템 — 타임블로킹·GTD·포모도로"
          desc="매트릭스를 더 강력하게 만드는 보조 도구들. 각 시스템을 어떤 상황에 연결해서 쓰는지 실전 가이드."
        />
        <ChapterPreview
          num={7}
          title="주간 마스터 세션"
          desc="일주일을 돌아보고 다음 주를 설계하는 주간 리뷰. 한 주의 패턴을 읽고 전략을 수정하는 루틴."
        />
        <ChapterPreview
          num={8}
          title="삶 전체에 적용하기"
          desc="업무뿐 아니라 건강·관계·재정·성장 전 영역에 매트릭스를 확장하는 방법."
        />
        <ChapterPreview
          num={9}
          title="무너지는 순간 복구하기"
          desc="바쁜 주, 예상치 못한 위기, 번아웃 직전 — 시스템이 흔들릴 때 빠르게 복구하는 처방전."
        />
        <ChapterPreview
          num={10}
          title="90일 이후의 삶"
          desc="매트릭스가 완전한 습관이 된 이후의 세계. 다음 단계로 나아가는 성장 로드맵."
        />
        <ChapterPreview
          num="부록"
          title="매트릭스 실행 키트 ⭐"
          desc="즉시 쓸 수 있는 15분 리추얼 템플릿, 사분면 분류 워크시트, 주간 마스터 세션 양식, 90일 실행 플래너."
        />
      </div>

      {/* Trust */}
      <SectionTitle>왜 이 가이드를 신뢰할 수 있나요?</SectionTitle>
      <div className="space-y-1 mb-16 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <TrustItem icon="&#127942;" text="검증된 프레임워크 — 아이젠하워 대통령이 실제로 사용했던 의사결정 시스템을 현대에 맞게 재구성" />
        <TrustItem icon="&#127470;&#127479;" text="한국 직장인 현실 반영 — 카톡 즉답 문화, 회식, 야근 등 국내 업무 환경에 맞춘 적용법" />
        <TrustItem icon="&#128260;" text="계속 업데이트 — 독자 피드백과 실전 사례를 반영해 내용이 살아있음" />
        <TrustItem icon="&#9201;" text="하루 15분 전제 설계 — 바쁜 직장인도 아침 루틴 하나로 시작할 수 있는 현실적인 구조" />
      </div>

      {/* CTA */}
      <div className="text-center mb-16">
        <p className="text-lg font-semibold mb-4">
          결정을 관리하면, 삶이 바뀝니다.
        </p>
        <Link
          href="/premium/eisenhower-matrix/read"
          className="inline-block px-8 py-4 bg-slate-700 hover:bg-slate-800 text-white font-bold text-lg rounded-xl transition-colors shadow-lg"
        >
          &#128214; 본문 보기
        </Link>
        <p className="text-sm text-gray-400 mt-3">
          서문 + 10개 챕터 + 부록 실행 키트
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-8">
        <p>
          이 가이드는 아이젠하워 매트릭스를 한국 직장인의 현실에 맞게 재구성한 실행 중심의 자기계발 가이드입니다.
        </p>
        <p className="mt-2">
          개인의 성과를 보장하지 않습니다. 실행 결과는 개인의 노력과 환경에 따라 다를 수 있습니다.
        </p>
        <p className="mt-4">
          <Link href="/" className="text-slate-600 hover:underline">
            &#8592; 살아있는 정보책 전체 목록
          </Link>
        </p>
      </footer>
    </main>
  );
}
