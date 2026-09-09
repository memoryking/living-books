import Link from "next/link";
import BackToHome from "@/components/BackToHome";

export const metadata = {
  title: "완판의 치트키, 런칭 스토리텔링의 비밀 | 살아있는 정보책",
  description:
    "프리런칭부터 수익화 루프까지 — 제품 출시의 A to Z 실전 가이드. 4R 프레임워크, 5단계 서사 구조, D-Day 48시간 체크리스트, 수익화 루프 시스템.",
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
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-sm">
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

export default function LaunchStorytellingLanding() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <BackToHome />

      {/* Hero */}
      <header className="text-center mb-16">
        <span className="text-6xl mb-6 block">&#128640;</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          완판의 치트키, 런칭 스토리텔링의 비밀
          <br />
          <span className="text-orange-600 dark:text-orange-400">
            프리런칭부터 수익화 루프까지 — 제품 출시의 A to Z 실전 가이드
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          아무리 좋은 제품이라도 런칭을 못 하면 소용없습니다.
        </p>
        <p className="text-sm text-gray-400">
          김약사 · 유원소망약국
        </p>
      </header>

      {/* Empathy Quote */}
      <div className="text-center mb-16 p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <p className="text-xl italic text-gray-600 dark:text-gray-400 mb-4">
          &quot;스타트업 실패의 2번째 이유는 시장 필요성 부재입니다.&quot;
        </p>
        <p className="text-base font-semibold text-orange-700 dark:text-orange-300">
          그런데 좋은 제품인데 왜 아무도 사지 않을까요?
        </p>
      </div>

      {/* Pain Points */}
      <SectionTitle>지금 이런 상태 아닌가요?</SectionTitle>
      <div className="space-y-1 mb-12">
        <PainPoint>
          모두에게 사랑받으려다 누구에게도 인상 못 남김
        </PainPoint>
        <PainPoint>
          기능만 나열해서 아무도 안 사줌
        </PainPoint>
        <PainPoint>
          프리런칭 없이 갑자기 출시해서 반응이 없음
        </PainPoint>
        <PainPoint>
          런칭 당일 시스템 오류로 기회를 날림
        </PainPoint>
        <PainPoint>
          이메일 보내도 열어보지 않음
        </PainPoint>
        <PainPoint>
          한 번 런칭하고 끝 — 반복적인 수익이 없음
        </PainPoint>
        <PainPoint>
          데이터 분석 없이 감으로 판단해서 매번 같은 실수 반복
        </PainPoint>
      </div>

      {/* Failed Solutions */}
      <SectionTitle>
        &quot;이미 이것저것 해봤습니다&quot;
      </SectionTitle>
      <div className="space-y-1 mb-12">
        <FailedSolution
          title="갑자기 출시 공지"
          reason="준비 없이 — 기대감 없이 출시해서 묻혀버림"
        />
        <FailedSolution
          title="할인으로만 유인"
          reason="가치 없이 — 마진만 깎이고 충성 고객은 안 생김"
        />
        <FailedSolution
          title="SNS에 한번 올리기"
          reason="체계 없이 — 한번 올리고 반응 없으면 포기"
        />
        <FailedSolution
          title="모든 사람에게 DM"
          reason="타겟 없이 — 스팸 취급받고 계정만 위험해짐"
        />
        <FailedSolution
          title="런칭 후 방치"
          reason="루프 없이 — 한번 팔고 끝, 반복 수익 구조가 없음"
        />
      </div>

      {/* Discovery */}
      <div className="p-8 rounded-2xl bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 mb-16">
        <h2 className="text-2xl font-bold mb-4 text-center">
          런칭은 이벤트가 아니라 시스템입니다
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          성공적인 런칭은 당일에 결정되지 않습니다. 프리런칭에서 쌓은 기대감, 정교하게 설계된 서사 구조, 실시간 대응 체계, 그리고 런칭 후 수익화 루프까지 — 이 모든 것이 맞물려야 완판이 일어납니다. 한 번의 성공이 아니라 매번 더 강해지는 런칭 시스템을 만드는 것이 핵심입니다.
        </p>
        <p className="text-lg font-semibold text-center mb-6">
          첫 런칭보다 두 번째 런칭이,
          <br />
          두 번째보다 세 번째 런칭이 더 강해지는 루프
        </p>
        <div className="space-y-2">
          <Benefit>
            4R 프레임워크로 진짜 고객 찾기 — 타겟을 좁혀야 메시지가 날카로워지는 원리
          </Benefit>
          <Benefit>
            5단계 서사 구조로 설레는 런칭 — 고객이 기다리게 만드는 스토리라인 설계
          </Benefit>
          <Benefit>
            D-Day 48시간 체크리스트 — 런칭 당일 오류 없이 완벽하게 실행하는 준비 목록
          </Benefit>
          <Benefit>
            수익화 루프 시스템 — 한 번이 아닌 반복적으로 수익이 발생하는 구조 설계
          </Benefit>
          <Benefit>
            ICE 실험으로 매번 더 강해지는 런칭 — 데이터 기반으로 다음 런칭을 개선하는 방법
          </Benefit>
        </div>
        <div className="mt-6 p-4 rounded-lg bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800">
          <p className="text-sm text-center font-medium">
            가장 중요한 사실:
            <br />
            <strong>
              &quot;좋은 제품이 팔리는 게 아니라, 잘 런칭된 제품이 팔립니다.&quot;
            </strong>
            <br />
            이제 런칭을 감이 아닌 시스템으로 만들 때입니다.
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
            <li>&#128560; 갑자기 출시하고 반응 없음에 실망</li>
            <li>&#128560; 기능 설명만 해서 아무도 구매 안 함</li>
            <li>&#128560; 런칭 당일 허둥대다 기회를 날림</li>
            <li>&#128560; 이메일 오픈율이 너무 낮음</li>
            <li>&#128560; 한번 팔고 끝, 다음 달이 막막함</li>
            <li>&#128560; 감으로 판단해서 매번 같은 실수</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <h3 className="font-bold mb-3 text-green-600 dark:text-green-400">
            After
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>&#128522; 프리런칭으로 출시 전부터 기대감이 쌓임</li>
            <li>&#128522; 스토리로 고객의 마음을 움직여 구매 전환</li>
            <li>&#128522; D-Day 체크리스트로 완벽하게 실행</li>
            <li>&#128522; 이메일 시퀀스로 오픈율과 클릭률 상승</li>
            <li>&#128522; 수익화 루프로 반복 수익 구조가 생김</li>
            <li>&#128522; ICE 실험으로 데이터 기반 개선이 이루어짐</li>
          </ul>
        </div>
      </div>

      {/* Chapter Preview */}
      <SectionTitle>10개 챕터 + 부록 미리보기</SectionTitle>
      <div className="space-y-3 mb-16">
        <ChapterPreview
          num={1}
          title="진짜 고객 찾기 ⭐"
          desc="4R 프레임워크(Right Person, Right Problem, Right Time, Right Message)로 진짜 타겟을 좁히는 법. 모두에게 말하면 아무도 듣지 않는 이유와 날카로운 메시지를 만드는 방법."
        />
        <ChapterPreview
          num={2}
          title="스토리라인 설계도 ⭐"
          desc="5단계 서사 구조로 고객이 설레서 기다리는 런칭 스토리를 만드는 방법. 기능 나열이 아닌 변화의 이야기로 구매 욕구를 만드는 카피라이팅 원리."
        />
        <ChapterPreview
          num={3}
          title="브랜드 목소리"
          desc="런칭 전반에 걸쳐 일관된 브랜드 목소리를 유지하는 방법. 채널별(SNS·이메일·랜딩페이지) 톤앤매너를 통일해 신뢰감을 쌓는 실전 가이드."
        />
        <ChapterPreview
          num={4}
          title="프리런칭 붐 ⭐"
          desc="출시 2~4주 전부터 기대감을 쌓는 프리런칭 전략. 웨이팅 리스트, 얼리버드, 티저 콘텐츠로 D-Day 전에 이미 구매 의사가 생기게 만드는 구조."
        />
        <ChapterPreview
          num={5}
          title="이메일 시퀀스 ⭐"
          desc="프리런칭부터 런칭 후까지 자동으로 발송되는 이메일 시퀀스 설계. 오픈율·클릭률을 높이는 제목 공식과 각 단계별 이메일 본문 템플릿."
        />
        <ChapterPreview
          num={6}
          title="런칭 컨트롤타워 ⭐"
          desc="D-Day 48시간 체크리스트와 런칭 당일 실시간 모니터링 체계. 시스템 오류·재고 부족·문의 폭주 상황별 즉각 대응 매뉴얼."
        />
        <ChapterPreview
          num={7}
          title="제한하기 전략"
          desc="수량 제한·시간 제한·얼리버드 가격으로 구매 결정을 앞당기는 희소성 전략. 진정성 없는 제한이 역효과를 내는 이유와 올바른 적용법."
        />
        <ChapterPreview
          num={8}
          title="수익화 루프 ⭐"
          desc="한 번의 런칭이 다음 런칭의 자산이 되는 수익화 루프 시스템. 업셀·크로스셀·재구매 구조를 설계해 반복 수익을 만드는 방법."
        />
        <ChapterPreview
          num={9}
          title="KPI + 코호트 분석"
          desc="런칭 성과를 측정하는 핵심 KPI와 코호트 분석 방법. 오픈율·전환율·LTV를 추적해 다음 런칭에 반영하는 데이터 기반 의사결정 프레임."
        />
        <ChapterPreview
          num={10}
          title="런칭 루프"
          desc="매번 더 강해지는 런칭 루프 완성. ICE 실험(Impact·Confidence·Ease)으로 다음 런칭 개선 포인트를 찾고 반복 적용해 성과를 복리로 쌓는 법."
        />
        <ChapterPreview
          num="부록"
          title="런칭 실행 키트 ⭐"
          desc="즉시 쓸 수 있는 D-Day 48시간 체크리스트, 이메일 시퀀스 템플릿, 프리런칭 콘텐츠 캘린더, KPI 트래킹 시트, ICE 실험 워크시트."
        />
      </div>

      {/* Trust */}
      <SectionTitle>왜 이 가이드를 신뢰할 수 있나요?</SectionTitle>
      <div className="space-y-1 mb-16 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <TrustItem icon="&#128202;" text="검증된 프레임워크 — 4R 프레임워크, ICE 실험, 수익화 루프 등 글로벌 스타트업과 마케터들이 검증한 방법론을 실전 적용 가능한 형태로 재구성" />
        <TrustItem icon="&#127470;&#127479;" text="한국 사업자 도구 — 스마트스토어·카카오채널·네이버 예약·국내 이메일 플랫폼 환경에서 바로 적용할 수 있는 실전 방법과 현지화된 예시" />
        <TrustItem icon="&#128260;" text="계속 업데이트 — 독자 피드백과 새로운 런칭 사례를 반영해 내용이 살아있음" />
      </div>

      {/* CTA */}
      <div className="text-center mb-16">
        <p className="text-lg font-semibold mb-4">
          좋은 제품은 이미 있습니다. 이제 런칭을 시스템으로 만들 차례입니다.
        </p>
        <Link
          href="/premium/launch-storytelling/read"
          className="inline-block px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg rounded-xl transition-colors shadow-lg"
        >
          &#128640; 본문 보기
        </Link>
        <p className="text-sm text-gray-400 mt-3">
          서문 + 10개 챕터 + 부록 런칭 실행 키트
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-8">
        <p>
          이 가이드는 런칭 전략 이론과 글로벌 사례를 한국 사업자의 현실에 맞게 재구성한 실행 중심의 마케팅 가이드입니다.
        </p>
        <p className="mt-2">
          개인의 성과를 보장하지 않습니다. 실행 결과는 개인의 노력과 환경에 따라 다를 수 있습니다.
        </p>
        <p className="mt-4">
          <Link href="/" className="text-orange-600 dark:text-orange-400 hover:underline">
            &#8592; 살아있는 정보책 전체 목록
          </Link>
        </p>
      </footer>
    </main>
  );
}
