import GuideBook from "@/components/GuideBook";
import type {
  TopItem,
  ContentSection,
  UpdateLog,
} from "@/components/GuideBook";

export const metadata = {
  title: "약사가 알려주는 GLP-1 비만약 완전 가이드 — 본문 | 살아있는 정보책",
  description:
    "41만 명의 실제 경험 + 최신 의학 연구 기반 GLP-1 비만약 가이드. 서문 + 10개 챕터 + 보너스 5개 전문.",
};

const topItems: TopItem[] = [
  {
    number: 1,
    title: "GLP-1은 부족한 호르몬의 보충이다",
    oneLiner: "비만은 의지력이 아니라 호르몬 문제다. GLP-1은 포만감 신호를 정상화한다.",
    description:
      "GLP-1은 원래 우리 몸에 있는 포만감 호르몬입니다. 비만인 많은 사람들은 이 신호가 제대로 작동하지 않습니다. GLP-1 약물은 이 호르몬을 보충하여 뇌의 식욕 조절을 정상화합니다.",
    situation: "비만약 복용이 '편법'이라는 죄책감을 느낄 때",
    action: "혈압약이 혈압을 관리하듯, GLP-1은 식욕을 관리하는 약입니다. 만성질환 관리라고 생각하세요.",
    mission: "GLP-1의 원리를 가족에게 한 문장으로 설명해보세요.",
  },
  {
    number: 2,
    title: "나에게 맞는 약을 찾아라",
    oneLiner: "오젬픽 vs 마운자로 — 최고의 약은 없고, 나에게 맞는 약이 있다.",
    description:
      "세마글루타이드(오젬픽/위고비)는 GLP-1 단일 작용, 티르제파타이드(마운자로/젭바운드)는 GLP-1+GIP 이중 작용입니다. 마운자로가 감량 효과가 더 크지만, 개인차와 비용을 고려해야 합니다.",
    situation: "어떤 약을 선택해야 할지 혼란스러울 때",
    action: "목적(당뇨 vs 비만), 보험 적용 여부, 비용을 기준으로 의사와 상의하세요.",
    mission: "현재 보험 적용 가능한 GLP-1 약물을 확인해보세요.",
  },
  {
    number: 3,
    title: "준비 없이 시작하면 포기한다",
    oneLiner: "10분의 준비가 6개월의 성공을 결정한다. 검사와 체크리스트를 먼저.",
    description:
      "혈당, 갑상선, 간/신장 기능 검사와 체성분 분석으로 기준점을 만드세요. 복용 중인 약물을 정리하고, 현실적 기대치를 설정하세요. 준비된 사람은 부작용에 당황하지 않습니다.",
    situation: "GLP-1을 시작하려는데 무엇부터 해야 할지 모를 때",
    action: "시작 전 체크리스트 10가지를 완료하세요. 검사 결과를 들고 의사에게 가세요.",
    mission: "현재 복용 중인 약물/영양제 리스트를 작성하세요.",
  },
  {
    number: 4,
    title: "부작용은 참는 게 아니라 관리하는 것",
    oneLiner: "43.5%가 부작용을 경험하지만, 대부분 관리 가능하다.",
    description:
      "메스꺼움(36.9%), 피로(16.7%), 변비(15.3%)가 가장 흔합니다. 생강차, 마그네슘, 투약 시간 조절로 관리하세요. 한 약이 안 맞으면 다른 약으로 전환하세요.",
    situation: "부작용이 너무 심해서 포기하고 싶을 때",
    action: "증상별 대처법을 적용하세요. 견딜 수 없다면 약을 바꾸세요. 포기하지 마세요.",
    mission: "부작용 119 매뉴얼을 인쇄해서 냉장고에 붙이세요.",
  },
  {
    number: 5,
    title: "Food Noise가 사라지는 경험",
    oneLiner: "의지력이 약한 게 아니라 호르몬이었다. 뇌가 조용해지는 경험.",
    description:
      "하루 종일 음식 생각이 멈추지 않던 'food noise'가 사라집니다. 이것은 단순한 식욕 감소가 아니라 뇌의 보상 회로 자체가 변하는 경험입니다. 알코올 갈망까지 줄어드는 보고도 있습니다.",
    situation: "'먹고 싶은 충동'이 도저히 통제되지 않을 때",
    action: "GLP-1이 food noise를 잠재워주는 동안, 건강한 식습관을 만드세요. 약이 준 선물은 '시간'입니다.",
    mission: "오늘 하루, food noise가 얼마나 있었는지 1~10점으로 기록해보세요.",
  },
  {
    number: 6,
    title: "근손실을 반드시 막아라",
    oneLiner: "빠진 체중의 25~40%가 근육이다. 단백질 + 근력운동이 필수.",
    description:
      "GLP-1의 강력한 식욕 억제가 단백질 섭취까지 줄일 수 있어 근손실이 심해집니다. 체중 1kg당 단백질 1.2~1.5g을 매끼 분배하여 섭취하고, 주 3회 근력운동을 하세요.",
    situation: "체중은 줄었지만 체형이 마른 비만인 것 같을 때",
    action: "매 끼니 단백질을 먼저 먹고, 맨몸운동부터 주 3회 시작하세요.",
    mission: "오늘 먹은 단백질 총량을 계산해보세요.",
  },
  {
    number: 7,
    title: "위장 문제가 있어도 가능하다",
    oneLiner: "GERD, 위염, IBS — 많은 경우 체중 감량 후 오히려 개선된다.",
    description:
      "GLP-1은 위장 운동을 느리게 해서 초기에 역류가 악화될 수 있지만, 체중 감량 후 대부분 개선됩니다. 저용량 시작, 소량 식사, PPI 병행이 핵심입니다.",
    situation: "위가 안 좋은데 GLP-1을 시작해도 될지 걱정될 때",
    action: "위장 전문의와 상의 후, 저용량에서 시작하고 소량 식사를 지키세요.",
    mission: "나의 위장 상태를 초록/노랑/빨강 중 어디에 해당하는지 확인하세요.",
  },
  {
    number: 8,
    title: "비용 장벽을 현실적으로 해결하라",
    oneLiner: "한국에서의 처방, 비용, 급여 — 정식 경로가 가장 안전하다.",
    description:
      "당뇨 진단 시 급여 가능(월 3~5만원), 비만 목적은 비급여(월 20~60만원)입니다. 급여 가능성 탐색, 용량 조절, 투약 간격 조절로 비용을 줄이세요. 불법 구매는 위험합니다.",
    situation: "약값이 너무 비싸서 시작을 못 하겠을 때",
    action: "당뇨 전단계 여부를 확인하고, 급여 적용 가능한지 의사와 상의하세요.",
    mission: "가까운 내분비내과 또는 비만 클리닉을 검색해보세요.",
  },
  {
    number: 9,
    title: "끊을 것인가, 유지할 것인가",
    oneLiner: "중단 후 월 0.4kg 반등. 유지 용량, 점진적 중단, 사이클링 중 나의 전략을 정하라.",
    description:
      "연구에 따르면 중단 후 약 20개월이면 원래 체중으로 복귀합니다. 유지 용량으로 평생 복용, 습관 정착 후 점진적 중단, 간헐적 사이클링 — 세 가지 전략 중 자신에게 맞는 것을 선택하세요.",
    situation: "'평생 약을 먹어야 하나' 고민될 때",
    action: "혈압약처럼 생각하세요. 만성질환 관리이지, 약에 의존하는 것이 아닙니다.",
    mission: "3가지 장기 전략 중 현재 나에게 맞는 것을 골라보세요.",
  },
  {
    number: 10,
    title: "약 너머의 것 — 습관이 약을 대체할 때",
    oneLiner: "GLP-1이 준 선물은 체중 감량이 아니라 '조용한 시간'이다. 그 시간에 습관을 심어라.",
    description:
      "식사 구조화, 단백질 우선, 움직임 일상화, 감정과 식사 분리, 체중 모니터링 — 이 5가지 습관을 GLP-1이 food noise를 잠재워주는 동안 만드세요. 약이 준 시간을 낭비하지 마세요.",
    situation: "약을 줄이거나 끊을 준비를 하고 싶을 때",
    action: "5가지 습관 중 가장 약한 것 하나를 이번 주부터 강화하세요.",
    mission: "오늘 식사를 '단백질 먼저, 채소 다음, 탄수화물 마지막' 순서로 먹어보세요.",
  },
];

const sections: ContentSection[] = [
  {
    id: "preface",
    title: "서문 — \"이 약, 맞아도 될까요?\"",
    body: (
      <>
        <p>&quot;약사님, 오젬픽이요... 맞아도 되는 건가요?&quot;</p>
        <p>요즘 약국에서 가장 많이 듣는 질문입니다. 유튜브에서는 연예인이 20kg을 뺐다고 하고, 뉴스에서는 부작용이 위험하다고 하고, 온라인 커뮤니티에서는 &quot;인생이 바뀌었다&quot;는 글과 &quot;응급실에 갔다&quot;는 글이 나란히 올라옵니다.</p>
        <p><strong>정보는 넘쳐나는데, 정리된 답은 없습니다.</strong></p>
        <p>저는 유원소망약국의 김약사입니다. GLP-1 비만약에 관해서는, 약을 다루는 것보다 <strong>사람들의 불안을 다루는 일</strong>이 더 많아졌습니다.</p>
        <blockquote className="border-l-4 border-blue-400 pl-4 my-4 italic text-gray-600 dark:text-gray-400">
          &quot;부작용이 무서워서 시작을 못 하겠어요.&quot;<br />
          &quot;끊으면 다 돌아온다면서요? 그럼 평생 맞아야 해요?&quot;<br />
          &quot;근육이 빠진다는데, 단백질을 얼마나 먹어야 하죠?&quot;
        </blockquote>
        <p>이 질문들에 제대로 답하고 싶어서 이 가이드를 만들었습니다. Reddit에서 <strong>41만 명 이상</strong>이 공유한 실제 복용 경험, BMJ/NEJM/Harvard 등 최신 의학 연구, 그리고 약사로서의 약물 전문 지식을 모두 엮었습니다.</p>
        <p>이 가이드는 <strong>약을 추천하는 책이 아닙니다.</strong> 대신, 당신이 스스로 결정할 수 있도록 필요한 모든 정보를 정리했습니다.</p>
        <h3 className="text-lg font-semibold mt-6 mb-3">이 가이드 사용법</h3>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li><strong>아직 시작 안 한 분</strong> → 챕터 1~3부터 읽으세요</li>
          <li><strong>이미 복용 중인 분</strong> → 챕터 4(부작용), 6(근손실)부터 읽으세요</li>
          <li><strong>끊을지 고민 중인 분</strong> → 챕터 9(장기 전략)부터 읽으세요</li>
          <li><strong>한국 처방이 궁금한 분</strong> → 챕터 8(비용과 접근성)로 가세요</li>
        </ul>
        <p className="mt-4">각 챕터 끝에는 <strong>&quot;약사의 한마디&quot;</strong>가 있습니다. 시간이 없으시면 그것만이라도 읽어주세요.</p>
        <p className="mt-4">약사가 옆에 앉아서 설명해드리는 것처럼, 편하게 읽어주세요.</p>
      </>
    ),
  },
  {
    id: "ch1",
    title: "Ch.1 GLP-1이 뭔가요? — 약사가 쉽게 설명하는 원리",
    body: (
      <>
        <h3 className="text-lg font-semibold mt-4 mb-3">&quot;비만은 의지력의 문제가 아닙니다&quot;</h3>
        <p>비만은 <strong>만성질환</strong>입니다. 당뇨병처럼, 고혈압처럼, 호르몬과 신경계의 조절 이상으로 발생하는 질환입니다. GLP-1 약물은 이 조절 이상을 바로잡는 약입니다.</p>

        <h3 className="text-lg font-semibold mt-6 mb-3">이미 당신 몸에 있는 호르몬</h3>
        <p>GLP-1(Glucagon-Like Peptide-1)은 <strong>&quot;배부르다&quot;는 신호를 보내는 호르몬</strong>입니다. 음식을 먹으면 소장에서 분비되어 세 군데에 메시지를 보냅니다:</p>
        <ol className="list-decimal list-inside space-y-2 ml-4">
          <li><strong>뇌(시상하부)</strong>에: &quot;배부르니까 그만 먹어&quot;</li>
          <li><strong>위장</strong>에: &quot;천천히 비워. 서두르지 마&quot;</li>
          <li><strong>췌장</strong>에: &quot;인슐린 좀 더 내놔. 혈당 조절해&quot;</li>
        </ol>
        <p className="mt-3">자연 GLP-1의 반감기는 겨우 2~3분. 약물은 이것을 <strong>수백 배 농도로 며칠간 유지</strong>시킵니다.</p>

        <h3 className="text-lg font-semibold mt-6 mb-3">&quot;Food Noise&quot;가 사라진다</h3>
        <blockquote className="border-l-4 border-blue-400 pl-4 my-4 italic text-gray-600 dark:text-gray-400">
          &quot;다음 끼니를 항상 생각했어요. 이제는 먹으라고 알림을 설정해야 해요.&quot; — Reddit
        </blockquote>
        <p>GLP-1 약물은 시상하부뿐 아니라 <strong>중뇌의 보상 경로</strong>에도 작용합니다. 음식에 대한 &quot;보상 기대감&quot; 자체가 줄어드는 것입니다.</p>

        <h3 className="text-lg font-semibold mt-6 mb-3">숫자로 보는 GLP-1</h3>
        <div className="overflow-x-auto mt-3">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-gray-100 dark:bg-gray-800"><th className="p-2 border">항목</th><th className="p-2 border">수치</th></tr></thead>
            <tbody>
              <tr><td className="p-2 border">41만 명 Reddit 분석 부작용 보고율</td><td className="p-2 border">43.5%</td></tr>
              <tr><td className="p-2 border">세마글루타이드(오젬픽/위고비) 평균 감량</td><td className="p-2 border">15~17%</td></tr>
              <tr><td className="p-2 border">티르제파타이드(마운자로/젭바운드) 평균 감량</td><td className="p-2 border">20~25%</td></tr>
              <tr><td className="p-2 border">미국 성인 GLP-1 복용 비율 (2026년)</td><td className="p-2 border">12% 이상</td></tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800">
          <p className="font-semibold mb-2">약사의 한마디</p>
          <p className="text-sm">GLP-1 약물은 &quot;의지력의 대체물&quot;이 아니라 &quot;부족한 호르몬의 보충&quot;입니다. 혈압약이 혈압을 관리하듯, GLP-1은 식욕과 체중을 관리하는 약입니다.</p>
        </div>
      </>
    ),
  },
  {
    id: "ch2",
    title: "Ch.2 어떤 약이 있나요? — 오젬픽/마운자로/위고비 비교",
    body: (
      <>
        <h3 className="text-lg font-semibold mt-4 mb-3">GLP-1 약물 지도</h3>
        <p><strong>세마글루타이드 계열 (GLP-1 단일):</strong> 오젬픽(당뇨), 위고비(비만), 리벨서스(경구용)</p>
        <p><strong>티르제파타이드 계열 (GLP-1+GIP 이중):</strong> 마운자로(당뇨), 젭바운드(비만)</p>
        <p><strong>차세대:</strong> 오포글리프론(경구 소분자, Phase 3 성공), 레타트루타이드(삼중 작용, 최대 24% 감량)</p>

        <h3 className="text-lg font-semibold mt-6 mb-3">비교표: 한눈에 보는 GLP-1 약물</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-gray-100 dark:bg-gray-800"><th className="p-2 border">항목</th><th className="p-2 border">오젬픽</th><th className="p-2 border">위고비</th><th className="p-2 border">마운자로</th><th className="p-2 border">젭바운드</th></tr></thead>
            <tbody>
              <tr><td className="p-2 border">성분</td><td className="p-2 border">세마글루타이드</td><td className="p-2 border">세마글루타이드</td><td className="p-2 border">티르제파타이드</td><td className="p-2 border">티르제파타이드</td></tr>
              <tr><td className="p-2 border">작용</td><td className="p-2 border">GLP-1</td><td className="p-2 border">GLP-1</td><td className="p-2 border">GLP-1+GIP</td><td className="p-2 border">GLP-1+GIP</td></tr>
              <tr><td className="p-2 border">적응증</td><td className="p-2 border">당뇨</td><td className="p-2 border">비만</td><td className="p-2 border">당뇨</td><td className="p-2 border">비만</td></tr>
              <tr><td className="p-2 border">평균 감량</td><td className="p-2 border">15%</td><td className="p-2 border">15-17%</td><td className="p-2 border">20-25%</td><td className="p-2 border">20-25%</td></tr>
              <tr><td className="p-2 border">Food Noise</td><td className="p-2 border">부분 감소</td><td className="p-2 border">부분 감소</td><td className="p-2 border">극적 감소</td><td className="p-2 border">극적 감소</td></tr>
              <tr><td className="p-2 border">주요 부작용</td><td className="p-2 border">메스꺼움</td><td className="p-2 border">메스꺼움</td><td className="p-2 border">설퍼 트림</td><td className="p-2 border">설퍼 트림</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">41만 명의 선택: 마운자로가 더 나은가?</h3>
        <blockquote className="border-l-4 border-blue-400 pl-4 my-4 italic text-gray-600 dark:text-gray-400">
          &quot;오젬픽에서 마운자로로 바꿨더니 완전히 다른 세계. Night and day.&quot; — Reddit
        </blockquote>
        <p>마운자로 복용자가 15% 이상 감량할 확률은 오젬픽 대비 <strong>3배</strong>. 하지만 개인차가 크고, 비용과 부작용이 다르므로 &quot;최고의 약&quot;은 없고 &quot;나에게 맞는 약&quot;이 있습니다.</p>

        <div className="mt-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800">
          <p className="font-semibold mb-2">약사의 한마디</p>
          <p className="text-sm">한 약이 안 맞더라도 포기하지 마세요 — 다른 약이 당신의 인생을 바꿀 수도 있습니다.</p>
        </div>
      </>
    ),
  },
  {
    id: "ch3",
    title: "Ch.3 시작하기 전에 — 검사, 준비, 마음가짐",
    body: (
      <>
        <h3 className="text-lg font-semibold mt-4 mb-3">시작 전에 받아야 할 검사</h3>
        <div className="grid md:grid-cols-2 gap-3 mt-3">
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold text-sm mb-1">필수 검사</p>
            <p className="text-xs">공복혈당, HbA1C, 간기능(AST/ALT/GGT), 신장기능(크레아티닌/eGFR), 갑상선(TSH/Free T4), 지질 검사</p>
          </div>
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold text-sm mb-1">권장 검사</p>
            <p className="text-xs">체성분 분석(DEXA/인바디), 혈압 측정, 안과 검사(당뇨 시)</p>
          </div>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">반드시 의사/약사에게 알려야 할 약물</h3>
        <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
          <li><strong>인슐린/설포닐우레아</strong> — 저혈당 위험 증가</li>
          <li><strong>경구 피임약</strong> — 흡수 영향, 추가 피임법 고려</li>
          <li><strong>레보티록신</strong> — 흡수에 영향, 시간 간격 조절</li>
          <li><strong>와파린</strong> — INR 수치 변동 가능</li>
          <li><strong>혈압약</strong> — 체중 감량 후 저혈압 주의</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">현실적 기대치</h3>
        <div className="grid md:grid-cols-2 gap-3 mt-3">
          <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
            <p className="font-semibold text-sm mb-1">현실적</p>
            <ul className="text-xs space-y-1">
              <li>3~6개월 후 의미 있는 변화</li>
              <li>평균 15~25% 체중 감량</li>
              <li>약 + 식습관 + 운동 = 최고 결과</li>
            </ul>
          </div>
          <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800">
            <p className="font-semibold text-sm mb-1">비현실적</p>
            <ul className="text-xs space-y-1">
              <li>&quot;약만 맞으면 알아서 빠지겠지&quot;</li>
              <li>&quot;한 달에 10kg은 빠져야지&quot;</li>
              <li>&quot;목표 달성하면 끊어야지&quot;</li>
            </ul>
          </div>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">시작 전 체크리스트</h3>
        <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
          <li>혈당, A1C, 갑상선, 간/신장 기능 검사 완료</li>
          <li>체성분 분석(DEXA 또는 인바디) 기록</li>
          <li>현재 복용 약물 리스트 → 의사/약사에게 전달</li>
          <li>단백질 섭취량 목표 설정 (체중 kg x 1.2g)</li>
          <li>수분 섭취 목표 설정 (하루 2L 이상)</li>
          <li>투약 요일/시간 결정 (쉬는 날 전날 권장)</li>
        </ul>

        <div className="mt-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800">
          <p className="font-semibold mb-2">약사의 한마디</p>
          <p className="text-sm">준비 없이 시작하면 부작용에 당황하고, 당황하면 포기합니다. 10분의 준비가 6개월의 성공을 결정합니다.</p>
        </div>
      </>
    ),
  },
  {
    id: "ch4",
    title: "Ch.4 부작용 완전 정복 — 증상별 대처법",
    body: (
      <>
        <p><strong>43.5%</strong>의 복용자가 최소 1가지 부작용을 경험합니다. 하지만 대다수가 부작용에도 불구하고 계속 복용합니다. 핵심은 <strong>&quot;참는 것&quot;이 아니라 &quot;관리하는 것&quot;</strong>입니다.</p>

        <h3 className="text-lg font-semibold mt-6 mb-3">부작용 전체 지도</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-gray-100 dark:bg-gray-800"><th className="p-2 border">부작용</th><th className="p-2 border">빈도</th><th className="p-2 border">핵심 대처법</th></tr></thead>
            <tbody>
              <tr><td className="p-2 border">메스꺼움</td><td className="p-2 border">36.9%</td><td className="p-2 border">생강차, 소량 식사, 투약 시간 조절</td></tr>
              <tr><td className="p-2 border">피로/무기력</td><td className="p-2 border">16.7%</td><td className="p-2 border">금요일 투약, 충분한 수면, 단백질 체크</td></tr>
              <tr><td className="p-2 border">구토</td><td className="p-2 border">16.3%</td><td className="p-2 border">소량 식사, 부드러운 음식, 약 전환 고려</td></tr>
              <tr><td className="p-2 border">변비</td><td className="p-2 border">15.3%</td><td className="p-2 border">마그네슘, MiraLAX, 수분 2L+</td></tr>
              <tr><td className="p-2 border">설사</td><td className="p-2 border">12.6%</td><td className="p-2 border">저지방 식사, 전해질 보충</td></tr>
              <tr><td className="p-2 border">탈모</td><td className="p-2 border">드묾</td><td className="p-2 border">비오틴, 단백질, 대부분 일시적</td></tr>
              <tr><td className="p-2 border">설퍼 트림</td><td className="p-2 border">드묾</td><td className="p-2 border">소화효소, 저지방 식사, 펩토비스몰</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">임상시험 미보고 부작용</h3>
        <p className="text-sm">41만 개 Reddit 분석에서 발견: <strong>생리 불순</strong>(주기 변화, 불규칙 출혈)과 <strong>체온 변화</strong>(오한, 안면 홍조, 추위를 잘 탐).</p>

        <h3 className="text-lg font-semibold mt-6 mb-3">즉시 병원 — 경고 신호</h3>
        <div className="space-y-2">
          <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800">
            <p className="text-sm"><strong>극심한 복통이 등으로 퍼짐</strong> → 췌장염 의심. 즉시 응급실.</p>
          </div>
          <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800">
            <p className="text-sm"><strong>갑작스런 시력 저하</strong> → 시신경 손상(NAION) 의심. 즉시 안과.</p>
          </div>
          <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800">
            <p className="text-sm"><strong>자살 충동 / 심한 우울</strong> → 즉시 중단 + 정신건강 전문의. 자살예방상담전화: 1393</p>
          </div>
        </div>

        <blockquote className="border-l-4 border-blue-400 pl-4 my-4 italic text-gray-600 dark:text-gray-400">
          &quot;오젬픽은 못 견뎠어요. 마운자로로 바꿨더니 1년에 35파운드를 뺐고, 부작용은 피로뿐이에요.&quot; — u/Dawn678
        </blockquote>

        <div className="mt-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800">
          <p className="font-semibold mb-2">약사의 한마디</p>
          <p className="text-sm">부작용은 &quot;참는 것&quot;이 아니라 &quot;관리하는 것&quot;입니다. 관리해도 견딜 수 없다면 약을 바꾸세요. 포기하지 마세요.</p>
        </div>
      </>
    ),
  },
  {
    id: "ch5",
    title: "Ch.5 \"Food Noise\"의 소멸 — 뇌가 바뀌는 경험",
    body: (
      <>
        <p>GLP-1 복용자들이 가장 감동적으로 묘사하는 경험은 체중 감량이 아닙니다. <strong>Food noise가 사라지는 순간</strong>입니다.</p>

        <h3 className="text-lg font-semibold mt-6 mb-3">Food Noise는 어떤 느낌인가?</h3>
        <blockquote className="border-l-4 border-blue-400 pl-4 my-4 italic text-gray-600 dark:text-gray-400">
          &quot;ADHD가 있어서 도파민 보상을 음식으로 찾았어요. 무의식적으로 부엌에 가서 시리얼을 입에 넣고 있었어요. 일어난 것도 기억이 안 나요. 자기 뇌와 싸워서 이길 수 있는 사람이 있나요? 이 약을 먹고 나서 음식은 더 이상 제 관심사가 아니에요.&quot; — u/Salty_beach
        </blockquote>

        <h3 className="text-lg font-semibold mt-6 mb-3">과학적으로 무슨 일이 일어나는가</h3>
        <p>GLP-1 약물은 뇌의 세 영역을 조절합니다:</p>
        <ol className="list-decimal list-inside space-y-2 ml-4">
          <li><strong>시상하부</strong> — 포만감 신호 강화</li>
          <li><strong>중뇌 보상 경로(VTA, 측좌핵)</strong> — 음식 보상 기대 감소</li>
          <li><strong>전두엽</strong> — 음식 집착적 사고 감소</li>
        </ol>

        <blockquote className="border-l-4 border-blue-400 pl-4 my-4 italic text-gray-600 dark:text-gray-400">
          &quot;어릴 때부터 비만이었어요. 이 약을 먹고 나서야, 내가 저지르지도 않은 범죄에 대한 종신형에서 풀려난 것 같았어요.&quot; — u/Gretzi11a
        </blockquote>

        <h3 className="text-lg font-semibold mt-6 mb-3">알코올 갈망도 줄어든다</h3>
        <blockquote className="border-l-4 border-blue-400 pl-4 my-4 italic text-gray-600 dark:text-gray-400">
          &quot;알코올에 대한 갈망이 사라졌어요. 그리고 그것은 안도감이었어요.&quot; — u/Glindanorth (65F)
        </blockquote>
        <p>GLP-1이 알코올, 니코틴, 도박에 대한 갈망까지 줄인다는 보고가 증가하고 있으며, 중독 치료 가능성에 대한 연구가 진행 중입니다.</p>

        <h3 className="text-lg font-semibold mt-6 mb-3">주의: 너무 안 먹는 것도 위험</h3>
        <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800">
          <p className="text-sm"><strong>경고 신호:</strong> 하루 800kcal 이하, 식사를 잊는 날 반복, 주 1kg 이상 지속 감소, 음식 혐오감</p>
          <p className="text-sm mt-1"><strong>대처:</strong> 알람으로 식사 리마인더, 프로틴 쉐이크라도, 용량 줄이기 고려</p>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">끊으면 food noise는 돌아오나?</h3>
        <p>대부분의 경우 <strong>돌아옵니다.</strong> 하지만 &quot;약이 내 뇌를 리셋한 것 같다&quot;는 사례도 있습니다. 차이는 복용 기간, 습관 변화 정도, 개인 생물학에 따릅니다.</p>

        <div className="mt-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800">
          <p className="font-semibold mb-2">약사의 한마디</p>
          <p className="text-sm">&quot;왜 의지력이 없을까&quot; 자책했던 당신에게 — 그것은 의지력이 아니라 호르몬이었습니다. 약이 정상적인 식욕을 돌려주는 것일 뿐입니다.</p>
        </div>
      </>
    ),
  },
  {
    id: "ch6",
    title: "Ch.6 근손실을 막아라 — 단백질/운동 전략",
    body: (
      <>
        <p>GLP-1로 감량한 체중의 <strong>25~40%가 근육(lean mass)</strong>입니다. 근육이 빠지면 기초대사량 감소, 마른 비만, 골밀도 저하, 체력 저하로 이어집니다.</p>
        <p className="text-lg font-semibold mt-2">하지만 막을 수 있습니다: 단백질 + 근력운동.</p>

        <h3 className="text-lg font-semibold mt-6 mb-3">단백질 가이드</h3>
        <p><strong>최소 체중 1kg당 1.2g, 이상적으로 1.5~2.0g</strong></p>
        <div className="overflow-x-auto mt-3">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-gray-100 dark:bg-gray-800"><th className="p-2 border">체중</th><th className="p-2 border">최소 (1.2g/kg)</th><th className="p-2 border">이상적 (1.5g/kg)</th></tr></thead>
            <tbody>
              <tr><td className="p-2 border">60kg</td><td className="p-2 border">72g/일</td><td className="p-2 border">90g/일</td></tr>
              <tr><td className="p-2 border">70kg</td><td className="p-2 border">84g/일</td><td className="p-2 border">105g/일</td></tr>
              <tr><td className="p-2 border">80kg</td><td className="p-2 border">96g/일</td><td className="p-2 border">120g/일</td></tr>
              <tr><td className="p-2 border">90kg</td><td className="p-2 border">108g/일</td><td className="p-2 border">135g/일</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">3가지 핵심 원칙</h3>
        <ol className="list-decimal list-inside space-y-2 ml-4">
          <li><strong>매 끼니에 분배</strong> — 한 끼에 몰아 먹으면 흡수 효율 저하. 하루 3~4끼에 20~30g씩.</li>
          <li><strong>단백질을 먼저 먹기</strong> — GLP-1으로 적게 먹게 되므로, 단백질부터 먹어야 목표 달성.</li>
          <li><strong>프로틴 보충제 활용</strong> — 유청 단백질, 카제인, 식물성 단백질로 보충.</li>
        </ol>

        <h3 className="text-lg font-semibold mt-6 mb-3">근력운동: 주 3회</h3>
        <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
          <li><strong>1~2주:</strong> 맨몸운동 (스쿼트, 벽 푸시업, 런지, 플랭크)</li>
          <li><strong>3~4주:</strong> 저항 밴드 추가</li>
          <li><strong>5주~:</strong> 기구/덤벨, 점진적 과부하</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">보충제</h3>
        <div className="grid md:grid-cols-2 gap-3 mt-3">
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold text-sm mb-1">근육 보존</p>
            <p className="text-xs">크레아틴 3~5g/일, 전해질 음료, 비타민 D 1,000~2,000IU</p>
          </div>
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold text-sm mb-1">골밀도 유지</p>
            <p className="text-xs">칼슘 1,000mg/일, 비타민 D, 체중부하 운동, DEXA 연 1회</p>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800">
          <p className="font-semibold mb-2">약사의 한마디</p>
          <p className="text-sm">GLP-1으로 빠지는 것은 &quot;체중&quot;이지, &quot;건강&quot;이 빠지면 안 됩니다. 단백질 1.2g/kg + 주 3회 근력운동 — 이 두 가지가 없으면 빠진 체중의 40%가 근육입니다.</p>
        </div>
      </>
    ),
  },
  {
    id: "ch7",
    title: "Ch.7 위/식도가 약한 사람을 위한 가이드",
    body: (
      <>
        <p>GLP-1 약물은 <strong>위장 운동을 느리게</strong> 합니다. 결론부터: 많은 경우 가능하며, 오히려 개선되는 사례가 많습니다.</p>

        <h3 className="text-lg font-semibold mt-6 mb-3">GERD(위식도역류질환)와 GLP-1</h3>
        <blockquote className="border-l-4 border-blue-400 pl-4 my-4 italic text-gray-600 dark:text-gray-400">
          &quot;이전에는 GERD가 있었는데 지금은 없어요. CPAP도 혈압약도 끊었어요.&quot; — u/Born_Economist7411 (133lb 감량)
        </blockquote>
        <p>체중 감량 후 복강 내 압력 감소로 GERD가 <strong>완치 수준</strong>으로 개선된 사례가 많습니다. 하지만 초기에 악화될 수 있으므로 주의가 필요합니다.</p>

        <h3 className="text-lg font-semibold mt-6 mb-3">GERD + GLP-1 복용 전략</h3>
        <ol className="list-decimal list-inside space-y-1 ml-4 text-sm">
          <li>PPI(양성자펌프억제제) 병행</li>
          <li>소량 식사, 취침 3시간 전 식사 마감</li>
          <li>상체 높여 수면</li>
          <li>트리거 음식 회피 (튀긴 음식, 매운 음식, 탄산음료)</li>
          <li>저용량에서 오래 머물기</li>
        </ol>

        <h3 className="text-lg font-semibold mt-6 mb-3">의사결정 가이드</h3>
        <div className="space-y-2">
          <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
            <p className="text-sm"><strong>초록불 (대부분 가능):</strong> 경미한 GERD, 가끔 속쓰림, IBS-D(설사형) → 저용량 시작, PPI 병행</p>
          </div>
          <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800">
            <p className="text-sm"><strong>노란불 (의사 상의 필수):</strong> 중등도 GERD, 만성 위염, Barrett&apos;s 식도, IBS-C → 마이크로도징 고려</p>
          </div>
          <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800">
            <p className="text-sm"><strong>빨간불 (전문의 필수):</strong> 심한 위마비, 소화관 협착, 최근 GI 수술 → 전문의 승인 없이 시작 금지</p>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800">
          <p className="font-semibold mb-2">약사의 한마디</p>
          <p className="text-sm">위/식도 문제가 있다고 GLP-1을 포기할 필요는 없습니다. 핵심은 저용량 시작, 소량 식사, 위산 억제제 병행입니다.</p>
        </div>
      </>
    ),
  },
  {
    id: "ch8",
    title: "Ch.8 비용과 접근성 — 한국에서의 현실",
    body: (
      <>
        <p>GLP-1의 가장 큰 장벽은 부작용이 아닙니다. <strong>비용</strong>입니다.</p>

        <h3 className="text-lg font-semibold mt-6 mb-3">한국에서 처방 가능한 GLP-1 약물</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-gray-100 dark:bg-gray-800"><th className="p-2 border">약물</th><th className="p-2 border">적응증</th><th className="p-2 border">급여(당뇨)</th><th className="p-2 border">비급여(비만)</th></tr></thead>
            <tbody>
              <tr><td className="p-2 border">오젬픽</td><td className="p-2 border">당뇨</td><td className="p-2 border">월 3~5만원</td><td className="p-2 border">월 20~40만원</td></tr>
              <tr><td className="p-2 border">위고비</td><td className="p-2 border">비만</td><td className="p-2 border">-</td><td className="p-2 border">월 30~60만원</td></tr>
              <tr><td className="p-2 border">마운자로</td><td className="p-2 border">당뇨</td><td className="p-2 border">진행 중</td><td className="p-2 border">-</td></tr>
              <tr><td className="p-2 border">삭센다</td><td className="p-2 border">비만</td><td className="p-2 border">-</td><td className="p-2 border">월 15~30만원</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">비용 절감 팁</h3>
        <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
          <li><strong>당뇨 전단계(A1C 5.7~6.4)</strong>라면 급여 처방 가능한지 상의</li>
          <li>효과적인 <strong>최저 용량</strong> 유지로 약 사용량 줄이기</li>
          <li>유지 단계에서 <strong>투약 간격</strong> 늘리기 (7일→10일→14일)</li>
          <li>비만 클리닉 <strong>패키지 할인</strong> 확인</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">오남용우려약 지정</h3>
        <p className="text-sm">2026년, GLP-1 비만약의 오남용우려약 지정이 행정예고되었습니다. <strong>합법적 처방은 계속 가능</strong>하며, 의학적 기준을 충족하면 처방받을 수 있습니다. 온라인 불법 구매는 성분/용량/보관을 보장할 수 없어 위험합니다.</p>

        <h3 className="text-lg font-semibold mt-6 mb-3">의사에게 이렇게 말하세요</h3>
        <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900 italic text-sm">
          &quot;선생님, 체중 관리에 GLP-1 약물이 효과적이라고 들었습니다. 제 상황에서 적합한지 상담 받고 싶습니다. BMI가 ___이고, ___한 건강 문제가 있습니다.&quot;
        </div>

        <div className="mt-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800">
          <p className="font-semibold mb-2">약사의 한마디</p>
          <p className="text-sm">불법 구매, 자가 투약은 더 큰 비용(건강)을 치를 수 있습니다. 정식 처방을 받되, 급여 가능성과 비용 절감 방법을 적극적으로 의사에게 물어보세요.</p>
        </div>
      </>
    ),
  },
  {
    id: "ch9",
    title: "Ch.9 끊을 것인가, 유지할 것인가 — 장기 전략",
    body: (
      <>
        <p>&quot;평생 맞아야 하나요?&quot; — 과학적 답은 명확합니다: <strong>대부분의 경우, 어떤 형태로든 장기간 유지가 필요합니다.</strong></p>

        <h3 className="text-lg font-semibold mt-6 mb-3">연구가 보여주는 현실</h3>
        <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900 text-sm">
          <p><strong>Oxford/BMJ 대규모 연구 (9,341명):</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-2 mt-1">
            <li>중단 후 평균 월 0.4kg 속도로 반등</li>
            <li>약 20개월 후 원래 체중 복귀</li>
            <li>1년 후 5% 이상 유지 성공: 약 17%</li>
          </ul>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">3가지 장기 전략</h3>
        <div className="space-y-3 mt-3">
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold text-sm">전략 1: 유지 용량으로 평생 복용 (혈압약 모델)</p>
            <p className="text-xs mt-1">감량 후 최소 유지 용량을 찾아 계속 복용. 가장 안정적.</p>
            <p className="text-xs italic mt-1">&quot;8개월 만에 감량 완료, 격주 투약으로 4년째 유지.&quot; — u/White_Sands1</p>
          </div>
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold text-sm">전략 2: 점진적 감량 → 중단 (습관 자립 모델)</p>
            <p className="text-xs mt-1">최소 2년 유지 후, 4~8주에 걸쳐 점진적 감량. 습관 정착이 전제.</p>
            <p className="text-xs italic mt-1">&quot;588일 연속 칼로리 추적 중. 오젬픽이 시간을 벌어줬어요.&quot; — u/AceTrainerDerek1018</p>
          </div>
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold text-sm">전략 3: 사이클링 (간헐적 복용)</p>
            <p className="text-xs mt-1">6개월 on / 3개월 off 반복. 비용 절감 + 내성 방지.</p>
            <p className="text-xs italic mt-1">&quot;3년간 사이클링. 쉬는 동안 체중이 안 돌아와요.&quot; — u/Successful_Might8125</p>
          </div>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">어떤 전략이 나에게 맞나?</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-gray-100 dark:bg-gray-800"><th className="p-2 border">상황</th><th className="p-2 border">추천 전략</th></tr></thead>
            <tbody>
              <tr><td className="p-2 border">당뇨 + 비만</td><td className="p-2 border">전략 1 (평생 유지)</td></tr>
              <tr><td className="p-2 border">BMI 35+ 심한 비만</td><td className="p-2 border">전략 1 또는 3</td></tr>
              <tr><td className="p-2 border">BMI 27~30 중등도</td><td className="p-2 border">전략 2 또는 3</td></tr>
              <tr><td className="p-2 border">비용이 큰 부담</td><td className="p-2 border">전략 3 (사이클링)</td></tr>
              <tr><td className="p-2 border">습관 변화에 자신</td><td className="p-2 border">전략 2 (점진적 중단)</td></tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800">
          <p className="font-semibold mb-2">약사의 한마디</p>
          <p className="text-sm">혈압약을 평생 먹듯, 비만도 장기 관리가 필요한 만성질환입니다. 부끄러워하지 마세요. 자신에게 맞는 전략을 찾는 것이 가장 중요합니다.</p>
        </div>
      </>
    ),
  },
  {
    id: "ch10",
    title: "Ch.10 약 너머의 것 — 습관이 약을 대체할 때",
    body: (
      <>
        <p>GLP-1이 준 가장 큰 선물은 체중 감량이 아닙니다. <strong>&quot;Food noise가 없는 시간&quot;</strong>입니다. 이 조용한 시간에 무엇을 심느냐가 당신의 미래를 결정합니다.</p>

        <h3 className="text-lg font-semibold mt-6 mb-3">만들어야 할 5가지 습관</h3>
        <ol className="list-decimal list-inside space-y-3 ml-4">
          <li>
            <strong>식사 구조화</strong> — 하루 3끼 + 간식 시간을 정하세요. 알람 설정, 칼로리/단백질 목표, 식사 일지.
            <p className="text-xs italic ml-6 mt-1">&quot;588일 연속 칼로리 추적 중. 평생 할 거예요.&quot; — u/AceTrainerDerek1018</p>
          </li>
          <li><strong>단백질 우선 식사</strong> — 매끼 단백질을 먼저. 포만감 유지, 근육 보존, 혈당 안정.</li>
          <li><strong>움직임 일상화</strong> — 근력운동 주 3회 + 매일 걷기 30분. &quot;무브먼트 스낵&quot;으로 일상에 녹이기.</li>
          <li><strong>감정과 식사 분리</strong> — &quot;진짜 배고픈가, 감정이 먹으라고 하는 건가?&quot; 5초 멈추고 자문.</li>
          <li><strong>체중 모니터링</strong> — 주 1회, 같은 조건으로 측정. 4주 연속 상승 추세면 경고 신호.</li>
        </ol>

        <h3 className="text-lg font-semibold mt-6 mb-3">비만은 만성질환 — 낙인 없이 관리하기</h3>
        <blockquote className="border-l-4 border-blue-400 pl-4 my-4 italic text-gray-600 dark:text-gray-400">
          &quot;우울증 환자에게 '그냥 행복해지면 되잖아'라고 하지 않듯이, 비만 환자에게 '그냥 덜 먹으면 되잖아'라고 해서는 안 됩니다.&quot; — Reddit (2,600+ 공감)
        </blockquote>

        <h3 className="text-lg font-semibold mt-6 mb-3">주변의 시선에 대처하는 법</h3>
        <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
          <li><strong>간단하게:</strong> &quot;네, 의사 처방받아서 복용 중이에요.&quot;</li>
          <li><strong>비유로:</strong> &quot;혈압 높으면 혈압약 먹잖아요. 그것과 같아요.&quot;</li>
          <li><strong>경계 설정:</strong> &quot;제 건강 문제는 제가 관리하고 있어요.&quot;</li>
        </ul>

        <p className="mt-6">어떤 결정을 하시든 — 시작하든, 계속하든, 끊든, 시작하지 않든 — <strong>당신의 몸, 당신의 건강, 당신의 결정.</strong></p>

        <div className="mt-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800">
          <p className="font-semibold mb-2">약사의 한마디</p>
          <p className="text-sm">GLP-1은 &quot;마법의 약&quot;이 아니라 &quot;시간을 버는 도구&quot;입니다. 약이 food noise를 잠재워주는 동안, 건강한 습관을 심으세요. 그 시간을 낭비하지 마세요.</p>
        </div>
      </>
    ),
  },
  {
    id: "bonus1",
    title: "보너스 1: 부작용 119 대처 매뉴얼",
    body: (
      <>
        <p className="text-lg font-semibold mb-4">인쇄해서 냉장고에 붙이세요!</p>

        <div className="space-y-4">
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold">메스꺼움 (투약 후 12~48시간)</p>
            <p className="text-sm">소량씩 자주 먹기 / 생강차/사탕 / 투약을 취침 전으로 / 기름진/매운 음식 피하기 / 심할 때: 온단세트론(Zofran) 요청. <strong>보통 2~4주 후 적응.</strong></p>
          </div>
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold">변비 (지속적)</p>
            <p className="text-sm">마그네슘 매일 / MiraLAX 반 뚜껑 / 차전자피 보충 / 프룬 3~4개 / 수분 2L+. <strong>2주 이상 변을 못 보면 의료진.</strong></p>
          </div>
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold">피로 (투약 후 1~3일)</p>
            <p className="text-sm">금요일 투약 / 수면 7시간+ / 단백질/비타민 B 체크 / 수분. <strong>2~3개월 후 개선.</strong></p>
          </div>
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold">탈모 (5~10개월 차)</p>
            <p className="text-sm">비오틴 5,000~10,000mcg / 철분 확인 / 단백질 충분히. <strong>대부분 일시적, 자연 회복.</strong></p>
          </div>
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold">설퍼 트림 (주로 마운자로)</p>
            <p className="text-sm">소화효소 식전 복용 / 기름진 음식 피하기 / 식사량 줄이기 / 펩토비스몰.</p>
          </div>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">즉시 병원 가세요</h3>
        <div className="space-y-2">
          <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 text-sm">
            <p><strong>심한 복통이 등으로 퍼짐</strong> → 췌장염 의심 → 응급실</p>
            <p><strong>갑작스런 시력 저하</strong> → 시신경 손상 → 안과</p>
            <p><strong>자살 충동</strong> → 즉시 중단 + 전문의 (1393)</p>
            <p><strong>극심한 구토 + 소변 감소</strong> → 탈수/신부전 → 응급실</p>
          </div>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">투약 후 1~3일 관리 루틴</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-gray-100 dark:bg-gray-800"><th className="p-2 border">시기</th><th className="p-2 border">관리 포인트</th></tr></thead>
            <tbody>
              <tr><td className="p-2 border">투약 당일</td><td className="p-2 border">소량 단백질 식사, 수분, 무리한 활동 피하기, 일찍 취침</td></tr>
              <tr><td className="p-2 border">다음날</td><td className="p-2 border">컨디션 체크, 생강차, 가벼운 산책 OK</td></tr>
              <tr><td className="p-2 border">2~3일 후</td><td className="p-2 border">대부분 정상 복귀, 운동 재개, 단백질 채우기 집중</td></tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: "bonus2",
    title: "보너스 2: GLP-1 식단 가이드",
    body: (
      <>
        <h3 className="text-lg font-semibold mt-4 mb-3">피해야 할 음식</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-gray-100 dark:bg-gray-800"><th className="p-2 border">음식</th><th className="p-2 border">이유</th><th className="p-2 border">대안</th></tr></thead>
            <tbody>
              <tr><td className="p-2 border">튀긴 음식</td><td className="p-2 border">메스꺼움/설퍼트림 유발</td><td className="p-2 border">에어프라이어, 오븐 구이</td></tr>
              <tr><td className="p-2 border">탄산음료</td><td className="p-2 border">위 팽만, 역류 악화</td><td className="p-2 border">탄산수(무가당), 물</td></tr>
              <tr><td className="p-2 border">과도한 설탕</td><td className="p-2 border">혈당 급등</td><td className="p-2 border">과일, 다크 초콜릿 소량</td></tr>
              <tr><td className="p-2 border">과식</td><td className="p-2 border">구토, 극심한 불편감</td><td className="p-2 border">소량 식사, 천천히</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">꼭 먹어야 하는 것</h3>
        <div className="grid md:grid-cols-3 gap-3 mt-3">
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold text-sm">단백질 (최우선)</p>
            <p className="text-xs">체중 1kg당 1.2~1.5g. 매끼 분배. 닭가슴살, 계란, 두부, 그릭 요거트</p>
          </div>
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold text-sm">식이섬유</p>
            <p className="text-xs">하루 25~30g. 변비 예방. 채소, 과일, 통곡물, 차전자피</p>
          </div>
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold text-sm">수분</p>
            <p className="text-xs">하루 2L+. 전해질 추가. 탈수 = 변비 + 두통 + 피로</p>
          </div>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">1일 식단 예시</h3>
        <div className="space-y-3">
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold text-sm">A. 1,200kcal (적극 감량기) — 단백질 100g</p>
            <p className="text-xs">아침: 계란 2개 스크램블 + 그릭 요거트 (300kcal, 25g)</p>
            <p className="text-xs">점심: 닭가슴살 샐러드 + 현미밥 1/3 (400kcal, 30g)</p>
            <p className="text-xs">간식: 프로틴 쉐이크 반 스쿱 (100kcal, 15g)</p>
            <p className="text-xs">저녁: 연어구이 + 브로콜리 + 고구마 (400kcal, 30g)</p>
          </div>
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold text-sm">B. 1,500kcal (일반 감량기) — 단백질 120g</p>
            <p className="text-xs">아침: 오트밀 + 유청 단백질 + 삶은 계란 (350kcal, 30g)</p>
            <p className="text-xs">점심: 소고기 불고기 + 현미밥 + 나물 (450kcal, 35g)</p>
            <p className="text-xs">간식: 코티지 치즈 + 견과류 (200kcal, 20g)</p>
            <p className="text-xs">저녁: 두부 스테이크 + 채소 볶음 + 잡곡밥 (500kcal, 35g)</p>
          </div>
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold text-sm">C. 1,800kcal (유지기) — 단백질 135g</p>
            <p className="text-xs">아침: 통밀 토스트 + 아보카도 + 계란 2개 + 그릭 요거트 (400kcal, 30g)</p>
            <p className="text-xs">점심: 닭가슴살 덮밥 + 채소 반찬 + 된장찌개 (550kcal, 40g)</p>
            <p className="text-xs">간식: 프로틴 쉐이크 + 바나나 (250kcal, 25g)</p>
            <p className="text-xs">저녁: 삼치구이 + 잡곡밥 + 샐러드 + 두부 된장국 (600kcal, 40g)</p>
          </div>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">외식 가이드</h3>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold text-sm">한식</p>
            <p className="text-xs">제육볶음(단백질 높음), 순두부찌개, 생선구이 정식. 삼겹살(소량만). 떡볶이/라면 단독 피하기.</p>
          </div>
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold text-sm">일식</p>
            <p className="text-xs">사시미/회(최고), 연어덮밥(밥 줄이기). 돈가스(튀김) 피하기.</p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "bonus3",
    title: "보너스 3: 오젬픽 vs 마운자로 vs 위고비 한 장 비교표",
    body: (
      <>
        <h3 className="text-lg font-semibold mt-4 mb-3">전체 약물 비교표</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-gray-100 dark:bg-gray-800"><th className="p-2 border">항목</th><th className="p-2 border">오젬픽</th><th className="p-2 border">위고비</th><th className="p-2 border">마운자로</th><th className="p-2 border">젭바운드</th><th className="p-2 border">삭센다</th><th className="p-2 border">리벨서스</th></tr></thead>
            <tbody>
              <tr><td className="p-2 border">성분</td><td className="p-2 border">세마글루타이드</td><td className="p-2 border">세마글루타이드</td><td className="p-2 border">티르제파타이드</td><td className="p-2 border">티르제파타이드</td><td className="p-2 border">리라글루타이드</td><td className="p-2 border">세마글루타이드</td></tr>
              <tr><td className="p-2 border">작용</td><td className="p-2 border">GLP-1</td><td className="p-2 border">GLP-1</td><td className="p-2 border">GLP-1+GIP</td><td className="p-2 border">GLP-1+GIP</td><td className="p-2 border">GLP-1</td><td className="p-2 border">GLP-1</td></tr>
              <tr><td className="p-2 border">적응증</td><td className="p-2 border">당뇨</td><td className="p-2 border">비만</td><td className="p-2 border">당뇨</td><td className="p-2 border">비만</td><td className="p-2 border">비만</td><td className="p-2 border">당뇨</td></tr>
              <tr><td className="p-2 border">투여</td><td className="p-2 border">주1회 주사</td><td className="p-2 border">주1회 주사</td><td className="p-2 border">주1회 주사</td><td className="p-2 border">주1회 주사</td><td className="p-2 border">매일 주사</td><td className="p-2 border">매일 경구</td></tr>
              <tr><td className="p-2 border">평균 감량</td><td className="p-2 border">~15%</td><td className="p-2 border">15-17%</td><td className="p-2 border">20-25%</td><td className="p-2 border">20-25%</td><td className="p-2 border">~8%</td><td className="p-2 border">~10%</td></tr>
              <tr><td className="p-2 border">Food Noise</td><td className="p-2 border">중</td><td className="p-2 border">중</td><td className="p-2 border">강</td><td className="p-2 border">강</td><td className="p-2 border">약-중</td><td className="p-2 border">약-중</td></tr>
              <tr><td className="p-2 border">주요 부작용</td><td className="p-2 border">메스꺼움</td><td className="p-2 border">메스꺼움</td><td className="p-2 border">설퍼트림</td><td className="p-2 border">설퍼트림</td><td className="p-2 border">메스꺼움</td><td className="p-2 border">메스꺼움</td></tr>
              <tr><td className="p-2 border">한국 처방</td><td className="p-2 border">가능</td><td className="p-2 border">가능</td><td className="p-2 border">진행중</td><td className="p-2 border">미정</td><td className="p-2 border">가능</td><td className="p-2 border">가능</td></tr>
              <tr><td className="p-2 border">보험 급여</td><td className="p-2 border">당뇨시</td><td className="p-2 border">비급여</td><td className="p-2 border">당뇨시</td><td className="p-2 border">비급여</td><td className="p-2 border">비급여</td><td className="p-2 border">당뇨시</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">나에게 맞는 약 — 의사결정 가이드</h3>
        <ol className="list-decimal list-inside space-y-2 ml-4 text-sm">
          <li><strong>주사가 무서운가?</strong> → 리벨서스(경구용) 또는 차세대 경구용 대기</li>
          <li><strong>당뇨가 있는가?</strong> → 보험 급여 가능. 오젬픽 또는 마운자로</li>
          <li><strong>비용이 중요한가?</strong> → 보험 적용 가능한 약 우선</li>
          <li><strong>강력한 효과?</strong> → 마운자로/젭바운드 (GLP-1+GIP 이중)</li>
          <li><strong>한 약이 안 맞았다면?</strong> → 세마글루타이드 ↔ 티르제파타이드 전환</li>
        </ol>

        <h3 className="text-lg font-semibold mt-6 mb-3">핵심 차이 요약</h3>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold text-sm">세마글루타이드 (오젬픽/위고비)</p>
            <p className="text-xs">검증 기간 더 김, 심혈관 보호 입증(SELECT 연구), 한국 접근성 좋음</p>
          </div>
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold text-sm">티르제파타이드 (마운자로/젭바운드)</p>
            <p className="text-xs">감량 효과 더 큼(20-25%), Food noise 억제 더 강함, 한국 접근성 확대 중</p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "bonus4",
    title: "보너스 4: 약물 상호작용 체크리스트",
    body: (
      <>
        <p className="text-sm mb-4"><em>현재 복용 중인 약이 있다면 반드시 의사/약사에게 알려주세요.</em></p>

        <div className="space-y-3">
          <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800">
            <p className="font-semibold text-sm">주의 필요</p>
            <ul className="text-xs space-y-1 mt-1">
              <li><strong>인슐린/설포닐우레아:</strong> 저혈당 위험 증가 → 용량 조절 필요</li>
              <li><strong>혈압약 (ACE/ARB):</strong> 체중 감량 → 저혈압 위험 → 어지러움/실신 주의</li>
              <li><strong>이뇨제:</strong> 탈수 위험 겹침 → 수분/전해질 특히 중요</li>
              <li><strong>레보티록신:</strong> 흡수 영향 → TSH 정기 확인</li>
              <li><strong>와파린:</strong> INR 변동 가능 → 자주 모니터링</li>
              <li><strong>경구 피임약:</strong> 흡수 영향 → 추가 피임법 병행 권장</li>
              <li><strong>항정신병약:</strong> 체중 증가 부작용 → GLP-1 효과와 상충 가능</li>
            </ul>
          </div>
          <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
            <p className="font-semibold text-sm">안전하게 병용 가능</p>
            <ul className="text-xs space-y-1 mt-1">
              <li><strong>메트포르민:</strong> 상호작용 적음, 시너지 효과</li>
              <li><strong>SGLT2 억제제:</strong> 탈수만 주의</li>
              <li><strong>PPI/H2 차단제:</strong> 안전, 오히려 역류 관리에 도움</li>
              <li><strong>SSRI/SNRI:</strong> 직접 상호작용 적음, 정신건강 모니터링</li>
            </ul>
          </div>
          <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
            <p className="font-semibold text-sm">적극 권장 영양제</p>
            <ul className="text-xs space-y-1 mt-1">
              <li>마그네슘(변비), 비타민 D+칼슘(골밀도), 비오틴(탈모), 전해질(탈수)</li>
              <li>크레아틴(근력), 프로틴(근육), 프로바이오틱스(장건강), 오메가3(염증)</li>
            </ul>
          </div>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">의사/약사에게 보여줄 체크리스트</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-gray-100 dark:bg-gray-800"><th className="p-2 border">확인 항목</th><th className="p-2 border">해당 여부</th></tr></thead>
            <tbody>
              <tr><td className="p-2 border">인슐린 또는 설포닐우레아 복용 중</td><td className="p-2 border text-center">-</td></tr>
              <tr><td className="p-2 border">혈압약 복용 중</td><td className="p-2 border text-center">-</td></tr>
              <tr><td className="p-2 border">갑상선약(레보티록신) 복용 중</td><td className="p-2 border text-center">-</td></tr>
              <tr><td className="p-2 border">와파린 등 혈전약 복용 중</td><td className="p-2 border text-center">-</td></tr>
              <tr><td className="p-2 border">항우울제/항불안제 복용 중</td><td className="p-2 border text-center">-</td></tr>
              <tr><td className="p-2 border">경구 피임약 복용 중</td><td className="p-2 border text-center">-</td></tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: "bonus5",
    title: "보너스 5: 중단 후 체중 유지 12주 로드맵",
    body: (
      <>
        <p className="text-lg font-semibold mb-4">GLP-1을 점진적으로 줄이거나 중단한 후, 요요 없이 체중을 안착시키는 로드맵</p>

        <h3 className="text-lg font-semibold mt-4 mb-3">1~4주차: 용량 점진적 감소</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-gray-100 dark:bg-gray-800"><th className="p-2 border">주차</th><th className="p-2 border">용량</th><th className="p-2 border">핵심 액션</th></tr></thead>
            <tbody>
              <tr><td className="p-2 border">1~2주</td><td className="p-2 border">현재의 50%</td><td className="p-2 border">칼로리 추적 시작, 단백질 1.5g/kg</td></tr>
              <tr><td className="p-2 border">3~4주</td><td className="p-2 border">현재의 25%</td><td className="p-2 border">감정적 식사 인식 훈련, 근력운동 강화</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mt-2">1~2kg 증가는 정상(수분). 3kg 이상이면 식습관 재점검.</p>

        <h3 className="text-lg font-semibold mt-6 mb-3">5~8주차: 습관 강화기</h3>
        <p className="text-sm">5~6주: 격주 투약 전환. 이 시기가 가장 어렵습니다 — food noise 복귀 시작.</p>
        <p className="text-sm">7~8주: 의사 상의 후 완전 중단.</p>
        <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 mt-2">
          <p className="text-sm"><strong>대처법:</strong> 물 한 잔 → 5분 대기 → 단백질 간식 → 5분 산책 → &quot;이것은 food noise다&quot; 인식</p>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">9~12주차: 자립기</h3>
        <p className="text-sm">약의 잔존 효과가 완전 소멸. 습관의 힘으로 버틸 수 있는지 확인하는 진짜 시험.</p>

        <h3 className="text-lg font-semibold mt-6 mb-3">12주 후 평가</h3>
        <div className="space-y-2">
          <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
            <p className="text-sm"><strong>유지 성공 (3% 이내):</strong> 습관이 약을 대체했습니다! 모니터링 유지.</p>
          </div>
          <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800">
            <p className="text-sm"><strong>부분 반등 (3~5%):</strong> 식습관/운동 재점검. 2주간 엄격 관리 시도.</p>
          </div>
          <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800">
            <p className="text-sm"><strong>상당한 반등 (5%+):</strong> 저용량 GLP-1 재시작 권장. 자책하지 마세요 — 호르몬의 문제입니다.</p>
          </div>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">반등 경고 신호 5가지</h3>
        <ol className="list-decimal list-inside space-y-1 ml-4 text-sm">
          <li>Food noise 급격 복귀 — 하루 종일 음식 생각</li>
          <li>야간 간식 재개 — 밤에 냉장고 앞에 서 있음</li>
          <li>운동 중단 — &quot;오늘은 쉬자&quot;가 2주 이상</li>
          <li>칼로리 추적 중단 — 앱을 안 열게 됨</li>
          <li>체중 4주 연속 상승 추세</li>
        </ol>

        <p className="mt-4 text-sm font-semibold">GLP-1 재시작은 실패가 아닙니다. 만성질환 관리의 일부입니다.</p>

        <blockquote className="border-l-4 border-blue-400 pl-4 my-4 italic text-gray-600 dark:text-gray-400">
          체중 관리는 마라톤입니다. GLP-1이 도와준 시간 동안 심은 습관이 당신의 뿌리가 됩니다. 뿌리가 깊으면, 바람(food noise)이 불어도 쓰러지지 않습니다.
        </blockquote>
      </>
    ),
  },
];

const updateLogs: UpdateLog[] = [
  {
    version: 1,
    date: "2026-09-06",
    changes: [
      "초판 발행: Reddit 41만 게시글 분석 + BMJ/NEJM 연구 기반",
      "10가지 핵심 챕터 + 보너스 5개 완성",
      "한국 처방/비용/규제 현황 반영",
    ],
  },
];

export default function Glp1GuideReadPage() {
  return (
    <GuideBook
      bookId="glp1-guide"
      title="약사가 알려주는 GLP-1 비만약 완전 가이드"
      emoji="💊"
      subtitle="41만 명의 실제 경험 + 최신 의학 연구 기반"
      topItems={topItems}
      sections={sections}
      updateLogs={updateLogs}
      currentVersion={1}
    />
  );
}
