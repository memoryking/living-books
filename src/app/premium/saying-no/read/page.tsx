import GuideBook from "@/components/GuideBook";
import type {
  TopItem,
  ContentSection,
  UpdateLog,
} from "@/components/GuideBook";

export const metadata = {
  title: "거절 잘하는 사람들의 비밀 — 본문 | 살아있는 정보책",
  description:
    "관계를 지키면서 나를 지키는 거절의 기술. 서문 + 10개 챕터 + 부록 전문. 착한 아이 콤플렉스, 3원칙, 직장·친구·가족·소비·디지털 거절, 경계 설정, 30일 플랜.",
};

const topItems: TopItem[] = [
  {
    number: 1,
    title: "왜 '아니오'가 이렇게 어려울까",
    oneLiner: "거절을 못하는 건 성격이 아니라 학습된 행동이다.",
    description:
      "착한 아이 콤플렉스, 거부 민감성, 인정 욕구. 한국 문화의 특수성(눈치·정·체면·위계). 거절 못해서 치르는 대가 4가지.",
    situation: "부탁 받으면 자동으로 '네'가 나오고, 속으로만 싫다고 할 때",
    action: "오늘 하루 '괜찮지 않은데 괜찮다고 한 순간'을 3개 기록하세요.",
    mission: "착한 아이 콤플렉스 표의 6가지 항목 중 해당되는 것을 체크하세요.",
  },
  {
    number: 2,
    title: "거절의 3가지 원칙: 명확, 부드럽, 일관",
    oneLiner: "'죄송하지만 어렵습니다' — 이 한 문장이 거절의 시작이다.",
    description:
      "애매한 거절 vs 명확한 거절. 샌드위치 거절법(감사-거절-대안). 깨진 음반 기법. 거절과 거부의 차이.",
    situation: "'생각해 볼게요'로 넘겼다가 더 곤란해졌을 때",
    action: "'죄송하지만 어렵습니다'를 머릿속 10번, 입으로 10번 말해보세요.",
    mission: "오늘 하나의 요청에 명확하게 거절해보세요.",
  },
  {
    number: 3,
    title: "직장에서의 거절: 상사, 동료, 후배",
    oneLiner: "거절이 아닌 '우선순위 확인'으로 전환하라.",
    description:
      "상사의 무리한 업무 → 선택지 제시. 동료의 떠넘기기, 후배의 질문, 회식, 주말 카톡, 업무 범위 외 요청.",
    situation: "상사가 '이것도 이번 주까지 해줘'라고 할 때",
    action: "현재 업무 현황을 표로 정리해서 상사에게 공유하세요.",
    mission: "동료의 부탁 하나에 '도와주고 싶지만' 패턴으로 거절해보세요.",
  },
  {
    number: 4,
    title: "인간관계에서의 거절: 친구, 지인, 모임",
    oneLiner: "모든 부탁을 다 들어주는 사람은 좋은 친구가 아니라 도구다.",
    description:
      "돈 빌려달라는 친구, 보험·다단계 권유, 경조사 부담, 끝없는 고민 상담, SNS 부탁, 동창회. 감정적 압박 대처법.",
    situation: "'우리 사이에 그것도 안 해줘?'라는 말에 무너질 때",
    action: "'돈은 누구에게든 빌려주지 않기로 했어'라는 개인 원칙을 정하세요.",
    mission: "감정적 압박에 '친구니까 솔직하게 말하는 거야'로 대응해보세요.",
  },
  {
    number: 5,
    title: "가족 사이의 거절: 가장 어려운 No",
    oneLiner: "효도 = 복종이 아니다. 성인 대 성인의 존중이 진짜 효도다.",
    description:
      "부모님의 간섭(진로·결혼·육아), 시댁/처가 관계, 명절 노동 분담, 형제 금전 요청, 자녀의 무리한 요구.",
    situation: "부모님이 '다 너를 위해서 하는 말이야'라고 하실 때",
    action: "배우자와 '팀'이 되어 시댁/처가 경계를 함께 정하세요.",
    mission: "부모님 간섭 하나에 '감사 + 내 결정 존중 요청'으로 대응해보세요.",
  },
  {
    number: 6,
    title: "소비자로서의 거절: 돈을 지키는 기술",
    oneLiner: "매장에서 '괜찮습니다'라고 말하는 연습이 직장 거절의 시작이다.",
    description:
      "업셀링, 텔레마케터, 구독 해지 방어, 친구 사업 물건, 무료 체험 후 가입 압박. 환불 요청의 단호함.",
    situation: "직원이 열심히 설명했는데 안 사면 미안할 때",
    action: "'감사합니다, 오늘은 이것만 살게요'를 매장에서 한 번 사용하세요.",
    mission: "구독 서비스 하나를 해지하면서 '해지 부탁드립니다'를 관철하세요.",
  },
  {
    number: 7,
    title: "디지털 시대의 거절",
    oneLiner: "침묵은 거절이 아니다. 한 줄이라도 답하라.",
    description:
      "카카오톡 거절법, 단톡방 나가기, SNS DM, 온라인 데이팅, 줌 불참, 이메일 거절 템플릿. 이모티콘으로 말하지 말 것.",
    situation: "카톡을 읽었는데 거절하기 불편해서 읽씹하고 있을 때",
    action: "읽씹 대신 '이번에는 어렵겠다. 미안!' 한 줄을 보내세요.",
    mission: "부담스러운 단톡방 하나에 인사하고 나가세요.",
  },
  {
    number: 8,
    title: "거절 후 관계 관리: No 이후가 더 중요하다",
    oneLiner: "죄책감이 든다고 해서 거절이 잘못된 것은 아니다.",
    description:
      "죄책감 해소 5단계, 상대가 화냈을 때 대처, 관계 회복법, 건강한 자기 대화. 거절이 신뢰를 높이는 이유.",
    situation: "거절 후 '내가 너무한 건 아닐까' 자책이 밀려올 때",
    action: "부정적 자기 대화를 건강한 자기 대화로 바꿔보세요.",
    mission: "거절 후 며칠 뒤 상대에게 일상적인 연락을 먼저 해보세요.",
  },
  {
    number: 9,
    title: "경계(Boundary) 세우기: 거절의 근본 해결",
    oneLiner: "여기까지는 괜찮고, 여기서부터는 안 됩니다.",
    description:
      "경계의 4유형(물리적·감정적·시간적·디지털). 경계 세우기 4단계. 건강한 경계 vs 벽. 경계 침범 대처법.",
    situation: "매 상황마다 거절 스크립트를 외워야 하나 싶을 때",
    action: "경계 자가 진단 6개 질문에 답해서 나의 경계선을 파악하세요.",
    mission: "한 가지 영역에서 나의 경계 규칙을 정하고 상대에게 전달하세요.",
  },
  {
    number: 10,
    title: "30일 거절 연습 플랜",
    oneLiner: "거절은 근육이다. 직접 해봐야 몸에 붙는다.",
    description:
      "Week 1 카페 거절 → Week 2 일상 거절 → Week 3 직장/가족 → Week 4 감정적 압박. 거절 일지, No 근육 키우기.",
    situation: "모든 이론은 알겠는데 어디서부터 실천할지 막막할 때",
    action: "캘린더에 오늘부터 30일을 표시하세요.",
    mission: "Day 1: 카페에서 '사이즈 업 하시겠어요?' → '아니요, 괜찮습니다'.",
  },
];

const sections: ContentSection[] = [
  {
    id: "preface",
    title: "들어가며 — 당신의 '네'는 진심인가요?",
    body: (
      <>
        <p>&ldquo;괜찮아, 내가 할게.&rdquo; 이 말을 오늘 하루에 몇 번이나 하셨나요? 솔직히 돌아보면, 그중 절반은 <strong>괜찮지 않은데 괜찮다고 한 말</strong>이었을 겁니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">한국에서 &ldquo;아니오&rdquo;가 유독 어려운 이유</h3>
        <p>우리는 <strong>눈치의 나라</strong>에서 자랐습니다. 정(情) 때문에 거절하면 매정한 사람이 되는 것 같고, 체면 때문에 거절당한 상대의 기분을 걱정하고, 위계 때문에 윗사람에게는 거절 자체가 불가능하다고 느낍니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">이 책의 구성</h3>
        <p><strong>1~2장</strong> &mdash; 거절이 어려운 심리적 원인과 거절의 기본 원칙</p>
        <p><strong>3~7장</strong> &mdash; 실전편: 직장, 친구, 가족, 소비, 디지털 상황별 거절 스크립트</p>
        <p><strong>8~9장</strong> &mdash; 거절 이후: 관계 관리와 경계 세우기</p>
        <p><strong>10장</strong> &mdash; 30일 거절 연습 플랜</p>
        <p><strong>부록</strong> &mdash; 거절 스크립트 20개, 연습 일지, 경계 워크시트, 30일 플래너</p>

        <blockquote className="border-l-4 border-violet-400 pl-4 py-2 my-4 bg-violet-50 dark:bg-violet-950 rounded-r-lg">
          <p><strong>한 가지 약속</strong>: 이 책을 다 읽은 뒤에도 거절이 편해지지는 않을 수 있습니다. 하지만 <strong>불편하더라도 할 수 있게</strong> 됩니다. 거절은 상대를 밀어내는 것이 아닙니다. 나를 지키는 것입니다.</p>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch1",
    title: "Ch.1 왜 '아니오'가 이렇게 어려울까",
    body: (
      <>
        <h3 className="text-xl font-bold mt-8 mb-4">착한 아이 콤플렉스</h3>
        <p>어린 시절 <strong>순종 = 착한 것, 거부 = 나쁜 것</strong>이라는 공식을 반복해서 배웠습니다. 핵심은 &ldquo;거절하면 나는 나쁜 사람이 된다&rdquo;는 무의식적 믿음입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">거부 민감성과 인정 욕구</h3>
        <p>거절하면 상대가 나를 싫어하고 → 관계가 끝나고 → 혼자가 될 것이라는 비약. 또한 &ldquo;역시 너밖에 없어&rdquo;라는 인정이 중독이 되어, 부탁을 거절하면 자기 가치가 떨어진다고 느낍니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">한국 문화의 특수성</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>눈치</strong> &mdash; 분위기를 읽어서 알아서 해야 한다</li>
          <li><strong>정</strong> &mdash; 거절하면 인정머리 없는 사람</li>
          <li><strong>체면</strong> &mdash; 상대의 체면을 세워줘야 한다</li>
          <li><strong>위계</strong> &mdash; 아랫사람은 윗사람에게 순종</li>
          <li><strong>집단주의</strong> &mdash; 개인보다 단체의 조화가 우선</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">거절 못해서 치르는 대가</h3>
        <p>번아웃, 수동적 분노(엉뚱한 곳에서 폭발), 관계의 역설적 악화, 자기 상실. 비행기 안전 안내처럼 &mdash; <strong>본인 산소마스크를 먼저 착용</strong>해야 옆 사람도 도울 수 있습니다.</p>

        <blockquote className="border-l-4 border-violet-400 pl-4 py-2 my-4 bg-violet-50 dark:bg-violet-950 rounded-r-lg">
          <p><strong>1챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>거절을 못하는 건 성격이 아니라 학습된 행동이므로 바꿀 수 있다.</li>
            <li>건강한 관계는 거절 한 번으로 끝나지 않는다.</li>
            <li><strong>오늘부터 실행</strong>: 오늘 &ldquo;괜찮지 않은데 괜찮다고 한 순간&rdquo; 3개를 기록하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch2",
    title: "Ch.2 거절의 3가지 원칙: 명확, 부드럽, 일관",
    body: (
      <>
        <h3 className="text-xl font-bold mt-8 mb-4">원칙 1: 명확하게</h3>
        <p>&ldquo;생각해 볼게요&rdquo;는 거절이 아닙니다. <strong>&ldquo;죄송하지만 어렵습니다&rdquo;</strong>가 가장 강력한 이유 &mdash; 상대에 대한 존중 + 불가능함 전달 + 추가 설명 불필요. 거절 이유는 한 문장이면 충분합니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">원칙 2: 부드럽게</h3>
        <p><strong>샌드위치 거절법</strong>: 1단계 감사/공감 → 2단계 거절 의사 → 3단계 대안 제시(선택). 대안은 반드시 진심일 때만 제시하세요.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">원칙 3: 일관되게</h3>
        <p><strong>깨진 음반 기법</strong> &mdash; 재차 요구받을 때 핵심 메시지를 동일하게 유지하며 반복. &ldquo;미안하지만 어렵습니다&rdquo;를 세 번 부드럽게 반복하면 상대도 수용합니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">거절 &#8800; 거부</h3>
        <p>거절은 <strong>요청</strong>에 &ldquo;아니오&rdquo;라고 말하는 것이지, <strong>사람</strong>에게 &ldquo;아니오&rdquo;라고 말하는 것이 아닙니다. 이 차이를 이해하면 죄책감이 줄어듭니다.</p>

        <blockquote className="border-l-4 border-violet-400 pl-4 py-2 my-4 bg-violet-50 dark:bg-violet-950 rounded-r-lg">
          <p><strong>2챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>명확: &ldquo;어렵습니다&rdquo; (생각해 볼게요 금지)</li>
            <li>부드럽: &ldquo;마음은 알지만 어렵습니다&rdquo;</li>
            <li>일관: &ldquo;말씀드린 대로 어렵습니다&rdquo;</li>
            <li><strong>오늘부터 실행</strong>: &ldquo;죄송하지만 어렵습니다&rdquo;를 열 번 말해보세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch3",
    title: "Ch.3 직장에서의 거절: 상사, 동료, 후배",
    body: (
      <>
        <h3 className="text-xl font-bold mt-8 mb-4">상사의 무리한 업무 지시</h3>
        <p>핵심: <strong>&ldquo;못 합니다&rdquo;가 아니라 &ldquo;어떤 것을 먼저 할까요?&rdquo;</strong>로 전환. &ldquo;A와 B 중 우선순위를 정해주시면 더 효율적으로 진행할 수 있을 것 같습니다.&rdquo; &ldquo;다 해&rdquo;라는 상사에게는 업무 현황을 숫자로 보여주세요.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">동료의 업무 떠넘기기</h3>
        <p>&ldquo;도와주고 싶은데, 나도 지금 마감이 급해서 손을 못 대겠어.&rdquo; 반복적 떠넘기기에는 &ldquo;앞으로는 각자 업무를 자기 선에서 처리하면 좋겠어&rdquo;.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">회식 거절 &amp; 주말 카톡</h3>
        <p>회식: &ldquo;오늘은 개인 일정이 있어서 빠지겠습니다.&rdquo; 이유를 구체적으로 대지 마세요. 주말 카톡: <strong>즉시 답장하지 않는 것이 첫 번째 거절</strong>. 월요일 출근 후 &ldquo;확인했습니다&rdquo;로 충분.</p>

        <blockquote className="border-l-4 border-violet-400 pl-4 py-2 my-4 bg-violet-50 dark:bg-violet-950 rounded-r-lg">
          <p><strong>3챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>상사 → 우선순위 확인으로 전환</li>
            <li>동료 → 공감 + 현재 상황 공유</li>
            <li>프로페셔널한 거절은 오히려 신뢰를 높인다.</li>
            <li><strong>오늘부터 실행</strong>: 업무 현황을 표로 정리해서 공유하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch4",
    title: "Ch.4 인간관계에서의 거절: 친구, 지인, 모임",
    body: (
      <>
        <h3 className="text-xl font-bold mt-8 mb-4">돈 빌려달라는 친구</h3>
        <p><strong>&ldquo;돈 빌려주지 않는 것을 개인 원칙으로 정하세요.&rdquo;</strong> &ldquo;누구에게든 돈을 빌려주지 않기로 한 거야&rdquo; &mdash; 사람이 아니라 규칙을 지키는 것. 돈 대신 다른 도움 제안.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">보험·다단계 권유</h3>
        <p>&ldquo;관심 가져줘서 고마운데, 현재 추가 가입 계획이 없어.&rdquo; <strong>절대 &ldquo;생각해 볼게&rdquo; 금지</strong> &mdash; 재방문 빌미.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">감정적 압박 대처</h3>
        <p>&ldquo;우리 사이에...&rdquo; → &ldquo;우리 사이니까 솔직하게 말하는 거야. 이번에는 어려워.&rdquo; 상대의 감정은 인정하되, 그 감정이 내 결정을 바꿀 수는 없다는 것을 분명히 하세요.</p>

        <blockquote className="border-l-4 border-violet-400 pl-4 py-2 my-4 bg-violet-50 dark:bg-violet-950 rounded-r-lg">
          <p><strong>4챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>금전 요청 → 개인 원칙으로 선 긋기</li>
            <li>보험/다단계 → &ldquo;생각해 볼게&rdquo; 절대 금지</li>
            <li>감정적 압박 → 감정 인정 + 결정 유지</li>
            <li><strong>오늘부터 실행</strong>: 돈에 관한 나만의 원칙을 한 줄로 정하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch5",
    title: "Ch.5 가족 사이의 거절: 가장 어려운 No",
    body: (
      <>
        <h3 className="text-xl font-bold mt-8 mb-4">부모님의 간섭</h3>
        <p>원칙: <strong>감사 + 내 결정 표현 + 존중 요청</strong>. &ldquo;걱정해 주시는 마음 감사합니다. 저도 많이 고민하고 결정한 거예요. 제 선택을 믿어주시면 좋겠습니다.&rdquo;</p>

        <h3 className="text-xl font-bold mt-8 mb-4">시댁/처가 &amp; 명절</h3>
        <p>핵심 전략: 배우자와 <strong>팀</strong>이 되세요. 명절 노동은 <strong>사전 협상</strong>이 핵심 &mdash; 당일에 터뜨리지 말고 미리 분담을 정하세요.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">사랑하면서도 거절하는 법</h3>
        <p>&ldquo;엄마를 사랑하지만, 이 부탁은 들어드리기 어렵습니다.&rdquo; 사랑과 거절은 동시에 존재할 수 있습니다. 죄책감을 느끼는 것은 정상이지만, 그것이 거절을 잘못된 것으로 만들지는 않습니다.</p>

        <blockquote className="border-l-4 border-violet-400 pl-4 py-2 my-4 bg-violet-50 dark:bg-violet-950 rounded-r-lg">
          <p><strong>5챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>부모님 → 사랑의 의도는 인정, 결정권은 내가 가진다</li>
            <li>시댁/처가 → 혼자 싸우지 말고 배우자가 완충 역할</li>
            <li>효도 = 복종이 아니라 성인 대 성인의 존중</li>
            <li><strong>오늘부터 실행</strong>: 가족 간섭 하나에 내 의견을 표현해보세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch6",
    title: "Ch.6 소비자로서의 거절: 돈을 지키는 기술",
    body: (
      <>
        <h3 className="text-xl font-bold mt-8 mb-4">매장·텔레마케터 거절</h3>
        <p>업셀링: &ldquo;감사합니다, 오늘은 이것만 살게요.&rdquo; 이유를 길게 설명할 필요 없습니다. 텔레마케터: <strong>&ldquo;관심 없습니다&rdquo; + 전화 종료</strong>가 가장 효과적. 이유를 대면 각 이유에 대한 해결책을 제시하며 설득을 계속합니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">구독 해지 &amp; 무료 체험</h3>
        <p>해지 방어 상담원에게는 <strong>한 가지 말만 반복</strong>: &ldquo;해지 부탁드립니다.&rdquo; 무료 체험을 받았다고 구매 의무는 없습니다 &mdash; 무료 체험은 업체의 마케팅 비용입니다.</p>

        <blockquote className="border-l-4 border-violet-400 pl-4 py-2 my-4 bg-violet-50 dark:bg-violet-950 rounded-r-lg">
          <p><strong>6챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>업셀링 → &ldquo;감사합니다, 오늘은 이것만 살게요&rdquo;</li>
            <li>텔레마케터 → &ldquo;관심 없습니다&rdquo; (이유 대지 말 것)</li>
            <li>매장 거절은 직장 거절의 연습이다</li>
            <li><strong>오늘부터 실행</strong>: 매장에서 추가 권유에 &ldquo;괜찮습니다&rdquo;를 한 번 사용하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch7",
    title: "Ch.7 디지털 시대의 거절",
    body: (
      <>
        <h3 className="text-xl font-bold mt-8 mb-4">카카오톡 거절</h3>
        <p>읽씹은 &ldquo;너를 무시한다&rdquo;로 해석됩니다. 가능하면 <strong>당일 내에 정중하게 거절</strong>. &ldquo;고마운데, 이번에는 시간이 안 될 것 같아! 다음에 만나자.&rdquo; 이모티콘만으로 답하지 마세요.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">단톡방 &amp; SNS</h3>
        <p>단톡방 나가기: &ldquo;요즘 카톡 정리 중이라 나갈게. 개인 연락은 언제든 환영!&rdquo; SNS에서는 <strong>모든 메시지에 답할 의무가 없습니다</strong>.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">디지털 거절 5원칙</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li>침묵으로 거절하지 마세요 &mdash; 한 줄이라도 답하세요</li>
          <li>이모티콘으로 거절하지 마세요 &mdash; 텍스트로 명확히</li>
          <li>너무 늦게 답하지 마세요 &mdash; 당일 내가 이상적</li>
          <li>톤에 신경 쓰세요 &mdash; &ldquo;!&rdquo;, &ldquo;~&rdquo; 적절히 사용</li>
          <li>한 번 거절하면 끝 &mdash; 추가 해명 불필요</li>
        </ol>

        <blockquote className="border-l-4 border-violet-400 pl-4 py-2 my-4 bg-violet-50 dark:bg-violet-950 rounded-r-lg">
          <p><strong>7챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>카카오톡 → 읽씹보다 한 줄 거절이 낫다</li>
            <li>단톡방 → 인사하고 나가기</li>
            <li>이메일 → 감사-거절-마무리 구조</li>
            <li><strong>오늘부터 실행</strong>: 읽씹 대신 한 줄 거절을 보내세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch8",
    title: "Ch.8 거절 후 관계 관리: No 이후가 더 중요하다",
    body: (
      <>
        <h3 className="text-xl font-bold mt-8 mb-4">죄책감 해소 5단계</h3>
        <p>1. 감정 인정 → 2. 근거 확인(&ldquo;내가 잘못한 건 없다&rdquo;) → 3. 현실 체크(&ldquo;수락했으면 더 나빴을 것&rdquo;) → 4. 시간 두기(24~48시간) → 5. 자기 확인(&ldquo;나는 내 한계를 지킨 것이다&rdquo;)</p>

        <h3 className="text-xl font-bold mt-8 mb-4">상대가 화냈을 때</h3>
        <p>감정을 인정하되 거절을 번복하지 마세요. &ldquo;화난 마음은 이해해. 하지만 내 상황도 이해해줬으면 해.&rdquo; 관계를 위협하는 상대에게는: &ldquo;그렇게 느낄 수 있어. 시간이 좀 지나면 이야기하자.&rdquo;</p>

        <h3 className="text-xl font-bold mt-8 mb-4">거절이 신뢰를 높이는 이유</h3>
        <p>싫으면 싫다고 말하는 사람이 &ldquo;좋다&rdquo;고 했을 때는 <strong>진심</strong>입니다. 거절은 관계의 적이 아니라 신뢰의 기반입니다.</p>

        <blockquote className="border-l-4 border-violet-400 pl-4 py-2 my-4 bg-violet-50 dark:bg-violet-950 rounded-r-lg">
          <p><strong>8챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>죄책감 &#8800; 잘못 &mdash; 인정하되 지배당하지 않기</li>
            <li>상대의 화 → 감정 인정, 시간 주기, 번복하지 않기</li>
            <li>거절 후 며칠 뒤 일상적 연락으로 관계 정상화</li>
            <li><strong>오늘부터 실행</strong>: 부정적 자기 대화를 건강한 자기 대화로 바꿔보세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch9",
    title: "Ch.9 경계(Boundary) 세우기: 거절의 근본 해결",
    body: (
      <>
        <h3 className="text-xl font-bold mt-8 mb-4">경계의 4유형</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>물리적 경계</strong> &mdash; 내 몸과 공간에 대한 경계</li>
          <li><strong>감정적 경계</strong> &mdash; 남의 감정에 책임지지 않기</li>
          <li><strong>시간적 경계</strong> &mdash; 퇴근 후 업무 거절</li>
          <li><strong>디지털 경계</strong> &mdash; 카톡 즉시 답변 의무 없음</li>
        </ul>
        <p>핵심 문장: <strong>&ldquo;여기까지는 괜찮고, 여기서부터는 안 됩니다.&rdquo;</strong></p>

        <h3 className="text-xl font-bold mt-8 mb-4">경계 세우기 4단계</h3>
        <p><strong>1. 인식</strong> &mdash; 어디에서 불편한지 파악. <strong>2. 결정</strong> &mdash; 구체적 규칙 정하기. <strong>3. 전달</strong> &mdash; &ldquo;나는 ~ 할 때 불편합니다. 앞으로는 ~ 해주시면 좋겠습니다.&rdquo; <strong>4. 유지</strong> &mdash; 일관되게, 차분하게, 반복.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">건강한 경계 vs 벽</h3>
        <p>경계는 <strong>문</strong>과 같습니다 &mdash; 열 수도 닫을 수도 있습니다. 벽은 <strong>콘크리트</strong> &mdash; 아무것도 들어오지도, 나가지도 못합니다. 경계를 세우면 처음에는 불편하지만, 3개월 후에는 &ldquo;이전에는 어떻게 살았지?&rdquo;라는 생각이 듭니다.</p>

        <blockquote className="border-l-4 border-violet-400 pl-4 py-2 my-4 bg-violet-50 dark:bg-violet-950 rounded-r-lg">
          <p><strong>9챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>인식 → 결정 → 전달 → 유지, 4단계로 경계를 세운다</li>
            <li>경계는 관계를 보호하기 위해, 벽은 차단하기 위해</li>
            <li>경계를 세우면 더 건강한 관계만 남는다</li>
            <li><strong>오늘부터 실행</strong>: 한 가지 영역에서 나의 경계 규칙을 정하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch10",
    title: "Ch.10 30일 거절 연습 플랜",
    body: (
      <>
        <h3 className="text-xl font-bold mt-8 mb-4">Week 1: 작은 거절 (Day 1~7)</h3>
        <p>카페 사이즈 업 거절, 마트 시식 거절, 매장 추천 거절, 영수증 거절, 전화 설문 거절, 앱 알림 끄기, 구독 이메일 해지. <strong>거절해도 아무 일도 일어나지 않는다</strong>는 경험 쌓기.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">Week 2: 일상 거절 (Day 8~14)</h3>
        <p>원치 않는 약속 거절, 부탁 거절, &ldquo;아무거나&rdquo; 대신 의견 말하기, SNS 부탁 거절, 전화 짧게 끊기, &ldquo;생각해 볼게&rdquo; 대신 즉답, 2차 거절.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">Week 3: 직장/가족 (Day 15~21)</h3>
        <p>동료 업무 부탁, 회식, 퇴근 후 카톡, 부모님 요구, 상사에게 우선순위 확인, 경조사 선별 참석, 가족 간섭에 의견 표현.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">Week 4: 어려운 거절 (Day 22~30)</h3>
        <p>금전 요청, 감정적 압박, 깨진 음반 기법, 구독 해지 관철, 보험 거절, 불공평한 상황에 의견, 경계 침범 재전달, 나만의 시간 확보, 30일 돌아보기.</p>

        <blockquote className="border-l-4 border-violet-400 pl-4 py-2 my-4 bg-violet-50 dark:bg-violet-950 rounded-r-lg">
          <p><strong>10챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>거절은 근육이다 &mdash; 직접 해봐야 몸에 붙는다</li>
            <li>작은 것부터 시작해서 점점 어려운 거절로 나아간다</li>
            <li>30일 후 가장 큰 변화: 나의 &ldquo;네&rdquo;가 진심이 된다</li>
            <li><strong>오늘부터 실행</strong>: 캘린더에 30일을 표시하고 Day 1 미션을 시작하세요.</li>
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
        <h3 className="text-xl font-bold mt-8 mb-4">거절 스크립트 20개 (요약)</h3>
        <p><strong>직장 5개</strong>: 상사 추가 업무(&ldquo;우선순위를 정해주시면 조정하겠습니다&rdquo;), 동료 떠넘기기, 회식, 주말 카톡, 업무 범위 외.</p>
        <p><strong>인간관계 5개</strong>: 돈 빌려달라, 보험·다단계, 경조사, 고민 상담, 감정적 압박.</p>
        <p><strong>가족 5개</strong>: 결혼 압박, 육아 간섭, 명절 방문, 형제 금전, 자녀 요구.</p>
        <p><strong>소비·디지털 5개</strong>: 매장 업셀링, 텔레마케터, 구독 해지 방어, 카톡 부탁, 단톡방 나가기.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">거절 연습 일지</h3>
        <p>매일 기록: 날짜, 상황, 나의 대응, 거절 전/후 감정, 상대 반응, 실제 결과, 배운 점. 주간 돌아보기: 거절 횟수, 가장 잘한 거절, 가장 어려웠던 거절, 다음 주 목표.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">경계 설정 워크시트</h3>
        <p>7개 영역(시간·감정·물리적·금전·디지털·직장·가족)의 경계 수준 진단, 나의 경계 규칙 선언문, 경계 전달 계획.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">&ldquo;거절하면 안 되는 상황&rdquo; 가이드</h3>
        <p>거절의 최종 기준: <strong>&ldquo;이것을 수락했을 때, 나는 상대를 원망하지 않을 수 있는가?&rdquo;</strong> 원망 없이 진심으로 할 수 있다면 수락. 원망이 예상된다면 거절.</p>

        <blockquote className="border-l-4 border-violet-400 pl-4 py-2 my-4 bg-violet-50 dark:bg-violet-950 rounded-r-lg">
          <p><strong>부록 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>모든 템플릿은 바로 복사해서 사용할 수 있다</li>
            <li>당신의 &ldquo;아니오&rdquo;는 이기적이지 않다. 건강하다.</li>
            <li>당신의 &ldquo;아니오&rdquo; 덕분에, 당신의 &ldquo;네&rdquo;는 진심이 된다.</li>
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

export default function SayingNoRead() {
  return (
    <GuideBook
      bookId="saying-no"
      title="거절 잘하는 사람들의 비밀"
      emoji="🛡️"
      subtitle="관계를 지키면서 나를 지키는 거절의 기술"
      topItems={topItems}
      sections={sections}
      updateLogs={updateLogs}
      currentVersion={1}
    />
  );
}
