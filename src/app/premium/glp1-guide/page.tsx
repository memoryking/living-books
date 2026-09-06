import Link from "next/link";
import BackToHome from "@/components/BackToHome";

export const metadata = {
  title: "약사가 알려주는 GLP-1 비만약 완전 가이드 | 살아있는 정보책",
  description:
    "오젬픽, 위고비, 마운자로 — 41만 명의 실제 경험 + 최신 의학 연구 기반. 효과, 부작용, 약 선택법, 근손실 예방, 중단 후 관리까지.",
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

export default function GLP1GuideLanding() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <BackToHome />

      {/* Hero */}
      <header className="text-center mb-16">
        <span className="text-6xl mb-6 block">&#128138;</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          오젬픽, 위고비, 마운자로 —
          <br />
          <span className="text-emerald-600 dark:text-emerald-400">
            약사가 정리해드립니다.
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          41만 명의 실제 복용 경험 + 최신 의학 연구 기반
          <br />
          GLP-1 비만약의 모든 것
        </p>
        <p className="text-sm text-gray-400">
          (효과, 부작용, 약 선택법, 근손실 예방, 중단 후 관리까지 한 권에)
        </p>
      </header>

      {/* Empathy Quote */}
      <div className="text-center mb-16 p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <p className="text-xl italic text-gray-600 dark:text-gray-400 mb-4">
          &quot;유튜브에서는 기적의 약이라고 하고,
          <br />
          뉴스에서는 위험하다고 하고.
          <br />
          도대체 뭘 믿어야 하죠?&quot;
        </p>
        <p className="text-sm text-gray-400">
          — 41만 명 이상이 Reddit에서 공유한 솔직한 GLP-1 경험
        </p>
      </div>

      {/* Pain Points */}
      <SectionTitle>지금 이런 상태 아닌가요?</SectionTitle>
      <div className="space-y-1 mb-12">
        <PainPoint>
          부작용이 무서워서 시작도 못 하겠다
        </PainPoint>
        <PainPoint>
          이미 복용 중인데, 이 메스꺼움이 정상인 건지 불안하다
        </PainPoint>
        <PainPoint>
          마운자로가 낫다는 사람, 오젬픽이 낫다는 사람... 뭐가 맞는 거야?
        </PainPoint>
        <PainPoint>
          근육이 빠진다는데, 단백질을 얼마나 먹어야 하는 거지?
        </PainPoint>
        <PainPoint>
          약 끊으면 다 되돌아온다면서요? 그럼 평생 맞아야 해요?
        </PainPoint>
        <PainPoint>
          한국에서는 어떻게 처방받아요? 보험 되나요?
        </PainPoint>
        <PainPoint>
          의사는 3분 진료에 자세히 안 알려주고, 인터넷 정보는 광고뿐
        </PainPoint>
      </div>

      {/* Failed Solutions */}
      <SectionTitle>
        &quot;해볼 건 다 해봤습니다&quot;
      </SectionTitle>
      <div className="space-y-1 mb-12">
        <FailedSolution
          title="유튜브/블로그 검색"
          reason="광고성 콘텐츠, 과장된 효과... 뭐가 진짜인지 모르겠음"
        />
        <FailedSolution
          title="온라인 커뮤니티"
          reason="'기적!' vs '응급실 갔다' — 나는 어디에 해당?"
        />
        <FailedSolution
          title="3분 진료"
          reason="의사에게 궁금한 것 10가지를 물어볼 시간이 없음"
        />
        <FailedSolution
          title="약국 문의"
          reason="바쁜 약국에서 30분 상담은 현실적으로 어려움"
        />
        <FailedSolution
          title="SNS 인플루언서"
          reason="후원 받고 하는 말인지 진짜 경험인지 구분 불가"
        />
      </div>

      {/* Discovery */}
      <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 mb-16">
        <h2 className="text-2xl font-bold mb-4 text-center">
          41만 개의 실제 경험에서 패턴이 보였습니다
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          약사로서 Reddit의 41만 개 GLP-1 게시글과 최신 의학 연구를 교차 검증하면서 발견한 것:
        </p>
        <p className="text-lg font-semibold text-center mb-6">
          대부분의 실패는 &quot;약이 안 듣는 것&quot;이 아니라
          <br />&quot;제대로 된 정보 없이 시작한 것&quot;이었습니다.
        </p>
        <div className="space-y-2">
          <Benefit>
            저용량에서 천천히 시작했다 — 급하게 올리면 부작용만 극대화
          </Benefit>
          <Benefit>
            단백질과 근력운동을 병행했다 — 약만 맞고 가만히 있으면 근육이 녹는다
          </Benefit>
          <Benefit>
            부작용을 &apos;관리&apos;했다, &apos;참지&apos; 않았다 — 증상별 대처법이 다르다
          </Benefit>
          <Benefit>
            중단 계획을 미리 세웠다 — 갑자기 끊으면 100% 반등
          </Benefit>
        </div>
        <div className="mt-6 p-4 rounded-lg bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800">
          <p className="text-sm text-center font-medium">
            가장 충격적인 사실:
            <br />
            <strong>
              &quot;비만은 의지력의 문제가 아니라 호르몬의 문제입니다.&quot;
            </strong>
            <br />
            GLP-1은 부족한 포만감 호르몬을 보충하는 것 — 혈압약과 같은 원리.
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
            <li>&#128560; 부작용이 무서워서 시작조차 못 하는 망설임</li>
            <li>&#128560; 이미 복용 중인데 이게 맞는 건지 불안</li>
            <li>&#128560; SNS 정보의 홍수 속에서 혼란</li>
            <li>&#128560; &quot;근육 빠진다&quot;, &quot;전부 돌아온다&quot;는 공포</li>
            <li>&#128560; 약사/의사에게 제대로 물어볼 기회가 없음</li>
            <li>&#128560; 한국에서의 현실적 접근법을 모름</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <h3 className="font-bold mb-3 text-green-600 dark:text-green-400">
            After
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>&#128522; 약의 원리를 이해하고 두려움 없이 결정</li>
            <li>&#128522; 부작용이 생겨도 당황하지 않고 대처</li>
            <li>&#128522; 나에게 맞는 약을 선택하는 명확한 기준</li>
            <li>&#128522; 근손실 없이 건강하게 감량하는 구체적 방법</li>
            <li>&#128522; &quot;약사에게 30분 상담받은 것 같은&quot; 명쾌함</li>
            <li>&#128522; 중단해도 반등하지 않는 장기 전략</li>
          </ul>
        </div>
      </div>

      {/* Chapter Preview */}
      <SectionTitle>10개 챕터 미리보기</SectionTitle>
      <div className="space-y-3 mb-16">
        <ChapterPreview
          num={1}
          title="GLP-1이 뭔가요? — 약사가 쉽게 설명하는 원리"
          desc="'비만은 의지력이 아니라 호르몬'이라는 말의 과학적 근거."
        />
        <ChapterPreview
          num={2}
          title="오젬픽 vs 마운자로 vs 위고비 — 뭐가 다른 건가요?"
          desc="GLP-1 단일 vs GLP-1+GIP 이중 작용의 차이. 효과, 부작용, 비용 비교."
        />
        <ChapterPreview
          num={3}
          title="시작하기 전에 — 검사, 준비, 마음가짐"
          desc="어떤 검사를 받아야 하는지, 다른 약과 같이 먹어도 되는지."
        />
        <ChapterPreview
          num={4}
          title="부작용 완전 정복 — 증상별 대처법"
          desc="메스꺼움, 변비, 피로, 탈모... 41만 명이 찾아낸 실전 해결법."
        />
        <ChapterPreview
          num={5}
          title="'Food Noise'의 소멸 — 뇌가 바뀌는 경험"
          desc="음식 잡념이 사라진다는 것의 의미. 섭식장애 위험 신호 구분법."
        />
        <ChapterPreview
          num={6}
          title="근손실을 막아라 — 단백질·운동 전략"
          desc="빠진 체중의 40%가 근육? 약사가 계산해주는 단백질 수치와 운동 처방."
        />
        <ChapterPreview
          num={7}
          title="위·식도가 약한 사람을 위한 가이드"
          desc="GERD, 위염, IBS가 있을 때의 복용 전략과 주의사항."
        />
        <ChapterPreview
          num={8}
          title="비용과 접근성 — 한국에서의 현실"
          desc="처방 경로, 보험 적용, 비용 비교, 경구용 GLP-1의 미래."
        />
        <ChapterPreview
          num={9}
          title="끊을 것인가, 유지할 것인가 — 장기 전략"
          desc="'평생 맞아야 하나요?'에 대한 과학적 답변. 3가지 전략."
        />
        <ChapterPreview
          num={10}
          title="약 너머의 것 — 습관이 약을 대체할 때"
          desc="GLP-1이 준 '시간'을 활용하는 법. 식습관·운동·감정 관리 정착."
        />
      </div>

      {/* Bonuses */}
      <SectionTitle>&#127873; 보너스 5개</SectionTitle>
      <div className="space-y-3 mb-16">
        <BonusItem
          title="부작용 119 대처 매뉴얼"
          desc="증상별 즉시 대처법 + '이 증상이면 병원 가세요' 경고 신호"
        />
        <BonusItem
          title="GLP-1 식단 가이드"
          desc="복용 중 먹으면 안 되는 것, 꼭 먹어야 하는 것, 단백질 식단 예시"
        />
        <BonusItem
          title="오젬픽 vs 마운자로 vs 위고비 비교표"
          desc="효과·부작용·비용·접근성 한 장 정리 + 의사결정 플로우차트"
        />
        <BonusItem
          title="약물 상호작용 체크리스트"
          desc="혈압약, 당뇨약, 갑상선약, 영양제와의 병용 주의사항"
        />
        <BonusItem
          title="중단 후 체중 유지 12주 로드맵"
          desc="점진적 감량, 습관 정착, 반등 방지 12주 플랜"
        />
      </div>

      {/* Trust */}
      <SectionTitle>왜 이 가이드를 신뢰할 수 있나요?</SectionTitle>
      <div className="space-y-1 mb-16 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <TrustItem icon="&#128104;&#8205;&#9877;&#65039;" text="현직 약사가 작성 — 유원소망약국 김약사, 약물 전문가의 관점" />
        <TrustItem icon="&#128202;" text="41만 명의 실제 경험 분석 — Reddit AI 분석 연구 + 직접 수집한 사용자 경험" />
        <TrustItem icon="&#128209;" text="최신 의학 연구 기반 — BMJ, NEJM, Harvard, Oxford 연구 교차 검증" />
        <TrustItem icon="&#127472;&#127479;" text="한국 상황 반영 — 국내 처방 현황, 오남용우려약 지정, 건강보험 정보" />
        <TrustItem icon="&#128138;" text="약사만이 알려줄 수 있는 것 — 약물 상호작용, 복용법, 영양제 병행 가이드" />
      </div>

      {/* CTA */}
      <div className="text-center mb-16">
        <p className="text-lg font-semibold mb-4">
          30분짜리 약사 상담을 한 권에 담았습니다.
        </p>
        <Link
          href="/premium/glp1-guide/read"
          className="inline-block px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg rounded-xl transition-colors shadow-lg"
        >
          &#128214; 본문 보기
        </Link>
        <p className="text-sm text-gray-400 mt-3">
          서문 + 10개 챕터 + 보너스 5개
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-8">
        <p>
          이 가이드는 Reddit r/loseit, r/Ozempic, r/Mounjaro 등 커뮤니티의 실제 경험과
          최신 의학 연구를 기반으로 작성되었습니다.
        </p>
        <p className="mt-2">
          의학적 조언을 대체하지 않습니다. 약물 복용은 반드시 의사 처방 후
          시작하세요.
        </p>
        <p className="mt-4">
          <Link href="/" className="text-emerald-500 hover:underline">
            &#8592; 살아있는 정보책 전체 목록
          </Link>
        </p>
      </footer>
    </main>
  );
}
