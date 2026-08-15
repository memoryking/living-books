import Link from "next/link";

export const metadata = {
  title: "정리와 청소의 기술 | 살아있는 정보책",
  description: "서랍 하나부터 시작하는 살아있는 정리 가이드. 5분이면 충분합니다. 완벽하지 않아도 괜찮습니다.",
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

function ChapterPreview({ num, title, desc }: { num: number; title: string; desc: string }) {
  return (
    <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-3 mb-2">
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-500 text-white flex items-center justify-center font-bold text-sm">{num}</span>
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

export default function DeclutterCleanLanding() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/" className="text-sm text-gray-400 hover:text-blue-500 transition-colors">← 전체 목록으로</Link>
      </div>

      <header className="text-center mb-16">
        <span className="text-6xl mb-6 block">🧹</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          서랍 하나부터 시작하면
          <br /><span className="text-violet-600 dark:text-violet-400">인생이 바뀝니다</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">정리와 청소의 기술 — 5분이면 충분합니다</p>
        <p className="text-sm text-gray-400">(완벽하지 않아도 괜찮습니다. 진짜로.)</p>
      </header>

      <div className="text-center mb-16 p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <p className="text-xl italic text-gray-600 dark:text-gray-400 mb-4">
          &quot;소매점에서 일할 때는 매장을 완벽하게 관리했는데<br />내 집은 정반대였다.&quot;
        </p>
        <p className="text-sm text-gray-400">— Reddit r/declutter, 1년간 매일 정리한 사람의 고백</p>
      </div>

      <h2 className="text-2xl font-bold mt-16 mb-6 text-center">이런 상태가 아닌가요?</h2>
      <div className="space-y-1 mb-12">
        <PainPoint>정리해야 하는 건 아는데 시작을 못 하겠다 — 압도감</PainPoint>
        <PainPoint>한 번 폭풍 청소하면 일주일 만에 원점 — 유지 불가</PainPoint>
        <PainPoint>완벽하게 다 해야 할 것 같아서 아무것도 못 함</PainPoint>
        <PainPoint>물건에 감정이 붙어서 버리지 못한다</PainPoint>
        <PainPoint>같이 사는 사람이 안 따라와준다</PainPoint>
        <PainPoint>집이 어지러우면 우울해지고, 우울하면 정리를 못 하는 악순환</PainPoint>
      </div>

      <div className="p-8 rounded-2xl bg-violet-50 dark:bg-violet-950 border border-violet-200 dark:border-violet-800 mb-16">
        <h2 className="text-2xl font-bold mb-4 text-center">Reddit에서 발견한 진짜 답</h2>
        <div className="space-y-2">
          <Benefit>서랍 하나, 3cm x 3cm부터 시작하면 뇌가 깨어난다</Benefit>
          <Benefit>5분 타이머 하나가 압도감을 이긴다</Benefit>
          <Benefit>매일 밤 주방 리셋 = 깨끗한 아침 = 하루가 바뀜</Benefit>
          <Benefit>&quot;내려놓지 말고 치워라&quot; — 이 한 문장이 시스템의 핵심</Benefit>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-16 mb-6 text-center">당신이 경험할 변화</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800">
          <h3 className="font-bold mb-3 text-red-600 dark:text-red-400">Before</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>😰 시작을 못 해서 자책</li>
            <li>😰 주말 대청소 후 금방 원점</li>
            <li>😰 물건 버리기가 감정적으로 힘듦</li>
            <li>😰 어지러운 집 = 우울한 마음</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <h3 className="font-bold mb-3 text-green-600 dark:text-green-400">After</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>😊 매일 5분, 작게 시작하는 시스템</li>
            <li>😊 매일 밤 리셋 → 매일 아침 깨끗</li>
            <li>😊 물건과 감정을 분리하는 기술</li>
            <li>😊 깨끗한 공간 = 맑은 머리</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-16 mb-6 text-center">10개 챕터 미리보기</h2>
      <div className="space-y-3 mb-16">
        <ChapterPreview num={1} title="왜 정리가 안 되는가" desc="의지력이 아니라 시스템의 문제. 결정 피로와 압도감의 과학." />
        <ChapterPreview num={2} title="서랍 하나부터" desc="3cm x 3cm도 괜찮다. 작은 성공이 도파민을 부른다." />
        <ChapterPreview num={3} title="'내려놓지 말고 치워라'" desc="모든 물건에 자리를 정하면 정리가 자동화된다." />
        <ChapterPreview num={4} title="5분 타이머의 마법" desc="압도감을 이기는 가장 쉬운 무기. 불완벽한 5분 > 완벽한 0분." />
        <ChapterPreview num={5} title="매일 밤 주방 리셋" desc="Reddit 1위 습관. 깨끗한 아침이 하루를 바꾼다." />
        <ChapterPreview num={6} title="감정적 짐 내려놓기" desc="물건 ≠ 추억. 사진으로 남기고 물건은 보내는 기술." />
        <ChapterPreview num={7} title="The Basket" desc="바구니 하나로 돌아다니며 정리. ADHD 친화 시스템." />
        <ChapterPreview num={8} title="방별 요일 배정" desc="매일 15분, 하나의 영역만. 주말이 자유로워진다." />
        <ChapterPreview num={9} title="가족/동거인과 함께" desc="15분 가족 타이머. 혼자 하지 마라." />
        <ChapterPreview num={10} title="정리는 끝나지 않는다" desc="그리고 그것은 괜찮다. 과정이 목적이다." />
      </div>

      <h2 className="text-2xl font-bold mt-16 mb-6 text-center">🎁 보너스 5개</h2>
      <div className="space-y-3 mb-16">
        <BonusItem title="5분 타이머 30일 챌린지" desc="매일 5분씩 30일 플랜. 체크리스트 포함." />
        <BonusItem title="주방 완전 리셋 가이드" desc="구역 설정 + 일일/주간 루틴 + 청소 순서." />
        <BonusItem title="옷장 정리 마스터 가이드" desc="곤마리 + 실전 팁 + 계절별 시스템." />
        <BonusItem title="ADHD/우울증을 위한 청소 가이드" desc="에너지 레벨별 대응 + 위기 프로토콜." />
        <BonusItem title="가족 참여 작전 가이드" desc="연령별 분담 + 배우자 설득 대화법." />
      </div>

      <div className="text-center mb-16">
        <Link href="/premium/declutter-clean/read" className="inline-block px-8 py-4 bg-violet-500 hover:bg-violet-600 text-white font-bold text-lg rounded-xl transition-colors shadow-lg">📖 본문 보기</Link>
        <p className="text-sm text-gray-400 mt-3">서문 + 10개 챕터 + 보너스 5개 + 꼭 알아야 할 10가지</p>
      </div>

      <footer className="text-center text-sm text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-8">
        <p>이 가이드는 Reddit r/declutter, r/CleaningTips, r/konmari, r/ADHD 커뮤니티의 실제 경험을 기반으로 작성되었습니다.</p>
        <p className="mt-4"><Link href="/" className="text-blue-500 hover:underline">← 살아있는 정보책 전체 목록</Link></p>
      </footer>
    </main>
  );
}
