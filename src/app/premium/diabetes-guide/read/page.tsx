import GuideBook from "@/components/GuideBook";
import type {
  TopItem,
  ContentSection,
  UpdateLog,
} from "@/components/GuideBook";

export const metadata = {
  title: "약사가 알려주는 당뇨에 대한 모든 것 — 본문 | 살아있는 정보책",
  description:
    "진단부터 약물·식단·생활습관까지 — 당뇨인이 알아야 할 완전 가이드. 서문 + 10개 챕터 + 부록 전문. 혈당 측정, 메트포르민·GLP-1 약물, Eat to the Meter 식단, 운동·스트레스·수면, 합병증 예방, 90일 로드맵까지.",
};

const topItems: TopItem[] = [
  {
    number: 1,
    title: "당뇨 진단, 그 후 24시간",
    oneLiner: "당뇨는 사형선고가 아니다 — 3개월 뒤의 당신은 지금의 당신에게 감사할 것이다.",
    description:
      "진단 직후 감정의 5단계(부정·분노·타협·우울·수용), A1C 수치별 현재 위치 파악, 첫 24시간에 해야 할 5가지, 하지 말아야 할 것들, 주변 잘못된 조언 걸러내기, 가족에게 알리기.",
    situation: "방금 당뇨 진단을 받아 머릿속이 하얗고 뭘 해야 할지 모를 때",
    action: "혈당계를 구입하고, 처방약을 시작하고, 물을 충분히 드세요.",
    mission: "이번 주 공복 혈당을 매일 측정하고 기록하세요.",
  },
  {
    number: 2,
    title: "당뇨의 종류와 메커니즘",
    oneLiner: "1형은 열쇠가 없는 것, 2형은 자물쇠가 녹슨 것 — 내 타입을 아는 것이 관리의 시작이다.",
    description:
      "1형(자가면역)·2형(인슐린 저항성)·LADA(1.5형)·임신성 당뇨 비교, 인슐린 저항성 메커니즘, 마른 당뇨, 한국 당뇨 현황(600만 명), 1형 vs 2형 핵심 비교표.",
    situation: "내 당뇨가 정확히 어떤 종류인지 모르겠을 때",
    action: "진단서를 확인하거나 의사에게 정확한 당뇨 타입을 질문하세요.",
    mission: "마른 체형인데 2형 진단이라면 LADA(GAD 항체) 검사를 문의하세요.",
  },
  {
    number: 3,
    title: "혈당 측정의 기술",
    oneLiner: "측정하지 않으면 관리할 수 없다 — 혈당계는 당뇨 관리의 네비게이션이다.",
    description:
      "A1C의 의미와 한계, 자가 혈당 측정(SMBG) 횟수·시점·목표 수치, 'Eat to the Meter' 전략, CGM(FreeStyle Libre·Dexcom) 비교, 한국 보험 적용 현황, 혈당 기록의 힘.",
    situation: "혈당을 언제, 얼마나 자주 측정해야 하는지 감이 안 잡힐 때",
    action: "처음 1~2개월은 하루 4회 이상 측정하며 음식별 반응을 학습하세요.",
    mission: "3일간 평소 식단의 식후 혈당을 측정하고 스파이크 유발 식품을 파악하세요.",
  },
  {
    number: 4,
    title: "당뇨 약물 완전 가이드",
    oneLiner: "약은 실패의 증거가 아니라 현명한 도구다 — 부끄러워하지 마세요.",
    description:
      "2025 대한당뇨병학회 개인화 치료 가이드라인, 메트포르민(B12 결핍 주의), SGLT-2 억제제(심장·신장 보호), GLP-1 유사체(오젬픽·마운자로), DPP-4 억제제, 설포닐유레아, 인슐린 종류별 비교, 약물 비용표.",
    situation: "처방받은 약이 어떤 원리로 작용하는지, 부작용은 무엇인지 알고 싶을 때",
    action: "현재 복용 중인 약의 이름과 용량을 기록하세요.",
    mission: "메트포르민 복용 중이라면 B12 수치 검사를 예약하세요.",
  },
  {
    number: 5,
    title: "혈당을 잡는 식단 전략",
    oneLiner: "먹고 나서 혈당계를 보세요 — 답은 거기에 있습니다.",
    description:
      "Eat to the Meter 핵심 원칙, GPS 법칙(Grain·Potato·Sugar 제한), 저탄수화물 단계별 가이드, 한국 식단 적용(밥·면·떡 대체), 식사 순서(채소→단백질→탄수화물), 간헐적 단식, 80/20 규칙.",
    situation: "뭘 먹어야 혈당이 안 오르는지 혼란스러울 때",
    action: "밥 양을 반으로 줄이고 식사 순서를 채소 먼저로 바꿔보세요.",
    mission: "3일간 식단 기록을 작성하고 혈당을 가장 올리는 음식을 찾으세요.",
  },
  {
    number: 6,
    title: "운동과 혈당",
    oneLiner: "헬스장이 아니라 식후 10분 걷기가 혈당 스파이크를 잡는 마법이다.",
    description:
      "식후 걷기의 과학(혈당 스파이크 30~50% 감소), 아침 산책 코르티솔 리셋, NEAT(비운동 활동), 근력 운동과 인슐린 감수성, 저혈당 대처 15-15 규칙, 주차별 운동 강도 가이드.",
    situation: "운동이 좋다는 건 알지만 뭘 얼마나 해야 하는지 모를 때",
    action: "오늘 저녁 식후 10분 걷기를 시작하세요.",
    mission: "걷기 전후 혈당을 측정해서 차이를 직접 확인하세요.",
  },
  {
    number: 7,
    title: "스트레스·수면·감정과 혈당",
    oneLiner: "잘 먹고 운동해도 혈당이 안 잡히면, 스트레스와 수면을 의심하라.",
    description:
      "코르티솔-혈당 메커니즘, 수면 부족의 인슐린 저항성 증가(하룻밤에 25~30%), 새벽 현상 대처법, 당뇨 번아웃 자가 점검과 탈출 전략, 가족 관계, 즉시 사용 가능한 스트레스 관리 기법.",
    situation: "식단과 운동은 열심히 하는데 혈당이 여전히 높을 때",
    action: "이번 주 수면 시간을 기록하고 7시간 이상을 목표로 하세요.",
    mission: "4-7-8 호흡법(4초 흡입, 7초 유지, 8초 내뱉기)을 하루 1회 연습하세요.",
  },
  {
    number: 8,
    title: "합병증 예방",
    oneLiner: "합병증은 '관리 안 했을 때' 오는 것이다 — 관리하면 예방할 수 있다.",
    description:
      "합병증 발생 메커니즘(만성 고혈당→혈관 손상), 눈(당뇨 망막병증), 신장(당뇨 신증), 신경(말초신경병증), 발 매일 점검, 심혈관 관리, 연 1회 필수 검사 리스트.",
    situation: "합병증이 두렵지만 막연한 공포만 있고 구체적 예방법을 모를 때",
    action: "안저 검사와 미세알부민뇨 검사 일정을 잡으세요.",
    mission: "오늘부터 매일 발을 확인하는 습관을 시작하세요.",
  },
  {
    number: 9,
    title: "당뇨와 일상생활",
    oneLiner: "당뇨는 삶을 포기하라는 진단이 아니라 삶의 방식을 조정하라는 신호다.",
    description:
      "외식 메뉴 선택법(한식·삼겹살·일식·중식 가이드), 음주와 메트포르민 상호작용, 주종별 탄수화물 비교, 여행 준비 체크리스트, 직장에서의 당뇨 관리, 명절·모임 생존 전략.",
    situation: "외식, 여행, 술자리를 다 포기해야 하나 고민될 때",
    action: "자주 가는 식당의 저탄수 메뉴 3개를 미리 정해두세요.",
    mission: "비상 간식 세트(포도당 정제+견과류)를 만들어 가방에 넣어두세요.",
  },
  {
    number: 10,
    title: "90일 로드맵: 오늘부터 시작하기",
    oneLiner: "90일이면 A1C를 바꿀 수 있다 — 그 시작은 오늘이다.",
    description:
      "Reddit 성공 사례 5가지(A1C 11→5대), Week 1~2 현실 파악, Week 3~4 식단 전환, Week 5~8 시스템화, Week 9~12 미세 조정, 90일 진행 체크 시트, 나쁜 날이 왔을 때 대처법.",
    situation: "모든 정보는 이해했지만 '어디서부터 시작하지?'가 막막할 때",
    action: "90일 후 A1C 검사를 예약하세요.",
    mission: "이번 주 목표 3가지를 적고, 가장 먼저 바꿀 1가지를 오늘 시작하세요.",
  },
];

const sections: ContentSection[] = [
  {
    id: "preface",
    title: "서문 — 당뇨 진단을 받고 이 책을 펼친 당신에게",
    body: (
      <>
        <p>한국에만 600만 명 이상의 당뇨 환자가 있고, 전 세계적으로는 5억 명이 넘습니다. 약국에서 수천 명의 당뇨 환자분들을 만나면서 한 가지 깨달은 것이 있습니다. <strong>정보의 격차가 건강의 격차를 만든다는 것입니다.</strong></p>

        <p>같은 약을 처방받아도, 혈당 측정 타이밍을 아는 사람과 모르는 사람의 A1C 차이는 놀라울 정도입니다. 이 책은 <strong>약사의 전문 지식</strong>과 <strong>Reddit 당뇨 커뮤니티의 실전 경험</strong>을 결합하여, 당뇨 진단 직후부터 90일 로드맵까지 알아야 할 모든 것을 담았습니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">이 책의 구성</h3>
        <p><strong>1~3장</strong> — 진단 직후 감정 관리, 당뇨 종류·메커니즘, 혈당 측정의 기술.</p>
        <p><strong>4~6장</strong> — 약물 완전 가이드, 식단 전략, 운동과 혈당.</p>
        <p><strong>7~9장</strong> — 스트레스·수면·감정, 합병증 예방, 일상생활 적용.</p>
        <p><strong>10장+부록</strong> — 90일 로드맵과 바로 쓸 수 있는 실전 도구 모음.</p>

        <blockquote className="border-l-4 border-rose-400 pl-4 py-2 my-4 bg-rose-50 dark:bg-rose-950 rounded-r-lg">
          <p><strong>서문 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>당뇨 관리의 핵심 차이는 의지력이 아니라 <strong>정보</strong>다.</li>
            <li>이 책은 읽고 끝나는 책이 아니라, 매 챕터 실천 과제와 함께 행동하는 워크북이다.</li>
            <li><strong>방금 진단받으셨다면 1장부터, 이미 관리 중이라면 필요한 챕터부터 읽으세요.</strong></li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch1",
    title: "Ch.1 당뇨 진단, 그 후 24시간",
    body: (
      <>
        <p>당뇨 진단 후 겪는 감정은 상실의 5단계와 놀라울 정도로 비슷합니다. 부정 &rarr; 분노 &rarr; 타협 &rarr; 우울 &rarr; 수용. 이 감정들은 순서대로 오지 않으며, <strong>모든 감정은 완전히 정상</strong>입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">A1C 수치별 현재 위치</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>5.7% 미만</strong> — 정상. 유지하기.</li>
          <li><strong>6.5~7.9%</strong> — 경도. 약물+생활습관으로 6개월 내 개선 가능.</li>
          <li><strong>10% 이상</strong> — 고도. 적극 치료로 빠른 개선 가능 (높을수록 초반 개선 폭이 더 크다).</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">첫 24시간에 해야 할 5가지</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>숨을 쉬세요</strong> — 당뇨는 오늘 진단받았지만 몸속에서 몇 년간 진행되어 왔습니다.</li>
          <li><strong>혈당계를 구입하세요</strong> — 약국에서 1~3만 원, 시험지 가격이 더 중요합니다.</li>
          <li><strong>처방약을 시작하세요</strong> — 약은 실패가 아닌 도구입니다.</li>
          <li><strong>물을 드세요</strong> — 고혈당 상태에서 수분이 혈당 감소에 직접 도움됩니다.</li>
          <li><strong>이 책을 계속 읽으세요</strong> — 올바른 정보가 가장 큰 무기입니다.</li>
        </ol>

        <blockquote className="border-l-4 border-rose-400 pl-4 py-2 my-4 bg-rose-50 dark:bg-rose-950 rounded-r-lg">
          <p><strong>1챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>당뇨는 사형선고가 아니다 — A1C 14에서 5.6으로 낮춘 사례가 수백 개다.</li>
            <li>구글에서 합병증 사진 검색, 극단적 식단, 민간요법 의존은 하지 마세요.</li>
            <li><strong>오늘부터 실행</strong>: 혈당계를 구입하고 공복 혈당을 내일 아침 첫 측정하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch2",
    title: "Ch.2 당뇨의 종류와 메커니즘",
    body: (
      <>
        <p>당뇨의 핵심은 한 줄로 설명됩니다. <strong>혈액 속 포도당이 세포 안으로 제대로 들어가지 못하는 상태.</strong> 세포 문을 여는 열쇠가 인슐린인데, 1형은 열쇠 자체가 없고, 2형은 자물쇠가 녹슬어 열리지 않습니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">당뇨의 4가지 종류</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>1형</strong> — 자가면역으로 베타세포 파괴, 인슐린 주사 필수 (전체의 5~10%)</li>
          <li><strong>2형</strong> — 인슐린 저항성 + 분비 감소, 생활습관으로 관해 가능 (90~95%)</li>
          <li><strong>LADA(1.5형)</strong> — 성인 자가면역 당뇨, 2형으로 오진이 잦음. 마른 체형에 경구약 효과가 줄면 GAD 항체 검사 필요.</li>
          <li><strong>임신성 당뇨</strong> — 출산 후 대부분 사라지지만, 10년 내 2형 발생 확률 50%.</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">인슐린 저항성을 높이는 6대 요인</h3>
        <p>내장지방, 만성 스트레스, 수면 부족, 운동 부족, 정제 탄수화물, 유전. <strong>좋은 소식은 대부분 생활습관으로 개선 가능하다는 것입니다.</strong></p>

        <blockquote className="border-l-4 border-rose-400 pl-4 py-2 my-4 bg-rose-50 dark:bg-rose-950 rounded-r-lg">
          <p><strong>2챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>한국 30세 이상 유병률 16%(6명 중 1명), 본인이 모르는 비율 30%.</li>
            <li>동아시아인은 낮은 BMI에서도 당뇨 발생 &mdash; 마른 당뇨에 주의.</li>
            <li><strong>오늘부터 실행</strong>: 내 당뇨 타입과 최근 A1C 수치를 기록하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch3",
    title: "Ch.3 혈당 측정의 기술",
    body: (
      <>
        <p>당뇨 관리에서 가장 중요한 도구는 약이 아니라 <strong>혈당 측정기</strong>입니다. 혈당 측정은 네비게이션을 켜고 운전하는 것과 같습니다. 처음 1~2개월은 가능한 자주 측정하며 어떤 음식이 혈당을 올리는지 &quot;학습&quot;하세요.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">측정 시점별 목표 수치</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>공복</strong> — 80~130 mg/dL (기저 혈당 수준)</li>
          <li><strong>식후 1시간</strong> — 180 mg/dL 미만 (혈당 스파이크)</li>
          <li><strong>식후 2시간</strong> — 140 mg/dL 미만 (혈당 회복 능력)</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">&quot;Eat to the Meter&quot; 전략</h3>
        <p>Reddit에서 가장 많이 추천되는 전략입니다. <strong>먹고 &rarr; 측정하고 &rarr; 올린 음식을 줄이거나 대체.</strong> 목표: 식후 1시간 140 미만, 식전 대비 상승폭 40 이내.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">CGM(연속혈당측정기)</h3>
        <p>FreeStyle Libre(14일)와 Dexcom G7(10일)이 대표적. 인슐린 사용자, A1C 미달, 새벽 현상 확인 시 추천. 한국은 1형·인슐린 2형 조건부 보험 적용.</p>

        <blockquote className="border-l-4 border-rose-400 pl-4 py-2 my-4 bg-rose-50 dark:bg-rose-950 rounded-r-lg">
          <p><strong>3챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>A1C는 3개월 평균이라 &quot;평균의 함정&quot;이 있다 &mdash; 일상 측정이 반드시 병행되어야 한다.</li>
            <li>측정만 하고 기록하지 않으면 반쪽짜리 &mdash; 메모란에 음식·운동·스트레스를 적으세요.</li>
            <li><strong>오늘부터 실행</strong>: 3일간 하루 4회 이상 측정하고 &quot;Eat to the Meter&quot; 실험을 시작하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch4",
    title: "Ch.4 당뇨 약물 완전 가이드",
    body: (
      <>
        <p>약 복용을 미루다가 합병증이 생기는 분들을 약국에서 너무 많이 봅니다. <strong>약은 실패의 증거가 아닙니다. 약은 도구입니다.</strong> 2025년부터 대한당뇨병학회는 &quot;모든 환자에게 같은 약&quot;이 아닌 <strong>개인화 치료</strong>로 가이드라인을 변경했습니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">주요 약물 한눈에 보기</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>메트포르민</strong> — 1차 약제, A1C 1~1.5% 감소, 월 수천 원. 장기 복용 시 <strong>B12 결핍 주의</strong>(연 1회 검사 권장).</li>
          <li><strong>SGLT-2 억제제</strong>(포시가·자디앙) — 소변으로 당 배출, 체중 감소, 심장·신장 보호 효과.</li>
          <li><strong>GLP-1 유사체</strong>(오젬픽·마운자로) — A1C 1~2.5% 감소 + 체중 큰 감소. 원래 당뇨 치료제이니 부끄러워하지 마세요.</li>
          <li><strong>인슐린</strong> — 가장 자연스러운 방법(몸이 원래 만드는 호르몬 보충). 두려워할 필요 없습니다.</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">월 비용 비교 (보험 적용 기준)</h3>
        <p>메트포르민 5천~1만 원 / DPP-4 1.5~3만 원 / SGLT-2 2~4만 원 / GLP-1 5~15만 원 / 기저 인슐린 2~5만 원.</p>

        <blockquote className="border-l-4 border-rose-400 pl-4 py-2 my-4 bg-rose-50 dark:bg-rose-950 rounded-r-lg">
          <p><strong>4챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>약 복용은 현명한 선택이다 &mdash; 생활습관 개선 후 의사와 상의하여 줄이거나 중단할 수 있다.</li>
            <li>메트포르민+생활습관 조합으로 A1C 9대에서 5대로 낮추고 약을 끊은 사례가 다수.</li>
            <li><strong>오늘부터 실행</strong>: 현재 약 이름·용량을 기록하고, 약 복용 시간 알람을 설정하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch5",
    title: "Ch.5 혈당을 잡는 식단 전략",
    body: (
      <>
        <p>인터넷에는 서로 모순되는 식단 정보가 넘칩니다. 하지만 수천 명이 검증한 단 하나의 원칙이 있습니다. <strong>&quot;먹고 나서 혈당계를 보세요. 답은 거기에 있습니다.&quot;</strong></p>

        <h3 className="text-xl font-bold mt-8 mb-4">GPS 법칙: 3대 스파이크 원인</h3>
        <p><strong>G</strong>rain(곡물) + <strong>P</strong>otato(감자) + <strong>S</strong>ugar(설탕). 흰쌀밥을 곤약밥으로, 감자를 콜리플라워로, 설탕을 에리스리톨로 대체하세요. &quot;절대 금지&quot;가 아니라 &quot;줄이고 대체&quot;입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">한국 식단 핵심 전략</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>밥</strong> — 1공기(200g) = 탄수화물 65~70g. 반 공기 또는 곤약밥 혼합으로 30~60g 절감.</li>
          <li><strong>식사 순서</strong> — 채소 먼저 &rarr; 단백질 &rarr; 탄수화물 마지막. 같은 음식도 순서만 바꾸면 스파이크 30~40 감소.</li>
          <li><strong>80/20 규칙</strong> — 80%는 엄격, 20%는 유연. 100% 금지는 폭식으로 돌아온다.</li>
        </ul>

        <blockquote className="border-l-4 border-rose-400 pl-4 py-2 my-4 bg-rose-50 dark:bg-rose-950 rounded-r-lg">
          <p><strong>5챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>현미밥이라고 안심 금물 &mdash; 현미도 백미만큼 혈당을 올리는 사람이 있다. 혈당계가 답.</li>
            <li>간헐적 단식은 효과적이지만 인슐린·설포닐유레아 사용자는 반드시 의사와 상의.</li>
            <li><strong>오늘부터 실행</strong>: 밥 반 공기로 줄이고, 채소를 먼저 먹는 순서를 시작하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch6",
    title: "Ch.6 운동과 혈당",
    body: (
      <>
        <p>헬스장에 갈 필요 없습니다. <strong>식후 10분 걷기만으로 혈당 스파이크가 30~50% 감소합니다.</strong> 근육이 포도당을 인슐린 없이 직접 연료로 사용하기 때문입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">3가지 핵심 운동 전략</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>식후 걷기</strong> — 식후 15~30분 이내 시작, 10분도 효과 있음, 산책 수준이면 충분.</li>
          <li><strong>아침 산책</strong> — 코르티솔 리셋 + 공복 혈당 개선 + 수면 질 향상. 15~20분.</li>
          <li><strong>근력 운동</strong> — 근육 = 혈당 저장 창고. 벽 푸쉬업, 의자 스쿼트부터 시작.</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">주차별 가이드</h3>
        <p><strong>1~2주</strong>: 식후 10~15분 걷기, 주 3~4일. <strong>3~4주</strong>: 15~20분 + 근력 운동 주 2회. <strong>5주 이후</strong>: 30~45분 유산소 + 근력 주 3회, 일상에 통합.</p>

        <blockquote className="border-l-4 border-rose-400 pl-4 py-2 my-4 bg-rose-50 dark:bg-rose-950 rounded-r-lg">
          <p><strong>6챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>NEAT(비운동 활동)도 하루 열량의 15~30% &mdash; 계단, 서서 일하기, 집안일 모두 혈당에 도움.</li>
            <li>인슐린·설포닐유레아 사용자는 운동 시 포도당 정제를 반드시 휴대하세요(15-15 규칙).</li>
            <li><strong>오늘부터 실행</strong>: 저녁 식후 10분 걷기를 하고, 걷기 전후 혈당을 비교하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch7",
    title: "Ch.7 스트레스·수면·감정과 혈당",
    body: (
      <>
        <p>식단도 운동도 열심히 하는데 혈당이 안 잡히면? <strong>스트레스와 수면을 의심하세요.</strong> 건강한 사람도 하룻밤 4시간 수면이면 인슐린 감수성이 25~30% 감소합니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">스트레스-혈당 메커니즘</h3>
        <p>스트레스 &rarr; 코르티솔·아드레날린 분비 &rarr; 간에서 포도당 방출 &rarr; 혈당 상승 &rarr; 인슐린 저항성 증가. 직장 스트레스처럼 만성이면 365일 혈당이 올라갑니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">당뇨 번아웃 탈출 전략</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>최소한만 유지</strong> — 약 복용만이라도 꾸준히.</li>
          <li><strong>완벽 포기</strong> — 80%면 충분하다고 인정.</li>
          <li><strong>한 가지만 집중</strong> — 모든 것을 다 하려 하지 않기.</li>
          <li><strong>자기 자신에게 친절하기</strong> — 혈당이 높은 날 자책하지 않기.</li>
        </ul>

        <blockquote className="border-l-4 border-rose-400 pl-4 py-2 my-4 bg-rose-50 dark:bg-rose-950 rounded-r-lg">
          <p><strong>7챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>새벽 현상(Dawn Phenomenon)은 아침 산책 15~20분 + 충분한 수면으로 개선된다.</li>
            <li>가족의 역할은 &quot;감시&quot;가 아닌 &quot;지지&quot; &mdash; &quot;그거 먹어도 되니?&quot; 대신 &quot;같이 산책할래?&quot;</li>
            <li><strong>오늘부터 실행</strong>: 4-7-8 호흡법을 하루 1회 연습하고, 수면 시간을 기록하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch8",
    title: "Ch.8 합병증 예방",
    body: (
      <>
        <p>합병증은 당뇨인이 가장 두려워하는 단어입니다. 하지만 절대적으로 중요한 사실을 말씀드리겠습니다. <strong>합병증은 &quot;관리 안 했을 때&quot; 오는 것입니다.</strong> A1C를 7% 미만으로 유지하면 합병증 위험이 극적으로 감소합니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">4대 합병증과 예방법</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>눈(당뇨 망막병증)</strong> — 초기에는 무증상. 반드시 연 1회 안저 검사.</li>
          <li><strong>신장(당뇨 신증)</strong> — 연 1회 미세알부민뇨 검사. SGLT-2 억제제가 신장 보호 효과.</li>
          <li><strong>신경(말초신경병증)</strong> — 발·손 저림. 초기 신경 손상은 혈당 관리로 <strong>개선 가능</strong>.</li>
          <li><strong>발</strong> — 매일 상처·물집·색깔 변화 확인. 맨발 금지, 보습, 발톱 일자로 자르기.</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">연 1회 필수 검사</h3>
        <p>A1C(3~6개월마다), 안저 검사, 미세알부민뇨, 신장 기능(eGFR), 지질 검사, 발 검사, 혈압, 갑상선 검사.</p>

        <blockquote className="border-l-4 border-rose-400 pl-4 py-2 my-4 bg-rose-50 dark:bg-rose-950 rounded-r-lg">
          <p><strong>8챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>1형 30년, 합병증 제로인 사람의 비결: &quot;완벽하지 않지만 꾸준히 관리했을 뿐.&quot;</li>
            <li>심혈관이 당뇨인 최대 사망 원인 &mdash; 혈압 130/80 미만 + LDL 100 미만 동시 관리 필수.</li>
            <li><strong>오늘부터 실행</strong>: 안저 검사와 미세알부민뇨 검사를 예약하고, 매일 발을 확인하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch9",
    title: "Ch.9 당뇨와 일상생활",
    body: (
      <>
        <p>당뇨는 삶을 포기하라는 진단이 아닙니다. 외식도 하고, 여행도 가고, 모임에도 참석합니다. <strong>다만, 더 똑똑하게 합니다.</strong></p>

        <h3 className="text-xl font-bold mt-8 mb-4">외식 가이드</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>삼겹살집</strong> — 고기+쌈채소 위주, 밥 최소. 냉면·볶음밥 주의.</li>
          <li><strong>일식</strong> — 사시미·구이류 추천. 초밥(밥)·라멘(면) 주의.</li>
          <li><strong>카페</strong> — 아메리카노·무가당 차. 프라푸치노·달콤한 라떼 주의.</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">음주와 메트포르민</h3>
        <p>소량(1~2잔)은 대부분 문제 없지만, 과음 시 유산산증 위험. <strong>소주·위스키·드라이 와인</strong>이 탄수화물이 적고, 맥주·막걸리는 &quot;액체 빵&quot;입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">여행·직장·명절</h3>
        <p>여행 시 약 여분 3일분+영문 처방전. 직장에서는 최소 동료 1~2명에게 알리기(저혈당 응급 대비). 명절에는 &quot;배가 불러요&quot;로 대응하고, 접시의 절반은 채소로.</p>

        <blockquote className="border-l-4 border-rose-400 pl-4 py-2 my-4 bg-rose-50 dark:bg-rose-950 rounded-r-lg">
          <p><strong>9챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>외식 핵심: 메뉴 미리 보기 + 단백질 중심 + 밥 양 조절.</li>
            <li>가족에게 전할 메시지: &quot;감시가 아닌 지지, 함께 건강하게 먹어주는 것이 가장 큰 도움.&quot;</li>
            <li><strong>오늘부터 실행</strong>: 자주 가는 식당의 저탄수 메뉴 3개를 정하고, 비상 간식 세트를 준비하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch10",
    title: "Ch.10 90일 로드맵: 오늘부터 시작하기",
    body: (
      <>
        <p>A1C는 2~3개월 평균이므로 <strong>90일이면 숫자를 바꿀 수 있습니다.</strong> Reddit에는 A1C 11대에서 5대로 낮춘 사례가 수백 개입니다. 공통점은 올바른 정보 + 시스템 + 꾸준함입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">주차별 로드맵</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>Week 1~2: 현실 파악</strong> — 하루 4~6회 측정, 식단 그대로 기록, 식후 10분 산책 시작.</li>
          <li><strong>Week 3~4: 식단 전환</strong> — 밥 반 공기, GPS 제한, 식사 순서 변경, 산책 15~20분.</li>
          <li><strong>Week 5~8: 시스템화</strong> — Meal Prep 주 1회, 걷기+근력 루틴, 수면 7시간, 외식 전략 확립.</li>
          <li><strong>Week 9~12: 미세 조정</strong> — 약물 재평가 상의, 운동 강도 증가, A1C 검사로 성과 확인.</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">나쁜 날이 올 때</h3>
        <p>폭식한 날 &rarr; 자책 대신 다음 끼니부터 돌아오기. 약을 까먹은 날 &rarr; 다음 시간에 정상 복용(2배 금지). 번아웃 &rarr; 최소한만 유지, 자기 자신에게 친절하게.</p>

        <blockquote className="border-l-4 border-rose-400 pl-4 py-2 my-4 bg-rose-50 dark:bg-rose-950 rounded-r-lg">
          <p><strong>10챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>5가지 성공 사례의 공통점: 작게 시작, 자기 몸 관찰, 의지력이 아닌 루틴에 의존.</li>
            <li>&quot;나쁜 날은 나쁜 인생이 아니다. 내일은 새로운 숫자가 있는 새로운 날이다.&quot;</li>
            <li><strong>오늘부터 실행</strong>: 90일 후 A1C 검사를 예약하고, 이번 주 목표 3가지를 적으세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "appendix",
    title: "부록 — 실전 도구 모음",
    body: (
      <>
        <p>이 부록에는 당뇨 관리에 <strong>바로 복사해서 사용할 수 있는 7종 실전 도구</strong>를 정리했습니다. 프린트하거나 노션·핸드폰에 저장해서 활용하세요.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">7종 도구 목록</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>주간 혈당 기록표</strong> — 공복·식후·취침 전 + 운동·수면·메모란 포함.</li>
          <li><strong>3일 식단 일지</strong> — 먹은 음식·탄수화물 추정·식후 혈당 + 3일 분석.</li>
          <li><strong>약물 비교표</strong> — 경구약 5종 + 주사제 4종의 A1C 감소·체중·비용 비교.</li>
          <li><strong>연간 검사 체크리스트</strong> — 3~6개월 검사 + 연 1회 검사 + 분기별 결과 기록.</li>
          <li><strong>응급 대처 카드</strong> — 저혈당 15-15 규칙 + 고혈당 대처 + 비상 연락처.</li>
          <li><strong>유용한 앱·커뮤니티</strong> — MySugr, LibreLink, Reddit 당뇨 커뮤니티 등.</li>
          <li><strong>자주 묻는 질문(FAQ)</strong> — 완치 가능성, 약 평생 복용 여부, 과일, 유전, CGM 등 8문 8답.</li>
        </ol>

        <blockquote className="border-l-4 border-rose-400 pl-4 py-2 my-4 bg-rose-50 dark:bg-rose-950 rounded-r-lg">
          <p><strong>부록 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>도구는 사용할 때 가치가 있다 &mdash; 하루에 한 칸이라도 채우는 것이 시작.</li>
            <li>당뇨 관리는 마라톤 &mdash; 오늘 한 걸음이 3개월 후 A1C를 바꾸고, 1년 후 건강을 바꾼다.</li>
            <li><strong>당신은 할 수 있습니다. 이미 시작했으니까요.</strong></li>
          </ul>
        </blockquote>
      </>
    ),
  },
];

const updateLogs: UpdateLog[] = [
  {
    version: 1,
    date: "2026-09-20",
    changes: ["초판 발행: 당뇨 완전 가이드 10챕터 + 부록 실행 키트"],
  },
];

export default function DiabetesGuideRead() {
  return (
    <GuideBook
      bookId="diabetes-guide"
      title="약사가 알려주는 당뇨에 대한 모든 것"
      emoji="🩸"
      subtitle="진단부터 약물·식단·생활습관까지 — 당뇨인이 알아야 할 완전 가이드"
      topItems={topItems}
      sections={sections}
      updateLogs={updateLogs}
      currentVersion={1}
    />
  );
}
