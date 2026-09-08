import Link from "next/link";
import BackToHome from "@/components/BackToHome";

export const metadata = {
  title: "밀당 없이 사랑받는 연애의 기술 | 살아있는 정보책",
  description:
    "애착·소통·관계 심리학 수업. 대화 스크립트 15개, 질문 30개 포함.",
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
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-600 text-white flex items-center justify-center font-bold text-sm">
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

export default function LoveSkillsLanding() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <BackToHome />

      {/* Hero */}
      <header className="text-center mb-16">
        <span className="text-6xl mb-6 block">&#128149;</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          밀당 없이 사랑받는 연애의 기술
          <br />
          <span className="text-pink-600 dark:text-pink-400">
            애착·소통·관계 심리학 수업
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          대화 스크립트 15개, 마음이 깊어지는 질문 30개 포함
        </p>
        <p className="text-sm text-gray-400">
          김약사 · 유원소망약국
        </p>
      </header>

      {/* Empathy Quote */}
      <div className="text-center mb-16 p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <p className="text-xl italic text-gray-600 dark:text-gray-400 mb-4">
          &quot;새벽 두 시, 메시지를 썼다 지웠다 해 본 적 있나요.&quot;
        </p>
        <p className="text-base font-semibold text-pink-600 dark:text-pink-400">
          그 패턴에는 이름과 이유가 있고, 바꾸는 방법도 있습니다.
        </p>
      </div>

      {/* Pain Points */}
      <SectionTitle>지금 이런 상태 아닌가요?</SectionTitle>
      <div className="space-y-1 mb-12">
        <PainPoint>
          답장이 한 시간만 늦어도 마음이 바닥까지 내려감
        </PainPoint>
        <PainPoint>
          좋아할수록 불안해지고, 불안해질수록 관계를 망침
        </PainPoint>
        <PainPoint>
          서운함을 말하는 대신 시험하다가 싸움이 됨
        </PainPoint>
        <PainPoint>
          몇 번의 연애를 비슷한 모양으로 끝냄
        </PainPoint>
        <PainPoint>
          &quot;역시 나는 연애 체질이 아니야&quot; 결론
        </PainPoint>
        <PainPoint>
          밀당 조언은 넘치는데 관계는 나아지지 않음
        </PainPoint>
        <PainPoint>
          사과해야 할 타이밍에 방어부터 함
        </PainPoint>
      </div>

      {/* Failed Solutions */}
      <SectionTitle>
        &quot;연애 방법, 이미 찾아봤습니다&quot;
      </SectionTitle>
      <div className="space-y-1 mb-12">
        <FailedSolution
          title="밀당 테크닉"
          reason="&quot;3일 뒤 답장해라&quot; — 불안만 제조"
        />
        <FailedSolution
          title="연애 상담 카페"
          reason="위로만, 패턴 분석 없음"
        />
        <FailedSolution
          title="MBTI 궁합"
          reason="재미있지만 관계 기술은 아님"
        />
        <FailedSolution
          title="&quot;다음 사람은 다를 거야&quot;"
          reason="상대가 아니라 패턴이 문제"
        />
        <FailedSolution
          title="감정 참기"
          reason="쌓아 두면 폭발"
        />
      </div>

      {/* Discovery */}
      <div className="p-8 rounded-2xl bg-pink-50 dark:bg-pink-950 border border-pink-200 dark:border-pink-800 mb-16">
        <h2 className="text-2xl font-bold mb-4 text-center">
          반복되는 연애 실패는 성격 문제가 아닙니다
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          심리학이 밝혀낸 사실: 연애 패턴은 어린 시절 형성된 애착 유형에서 시작됩니다. 상대가 바뀌어도 패턴이 남아 있으면 결과는 같습니다.
        </p>
        <p className="text-lg font-semibold text-center mb-6">
          패턴을 이해하면, 패턴을 바꿀 수 있습니다.
          <br />
          이 책은 그 방법을 구체적으로 알려줍니다.
        </p>
        <div className="space-y-2">
          <Benefit>
            내 애착 유형(불안형/회피형) 진단 → 패턴 이해
          </Benefit>
          <Benefit>
            나-전달법으로 서운함을 안전하게 말하기
          </Benefit>
          <Benefit>
            갈등 시 네 가지 독 피하기 + 사과의 기술
          </Benefit>
          <Benefit>
            경계선 세우기 — 둘이면서 각자로 사는 법
          </Benefit>
          <Benefit>
            상황별 대화 스크립트 15개 — 바로 쓸 수 있는 도구
          </Benefit>
        </div>
        <div className="mt-6 p-4 rounded-lg bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800">
          <p className="text-sm text-center font-medium">
            가장 중요한 사실:
            <br />
            <strong>
              &quot;관계의 질은 감정의 크기가 아니라 기술의 수준으로 결정됩니다.&quot;
            </strong>
            <br />
            사랑은 감정이지만, 관계는 기술입니다.
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
            <li>&#128560; 답장 지연에 마음이 무너지는 불안</li>
            <li>&#128560; 서운한데 말 못하고 시험하다 폭발</li>
            <li>&#128560; 비슷한 패턴으로 반복되는 이별</li>
            <li>&#128560; 사과 대신 방어로 갈등이 길어짐</li>
            <li>&#128560; &quot;나는 연애 체질이 아니야&quot; 체념</li>
            <li>&#128560; 밀당 조언 따라 했는데 더 불안해짐</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <h3 className="font-bold mb-3 text-green-600 dark:text-green-400">
            After
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>&#128522; 내 애착 유형과 불안의 출처를 앎</li>
            <li>&#128522; 나-전달법으로 서운함을 안전하게 말함</li>
            <li>&#128522; 패턴을 인식해 반복을 멈춤</li>
            <li>&#128522; 갈등 후 사과와 복구의 기술 보유</li>
            <li>&#128522; 경계선으로 둘이면서 각자로 삶</li>
            <li>&#128522; 스크립트 15개로 막막한 순간 대응</li>
          </ul>
        </div>
      </div>

      {/* Chapter Preview */}
      <SectionTitle>10개 챕터 + 부록 미리보기</SectionTitle>
      <div className="space-y-3 mb-16">
        <ChapterPreview
          num={1}
          title="반복되는 패턴: 왜 늘 비슷한 지점에서 무너질까"
          desc="연애가 반복적으로 같은 모양으로 끝나는 이유. 상대의 문제가 아니라 패턴의 문제임을 확인한다."
        />
        <ChapterPreview
          num={2}
          title="애착 유형: 내 연애의 설계도 읽기 ⭐"
          desc="불안형·회피형·안정형 애착의 차이. 내 유형을 알면 왜 그렇게 반응하는지 이해된다."
        />
        <ChapterPreview
          num={3}
          title="자존감이라는 그릇: 사랑받을 준비에 대하여"
          desc="자존감이 낮을 때 관계에서 나타나는 패턴. 사랑받기 위해 먼저 갖춰야 할 내면의 조건."
        />
        <ChapterPreview
          num={4}
          title="시작의 심리학: 호감은 기술이 아니라 조건에서 자란다"
          desc="첫 인상, 근접성, 유사성, 호혜성. 호감이 형성되는 실제 심리학적 조건들."
        />
        <ChapterPreview
          num={5}
          title="밀당의 진실: 불안을 파는 게임을 그만두면 생기는 일 ⭐"
          desc="밀당이 단기적으로 통하는 이유와 장기적으로 관계를 망치는 이유. 진짜 매력의 원천."
        />
        <ChapterPreview
          num={6}
          title="대화의 기술: 마음은 저절로 통하지 않는다 ⭐"
          desc="나-전달법, 적극적 경청, 감정 언어화. 말하지 않아도 알아줄 거라는 기대가 갈등을 만든다."
        />
        <ChapterPreview
          num={7}
          title="싸움의 기술: 갈등은 관계의 끝이 아니라 문법이다 ⭐"
          desc="가트맨의 네 가지 독(비판·경멸·방어·담쌓기)을 피하는 법. 갈등 후 복구와 사과의 기술."
        />
        <ChapterPreview
          num={8}
          title="경계선의 기술: 둘이면서 각자로 사는 법"
          desc="건강한 경계선의 정의와 설정 방법. 융합도 단절도 아닌 연결된 독립의 상태."
        />
        <ChapterPreview
          num={9}
          title="흔들리는 순간들: 관계의 응급실 ⭐"
          desc="질투, 외도 의심, 권태기, 장거리, 이별 직전... 관계가 흔들리는 순간마다 쓸 수 있는 대응법."
        />
        <ChapterPreview
          num={10}
          title="오래가는 사랑: 유지가 아니라 가꾸기"
          desc="장기 연애가 식어가는 이유와 관계를 가꾸는 구체적인 습관. 유지는 수동적이고 가꾸기는 능동적이다."
        />
        <ChapterPreview
          num="부록"
          title="바로 꺼내 쓰는 관계의 도구함"
          desc="대화 스크립트, 감정 단어 사전, 월간 점검표 등 즉시 활용 가능한 도구 모음."
        />
      </div>

      {/* Bonuses */}
      <SectionTitle>&#127873; 보너스 5개</SectionTitle>
      <div className="space-y-3 mb-16">
        <BonusItem
          title="상황별 대화 스크립트 15개"
          desc="서운함 표현, 경계선 설정, 사과, 감사 표현 등 막막한 순간 바로 꺼내 쓸 수 있는 문장들."
        />
        <BonusItem
          title="월간 관계 점검표"
          desc="한 달에 한 번, 둘이서 함께 체크하는 관계 건강 점검 시트. 쌓이기 전에 확인하는 습관."
        />
        <BonusItem
          title="애착 성향 간이 체크"
          desc="나의 애착 유형을 빠르게 파악하는 자가 진단 도구. 불안형/회피형/안정형 성향 확인."
        />
        <BonusItem
          title="마음이 깊어지는 질문 30개"
          desc="커플이 함께 답하면 친밀감이 깊어지는 질문 목록. 아이거-아론 연구 기반의 연결 질문들."
        />
        <BonusItem
          title="감정 단어 사전"
          desc="&quot;그냥 화났어&quot; 대신 쓸 수 있는 감정 언어 100개. 감정을 정확히 표현할수록 소통이 달라진다."
        />
      </div>

      {/* Trust */}
      <SectionTitle>왜 이 가이드를 신뢰할 수 있나요?</SectionTitle>
      <div className="space-y-1 mb-16 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <TrustItem icon="&#128214;" text="검증된 심리학 기반 — 가트맨 연구소의 갈등 연구, 존 볼비의 애착 이론 등 수십 년 축적된 관계 과학" />
        <TrustItem icon="&#128101;" text="솔로부터 장기 연애까지 전 구간 커버 — 시작, 발전, 갈등, 유지, 위기 모든 단계에 대응" />
        <TrustItem icon="&#128260;" text="계속 업데이트 — 새로운 심리학 연구와 독자 피드백을 반영해 내용이 살아있음" />
        <TrustItem icon="&#128172;" text="바로 쓸 수 있는 도구 중심 — 이론이 아니라 실전 스크립트와 체크리스트로 즉시 적용 가능" />
      </div>

      {/* CTA */}
      <div className="text-center mb-16">
        <p className="text-lg font-semibold mb-4">
          패턴을 이해하면, 관계가 달라집니다.
        </p>
        <Link
          href="/premium/love-skills/read"
          className="inline-block px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white font-bold text-lg rounded-xl transition-colors shadow-lg"
        >
          &#128214; 본문 보기
        </Link>
        <p className="text-sm text-gray-400 mt-3">
          서문 + 10개 챕터 + 부록 + 보너스 5개
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-8">
        <p>
          이 가이드는 검증된 관계 심리학 연구를 바탕으로 작성되었습니다.
        </p>
        <p className="mt-2">
          심리 상담이나 치료를 대체하지 않습니다. 심각한 관계 문제는 전문 상담사와 함께하세요.
        </p>
        <p className="mt-4">
          <Link href="/" className="text-pink-600 hover:underline">
            &#8592; 살아있는 정보책 전체 목록
          </Link>
        </p>
      </footer>
    </main>
  );
}
