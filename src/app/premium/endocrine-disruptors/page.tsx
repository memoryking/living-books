import Link from "next/link";

export const metadata = {
  title: "생활 속 환경호르몬과 질병 | 살아있는 정보책",
  description:
    "BPA Free의 함정부터 PFAS, 미세플라스틱까지. 과학 기반으로 정리한 환경호르몬 실천 가이드.",
};

function PainPoint({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 py-2">
      <span className="text-red-500 flex-shrink-0">❌</span>
      <p className="text-gray-700 dark:text-gray-300">{children}</p>
    </div>
  );
}

function Benefit({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 py-2">
      <span className="text-green-500 flex-shrink-0">✅</span>
      <p className="text-gray-700 dark:text-gray-300">{children}</p>
    </div>
  );
}

function ChapterPreview({
  num,
  title,
  desc,
}: {
  num: number;
  title: string;
  desc: string;
}) {
  return (
    <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-3 mb-2">
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-sm">
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
      <h4 className="font-semibold mb-1">🎁 {title}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
    </div>
  );
}

export default function EndocrineDisruptorsLanding() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link
          href="/"
          className="text-sm text-gray-400 hover:text-blue-500 transition-colors"
        >
          ← 전체 목록으로
        </Link>
      </div>

      {/* Hero */}
      <header className="text-center mb-16">
        <span className="text-6xl mb-6 block">🧪</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          &quot;BPA Free&quot;라고
          <br />
          <span className="text-emerald-600 dark:text-emerald-400">
            안전한 거 아닌가요?
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          주방, 화장품, 아이 용품에 숨어있는 환경호르몬
          <br />
          과학 기반으로 정리한 실천 가이드
        </p>
        <p className="text-sm text-gray-400">
          (불안하게 만들려는 게 아닙니다. 할 수 있는 것에 집중합니다)
        </p>
      </header>

      {/* Quote */}
      <div className="text-center mb-16 p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <p className="text-xl italic text-gray-600 dark:text-gray-400 mb-4">
          &quot;인플루언서가 말하는 건지
          <br />
          진짜 걱정할 건지 모르겠어요.&quot;
        </p>
        <p className="text-sm text-gray-400">
          — Reddit에서 가장 많이 올라오는 질문
        </p>
        <p className="text-sm font-semibold mt-4 text-emerald-600 dark:text-emerald-400">
          NIH(미국국립보건원)의 답: 진짜입니다.
          <br />
          하지만 20%만 바꾸면 80%의 노출을 줄일 수 있습니다.
        </p>
      </div>

      {/* Pain Points */}
      <h2 className="text-2xl font-bold mt-16 mb-6 text-center">
        이런 고민이 있지 않나요?
      </h2>
      <div className="space-y-1 mb-12">
        <PainPoint>뭐가 진짜 위험하고 뭐가 과장인지 모르겠다</PainPoint>
        <PainPoint>
          &quot;BPA Free&quot;라고 샀는데 BPS가 들어있다고?
        </PainPoint>
        <PainPoint>플라스틱이 어디에나 있어서 피할 수가 없다</PainPoint>
        <PainPoint>
          아이한테 쓰는 것들이 걱정되는데 뭘 바꿔야 할지
        </PainPoint>
        <PainPoint>유기농/안전 제품은 너무 비싸다</PainPoint>
        <PainPoint>&quot;너무 예민하다&quot;는 주변 반응</PainPoint>
      </div>

      {/* Discovery */}
      <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 mb-16">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Reddit + NIH 교차 검증 결과
        </h2>
        <div className="space-y-2">
          <Benefit>
            환경호르몬은 진짜다 — NIH가 공식 인정한 9가지 물질
          </Benefit>
          <Benefit>
            하지만 모든 게 독은 아니다 — 노출량과 경로가 핵심
          </Benefit>
          <Benefit>
            주방이 최대 노출원 — 여기만 바꿔도 80% 감소
          </Benefit>
          <Benefit>
            전환이 생각보다 쉽다 — 유리 용기, 정수기, 무향 제품 3가지
          </Benefit>
        </div>
      </div>

      {/* Before / After */}
      <h2 className="text-2xl font-bold mt-16 mb-6 text-center">
        당신이 경험할 변화
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800">
          <h3 className="font-bold mb-3 text-red-600 dark:text-red-400">
            Before
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>😰 뭐가 위험한지 모르니까 전부 불안</li>
            <li>😰 &quot;BPA Free&quot; 라벨만 보고 안심</li>
            <li>😰 아이 용품 뭘 골라야 할지 모름</li>
            <li>😰 &quot;어차피 다 독이야&quot; 무력감</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <h3 className="font-bold mb-3 text-green-600 dark:text-green-400">
            After
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>😊 진짜 위험한 것만 과학 기반으로 파악</li>
            <li>😊 성분표를 읽을 수 있는 눈</li>
            <li>😊 예산별 교체 우선순위 명확</li>
            <li>😊 &quot;할 수 있는 것에 집중&quot; 평온함</li>
          </ul>
        </div>
      </div>

      {/* Chapters */}
      <h2 className="text-2xl font-bold mt-16 mb-6 text-center">
        10개 챕터 미리보기
      </h2>
      <div className="space-y-3 mb-16">
        <ChapterPreview
          num={1}
          title="환경호르몬이란 무엇인가"
          desc="인플루언서 과장인가 진짜인가? NIH 공식 목록 9가지."
        />
        <ChapterPreview
          num={2}
          title="BPA/BPS/프탈레이트 — BPA Free의 함정"
          desc="대체물질도 나쁘다. 'Fragrance'에 숨은 프탈레이트."
        />
        <ChapterPreview
          num={3}
          title="PFAS — 영원한 화학물질"
          desc="분해 불가, 수천 년 잔류. 논스틱 팬부터 방수 의류까지."
        />
        <ChapterPreview
          num={4}
          title="미세플라스틱 — 이미 당신 안에 있다"
          desc="뇌, 혈액, 태반에서 검출. 트로이 목마 효과."
        />
        <ChapterPreview
          num={5}
          title="주방 — 가장 쉽게 바꿀 수 있는 곳"
          desc="여기만 바꿔도 80%. 유리 용기, 정수기, 논스틱 교체."
        />
        <ChapterPreview
          num={6}
          title="화장품·세면도구 — '향료'가 위험한 이유"
          desc="매일 피부에 바르는 것들의 진실. 라벤더 오일까지."
        />
        <ChapterPreview
          num={7}
          title="아이와 임산부 — 가장 취약한 그룹"
          desc="작은 몸에 더 큰 영향. 젖병, 장난감, 매트리스."
        />
        <ChapterPreview
          num={8}
          title="식품과 물 — 유기농이면 안전한가?"
          desc="가공식품의 숨은 호르몬. 정수기의 중요성."
        />
        <ChapterPreview
          num={9}
          title="집 안의 보이지 않는 위험"
          desc="세제, 먼지, 합성섬유 옷. 환기의 힘."
        />
        <ChapterPreview
          num={10}
          title="불안 관리 — 알되, 미치지 마라"
          desc="모든 세대에는 그 세대의 독이 있었다. 80/20 법칙."
        />
      </div>

      {/* Bonuses */}
      <h2 className="text-2xl font-bold mt-16 mb-6 text-center">
        🎁 보너스 5개
      </h2>
      <div className="space-y-3 mb-16">
        <BonusItem
          title="주방 완전 교체 가이드"
          desc="예산별(5만/10만/30만원) 교체 우선순위 + 정수기 선택 + 추천 제품"
        />
        <BonusItem
          title="성분표 해독 가이드"
          desc="피해야 할 성분 20가지 + 안전 인증 마크 + 성분 확인 앱"
        />
        <BonusItem
          title="아이 용품 안전 체크리스트"
          desc="젖병, 장난감, 매트리스, 카시트 안전 기준"
        />
        <BonusItem
          title="세면도구/화장품 교체 가이드"
          desc="안전 대안 + DIY 레시피 (베이킹소다, 식초, 코코넛오일)"
        />
        <BonusItem
          title="가정 환경 리셋 체크리스트"
          desc="방별 점검 + 미세플라스틱 세탁 가이드 + 계절별 스케줄"
        />
      </div>

      {/* CTA */}
      <div className="text-center mb-16">
        <Link
          href="/premium/endocrine-disruptors/read"
          className="inline-block px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg rounded-xl transition-colors shadow-lg"
        >
          📖 본문 보기
        </Link>
        <p className="text-sm text-gray-400 mt-3">
          서문 + 10개 챕터 + 보너스 5개 + 꼭 알아야 할 10가지
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-8">
        <p>
          이 가이드는 NIH, EPA, 학술 논문 및 Reddit 커뮤니티의 실제 경험을
          기반으로 작성되었습니다.
        </p>
        <p className="mt-2">
          의학적 조언을 대체하지 않습니다. 건강 문제가 있다면 전문가와
          상담하세요.
        </p>
        <p className="mt-4">
          <Link href="/" className="text-blue-500 hover:underline">
            ← 살아있는 정보책 전체 목록
          </Link>
        </p>
      </footer>
    </main>
  );
}
