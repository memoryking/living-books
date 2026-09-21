import Link from "next/link";
import BackToHome from "@/components/BackToHome";

export const metadata = {
  title: "거절 잘하는 사람들의 비밀 | 살아있는 정보책",
  description:
    "관계를 지키면서 나를 지키는 거절의 기술 — 상황별 거절 스크립트 20개, 경계 설정 워크시트, 30일 거절 연습 플랜. 직장·친구·가족·소비·디지털 상황별 실전 대화법.",
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
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-700 text-white flex items-center justify-center font-bold text-sm">
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

export default function SayingNoLanding() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <BackToHome />

      {/* Hero */}
      <header className="text-center mb-16">
        <span className="text-6xl mb-6 block">&#128737;</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          거절 잘하는 사람들의 비밀
          <br />
          <span className="text-violet-700 dark:text-violet-400">
            관계를 지키면서 나를 지키는 거절의 기술
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          &quot;괜찮아, 내가 할게.&quot; 그 말, 진심이었나요?
        </p>
        <p className="text-sm text-gray-400">
          비법연구소
        </p>
      </header>

      {/* Empathy Quote */}
      <div className="text-center mb-16 p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <p className="text-xl italic text-gray-600 dark:text-gray-400 mb-4">
          &quot;모든 것에 &apos;네&apos;라고 말하는 사람의 &apos;네&apos;는 아무 가치가 없습니다.&quot;
        </p>
        <p className="text-base font-semibold text-violet-700 dark:text-violet-300">
          진심으로 &apos;네&apos;를 말하려면, &apos;아니오&apos;를 말할 수 있어야 합니다.
        </p>
      </div>

      {/* Pain Points */}
      <SectionTitle>지금 이런 상태 아닌가요?</SectionTitle>
      <div className="space-y-1 mb-12">
        <PainPoint>
          부탁을 거절하면 미안해서 — 남의 일을 떠안다가 정작 내 일을 못 끝냄
        </PainPoint>
        <PainPoint>
          상사의 지시를 거절 못 함 — 퇴근 후 카톡 업무까지 다 받아주다 번아웃
        </PainPoint>
        <PainPoint>
          보험 권유를 거절 못 함 — 필요 없는 보험에 의리로 가입해버림
        </PainPoint>
        <PainPoint>
          카톡 읽고 답 안 하면 불안 — 모든 메시지에 즉시 반응해야 할 것 같은 압박
        </PainPoint>
        <PainPoint>
          가족 간섭에 참기만 함 — 부모님의 결혼·진로 압박에 속으로만 삭이는 중
        </PainPoint>
        <PainPoint>
          모임 거절이 두려움 — 가고 싶지 않은 동창회·회식에 매번 참석
        </PainPoint>
        <PainPoint>
          No하면 관계 끊길까 봐 — 거절 한 번이 우정의 끝이 될 것 같은 두려움
        </PainPoint>
      </div>

      {/* Failed Solutions */}
      <SectionTitle>
        &quot;이미 이것저것 해봤습니다&quot;
      </SectionTitle>
      <div className="space-y-1 mb-12">
        <FailedSolution
          title="&quot;생각해 볼게요&quot;로 넘기기"
          reason="거절이 아니라 보류 — 상대는 기대하고 나는 더 부담"
        />
        <FailedSolution
          title="참다가 폭발"
          reason="쌓인 감정이 엉뚱한 곳에서 터져 관계가 더 나빠짐"
        />
        <FailedSolution
          title="서양 자기계발서 읽기"
          reason="한국 문화에 안 맞음 — 눈치·정·위계를 모르는 조언"
        />
        <FailedSolution
          title="모든 연락 차단"
          reason="거절이 아니라 도망 — 관계 자체가 끊어짐"
        />
        <FailedSolution
          title="&quot;나는 원래 이런 성격&quot;이라고 포기"
          reason="거절 못하는 건 성격이 아니라 학습된 행동"
        />
      </div>

      {/* Discovery */}
      <div className="p-8 rounded-2xl bg-violet-50 dark:bg-violet-950 border border-violet-200 dark:border-violet-800 mb-16">
        <h2 className="text-2xl font-bold mb-4 text-center">
          거절은 기술이고, 기술은 배울 수 있습니다
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          착한 아이 콤플렉스, 거부 민감성, 인정 욕구 — 거절이 어려운 심리적 원인을 이해하는 것이 첫걸음입니다. 그리고 한국의 눈치·정·체면·위계 문화에 맞는 거절법을 알면, 관계를 해치지 않으면서 나를 지킬 수 있습니다.
        </p>
        <p className="text-lg font-semibold text-center mb-6">
          거절은 상대를 밀어내는 것이 아닙니다.
          <br />
          나를 지키는 것입니다.
        </p>
        <div className="space-y-2">
          <Benefit>
            직장·친구·가족·소비·디지털까지 5대 영역 상황별 거절 스크립트 20개
          </Benefit>
          <Benefit>
            명확·부드럽·일관 — 3원칙으로 어떤 상황에서도 거절 뼈대 세우기
          </Benefit>
          <Benefit>
            거절 후 관계 관리법 — No 이후가 더 중요한 이유와 구체적 방법
          </Benefit>
          <Benefit>
            경계(Boundary) 설정 4단계 — 거절의 근본 해결
          </Benefit>
          <Benefit>
            30일 거절 연습 플랜 — 작은 거절부터 어려운 거절까지 단계별 실전
          </Benefit>
        </div>
        <div className="mt-6 p-4 rounded-lg bg-violet-100 dark:bg-violet-900 border border-violet-300 dark:border-violet-700">
          <p className="text-sm text-center font-medium">
            가장 중요한 사실:
            <br />
            <strong>
              &quot;거절할 수 있게 되면, 수락도 진심이 됩니다. 당신의 &apos;네&apos;가 진짜 &apos;네&apos;가 됩니다.&quot;
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
            <li>&#128560; 부탁 받으면 자동으로 &quot;네&quot;가 나옴</li>
            <li>&#128560; 거절 후 죄책감에 잠을 못 이룸</li>
            <li>&#128560; 남의 일 떠안다가 내 일을 못 끝냄</li>
            <li>&#128560; &quot;생각해 볼게&quot;로 넘기다 더 곤란해짐</li>
            <li>&#128560; 착하다는 소리는 듣지만 행복하지 않음</li>
            <li>&#128560; 가족·상사 앞에서 내 의견을 말 못 함</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <h3 className="font-bold mb-3 text-green-600 dark:text-green-400">
            After
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>&#128522; 상황에 맞는 거절 스크립트로 자연스럽게 대응</li>
            <li>&#128522; 죄책감 없이 건강한 경계를 유지</li>
            <li>&#128522; 내 시간과 에너지를 보호하며 핵심에 집중</li>
            <li>&#128522; &quot;어렵습니다&quot; 한 마디로 명확하게 거절</li>
            <li>&#128522; 진심으로 &quot;네&quot;할 수 있어 관계가 더 깊어짐</li>
            <li>&#128522; 30일 플랜으로 거절 근육을 체화</li>
          </ul>
        </div>
      </div>

      {/* Chapter Preview */}
      <SectionTitle>10개 챕터 + 부록 미리보기</SectionTitle>
      <div className="space-y-3 mb-16">
        <ChapterPreview
          num={1}
          title="왜 '아니오'가 어려울까 ⭐"
          desc="착한 아이 콤플렉스, 거부 민감성, 인정 욕구 — 거절을 못하는 5가지 심리적 원인과 한국 문화의 특수성(눈치·정·체면·위계). 거절 못해서 치르는 대가."
        />
        <ChapterPreview
          num={2}
          title="거절의 3원칙 ⭐"
          desc="명확·부드럽·일관 — 어떤 상황에서도 거절의 뼈대를 세우는 공식. 샌드위치 거절법, 깨진 음반 기법, 과도한 변명이 역효과인 이유."
        />
        <ChapterPreview
          num={3}
          title="직장에서의 거절 ⭐"
          desc="상사의 무리한 업무 → 우선순위 확인으로 전환. 동료의 떠넘기기, 회식 거절, 주말 카톡 업무, 업무 범위 외 요청 — 조직의 언어로 말하는 거절법."
        />
        <ChapterPreview
          num={4}
          title="인간관계 거절 ⭐"
          desc="돈 빌려달라는 친구, 보험·다단계 권유, 경조사 부담, 끝없는 고민 상담, 감정적 압박('우리 사이에...'). 의리와 거절을 분리하는 방법."
        />
        <ChapterPreview
          num={5}
          title="가족 사이의 거절"
          desc="부모님의 진로·결혼·육아 간섭, 시댁/처가 관계, 명절 노동 분담, 형제의 금전 요청, 자녀의 무리한 요구. 사랑하면서도 거절하는 법."
        />
        <ChapterPreview
          num={6}
          title="소비자로서의 거절"
          desc="매장 업셀링, 텔레마케터, 구독 해지 방어팀, 친구 사업 물건, 무료 체험 후 가입 압박. '감사합니다, 오늘은 이것만 살게요' 한 마디의 힘."
        />
        <ChapterPreview
          num={7}
          title="디지털 시대의 거절"
          desc="카카오톡 거절법, 단톡방 나가기, SNS DM, 온라인 데이팅, 줌 회의 불참, 이메일 거절 템플릿. 읽씹 vs 정중한 거절의 차이."
        />
        <ChapterPreview
          num={8}
          title="거절 후 관계 관리"
          desc="죄책감 해소 5단계, 상대가 화냈을 때 대처법, 관계 회복 방법, 거절이 오히려 신뢰를 높이는 이유. No 이후가 더 중요합니다."
        />
        <ChapterPreview
          num={9}
          title="경계 세우기 ⭐"
          desc="물리적·감정적·시간적·디지털 경계 4유형. 경계 세우는 4단계(인식→결정→전달→유지). 건강한 경계 vs 벽 쌓기의 차이."
        />
        <ChapterPreview
          num={10}
          title="30일 거절 연습 플랜 ⭐"
          desc="Week 1 카페 거절부터 → Week 2 일상 거절 → Week 3 직장/가족 → Week 4 감정적 압박. 매일 미션, 거절 일지, No 근육 만들기."
        />
        <ChapterPreview
          num="부록"
          title="실전 도구 모음 ⭐"
          desc="거절 스크립트 20개(직장 5+인간관계 5+가족 5+소비/디지털 5), 거절 연습 일지, 경계 설정 워크시트, 30일 거절 플래너, '거절하면 안 되는 상황' 가이드."
        />
      </div>

      {/* Trust */}
      <SectionTitle>왜 이 가이드를 신뢰할 수 있나요?</SectionTitle>
      <div className="space-y-1 mb-16 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <TrustItem icon="&#128218;" text="심리학 기반 — 착한 아이 콤플렉스, 거부 민감성, 인정 욕구 등 거절을 어렵게 만드는 심리 메커니즘을 학술적 근거와 함께 설명" />
        <TrustItem icon="&#127470;&#127479;" text="한국 문화 맞춤 — 눈치·정·체면·위계 등 한국 사회 특유의 거절 장벽을 이해하고, 한국적 상황에 맞는 실전 스크립트 제공" />
        <TrustItem icon="&#128172;" text="실전 스크립트 20개 — 이론이 아니라 바로 복사해서 쓸 수 있는 상황별 거절 대화법" />
        <TrustItem icon="&#128260;" text="계속 업데이트 — 독자 피드백과 새로운 상황을 반영해 내용이 살아있음" />
      </div>

      {/* CTA */}
      <div className="text-center mb-16">
        <p className="text-lg font-semibold mb-4">
          당신의 진짜 &quot;네&quot;를 되찾을 시간입니다.
        </p>
        <Link
          href="/premium/saying-no/read"
          className="inline-block px-8 py-4 bg-violet-700 hover:bg-violet-800 text-white font-bold text-lg rounded-xl transition-colors shadow-lg"
        >
          &#128737; 본문 보기
        </Link>
        <p className="text-sm text-gray-400 mt-3">
          서문 + 10개 챕터 + 부록 실전 도구 모음
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-8">
        <p>
          이 가이드는 심리학 연구와 한국 사회 특성을 반영하여 관계를 지키면서 건강하게 거절하는 실전 기술을 제공하는 가이드입니다.
        </p>
        <p className="mt-2">
          개인의 성과를 보장하지 않습니다. 실행 결과는 개인의 노력과 환경에 따라 다를 수 있습니다.
        </p>
        <p className="mt-4">
          <Link href="/" className="text-violet-700 dark:text-violet-400 hover:underline">
            &#8592; 살아있는 정보책 전체 목록
          </Link>
        </p>
      </footer>
    </main>
  );
}
