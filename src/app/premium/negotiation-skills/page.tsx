import Link from "next/link";
import BackToHome from "@/components/BackToHome";

export const metadata = {
  title: "협상의 기술 | 살아있는 정보책",
  description:
    "BATNA 전략부터 연봉 스크립트까지 — 한국 문화에 맞는 실전 협상 시스템. 앵커링·라벨링·미러링, 연봉·비즈니스·일상 협상, 30일 업그레이드 플랜.",
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
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-700 text-white flex items-center justify-center font-bold text-sm">
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

export default function NegotiationSkillsLanding() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <BackToHome />

      {/* Hero */}
      <header className="text-center mb-16">
        <span className="text-6xl mb-6 block">&#129309;</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          협상의 기술
          <br />
          <span className="text-orange-700 dark:text-orange-400">
            BATNA 전략부터 연봉 스크립트까지 — 한국 문화에 맞는 실전 협상 시스템
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          한국 직장인의 62%는 연봉 협상을 한 번도 해본 적이 없습니다
        </p>
        <p className="text-sm text-gray-400">
          비법연구소
        </p>
      </header>

      {/* Empathy Quote */}
      <div className="text-center mb-16 p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <p className="text-xl italic text-gray-600 dark:text-gray-400 mb-4">
          &quot;인생에서 원하는 것을 얻지 못하는 이유는 단 하나, 요청하지 않았기 때문이다.&quot;
        </p>
        <p className="text-base font-semibold text-orange-700 dark:text-orange-300">
          협상을 피하는 것이 가장 나쁜 협상입니다.
        </p>
      </div>

      {/* Pain Points */}
      <SectionTitle>지금 이런 상태 아닌가요?</SectionTitle>
      <div className="space-y-1 mb-12">
        <PainPoint>
          연봉 협상이 두려움 — 회사에서 정해준 대로 받고, 3년째 같은 급여
        </PainPoint>
        <PainPoint>
          &quot;No&quot; 들으면 포기 — 상대가 안 된다고 하면 그냥 물러남
        </PainPoint>
        <PainPoint>
          가격 깎기가 안 됨 — &quot;비싸요&quot; 한마디에 바로 할인 제안
        </PainPoint>
        <PainPoint>
          갑을 관계에서 을이라 못 함 — 불합리한 조건을 그대로 수용
        </PainPoint>
        <PainPoint>
          가족과 합의가 안 됨 — 부모님·배우자와 대화하면 감정만 상함
        </PainPoint>
        <PainPoint>
          이메일 협상이 어려움 — 글로 쓰면 톤이 세지거나 오해가 생김
        </PainPoint>
        <PainPoint>
          한국 문화에서 직접 요구하기 부담 — 체면·위계 때문에 말을 못 꺼냄
        </PainPoint>
      </div>

      {/* Failed Solutions */}
      <SectionTitle>
        &quot;이미 이것저것 해봤습니다&quot;
      </SectionTitle>
      <div className="space-y-1 mb-12">
        <FailedSolution
          title="미국식 협상 책 읽기"
          reason="한국 위계·체면 문화에 안 맞아서 실전에 적용 불가"
        />
        <FailedSolution
          title="그냥 참고 넘어가기"
          reason="쌓이면 폭발 — 결국 관계도 나빠지고 손해도 봄"
        />
        <FailedSolution
          title="감정적으로 대응"
          reason="화를 내면 오히려 불리해지고 후회만 남음"
        />
        <FailedSolution
          title="유튜브 협상 팁"
          reason="단편적 — 전체 시스템 없이 한두 가지만 아는 상태"
        />
        <FailedSolution
          title="자신감만 키우려 함"
          reason="자신감이 아니라 준비와 기술이 부족한 것"
        />
      </div>

      {/* Discovery */}
      <div className="p-8 rounded-2xl bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 mb-16">
        <h2 className="text-2xl font-bold mb-4 text-center">
          협상은 싸움이 아니라 문제 해결입니다
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          협상을 잘하는 사람과 못하는 사람의 차이는 말재주가 아닙니다. BATNA(최선의 대안)를 준비하고, 앵커링으로 기준점을 잡고, 상대의 이해(Interest)를 파악해서 양쪽 모두 만족하는 합의를 이끌어내는 시스템을 갖추었느냐의 차이입니다. 연봉 협상부터 비즈니스 계약, 가족 간 합의까지 — 한국 문화에 맞는 실전 스크립트와 30일 플랜으로 협상력을 체화할 수 있습니다.
        </p>
        <p className="text-lg font-semibold text-center mb-6">
          말재주가 아니라 준비,
          <br />
          이기는 것이 아니라 윈윈하는 것
        </p>
        <div className="space-y-2">
          <Benefit>
            BATNA·ZOPA 전략으로 협상 전에 이미 유리한 위치를 확보하는 프레임워크
          </Benefit>
          <Benefit>
            앵커링·라벨링·미러링 — 과학적으로 검증된 3대 협상 기술
          </Benefit>
          <Benefit>
            연봉 협상 스크립트 3종으로 바로 복사해서 쓸 수 있는 이메일·대면 화법
          </Benefit>
          <Benefit>
            한국 위계·체면 문화에서 통하는 한국식 협상 화법 패턴
          </Benefit>
          <Benefit>
            30일 협상 업그레이드 플랜으로 이론을 실전으로 전환
          </Benefit>
        </div>
        <div className="mt-6 p-4 rounded-lg bg-orange-100 dark:bg-orange-900 border border-orange-300 dark:border-orange-700">
          <p className="text-sm text-center font-medium">
            가장 중요한 사실:
            <br />
            <strong>
              &quot;기업의 84%는 연봉 협상을 기대하고 있습니다. 안 하는 건 여러분뿐입니다.&quot;
            </strong>
            <br />
            30분의 협상이 연봉 5~15%를 바꿉니다.
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
            <li>&#128560; 연봉 협상 한 번 못 하고 3년째 같은 급여</li>
            <li>&#128560; &quot;안 돼요&quot; 들으면 그 자리에서 포기</li>
            <li>&#128560; 갑을 관계에서 불리한 조건을 그대로 수용</li>
            <li>&#128560; 가족과 대화하면 감정만 상하고 합의 못 함</li>
            <li>&#128560; 이메일로 쓰면 톤이 공격적으로 읽혀서 갈등 증폭</li>
            <li>&#128560; 한국 직장에서 요구하면 &quot;건방지다&quot; 소리 들을까 걱정</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <h3 className="font-bold mb-3 text-green-600 dark:text-green-400">
            After
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>&#128522; BATNA를 준비하고 여유 있게 연봉 협상</li>
            <li>&#128522; &quot;No&quot;를 협상의 시작으로 활용하는 6가지 기법</li>
            <li>&#128522; 을의 협상 카드를 아는 비즈니스 협상력</li>
            <li>&#128522; 감정 인정 → 열린 질문으로 가족과 윈윈 합의</li>
            <li>&#128522; 쿠션 표현과 24시간 규칙으로 이메일 협상 마스터</li>
            <li>&#128522; 한국적 화법 패턴으로 존중하며 원하는 것을 얻음</li>
          </ul>
        </div>
      </div>

      {/* Chapter Preview */}
      <SectionTitle>10개 챕터 + 부록 미리보기</SectionTitle>
      <div className="space-y-3 mb-16">
        <ChapterPreview
          num={1}
          title="마인드셋 전환 ⭐"
          desc="협상은 싸움이 아니라 문제 해결. 분배적 vs 통합적 협상, 입장 vs 이해, BATNA 개념, 일상이 협상이라는 인식 전환."
        />
        <ChapterPreview
          num={2}
          title="준비가 90% ⭐"
          desc="정보 수집 3축(상대·시장·나), 세 가지 목표 설정, ZOPA 파악, BATNA 강화법, 5분 준비 루틴, 협상 준비 워크시트."
        />
        <ChapterPreview
          num={3}
          title="앵커링 기술 ⭐"
          desc="카너먼의 앵커링 효과, 먼저 제시 vs 기다리기 판단, 연봉·중고차·전세·프리랜서 앵커링 실전 스크립트."
        />
        <ChapterPreview
          num={4}
          title="No를 다루는 기술 ⭐"
          desc="No의 6가지 진짜 의미, FBI 라벨링·미러링 기법, 열린 질문 전환, 침묵의 힘, 감정적 반응 3단계 대처."
        />
        <ChapterPreview
          num={5}
          title="연봉 협상 완전 공략 ⭐"
          desc="이직·현 직장 연봉 협상 스크립트, 성과 정량화 프레임워크, 연봉 외 협상 항목 9가지, 2026 연봉 시장 데이터."
        />
        <ChapterPreview
          num={6}
          title="비즈니스 협상"
          desc="B2B 기본 원칙, '비싸요' 대응법, 계약 조건 조율, 프리랜서 단가 협상, 갑을 관계에서 을의 5단계 전략."
        />
        <ChapterPreview
          num={7}
          title="일상의 협상"
          desc="부모님·배우자·자녀와의 합의, 가사 분담·재정 관리 협상, 부동산·수리비·환불 요청, 이웃 소음 문제 해결."
        />
        <ChapterPreview
          num={8}
          title="한국 문화와 협상"
          desc="위계·체면·정 문화 활용법, 눈치로 읽는 협상 신호, 상사 유형별 전략, 한국식 식사 자리 협상 규칙."
        />
        <ChapterPreview
          num={9}
          title="디지털 시대 협상"
          desc="이메일 협상 원칙과 쿠션 표현, 화상 회의 전략, 카카오톡 협상 금지 이유, AI 활용법, 채널 선택 가이드."
        />
        <ChapterPreview
          num={10}
          title="30일 플랜 ⭐"
          desc="Week 1 마인드셋 → Week 2 앵커링+BATNA → Week 3 시뮬레이션 → Week 4 어려운 협상 도전. 매일 미션, 복기 일지."
        />
        <ChapterPreview
          num="부록"
          title="체크리스트·스크립트·템플릿 ⭐"
          desc="협상 준비 체크리스트 3종, 연봉 협상 스크립트 3종, BATNA 분석 워크시트, 이메일 템플릿 3종, 30일 플래너."
        />
      </div>

      {/* Trust */}
      <SectionTitle>왜 이 가이드를 신뢰할 수 있나요?</SectionTitle>
      <div className="space-y-1 mb-16 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <TrustItem icon="&#128218;" text="하버드 협상 프로젝트 기반 — 입장 vs 이해, BATNA, ZOPA 등 세계적으로 검증된 협상 프레임워크를 한국 실정에 맞게 재구성" />
        <TrustItem icon="&#128373;" text="FBI 협상 기법 — 크리스 보스의 라벨링·미러링·전략적 침묵을 한국 직장·일상 상황에 적용할 수 있는 스크립트로 전환" />
        <TrustItem icon="&#127470;&#127479;" text="한국 문화 특화 — 위계·체면·눈치·정 문화를 이해하고 활용하는 한국형 협상 전략과 화법 패턴 제공" />
        <TrustItem icon="&#128260;" text="계속 업데이트 — 독자 피드백과 최신 연봉 시장 데이터를 반영해 내용이 살아있음" />
      </div>

      {/* CTA */}
      <div className="text-center mb-16">
        <p className="text-lg font-semibold mb-4">
          원하는 것을 얻는 사람과 그렇지 못한 사람의 차이는 단 하나, 요청했느냐입니다.
        </p>
        <Link
          href="/premium/negotiation-skills/read"
          className="inline-block px-8 py-4 bg-orange-700 hover:bg-orange-800 text-white font-bold text-lg rounded-xl transition-colors shadow-lg"
        >
          &#129309; 본문 보기
        </Link>
        <p className="text-sm text-gray-400 mt-3">
          서문 + 10개 챕터 + 부록 체크리스트·스크립트·템플릿
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-8">
        <p>
          이 가이드는 하버드 협상 프로젝트·FBI 협상 기법·한국 직장 문화 연구를 바탕으로 한국인을 위해 재구성한 실전 협상 가이드입니다.
        </p>
        <p className="mt-2">
          개인의 성과를 보장하지 않습니다. 실행 결과는 개인의 노력과 환경에 따라 다를 수 있습니다.
        </p>
        <p className="mt-4">
          <Link href="/" className="text-orange-700 dark:text-orange-400 hover:underline">
            &#8592; 살아있는 정보책 전체 목록
          </Link>
        </p>
      </footer>
    </main>
  );
}
