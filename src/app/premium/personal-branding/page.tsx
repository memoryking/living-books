import Link from "next/link";
import BackToHome from "@/components/BackToHome";

export const metadata = {
  title: "사업가를 위한 퍼스널 브랜딩 가이드 | 살아있는 정보책",
  description:
    "UVP(고유 가치 제안)부터 90일 로드맵까지 — 당신의 이름이 곧 신뢰가 되는 7단계 브랜드 구축 프로세스. VIA 강점+전문영역으로 차별화, 시각·언어·스토리의 삼위일체 브랜드 아이덴티티, 90일 퍼스널 브랜딩 로드맵.",
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
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-700 text-white flex items-center justify-center font-bold text-sm">
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

export default function PersonalBrandingLanding() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <BackToHome />

      {/* Hero */}
      <header className="text-center mb-16">
        <span className="text-6xl mb-6 block">&#127908;</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          사업가를 위한 퍼스널 브랜딩 가이드
          <br />
          <span className="text-pink-700 dark:text-pink-400">
            사업이 안 되는 게 아닙니다. 당신이 안 보이는 겁니다.
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          당신이 곧 브랜드입니다.
        </p>
        <p className="text-sm text-gray-400">
          김약사 · 유원소망약국
        </p>
      </header>

      {/* Empathy Quote */}
      <div className="text-center mb-16 p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <p className="text-xl italic text-gray-600 dark:text-gray-400 mb-4">
          &quot;퍼스널 브랜드는 21세기 최고의 안전장치다.&quot; — Gary Vaynerchuk
        </p>
        <p className="text-base font-semibold text-pink-700 dark:text-pink-300">
          당신의 이름이 곧 신뢰가 되어야 합니다.
        </p>
      </div>

      {/* Pain Points */}
      <SectionTitle>지금 이런 상태 아닌가요?</SectionTitle>
      <div className="space-y-1 mb-12">
        <PainPoint>
          좋은 제품인데 아무도 모름 — 품질은 충분한데 인지도가 없어 기회를 놓침
        </PainPoint>
        <PainPoint>
          전문성 있는데 신뢰가 안 쌓임 — 실력은 있지만 그것을 증명할 방법을 모름
        </PainPoint>
        <PainPoint>
          SNS에 뭘 올려야 할지 모름 — 계정은 있는데 어떤 콘텐츠로 존재감을 만들지 막막함
        </PainPoint>
        <PainPoint>
          네트워킹해도 사업 연결 안 됨 — 사람을 만나도 기억에 남지 않고 관계가 이어지지 않음
        </PainPoint>
        <PainPoint>
          경쟁자는 유명한데 나는 무명 — 비슷한 수준인데 상대만 계속 기회를 얻음
        </PainPoint>
        <PainPoint>
          브랜드를 어떻게 시작할지 막막 — 퍼스널 브랜딩의 첫 단추를 어디서 끼워야 할지 모름
        </PainPoint>
        <PainPoint>
          일관된 메시지 유지가 어려움 — 채널마다 말이 달라져 신뢰 대신 혼란을 줌
        </PainPoint>
      </div>

      {/* Failed Solutions */}
      <SectionTitle>
        &quot;이미 이것저것 해봤습니다&quot;
      </SectionTitle>
      <div className="space-y-1 mb-12">
        <FailedSolution
          title="예쁜 로고 만들기"
          reason="브랜딩≠디자인"
        />
        <FailedSolution
          title="SNS에 일상 올리기"
          reason="전략 없는 공유"
        />
        <FailedSolution
          title="유명인 따라하기"
          reason="자기 목소리 없음"
        />
        <FailedSolution
          title="명함 돌리기"
          reason="일방적 알림"
        />
        <FailedSolution
          title="광고에 돈 쓰기"
          reason="신뢰 없이 노출만"
        />
      </div>

      {/* Discovery */}
      <div className="p-8 rounded-2xl bg-pink-50 dark:bg-pink-950 border border-pink-200 dark:border-pink-800 mb-16">
        <h2 className="text-2xl font-bold mb-4 text-center">
          퍼스널 브랜딩은 자기 자랑이 아니라 신뢰 시스템입니다
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          성공하는 사업가와 무명 사업가의 차이는 실력이 아닙니다. 자신만의 UVP(고유 가치 제안)를 찾아 명확하게 포지셔닝하고, 일관된 메시지로 신뢰를 쌓으며, 콘텐츠와 네트워킹으로 존재감을 키울 수 있느냐에 달려 있습니다. 브랜드 아이덴티티 구축부터 온라인 존재감, 커뮤니티 빌딩, 수익화까지 — 7단계 프로세스가 있으면 이름 하나로 사업을 바꿀 수 있습니다.
        </p>
        <p className="text-lg font-semibold text-center mb-6">
          로고가 아니라 신뢰,
          <br />
          노출이 아니라 포지셔닝으로 시작하는 것
        </p>
        <div className="space-y-2">
          <Benefit>
            UVP(고유 가치 제안)로 나만의 포지셔닝 — 시장에서 대체 불가능한 자리를 찾는 프레임워크
          </Benefit>
          <Benefit>
            7단계 브랜드 구축 프로세스 — 아이덴티티 정의부터 수익화까지 순서대로 실행하는 로드맵
          </Benefit>
          <Benefit>
            VIA 강점+전문영역으로 차별화 — 강점 기반으로 경쟁자와 다른 나만의 영역을 개척하는 법
          </Benefit>
          <Benefit>
            시각·언어·스토리의 삼위일체 브랜드 아이덴티티 — 기억에 남는 일관된 브랜드를 만드는 통합 전략
          </Benefit>
          <Benefit>
            90일 퍼스널 브랜딩 로드맵 — 이론을 실행으로 전환하는 주차별 행동 계획
          </Benefit>
        </div>
        <div className="mt-6 p-4 rounded-lg bg-pink-100 dark:bg-pink-900 border border-pink-300 dark:border-pink-700">
          <p className="text-sm text-center font-medium">
            가장 중요한 사실:
            <br />
            <strong>
              &quot;Gary Vaynerchuk·Brene Brown·Marie Forleo — 퍼스널 브랜드로 사업을 10배 키운 사람들의 공통점: UVP를 먼저 찾았습니다.&quot;
            </strong>
            <br />
            브랜드 구축 프로세스를 갖추면 이름이 곧 기회가 됩니다.
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
            <li>&#128560; 좋은 제품인데 아무도 모르는 상태</li>
            <li>&#128560; SNS에 뭘 올려야 할지 몰라 방치</li>
            <li>&#128560; 네트워킹해도 기억에 안 남음</li>
            <li>&#128560; 경쟁자만 계속 기회를 가져감</li>
            <li>&#128560; 채널마다 메시지가 달라 신뢰 손상</li>
            <li>&#128560; 광고 비용만 쓰고 신뢰는 없음</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <h3 className="font-bold mb-3 text-green-600 dark:text-green-400">
            After
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>&#128522; UVP로 나만의 포지션을 명확히 잡음</li>
            <li>&#128522; 전략 있는 콘텐츠로 전문성을 증명함</li>
            <li>&#128522; 기억에 남는 브랜드 스토리로 신뢰를 쌓음</li>
            <li>&#128522; 커뮤니티 빌딩으로 팬을 고객으로 전환함</li>
            <li>&#128522; 시각·언어·스토리가 일관된 아이덴티티 완성</li>
            <li>&#128522; 90일 로드맵으로 퍼스널 브랜딩을 시스템화함</li>
          </ul>
        </div>
      </div>

      {/* Chapter Preview */}
      <SectionTitle>10개 챕터 + 부록 미리보기</SectionTitle>
      <div className="space-y-3 mb-16">
        <ChapterPreview
          num={1}
          title="왜 퍼스널 브랜딩인가 ⭐"
          desc="퍼스널 브랜딩이 선택이 아닌 생존 전략인 이유. 1인 사업가·전문가가 브랜드를 갖지 않으면 무슨 일이 생기는지 — 기회 손실, 신뢰 부재, 가격 경쟁의 악순환. Gary Vaynerchuk이 말한 '주목 경제' 시대의 생존 공식."
        />
        <ChapterPreview
          num={2}
          title="UVP 찾기 ⭐"
          desc="고유 가치 제안(Unique Value Proposition)을 발굴하는 프레임워크. VIA 강점 검사+전문영역+타깃 고객의 교차점에서 경쟁자와 다른 나만의 포지션을 찾는 과정. 포지셔닝 매트릭스로 시장 공백을 확인하는 법."
        />
        <ChapterPreview
          num={3}
          title="브랜드 아이덴티티 ⭐"
          desc="시각(색상·폰트·이미지)·언어(톤앤매너·키워드)·스토리(브랜드 서사)의 삼위일체 아이덴티티 구축법. Brene Brown의 취약성 스토리텔링이 신뢰를 만드는 방식을 한국 사업가에게 적용하는 구체적 방법."
        />
        <ChapterPreview
          num={4}
          title="온라인 존재감 ⭐"
          desc="채널별 전략적 존재감 구축법. LinkedIn·인스타그램·유튜브·블로그 중 UVP에 맞는 채널을 선택하고, 알고리즘을 이기는 콘텐츠 구조를 설계하는 방법. 플랫폼 의존 없이 지속 가능한 온라인 자산 쌓기."
        />
        <ChapterPreview
          num={5}
          title="신뢰를 쌓는 콘텐츠"
          desc="전문성을 증명하는 콘텐츠 유형 5가지 — 교육형·사례형·관점형·Q&A형·스토리형. 콘텐츠 캘린더 설계와 반복 가능한 제작 루틴 구축. 바이럴이 아니라 신뢰 축적을 목표로 하는 콘텐츠 전략."
        />
        <ChapterPreview
          num={6}
          title="네트워킹"
          desc="명함 교환이 아닌 관계 자산을 만드는 네트워킹 전략. 온라인·오프라인 네트워킹에서 기억에 남는 브랜드로 자리잡는 대화법과 팔로업 시스템. 협업·소개·추천으로 이어지는 관계 네트워크 설계."
        />
        <ChapterPreview
          num={7}
          title="커뮤니티 빌딩"
          desc="팬을 고객으로, 고객을 전도사로 바꾸는 커뮤니티 구축법. 카카오 오픈채팅·뉴스레터·소규모 멤버십 등 한국 시장에 맞는 커뮤니티 플랫폼 선택과 운영 루틴. 커뮤니티가 브랜드를 대신 성장시키는 구조."
        />
        <ChapterPreview
          num={8}
          title="위기관리"
          desc="브랜드 위기 대응 프레임워크. SNS 논란·부정 피드백·경쟁자 공격 상황에서 브랜드를 지키고 신뢰를 회복하는 단계별 대응법. 위기를 브랜드 강화의 기회로 전환한 실제 사례 분석."
        />
        <ChapterPreview
          num={9}
          title="수익화"
          desc="퍼스널 브랜드를 직접 수익으로 연결하는 5가지 모델 — 강의·컨설팅·전자책·멤버십·스폰서십. 브랜드 신뢰도가 충분히 쌓인 시점을 판단하는 기준과 첫 수익화 제안을 만드는 방법."
        />
        <ChapterPreview
          num={10}
          title="90일 로드맵 ⭐"
          desc="0일차 UVP 정의부터 90일차 첫 수익화까지 — 주차별 브랜딩 마일스톤과 체크포인트. 혼자 또는 소규모로 90일 안에 퍼스널 브랜드의 기반을 완성하는 실전 계획."
        />
        <ChapterPreview
          num="부록"
          title="실행 키트 ⭐"
          desc="즉시 쓸 수 있는 UVP 워크시트, 브랜드 아이덴티티 캔버스, 콘텐츠 캘린더 템플릿, 네트워킹 팔로업 스크립트, 90일 퍼스널 브랜딩 플래너."
        />
      </div>

      {/* Trust */}
      <SectionTitle>왜 이 가이드를 신뢰할 수 있나요?</SectionTitle>
      <div className="space-y-1 mb-16 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <TrustItem icon="&#128218;" text="Gary Vaynerchuk·Brene Brown 사례 분석 — 퍼스널 브랜드로 사업을 10배 키운 글로벌 사례의 UVP 전략과 스토리텔링 방식을 한국 사업가에 맞게 재구성" />
        <TrustItem icon="&#127472;&#127479;" text="한국 1인 사업가 현실 반영 — 국내 플랫폼 환경, 한국 소비자의 신뢰 형성 패턴, 한국형 네트워킹 문화를 반영한 퍼스널 브랜딩 전략" />
        <TrustItem icon="&#127912;" text="UVP+브랜드 아이덴티티 프레임워크 — 추상적 이론이 아닌 즉시 실행 가능한 워크시트와 템플릿으로 구성된 실전 프레임워크" />
        <TrustItem icon="&#128260;" text="계속 업데이트 — 독자 피드백과 새로운 브랜딩 사례를 반영해 내용이 살아있음" />
      </div>

      {/* CTA */}
      <div className="text-center mb-16">
        <p className="text-lg font-semibold mb-4">
          실력은 이미 있습니다. 이제 보이는 브랜드를 만들 차례입니다.
        </p>
        <Link
          href="/premium/personal-branding/read"
          className="inline-block px-8 py-4 bg-pink-700 hover:bg-pink-800 text-white font-bold text-lg rounded-xl transition-colors shadow-lg"
        >
          &#127908; 본문 보기
        </Link>
        <p className="text-sm text-gray-400 mt-3">
          서문 + 10개 챕터 + 부록 실행 키트
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-8">
        <p>
          Gary Vaynerchuk·Brene Brown 사례 연구와 브랜딩 이론을 한국 사업가의 현실에 맞게 재구성한 실전 가이드입니다.
        </p>
        <p className="mt-2">
          개인의 성과를 보장하지 않습니다. 실행 결과는 개인의 노력과 환경에 따라 다를 수 있습니다.
        </p>
        <p className="mt-4">
          <Link href="/" className="text-pink-700 dark:text-pink-400 hover:underline">
            &#8592; 살아있는 정보책 전체 목록
          </Link>
        </p>
      </footer>
    </main>
  );
}
