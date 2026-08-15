import Link from "next/link";
import BackToHome from "@/components/BackToHome";

export const metadata = {
  title: "다이어트 서바이벌 시스템 | 살아있는 정보책",
  description:
    "1,673명의 실패와 성공에서 뽑아낸 다이어트 생존 가이드. 의지력이 아닌 시스템으로 요요 없이 감량하세요.",
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold mt-16 mb-6 text-center">{children}</h2>
  );
}

function PainPoint({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 py-2">
      <span className="text-red-500 flex-shrink-0">❌</span>
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
      <span className="text-gray-400 flex-shrink-0">🚫</span>
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
      <span className="text-green-500 flex-shrink-0">✅</span>
      <p className="text-gray-700 dark:text-gray-300">{children}</p>
    </div>
  );
}

function ChapterPreview({
  num,
  title,
  desc,
  week,
}: {
  num: number;
  title: string;
  desc: string;
  week: string;
}) {
  return (
    <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-3 mb-2">
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">
          {num}
        </span>
        <h3 className="font-semibold">{title}</h3>
        <span className="ml-auto text-xs text-gray-400">{week}</span>
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

export default function DietSecretsLanding() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      {/* Back */}
      <BackToHome />

      {/* Hero */}
      <header className="text-center mb-16">
        <span className="text-6xl mb-6 block">🏋️</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          다이어트는 의지력이 아닙니다.
          <br />
          <span className="text-blue-600 dark:text-blue-400">
            시스템입니다.
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          요요 없이 진짜 빠지는 법: 1,673명의 실패와 성공에서 뽑아낸
          <br />
          다이어트 생존 가이드
        </p>
        <p className="text-sm text-gray-400">
          (이미 수십 번 시도하고 포기했어도 괜찮습니다)
        </p>
      </header>

      {/* Empathy Quote */}
      <div className="text-center mb-16 p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <p className="text-xl italic text-gray-600 dark:text-gray-400 mb-4">
          &quot;거울로는 몰랐어요.
          <br />
          사진을 보고 나서야 알았죠.
          <br />
          &apos;이게... 나?&apos;&quot;
        </p>
        <p className="text-sm text-gray-400">
          — Reddit r/loseit, 1,673명이 공감한 이야기
        </p>
      </div>

      {/* Pain Points */}
      <SectionTitle>지금 이런 상태가 아닌가요?</SectionTitle>
      <div className="space-y-1 mb-12">
        <PainPoint>3주 차에 항상 무너진다 — 의지력이 바닥나는 그 시점</PainPoint>
        <PainPoint>
          빠지면 다시 찐다 — 요요의 끝없는 반복
        </PainPoint>
        <PainPoint>
          &quot;나는 왜 이렇게 의지가 약하지?&quot; — 자기 비난의 늪
        </PainPoint>
        <PainPoint>먹고 싶은 것 포기의 고통 — 다이어트 = 고문</PainPoint>
        <PainPoint>
          회식, 모임에서 혼자 샐러드 — 사회적 스트레스
        </PainPoint>
        <PainPoint>
          정보는 넘치는데 뭘 해야 할지 모르겠다 — 분석 마비
        </PainPoint>
        <PainPoint>
          체중계 숫자에 하루가 좌우된다 — 감정 롤러코스터
        </PainPoint>
      </div>

      {/* Failed Solutions */}
      <SectionTitle>
        &quot;전문가가 하라는 건 다 해봤습니다&quot;
      </SectionTitle>
      <div className="space-y-1 mb-12">
        <FailedSolution
          title="극단적 칼로리 제한"
          reason="너무 배고파서 3주 만에 폭식"
        />
        <FailedSolution
          title="노카브/키토"
          reason="빠르게 빠지지만 탄수화물 한 입에 전부 복귀"
        />
        <FailedSolution
          title="운동만으로 감량"
          reason="운동 후 보상 심리로 더 먹음"
        />
        <FailedSolution
          title="유행 다이어트"
          reason="코코넛 오일, 해독주스... 다 해봄"
        />
        <FailedSolution
          title="올 오어 낫씽"
          reason="한 번 실수 → 오늘 망했어 → 폭식"
        />
      </div>

      {/* Discovery */}
      <div className="p-8 rounded-2xl bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 mb-16">
        <h2 className="text-2xl font-bold mb-4 text-center">
          그런데, 뭔가 다른 걸 발견했습니다
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Reddit의 1,673개 댓글을 분석하면서 충격적인 패턴이 보였습니다:
        </p>
        <p className="text-lg font-semibold text-center mb-6">
          실제로 성공한 사람들은 &quot;다이어트&quot;를 하지 않았습니다.
        </p>
        <div className="space-y-2">
          <Benefit>
            의지력이 아니라 환경을 바꿨다 — 유혹을 제거하고 시스템을 만들었다
          </Benefit>
          <Benefit>
            극단적 제한 대신 현실적 규칙을 세웠다 — 지킬 수 있는 선
          </Benefit>
          <Benefit>
            한 끼 실수를 한 달의 실패로 만들지 않았다 — Fail Fast
          </Benefit>
          <Benefit>
            체중계보다 습관을 추적했다 — 숫자가 아니라 시스템에 집중
          </Benefit>
        </div>
        <div className="mt-6 p-4 rounded-lg bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800">
          <p className="text-sm text-center font-medium">
            가장 무서운 사실: 대부분의 다이어트 실패는 의지력의 문제가 아닙니다.
            <br />
            <strong>
              뇌가 정상 작동한 것입니다.
            </strong>{" "}
            극단적 제한은 생존 본능과 싸우는 것입니다.
          </p>
        </div>
      </div>

      {/* Before / After */}
      <SectionTitle>당신이 경험할 변화</SectionTitle>
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800">
          <h3 className="font-bold mb-3 text-red-600 dark:text-red-400">
            Before
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>😰 3주마다 포기하고 자책하는 반복</li>
            <li>😰 체중계 숫자에 하루 기분이 좌우됨</li>
            <li>😰 &quot;나는 의지력이 약한 사람&quot;이라는 자기 낙인</li>
            <li>😰 먹고 싶은 것 포기 = 고문</li>
            <li>😰 정보는 많은데 뭘 해야 할지 모르겠음</li>
            <li>😰 빠지면 다시 찌는 요요의 굴레</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <h3 className="font-bold mb-3 text-green-600 dark:text-green-400">
            After
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>😊 의지력이 아닌 시스템으로 자동 작동</li>
            <li>😊 체중계가 아닌 습관을 추적하는 평온함</li>
            <li>😊 &quot;나는 시스템이 있는 사람&quot;이라는 자신감</li>
            <li>😊 먹는 즐거움을 유지하면서 감량</li>
            <li>😊 딱 10가지만 기억하면 되는 명확함</li>
            <li>😊 감량 → 유지 → 새로운 나의 안착</li>
          </ul>
        </div>
      </div>

      {/* Chapter Preview */}
      <SectionTitle>10개 챕터 미리보기</SectionTitle>
      <div className="space-y-3 mb-16">
        <ChapterPreview
          num={1}
          title="다이어트의 진짜 적은 음식이 아니다"
          desc="뇌의 생존 본능을 이해하면 극단적 제한이 왜 실패하는지 납득됩니다."
          week="1주차"
        />
        <ChapterPreview
          num={2}
          title="CICO — 유일한 법칙, 하지만 함정이 있다"
          desc="칼로리 적자가 왜 유일한 법칙인지, 왜 대부분이 잘못 적용하는지."
          week="1주차"
        />
        <ChapterPreview
          num={3}
          title="환경을 바꾸면 의지력이 필요 없다"
          desc="냉장고, 접시 크기, 동선 — 환경 설계로 자동 감량하는 구조."
          week="2주차"
        />
        <ChapterPreview
          num={4}
          title="감정적 식사 — '왜 먹는지'가 더 중요하다"
          desc="스트레스, 지루함, 보상 심리 — 감정과 음식을 분리하는 기술."
          week="2주차"
        />
        <ChapterPreview
          num={5}
          title="3주 벽 — 모든 다이어트가 무너지는 그 시점"
          desc="의지력이 바닥나는 정확한 시점과 넘는 구체적 전략."
          week="3주차"
        />
        <ChapterPreview
          num={6}
          title="Fail Fast — 한 끼 실수를 30초에 리셋"
          desc="완벽주의가 다이어트를 죽인다. 실수 후 복구 속도가 전부."
          week="3주차"
        />
        <ChapterPreview
          num={7}
          title="즐기면서 빠지는 식단 — 현실적 규칙"
          desc="먹는 즐거움을 포기하지 않는 80/20 규칙과 실전 식단."
          week="4주차"
        />
        <ChapterPreview
          num={8}
          title="움직임 — 운동이 아니라 생활 속 활동"
          desc="아침 산책이 인생을 바꿨다는 레딧 유저들의 비밀."
          week="5주차"
        />
        <ChapterPreview
          num={9}
          title="체중계를 넘어서 — 진짜 측정해야 할 것들"
          desc="체중계 숫자에 휘둘리지 않는 법. 비체중 승리 기록하기."
          week="6주차"
        />
        <ChapterPreview
          num={10}
          title="유지 모드 — 감량보다 중요한 것"
          desc="목표 도달 후가 진짜 시작. 새로운 체중을 안착시키는 전략."
          week="8주차~"
        />
      </div>

      {/* Bonuses */}
      <SectionTitle>🎁 보너스 5개</SectionTitle>
      <div className="space-y-3 mb-16">
        <BonusItem
          title="3주 벽 돌파 가이드"
          desc="모든 다이어트가 무너지는 그 시점을 넘는 7일 플랜"
        />
        <BonusItem
          title="감정적 식사 탈출 매뉴얼"
          desc="스트레스/지루함/보상 심리 식사를 멈추는 구체적 기법"
        />
        <BonusItem
          title="회식·모임 서바이벌 카드"
          desc="사회적 상황에서 다이어트 유지하는 실전 대화법과 메뉴 선택법"
        />
        <BonusItem
          title="주방 리셋 체크리스트"
          desc="환경 설계를 위한 냉장고·찬장 정리 + 필수 구매 리스트"
        />
        <BonusItem
          title="유지 모드 전환 가이드"
          desc="감량 후 요요 없이 새로운 체중을 안착시키는 12주 로드맵"
        />
      </div>

      {/* CTA */}
      <div className="text-center mb-16">
        <Link
          href="/premium/diet-secrets/read"
          className="inline-block px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-xl transition-colors shadow-lg"
        >
          📖 본문 보기
        </Link>
        <p className="text-sm text-gray-400 mt-3">
          서문 + 10개 챕터 + 꼭 알아야 할 10가지
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-8">
        <p>
          이 가이드는 Reddit r/loseit, r/nutrition 등 커뮤니티의 실제 경험과
          과학적 연구를 기반으로 작성되었습니다.
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
