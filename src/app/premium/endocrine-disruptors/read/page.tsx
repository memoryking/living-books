import GuideBook from "@/components/GuideBook";
import type { TopItem, ContentSection, UpdateLog } from "@/components/GuideBook";

export const metadata = {
  title: "생활 속 환경호르몬과 질병 — 본문 | 살아있는 정보책",
  description: "BPA Free의 함정부터 PFAS, 미세플라스틱까지. 과학 기반 환경호르몬 가이드 전문.",
};

const topItems: TopItem[] = [
  {
    number: 1,
    title: "전자레인지에 플라스틱 넣지 마라",
    oneLiner: "열 + 플라스틱 = 환경호르몬 대량 용출. 유리나 세라믹으로.",
    description: "전자레인지의 열은 플라스틱에서 BPA/BPS/프탈레이트 용출을 수십 배 증가시킵니다. 음식을 유리나 세라믹 용기에 옮겨서 데우세요. 가장 쉽고 가장 효과 큰 변화입니다.",
    situation: "남은 음식을 플라스틱 용기째 전자레인지에 넣으려 할 때",
    action: "유리 용기에 옮겨 담은 후 전자레인지에 넣으세요. 30초 더 걸리지만 노출은 수십 배 줄어듭니다.",
    mission: "오늘부터 전자레인지에 플라스틱을 넣지 않는 규칙을 시작하세요.",
  },
  {
    number: 2,
    title: "'BPA Free'를 믿지 마라",
    oneLiner: "BPS, BPF 등 대체물질은 BPA만큼 나쁘다. 라벨이 아니라 재질을 봐라.",
    description: "BPA가 금지되자 BPS, BPF 등 구조가 거의 동일한 대체물질이 투입되었습니다. 연구에 따르면 이들도 BPA만큼 내분비를 교란합니다. 'BPA Free'는 안전의 증거가 아닙니다.",
    situation: "마트에서 'BPA Free' 라벨을 보고 안심하려 할 때",
    action: "라벨 대신 재질을 확인하세요. 가장 좋은 것은 유리, 스테인리스, 세라믹. 플라스틱이면 5번(PP)이 가장 안전합니다.",
    mission: "집에 있는 플라스틱 용기 3개의 바닥 번호를 확인하세요.",
  },
  {
    number: 3,
    title: "'Fragrance'가 보이면 의심하라",
    oneLiner: "향료 뒤에 프탈레이트가 숨어있다. Fragrance-free를 선택하라.",
    description: "화장품 성분표의 'Fragrance' 또는 'Parfum'은 영업비밀로 보호되어 구체적 성분을 공개하지 않아도 됩니다. 그 안에 프탈레이트가 포함되어 있을 수 있습니다.",
    situation: "샴푸/바디워시/로션을 살 때 좋은 향기에 끌릴 때",
    action: "성분표에서 'Fragrance'를 찾으세요. 있으면 무향(Fragrance-free) 제품으로 교체를 고려하세요.",
    mission: "욕실 제품 3개의 성분표에서 'Fragrance'가 있는지 확인하세요.",
  },
  {
    number: 4,
    title: "물병을 바꿔라",
    oneLiner: "플라스틱 생수병 → 스테인리스 또는 유리. 매일 쓰니까 매일 누적.",
    description: "플라스틱 생수병은 열, 자외선, 시간에 따라 미세플라스틱과 BPA/BPS를 방출합니다. 매일 쓰는 물병을 스테인리스나 유리로 바꾸면 일일 노출이 크게 줄어듭니다.",
    situation: "편의점에서 생수를 사려 할 때",
    action: "스테인리스 또는 유리 물병을 하나 구입해서 항상 휴대하세요. 한 번 사면 수년 사용 가능합니다.",
    mission: "이번 주부터 스테인리스/유리 물병을 사용하세요.",
  },
  {
    number: 5,
    title: "논스틱 팬, 코팅 확인하라",
    oneLiner: "코팅 벗겨진 팬은 PFAS 노출원. 스테인리스/주철이 평생 간다.",
    description: "논스틱(테플론) 코팅에는 PFAS가 사용됩니다. 코팅이 벗겨지면 음식에 직접 들어갑니다. 스테인리스, 주철, 세라믹 팬은 코팅 걱정 없이 평생 사용할 수 있습니다.",
    situation: "코팅이 벗겨진 프라이팬으로 요리하려 할 때",
    action: "코팅이 벗겨진 논스틱 팬은 즉시 교체하세요. 스테인리스나 주철을 추천합니다.",
    mission: "주방 팬/냄비의 코팅 상태를 확인하세요. 벗겨진 것이 있는지.",
  },
  {
    number: 6,
    title: "아이 용품은 입에 닿는 것부터",
    oneLiner: "젖병, 식기, 치발기 → 유리, PPSU, 천연 고무. 입이 최우선.",
    description: "아이는 체중 대비 노출량이 크고, 발달 중인 내분비계가 더 취약합니다. 입에 닿는 용품(젖병, 식기, 치발기)을 먼저 안전한 소재로 교체하세요.",
    situation: "아이 용품을 살 때 어떤 소재를 골라야 할지 모를 때",
    action: "젖병은 유리/PPSU, 식기는 스테인리스/세라믹, 치발기는 천연 고무를 선택하세요.",
    mission: "아이가 입에 넣는 용품 중 플라스틱 비율을 확인하세요.",
  },
  {
    number: 7,
    title: "가공식품을 줄여라",
    oneLiner: "음식 자체보다 포장이 문제. 신선 재료로 직접 요리하면 노출 급감.",
    description: "가공식품의 환경호르몬은 음식 자체가 아니라 포장재(플라스틱, 캔 내부 코팅)에서 옵니다. 신선 재료로 직접 요리하는 것만으로도 포장재 노출을 크게 줄일 수 있습니다.",
    situation: "편의점 도시락이나 캔 식품을 자주 먹을 때",
    action: "주 3회라도 신선 재료로 직접 요리해보세요. 포장재 접촉이 줄어듭니다.",
    mission: "이번 주 가공식품 3개를 원재료로 교체해보세요.",
  },
  {
    number: 8,
    title: "환기하라",
    oneLiner: "하루 2~3번, 10분. 비용 제로, 효과 최대.",
    description: "실내 먼지에는 난연제(PBDE), 프탈레이트, PFAS 등 환경호르몬이 축적됩니다. 환기만으로 실내 공기질과 먼지 속 화학물질 농도를 크게 낮출 수 있습니다.",
    situation: "겨울에 창문 닫고 생활할 때, 리모델링/새 가구 후",
    action: "하루 2~3번, 10분씩 맞바람이 통하도록 창문을 열어두세요.",
    mission: "오늘부터 아침/저녁 10분씩 환기하세요.",
  },
  {
    number: 9,
    title: "신발은 현관에서",
    oneLiner: "외부 농약, 납, 화학물질이 먼지를 타고 집 안으로 들어온다.",
    description: "바깥의 농약, 납, 산업 화학물질이 신발 밑창에 묻어 집 안으로 들어오고, 카펫과 바닥에 축적됩니다. 현관에서 신발을 벗는 것만으로 상당량의 유입을 차단할 수 있습니다.",
    situation: "집에 들어오면서 신발을 신고 다닐 때",
    action: "현관에 신발장을 두고 반드시 벗으세요. 손님에게도 요청하세요.",
    mission: "오늘부터 현관에서 신발을 벗는 습관을 시작하세요.",
  },
  {
    number: 10,
    title: "걱정은 20%만",
    oneLiner: "할 수 있는 것에 집중하고, 나머지는 놓아라. 스트레스가 더 해롭다.",
    description: "모든 것을 완벽하게 바꿀 수 없습니다. 스트레스 자체가 코르티솔을 올리고 면역을 약화시킵니다. 20%의 변화가 80%의 노출을 줄입니다. 할 수 있는 것에 집중하고 나머지는 놓으세요.",
    situation: "환경호르몬 정보를 보고 불안감이 밀려올 때",
    action: "'내가 바꿀 수 있는 것'과 '바꿀 수 없는 것' 목록을 적어보세요. 바꿀 수 있는 것만 하세요.",
    mission: "이 가이드에서 가장 쉬운 변화 1가지를 오늘 실행하세요.",
  },
];

const sections: ContentSection[] = [
  {
    id: "preface",
    title: "서문 — 'BPA Free'라고 안전한 거 아니야?",
    body: (
      <>
        <p>마트에서 아이 물병을 고릅니다. &quot;BPA Free.&quot; 안심하고 장바구니에 넣습니다. 그런데 그 물병에는 BPS가 들어있습니다. BPA를 대체한 물질인데, 연구에 따르면 BPA만큼이나 나쁩니다.</p>
        <blockquote className="border-l-4 border-emerald-400 pl-4 my-4 italic text-gray-600 dark:text-gray-400">&quot;BPA가 사라졌지만 BPB가 대체했다. 연구는 있지만 법이 느려서 따라잡지 못한다.&quot; — Reddit u/jamaicanmecray-z</blockquote>
        <p>이 가이드는 NIH, EPA, 학술 논문, 그리고 Reddit 커뮤니티의 실제 경험을 교차 검증해서 만들었습니다.</p>
        <p className="text-lg font-semibold mt-4">핵심: 환경호르몬은 진짜입니다. 하지만 20%만 바꾸면 80%의 노출을 줄일 수 있습니다.</p>
      </>
    ),
  },
  {
    id: "ch1",
    title: "Ch.1 환경호르몬이란 무엇인가",
    body: (
      <>
        <p>환경호르몬(EDC)은 <strong>가짜 열쇠</strong>입니다. 진짜 호르몬과 모양이 비슷해서 수용체 자물쇠에 끼워집니다. 모방(가짜 신호 전달), 차단(진짜 호르몬 방해), 교란(호르몬 생성/대사 방해)을 합니다.</p>
        <h3 className="text-lg font-semibold mt-6 mb-3">NIH 공식 환경호르몬 9가지</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-gray-100 dark:bg-gray-800"><th className="p-2 border">물질</th><th className="p-2 border">어디에 있는가</th></tr></thead>
            <tbody>
              <tr><td className="p-2 border font-semibold">BPA</td><td className="p-2 border">플라스틱 용기, 캔 내부 코팅, 영수증</td></tr>
              <tr><td className="p-2 border font-semibold">프탈레이트</td><td className="p-2 border">샴푸, 향수, 장난감, 식품 포장</td></tr>
              <tr><td className="p-2 border font-semibold">PFAS</td><td className="p-2 border">논스틱 팬, 방수 의류, 소방 거품</td></tr>
              <tr><td className="p-2 border font-semibold">다이옥신</td><td className="p-2 border">제초제 부산물, 쓰레기 소각</td></tr>
              <tr><td className="p-2 border font-semibold">PBDE</td><td className="p-2 border">가구 난연제, 카펫</td></tr>
              <tr><td className="p-2 border font-semibold">트리클로산</td><td className="p-2 border">항균 비누, 바디워시</td></tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <p className="font-semibold mb-2">실천 과제</p>
          <p className="text-sm">집에서 환경호르몬 노출원 3가지를 찾아보세요: 전자레인지용 플라스틱, 샴푸의 Fragrance, 벗겨진 논스틱 팬.</p>
        </div>
      </>
    ),
  },
  {
    id: "ch2",
    title: "Ch.2 BPA/BPS/프탈레이트 — BPA Free의 함정",
    body: (
      <>
        <p>BPA Free ≠ 안전. BPS/BPF 대체물질은 BPA와 구조가 거의 동일하고 연구 결과도 비슷합니다. 프탈레이트는 &quot;Fragrance&quot; 뒤에 숨어 샴푸, 패스트푸드, 장난감에 광범위하게 존재합니다.</p>
        <h3 className="text-lg font-semibold mt-6 mb-3">플라스틱 번호 안전도</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-gray-100 dark:bg-gray-800"><th className="p-2 border">번호</th><th className="p-2 border">종류</th><th className="p-2 border">안전도</th></tr></thead>
            <tbody>
              <tr><td className="p-2 border">2 (HDPE)</td><td className="p-2 border">우유병, 세제통</td><td className="p-2 border">✅ 비교적 안전</td></tr>
              <tr><td className="p-2 border">5 (PP)</td><td className="p-2 border">밀폐용기</td><td className="p-2 border">✅ 가장 안전</td></tr>
              <tr><td className="p-2 border">3 (PVC)</td><td className="p-2 border">랩, 바닥재</td><td className="p-2 border">❌ 피해야 함</td></tr>
              <tr><td className="p-2 border">6 (PS)</td><td className="p-2 border">스티로폼</td><td className="p-2 border">❌ 피해야 함</td></tr>
              <tr><td className="p-2 border">7 (기타)</td><td className="p-2 border">복합재</td><td className="p-2 border">⚠️ BPA 가능</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-lg font-semibold mt-6 mb-3">가장 쉬운 변화 4가지</h3>
        <ol className="list-decimal list-inside space-y-1 ml-4">
          <li>전자레인지에 플라스틱 넣지 않기</li>
          <li>뜨거운 음료를 플라스틱 컵에 담지 않기</li>
          <li>&quot;Fragrance&quot; 들어간 제품 줄이기</li>
          <li>영수증 만지지 않기 (감열지에 BPA 코팅)</li>
        </ol>
        <div className="mt-6 p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <p className="font-semibold mb-2">실천 과제</p>
          <p className="text-sm">화장실 제품 3개의 성분표에서 &quot;Fragrance&quot;를 찾아보세요.</p>
        </div>
      </>
    ),
  },
  {
    id: "ch3",
    title: "Ch.3 PFAS — 영원한 화학물질",
    body: (
      <>
        <p><strong>PFAS(과불화화합물)</strong>는 &quot;영원한 화학물질(Forever Chemicals)&quot;이라 불립니다. 자연적으로 분해되지 않아 수천 년간 환경에 잔류합니다.</p>
        <h3 className="text-lg font-semibold mt-6 mb-3">PFAS가 있는 곳</h3>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>논스틱(테플론) 프라이팬 · 냄비</li>
          <li>방수 아웃도어 의류 (고어텍스 등)</li>
          <li>종이 식품 포장 (햄버거 포장지, 전자레인지 팝콘 봉지)</li>
          <li>소방 거품 (군 기지, 공항 주변 토양 오염)</li>
          <li>일부 화장품, 치실</li>
        </ul>
        <h3 className="text-lg font-semibold mt-6 mb-3">건강 영향</h3>
        <p>신장암, 간암, 면역 억제, 불임, 갑상선 질환, 콜레스테롤 증가와의 연관성이 보고되고 있습니다.</p>
        <blockquote className="border-l-4 border-emerald-400 pl-4 my-4 italic text-gray-600 dark:text-gray-400">&quot;EU는 장난감에서 PFAS를 금지했다. 미국은 농약에 허용하고 있다.&quot; — Reddit</blockquote>
        <div className="mt-6 p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <p className="font-semibold mb-2">실천 과제</p>
          <p className="text-sm">논스틱 팬의 코팅 상태를 확인하세요. 벗겨졌으면 교체 시점입니다.</p>
        </div>
      </>
    ),
  },
  {
    id: "ch4",
    title: "Ch.4 미세플라스틱 — 이미 당신 안에 있다",
    body: (
      <>
        <p>미세플라스틱은 뇌, 혈액, 태반, 정자 — 거의 모든 인체 조직에서 발견되었습니다. 연구에 따르면 현재 인간의 뇌에는 스푼 1개 분량의 미세플라스틱이 있습니다.</p>
        <h3 className="text-lg font-semibold mt-6 mb-3">트로이 목마 효과</h3>
        <p>미세플라스틱 자체보다 <strong>표면에 붙어있는 화학물질</strong>(프탈레이트, 중금속 등)이 체내로 운반되는 것이 더 큰 문제입니다.</p>
        <h3 className="text-lg font-semibold mt-6 mb-3">줄이는 방법</h3>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>플라스틱 생수병 → 스테인리스/유리 물병</li>
          <li>합성섬유 옷 줄이기 (면, 리넨, 울 선택)</li>
          <li>정수기 사용 (활성탄 필터 이상)</li>
          <li>플라스틱 용기 대신 유리/스테인리스 사용</li>
        </ul>
        <blockquote className="border-l-4 border-emerald-400 pl-4 my-4 italic text-gray-600 dark:text-gray-400">&quot;걱정만 하면 스트레스가 더 해롭다. 할 수 있는 것에 집중하라.&quot; — Reddit r/biology</blockquote>
        <div className="mt-6 p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <p className="font-semibold mb-2">실천 과제</p>
          <p className="text-sm">이번 주부터 스테인리스 또는 유리 물병을 사용하세요.</p>
        </div>
      </>
    ),
  },
  {
    id: "ch5",
    title: "Ch.5 주방 — 가장 쉽게 바꿀 수 있는 곳",
    body: (
      <>
        <p>주방은 환경호르몬 노출의 <strong>최대 출처</strong>이자 <strong>가장 쉽게 바꿀 수 있는 곳</strong>입니다.</p>
        <h3 className="text-lg font-semibold mt-6 mb-3">교체 우선순위</h3>
        <ol className="list-decimal list-inside space-y-2 ml-4">
          <li><strong>전자레인지 사용 플라스틱 용기</strong> → 유리/세라믹 (가장 시급)</li>
          <li><strong>코팅 벗겨진 논스틱 팬</strong> → 스테인리스/주철</li>
          <li><strong>플라스틱 밀폐 용기</strong> → 유리 밀폐 용기</li>
          <li><strong>플라스틱 랩</strong> → 밀랍 랩 또는 실리콘 뚜껑</li>
          <li><strong>수돗물 직접 음용</strong> → 정수기 (활성탄 필터 이상)</li>
        </ol>
        <h3 className="text-lg font-semibold mt-6 mb-3">정수기의 중요성</h3>
        <p>생수병은 역설적으로 미세플라스틱 노출원입니다. 연구에 따르면 1리터 생수병에 최대 25만 개의 미세플라스틱이 있을 수 있습니다. 정수기(활성탄 + RO 필터)가 가장 안전합니다.</p>
        <blockquote className="border-l-4 border-emerald-400 pl-4 my-4 italic text-gray-600 dark:text-gray-400">&quot;전환이 생각보다 어렵지 않다. 혈중 프탈레이트 수치가 즉시 크게 감소한다.&quot; — u/jamaicanmecray-z</blockquote>
        <div className="mt-6 p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <p className="font-semibold mb-2">실천 과제</p>
          <p className="text-sm">주방 플라스틱 용기 사진을 찍고, 우선 교체할 3개를 선정하세요.</p>
        </div>
      </>
    ),
  },
  {
    id: "ch6",
    title: "Ch.6 화장품·세면도구 — '향료'가 위험한 이유",
    body: (
      <>
        <p>피부에 바르는 것은 경피 흡수로 체내에 들어갑니다. 특히 로션, 향수 같은 &quot;피부에 남는 제품(Leave-on)&quot;이 더 위험합니다.</p>
        <h3 className="text-lg font-semibold mt-6 mb-3">놀라운 사실: 라벤더 오일</h3>
        <p>라벤더와 티트리 오일의 일부 성분이 에스트로겐을 모방하여 <strong>소년에게 유방 발달</strong>을 유발했다는 내분비학회(Endocrine Society) 연구가 있습니다. 해당 성분은 최소 62가지 다른 에센셜 오일에도 존재합니다.</p>
        <h3 className="text-lg font-semibold mt-6 mb-3">성분표 읽는 법</h3>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li><strong>피할 것:</strong> Fragrance, Parfum, DEP, DBP, DEHP</li>
          <li><strong>안전 신호:</strong> Fragrance-free, Phthalate-free, EWG Verified</li>
          <li><strong>주의:</strong> &quot;Unscented&quot;는 향을 가리는 향을 추가한 것일 수 있음. &quot;Fragrance-free&quot;가 더 안전</li>
        </ul>
        <div className="mt-6 p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <p className="font-semibold mb-2">실천 과제</p>
          <p className="text-sm">가장 자주 쓰는 화장품/세면도구 3개의 성분표를 확인하세요.</p>
        </div>
      </>
    ),
  },
  {
    id: "ch7",
    title: "Ch.7 아이와 임산부 — 가장 취약한 그룹",
    body: (
      <>
        <p>아이는 체중 대비 노출량이 크고, 발달 중인 내분비계가 성인보다 환경호르몬에 <strong>몇 배 더 민감</strong>합니다. 임신 중 노출은 태아의 발달에 장기적 영향을 줄 수 있습니다.</p>
        <h3 className="text-lg font-semibold mt-6 mb-3">용품별 안전 소재</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-gray-100 dark:bg-gray-800"><th className="p-2 border">용품</th><th className="p-2 border">❌ 피할 것</th><th className="p-2 border">✅ 안전한 대안</th></tr></thead>
            <tbody>
              <tr><td className="p-2 border">젖병</td><td className="p-2 border">PC 플라스틱</td><td className="p-2 border">유리, PPSU, 트라이탄</td></tr>
              <tr><td className="p-2 border">이유식 용기</td><td className="p-2 border">일반 플라스틱</td><td className="p-2 border">스테인리스, 유리, 실리콘</td></tr>
              <tr><td className="p-2 border">치발기</td><td className="p-2 border">PVC 플라스틱</td><td className="p-2 border">천연 고무, 나무</td></tr>
              <tr><td className="p-2 border">식기</td><td className="p-2 border">멜라민, BPA 플라스틱</td><td className="p-2 border">스테인리스, 대나무, 세라믹</td></tr>
            </tbody>
          </table>
        </div>
        <blockquote className="border-l-4 border-emerald-400 pl-4 my-4 italic text-gray-600 dark:text-gray-400">&quot;7개월 된 아이가 있는데 이제야 이걸 찾아보고 있다니 기분이 나쁘다.&quot; — Reddit u/eloie<br />&quot;자신을 너무 몰아세우지 마라. 작은 변화부터 하면 된다.&quot; — u/thefinalprose</blockquote>
        <div className="mt-6 p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <p className="font-semibold mb-2">실천 과제</p>
          <p className="text-sm">아이가 입에 넣는 용품(젖병, 식기, 치발기) 중 플라스틱 비율을 확인하세요.</p>
        </div>
      </>
    ),
  },
  {
    id: "ch8",
    title: "Ch.8 식품과 물 — 유기농이면 안전한가?",
    body: (
      <>
        <p>유기농은 농약 사용을 제한하지만, PFAS는 이미 토양과 지하수에 존재합니다. 유기농이라고 PFAS-free는 아닙니다.</p>
        <h3 className="text-lg font-semibold mt-6 mb-3">가공식품의 숨은 문제</h3>
        <p>가공식품의 환경호르몬은 음식 자체가 아니라 <strong>포장재</strong>에서 옵니다. 플라스틱 포장, 캔 내부 BPA/BPS 코팅, 종이 포장의 PFAS 방수 처리.</p>
        <h3 className="text-lg font-semibold mt-6 mb-3">물의 진실</h3>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li><strong>수돗물:</strong> 지역에 따라 PFAS 포함 가능. 정수기 사용 권장</li>
          <li><strong>생수:</strong> 미세플라스틱 노출. 유리병 생수가 나음</li>
          <li><strong>정수기:</strong> 활성탄 + RO(역삼투) 필터가 가장 효과적</li>
        </ul>
        <div className="mt-6 p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <p className="font-semibold mb-2">실천 과제</p>
          <p className="text-sm">이번 주 가공식품 3개를 신선 재료로 교체해보세요.</p>
        </div>
      </>
    ),
  },
  {
    id: "ch9",
    title: "Ch.9 집 안의 보이지 않는 위험",
    body: (
      <>
        <p>실내 먼지는 환경호르몬의 <strong>저장소</strong>입니다. 가구의 난연제(PBDE), 합성섬유 옷의 미세플라스틱, 세제의 프탈레이트가 먼지에 축적됩니다.</p>
        <h3 className="text-lg font-semibold mt-6 mb-3">합성섬유의 세탁 문제</h3>
        <p>폴리에스터, 나일론 등 합성섬유 옷은 세탁할 때마다 수만 개의 미세플라스틱을 방출합니다. 이것은 하수처리장을 거쳐 수계로, 결국 음용수로 돌아옵니다.</p>
        <h3 className="text-lg font-semibold mt-6 mb-3">실천 가능한 변화</h3>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>신발을 현관에서 벗기 (농약/화학물질 유입 차단)</li>
          <li>하루 2~3번 환기 (10분, 맞바람)</li>
          <li>물걸레질 자주 하기 (먼지 제거)</li>
          <li>세제/섬유유연제 → 무향 제품</li>
          <li>합성섬유 옷 → 면/리넨/울 우선</li>
        </ul>
        <div className="mt-6 p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <p className="font-semibold mb-2">실천 과제</p>
          <p className="text-sm">이번 주 환기 횟수를 2배로 늘려보세요.</p>
        </div>
      </>
    ),
  },
  {
    id: "ch10",
    title: "Ch.10 불안 관리 — 알되, 미치지 마라",
    body: (
      <>
        <p>이 가이드를 읽고 나면 두 가지 반응이 옵니다:</p>
        <ol className="list-decimal list-inside space-y-1 ml-4 mb-4">
          <li>&quot;당장 집 안을 다 바꿔야 해!&quot; → <strong>번아웃 → 아무것도 안 함</strong></li>
          <li>&quot;어차피 다 독이면 뭘 해도 소용없어&quot; → <strong>무력감 → 아무것도 안 함</strong></li>
        </ol>
        <p>둘 다 결과는 같습니다: 아무것도 안 함. 이것이 최악의 결과입니다.</p>
        <h3 className="text-lg font-semibold mt-6 mb-3">80/20 법칙</h3>
        <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 text-center">
          <p className="text-lg font-semibold">20%의 변화가 80%의 노출을 줄입니다.</p>
          <p className="text-sm mt-2">전자레인지 플라스틱 금지 + 물병 교체 + 무향 제품 = 이 3가지만으로도 대부분의 일상 노출을 크게 줄일 수 있습니다.</p>
        </div>
        <h3 className="text-lg font-semibold mt-6 mb-3">모든 세대에는 그 세대의 독이 있었다</h3>
        <blockquote className="border-l-4 border-emerald-400 pl-4 my-4 italic text-gray-600 dark:text-gray-400">
          &quot;1970년대에는 난연제가 없었지만 담배 연기가 어디에나 있었다. 모든 세대에는 그 세대의 독이 있다.&quot; — Reddit u/girnigoe
        </blockquote>
        <p>스트레스 자체가 코르티솔을 올리고, 면역을 약화시키고, 수면을 방해합니다. <strong>환경호르몬을 걱정하느라 받는 스트레스가 환경호르몬 자체보다 해로울 수 있습니다.</strong></p>
        <div className="mt-6 p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <p className="font-semibold mb-2">실천 과제</p>
          <p className="text-sm">&quot;내가 바꿀 수 있는 것&quot; / &quot;바꿀 수 없는 것&quot; 목록을 적어보세요. 바꿀 수 있는 것에만 집중하세요.</p>
        </div>
      </>
    ),
  },
  {
    id: "bonus1",
    title: "🎁 보너스 1: 주방 완전 교체 가이드",
    body: (
      <>
        <h3 className="text-lg font-semibold mt-4 mb-3">예산별 교체 플랜</h3>
        <div className="space-y-3">
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold text-sm">💰 5만원 플랜 (최우선)</p>
            <ul className="text-sm space-y-1 mt-1"><li>유리 밀폐용기 2~3개 (전자레인지용)</li><li>스테인리스 물병 1개</li><li>실리콘 뚜껑 세트</li></ul>
          </div>
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold text-sm">💰💰 10만원 플랜 (권장)</p>
            <ul className="text-sm space-y-1 mt-1"><li>위 전부 + 스테인리스 프라이팬 1개</li><li>유리 밀폐용기 추가 (냉장고 전체 교체)</li><li>밀랍 랩 세트</li></ul>
          </div>
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold text-sm">💰💰💰 30만원 플랜 (완전 리셋)</p>
            <ul className="text-sm space-y-1 mt-1"><li>위 전부 + 정수기(카운터탑 활성탄)</li><li>주철 팬/냄비</li><li>스테인리스 도시락통</li><li>유리 물병 세트</li></ul>
          </div>
        </div>
        <h3 className="text-lg font-semibold mt-6 mb-3">정수기 선택</h3>
        <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
          <li><strong>활성탄 필터:</strong> 염소, 일부 유기화합물 제거. 기본</li>
          <li><strong>RO(역삼투) 필터:</strong> PFAS, 미세플라스틱까지 제거. 최선</li>
          <li><strong>피할 것:</strong> 이온수기, 알칼리 정수기 (과학적 근거 부족)</li>
        </ul>
      </>
    ),
  },
  {
    id: "bonus2",
    title: "🎁 보너스 2: 성분표 해독 가이드",
    body: (
      <>
        <h3 className="text-lg font-semibold mt-4 mb-3">피해야 할 핵심 성분</h3>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950">
            <p className="font-semibold text-sm mb-1">프탈레이트 관련</p>
            <p className="text-xs">Fragrance, Parfum, DEP, DBP, DEHP, BBP</p>
          </div>
          <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950">
            <p className="font-semibold text-sm mb-1">BPA 계열</p>
            <p className="text-xs">BPA, BPS, BPF, Bisphenol</p>
          </div>
          <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950">
            <p className="font-semibold text-sm mb-1">항균제</p>
            <p className="text-xs">Triclosan, Triclocarban</p>
          </div>
          <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950">
            <p className="font-semibold text-sm mb-1">기타</p>
            <p className="text-xs">Parabens (Methylparaben 등), Oxybenzone, Formaldehyde releasers</p>
          </div>
        </div>
        <h3 className="text-lg font-semibold mt-6 mb-3">안전 인증 마크</h3>
        <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
          <li><strong>EWG Verified:</strong> 환경실무그룹 검증 (가장 엄격)</li>
          <li><strong>OEKO-TEX:</strong> 섬유 유해물질 검사 (의류, 침구)</li>
          <li><strong>GOTS:</strong> 유기농 섬유 인증</li>
          <li><strong>USDA Organic:</strong> 식품/화장품 유기농 인증</li>
        </ul>
        <h3 className="text-lg font-semibold mt-6 mb-3">성분 확인 앱</h3>
        <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
          <li><strong>화해 (한국):</strong> 국내 화장품 성분 분석</li>
          <li><strong>EWG Skin Deep:</strong> 글로벌 화장품 성분 등급</li>
          <li><strong>Think Dirty:</strong> 바코드 스캔으로 제품 안전도 확인</li>
          <li><strong>Yuka:</strong> 식품 + 화장품 성분 분석</li>
        </ul>
      </>
    ),
  },
  {
    id: "bonus3",
    title: "🎁 보너스 3: 아이 용품 안전 체크리스트",
    body: (
      <>
        <h3 className="text-lg font-semibold mt-4 mb-3">연령별 우선순위</h3>
        <div className="space-y-3">
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold text-sm">0~6개월: 입에 닿는 것 전부</p>
            <p className="text-xs">젖병(유리/PPSU) · 젖꼭지(천연 고무/의료용 실리콘) · 치발기(천연 고무/나무)</p>
          </div>
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold text-sm">6~24개월: 식기 + 장난감</p>
            <p className="text-xs">이유식 용기(스테인리스/유리) · 빨대컵(실리콘/유리) · 장난감(나무/천연 소재)</p>
          </div>
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold text-sm">2세 이상: 매트리스 + 침구</p>
            <p className="text-xs">유기농 라텍스 매트리스 · OEKO-TEX 인증 침구 · 면/유기농 면 파자마</p>
          </div>
        </div>
        <h3 className="text-lg font-semibold mt-6 mb-3">아기 옷 안전 팁</h3>
        <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
          <li>새 옷은 반드시 세탁 후 입히기 (난연제, 포름알데히드 제거)</li>
          <li>&quot;Keep away from open flame&quot; 표시 = 난연제 미사용 (좋은 신호)</li>
          <li>중고 아기 옷도 좋은 선택 (이미 여러 번 세탁되어 화학물질 감소)</li>
        </ul>
      </>
    ),
  },
  {
    id: "bonus4",
    title: "🎁 보너스 4: 세면도구/화장품 교체 가이드",
    body: (
      <>
        <h3 className="text-lg font-semibold mt-4 mb-3">제품별 안전 대안</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-gray-100 dark:bg-gray-800"><th className="p-2 border">제품</th><th className="p-2 border">피할 것</th><th className="p-2 border">대안</th></tr></thead>
            <tbody>
              <tr><td className="p-2 border">샴푸</td><td className="p-2 border">Fragrance, SLS</td><td className="p-2 border">무향 천연 샴푸, 고체 샴푸 바</td></tr>
              <tr><td className="p-2 border">바디워시</td><td className="p-2 border">Triclosan, Fragrance</td><td className="p-2 border">무향 바 비누, 캐스틸 비누</td></tr>
              <tr><td className="p-2 border">로션</td><td className="p-2 border">Parabens, Fragrance</td><td className="p-2 border">호호바 오일, 시어버터, 코코넛 오일</td></tr>
              <tr><td className="p-2 border">선크림</td><td className="p-2 border">Oxybenzone, Octinoxate</td><td className="p-2 border">미네랄 선크림(산화아연/이산화티탄)</td></tr>
              <tr><td className="p-2 border">데오도란트</td><td className="p-2 border">Fragrance, 알루미늄</td><td className="p-2 border">베이킹소다 기반, 크리스탈 데오</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-lg font-semibold mt-6 mb-3">&quot;Unscented&quot; vs &quot;Fragrance-free&quot;</h3>
        <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
          <li><strong>Unscented:</strong> 향을 가리는 마스킹 향료를 추가한 것일 수 있음 → 프탈레이트 포함 가능</li>
          <li><strong>Fragrance-free:</strong> 향료 성분 자체가 없음 → 더 안전</li>
        </ul>
        <h3 className="text-lg font-semibold mt-6 mb-3">DIY 대안</h3>
        <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
          <li>다목적 세정제: 식초 + 물 (1:1 비율)</li>
          <li>바디 모이스처라이저: 코코넛 오일 또는 호호바 오일</li>
          <li>헤어 린스: 사과식초 + 물</li>
          <li>스크럽: 설탕 + 올리브 오일</li>
        </ul>
      </>
    ),
  },
  {
    id: "bonus5",
    title: "🎁 보너스 5: 가정 환경 리셋 체크리스트",
    body: (
      <>
        <h3 className="text-lg font-semibold mt-4 mb-3">방별 점검</h3>
        <div className="space-y-3">
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold text-sm">🍳 주방</p>
            <ul className="text-xs space-y-1"><li>□ 전자레인지용 플라스틱 제거</li><li>□ 논스틱 팬 코팅 확인</li><li>□ 유리/스테인리스 용기 전환</li><li>□ 정수기 설치/필터 교체</li></ul>
          </div>
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold text-sm">🛁 욕실</p>
            <ul className="text-xs space-y-1"><li>□ 샴푸/바디워시 성분 확인</li><li>□ Fragrance 제품 교체</li><li>□ 항균 비누(Triclosan) 제거</li><li>□ 샤워 커튼 PVC → 면/폴리에스터</li></ul>
          </div>
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold text-sm">🛏️ 침실</p>
            <ul className="text-xs space-y-1"><li>□ 매트리스 커버 OEKO-TEX 확인</li><li>□ 침구 소재 확인 (면/리넨 우선)</li><li>□ 디퓨저/향초 대신 환기</li></ul>
          </div>
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold text-sm">🏠 거실/전체</p>
            <ul className="text-xs space-y-1"><li>□ 현관에서 신발 벗기</li><li>□ 하루 2~3회 환기</li><li>□ 물걸레질 주 2회</li><li>□ 세제/섬유유연제 무향으로</li></ul>
          </div>
        </div>
        <h3 className="text-lg font-semibold mt-6 mb-3">미세플라스틱 세탁 가이드</h3>
        <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
          <li>합성섬유 옷은 세탁 네트/필터 백에 넣고 세탁</li>
          <li>찬물 세탁 (뜨거운 물이 섬유 손상 → 미세플라스틱 더 방출)</li>
          <li>건조기 대신 자연 건조 (건조기 먼지 필터 = 미세플라스틱)</li>
          <li>새 옷은 천연 섬유 우선 (면, 리넨, 울, 실크)</li>
        </ul>
        <h3 className="text-lg font-semibold mt-6 mb-3">계절별 점검 스케줄</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-gray-100 dark:bg-gray-800"><th className="p-2 border">시기</th><th className="p-2 border">할 일</th></tr></thead>
            <tbody>
              <tr><td className="p-2 border">봄</td><td className="p-2 border">대청소 + 정수기 필터 교체 + 환기 루틴 재시작</td></tr>
              <tr><td className="p-2 border">여름</td><td className="p-2 border">선크림 성분 확인 + 생수병 대신 물병 + 냉장고 플라스틱 점검</td></tr>
              <tr><td className="p-2 border">가을</td><td className="p-2 border">겨울 침구 소재 확인 + 난방 전 환기 점검</td></tr>
              <tr><td className="p-2 border">겨울</td><td className="p-2 border">실내 건조 주의(가습기 물때) + 환기 최소 유지</td></tr>
            </tbody>
          </table>
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
      "초판 발행: Reddit 4개 스레드 + NIH/EPA 교차검증 기반",
      "10가지 핵심 원칙 선정",
      "10개 챕터 + 보너스 5개 작성",
    ],
  },
];

export default function EndocrineDisruptorsReadPage() {
  return (
    <GuideBook
      bookId="endocrine-disruptors"
      title="생활 속 환경호르몬과 질병"
      emoji="🧪"
      subtitle="20%만 바꾸면 80%의 노출을 줄일 수 있습니다"
      topItems={topItems}
      sections={sections}
      updateLogs={updateLogs}
      currentVersion={1}
    />
  );
}
