import Link from "next/link";
import BackToHome from "@/components/BackToHome";

export const metadata = {
  title: "약사가 알려주는 상비약 완전 가이드 | 살아있는 정보책",
  description:
    "해열제·감기약·소화제·상처약·알레르기약·영양제 — 50+ 약품 분석. 타이레놀 용량, 감기약 성분 겹침 확인, 후시딘 vs 마데카솔, 어린이 체중별 해열제 용량, 상비약 체크리스트.",
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
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-sm">
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

export default function OtcMedicineGuideLanding() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <BackToHome />

      {/* Hero */}
      <header className="text-center mb-16">
        <span className="text-6xl mb-6 block">&#128138;</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          약사가 알려주는 상비약 완전 가이드
          <br />
          <span className="text-emerald-700 dark:text-emerald-400">
            해열제·감기약·소화제·상처약·알레르기약·영양제 — 50+ 약품 분석
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          약은 올바르게 쓰면 고마운 존재이지만, 잘못 쓰면 독이 됩니다
        </p>
        <p className="text-sm text-gray-400">
          비법연구소
        </p>
      </header>

      {/* Empathy Quote */}
      <div className="text-center mb-16 p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <p className="text-xl italic text-gray-600 dark:text-gray-400 mb-4">
          &quot;이거 먹어도 되나요?&quot;
        </p>
        <p className="text-base font-semibold text-emerald-700 dark:text-emerald-300">
          약국에서 가장 많이 받는 질문에, 약사가 한 권으로 답합니다.
        </p>
      </div>

      {/* Pain Points */}
      <SectionTitle>지금 이런 상태 아닌가요?</SectionTitle>
      <div className="space-y-1 mb-12">
        <PainPoint>
          타이레놀 몇 알 먹어야 하는지 — 500mg 2알? 650mg 1알? 서방정은 쪼개도 되나?
        </PainPoint>
        <PainPoint>
          감기약 겹쳐 먹으면 안 되는지 — 판콜에이 먹으면서 타이레놀을 또 먹어도 되나?
        </PainPoint>
        <PainPoint>
          소화제 매일 먹어도 되는지 — 속이 더부룩할 때마다 소화제를 습관적으로 복용
        </PainPoint>
        <PainPoint>
          후시딘 마데카솔 차이가 뭔지 — 상처에 아무거나 바르고 있진 않은지
        </PainPoint>
        <PainPoint>
          쌍화탕이 진짜 효과가 있는지 — 피로할 때마다 편의점 쌍화탕을 사 마심
        </PainPoint>
        <PainPoint>
          어린이 약 용량을 모름 — 해열제를 나이 기준으로 대충 먹이고 있음
        </PainPoint>
        <PainPoint>
          유효기간 지난 약 어떻게 하는지 — 약장에 몇 년 된 약이 쌓여 있음
        </PainPoint>
      </div>

      {/* Failed Solutions */}
      <SectionTitle>
        &quot;이미 이것저것 해봤습니다&quot;
      </SectionTitle>
      <div className="space-y-1 mb-12">
        <FailedSolution
          title="인터넷 검색"
          reason="정보가 파편화되어 있고, 한국 약 이름으로 안 나옴"
        />
        <FailedSolution
          title="유튜브 건강 채널"
          reason="과장 광고와 정확한 정보가 섞여 구별 어려움"
        />
        <FailedSolution
          title="약국에서 빠르게 질문"
          reason="대기 줄 뒤에서 3분 안에 모든 설명을 듣기 불가능"
        />
        <FailedSolution
          title="약 포장지 읽기"
          reason="전문 용어 가득, 실제 상황별 판단 기준 없음"
        />
        <FailedSolution
          title="외국 건강 서적"
          reason="한국에서 살 수 없는 약 이름으로 설명"
        />
      </div>

      {/* Discovery */}
      <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 mb-16">
        <h2 className="text-2xl font-bold mb-4 text-center">
          한국 약국에서 실제로 살 수 있는 약 — 구체적으로 정리했습니다
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          시중에 건강 정보는 넘쳐나지만 대부분 &apos;너무 일반적이거나&apos; &apos;한국 실정에 맞지 않습니다&apos;.
          이 가이드는 한국 약국에서 실제로 구입할 수 있는 약의 구체적인 이름, 용량, 주의사항을 모두 담았습니다.
          마치 약사가 옆에 앉아서 하나하나 설명해주는 것처럼 썼습니다.
        </p>
        <p className="text-lg font-semibold text-center mb-6">
          약을 아는 만큼 건강해집니다.
          <br />
          제대로 알고 쓰면, 약은 고마운 존재입니다.
        </p>
        <div className="space-y-2">
          <Benefit>
            타이레놀 vs 부루펜 완전 비교 — 간독성, 위장 부작용, 공복 복용 가능 여부
          </Benefit>
          <Benefit>
            감기약 성분 겹침 확인법 — 판콜·판피린·화이투벤 성분표 분석, 위험한 조합
          </Benefit>
          <Benefit>
            어린이 해열제 체중별 용량표 — 나이가 아니라 체중으로 정확하게 계산
          </Benefit>
          <Benefit>
            상처약 상황별 선택 — 후시딘(감염 방지) vs 마데카솔(흉터 예방) vs 베판텐(보습)
          </Benefit>
          <Benefit>
            가정 상비약 체크리스트 — 꼭 갖춰야 할 약, 보관법, 유효기간 관리
          </Benefit>
        </div>
        <div className="mt-6 p-4 rounded-lg bg-emerald-100 dark:bg-emerald-900 border border-emerald-300 dark:border-emerald-700">
          <p className="text-sm text-center font-medium">
            가장 중요한 원칙:
            <br />
            <strong>
              &quot;약은 올바르게 쓰면 고마운 존재이지만, 잘못 쓰면 독이 됩니다.&quot;
            </strong>
            <br />
            이 가이드가 안전한 약 사용의 기준이 됩니다.
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
            <li>&#128560; 타이레놀 먹고 술 마셔도 되나 불안함</li>
            <li>&#128560; 감기약 두 종류를 겹쳐 먹어 부작용 위험</li>
            <li>&#128560; 상처에 아무 연고나 대충 바름</li>
            <li>&#128560; 아이 해열제 용량을 나이로 대충 맞춤</li>
            <li>&#128560; 유효기간 지난 약을 약장에 방치</li>
            <li>&#128560; 영양제를 광고 보고 이것저것 구매</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <h3 className="font-bold mb-3 text-green-600 dark:text-green-400">
            After
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>&#128522; 아세트아미노펜과 간독성 원리를 이해</li>
            <li>&#128522; 성분표를 확인하고 겹침 없이 안전하게 복용</li>
            <li>&#128522; 상황별로 항생제/재생/보습 연고를 구분</li>
            <li>&#128522; 체중 기준 정확한 용량표로 해열제 투여</li>
            <li>&#128522; 상비약 체크리스트로 정기적 약장 점검</li>
            <li>&#128522; 근거 확실한 2~3가지만 필요한 만큼 복용</li>
          </ul>
        </div>
      </div>

      {/* Chapter Preview */}
      <SectionTitle>10개 챕터 + 부록 미리보기</SectionTitle>
      <div className="space-y-3 mb-16">
        <ChapterPreview
          num={1}
          title="해열진통제의 모든 것 &#11088;"
          desc="타이레놀 vs 부루펜 완전 비교, 간독성 경고, 어린이 체중별 용량 계산표, 해열제 교차 복용법, 39도 응급실 기준."
        />
        <ChapterPreview
          num={2}
          title="감기약 완전 분석 &#11088;"
          desc="판콜에이·판피린큐·화이투벤·콘택600·타이레놀콜드 성분 비교, 성분 겹침의 위험, 증상별 최적 감기약 선택 가이드."
        />
        <ChapterPreview
          num={3}
          title="위장약과 소화제 &#11088;"
          desc="소화불량 vs 역류성 식도염 vs 위염 구별법, 겔포스·게비스콘·란소프라졸 비교, 소화제 습관 복용의 문제."
        />
        <ChapterPreview
          num={4}
          title="쌍화탕과 한방 상비약"
          desc="쌍화탕 효과의 정직한 답, 우황청심환 오해와 진실, 정로환·활명수, 한약과 양약 병용 시 위험한 상호작용."
        />
        <ChapterPreview
          num={5}
          title="상처/화상/피부 약 &#11088;"
          desc="후시딘 vs 마데카솔 vs 베판텐 선택 가이드, 습윤 드레싱(듀오덤), 화상 단계별 처치법, 무좀약 사용 원칙."
        />
        <ChapterPreview
          num={6}
          title="알레르기/비염약"
          desc="지르텍·클라리틴·알레그라 3종 비교, 코막힘 스프레이 3~5일 제한, 스테로이드 비염 스프레이 안전성, 운전과 졸음."
        />
        <ChapterPreview
          num={7}
          title="변비/설사/장 건강"
          desc="둘코락스·마그밀·듀파락 비교, 자극성 하제 장기 복용 위험, 유산균의 진짜 효과, 설사 시 수분 보충이 먼저."
        />
        <ChapterPreview
          num={8}
          title="눈/귀/입 약"
          desc="인공눈물 방부제 유무 차이, 충혈 제거 안약 남용 위험, 오라메디 vs 알보칠, 가글 올바른 사용법, 면봉 귀 파기 금지."
        />
        <ChapterPreview
          num={9}
          title="구충제/비타민/영양제 &#11088;"
          desc="비타민D 한국인 70~80% 부족, 오메가3 rTG형 선택, 철분제 복용법, 근거 없는 영양제 구별법, 정직한 효과 평가."
        />
        <ChapterPreview
          num={10}
          title="보관/폐기/응급 대처 &#11088;"
          desc="가정 상비약 필수 목록, 유효기간과 개봉 후 사용기한, 폐의약품 수거, 어린이 약 사고 예방, 119 전화 기준."
        />
        <ChapterPreview
          num="부록"
          title="가정 상비약 실전 참고표 &#11088;"
          desc="상비약 체크리스트, 해열제 체중별 용량표, 약물 상호작용 위험 조합표, 증상별 추천 약품표, 어린이 약 용량표, 응급 전화번호 카드."
        />
      </div>

      {/* Trust */}
      <SectionTitle>왜 이 가이드를 신뢰할 수 있나요?</SectionTitle>
      <div className="space-y-1 mb-16 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <TrustItem icon="&#128138;" text="현직 약사 저자 — 약국 카운터에서 매일 환자에게 답하는 실전 경험을 한 권에 정리. 한국 약국에서 실제로 살 수 있는 약만 다룹니다." />
        <TrustItem icon="&#127470;&#127479;" text="한국 약품 기준 — 타이레놀, 판콜에이, 겔포스, 후시딘, 지르텍 등 한국인이 실제로 사용하는 브랜드와 제품명으로 설명" />
        <TrustItem icon="&#128218;" text="50+ 약품 분석 — 해열제, 감기약, 위장약, 상처약, 알레르기약, 영양제까지 가정에서 필요한 모든 상비약을 체계적으로 정리" />
        <TrustItem icon="&#128260;" text="계속 업데이트 — 새로운 약품 정보와 독자 피드백을 반영해 내용이 살아있음" />
      </div>

      {/* CTA */}
      <div className="text-center mb-16">
        <p className="text-lg font-semibold mb-4">
          약을 아는 만큼 건강해집니다. 이제 제대로 알고 사용할 차례입니다.
        </p>
        <Link
          href="/premium/otc-medicine-guide/read"
          className="inline-block px-8 py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-lg rounded-xl transition-colors shadow-lg"
        >
          &#128138; 본문 보기
        </Link>
        <p className="text-sm text-gray-400 mt-3">
          서문 + 10개 챕터 + 부록 실전 참고표
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-8">
        <p>
          이 가이드는 현직 약사가 한국 약국에서 구입 가능한 일반의약품(OTC)을 중심으로 작성한 가정 상비약 안내서입니다.
        </p>
        <p className="mt-2">
          의학적 진단이나 치료를 대체하지 않습니다. 증상이 심하거나 지속되면 반드시 의료기관을 방문하세요.
        </p>
        <p className="mt-4">
          <Link href="/" className="text-emerald-700 dark:text-emerald-400 hover:underline">
            &#8592; 살아있는 정보책 전체 목록
          </Link>
        </p>
      </footer>
    </main>
  );
}
