import Link from "next/link";
import BackToHome from "@/components/BackToHome";

export const metadata = {
  title: "팔로워 1,000명으로 평생 먹고 사는 법 | 살아있는 정보책",
  description:
    "100명의 진짜 팬이면 충분합니다 — 마이크로 오디언스 수익화 완전 가이드. Kevin Kelly 1,000 True Fans 이론의 한국 현실 적용, 70점 전문성 진단, 마이크로 오퍼 설계, 3가지 수익 모델, 30일 로드맵.",
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
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-sm">
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

export default function MicroAudienceLanding() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <BackToHome />

      {/* Hero */}
      <header className="text-center mb-16">
        <span className="text-6xl mb-6 block">&#128101;</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          팔로워 1,000명으로 평생 먹고 사는 법
          <br />
          <span className="text-purple-700 dark:text-purple-400">
            100명의 진짜 팬이면 충분합니다 — 마이크로 오디언스 수익화 완전 가이드
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          10만 팔로워가 필요하다는 건 거짓말입니다
        </p>
        <p className="text-sm text-gray-400">
          김약사 · 유원소망약국
        </p>
      </header>

      {/* Empathy Quote */}
      <div className="text-center mb-16 p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <p className="text-xl italic text-gray-600 dark:text-gray-400 mb-4">
          &quot;Kevin Kelly가 말했습니다. &apos;1,000명의 진짜 팬이 있으면 평생 먹고 살 수 있다.&apos; 하지만 한국에서는 100명이면 충분합니다.&quot;
        </p>
        <p className="text-base font-semibold text-purple-700 dark:text-purple-300">
          팔로워 수가 아니라 관계의 깊이가 수익을 결정합니다.
        </p>
      </div>

      {/* Pain Points */}
      <SectionTitle>지금 이런 상태 아닌가요?</SectionTitle>
      <div className="space-y-1 mb-12">
        <PainPoint>
          팔로워 10만은 되어야 돈이 된다고 생각함
        </PainPoint>
        <PainPoint>
          광고·협찬 외에는 수익화 방법을 모름
        </PainPoint>
        <PainPoint>
          전문성이 부족하다고 스스로를 과소평가함
        </PainPoint>
        <PainPoint>
          콘텐츠를 꾸준히 올려도 수익이 안 남
        </PainPoint>
        <PainPoint>
          팔로워는 늘어도 DM이나 반응은 없음
        </PainPoint>
        <PainPoint>
          어떤 상품을 만들어야 할지 막막함
        </PainPoint>
        <PainPoint>
          수익화를 시도했지만 반응이 없었음
        </PainPoint>
      </div>

      {/* Failed Solutions */}
      <SectionTitle>
        &quot;이미 이것저것 해봤습니다&quot;
      </SectionTitle>
      <div className="space-y-1 mb-12">
        <FailedSolution
          title="팔로워 늘리기에 집중"
          reason="숫자만 늘면 허수 팔로워만 쌓임"
        />
        <FailedSolution
          title="광고 수익 기다리기"
          reason="1만 뷰에 몇천 원, 지속 불가능"
        />
        <FailedSolution
          title="유료 강의 따라하기"
          reason="자기 상황에 안 맞는 템플릿"
        />
        <FailedSolution
          title="일단 올리기"
          reason="전략 없는 양산은 알고리즘에 묻힘"
        />
        <FailedSolution
          title="다른 플랫폼으로 이동"
          reason="플랫폼 문제가 아니라 전략 문제"
        />
      </div>

      {/* Discovery */}
      <div className="p-8 rounded-2xl bg-purple-50 dark:bg-purple-950 border border-purple-200 dark:border-purple-800 mb-16">
        <h2 className="text-2xl font-bold mb-4 text-center">
          수익은 팔로워 수가 아니라 &apos;진짜 팬 밀도&apos;에서 나옵니다
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Kevin Kelly의 1,000 True Fans 이론을 한국 현실에 적용. 500~5,000명 사이의 마이크로 오디언스가 가장 효율적인 수익 구간. 진짜 팬 100명이 연 30만원씩 쓰면 연 3,000만원. 핵심은 70점 전문성 + 솔직함 = 최강 조합.
        </p>
        <p className="text-lg font-semibold text-center mb-6">
          숫자가 아니라 밀도,
          <br />
          알고리즘이 아니라 신뢰로 시작하는 것
        </p>
        <div className="space-y-2">
          <Benefit>
            마이크로 수학 공식으로 내게 필요한 진짜 팬 수를 정확히 계산
          </Benefit>
          <Benefit>
            70점 전문성 진단으로 나만의 스위트 스팟을 찾는 프레임워크
          </Benefit>
          <Benefit>
            마이크로 오퍼 설계와 카페 테스트로 첫 상품 사전 검증
          </Benefit>
          <Benefit>
            3가지 수익 모델(지식형·서비스형·하이브리드)로 복합 수익 파이프라인 구축
          </Benefit>
          <Benefit>
            30일 마이크로 오디언스 빌딩 로드맵으로 즉시 실행
          </Benefit>
        </div>
        <div className="mt-6 p-4 rounded-lg bg-purple-100 dark:bg-purple-900 border border-purple-300 dark:border-purple-700">
          <p className="text-sm text-center font-medium">
            가장 중요한 사실:
            <br />
            <strong>
              &quot;Reddit r/EntrepreneurRideAlong: 10만 팔로워 계정을 버리고 800명 니치 계정으로 다시 시작했더니 수익이 3배 늘었다&quot;
            </strong>
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
            <li>&#128560; 팔로워 수에 집착하며 번아웃</li>
            <li>&#128560; 광고·협찬만 기다리며 수익 0원</li>
            <li>&#128560; 전문성 부족하다고 시작도 못 함</li>
            <li>&#128560; 콘텐츠 양산만 하고 관계 구축 안 됨</li>
            <li>&#128560; 어떤 상품을 만들지 몰라 계속 미룸</li>
            <li>&#128560; 혼자 고군분투, 커뮤니티 없음</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <h3 className="font-bold mb-3 text-green-600 dark:text-green-400">
            After
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>&#128522; 진짜 팬 100명의 수학으로 목표가 명확해짐</li>
            <li>&#128522; 자체 상품 하나가 광고 100개보다 강력함을 체감</li>
            <li>&#128522; 70점 전문성도 충분히 수익이 됨을 확인</li>
            <li>&#128522; 알고리즘이 아닌 신뢰 기반 콘텐츠 전략 수립</li>
            <li>&#128522; 마이크로 오퍼로 첫 상품 사전 검증 완료</li>
            <li>&#128522; 팬이 팬을 데려오는 커뮤니티 선순환 구축</li>
          </ul>
        </div>
      </div>

      {/* Chapter Preview */}
      <SectionTitle>10개 챕터 + 부록 미리보기</SectionTitle>
      <div className="space-y-3 mb-16">
        <ChapterPreview
          num={1}
          title="마이크로 수학 ⭐"
          desc="100명의 진짜 팬이면 충분한 이유. Kevin Kelly 1,000 True Fans 이론의 한국 현실 적용. Sweet Spot 500~5,000 구간의 경제학."
        />
        <ChapterPreview
          num={2}
          title="전문 영역 찾기 ⭐"
          desc="70점 전문성의 스위트 스팟. 열정·기술·시장의 교차점에서 나만의 포지셔닝을 찾는 프레임워크."
        />
        <ChapterPreview
          num={3}
          title="진짜 팬 프로필 ⭐"
          desc="구독자가 아닌 관계를 설계하는 법. Engagement Signal 6가지 추적 지표와 True Fan Profile Canvas."
        />
        <ChapterPreview
          num={4}
          title="마이크로 오퍼 설계 ⭐"
          desc="카페 테스트부터 가격 전략까지. 첫 상품을 사전 검증하고 5가지 가격 전략으로 포지셔닝하는 법."
        />
        <ChapterPreview
          num={5}
          title="3가지 수익 모델"
          desc="지식형·서비스형·하이브리드 모델 비교. 각 유형의 장단점과 진입 난이도, 나에게 맞는 모델 찾기."
        />
        <ChapterPreview
          num={6}
          title="콘텐츠 전략"
          desc="알고리즘이 아닌 신뢰를 쌓는 콘텐츠 설계법. 3:3:3:1 비율 공식과 플랫폼별 전략."
        />
        <ChapterPreview
          num={7}
          title="커뮤니티 빌딩"
          desc="팬이 팬을 데려오는 구조. 카카오톡·디스코드·네이버 카페 활용 전략과 커뮤니티 성장 단계."
        />
        <ChapterPreview
          num={8}
          title="수익화 실행"
          desc="첫 상품 출시부터 반복 매출까지. 런칭 시퀀스와 업셀/크로스셀 전략."
        />
        <ChapterPreview
          num={9}
          title="확장과 보호"
          desc="번아웃 없이 성장하는 시스템. 위임·자동화·다각화로 지속 가능한 크리에이터 비즈니스 설계."
        />
        <ChapterPreview
          num={10}
          title="30일 로드맵 ⭐"
          desc="0일차부터 30일차까지 주차별 마이크로 오디언스 빌딩 마일스톤과 실행 계획."
        />
        <ChapterPreview
          num="부록"
          title="마이크로 오디언스 실행 키트 ⭐"
          desc="전문성 진단 워크시트, 진짜 팬 프로필 템플릿, 마이크로 오퍼 캔버스, 가격 전략 매트릭스, 30일 로드맵 플래너."
        />
      </div>

      {/* Trust */}
      <SectionTitle>왜 이 가이드를 신뢰할 수 있나요?</SectionTitle>
      <div className="space-y-1 mb-16 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <TrustItem icon="&#128202;" text="Reddit 크리에이터 커뮤니티 분석 — r/EntrepreneurRideAlong, r/creator_economy 등 실제 마이크로 크리에이터의 수익 데이터와 전략을 분석" />
        <TrustItem icon="&#127472;&#127479;" text="한국 크리에이터 현실 반영 — 카카오톡·네이버 블로그·인스타 환경에 맞는 수익화 전략, 한국인의 결제 심리 반영" />
        <TrustItem icon="&#128300;" text="Kevin Kelly 1,000 True Fans + Li Jin 100 True Fans 이론을 한국 환경에 재해석" />
        <TrustItem icon="&#128260;" text="계속 업데이트 — 독자 피드백과 새로운 수익화 사례를 반영해 내용이 살아있음" />
      </div>

      {/* CTA */}
      <div className="text-center mb-16">
        <p className="text-lg font-semibold mb-4">
          10만 팔로워 없이도 수익은 가능합니다. 지금 시작하세요.
        </p>
        <Link
          href="/premium/micro-audience/read"
          className="inline-block px-8 py-4 bg-purple-700 hover:bg-purple-800 text-white font-bold text-lg rounded-xl transition-colors shadow-lg"
        >
          &#128101; 본문 보기
        </Link>
        <p className="text-sm text-gray-400 mt-3">
          서문 + 10개 챕터 + 부록 실행 키트
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-8">
        <p>
          이 가이드는 Reddit 크리에이터 커뮤니티 리서치와 Kevin Kelly·Li Jin의 마이크로 오디언스 이론을 한국 크리에이터 현실에 맞게 재구성한 실전 가이드입니다.
        </p>
        <p className="mt-2">
          개인의 성과를 보장하지 않습니다. 실행 결과는 개인의 노력과 환경에 따라 다를 수 있습니다.
        </p>
        <p className="mt-4">
          <Link href="/" className="text-purple-700 dark:text-purple-400 hover:underline">
            &#8592; 살아있는 정보책 전체 목록
          </Link>
        </p>
      </footer>
    </main>
  );
}
