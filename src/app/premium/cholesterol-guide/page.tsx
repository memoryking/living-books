import Link from "next/link";
import BackToHome from "@/components/BackToHome";

export const metadata = {
  title: "약사가 알려주는 고지혈증에 대한 모든 것 | 살아있는 정보책",
  description:
    "스타틴 6종 완전 비교·콜레스테롤 낮추는 식이요법·합병증 예방·90일 관리 로드맵 — 약사가 정리한 고지혈증 완전 가이드. 한국지질동맥경화학회 가이드라인 기반, Reddit 실제 경험 분석.",
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
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-700 text-white flex items-center justify-center font-bold text-sm">
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

export default function CholesterolGuideLanding() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <BackToHome />

      {/* Hero */}
      <header className="text-center mb-16">
        <span className="text-6xl mb-6 block">&#129516;</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          약사가 알려주는 고지혈증에 대한 모든 것
          <br />
          <span className="text-amber-700 dark:text-amber-400">
            콜레스테롤 약 처방받고 막막하다면 — 여기서 시작하세요. 약사가 정리한 완전 가이드.
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          스타틴 6종 비교·콜레스테롤 식이요법·합병증 예방·90일 관리 로드맵
        </p>
        <p className="text-sm text-gray-400">
          유원소망약국 약사
        </p>
      </header>

      {/* Empathy Quote */}
      <div className="text-center mb-16 p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <p className="text-xl italic text-gray-600 dark:text-gray-400 mb-4">
          &quot;약사님, 콜레스테롤 약 평생 먹어야 하나요?&quot;
        </p>
        <p className="text-base font-semibold text-amber-700 dark:text-amber-300">
          약국에서 가장 많이 듣는 질문입니다.
        </p>
      </div>

      {/* Pain Points */}
      <SectionTitle>지금 이런 상태 아닌가요?</SectionTitle>
      <div className="space-y-1 mb-12">
        <PainPoint>
          스타틴 부작용이 무서움 — 간이 망가진다, 근육이 녹는다는 글을 보고 약을 안 먹고 있음
        </PainPoint>
        <PainPoint>
          LDL, HDL, 중성지방이 뭔지 모름 — 건강검진 결과지의 숫자 4개가 다 생소함
        </PainPoint>
        <PainPoint>
          계란을 먹어도 되는지 안 되는지 헷갈림 — 인터넷마다 다른 말을 해서 혼란스러움
        </PainPoint>
        <PainPoint>
          콜레스테롤은 높은데 증상이 없어 방치 중 — 아프지 않으니 괜찮다고 생각함
        </PainPoint>
        <PainPoint>
          식이요법을 해야 하는데 뭘 먹고 뭘 줄여야 하는지 모름 — 막연히 기름진 것을 피해야 한다는 정도만 앎
        </PainPoint>
        <PainPoint>
          합병증이 두려움 — 동맥경화·심근경색이라는 단어가 무섭지만 구체적 예방법을 모름
        </PainPoint>
        <PainPoint>
          의사 진료가 3분이라 다 물어볼 수 없음 — 궁금한 것은 많은데 물어볼 시간이 부족함
        </PainPoint>
      </div>

      {/* Failed Solutions */}
      <SectionTitle>
        &quot;이미 이것저것 해봤습니다&quot;
      </SectionTitle>
      <div className="space-y-1 mb-12">
        <FailedSolution
          title="유튜브 검색"
          reason="광고·부정확 — 건강기능식품 협찬 콘텐츠가 섞여 있어 의학적 정확성을 보장할 수 없음"
        />
        <FailedSolution
          title="카톡 단체방 정보"
          reason="오해 — 계란 금지, 운동만 하면 약 불필요 등 잘못된 정보가 여전히 돌아다님"
        />
        <FailedSolution
          title="건강기능식품으로 대체"
          reason="근거 부족 — 홍국, 오메가3 건강식품은 스타틴의 LDL 감소 효과를 대체할 수 없음"
        />
        <FailedSolution
          title="무조건 기름 안 먹기"
          reason="역효과 — 좋은 지방(올리브오일, 견과류)까지 끊으면 오히려 HDL이 떨어짐"
        />
        <FailedSolution
          title="두려워서 무시"
          reason="합병증 진행 — 증상이 없다고 방치하면 동맥경화가 조용히 진행됨"
        />
      </div>

      {/* Discovery */}
      <div className="p-8 rounded-2xl bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 mb-16">
        <h2 className="text-2xl font-bold mb-4 text-center">
          콜레스테롤 관리는 공포가 아니라 시스템입니다
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          대한민국 성인의 40% 이상이 이상지질혈증을 갖고 있지만, 제대로 관리하는 사람은 30%에 불과합니다. 그 이유는 질병이 어려워서가 아니라, 정확한 정보가 부족하기 때문입니다. 한국지질동맥경화학회 가이드라인과 Reddit 콜레스테롤 커뮤니티의 실제 경험을 약사의 관점으로 교차 검증해 정리했습니다.
        </p>
        <p className="text-lg font-semibold text-center mb-6">
          스타틴 6종 완전 비교,
          <br />
          식이요법, 합병증 예방, 90일 로드맵
        </p>
        <div className="space-y-2">
          <Benefit>
            로수바스타틴·아토르바스타틴 등 스타틴 6종의 원리·부작용·복용법을 쉽게 이해
          </Benefit>
          <Benefit>
            포화지방 줄이기 + 수용성 식이섬유로 LDL 10~15% 감소 — 약의 효과를 극대화하는 식단 전략
          </Benefit>
          <Benefit>
            검사 결과지의 LDL·HDL·중성지방·총콜레스테롤 4가지 수치를 직접 읽고 판단하는 법
          </Benefit>
          <Benefit>
            동맥경화·심근경색·뇌졸중 — 합병증 진행 과정과 예방 체크리스트
          </Benefit>
          <Benefit>
            90일 콜레스테롤 관리 로드맵으로 지식을 일상 습관으로 전환
          </Benefit>
        </div>
        <div className="mt-6 p-4 rounded-lg bg-amber-100 dark:bg-amber-900 border border-amber-300 dark:border-amber-700">
          <p className="text-sm text-center font-medium">
            가장 중요한 사실:
            <br />
            <strong>
              &quot;콜레스테롤은 &apos;침묵의 살인자&apos;입니다. 증상이 없다고 괜찮은 게 아닙니다. 관리하면 합병증은 예방할 수 있습니다.&quot;
            </strong>
            <br />
            올바른 정보와 실천이 콜레스테롤 관리의 핵심입니다.
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
            <li>&#128560; 스타틴 부작용이 무서워서 약을 안 먹음</li>
            <li>&#128560; LDL, HDL, 중성지방 숫자가 뭔지 모름</li>
            <li>&#128560; 계란을 먹어야 하는지 말아야 하는지 혼란</li>
            <li>&#128560; 합병증이 두렵지만 뭘 해야 할지 모름</li>
            <li>&#128560; 포화지방이 뭔지, 뭘 줄여야 하는지 모름</li>
            <li>&#128560; 카톡 단체방의 잘못된 정보에 흔들리고 있음</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <h3 className="font-bold mb-3 text-green-600 dark:text-green-400">
            After
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>&#128522; 스타틴 6종의 원리를 알고 의사와 자신 있게 대화</li>
            <li>&#128522; 검사 결과지를 직접 읽고 위험 등급을 판단</li>
            <li>&#128522; 계란이 아니라 포화지방이 진짜 범인임을 이해</li>
            <li>&#128522; 합병증 예방 체크리스트로 정기 검진 실천</li>
            <li>&#128522; 식이요법으로 LDL을 10~15% 추가 감소시키는 중</li>
            <li>&#128522; 90일 로드맵으로 콜레스테롤 관리를 일상으로 만듦</li>
          </ul>
        </div>
      </div>

      {/* Chapter Preview */}
      <SectionTitle>10개 챕터 + 부록 미리보기</SectionTitle>
      <div className="space-y-3 mb-16">
        <ChapterPreview
          num={1}
          title="콜레스테롤의 진실"
          desc="콜레스테롤은 나쁜 물질이 아니라 생명 유지에 필수적인 물질. LDL·HDL·중성지방의 역할, 계란 논쟁의 결론, 한국인 이상지질혈증 현황(성인 40% 이상)."
        />
        <ChapterPreview
          num={2}
          title="검사 결과 읽는 법 ⭐"
          desc="4가지 핵심 수치 해석 기준, 심혈관 위험 등급별 LDL 목표(55~130mg/dL), 비HDL 콜레스테롤과 ApoB, 약물 치료 시작 결정 알고리즘."
        />
        <ChapterPreview
          num={3}
          title="스타틴 완전 가이드 ⭐"
          desc="6종 스타틴(로수바스타틴·아토르바스타틴·심바스타틴 등) 비교, 용량별 LDL 감소율, 부작용 팩트 체크(근육통·간수치·당뇨), 그레이프프루트 주의, 복용 시간."
        />
        <ChapterPreview
          num={4}
          title="스타틴 외 약물"
          desc="에제티미브(스타틴의 최고 파트너), PCSK9 억제제(극적 LDL 감소), 피브레이트(중성지방 전문), 처방 오메가3. 단계적 약물 치료 전략."
        />
        <ChapterPreview
          num={5}
          title="콜레스테롤 낮추는 식단 ⭐"
          desc="포화지방 줄이기가 1순위(삼겹살·버터·라면), 수용성 식이섬유로 LDL 5~10% 추가 감소, 올리브오일·견과류·생선으로 좋은 지방 섭취, 한국 식단 적용법."
        />
        <ChapterPreview
          num={6}
          title="운동과 콜레스테롤"
          desc="운동은 HDL 5~15% 상승, 중성지방 15~30% 감소에 가장 효과적. 주 120분 이상 유산소 운동 권장, 식후 걷기의 중성지방 효과, 유산소+근력 병행법."
        />
        <ChapterPreview
          num={7}
          title="체중·음주·스트레스"
          desc="내장지방과 중성지방의 관계, 체중 5% 감량 시 중성지방 15~20% 감소, 금연의 HDL 효과, 만성 스트레스와 코르티솔, 대사증후군 주의."
        />
        <ChapterPreview
          num={8}
          title="합병증 ⭐"
          desc="동맥경화 4단계 진행 과정(10대부터 시작), 플라크 파열과 급성 심근경색, 뇌졸중 FAST 법칙, 말초동맥질환. 합병증은 예방 가능합니다."
        />
        <ChapterPreview
          num={9}
          title="특수 상황"
          desc="가족성 고콜레스테롤혈증(유전), 당뇨+고지혈증 동시 관리, 만성 신장병, 고령자, 임신 중 스타틴 절대 금기, 갑상선 기능과 콜레스테롤."
        />
        <ChapterPreview
          num={10}
          title="90일 로드맵 ⭐"
          desc="Week 1~2 현재 상태 파악, Week 3~4 식이요법 시작, Week 5~6 운동 시작, Week 7~8 생활습관 최적화, Week 9~12 재검사+약물 최적화. 주차별 실행 계획."
        />
        <ChapterPreview
          num="부록"
          title="실행 키트 ⭐"
          desc="지질 검사 기록표, 스타틴 비교 카드, 식이섬유 식품표, 오메가3 식품표, 포화지방 함량표, 연간 검사 체크리스트 — 즉시 사용 가능한 실전 도구."
        />
      </div>

      {/* Trust */}
      <SectionTitle>왜 이 가이드를 신뢰할 수 있나요?</SectionTitle>
      <div className="space-y-1 mb-16 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <TrustItem icon="&#128138;" text="약사가 직접 작성 — 20년 넘게 약국에서 고지혈증 환자를 만나며 쌓은 현장 경험과 가이드라인 지식을 바탕으로 정리했습니다" />
        <TrustItem icon="&#128202;" text="한국지질동맥경화학회 가이드라인 기반 — 국제 학술지와 교차 검증한 과학적 근거만을 담았습니다" />
        <TrustItem icon="&#127472;&#127479;" text="한국인 맞춤 — 삼겹살·라면·소주 등 한국인의 실제 식생활과 약물 처방 패턴에 맞게 재구성했습니다" />
        <TrustItem icon="&#128260;" text="계속 업데이트 — 새로운 연구 결과와 독자 피드백을 반영해 내용이 살아있습니다" />
      </div>

      {/* CTA */}
      <div className="text-center mb-16">
        <p className="text-lg font-semibold mb-4">
          콜레스테롤은 관리할 수 있습니다. 올바른 정보로 시작하세요.
        </p>
        <Link
          href="/premium/cholesterol-guide/read"
          className="inline-block px-8 py-4 bg-amber-700 hover:bg-amber-800 text-white font-bold text-lg rounded-xl transition-colors shadow-lg"
        >
          &#129516; 본문 보기
        </Link>
        <p className="text-sm text-gray-400 mt-3">
          서문 + 10개 챕터 + 부록 실행 키트
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-8">
        <p>
          이 가이드는 한국지질동맥경화학회 가이드라인과 Reddit 콜레스테롤 커뮤니티의 실제 경험을 약사의 관점에서 정리한 실전 가이드입니다.
        </p>
        <p className="mt-2">
          개인의 성과를 보장하지 않습니다. 실행 결과는 개인의 노력과 환경에 따라 다를 수 있습니다. 의학적 판단은 반드시 담당 의사와 상의하세요.
        </p>
        <p className="mt-4">
          <Link href="/" className="text-amber-700 dark:text-amber-400 hover:underline">
            &#8592; 살아있는 정보책 전체 목록
          </Link>
        </p>
      </footer>
    </main>
  );
}
