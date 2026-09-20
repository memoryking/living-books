import GuideBook from "@/components/GuideBook";
import type {
  TopItem,
  ContentSection,
  UpdateLog,
} from "@/components/GuideBook";

export const metadata = {
  title: "약사가 알려주는 혈압에 대한 모든 것 — 본문 | 살아있는 정보책",
  description:
    "5대 혈압약 완전 비교·DASH 식단·합병증 예방·90일 혈압 관리 로드맵. 서문 + 10개 챕터 + 부록 전문. 혈압 기초, 원인, 측정법, ARB·ACE·CCB·이뇨제·베타차단제, 운동, 스트레스·수면·체중, 합병증, 특수 상황, 90일 로드맵까지.",
};

const topItems: TopItem[] = [
  {
    number: 1,
    title: "혈압의 기초: 숫자 뒤에 숨겨진 진실",
    oneLiner: "120/80이라는 숫자를 정확히 아는 것이 혈압 관리의 첫걸음이다.",
    description:
      "수축기·이완기 혈압의 의미, 정상·주의·고혈압 전단계·1기·2기 분류 기준, 맥압과 평균 동맥압, 혈압이 하루 중 변하는 이유, 혈관의 길이 10만 km.",
    situation: "혈압 숫자를 보지만 정확히 무슨 뜻인지 모를 때",
    action: "자신의 최근 혈압을 분류 기준에 대조해보세요.",
    mission: "이번 주 아침·저녁 혈압을 측정해 기록하세요.",
  },
  {
    number: 2,
    title: "왜 혈압이 올라가는가: 원인과 위험인자",
    oneLiner: "고혈압 90%는 하나의 원인이 아니라 여러 요인이 얽혀 만들어진다.",
    description:
      "본태성(90~95%) vs 이차성(5~10%) 구분, 유전·나이·나트륨·비만·음주·스트레스 위험인자, 수정 가능/불가능 요인 분류, 이차성 고혈압 7가지 원인 질환.",
    situation: "짜게 먹지도 않는데 왜 혈압이 높은지 이해가 안 될 때",
    action: "수정 가능한 위험인자 중 자신에게 해당하는 것을 찾으세요.",
    mission: "가장 큰 위험인자 1가지를 정하고 이번 달 개선 목표를 세우세요.",
  },
  {
    number: 3,
    title: "혈압 측정의 기술: 제대로 재는 법",
    oneLiner: "측정 방법이 틀리면 10~20mmHg까지 오차가 난다 — 제대로 재는 법을 배워라.",
    description:
      "팔뚝형 vs 손목형 비교, 올바른 측정 자세 7단계, 5분 안정 후 측정, 아침·저녁 2회 루틴, 백의고혈압·가면고혈압 구분, 가정혈압의 중요성.",
    situation: "집에서 혈압을 재면 매번 숫자가 달라 혼란스러울 때",
    action: "3장의 7단계 측정법으로 이번 주부터 아침·저녁 혈압을 재세요.",
    mission: "처음 이틀 데이터는 제외하고 5일 평균을 계산해 기준 혈압을 파악하세요.",
  },
  {
    number: 4,
    title: "고혈압 약물 완전 가이드",
    oneLiner: "약의 원리를 알면 부작용이 왜 생기는지 이해할 수 있다 — 이해하면 두렵지 않다.",
    description:
      "ARB(국내 최다 처방)·ACE 억제제(마른기침 주의)·CCB(한국인에게 효과적)·이뇨제·베타차단제 5대 계열 비교, 복합제의 이유, 약 복용 타이밍, 약을 절대 임의로 중단하면 안 되는 이유.",
    situation: "처방받은 약의 부작용이 걱정되어 먹지 않고 있을 때",
    action: "자신이 복용 중인 약이 5대 계열 중 어디에 해당하는지 확인하세요.",
    mission: "부록의 5대 혈압약 비교 카드를 출력해 약 보관함에 붙여두세요.",
  },
  {
    number: 5,
    title: "나트륨과 DASH 식단",
    oneLiner: "DASH 식단은 수축기 혈압을 8~14mmHg 낮출 수 있다 — 약 한 알의 효과다.",
    description:
      "DASH 식단 7대 식품군과 하루 권장량, 한국인 나트륨 섭취 현황(WHO 권장의 2배 이상), 국물·라면·외식 나트륨 줄이기 실전 전략, 칼륨·마그네슘의 혈압 강하 효과.",
    situation: "짜게 먹지 말라는데 구체적으로 뭘 어떻게 바꿔야 할지 모를 때",
    action: "이번 주부터 국물 섭취를 절반으로 줄이고 채소를 한 가지 추가하세요.",
    mission: "부록의 나트륨 함량표로 자주 먹는 음식의 나트륨을 체크하세요.",
  },
  {
    number: 6,
    title: "운동과 혈압",
    oneLiner: "규칙적인 유산소 운동은 수축기 혈압 5~8mmHg을 낮추는 천연 혈압약이다.",
    description:
      "운동이 혈압을 낮추는 4가지 원리(혈관 탄력·교감신경·체중·인슐린 감수성), 유산소·근력·유연성 운동 비교, 주 150분 권장, 운동 금기 상황, 고혈압 환자의 안전 운동 가이드.",
    situation: "운동하면 혈압이 올라가지 않나 걱정될 때",
    action: "이번 주부터 매일 30분 빠르게 걷기를 시작하세요.",
    mission: "운동 전후 혈압을 측정해 차이를 직접 확인하세요.",
  },
  {
    number: 7,
    title: "스트레스·수면·체중과 혈압",
    oneLiner: "약과 식단 외에 스트레스·수면·체중이라는 숨겨진 변수가 있다.",
    description:
      "만성 스트레스-코르티솔-혈압 상승 경로, 수면무호흡증과 고혈압의 관계, 체중 1kg 감소 시 혈압 약 1mmHg 감소, 4-7-8 호흡법, 수면 위생 7가지 원칙, BMI 25 미만 목표.",
    situation: "약을 잘 먹고 식단도 바꿨는데 혈압이 여전히 높을 때",
    action: "이번 주 수면 시간을 기록하고 7시간 이상을 목표로 하세요.",
    mission: "4-7-8 호흡법을 취침 전에 하루 1회 연습하세요.",
  },
  {
    number: 8,
    title: "합병증: 혈압을 방치하면 일어나는 일",
    oneLiner: "합병증은 예방 가능하다 — 관리하면 올 필요가 없다.",
    description:
      "뇌졸중 FAST 법칙, 심근경색 5대 경고 증상, 만성 신장질환 단계, 고혈압성 망막병증, 말초동맥질환, 정기 검진 스케줄, 합병증 예방을 위한 혈압 목표치.",
    situation: "합병증이 무섭지만 막연한 두려움만 있고 구체적 예방법을 모를 때",
    action: "부록의 합병증 정기 검진 체크리스트를 확인하세요.",
    mission: "안저 검사와 소변 미세알부민 검사를 올해 안에 받으세요.",
  },
  {
    number: 9,
    title: "특수 상황의 혈압 관리",
    oneLiner: "모든 고혈압이 같지 않다 — 임신·당뇨·고령자·저항성 고혈압은 접근이 다르다.",
    description:
      "임신 중 고혈압 4가지 유형과 자간전증 위험 신호, 당뇨+고혈압 동시 관리(목표 130/80), 70대 이상 고령자 목표 혈압, 저항성 고혈압 정의와 대응 전략.",
    situation: "임신 중이거나 당뇨가 있거나 부모님이 고령이라 일반 가이드가 맞는지 모를 때",
    action: "자신이 해당하는 특수 상황의 목표 혈압과 주의사항을 확인하세요.",
    mission: "다음 진료 시 의사에게 개인화된 혈압 목표치를 질문하세요.",
  },
  {
    number: 10,
    title: "혈압 관리 90일 로드맵",
    oneLiner: "한꺼번에 모든 것을 바꾸려 하면 3일도 못 간다 — 2주마다 하나씩 추가하라.",
    description:
      "Week 1~2 혈압 측정 습관화, Week 3~4 DASH 식단 전환, Week 5~6 운동 시작, Week 7~8 생활습관 최적화, Week 9~12 유지와 미세 조정. 140/90 미만(1단계) → 130/80 미만(최종 목표).",
    situation: "모든 정보는 배웠지만 어디서부터 시작해야 할지 막막할 때",
    action: "부록의 혈압 기록표를 출력해 내일 아침부터 측정을 시작하세요.",
    mission: "90일 후 건강검진 또는 진료를 예약하세요.",
  },
];

const sections: ContentSection[] = [
  {
    id: "preface",
    title: "서문 — 혈압 숫자 하나가 인생을 바꿉니다",
    body: (
      <>
        <p>&quot;약사님, 혈압약 한번 먹으면 평생 먹어야 한다면서요?&quot; 약국 카운터에서 가장 많이 듣는 질문입니다. 이 한 문장 안에 두려움, 오해, 그리고 정보의 부재가 모두 담겨 있습니다.</p>

        <p>대한민국 고혈압 환자 <strong>약 1,200만 명</strong>. 성인 3명 중 1명이 고혈압이지만, 절반 이상이 제대로 관리되지 않고 있습니다. 증상이 없으니 심각하게 생각하지 않고, 약에 대한 막연한 두려움이 있고, 무엇보다 <strong>정확한 정보가 부족</strong>합니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">이 책의 구성</h3>
        <p><strong>1~3장</strong> — 혈압의 기초, 원인과 위험인자, 정확한 측정법.</p>
        <p><strong>4~5장</strong> — 5대 혈압약 완전 비교, DASH 식단과 나트륨 관리.</p>
        <p><strong>6~7장</strong> — 운동과 혈압, 스트레스·수면·체중 관리.</p>
        <p><strong>8~10장</strong> — 합병증 예방, 특수 상황, 90일 로드맵.</p>
        <p><strong>부록</strong> — 혈압 기록표, 약물 비교 카드, 나트륨 함량표, 응급 대처 카드, DASH 1주 플래너.</p>

        <blockquote className="border-l-4 border-red-400 pl-4 py-2 my-4 bg-red-50 dark:bg-red-950 rounded-r-lg">
          <p><strong>서문 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>고혈압은 &lsquo;소리 없는 살인자&rsquo; — 증상이 없다고 괜찮은 게 아니다.</li>
            <li>이 책은 약국 카운터에서 한 시간 동안 설명해드리는 것처럼 썼습니다.</li>
            <li><strong>10장 &lsquo;90일 로드맵&rsquo;은 반드시 읽어주세요.</strong> 아는 것과 실천하는 것은 다릅니다.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch1",
    title: "Ch.1 혈압의 기초: 숫자 뒤에 숨겨진 진실",
    body: (
      <>
        <p>혈압은 <strong>혈관 벽에 가해지는 피의 압력</strong>입니다. 심장이 한 번 뛸 때마다 피를 온몸으로 밀어내는데, 이때 혈관 벽이 받는 힘이 바로 혈압입니다. 우리 몸의 혈관을 모두 이으면 약 10만 km — 지구를 두 바퀴 반 돌 수 있는 길이입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">두 개의 숫자가 말하는 것</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>수축기 혈압(위 숫자)</strong> — 심장이 수축해 피를 뿜어낼 때의 최대 압력</li>
          <li><strong>이완기 혈압(아래 숫자)</strong> — 심장이 이완해 피를 채울 때의 최소 압력</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">혈압 분류 기준</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>정상</strong> — 120/80 미만. 이상적인 상태.</li>
          <li><strong>주의 혈압</strong> — 120~129 / 80 미만. 생활습관 개선 필요.</li>
          <li><strong>고혈압 전단계</strong> — 130~139 / 80~89. 적극적 관리 시작.</li>
          <li><strong>1기 고혈압</strong> — 140~159 / 90~99. 약물 치료 고려.</li>
          <li><strong>2기 고혈압</strong> — 160 이상 / 100 이상. 적극적 약물 치료.</li>
        </ul>

        <blockquote className="border-l-4 border-red-400 pl-4 py-2 my-4 bg-red-50 dark:bg-red-950 rounded-r-lg">
          <p><strong>1챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>수축기와 이완기의 차이(맥압)가 60mmHg 이상이면 동맥 경직을 의심한다.</li>
            <li>혈압은 하루 중에도 변한다 — 새벽에 급상승하는 &lsquo;모닝 서지&rsquo;가 뇌졸중 위험을 높인다.</li>
            <li><strong>오늘부터 실행</strong>: 자신의 최근 혈압을 분류 기준에 대조해보세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch2",
    title: "Ch.2 왜 혈압이 올라가는가: 원인과 위험인자",
    body: (
      <>
        <p>고혈압 환자 10명 중 9명은 <strong>본태성(원발성) 고혈압</strong>입니다. 특별한 원인 질환 없이 유전, 나이, 식습관, 체중, 스트레스, 운동 부족 등이 복합적으로 작용합니다. 나머지 5~10%는 <strong>이차성 고혈압</strong>으로 다른 질환이 원인입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">수정 가능한 위험인자</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>나트륨 과다</strong> — 한국인 평균 나트륨 섭취는 WHO 권장량의 2배 이상</li>
          <li><strong>비만</strong> — 체중 1kg 감량 시 혈압 약 1mmHg 감소</li>
          <li><strong>운동 부족</strong> — 규칙적 운동으로 5~8mmHg 감소</li>
          <li><strong>과도한 음주</strong> — 남성 하루 2잔, 여성 1잔 이내</li>
          <li><strong>만성 스트레스</strong> — 코르티솔 만성 분비가 혈관을 수축</li>
          <li><strong>흡연</strong> — 혈관을 손상시키고 동맥경화를 촉진</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">이차성 고혈압을 의심해야 할 상황</h3>
        <p>30세 이전에 갑자기 고혈압이 생겼거나, 약을 3가지 이상 먹어도 혈압이 안 잡히거나, 저칼륨혈증이 동반된다면 이차성 고혈압을 의심해야 합니다. <strong>원인 질환을 치료하면 혈압이 정상으로 돌아올 수 있습니다.</strong></p>

        <blockquote className="border-l-4 border-red-400 pl-4 py-2 my-4 bg-red-50 dark:bg-red-950 rounded-r-lg">
          <p><strong>2챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>본태성 고혈압은 단일 원인이 아니라 여러 요인의 합작품이다.</li>
            <li>수정 가능한 위험인자를 하나씩 줄이면 약을 줄일 수도 있다.</li>
            <li><strong>오늘부터 실행</strong>: 수정 가능한 위험인자 중 자신에게 해당하는 것을 적어보세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch3",
    title: "Ch.3 혈압 측정의 기술: 제대로 재는 법",
    body: (
      <>
        <p>혈압 측정은 간단해 보이지만, 사소한 실수 하나로 <strong>10~20mmHg까지 차이</strong>가 날 수 있습니다. 팔을 꼬거나, 대화하면서 재거나, 커피를 마신 직후에 재면 정확한 수치를 얻을 수 없습니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">팔뚝형(상완형)을 추천하는 이유</h3>
        <p>대한고혈압학회, 미국심장학회 모두 가정혈압 측정용으로 <strong>팔뚝형을 권장</strong>합니다. 손목형은 손목 높이를 심장에 정확히 맞춰야 해서 오차가 크고, 동맥경화가 있는 분에게는 부정확합니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">올바른 측정 7단계</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>카페인·운동·흡연 후 30분 이상</strong> 기다린다</li>
          <li><strong>등을 기대고</strong> 의자에 앉아 다리는 꼬지 않는다</li>
          <li><strong>5분간 조용히</strong> 앉아 안정한다</li>
          <li>커프를 <strong>맨살에</strong> 감는다 (팔꿈치 위 2~3cm)</li>
          <li>팔을 <strong>심장 높이</strong>에 놓는다</li>
          <li>측정 중 <strong>말하지 않고 움직이지 않는다</strong></li>
          <li><strong>2회 측정</strong>하여 평균을 기록한다 (1~2분 간격)</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">백의고혈압과 가면고혈압</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>백의고혈압</strong> — 병원에서만 높고 집에서는 정상. 과잉 치료 위험.</li>
          <li><strong>가면고혈압</strong> — 병원에서 정상이지만 집에서 높음. 더 위험하여 치료 필요.</li>
        </ul>

        <blockquote className="border-l-4 border-red-400 pl-4 py-2 my-4 bg-red-50 dark:bg-red-950 rounded-r-lg">
          <p><strong>3챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>가정혈압이 병원 혈압보다 실제 심혈관 위험을 더 정확히 예측한다.</li>
            <li>아침(기상 1시간 이내, 약 복용 전)과 저녁(취침 전) 2회 측정이 권장된다.</li>
            <li><strong>오늘부터 실행</strong>: 7단계 측정법으로 이번 주부터 매일 아침·저녁 혈압을 재세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch4",
    title: "Ch.4 고혈압 약물 완전 가이드",
    body: (
      <>
        <p>고혈압 약물의 1차 선택지는 <strong>ARB, ACE 억제제, CCB, 이뇨제</strong> — 이 네 가지입니다. 여기에 베타차단제를 포함하면 5대 계열이 됩니다. 약의 이름은 어렵지만 원리는 단순합니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">5대 혈압약 계열</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>ARB</strong> — 한국 최다 처방. 안지오텐신 II 차단, 부작용 적음, 신장·심장 보호. 대표약: 로사르탄, 발사르탄, 텔미사르탄.</li>
          <li><strong>ACE 억제제</strong> — ARB와 비슷한 원리지만 마른기침 부작용(동양인 최대 30%). 심장 보호 효과 우수. 기침 시 ARB로 변경.</li>
          <li><strong>CCB(칼슘 채널 차단제)</strong> — 혈관 이완. 나트륨 많은 식습관에서도 효과적이라 한국인에게 잘 맞음. 대표약: 암로디핀. 발목 부종 주의.</li>
          <li><strong>이뇨제</strong> — 나트륨·수분 배출. 저용량으로 다른 약의 효과 증폭. 전해질 정기 검사 필요.</li>
          <li><strong>베타차단제</strong> — 심박수 감소. 심부전·빈맥 동반 시 유용. 갑자기 중단 금지.</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">왜 약을 2~3가지 함께 먹는가</h3>
        <p>혈압약 한 가지로 목표에 도달하는 환자는 약 <strong>30~50%</strong>입니다. 나머지는 다른 원리의 약을 병용해야 합니다. 약이 늘어났다고 상태가 나빠진 것이 아니라, <strong>다른 경로를 동시에 잡아 혈압을 효과적으로 낮추는 전략</strong>입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">약을 절대 임의로 중단하면 안 되는 이유</h3>
        <p>갑자기 약을 끊으면 혈압이 반동으로 급상승할 수 있습니다(리바운드 고혈압). 특히 베타차단제는 갑자기 중단하면 위험합니다. <strong>약을 줄이거나 끊고 싶다면 반드시 의사와 상의</strong>하세요.</p>

        <blockquote className="border-l-4 border-red-400 pl-4 py-2 my-4 bg-red-50 dark:bg-red-950 rounded-r-lg">
          <p><strong>4챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>약의 원리를 알면 부작용이 왜 생기는지 이해할 수 있고, 의사와 자신 있게 대화할 수 있다.</li>
            <li>약이 2~3가지로 늘어났다면, 다른 경로를 잡는 전략이지 상태가 나빠진 게 아니다.</li>
            <li><strong>오늘부터 실행</strong>: 자신의 약이 5대 계열 중 어디인지 확인하고, 부록 비교 카드를 출력하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch5",
    title: "Ch.5 나트륨과 DASH 식단: 먹는 것이 혈압을 바꾼다",
    body: (
      <>
        <p>DASH 식단(Dietary Approaches to Stop Hypertension)은 미국 국립보건원(NIH)이 개발하고 대규모 임상 연구로 효과를 입증한 식단입니다. 제대로 실천하면 수축기 혈압이 <strong>8~14mmHg</strong> 내려갑니다. 이것은 혈압약 한 알의 효과에 버금가는 수준입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">DASH 식단 핵심</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>늘려야 할 것</strong> — 채소, 과일, 통곡물, 저지방 유제품, 견과류, 등푸른 생선</li>
          <li><strong>줄여야 할 것</strong> — 나트륨(소금), 붉은 고기, 단 음료, 가공식품, 포화지방</li>
        </ul>
        <p>한마디로 요약하면 <strong>&quot;채소와 과일을 많이, 소금은 적게, 가공식품은 멀리&quot;</strong>입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">한국 식단에서 나트륨 줄이기</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li>찌개 국물 다 먹기 &rarr; <strong>건더기만 건져 먹기</strong> (약 1,000mg 절감)</li>
          <li>라면 국물 다 먹기 &rarr; <strong>국물 남기기</strong> (약 800mg 절감)</li>
          <li>반찬에 간장 추가 &rarr; <strong>추가 간 하지 않기</strong> (약 300mg 절감)</li>
          <li>외식 주 5회 &rarr; <strong>주 2~3회로 줄이기</strong> (약 1,000mg 절감)</li>
        </ul>

        <blockquote className="border-l-4 border-red-400 pl-4 py-2 my-4 bg-red-50 dark:bg-red-950 rounded-r-lg">
          <p><strong>5챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>DASH 식단 + 나트륨 제한을 병행하면 수축기 혈압 최대 11~14mmHg 감소.</li>
            <li>칼륨이 풍부한 음식(바나나, 시금치, 감자, 토마토)은 나트륨의 혈압 상승 효과를 상쇄한다.</li>
            <li><strong>오늘부터 실행</strong>: 이번 주부터 국물 섭취를 절반으로 줄이고 채소를 한 가지 추가하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch6",
    title: "Ch.6 운동과 혈압: 움직이면 혈압이 내려간다",
    body: (
      <>
        <p>규칙적인 유산소 운동은 수축기 혈압을 <strong>5~8mmHg</strong> 낮출 수 있습니다. 운동 중에 혈압이 올라가는 것은 맞지만, 운동을 끝낸 후와 규칙적으로 운동하면 <strong>평소 혈압이 꾸준히 내려갑니다.</strong></p>

        <h3 className="text-xl font-bold mt-8 mb-4">운동이 혈압을 낮추는 4가지 원리</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>혈관 탄력 향상</strong> — 산화질소(NO) 분비로 혈관 이완</li>
          <li><strong>교감신경 안정</strong> — 심박수와 혈압 감소</li>
          <li><strong>체중 감소</strong> — 혈압도 따라 내려감</li>
          <li><strong>인슐린 감수성 개선</strong> — 인슐린 저항성은 고혈압의 원인 중 하나</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">권장 운동량</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>유산소</strong> — 주 5회 이상, 회당 30분 이상 (빠르게 걷기, 자전거, 수영)</li>
          <li><strong>근력</strong> — 주 2~3회, 중간 강도 (혈관 강직 예방)</li>
          <li><strong>유연성</strong> — 매일 10분 (스트레칭·요가는 스트레스 감소에 도움)</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">운동 금기 상황</h3>
        <p>수축기 180mmHg 이상 또는 이완기 110mmHg 이상일 때, 흉통·호흡곤란·심한 두통이 있을 때, 불안정 협심증이 있을 때는 <strong>운동을 중단하고 의사와 상의</strong>하세요.</p>

        <blockquote className="border-l-4 border-red-400 pl-4 py-2 my-4 bg-red-50 dark:bg-red-950 rounded-r-lg">
          <p><strong>6챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>운동은 부작용 없는 천연 혈압약이다 — 주 150분 이상이 목표.</li>
            <li>걷기로 시작해 점진적으로 강도를 높이는 것이 안전하다.</li>
            <li><strong>오늘부터 실행</strong>: 이번 주부터 매일 30분 빠르게 걷기를 시작하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch7",
    title: "Ch.7 스트레스·수면·체중과 혈압",
    body: (
      <>
        <p>약을 잘 먹고, 식단도 신경 쓰고, 운동도 하는데 혈압이 여전히 높다면? 원인은 <strong>스트레스, 수면, 체중</strong>에 숨어 있을 수 있습니다. 이 세 가지는 서로 얽혀 악순환을 만듭니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">만성 스트레스와 혈압</h3>
        <p>만성 스트레스는 코르티솔을 지속 분비시켜 혈관을 수축하고, 나트륨 재흡수를 증가시키며, 과식·음주·흡연 같은 불건강한 대처 행동을 유발합니다.</p>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>4-7-8 호흡법</strong> — 4초 들이마시고, 7초 참고, 8초 내쉬기</li>
          <li><strong>점진적 근육 이완</strong> — 발끝에서 머리까지 근육을 긴장→이완 반복</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">수면과 혈압</h3>
        <p>수면 중에는 혈압이 10~20% 내려가는 것이 정상입니다(디핑). 수면무호흡증이 있으면 이 디핑이 일어나지 않아 밤새 혈압이 높은 상태가 유지됩니다. <strong>코골이가 심하고 주간 졸림이 있다면</strong> 수면다원검사를 고려하세요.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">체중과 혈압</h3>
        <p>체중 1kg 감소 시 혈압이 약 <strong>1mmHg</strong> 감소합니다. 10kg을 빼면 약 10mmHg — 혈압약 한 알의 효과입니다. 목표는 BMI 25 미만, 남성 허리둘레 90cm 미만, 여성 85cm 미만입니다.</p>

        <blockquote className="border-l-4 border-red-400 pl-4 py-2 my-4 bg-red-50 dark:bg-red-950 rounded-r-lg">
          <p><strong>7챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>스트레스·수면·체중은 약과 식단 외의 숨겨진 혈압 변수다.</li>
            <li>수면 시간 7시간 미만은 고혈압 위험을 높인다.</li>
            <li><strong>오늘부터 실행</strong>: 이번 주 수면 시간을 기록하고, 취침 전 4-7-8 호흡법을 연습하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch8",
    title: "Ch.8 합병증: 혈압을 방치하면 일어나는 일",
    body: (
      <>
        <p>이 장의 목적은 겁을 주려는 것이 아닙니다. <strong>합병증은 예방 가능하다</strong>는 사실을 이해시키려는 것입니다. 고혈압을 치료하지 않으면, 높은 압력이 수년에 걸쳐 혈관을 손상시킵니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">뇌졸중 — FAST 법칙</h3>
        <p>고혈압 환자는 뇌졸중 위험이 <strong>3~4배</strong> 높습니다. 증상 발생 후 3~4.5시간 이내에 치료해야 합니다.</p>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>F(Face)</strong> — 한쪽 얼굴이 처지거나 비대칭</li>
          <li><strong>A(Arm)</strong> — 한쪽 팔에 힘이 없거나 저림</li>
          <li><strong>S(Speech)</strong> — 말이 어눌하거나 이해가 안 됨</li>
          <li><strong>T(Time)</strong> — 하나라도 해당되면 즉시 119</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">심근경색 경고 증상</h3>
        <p>가슴 중앙의 압박감·쥐어짜는 통증이 <strong>15분 이상</strong> 지속되면, 왼쪽 팔·턱·등으로 퍼지면, 식은땀·구역질·호흡곤란이 동반되면 즉시 119에 연락하세요.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">신장과 눈</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>만성 신장질환</strong> — 고혈압이 신장 혈관을 손상, 소변 미세알부민으로 조기 발견 가능</li>
          <li><strong>고혈압성 망막병증</strong> — 시력 저하 전에 안저 검사로 발견 가능</li>
        </ul>

        <blockquote className="border-l-4 border-red-400 pl-4 py-2 my-4 bg-red-50 dark:bg-red-950 rounded-r-lg">
          <p><strong>8챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>합병증은 &lsquo;관리 안 했을 때&rsquo; 오는 것이다 — 관리하면 예방할 수 있다.</li>
            <li>FAST 법칙은 가족 모두가 알아야 한다 — 뇌졸중은 시간이 생명이다.</li>
            <li><strong>오늘부터 실행</strong>: 올해 안에 안저 검사와 소변 미세알부민 검사를 받으세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch9",
    title: "Ch.9 특수 상황의 혈압 관리",
    body: (
      <>
        <p>고혈압 관리의 기본 원칙은 동일하지만, <strong>임신·당뇨·고령자·저항성 고혈압</strong>에서는 접근이 달라져야 합니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">임신 중 고혈압</h3>
        <p>임신 20주 이후 혈압 140/90 이상 + 단백뇨 = <strong>자간전증</strong>. 임산부의 약 5~8%에서 발생하며, 심한 두통·시야 장애·상복부 통증·갑작스러운 부종이 나타나면 즉시 병원에 가세요. <strong>ARB와 ACE 억제제는 임신 중 절대 금기</strong>입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">당뇨 + 고혈압</h3>
        <p>당뇨와 고혈압이 함께 있으면 심혈관 위험이 <strong>4배</strong>로 증가합니다. 목표 혈압이 <strong>130/80 미만</strong>으로 더 엄격하며, ARB 또는 ACE 억제제가 1차 선택입니다(신장 보호 효과).</p>

        <h3 className="text-xl font-bold mt-8 mb-4">고령자(70대 이상)</h3>
        <p>목표 혈압을 <strong>140/90 미만</strong>으로 약간 완화하되, 80세 이상은 <strong>150/90 미만</strong>도 허용됩니다. 기립성 저혈압(일어설 때 어지러움)에 주의하며, 약 용량을 천천히 조절합니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">저항성 고혈압</h3>
        <p>이뇨제를 포함한 <strong>3가지 이상의 약을 최대 용량으로 먹어도</strong> 목표 혈압에 도달하지 못하는 경우입니다. 약 복용 순응도 확인, 이차성 고혈압 재검사, 수면무호흡증 확인이 필요합니다.</p>

        <blockquote className="border-l-4 border-red-400 pl-4 py-2 my-4 bg-red-50 dark:bg-red-950 rounded-r-lg">
          <p><strong>9챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>특수 상황에서는 목표 혈압과 약물 선택이 달라진다 — 반드시 의사와 상의하라.</li>
            <li>임신 중 ARB·ACE 억제제는 절대 금기 — 태아 기형 위험.</li>
            <li><strong>오늘부터 실행</strong>: 다음 진료 시 자신의 개인화된 혈압 목표치를 질문하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch10",
    title: "Ch.10 혈압 관리 90일 로드맵: 지금부터 시작합니다",
    body: (
      <>
        <p>한꺼번에 모든 것을 바꾸려 하면 3일도 못 갑니다. <strong>2주 단위로 하나씩 추가</strong>하면서, 90일 후에는 혈압 관리가 일상이 되도록 설계했습니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">Week 1~2: 혈압 측정 습관화</h3>
        <p>아무것도 바꾸지 마세요. 오직 <strong>측정과 기록</strong>에만 집중합니다. 팔뚝형 혈압계를 준비하고, 매일 아침·저녁 2회 측정합니다. 2주 평균이 여러분의 기준 혈압입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">Week 3~4: DASH 식단 전환</h3>
        <p>Week 3에 나트륨 줄이기(국물 절반, 추가 간 안 하기), Week 4에 DASH 요소 추가(채소 한 가지, 과일, 잡곡밥, 등푸른 생선).</p>

        <h3 className="text-xl font-bold mt-8 mb-4">Week 5~6: 운동 시작</h3>
        <p>Week 5에 매일 20분 걷기로 시작, Week 6에 30분으로 늘리고 주 2회 간단한 근력 운동을 추가합니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">Week 7~8: 생활습관 최적화</h3>
        <p>수면 7시간 이상 확보, 스트레스 관리 기법(호흡법, 명상) 추가, 음주·카페인 조절.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">Week 9~12: 유지와 미세 조정</h3>
        <p>혈압 추이를 분석하고 부족한 영역을 보완합니다. 의사 진료를 예약해 가정혈압 기록을 보여주고, 약물 조절 여부를 상의합니다.</p>

        <blockquote className="border-l-4 border-red-400 pl-4 py-2 my-4 bg-red-50 dark:bg-red-950 rounded-r-lg">
          <p><strong>10챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>목표: 140/90 미만(1단계) &rarr; 130/80 미만(최종).</li>
            <li>2주마다 한 가지씩 추가하면 90일 후에는 완전한 시스템이 된다.</li>
            <li><strong>오늘부터 실행</strong>: 혈압 기록표를 출력하고 내일 아침 첫 측정을 시작하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "appendix",
    title: "부록 — 혈압 관리 실행 키트",
    body: (
      <>
        <p>이 부록에는 책에서 다룬 내용을 <strong>바로 사용할 수 있는 도구</strong>로 정리했습니다. 프린트하거나 사진을 찍어서 활용하세요.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">5종 실행 키트</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>혈압 기록표</strong> — 아침·저녁 2회 측정, 주간 평균 계산, 특이사항 메모. 진료 시 의사에게 보여주세요.</li>
          <li><strong>5대 혈압약 비교 카드</strong> — ARB·ACE·CCB·이뇨제·베타차단제의 대표 약물, 작용 원리, 장점, 부작용, 주의사항 한눈에 비교.</li>
          <li><strong>나트륨 함량표</strong> — 한국인이 자주 먹는 음식 50가지의 나트륨 함량. 김치찌개 한 그릇 2,500mg, 라면 1,700mg.</li>
          <li><strong>응급 상황 대처 카드</strong> — 고혈압 응급증 판단 기준, FAST 법칙, 심근경색 증상, 119 연락 시 전달 사항.</li>
          <li><strong>DASH 식단 1주 플래너</strong> — 월~일 아침·점심·저녁 한국식 DASH 메뉴 예시. 나트륨 2,000mg 이내 목표.</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">자주 묻는 질문 5선</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>혈압약은 아침에 먹나, 저녁에 먹나</strong> — 의사 지시에 따르되, 최근 연구에서 취침 전 복용이 심혈관 이벤트를 줄인다는 결과가 있습니다. 반드시 의사와 상의하세요.</li>
          <li><strong>자몽주스와 혈압약</strong> — 일부 CCB 계열(니페디핀, 펠로디핀)과 상호작용합니다. 암로디핀은 상대적으로 영향이 적습니다.</li>
          <li><strong>커피를 마셔도 되나</strong> — 하루 1~2잔은 큰 문제가 없지만, 혈압 측정 30분 전에는 피하세요.</li>
          <li><strong>혈압이 너무 낮으면</strong> — 수축기 90mmHg 미만으로 떨어지며 어지러움이 생기면 의사와 약 용량 조절을 상의하세요.</li>
          <li><strong>건강기능식품이 도움이 되나</strong> — 오메가-3, 코엔자임Q10 등은 보조적 역할만 합니다. 혈압약을 대체할 수 없습니다.</li>
        </ul>

        <blockquote className="border-l-4 border-red-400 pl-4 py-2 my-4 bg-red-50 dark:bg-red-950 rounded-r-lg">
          <p><strong>부록 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>모든 도구는 프린트하거나 사진을 찍어 냉장고·약 보관함 근처에 붙여두세요.</li>
            <li>혈압 기록표는 진료 시 의사에게 보여주면 약 조절에 큰 도움이 됩니다.</li>
            <li>읽는 것과 실천하는 것의 차이가 90일 후의 혈압을 완전히 바꿀 것입니다.</li>
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

export default function HypertensionGuideRead() {
  return (
    <GuideBook
      bookId="hypertension-guide"
      title="약사가 알려주는 혈압에 대한 모든 것"
      emoji="🫀"
      subtitle="5대 혈압약 비교·DASH 식단·합병증 예방·90일 혈압 관리 로드맵"
      topItems={topItems}
      sections={sections}
      updateLogs={updateLogs}
      currentVersion={1}
    />
  );
}
