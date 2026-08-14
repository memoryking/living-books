import GuideBook from "@/components/GuideBook";
import type {
  TopItem,
  ContentSection,
  UpdateLog,
} from "@/components/GuideBook";

export const metadata = {
  title: "다이어트 서바이벌 시스템 — 본문 | 살아있는 정보책",
  description:
    "1,673명의 실패와 성공에서 뽑아낸 다이어트 생존 가이드. 서문 + 10개 챕터 전문.",
};

const topItems: TopItem[] = [
  {
    number: 1,
    title: "극단적 제한은 뇌와 싸우는 것이다",
    oneLiner: "극단적 칼로리 제한은 생존 본능을 깨운다. 이길 수 없는 싸움이다.",
    description:
      "뇌는 급격한 칼로리 감소를 기근으로 인식합니다. 식욕 호르몬이 폭발하고, 기초대사량이 떨어지고, 머릿속이 음식 생각으로 가득 찹니다. 이것은 의지력의 문제가 아니라 생존 본능입니다.",
    situation: "하루 1,200칼로리 이하로 극단적으로 줄이려 할 때",
    action: "적정 적자 300~500kcal/일을 유지하세요. 느리지만 지속 가능합니다. 한 달 2kg, 1년 24kg.",
    mission: "오늘 나의 유지 칼로리(TDEE)를 계산하고, 거기서 400kcal만 빼세요.",
  },
  {
    number: 2,
    title: "CICO가 유일한 법칙이다",
    oneLiner: "소모보다 적게 먹으면 빠진다. 모든 다이어트의 근본 원리.",
    description:
      "키토, 간헐적 단식, 저지방... 모든 다이어트가 작동하는 이유는 단 하나 — 어떤 방식으로든 칼로리 적자를 만들기 때문입니다. 방법론이 아니라 원리를 이해하세요.",
    situation: "어떤 다이어트를 해야 할지 혼란스러울 때",
    action: "방법론에 집착하지 마세요. 칼로리 추적 앱으로 3일만 기록해보세요.",
    mission: "오늘 먹은 것을 전부 기록하세요. 판단 없이, 있는 그대로.",
  },
  {
    number: 3,
    title: "의지력이 아니라 환경을 바꿔라",
    oneLiner: "냉장고를 바꾸면 몸이 바뀐다. 의지력에 의존하지 마라.",
    description:
      "의지력은 근육처럼 소모됩니다. 하루 종일 결정을 내리고 저녁에 '치킨 vs 샐러드'를 결정해야 하면 결과는 뻔합니다. 대신 환경을 설계하세요 — 건강한 선택이 쉽고 불건강한 선택이 불편하도록.",
    situation: "퇴근 후 지친 상태에서 배달 앱에 손이 갈 때",
    action: "일요일에 3~4일치 Meal Prep을 해두세요. 냉장고에 데우기만 하면 되는 식사가 있으면 배달은 필요 없습니다.",
    mission: "냉장고의 유발 음식 3개를 식별하세요. 다 먹고 나면 다시 사지 마세요.",
  },
  {
    number: 4,
    title: "'왜 먹는지'가 '뭘 먹는지'보다 중요하다",
    oneLiner: "배고프지 않은데 먹고 있다면, 감정이 시키는 것이다.",
    description:
      "체중 증가 원인 1위는 잘못된 식단이 아니라 감정적 식사입니다. 스트레스, 지루함, 보상 심리, 슬픔 — 음식은 절대 배신하지 않는 위안이기 때문입니다.",
    situation: "밤 11시, 배고프지 않은데 냉장고 앞에 서 있을 때",
    action: "'지금 사과를 먹고 싶은가?' 사과도 좋으면 진짜 배고픔. '아니, 피자...'면 감정적 갈망. 물 한 잔 마시고 10분 기다려보세요.",
    mission: "오늘 식사 시간 외에 먹은 것이 있다면, '왜 먹었는지' 한 줄 적어보세요.",
  },
  {
    number: 5,
    title: "3주 벽은 넘을 수 있다",
    oneLiner: "모든 다이어트가 무너지는 3주 차. 여기만 넘으면 된다.",
    description:
      "3주 차에는 초기 동기가 소멸하고, 체중 감소도 정체됩니다(수분 빠진 후 진짜 지방 감량 속도만 남음). 습관이 형성되기까지 평균 66일 — 3주는 가장 힘든 중간 지점입니다.",
    situation: "3주째, '이게 무슨 의미가 있나' 싶을 때",
    action: "축소하세요. 모든 걸 다 하려 하지 말고, 딱 하나만(칼로리 기록) 유지하세요. 그리고 왜 시작했는지 기억하세요.",
    mission: "'내가 시작한 이유' 한 문장을 핸드폰 메모에 저장하세요.",
  },
  {
    number: 6,
    title: "한 끼 실수는 아무것도 아니다",
    oneLiner: "Fail Fast — 완벽주의가 다이어트를 죽인다. 다음 끼부터 정상.",
    description:
      "한 끼 폭식으로 늘어나는 실제 지방은 200g 이하입니다. 나머지는 수분으로 2~3일이면 빠집니다. 진짜 위험은 폭식 자체가 아니라 '이미 망했으니 이번 주는 포기'하는 마인드입니다.",
    situation: "회식에서 치맥을 실컷 먹은 다음 날 아침",
    action: "30초 리셋: '맛있었다 → 다음 끼는 평소대로 → 한 끼는 아무것도 아니다.' 끝.",
    mission: "나만의 '30초 리셋 스크립트' 3줄을 적어두세요.",
  },
  {
    number: 7,
    title: "먹는 즐거움을 포기하지 마라",
    oneLiner: "80/20 규칙. 80%는 영양, 20%는 즐거움. 다이어트 ≠ 고문.",
    description:
      "단백질과 식이섬유를 먼저 먹고, 채소로 접시 절반을 채우고, 양념으로 맛을 살리면 적게 먹는 느낌 없이 칼로리를 줄일 수 있습니다. 알코올과 설탕을 줄이면 수면과 에너지가 극적으로 개선됩니다.",
    situation: "다이어트 식단이 너무 맛없어서 포기하고 싶을 때",
    action: "반복 식단 3끼를 설계하세요. 아침 2가지 + 점심 3가지 로테이션. 저녁은 자유.",
    mission: "오늘 식사에서 단백질/채소를 먼저 먹어보세요.",
  },
  {
    number: 8,
    title: "아침 산책이 인생을 바꾼다",
    oneLiner: "체육관이 아니라 아침 10분 산책. 가장 확실한 변화의 시작.",
    description:
      "체중의 80%는 식단으로 결정됩니다. 운동의 진짜 가치는 칼로리 소모가 아니라 기분/수면/에너지 개선입니다. 레딧에서 가장 많이 추천된 실천법은 아침 산책 — 장비 불필요, 누구나 가능.",
    situation: "운동을 시작하고 싶지만 헬스장이 부담스러울 때",
    action: "내일 아침, 15분 일찍 일어나서 5분 걷고 돌아오세요. 10분. 그게 전부.",
    mission: "지금 알람을 평소보다 15분 일찍으로 설정하세요.",
  },
  {
    number: 9,
    title: "체중계 숫자에 휘둘리지 마라",
    oneLiner: "하루 1~2kg 변동은 정상. 추세를 보고, 비체중 승리를 기록하라.",
    description:
      "체중계는 지방만 측정하지 않습니다. 수분, 음식물, 근육, 생리 주기가 모두 포함됩니다. 주간 평균을 비교하고, 옷 핏/사진/에너지 같은 비체중 지표를 함께 추적하세요.",
    situation: "어제보다 체중이 0.8kg 늘어서 의욕이 사라졌을 때",
    action: "주간 평균을 계산하세요. 이번 주 평균이 지난주보다 낮으면 올바른 방향입니다.",
    mission: "오늘 '비체중 승리' 1가지를 적어보세요. (예: 계단 올라가는데 덜 힘들었다)",
  },
  {
    number: 10,
    title: "감량보다 유지가 더 중요하다",
    oneLiner: "목표 도달이 끝이 아니라 시작. 다이어트를 끝내고 생활방식을 시작하라.",
    description:
      "감량 후 80%가 5년 안에 원래 체중으로 돌아갑니다. 유지 칼로리로 단계적 전환, 최소 3개월 안착 기간, 주간 체중 확인을 유지하세요. '이제 됐다' 심리가 가장 위험합니다.",
    situation: "목표 체중에 도달해서 '이제 자유롭게 먹어도 되겠지' 싶을 때",
    action: "감량 칼로리에서 주당 100kcal씩 올리며 유지 칼로리를 찾으세요. 3개월간 유지.",
    mission: "목표 도달 후 12주 유지 계획 초안을 적어보세요.",
  },
];

const sections: ContentSection[] = [
  {
    id: "preface",
    title: "서문 — 사진 속 나를 보고 충격받은 적 있나요?",
    body: (
      <>
        <p>거울은 친절합니다. 매일 조금씩 변하니까 눈치채지 못합니다.</p>
        <p>그런데 어느 날, 친구가 찍어준 사진을 봅니다. 결혼식 단체사진, 여행 스냅, 아이 돌잔치 사진. 그 속에 있는 사람이... 나?</p>
        <p>Reddit의 r/loseit 커뮤니티에서 847명이 &quot;예전엔 좋은 몸이었는데 왜 살이 찌게 됐나요?&quot;라는 질문에 답했습니다. 가장 많이 나온 말이 바로 이것이었습니다:</p>
        <blockquote className="border-l-4 border-blue-400 pl-4 my-4 italic text-gray-600 dark:text-gray-400">
          &quot;거울로는 몰랐어요. 사진을 보고 나서야 알았죠.&quot;
        </blockquote>
        <p>당신만 그런 게 아닙니다.</p>
        <p>이 가이드는 <strong>1,673명의 실제 경험</strong>에서 만들어졌습니다. 왜 실패하는지, 왜 3주 차에 무너지는지, 왜 빠지면 다시 찌는지. 그리고 가장 중요한 것 — 진짜로 성공한 소수의 사람들은 무엇이 달랐는지.</p>
        <p>답은 놀라울 정도로 단순했습니다.</p>
        <p className="text-lg font-semibold">성공한 사람들은 &quot;다이어트&quot;를 하지 않았습니다. 시스템을 만들었습니다.</p>
        <p className="mt-4">이 책은 읽는 책이 아닙니다. <strong>실행하는 책</strong>입니다. 각 챕터 끝의 실천 과제를 하나씩 완료하면, 10주 후 당신의 몸과 습관은 지금과 완전히 다를 것입니다.</p>
      </>
    ),
  },
  {
    id: "ch1",
    title: "Ch.1 다이어트의 진짜 적은 음식이 아니다",
    body: (
      <>
        <p>지금까지 다이어트를 몇 번이나 시도했나요? 매번 어떻게 끝났나요? 1주차 의욕 충만, 2주차 버팀, 3주차 벽, 4주차 포기. 이 패턴을 반복하면서 &quot;나는 의지력이 약한 사람이야&quot;라고 결론내립니다.</p>
        <p><strong>그런데, 그건 사실이 아닙니다.</strong></p>
        <h3 className="text-lg font-semibold mt-6 mb-3">뇌는 당신의 적이 아니다 — 하지만 다이어트의 적이다</h3>
        <p>극단적 칼로리 제한을 시작하면 뇌는 <strong>기근</strong>으로 인식합니다. 식욕 호르몬(그렐린) 증가, 포만감 호르몬(렙틴) 감소, 기초대사량 저하, 음식 집착 증가. 이것은 <strong>생존 본능</strong>입니다.</p>
        <blockquote className="border-l-4 border-blue-400 pl-4 my-4 italic text-gray-600 dark:text-gray-400">
          &quot;다이어트가 실패한 게 아니라 뇌가 정상 작동한 것이다.&quot; — Reddit u/Strange-Stranger4139
        </blockquote>
        <h3 className="text-lg font-semibold mt-6 mb-3">의지력이라는 환상</h3>
        <p>의지력은 무한한 자원이 아닙니다. 근육처럼 사용하면 소모됩니다(자아 고갈). 하루 종일 결정을 내리고 저녁에 &quot;치킨 vs 샐러드?&quot;를 의지력으로 결정해야 하면, 결과는 뻔합니다.</p>
        <blockquote className="border-l-4 border-blue-400 pl-4 my-4 italic text-gray-600 dark:text-gray-400">
          &quot;의지력이 강하다고 자부했던 내가 점점 뚱뚱해지는 과정을 목격한 건 눈이 띄이는 경험이었다.&quot; — u/DarkSaturnPrince
        </blockquote>
        <h3 className="text-lg font-semibold mt-6 mb-3">답은?</h3>
        <p>의지력이 아니라 <strong>시스템</strong>. 다이어트가 아니라 <strong>생활방식</strong>. 극단적 제한이 아니라 <strong>현실적 규칙</strong>.</p>
        <div className="mt-6 p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <p className="font-semibold mb-2">실천 과제</p>
          <p className="text-sm">지금까지 시도한 다이어트를 모두 적어보세요. &quot;왜 멈췄나&quot;를 자세히 봐주세요. 패턴이 보이나요?</p>
        </div>
      </>
    ),
  },
  {
    id: "ch2",
    title: "Ch.2 CICO — 유일한 법칙, 하지만 함정이 있다",
    body: (
      <>
        <p>모든 다이어트가 작동하는 이유는 하나 — <strong>칼로리 적자를 만들기 때문</strong>. 적정 적자는 300~500kcal/일.</p>
        <h3 className="text-lg font-semibold mt-6 mb-3">5가지 함정</h3>
        <ol className="list-decimal list-inside space-y-3 ml-4">
          <li><strong>극단적 적자의 역습</strong> — 1,200kcal 이하는 뇌의 반란을 부른다</li>
          <li><strong>섭취량 과소평가</strong> — 눈대중은 30~50% 부정확. 아보카도 1개가 320kcal</li>
          <li><strong>음식 저울의 위력</strong> — 1~2주만 정확히 재면 감이 잡힌다</li>
          <li><strong>액상 칼로리</strong> — 벤티 모카 580kcal = 한 끼 식사. 음료를 물로 바꾸세요</li>
          <li><strong>추적의 스트레스</strong> — 완벽함이 아닌 인식이 목적. 70% 정확해도 0%보다 낫다</li>
        </ol>
        <blockquote className="border-l-4 border-blue-400 pl-4 my-4 italic text-gray-600 dark:text-gray-400">
          &quot;탄산음료를 물로 바꾼 것만으로 5주에 9kg이 빠졌다.&quot; — u/Heckbound_Heart
        </blockquote>
        <div className="mt-6 p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <p className="font-semibold mb-2">실천 과제</p>
          <p className="text-sm">3일간 먹은 것을 전부 기록하세요. 평소대로 먹되 판단 없이. 음료도 포함.</p>
        </div>
      </>
    ),
  },
  {
    id: "ch3",
    title: "Ch.3 환경을 바꾸면 의지력이 필요 없다",
    body: (
      <>
        <p>건강한 선택을 <strong>쉽게</strong>, 불건강한 선택을 <strong>불편하게</strong> 만드세요.</p>
        <h3 className="text-lg font-semibold mt-6 mb-3">6가지 전략</h3>
        <ol className="list-decimal list-inside space-y-2 ml-4">
          <li><strong>유발 음식 치우기</strong> — 집에 없으면 뇌가 요구하지 않는다</li>
          <li><strong>Meal Prep</strong> — 일요일에 3~4일치 준비. 결정 피로 제거</li>
          <li><strong>작은 접시</strong> — 10인치 접시로 바꾸면 같은 양이 22% 더 많아 보인다</li>
          <li><strong>같은 식사 반복</strong> — 칼로리 계산 자동화, 결정 피로 제로</li>
          <li><strong>동선 설계</strong> — 과일은 식탁 위에, 물병은 책상 위에</li>
          <li><strong>물 한 잔 먼저</strong> — 갈증과 배고픔은 뇌에서 비슷하게 처리된다</li>
        </ol>
        <div className="mt-6 p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <p className="font-semibold mb-2">실천 과제</p>
          <p className="text-sm">냉장고/찬장 사진을 찍고, 유발 음식 3개를 식별하세요. 다 먹고 나면 다시 사지 마세요.</p>
        </div>
      </>
    ),
  },
  {
    id: "ch4",
    title: "Ch.4 감정적 식사 — '왜 먹는지'가 더 중요하다",
    body: (
      <>
        <p>체중 증가 원인 1위는 잘못된 식단이 아니라 <strong>감정적 식사</strong>였습니다. (Reddit 좋아요 1,300+)</p>
        <blockquote className="border-l-4 border-blue-400 pl-4 my-4 italic text-gray-600 dark:text-gray-400">
          &quot;음식은 절대 나를 실망시키지 않는다. 배신하지 않는다. 기대한 맛 그대로다. 그게 위안이 되는 이유다.&quot; — u/_theMAUCHO_
        </blockquote>
        <h3 className="text-lg font-semibold mt-6 mb-3">4대 트리거</h3>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li><strong>스트레스</strong> — 코르티솔이 고칼로리 음식을 갈망하게 만든다</li>
          <li><strong>지루함</strong> — 가장 쉽게 접근할 수 있는 자극 = 음식</li>
          <li><strong>보상 심리</strong> — 힘든 하루의 보상, 운동 후의 보상</li>
          <li><strong>슬픔/우울</strong> — 가장 깊고 해결하기 어려운 트리거</li>
        </ul>
        <h3 className="text-lg font-semibold mt-6 mb-3">배고픔 vs 갈망 테스트</h3>
        <p>&quot;지금 사과를 먹고 싶은가?&quot; — 사과도 좋으면 진짜 배고픔. &quot;아니, 피자...&quot;면 감정적 갈망.</p>
        <div className="mt-6 p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <p className="font-semibold mb-2">실천 과제</p>
          <p className="text-sm">일주일간 식사 시간 외에 먹은 것에 대해 &quot;왜 먹었는지&quot;를 기록하세요.</p>
        </div>
      </>
    ),
  },
  {
    id: "ch5",
    title: "Ch.5 3주 벽 — 여기만 넘으면 된다",
    body: (
      <>
        <p>3주 차에는 초기 동기(도파민)가 소멸하고, 체중 감소도 정체됩니다. 습관 형성까지 평균 66일 — 3주는 가장 힘든 중간 지점.</p>
        <h3 className="text-lg font-semibold mt-6 mb-3">비상 프로토콜 3가지</h3>
        <ol className="list-decimal list-inside space-y-3 ml-4">
          <li><strong>축소하라</strong> — 모든 걸 다 하려 하지 말고 딱 하나만(칼로리 기록) 유지</li>
          <li><strong>왜 시작했는지 기억하라</strong> — 처음 결심한 그 순간을 미리 적어두세요</li>
          <li><strong>누군가에게 말하라</strong> — 혼자 하면 실패 확률 급증. &quot;오늘 3주 차인데 힘들다&quot;</li>
        </ol>
        <p className="mt-4 font-semibold">핵심: 100%가 아니면 0%인 사고방식을 버리세요. 50%가 0%보다 무한히 낫습니다.</p>
        <div className="mt-6 p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <p className="font-semibold mb-2">실천 과제</p>
          <p className="text-sm">나만의 비상 프로토콜 3가지를 적어 핸드폰에 저장하세요.</p>
        </div>
      </>
    ),
  },
  {
    id: "ch6",
    title: "Ch.6 Fail Fast — 한 끼 실수를 30초에 리셋",
    body: (
      <>
        <p>한 끼 폭식으로 늘어나는 실제 지방: <strong>200g 이하</strong>. 체중이 1~2kg 올라간 건 90% 수분(나트륨)으로, 2~3일이면 빠집니다.</p>
        <p>진짜 위험은 폭식이 아니라 <strong>&quot;이미 망했으니 이번 주는 포기&quot;</strong>하는 마인드.</p>
        <h3 className="text-lg font-semibold mt-6 mb-3">30초 리셋 스크립트</h3>
        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 text-center">
          <p className="font-mono">1. &quot;맛있었다.&quot; (부정하지 않는다)</p>
          <p className="font-mono">2. &quot;다음 끼는 평소대로.&quot; (구체적 계획)</p>
          <p className="font-mono">3. &quot;한 끼는 아무것도 아니다.&quot; (수학적 사실)</p>
        </div>
        <h3 className="text-lg font-semibold mt-6 mb-3">계획된 유연성</h3>
        <p>&quot;치팅&quot; 대신 &quot;계획된 유연성&quot;. 주 5일 계획대로, 주말 1끼 자유 — 이것이 <strong>계획의 일부</strong>입니다.</p>
        <div className="mt-6 p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <p className="font-semibold mb-2">실천 과제</p>
          <p className="text-sm">나만의 30초 리셋 스크립트 3줄을 적어 잠금화면 메모에 저장하세요.</p>
        </div>
      </>
    ),
  },
  {
    id: "ch7",
    title: "Ch.7 즐기면서 빠지는 식단",
    body: (
      <>
        <p><strong>80/20 규칙:</strong> 80% 영양가 있는 음식, 20% 먹고 싶은 것. 2,000kcal 기준 400kcal은 자유 구역.</p>
        <h3 className="text-lg font-semibold mt-6 mb-3">PFF First (Protein, Fiber First)</h3>
        <p>매 끼 단백질과 채소를 먼저 먹으세요. 밥/면은 나중에. 자연스럽게 탄수화물 섭취가 줄어듭니다.</p>
        <h3 className="text-lg font-semibold mt-6 mb-3">알코올 — 레딧 1위 답변</h3>
        <blockquote className="border-l-4 border-blue-400 pl-4 my-4 italic text-gray-600 dark:text-gray-400">
          &quot;알코올을 끊었더니 수면의 질과 아침 에너지가 극적으로 개선됐다.&quot; — Reddit 좋아요 1,400+
        </blockquote>
        <h3 className="text-lg font-semibold mt-6 mb-3">설탕 줄이기</h3>
        <blockquote className="border-l-4 border-blue-400 pl-4 my-4 italic text-gray-600 dark:text-gray-400">
          &quot;설탕 끊은 후 3주 편두통. 그 이후 20년 젊어진 느낌. 모든 염증이 사라졌다.&quot;
        </blockquote>
        <div className="mt-6 p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <p className="font-semibold mb-2">실천 과제</p>
          <p className="text-sm">나만의 반복 식단(아침 2가지 + 점심 3가지)을 설계하세요. 저녁은 자유.</p>
        </div>
      </>
    ),
  },
  {
    id: "ch8",
    title: "Ch.8 움직임 — 아침 산책이 답이다",
    body: (
      <>
        <p>체중의 80%는 식단. 운동의 진짜 가치는 기분/수면/에너지 개선.</p>
        <h3 className="text-lg font-semibold mt-6 mb-3">아침 산책 — 레딧 최고 추천</h3>
        <blockquote className="border-l-4 border-blue-400 pl-4 my-4 italic text-gray-600 dark:text-gray-400">
          &quot;아침 산책이 진정한 삶의 변화였다. 기분, 에너지, 정신 명확성이 거의 즉각적으로 개선됐다.&quot; — u/DownrightDrewski
        </blockquote>
        <h3 className="text-lg font-semibold mt-6 mb-3">시작 방법</h3>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>1~2주: 10~15분, 느리게</li>
          <li>3~4주: 20~30분, 약간 빠르게</li>
          <li>5주~: 30~45분, Zone 2 (대화 가능한 속도)</li>
        </ul>
        <h3 className="text-lg font-semibold mt-6 mb-3">NEAT의 위력</h3>
        <p>일상 활동(걷기, 계단, 가사일)의 합계가 헬스장보다 더 많은 칼로리를 소모합니다. 하루 20,000보로 34kg 감량한 사례도 있습니다.</p>
        <div className="mt-6 p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <p className="font-semibold mb-2">실천 과제</p>
          <p className="text-sm">내일 아침, 15분 일찍 일어나서 10분 산책. 그게 전부입니다.</p>
        </div>
      </>
    ),
  },
  {
    id: "ch9",
    title: "Ch.9 체중계를 넘어서",
    body: (
      <>
        <p>하루 1~2kg 변동은 <strong>완전히 정상</strong>입니다. 수분, 나트륨, 생리 주기, 근육 변화 때문.</p>
        <h3 className="text-lg font-semibold mt-6 mb-3">주간 평균으로 보기</h3>
        <p>매일 재되, 주간 평균끼리 비교하세요. 일일 변동에 일희일비하지 마세요.</p>
        <h3 className="text-lg font-semibold mt-6 mb-3">비체중 승리 기록</h3>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>계단 올라가는데 숨이 안 찼다</li>
          <li>바지 버튼이 편하게 잠겼다</li>
          <li>3주를 넘겼다 (이전엔 여기서 포기)</li>
          <li>친구가 &quot;좋아 보여&quot;라고 했다</li>
        </ul>
        <div className="mt-6 p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <p className="font-semibold mb-2">실천 과제</p>
          <p className="text-sm">비체중 승리 3가지를 적어보세요. 정체기가 왔을 때 꺼내 봅니다.</p>
        </div>
      </>
    ),
  },
  {
    id: "ch10",
    title: "Ch.10 유지 모드 — 감량보다 중요한 것",
    body: (
      <>
        <p>감량한 사람의 80%가 5년 안에 원래 체중으로 돌아갑니다.</p>
        <h3 className="text-lg font-semibold mt-6 mb-3">3대 함정</h3>
        <ol className="list-decimal list-inside space-y-2 ml-4">
          <li><strong>&quot;이제 됐다&quot; 심리</strong> — &quot;정상으로 돌아가자&quot;의 &quot;정상&quot;이 살찌게 만든 생활방식</li>
          <li><strong>추적 중단</strong> — 칼로리 기록, 체중 측정을 멈추는 순간이 복귀의 시작</li>
          <li><strong>옛 환경 복귀</strong> — 이사, 이직 등으로 시스템이 무너지는 경우</li>
        </ol>
        <h3 className="text-lg font-semibold mt-6 mb-3">단계적 칼로리 전환</h3>
        <p>감량 칼로리에서 주당 100kcal씩 올리며 유지 칼로리를 찾으세요. 최소 3개월 안착.</p>
        <blockquote className="border-l-4 border-blue-400 pl-4 my-4 italic text-gray-600 dark:text-gray-400">
          &quot;이게 내 삶이다. 다이어트가 아니라. 이 방식으로 먹고, 이렇게 움직이는 것이 내 정상이다.&quot;
          — u/Lisadazy (60kg 감량, 유지 20년)
        </blockquote>
        <div className="mt-6 p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <p className="font-semibold mb-2">실천 과제</p>
          <p className="text-sm">목표 도달 후 12주 유지 계획 초안을 작성하세요. 아직 도달 전이어도 미리 써두세요.</p>
        </div>
      </>
    ),
  },
];

const updateLogs: UpdateLog[] = [
  {
    version: 1,
    date: "2026-08-15",
    changes: [
      "초판 발행: Reddit r/loseit(847댓글) + r/nutrition(826댓글) 기반",
      "10가지 핵심 원칙 선정",
      "10개 챕터 + 서문/마무리 작성",
      "보너스 5개 아웃라인 완성",
    ],
  },
];

export default function DietSecretsReadPage() {
  return (
    <GuideBook
      bookId="diet-secrets"
      title="다이어트 서바이벌 시스템"
      emoji="🏋️"
      subtitle="1,673명의 실패와 성공에서 뽑아낸 생존 가이드"
      topItems={topItems}
      sections={sections}
      updateLogs={updateLogs}
      currentVersion={1}
    />
  );
}
