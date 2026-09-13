import GuideBook from "@/components/GuideBook";
import type {
  TopItem,
  ContentSection,
  UpdateLog,
} from "@/components/GuideBook";

export const metadata = {
  title:
    "만져볼 수 없는 상품을 완판시키는 설득 시스템 — 본문 | 살아있는 정보책",
  description:
    "디지털 상품·온라인 강의·컨설팅 — 무형의 가치를 매출로 바꾸는 실전 가이드. 서문 + 10개 챕터 + 부록 전문. 무형 상품 3가지 벽, 가치 번역 공식, 신뢰 장치, 가격 프레이밍, 판매 페이지 황금 공식, 긴급성 심리학, 콘텐츠 세일즈, BDA 스토리텔링, 맥락 세일즈, LTV 극대화까지.",
};

const topItems: TopItem[] = [
  {
    number: 1,
    title: "무형 상품이 안 팔리는 진짜 이유: 보이지 않는 3가지 벽",
    oneLiner:
      "만질 수 없음·비교 불가·결과 불확실 — 이 세 벽을 모르면 마케팅비가 구멍 난 양동이에 붓는 물이다.",
    description:
      "감각 결핍 불안, 비교 불가의 3유형(수평·수직·기준), 결과 불확실성이 만드는 악순환 구조, 감각화·기준 제공·위험 제거 3원칙 미리보기, 자가 진단 체크리스트.",
    situation: "상품은 좋은데 왜 결제 버튼 앞에서 고객이 멈추는지 모를 때",
    action: "자가 진단표 5문항을 체크하고, '아니오'가 가장 많은 벽을 찾으세요.",
    mission:
      "경쟁 상품 3개의 판매 페이지를 캡처하고, 내 페이지와 비교 불가 지점을 정리하세요.",
  },
  {
    number: 2,
    title: "가치를 '숫자'로 번역하는 기술: 추상을 구체로 바꾸는 5가지 공식",
    oneLiner:
      "고객은 '가치'가 아니라 '변화'를 산다 — 추상적 가치를 감각할 수 있는 숫자로 번역하라.",
    description:
      "Feature→Benefit→Emotion 3단 변환, 시간 환산법, 돈 환산법(수익 증가·비용 절감), 감정 환산법(구체적 장면 묘사), Who/What/How 한 문장 프레임워크.",
    situation:
      "'우리 강의를 들으면 실력이 향상됩니다' 같은 구름 잡는 소개를 쓰고 있을 때",
    action:
      "내 상품의 Feature·Benefit·Emotion을 각각 한 문장으로 적어보세요.",
    mission:
      "시간 환산과 돈 환산을 모두 계산해서 판매 페이지에 숫자로 넣으세요.",
  },
  {
    number: 3,
    title: "신뢰를 설계하는 법: 불안을 확신으로 바꾸는 5가지 신뢰 장치",
    oneLiner:
      "고객의 기본값은 '의심'이다 — 신뢰 없이는 무형 상품의 거래가 불가능하다.",
    description:
      "사회적 증거 5유형(숫자·후기·동질감·권위·실시간), 권위를 만드는 4방법, 보증의 4유형(무조건·조건부·성과·추가 보상), 시범 4형태, 과정 공개 3단계, 상품 유형별 최적 조합표.",
    situation:
      "'진짜 효과 있어요?'라는 질문을 반복적으로 받는데 체계적 대응이 없을 때",
    action:
      "5가지 신뢰 장치 중 지금 당장 적용 가능한 2가지를 골라 판매 페이지에 추가하세요.",
    mission:
      "가장 구체적인 고객 후기 1개를 BDA 구조로 다시 작성해 상단에 배치하세요.",
  },
  {
    number: 4,
    title: "가격 저항을 녹이는 프레이밍: '비싸요'가 사라지는 4가지 기법",
    oneLiner:
      "'비싸요'는 가격의 문제가 아니라 가치 인식의 문제다 — 가격을 낮추지 말고 다르게 보이게 하라.",
    description:
      "앵커링 3기법(상위 옵션·외부 비교·시간 투자), 세분화 4공식(일일·건당·사용횟수·대비), 비교 전환 3방법(대안·기회비용·일상 지출), ROI 프레이밍, 가격 제시 5단계 시퀀스.",
    situation: "가격을 내려봤는데도 판매량이 변하지 않을 때",
    action:
      "앵커링→ROI→비교→세분화→가격 공개 순서로 가격 제시 시퀀스를 작성하세요.",
    mission:
      "내 상품의 ROI를 보수적으로 계산하고, 실제 고객 사례 1개를 추가하세요.",
  },
  {
    number: 5,
    title:
      "판매 페이지의 황금 공식: Pain → 공감 → Solution → Evidence → CTA",
    oneLiner:
      "판매 페이지는 카탈로그가 아니라 '대화'다 — 고객의 머릿속 흐름을 따라가라.",
    description:
      "Pain 작성 공식과 발굴 3방법, 공감 다리(Empathy Bridge) 3단계, Solution 제시 구조, Evidence 5유형과 배치 순서, CTA 작성 공식(동사+결과+리스크 제거), 헤드라인 5공식, 판매 페이지 10섹션 템플릿.",
    situation: "판매 페이지를 썼는데 전환율이 1% 미만일 때",
    action:
      "Pain·공감·Solution·Evidence·CTA 각 섹션의 초안을 워크시트에 작성하세요.",
    mission:
      "완성된 판매 페이지를 주변 3명에게 보여주고 '스크롤이 멈추는 지점'을 파악하세요.",
  },
  {
    number: 6,
    title: "지금 사게 만드는 긴급성의 심리학: 희소성·마감·손실회피",
    oneLiner:
      "'나중에'라는 한마디가 매출을 죽인다 — 지금 사야 할 이유를 설계하라.",
    description:
      "손실회피(얻는 기쁨의 2배인 잃는 고통) 프레이밍, 희소성 3유형(수량·시간·조건), 진짜 vs 가짜 희소성, 마감 설계 4방법(카운트다운·날짜·단계별 가격·보너스), CTA 심화 규칙 5가지, FAQ 반론 처리 6가지, 톤앤매너 설계.",
    situation:
      "관심은 보이는데 즐겨찾기만 하고 결제하지 않는 고객이 많을 때",
    action:
      "손실회피 문구 1개 + 진짜 희소성 장치 1개를 판매 페이지에 추가하세요.",
    mission:
      "FAQ 6개를 고객의 말투로 작성하고 CTA 근처에 배치하세요.",
  },
  {
    number: 7,
    title:
      "고객이 스스로 찾아오는 콘텐츠 세일즈: 구매 여정 4단계 설계",
    oneLiner:
      "고객을 쫓아가지 마라 — 콘텐츠로 고객이 스스로 찾아오는 시스템을 만들어라.",
    description:
      "구매 여정 4단계(인지→관심→전환→행동), 인지 콘텐츠 3유형, 관심 콘텐츠 3유형, 자기동일시(거울 효과·대리 경험·타겟팅 문구) 3기법, 행동 유도 4전략, 채널별 퍼널(인스타·블로그·카톡), 콘텐츠 주간 루틴.",
    situation: "광고비를 쓰지 않고도 유입을 만들고 싶을 때",
    action:
      "인지·관심·전환·행동 각 단계에 맞는 콘텐츠 아이디어를 3개씩 적어보세요.",
    mission:
      "이번 주에 인지 단계 콘텐츠 1개를 발행하고 반응을 측정하세요.",
  },
  {
    number: 8,
    title:
      "경험을 무기로: Before-During-After 스토리텔링과 후기 시스템",
    oneLiner:
      "Before/After만으로는 부족하다 — 과정(During)을 보여줘야 '나도 할 수 있겠다'는 확신이 생긴다.",
    description:
      "BDA 스토리텔링 프레임워크, Before 5요소(상황·시도·감정·시간·연결), During 4요소(전환점·액션·어려움·소요 시간), After 구조(성과+삶 변화+감정), 후기 수집 5단계 시스템, 후기 종류별 활용법(텍스트·대화 캡처·영상·숫자).",
    situation:
      "후기를 받고 있지만 '좋았습니다' 수준에 머물러 설득력이 약할 때",
    action:
      "기존 후기 중 가장 극적인 변화 사례 1개를 BDA 구조로 재작성하세요.",
    mission:
      "후기 요청 템플릿 3문항을 만들고 최근 고객 5명에게 발송하세요.",
  },
  {
    number: 9,
    title:
      "맥락 세일즈: 상황·타이밍·메시지를 일치시키는 조건부 타겟팅",
    oneLiner:
      "같은 말도 '언제' 하느냐에 따라 전환율이 5배 차이 난다 — 맥락을 설계하라.",
    description:
      "맥락의 3축(상황·타이밍·메시지), 조건부 타겟팅(IF-THEN 규칙), 12개월 시즌 마케팅 캘린더, 채널별 맥락 최적화(인스타·카톡·블로그·이메일), 메시지 불일치 3유형 진단, 맥락 기반 A/B 테스트 방법.",
    situation:
      "같은 메시지를 반복 발송하는데 시즌마다 반응이 들쭉날쭉할 때",
    action:
      "내 상품과 관련 깊은 시즌 3개를 고르고 시즌별 메시지를 다르게 작성하세요.",
    mission:
      "조건부 타겟팅 IF-THEN 규칙 3개를 설계해 이번 달부터 적용하세요.",
  },
  {
    number: 10,
    title: "한 번 산 고객을 평생 고객으로: LTV 극대화 3단계",
    oneLiner:
      "신규 고객 1명 데려오는 비용으로 기존 고객 10명을 재구매시킬 수 있다 — LTV를 설계하라.",
    description:
      "LTV 공식(평균 구매 금액 x 구매 횟수 x 관계 유지 기간), 입문 단계(가격 장벽 최소화·즉각적 가치·다음 단계 안내), 확장 5전략(상품 라인업·번들링·크로스셀·업셀·시즌 신상품), 충성 6장치(커뮤니티·구독·로열티·서프라이즈·주인공화·피드백 루프), 이탈 고객 재활성화.",
    situation:
      "한 번 사고 끝인 고객이 대부분이라 매번 신규 유입에 의존할 때",
    action: "현재 LTV를 계산하고 목표 LTV를 설정하세요.",
    mission:
      "구매 후 30일 시퀀스(D+0, D+3, D+7, D+14, D+30) 메시지를 작성하세요.",
  },
];

const sections: ContentSection[] = [
  {
    id: "sec-0",
    title: "들어가며 — 왜 좋은 상품이 안 팔리는가",
    body: (
      <>
        <p>&quot;제 상품은 진짜 좋은데, 왜 안 팔릴까요?&quot; 크몽, 클래스101, 아임웹에서 무형 상품을 파는 사람들이 가장 많이 하는 질문입니다. 포트폴리오도 훌륭하고, 후기도 괜찮고, 가격도 합리적인데 — <strong>문의가 뚝 끊깁니다.</strong></p>
        <p>세 사람의 공통점: 모두 &quot;상품의 질&quot;에는 자신이 있지만, <strong>&quot;상품을 설득하는 시스템&quot;이 없었습니다.</strong> 온라인 강의, 전자책, 컨설팅, 코칭 같은 무형 상품은 사진을 찍을 수도, 만져볼 수도, 맛볼 수도 없습니다.</p>
        <p>이 책은 <strong>무형 상품을 파는 사람을 위한 설득 시스템 매뉴얼</strong>입니다. 1~4장은 진단과 가치 번역, 5~6장은 판매 페이지와 심리학, 7~8장은 콘텐츠와 후기 시스템, 9~10장은 맥락 세일즈와 LTV 전략, 부록은 바로 쓸 수 있는 실행 도구를 다룹니다.</p>
        <blockquote className="border-l-4 border-violet-400 pl-4 py-2 my-4 bg-violet-50 dark:bg-violet-950 rounded-r-lg">
          <p><strong>서문 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>무형 상품은 &lsquo;다르게&rsquo; 팔아야 한다 — 유형 상품의 마케팅 공식이 통하지 않는다.</li>
            <li>모든 챕터 끝의 워크시트를 채우면, 10장을 마칠 때 <strong>완성된 판매 시스템 설계도</strong>가 손에 들어온다.</li>
            <li>크몽·클래스101·아임웹·스마트스토어 등 한국 플랫폼 실전 사례 중심.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-1",
    title: "Ch.1 무형 상품이 안 팔리는 진짜 이유: 보이지 않는 3가지 벽",
    body: (
      <>
        <p>무형 상품에는 고객의 결제를 가로막는 <strong>3가지 보이지 않는 벽</strong>이 있습니다. 하나만 무너뜨려도 나머지가 약해지는 악순환 구조입니다.</p>
        <h3 className="text-xl font-bold mt-8 mb-4">3가지 벽</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>만질 수 없음(Intangibility)</strong> — 뇌는 감각 증거를 원한다. Before/After 이미지, 대시보드 스크린샷으로 &lsquo;보이지 않는 것을 보이게&rsquo; 만들어라.</li>
          <li><strong>비교 불가(Comparison)</strong> — 수평(경쟁사)·수직(무료 대안)·기준 비교 불가. 비교 기준을 만들어주면 전환율이 2배 뛴다.</li>
          <li><strong>결과 불확실(Uncertainty)</strong> — 67.3%가 &lsquo;결과를 보장받을 수 없어서&rsquo; 구매를 망설인다. 과정의 시각화가 첫 번째 열쇠.</li>
        </ul>
        <h3 className="text-xl font-bold mt-8 mb-4">벽을 넘는 3원칙</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>감각화</strong> — &quot;생산성이 올라갑니다&quot; → &quot;매일 퇴근 시간이 1시간 30분 빨라집니다&quot;</li>
          <li><strong>기준 제공</strong> — 고객이 비교할 수 있도록 판단 기준을 먼저 제시</li>
          <li><strong>위험 제거</strong> — 보증·시범·단계별 공개로 불확실성을 낮추기</li>
        </ol>
        <blockquote className="border-l-4 border-violet-400 pl-4 py-2 my-4 bg-violet-50 dark:bg-violet-950 rounded-r-lg">
          <p><strong>1챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>3가지 벽은 서로를 강화하는 악순환 — 하나만 깨도 나머지가 약해진다.</li>
            <li>자가 진단 5문항에서 &lsquo;아니오&rsquo;가 3개 이상이면 벽에 막혀 있다.</li>
            <li><strong>오늘부터 실행</strong>: 진단표를 채우고 가장 약한 벽 하나를 골라 다음 챕터부터 집중 보강하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-2",
    title: "Ch.2 가치를 '숫자'로 번역하는 기술: 추상을 구체로 바꾸는 5가지 공식",
    body: (
      <>
        <p>고객이 지갑을 여는 순간은 <strong>&quot;이걸 사면 내 삶이 이렇게 달라지겠구나&quot;를 구체적으로 상상할 수 있을 때</strong>입니다. 추상적 가치를 감각할 수 있는 숫자로 번역하는 5가지 공식입니다.</p>
        <h3 className="text-xl font-bold mt-8 mb-4">5가지 변환 공식</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>Feature→Benefit→Emotion</strong> — &quot;노션 DB 24강&quot; → &quot;업무 시간 하루 40분 절약&quot; → &quot;아이와 함께하는 저녁 시간 40분 추가&quot;</li>
          <li><strong>시간 환산법</strong> — 연간 절약 시간 x 시급 = 체감 가치. 커피 3잔 값으로 매달 18시간 되찾기.</li>
          <li><strong>돈 환산법</strong> — 수익 증가분 또는 비용 절감액을 직접 계산. &quot;15만 원 투자로 월 144만 원 추가 매출.&quot;</li>
          <li><strong>감정 환산법</strong> — 구체적 Before/After 장면 묘사. &quot;일요일 밤 한숨&quot; → &quot;월요일 아침 설렘.&quot;</li>
          <li><strong>Who/What/How 한 문장</strong> — &quot;[누구]를 위한 [무엇]을 [어떻게] 해주는 상품.&quot; WHO가 넓으면 실패한다.</li>
        </ol>
        <blockquote className="border-l-4 border-violet-400 pl-4 py-2 my-4 bg-violet-50 dark:bg-violet-950 rounded-r-lg">
          <p><strong>2챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>판매 페이지에 Feature 30%, Benefit 40%, Emotion 30% 비율로 배치하라.</li>
            <li>시간·돈·감정 세 가지 환산을 모두 계산해야 설득력이 완성된다.</li>
            <li><strong>오늘부터 실행</strong>: 가치 번역표(5공식)를 채우고 판매 페이지에 숫자를 넣으세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-3",
    title: "Ch.3 신뢰를 설계하는 법: 불안을 확신으로 바꾸는 5가지 신뢰 장치",
    body: (
      <>
        <p>고객이 결제 전에 가장 많이 하는 질문: &quot;진짜 효과 있어요?&quot; &quot;뭐가 달라요?&quot; &quot;환불 되나요?&quot; — 본질은 하나, <strong>&quot;당신을 믿어도 되나요?&quot;</strong></p>
        <h3 className="text-xl font-bold mt-8 mb-4">5가지 신뢰 장치</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>사회적 증거</strong> — 숫자·후기·동질감·권위·실시간 5유형. &lsquo;구매 전후 가장 크게 달라진 것&rsquo;을 물어야 구체적 후기가 나온다.</li>
          <li><strong>권위</strong> — 경력·성과·미디어·인증 4방법. 권위가 없으면 &lsquo;과정 공개&rsquo;(투명함 자체가 권위)로 대체.</li>
          <li><strong>보증</strong> — 무조건·조건부·성과·추가 보상 4유형. 환불 보증 도입 시 환불률 3~5%이나 전환율 15~30% 상승.</li>
          <li><strong>시범</strong> — 무료 샘플·라이브 시연·케이스 스터디·미리보기 영상. 무형 상품의 &lsquo;시식 코너&rsquo;.</li>
          <li><strong>과정 공개</strong> — 타임라인 시각화→기대 결과 명시→중간 점검 장치. 결제 후 불안을 제거.</li>
        </ol>
        <blockquote className="border-l-4 border-violet-400 pl-4 py-2 my-4 bg-violet-50 dark:bg-violet-950 rounded-r-lg">
          <p><strong>3챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>상품 유형별 최적 조합: 전자책=무료 샘플+후기, 강의=무료 강의+수강생 후기+과정 공개, 컨설팅=무료 상담+권위.</li>
            <li>판매 페이지 배치 순서: 상단(숫자 증거)→중단(권위+케이스)→가격 직전(보증)→CTA 옆(최신 후기).</li>
            <li><strong>오늘부터 실행</strong>: 5가지 중 2~3가지부터 시작하세요. &lsquo;없는 것보다 있는 것&rsquo;이 전환율을 바꿉니다.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-4",
    title: "Ch.4 가격 저항을 녹이는 프레이밍: '비싸요'가 사라지는 4가지 기법",
    body: (
      <>
        <p>&quot;비싸요&quot;는 가격이 아니라 <strong>가치 인식</strong>의 문제입니다. 가격을 내려도 판매량이 변하지 않는 이유 — 같은 가격을 &lsquo;다르게 보이게&rsquo; 만드는 프레이밍이 답입니다.</p>
        <h3 className="text-xl font-bold mt-8 mb-4">4가지 프레이밍 기법</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>앵커링</strong> — 상위 옵션(89만 원 VIP)을 먼저 보여주면 39만 원이 합리적으로 느껴진다. 외부 비교(&quot;에이전시 500만 원&quot;), 시간 투자 앵커도 활용.</li>
          <li><strong>세분화</strong> — &quot;29만 원/365일 = 하루 795원, 커피 반 잔 값.&quot; 일일·건당·사용횟수·대비 4공식.</li>
          <li><strong>비교 전환</strong> — 같은 카테고리가 아니라 &lsquo;대안 비용·기회비용·일상 지출&rsquo;과 비교. 넷플릭스 한 달 = 소비, 이 전자책 = 투자.</li>
          <li><strong>ROI 프레이밍</strong> — 18만 원 투자 → 월 213만 원 추가 매출 = ROI 1,083%. 보수적 계산이 더 믿음직하다.</li>
        </ul>
        <p><strong>가격 제시 5단계 시퀀스:</strong> 앵커링→ROI→비교→세분화→가격 공개 순서를 따르세요. 프레이밍은 &lsquo;왜곡&rsquo;이 아니라 &lsquo;번역&rsquo;입니다.</p>
        <blockquote className="border-l-4 border-violet-400 pl-4 py-2 my-4 bg-violet-50 dark:bg-violet-950 rounded-r-lg">
          <p><strong>4챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>ROI 계산에 과장은 금물 — &lsquo;최소 3배&rsquo;가 &lsquo;최대 10배&rsquo;보다 신뢰된다.</li>
            <li>앵커링에 사용하는 비교 가격은 반드시 실제 시장 가격이어야 한다.</li>
            <li><strong>오늘부터 실행</strong>: 가격 프레이밍 설계표를 채우고 5단계 시퀀스를 판매 페이지에 적용하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-5",
    title: "Ch.5 판매 페이지의 황금 공식: Pain → 공감 → Solution → Evidence → CTA",
    body: (
      <>
        <p>좋은 판매 페이지는 <strong>고객의 머릿속 대화를 따라가는 것</strong>입니다. &quot;이 사람 내 상황을 아네?&quot; → &quot;해결하고 싶어&quot; → &quot;이 방법이면?&quot; → &quot;다른 사람도 됐어?&quot; → &quot;지금 사야겠다.&quot;</p>
        <h3 className="text-xl font-bold mt-8 mb-4">황금 공식 5단계</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>Pain</strong> — 첫 3초 승부. &quot;내일 오전 발표인데 PPT 22장이 텍스트 범벅&quot;처럼 구체적 상황+감정으로.</li>
          <li><strong>공감 다리</strong> — &quot;저도 그랬습니다&quot; → 시행착오 → 전환점. 바로 Solution으로 가면 &lsquo;팔려고 하는구나&rsquo;로 읽힌다.</li>
          <li><strong>Solution</strong> — 핵심 원인 + 독자적 방법론(이름 붙이기) + 구체적 결과물. What과 Why는 공개, How는 상품 안에.</li>
          <li><strong>Evidence</strong> — 숫자→고객 변화 스토리→시각적 증거→타임라인→외부 검증 순서로 배치.</li>
          <li><strong>CTA</strong> — 동사+결과+리스크 제거. &quot;매출 올리는 비법 받기 — 7일 무조건 환불 보증.&quot; 최소 3곳 배치.</li>
        </ol>
        <p>판매 페이지 비율: Pain+공감 25%, Solution+커리큘럼 30%, Evidence 25%, 가격+CTA 20%.</p>
        <blockquote className="border-l-4 border-violet-400 pl-4 py-2 my-4 bg-violet-50 dark:bg-violet-950 rounded-r-lg">
          <p><strong>5챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>헤드라인 5공식: 결과+기간+조건 / 고통+해결 / 숫자+비밀 / 대상+질문 / 반전.</li>
            <li>Solution에 독자적 이름을 붙이면 기억된다 — &quot;3-Step 전환 구조&quot;, &quot;ABCD 공식&quot; 등.</li>
            <li><strong>오늘부터 실행</strong>: 워크시트에 Pain 3문장, 공감 3문장, CTA 문구를 초안으로 적으세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-6",
    title: "Ch.6 지금 사게 만드는 긴급성의 심리학: 희소성·마감·손실회피",
    body: (
      <>
        <p>고객이 즐겨찾기만 하고 결제하지 않는 이유 — <strong>&lsquo;지금 사야 할 이유&rsquo;가 없기 때문</strong>입니다. 3가지 심리 원리로 &quot;나중에&quot;를 &quot;지금&quot;으로 바꿉니다.</p>
        <h3 className="text-xl font-bold mt-8 mb-4">3가지 심리 원리</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>손실회피</strong> — 잃는 고통이 얻는 기쁨의 2~2.5배. &quot;이 강의를 안 들으면 매달 50만 원의 매출 기회를 놓칩니다.&quot;</li>
          <li><strong>희소성</strong> — 수량·시간·조건 3유형. 진짜 희소성만 사용(가짜 희소성은 브랜드 신뢰를 파괴).</li>
          <li><strong>마감 효과</strong> — 카운트다운 타이머, 단계별 가격 인상, 보너스 마감. 타이머가 0이 되면 실제로 가격이 올라가야 한다.</li>
        </ul>
        <h3 className="text-xl font-bold mt-8 mb-4">CTA 심화 + FAQ 반론 처리</h3>
        <p>CTA 규칙: 동사로 시작, 결과 포함, 리스크 제거, 1개만, 3곳 반복. FAQ는 &lsquo;질문 모음&rsquo;이 아니라 &lsquo;반론 처리&rsquo; — 고객의 말투로 6가지 필수 의심을 해소합니다.</p>
        <blockquote className="border-l-4 border-violet-400 pl-4 py-2 my-4 bg-violet-50 dark:bg-violet-950 rounded-r-lg">
          <p><strong>6챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>긴급성 윤리: 거짓 마감 금지, 진짜 이유 설명, 압박이 아닌 안내, 고객 판단 존중.</li>
            <li>톤앤매너: &lsquo;전문 친근체&rsquo;(존댓말+전문 용어 즉시 풀이+개인 경험)가 무형 상품에 최적.</li>
            <li><strong>오늘부터 실행</strong>: 손실회피 문구 1개 + 진짜 희소성 장치 1개를 판매 페이지에 추가하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-7",
    title: "Ch.7 고객이 스스로 찾아오는 콘텐츠 세일즈: 구매 여정 4단계 설계",
    body: (
      <>
        <p>광고비 0원인데 매달 30~40명이 결제하는 비결: <strong>&quot;팔지 않아요. 매일 글을 써요. 그러면 알아서 와요.&quot;</strong> 고객을 쫓아가는 대신, 고객이 스스로 찾아오는 시스템입니다.</p>
        <h3 className="text-xl font-bold mt-8 mb-4">구매 여정 4단계</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>인지</strong> — 문제 진단형·체크리스트형·충격적 사실형 콘텐츠. 절대 상품을 언급하지 마라.</li>
          <li><strong>관심</strong> — How-to 일부 공개, 비교 분석, 케이스 스터디 요약. 무료 가치로 유료 기대를 만든다.</li>
          <li><strong>전환</strong> — 자기동일시(거울 효과·대리 경험·구체적 타겟팅)로 &lsquo;이건 나를 위한 것&rsquo; 전환.</li>
          <li><strong>행동</strong> — 마이크로 커밋먼트, 카톡 1:1 연결, 결제 간소화, 구매 직후 즉시 가치 제공.</li>
        </ul>
        <p><strong>채널별 퍼널:</strong> 인스타(릴스→카루셀→하이라이트→DM), 블로그(SEO→시리즈→뉴스레터→판매 이메일), 카톡(친구 추가→정보 메시지→후기→한정 오퍼).</p>
        <blockquote className="border-l-4 border-violet-400 pl-4 py-2 my-4 bg-violet-50 dark:bg-violet-950 rounded-r-lg">
          <p><strong>7챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>인지 단계에서 판매하면 고객은 도망간다 — 공감에만 집중하라.</li>
            <li>콘텐츠 주간 루틴: 월(인지 릴스), 수(후기 카루셀), 금(케이스 스터디), 토(CTA 콘텐츠).</li>
            <li><strong>오늘부터 실행</strong>: 4단계별 콘텐츠 아이디어를 3개씩 적고, 이번 주에 1개를 발행하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-8",
    title: "Ch.8 경험을 무기로: Before-During-After 스토리텔링과 후기 시스템",
    body: (
      <>
        <p>Before/After만으로는 부족합니다. <strong>During(과정)</strong>이 빠지면 고객은 &quot;나와는 다른 사람의 이야기&quot;로 치부합니다. &quot;이 사람도 처음에는 나처럼 막막했구나&quot;를 보여줘야 합니다.</p>
        <h3 className="text-xl font-bold mt-8 mb-4">BDA 스토리텔링</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>Before</strong> — 구체적 상황+시도했지만 실패+감정+시간+고객 연결 고리 5요소.</li>
          <li><strong>During</strong> — 전환점+구체적 액션+어려움과 극복+소요 시간 4요소. &lsquo;쉽지 않았다&rsquo;를 보여줘야 신뢰된다.</li>
          <li><strong>After</strong> — 구체적 성과+삶의 변화+감정 상태. 숫자만 나열하지 말고 감정적 클라이맥스를 만들라.</li>
        </ul>
        <h3 className="text-xl font-bold mt-8 mb-4">후기 수집 5단계 시스템</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li>후기 요청 타이밍 설계 (전자책: 구매 후 3일, 강의: 수강 50% 시점)</li>
          <li>요청 템플릿 3문항 (&lsquo;구매 전 고민·달라진 것·추천 소개&rsquo;)</li>
          <li>BDA 구조로 가공 (고객 동의 필수)</li>
          <li>배치: 판매 페이지 3~5개 + 인스타 주 1회 + 카톡 즉시</li>
          <li>월 1회 업데이트, 3개월마다 오래된 후기 교체</li>
        </ol>
        <blockquote className="border-l-4 border-violet-400 pl-4 py-2 my-4 bg-violet-50 dark:bg-violet-950 rounded-r-lg">
          <p><strong>8챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>&quot;좋았습니다&quot;는 약한 후기, &quot;3주 만에 팔로워 800명 증가&quot;는 강한 후기 — 질문을 바꿔야 후기가 바뀐다.</li>
            <li>BDA 스토리는 한 번 만들면 모든 채널에서 재활용 가능한 핵심 자산.</li>
            <li><strong>오늘부터 실행</strong>: 가장 극적인 변화 사례 1개를 BDA 구조로 재작성하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-9",
    title: "Ch.9 맥락 세일즈: 상황·타이밍·메시지를 일치시키는 조건부 타겟팅",
    body: (
      <>
        <p>같은 상품, 같은 메시지, 같은 고객 — 1월 전환율 4.8%, 3월 전환율 0.9%. <strong>달라진 건 &lsquo;맥락&rsquo;뿐</strong>이었습니다. 맥락의 3축(상황·타이밍·메시지)을 일치시켜야 합니다.</p>
        <h3 className="text-xl font-bold mt-8 mb-4">조건부 타겟팅 IF-THEN</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>IF</strong> 프로필 조회 후 미구매 3일 경과 → <strong>THEN</strong> &quot;무료 포트폴리오 리뷰를 먼저 받아보세요&quot;</li>
          <li><strong>IF</strong> 구매 후 7일 + 후기 미작성 → <strong>THEN</strong> &quot;후기 남겨주시면 30% 할인 쿠폰&quot;</li>
          <li><strong>IF</strong> 무료 상담 완료 + 미구매 2일 → <strong>THEN</strong> &quot;실천법 적용 잘 되고 계신가요?&quot;</li>
        </ul>
        <h3 className="text-xl font-bold mt-8 mb-4">메시지 불일치 3유형</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>채널 불일치</strong> — 릴스(가벼운 톤)→판매 페이지(격식 톤): &quot;다른 곳에 온 것 같다&quot;며 이탈.</li>
          <li><strong>시점 불일치</strong> — 인지 단계 고객에게 바로 구매 CTA.</li>
          <li><strong>감정 불일치</strong> — Before(공감)에서 갑자기 After(과장)으로 점프.</li>
        </ul>
        <blockquote className="border-l-4 border-violet-400 pl-4 py-2 my-4 bg-violet-50 dark:bg-violet-950 rounded-r-lg">
          <p><strong>9챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>12개월 시즌 캘린더: 1월(새해 결심)→5월(종소세)→9월(추석)→11월(블프) 등 시즌 키워드+상품 자연 연결.</li>
            <li>A/B 테스트 규칙: 한 번에 하나만, 최소 100명, 1주일 이상, 결과를 기록.</li>
            <li><strong>오늘부터 실행</strong>: IF-THEN 규칙 3개를 설계해 이번 달부터 적용하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-10",
    title: "Ch.10 한 번 산 고객을 평생 고객으로: LTV 극대화 3단계",
    body: (
      <>
        <p>신규 고객 1명 데려오는 데 5,000~15,000원, 기존 고객 재구매 유도 비용은 거의 0원. <strong>LTV = 평균 구매 금액 x 구매 횟수 x 관계 유지 기간</strong> — 같은 고객인데 가치가 6배가 됩니다.</p>
        <h3 className="text-xl font-bold mt-8 mb-4">LTV 극대화 3단계</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>입문(Entry)</strong> — 가격 장벽 최소화(체크리스트 1,000원, 미니 클래스 9,900원), 즉각적 가치 제공, 다음 단계 자연 안내.</li>
          <li><strong>확장(Expansion)</strong> — 상품 라인업(입문→기본→심화→프리미엄→VIP), 번들링, 크로스셀, 업셀, 시즌 신상품.</li>
          <li><strong>충성(Loyalty)</strong> — 커뮤니티, 정기 구독, 로열티 프로그램, 서프라이즈 가치, 고객을 주인공으로, 피드백 루프 6장치.</li>
        </ol>
        <p><strong>구매 후 30일 시퀀스:</strong> D+0 감사+퀵스타트 → D+3 활용 팁 → D+7 후기 요청+쿠폰 → D+14 크로스셀 → D+21 무료 콘텐츠 → D+30 체크인.</p>
        <blockquote className="border-l-4 border-violet-400 pl-4 py-2 my-4 bg-violet-50 dark:bg-violet-950 rounded-r-lg">
          <p><strong>10챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>충성 고객의 재구매율 60~70%(일반 5~20%), 추천 3.2명, 가격 민감도 낮음.</li>
            <li>LTV를 2배로 올리면 같은 고객 수로 매출이 2배 — 신규 유치보다 효율적.</li>
            <li><strong>오늘부터 실행</strong>: 현재 LTV를 계산하고 구매 후 30일 시퀀스 메시지를 작성하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-11",
    title: "부록 — 실전 도구 모음: 체크리스트·워크시트·템플릿·30일 로드맵",
    body: (
      <>
        <p>이 부록에는 책에서 다룬 모든 프레임워크를 <strong>바로 복사해서 사용할 수 있는 실전 도구</strong>로 정리했습니다.</p>
        <h3 className="text-xl font-bold mt-8 mb-4">5종 실전 도구</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>판매 페이지 체크리스트</strong> — 구조·신뢰 장치·가격 프레이밍·CTA·톤앤매너·최종 점검 25항목</li>
          <li><strong>가격 프레이밍 워크시트</strong> — 기본 정보→앵커링 설계→세분화 계산→ROI 계산→최종 가격 제시 문구</li>
          <li><strong>신뢰 장치 점검표</strong> — 사회적 증거·권위·보증·시범·과정 공개 현황 진단 + 우선순위 결정 기준</li>
          <li><strong>CTA 템플릿 10개</strong> — 직접 구매·무료 체험·상담 연결·얼리버드·번들·한정 수량·리스크 제거·결과 약속·업그레이드·뉴스레터 전환</li>
          <li><strong>30일 세일즈 개선 로드맵</strong> — Week 1 진단과 기초, Week 2 신뢰와 가격, Week 3 판매 페이지와 CTA, Week 4 콘텐츠와 시스템</li>
        </ol>
        <p><strong>30일 후 다음 단계:</strong> 월간 루틴(데이터 분석+후기 수집+콘텐츠 12개+A/B 테스트), 분기별 루틴(판매 페이지 리뷰+라인업 확장+고객 인터뷰+LTV 점검).</p>
        <blockquote className="border-l-4 border-violet-400 pl-4 py-2 my-4 bg-violet-50 dark:bg-violet-950 rounded-r-lg">
          <p><strong>부록 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>좋은 상품 + 설득 시스템 = 지속적인 매출. 시스템은 한 번 만들면 계속 일한다.</li>
            <li>한 번에 완벽할 필요 없다 — 오늘 하나, 내일 하나, 매주 하나.</li>
            <li>하루 30분~1시간, 30일이면 판매 시스템이 완성됩니다.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
];

const updateLogs: UpdateLog[] = [
  {
    version: 1,
    date: "2026-09-13",
    changes: [
      "초판 발행: 무형 상품 판매 설득 시스템 10챕터 + 부록 실행 키트",
    ],
  },
];

export default function SellingInvisibleRead() {
  return (
    <GuideBook
      bookId="selling-invisible"
      title="만져볼 수 없는 상품을 완판시키는 설득 시스템"
      emoji="💎"
      subtitle="디지털 상품·온라인 강의·컨설팅 — 무형의 가치를 매출로 바꾸는 실전 가이드"
      topItems={topItems}
      sections={sections}
      updateLogs={updateLogs}
      currentVersion={1}
    />
  );
}
