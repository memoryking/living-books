import Link from "next/link";
import BackToHome from "@/components/BackToHome";

export const metadata = {
  title: "오디세이아, 3,000년 전 영웅이 알려주는 인생 항해술 | 살아있는 정보책",
  description:
    "호메로스의 서사시에서 배우는 인생 항해술 — 목표 달성 후 공허함부터 유혹·컴포트존·리더십까지. 오디세우스의 10년 귀환 여정을 현대인의 리더십·인내·귀환의 관점에서 재해석한 실용 인문학 가이드.",
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
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-700 text-white flex items-center justify-center font-bold text-sm">
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

export default function OdysseyLifeLanding() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <BackToHome />

      {/* Hero */}
      <header className="text-center mb-16">
        <span className="text-6xl mb-6 block">&#9875;</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          오디세이아, 3,000년 전 영웅이 알려주는 인생 항해술
          <br />
          <span className="text-indigo-700 dark:text-indigo-400">
            3,000년 전 영웅의 실수가 오늘 당신의 실수와 놀랍도록 같습니다
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          호메로스의 서사시에서 배우는 인생 항해술
        </p>
        <p className="text-sm text-gray-400">
          비법연구소
        </p>
      </header>

      {/* Empathy Quote */}
      <div className="text-center mb-16 p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <p className="text-xl italic text-gray-600 dark:text-gray-400 mb-4">
          &quot;오디세우스는 트로이를 이겼지만, 집에 돌아가는 데 10년이 걸렸습니다. 목표를 달성한 후 &apos;그 다음&apos;이 더 어려웠던 적 있으시죠?&quot;
        </p>
        <p className="text-base font-semibold text-indigo-700 dark:text-indigo-300">
          오디세우스의 여정은 지금 당신의 이야기입니다.
        </p>
      </div>

      {/* Pain Points */}
      <SectionTitle>지금 이런 상태 아닌가요?</SectionTitle>
      <div className="space-y-1 mb-12">
        <PainPoint>
          목표 달성 후 공허함 — 오랫동안 바라던 것을 이뤘는데 기쁨보다 공허함이 더 큰 적 있음
        </PainPoint>
        <PainPoint>
          성공 후 자만으로 관계 망침 — 잘나갈 때 거만해져서 소중한 관계나 기회를 잃어버림
        </PainPoint>
        <PainPoint>
          유혹에 반복적으로 넘어감 — 나쁜 줄 알면서도 같은 유혹에 계속 흔들리는 패턴이 반복됨
        </PainPoint>
        <PainPoint>
          편안한 현재에 갇혀 성장 멈춤 — 지금 상황이 나쁘지 않아서 더 나은 곳으로 나아가지 못함
        </PainPoint>
        <PainPoint>
          리더로서 불완전한 결정에 시달림 — 완벽한 정보 없이 결정해야 하는 상황에서 혼자 고립됨
        </PainPoint>
        <PainPoint>
          인생의 목적을 잊고 표류 중 — 바쁘게 살고 있지만 왜 이 일을 하는지 모르게 됨
        </PainPoint>
        <PainPoint>
          변한 환경에서 나를 증명 못 함 — 오랜 공백 후 돌아왔을 때 나를 다시 증명해야 하는 상황이 두렵거나 막막함
        </PainPoint>
      </div>

      {/* Failed Solutions */}
      <SectionTitle>
        &quot;이미 이것저것 해봤습니다&quot;
      </SectionTitle>
      <div className="space-y-1 mb-12">
        <FailedSolution
          title="동기부여 영상"
          reason="일시적 흥분 — 볼 때는 불타오르지만 다음 날이면 원래대로 돌아옴"
        />
        <FailedSolution
          title="목표만 세우기"
          reason="실행 없음 — 목표는 선명한데 어떻게 나아가야 할지 구체적인 길이 없음"
        />
        <FailedSolution
          title="자기계발서 다독"
          reason="적용 안 됨 — 책은 많이 읽었지만 내 삶에 실제로 변화가 생기지 않음"
        />
        <FailedSolution
          title="일단 바쁘게 살기"
          reason="방향 없는 질주 — 열심히 달리고 있지만 어디로 가는지 모름"
        />
        <FailedSolution
          title="과거 성공에 기대기"
          reason="세상은 변했음 — 예전에 통하던 방식이 지금은 먹히지 않음"
        />
      </div>

      {/* Discovery */}
      <div className="p-8 rounded-2xl bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800 mb-16">
        <h2 className="text-2xl font-bold mb-4 text-center">
          오디세우스는 3,000년 전에 이미 당신의 문제를 겪었습니다
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          호메로스의 오디세이아는 단순한 신화가 아닙니다. 오디세우스의 10년 귀환 여정은 목표 달성 후 찾아오는 공허함, 오만이 부르는 추락, 달콤한 유혹의 함정, 안락함의 덫, 불완전한 상황에서의 리더십 — 3,000년이 지나도 변하지 않는 인간의 본질적 도전을 담고 있습니다. 각 에피소드는 오늘 당신이 직면한 문제의 다른 이름입니다.
        </p>
        <p className="text-lg font-semibold text-center mb-6">
          신화의 영웅이 아니라,
          <br />
          오늘을 항해하는 당신을 위한 지혜
        </p>
        <div className="space-y-2">
          <Benefit>
            트로이 이후의 오디세우스로 배우는 &apos;성공 후 다음 단계&apos;를 준비하는 법
          </Benefit>
          <Benefit>
            키클롭스 에피소드로 배우는 오만을 다스리고 겸손을 유지하는 실전 프레임
          </Benefit>
          <Benefit>
            세이렌의 유혹에서 배우는 자신만의 유혹 차단 시스템 설계법
          </Benefit>
          <Benefit>
            칼립소 섬에서 배우는 컴포트존을 자각하고 탈출하는 의사결정 구조
          </Benefit>
          <Benefit>
            이타카 귀환으로 배우는 &apos;돌아가는 것&apos;의 용기와 자기 증명 전략
          </Benefit>
        </div>
        <div className="mt-6 p-4 rounded-lg bg-indigo-100 dark:bg-indigo-900 border border-indigo-300 dark:border-indigo-700">
          <p className="text-sm text-center font-medium">
            가장 중요한 사실:
            <br />
            <strong>
              &quot;오디세우스가 겪은 10가지 시련은 우리가 매일 겪는 10가지 도전과 정확히 일치합니다.&quot;
            </strong>
            <br />
            3,000년 된 지혜가 지금 당신의 항해를 도울 수 있습니다.
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
            <li>&#128560; 성공 후 공허함을 어떻게 다뤄야 할지 모름</li>
            <li>&#128560; 자만이 관계와 기회를 망치는 줄 알지만 반복함</li>
            <li>&#128560; 유혹의 패턴을 알면서도 계속 넘어감</li>
            <li>&#128560; 편안함에 안주하면서 성장 기회를 놓침</li>
            <li>&#128560; 인생의 방향을 잃고 바쁘게만 살고 있음</li>
            <li>&#128560; 변화된 환경에서 나를 다시 증명하는 게 두려움</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <h3 className="font-bold mb-3 text-green-600 dark:text-green-400">
            After
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>&#128522; 성공 이후의 공허함을 다음 여정의 신호로 전환함</li>
            <li>&#128522; 오만의 초기 신호를 포착하고 겸손을 선택함</li>
            <li>&#128522; 나만의 유혹 차단 시스템을 설계하고 작동시킴</li>
            <li>&#128522; 컴포트존을 자각하는 체크리스트로 성장을 지속함</li>
            <li>&#128522; 이타카(나의 목적지)를 다시 정의하고 방향을 잡음</li>
            <li>&#128522; 귀환 서사 전략으로 변화된 환경에서 나를 증명함</li>
          </ul>
        </div>
      </div>

      {/* Chapter Preview */}
      <SectionTitle>10개 챕터 + 부록 미리보기</SectionTitle>
      <div className="space-y-3 mb-16">
        <ChapterPreview
          num={1}
          title="트로이 떠남 — 승리 후 시련 ⭐"
          desc="목표를 달성한 직후 찾아오는 공허함과 다음 여정의 혼란. 성공 이후가 왜 더 어려운지, 오디세우스의 출발이 보여주는 &apos;다음 단계 준비 프레임&apos;으로 성공 이후를 설계하는 법."
        />
        <ChapterPreview
          num={2}
          title="키클롭스 — 오만 ⭐"
          desc="오디세우스의 자랑 한마디가 부른 10년 표류. 성공이 오만을 낳고 오만이 모든 것을 잃게 만드는 메커니즘 — 오만의 초기 신호를 포착하고 겸손을 습관화하는 실전 체크리스트."
        />
        <ChapterPreview
          num={3}
          title="세이렌 — 유혹 시스템 ⭐"
          desc="귀를 막아도 들리는 노랫소리, 스스로 돛대에 묶은 오디세우스. 나쁜 줄 알면서도 반복되는 유혹의 패턴을 분석하고, 의지력에 의존하지 않는 구조적 유혹 차단 시스템 설계법."
        />
        <ChapterPreview
          num={4}
          title="칼립소 — 컴포트존 ⭐"
          desc="7년간 아름다운 섬에 머문 오디세우스. 나쁘지 않은 현재가 성장을 막는 진짜 덫 — 컴포트존을 자각하는 5가지 신호와 안락함을 포기하고 불확실한 항해로 나아가는 결단 프레임."
        />
        <ChapterPreview
          num={5}
          title="스킬라·카립디스 — 리더십"
          desc="모든 선원을 구할 수 없는 상황에서의 선택. 완벽하지 않은 정보로 결정해야 하는 리더의 조건 — 두 악 사이의 선택에서 배우는 불완전한 결정을 감당하는 리더십 철학."
        />
        <ChapterPreview
          num={6}
          title="페넬로페 — 전략적 인내"
          desc="20년을 기다린 페넬로페의 베짜기 전술. 기다림을 수동적 포기가 아닌 능동적 전략으로 전환하는 법 — 끝이 보이지 않는 상황에서 희망을 유지하며 전략적으로 버티는 인내의 기술."
        />
        <ChapterPreview
          num={7}
          title="텔레마코스 — 성장"
          desc="아버지 없이 자란 아들이 어른이 되는 여정. 혼자 성장해야 하는 상황에서 멘토를 찾고 자신의 정체성을 확립하는 법 — 불완전한 환경에서도 성장을 멈추지 않는 텔레마코스 전략."
        />
        <ChapterPreview
          num={8}
          title="로토스 — 목적 상실 ⭐"
          desc="로토스 꽃을 먹고 고향을 잊은 선원들. 바쁘게 살수록 목적을 잊어버리는 현대인의 함정 — 일상의 중독과 망각으로부터 자신의 이타카를 기억하고 방향을 되찾는 의미 복원 루틴."
        />
        <ChapterPreview
          num={9}
          title="활 시험 — 증명 ⭐"
          desc="20년 만에 돌아와 아무도 당기지 못한 활을 당긴 오디세우스. 오랜 공백 후 자신을 다시 증명해야 하는 순간 — 변한 환경에서 나의 가치를 재정립하고 증명하는 귀환 서사 전략."
        />
        <ChapterPreview
          num={10}
          title="이타카 — 내면 귀환 ⭐"
          desc="집에 돌아왔지만 진짜 귀환은 내면에서 완성된다. 외적 목적지 도달 이후의 내면 정착 — 오디세이아가 전하는 최종 메시지, &apos;진짜 고향은 내 안에 있다&apos;는 삶의 항해술 완성."
        />
        <ChapterPreview
          num="부록"
          title="인생 항해 실행 키트 ⭐"
          desc="즉시 쓸 수 있는 오만 경보 체크리스트, 유혹 차단 시스템 설계 템플릿, 컴포트존 탈출 결단 프레임, 이타카(나의 목적지) 재정의 워크시트, 귀환 서사 전략 플래너."
        />
      </div>

      {/* Trust */}
      <SectionTitle>왜 이 가이드를 신뢰할 수 있나요?</SectionTitle>
      <div className="space-y-1 mb-16 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <TrustItem icon="📚" text="호메로스 원전 분석 — 오디세이아 원문을 바탕으로 각 에피소드의 본질적 의미를 탐구하고 현대인의 삶에 적용 가능한 실천 지혜로 재구성" />
        <TrustItem icon="🧠" text="현대 심리학·리더십 연구 적용 — 인지 편향, 자기결정이론, 회복탄력성 등 현대 연구와 오디세이아의 서사를 교차 분석해 실용적 인사이트 도출" />
        <TrustItem icon="🇰🇷" text="한국 직장인·사업가 맥락 — 한국의 직장·창업·인간관계 현실에 맞게 오디세우스의 도전을 재해석해 실제 적용 가능한 전략으로 전환" />
        <TrustItem icon="🔄" text="계속 업데이트 — 독자 피드백과 새로운 연구 사례를 반영해 내용이 살아있음" />
      </div>

      {/* CTA */}
      <div className="text-center mb-16">
        <p className="text-lg font-semibold mb-4">
          오디세우스는 10년 만에 이타카로 돌아왔습니다. 당신의 항해는 지금 시작됩니다.
        </p>
        <Link
          href="/premium/odyssey-life/read"
          className="inline-block px-8 py-4 bg-indigo-700 hover:bg-indigo-800 text-white font-bold text-lg rounded-xl transition-colors shadow-lg"
        >
          &#9875; 본문 보기
        </Link>
        <p className="text-sm text-gray-400 mt-3">
          서문 + 10개 챕터 + 부록 인생 항해 실행 키트
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-8">
        <p>
          호메로스의 오디세이아를 현대인의 리더십·인내·유혹·귀환의 관점에서 재해석한 실용 인문학 가이드입니다.
        </p>
        <p className="mt-2">
          개인의 성과를 보장하지 않습니다. 실행 결과는 개인의 노력과 환경에 따라 다를 수 있습니다.
        </p>
        <p className="mt-4">
          <Link href="/" className="text-indigo-700 dark:text-indigo-400 hover:underline">
            &#8592; 살아있는 정보책 전체 목록
          </Link>
        </p>
      </footer>
    </main>
  );
}
