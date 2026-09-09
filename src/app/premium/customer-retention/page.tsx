import Link from "next/link";
import BackToHome from "@/components/BackToHome";

export const metadata = {
  title: "한번 온 고객을 평생고객으로 만들기 | 살아있는 정보책",
  description:
    "신규 확보보다 5배 저렴한 유지 전략 — 이탈 방지부터 추천 엔진까지. Bain & Company 연구, 스타벅스·아마존 사례, 한국 사업자 반영.",
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
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
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

export default function CustomerRetentionLanding() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <BackToHome />

      {/* Hero */}
      <header className="text-center mb-16">
        <span className="text-6xl mb-6 block">&#129309;</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          한번 온 고객을 평생고객으로 만들기
          <br />
          <span className="text-emerald-600 dark:text-emerald-400">
            신규 확보보다 5배 저렴한 유지 전략 — 이탈 방지부터 추천 엔진까지
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          신규 고객 1명 확보 비용으로 기존 고객 5명을 지킬 수 있습니다.
        </p>
        <p className="text-sm text-gray-400">
          김약사 · 유원소망약국
        </p>
      </header>

      {/* Empathy Quote */}
      <div className="text-center mb-16 p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <p className="text-xl italic text-gray-600 dark:text-gray-400 mb-4">
          &quot;신규 고객 확보에만 집중하고 있다면, 밑 빠진 독에 물을 붓고 있는 겁니다.&quot;
        </p>
        <p className="text-base font-semibold text-emerald-700 dark:text-emerald-300">
          그런데 왜 확보에만 집중하시나요?
        </p>
      </div>

      {/* Pain Points */}
      <SectionTitle>지금 이런 상태 아닌가요?</SectionTitle>
      <div className="space-y-1 mb-12">
        <PainPoint>
          열심히 서비스했는데 고객이 말없이 떠남
        </PainPoint>
        <PainPoint>
          광고비는 늘어나는데 재구매율은 제자리
        </PainPoint>
        <PainPoint>
          첫 구매 후 사라지는 고객, 두 번째 구매가 없음
        </PainPoint>
        <PainPoint>
          고객이 왜 이탈했는지 이유를 도무지 모르겠음
        </PainPoint>
        <PainPoint>
          로열티 프로그램을 만들었는데 효과가 없음
        </PainPoint>
        <PainPoint>
          만족한다고 했는데 주변에 추천은 안 해줌
        </PainPoint>
        <PainPoint>
          어느새 경쟁사에 고객을 빼앗기고 있음
        </PainPoint>
      </div>

      {/* Failed Solutions */}
      <SectionTitle>
        &quot;이미 이것저것 해봤습니다&quot;
      </SectionTitle>
      <div className="space-y-1 mb-12">
        <FailedSolution
          title="더 많은 광고"
          reason="확보 비용만 늘어남 — 기존 고객은 여전히 빠져나감"
        />
        <FailedSolution
          title="무조건 할인"
          reason="마진이 파괴되고 할인에만 반응하는 고객만 남음"
        />
        <FailedSolution
          title="이메일 폭탄"
          reason="스팸으로 차단되고 브랜드 이미지만 손상됨"
        />
        <FailedSolution
          title="일방적 설문"
          reason="응답률이 너무 낮아 실질적인 인사이트를 얻지 못함"
        />
        <FailedSolution
          title="문제 발생 후 대응"
          reason="이미 늦음 — 떠난 고객은 돌아오지 않음"
        />
      </div>

      {/* Discovery */}
      <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 mb-16">
        <h2 className="text-2xl font-bold mb-4 text-center">
          충성 고객 1명이 신규 고객 5명의 가치를 합니다
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Bain &amp; Company 연구에 따르면 고객 유지율을 5%만 높여도 수익이 25~95% 증가합니다. 스타벅스는 리워드 프로그램 하나로 충성 고객의 방문 빈도를 3배 높였습니다. 아마존 프라임은 연간 구독료를 받으면서 오히려 고객 이탈률을 극적으로 낮췄습니다. 이들의 공통점은 하나 — 확보가 아닌 유지에 투자했다는 것입니다.
        </p>
        <p className="text-lg font-semibold text-center mb-6">
          신규 고객 확보 비용의 5분의 1만 써도
          <br />
          기존 고객을 지킬 수 있습니다.
        </p>
        <div className="space-y-2">
          <Benefit>
            유지의 경제학 — 고객 유지율 5% 향상이 수익 25~95% 증가로 이어지는 원리
          </Benefit>
          <Benefit>
            충성도를 만드는 4가지 심리학 — 인지적 편안함·정체성·손실 회피·신뢰를 활용하는 법
          </Benefit>
          <Benefit>
            이탈 경고 신호 7가지와 각각에 즉시 대응하는 구체적인 방법
          </Benefit>
          <Benefit>
            추천 엔진 설계 — 충성 고객이 자발적으로 새 고객을 데려오게 만드는 구조
          </Benefit>
          <Benefit>
            18개월 실행 로드맵 — 지금 당장 시작해서 단계적으로 적용하는 통합 계획
          </Benefit>
        </div>
        <div className="mt-6 p-4 rounded-lg bg-teal-50 dark:bg-teal-950 border border-teal-200 dark:border-teal-800">
          <p className="text-sm text-center font-medium">
            가장 중요한 사실:
            <br />
            <strong>
              &quot;신규 고객 1명 확보 비용으로 기존 고객 5명을 지킬 수 있습니다.&quot;
            </strong>
            <br />
            이제 확보가 아닌 유지에 집중할 때입니다.
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
            <li>&#128560; 광고비만 늘어나고 재구매율은 그대로</li>
            <li>&#128560; 고객이 왜 떠나는지 알 수 없음</li>
            <li>&#128560; 로열티 프로그램은 있지만 효과 없음</li>
            <li>&#128560; 만족한 고객도 추천은 안 해줌</li>
            <li>&#128560; 첫 구매 후 두 번째 구매가 없음</li>
            <li>&#128560; 경쟁사에 고객을 빼앗기는 것을 막지 못함</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <h3 className="font-bold mb-3 text-green-600 dark:text-green-400">
            After
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>&#128522; 재구매율이 올라가고 광고 의존도가 낮아짐</li>
            <li>&#128522; 이탈 경고 신호를 미리 감지하고 선제 대응</li>
            <li>&#128522; 고객이 스스로 지속적으로 머무르게 하는 구조</li>
            <li>&#128522; 충성 고객이 자발적으로 주변에 추천하는 엔진</li>
            <li>&#128522; 첫 구매 고객을 단계적으로 단골로 전환하는 로드맵</li>
            <li>&#128522; 경쟁사로 이탈하지 않는 강력한 전환 비용 설계</li>
          </ul>
        </div>
      </div>

      {/* Chapter Preview */}
      <SectionTitle>10개 챕터 + 부록 미리보기</SectionTitle>
      <div className="space-y-3 mb-16">
        <ChapterPreview
          num={1}
          title="유지의 경제학 ⭐"
          desc="고객 유지율 5% 향상이 수익 25~95% 증가로 이어지는 원리. Bain & Company 연구를 실제 사업 수치로 환산해 보는 구체적인 계산법."
        />
        <ChapterPreview
          num={2}
          title="충성도 심리학 ⭐"
          desc="고객이 계속 돌아오게 만드는 4가지 심리 메커니즘 — 인지적 편안함, 정체성, 손실 회피, 신뢰. 각각을 사업에 적용하는 실전 방법."
        />
        <ChapterPreview
          num={3}
          title="로열티 프로그램 설계 ⭐"
          desc="효과 없는 포인트 적립과 진짜 효과 있는 로열티 프로그램의 차이. 스타벅스·아마존 프라임 구조를 소규모 사업에 맞게 재설계하는 법."
        />
        <ChapterPreview
          num={4}
          title="개인화 전략"
          desc="대기업만 할 수 있다는 편견을 깨는 소규모 개인화 전략. 고객 데이터를 분류해 맞춤형 경험을 제공하는 간단한 세그멘테이션 방법."
        />
        <ChapterPreview
          num={5}
          title="능동형 서비스 ⭐"
          desc="문제가 생긴 후 대응하는 것이 아니라 미리 연락하는 능동형(proactive) 서비스의 힘. 고객이 불만을 말하기 전에 먼저 해결하는 구체적인 시나리오."
        />
        <ChapterPreview
          num={6}
          title="커뮤니티 구축"
          desc="고객이 브랜드가 아니라 서로를 위해 머무는 커뮤니티 설계. 온라인·오프라인 커뮤니티를 단계적으로 만드는 실행 가이드."
        />
        <ChapterPreview
          num={7}
          title="이탈 경고 7가지 ⭐"
          desc="고객이 떠나기 전에 보내는 7가지 경고 신호와 각각에 즉시 대응하는 방법. 구매 빈도·문의 감소·반응률 하락 등 측정 가능한 지표로 포착하는 법."
        />
        <ChapterPreview
          num={8}
          title="추천 엔진"
          desc="만족한 고객이 자발적으로 새 고객을 데려오게 만드는 추천 구조 설계. 억지 인센티브 없이 자연스러운 입소문이 일어나는 환경을 만드는 법."
        />
        <ChapterPreview
          num={9}
          title="18개월 통합 로드맵"
          desc="지금 당장 시작해서 18개월 동안 단계적으로 실행하는 고객 유지 통합 계획. 0~3개월·3~9개월·9~18개월로 나눈 구체적인 액션 아이템."
        />
        <ChapterPreview
          num={10}
          title="미래 전략"
          desc="AI·자동화 시대의 고객 유지 전략 변화. 개인화 기술의 발전을 소규모 사업자가 먼저 활용해 경쟁 우위를 확보하는 방향."
        />
        <ChapterPreview
          num="부록"
          title="고객 유지 실행 키트 ⭐"
          desc="즉시 쓸 수 있는 이탈 경고 체크리스트, 로열티 프로그램 설계 템플릿, 능동형 서비스 스크립트, 18개월 로드맵 워크시트."
        />
      </div>

      {/* Trust */}
      <SectionTitle>왜 이 가이드를 신뢰할 수 있나요?</SectionTitle>
      <div className="space-y-1 mb-16 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <TrustItem icon="&#128202;" text="Bain & Company 연구 기반 — 고객 유지율과 수익 사이의 관계를 검증한 연구를 실제 사업 수치로 환산해 적용하는 방법으로 재구성" />
        <TrustItem icon="&#127881;" text="스타벅스·아마존 사례 해부 — 글로벌 기업의 로열티 전략을 소규모 사업자가 실행 가능한 형태로 분해해 제공" />
        <TrustItem icon="&#127470;&#127479;" text="한국 사업자 현실 반영 — 스마트스토어·카카오채널·네이버 예약 등 한국 플랫폼 환경에서 바로 적용할 수 있는 실전 방법" />
        <TrustItem icon="&#128260;" text="계속 업데이트 — 독자 피드백과 새로운 사례를 반영해 내용이 살아있음" />
      </div>

      {/* CTA */}
      <div className="text-center mb-16">
        <p className="text-lg font-semibold mb-4">
          지금 있는 고객을 지키는 것이 최고의 마케팅입니다.
        </p>
        <Link
          href="/premium/customer-retention/read"
          className="inline-block px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg rounded-xl transition-colors shadow-lg"
        >
          &#129309; 본문 보기
        </Link>
        <p className="text-sm text-gray-400 mt-3">
          서문 + 10개 챕터 + 부록 고객 유지 실행 키트
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-8">
        <p>
          이 가이드는 고객 유지 이론과 글로벌 사례를 한국 사업자의 현실에 맞게 재구성한 실행 중심의 마케팅 가이드입니다.
        </p>
        <p className="mt-2">
          개인의 성과를 보장하지 않습니다. 실행 결과는 개인의 노력과 환경에 따라 다를 수 있습니다.
        </p>
        <p className="mt-4">
          <Link href="/" className="text-emerald-600 dark:text-emerald-400 hover:underline">
            &#8592; 살아있는 정보책 전체 목록
          </Link>
        </p>
      </footer>
    </main>
  );
}
