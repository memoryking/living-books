import Link from "next/link";
import BackToHome from "@/components/BackToHome";

export const metadata = {
  title: "돈 한푼 들이지 않고 SNS 계정 키우기 | 살아있는 정보책",
  description:
    "광고비 0원. SNS만으로 사업을 키우는 시대. 참여율이 팔로워 수보다 중요한 이유, AIDA 콘텐츠 프레임워크, 해시태그·SEO 무료 노출 전략, 콘텐츠 캘린더, 60일 0→1,000 팔로워 로드맵.",
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

export default function SnsGrowthLanding() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <BackToHome />

      {/* Hero */}
      <header className="text-center mb-16">
        <span className="text-6xl mb-6 block">&#128241;</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          돈 한푼 들이지 않고 SNS 계정 키우기
          <br />
          <span className="text-violet-700 dark:text-violet-400">
            광고비 0원. SNS만으로 사업을 키우는 시대.
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          팔로워 수가 아니라 참여율이 답입니다.
        </p>
        <p className="text-sm text-gray-400">
          김약사 · 유원소망약국
        </p>
      </header>

      {/* Empathy Quote */}
      <div className="text-center mb-16 p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <p className="text-xl italic text-gray-600 dark:text-gray-400 mb-4">
          &quot;참여율 8%인 1,000명 계정이 참여율 1%인 10,000명보다 수익이 높습니다.&quot;
        </p>
        <p className="text-base font-semibold text-violet-700 dark:text-violet-300">
          팔로워가 아니라 관계를 키우세요.
        </p>
      </div>

      {/* Pain Points */}
      <SectionTitle>지금 이런 상태 아닌가요?</SectionTitle>
      <div className="space-y-1 mb-12">
        <PainPoint>
          매일 올려도 팔로워 안 늠 — 꾸준히 게시해도 숫자가 제자리를 맴돎
        </PainPoint>
        <PainPoint>
          광고 없이 노출 안 됨 — 돈을 쓰지 않으면 아무도 내 콘텐츠를 보지 않는 것 같음
        </PainPoint>
        <PainPoint>
          어떤 콘텐츠를 올려야 할지 모름 — 매번 무엇을 써야 할지 고민에 시간을 다 쏟음
        </PainPoint>
        <PainPoint>
          해시태그 전략 없음 — 아무 해시태그나 달아도 효과가 없음
        </PainPoint>
        <PainPoint>
          알고리즘 변화에 당황 — 플랫폼이 바뀔 때마다 전략을 처음부터 다시 짜야 함
        </PainPoint>
        <PainPoint>
          팔로워는 늘어도 전환 안 됨 — 숫자는 올라가는데 실제 매출이나 문의로 이어지지 않음
        </PainPoint>
        <PainPoint>
          여러 플랫폼 동시 운영에 지침 — 인스타, 유튜브, 블로그를 동시에 하려니 지쳐버림
        </PainPoint>
      </div>

      {/* Failed Solutions */}
      <SectionTitle>
        &quot;이미 이것저것 해봤습니다&quot;
      </SectionTitle>
      <div className="space-y-1 mb-12">
        <FailedSolution
          title="&quot;매일 올리기&quot;"
          reason="전략 없는 양산 — 게시 빈도를 늘려도 참여율 없는 콘텐츠는 오히려 계정을 망침"
        />
        <FailedSolution
          title="&quot;팔로워 구매&quot;"
          reason="가짜 참여율 0% — 숫자만 부풀고 알고리즘은 오히려 외면함"
        />
        <FailedSolution
          title="&quot;광고비 투자&quot;"
          reason="돈 떨어지면 끝 — 광고를 끄는 순간 노출도 함께 사라짐"
        />
        <FailedSolution
          title="&quot;유행 콘텐츠 따라하기&quot;"
          reason="정체성 없음 — 남의 스타일을 따라하면 차별화가 사라지고 팔로워도 이탈함"
        />
        <FailedSolution
          title="&quot;플랫폼 옮기기&quot;"
          reason="같은 문제 반복 — 전략 없이 채널만 바꿔도 결과는 동일함"
        />
      </div>

      {/* Discovery */}
      <div className="p-8 rounded-2xl bg-violet-50 dark:bg-violet-950 border border-violet-200 dark:border-violet-800 mb-16">
        <h2 className="text-2xl font-bold mb-4 text-center">
          SNS 성장은 운이 아니라 시스템입니다
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          팔로워가 많은 계정과 수익이 높은 계정은 다릅니다. 참여율 8%짜리 1,000명 계정이 참여율 1%짜리 10만 계정보다 실제 비즈니스 효과가 높습니다. 스크롤을 멈추게 하는 AIDA 콘텐츠, 무료 노출을 극대화하는 해시태그·SEO 전략, 고민 없이 실행하는 콘텐츠 캘린더 — 이 세 가지 시스템을 갖추면 광고비 없이도 계정이 성장합니다.
        </p>
        <p className="text-lg font-semibold text-center mb-6">
          팔로워가 아니라 참여율,
          <br />
          광고가 아니라 관계로 키우는 것
        </p>
        <div className="space-y-2">
          <Benefit>
            AIDA 프레임워크로 스크롤을 멈추게 하는 콘텐츠 구조 설계
          </Benefit>
          <Benefit>
            80/20 법칙으로 핵심 20% 콘텐츠에 집중해 효율 극대화
          </Benefit>
          <Benefit>
            해시태그+SEO로 광고 없이 무료 노출 극대화하는 전략
          </Benefit>
          <Benefit>
            콘텐츠 캘린더로 매일 &apos;뭘 올리지?&apos; 고민 없이 게시
          </Benefit>
          <Benefit>
            60일 로드맵으로 0에서 1,000 팔로워까지 단계별 실행
          </Benefit>
        </div>
        <div className="mt-6 p-4 rounded-lg bg-violet-100 dark:bg-violet-900 border border-violet-300 dark:border-violet-700">
          <p className="text-sm text-center font-medium">
            가장 중요한 사실:
            <br />
            <strong>
              &quot;Popular Pays 연구: 4-7회/주 게시 시 참여율이 2-3회보다 높지 않음. 빈도보다 품질입니다.&quot;
            </strong>
            <br />
            얼마나 자주가 아니라 어떤 콘텐츠를 올리느냐가 핵심입니다.
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
            <li>&#128560; 매일 올려도 팔로워가 늘지 않음</li>
            <li>&#128560; 광고 없이는 노출이 없다고 포기함</li>
            <li>&#128560; 무엇을 올릴지 매일 고민에 지침</li>
            <li>&#128560; 팔로워는 늘어도 전환이 안 됨</li>
            <li>&#128560; 해시태그 달아도 효과를 모름</li>
            <li>&#128560; 플랫폼만 옮겨 다니며 같은 실수 반복</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <h3 className="font-bold mb-3 text-green-600 dark:text-green-400">
            After
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>&#128522; AIDA 구조로 스크롤 멈추는 콘텐츠 작성</li>
            <li>&#128522; 해시태그·SEO로 광고비 없이 무료 노출</li>
            <li>&#128522; 콘텐츠 캘린더로 고민 없이 게시 실행</li>
            <li>&#128522; 참여율 중심 전략으로 실제 전환 발생</li>
            <li>&#128522; 6대 플랫폼 특성에 맞는 최적화 전략 적용</li>
            <li>&#128522; 60일 로드맵으로 0→1,000 팔로워 달성</li>
          </ul>
        </div>
      </div>

      {/* Chapter Preview */}
      <SectionTitle>10개 챕터 + 부록 미리보기</SectionTitle>
      <div className="space-y-3 mb-16">
        <ChapterPreview
          num={1}
          title="참여율>팔로워 ⭐"
          desc="팔로워 수보다 참여율이 왜 더 중요한지 데이터로 증명. 참여율 8% 계정이 참여율 1% 10만 계정을 이기는 이유, 참여율 계산법, 플랫폼별 평균 참여율 기준과 내 계정의 현재 위치 진단법."
        />
        <ChapterPreview
          num={2}
          title="6대 플랫폼 비교 ⭐"
          desc="인스타그램·유튜브·블로그·틱톡·링크드인·스레드 — 6개 플랫폼의 알고리즘 특성, 주요 사용자층, 콘텐츠 형식, 성장 속도를 비교. 내 비즈니스에 맞는 플랫폼 1-2개를 선택하는 기준."
        />
        <ChapterPreview
          num={3}
          title="첫 100명 전략 ⭐"
          desc="팔로워 0에서 100명까지 가장 빠른 경로. 타깃 커뮤니티에서 존재감 만들기, DM 첫 인사 템플릿, 협업 제안 방법, 초기 팔로워가 다음 팔로워를 데려오는 네트워크 효과 만드는 법."
        />
        <ChapterPreview
          num={4}
          title="AIDA 콘텐츠 ⭐"
          desc="주의(Attention)→관심(Interest)→욕구(Desire)→행동(Action) 프레임워크로 스크롤을 멈추는 콘텐츠 구조 설계. 첫 3초 훅 작성법, 본문 구성 원칙, 행동 유도 CTA 문구 20가지."
        />
        <ChapterPreview
          num={5}
          title="해시태그·SEO"
          desc="플랫폼별 해시태그 최적 개수와 조합 전략. 대형·중형·소형 해시태그 3단 조합법, 키워드 리서치 무료 도구 활용, 검색 유입을 만드는 SNS SEO 원칙으로 광고비 없이 노출 극대화."
        />
        <ChapterPreview
          num={6}
          title="DM·댓글 소통"
          desc="팔로워를 고객으로 전환하는 DM 대화법. 댓글 관리 전략, DM 첫 메시지 성공률 높이는 방법, 자동화 없이도 관계를 유지하는 소통 루틴, 부정적 댓글 대응 원칙."
        />
        <ChapterPreview
          num={7}
          title="콘텐츠 캘린더 ⭐"
          desc="주간·월간 콘텐츠 계획을 세우는 방법. 80/20 법칙으로 핵심 20% 콘텐츠 유형 선정, 배치 작업으로 한 번에 여러 콘텐츠 제작, &apos;무엇을 올릴지&apos; 고민을 없애는 콘텐츠 뱅크 만들기."
        />
        <ChapterPreview
          num={8}
          title="협업·크로스프로모션"
          desc="비용 없이 계정을 키우는 가장 빠른 방법 — 크리에이터 협업. 콜라보 제안 메시지 작성법, 나보다 큰 계정에 접근하는 방법, 크로스프로모션으로 서로의 팔로워를 교환하는 구조 설계."
        />
        <ChapterPreview
          num={9}
          title="분석·최적화"
          desc="플랫폼 기본 인사이트 데이터 읽는 법. 어떤 콘텐츠가 참여율이 높은지 패턴 찾기, 게시 최적 시간대 찾는 방법, A/B 테스트로 썸네일·제목·CTA를 개선하는 반복 최적화 루틴."
        />
        <ChapterPreview
          num={10}
          title="60일 로드맵 ⭐"
          desc="0팔로워에서 1,000팔로워까지 60일 단계별 실행 계획. 1-2주차 기반 구축, 3-4주차 첫 100명, 5-6주차 참여율 강화, 7-8주차 협업·크로스프로모션으로 1,000명 달성하는 주차별 체크리스트."
        />
        <ChapterPreview
          num="부록"
          title="실행 키트 ⭐"
          desc="즉시 쓸 수 있는 AIDA 콘텐츠 작성 템플릿, 해시태그 조합 워크시트, 콘텐츠 캘린더 양식, DM 첫 메시지 스크립트, 60일 팔로워 성장 트래커."
        />
      </div>

      {/* Trust */}
      <SectionTitle>왜 이 가이드를 신뢰할 수 있나요?</SectionTitle>
      <div className="space-y-1 mb-16 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <TrustItem icon="&#128202;" text="Reddit SNS 커뮤니티 분석 — r/socialmedia·r/entrepreneur 등 실제 운영자들의 성공·실패 경험을 분석해 이론이 아닌 현장 검증된 전략으로 구성" />
        <TrustItem icon="&#127472;&#127479;" text="한국 SNS 환경 반영 — 카카오·네이버 블로그·인스타그램 국내 알고리즘 특성과 한국 사용자 행동 패턴을 반영한 실전 전략 제시" />
        <TrustItem icon="&#128241;" text="6대 플랫폼 실전 비교 — 인스타·유튜브·블로그·틱톡·링크드인·스레드 각 플랫폼의 특성과 최적 전략을 상황별로 비교해 선택 기준 제공" />
        <TrustItem icon="&#128257;" text="계속 업데이트 — 알고리즘 변화와 새로운 플랫폼 등장에 맞춰 내용이 살아있음" />
      </div>

      {/* CTA */}
      <div className="text-center mb-16">
        <p className="text-lg font-semibold mb-4">
          광고비는 없어도 됩니다. 전략이 있으면 됩니다.
        </p>
        <Link
          href="/premium/sns-growth/read"
          className="inline-block px-8 py-4 bg-violet-700 hover:bg-violet-800 text-white font-bold text-lg rounded-xl transition-colors shadow-lg"
        >
          &#128241; 본문 보기
        </Link>
        <p className="text-sm text-gray-400 mt-3">
          서문 + 10개 챕터 + 부록 실행 키트
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-8">
        <p>
          이 가이드는 Reddit 마케팅 커뮤니티 분석과 AIDA·80/20 법칙을 한국 SNS 환경에 맞게 재구성한 실전 가이드입니다.
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
