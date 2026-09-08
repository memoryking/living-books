import Link from "next/link";
import BackToHome from "@/components/BackToHome";

export const metadata = {
  title: "0팔로워로 시작하는 스레드 마케팅 | 살아있는 정보책",
  description:
    "0팔로워부터 28일 로드맵. 첫 줄 훅 템플릿 30개, 글감 아이디어 60개, 수익화 5갈래 포함.",
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

export default function ThreadsMarketingLanding() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <BackToHome />

      {/* Hero */}
      <header className="text-center mb-16">
        <span className="text-6xl mb-6 block">&#129525;</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          0팔로워로 시작하는 스레드 마케팅
          <br />
          <span className="text-purple-700 dark:text-purple-400">
            글 몇 줄로 여는 수익화의 판
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          28일 로드맵 · 훅 템플릿 30개 · 글감 60개 · 수익화 5갈래 포함
        </p>
        <p className="text-sm text-gray-400">
          김약사 · 유원소망약국
        </p>
      </header>

      {/* Empathy Quote */}
      <div className="text-center mb-16 p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <p className="text-xl italic text-gray-600 dark:text-gray-400 mb-4">
          &quot;유튜브는 늦은 것 같고, 인스타는 사진 감각이 없고&quot;
        </p>
        <p className="text-base font-semibold text-purple-700 dark:text-purple-400">
          글 몇 줄로 시작할 수 있는 판이 하나 열려 있어요. 스레드입니다.
        </p>
      </div>

      {/* Pain Points */}
      <SectionTitle>지금 이런 상태 아닌가요?</SectionTitle>
      <div className="space-y-1 mb-12">
        <PainPoint>유튜브는 시작하기엔 이미 늦은 것 같음</PainPoint>
        <PainPoint>인스타는 사진 감각이 없어서 엄두가 안 남</PainPoint>
        <PainPoint>블로그는 너무 느리고 검색 유입까지 기약이 없음</PainPoint>
        <PainPoint>SNS 부업을 몇 년째 &quot;곧 해야지&quot;로 미루고 있음</PainPoint>
        <PainPoint>뭘 올려야 할지 아예 막막함</PainPoint>
        <PainPoint>팔로워가 0명이라 올려도 의미 없을 것 같음</PainPoint>
        <PainPoint>알고리즘이 어떻게 돌아가는지 도무지 모르겠음</PainPoint>
      </div>

      {/* Failed Solutions */}
      <SectionTitle>
        &quot;다른 플랫폼, 이미 시도해봤습니다&quot;
      </SectionTitle>
      <div className="space-y-1 mb-12">
        <FailedSolution
          title="유튜브"
          reason="편집 부담이 너무 커서 첫 영상도 못 올림"
        />
        <FailedSolution
          title="인스타그램"
          reason="사진이 필수라 진입장벽이 높음"
        />
        <FailedSolution
          title="블로그"
          reason="성장이 너무 느려 동기부여가 사라짐"
        />
        <FailedSolution
          title="틱톡"
          reason="얼굴 공개가 부담스러움"
        />
        <FailedSolution
          title="트위터(X)"
          reason="국내 유저가 적어 한국어 콘텐츠엔 비효율"
        />
      </div>

      {/* Discovery */}
      <div className="p-8 rounded-2xl bg-purple-50 dark:bg-purple-950 border border-purple-200 dark:border-purple-800 mb-16">
        <h2 className="text-2xl font-bold mb-4 text-center">
          팔로워 0명도, 사진 실력도 필요 없습니다
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          스레드는 텍스트 중심 플랫폼입니다. 길지 않아도 됩니다. 첫 줄 한 문장이 훅이 되면, 알고리즘이 처음 보는 사람에게도 글을 밀어줍니다. 팔로워 수가 아니라 글의 힘이 도달 범위를 결정합니다.
        </p>
        <p className="text-lg font-semibold text-center mb-6">
          시작이 늦은 게 아닙니다.
          <br />
          아직 자리가 많이 남아 있는 판입니다.
        </p>
        <div className="space-y-2">
          <Benefit>
            0팔로워부터 28일 로드맵 — 첫날 무엇을 할지부터 시작
          </Benefit>
          <Benefit>
            첫 줄 훅 템플릿 30개 — 멈추게 만드는 문장 공식
          </Benefit>
          <Benefit>
            글감 아이디어 60개 — &quot;뭘 써야 하지&quot; 막막함 해소
          </Benefit>
          <Benefit>
            수익화 5갈래 — 팔로워가 쌓이면 바로 연결할 수 있는 경로
          </Benefit>
          <Benefit>
            알고리즘 원리 + 변해도 살아남는 기술 — 플랫폼이 바뀌어도 통하는 원칙
          </Benefit>
        </div>
        <div className="mt-6 p-4 rounded-lg bg-purple-100 dark:bg-purple-900 border border-purple-300 dark:border-purple-700">
          <p className="text-sm text-center font-medium">
            핵심 사실:
            <br />
            <strong>
              &quot;스레드에서 도달 범위는 팔로워 수가 아니라 첫 줄의 힘으로 결정됩니다.&quot;
            </strong>
            <br />
            쓰는 법을 배우면, 0명에서도 시작됩니다.
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
            <li>&#128560; 뭘 올려야 할지 몰라 계속 미룸</li>
            <li>&#128560; 팔로워 0명이라 시작이 무의미할 것 같음</li>
            <li>&#128560; 알고리즘을 모르니 올려도 묻힘</li>
            <li>&#128560; 글감이 떨어지면 멈춰버림</li>
            <li>&#128560; 수익화는 팔로워가 몇만 명은 돼야 한다고 생각</li>
            <li>&#128560; SNS 부업 몇 년째 &quot;곧&quot;으로 미루는 중</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <h3 className="font-bold mb-3 text-green-600 dark:text-green-400">
            After
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>&#128522; 28일 로드맵으로 오늘 할 일이 정해짐</li>
            <li>&#128522; 첫 줄 훅 공식으로 0명에서도 도달 가능</li>
            <li>&#128522; 알고리즘 원리를 알고 올림</li>
            <li>&#128522; 글감 60개 목록으로 막힐 일 없음</li>
            <li>&#128522; 수익화 5갈래로 초기부터 방향 설정</li>
            <li>&#128522; 오늘 첫 글을 실제로 발행함</li>
          </ul>
        </div>
      </div>

      {/* Chapter Preview */}
      <SectionTitle>10개 챕터 + 부록 미리보기</SectionTitle>
      <div className="space-y-3 mb-16">
        <ChapterPreview
          num={1}
          title="왜 지금 스레드인가"
          desc="스레드가 다른 플랫폼과 다른 점, 지금 시작해야 하는 이유. 텍스트 중심 플랫폼이 갖는 구조적 진입장벽의 낮음을 확인한다."
        />
        <ChapterPreview
          num={2}
          title="알고리즘이 보는 것들 ⭐"
          desc="체류 시간, 공유율, 저장수 — 스레드 알고리즘이 실제로 반응하는 신호들. 변해도 살아남는 원칙까지."
        />
        <ChapterPreview
          num={3}
          title="계정 세팅"
          desc="프로필 한 줄 소개, 첫 고정 글, 카테고리 설정. 팔로워가 들어왔을 때 &quot;팔로우할 이유&quot;를 만드는 초기 세팅법."
        />
        <ChapterPreview
          num={4}
          title="글쓰기 공식 ⭐"
          desc="첫 줄 훅 → 본문 전개 → 마무리 CTA의 3단 구조. 멈추게 만드는 첫 문장 공식과 읽히는 본문의 패턴."
        />
        <ChapterPreview
          num={5}
          title="콘텐츠 시스템"
          desc="글감이 떨어지지 않는 아이디어 수집 루틴. 60개 글감 목록 활용법과 콘텐츠 캘린더 운영 방법."
        />
        <ChapterPreview
          num={6}
          title="팔로워 참여 전략 ⭐"
          desc="댓글, 리포스트, 저장을 끌어내는 인터랙션 설계. 참여율이 오르면 알고리즘이 더 밀어주는 구조."
        />
        <ChapterPreview
          num={7}
          title="플랫폼 연계"
          desc="인스타그램, 블로그, 뉴스레터와 스레드를 연결하는 방법. 채널 간 트래픽 순환 구조 만들기."
        />
        <ChapterPreview
          num={8}
          title="수익화 5갈래"
          desc="디지털 상품, 외부 링크 유입, 협찬, 유료 커뮤니티, 컨설팅. 팔로워 규모별 현실적인 수익화 시점."
        />
        <ChapterPreview
          num={9}
          title="트러블슈팅"
          desc="조회수가 안 나올 때, 성장이 멈출 때, 글감이 고갈됐을 때. 막히는 상황별 진단과 대응법."
        />
        <ChapterPreview
          num={10}
          title="90일 로드맵"
          desc="28일 초기 구축 이후 3개월까지의 성장 단계. 팔로워 100명 → 1000명 구간별 전략 전환점."
        />
        <ChapterPreview
          num="부록"
          title="실행 키트"
          desc="훅 템플릿 30개, 28일 발행 캘린더, 글감 60개, 체크리스트, 용어 사전을 모은 즉시 활용 가능한 도구 모음."
        />
      </div>

      {/* Bonuses */}
      <SectionTitle>&#127873; 보너스 5개</SectionTitle>
      <div className="space-y-3 mb-16">
        <BonusItem
          title="훅 템플릿 30개"
          desc="첫 줄에서 스크롤을 멈추게 만드는 문장 공식 30종. 질문형, 반전형, 숫자형, 공감형 등 유형별로 바로 쓸 수 있는 형식."
        />
        <BonusItem
          title="28일 발행 캘린더"
          desc="0팔로워 시작 기준, 첫 달 매일 무엇을 올릴지 날짜별로 정리한 실행 캘린더. 빈칸 채우기만 하면 됨."
        />
        <BonusItem
          title="글감 아이디어 60개"
          desc="어떤 주제의 계정이든 응용 가능한 글감 목록 60개. &quot;뭘 쓰지&quot;로 멈추는 일 없이 3개월 이상 버팁니다."
        />
        <BonusItem
          title="체크리스트"
          desc="글 발행 전 확인 사항, 계정 세팅 점검, 주간 성과 점검 시트. 루틴을 만드는 데 쓰는 실행 체크리스트."
        />
        <BonusItem
          title="용어 사전"
          desc="도달 범위, 노출, 인상, CTA, 리텐션 등 스레드와 SNS 마케팅에서 자주 나오는 용어를 쉽게 정리."
        />
      </div>

      {/* Trust */}
      <SectionTitle>왜 이 가이드를 신뢰할 수 있나요?</SectionTitle>
      <div className="space-y-1 mb-16 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <TrustItem icon="&#128197;" text="2026년 8월 최신 기준 — 스레드 알고리즘 업데이트와 기능 변경을 반영한 가장 최신 내용" />
        <TrustItem icon="&#128260;" text="팁 모음이 아닌 순서도 — 계정 세팅부터 수익화까지 단계가 있는 실행 흐름으로 구성" />
        <TrustItem icon="&#128202;" text="계속 업데이트 — 플랫폼 변화와 독자 피드백을 반영해 내용이 살아있음" />
        <TrustItem icon="&#9889;" text="즉시 실행 가능한 도구 중심 — 이론보다 오늘 쓸 수 있는 템플릿과 캘린더로 구성" />
      </div>

      {/* CTA */}
      <div className="text-center mb-16">
        <p className="text-lg font-semibold mb-4">
          오늘 첫 글을 올릴 수 있습니다.
        </p>
        <Link
          href="/premium/threads-marketing/read"
          className="inline-block px-8 py-4 bg-purple-700 hover:bg-purple-800 text-white font-bold text-lg rounded-xl transition-colors shadow-lg"
        >
          &#128214; 본문 보기
        </Link>
        <p className="text-sm text-gray-400 mt-3">
          서문 + 10개 챕터 + 부록 + 보너스 5개
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-8">
        <p>
          이 가이드는 스레드 플랫폼의 공개된 작동 원리와 실제 운영 경험을 바탕으로 작성되었습니다.
        </p>
        <p className="mt-2">
          수익 결과는 개인의 실행 방식과 콘텐츠 품질에 따라 달라집니다.
        </p>
        <p className="mt-4">
          <Link href="/" className="text-purple-700 hover:underline">
            &#8592; 살아있는 정보책 전체 목록
          </Link>
        </p>
      </footer>
    </main>
  );
}
