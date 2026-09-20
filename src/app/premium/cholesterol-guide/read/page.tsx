import GuideBook from "@/components/GuideBook";
import type {
  TopItem,
  ContentSection,
  UpdateLog,
} from "@/components/GuideBook";

export const metadata = {
  title: "약사가 알려주는 고지혈증에 대한 모든 것 — 본문 | 살아있는 정보책",
  description:
    "스타틴 6종 완전 비교·콜레스테롤 낮추는 식이요법·합병증 예방·90일 관리 로드맵. 서문 + 10개 챕터 + 부록 전문. 콜레스테롤 기초, 검사 해석, 스타틴, 에제티미브·PCSK9, 식이요법, 운동, 체중·음주·스트레스, 합병증, 특수 상황, 90일 로드맵까지.",
};

const topItems: TopItem[] = [
  {
    number: 1,
    title: "콜레스테롤의 진실: 나쁜 것만은 아니다",
    oneLiner: "콜레스테롤은 나쁜 물질이 아니라 생명 유지에 필수적인 물질이다.",
    description:
      "LDL·HDL·중성지방의 역할, 계란 논쟁의 결론, 한국 성인 40% 이상 이상지질혈증, 이상지질혈증 4가지 유형 분류.",
    situation: "콜레스테롤이 높다는데 정확히 뭐가 문제인지 모를 때",
    action: "자신의 최근 검사 결과에서 LDL·HDL·중성지방을 확인하세요.",
    mission: "건강검진 결과지를 꺼내 이 장의 정상 범위와 대조해보세요.",
  },
  {
    number: 2,
    title: "검사 결과 읽는 법: 숫자가 말해주는 것",
    oneLiner: "같은 LDL 수치라도 심혈관 위험 등급에 따라 치료 방침이 완전히 다르다.",
    description:
      "공복 지질 검사 4가지 수치 해석, 위험 등급별 LDL 목표(55~130mg/dL), 비HDL 콜레스테롤, LDL/HDL 비율, 약물 치료 시작 결정 알고리즘.",
    situation: "LDL이 120인데 약을 먹어야 하는지 안 먹어도 되는지 모를 때",
    action: "자신의 위험 등급을 확인하고 LDL 목표를 파악하세요.",
    mission: "다음 진료 시 의사에게 자신의 위험 등급과 LDL 목표를 질문하세요.",
  },
  {
    number: 3,
    title: "스타틴 완전 가이드: 가장 중요한 약",
    oneLiner: "스타틴은 심혈관 사건을 25~35% 줄이는 가장 강력하고 검증된 약물이다.",
    description:
      "스타틴 6종 비교(로수바스타틴·아토르바스타틴 등), 용량별 LDL 감소율, 근육통·간수치·당뇨 부작용 팩트 체크, 그레이프프루트 주의, 복용 시간, 제네릭 vs 오리지널.",
    situation: "스타틴 부작용이 무서워서 처방받은 약을 먹지 않고 있을 때",
    action: "자신의 스타틴이 6종 중 어디에 해당하는지 확인하세요.",
    mission: "부록의 스타틴 비교 카드를 확인하고 약 보관함에 메모하세요.",
  },
  {
    number: 4,
    title: "스타틴 외 약물: 에제티미브, PCSK9, 피브레이트",
    oneLiner: "스타틴만으로 부족할 때 추가하는 약물에는 각각 명확한 역할이 있다.",
    description:
      "에제티미브(소장 흡수 억제, 스타틴 파트너), PCSK9 억제제(극적 LDL 감소), 피브레이트(중성지방 전문), 처방 오메가3, 단계적 약물 치료 전략.",
    situation: "스타틴을 먹고 있는데 LDL이 목표에 도달하지 못할 때",
    action: "이 장의 약물 비교표를 읽고 추가 약물 옵션을 이해하세요.",
    mission: "다음 진료 시 LDL 목표 미달이면 에제티미브 병용에 대해 질문하세요.",
  },
  {
    number: 5,
    title: "식이요법: 콜레스테롤을 낮추는 식단",
    oneLiner: "적절한 식이요법만으로 LDL을 10~15%, 중성지방을 20~30% 낮출 수 있다.",
    description:
      "포화지방 줄이기가 1순위(삼겹살·버터·라면), 트랜스지방 완전 회피, 수용성 식이섬유(귀리·콩·사과)로 LDL 추가 감소, 올리브오일·견과류·생선, 한국 식단 적용법.",
    situation: "콜레스테롤이 높은데 뭘 먹고 뭘 줄여야 하는지 모를 때",
    action: "이번 주부터 삼겹살 대신 등심이나 닭가슴살로 바꿔보세요.",
    mission: "부록의 포화지방 함량표로 자주 먹는 음식의 포화지방을 체크하세요.",
  },
  {
    number: 6,
    title: "운동과 콜레스테롤",
    oneLiner: "운동은 HDL을 5~15% 올리고 중성지방을 15~30% 낮추는 천연 약이다.",
    description:
      "유산소 운동의 HDL 상승 효과, 주 120분 이상 권장, 식후 30분~1시간 걷기의 중성지방 효과, 근력 운동 병행, 스타틴과 운동의 근육통 구분법.",
    situation: "운동이 콜레스테롤에 어떤 영향을 미치는지 구체적으로 모를 때",
    action: "이번 주부터 식후 20분 걷기를 시작하세요.",
    mission: "주 3회 이상 중등도 유산소 운동을 2주간 기록하세요.",
  },
  {
    number: 7,
    title: "체중, 음주, 스트레스와 콜레스테롤",
    oneLiner: "체중 5% 감량만으로 중성지방 15~20% 감소 효과를 볼 수 있다.",
    description:
      "내장지방(허리둘레)과 중성지방의 관계, 음주와 중성지방, 금연의 HDL 효과(5~10% 상승), 만성 스트레스와 코르티솔, 대사증후군 5가지 기준.",
    situation: "약을 먹고 식단도 바꿨는데 중성지방이 여전히 높을 때",
    action: "허리둘레를 측정하고(남 90cm, 여 85cm 미만 목표) 기록하세요.",
    mission: "이번 달 체중 1~2kg 감량을 목표로 설정하세요.",
  },
  {
    number: 8,
    title: "합병증: 혈관이 막히면 일어나는 일",
    oneLiner: "동맥경화는 10~20대부터 시작되며 수십 년간 증상 없이 진행된다.",
    description:
      "동맥경화 4단계 진행 과정, 플라크 파열과 급성 심근경색, 뇌졸중 FAST 법칙, 말초동맥질환, 경동맥 초음파, 이미 심혈관 사건을 겪었다면 약 절대 중단 금지.",
    situation: "합병증이 무섭지만 막연한 두려움만 있고 구체적 예방법을 모를 때",
    action: "FAST 법칙(Face, Arm, Speech, Time)을 가족 모두에게 알려주세요.",
    mission: "40세 이상이라면 경동맥 초음파 검사를 올해 안에 받으세요.",
  },
  {
    number: 9,
    title: "특수 상황의 콜레스테롤 관리",
    oneLiner: "모든 사람에게 같은 기준이 적용되지 않는다 — 특수 상황은 접근이 다르다.",
    description:
      "가족성 고콜레스테롤혈증(유전, LDL 190+), 당뇨+고지혈증(더 엄격한 LDL 목표), 만성 신장병, 고령자, 임신 중 스타틴 절대 금기, 갑상선 기능과 콜레스테롤, 약물 상호작용.",
    situation: "당뇨가 있거나 가족력이 있거나 임신 중이라 일반 가이드가 맞는지 모를 때",
    action: "자신이 해당하는 특수 상황의 LDL 목표와 주의사항을 확인하세요.",
    mission: "다음 진료 시 의사에게 자신의 개인화된 LDL 목표를 질문하세요.",
  },
  {
    number: 10,
    title: "콜레스테롤 관리 90일 로드맵",
    oneLiner: "한꺼번에 모든 것을 바꾸려 하면 3일도 못 간다 — 2주마다 하나씩 추가하라.",
    description:
      "Week 1~2 현재 상태 파악+기초 검사, Week 3~4 식이요법 시작, Week 5~6 운동 시작, Week 7~8 생활습관 최적화, Week 9~12 재검사+약물 최적화. 위험 등급별 LDL 목표 설정.",
    situation: "모든 정보는 배웠지만 어디서부터 시작해야 할지 막막할 때",
    action: "부록의 지질 검사 기록표를 준비하고 현재 수치를 기록하세요.",
    mission: "90일 후 지질 검사를 예약하세요.",
  },
];

const sections: ContentSection[] = [
  {
    id: "preface",
    title: "서문 — 콜레스테롤 약, 평생 먹어야 하나요?",
    body: (
      <>
        <p>&quot;약사님, 콜레스테롤 약 평생 먹어야 하나요?&quot; 약국 카운터에서 가장 많이 듣는 질문 중 하나입니다. 이 질문에는 불안, 궁금증, 그리고 약간의 체념이 섞여 있습니다.</p>

        <p>대한민국 20세 이상 성인의 <strong>40% 이상</strong>이 이상지질혈증을 갖고 있습니다. 그런데 정작 자신의 콜레스테롤 수치를 정확히 알고, 그 의미를 이해하는 사람은 드뭅니다. 진료 시간 3분, 조제 시간 5분 안에 이 모든 것을 설명하기는 불가능합니다. 그래서 이 책을 썼습니다. <strong>약국 카운터에서 해드리지 못한 이야기</strong>를 한 권에 담았습니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">이 책의 구성</h3>
        <p><strong>1~2장</strong> — 콜레스테롤의 기본 개념과 검사 결과 읽는 법.</p>
        <p><strong>3~4장</strong> — 스타틴 6종 완전 비교, 에제티미브·PCSK9·피브레이트.</p>
        <p><strong>5~7장</strong> — 식이요법, 운동, 체중·음주·스트레스 관리.</p>
        <p><strong>8~10장</strong> — 합병증 예방, 특수 상황, 90일 로드맵.</p>
        <p><strong>부록</strong> — 지질 검사 기록표, 스타틴 비교 카드, 식이섬유 식품표, 오메가3 식품표, 포화지방 함량표, 연간 검사 체크리스트.</p>

        <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-amber-50 dark:bg-amber-950 rounded-r-lg">
          <p><strong>서문 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>콜레스테롤은 &lsquo;침묵의 살인자&rsquo; — 증상이 없다고 괜찮은 게 아니다.</li>
            <li>이 책은 약국 카운터에서 한 시간 동안 설명해드리는 것처럼 썼습니다.</li>
            <li><strong>10장 &lsquo;90일 로드맵&rsquo;은 반드시 읽어주세요.</strong> 아는 것과 실천하는 것은 다릅니다.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch1",
    title: "Ch.1 콜레스테롤의 진실: 나쁜 것만은 아니다",
    body: (
      <>
        <p>콜레스테롤은 우리 몸에 <strong>반드시 필요한 물질</strong>입니다. 세포막 구성, 호르몬 합성, 담즙산 생성, 비타민 D 합성, 뇌 기능 유지에 필수적입니다. 우리 몸의 콜레스테롤 중 약 <strong>70~80%는 간에서 자체 생산</strong>됩니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">LDL, HDL, 중성지방</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>LDL(나쁜 콜레스테롤)</strong> — 간에서 온몸으로 배달. 너무 많으면 혈관 벽에 쌓여 동맥경화의 시작점.</li>
          <li><strong>HDL(좋은 콜레스테롤)</strong> — 혈관 벽의 콜레스테롤을 수거해 간으로 되가져오는 청소부. 40mg/dL 이상 유지.</li>
          <li><strong>중성지방</strong> — 에너지 저장 지방. 탄수화물, 알코올, 과잉 칼로리에 민감. 500mg/dL 이상이면 급성 췌장염 위험.</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">계란 논쟁의 결론</h3>
        <p>건강한 성인은 하루 1~2개 괜찮습니다. 진짜 범인은 계란이 아니라 <strong>포화지방</strong>(삼겹살, 버터, 크림)입니다. 삼겹살 한 인분 줄이는 것이 계란 하나 줄이는 것보다 LDL 감소에 훨씬 효과적입니다.</p>

        <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-amber-50 dark:bg-amber-950 rounded-r-lg">
          <p><strong>1챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>콜레스테롤은 나쁜 물질이 아니라 생명 유지에 필수적인 물질이다.</li>
            <li>한국 성인의 40% 이상이 이상지질혈증이지만, 제대로 관리하는 사람은 30%에 불과하다.</li>
            <li><strong>오늘부터 실행</strong>: 건강검진 결과지를 꺼내 LDL·HDL·중성지방 수치를 확인하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch2",
    title: "Ch.2 검사 결과 읽는 법: 숫자가 말해주는 것",
    body: (
      <>
        <p>콜레스테롤 검사는 <strong>12시간 공복</strong> 후 채혈하는 것이 기본입니다. LDL, HDL, 중성지방, 총콜레스테롤 4가지 수치를 모두 확인해야 합니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">심혈관 위험 등급별 LDL 목표</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>초고위험군</strong>(심근경색·뇌졸중 병력) — LDL 55mg/dL 미만</li>
          <li><strong>고위험군</strong>(당뇨+장기 손상) — LDL 70mg/dL 미만</li>
          <li><strong>중등도 위험군</strong>(위험인자 2개+) — LDL 100mg/dL 미만</li>
          <li><strong>저위험군</strong>(위험인자 0~1개) — LDL 130mg/dL 미만</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">약물 치료 시작 결정</h3>
        <p>&quot;LDL이 높으니까 무조건 약&quot;이 아닙니다. 위험도가 낮으면 생활습관 개선을 먼저 3개월 시도합니다. 하지만 <strong>고위험군 이상이면 시간을 지체하지 않고 약물 치료를 시작</strong>하는 것이 맞습니다.</p>

        <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-amber-50 dark:bg-amber-950 rounded-r-lg">
          <p><strong>2챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>같은 LDL 수치라도 심혈관 위험 등급에 따라 치료 방침이 다르다.</li>
            <li>비HDL 콜레스테롤(= 총콜레스테롤 - HDL)은 LDL보다 포괄적인 지표다.</li>
            <li><strong>오늘부터 실행</strong>: 자신의 위험 등급과 LDL 목표를 파악하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch3",
    title: "Ch.3 스타틴 완전 가이드: 가장 중요한 약",
    body: (
      <>
        <p>스타틴은 간에서 콜레스테롤을 만드는 효소 <strong>HMG-CoA 환원효소</strong>를 억제합니다. LDL을 <strong>30~50% 이상</strong> 낮추고, 심혈관 사건을 <strong>25~35%</strong> 줄입니다. 전 세계 <strong>2억 명 이상</strong>이 복용 중입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">한국에서 사용되는 주요 스타틴 6종</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>로수바스타틴(크레스토)</strong> — 가장 강력, 소량으로 고효과</li>
          <li><strong>아토르바스타틴(리피토)</strong> — 가장 많이 처방, 풍부한 연구 데이터</li>
          <li><strong>심바스타틴(조코)</strong> — 그레이프프루트 반드시 주의</li>
          <li><strong>프라바스타틴(메바로친)</strong> — 약물 상호작용 가장 적음</li>
          <li><strong>피타바스타틴(리발로)</strong> — 당뇨 위험 가장 낮음</li>
          <li><strong>플루바스타틴(레스콜)</strong> — 약한 스타틴, 가벼운 경우 사용</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">부작용 팩트 체크</h3>
        <p><strong>근육통</strong>은 5~10%에서 발생하지만 대부분 경미합니다. 심각한 횡문근융해증은 0.01% 미만으로 극히 드뭅니다. <strong>간수치</strong> 상승은 1~3%이며, 정상 상한의 3배 이상이면 중단을 고려합니다. <strong>당뇨 위험</strong>은 이미 당뇨 전 단계인 사람에서 주로 발생합니다.</p>

        <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-amber-50 dark:bg-amber-950 rounded-r-lg">
          <p><strong>3챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>스타틴은 심혈관 질환 예방의 가장 강력하고 검증된 약물이다.</li>
            <li>부작용은 존재하지만 대부분 관리 가능하다. 심각한 부작용은 극히 드물다.</li>
            <li><strong>오늘부터 실행</strong>: 자신의 스타틴이 6종 중 어디인지 확인하세요. 임의로 약을 중단하지 마세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch4",
    title: "Ch.4 스타틴 외 약물: 에제티미브, PCSK9, 피브레이트",
    body: (
      <>
        <p>스타틴만으로 부족할 때 추가하는 약물에는 각각 명확한 역할이 있습니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">에제티미브 — 스타틴의 최고 파트너</h3>
        <p>소장에서 콜레스테롤 흡수를 억제합니다. 스타틴과 병용 시 LDL을 <strong>추가 20~25%</strong> 낮출 수 있으며 부작용이 매우 적습니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">PCSK9 억제제 — 극적인 LDL 감소</h3>
        <p>LDL 수용체의 분해를 막아 혈중 LDL을 극적으로 낮춥니다. 고가이며 급여 조건이 제한적이지만, 가족성 고콜레스테롤혈증이나 스타틴 불내성에서 중요한 옵션입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">피브레이트 — 중성지방 전문</h3>
        <p>중성지방이 매우 높을 때(500mg/dL 이상, 췌장염 위험) 필수적입니다. 단, <strong>젬피브로질은 스타틴과 병용 금기</strong>입니다.</p>

        <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-amber-50 dark:bg-amber-950 rounded-r-lg">
          <p><strong>4챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>에제티미브는 부작용 적고 스타틴과 시너지가 확실하다.</li>
            <li>약물 치료는 단계적으로 진행한다. 처음부터 모든 약을 한꺼번에 쓰지 않는다.</li>
            <li><strong>오늘부터 실행</strong>: LDL 목표 미달이면 에제티미브 병용을 의사에게 질문하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch5",
    title: "Ch.5 식이요법: 콜레스테롤을 낮추는 식단",
    body: (
      <>
        <p>적절한 식이요법만으로 LDL을 <strong>10~15%</strong> 낮추고, 중성지방은 <strong>20~30%</strong>까지 줄일 수 있습니다. 약과 함께 하면 약의 용량을 낮출 수 있는 경우도 있습니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">가장 중요한 원칙: 포화지방 줄이기</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li>삼겹살 200g = 포화지방 약 16g (하루 한도 15g 초과)</li>
          <li>라면 1봉지 = 포화지방 약 7g</li>
          <li>버터 1큰술 = 포화지방 약 7g</li>
          <li><strong>대안</strong>: 등심·안심·닭가슴살, 올리브오일·들기름, 견과류</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">수용성 식이섬유로 LDL 추가 감소</h3>
        <p>귀리, 콩, 사과, 감귤류에 풍부한 수용성 식이섬유는 소장에서 콜레스테롤 흡수를 방해해 LDL을 <strong>5~10% 추가로</strong> 낮출 수 있습니다.</p>

        <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-amber-50 dark:bg-amber-950 rounded-r-lg">
          <p><strong>5챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>포화지방 줄이기가 식이요법의 1순위다 (하루 총 칼로리의 7% 미만).</li>
            <li>한국 식단의 장점(채소, 두부, 생선)을 살리고 단점(삼겹살, 라면, 과음)을 줄이세요.</li>
            <li><strong>오늘부터 실행</strong>: 삼겹살 대신 등심, 버터 대신 올리브오일로 바꿔보세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch6",
    title: "Ch.6 운동과 콜레스테롤",
    body: (
      <>
        <p>운동은 <strong>HDL을 5~15% 올리고 중성지방을 15~30% 낮추는 데</strong> 가장 효과적입니다. LDL을 큰 폭으로 낮추려면 약물이 필요하지만, 운동의 심혈관 보호 효과는 지질 수치 변화만으로 설명되지 않습니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">권장 운동량</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>유산소</strong> — 주 120분 이상 중등도 (빠르게 걷기, 자전거, 수영). &quot;숨이 약간 차지만 대화할 수 있는 정도&quot;</li>
          <li><strong>근력</strong> — 주 2~3회, 중간 강도. 인슐린 감수성 개선에 도움</li>
          <li><strong>식후 걷기</strong> — 30분~1시간, 중성지방 관리에 매우 효과적</li>
        </ul>

        <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-amber-50 dark:bg-amber-950 rounded-r-lg">
          <p><strong>6챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>주 120분 이상 중등도 유산소 운동이 지질 개선의 최소 기준이다.</li>
            <li>식후 30분~1시간 걷기는 중성지방 관리에 매우 효과적이다.</li>
            <li><strong>오늘부터 실행</strong>: 주 3회 20분 걷기부터 시작해서 점진적으로 늘리세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch7",
    title: "Ch.7 체중, 음주, 스트레스와 콜레스테롤",
    body: (
      <>
        <p>이상지질혈증은 대부분 <strong>비만, 음주, 스트레스, 흡연</strong> 같은 생활습관 문제와 함께 옵니다. 약을 먹으면서 이런 요인들을 방치하면, 약의 효과가 반감됩니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">내장지방과 중성지방</h3>
        <p>같은 체중이라도 <strong>지방이 어디에 있느냐</strong>에 따라 건강 위험이 달라집니다. 허리둘레가 남성 90cm, 여성 85cm 이상이면 내장지방 위험 신호입니다. <strong>체중 5% 감량</strong>만으로 중성지방 15~20% 감소 효과를 볼 수 있습니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">금연의 효과</h3>
        <p>금연하면 HDL이 <strong>5~10%</strong> 상승하고, 1년 내 심장마비 위험이 <strong>절반</strong>으로 줄어듭니다.</p>

        <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-amber-50 dark:bg-amber-950 rounded-r-lg">
          <p><strong>7챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>내장지방(허리둘레)이 중성지방 상승과 HDL 감소의 핵심 원인이다.</li>
            <li>건강을 위해 술을 마시기 시작할 이유는 전혀 없다.</li>
            <li><strong>오늘부터 실행</strong>: 허리둘레를 측정하고 체중 감량 목표를 설정하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch8",
    title: "Ch.8 합병증: 혈관이 막히면 일어나는 일",
    body: (
      <>
        <p>콜레스테롤 자체는 아무런 증상이 없습니다. <strong>&quot;침묵의 살인자&quot;</strong>라고 불리는 이유입니다. 하지만 높은 콜레스테롤은 수십 년에 걸쳐 혈관을 손상시킵니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">동맥경화 4단계</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>1단계(10~20대)</strong> — LDL이 혈관벽에 침투, 지방 줄무늬. 증상 없음.</li>
          <li><strong>2단계(30~40대)</strong> — 콜레스테롤 축적, 섬유성 플라크 형성. 증상 없음.</li>
          <li><strong>3단계(40~50대)</strong> — 석회화, 혈관 좁아짐. 간헐적 증상 가능.</li>
          <li><strong>4단계(언제든)</strong> — 플라크 파열, 혈전 형성. <strong>급성 심근경색, 뇌졸중.</strong></li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">뇌졸중 — FAST 법칙</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>F(Face)</strong> — 한쪽 얼굴이 처지거나 비대칭</li>
          <li><strong>A(Arm)</strong> — 한쪽 팔에 힘이 없거나 저림</li>
          <li><strong>S(Speech)</strong> — 말이 어눌하거나 이해가 안 됨</li>
          <li><strong>T(Time)</strong> — 하나라도 해당되면 즉시 119</li>
        </ul>

        <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-amber-50 dark:bg-amber-950 rounded-r-lg">
          <p><strong>8챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>동맥경화는 10~20대부터 시작되며 수십 년간 증상 없이 진행된다.</li>
            <li>이미 심혈관 사건을 겪었다면 약을 절대 중단하지 마세요.</li>
            <li><strong>오늘부터 실행</strong>: 40세 이상이라면 경동맥 초음파 검사를 고려하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch9",
    title: "Ch.9 특수 상황의 콜레스테롤 관리",
    body: (
      <>
        <p>모든 사람에게 같은 기준이 적용되지 않습니다. 특정 질환이 있거나 특정 상황에 있는 분들은 <strong>다른 접근</strong>이 필요합니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">가족성 고콜레스테롤혈증</h3>
        <p>유전적 결함으로 LDL 수용체가 제대로 작동하지 않아 LDL이 190mg/dL 이상인 질환입니다. <strong>생활습관 개선만으로 해결되지 않으며</strong>, 스타틴+에제티미브 병용이 필수입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">당뇨 + 고지혈증</h3>
        <p>당뇨 환자의 LDL은 &quot;정상&quot;처럼 보여도 입자 크기가 작고 산화되기 쉬워 <strong>더 위험</strong>합니다. LDL 목표가 더 엄격하게 적용됩니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">임신과 스타틴</h3>
        <p><strong>임신 중 스타틴은 절대 금기</strong>입니다. 임신을 계획하고 있다면 최소 임신 3개월 전에 스타틴을 중단해야 합니다.</p>

        <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-amber-50 dark:bg-amber-950 rounded-r-lg">
          <p><strong>9챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>가족성 고콜레스테롤혈증은 적극적 약물 치료가 필수다.</li>
            <li>임신 중 스타틴은 절대 금기 — 임신 계획 시 미리 상담하세요.</li>
            <li><strong>오늘부터 실행</strong>: 다음 진료 시 자신의 개인화된 LDL 목표를 질문하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch10",
    title: "Ch.10 콜레스테롤 관리 90일 로드맵",
    body: (
      <>
        <p>한꺼번에 모든 것을 바꾸려 하면 3일도 못 갑니다. <strong>2주 단위로 하나씩 추가</strong>하면서, 90일 후에는 콜레스테롤 관리가 일상이 되도록 설계했습니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">Week 1~2: 현재 상태 파악</h3>
        <p>가장 최근 지질 검사 결과를 부록의 기록표에 기록하세요. 자신의 <strong>위험 등급과 LDL 목표</strong>를 확인합니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">Week 3~4: 식이요법 시작</h3>
        <p>포화지방 줄이기(삼겹살 &rarr; 등심, 버터 &rarr; 올리브오일). 수용성 식이섬유 추가(귀리, 콩, 사과).</p>

        <h3 className="text-xl font-bold mt-8 mb-4">Week 5~6: 운동 시작</h3>
        <p>주 3회 20분 걷기로 시작, 점진적으로 주 120분 이상으로 늘립니다. 식후 걷기를 습관화합니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">Week 7~8: 생활습관 최적화</h3>
        <p>체중 관리(5% 감량 목표), 음주 조절, 금연, 스트레스 관리.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">Week 9~12: 재검사 + 약물 최적화</h3>
        <p>공복 지질 검사를 다시 받아 90일간의 변화를 확인합니다. LDL 목표 달성 여부에 따라 약물 조절을 의사와 상의합니다.</p>

        <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-amber-50 dark:bg-amber-950 rounded-r-lg">
          <p><strong>10챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>2주마다 한 가지씩 추가하면 90일 후에는 완전한 시스템이 된다.</li>
            <li>90일 후 재검사로 생활습관 변화의 효과를 객관적으로 확인한다.</li>
            <li><strong>오늘부터 실행</strong>: 지질 검사 기록표를 준비하고 90일 후 재검사를 예약하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "appendix",
    title: "부록 — 콜레스테롤 관리 실행 키트",
    body: (
      <>
        <p>이 부록에는 책에서 다룬 내용을 <strong>바로 사용할 수 있는 도구</strong>로 정리했습니다. 프린트하거나 사진을 찍어서 활용하세요.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">6종 실행 키트</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>지질 검사 기록표</strong> — 총콜레스테롤·LDL·HDL·중성지방·비HDL 추적. 검사 날짜와 목표 수치를 함께 기록.</li>
          <li><strong>스타틴 비교 카드</strong> — 로수바스타틴·아토르바스타틴·심바스타틴 등 6종의 강도, 부작용, 그레이프프루트 주의, 복용 시간 한눈에 비교.</li>
          <li><strong>식이섬유 식품표</strong> — 귀리, 보리, 콩, 사과, 감귤류 등 수용성 식이섬유 풍부 식품과 1인분당 함량.</li>
          <li><strong>오메가3 식품표</strong> — 고등어, 연어, 참치, 멸치 등 오메가3 풍부 생선과 1인분당 함량, 주 2회 이상 권장.</li>
          <li><strong>포화지방 함량표</strong> — 삼겹살, 라면, 버터, 치즈, 크림 등 한국인이 자주 먹는 음식의 포화지방 함량과 대안 식품.</li>
          <li><strong>연간 검사 체크리스트</strong> — 지질 검사, 간기능, 혈당, 갑상선, CK(근육효소) 등 연간 필수 검사 일정표.</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">자주 묻는 질문 5선</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>스타틴은 아침에 먹나, 저녁에 먹나</strong> — 반감기가 짧은 심바스타틴·프라바스타틴은 저녁, 반감기가 긴 로수바스타틴·아토르바스타틴은 아무 때나. 매일 꾸준히 복용하는 것이 가장 중요합니다.</li>
          <li><strong>콜레스테롤 수치 좋아지면 약 끊어도 되나</strong> — 약을 끊으면 수치가 다시 올라갑니다. 의사 상의 없이 절대 중단하지 마세요.</li>
          <li><strong>건강기능식품으로 대체할 수 있나</strong> — 홍국, 오메가3 건강식품은 스타틴의 LDL 감소 효과를 대체할 수 없습니다. 보조적 역할만 합니다.</li>
          <li><strong>운동만 하면 약 안 먹어도 되나</strong> — 운동은 HDL과 중성지방에 효과적이지만, LDL을 크게 낮추기 어렵습니다. 위험 등급에 따라 약물이 필요합니다.</li>
          <li><strong>제네릭(복제약)도 효과가 같나</strong> — 식약처의 생물학적 동등성 시험을 통과한 제네릭은 오리지널과 동등한 효과가 있습니다.</li>
        </ul>

        <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-amber-50 dark:bg-amber-950 rounded-r-lg">
          <p><strong>부록 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>모든 도구는 프린트하거나 사진을 찍어 냉장고·약 보관함 근처에 붙여두세요.</li>
            <li>지질 검사 기록표는 진료 시 의사에게 보여주면 약 조절에 큰 도움이 됩니다.</li>
            <li>읽는 것과 실천하는 것의 차이가 90일 후의 검사 결과를 완전히 바꿀 것입니다.</li>
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

export default function CholesterolGuideRead() {
  return (
    <GuideBook
      bookId="cholesterol-guide"
      title="약사가 알려주는 고지혈증에 대한 모든 것"
      emoji="🧬"
      subtitle="스타틴 6종 비교·콜레스테롤 식이요법·합병증 예방·90일 관리 로드맵"
      topItems={topItems}
      sections={sections}
      updateLogs={updateLogs}
      currentVersion={1}
    />
  );
}
