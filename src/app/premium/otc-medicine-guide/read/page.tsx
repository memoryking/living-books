import GuideBook from "@/components/GuideBook";
import type {
  TopItem,
  ContentSection,
  UpdateLog,
} from "@/components/GuideBook";

export const metadata = {
  title: "약사가 알려주는 상비약 완전 가이드 — 본문 | 살아있는 정보책",
  description:
    "해열제·감기약·소화제·상처약·알레르기약·영양제 50+ 약품 분석. 타이레놀 vs 부루펜, 감기약 성분 겹침, 후시딘 vs 마데카솔, 어린이 체중별 용량, 비타민D·오메가3, 상비약 보관·응급 대처.",
};

const topItems: TopItem[] = [
  {
    number: 1,
    title: "해열진통제의 모든 것",
    oneLiner: "타이레놀(아세트아미노펜)과 부루펜(NSAIDs)은 효과와 부작용이 완전히 다르다.",
    description:
      "타이레놀 간독성 경고, NSAIDs 위장 부작용, 어린이 체중별 용량표, 교차 복용법, 39도 응급실 기준.",
    situation: "두통·발열에 아무 해열제나 먹고 있을 때",
    action: "감기약에 아세트아미노펜이 이미 들어 있는지 성분표를 확인하세요.",
    mission: "약장에서 해열제를 꺼내 성분명과 함량을 확인해보세요.",
  },
  {
    number: 2,
    title: "감기약 완전 분석",
    oneLiner: "감기약은 감기를 낫게 하지 않는다 — 증상을 완화할 뿐이다.",
    description:
      "판콜에이·판피린큐·화이투벤·콘택600 성분 비교, 겹침 위험, 증상별 최적 선택, 어린이 주의사항.",
    situation: "감기 걸렸을 때 아무 종합감기약이나 골라 먹을 때",
    action: "가장 불편한 증상 1~2가지에 맞는 약만 선택하세요.",
    mission: "약장의 감기약 성분표를 읽고 아세트아미노펜 포함 여부를 확인하세요.",
  },
  {
    number: 3,
    title: "위장약과 소화제",
    oneLiner: "속쓰림과 소화불량은 원인이 다르고, 필요한 약도 다르다.",
    description:
      "소화불량 vs 역류성 식도염 구별, 겔포스·게비스콘·PPI 비교, 소화제 습관 복용 문제.",
    situation: "속이 불편할 때 무조건 소화제를 찾을 때",
    action: "증상이 더부룩함인지 속쓰림인지 구별하고 적합한 약을 선택하세요.",
    mission: "2주 이상 위장 증상이 반복되면 내시경 검사를 예약하세요.",
  },
  {
    number: 4,
    title: "쌍화탕과 한방 상비약",
    oneLiner: "한약도 약이다 — 감초, 마황, 당귀의 양약 상호작용을 반드시 알아야 한다.",
    description:
      "쌍화탕 효과의 정직한 답, 우황청심환 오해, 한약+양약 병용 시 위험, 인삼/홍삼 주의 대상.",
    situation: "피로할 때 쌍화탕을 마시거나 뇌졸중 의심 시 우황청심환을 먹이려 할 때",
    action: "뇌졸중 의심 시 우황청심환이 아니라 119에 즉시 전화하세요.",
    mission: "복용 중인 양약이 있다면 한약 병용 전 약사에게 상담하세요.",
  },
  {
    number: 5,
    title: "상처, 화상, 피부 약",
    oneLiner: "과산화수소(옥시풀)는 더 이상 상처에 쓰지 말고, 습윤 드레싱이 흉터를 줄인다.",
    description:
      "후시딘(항생제) vs 마데카솔(재생) vs 베판텐(보습) 선택, 화상 20분 냉각, 무좀약 4주.",
    situation: "상처에 빨간약이나 옥시풀을 바르고 있을 때",
    action: "상처는 흐르는 물로 세척하고 상황에 맞는 연고를 선택하세요.",
    mission: "약장에 습윤 밴드(듀오덤)를 비치하세요.",
  },
  {
    number: 6,
    title: "알레르기와 비염약",
    oneLiner: "알레르기약은 반드시 2세대를 선택하고, 코막힘 스프레이는 3~5일만 사용하라.",
    description:
      "지르텍·클라리틴·알레그라 비교, 비염 스프레이 약물성 비염 위험, 운전과 졸음, 아토피 관리.",
    situation: "코막힘 스프레이를 매일 사용하거나 1세대 항히스타민제로 졸림을 겪을 때",
    action: "2세대 항히스타민제(세티리진·로라타딘·펙소페나딘) 중 선택하세요.",
    mission: "코막힘 스프레이 사용 일수를 세고 3~5일 이내로 제한하세요.",
  },
  {
    number: 7,
    title: "변비, 설사, 장 건강",
    oneLiner: "자극성 하제(둘코락스)는 2주 이상 사용하지 말고, 설사 시 수분 보충이 먼저다.",
    description:
      "변비약 5종류 비교, 유산균의 진짜 효과, 급성 설사 수분 보충법, 과민성 장 증후군.",
    situation: "변비약을 습관적으로 복용하거나 설사 시 지사제만 찾을 때",
    action: "변비에는 삼투성 하제(마그밀)가 더 안전하고, 설사에는 물이 먼저입니다.",
    mission: "장 건강의 기본은 식이섬유 + 수분 + 운동입니다. 이번 주부터 실천하세요.",
  },
  {
    number: 8,
    title: "눈, 귀, 입 약",
    oneLiner: "인공눈물 하루 4회 이상이면 방부제 무함유(1회용)를 선택하라.",
    description:
      "인공눈물 성분별 비교, 충혈 제거 안약 남용 위험, 오라메디 vs 알보칠, 가글, 면봉 귀 파기 금지.",
    situation: "충혈 제거 안약을 습관적으로 넣거나 면봉으로 귀를 팔 때",
    action: "충혈의 원인을 찾고, 귀는 자정 작용에 맡기세요.",
    mission: "구내염이 2주 이상 낫지 않으면 치과에 가세요.",
  },
  {
    number: 9,
    title: "구충제, 비타민, 영양제",
    oneLiner: "한국인 70~80%가 비타민D 부족이다 — 정말 필요한 영양제는 2~3가지뿐이다.",
    description:
      "비타민D 권장량, 오메가3 rTG형, 철분제 복용법, 근거 약한 영양제(콜라겐·글루코사민), 정직한 답.",
    situation: "영양제를 광고 보고 이것저것 구매하고 있을 때",
    action: "혈액검사로 부족한 영양소를 확인하고 2~3가지만 복용하세요.",
    mission: "현재 복용 중인 영양제를 꺼내 근거가 확실한지 확인하세요.",
  },
  {
    number: 10,
    title: "상비약 보관, 폐기, 응급 대처",
    oneLiner: "아세트아미노펜 과량 복용은 처음에 증상이 없어도 반드시 응급실에 가야 한다.",
    description:
      "가정 상비약 필수 목록, 보관 3대 적(온도·습도·빛), 유효기간, 폐의약품 수거, 119 기준.",
    situation: "약장에 유효기간 지난 약이 쌓여 있거나 응급 상황 대처법을 모를 때",
    action: "부록의 상비약 체크리스트로 약장을 점검하세요.",
    mission: "응급 전화번호 카드를 인쇄하여 냉장고에 붙이세요.",
  },
];

const sections: ContentSection[] = [
  {
    id: "preface",
    title: "서문 — 당신의 약 상자, 제대로 알고 계신가요?",
    body: (
      <>
        <p>약국에서 20년 가까이 환자분들을 만나면서 가장 많이 받는 질문이 있습니다. <strong>&quot;이거 먹어도 되나요?&quot;</strong></p>
        <p>타이레놀을 먹고 술을 마셔도 되는지, 감기약 두 종류를 같이 먹어도 되는지, 아이 열이 39도인데 응급실에 가야 하는지. 이런 질문들은 밤 10시에도, 명절 연휴에도, 약국 문을 닫은 뒤에도 끊이지 않습니다.</p>
        <p>이 책은 다릅니다. <strong>한국 약국에서 실제로 살 수 있는 약</strong>의 구체적인 이름, 용량, 주의사항을 모두 담았습니다. 마치 약사가 옆에 앉아서 하나하나 설명해주는 것처럼 썼습니다.</p>
        <h3 className="text-xl font-bold mt-8 mb-4">이 책의 구성</h3>
        <p><strong>1~2장</strong> — 해열진통제와 감기약의 원리, 성분 비교, 안전한 복용법.</p>
        <p><strong>3~4장</strong> — 위장약·소화제와 한방 상비약(쌍화탕·우황청심환).</p>
        <p><strong>5~6장</strong> — 상처/화상/피부 약과 알레르기/비염약.</p>
        <p><strong>7~8장</strong> — 변비/설사/장 건강과 눈/귀/입 약.</p>
        <p><strong>9~10장</strong> — 영양제 정직한 평가, 상비약 보관·폐기·응급 대처.</p>
        <p><strong>부록</strong> — 상비약 체크리스트, 체중별 용량표, 약물 상호작용 위험표, 증상별 추천 약품표, 어린이 약 용량표, 응급 전화번호 카드.</p>
        <blockquote className="border-l-4 border-emerald-400 pl-4 py-2 my-4 bg-emerald-50 dark:bg-emerald-950 rounded-r-lg">
          <p><strong>서문 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>약은 올바르게 쓰면 고마운 존재이지만, 잘못 쓰면 독이 됩니다.</li>
            <li>처음부터 끝까지 읽으실 필요 없습니다. 필요할 때 해당 챕터를 찾아보세요.</li>
            <li><strong>10장 &lsquo;응급 대처&rsquo;는 한 번쯤 미리 읽어두세요.</strong> 응급 상황은 미리 알아야 대처할 수 있습니다.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch1",
    title: "Ch.1 해열진통제의 모든 것",
    body: (
      <>
        <p>해열진통제는 크게 <strong>아세트아미노펜(타이레놀)</strong>과 <strong>NSAIDs(부루펜, 이지엔6)</strong>로 나뉘며, 효과와 부작용이 완전히 다릅니다.</p>
        <h3 className="text-xl font-bold mt-8 mb-4">아세트아미노펜 vs NSAIDs</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>아세트아미노펜</strong> — 해열·진통 OK, 소염 없음, 공복 가능, 과량 시 <strong>간독성</strong></li>
          <li><strong>NSAIDs</strong> — 해열·진통·소염 OK, 식후 복용, <strong>위장·신장 부작용</strong>, 임신 후기 금기</li>
        </ul>
        <h3 className="text-xl font-bold mt-8 mb-4">핵심 경고: 간독성</h3>
        <p>타이레놀을 복용하는 날에는 <strong>술을 마시지 마세요</strong>. 많은 종합감기약에 아세트아미노펜이 들어 있어, 타이레놀을 따로 먹으면 <strong>이중 복용</strong>이 됩니다. 1일 최대 4,000mg, 안전을 위해 3,000mg 이내 권장.</p>
        <h3 className="text-xl font-bold mt-8 mb-4">어린이 해열제</h3>
        <p>어린이 해열제는 <strong>나이가 아니라 체중</strong>으로 계산합니다. 아세트아미노펜 10~15mg/kg, 이부프로펜 5~10mg/kg. 교차 복용 시 같은 약끼리 최소 6시간, 다른 약으로 교차 시 최소 3시간 간격.</p>
        <blockquote className="border-l-4 border-emerald-400 pl-4 py-2 my-4 bg-emerald-50 dark:bg-emerald-950 rounded-r-lg">
          <p><strong>1챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>타이레놀과 술은 절대 같이 하지 마세요.</li>
            <li>감기약 복용 중이면 타이레놀 추가 복용 전에 성분표를 확인하세요.</li>
            <li><strong>오늘부터 실행</strong>: 약장의 해열제 성분명과 함량을 확인하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch2",
    title: "Ch.2 감기약 완전 분석",
    body: (
      <>
        <p><strong>감기약은 감기를 낫게 하지 않습니다.</strong> 감기는 바이러스에 의한 자연 치유성 질환으로, 7~10일이면 저절로 낫습니다. 감기약은 증상을 완화하여 회복을 돕는 역할입니다.</p>
        <h3 className="text-xl font-bold mt-8 mb-4">주요 감기약 비교</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>판콜에이</strong> — 종합적 증상(콧물+기침+열+몸살). 운전 주의.</li>
          <li><strong>판피린큐</strong> — 코막힘+두통. 기침 성분 없음. 고혈압 주의.</li>
          <li><strong>화이투벤</strong> — 기침+가래 집중. 해열 성분 없어 타이레놀 병용 가능.</li>
          <li><strong>콘택600</strong> — 코막힘+콧물만. 심플한 구성, 12시간 지속.</li>
        </ul>
        <h3 className="text-xl font-bold mt-8 mb-4">성분 겹침의 위험</h3>
        <p><strong>종합감기약은 하나만 선택하세요.</strong> 판콜에이 + 타이레놀 = 아세트아미노펜 이중 복용(간독성). 판피린 + 콘택600 = 슈도에페드린 이중 복용(혈압 상승).</p>
        <blockquote className="border-l-4 border-emerald-400 pl-4 py-2 my-4 bg-emerald-50 dark:bg-emerald-950 rounded-r-lg">
          <p><strong>2챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>가장 불편한 증상 1~2가지에 맞는 약만 선택하세요.</li>
            <li>만성 질환 약을 복용 중이면 반드시 약사에게 알려주세요.</li>
            <li><strong>오늘부터 실행</strong>: 약보다 충분한 휴식, 수분 섭취, 적절한 습도가 먼저입니다.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch3",
    title: "Ch.3 위장약과 소화제",
    body: (
      <>
        <p>&quot;속이 더부룩해요&quot;, &quot;속이 쓰려요&quot;, &quot;체한 것 같아요&quot;. 비슷해 보이지만 원인이 다르고, 필요한 약도 다릅니다.</p>
        <h3 className="text-xl font-bold mt-8 mb-4">위장약 비교</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>겔포스</strong> — 제산제, 즉각적 속쓰림 완화. 2주 이상 연속 사용 금지.</li>
          <li><strong>게비스콘</strong> — 역류 차단(물리적 뗏목). 역류성 식도염 1차 선택.</li>
          <li><strong>란소프라졸(란스톤)</strong> — PPI, 가장 강력한 위산 억제. 2주 제한.</li>
          <li><strong>훼스탈/베나치오</strong> — 소화효소제. 과식 후 적합. 매일 복용 비권장.</li>
        </ul>
        <blockquote className="border-l-4 border-emerald-400 pl-4 py-2 my-4 bg-emerald-50 dark:bg-emerald-950 rounded-r-lg">
          <p><strong>3챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>속쓰림에는 제산제/PPI, 소화불량에는 소화효소제 — 다른 약이 필요합니다.</li>
            <li>PPI는 2주 이상 스스로 복용하지 마세요.</li>
            <li><strong>오늘부터 실행</strong>: 소화제 습관 복용을 멈추고, 식사량과 속도를 조절하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch4",
    title: "Ch.4 쌍화탕과 한방 상비약",
    body: (
      <>
        <p>한약도 약입니다. &quot;천연이니까 안전하다&quot;는 오해입니다. 특히 <strong>한약과 양약을 함께 복용할 때의 상호작용</strong>이 중요합니다.</p>
        <h3 className="text-xl font-bold mt-8 mb-4">쌍화탕의 정직한 답</h3>
        <p>가벼운 피로 시 한 잔은 나쁘지 않습니다. 하지만 대규모 임상시험 근거는 제한적이며, 만성 피로는 병원 검사(빈혈, 갑상선 등)가 우선입니다.</p>
        <h3 className="text-xl font-bold mt-8 mb-4">우황청심환 — 중대한 경고</h3>
        <p><strong>뇌졸중이 의심되면 우황청심환이 아니라 119입니다.</strong> 우황청심환을 먹이느라 골든타임(4.5시간)을 놓치는 경우가 있습니다.</p>
        <h3 className="text-xl font-bold mt-8 mb-4">위험한 상호작용</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>감초</strong> + 이뇨제 = 저칼륨혈증, + 고혈압약 = 혈압 조절 방해</li>
          <li><strong>마황</strong> + 감기약(슈도에페드린) = 에페드린 이중 투여</li>
          <li><strong>당귀</strong> + 와파린/아스피린 = 출혈 위험 증가</li>
        </ul>
        <blockquote className="border-l-4 border-emerald-400 pl-4 py-2 my-4 bg-emerald-50 dark:bg-emerald-950 rounded-r-lg">
          <p><strong>4챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>뇌졸중 의심 시 우황청심환이 아니라 119입니다.</li>
            <li>한약과 양약을 함께 드실 때는 반드시 약사나 의사에게 알리세요.</li>
            <li><strong>오늘부터 실행</strong>: 한약과 양약은 최소 1~2시간 간격으로 복용하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch5",
    title: "Ch.5 상처, 화상, 피부 약",
    body: (
      <>
        <p>현대 상처 치료의 핵심은 <strong>습윤 드레싱</strong>입니다. 딱지는 오히려 세포 이동을 방해하고 흉터를 남깁니다. 과산화수소(옥시풀)는 정상 세포까지 파괴하므로 <strong>더 이상 사용하지 마세요</strong>.</p>
        <h3 className="text-xl font-bold mt-8 mb-4">연고 선택 가이드</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>후시딘</strong> — 항생제 연고. 감염 우려 상처. 7~10일 이내만.</li>
          <li><strong>마데카솔</strong> — 재생 촉진제. 깨끗한 상처, 흉터 예방.</li>
          <li><strong>베판텐</strong> — 보습/재생. 가벼운 상처, 아기 기저귀 발진.</li>
        </ul>
        <h3 className="text-xl font-bold mt-8 mb-4">화상 응급 처치</h3>
        <p>즉시 <strong>흐르는 찬 물(15~25도)에 20분 이상</strong> 식히세요. 얼음 직접 대기, 된장/치약 바르기, 물집 터뜨리기는 절대 금지.</p>
        <blockquote className="border-l-4 border-emerald-400 pl-4 py-2 my-4 bg-emerald-50 dark:bg-emerald-950 rounded-r-lg">
          <p><strong>5챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>옥시풀은 더 이상 상처에 쓰지 마세요. 습윤 드레싱이 흉터를 줄입니다.</li>
            <li>항생제 연고(후시딘)는 7~10일 이내만 사용하세요.</li>
            <li><strong>오늘부터 실행</strong>: 약장에 습윤 밴드(듀오덤)를 비치하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch6",
    title: "Ch.6 알레르기와 비염약",
    body: (
      <>
        <p>한국 성인 3명 중 1명이 알레르기 비염. 올바른 약 사용과 생활 관리로 충분히 조절할 수 있습니다.</p>
        <h3 className="text-xl font-bold mt-8 mb-4">항히스타민제 비교</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>지르텍(세티리진)</strong> — 효과 강, 약간 졸음. 취침 전 권장.</li>
          <li><strong>클라리틴(로라타딘)</strong> — 졸음 거의 없음. 낮에 적합.</li>
          <li><strong>알레그라(펙소페나딘)</strong> — 졸음 없음. 운전 완전 안전. 과일주스 주의.</li>
        </ul>
        <h3 className="text-xl font-bold mt-8 mb-4">코막힘 스프레이 경고</h3>
        <p>오트리빈 등 혈관수축제는 <strong>3~5일까지만</strong>. 연속 사용 시 약물성 비염이 발생합니다.</p>
        <blockquote className="border-l-4 border-emerald-400 pl-4 py-2 my-4 bg-emerald-50 dark:bg-emerald-950 rounded-r-lg">
          <p><strong>6챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>알레르기약은 2세대를 선택하세요. 1세대는 졸음이 심합니다.</li>
            <li>스테로이드 비염 스프레이는 안전합니다 — 이름에 겁먹지 마세요.</li>
            <li><strong>오늘부터 실행</strong>: 알레르기 시즌 2주 전부터 항히스타민제를 선제 투여하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch7",
    title: "Ch.7 변비, 설사, 장 건강",
    body: (
      <>
        <p>면역세포의 70%가 장에 존재하고, 세로토닌의 90%가 장에서 만들어집니다. 장이 건강해야 면역도 기분도 좋아집니다.</p>
        <h3 className="text-xl font-bold mt-8 mb-4">변비약 비교</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>둘코락스</strong> — 자극성 하제. 효과 빠르지만 2주 이상 금지(장 의존성).</li>
          <li><strong>마그밀</strong> — 삼투성 하제. 비교적 안전, 장기 사용 가능.</li>
          <li><strong>듀파락</strong> — 임산부 변비 1차 선택. 장내 유익균 먹이.</li>
        </ul>
        <h3 className="text-xl font-bold mt-8 mb-4">유산균의 정직한 답</h3>
        <p>유산균은 약이 아니라 보조 수단입니다. 항생제 관련 설사 예방에는 근거가 확실하지만, 체중 감량이나 우울증 개선에는 근거가 약합니다. 식이섬유 + 수분 + 운동이 장 건강의 기본입니다.</p>
        <blockquote className="border-l-4 border-emerald-400 pl-4 py-2 my-4 bg-emerald-50 dark:bg-emerald-950 rounded-r-lg">
          <p><strong>7챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>자극성 하제(둘코락스)는 2주 이상 사용하지 마세요.</li>
            <li>설사 시 가장 중요한 것은 수분 보충입니다.</li>
            <li><strong>오늘부터 실행</strong>: 혈변, 체중 감소, 야간 설사는 반드시 병원에 가세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch8",
    title: "Ch.8 눈, 귀, 입 약",
    body: (
      <>
        <p>스마트폰 시대에 눈 건강은 심각한 위협을 받고 있습니다. 구내염은 피로의 바로미터이며, 귀 관리는 잘못된 습관이 너무나 흔합니다.</p>
        <h3 className="text-xl font-bold mt-8 mb-4">인공눈물</h3>
        <p>하루 4회 이상 사용한다면 <strong>방부제 무함유(1회용)</strong>를 선택하세요. 방부제(벤잘코늄클로라이드)가 각막을 손상시킬 수 있습니다.</p>
        <h3 className="text-xl font-bold mt-8 mb-4">구내염: 오라메디 vs 알보칠</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>오라메디</strong> — 스테로이드 연고. 항염, 1~2일 후 개선. 통증 적음.</li>
          <li><strong>알보칠</strong> — 소작 효과. 즉각적이지만 매우 따가움.</li>
        </ul>
        <h3 className="text-xl font-bold mt-8 mb-4">면봉으로 귀를 파지 마세요</h3>
        <p>귀지는 자정 작용으로 자연스럽게 밖으로 밀려 나옵니다. 면봉은 귀지를 더 안으로 밀어넣고 고막 손상 위험이 있습니다.</p>
        <blockquote className="border-l-4 border-emerald-400 pl-4 py-2 my-4 bg-emerald-50 dark:bg-emerald-950 rounded-r-lg">
          <p><strong>8챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>충혈 제거 안약은 습관적으로 사용하지 마세요 — 반동 충혈이 옵니다.</li>
            <li>가글은 양치질의 보조이지 대체가 아닙니다.</li>
            <li><strong>오늘부터 실행</strong>: 구내염이 2주 이상 낫지 않으면 반드시 병원에 가세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch9",
    title: "Ch.9 구충제, 비타민, 영양제",
    body: (
      <>
        <p>한국 건강기능식품 시장은 연 6조 원. 과장과 진실이 뒤섞여 있습니다. 약사로서 <strong>진짜 필요한 것과 광고에 속지 말아야 할 것</strong>을 구분해 드립니다.</p>
        <h3 className="text-xl font-bold mt-8 mb-4">근거가 확실한 영양제</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>비타민D</strong> — 한국인 70~80% 부족. 1,000~2,000IU/일. D3 선택.</li>
          <li><strong>엽산</strong>(임산부) — 태아 신경관 결손 예방. 400~800mcg/일.</li>
          <li><strong>철분</strong>(월경 여성, 빈혈 진단) — 비타민C와 함께, 카페인과 2시간 간격.</li>
        </ul>
        <h3 className="text-xl font-bold mt-8 mb-4">근거가 약한 영양제</h3>
        <p>콜라겐(먹은 콜라겐이 피부 콜라겐이 되지 않음), 글루코사민(대규모 연구 부정적), 고용량 비타민C(감기 예방 미미, 과량 시 신장 결석).</p>
        <blockquote className="border-l-4 border-emerald-400 pl-4 py-2 my-4 bg-emerald-50 dark:bg-emerald-950 rounded-r-lg">
          <p><strong>9챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>비타민D는 한국인 대부분에게 필요합니다.</li>
            <li>영양제는 2~3가지만 필요한 것을 선택하세요 — 다다익선이 아닙니다.</li>
            <li><strong>오늘부터 실행</strong>: 확실하지 않으면 혈액검사 먼저 받으세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch10",
    title: "Ch.10 상비약 보관, 폐기, 응급 대처",
    body: (
      <>
        <p>아무리 좋은 약이라도 잘못 보관하면 효과가 떨어지거나 오히려 해로울 수 있습니다.</p>
        <h3 className="text-xl font-bold mt-8 mb-4">보관의 3대 적: 온도, 습도, 빛</h3>
        <p>약은 <strong>서늘하고 어두운 곳(15~25도)</strong>에 보관하세요. 화장실(습도), 주방 가스레인지 근처(고온), 차량 내부(여름 60도 이상)는 부적합합니다.</p>
        <h3 className="text-xl font-bold mt-8 mb-4">유효기간과 개봉 후 사용기한</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li>시럽제 — 개봉 후 1~3개월</li>
          <li>안약(방부제 포함) — 개봉 후 1개월</li>
          <li>연고/크림 — 개봉 후 6개월~1년</li>
        </ul>
        <h3 className="text-xl font-bold mt-8 mb-4">아세트아미노펜 과량 복용의 함정</h3>
        <p>처음에는 <strong>아무 증상이 없습니다</strong>. 24~72시간 후에 간 손상이 나타납니다. 과량 복용이 의심되면 증상이 없더라도 <strong>즉시 응급실</strong>에 가세요.</p>
        <blockquote className="border-l-4 border-emerald-400 pl-4 py-2 my-4 bg-emerald-50 dark:bg-emerald-950 rounded-r-lg">
          <p><strong>10챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>유효기간 지난 약은 약국 폐의약품 수거함에 반납하세요.</li>
            <li>어린이 손 닿지 않는 120cm 이상 높이에 약을 보관하세요.</li>
            <li><strong>오늘부터 실행</strong>: 부록의 상비약 체크리스트로 약장을 점검하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "appendix",
    title: "부록 — 가정 상비약 실전 참고표",
    body: (
      <>
        <p>이 부록에는 책에서 다룬 내용을 <strong>바로 사용할 수 있는 도구</strong>로 정리했습니다. 프린트하거나 사진을 찍어서 활용하세요.</p>
        <h3 className="text-xl font-bold mt-8 mb-4">6종 실전 참고표</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>가정 상비약 체크리스트</strong> — 필수 상비약 10종 + 응급 용품 9종. 유효기간 확인란 포함.</li>
          <li><strong>해열제 체중별 용량표</strong> — 아세트아미노펜·이부프로펜 체중별 정확한 용량과 시럽 mL 환산.</li>
          <li><strong>약물 상호작용 위험 조합표</strong> — 일반의약품 간, 일반+전문의약품, 약물+음식/음료 위험 조합.</li>
          <li><strong>증상별 추천 약품표</strong> — 통증/발열, 감기, 소화기 증상별 1차 추천과 대안.</li>
          <li><strong>어린이 약 용량표</strong> — 좌약 체중별 가이드, 절대 하면 안 되는 5가지.</li>
          <li><strong>응급 전화번호 카드</strong> — 119, 독성정보센터(1899-8119), 소아 응급 상담. 인쇄하여 냉장고에 부착.</li>
        </ol>
        <h3 className="text-xl font-bold mt-8 mb-4">자주 묻는 질문 5선</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>타이레놀 먹고 술 마셔도 되나요</strong> — 안 됩니다. 간독성 위험이 크게 증가합니다.</li>
          <li><strong>감기약 두 종류 겹쳐 먹어도 되나요</strong> — 안 됩니다. 성분 이중 복용으로 부작용이 늘어납니다.</li>
          <li><strong>소화제 매일 먹어도 되나요</strong> — 비권장입니다. 자체 소화 능력 저하와 근본 원인 무시 문제.</li>
          <li><strong>후시딘 마데카솔 뭘 발라야 하나요</strong> — 감염 우려 → 후시딘, 깨끗한 상처/흉터 예방 → 마데카솔.</li>
          <li><strong>유효기간 지난 약 먹어도 되나요</strong> — 안 됩니다. 의심되면 버리세요. 변질된 약이 더 위험합니다.</li>
        </ul>
        <blockquote className="border-l-4 border-emerald-400 pl-4 py-2 my-4 bg-emerald-50 dark:bg-emerald-950 rounded-r-lg">
          <p><strong>부록 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>응급 전화번호 카드를 인쇄하여 냉장고나 약장에 붙여두세요.</li>
            <li>상비약 체크리스트로 분기마다 약장을 점검하세요.</li>
            <li>읽는 것과 실천하는 것의 차이가 가족의 건강을 지킵니다.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
];

const updateLogs: UpdateLog[] = [
  {
    version: 1,
    date: "2026-09-16",
    changes: ["초판 발행"],
  },
];

export default function OtcMedicineGuideRead() {
  return (
    <GuideBook
      bookId="otc-medicine-guide"
      title="약사가 알려주는 상비약 완전 가이드"
      emoji="💊"
      subtitle="해열제·감기약·소화제·상처약·알레르기약·영양제 — 50+ 약품 분석"
      topItems={topItems}
      sections={sections}
      updateLogs={updateLogs}
      currentVersion={1}
    />
  );
}
