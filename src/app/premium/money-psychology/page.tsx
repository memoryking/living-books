import Link from "next/link";
import BackToHome from "@/components/BackToHome";

export const metadata = {
  title: "사업 성패를 좌우하는 돈의 심리학 | 살아있는 정보책",
  description:
    "인지 편향부터 CLEAR·IMPACT 모델까지 — 감정에 흔들리지 않는 재정 판단력. CLEAR 5단계, 인지 편향 자가진단, 30분 아침 재무 루틴, IMPACT 6단계로 조직 판단 문화를 바꾸는 실전 가이드.",
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

export default function MoneyPsychologyLanding() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <BackToHome />

      {/* Hero */}
      <header className="text-center mb-16">
        <span className="text-6xl mb-6 block">&#128176;</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          사업 성패를 좌우하는 돈의 심리학
          <br />
          <span className="text-amber-600 dark:text-amber-400">
            인지 편향부터 CLEAR·IMPACT 모델까지 — 감정에 흔들리지 않는 재정 판단력
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          같은 실력인데 왜 어떤 창업가만 돈 걱정 없이 성장할까요?
        </p>
        <p className="text-sm text-gray-400">
          김약사 · 유원소망약국
        </p>
      </header>

      {/* Empathy Quote */}
      <div className="text-center mb-16 p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <p className="text-xl italic text-gray-600 dark:text-gray-400 mb-4">
          &quot;같은 데이터를 보고도 누구는 기회를 잡고, 누구는 손실을 봅니다.&quot;
        </p>
        <p className="text-base font-semibold text-amber-700 dark:text-amber-300">
          차이는 &apos;돈에 대한 심리적 이해&apos;에서 시작됩니다.
        </p>
      </div>

      {/* Pain Points */}
      <SectionTitle>지금 이런 상태 아닌가요?</SectionTitle>
      <div className="space-y-1 mb-12">
        <PainPoint>
          손실이 두려워서 분명한 기회도 놓침
        </PainPoint>
        <PainPoint>
          자신감이 넘쳐 데이터 없이 결정하고 후회함
        </PainPoint>
        <PainPoint>
          감정적으로 판단했는데 스스로는 이성적이라 착각함
        </PainPoint>
        <PainPoint>
          확증 편향으로 보고 싶은 수치만 보고 불리한 신호는 무시함
        </PainPoint>
        <PainPoint>
          문화적 습관이나 가족의 돈 관념에 무의식적으로 지배당함
        </PainPoint>
        <PainPoint>
          주변 분위기·업계 트렌드에 휩쓸려 충동적으로 지출함
        </PainPoint>
        <PainPoint>
          단기 이익에 집착하다 장기 성장 기회를 놓침
        </PainPoint>
      </div>

      {/* Failed Solutions */}
      <SectionTitle>
        &quot;이미 이것저것 해봤습니다&quot;
      </SectionTitle>
      <div className="space-y-1 mb-12">
        <FailedSolution
          title="감으로 판단"
          reason="편향 그대로 — 인지 편향이 해소되지 않아 같은 실수가 반복됨"
        />
        <FailedSolution
          title="숫자만 분석"
          reason="감정 무시 — 심리적 저항이 남아 올바른 판단도 실행이 안 됨"
        />
        <FailedSolution
          title="모든 위험 회피"
          reason="성장 멈춤 — 지나친 안전 추구가 오히려 기회비용을 키움"
        />
        <FailedSolution
          title="다른 사람 따라하기"
          reason="맥락 무시 — 타인의 성공 공식이 내 사업 상황과 맞지 않음"
        />
        <FailedSolution
          title="의지력만 믿기"
          reason="시스템 부재 — 루틴과 구조가 없어서 결심이 오래 가지 않음"
        />
      </div>

      {/* Discovery */}
      <div className="p-8 rounded-2xl bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 mb-16">
        <h2 className="text-2xl font-bold mb-4 text-center">
          재정 판단은 의지력이 아니라 시스템입니다
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          뛰어난 창업가와 평범한 창업가의 차이는 실력이나 운이 아닙니다. 손실 공포·과신·확증 편향 같은 인지 편향을 얼마나 인식하고 통제하느냐에 달려 있습니다. CLEAR 모델로 감정과 이성을 균형 있게 다루고, 30분 아침 재무 루틴으로 매일 판단력을 단련하며, IMPACT 모델로 조직 전체의 의사결정 문화를 바꿀 때 비로소 돈 걱정 없이 성장할 수 있습니다.
        </p>
        <p className="text-lg font-semibold text-center mb-6">
          편향을 없애는 것이 아니라,
          <br />
          편향을 인식하고 시스템으로 다루는 것
        </p>
        <div className="space-y-2">
          <Benefit>
            CLEAR 5단계로 감정과 이성의 균형을 맞추는 재정 판단 프레임워크
          </Benefit>
          <Benefit>
            인지 편향 자가진단 도구 + 실전 극복 전략으로 반복 실수 차단
          </Benefit>
          <Benefit>
            30분 아침 재무 루틴 + 대시보드 5대 지표로 매일 판단력 단련
          </Benefit>
          <Benefit>
            IMPACT 6단계로 나 혼자가 아닌 조직 전체의 판단력을 높이는 법
          </Benefit>
          <Benefit>
            감정 지능 훈련으로 위기 상황 생존율 65% 향상 (Frontiers of Psychology 연구 기반)
          </Benefit>
        </div>
        <div className="mt-6 p-4 rounded-lg bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800">
          <p className="text-sm text-center font-medium">
            가장 중요한 사실:
            <br />
            <strong>
              &quot;돈 문제의 80%는 재정이 아니라 심리에서 비롯됩니다.&quot;
            </strong>
            <br />
            이제 심리를 이해하고 판단을 시스템으로 만들 때입니다.
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
            <li>&#128560; 손실 공포에 기회를 놓치고 후회함</li>
            <li>&#128560; 감정 판단인데 이성적이라 착각함</li>
            <li>&#128560; 보고 싶은 데이터만 보고 결정함</li>
            <li>&#128560; 의지력에만 의존해 매번 작심삼일</li>
            <li>&#128560; 위기 때 패닉에 빠져 잘못된 선택을 함</li>
            <li>&#128560; 팀원도 같은 편향으로 결정을 망침</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <h3 className="font-bold mb-3 text-green-600 dark:text-green-400">
            After
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>&#128522; CLEAR 모델로 침착하게 기회를 판단함</li>
            <li>&#128522; 인지 편향을 실시간으로 인식하고 교정함</li>
            <li>&#128522; 대시보드 5대 지표로 전체 맥락을 봄</li>
            <li>&#128522; 30분 아침 루틴으로 판단력이 습관이 됨</li>
            <li>&#128522; 감정 지능 훈련으로 위기에서도 냉정함</li>
            <li>&#128522; IMPACT 모델로 조직 전체의 판단 문화를 바꿈</li>
          </ul>
        </div>
      </div>

      {/* Chapter Preview */}
      <SectionTitle>10개 챕터 + 부록 미리보기</SectionTitle>
      <div className="space-y-3 mb-16">
        <ChapterPreview
          num={1}
          title="금전적 결정의 숨은 힘 ⭐"
          desc="재정 판단의 80%가 심리에서 비롯되는 이유. 손실 회피·현재 편향·앵커링 효과 등 창업가를 가장 자주 망치는 인지 편향 7가지를 구체적 사례와 함께 살펴봅니다."
        />
        <ChapterPreview
          num={2}
          title="성장 마인드셋"
          desc="고정 마인드셋이 재정 판단을 굳히는 원리. 실패를 데이터로 전환하는 사고 훈련과, 돈에 대한 믿음 체계(머니 스크립트)를 점검하고 리셋하는 방법."
        />
        <ChapterPreview
          num={3}
          title="매일의 작은 습관 ⭐"
          desc="30분 아침 재무 루틴 설계와 대시보드 5대 지표(현금 흐름·수익률·비용 비율·성장률·여유 자금) 세팅법. 작은 행동이 복리로 쌓여 판단력이 되는 과정."
        />
        <ChapterPreview
          num={4}
          title="CLEAR 모델 ⭐"
          desc="Clarify(명확화)·Label(감정 레이블링)·Evaluate(평가)·Act(실행)·Review(검토) 5단계로 감정과 이성을 균형 있게 통합하는 재정 판단 프레임워크 실전 적용."
        />
        <ChapterPreview
          num={5}
          title="인지 편향 극복 ⭐"
          desc="자가진단 체크리스트로 나만의 주요 편향을 찾고, 편향별 극복 전략을 적용하는 법. 과신·확증 편향·매몰 비용 오류를 실시간으로 교정하는 의사결정 체크 루틴."
        />
        <ChapterPreview
          num={6}
          title="리스크 관리"
          desc="손실 회피 편향이 만드는 잘못된 리스크 인식과 교정법. 기대값 계산·시나리오 플래닝·비상금 설계로 두려움 없이 합리적인 위험을 감수하는 판단 구조."
        />
        <ChapterPreview
          num={7}
          title="부의 마인드셋"
          desc="문화적 돈 습관과 가족의 머니 스크립트가 사업 판단에 미치는 영향. 무의식적 지배에서 벗어나 자신만의 재정 원칙을 세우는 방법."
        />
        <ChapterPreview
          num={8}
          title="IMPACT 모델 ⭐"
          desc="Identify·Map·Prioritize·Act·Coach·Track 6단계로 나 혼자가 아닌 조직 전체의 판단력을 높이는 법. 팀 의사결정 문화를 바꾸는 실전 워크숍 설계."
        />
        <ChapterPreview
          num={9}
          title="조직 판단 문화"
          desc="편향이 집단 의사결정을 망치는 메커니즘(집단 사고·권위 편향)과 방어 전략. 심리적 안전감을 토대로 다양한 의견이 재정 판단에 반영되는 팀 문화 만들기."
        />
        <ChapterPreview
          num={10}
          title="미래 대비"
          desc="장기적 재정 탄력성을 키우는 감정 지능 훈련 로드맵. 경기 변동·시장 충격 상황에서도 패닉 없이 판단하는 위기 생존 루틴과 분기별 점검 체계."
        />
        <ChapterPreview
          num="부록"
          title="돈의 심리학 실행 키트 ⭐"
          desc="즉시 쓸 수 있는 인지 편향 자가진단 체크리스트, CLEAR 판단 워크시트, 30분 아침 재무 루틴 템플릿, 대시보드 5대 지표 설정 가이드, IMPACT 팀 워크숍 진행표."
        />
      </div>

      {/* Trust */}
      <SectionTitle>왜 이 가이드를 신뢰할 수 있나요?</SectionTitle>
      <div className="space-y-1 mb-16 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <TrustItem icon="&#128202;" text="학술 연구 기반 — Frontiers of Psychology·SpringerLink 등 피어리뷰 논문의 행동경제학·인지심리학 연구 결과를 창업가가 바로 쓸 수 있는 실전 도구로 재구성" />
        <TrustItem icon="&#127470;&#127479;" text="한국 사업자 현실 반영 — 한국 특유의 눈치 문화·체면 소비·가족 사업 관행 등 국내 창업 환경에서 나타나는 편향 패턴과 극복 사례를 구체적으로 다룸" />
        <TrustItem icon="&#128260;" text="계속 업데이트 — 독자 피드백과 새로운 연구 사례를 반영해 내용이 살아있음" />
      </div>

      {/* CTA */}
      <div className="text-center mb-16">
        <p className="text-lg font-semibold mb-4">
          실력은 이미 있습니다. 이제 돈을 다루는 심리를 시스템으로 만들 차례입니다.
        </p>
        <Link
          href="/premium/money-psychology/read"
          className="inline-block px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold text-lg rounded-xl transition-colors shadow-lg"
        >
          &#128176; 본문 보기
        </Link>
        <p className="text-sm text-gray-400 mt-3">
          서문 + 10개 챕터 + 부록 돈의 심리학 실행 키트
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-8">
        <p>
          이 가이드는 행동경제학·인지심리학 연구와 글로벌 창업 사례를 한국 사업자의 현실에 맞게 재구성한 실행 중심의 재정 심리 가이드입니다.
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
