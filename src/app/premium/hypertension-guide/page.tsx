import Link from "next/link";
import BackToHome from "@/components/BackToHome";

export const metadata = {
  title: "약사가 알려주는 혈압에 대한 모든 것 | 살아있는 정보책",
  description:
    "5대 혈압약 완전 비교·DASH 식단·합병증 예방·90일 혈압 관리 로드맵 — 약사가 정리한 고혈압 완전 가이드. 대한고혈압학회 가이드라인 기반, Reddit 실제 경험 분석.",
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
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-700 text-white flex items-center justify-center font-bold text-sm">
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

export default function HypertensionGuideLanding() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <BackToHome />

      {/* Hero */}
      <header className="text-center mb-16">
        <span className="text-6xl mb-6 block">&#129729;</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          약사가 알려주는 혈압에 대한 모든 것
          <br />
          <span className="text-red-700 dark:text-red-400">
            혈압약 처방받고 막막하다면 — 여기서 시작하세요. 약사가 정리한 혈압 완전 가이드.
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          5대 약물 비교·DASH 식단·합병증 예방·90일 혈압 관리 로드맵
        </p>
        <p className="text-sm text-gray-400">
          유원소망약국 약사
        </p>
      </header>

      {/* Empathy Quote */}
      <div className="text-center mb-16 p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <p className="text-xl italic text-gray-600 dark:text-gray-400 mb-4">
          &quot;혈압약 한번 먹으면 평생 먹어야 한다면서요? 진짜 끊을 수 없는 건가요?&quot;
        </p>
        <p className="text-base font-semibold text-red-700 dark:text-red-300">
          약국에서 가장 많이 듣는 질문입니다.
        </p>
      </div>

      {/* Pain Points */}
      <SectionTitle>지금 이런 상태 아닌가요?</SectionTitle>
      <div className="space-y-1 mb-12">
        <PainPoint>
          혈압약 부작용이 무서움 — 처방받은 약의 부작용을 검색하고 겁이 나서 먹지 않고 있음
        </PainPoint>
        <PainPoint>
          내가 먹는 약이 뭔지 모름 — 처방전에 적힌 약 이름이 생소하고 왜 이 약인지 이해 안 됨
        </PainPoint>
        <PainPoint>
          짜게 먹으면 안 된다는데 뭘 먹어야 할지 모름 — 나트륨을 줄이라는데 구체적 방법을 모름
        </PainPoint>
        <PainPoint>
          집에서 혈압을 재면 매번 달라 혼란스러움 — 어떤 숫자가 맞는 건지 모르겠음
        </PainPoint>
        <PainPoint>
          합병증이 두려움 — 뇌졸중·심근경색이라는 단어가 머릿속을 맴돌지만 구체적 예방법을 모름
        </PainPoint>
        <PainPoint>
          옆집 아주머니가 약 끊어도 괜찮다고 함 — 주변의 잘못된 정보에 흔들리고 있음
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
          title="지인 경험담"
          reason="체질마다 다름 — 같은 고혈압이라도 원인과 합병 질환이 다르면 약과 전략이 달라야 함"
        />
        <FailedSolution
          title="민간요법 시도"
          reason="근거 부족 — 양파즙·계피 등이 혈압약을 대체할 수 없으며 약 중단은 위험함"
        />
        <FailedSolution
          title="무조건 싱겁게"
          reason="지속 불가능 — 극단적인 저염식은 오래 유지하기 어렵고 올바른 방법이 따로 있음"
        />
        <FailedSolution
          title="두려워서 무시"
          reason="합병증 진행 — 증상이 없다고 방치하면 혈관 손상이 조용히 진행됨"
        />
      </div>

      {/* Discovery */}
      <div className="p-8 rounded-2xl bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 mb-16">
        <h2 className="text-2xl font-bold mb-4 text-center">
          혈압 관리는 공포가 아니라 시스템입니다
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          대한민국 고혈압 환자 1,200만 명. 성인 3명 중 1명이 고혈압이지만 절반 이상이 제대로 관리되지 않고 있습니다. 그 이유는 질병이 어려워서가 아니라, 정확한 정보가 부족하기 때문입니다. 대한고혈압학회 가이드라인과 Reddit 고혈압 커뮤니티의 실제 경험을 약사의 관점으로 교차 검증해 정리했습니다.
        </p>
        <p className="text-lg font-semibold text-center mb-6">
          5대 약물 완전 비교,
          <br />
          DASH 식단, 합병증 예방, 90일 로드맵
        </p>
        <div className="space-y-2">
          <Benefit>
            ARB·ACE·CCB·이뇨제·베타차단제 — 내가 먹는 약의 원리와 부작용을 쉽게 이해
          </Benefit>
          <Benefit>
            DASH 식단으로 수축기 혈압 8~14mmHg 감소 — 약 한 알의 효과에 버금가는 식단 전략
          </Benefit>
          <Benefit>
            올바른 가정혈압 측정법 7단계로 정확한 수치를 얻는 방법
          </Benefit>
          <Benefit>
            뇌졸중·심근경색·신부전 — 합병증 경고 증상과 예방 체크리스트
          </Benefit>
          <Benefit>
            90일 혈압 관리 로드맵으로 지식을 일상 습관으로 전환
          </Benefit>
        </div>
        <div className="mt-6 p-4 rounded-lg bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700">
          <p className="text-sm text-center font-medium">
            가장 중요한 사실:
            <br />
            <strong>
              &quot;고혈압은 &apos;소리 없는 살인자&apos;입니다. 증상이 없다고 괜찮은 게 아닙니다. 관리하면 합병증은 예방할 수 있습니다.&quot;
            </strong>
            <br />
            올바른 정보와 실천이 혈압 관리의 핵심입니다.
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
            <li>&#128560; 혈압약 부작용이 무서워서 약을 안 먹음</li>
            <li>&#128560; 내가 먹는 약이 뭔지, 왜 이 약인지 모름</li>
            <li>&#128560; 혈압을 재면 매번 달라 혼란스러움</li>
            <li>&#128560; 합병증이 두렵지만 뭘 해야 할지 모름</li>
            <li>&#128560; 짜게 먹지 말라는데 구체적 방법을 모름</li>
            <li>&#128560; 주변의 잘못된 정보에 흔들리고 있음</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <h3 className="font-bold mb-3 text-green-600 dark:text-green-400">
            After
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>&#128522; 5대 약물 원리를 알고 의사와 자신 있게 대화</li>
            <li>&#128522; 약의 부작용이 왜 생기는지 이해하고 대처 가능</li>
            <li>&#128522; 올바른 측정법으로 정확한 가정혈압 기록</li>
            <li>&#128522; 합병증 예방 체크리스트로 정기 검진 실천</li>
            <li>&#128522; DASH 식단으로 나트륨을 구체적으로 줄이는 중</li>
            <li>&#128522; 90일 로드맵으로 혈압 관리를 일상으로 만듦</li>
          </ul>
        </div>
      </div>

      {/* Chapter Preview */}
      <SectionTitle>10개 챕터 + 부록 미리보기</SectionTitle>
      <div className="space-y-3 mb-16">
        <ChapterPreview
          num={1}
          title="혈압의 기초"
          desc="수축기·이완기 숫자의 의미, 정상·주의·고혈압 전단계·1기·2기 분류 기준, 맥압과 평균 동맥압의 의미. 내 혈압 숫자가 무엇을 말하는지 정확히 이해하는 첫걸음."
        />
        <ChapterPreview
          num={2}
          title="원인과 위험인자"
          desc="본태성(90~95%) vs 이차성(5~10%) 고혈압 구분, 유전·나이·나트륨·비만·스트레스 등 수정 가능한 위험인자와 불가능한 위험인자. 이차성 고혈압을 의심해야 할 상황."
        />
        <ChapterPreview
          num={3}
          title="혈압 측정의 기술 ⭐"
          desc="팔뚝형 vs 손목형 비교, 올바른 측정 자세 7단계, 백의고혈압·가면고혈압 구분법, 아침·저녁 2회 측정 루틴. 정확한 가정혈압이 병원 혈압보다 중요한 이유."
        />
        <ChapterPreview
          num={4}
          title="약물 완전 가이드 ⭐"
          desc="ARB·ACE 억제제·CCB·이뇨제·베타차단제 5대 계열 완전 비교. 각 약의 작용 원리, 장점, 핵심 부작용, 복합제의 이유. 내가 먹는 약의 모든 것을 약사가 설명."
        />
        <ChapterPreview
          num={5}
          title="DASH 식단 ⭐"
          desc="DASH 식단의 과학적 근거(수축기 8~14mmHg 감소), 한국 식단 적용법, 나트륨 줄이기 실전 전략, 칼륨·마그네슘·칼슘의 혈압 강하 효과. 약 한 알의 효과를 식단으로."
        />
        <ChapterPreview
          num={6}
          title="운동과 혈압"
          desc="유산소 운동으로 수축기 5~8mmHg 감소, 걷기·자전거·수영 비교, 근력 운동의 혈압 효과, 운동 금기 상황. 고혈압 환자가 안전하게 운동하는 가이드."
        />
        <ChapterPreview
          num={7}
          title="스트레스·수면·체중"
          desc="만성 스트레스와 코르티솔의 혈압 상승 메커니즘, 수면무호흡증과 고혈압의 관계, 체중 1kg 감소 시 혈압 1mmHg 감소. 약과 식단 외의 생활습관 관리."
        />
        <ChapterPreview
          num={8}
          title="합병증 ⭐"
          desc="뇌졸중 FAST 법칙, 심근경색 경고 증상, 만성 신장질환, 고혈압성 망막병증. 합병증은 예방 가능합니다 — 정기 검진 체크리스트와 경고 증상 대처법."
        />
        <ChapterPreview
          num={9}
          title="특수 상황"
          desc="임신 중 고혈압과 자간전증 위험 신호, 당뇨+고혈압 동시 관리, 70대 이상 고령자 목표 혈압, 저항성 고혈압 접근법. 특수 상황별 맞춤 관리 가이드."
        />
        <ChapterPreview
          num={10}
          title="90일 로드맵 ⭐"
          desc="Week 1~2 혈압 측정 습관화, Week 3~4 DASH 식단 전환, Week 5~6 운동 시작, Week 7~8 생활습관 최적화, Week 9~12 유지·미세 조정. 2주 단위로 하나씩 추가하는 실전 로드맵."
        />
        <ChapterPreview
          num="부록"
          title="실행 키트 ⭐"
          desc="혈압 기록표, 5대 혈압약 비교 카드, 나트륨 함량표, 응급 상황 대처 카드, DASH 식단 1주 플래너 — 즉시 사용 가능한 실전 도구."
        />
      </div>

      {/* Trust */}
      <SectionTitle>왜 이 가이드를 신뢰할 수 있나요?</SectionTitle>
      <div className="space-y-1 mb-16 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <TrustItem icon="&#128138;" text="약사가 직접 작성 — 20년 넘게 약국에서 고혈압 환자를 만나며 쌓은 현장 경험과 가이드라인 지식을 바탕으로 정리했습니다" />
        <TrustItem icon="&#128202;" text="대한고혈압학회 가이드라인 기반 — ESC 2024 유럽심장학회 가이드라인과 교차 검증한 과학적 근거만을 담았습니다" />
        <TrustItem icon="&#127472;&#127479;" text="한국인 맞춤 — 한국인의 식습관(나트륨 과다), 의료 환경, 약물 처방 패턴에 맞게 재구성했습니다" />
        <TrustItem icon="&#128260;" text="계속 업데이트 — 새로운 연구 결과와 독자 피드백을 반영해 내용이 살아있습니다" />
      </div>

      {/* CTA */}
      <div className="text-center mb-16">
        <p className="text-lg font-semibold mb-4">
          고혈압은 관리할 수 있습니다. 올바른 정보로 시작하세요.
        </p>
        <Link
          href="/premium/hypertension-guide/read"
          className="inline-block px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-bold text-lg rounded-xl transition-colors shadow-lg"
        >
          &#129729; 본문 보기
        </Link>
        <p className="text-sm text-gray-400 mt-3">
          서문 + 10개 챕터 + 부록 실행 키트
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-8">
        <p>
          이 가이드는 대한고혈압학회 가이드라인과 Reddit 고혈압 커뮤니티의 실제 경험을 약사의 관점에서 정리한 실전 가이드입니다.
        </p>
        <p className="mt-2">
          개인의 성과를 보장하지 않습니다. 실행 결과는 개인의 노력과 환경에 따라 다를 수 있습니다. 의학적 판단은 반드시 담당 의사와 상의하세요.
        </p>
        <p className="mt-4">
          <Link href="/" className="text-red-700 dark:text-red-400 hover:underline">
            &#8592; 살아있는 정보책 전체 목록
          </Link>
        </p>
      </footer>
    </main>
  );
}
