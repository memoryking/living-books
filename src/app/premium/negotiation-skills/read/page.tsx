import GuideBook from "@/components/GuideBook";
import type {
  TopItem,
  ContentSection,
  UpdateLog,
} from "@/components/GuideBook";

export const metadata = {
  title: "협상의 기술 — 본문 | 살아있는 정보책",
  description:
    "BATNA 전략부터 연봉 스크립트까지 — 한국 문화에 맞는 실전 협상 시스템. 서문 + 10개 챕터 + 부록 전문. 마인드셋, 준비, 앵커링, No 대처, 연봉, 비즈니스, 일상, 한국 문화, 디지털, 30일 플랜.",
};

const topItems: TopItem[] = [
  {
    number: 1,
    title: "협상은 싸움이 아니다: 마인드셋 전환",
    oneLiner: "협상을 피하는 것 자체가 이미 협상에서 진 것이다.",
    description:
      "분배적 vs 통합적 협상, 입장(Position) vs 이해(Interest), BATNA 개념, 일상이 협상이라는 인식, 마인드셋 자가 진단.",
    situation: "협상이라는 단어만 들어도 불편하고 피하고 싶을 때",
    action: "오늘 하루 동안 겪은 협상 상황 5개를 기록하세요.",
    mission: "마인드셋 점검 질문 6개에 솔직하게 답해보세요.",
  },
  {
    number: 2,
    title: "준비가 90%다: 협상 전 필수 체크리스트",
    oneLiner: "협상에서 힘이란, 더 많이 준비한 사람에게 있다.",
    description:
      "정보 수집 3축(상대·시장·나), 세 가지 목표(이상적·현실적·최소한), ZOPA, BATNA 강화법, 5분 준비 루틴.",
    situation: "연봉 협상 자리에서 '준비 없이 감'으로 임하고 있을 때",
    action: "다음 협상에 대한 준비 워크시트를 채워보세요.",
    mission: "나의 BATNA를 구체적으로 적고, 약하면 강화 행동 1가지를 실행하세요.",
  },
  {
    number: 3,
    title: "앵커링: 누가 먼저 숫자를 말할 것인가",
    oneLiner: "처음에 제시된 숫자가 최종 합의점을 끌어당긴다.",
    description:
      "앵커링 효과의 과학, 먼저 제시 vs 기다리기 판단 기준, Extreme but Justifiable 원칙, 연봉·중고차·전세·프리랜서 스크립트.",
    situation: "상대가 먼저 낮은 숫자를 제시해서 계속 끌려갈 때",
    action: "다음 가격 협상에서 시장 데이터를 근거로 먼저 앵커를 설정하세요.",
    mission: "연봉 협상 스크립트 3가지 방법 중 내 상황에 맞는 것을 골라 연습하세요.",
  },
  {
    number: 4,
    title: "상대의 No를 다루는 기술",
    oneLiner: "No는 끝이 아니라 진짜 협상이 시작되는 신호다.",
    description:
      "No의 6가지 진짜 의미, FBI 라벨링 기법, 미러링, 열린 질문 전환, 전략적 침묵, 감정적 반응 3단계 대처.",
    situation: "상대가 '안 됩니다'라고 하면 더 이상 말 못하고 물러설 때",
    action: "일상 대화에서 라벨링('~인 것 같습니다')을 3회 사용해보세요.",
    mission: "상대 말의 마지막 1~3단어를 반복하는 미러링을 연습하세요.",
  },
  {
    number: 5,
    title: "연봉 협상 완전 공략",
    oneLiner: "기업의 84%는 연봉 협상을 기대하고 있다.",
    description:
      "이직·현 직장 연봉 협상 타이밍·스크립트, 성과 정량화 프레임워크, 연봉 외 협상 9항목, 2026 연봉 시장 데이터.",
    situation: "회사에서 정해준 연봉을 그대로 받고 있을 때",
    action: "올해 성과를 숫자로 정량화해서 표로 정리하세요.",
    mission: "부록의 연봉 협상 이메일 스크립트를 자신의 상황에 맞게 수정하세요.",
  },
  {
    number: 6,
    title: "비즈니스 협상: 계약·거래·파트너십",
    oneLiner: "가격만 협상하지 마라 — 모든 조건이 협상 대상이다.",
    description:
      "B2B 5대 원칙, '비싸요' 대응법, 계약 조건·결제 조건 조율, 프리랜서 단가 협상, 갑을 관계에서 을의 전략.",
    situation: "클라이언트가 '비싸요'라고 하면 바로 할인을 제안할 때",
    action: "'비싸요'의 5가지 진짜 의미를 파악하는 질문을 준비하세요.",
    mission: "을의 협상 카드 6가지 중 자신에게 해당하는 것을 체크하세요.",
  },
  {
    number: 7,
    title: "일상의 협상: 가족·친구·서비스",
    oneLiner: "가장 어려운 협상은 가까운 사람과의 협상이다.",
    description:
      "부모님 설득(진로·독립), 배우자와 합의(가사·재정), 자녀 협상, 부동산, 수리비·환불, 이웃 소음 문제.",
    situation: "가족과 대화하면 감정만 상하고 합의에 도달하지 못할 때",
    action: "가사 분담 선호도 표를 작성해서 배우자와 공유하세요.",
    mission: "이번 주 서비스 불만(환불·수리비 등) 1건에 정중하게 요청해보세요.",
  },
  {
    number: 8,
    title: "문화와 협상: 한국적 상황에서의 전략",
    oneLiner: "한국 문화를 무시하면 협상이 실패한다.",
    description:
      "7가지 문화적 변수, 눈치로 읽는 협상 신호, 상사 유형별 전략, 식사 자리 협상 규칙, 구두 합의 서면화, 동서양 비교.",
    situation: "미국식 협상 책을 읽었는데 한국 직장에서 적용이 안 될 때",
    action: "눈치로 읽는 협상 신호 7가지를 다음 미팅에서 관찰하세요.",
    mission: "다음 구두 합의를 반드시 이메일로 정리해서 보내세요.",
  },
  {
    number: 9,
    title: "온라인·디지털 시대의 협상",
    oneLiner: "채널에 맞는 전략을 써라 — 이메일과 대면은 완전히 다르다.",
    description:
      "이메일 협상 함정·쿠션 표현, 화상 회의 체크리스트, 카톡 협상 금지 이유, AI 활용법, 채널 선택 가이드.",
    situation: "이메일로 쓴 내용이 공격적으로 읽혀서 갈등이 커질 때",
    action: "최근 보낸 협상 이메일을 쿠션 표현으로 다시 작성해보세요.",
    mission: "카톡으로 진행 중인 협상 1건을 이메일로 전환하세요.",
  },
  {
    number: 10,
    title: "30일 협상 능력 업그레이드 플랜",
    oneLiner: "읽기만 하면 아무것도 바뀌지 않는다.",
    description:
      "Week 1 마인드셋 전환 → Week 2 앵커링+BATNA → Week 3 시뮬레이션 → Week 4 어려운 협상 도전. 매일 미션, 협상 일지.",
    situation: "모든 이론은 알겠는데 어디서부터 실천할지 막막할 때",
    action: "캘린더를 열고 오늘부터 30일을 표시하세요.",
    mission: "Day 1 미션부터 시작 — 오늘 겪은 협상 상황 5개를 기록하세요.",
  },
];

const sections: ContentSection[] = [
  {
    id: "preface",
    title: "들어가며 — 당신은 이미 매일 협상하고 있다",
    body: (
      <>
        <p>&ldquo;협상&rdquo;이라는 단어를 들으면 무엇이 떠오르시나요? 드라마에서 보는 차가운 회의실, 서로 날카롭게 대치하는 변호사들. 하지만 현실을 직시해봅시다. 오늘 하루만 돌아봐도 여러분은 이미 수십 번의 협상을 했습니다. 아침 출근길 배우자와 저녁 메뉴 조율, 팀 회의에서 마감일 재조정 요청, 클라이언트 납기 조건 협의 &mdash; 이 모든 것이 협상입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">한국 직장인에게 협상이 특히 어려운 이유</h3>
        <p>&ldquo;시키는 대로 하는 게 미덕&rdquo;이라고 배웠습니다. 연봉을 깎지 않고 받아들이는 것이 충성이고, 가격을 깎으면 체면이 깎이는 것 같습니다. 결과는 3년째 같은 급여, &ldquo;비싸요&rdquo; 한마디에 단가를 확 낮추는 프리랜서, 불합리한 계약 조건을 그대로 수용하는 소상공인입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">이 책의 구성</h3>
        <p><strong>1~3장</strong> &mdash; 마인드셋, 준비, 앵커링 기술 (기본기)</p>
        <p><strong>4장</strong> &mdash; 상대의 거절을 다루는 핵심 기술</p>
        <p><strong>5~7장</strong> &mdash; 연봉·비즈니스·일상 협상 (실전 적용)</p>
        <p><strong>8~9장</strong> &mdash; 한국 문화·디지털 시대 협상 (맥락 이해)</p>
        <p><strong>10장</strong> &mdash; 30일 실전 플랜</p>
        <p><strong>부록</strong> &mdash; 체크리스트·스크립트·템플릿·30일 플래너</p>

        <blockquote className="border-l-4 border-orange-400 pl-4 py-2 my-4 bg-orange-50 dark:bg-orange-950 rounded-r-lg">
          <p><strong>서문 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>협상은 &ldquo;나와는 거리가 먼 특별한 기술&rdquo;이 아니라 매일 하는 활동이다.</li>
            <li>한국식 위계·체면 문화에 맞는 실전 스크립트를 제공한다.</li>
            <li><strong>1~2장이 모든 챕터의 기초이므로 반드시 먼저 읽으세요.</strong></li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch1",
    title: "Ch.1 협상은 싸움이 아니다: 마인드셋 전환",
    body: (
      <>
        <p>한국직업능력연구원 조사에 따르면, 한국 직장인의 <strong>68%가 &ldquo;협상 상황이 불편하다&rdquo;</strong>고 답했습니다. 거절 공포, 관계 훼손, 갈등 회피, 체면 의식, 능력 부족감 &mdash; 이 다섯 가지가 핵심 원인입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">분배적 협상 vs 통합적 협상</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>분배적 협상</strong> &mdash; 파이 크기가 정해져 있고 누가 더 가져가느냐를 다툼</li>
          <li><strong>통합적 협상</strong> &mdash; 파이 자체를 키워서 양쪽 모두 더 가져가는 구조</li>
        </ul>
        <p>예: 연봉 협상에서 &ldquo;500만 원 올려주세요&rdquo; vs &ldquo;재택근무 2일 + 교육비 지원이면 현 연봉 수용 가능&rdquo;</p>

        <h3 className="text-xl font-bold mt-8 mb-4">입장(Position) vs 이해(Interest)</h3>
        <p>하버드 협상 프로젝트의 가장 중요한 개념입니다. <strong>입장</strong>은 상대가 겉으로 말하는 것(&ldquo;연봉 6,000만 원 아니면 안 갑니다&rdquo;), <strong>이해</strong>는 그 뒤에 숨은 진짜 욕구(&ldquo;가족을 부양할 수 있는 안정적 수입&rdquo;)입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">BATNA: 최선의 대안</h3>
        <p>BATNA(Best Alternative To a Negotiated Agreement)는 &ldquo;이 협상이 결렬되면 나의 플랜 B는 무엇인가?&rdquo;입니다. BATNA가 강할수록 협상력이 올라가고, 없으면 어떤 조건이든 받아들일 수밖에 없습니다. <strong>BATNA는 만드는 것</strong>입니다.</p>

        <blockquote className="border-l-4 border-orange-400 pl-4 py-2 my-4 bg-orange-50 dark:bg-orange-950 rounded-r-lg">
          <p><strong>1챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>협상은 싸움이 아니라 문제 해결이다 &mdash; 양쪽 모두 원하는 것을 얻는 방법을 찾는 과정.</li>
            <li>입장이 아니라 이해를 파악하라 &mdash; 겉으로 드러난 요구 뒤의 진짜 욕구를 찾으세요.</li>
            <li><strong>오늘부터 실행</strong>: 마인드셋 점검 질문 6개에 솔직하게 답하고, &ldquo;그렇다&rdquo;가 3개 이상이면 이 책을 정독하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch2",
    title: "Ch.2 준비가 90%다: 협상 전 필수 체크리스트",
    body: (
      <>
        <p>체스터 카라스: &ldquo;협상에서 힘이란, 더 많이 준비한 사람에게 있다.&rdquo; 실제로 협상의 결과는 테이블에 앉기 전에 이미 <strong>80~90% 결정</strong>됩니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">정보 수집 3축</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>상대방</strong> &mdash; 의사결정 권한, 시간 압박, 우선순위, BATNA, 협상 스타일</li>
          <li><strong>시장·업계</strong> &mdash; 잡코리아·블라인드·크레딧잡 등으로 연봉/단가 데이터 확보</li>
          <li><strong>나 자신</strong> &mdash; 절대 양보 불가 조건, 양보 가능 조건, 최악의 결과, 대안</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">세 가지 목표 설정</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>이상적 목표(Aspiration)</strong> &mdash; 최선의 시나리오 (예: 연봉 7,000만 원)</li>
          <li><strong>현실적 목표(Target)</strong> &mdash; 합리적 기대 수준 (예: 6,500만 원)</li>
          <li><strong>최소한(Reservation Point)</strong> &mdash; 이 아래면 합의 거부 (예: 6,000만 원)</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">5분 준비 루틴</h3>
        <p>아무리 바빠도 협상 직전 5분만 투자하면 결과가 달라집니다: 1분 목표 확인 → 1분 상대 입장 추정 → 1분 BATNA 점검 → 1분 오프닝 준비 → 1분 감정 리셋.</p>

        <blockquote className="border-l-4 border-orange-400 pl-4 py-2 my-4 bg-orange-50 dark:bg-orange-950 rounded-r-lg">
          <p><strong>2챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>정보가 곧 힘이다 &mdash; 상대방·시장·나 자신에 대한 정보를 모을수록 유리.</li>
            <li>BATNA는 저절로 생기지 않는다 &mdash; 의도적으로 만들어야 합니다.</li>
            <li><strong>오늘부터 실행</strong>: 다음 협상에 대한 준비 워크시트를 채우세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch3",
    title: "Ch.3 앵커링: 누가 먼저 숫자를 말할 것인가",
    body: (
      <>
        <p>카너먼의 실험: 완전히 무관한 숫자(룰렛 10 vs 65)가 판단에 영향을 미쳤습니다. <strong>처음에 제시된 숫자가 최종 합의점을 끌어당깁니다.</strong></p>

        <h3 className="text-xl font-bold mt-8 mb-4">먼저 제시 vs 기다리기</h3>
        <p><strong>먼저 유리한 상황:</strong> 시장 정보가 충분할 때, 상대가 가격 감이 없을 때, 내가 판매자일 때. <strong>기다리기 유리한 상황:</strong> 정보가 부족할 때, 상대가 더 급할 때, 상대의 예산을 모를 때.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">Extreme but Justifiable</h3>
        <p>핵심 원칙: <strong>&ldquo;높게 시작하되, 근거를 제시하라&rdquo;</strong>. &ldquo;동종 업계 5년차 평균이 7,200만 원이고, 제 성과를 고려하면 7,500만 원을 요청드립니다&rdquo;가 좋은 앵커링입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">앵커링에 당했을 때</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li>터무니없이 낮은 제안 → &ldquo;그 근거를 말씀해주실 수 있나요?&rdquo;</li>
          <li>&ldquo;다른 데서는 더 싸게 해줘요&rdquo; → &ldquo;그쪽과 저희의 차이점을 말씀드릴게요&rdquo;</li>
          <li>가장 강력한 대처: 상대의 앵커를 무시하고 나만의 앵커를 새로 설정</li>
        </ul>

        <blockquote className="border-l-4 border-orange-400 pl-4 py-2 my-4 bg-orange-50 dark:bg-orange-950 rounded-r-lg">
          <p><strong>3챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>먼저 숫자를 말하는 사람이 게임을 주도한다.</li>
            <li>범위로 제시하면 안전하다 &mdash; 단일 숫자보다 범위가 협상 여지를 만든다.</li>
            <li><strong>오늘부터 실행</strong>: 다음 가격 협상에서 시장 데이터를 근거로 먼저 앵커를 설정하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch4",
    title: "Ch.4 상대의 &ldquo;No&rdquo;를 다루는 기술",
    body: (
      <>
        <p>FBI 인질 협상관 크리스 보스: &ldquo;상대가 &lsquo;No&rsquo;라고 말할 때, 그것은 최종 답이 아니다. &lsquo;지금 이 조건으로는 안 된다&rsquo;는 뜻이다.&rdquo;</p>

        <h3 className="text-xl font-bold mt-8 mb-4">라벨링(Labeling)</h3>
        <p>상대의 감정이나 상황을 말로 짚어주는 기법입니다. &ldquo;~인 것 같습니다&rdquo;로 시작하세요. 사람은 자기 감정을 누군가 알아줄 때 방어벽을 낮춥니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">미러링(Mirroring)</h3>
        <p>상대가 말한 마지막 1~3개 단어를 그대로 반복합니다. 상대가 추가 정보를 자발적으로 공개하게 만드는 강력한 기법입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">열린 질문으로 전환</h3>
        <p>&ldquo;왜 안 되는데요?&rdquo;(공격적) 대신 <strong>&ldquo;어떤 조건이면 가능할까요?&rdquo;</strong>(효과적). &ldquo;어떻게(How)&rdquo;와 &ldquo;무엇(What)&rdquo;으로 시작하는 질문이 상대를 문제 해결의 파트너로 만듭니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">침묵의 힘</h3>
        <p>핵심 발언 후 입을 다물고 5~10초를 기다리세요. 상대가 먼저 말합니다. 거의 100% 확률로.</p>

        <blockquote className="border-l-4 border-orange-400 pl-4 py-2 my-4 bg-orange-50 dark:bg-orange-950 rounded-r-lg">
          <p><strong>4챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>&ldquo;No&rdquo;는 끝이 아니라 협상의 시작이다.</li>
            <li>감정에는 감정으로, 조건에는 논리로 &mdash; 감정 인정과 조건 수용은 별개.</li>
            <li><strong>오늘부터 실행</strong>: 일상 대화에서 라벨링과 미러링을 각 3회 연습하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch5",
    title: "Ch.5 연봉 협상 완전 공략",
    body: (
      <>
        <p>기업의 <strong>84%</strong>가 지원자의 연봉 협상을 기대합니다. 한국 기업의 71%가 &ldquo;연봉 협상 여지가 있다&rdquo;고 답했습니다. 그런데 한국 직장인의 62%는 연봉 협상을 한 번도 해본 적이 없습니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">오퍼를 받았을 때</h3>
        <p><strong>절대 즉시 수락하지 마세요.</strong> &ldquo;정말 감사합니다. 좋은 오퍼라고 생각합니다. 꼼꼼히 검토해서 2~3일 내로 답변드리겠습니다.&rdquo;</p>

        <h3 className="text-xl font-bold mt-8 mb-4">성과 정량화 프레임워크</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>매출 기여</strong> &mdash; &ldquo;담당 고객 매출 전년 대비 18% 증가&rdquo;</li>
          <li><strong>비용 절감</strong> &mdash; &ldquo;프로세스 개선으로 연간 2,400만 원 절감&rdquo;</li>
          <li><strong>프로젝트 완수</strong> &mdash; &ldquo;올해 7건 완료, 100% 기한 내 납품&rdquo;</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">연봉 외 협상 항목</h3>
        <p>재택근무(약 300만 원 가치), 유연근무제, 교육비(100~500만 원), 성과 보너스, 직급 조정, 연차 추가, 스톡옵션, 복지포인트 등 9가지 항목이 모두 협상 가능합니다.</p>

        <blockquote className="border-l-4 border-orange-400 pl-4 py-2 my-4 bg-orange-50 dark:bg-orange-950 rounded-r-lg">
          <p><strong>5챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>기업은 협상을 기대한다 &mdash; 안 하는 것은 기회를 버리는 것.</li>
            <li>연봉만 고집하지 마라 &mdash; 총 보상 패키지로 접근하세요.</li>
            <li><strong>오늘부터 실행</strong>: 올해 성과를 숫자로 정량화해서 표로 정리하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch6",
    title: "Ch.6 비즈니스 협상: 계약·거래·파트너십",
    body: (
      <>
        <p>비즈니스 협상의 핵심 원리는 동일합니다. <strong>준비, 정보, 대안.</strong> 5대 원칙: 의사결정자와 대화, 서면으로 남기기, 장기 관계 염두, 감정 배제, 총 비용 보기.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">&ldquo;비싸요&rdquo; 대응법</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li>예산이 정말 부족 → 범위 조정 또는 분할 납품</li>
          <li>경쟁사보다 높음 → 차별화 포인트 설명</li>
          <li>가치를 이해 못 함 → 가치 제안을 다시 명확히</li>
          <li><strong>절대 금지:</strong> &ldquo;그럼 얼마면 되세요?&rdquo; (가격 결정권 넘기기)</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">갑을 관계에서 을의 전략</h3>
        <p>&ldquo;을&rdquo;의 협상 카드: 전문성, 전환 비용, 기한 압박, 평판, 유연성, 정보 비대칭. 단일 거래처 비중을 30% 이하로 유지하고, 반드시 서면 계약을 체결하세요.</p>

        <blockquote className="border-l-4 border-orange-400 pl-4 py-2 my-4 bg-orange-50 dark:bg-orange-950 rounded-r-lg">
          <p><strong>6챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>가격만 협상하지 마라 &mdash; 납기·결제·수정 횟수 등 모든 조건이 대상.</li>
            <li>&ldquo;을&rdquo;도 협상력이 있다 &mdash; 전문성과 전환 비용이 무기.</li>
            <li><strong>오늘부터 실행</strong>: 비즈니스 협상 체크리스트 7항목을 다음 미팅 전에 확인하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch7",
    title: "Ch.7 일상의 협상: 가족·친구·서비스",
    body: (
      <>
        <p>가까운 사람과의 협상이 가장 어렵습니다. <strong>감정이 핵심이고, 관계가 결과보다 중요합니다.</strong></p>

        <h3 className="text-xl font-bold mt-8 mb-4">부모님과의 협상</h3>
        <p>진로 협상 4단계: 감정 인정 → 데이터 제시 → 안전망 제시 → 존중 표현. &ldquo;부모님 의견이 중요하기에 이렇게 말씀드리는 겁니다.&rdquo;</p>

        <h3 className="text-xl font-bold mt-8 mb-4">배우자와의 합의</h3>
        <p>가사 분담: 각자 &ldquo;덜 싫은 일&rdquo;을 맡으면 전체 불만이 줄어듭니다. 재정 관리: 공동 생활비 비율, 개인 용돈, 저축 목표, 큰 지출 기준선을 합의하세요.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">서비스 협상</h3>
        <p>환불·교환은 소비자의 정당한 권리입니다. 사실에 기반하고, 법적 근거를 알고, 기록을 남기고, 에스컬레이션 순서(담당자 → 매니저 → 본사)를 따르세요.</p>

        <blockquote className="border-l-4 border-orange-400 pl-4 py-2 my-4 bg-orange-50 dark:bg-orange-950 rounded-r-lg">
          <p><strong>7챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>일상 협상은 관계가 최우선이다 &mdash; 이기는 것보다 함께 만족하는 것이 목표.</li>
            <li>감정을 먼저 인정하라 &mdash; 논리 전에 공감이 와야 합니다.</li>
            <li><strong>오늘부터 실행</strong>: 이번 주 서비스 불만 1건에 정중하게 요청해보세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch8",
    title: "Ch.8 문화와 협상: 한국적 상황에서의 전략",
    body: (
      <>
        <p>미국 교과서대로 &ldquo;자신감 있게 요구&rdquo;하면 한국 직장에서 &ldquo;건방지다&rdquo;는 평가를 받습니다. 한국의 <strong>7가지 문화적 변수</strong>(위계질서, 체면, 관계 중심, 간접적 소통, 집단주의, 정 문화, 빨리빨리)를 이해하고 활용해야 합니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">눈치로 읽는 협상 신호</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li>시계를 자주 본다 → 시간 압박, 핵심만 집중 제시</li>
          <li>앞으로 몸을 기울인다 → 관심 있음, 구체적 조건 제시 타이밍</li>
          <li>&ldquo;검토해보겠습니다&rdquo; → 대부분 거절의 완곡한 표현</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">상사에게 연봉 인상 요청</h3>
        <p>&ldquo;팀장님, 5분만 시간 괜찮으시면 올해 성과에 대해 말씀드리고 싶습니다.&rdquo; 결정권을 존중하면서 근거 있는 요청을 하는 것이 핵심입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">구두 합의의 위험</h3>
        <p>&ldquo;관계가 좋아서 계약서를 안 쓰는 게 아닙니다. 관계를 지키기 위해 계약서를 쓰는 것입니다.&rdquo; 오늘 대화 내용을 정리해서 이메일로 보내는 것만으로도 분쟁의 90%를 예방합니다.</p>

        <blockquote className="border-l-4 border-orange-400 pl-4 py-2 my-4 bg-orange-50 dark:bg-orange-950 rounded-r-lg">
          <p><strong>8챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>한국 문화를 무시하면 협상이 실패한다 &mdash; 위계·체면·관계를 활용하세요.</li>
            <li>구두 합의를 반드시 서면화하라.</li>
            <li><strong>오늘부터 실행</strong>: 다음 구두 합의를 이메일로 정리해서 보내세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch9",
    title: "Ch.9 온라인·디지털 시대의 협상",
    body: (
      <>
        <p>2026년 현재 비즈니스 커뮤니케이션의 70% 이상이 디지털 채널입니다. 문제는 <strong>협상 기술의 대부분이 대면을 전제로 설계</strong>되었다는 것입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">이메일 협상 원칙</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>24시간 규칙</strong> &mdash; 감정이 담긴 이메일은 임시 저장 후 다음 날 다시 읽기</li>
          <li><strong>쿠션 표현</strong> &mdash; &ldquo;이건 안 됩니다&rdquo; → &ldquo;이 부분은 조율이 필요할 것 같습니다&rdquo;</li>
          <li><strong>구조화</strong> &mdash; 인사 → 맥락 요약 → 핵심 제안 → 근거 → 다음 단계 → 마무리</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">카카오톡으로 협상하면 안 되는 이유</h3>
        <p>즉각 응답 압박, 짧은 문장으로 오해 발생, 감정 전달 불가, 비공식적 인식. <strong>금액·조건·계약 관련은 반드시 이메일로 전환하세요.</strong></p>

        <h3 className="text-xl font-bold mt-8 mb-4">AI를 협상 도구로</h3>
        <p>시장 조사, 이메일 초안, 계약서 검토, 시뮬레이션에 활용하되, AI가 작성한 메시지를 그대로 보내지 마세요. 초안은 AI, 최종은 사람이 다듬으세요.</p>

        <blockquote className="border-l-4 border-orange-400 pl-4 py-2 my-4 bg-orange-50 dark:bg-orange-950 rounded-r-lg">
          <p><strong>9챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>채널에 맞는 전략을 써라 &mdash; 이메일·화상·전화·대면은 각각 다른 접근 필요.</li>
            <li>카카오톡으로 중요한 협상을 하지 마라.</li>
            <li><strong>오늘부터 실행</strong>: 최근 보낸 협상 이메일을 쿠션 표현으로 다시 작성해보세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch10",
    title: "Ch.10 30일 협상 능력 업그레이드 플랜",
    body: (
      <>
        <p>수영 교본을 100번 읽어도 물에 들어가지 않으면 수영을 못 합니다. <strong>30일 안에 배운 것을 실전에 적용하고 체화하는</strong> 구체적 플랜입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">Week 1: 마인드셋 전환 (Day 1~7)</h3>
        <p>Day 1~2 협상 인식 훈련(하루 상황 기록), Day 3~4 작은 협상 시도(카페 주문 변경, 점심 제안, 할인 문의), Day 5~7 마인드셋 일지 작성.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">Week 2: 앵커링 + BATNA (Day 8~14)</h3>
        <p>Day 8~9 중고 거래·서비스 할인 앵커링 연습, Day 10~11 나의 BATNA 워크시트 작성+강화 행동, Day 12~14 라벨링·미러링 실전.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">Week 3: 실전 시뮬레이션 (Day 15~21)</h3>
        <p>연봉 협상 역할극, 비즈니스 협상 시뮬레이션, 실전 소규모 협상 1회 실행(통신비 할인, 구독 가격 네고 등).</p>

        <h3 className="text-xl font-bold mt-8 mb-4">Week 4: 어려운 협상 도전 (Day 22~30)</h3>
        <p>회피하던 협상 목록 작성 → 준비 체크리스트 → BATNA 확보 → 리허설 → 실행 → 복기. 30일 전체 복기와 다음 목표 설정.</p>

        <blockquote className="border-l-4 border-orange-400 pl-4 py-2 my-4 bg-orange-50 dark:bg-orange-950 rounded-r-lg">
          <p><strong>10챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>지식을 행동으로 바꿔야 한다 &mdash; 읽기만 하면 아무것도 바뀌지 않습니다.</li>
            <li>피해왔던 것에 도전하라 &mdash; 가장 어려운 협상이 가장 큰 성장을 줍니다.</li>
            <li><strong>오늘부터 실행</strong>: 캘린더를 열고 오늘부터 30일을 표시하고, Day 1 미션을 시작하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "appendix",
    title: "부록 — 체크리스트·스크립트·템플릿 모음",
    body: (
      <>
        <p>이 부록에는 책에서 다룬 모든 프레임워크를 <strong>바로 복사해서 사용할 수 있는 템플릿</strong>으로 정리했습니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">5종 템플릿 목록</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>협상 준비 체크리스트 3종</strong> &mdash; 기본 준비·정보 수집·심리 준비</li>
          <li><strong>연봉 협상 스크립트 3종</strong> &mdash; 이직·현 직장·프리랜서 단가 인상</li>
          <li><strong>BATNA 분석 워크시트</strong> &mdash; 나의 BATNA + 상대 BATNA 추정 + 강화 액션 플랜</li>
          <li><strong>협상 이메일 템플릿 3종</strong> &mdash; 첫 제안·카운터 오퍼·합의 확인</li>
          <li><strong>30일 협상 플래너</strong> &mdash; Week 1~4 매일 미션 + 완료 체크</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">핵심 도구 요약</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>협상 전 5분 루틴</strong> &mdash; 목표 확인 → 상대 추정 → BATNA 점검 → 오프닝 준비 → 감정 리셋</li>
          <li><strong>No 대응 4단계</strong> &mdash; 라벨링 → 미러링 → 열린 질문 → 침묵</li>
          <li><strong>한국적 화법 패턴</strong> &mdash; 직접적 표현 대신 쿠션 표현으로 존중하며 요구</li>
        </ul>

        <blockquote className="border-l-4 border-orange-400 pl-4 py-2 my-4 bg-orange-50 dark:bg-orange-950 rounded-r-lg">
          <p><strong>부록 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>모든 템플릿은 노션·구글 독스·종이에 바로 옮겨 쓸 수 있다.</li>
            <li>원하는 것을 얻는 사람과 그렇지 못한 사람의 차이는 단 하나: 요청했느냐.</li>
            <li>오늘부터 요청하세요.</li>
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

export default function NegotiationSkillsRead() {
  return (
    <GuideBook
      bookId="negotiation-skills"
      title="협상의 기술"
      emoji="🤝"
      subtitle="BATNA 전략부터 연봉 스크립트까지 — 한국 문화에 맞는 실전 협상 시스템"
      topItems={topItems}
      sections={sections}
      updateLogs={updateLogs}
      currentVersion={1}
    />
  );
}
