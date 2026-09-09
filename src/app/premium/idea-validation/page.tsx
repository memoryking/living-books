import Link from "next/link";
import BackToHome from "@/components/BackToHome";

export const metadata = {
  title: "망하지 않는 사업 아이디어 검증법 | 살아있는 정보책",
  description:
    "시장 조사부터 MVP·피벗까지 — 실패 확률을 줄이는 데이터 중심 검증 시스템. 페르소나+틈새시장 발견법 7가지, 가설 검증 6단계, MVP 5유형, 피벗 vs 지속 판단 프레임워크, 90일 검증 로드맵.",
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
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-700 text-white flex items-center justify-center font-bold text-sm">
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

export default function IdeaValidationLanding() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <BackToHome />

      {/* Hero */}
      <header className="text-center mb-16">
        <span className="text-6xl mb-6 block">&#128300;</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          망하지 않는 사업 아이디어 검증법
          <br />
          <span className="text-cyan-700 dark:text-cyan-400">
            시장 조사부터 MVP·피벗까지 — 실패 확률을 줄이는 데이터 중심 검증 시스템
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          스타트업 실패의 42%는 &apos;시장이 원하지 않는 것을 만들었기 때문&apos;
        </p>
        <p className="text-sm text-gray-400">
          김약사 · 유원소망약국
        </p>
      </header>

      {/* Empathy Quote */}
      <div className="text-center mb-16 p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <p className="text-xl italic text-gray-600 dark:text-gray-400 mb-4">
          &quot;스타트업 실패의 42%는 &apos;시장이 원하지 않는 것을 만들었기 때문&apos;입니다.&quot;
        </p>
        <p className="text-base font-semibold text-cyan-700 dark:text-cyan-300">
          검증 없이 시작하지 마세요.
        </p>
      </div>

      {/* Pain Points */}
      <SectionTitle>지금 이런 상태 아닌가요?</SectionTitle>
      <div className="space-y-1 mb-12">
        <PainPoint>
          감으로 시작해서 실패 — 데이터 없이 직감만 믿다가 시간과 돈을 낭비함
        </PainPoint>
        <PainPoint>
          누가 살지 모르면서 개발 — 고객 페르소나 없이 만들기부터 시작함
        </PainPoint>
        <PainPoint>
          검증 없이 자원 낭비 — 아이디어가 좋다는 확신만으로 풀 투자를 해버림
        </PainPoint>
        <PainPoint>
          확증 편향으로 긍정적 신호만 봄 — 부정적 피드백은 무시하고 응원만 수집함
        </PainPoint>
        <PainPoint>
          MVP를 어떻게 만들지 모름 — 최소 기능 제품이 무엇인지, 어떻게 범위를 정할지 막막함
        </PainPoint>
        <PainPoint>
          피벗 타이밍을 놓침 — 방향을 바꿔야 할 때를 몰라서 계속 같은 방향으로 전진함
        </PainPoint>
        <PainPoint>
          고객 피드백 활용 못 함 — 의견을 모아도 어떻게 제품·전략에 반영할지 모름
        </PainPoint>
      </div>

      {/* Failed Solutions */}
      <SectionTitle>
        &quot;이미 이것저것 해봤습니다&quot;
      </SectionTitle>
      <div className="space-y-1 mb-12">
        <FailedSolution
          title="완벽한 제품 먼저"
          reason="시장 확인 후에 — 아무도 원하지 않는 완성품을 만들어 버림"
        />
        <FailedSolution
          title="주변 사람에게만 물어봄"
          reason="편향 — 가족·친구는 솔직한 부정 의견을 잘 주지 않음"
        />
        <FailedSolution
          title="경쟁사 따라하기"
          reason="차별화 없음 — 후발 주자로 진입해 가격 경쟁만 남음"
        />
        <FailedSolution
          title="시장조사 보고서만 읽기"
          reason="실행 없음 — 데이터는 쌓이지만 실제 고객 반응은 알 수 없음"
        />
        <FailedSolution
          title="한번 검증하고 끝"
          reason="지속 필요 — 시장은 계속 변하기 때문에 검증도 반복해야 함"
        />
      </div>

      {/* Discovery */}
      <div className="p-8 rounded-2xl bg-cyan-50 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-800 mb-16">
        <h2 className="text-2xl font-bold mb-4 text-center">
          아이디어 검증은 운이 아니라 시스템입니다
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          성공하는 창업가와 실패하는 창업가의 차이는 아이디어의 질이 아닙니다. 아이디어를 시장에서 빠르게 검증하고, 피드백으로 방향을 조정하며, 데이터를 근거로 결정할 수 있느냐에 달려 있습니다. 페르소나 발굴부터 가설 설계, MVP 제작, 피벗 판단까지 — 검증 시스템을 갖추면 실패 확률을 극적으로 줄일 수 있습니다.
        </p>
        <p className="text-lg font-semibold text-center mb-6">
          감이 아니라 검증,
          <br />
          열정이 아니라 데이터로 시작하는 것
        </p>
        <div className="space-y-2">
          <Benefit>
            페르소나+틈새시장 발견법 7가지로 진짜 고객을 찾는 프레임워크
          </Benefit>
          <Benefit>
            가설 검증 실험 설계 6단계로 빠르고 저렴하게 시장 반응 확인
          </Benefit>
          <Benefit>
            MVP 5유형 비교+범위 정의로 최소 비용 최대 학습 달성
          </Benefit>
          <Benefit>
            피벗 vs 지속 판단 프레임워크로 결정적 순간에 올바른 방향 선택
          </Benefit>
          <Benefit>
            90일 아이디어 검증 로드맵으로 이론을 실행으로 전환
          </Benefit>
        </div>
        <div className="mt-6 p-4 rounded-lg bg-cyan-100 dark:bg-cyan-900 border border-cyan-300 dark:border-cyan-700">
          <p className="text-sm text-center font-medium">
            가장 중요한 사실:
            <br />
            <strong>
              &quot;CB Insights에 따르면, 스타트업 실패의 42%는 시장 수요 부재입니다.&quot;
            </strong>
            <br />
            검증 시스템을 갖추면 이 42%를 피할 수 있습니다.
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
            <li>&#128560; 감으로 시작해서 뒤늦게 수요 없음을 깨달음</li>
            <li>&#128560; 주변의 응원만 믿고 풀 개발에 투자함</li>
            <li>&#128560; MVP 범위를 못 정해 과도하게 만들어버림</li>
            <li>&#128560; 피벗 타이밍을 놓쳐 자원을 다 소진함</li>
            <li>&#128560; 고객 피드백을 모아도 무엇을 바꿔야 할지 모름</li>
            <li>&#128560; 검증을 한 번 했다는 안도감에 멈춰버림</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <h3 className="font-bold mb-3 text-green-600 dark:text-green-400">
            After
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>&#128522; 페르소나 7가지 기법으로 진짜 고객을 먼저 찾음</li>
            <li>&#128522; 가설 검증 6단계로 저비용 실험을 설계함</li>
            <li>&#128522; MVP 5유형 중 최적 유형을 골라 빠르게 출시함</li>
            <li>&#128522; 피벗 vs 지속 프레임워크로 결정적 순간을 잡음</li>
            <li>&#128522; 피드백 루프를 구축해 개선을 반복함</li>
            <li>&#128522; 90일 로드맵으로 검증을 일상적 시스템으로 만듦</li>
          </ul>
        </div>
      </div>

      {/* Chapter Preview */}
      <SectionTitle>10개 챕터 + 부록 미리보기</SectionTitle>
      <div className="space-y-3 mb-16">
        <ChapterPreview
          num={1}
          title="시장 찾기 ⭐"
          desc="페르소나와 틈새시장을 발견하는 7가지 기법. 인구통계 분석부터 포럼 마이닝, 검색 트렌드 분석, 커뮤니티 관찰까지 — 진짜 고객이 어디서 무엇을 원하는지 데이터로 찾는 법."
        />
        <ChapterPreview
          num={2}
          title="가설 검증 ⭐"
          desc="아이디어를 검증 가능한 가설로 전환하고 실험을 설계하는 6단계 프로세스. 가장 중요한 가정을 먼저 검증하고, 최소 비용으로 최대 학습을 얻는 린 실험 설계법."
        />
        <ChapterPreview
          num={3}
          title="심화 검증 기법 ⭐"
          desc="인터뷰·설문·A/B 테스트·랜딩 페이지 실험·프리세일 등 검증 도구 5가지의 장단점과 언제 어떤 도구를 써야 하는지 비교. 확증 편향을 피하는 인터뷰 질문 설계법."
        />
        <ChapterPreview
          num={4}
          title="MVP 만들기 ⭐"
          desc="콘시어지 MVP·위저드 오브 오즈·랜딩 페이지·프로토타입·단일 기능 제품 — 5가지 MVP 유형 비교와 상황별 최적 선택 기준. MVP 범위를 정의하고 스코프 크립을 막는 방법."
        />
        <ChapterPreview
          num={5}
          title="애자일 MVP"
          desc="스프린트 기반 MVP 반복 개선 사이클. 사용자 스토리 매핑으로 핵심 기능 순서를 정하고, 각 스프린트에서 측정할 지표를 설정해 학습을 제품에 빠르게 반영하는 애자일 검증 루틴."
        />
        <ChapterPreview
          num={6}
          title="피벗 vs 지속 ⭐"
          desc="피벗과 지속 중 무엇을 선택할지 판단하는 프레임워크. Slack·Instagram 피벗 사례 분석을 통해 배우는 신호 읽기 — 데이터가 말하는 &apos;지금 방향을 바꿔야 할 때&apos;."
        />
        <ChapterPreview
          num={7}
          title="피드백 루프"
          desc="고객 피드백을 체계적으로 수집·분류·우선순위화하는 시스템 구축. NPS 측정, 코호트 분석, 리텐션 지표 해석으로 제품-시장 적합성(PMF)에 가까워지는 과정."
        />
        <ChapterPreview
          num={8}
          title="검증→실행"
          desc="검증 데이터를 실제 실행 계획으로 전환하는 방법. OKR 기반 검증 목표 설정, 팀 내 학습 공유 프로세스, 투자자에게 검증 데이터를 설득력 있게 제시하는 방법."
        />
        <ChapterPreview
          num={9}
          title="지속적 검증"
          desc="PMF 이후에도 검증을 멈추지 않는 이유와 방법. 시장 변화 모니터링, 경쟁사 출현 대응, 기존 고객 이탈 신호 조기 포착으로 성장 단계에서도 검증 문화를 유지하는 법."
        />
        <ChapterPreview
          num={10}
          title="90일 로드맵 ⭐"
          desc="0일차 아이디어 정의부터 90일차 PMF 판단까지 — 주차별 검증 마일스톤과 체크포인트. 혼자 또는 소규모 팀이 90일 안에 아이디어의 생존 가능성을 판단하는 실전 계획."
        />
        <ChapterPreview
          num="부록"
          title="검증 실행 키트 ⭐"
          desc="즉시 쓸 수 있는 페르소나 워크시트, 가설 검증 실험 템플릿, MVP 유형 선택 체크리스트, 피벗 vs 지속 판단 매트릭스, 90일 검증 로드맵 플래너."
        />
      </div>

      {/* Trust */}
      <SectionTitle>왜 이 가이드를 신뢰할 수 있나요?</SectionTitle>
      <div className="space-y-1 mb-16 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <TrustItem icon="&#128202;" text="CB Insights 데이터 기반 — 스타트업 실패 원인 분석 보고서와 글로벌 검증 사례를 바탕으로 실패 패턴과 검증 방법론을 실전 도구로 재구성" />
        <TrustItem icon="&#128257;" text="Slack·Instagram 피벗 사례 — 방향 전환에 성공한 글로벌 기업의 실제 피벗 타이밍과 판단 기준을 분석해 한국 창업 환경에 적용하는 방법 제시" />
        <TrustItem icon="&#127470;&#127479;" text="한국 스타트업 현실 반영 — 국내 창업 생태계의 특성과 한국 소비자 행동 패턴을 반영한 검증 전략과 사례를 구체적으로 다룸" />
        <TrustItem icon="&#128260;" text="계속 업데이트 — 독자 피드백과 새로운 검증 사례를 반영해 내용이 살아있음" />
      </div>

      {/* CTA */}
      <div className="text-center mb-16">
        <p className="text-lg font-semibold mb-4">
          아이디어는 이미 있습니다. 이제 검증 시스템을 갖출 차례입니다.
        </p>
        <Link
          href="/premium/idea-validation/read"
          className="inline-block px-8 py-4 bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-lg rounded-xl transition-colors shadow-lg"
        >
          &#128300; 본문 보기
        </Link>
        <p className="text-sm text-gray-400 mt-3">
          서문 + 10개 챕터 + 부록 검증 실행 키트
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-8">
        <p>
          이 가이드는 린 스타트업 방법론·CB Insights 연구·글로벌 피벗 사례를 한국 창업자의 현실에 맞게 재구성한 실행 중심의 아이디어 검증 가이드입니다.
        </p>
        <p className="mt-2">
          개인의 성과를 보장하지 않습니다. 실행 결과는 개인의 노력과 환경에 따라 다를 수 있습니다.
        </p>
        <p className="mt-4">
          <Link href="/" className="text-cyan-700 dark:text-cyan-400 hover:underline">
            &#8592; 살아있는 정보책 전체 목록
          </Link>
        </p>
      </footer>
    </main>
  );
}
