import Link from "next/link";
import BackToHome from "@/components/BackToHome";

export const metadata = {
  title: "약사가 알려주는 당뇨에 대한 모든 것 | 살아있는 정보책",
  description:
    "진단 후 24시간부터 90일 로드맵까지 — 약사가 정리한 당뇨 완전 가이드. A1C 관리법, 메트포르민 B12 보충, GLP-1의 진실, 식단 전략, 합병증 예방까지 Reddit 실제 경험과 대한당뇨병학회 진료지침을 바탕으로.",
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
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-700 text-white flex items-center justify-center font-bold text-sm">
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

export default function DiabetesGuideLanding() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <BackToHome />

      {/* Hero */}
      <header className="text-center mb-16">
        <span className="text-6xl mb-6 block">&#129656;</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          약사가 알려주는 당뇨에 대한 모든 것
          <br />
          <span className="text-rose-700 dark:text-rose-400">
            당뇨 진단을 받고 뭘 해야 할지 모르겠다면 — 여기서 시작하세요. 약사가 정리한 당뇨 완전 가이드.
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          진단 후 24시간부터 90일 로드맵까지, 약사의 관점으로 정리한 실전 가이드
        </p>
        <p className="text-sm text-gray-400">
          유원소망약국 약사
        </p>
      </header>

      {/* Empathy Quote */}
      <div className="text-center mb-16 p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <p className="text-xl italic text-gray-600 dark:text-gray-400 mb-4">
          &quot;세상이 무너진 것 같았다. 뭘 먹어야 하는지, 이 약은 왜 먹는지, 아무도 제대로 알려주지 않았다.&quot;
        </p>
        <p className="text-base font-semibold text-rose-700 dark:text-rose-300">
          당신만 그런 게 아닙니다.
        </p>
      </div>

      {/* Pain Points */}
      <SectionTitle>지금 이런 상태 아닌가요?</SectionTitle>
      <div className="space-y-1 mb-12">
        <PainPoint>
          진단 후 뭘 먹어야 할지 모름 — 식단 정보가 너무 많고 서로 상충해서 어디서부터 시작해야 할지 막막함
        </PainPoint>
        <PainPoint>
          약 부작용이 두려움 — 메트포르민을 처방받았지만 부작용이 무서워서 제대로 복용하지 못하고 있음
        </PainPoint>
        <PainPoint>
          A1C가 뭔지 모름 — 병원에서 수치를 알려주지만 그게 어떤 의미인지, 어떻게 관리해야 하는지 모름
        </PainPoint>
        <PainPoint>
          인터넷 정보가 다 다름 — 유튜브·블로그마다 다른 말을 하고 무엇을 믿어야 할지 혼란스러움
        </PainPoint>
        <PainPoint>
          합병증이 무서움 — 실명·투석·절단 같은 단어가 머릿속을 맴돌며 불안하지만 구체적으로 어떻게 예방할지 모름
        </PainPoint>
        <PainPoint>
          가족이 이해 못 함 — 당뇨를 대수롭지 않게 여기거나 지나치게 걱정해서 오히려 스트레스가 됨
        </PainPoint>
        <PainPoint>
          당뇨 관리가 너무 복잡함 — 혈당 측정, 식단, 운동, 약, 수면까지 한꺼번에 챙겨야 한다는 부담감이 너무 큼
        </PainPoint>
      </div>

      {/* Failed Solutions */}
      <SectionTitle>
        &quot;이미 이것저것 해봤습니다&quot;
      </SectionTitle>
      <div className="space-y-1 mb-12">
        <FailedSolution
          title="유튜브 검색"
          reason="광고·부정확 — 협찬 콘텐츠가 많고 잘못된 정보도 섞여 있어 오히려 혼란만 가중됨"
        />
        <FailedSolution
          title="지인 경험담"
          reason="체질마다 다름 — 같은 당뇨라도 개인별 상황이 달라 타인의 경험이 그대로 적용되지 않음"
        />
        <FailedSolution
          title="식단만 바꾸기"
          reason="약물 이해 없이 — 음식만 조절하고 약물의 작용 원리를 모른 채 복용하면 관리 효율이 떨어짐"
        />
        <FailedSolution
          title="두려워서 무시"
          reason="합병증 진행 — 진단을 부정하거나 관리를 미루면 조용히 합병증이 진행됨"
        />
        <FailedSolution
          title="모든 탄수화물 끊기"
          reason="지속 불가능 — 극단적인 식단 제한은 단기 효과는 있지만 장기적으로 유지하기 어렵고 영양 불균형을 초래함"
        />
      </div>

      {/* Discovery */}
      <div className="p-8 rounded-2xl bg-rose-50 dark:bg-rose-950 border border-rose-200 dark:border-rose-800 mb-16">
        <h2 className="text-2xl font-bold mb-4 text-center">
          당뇨 관리는 공포가 아니라 정보입니다
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          당뇨 진단을 받은 분들이 가장 힘든 것은 질병 자체가 아니라 &apos;정보의 부재&apos;입니다. A1C가 뭔지, 메트포르민이 왜 필요한지, 혈당을 어떻게 읽어야 하는지 — 5분 진료 시간에는 설명이 부족합니다. Reddit r/diabetes_t2 커뮤니티에서 수천 명의 실제 경험을 분석하고, 2025 대한당뇨병학회 진료지침과 대조해 약사의 관점으로 정리했습니다.
        </p>
        <p className="text-lg font-semibold text-center mb-6">
          A1C 14→5.6 실제 사례,
          <br />
          Eat to the Meter 전략, 메트포르민 B12 보충, GLP-1의 진실
        </p>
        <div className="space-y-2">
          <Benefit>
            진단 후 24시간 — 지금 당장 해야 할 것과 하지 말아야 할 것 정리
          </Benefit>
          <Benefit>
            Eat to the Meter 전략으로 내 몸에 맞는 식단을 스스로 찾는 법
          </Benefit>
          <Benefit>
            메트포르민 복용 시 B12 보충이 필요한 이유와 실천 방법
          </Benefit>
          <Benefit>
            GLP-1 계열 약물의 진실 — 유행인가, 게임 체인저인가
          </Benefit>
          <Benefit>
            90일 당뇨 관리 로드맵으로 막막함을 구체적 실행 계획으로 전환
          </Benefit>
        </div>
        <div className="mt-6 p-4 rounded-lg bg-rose-100 dark:bg-rose-900 border border-rose-300 dark:border-rose-700">
          <p className="text-sm text-center font-medium">
            가장 중요한 사실:
            <br />
            <strong>
              &quot;Reddit r/diabetes_t2에서 A1C 11.5→5.4를 달성한 사용자는 &apos;의사가 알려주지 않은 것을 이 커뮤니티에서 배웠다&apos;고 말합니다.&quot;
            </strong>
            <br />
            올바른 정보와 실천 전략이 당뇨 관리의 핵심입니다.
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
            <li>&#128560; A1C가 뭔지 모른 채 숫자만 보고 불안함</li>
            <li>&#128560; 메트포르민 부작용이 무서워 제대로 못 먹음</li>
            <li>&#128560; 탄수화물을 무조건 끊다가 지쳐버림</li>
            <li>&#128560; 합병증 검색하다가 더 무서워짐</li>
            <li>&#128560; 혈당 수치를 어떻게 해석해야 할지 모름</li>
            <li>&#128560; 뭘 먹어도 혈당에 영향을 줄까봐 불안함</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <h3 className="font-bold mb-3 text-green-600 dark:text-green-400">
            After
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>&#128522; A1C·공복혈당·식후혈당을 직접 해석할 수 있음</li>
            <li>&#128522; 약물 작용 원리를 알고 자신 있게 복용함</li>
            <li>&#128522; Eat to the Meter로 내 몸에 맞는 식단을 찾음</li>
            <li>&#128522; 합병증 예방법을 알고 차근차근 실천함</li>
            <li>&#128522; 혈당 측정 데이터를 관리 전략에 활용함</li>
            <li>&#128522; 90일 로드맵으로 당뇨 관리를 일상으로 만듦</li>
          </ul>
        </div>
      </div>

      {/* Chapter Preview */}
      <SectionTitle>10개 챕터 + 부록 미리보기</SectionTitle>
      <div className="space-y-3 mb-16">
        <ChapterPreview
          num={1}
          title="진단 후 24시간 ⭐"
          desc="당뇨 진단을 받은 그날, 무엇을 해야 하고 무엇을 하지 말아야 하는지. 패닉 상태에서 벗어나 첫 24시간을 올바르게 시작하는 체크리스트와 마음 준비."
        />
        <ChapterPreview
          num={2}
          title="당뇨 종류 ⭐"
          desc="1형·2형·LADA·임신성 당뇨의 차이와 각각의 관리 전략. 내가 어떤 유형인지 이해하면 치료 방향이 달라집니다. 오진이 잦은 LADA를 놓치지 않는 법."
        />
        <ChapterPreview
          num={3}
          title="혈당 측정 ⭐"
          desc="혈당계 사용법부터 공복·식전·식후 2시간 수치 해석까지. Eat to the Meter 전략으로 내 몸의 반응을 직접 측정하고 개인 맞춤 식단을 찾는 방법."
        />
        <ChapterPreview
          num={4}
          title="약물 가이드 ⭐"
          desc="메트포르민·SGLT-2 억제제·GLP-1·인슐린까지 — 각 약물의 작용 원리, 부작용, 주의사항. 메트포르민 장기 복용 시 B12 결핍 위험과 보충 방법."
        />
        <ChapterPreview
          num={5}
          title="식단 전략 ⭐"
          desc="저탄수화물·지중해식·간헐적 단식 — 과학적 근거 비교. 탄수화물을 무조건 끊지 않아도 되는 이유와 혈당 스파이크를 줄이는 실전 식사 순서."
        />
        <ChapterPreview
          num={6}
          title="운동"
          desc="걷기·근력 운동이 혈당에 미치는 영향과 최적 타이밍. 식후 10분 걷기의 효과, 근육량과 인슐린 저항성의 관계, 안전하게 운동 강도를 높이는 방법."
        />
        <ChapterPreview
          num={7}
          title="스트레스·수면"
          desc="코르티솔이 혈당을 올리는 메커니즘과 스트레스 관리 전략. 수면 부족과 혈당 조절의 상관관계, 수면의 질을 높여 A1C를 개선하는 실천법."
        />
        <ChapterPreview
          num={8}
          title="합병증 예방"
          desc="망막병증·신장병증·신경병증·심혈관 질환 — 합병증은 예방이 가능합니다. 정기 검진 체크리스트, 발 관리법, 혈압·콜레스테롤 동시 관리의 중요성."
        />
        <ChapterPreview
          num={9}
          title="일상생활"
          desc="술자리·명절 음식·여행·직장 생활에서의 혈당 관리 실전 팁. 가족에게 당뇨를 설명하는 법, 외식할 때 메뉴 선택 전략, 저혈당 대처 방법."
        />
        <ChapterPreview
          num={10}
          title="90일 로드맵 ⭐"
          desc="진단 0일차부터 90일차까지 — 주차별 목표와 체크포인트. 첫 달은 기초 확립, 두 번째 달은 최적화, 세 번째 달은 지속 가능한 루틴 완성."
        />
        <ChapterPreview
          num="부록"
          title="실행 키트 ⭐"
          desc="즉시 쓸 수 있는 혈당 기록 템플릿, 약물 복용 체크리스트, 식단 계획표, 합병증 예방 정기 검진 일정표, 90일 로드맵 플래너."
        />
      </div>

      {/* Trust */}
      <SectionTitle>왜 이 가이드를 신뢰할 수 있나요?</SectionTitle>
      <div className="space-y-1 mb-16 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <TrustItem icon="&#128202;" text="Reddit 당뇨 커뮤니티 분석 — r/diabetes_t2에서 A1C를 획기적으로 낮춘 수천 건의 실제 경험을 분석해 검증된 전략만 추려냈습니다" />
        <TrustItem icon="&#127472;&#127479;" text="한국 진료지침 반영 — 대한당뇨병학회 진료지침과 해외 커뮤니티 경험을 교차 검증해 한국인의 식습관과 의료 환경에 맞게 재구성했습니다" />
        <TrustItem icon="&#128138;" text="2025 대한당뇨병학회 최신 가이드라인 — GLP-1 계열 약물, SGLT-2 억제제 등 최신 치료 옵션을 약사의 관점에서 쉽게 설명합니다" />
        <TrustItem icon="&#128260;" text="계속 업데이트 — 새로운 연구 결과와 독자 피드백을 반영해 내용이 살아있습니다" />
      </div>

      {/* CTA */}
      <div className="text-center mb-16">
        <p className="text-lg font-semibold mb-4">
          당뇨 진단은 끝이 아닙니다. 올바른 정보로 시작하는 새로운 일상입니다.
        </p>
        <Link
          href="/premium/diabetes-guide/read"
          className="inline-block px-8 py-4 bg-rose-700 hover:bg-rose-800 text-white font-bold text-lg rounded-xl transition-colors shadow-lg"
        >
          &#129656; 본문 보기
        </Link>
        <p className="text-sm text-gray-400 mt-3">
          서문 + 10개 챕터 + 부록 실행 키트
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-8">
        <p>
          이 가이드는 Reddit 당뇨 커뮤니티의 실제 경험과 대한당뇨병학회 진료지침을 약사의 관점에서 정리한 실전 가이드입니다.
        </p>
        <p className="mt-2">
          개인의 성과를 보장하지 않습니다. 실행 결과는 개인의 노력과 환경에 따라 다를 수 있습니다. 의학적 판단은 반드시 담당 의사와 상의하세요.
        </p>
        <p className="mt-4">
          <Link href="/" className="text-rose-700 dark:text-rose-400 hover:underline">
            &#8592; 살아있는 정보책 전체 목록
          </Link>
        </p>
      </footer>
    </main>
  );
}
