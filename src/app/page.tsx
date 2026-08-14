import Link from "next/link";

const healthBooks = [
  {
    id: "home-medicine",
    emoji: "💊",
    title: "가정에서 꼭 필요한 상비약과 사용법",
    subtitle: "유원소망약국 김약사가 친절하게 알려드립니다",
    tags: ["건강", "상비약", "응급처치"],
    lastUpdated: "2026-08-05",
    version: 2,
  },
  {
    id: "pet-medicine",
    emoji: "🐾",
    title: "김약사가 알려주는 동물의약품",
    subtitle: "우리 아이 약, 약국에서도 살 수 있어요",
    tags: ["반려동물", "동물의약품", "강아지", "고양이"],
    lastUpdated: "2026-08-05",
    version: 1,
  },
];

const generalBooks = [
  {
    id: "relationships",
    emoji: "🤝",
    title: "인간관계를 좋게 하는 방법",
    subtitle: "듣고, 외우고, 실천하는 살아있는 가이드",
    tags: ["인간관계", "소통", "자기계발"],
    lastUpdated: "2026-08-13",
    version: 1,
  },
];

const premiumBooks = [
  {
    id: "diet-secrets",
    emoji: "🏋️",
    title: "다이어트 서바이벌 시스템",
    subtitle: "1,673명의 실패와 성공에서 뽑아낸 생존 가이드",
    tags: ["다이어트", "체중감량", "습관"],
    lastUpdated: "2026-08-15",
    version: 1,
  },
  {
    id: "endocrine-disruptors",
    emoji: "🧪",
    title: "생활 속 환경호르몬과 질병",
    subtitle: "BPA Free의 함정부터 PFAS, 미세플라스틱까지 — 과학 기반 실천 가이드",
    tags: ["환경호르몬", "건강", "미세플라스틱", "PFAS"],
    lastUpdated: "2026-08-15",
    version: 1,
  },
];

function BookCard({
  book,
  basePath,
}: {
  book: (typeof healthBooks)[number];
  basePath: string;
}) {
  return (
    <Link
      href={`${basePath}/${book.id}`}
      className="block p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg transition-all"
    >
      <div className="flex items-start gap-4">
        <span className="text-4xl">{book.emoji}</span>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-1">{book.title}</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-3">
            {book.subtitle}
          </p>
          <div className="flex items-center gap-3 text-sm text-gray-400 flex-wrap">
            <span>v{book.version}</span>
            <span>|</span>
            <span>최종 업데이트: {book.lastUpdated}</span>
            <span>|</span>
            <div className="flex gap-1.5 flex-wrap">
              {book.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <span className="text-gray-300 dark:text-gray-600 text-2xl">
          &#8250;
        </span>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">살아있는 정보책</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-2">
          유원소망약국 김약사
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          교과서적인 딱딱한 정보가 아닌,
          <br />
          사람들이 <strong>진짜 궁금해하는 것들</strong>에 대한 시원한 답변.
          <br />
          커뮤니티의 생생한 경험 + 전문가 검증 = 살아있는 정보.
        </p>
      </header>

      {/* 김약사가 알려주는 건강정보 */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6 border-b pb-3">
          <span className="text-2xl">💊</span>
          <h2 className="text-2xl font-semibold">
            김약사가 알려주는 건강정보
          </h2>
        </div>
        <div className="grid gap-6">
          {healthBooks.map((book) => (
            <BookCard key={book.id} book={book} basePath="/books" />
          ))}
        </div>
      </section>

      {/* 살아있는 실천 가이드 */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6 border-b pb-3">
          <span className="text-2xl">📖</span>
          <h2 className="text-2xl font-semibold">살아있는 실천 가이드</h2>
          <span className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
            NEW
          </span>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
          단순한 정보 전달이 아닌, 듣고 → 외우고 → 실천하고 → 기록하는 책.
          계속 업데이트됩니다.
        </p>
        <div className="grid gap-6">
          {generalBooks.map((book) => (
            <BookCard key={book.id} book={book} basePath="/guides" />
          ))}
        </div>
      </section>

      {/* 프리미엄 가이드 */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6 border-b pb-3">
          <span className="text-2xl">🔥</span>
          <h2 className="text-2xl font-semibold">프리미엄 가이드</h2>
          <span className="text-xs px-2 py-1 rounded-full bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-300">
            NEW
          </span>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
          Reddit 커뮤니티 리서치 기반. 상세페이지 → 본문보기 구조의 깊이 있는
          가이드.
        </p>
        <div className="grid gap-6">
          {premiumBooks.map((book) => (
            <BookCard key={book.id} book={book} basePath="/premium" />
          ))}
        </div>
      </section>

      <footer className="mt-20 text-center text-sm text-gray-400">
        <p>
          이 정보책은 레딧, 스레드, 네이버 블로그, 유튜브 등 커뮤니티의 실제
          질문과 경험을 기반으로 작성되었으며, 전문가 자료로 교차
          검증되었습니다.
        </p>
        <p className="mt-2">
          의약품 관련 내용은 참고용이며, 정확한 진단과 처방은 의사·약사와
          상담하세요.
        </p>
      </footer>
    </main>
  );
}
