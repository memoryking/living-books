import Link from "next/link";
import BackToHome from "@/components/BackToHome";

export const metadata = {
  title: "만져볼 수 없는 상품을 완판시키는 설득 시스템 | 살아있는 정보책",
  description:
    "무형 상품 판매의 80%는 보여주는 기술로 결정됩니다. Feature→Benefit→Emotion 변환, 5가지 신뢰 장치, 가격 프레이밍, 판매 페이지 황금 공식, 30일 세일즈 개선 로드맵.",
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
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-700 text-white flex items-center justify-center font-bold text-sm">
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

export default function SellingInvisibleLanding() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <BackToHome />

      {/* Hero */}
      <header className="text-center mb-16">
        <span className="text-6xl mb-6 block">&#128142;</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          만져볼 수 없는 상품을 완판시키는 설득 시스템
          <br />
          <span className="text-violet-700 dark:text-violet-400">
            좋은 상품인데 왜 안 팔릴까? 만져볼 수 없기 때문입니다. 보여주는 기술이 답입니다.
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          무형 상품 판매의 80%는 &apos;보여주는 기술&apos;로 결정됩니다
        </p>
        <p className="text-sm text-gray-400">
          비법연구소
        </p>
      </header>

      {/* Empathy Quote */}
      <div className="text-center mb-16 p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <p className="text-xl italic text-gray-600 dark:text-gray-400 mb-4">
          &quot;무형 상품 판매의 80%는 &apos;보여주는 기술&apos;로 결정됩니다.&quot;
        </p>
        <p className="text-base font-semibold text-violet-700 dark:text-violet-300">
          상품이 아니라 설득을 설계하세요.
        </p>
      </div>

      {/* Pain Points */}
      <SectionTitle>지금 이런 상태 아닌가요?</SectionTitle>
      <div className="space-y-1 mb-12">
        <PainPoint>
          좋은 상품인데 설명이 안 됨 — 가치는 분명한데 말로 꺼내면 상대가 이해를 못 함
        </PainPoint>
        <PainPoint>
          가격 얘기하면 &quot;비싸요&quot; 반응 — 숫자를 보는 순간 대화가 끊겨버림
        </PainPoint>
        <PainPoint>
          무료 샘플만 받고 안 삼 — 체험을 줬는데도 결제로 이어지지 않음
        </PainPoint>
        <PainPoint>
          판매 페이지 전환율 1% 미만 — 트래픽은 오는데 구매 버튼을 누르지 않음
        </PainPoint>
        <PainPoint>
          후기가 없어서 신뢰 못 줌 — 처음 판매라 사회적 증거가 없어 악순환
        </PainPoint>
        <PainPoint>
          경쟁 상품과 차별화 못 함 — 비슷해 보이는 상품들 사이에서 선택받지 못함
        </PainPoint>
        <PainPoint>
          SNS로 홍보해도 결제까지 안 이어짐 — 좋아요는 받아도 실제 구매는 없음
        </PainPoint>
      </div>

      {/* Failed Solutions */}
      <SectionTitle>
        &quot;이미 이것저것 해봤습니다&quot;
      </SectionTitle>
      <div className="space-y-1 mb-12">
        <FailedSolution
          title="&quot;상품만 좋으면 팔린다&quot;"
          reason="품질≠판매력"
        />
        <FailedSolution
          title="&quot;가격을 낮추면 된다&quot;"
          reason="저가 경쟁 함정"
        />
        <FailedSolution
          title="광고비 늘리기"
          reason="전환 없이 노출만"
        />
        <FailedSolution
          title="기능 추가하기"
          reason="더 복잡해질 뿐"
        />
        <FailedSolution
          title="입소문 기다리기"
          reason="전략 없는 희망"
        />
      </div>

      {/* Discovery */}
      <div className="p-8 rounded-2xl bg-violet-50 dark:bg-violet-950 border border-violet-200 dark:border-violet-800 mb-16">
        <h2 className="text-2xl font-bold mb-4 text-center">
          무형 상품에는 무형 상품만의 판매 공식이 있습니다
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          눈에 보이지 않는 상품은 고객이 구매 전 가치를 확인할 수 없습니다. 그래서 신뢰와 설득의 구조가 유형 상품과 완전히 달라야 합니다. Feature를 Benefit으로, Benefit을 Emotion으로 번역하고, 5가지 신뢰 장치로 불안을 제거하며, 가격 프레이밍으로 저항을 해소하는 — 무형 상품만의 판매 공식이 존재합니다.
        </p>
        <p className="text-lg font-semibold text-center mb-6">
          상품을 설명하는 게 아니라,
          <br />
          고객이 느낄 감정을 설계하는 것
        </p>
        <div className="space-y-2">
          <Benefit>
            Feature→Benefit→Emotion 변환으로 추상적 가치를 구체적 감정으로
          </Benefit>
          <Benefit>
            5가지 신뢰 장치(사회적 증거·권위·보증·시범·과정 공개)로 불안 제거
          </Benefit>
          <Benefit>
            앵커링·세분화·비교·ROI 프레이밍으로 가격 저항 해소
          </Benefit>
          <Benefit>
            Pain→공감→Solution→Evidence→CTA 판매 페이지 황금 공식
          </Benefit>
          <Benefit>
            30일 세일즈 개선 로드맵으로 즉시 실행
          </Benefit>
        </div>
        <div className="mt-6 p-4 rounded-lg bg-violet-100 dark:bg-violet-900 border border-violet-300 dark:border-violet-700">
          <p className="text-sm text-center font-medium">
            가장 중요한 사실:
            <br />
            <strong>
              &quot;크몽 상위 10% 프리랜서의 공통점: 상품 페이지에 신뢰 장치 5가지 중 4가지 이상을 사용합니다.&quot;
            </strong>
            <br />
            설득 시스템을 갖추면 전환율이 달라집니다.
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
            <li>&#128560; 기능을 나열하지만 고객은 가치를 모름</li>
            <li>&#128560; 가격을 보는 순간 &quot;비싸요&quot;로 끝남</li>
            <li>&#128560; 판매 페이지 전환율 1% 미만으로 방치</li>
            <li>&#128560; 신뢰를 줄 후기·증거가 없어 악순환</li>
            <li>&#128560; SNS 팔로워가 늘어도 결제는 없음</li>
            <li>&#128560; 경쟁사와 차별화 포인트를 설명 못 함</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <h3 className="font-bold mb-3 text-green-600 dark:text-green-400">
            After
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>&#128522; Feature→Emotion 변환으로 가치가 전달됨</li>
            <li>&#128522; ROI·앵커링 프레이밍으로 가격 저항이 녹음</li>
            <li>&#128522; 황금 공식으로 판매 페이지를 재설계함</li>
            <li>&#128522; 5가지 신뢰 장치로 불안을 체계적으로 제거</li>
            <li>&#128522; 콘텐츠 세일즈로 팔로워가 구매자로 전환됨</li>
            <li>&#128522; 맥락 세일즈로 경쟁 없이 선택받는 포지션 확보</li>
          </ul>
        </div>
      </div>

      {/* Chapter Preview */}
      <SectionTitle>10개 챕터 + 부록 미리보기</SectionTitle>
      <div className="space-y-3 mb-16">
        <ChapterPreview
          num={1}
          title="무형상품 3가지 벽 ⭐"
          desc="무형 상품이 팔리지 않는 구조적 이유 3가지 — 불가시성·불확실성·무형성의 벽을 진단하고, 각 벽을 허무는 접근법을 소개합니다. 왜 좋은 상품도 팔리지 않는지 메커니즘부터 이해합니다."
        />
        <ChapterPreview
          num={2}
          title="가치→숫자 번역 ⭐"
          desc="Feature를 Benefit으로, Benefit을 Emotion으로 변환하는 3단계 언어 설계법. 추상적 가치를 고객이 느끼는 구체적 감정과 숫자로 번역해 설명이 아닌 설득이 되도록 만드는 카피 프레임워크."
        />
        <ChapterPreview
          num={3}
          title="신뢰 설계 ⭐"
          desc="사회적 증거·권위·보증·시범·과정 공개 — 5가지 신뢰 장치의 원리와 실전 적용법. 후기가 없을 때부터 시작하는 신뢰 축적 전략과 크몽·클래스101 상위 판매자의 신뢰 설계 패턴 분석."
        />
        <ChapterPreview
          num={4}
          title="가격 프레이밍 ⭐"
          desc="앵커링·세분화·비교·ROI 프레이밍 4가지로 같은 가격도 달리 느끼게 만드는 심리학적 설계. &apos;비싸요&apos; 반응을 &apos;그 정도 가치면 당연하죠&apos;로 바꾸는 가격 제시 순서와 언어."
        />
        <ChapterPreview
          num={5}
          title="판매 페이지 공식 ⭐"
          desc="Pain→공감→Solution→Evidence→CTA 황금 공식으로 판매 페이지를 설계하는 단계별 가이드. 섹션별 목적·길이·언어 톤, 전환율 1%를 5%로 높이는 구조적 개선 체크리스트."
        />
        <ChapterPreview
          num={6}
          title="긴급성 심리학"
          desc="진짜 희소성과 인위적 긴급성의 차이, 그리고 윤리적으로 긴급성을 설계하는 방법. FOMO 심리 활용법과 &apos;지금 사야 하는 이유&apos;를 설득력 있게 만드는 마감·한정 전략."
        />
        <ChapterPreview
          num={7}
          title="콘텐츠 세일즈"
          desc="SNS·블로그·뉴스레터로 팔로워를 구매자로 전환하는 콘텐츠 세일즈 전략. 교육형·사례형·비하인드형 콘텐츠 유형별 제작법과 구매 욕구를 자연스럽게 높이는 콘텐츠 퍼널 설계."
        />
        <ChapterPreview
          num={8}
          title="스토리텔링"
          desc="무형 상품을 구체적으로 만드는 스토리텔링 기법 — Before/After 구조, 고객 여정 스토리, 창업자 스토리의 설득 원리. 숫자와 사실보다 강력하게 기억에 남는 이야기 설계법."
        />
        <ChapterPreview
          num={9}
          title="맥락 세일즈"
          desc="경쟁 없이 선택받는 포지셔닝 전략 — 고객의 맥락(상황·목표·두려움)에 맞춰 상품을 재배치하는 맥락 세일즈. 같은 상품을 다른 고객군에게 다른 언어로 파는 세분화 전략."
        />
        <ChapterPreview
          num={10}
          title="LTV 전략"
          desc="첫 구매 이후 고객 생애 가치(LTV)를 극대화하는 업셀·크로스셀·리텐션 전략. 무형 상품의 반복 구매를 만드는 구독·커뮤니티·심화 과정 설계와 팬 고객 전환 로드맵."
        />
        <ChapterPreview
          num="부록"
          title="실행 키트 ⭐"
          desc="즉시 쓸 수 있는 CTA 템플릿 10개, 신뢰 장치 체크리스트, 판매 페이지 황금 공식 워크시트, 가격 프레이밍 문장 예시 모음, 30일 세일즈 개선 로드맵 플래너."
        />
      </div>

      {/* Trust */}
      <SectionTitle>왜 이 가이드를 신뢰할 수 있나요?</SectionTitle>
      <div className="space-y-1 mb-16 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <TrustItem icon="&#128202;" text="판매 심리학 연구 기반 — 설득 심리학과 소비자 행동 연구를 바탕으로 무형 상품에 적용 가능한 실전 전략으로 재구성" />
        <TrustItem icon="&#127472;&#127479;" text="크몽·클래스101·아임웹 한국 사례 — 국내 디지털 상품 시장의 실제 판매 데이터와 상위 판매자 패턴을 분석해 한국 환경에 맞춘 전략 제시" />
        <TrustItem icon="&#128142;" text="CTA 템플릿 10개 즉시 활용 — 이론이 아닌 즉시 복사해서 쓸 수 있는 판매 문장·버튼·페이지 구조 템플릿 제공" />
        <TrustItem icon="&#128260;" text="계속 업데이트 — 독자 피드백과 새로운 판매 사례를 반영해 내용이 살아있음" />
      </div>

      {/* CTA */}
      <div className="text-center mb-16">
        <p className="text-lg font-semibold mb-4">
          상품은 이미 있습니다. 이제 설득 시스템을 갖출 차례입니다.
        </p>
        <Link
          href="/premium/selling-invisible/read"
          className="inline-block px-8 py-4 bg-violet-700 hover:bg-violet-800 text-white font-bold text-lg rounded-xl transition-colors shadow-lg"
        >
          &#128142; 본문 보기
        </Link>
        <p className="text-sm text-gray-400 mt-3">
          서문 + 10개 챕터 + 부록 실행 키트
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-8">
        <p>
          이 가이드는 판매 심리학 연구와 한국 디지털 상품 시장 분석을 바탕으로 무형 상품 판매의 실전 전략을 정리한 가이드입니다.
        </p>
        <p className="mt-2">
          개인의 성과를 보장하지 않습니다. 실행 결과는 개인의 노력과 환경에 따라 다를 수 있습니다.
        </p>
        <p className="mt-4">
          <Link href="/" className="text-violet-700 dark:text-violet-400 hover:underline">
            &#8592; 살아있는 정보책 전체 목록
          </Link>
        </p>
      </footer>
    </main>
  );
}
