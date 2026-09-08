import Link from "next/link";
import BackToHome from "@/components/BackToHome";

export const metadata = {
  title: "하루 1시간, AI 부업 자동화 시스템 | 살아있는 정보책",
  description:
    "AI 프롬프트 15개, 30일 실행 캘린더, 체크리스트 12개 포함. 블로그→숏폼→디지털상품 자동화 순서.",
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
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
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

export default function AiSidejobLanding() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <BackToHome />

      {/* Hero */}
      <header className="text-center mb-16">
        <span className="text-6xl mb-6 block">&#129302;</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          하루 1시간, AI 부업 자동화 시스템
          <br />
          <span className="text-blue-600 dark:text-blue-400">
            블로그 · 숏폼 · 디지털상품 자동화 순서
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          AI 프롬프트 15개, 30일 실행 캘린더, 체크리스트 12개 포함
        </p>
        <p className="text-sm text-gray-400">
          김약사 · 유원소망약국
        </p>
      </header>

      {/* Empathy Quote */}
      <div className="text-center mb-16 p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <p className="text-xl italic text-gray-600 dark:text-gray-400 mb-4">
          &quot;부업 영상만 100개 보고, 아직 시작을 못 하셨나요?&quot;
        </p>
        <p className="text-base font-semibold text-blue-600 dark:text-blue-400">
          부족한 건 정보가 아니라 &apos;순서&apos;입니다.
        </p>
      </div>

      {/* Pain Points */}
      <SectionTitle>지금 이런 상태 아닌가요?</SectionTitle>
      <div className="space-y-1 mb-12">
        <PainPoint>
          부업 해야 하는 건 아는데 뭐부터 해야 할지 모름
        </PainPoint>
        <PainPoint>
          블로그 3번 만들고 3번 다 5개 글에서 멈춤
        </PainPoint>
        <PainPoint>
          유튜브는 편집이 무서워서 시작도 못 함
        </PainPoint>
        <PainPoint>
          AI 쓰려고 했는데 프롬프트부터 막힘
        </PainPoint>
        <PainPoint>
          소재가 바닥나서 계속 쓸 게 없다는 느낌
        </PainPoint>
        <PainPoint>
          하루 1시간도 없다고 느끼는데 사실은 있음
        </PainPoint>
        <PainPoint>
          콘텐츠를 만들어도 수익화 경로를 모름
        </PainPoint>
      </div>

      {/* Failed Solutions */}
      <SectionTitle>
        &quot;부업 방법, 이미 찾아봤습니다&quot;
      </SectionTitle>
      <div className="space-y-1 mb-12">
        <FailedSolution
          title="부업 유튜브 보기"
          reason="정보만 늘고 실행은 0"
        />
        <FailedSolution
          title="블로그 도전"
          reason="소재 고갈로 한 달 내 포기"
        />
        <FailedSolution
          title="유튜브 도전"
          reason="편집 벽에 막혀 중단"
        />
        <FailedSolution
          title="인스타그램"
          reason="사진 감각 없다고 포기"
        />
        <FailedSolution
          title="크몽 서비스 등록"
          reason="뭘 팔지 몰라서 빈 페이지"
        />
      </div>

      {/* Discovery */}
      <div className="p-8 rounded-2xl bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 mb-16">
        <h2 className="text-2xl font-bold mb-4 text-center">
          실패하는 이유는 의지 부족이 아닙니다
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          부업에 성공한 사람들이 공통적으로 말하는 것은 하나입니다. &quot;순서가 맞아야 한다.&quot; 정보가 아무리 많아도 순서 없이 시작하면 소재가 고갈되고, 편집에 막히고, 수익화 직전에 멈춥니다.
        </p>
        <p className="text-lg font-semibold text-center mb-6">
          블로그 → 숏폼 → 디지털상품, 이 순서가 시스템입니다.
          <br />
          이 책은 그 순서를 하루 1시간 안에 작동시키는 방법을 알려줍니다.
        </p>
        <div className="space-y-2">
          <Benefit>
            하루 1시간 전제로 설계된 실행 루틴
          </Benefit>
          <Benefit>
            AI 프롬프트 15개 — 바로 복사해서 쓰는 도구
          </Benefit>
          <Benefit>
            얼굴 없이 만드는 숏폼 자동화 방법
          </Benefit>
          <Benefit>
            블로그 → 숏폼 → 디지털상품으로 이어지는 순서 설계
          </Benefit>
          <Benefit>
            실패 패턴 7가지 처방전 — 막히는 지점 예방
          </Benefit>
        </div>
        <div className="mt-6 p-4 rounded-lg bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800">
          <p className="text-sm text-center font-medium">
            가장 중요한 사실:
            <br />
            <strong>
              &quot;부업은 콘텐츠 양의 문제가 아니라 시스템의 문제입니다.&quot;
            </strong>
            <br />
            AI는 도구이고, 순서가 시스템입니다.
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
            <li>&#128560; 부업 영상만 보고 실행 0</li>
            <li>&#128560; 블로그 5개 글에서 매번 멈춤</li>
            <li>&#128560; 편집 두려움에 유튜브 시작 못 함</li>
            <li>&#128560; AI 프롬프트가 막막함</li>
            <li>&#128560; 소재가 고갈되는 느낌</li>
            <li>&#128560; 만들어도 수익화 방법을 모름</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <h3 className="font-bold mb-3 text-green-600 dark:text-green-400">
            After
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>&#128522; 하루 1시간 루틴이 생김</li>
            <li>&#128522; 데이터로 찾은 주제라 소재 걱정 없음</li>
            <li>&#128522; 얼굴 없이 숏폼 자동화 작동</li>
            <li>&#128522; 프롬프트 15개 복사해서 즉시 사용</li>
            <li>&#128522; 블로그→숏폼→디지털상품 순서 보유</li>
            <li>&#128522; 실패 패턴 7가지를 미리 피함</li>
          </ul>
        </div>
      </div>

      {/* Chapter Preview */}
      <SectionTitle>8개 챕터 + 부록 미리보기</SectionTitle>
      <div className="space-y-3 mb-16">
        <ChapterPreview
          num={1}
          title="왜 지금 AI 부업인가"
          desc="2026년 AI 도구 환경에서 개인이 부업으로 수익을 낼 수 있는 이유. 타이밍이 왜 지금인지 데이터로 확인한다."
        />
        <ChapterPreview
          num={2}
          title="시작 전 준비: 도구와 마인드셋"
          desc="무료로 쓸 수 있는 AI 도구 목록, 하루 1시간 루틴 설계, 실패하지 않는 출발선 세팅."
        />
        <ChapterPreview
          num={3}
          title="팔리는 주제를 데이터로 찾는 법 ⭐"
          desc="감에 의존하지 않고 검색량·트렌드 데이터로 소재를 발굴하는 방법. 소재 고갈을 구조적으로 막는다."
        />
        <ChapterPreview
          num={4}
          title="블로그 자동화: AI로 글 쓰는 루틴"
          desc="주제 선정부터 초안 작성, SEO 최적화까지 AI가 도와주는 블로그 반자동 파이프라인."
        />
        <ChapterPreview
          num={5}
          title="숏폼 자동화: 얼굴 없이 만드는 법 ⭐"
          desc="블로그 글을 숏폼 스크립트로 변환하고, AI 음성·자막으로 영상을 완성하는 얼굴 없는 숏폼 루틴."
        />
        <ChapterPreview
          num={6}
          title="디지털 상품: 콘텐츠를 수익으로"
          desc="PDF 가이드, 템플릿, 미니 강의 등 디지털 상품을 만들고 판매하는 경로. 블로그·숏폼과 연결하는 방법."
        />
        <ChapterPreview
          num={7}
          title="실패 패턴 7가지 처방전"
          desc="소재 고갈, 편집 포기, 수익화 직전 중단 등 가장 많이 막히는 7가지 지점과 각각의 해결책."
        />
        <ChapterPreview
          num={8}
          title="시스템 유지와 확장"
          desc="한 달 후에도 계속 돌아가는 루틴 설계. 수익이 생기면 어떻게 확장할지 단계별 로드맵."
        />
        <ChapterPreview
          num="부록"
          title="프롬프트 15선 ⭐"
          desc="주제 발굴, 블로그 초안, 숏폼 스크립트, 상품 소개문 등 바로 복사해서 쓰는 AI 프롬프트 15개."
        />
      </div>

      {/* Bonuses */}
      <SectionTitle>&#127873; 보너스 4개</SectionTitle>
      <div className="space-y-3 mb-16">
        <BonusItem
          title="AI 프롬프트 15개"
          desc="주제 발굴부터 블로그 초안, 숏폼 스크립트, 디지털 상품 소개문까지 복사해서 바로 쓰는 프롬프트 전체 모음."
        />
        <BonusItem
          title="30일 실행 캘린더"
          desc="첫 달 30일을 날짜별로 무엇을 해야 하는지 정리한 캘린더. 생각하지 말고 따라만 하면 되는 일정표."
        />
        <BonusItem
          title="체크리스트 12개"
          desc="블로그 발행 전 체크리스트, 숏폼 업로드 전 체크리스트, 디지털 상품 출시 전 체크리스트 등 12종."
        />
        <BonusItem
          title="표 9개"
          desc="도구 비교표, 수익화 경로 비교표, 플랫폼별 숏폼 스펙표 등 한눈에 비교하는 요약 표 9개."
        />
      </div>

      {/* Trust */}
      <SectionTitle>왜 이 가이드를 신뢰할 수 있나요?</SectionTitle>
      <div className="space-y-1 mb-16 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <TrustItem icon="&#128197;" text="2026년 최신 정보 — 현재 작동하는 AI 도구와 플랫폼 알고리즘 기준으로 작성" />
        <TrustItem icon="&#128296;" text="실행 매뉴얼, 이론서 아님 — 개념 설명보다 바로 따라 할 수 있는 단계와 도구 중심" />
        <TrustItem icon="&#128260;" text="계속 업데이트 — AI 도구 환경 변화와 독자 피드백을 반영해 내용이 살아있음" />
        <TrustItem icon="&#9200;" text="하루 1시간 전제 설계 — 바쁜 직장인도 현실적으로 실행할 수 있는 루틴으로 구성" />
      </div>

      {/* CTA */}
      <div className="text-center mb-16">
        <p className="text-lg font-semibold mb-4">
          순서가 생기면, 부업이 시작됩니다.
        </p>
        <Link
          href="/premium/ai-sidejob/read"
          className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-xl transition-colors shadow-lg"
        >
          &#128214; 본문 보기
        </Link>
        <p className="text-sm text-gray-400 mt-3">
          서문 + 8개 챕터 + 부록 + 보너스 4개
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-8">
        <p>
          이 가이드는 2026년 현재 실제로 작동하는 AI 도구와 플랫폼 환경을 기준으로 작성되었습니다.
        </p>
        <p className="mt-2">
          수익을 보장하지 않습니다. 실행 결과는 개인의 노력과 환경에 따라 다를 수 있습니다.
        </p>
        <p className="mt-4">
          <Link href="/" className="text-blue-600 hover:underline">
            &#8592; 살아있는 정보책 전체 목록
          </Link>
        </p>
      </footer>
    </main>
  );
}
