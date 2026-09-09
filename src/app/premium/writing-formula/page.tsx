import Link from "next/link";
import BackToHome from "@/components/BackToHome";

export const metadata = {
  title: "뇌에 박히는 글쓰기 공식 | 살아있는 정보책",
  description:
    "설득의 90%는 구조로 결정됩니다 — 5 Whys 독자 분석부터 치알디니 6원칙 설득 시스템까지. 6가지 훅 공식, 30개 헤드라인 템플릿, 문제→해결→증거→행동 4단계 구조로 팔리는 글을 만드는 실전 가이드.",
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

export default function WritingFormulaLanding() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <BackToHome />

      {/* Hero */}
      <header className="text-center mb-16">
        <span className="text-6xl mb-6 block">&#9997;&#65039;</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          당신의 글이 읽히지 않는 건 재능이 아니라 공식의 문제입니다
          <br />
          <span className="text-amber-700 dark:text-amber-400">
            뇌에 박히는 글에는 과학이 있습니다
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          뇌에 박히는 글쓰기 공식
        </p>
        <p className="text-sm text-gray-400">
          김약사 · 유원소망약국
        </p>
      </header>

      {/* Empathy Quote */}
      <div className="text-center mb-16 p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <p className="text-xl italic text-gray-600 dark:text-gray-400 mb-4">
          &quot;설득의 90%는 구조로 결정됩니다.&quot; &mdash; Robert Cialdini
        </p>
        <p className="text-base font-semibold text-amber-700 dark:text-amber-300">
          공식을 알면 누구나 읽히는 글을 쓸 수 있습니다.
        </p>
      </div>

      {/* Pain Points */}
      <SectionTitle>지금 이런 상태 아닌가요?</SectionTitle>
      <div className="space-y-1 mb-12">
        <PainPoint>
          글 조회수 10 — 정성껏 썼는데 아무도 보지 않는 허무함
        </PainPoint>
        <PainPoint>
          좋은 내용인데 안 읽힘 — 내용은 충분한데 첫 줄에서 독자가 떠나버림
        </PainPoint>
        <PainPoint>
          CTA 클릭 없음 — 끝까지 읽어도 구매·문의·팔로우로 이어지지 않음
        </PainPoint>
        <PainPoint>
          첫 문장 쓰기 두려움 — 빈 화면 앞에서 한 시간째 멈춰있음
        </PainPoint>
        <PainPoint>
          뭘 써야 할지 막막 — 소재도 아이디어도 떠오르지 않는 글쓰기 공포
        </PainPoint>
        <PainPoint>
          시간만 오래 걸림 — 글 하나 쓰는 데 반나절이 사라지는 비효율
        </PainPoint>
        <PainPoint>
          경쟁자 글은 잘 되는데 — 비슷한 주제인데 왜 저 글만 바이럴이 되는지 모름
        </PainPoint>
      </div>

      {/* Failed Solutions */}
      <SectionTitle>
        &quot;이미 이것저것 해봤습니다&quot;
      </SectionTitle>
      <div className="space-y-1 mb-12">
        <FailedSolution
          title="&quot;많이 쓰면 늘겠지&quot;"
          reason="양≠질 — 잘못된 방향으로 100편을 써도 실력은 그대로"
        />
        <FailedSolution
          title="글쓰기 강의 수강"
          reason="이론만 — 실전에서 막히는 순간 배운 것이 적용되지 않음"
        />
        <FailedSolution
          title="남의 글 따라하기"
          reason="자기 목소리 없음 — 흉내는 내지만 독자가 느끼는 진정성이 사라짐"
        />
        <FailedSolution
          title="AI로 대체"
          reason="개성 없는 글 — 브랜드가 없는 무색무취의 텍스트만 양산됨"
        />
        <FailedSolution
          title="일단 올리기"
          reason="전략 없는 양산 — 발행 수는 늘어도 독자와의 관계는 쌓이지 않음"
        />
      </div>

      {/* Discovery */}
      <div className="p-8 rounded-2xl bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 mb-16">
        <h2 className="text-2xl font-bold mb-4 text-center">
          읽히는 글에는 공식이 있습니다
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          글이 안 읽히는 이유는 재능 부족이 아닙니다. 독자의 뇌가 반응하는 구조를 모르기 때문입니다. 5 Whys로 독자의 진짜 고민을 꿰뚫고, 6가지 훅 공식으로 첫 문장을 설계하고, 치알디니 6원칙을 글에 녹이면 — 평범한 글이 읽히고, 기억되고, 행동하게 만드는 글로 바뀝니다.
        </p>
        <p className="text-lg font-semibold text-center mb-6">
          재능이 아니라 공식,
          <br />
          감이 아니라 구조로 쓰는 것
        </p>
        <div className="space-y-2">
          <Benefit>
            5 Whys로 독자의 진짜 고민을 꿰뚫는 분석법으로 심장을 찌르는 글 작성
          </Benefit>
          <Benefit>
            6가지 훅 공식으로 첫 문장에서 스크롤을 멈추게 하는 헤드라인 설계
          </Benefit>
          <Benefit>
            치알디니 6원칙을 글쓰기에 적용하는 설득 시스템으로 행동을 이끌어내는 글
          </Benefit>
          <Benefit>
            문제→해결→증거→행동 4단계 구조로 팔리는 글의 뼈대를 잡는 방법
          </Benefit>
          <Benefit>
            30일 챌린지로 글쓰기 근육을 만드는 루틴으로 꾸준히 쓰는 시스템 구축
          </Benefit>
        </div>
        <div className="mt-6 p-4 rounded-lg bg-amber-100 dark:bg-amber-900 border border-amber-300 dark:border-amber-700">
          <p className="text-sm text-center font-medium">
            가장 중요한 사실:
            <br />
            <strong>
              &quot;치알디니 교수의 40년 연구: 설득은 타고나는 것이 아니라 학습 가능한 기술입니다&quot;
            </strong>
            <br />
            공식을 알면 누구나 읽히는 글을 쓸 수 있습니다.
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
            <li>&#128560; 첫 문장을 어떻게 써야 할지 몰라 1시간째 멈춰있음</li>
            <li>&#128560; 좋은 내용인데 조회수가 두 자릿수를 넘기지 못함</li>
            <li>&#128560; 글을 올려도 CTA 클릭률이 거의 0%</li>
            <li>&#128560; 경쟁자 글은 바이럴인데 왜인지 분석 불가</li>
            <li>&#128560; 글 하나에 반나절을 쏟아붓는 비효율</li>
            <li>&#128560; AI로 썼더니 개성 없는 글만 나옴</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <h3 className="font-bold mb-3 text-green-600 dark:text-green-400">
            After
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>&#128522; 6가지 훅 공식으로 첫 문장을 5분 안에 완성</li>
            <li>&#128522; 호기심 갭 기법으로 클릭률이 2~5배 상승</li>
            <li>&#128522; 치알디니 6원칙 적용으로 CTA 전환율 향상</li>
            <li>&#128522; 바이럴 글의 구조를 분석해 내 글에 적용 가능</li>
            <li>&#128522; 역설계 프레임으로 글 쓰는 시간이 절반으로 단축</li>
            <li>&#128522; 30일 챌린지로 나만의 목소리가 담긴 루틴 완성</li>
          </ul>
        </div>
      </div>

      {/* Chapter Preview */}
      <SectionTitle>10개 챕터 + 부록 미리보기</SectionTitle>
      <div className="space-y-3 mb-16">
        <ChapterPreview
          num={1}
          title="독자를 꿰뚫는 기술 ⭐"
          desc="5 Whys로 독자의 표면적 욕구 뒤에 숨은 진짜 동기를 파헤치는 법. 공감 맵 4분면으로 독자의 머릿속에 들어가고, SMART 목표로 글의 방향을 잡고, 역설계로 결론부터 구조를 세우는 독자 분석 프레임워크."
        />
        <ChapterPreview
          num={2}
          title="뇌에 박히는 첫 문장 ⭐"
          desc="호기심 갭(정보·결과·반직관)으로 독자의 뇌에 빈칸을 만드는 기법. How-To·List·Question·Secret·Negative·Challenge 6가지 헤드라인 공식과 리드 문장 5가지 패턴. 30초 안에 헤드라인을 완성하는 점검 체크리스트."
        />
        <ChapterPreview
          num={3}
          title="멈출 수 없는 글의 비밀 ⭐"
          desc="스토리텔링 5요소(배경·인물·갈등·절정·해결)로 이야기의 뼈대를 만들고, Before→Turning Point→After 3줄 스토리로 짧은 글에서도 몰입을 만드는 법. 자이가르닉 효과를 활용한 클리프행어 5기법과 Bucket Brigade 20선."
        />
        <ChapterPreview
          num={4}
          title="글쓰기 근육 만들기 ⭐"
          desc="매일 15분 필사 프로토콜로 좋은 글의 패턴을 무의식에 저장하는 훈련법. 노션·구글 스프레드시트로 스와이프 파일을 구축하는 6카테고리 체계. 능동태로 글에 힘을 싣는 3규칙과 3의 법칙·비유로 기억에 남는 문장 만들기."
        />
        <ChapterPreview
          num={5}
          title="설득하는 문장의 과학 ⭐"
          desc="치알디니 6원칙(상호성·일관성·사회적 증거·호감·권위·희소성)을 글쓰기에 적용하는 실전 시스템. 작은 동의부터 이끌어내는 일관성 기법, 구체적 숫자로 신뢰를 쌓는 사회적 증거, 6원칙 조합으로 설득력을 폭발시키는 전략."
        />
        <ChapterPreview
          num={6}
          title="대화체 글쓰기"
          desc="1:1 대화하듯 쓰는 대화체 기법으로 독자와 친밀감을 만드는 법. 문어체를 구어체로 전환하는 패턴, 독자를 직접 부르는 2인칭 글쓰기, 질문-답변 구조로 독자의 내면 대화에 참여하는 방법."
        />
        <ChapterPreview
          num={7}
          title="팔리는 글의 구조 ⭐"
          desc="문제→해결→증거→행동 4단계 구조로 처음부터 끝까지 독자를 이끄는 글쓰기 설계. AIDA·PAS·BAB 등 검증된 카피라이팅 프레임워크를 한국 플랫폼에 맞게 재구성한 실전 구조 템플릿."
        />
        <ChapterPreview
          num={8}
          title="플랫폼 전략"
          desc="네이버 블로그·인스타그램·스레드·브런치·스마트스토어 상세페이지별 최적화 전략. 플랫폼마다 다른 독자 행동 패턴과 알고리즘을 반영한 글 길이·구조·CTA 가이드라인."
        />
        <ChapterPreview
          num={9}
          title="루틴 시스템"
          desc="매일 쓰는 글쓰기 습관을 만드는 루틴 설계법. 아이디어 수집-초안-퇴고-발행의 4단계 워크플로우, 창작 블록을 깨는 5가지 기법, 스와이프 파일을 활용한 주간 루틴 구축."
        />
        <ChapterPreview
          num={10}
          title="30일 챌린지 ⭐"
          desc="1일차 글쓰기 현재 상태 점검부터 30일차 나만의 글쓰기 공식 완성까지 — 일별 미션과 체크포인트. 필사·스와이프 파일·헤드라인 공식·치알디니 원칙을 순서대로 체화하는 실전 로드맵."
        />
        <ChapterPreview
          num="부록"
          title="글쓰기 실행 키트 ⭐"
          desc="즉시 쓸 수 있는 헤드라인 템플릿 30개, 독자 분석 워크시트, 스와이프 파일 노션 템플릿, 치알디니 6원칙 적용 체크리스트, 플랫폼별 CTA 문구 모음."
        />
      </div>

      {/* Trust */}
      <SectionTitle>왜 이 가이드를 신뢰할 수 있나요?</SectionTitle>
      <div className="space-y-1 mb-16 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <TrustItem icon="&#128218;" text="치알디니 6원칙 + Reddit 커뮤니티 분석 — 40년 설득 심리학 연구와 실제 커뮤니티에서 검증된 글쓰기 패턴을 바탕으로 한국 크리에이터 현실에 맞게 재구성" />
        <TrustItem icon="&#127472;&#127479;" text="네이버·인스타·스레드 한국 플랫폼 — 각 플랫폼의 알고리즘과 독자 행동 패턴을 반영한 최적화 전략과 실전 예시를 구체적으로 다룸" />
        <TrustItem icon="&#128221;" text="30개 헤드라인 템플릿 — 바로 복사해서 쓸 수 있는 검증된 헤드라인 공식과 부록 실행 키트로 이론을 즉시 실전에 적용 가능" />
        <TrustItem icon="&#128260;" text="계속 업데이트 — 독자 피드백과 새로운 글쓰기 사례를 반영해 내용이 살아있음" />
      </div>

      {/* CTA */}
      <div className="text-center mb-16">
        <p className="text-lg font-semibold mb-4">
          글쓰기 재능은 타고나는 게 아닙니다. 공식을 알면 누구나 읽히는 글을 쓸 수 있습니다.
        </p>
        <Link
          href="/premium/writing-formula/read"
          className="inline-block px-8 py-4 bg-amber-700 hover:bg-amber-800 text-white font-bold text-lg rounded-xl transition-colors shadow-lg"
        >
          &#9997;&#65039; 본문 보기
        </Link>
        <p className="text-sm text-gray-400 mt-3">
          서문 + 10개 챕터 + 부록 글쓰기 실행 키트
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-8">
        <p>
          이 가이드는 치알디니 설득의 심리학·마케팅 카피라이팅 이론·Reddit 커뮤니티 분석을 한국 크리에이터 현실에 맞게 재구성한 실전 가이드입니다.
        </p>
        <p className="mt-2">
          개인의 성과를 보장하지 않습니다. 실행 결과는 개인의 노력과 환경에 따라 다를 수 있습니다.
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
