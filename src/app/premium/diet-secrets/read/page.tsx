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
  {
    id: "bonus1",
    title: "🎁 보너스 1: 3주 벽 돌파 가이드",
    body: (
      <>
        <p className="text-lg font-semibold mb-4">Day 15~21, 매일 구체적으로 무엇을 하면 되는지.</p>

        <h3 className="text-lg font-semibold mt-6 mb-3">Day 15 (월) — 축소의 날</h3>
        <p>모든 것을 절반으로 줄이세요. 운동 30분→15분, 완벽하지 않아도 OK. <strong>기록만 멈추지 마세요.</strong></p>

        <h3 className="text-lg font-semibold mt-6 mb-3">Day 16 (화) — 이유를 기억하는 날</h3>
        <p>&quot;내가 시작한 이유&quot;를 다시 읽으세요. 시작 전 사진을 보세요. 포기하면 돌아갈 곳을 기억하세요.</p>

        <h3 className="text-lg font-semibold mt-6 mb-3">Day 17 (수) — 비상 식단의 날</h3>
        <p>의지력 0일 때 먹을 <strong>비상 식단 5가지</strong>를 정하세요. 준비 10분 이내, 500kcal 이내.</p>
        <div className="overflow-x-auto mt-3">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-gray-100 dark:bg-gray-800"><th className="p-2 border">#</th><th className="p-2 border">메뉴</th><th className="p-2 border">시간</th><th className="p-2 border">kcal</th></tr></thead>
            <tbody>
              <tr><td className="p-2 border">1</td><td className="p-2 border">계란 2개 스크램블 + 통밀빵</td><td className="p-2 border">5분</td><td className="p-2 border">~350</td></tr>
              <tr><td className="p-2 border">2</td><td className="p-2 border">참치캔 + 밥 반 공기 + 김</td><td className="p-2 border">3분</td><td className="p-2 border">~400</td></tr>
              <tr><td className="p-2 border">3</td><td className="p-2 border">그릭 요거트 + 바나나 + 견과류</td><td className="p-2 border">2분</td><td className="p-2 border">~350</td></tr>
              <tr><td className="p-2 border">4</td><td className="p-2 border">냉동 닭가슴살 + 샐러드</td><td className="p-2 border">7분</td><td className="p-2 border">~400</td></tr>
              <tr><td className="p-2 border">5</td><td className="p-2 border">두부 반 모 + 간장 + 밥 반 공기</td><td className="p-2 border">5분</td><td className="p-2 border">~350</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">Day 18 (목) — 작은 승리의 날</h3>
        <p>&quot;아직 멀었어&quot; 대신 &quot;여기까지 왔다&quot;에 집중. 18일간의 작은 승리 3가지를 적어보세요.</p>

        <h3 className="text-lg font-semibold mt-6 mb-3">Day 19 (금) — 계획된 유연성의 날</h3>
        <p>오늘 저녁 1끼는 자유. 죄책감 없이 즐기세요. 먹은 후 30초 리셋.</p>

        <h3 className="text-lg font-semibold mt-6 mb-3">Day 20 (토) — 움직임의 날</h3>
        <p>&quot;운동&quot;이 아니라 즐거운 활동 1가지. 30분 산책, 자전거, 청소, 춤 — 뭐든 OK.</p>

        <h3 className="text-lg font-semibold mt-6 mb-3">Day 21 (일) — 선언의 날</h3>
        <p className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 italic">
          &quot;나는 3주를 넘겼다. 완벽하지 않았지만, 멈추지 않았다. 이번이 마지막 다이어트다.&quot;
        </p>
        <p className="mt-3 font-semibold">3주를 넘긴 당신은 이미 상위 20%입니다. 80%는 여기서 포기했으니까요.</p>
      </>
    ),
  },
  {
    id: "bonus2",
    title: "🎁 보너스 2: 감정적 식사 탈출 매뉴얼",
    body: (
      <>
        <h3 className="text-lg font-semibold mt-4 mb-3">도구 1: HALT 체크리스트</h3>
        <p>갈망이 올 때 냉장고 문 앞에서 체크:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li><strong>H</strong>ungry? — 진짜 배고픈가? → 맞으면 먹으세요</li>
          <li><strong>A</strong>ngry/Anxious? — 화나거나 불안한가? → 5분 산책 또는 심호흡 5회</li>
          <li><strong>L</strong>onely? — 외로운가? → 누군가에게 메시지</li>
          <li><strong>T</strong>ired? — 피곤한가? → 물 한 잔 + 15분 휴식</li>
        </ul>
        <p className="mt-2 text-sm text-gray-500">이 체크리스트를 냉장고에 붙여두세요. 진짜로.</p>

        <h3 className="text-lg font-semibold mt-6 mb-3">도구 2: 5분 딜레이 기법</h3>
        <p>감정적 갈망은 5~10분이면 피크가 지나갑니다. 타이머 5분 → 대체 행동 → 5분 후 재확인.</p>

        <h3 className="text-lg font-semibold mt-6 mb-3">도구 3: 대체 보상 메뉴 30가지 (일부)</h3>
        <div className="grid md:grid-cols-2 gap-3 mt-3">
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold text-sm mb-2">1분 이내</p>
            <ul className="text-sm space-y-1">
              <li>물 한 잔</li>
              <li>심호흡 5회</li>
              <li>좋아하는 노래 1곡</li>
              <li>양치질</li>
            </ul>
          </div>
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold text-sm mb-2">5분 이내</p>
            <ul className="text-sm space-y-1">
              <li>짧은 스트레칭</li>
              <li>좋아하는 사람에게 메시지</li>
              <li>식물에 물 주기</li>
              <li>일기 3줄 적기</li>
            </ul>
          </div>
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold text-sm mb-2">15분 이내</p>
            <ul className="text-sm space-y-1">
              <li>동네 산책</li>
              <li>샤워하기</li>
              <li>명상 앱 10분</li>
              <li>청소 한 구역</li>
            </ul>
          </div>
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold text-sm mb-2">자기 돌봄</p>
            <ul className="text-sm space-y-1">
              <li>따뜻한 허브티</li>
              <li>좋아하는 책 10분</li>
              <li>친구에게 전화</li>
              <li>팟캐스트 듣기</li>
            </ul>
          </div>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">도구 4: 위기 순간 자기 대화</h3>
        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800">
          <p className="text-sm"><strong>1. 인정:</strong> &quot;갈망이 왔다. 이것은 정상이다.&quot;</p>
          <p className="text-sm"><strong>2. 명명:</strong> &quot;이것은 배고픔이 아니라 [스트레스/지루함]이다.&quot;</p>
          <p className="text-sm"><strong>3. 선택:</strong> &quot;5분만 기다려보자.&quot;</p>
          <p className="text-sm"><strong>4. 결과:</strong> 지나갔으면 → &quot;잘했다.&quot; / 먹었으면 → &quot;괜찮다. 연습이다.&quot;</p>
        </div>
      </>
    ),
  },
  {
    id: "bonus3",
    title: "🎁 보너스 3: 회식·모임 서바이벌 카드",
    body: (
      <>
        <h3 className="text-lg font-semibold mt-4 mb-3">원칙: &quot;다이어트 중&quot;이라고 말하지 않는다</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-gray-100 dark:bg-gray-800"><th className="p-2 border">상황</th><th className="p-2 border">❌ 피할 말</th><th className="p-2 border">✅ 자연스러운 대안</th></tr></thead>
            <tbody>
              <tr><td className="p-2 border">음식 권유</td><td className="p-2 border">&quot;다이어트 중이라...&quot;</td><td className="p-2 border">&quot;지금은 배가 좀 불러서&quot;</td></tr>
              <tr><td className="p-2 border">술 권유</td><td className="p-2 border">&quot;술 끊었어&quot;</td><td className="p-2 border">&quot;오늘은 차로 왔어&quot;</td></tr>
              <tr><td className="p-2 border">많이 먹으라는 압박</td><td className="p-2 border">&quot;칼로리 세고 있어&quot;</td><td className="p-2 border">&quot;점심을 늦게 먹어서&quot;</td></tr>
              <tr><td className="p-2 border">&quot;왜 적게 먹어?&quot;</td><td className="p-2 border">&quot;살 빼는 중&quot;</td><td className="p-2 border">&quot;요즘 위가 좀 예민해서&quot;</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">회식 3단계 전략</h3>
        <ol className="list-decimal list-inside space-y-2 ml-4">
          <li><strong>가기 전:</strong> 메뉴 미리 확인 + 아침/점심 가볍게 + 가기 전 간식(계란 1개)</li>
          <li><strong>먹는 중:</strong> 채소로 접시 절반 + 느리게 먹기 + 물 먼저/술과 번갈아</li>
          <li><strong>먹은 후:</strong> 30초 리셋 + 다음 날 정상 복귀</li>
        </ol>

        <h3 className="text-lg font-semibold mt-6 mb-3">음식 종류별 핵심 전략</h3>
        <div className="space-y-3">
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold">🥩 삼겹살</p>
            <p className="text-sm">목살로 변경, 쌈 채소 많이, 볶음밥 마무리 건너뛰기</p>
          </div>
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold">🍗 치맥</p>
            <p className="text-sm">3~4조각 + 맥주 2잔까지. 하이볼은 절반 칼로리</p>
          </div>
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold">🍣 일식</p>
            <p className="text-sm">회/사시미 위주, 초밥 8~10개 이내, 튀김 피하기</p>
          </div>
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold">🍽️ 뷔페</p>
            <p className="text-sm">첫 접시 샐러드+단백질, 한 바퀴 돌고 선택, &quot;본전&quot; 잊기</p>
          </div>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">음주 칼로리</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-gray-100 dark:bg-gray-800"><th className="p-2 border">음료</th><th className="p-2 border">kcal</th><th className="p-2 border">전략</th></tr></thead>
            <tbody>
              <tr><td className="p-2 border">소주 1잔</td><td className="p-2 border">65</td><td className="p-2 border">물과 번갈아</td></tr>
              <tr><td className="p-2 border">맥주 500ml</td><td className="p-2 border">200~250</td><td className="p-2 border">2잔까지만</td></tr>
              <tr><td className="p-2 border">하이볼</td><td className="p-2 border">100~150</td><td className="p-2 border">맥주 대안</td></tr>
              <tr><td className="p-2 border">소주 1병</td><td className="p-2 border">540</td><td className="p-2 border">반 병이면 270</td></tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: "bonus4",
    title: "🎁 보너스 4: 주방 리셋 체크리스트",
    body: (
      <>
        <p>소요 시간 1~2시간. 냉장고와 찬장을 한 번에 리셋합니다.</p>

        <h3 className="text-lg font-semibold mt-6 mb-3">찬장: 다 먹고 재구매 안 할 것</h3>
        <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
          <li>과자/칩, 초콜릿/캔디/젤리</li>
          <li>컵라면 (2~3개만 남기고)</li>
          <li>설탕이 첫 번째 성분인 시리얼</li>
          <li>믹스 커피 (설탕+크림)</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">냉장고: 다 먹고 재구매 안 할 것</h3>
        <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
          <li>탄산음료/주스, 초콜릿 우유</li>
          <li>아이스크림 (유발 음식 1위)</li>
          <li>케이크/빵류</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">냉장고 구역 설정</h3>
        <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900 font-mono text-sm">
          <p><strong>눈높이:</strong> 삶은 계란, 방울토마토, 과일, 그릭 요거트, 당근 스틱</p>
          <p><strong>중간:</strong> 반찬, 두부, Meal Prep 용기</p>
          <p><strong>아래:</strong> 생고기, 생선, 채소 서랍</p>
          <p><strong>문쪽:</strong> 물, 탄산수, 소스류</p>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">필수 구매 리스트</h3>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold text-sm mb-1">단백질</p>
            <p className="text-xs">계란, 닭가슴살, 두부, 그릭 요거트, 참치캔, 콩/렌틸</p>
          </div>
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold text-sm mb-1">채소</p>
            <p className="text-xs">브로콜리, 방울토마토, 오이, 양배추, 시금치, 당근, 파프리카</p>
          </div>
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold text-sm mb-1">탄수화물</p>
            <p className="text-xs">현미/잡곡, 통밀빵, 오트밀, 고구마</p>
          </div>
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold text-sm mb-1">양념</p>
            <p className="text-xs">간장, 식초, 고추가루, 마늘, 레몬즙, 핫소스, 올리브유, 참기름</p>
          </div>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">Meal Prep 1주일 예시</h3>
        <p className="text-sm mb-2"><strong>일요일 1시간:</strong> 닭가슴살 500g 굽기 + 잡곡밥 4공기 소분 + 채소 데치기 + 계란 6개 삶기</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-gray-100 dark:bg-gray-800"><th className="p-2 border"></th><th className="p-2 border">아침</th><th className="p-2 border">점심</th><th className="p-2 border">저녁</th></tr></thead>
            <tbody>
              <tr><td className="p-2 border font-semibold">월~목</td><td className="p-2 border">계란/요거트 로테이션</td><td className="p-2 border">닭가슴살+밥+채소</td><td className="p-2 border">자유</td></tr>
              <tr><td className="p-2 border font-semibold">금</td><td className="p-2 border">동일</td><td className="p-2 border">참치/두부 변형</td><td className="p-2 border">계획된 유연성</td></tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: "bonus5",
    title: "🎁 보너스 5: 유지 모드 전환 가이드",
    body: (
      <>
        <p className="text-lg font-semibold mb-4">감량 후 요요 없이 새로운 체중을 안착시키는 12주 로드맵</p>

        <h3 className="text-lg font-semibold mt-4 mb-3">Phase 1: 칼로리 전환 (1~4주)</h3>
        <p>감량 칼로리에서 주당 100kcal씩 증가. 매주 체중 모니터링.</p>
        <div className="overflow-x-auto mt-3">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-gray-100 dark:bg-gray-800"><th className="p-2 border">주차</th><th className="p-2 border">칼로리</th><th className="p-2 border">모니터링</th></tr></thead>
            <tbody>
              <tr><td className="p-2 border">1주차</td><td className="p-2 border">감량 + 100kcal</td><td className="p-2 border">매일 측정 → 주간 평균</td></tr>
              <tr><td className="p-2 border">2주차</td><td className="p-2 border">+ 100kcal 추가</td><td className="p-2 border">주간 평균 비교</td></tr>
              <tr><td className="p-2 border">3주차</td><td className="p-2 border">+ 100kcal 추가</td><td className="p-2 border">주간 평균 비교</td></tr>
              <tr><td className="p-2 border">4주차</td><td className="p-2 border">+ 100kcal 추가</td><td className="p-2 border">안정 지점 확인</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mt-2">※ 처음 1~2kg 증가는 글리코겐+수분입니다. 당황하지 마세요.</p>

        <h3 className="text-lg font-semibold mt-6 mb-3">Phase 2: 습관 안정화 (5~8주)</h3>
        <p>유지 칼로리에서 편안하게 먹는 법을 익히는 단계.</p>
        <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
          <li>주간 체중 평균이 목표 ±1kg 이내인가?</li>
          <li>반복 식단/움직임 습관 유지 중인가?</li>
          <li>감정적 식사가 증가하지 않았는가?</li>
          <li>&quot;이제 됐다&quot; 심리가 오지 않았는가?</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">Phase 3: 자유와 경계 (9~12주)</h3>
        <p>추적을 단계적으로 완화하되, 모니터링은 유지.</p>
        <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
          <li>9~10주: 평일만 추적, 주말 자유</li>
          <li>11~12주: 대략적 인식만. 체중은 최소 주 1회</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">체중 신호등 시스템</h3>
        <div className="space-y-2">
          <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
            <p className="text-sm"><strong>🟢 목표 ±1kg:</strong> 정상 변동. 유지.</p>
          </div>
          <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800">
            <p className="text-sm"><strong>🟡 목표 +1~3kg:</strong> 1주간 칼로리 추적 재개. 환경 점검.</p>
          </div>
          <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800">
            <p className="text-sm"><strong>🔴 목표 +3kg 이상:</strong> 즉시 추적 재개 + 주방 리셋 + 감량 모드 재진입.</p>
          </div>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">위험 신호 조기 감지</h3>
        <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
          <li>&quot;오늘은 기록 안 해도 되겠지&quot;가 3일 연속</li>
          <li>체중계를 의도적으로 피하기 시작</li>
          <li>Meal Prep을 건너뛰기 시작</li>
          <li>배달 주문이 주 3회 이상</li>
          <li>&quot;이제 됐다&quot; — 가장 위험한 단어</li>
        </ul>
        <p className="mt-2 text-sm font-semibold">3개 이상 동시에 나타나면: 비상 프로토콜 실행.</p>

        <h3 className="text-lg font-semibold mt-6 mb-3">월간 점검 (5분)</h3>
        <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
          <li>체중이 목표 ±2kg 이내인가?</li>
          <li>주 1회 이상 체중을 재고 있는가?</li>
          <li>움직임/식사 구조를 유지하고 있는가?</li>
          <li>주방 환경이 유지되고 있는가?</li>
        </ul>

        <blockquote className="border-l-4 border-blue-400 pl-4 my-6 italic text-gray-600 dark:text-gray-400">
          &quot;이게 내 삶이다. 다이어트가 아니라.&quot; — u/Lisadazy (60kg 감량, 유지 20년)
        </blockquote>
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
