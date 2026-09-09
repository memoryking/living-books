import GuideBook from "@/components/GuideBook";
import type {
  TopItem,
  ContentSection,
  UpdateLog,
} from "@/components/GuideBook";

export const metadata = {
  title: "사업 성패를 좌우하는 돈의 심리학 — 본문 | 살아있는 정보책",
  description:
    "인지 편향부터 CLEAR·IMPACT 모델까지 — 감정에 흔들리지 않는 재정 판단력. 서문 + 10개 챕터 + 부록 전문. 숨은 편향, 성장 마인드셋, 아침 루틴, 감정 관리, 인지 편향 극복, 리스크 관리, 부의 마인드셋, IMPACT 모델, 조직 문화, 미래 대응까지.",
};

const topItems: TopItem[] = [
  {
    number: 1,
    title: "당신의 금전적 결정 뒤에 숨어있는 힘",
    oneLiner: "편향을 없앨 수는 없지만, 인식하는 순간 영향력은 절반으로 줄어든다.",
    description:
      "앵커링 효과, 손실 회피, 시간 편향 — 뇌가 우리를 속이는 3가지 인지 편향. 개인주의 vs 집단주의 문화적 영향, 시장 변동성과 정보 과부하까지 금전 결정 뒤에 숨은 힘을 해부합니다.",
    situation: "'느낌'으로 결정한 재정적 선택이 최근 3개월 내 있을 때",
    action: "'나의 숨은 편향 확인하기' 4가지 질문에 솔직하게 답해보세요.",
    mission: "최근 사업 결정 3개를 골라 어떤 편향이 작용했는지 분석하세요.",
  },
  {
    number: 2,
    title: "재정적 성공을 원한다면, 생각의 틀부터 바꾸기",
    oneLiner: "마인드셋은 타고나는 게 아니라 훈련하는 것이다.",
    description:
      "고정 vs 성장 마인드셋, 4가지 전략적 투자 영역(디지털 전환·시장 확장·R&D·인재), 핵심 성장 지표 4가지(매출 성장률·시장 점유율·CAC·CLV), 실행 장애물 4가지 극복법.",
    situation: "'우리 업종은 원래 그래요'라는 말이 입에 붙었을 때",
    action: "지난 달 CAC와 CLV를 계산해보세요.",
    mission: "'지금 새로 시작한다면?' 질문으로 현재 지출 항목을 재점검하세요.",
  },
  {
    number: 3,
    title: "미래의 재정을 결정하는 매일의 작은 습관",
    oneLiner: "한 번의 대단한 분석보다, 매일의 30분 루틴이 재정 건강을 만든다.",
    description:
      "30분 아침 재무 루틴(10분씩 3파트), 대시보드 5대 지표(현금 보유량·미수금·일일 매출·고객 유지율·지출 카테고리), 토스/뱅크샐러드 활용법, 일일·주간·월간 SOP 설계.",
    situation: "바쁘게 일하면서도 돈이 새는 이유를 모를 때",
    action: "토스 또는 뱅크샐러드에 사업용 계좌를 연결하세요.",
    mission: "내일 아침부터 30분 루틴을 시작하고 대시보드 5대 지표를 기록하세요.",
  },
  {
    number: 4,
    title: "돈 앞에서 흔들릴 때, 내 감정부터 들여다보기",
    oneLiner: "감정은 적이 아니라 신호다 — 인식하고 활용하라.",
    description:
      "CLEAR 의사결정 모델 5단계(Capture·List·Evaluate·Analyze·Resolve), 금액별 냉각 시간표, 감정 인식 문화 만들기, 결정 전 파트너 시스템, 감정 스코어 기록법.",
    situation: "매출 급감에 불안해서 무리한 할인 행사를 벌이려 할 때",
    action: "오늘 내린 재정 결정 하나를 CLEAR 모델로 복기해보세요.",
    mission: "금액별 냉각 시간표를 인쇄해서 책상에 붙이세요.",
  },
  {
    number: 5,
    title: "사업적 결정에서 인지 편향 극복하기",
    oneLiner: "편향은 인간의 기본 작동 방식이다 — 부끄러워할 것이 아니라 시스템으로 관리하라.",
    description:
      "사업을 망치는 3대 편향(과신·확증·손실 회피) 심층 분석, 프리모템 기법, 악마의 변호인, 체계적 의사결정 체크리스트, 3종 자문 네트워크 구축법, 판단 정확도 추적 시스템.",
    situation: "'내가 해봐서 아는데' 식으로 감에 의존한 결정을 반복할 때",
    action: "의사결정 체크리스트를 인쇄해서 100만원 이상 결정마다 적용하세요.",
    mission: "자문 네트워크 3종류(동종 동료·이종 멘토·전문가) 중 부족한 영역을 채우세요.",
  },
  {
    number: 6,
    title: "위기 인식과 올바른 재무적 결정하기",
    oneLiner: "위기 관리는 위기가 왔을 때 하는 게 아니라, 평상시에 시스템을 만들어두는 것이다.",
    description:
      "카너먼의 시스템 1·2 판단 체계, 산업별 리스크 프로필, 4단계 리스크 관리 프레임워크(식별·평가·대응·모니터링), 3가지 시나리오 모델링, PEST 분석, 위기 대응 매뉴얼.",
    situation: "불안이 높아져 분석적 사고 없이 본능적으로 결정하려 할 때",
    action: "내 사업의 리스크 5가지를 나열하고 발생 가능성·영향도로 분류하세요.",
    mission: "최악의 시나리오에서 몇 개월 버틸 수 있는지 계산하세요.",
  },
  {
    number: 7,
    title: "부를 만드는 마인드셋 장착하기",
    oneLiner: "부는 한 번의 대박이 아니라, 올바른 마인드셋의 복리 효과다.",
    description:
      "장기 사고 vs 단기 사고, 전략적 자원 배분 70-20-10 법칙, 분기별 학습 커리큘럼, 성장 구조 4단계(생존·안정·성장·확장), 전략적 네트워크 3가지 층(내부·확장·정보 서클).",
    situation: "이번 달 매출에만 집중하고 장기적 투자를 미루고 있을 때",
    action: "자신이 성장 4단계 중 어디에 있는지 파악하세요.",
    mission: "70-20-10 법칙으로 이번 달 예산을 재배분해보세요.",
  },
  {
    number: 8,
    title: "IMPACT 모델 — 부를 이루기 위한 심리 구조",
    oneLiner: "IMPACT 모델은 한 번 배워서 끝나는 도구가 아니라, 사업에 맞게 진화시키는 것이다.",
    description:
      "IMPACT 프레임워크 6단계(Identify·Map Biases·Process Data·Analyze·Consider Culture·Track), 심리적 안전감 구축법, 감정 지능 4영역 훈련, 크로스러닝 세션, 측정→실행→적응 사이클.",
    situation: "개별 도구는 알지만 전체를 아우르는 통합 프레임워크가 필요할 때",
    action: "고민 중인 재정 결정 하나에 IMPACT 6단계를 적용해보세요.",
    mission: "팀에 심리적 안전감 수준을 1~10점으로 자가진단하세요.",
  },
  {
    number: 9,
    title: "팀 전체가 똑똑하게 판단하는 조직 문화 만들기",
    oneLiner: "똑똑한 개인 한 명보다, 똑똑하게 판단하는 문화를 가진 조직이 오래 살아남는다.",
    description:
      "월간 결정 리뷰 미팅 4단계, 반대자(Devil's Advocate) 역할 운영법, 비판적 사고 환경 규칙, 내부·외부 멘토십 프로그램, 부서 간 크로스 학습 세션, 조직 판단력 측정 3대 지표.",
    situation: "대표 한 사람에게 모든 재정 결정이 집중되어 있을 때",
    action: "다음 팀 미팅에서 '반대자 역할'을 도입해보세요.",
    mission: "지난 달 주요 결정 3개를 리뷰 형식으로 복기하세요.",
  },
  {
    number: 10,
    title: "변화하는 환경에서도 흔들리지 않는 재정 판단력",
    oneLiner: "미래를 예측할 수 없지만, 미래에 대응하는 능력은 훈련할 수 있다.",
    description:
      "AI 시대의 판단 보조 원칙, 학습형 시스템(일일·주간·월간·분기), 실패 학습 데이터베이스, 문화 변화 추적 프레임워크, 감정 지능+기술의 균형, 지속 가능한 부의 5기둥, 1년 로드맵.",
    situation: "기술 변화와 시장 불확실성에 어떻게 대응해야 할지 막막할 때",
    action: "AI 활용 원칙 4가지 중 사업에 바로 적용할 1가지를 선택하세요.",
    mission: "1년 후의 나에게 편지를 써보세요 — 가장 크게 달라진 것은?",
  },
];

const sections: ContentSection[] = [
  {
    id: "preface",
    title: "들어가며 — 어떤 창업가는 성장하고, 어떤 창업가는 제자리걸음인 이유",
    body: (
      <>
        <p>같은 시장, 비슷한 자본금, 유사한 제품 — 한 사업자는 3년 만에 매출 300%를 달성하고, 다른 사업자는 여전히 월세 걱정을 합니다. 차이는 <strong>돈에 대한 심리</strong>입니다.</p>

        <blockquote className="border-l-4 border-yellow-400 pl-4 py-2 my-4 bg-yellow-50 dark:bg-yellow-950 rounded-r-lg">
          재정적 결정의 80%는 논리가 아니라 심리가 좌우합니다.
        </blockquote>

        <h3 className="text-xl font-bold mt-8 mb-4">에밀리의 이야기</h3>
        <p>어린 시절 부모의 파산을 목격한 소규모 사업가 에밀리. 투자 기회가 와도 공포가 먼저, 직원 채용을 미루고, 성장 대출도 거부했습니다. 돈에 대한 <strong>심리 패턴을 인식</strong>한 후 — 감정·사실 분리, 의사결정 프레임워크, 매일 30분 재무 루틴을 실천하여 2년 만에 매출 300% 성장을 달성했습니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">이 책의 구성</h3>
        <p><strong>1~2장</strong> — 왜 내 판단이 틀어지는지 이해합니다.</p>
        <p><strong>3~4장</strong> — 매일의 습관과 감정 관리법을 익힙니다.</p>
        <p><strong>5~6장</strong> — 편향을 극복하고 리스크를 관리합니다.</p>
        <p><strong>7~8장</strong> — 부를 만드는 구조와 심리 모델을 장착합니다.</p>
        <p><strong>9~10장</strong> — 팀과 미래를 설계합니다.</p>
        <p><strong>부록</strong> — 바로 복사해서 쓸 수 있는 실행 키트 9종.</p>

        <blockquote className="border-l-4 border-yellow-400 pl-4 py-2 my-4 bg-yellow-50 dark:bg-yellow-950 rounded-r-lg">
          <p><strong>서문 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>돈의 심리학을 아는 사업자는 같은 상황에서 다른 선택을 한다.</li>
            <li>한국 사업 환경(빠른 트렌드·높은 임대료·체면 문화)에 맞춘 프레임워크.</li>
            <li>1~2장이 모든 챕터의 기초이므로 반드시 먼저 읽으세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch1",
    title: "Ch.1 당신의 금전적 결정 뒤에 숨어있는 힘",
    body: (
      <>
        <p>&quot;나는 논리적으로 판단한다&quot;고 믿지만, 뇌과학과 행동경제학은 다른 이야기를 합니다. 금전적 결정 뒤에는 <strong>세 가지 보이지 않는 힘</strong>이 작용합니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">1. 인지 편향 — 뇌가 우리를 속이는 방법</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>앵커링 효과</strong> — 처음 접한 숫자가 판단 기준이 됨. 상가 임대료 협상에서 중개인의 첫 제시 가격이 앵커가 됩니다.</li>
          <li><strong>손실 회피</strong> — 이익보다 손실에 <strong>2배</strong> 강하게 반응. 적자 매장을 &quot;지금 닫으면 손해&quot;라며 계속 운영합니다.</li>
          <li><strong>시간 편향</strong> — 오늘의 10만원이 1년 후 50만원보다 매력적. 장기 투자(브랜딩, 시스템)보다 단기 수익(할인, 박리다매)에 집착합니다.</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">2. 문화적 영향 — 개인주의 vs 집단주의</h3>
        <p>한국 사업자가 주의해야 할 문화적 함정:</p>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>모임 투자</strong> — &quot;나만 빠지면 안 될 것 같아서&quot; 참여하는 투자</li>
          <li><strong>체면 소비</strong> — 실제 필요보다 큰 사무실, 비싼 차량, 과도한 접대비</li>
          <li><strong>대세 추종</strong> — &quot;요즘 다들 한다&quot;는 유행 따라가기 투자</li>
          <li><strong>관계 대출</strong> — 거절하기 어려운 지인의 보증 요청</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">3. 외부 요인 — 시장, 기술, 정보 과부하</h3>
        <p>한국 소상공인 5년 생존율 약 30%. 빠른 트렌드 변화, 배달앱 수수료 인상, SNS &quot;성공 사례&quot; 범람이 심리적 불안을 증폭시킵니다.</p>

        <blockquote className="border-l-4 border-yellow-400 pl-4 py-2 my-4 bg-yellow-50 dark:bg-yellow-950 rounded-r-lg">
          <p><strong>1챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>편향(앵커링·손실 회피·시간 편향)을 인식하면 영향력이 절반으로 줄어든다.</li>
            <li>한국 문화적 함정(체면·모임·대세 추종)을 경계하라.</li>
            <li><strong>오늘부터 실행</strong>: 숨은 편향 체크리스트 4문항에 답하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch2",
    title: "Ch.2 재정적 성공을 원한다면, 생각의 틀부터 바꾸기",
    body: (
      <>
        <p>고정 마인드셋: &quot;우리 업종은 원래 그래요.&quot; 성장 마인드셋: &quot;이번 실패에서 뭘 배울 수 있지?&quot; — 감정 지능이 높은 사업자는 위기 상황에서 <strong>생존율이 65% 더 높습니다.</strong></p>

        <h3 className="text-xl font-bold mt-8 mb-4">4가지 전략적 투자 영역</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>디지털 전환</strong> — POS 도입, 스마트스토어 입점, 카카오톡 채널 자동화</li>
          <li><strong>시장 확장</strong> — 온라인 채널 추가, B2B 납품, 지역 한정 &rarr; 전국 배송</li>
          <li><strong>R&amp;D</strong> — 신메뉴/신상품 테스트, 원가 절감, 경쟁사 차별화</li>
          <li><strong>인재 투자</strong> — 핵심 인력 역량 강화, 교육비는 비용이 아니라 투자</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">핵심 성장 지표 4가지</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>매출 성장률</strong> — 전월 대비 월 3~5% 이상 목표</li>
          <li><strong>시장 점유율</strong> — 분기별 측정</li>
          <li><strong>고객 획득 비용(CAC)</strong> — 낮을수록 좋음</li>
          <li><strong>고객 생애 가치(CLV)</strong> — CAC의 3배 이상이 핵심 기준</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">실행 장애물 극복</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>완벽주의</strong> &rarr; 70% 준비되면 실행, 나머지는 하면서 배움</li>
          <li><strong>비교 함정</strong> &rarr; 비교 대상은 어제의 나, 매일 1%만 나아지기</li>
          <li><strong>매몰 비용</strong> &rarr; &quot;지금 새로 시작한다면 이 사업에 투자하겠는가?&quot;</li>
          <li><strong>혼자 하려는 습관</strong> &rarr; 매월 1회 멘토와 재정 상태 공유</li>
        </ul>

        <blockquote className="border-l-4 border-yellow-400 pl-4 py-2 my-4 bg-yellow-50 dark:bg-yellow-950 rounded-r-lg">
          <p><strong>2챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>CLV/CAC 비율 3:1 미만이면 고객 확보할수록 손해 구조.</li>
            <li>마인드셋은 타고나는 게 아니라 매일의 작은 선택으로 훈련하는 것.</li>
            <li><strong>오늘부터 실행</strong>: 지난 달 CAC·CLV를 계산하고, 이번 주 &quot;작은 실험&quot; 1개를 실행하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch3",
    title: "Ch.3 미래의 재정을 결정하는 매일의 작은 습관",
    body: (
      <>
        <p>바쁘게 일하면서도 돈이 새는 이유 — 재정 상태를 들여다보는 시간이 없기 때문입니다. 하루 <strong>30분 아침 재무 루틴</strong>이 한 달, 1년, 5년 후의 재정을 결정합니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">30분 아침 재무 루틴</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>첫 10분</strong> — 어제 매출/지출 확인, 예상 vs 실제 차이, 특이사항</li>
          <li><strong>중간 10분</strong> — 오늘 들어올 돈·나갈 돈 점검, 현금 흐름 체크</li>
          <li><strong>마지막 10분</strong> — 주간 매출 추세, 월간 목표 대비 달성률, 다음 주 대비</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">대시보드 5대 지표</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>현금 보유량</strong> — 최소 3개월치 고정비 이상 (수익 흑자여도 현금 없으면 부도)</li>
          <li><strong>미수금/미지급금</strong> — 회수 기간 30일 이내 유지</li>
          <li><strong>일일 매출</strong> — 요일별·시간대별 패턴 파악으로 재고·인력 최적화</li>
          <li><strong>고객 유지율</strong> — 신규 확보보다 기존 유지가 5~7배 저렴, 최소 60% 목표</li>
          <li><strong>지출 카테고리</strong> — 인건비·임대료·원재료·마케팅·관리비 매출 대비 비율 추적</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">SOP(표준 운영 절차) 만들기</h3>
        <p>재무 루틴을 &quot;의지&quot;에 맡기면 3일을 못 갑니다. <strong>시스템</strong>으로 만드세요.</p>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>일일 SOP</strong> — 오전 9시, 토스/뱅크샐러드로 20분 체크</li>
          <li><strong>주간 SOP</strong> — 매주 월요일, 매출·지출 총정리 + 다음 주 예산 (50분)</li>
          <li><strong>월간 SOP</strong> — 매월 1일, 손익 계산 + CAC/CLV + 다음 달 예산 (2시간)</li>
        </ul>

        <blockquote className="border-l-4 border-yellow-400 pl-4 py-2 my-4 bg-yellow-50 dark:bg-yellow-950 rounded-r-lg">
          <p><strong>3챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>시스템이 의지를 이긴다 — 루틴을 같은 시간·같은 장소에 붙여라.</li>
            <li>대시보드 5대 지표만 꾸준히 추적해도 재정 건강 80% 관리 가능.</li>
            <li><strong>오늘부터 실행</strong>: 사업용 계좌 연결 + 내일 아침 30분 알람 설정.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch4",
    title: "Ch.4 돈 앞에서 흔들릴 때, 내 감정부터 들여다보기",
    body: (
      <>
        <p>강한 감정 상태에서 내린 재정 결정의 <strong>70% 이상</strong>이 사후에 후회로 이어집니다. 감정 자체가 나쁜 게 아닙니다 — 감정을 인식하지 못한 채 결정하는 것이 문제입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">CLEAR 의사결정 모델 5단계</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>C - Capture Emotion</strong> — 10초간 멈추고, 감정에 이름 붙이기. 이름을 붙이는 것만으로 영향력 <strong>40% 감소</strong>.</li>
          <li><strong>L - List Facts</strong> — &quot;사실&quot;과 &quot;해석&quot;을 종이에 분리. 숫자·날짜·데이터만 사실 칸에.</li>
          <li><strong>E - Evaluate Influence</strong> — 앵커링, 손실 회피, 확증 편향, 시간 압박, 사회적 영향 체크.</li>
          <li><strong>A - Analyze Alternatives</strong> — 최소 3가지 선택지(현재 안·정반대·아무것도 안 함) + 시나리오.</li>
          <li><strong>R - Resolve Balanced</strong> — &quot;3개월 후의 내가 이 결정을 어떻게 평가할까?&quot;</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">금액별 냉각 시간</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li>50만원 미만 &rarr; 1시간</li>
          <li>50만~300만원 &rarr; 24시간</li>
          <li>300만~1,000만원 &rarr; 3일</li>
          <li>1,000만원 이상 &rarr; 1주일</li>
        </ul>
        <p>&quot;지금 안 하면 기회를 놓친다&quot;는 대부분 감정의 트릭입니다.</p>

        <blockquote className="border-l-4 border-yellow-400 pl-4 py-2 my-4 bg-yellow-50 dark:bg-yellow-950 rounded-r-lg">
          <p><strong>4챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>감정은 적이 아니라 신호 — 인식하고, 활용하라.</li>
            <li>CLEAR 모델 5단계로 감정과 이성의 균형 잡힌 판단이 가능하다.</li>
            <li><strong>오늘부터 실행</strong>: 냉각 시간표를 책상에 붙이고, 감정 스코어 기록을 시작하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch5",
    title: "Ch.5 사업적 결정에서 인지 편향 극복하기",
    body: (
      <>
        <p>문제는 편향이 있다는 사실이 아니라, <strong>편향이 있다는 것을 모르는 것</strong>입니다. 사업을 망치는 3대 편향을 심층 분석합니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">과신 편향 (Overconfidence Bias)</h3>
        <p>&quot;10년 경력 사장님이 상권 분석 없이 새 지점을 냈다가 6개월 만에 보증금 3,000만원을 날렸습니다.&quot;</p>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>기준율 확인</strong> — 해당 업종 평균 성공률부터 파악</li>
          <li><strong>프리모템</strong> — &quot;실패한다면 원인은?&quot;을 미리 상상</li>
          <li><strong>예측 기록</strong> — 내 예측 vs 실제 결과 정확도 추적</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">확증 편향 (Confirmation Bias)</h3>
        <p>배달 전문점 준비 시 성장 기사만 읽고, 수수료 인상·경쟁 과열 경고는 무시한 사례.</p>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>반대 의견 의무화</strong> — &quot;왜 실패할 수 있는가?&quot; 3가지 이상</li>
          <li><strong>악마의 변호인</strong> — 팀 내 1명이 의도적 반대 입장</li>
          <li><strong>다양한 정보원</strong> — 최소 3개 이상 서로 다른 출처</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">손실 회피 (Loss Aversion)</h3>
        <p>인테리어 5,000만원 투자 카페, 1년째 적자 — 매몰 비용이 발목을 잡습니다.</p>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>제로 베이스 사고</strong> — &quot;백지 상태라면 이 사업을 시작할 것인가?&quot;</li>
          <li><strong>기회 비용 계산</strong> — 묶인 시간·돈으로 다른 무엇을 할 수 있는가?</li>
          <li><strong>손절 기준 사전 설정</strong> — 시작 전에 &quot;이 조건이면 그만둔다&quot; 설정</li>
        </ul>

        <blockquote className="border-l-4 border-yellow-400 pl-4 py-2 my-4 bg-yellow-50 dark:bg-yellow-950 rounded-r-lg">
          <p><strong>5챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>편향 극복은 의지가 아니라 시스템(체크리스트·자문 네트워크·정확도 추적)으로.</li>
            <li>3종 자문 네트워크: 동종 동료 3~5명, 이종 멘토 1명, 전문가(회계사·세무사).</li>
            <li><strong>오늘부터 실행</strong>: 최근 가장 큰 재정 결정에 어떤 편향이 작용했는지 분석하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch6",
    title: "Ch.6 위기 인식과 올바른 재무적 결정하기",
    body: (
      <>
        <p>카너먼의 <strong>시스템 1(직관)</strong>과 <strong>시스템 2(분석)</strong>. 위기 상황에서 불안이 높아지면 분석적 사고가 마비되고, 본능적 반응이 지배합니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">4단계 리스크 관리 프레임워크</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>식별</strong> — 재무·운영·시장·평판 리스크를 이름 붙이기</li>
          <li><strong>평가</strong> — 발생 가능성 x 영향도 매트릭스 작성</li>
          <li><strong>대응</strong> — 회피·감소·전가·수용 전략 수립</li>
          <li><strong>모니터링</strong> — 분기별 리스크 매트릭스 업데이트</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">3가지 시나리오 모델링</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>시나리오 A(최선)</strong> — 모든 것이 계획대로</li>
          <li><strong>시나리오 B(기본)</strong> — 매출 예측의 70% 수준으로 보수적 계산</li>
          <li><strong>시나리오 C(최악)</strong> — 매출 50% 감소, 비용 20% 증가. <strong>&quot;이 시나리오에서도 생존 가능한가?&quot;</strong></li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">PEST 분석 — 분기별 외부 환경 점검</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>P(정치/정책)</strong> — 최저임금, 소상공인 지원, 세제 변경</li>
          <li><strong>E(경제)</strong> — 금리, 물가, 환율, 소비 심리</li>
          <li><strong>S(사회)</strong> — 소비 트렌드, 인구 구조(고령화·1인 가구), 라이프스타일</li>
          <li><strong>T(기술)</strong> — AI·자동화, 배달/결제 플랫폼, 디지털 마케팅 변화</li>
        </ul>

        <blockquote className="border-l-4 border-yellow-400 pl-4 py-2 my-4 bg-yellow-50 dark:bg-yellow-950 rounded-r-lg">
          <p><strong>6챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>위기 관리는 평상시에 시스템을 만들어두는 것이 핵심.</li>
            <li>최악의 시나리오에서도 생존 가능한지가 모든 투자 결정의 필수 질문.</li>
            <li><strong>오늘부터 실행</strong>: 리스크 5가지 나열 + 최악 시나리오에서 버틸 수 있는 개월 수 계산.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch7",
    title: "Ch.7 부를 만드는 마인드셋 장착하기",
    body: (
      <>
        <p>이번 달 매출에만 집중하는 사업자와, 이번 달을 챙기면서 <strong>3년 뒤를 준비하는 사업자</strong>의 결과는 완전히 다릅니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">70-20-10 자원 배분 법칙</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>70% 핵심 사업 유지</strong> — 기존 고객·주력 상품·일상 운영</li>
          <li><strong>20% 성장 투자</strong> — 신규 고객·새 판매 채널·상품 업그레이드</li>
          <li><strong>10% 실험</strong> — 새 아이디어·새 기술·새 시장 탐색. 이 10%가 미래의 70%가 될 수 있습니다.</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">성장 구조 4단계</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>생존</strong> — 월 고정비 충당, 제품-시장 적합성 확인</li>
          <li><strong>안정</strong> — 3개월 이상 흑자, 반복 가능한 수익 모델</li>
          <li><strong>성장</strong> — 매출·수익 지속 증가, 확장 가능 구조</li>
          <li><strong>확장</strong> — 새 시장·새 수익원, &quot;내가 없어도 돌아가는 구조&quot;</li>
        </ol>
        <p>1단계에서 4단계의 전략을 쓰면 자원만 낭비합니다. <strong>지금 몇 단계인지 정확히 아는 것</strong>이 중요합니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">전략적 네트워크 3가지 층</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>내부 서클(3~5명)</strong> — 재정 상태 공유 가능한 신뢰 관계, 매달 1회 심층 미팅</li>
          <li><strong>확장 서클(10~20명)</strong> — 같은/관련 업종 네트워크, 분기 1회 모임</li>
          <li><strong>정보 서클(50~100명)</strong> — 다양한 전문가·멘토, 새로운 관점 습득</li>
        </ul>

        <blockquote className="border-l-4 border-yellow-400 pl-4 py-2 my-4 bg-yellow-50 dark:bg-yellow-950 rounded-r-lg">
          <p><strong>7챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>매일 1%씩 나아지면 1년 후 37배 — 부는 마인드셋의 복리 효과.</li>
            <li>10%의 실험 예산을 반드시 확보하라.</li>
            <li><strong>오늘부터 실행</strong>: 성장 4단계 중 현재 위치 파악 + 70-20-10 예산 재배분.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch8",
    title: "Ch.8 IMPACT 모델 — 부를 이루기 위한 심리 구조",
    body: (
      <>
        <p>인지 편향, 감정 관리, 리스크 관리, 성장 마인드셋을 <strong>하나로 통합하는 6단계 프레임워크</strong>입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">IMPACT 프레임워크 6단계</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>I - Identify</strong> — 감정 상태, 결정 촉발 계기, 긴급도, 이해관계자 확인</li>
          <li><strong>M - Map Biases</strong> — 앵커링·과신·확증·손실 회피·시간·군중 심리 체크. 2개 이상 해당 시 결정 보류.</li>
          <li><strong>P - Process Data</strong> — 재무 수치, 시장 데이터, 과거 데이터, 벤치마크 수집</li>
          <li><strong>A - Analyze Alternatives</strong> — 최소 3가지 대안: 비용·수익·리스크·실행 가능성·기회 비용</li>
          <li><strong>C - Consider Culture</strong> — 체면·동조 압력·한국 시장 규제·소비자 특성 반영</li>
          <li><strong>T - Track Outcomes</strong> — 1주/1개월/3개월 후 실제 결과 추적 + 학습</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">심리적 안전감 만들기</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li>리더가 먼저 자신의 실수를 공개적으로 인정</li>
          <li>질문을 환영하는 말습관: &quot;좋은 질문이네요&quot;</li>
          <li>매월 &quot;이달의 실패에서 배운 것&quot; 공유 세션</li>
          <li>다른 의견 제시한 사람에게 감사 표현</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">감정 지능(EI) 4영역 훈련</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>자기 인식</strong> — 매일 감정 일기 2분</li>
          <li><strong>자기 관리</strong> — 스트레스 시 6초 호흡법</li>
          <li><strong>사회적 인식</strong> — 대화 시 상대방 감정 먼저 읽기</li>
          <li><strong>관계 관리</strong> — 갈등 시 &quot;나 전달법&quot; 사용</li>
        </ul>

        <blockquote className="border-l-4 border-yellow-400 pl-4 py-2 my-4 bg-yellow-50 dark:bg-yellow-950 rounded-r-lg">
          <p><strong>8챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>IMPACT = 측정 &rarr; 실행 &rarr; 적응을 반복하며 사업에 맞게 진화시키는 모델.</li>
            <li>감정 지능이 높은 사업자는 위기 생존율이 65% 더 높다.</li>
            <li><strong>오늘부터 실행</strong>: 고민 중인 결정 1개에 IMPACT 6단계 적용 + 심리적 안전감 자가진단.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch9",
    title: "Ch.9 팀 전체가 똑똑하게 판단하는 조직 문화 만들기",
    body: (
      <>
        <p>대표의 판단력이 아무리 뛰어나도, 사업이 커지면 모든 결정을 혼자 내릴 수 없습니다. <strong>팀 전체의 판단 품질</strong>이 사업의 성패를 결정합니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">결정 리뷰 미팅 (월 1회, 60분)</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>결정 목록 공유</strong> (10분) — 지난 달 주요 재정 결정 정리</li>
          <li><strong>결정 과정 복기</strong> (20분) — 정보 근거·대안 고려·감정 영향·IMPACT 적용 여부</li>
          <li><strong>학습 포인트 도출</strong> (20분) — 잘한 결정·개선 필요 결정·교훈</li>
          <li><strong>다음 달 주요 결정 예고</strong> (10분) — 필요한 정보·담당자·데드라인</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">반대자 역할 (Devil&apos;s Advocate)</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li>매 미팅마다 한 명이 공식적으로 반대자 역할 — 돌아가며 담당</li>
          <li>모든 제안에 최소 <strong>3가지 반론</strong> 제시 의무</li>
          <li>핵심 질문: &quot;이 계획이 실패한다면 가장 큰 원인은?&quot; &quot;우리가 놓치고 있는 정보는?&quot;</li>
        </ul>
        <p>한국 조직 문화에서는 역할을 공식화하고, 대표가 솔선하여 반대 의견을 환영하며, 익명 피드백 시스템을 두세요.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">조직 판단력 측정 3대 지표</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>결정 정확도</strong> — 예측 vs 실제 결과 일치도 (분기별)</li>
          <li><strong>결정 속도</strong> — 문제 인식 &rarr; 결정까지 걸리는 시간</li>
          <li><strong>결정 실행률</strong> — 결정한 것 중 실제 실행한 비율</li>
        </ul>

        <blockquote className="border-l-4 border-yellow-400 pl-4 py-2 my-4 bg-yellow-50 dark:bg-yellow-950 rounded-r-lg">
          <p><strong>9챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>똑똑한 개인 한 명보다, 판단 문화를 가진 조직이 오래 살아남는다.</li>
            <li>문화는 시스템으로 만든다 — 리뷰 미팅·반대자 역할·크로스 학습.</li>
            <li><strong>오늘부터 실행</strong>: 다음 팀 미팅에서 반대자 역할 도입 + 지난 달 결정 3개 복기.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch10",
    title: "Ch.10 변화하는 환경에서도 흔들리지 않는 재정 판단력",
    body: (
      <>
        <p>AI 시대, 재정 판단의 풍경이 바뀌고 있습니다. 중요한 것은 <strong>AI가 판단을 대체하는 것이 아니라 보조한다</strong>는 점입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">사업자를 위한 AI 활용 4원칙</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>판단의 보조 도구</strong> — AI 분석 참고, 최종 결정은 사람이</li>
          <li><strong>편향 체크 도구</strong> — &quot;내가 놓치고 있는 관점은?&quot;을 AI에게 질문</li>
          <li><strong>반복 업무 자동화</strong> — 데이터 수집·정리·보고서는 AI에게, 사람은 판단에 집중</li>
          <li><strong>학습 도구</strong> — 새 분야 기초 지식을 빠르게 습득</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">학습형 시스템 구축</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>일일</strong> — 업계 뉴스 10분 + 오늘 결정에서 배운 점 1줄</li>
          <li><strong>주간</strong> — &quot;이번 주의 교훈&quot; 팀 공유 + 경쟁사 동향 리뷰</li>
          <li><strong>월간</strong> — 결정 리뷰 미팅 + 외부 강연/학습 + 크로스러닝</li>
          <li><strong>분기</strong> — IMPACT 적용 결과 리뷰 + 리스크 매트릭스 업데이트</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">지속 가능한 부의 5기둥</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>반복 수익 모델</strong> — 한 번 팔고 끝이 아닌 반복 수익 구조</li>
          <li><strong>시스템 의존</strong> — 사람이 아닌 시스템이 돌아가는 구조</li>
          <li><strong>학습 순환</strong> — 실패에서 배우고, 성공을 복제</li>
          <li><strong>관계 자산</strong> — 시간이 갈수록 깊어지는 고객/파트너 관계</li>
          <li><strong>적응 능력</strong> — 환경 변화에 빠르게 대응하는 유연한 구조</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">1년 로드맵</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>1주차</strong> — 30분 아침 루틴 + 감정 스코어 기록 시작</li>
          <li><strong>1개월</strong> — CLEAR 모델 10회 이상 적용 + 대시보드 안정화</li>
          <li><strong>3개월</strong> — IMPACT 모델 팀 도입 + 결정 리뷰 미팅 정착</li>
          <li><strong>6개월</strong> — 학습형 시스템 가동 + 판단 정확도 추적</li>
          <li><strong>1년</strong> — 자신만의 의사결정 프레임워크 완성</li>
        </ul>

        <blockquote className="border-l-4 border-yellow-400 pl-4 py-2 my-4 bg-yellow-50 dark:bg-yellow-950 rounded-r-lg">
          <p><strong>10챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>매일 1% 성장 = 1년 후 37배. 매일 1% 퇴보 = 1년 후 0.03배.</li>
            <li>감정 지능(EI) + 기술 활용(TQ) 두 축의 균형이 미래 경쟁력.</li>
            <li><strong>오늘부터 실행</strong>: 1년 후의 나에게 편지를 쓰세요 — &quot;가장 크게 달라진 것은 ___이다.&quot;</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "appendix",
    title: "부록 — 복사해 쓰는 돈의 심리학 실행 키트",
    body: (
      <>
        <p>이 부록의 모든 도구는 바로 복사하여 실전에 활용할 수 있도록 설계했습니다. 인쇄하거나 디지털 문서로 만들어 매일 사용하세요.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">1. 인지 편향 자가진단 체크리스트</h3>
        <p>중요한 재정 결정 전 아래 5개 카테고리를 체크. <strong>3개 이상 해당 시 24시간 냉각</strong>.</p>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>과신</strong> — &quot;반드시 성공한다&quot;는 확신, 시장 조사 없는 직감 판단</li>
          <li><strong>확증</strong> — 지지 정보만 수집, 반대 의견 무시</li>
          <li><strong>손실 회피</strong> — &quot;이미 투자했으니까&quot;, 새 기회보다 현재 고수</li>
          <li><strong>앵커링</strong> — 특정 숫자에 고정, 첫 정보가 기준</li>
          <li><strong>시간 편향</strong> — 당장의 이익 &gt; 6개월 후 더 큰 이익</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">2. CLEAR 워크시트 핵심</h3>
        <p>C(감정 포착: 이름+강도+신체 반응) &rarr; L(사실 vs 해석 분리) &rarr; E(5대 영향 요인 체크) &rarr; A(3가지 대안 + 시나리오) &rarr; R(&quot;3개월 후의 나&quot; 테스트)</p>

        <h3 className="text-xl font-bold mt-8 mb-4">3. 30분 아침 루틴 템플릿</h3>
        <p>첫 10분(어제 매출/지출/차이/특이사항) &rarr; 중간 10분(오늘 입금/지출/긴급) &rarr; 마지막 10분(주간 추세/월 목표 달성률)</p>

        <h3 className="text-xl font-bold mt-8 mb-4">4. 대시보드 5대 지표 설정</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li>현금 보유량: 최소 3개월치, 2개월 미만 주의, 1개월 미만 긴급</li>
          <li>미수금: 30일 이내 회수 목표</li>
          <li>일일 매출: 손익분기 일 매출 + 요일별 패턴</li>
          <li>고객 유지율: 60% 이상 목표</li>
          <li>지출 비율: 인건비 25~35%, 임대료 10~15%, 원가 30~40%, 마케팅 5~10%</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">5. IMPACT 실전 카드</h3>
        <p>I(감정+긴급도) &rarr; M(편향 6종 체크) &rarr; P(데이터 수집) &rarr; A(3가지 대안 비교) &rarr; C(문화적 맥락) &rarr; T(1/3/6개월 추적 일정)</p>

        <h3 className="text-xl font-bold mt-8 mb-4">6~9. 추가 도구</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>리스크 평가 매트릭스</strong> — 발생 가능성(1~5) x 영향도(1~5). 20점 이상 즉시 대응.</li>
          <li><strong>학습 커리큘럼</strong> — 월별 주제·방법·목표 12개월 계획표</li>
          <li><strong>감정 스코어 시트</strong> — 주간 기록(결정·감정·강도·CLEAR 적용·결과·배운 점)</li>
          <li><strong>FAQ 10선</strong> — 혼자 사업할 때 반대자 역할, 30분이 없을 때 10분 시작, AI 활용 3가지 등</li>
        </ul>

        <blockquote className="border-l-4 border-yellow-400 pl-4 py-2 my-4 bg-yellow-50 dark:bg-yellow-950 rounded-r-lg">
          <p><strong>부록 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>모든 템플릿은 노션·구글 독스·종이에 바로 옮겨 쓸 수 있다.</li>
            <li>완벽하게 채우려 하지 마세요 — 하나씩, 조금씩, 꾸준히가 최고의 전략.</li>
            <li>읽는 것과 실천하는 것의 차이가 1년 후 사업을 완전히 다른 곳으로 데려갈 것입니다.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
];

const updateLogs: UpdateLog[] = [
  {
    version: 1,
    date: "2026-09-09",
    changes: ["초판 발행"],
  },
];

export default function MoneyPsychologyReadPage() {
  return (
    <GuideBook
      bookId="money-psychology"
      title="사업 성패를 좌우하는 돈의 심리학"
      emoji="💰"
      subtitle="인지 편향부터 CLEAR·IMPACT 모델까지 — 감정에 흔들리지 않는 재정 판단력"
      topItems={topItems}
      sections={sections}
      updateLogs={updateLogs}
      currentVersion={1}
    />
  );
}
