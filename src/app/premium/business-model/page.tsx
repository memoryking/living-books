import Link from "next/link";
import BackToHome from "@/components/BackToHome";

export const metadata = {
  title: "수익성을 극대화하는 비즈니스 모델 설계법 | 살아있는 정보책",
  description:
    "7가지 수익 모델 비교부터 Value Proposition Canvas·가격 전략·핵심 지표까지 — 좋은 모델로 버는 실전 비즈니스 설계 시스템. CAC·LTV·MRR 대시보드, 90일 비즈니스 모델 설계 로드맵.",
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
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-sm">
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

export default function BusinessModelLanding() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <BackToHome />

      {/* Hero */}
      <header className="text-center mb-16">
        <span className="text-6xl mb-6 block">&#128202;</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          수익성을 극대화하는 비즈니스 모델 설계법
          <br />
          <span className="text-emerald-700 dark:text-emerald-400">
            좋은 아이디어로는 못 법니다. 좋은 모델로 법니다.
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          수익 구조를 설계하는 것이 진짜 사업입니다.
        </p>
        <p className="text-sm text-gray-400">
          김약사 · 유원소망약국
        </p>
      </header>

      {/* Empathy Quote */}
      <div className="text-center mb-16 p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <p className="text-xl italic text-gray-600 dark:text-gray-400 mb-4">
          &quot;Netflix가 DVD에서 구독으로 피벗하지 않았다면 지금의 Netflix는 없습니다.&quot;
        </p>
        <p className="text-base font-semibold text-emerald-700 dark:text-emerald-300">
          비즈니스 모델이 사업의 성패를 결정합니다.
        </p>
      </div>

      {/* Pain Points */}
      <SectionTitle>지금 이런 상태 아닌가요?</SectionTitle>
      <div className="space-y-1 mb-12">
        <PainPoint>
          좋은 제품인데 수익이 안 남음 — 제품 품질과 수익성은 별개의 문제입니다
        </PainPoint>
        <PainPoint>
          가격을 감으로 정함 — 근거 없는 가격 설정이 이익을 갉아먹습니다
        </PainPoint>
        <PainPoint>
          어떤 수익 모델이 맞는지 모름 — 구독·프리미엄·SaaS 중 무엇을 선택해야 할지 막막합니다
        </PainPoint>
        <PainPoint>
          매출은 있지만 이익이 없음 — 바쁘게 일하는데 통장 잔고는 그대로입니다
        </PainPoint>
        <PainPoint>
          경쟁자와 가격 경쟁만 함 — 차별화 없이 가격만 낮추는 소모전을 반복합니다
        </PainPoint>
        <PainPoint>
          확장하면 비용만 늘어남 — 스케일업할수록 적자가 커지는 구조에 갇혀 있습니다
        </PainPoint>
        <PainPoint>
          투자 유치를 위한 모델 정리가 안 됨 — 사업 구조를 논리적으로 설명하기가 어렵습니다
        </PainPoint>
      </div>

      {/* Failed Solutions */}
      <SectionTitle>
        &quot;이미 이것저것 해봤습니다&quot;
      </SectionTitle>
      <div className="space-y-1 mb-12">
        <FailedSolution
          title="&quot;좋은 제품 만들면 팔리겠지&quot;"
          reason="모델 없이 시작"
        />
        <FailedSolution
          title="&quot;경쟁사 가격 따라하기&quot;"
          reason="수익성 무시"
        />
        <FailedSolution
          title="&quot;모든 것을 한번에&quot;"
          reason="검증 없이 확장"
        />
        <FailedSolution
          title="&quot;비용만 줄이기&quot;"
          reason="가치 창출 없이 절약"
        />
        <FailedSolution
          title="&quot;감으로 운영하기&quot;"
          reason="데이터 없는 의사결정"
        />
      </div>

      {/* Discovery */}
      <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 mb-16">
        <h2 className="text-2xl font-bold mb-4 text-center">
          비즈니스 모델은 운이 아니라 설계입니다
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          성공하는 사업가와 실패하는 사업가의 차이는 제품의 질이 아닙니다. 어떤 수익 모델을 선택하고, 고객이 지갑을 열게 만드는 가치 제안을 설계하며, 데이터로 의사결정을 내릴 수 있느냐에 달려 있습니다. 7가지 수익 모델 비교부터 Value Proposition Canvas, 가격 전략, 핵심 지표 대시보드까지 — 비즈니스 모델 설계 시스템을 갖추면 수익성을 극적으로 끌어올릴 수 있습니다.
        </p>
        <p className="text-lg font-semibold text-center mb-6">
          감이 아니라 설계,
          <br />
          열정이 아니라 모델로 버는 것
        </p>
        <div className="space-y-2">
          <Benefit>
            7가지 수익 모델(구독·프리미엄·SaaS·마켓플레이스·라이선스·광고·하이브리드) 비교로 최적 모델 선택
          </Benefit>
          <Benefit>
            Value Proposition Canvas로 고객이 지갑 여는 이유를 구조적으로 설계
          </Benefit>
          <Benefit>
            가격 전략 5가지 방법으로 수익성을 극대화하는 가격 구조 확립
          </Benefit>
          <Benefit>
            CAC·LTV·MRR 핵심 지표 대시보드로 데이터 기반 의사결정 체계 구축
          </Benefit>
          <Benefit>
            90일 비즈니스 모델 설계 로드맵으로 이론을 실행으로 전환
          </Benefit>
        </div>
        <div className="mt-6 p-4 rounded-lg bg-emerald-100 dark:bg-emerald-900 border border-emerald-300 dark:border-emerald-700">
          <p className="text-sm text-center font-medium">
            가장 중요한 사실:
            <br />
            <strong>
              &quot;Uber·Spotify·Netflix·배달의민족 — 이 기업들의 공통점은 &apos;좋은 제품&apos;이 아니라 &apos;좋은 모델&apos;입니다.&quot;
            </strong>
            <br />
            비즈니스 모델 설계 시스템을 갖추면 수익 구조를 바꿀 수 있습니다.
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
            <li>&#128560; 좋은 제품인데 수익이 안 나는 이유를 모름</li>
            <li>&#128560; 가격을 감으로 정해 이익 구조가 불명확함</li>
            <li>&#128560; 어떤 수익 모델이 맞는지 방향을 못 잡음</li>
            <li>&#128560; 매출은 있는데 이익은 없는 상황이 반복됨</li>
            <li>&#128560; 확장할수록 비용만 늘고 이익은 줄어듦</li>
            <li>&#128560; 투자자에게 사업 모델을 논리적으로 설명 못 함</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <h3 className="font-bold mb-3 text-green-600 dark:text-green-400">
            After
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>&#128522; 7가지 수익 모델 중 내 사업에 맞는 모델을 선택함</li>
            <li>&#128522; Value Proposition Canvas로 가격 근거를 설계함</li>
            <li>&#128522; 가격 전략 5가지로 수익성을 극대화하는 구조 확립</li>
            <li>&#128522; CAC·LTV·MRR 지표로 데이터 기반 의사결정을 함</li>
            <li>&#128522; 스케일업해도 이익이 늘어나는 모델을 구축함</li>
            <li>&#128522; 90일 로드맵으로 비즈니스 모델 설계를 완성함</li>
          </ul>
        </div>
      </div>

      {/* Chapter Preview */}
      <SectionTitle>10개 챕터 + 부록 미리보기</SectionTitle>
      <div className="space-y-3 mb-16">
        <ChapterPreview
          num={1}
          title="비즈니스 모델이란 ⭐"
          desc="비즈니스 모델의 정의와 구성 요소. Business Model Canvas 9가지 블록 해설과 수익 모델·가치 제안·고객 세그먼트의 상호 관계를 실제 기업 사례로 풀어내는 기초 프레임워크."
        />
        <ChapterPreview
          num={2}
          title="7가지 수익 모델 비교 ⭐"
          desc="구독·프리미엄·SaaS·마켓플레이스·라이선스·광고·하이브리드 — 7가지 수익 모델의 특징과 적합한 사업 유형 비교. 각 모델의 장단점과 실제 기업 사례로 최적 모델 선택 기준을 제시."
        />
        <ChapterPreview
          num={3}
          title="가치 제안 캔버스 ⭐"
          desc="Alexander Osterwalder의 Value Proposition Canvas를 활용해 고객이 지갑을 여는 이유를 구조적으로 분석. 고객 과업·고통·이득과 제품·진통제·이득 창출제의 정합성을 높이는 방법."
        />
        <ChapterPreview
          num={4}
          title="가격 전략 ⭐"
          desc="원가 기반·경쟁 기반·가치 기반·심리적·구독 가격 등 5가지 가격 전략의 비교와 적용 방법. 가격 인상 없이 수익성을 높이는 패키징 전략과 업셀·크로스셀 설계."
        />
        <ChapterPreview
          num={5}
          title="린 운영"
          desc="비용 구조를 최적화하면서 가치를 유지하는 린 운영 원칙. 고정비·변동비 분리, 단위 경제성(Unit Economics) 계산, 손익분기점 분석으로 지속 가능한 수익 구조 구축."
        />
        <ChapterPreview
          num={6}
          title="MVP→스케일업 ⭐"
          desc="최소 기능 제품으로 수익 모델을 검증하고 스케일업하는 단계별 전략. 검증된 모델을 확장할 때 수익성을 유지하는 방법과 성장 단계별 비즈니스 모델 진화 패턴."
        />
        <ChapterPreview
          num={7}
          title="피벗의 기술"
          desc="Netflix·Slack·YouTube 등 비즈니스 모델 피벗에 성공한 기업의 사례 분석. 피벗 타이밍을 판단하는 신호와 기존 자산을 활용해 새로운 수익 모델로 전환하는 전략."
        />
        <ChapterPreview
          num={8}
          title="핵심 지표 대시보드 ⭐"
          desc="CAC(고객 획득 비용)·LTV(고객 생애 가치)·MRR(월간 반복 수익)·Churn Rate 등 비즈니스 모델 건강도를 측정하는 핵심 지표와 실시간 모니터링 대시보드 구축 방법."
        />
        <ChapterPreview
          num={9}
          title="미래 비즈니스 모델"
          desc="플랫폼 경제·구독 경제·데이터 경제 등 비즈니스 모델의 미래 트렌드 분석. AI와 자동화가 수익 모델을 바꾸는 방식과 선제적으로 대응하는 미래 지향적 설계 전략."
        />
        <ChapterPreview
          num={10}
          title="90일 로드맵 ⭐"
          desc="0일차 현재 모델 진단부터 90일차 최적화 완료까지 — 주차별 비즈니스 모델 설계 마일스톤. 혼자 또는 소규모 팀이 90일 안에 수익성을 극대화하는 모델을 완성하는 실전 계획."
        />
        <ChapterPreview
          num="부록"
          title="실행 키트 ⭐"
          desc="즉시 쓸 수 있는 Business Model Canvas 워크시트, Value Proposition Canvas 템플릿, 7가지 수익 모델 선택 체크리스트, 핵심 지표 계산기, 90일 비즈니스 모델 설계 플래너."
        />
      </div>

      {/* Trust */}
      <SectionTitle>왜 이 가이드를 신뢰할 수 있나요?</SectionTitle>
      <div className="space-y-1 mb-16 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <TrustItem icon="&#128202;" text="Uber·Netflix·배달의민족 사례 분석 — 글로벌 기업의 비즈니스 모델 전환 사례를 분석해 실패 패턴과 성공 구조를 한국 사업 현실에 맞게 재구성" />
        <TrustItem icon="&#127472;&#127479;" text="한국 스타트업 현실 반영 — 국내 창업 생태계와 소비자 행동 패턴을 반영한 수익 모델 전략과 가격 설계 사례를 구체적으로 다룸" />
        <TrustItem icon="&#128176;" text="Value Proposition Canvas 프레임워크 — Alexander Osterwalder의 검증된 비즈니스 설계 도구를 한국 사업가가 바로 적용할 수 있도록 실전화" />
        <TrustItem icon="&#128260;" text="계속 업데이트 — 독자 피드백과 새로운 비즈니스 모델 사례를 반영해 내용이 살아있음" />
      </div>

      {/* CTA */}
      <div className="text-center mb-16">
        <p className="text-lg font-semibold mb-4">
          아이디어는 이미 있습니다. 이제 수익 모델을 설계할 차례입니다.
        </p>
        <Link
          href="/premium/business-model/read"
          className="inline-block px-8 py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-lg rounded-xl transition-colors shadow-lg"
        >
          &#128202; 본문 보기
        </Link>
        <p className="text-sm text-gray-400 mt-3">
          서문 + 10개 챕터 + 부록 실행 키트
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-8">
        <p>
          Alexander Osterwalder의 Value Proposition Canvas와 글로벌 기업 사례를 한국 사업가의 현실에 맞게 재구성한 실전 가이드입니다.
        </p>
        <p className="mt-2">
          개인의 성과를 보장하지 않습니다. 실행 결과는 개인의 노력과 환경에 따라 다를 수 있습니다.
        </p>
        <p className="mt-4">
          <Link href="/" className="text-emerald-700 dark:text-emerald-400 hover:underline">
            &#8592; 살아있는 정보책 전체 목록
          </Link>
        </p>
      </footer>
    </main>
  );
}
