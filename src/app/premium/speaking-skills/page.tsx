import Link from "next/link";
import BackToHome from "@/components/BackToHome";

export const metadata = {
  title: "말 잘하는 사람들의 비밀 | 살아있는 정보책",
  description:
    "PREP 법칙 · 설득 심리학 · 경청 5단계 · 갈등 해결 · 30일 업그레이드 플랜. 회의에서 존재감 있게 말하고, 논리적으로 설득하고, 발표에서 떨지 않는 실전 말하기 시스템.",
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
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-700 text-white flex items-center justify-center font-bold text-sm">
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

export default function SpeakingSkillsLanding() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <BackToHome />

      {/* Hero */}
      <header className="text-center mb-16">
        <span className="text-6xl mb-6 block">&#127897;</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          말 잘하는 사람들의 비밀
          <br />
          <span className="text-teal-700 dark:text-teal-400">
            PREP 법칙 · 설득 심리학 · 경청 · 30일 업그레이드 플랜
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          말 못하는 게 아닙니다. 순서를 모르는 겁니다.
        </p>
        <p className="text-sm text-gray-400">
          비법연구소
        </p>
      </header>

      {/* Empathy Quote */}
      <div className="text-center mb-16 p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <p className="text-xl italic text-gray-600 dark:text-gray-400 mb-4">
          &quot;회의에서 할 말이 있는데 정리가 안 돼서 결국 입을 닫았다.&quot;
        </p>
        <p className="text-base font-semibold text-teal-700 dark:text-teal-300">
          말하기는 타고나는 것이 아닙니다. 기술입니다.
        </p>
      </div>

      {/* Pain Points */}
      <SectionTitle>지금 이런 상태 아닌가요?</SectionTitle>
      <div className="space-y-1 mb-12">
        <PainPoint>
          회의에서 말하면 존재감 없음 — 발언 타이밍을 놓치고 한마디도 못하고 나옴
        </PainPoint>
        <PainPoint>
          하고 싶은 말이 정리가 안 됨 — 배경 설명만 길고 결론이 어딘지 모름
        </PainPoint>
        <PainPoint>
          어색한 침묵이 두려움 — 대화가 끊기면 무슨 말을 해야 할지 모르겠음
        </PainPoint>
        <PainPoint>
          설득이 안 됨 — 좋은 아이디어인데 상대가 납득하지 않음
        </PainPoint>
        <PainPoint>
          발표하면 떨림 — 목소리가 갈라지고 머릿속이 하얘짐
        </PainPoint>
        <PainPoint>
          카톡 답장에 고민 — 이 말이 오해를 살까봐 30분을 고민함
        </PainPoint>
        <PainPoint>
          갈등 대화가 무서움 — 감정적으로 대응해서 관계가 더 나빠짐
        </PainPoint>
      </div>

      {/* Failed Solutions */}
      <SectionTitle>
        &quot;이미 이것저것 해봤습니다&quot;
      </SectionTitle>
      <div className="space-y-1 mb-12">
        <FailedSolution
          title="유튜브 소통 영상 시청"
          reason="영감은 받지만 실천 방법이 없음 — 보고 나면 잊어버림"
        />
        <FailedSolution
          title="성격 탓으로 포기"
          reason="내향적이라서 원래 말을 못한다고 단정 — 기술 문제를 성격 문제로 착각"
        />
        <FailedSolution
          title="용기만으로 도전"
          reason="준비 없이 발표에 나서서 더 큰 트라우마 — 기술 없는 용기는 무모함"
        />
        <FailedSolution
          title="말하기 책 한 권 읽기"
          reason="이론은 알지만 실천 안 함 — 연습 프로그램이 없으면 변화도 없음"
        />
        <FailedSolution
          title="상대를 탓하기"
          reason="'이해 못하는 쪽이 문제'라고 생각 — 전달력은 내 책임"
        />
      </div>

      {/* Discovery */}
      <div className="p-8 rounded-2xl bg-teal-50 dark:bg-teal-950 border border-teal-200 dark:border-teal-800 mb-16">
        <h2 className="text-2xl font-bold mb-4 text-center">
          말하기는 타고나는 것이 아니라 기술입니다
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          말 잘하는 사람들에게는 공통된 습관과 기술이 있습니다. 결론을 먼저 말하는 두괄식, 논리를 구조화하는 PREP 법칙, 상대의 마음을 읽는 경청, 감정 없이 문제를 전달하는 I-Message — 이 모든 것은 배울 수 있는 기술입니다.
        </p>
        <p className="text-lg font-semibold text-center mb-6">
          순서를 알면 말이 달라지고,
          <br />
          말이 달라지면 인생이 달라집니다.
        </p>
        <div className="space-y-2">
          <Benefit>
            PREP 법칙으로 어떤 상황에서든 논리적으로 말하는 프레임워크
          </Benefit>
          <Benefit>
            적극적 경청 5단계로 &quot;이 사람은 다르다&quot;는 평가를 받는 기술
          </Benefit>
          <Benefit>
            설득 심리학 6가지 기법으로 상대가 스스로 납득하게 만드는 방법
          </Benefit>
          <Benefit>
            I-Message와 피드백 샌드위치로 갈등을 해결하는 대화법
          </Benefit>
          <Benefit>
            30일 업그레이드 플랜으로 매일 조금씩 확실하게 변화
          </Benefit>
        </div>
        <div className="mt-6 p-4 rounded-lg bg-teal-100 dark:bg-teal-900 border border-teal-300 dark:border-teal-700">
          <p className="text-sm text-center font-medium">
            가장 중요한 사실:
            <br />
            <strong>
              &quot;UCLA 연구에 따르면, 소통의 93%는 말의 내용이 아니라 목소리와 바디랭귀지로 결정됩니다.&quot;
            </strong>
            <br />
            어떻게 말하느냐가 무엇을 말하느냐보다 중요합니다.
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
            <li>&#128560; 회의에서 한마디도 못하고 후회함</li>
            <li>&#128560; 배경 설명이 길어 &quot;결론이 뭐야?&quot;를 들음</li>
            <li>&#128560; 처음 만난 사람과 어색한 침묵이 계속됨</li>
            <li>&#128560; 발표만 하면 떨림이 멈추지 않음</li>
            <li>&#128560; 갈등 상황에서 감정적으로 폭발함</li>
            <li>&#128560; 카톡 답장 하나에 30분을 고민함</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <h3 className="font-bold mb-3 text-green-600 dark:text-green-400">
            After
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>&#128522; PREP로 논리적 발언, 회의에서 존재감 확보</li>
            <li>&#128522; 두괄식 습관으로 보고 한 번에 OK</li>
            <li>&#128522; 질문의 기술로 대화를 자연스럽게 이어감</li>
            <li>&#128522; 긴장을 에너지로 바꿔 자신감 있게 발표</li>
            <li>&#128522; I-Message로 관계를 지키며 문제 해결</li>
            <li>&#128522; 디지털 소통 원칙으로 오해 없이 전달</li>
          </ul>
        </div>
      </div>

      {/* Chapter Preview */}
      <SectionTitle>10개 챕터 + 부록 미리보기</SectionTitle>
      <div className="space-y-3 mb-16">
        <ChapterPreview
          num={1}
          title="말의 순서 ⭐"
          desc="두괄식 소통, PREP 법칙 4단계 공식, 30초 엘리베이터 피치, 회의에서 존재감 있게 말하는 5가지 전략. 같은 내용인데 전달력이 다른 이유는 단 하나, 말의 순서입니다."
        />
        <ChapterPreview
          num={2}
          title="경청 ⭐"
          desc="적극적 경청 5단계(집중→인정→반영→확인→요약), 80/20 법칙, 맞장구 5레벨, 공감 vs 해결 구별법. 말 잘하는 사람의 진짜 비밀은 '잘 듣는 것'입니다."
        />
        <ChapterPreview
          num={3}
          title="비언어 소통 ⭐"
          desc="목소리 톤·속도 조절, 아이컨택 3초 법칙, 제스처 가이드, 미러링, 간투사 줄이기, 파워 포즈. 말의 내용(7%)보다 목소리(38%)와 바디랭귀지(55%)가 더 큰 영향을 줍니다."
        />
        <ChapterPreview
          num={4}
          title="일상 대화"
          desc="첫 대화 시작 5가지 공식, 닫힌 질문→열린 질문, 연결 고리 기법, 칭찬법, 유머 사용법, 대화 마무리. 어색한 침묵을 자연스러운 대화로 바꾸는 실전 기술."
        />
        <ChapterPreview
          num={5}
          title="설득의 심리학 ⭐"
          desc="아리스토텔레스 3요소(에토스·파토스·로고스), '왜냐하면'의 힘(93% 성공률), 양면 제시법, 프레이밍 효과, 상사·부모님 설득법, No를 Yes로 바꾸는 3단계."
        />
        <ChapterPreview
          num={6}
          title="직장 말하기 ⭐"
          desc="STAR 보고법(상황→과제→행동→결과), 회의 발언 타이밍 잡기, 이메일·슬랙 메시지 원칙, 피드백 주고받기, 면접 답변법, 거절의 3단계."
        />
        <ChapterPreview
          num={7}
          title="갈등 해결 ⭐"
          desc="I-Message(나-메시지)로 비난 없이 문제 전달, 감정 조절 4단계, 진심 있는 사과 4단계, 피드백 샌드위치(긍정→개선→격려), 가족 갈등·고객 응대 HEAT 공식."
        />
        <ChapterPreview
          num={8}
          title="프레젠테이션"
          desc="긴장 극복 5가지 방법(4-7-8 호흡법, 파워 포즈), 청중 분석 체크리스트, 오프닝 3가지 공식, 6x6 슬라이드 규칙, 클로징의 기술, Q&A 대처 ARC 공식."
        />
        <ChapterPreview
          num={9}
          title="디지털 소통"
          desc="카카오톡 메시지 원칙과 오해 줄이기, 이메일 제목 공식, 화상회의 에티켓, SNS 소통 원칙, 세대별 소통 차이, AI 시대에 더 중요해진 소통 능력."
        />
        <ChapterPreview
          num={10}
          title="30일 업그레이드 플랜 ⭐"
          desc="Week 1 경청 → Week 2 두괄식 → Week 3 질문 → Week 4 실전 적용. 매일 3분 스피치, 주차별 미션, 자가 평가표. 30일이면 주변에서 '달라졌다'고 말합니다."
        />
        <ChapterPreview
          num="부록"
          title="실전 템플릿 ⭐"
          desc="PREP 템플릿, STAR 보고 템플릿, 프레젠테이션 구조 시트, 경청 자가 진단 체크리스트, 30일 플래너 — 바로 복사해서 쓸 수 있는 5종 실행 키트."
        />
      </div>

      {/* Trust */}
      <SectionTitle>왜 이 가이드를 신뢰할 수 있나요?</SectionTitle>
      <div className="space-y-1 mb-16 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <TrustItem icon="&#128218;" text="심리학 연구 기반 — UCLA 메라비언 연구, 아리스토텔레스 설득론, 엘렌 랭어 실험, 에이미 커디 파워포즈 등 검증된 이론을 실전 기술로 재구성" />
        <TrustItem icon="&#128172;" text="실전 중심 구성 — 이론 설명 후 반드시 실전 예시와 연습 과제가 따라옴. 읽고 끝나는 책이 아니라 오늘 바로 쓸 수 있는 워크북" />
        <TrustItem icon="&#127470;&#127479;" text="한국 상황 반영 — 한국어 두괄식/미괄식 차이, 카카오톡 에티켓, 직장 보고 문화, 세대별 소통 특성까지 한국 현실에 맞는 가이드" />
        <TrustItem icon="&#128260;" text="계속 업데이트 — 독자 피드백과 새로운 소통 연구를 반영해 내용이 살아있음" />
      </div>

      {/* CTA */}
      <div className="text-center mb-16">
        <p className="text-lg font-semibold mb-4">
          말하기는 기술입니다. 기술은 배울 수 있습니다.
        </p>
        <Link
          href="/premium/speaking-skills/read"
          className="inline-block px-8 py-4 bg-teal-700 hover:bg-teal-800 text-white font-bold text-lg rounded-xl transition-colors shadow-lg"
        >
          &#127897; 본문 보기
        </Link>
        <p className="text-sm text-gray-400 mt-3">
          서문 + 10개 챕터 + 부록 실전 템플릿 5종
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-8">
        <p>
          이 가이드는 심리학 연구·소통 이론·실전 사례를 한국인의 일상과 직장 환경에 맞게 재구성한 실행 중심의 말하기 업그레이드 가이드입니다.
        </p>
        <p className="mt-2">
          개인의 성과를 보장하지 않습니다. 실행 결과는 개인의 노력과 환경에 따라 다를 수 있습니다.
        </p>
        <p className="mt-4">
          <Link href="/" className="text-teal-700 dark:text-teal-400 hover:underline">
            &#8592; 살아있는 정보책 전체 목록
          </Link>
        </p>
      </footer>
    </main>
  );
}
