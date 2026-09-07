import Link from "next/link";
import BackToHome from "@/components/BackToHome";

export const metadata = {
  title: "몸이 젊어지는 4주 저속노화 리셋 | 살아있는 정보책",
  description:
    "식단·혈당·운동·수면, 4주 28일 실전 프로그램. 매일 O/X 체크리스트로 판단 없이 실행.",
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
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-sm">
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

export default function SlowAgingLanding() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <BackToHome />

      {/* Hero */}
      <header className="text-center mb-16">
        <span className="text-6xl mb-6 block">&#127807;</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          몸이 젊어지는 4주 저속노화 리셋
          <br />
          <span className="text-emerald-600 dark:text-emerald-400">
            식단·혈당·운동·수면까지,
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          노화 속도를 되돌리는 28일 실전 프로그램
        </p>
        <p className="text-sm text-gray-400">
          김약사 · 유원소망약국
        </p>
      </header>

      {/* Empathy Quote */}
      <div className="text-center mb-16 p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <p className="text-xl italic text-gray-600 dark:text-gray-400 mb-4">
          &quot;저속노화 영상 100개 봤는데
          <br />
          렌틸콩은 아직 냉장고에 방치 중이신가요?&quot;
        </p>
        <p className="text-base font-semibold text-emerald-600 dark:text-emerald-400">
          이 책은 응원하지 않습니다. 시킵니다.
        </p>
      </div>

      {/* Pain Points */}
      <SectionTitle>지금 이런 상태 아닌가요?</SectionTitle>
      <div className="space-y-1 mb-12">
        <PainPoint>
          저속노화 유튜브 100개 봤지만 정작 실행은 못 하고 있다
        </PainPoint>
        <PainPoint>
          점심만 먹으면 쏟아지는 잠 — 혈당 스파이크가 의심되지만 어떻게 해야 할지 모른다
        </PainPoint>
        <PainPoint>
          렌틸콩 사서 1주일 만에 냉장고 방치 — 좋다는 건 알겠는데 어떻게 먹어야 하는지 모른다
        </PainPoint>
        <PainPoint>
          미라클모닝 결심하고 사흘 만에 무너졌다
        </PainPoint>
        <PainPoint>
          뭘 먹어야 하는지는 아는데 &quot;오늘 뭘 얼마나&quot;가 없다
        </PainPoint>
        <PainPoint>
          헬스장 등록이 부담스럽고 어디서부터 시작해야 할지 모르겠다
        </PainPoint>
        <PainPoint>
          의지력이 고갈되면 자기 비난이 시작되는 악순환이 반복된다
        </PainPoint>
      </div>

      {/* Failed Solutions */}
      <SectionTitle>
        &quot;저속노화 방법, 이미 찾아봤습니다&quot;
      </SectionTitle>
      <div className="space-y-1 mb-12">
        <FailedSolution
          title="저속노화 유튜브"
          reason="렌틸콩이 좋다까지만 말하고 끝 — 오늘 어떻게 먹는지는 알려주지 않음"
        />
        <FailedSolution
          title="건강 서적"
          reason="두꺼워서 읽다 지침 — 읽는 것과 실행하는 것은 다른 문제"
        />
        <FailedSolution
          title="미라클모닝 도전"
          reason="3일 만에 포기 — 수면 습관 정비 없이 새벽 기상은 소용없음"
        />
        <FailedSolution
          title="보충제·건강식품"
          reason="기본기 없이 보충제는 효과 없음 — 순서가 틀렸다"
        />
        <FailedSolution
          title="간헐적 단식 시도"
          reason="이유도 모르고 따라함 — 내 몸에 맞는지 확인도 없이 시작"
        />
      </div>

      {/* Discovery */}
      <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 mb-16">
        <h2 className="text-2xl font-bold mb-4 text-center">
          실패의 이유는 의지력이 아니었습니다
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          약사로서 수많은 저속노화 시도가 무너지는 패턴을 분석한 결과, 공통된 원인을 발견했습니다:
        </p>
        <p className="text-lg font-semibold text-center mb-6">
          &quot;오늘 몇 시에, 무엇을, 얼마나 할지&quot;
          <br />
          판단은 책이 하고, 독자는 O/X만 체크하면 됩니다.
        </p>
        <div className="space-y-2">
          <Benefit>
            매일 O/X 체크리스트 — 아침에 뭘 할지 고민할 필요 없음
          </Benefit>
          <Benefit>
            4주 로드맵: 식탁→혈당→운동→수면 순서대로 — 한 번에 다 바꾸지 않아도 됨
          </Benefit>
          <Benefit>
            합격선은 100점이 아니라 70점 — 무너져도 다음 날 복구 가능
          </Benefit>
          <Benefit>
            헬스장 없이 거실에서 시작 — 장비 투자 없이 지금 당장 가능
          </Benefit>
        </div>
        <div className="mt-6 p-4 rounded-lg bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800">
          <p className="text-sm text-center font-medium">
            가장 중요한 사실:
            <br />
            <strong>
              &quot;노화 속도는 유전자가 아니라 매일의 선택으로 결정됩니다.&quot;
            </strong>
            <br />
            저속노화는 체질 타고난 사람들의 이야기가 아닙니다.
          </p>
        </div>
      </div>

      {/* Before / After */}
      <SectionTitle>28일 후 당신이 경험할 변화</SectionTitle>
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800">
          <h3 className="font-bold mb-3 text-red-600 dark:text-red-400">
            Before
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>&#128560; 좋다는 건 알지만 실행이 안 되는 막막함</li>
            <li>&#128560; 점심 후 쏟아지는 졸음, 이유를 모름</li>
            <li>&#128560; 냉장고 속 방치된 렌틸콩과 죄책감</li>
            <li>&#128560; 무너질 때마다 반복되는 자기 비난</li>
            <li>&#128560; 뭘 먹어야 하는지는 알지만 오늘 메뉴는 모름</li>
            <li>&#128560; 헬스장 등록 부담감, 시작이 두려움</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <h3 className="font-bold mb-3 text-green-600 dark:text-green-400">
            After
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>&#128522; 오늘 뭘 할지 고민 없이 O/X만 체크</li>
            <li>&#128522; 혈당 스파이크 원인 파악 + 식후 10분 걷기 습관</li>
            <li>&#128522; 냉장고 정비 완료, 장보기 목록 확정</li>
            <li>&#128522; 무너져도 다음 날 복구하는 프로토콜</li>
            <li>&#128522; 외식·회식 상황 대응 매뉴얼 보유</li>
            <li>&#128522; 거실에서 15분, 헬스장 없이도 근육 유지</li>
          </ul>
        </div>
      </div>

      {/* Chapter Preview */}
      <SectionTitle>10개 챕터 + 부록 미리보기</SectionTitle>
      <div className="space-y-3 mb-16">
        <ChapterPreview
          num={1}
          title="당신은 지금도 늙고 있다: 가속노화 자가진단"
          desc="12문항 자가진단으로 내 노화 속도 확인. 가속노화 신호를 먼저 파악해야 방향이 잡힌다."
        />
        <ChapterPreview
          num={2}
          title="저속노화의 과학: 노화 속도를 정하는 5개의 스위치"
          desc="혈당, 염증, 근육, 수면, 스트레스 — 과학이 밝혀낸 노화 속도 조절의 실제 원리."
        />
        <ChapterPreview
          num={3}
          title="시작 전 준비: 측정하고, 비우고, 채워라"
          desc="냉장고·생활 환경 정비 방법. 측정 없이 시작하면 변화를 알 수 없다."
        />
        <ChapterPreview
          num={4}
          title="1주차 — 식탁 리셋"
          desc="저속노화 식단의 뼈대. 렌틸콩부터 다양한 채소까지, 오늘 저녁 식탁에 올릴 것들."
        />
        <ChapterPreview
          num={5}
          title="2주차 — 혈당 안정"
          desc="거꾸로 먹기, 식후 10분 걷기. 혈당 스파이크를 잡으면 오후 졸음부터 없어진다."
        />
        <ChapterPreview
          num={6}
          title="3주차 — 움직임 리셋"
          desc="근육은 노후 연금. 헬스장 없이 거실에서 시작하는 15분 루틴."
        />
        <ChapterPreview
          num={7}
          title="4주차 — 수면·회복 리셋"
          desc="취침 전 90분 활주로. 수면의 질이 회복 속도와 노화 속도를 동시에 결정한다."
        />
        <ChapterPreview
          num={8}
          title="보이지 않는 액셀: 스트레스와 뇌의 저속노화"
          desc="만성 스트레스는 노화를 가속한다. 약사가 알려주는 스트레스-노화 연결 고리."
        />
        <ChapterPreview
          num={9}
          title="트러블슈팅: 무너지는 7가지 순간과 복구 프로토콜"
          desc="회식, 야근, 여행, 생리 전 폭식... 실제로 무너지는 순간마다 쓸 수 있는 복구법."
        />
        <ChapterPreview
          num={10}
          title="28일 이후: 평생 가는 저속노화 시스템"
          desc="4주가 끝난 뒤 어떻게 이어갈지. 완벽하지 않아도 오래가는 루틴 설계법."
        />
        <ChapterPreview
          num="부록"
          title="복사해 쓰는 저속노화 실행 키트"
          desc="바로 출력해서 쓰는 식단표, 체크리스트, 장보기 목록, 외식 생존 가이드 모음."
        />
      </div>

      {/* Bonuses */}
      <SectionTitle>&#127873; 보너스 5개</SectionTitle>
      <div className="space-y-3 mb-16">
        <BonusItem
          title="4주 식단표"
          desc="28일치 아침·점심·저녁 식단 예시. 고민 없이 그대로 따라할 수 있는 실전 식단."
        />
        <BonusItem
          title="28일 로드맵"
          desc="주차별 목표와 핵심 행동 한 장 정리. 벽에 붙여두고 매일 확인하는 용도."
        />
        <BonusItem
          title="주간 체크리스트"
          desc="매일 O/X로 체크하는 습관 추적 시트. 판단은 책이 하고 나는 체크만."
        />
        <BonusItem
          title="외식 생존 가이드"
          desc="삼겹살 집, 중식당, 편의점, 회식 자리... 저속노화 식단을 유지하는 외식 전략."
        />
        <BonusItem
          title="15분 레시피 7선"
          desc="바쁜 날도 만들 수 있는 저속노화 레시피. 재료 3~5가지, 조리 15분 이내."
        />
      </div>

      {/* Trust */}
      <SectionTitle>왜 이 가이드를 신뢰할 수 있나요?</SectionTitle>
      <div className="space-y-1 mb-16 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <TrustItem icon="&#128104;&#8205;&#9877;&#65039;" text="현직 약사 저자 — 유원소망약국 김약사, 약물과 영양의 교차점을 아는 전문가" />
        <TrustItem icon="&#128209;" text="최신 건강 과학 기반 — 저속노화 연구의 핵심 근거를 실전에 맞게 번역" />
        <TrustItem icon="&#128260;" text="계속 업데이트 — 새로운 연구 결과와 독자 피드백을 반영해 내용이 살아있음" />
        <TrustItem icon="&#128737;" text="실패 복구 프로토콜 포함 — 무너지는 순간을 전제로 설계된 책, 죄책감 없이 재시작 가능" />
      </div>

      {/* CTA */}
      <div className="text-center mb-16">
        <p className="text-lg font-semibold mb-4">
          응원이 아니라 실행. 오늘부터 O/X만 체크하세요.
        </p>
        <Link
          href="/premium/slow-aging/read"
          className="inline-block px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg rounded-xl transition-colors shadow-lg"
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
          이 가이드는 최신 저속노화 연구와 현직 약사의 임상 경험을 바탕으로 작성되었습니다.
        </p>
        <p className="mt-2">
          의학적 조언을 대체하지 않습니다. 특정 질환이 있는 경우 의사와 상담 후 시작하세요.
        </p>
        <p className="mt-4">
          <Link href="/" className="text-emerald-500 hover:underline">
            &#8592; 살아있는 정보책 전체 목록
          </Link>
        </p>
      </footer>
    </main>
  );
}
