import Link from "next/link";

const books = [
  {
    id: "home-medicine",
    emoji: "💊",
    title: "가정에서 꼭 필요한 상비약과 사용법",
    subtitle: "밤에 약국 문 닫았을 때 당황하지 않는 법",
    tags: ["건강", "상비약", "응급처치"],
    lastUpdated: "2026-08-05",
    version: 1,
  },
];

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">살아있는 정보책</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          교과서적인 딱딱한 정보가 아닌,<br />
          사람들이 <strong>진짜 궁금해하는 것들</strong>에 대한 시원한 답변.<br />
          커뮤니티의 생생한 경험 + 전문가 검증 = 살아있는 정보.
        </p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-6 border-b pb-3">전자책 목록</h2>
        <div className="grid gap-6">
          {books.map((book) => (
            <Link
              key={book.id}
              href={`/books/${book.id}`}
              className="block p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">{book.emoji}</span>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{book.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-3">{book.subtitle}</p>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <span>v{book.version}</span>
                    <span>|</span>
                    <span>최종 업데이트: {book.lastUpdated}</span>
                    <span>|</span>
                    <div className="flex gap-1.5">
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
                <span className="text-gray-300 dark:text-gray-600 text-2xl">&#8250;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="mt-20 text-center text-sm text-gray-400">
        <p>
          이 정보책은 레딧, 스레드, 네이버 블로그, 유튜브 등 커뮤니티의 실제 질문과 경험을 기반으로 작성되었으며,
          전문가 자료로 교차 검증되었습니다.
        </p>
        <p className="mt-2">의약품 관련 내용은 참고용이며, 정확한 진단과 처방은 의사·약사와 상담하세요.</p>
      </footer>
    </main>
  );
}
