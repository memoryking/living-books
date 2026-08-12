import GuideBook from "@/components/GuideBook";
import type { TopItem, ContentSection, UpdateLog } from "@/components/GuideBook";

export const metadata = {
  title: "인간관계를 좋게 하는 방법 | 살아있는 정보책",
  description:
    "단순한 정보가 아닌, 듣고 외우고 실천하는 인간관계 가이드. 꼭 알아야 할 10가지를 반복 청취하고 매일 실천하세요.",
};

const topItems: TopItem[] = [
  {
    number: 1,
    title: "끝까지 들어라",
    oneLiner: "상대의 말을 끊지 말고 끝까지 들어라. 경청이 최고의 대화 기술이다.",
    description:
      "대화에서 가장 흔한 실수는 상대가 말하는 도중에 내 생각을 끼워 넣는 것입니다. 경청은 단순히 듣는 것이 아니라, 상대가 '이 사람이 나를 이해해주는구나'라고 느끼게 하는 것입니다. 연구에 따르면 대화의 최소 절반은 듣는 데 써야 합니다.",
    situation: "상대가 말하는 도중 내 의견이나 반박이 떠올랐을 때",
    action: "떠오른 말을 3초간 참고, 상대의 마지막 말을 되풀이해준 뒤 내 의견을 말하세요. 예: '그러니까 네 말은 ~이라는 거지? 나는...'",
    mission: "오늘 대화에서 상대의 말을 끊지 않고 끝까지 듣는 연습을 3번 해보세요.",
  },
  {
    number: 2,
    title: "'나는' 으로 말하라",
    oneLiner: "'너는 왜 맨날...' 대신 '나는 ~할 때 속상해'로 바꿔라.",
    description:
      "비난형 대화('너는 왜 맨날 그래')는 상대를 방어적으로 만듭니다. '나-전달법(I-message)'을 쓰면 같은 내용도 부드럽게 전달됩니다. '너는 무책임해' → '나는 약속이 바뀌면 불안해져.' 주어만 바꿔도 관계가 달라집니다.",
    situation: "상대의 행동에 불만이 생겨서 지적하고 싶을 때",
    action: "'나는 + 상황 + 감정' 공식으로 말하세요. 예: '나는 연락이 없으면 걱정이 돼.'",
    mission: "오늘 불만을 전달할 때 '나는...'으로 시작하는 문장을 1번 사용해보세요.",
  },
  {
    number: 3,
    title: "먼저 인사하라",
    oneLiner: "먼저 인사하는 사람이 관계의 주도권을 쥔다.",
    description:
      "인간관계에서 가장 쉬우면서 효과 큰 행동이 '먼저 인사하기'입니다. 연구에 따르면 작고 일관된 행동(미소, 인사, 이름 기억)이 쌓이면 호감과 신뢰를 만듭니다. 상대를 기다리지 말고, 내가 먼저 한 마디를 건네세요.",
    situation: "출근길이나 모임에서 어색한 분위기가 느껴질 때",
    action: "상대의 이름을 부르며 먼저 인사하세요. '○○님, 좋은 아침이에요!' 이름을 넣으면 효과가 2배입니다.",
    mission: "오늘 3명에게 먼저 인사해보세요. 이름을 넣어서.",
  },
  {
    number: 4,
    title: "공감과 해결을 구분하라",
    oneLiner: "상대가 원하는 게 조언인지 공감인지 먼저 파악하라.",
    description:
      "누군가 힘든 이야기를 할 때, 바로 '이렇게 해봐'라고 해결책을 내놓으면 오히려 역효과가 납니다. 상대는 해결이 아니라 공감을 원하는 경우가 많습니다. '힘들었겠다'는 한 마디가 '이렇게 해봐'보다 훨씬 강력합니다.",
    situation: "친구나 동료가 힘든 이야기, 불만을 털어놓을 때",
    action: "먼저 '그랬구나, 힘들었겠다'로 공감한 뒤, '혹시 내가 도움 줄 수 있는 게 있을까?'로 물어보세요.",
    mission: "오늘 누군가의 이야기에 해결책 대신 '그랬구나'로 공감해보세요.",
  },
  {
    number: 5,
    title: "적절한 거리를 유지하라",
    oneLiner: "가까울수록 거리가 필요하다. 불가근불가원.",
    description:
      "아무리 친한 사이라도 24시간 붙어 있으면 피곤해집니다. 좋은 관계의 비밀은 적절한 거리입니다. 상대의 사생활을 존중하고, 혼자만의 시간도 소중히 여기세요. 집착하지 않는 관계가 오래갑니다.",
    situation: "가까운 사람에게 서운함이 쌓이거나 질식할 것 같을 때",
    action: "서운함을 느끼면 바로 연락하지 말고, 하루 쉬어보세요. 그래도 서운하면 그때 솔직히 이야기하세요.",
    mission: "오늘 가까운 사람 1명에게 '과도한 연락/확인'을 하지 않는 연습을 해보세요.",
  },
  {
    number: 6,
    title: "감사를 표현하라",
    oneLiner: "당연한 것은 없다. '고마워'를 입 밖으로 꺼내라.",
    description:
      "가까운 사이일수록 감사를 말로 하지 않습니다. 하지만 표현하지 않으면 상대는 모릅니다. 진심 어린 감사 표현은 관계의 윤활유입니다. '항상 고마워'보다 구체적으로 '아까 그거 해줘서 정말 고마웠어'가 훨씬 효과적입니다.",
    situation: "상대가 나를 위해 무언가를 해줬는데 당연하게 넘어가려 할 때",
    action: "구체적으로 감사하세요. '○○ 해줘서 고마워, 덕분에 ○○했어.'",
    mission: "오늘 주변 사람 2명에게 구체적으로 감사를 표현해보세요.",
  },
  {
    number: 7,
    title: "뒷담화를 하지 마라",
    oneLiner: "뒷담화는 순간 재밌지만, 듣는 사람은 '나도 당하겠구나' 생각한다.",
    description:
      "뒷담화는 공유하는 순간 유대감이 느껴지지만, 듣는 사람은 무의식적으로 '이 사람은 나 없을 때 나도 이렇게 말하겠구나'라고 판단합니다. 신뢰를 쌓는 가장 확실한 방법은 그 자리에 없는 사람도 존중하는 것입니다.",
    situation: "동료나 친구가 다른 사람 이야기를 시작하며 동조를 구할 때",
    action: "동조하지도, 반박하지도 말고 '그래? 나는 잘 모르겠다' 정도로 중립을 지키세요.",
    mission: "오늘 하루 누군가에 대해 부정적인 말을 하지 않는 연습을 해보세요.",
  },
  {
    number: 8,
    title: "잘못했으면 빨리 사과하라",
    oneLiner: "사과는 빠를수록 효과가 크다. 변명은 빼라.",
    description:
      "잘못을 인정하는 것이 약한 것이 아닙니다. 빠른 사과는 관계의 균열을 최소화합니다. 좋은 사과의 공식: '내가 ~한 게 잘못이야 + 미안해 + 앞으로 ~하겠다.' 변명('그때 내가 바빠서...')을 붙이면 사과의 효과가 절반으로 줄어듭니다.",
    situation: "내 실수로 상대가 불편해한 걸 느꼈을 때",
    action: "'내가 ~한 게 미안해. 앞으로는 ~하겠다.' 변명 없이 짧게 사과하세요.",
    mission: "오늘 사소한 잘못이라도 하나 인정하고 사과해보세요.",
  },
  {
    number: 9,
    title: "기대를 낮추고 기준을 세워라",
    oneLiner: "상대에 대한 기대를 줄이고, 나의 기준을 명확히 하라.",
    description:
      "인간관계 스트레스의 대부분은 '기대와 현실의 차이'에서 옵니다. '이 정도는 해줘야지'라는 기대가 충족되지 않으면 서운해집니다. 대신 나의 기준을 세우세요. '나는 이런 관계를 원해, 그래서 이렇게 행동할 거야.' 상대를 바꾸려 하지 말고, 나의 기준으로 선택하세요.",
    situation: "상대가 내 기대대로 행동하지 않아서 실망스러울 때",
    action: "'이 사람이 원래 이런 사람이구나'로 받아들이고, 내가 이 관계에서 어디까지 할지를 정하세요.",
    mission: "오늘 누군가에게 실망했을 때 '기대가 너무 높았나?'를 스스로 물어보세요.",
  },
  {
    number: 10,
    title: "관계에도 투자하라",
    oneLiner: "좋은 관계는 저절로 유지되지 않는다. 시간과 정성을 투자하라.",
    description:
      "돈 벌기 위해 노력하면서 관계에는 노력하지 않는 사람이 많습니다. 좋은 관계는 저절로 유지되지 않습니다. 정기적으로 만나고, 안부를 묻고, 기념일을 챙기는 작은 투자가 관계의 잔고를 채웁니다.",
    situation: "바빠서 연락을 안 한 지 오래된 소중한 사람이 떠올랐을 때",
    action: "지금 바로 짧은 안부 메시지를 보내세요. '요즘 어때? 생각나서 연락해봤어.'",
    mission: "오래 연락하지 못한 소중한 사람 1명에게 안부 메시지를 보내세요.",
  },
];

const sections: ContentSection[] = [
  {
    id: "why-hard",
    title: "왜 인간관계가 어려울까?",
    body: (
      <>
        <p>
          인간관계가 어려운 이유는 간단합니다. <strong>나와 다른 사람</strong>이기 때문입니다.
          같은 말도 다르게 듣고, 같은 상황도 다르게 느낍니다.
        </p>
        <p>
          직장에서 &quot;사회생활이 왜 이렇게 힘든가요?&quot;라는 질문은 커뮤니티에서 가장 많이 올라오는 주제 중 하나입니다.
          답은 하나가 아니지만, 공통적으로 나오는 핵심 원인은 이렇습니다:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>기대와 현실의 차이</strong> — &quot;이 정도는 해줘야지&quot;라는 기대가 깨질 때 서운함이 생깁니다.</li>
          <li><strong>소통 방식의 차이</strong> — 나는 직접적으로 말하는데 상대는 돌려서 말하면 충돌합니다.</li>
          <li><strong>거리 조절 실패</strong> — 너무 가깝거나 너무 멀면 둘 다 불편합니다.</li>
          <li><strong>비교와 판단</strong> — 나도 모르게 상대를 평가하고 있으면 관계가 경직됩니다.</li>
        </ul>
        <p>
          이 책은 이런 문제들에 대한 구체적이고 실천 가능한 해결법을 담았습니다.
          중요한 건 &quot;알고 있냐&quot;가 아니라 <strong>&quot;실천하고 있느냐&quot;</strong>입니다.
        </p>
      </>
    ),
  },
  {
    id: "listening",
    title: "경청 — 대화의 80%는 듣기다",
    body: (
      <>
        <p>
          사람들이 &quot;저 사람은 대화를 잘 해&quot;라고 할 때, 대부분 말을 잘하는 사람이 아니라
          <strong> 잘 들어주는 사람</strong>을 말합니다.
        </p>
        <p>
          공감적 경청의 핵심은 단순히 내용을 알아듣는 게 아닙니다.
          상대에 대해 판단하지 않고, 영향을 미치겠다는 의도도 내려놓고,
          상대의 마음에 일어난 경험을 있는 그대로 수용하고 함께하는 것입니다.
        </p>
        <h3 className="text-lg font-semibold mt-6 mb-3">경청 실천 체크리스트</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>상대가 말할 때 핸드폰을 내려놓는다</li>
          <li>눈을 맞추고 고개를 끄덕인다</li>
          <li>상대의 마지막 말을 되풀이해본다 (&quot;그러니까 ~라는 거지?&quot;)</li>
          <li>내 의견은 상대가 다 말한 뒤에 꺼낸다</li>
          <li>조언 대신 &quot;그랬구나&quot;를 먼저 말한다</li>
        </ul>
      </>
    ),
  },
  {
    id: "communication",
    title: "소통 — 나-전달법과 비폭력 대화",
    body: (
      <>
        <p>
          소통의 3요소는 <strong>공감, 주장, 존중</strong>입니다.
          이 셋 중 하나라도 빠지면 대화는 어긋납니다.
        </p>
        <h3 className="text-lg font-semibold mt-6 mb-3">나-전달법 (I-message) 공식</h3>
        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800">
          <p className="font-mono text-center text-lg">
            &quot;나는&quot; + [상황] + &quot;할 때&quot; + [감정] + &quot;이/가 돼&quot;
          </p>
        </div>
        <h3 className="text-lg font-semibold mt-6 mb-3">변환 예시</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="p-3 text-left border">❌ 너-전달법</th>
                <th className="p-3 text-left border">✅ 나-전달법</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border">너는 왜 맨날 늦어?</td><td className="p-3 border">나는 기다리면 불안해져</td></tr>
              <tr><td className="p-3 border">너는 내 말을 안 들어</td><td className="p-3 border">나는 내 말이 무시되는 느낌이 들어</td></tr>
              <tr><td className="p-3 border">너 때문에 짜증나</td><td className="p-3 border">나는 이런 상황이 반복되면 힘들어</td></tr>
              <tr><td className="p-3 border">너는 무책임해</td><td className="p-3 border">나는 약속이 바뀌면 불안해져</td></tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: "empathy-vs-solution",
    title: "공감 vs 해결 — 상대가 원하는 것",
    body: (
      <>
        <p>
          커뮤니티에서 정말 많이 나오는 이야기: &quot;남자친구한테 힘든 얘기 했더니
          해결책만 내놓아요.&quot; &quot;친구한테 고민 상담했는데 설교를 해요.&quot;
        </p>
        <p>
          사람이 힘든 이야기를 할 때 원하는 것은 대부분 <strong>해결이 아니라 공감</strong>입니다.
        </p>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="p-3 text-left border">상대의 말</th>
                <th className="p-3 text-left border">❌ 해결 반응</th>
                <th className="p-3 text-left border">✅ 공감 반응</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border">&quot;요즘 너무 힘들어&quot;</td>
                <td className="p-3 border">&quot;운동해 봐, 좋아져&quot;</td>
                <td className="p-3 border">&quot;많이 힘들었겠다. 무슨 일이야?&quot;</td>
              </tr>
              <tr>
                <td className="p-3 border">&quot;팀장이 너무해&quot;</td>
                <td className="p-3 border">&quot;그냥 무시해&quot;</td>
                <td className="p-3 border">&quot;그랬구나, 속상했겠다&quot;</td>
              </tr>
              <tr>
                <td className="p-3 border">&quot;다이어트가 안 돼&quot;</td>
                <td className="p-3 border">&quot;간헐적 단식 해봐&quot;</td>
                <td className="p-3 border">&quot;노력하는데 안 되면 더 답답하지&quot;</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          <strong>꿀팁:</strong> 잘 모르겠으면 물어보세요.
          &quot;내가 같이 고민해줄까, 아니면 그냥 들어줄까?&quot;
          이 한 마디가 관계를 바꿉니다.
        </p>
      </>
    ),
  },
  {
    id: "boundaries",
    title: "거리두기 — 가까울수록 필요한 기술",
    body: (
      <>
        <p>
          <strong>불가근불가원(不可近不可遠)</strong> — 너무 가깝지도, 너무 멀지도 않게.
          관계의 기본이지만 실천이 가장 어려운 원칙입니다.
        </p>
        <p>
          특히 가까운 관계에서 거리 조절이 안 될 때 문제가 생깁니다:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>연인 사이에서 &quot;왜 답장 안 해?&quot; — 집착의 시작</li>
          <li>직장에서 &quot;퇴근 후에도 연락&quot; — 번아웃의 시작</li>
          <li>친구 사이에서 &quot;너만 믿어&quot; — 의존의 시작</li>
        </ul>
        <h3 className="text-lg font-semibold mt-6 mb-3">건강한 거리두기 원칙</h3>
        <ol className="list-decimal list-inside space-y-2 ml-4">
          <li>상대의 사생활에 대해 캐묻지 않는다</li>
          <li>혼자만의 시간을 서로 존중한다</li>
          <li>거절할 수 있는 관계가 건강한 관계다</li>
          <li>서운함은 쌓지 말고 적절한 때에 표현한다</li>
        </ol>
      </>
    ),
  },
  {
    id: "gratitude",
    title: "감사 표현 — 구체적으로 말하기",
    body: (
      <>
        <p>
          &quot;고마워&quot;를 말하는 건 쉽지만, <strong>구체적으로</strong> 말하는 건 연습이 필요합니다.
          구체적 감사가 효과적인 이유는 &quot;이 사람이 나를 정말 보고 있구나&quot;라는 느낌을 주기 때문입니다.
        </p>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="p-3 text-left border">😐 일반적 감사</th>
                <th className="p-3 text-left border">😊 구체적 감사</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border">고마워</td><td className="p-3 border">아까 커피 사다줘서 고마워, 덕분에 오후에 힘이 났어</td></tr>
              <tr><td className="p-3 border">수고했어</td><td className="p-3 border">이번 발표 자료 정리 정말 깔끔하더라, 덕분에 회의가 수월했어</td></tr>
              <tr><td className="p-3 border">항상 고마워</td><td className="p-3 border">바쁜데 내 이야기 들어줘서 고마워, 말하고 나니 한결 나아졌어</td></tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: "gossip",
    title: "뒷담화의 함정",
    body: (
      <>
        <p>
          뒷담화는 순간적으로 유대감을 줍니다. &quot;우리는 같은 편&quot;이라는 느낌.
          하지만 듣는 사람의 무의식은 이렇게 작동합니다:
        </p>
        <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 my-4">
          <p className="text-center font-medium">
            &quot;이 사람은 나 없는 자리에서도 이렇게 말하겠구나&quot;
          </p>
        </div>
        <p>
          신뢰의 가장 확실한 증거는 <strong>그 자리에 없는 사람도 존중하는 것</strong>입니다.
          뒷담화에 동조를 구하는 사람에게는 &quot;그래? 나는 잘 모르겠다&quot; 정도의
          중립적 반응이 최선입니다.
        </p>
      </>
    ),
  },
  {
    id: "apology",
    title: "사과의 기술",
    body: (
      <>
        <p>
          좋은 사과에는 공식이 있습니다:
        </p>
        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 my-4">
          <p className="font-mono text-center">
            인정 + 사과 + 대안 (변명 금지)
          </p>
          <p className="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">
            &quot;내가 ~한 게 잘못이야. 미안해. 앞으로는 ~하겠다.&quot;
          </p>
        </div>
        <h3 className="text-lg font-semibold mt-6 mb-3">나쁜 사과 vs 좋은 사과</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="p-3 text-left border">❌ 나쁜 사과</th>
                <th className="p-3 text-left border">✅ 좋은 사과</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border">&quot;미안한데 그때 내가 바빠서...&quot;</td><td className="p-3 border">&quot;늦어서 미안해. 다음엔 미리 연락할게.&quot;</td></tr>
              <tr><td className="p-3 border">&quot;기분 나빴으면 미안&quot;</td><td className="p-3 border">&quot;내 말이 상처됐을 거야. 미안해.&quot;</td></tr>
              <tr><td className="p-3 border">&quot;그런 뜻이 아니었어&quot;</td><td className="p-3 border">&quot;의도와 다르게 전달됐네. 내가 잘못했어.&quot;</td></tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: "expectations",
    title: "기대 관리 — 서운함의 근원",
    body: (
      <>
        <p>
          인간관계 스트레스의 대부분은 <strong>&quot;기대와 현실의 차이&quot;</strong>에서 옵니다.
        </p>
        <p>
          &quot;이 정도는 해줘야지&quot; → 안 해줌 → 서운함 → 갈등.
          이 패턴을 끊는 방법은 상대를 바꾸는 게 아니라 <strong>나의 기대를 조절하는 것</strong>입니다.
        </p>
        <h3 className="text-lg font-semibold mt-6 mb-3">기대 vs 기준</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="p-3 text-left border">기대 (상대에게)</th>
                <th className="p-3 text-left border">기준 (나에게)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border">&quot;생일엔 축하해줘야지&quot;</td><td className="p-3 border">&quot;나는 소중한 사람 생일을 챙기겠다&quot;</td></tr>
              <tr><td className="p-3 border">&quot;먼저 연락 좀 해&quot;</td><td className="p-3 border">&quot;나는 보고 싶으면 먼저 연락한다&quot;</td></tr>
              <tr><td className="p-3 border">&quot;내 마음을 알아줘&quot;</td><td className="p-3 border">&quot;나는 내 마음을 말로 표현한다&quot;</td></tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: "invest",
    title: "관계에 투자하기",
    body: (
      <>
        <p>
          물질적 풍요를 위해 노력하면서 관계에는 노력하지 않는 사람이 많습니다.
          하지만 연구에 따르면 <strong>인생의 행복을 결정하는 가장 큰 요인은 돈이 아니라 관계의 질</strong>입니다.
          (하버드 75년 추적 연구)
        </p>
        <h3 className="text-lg font-semibold mt-6 mb-3">관계 투자의 구체적 방법</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>정기적 만남</strong> — 한 달에 한 번이라도 직접 만나세요</li>
          <li><strong>안부 메시지</strong> — &quot;요즘 어때?&quot; 한 마디가 관계를 유지합니다</li>
          <li><strong>기념일 챙기기</strong> — 캘린더에 소중한 사람들의 생일을 등록하세요</li>
          <li><strong>작은 선물</strong> — 비싼 선물이 아니라 &quot;이거 보니까 네 생각났어&quot;가 감동입니다</li>
          <li><strong>함께하는 경험</strong> — 같이 뭔가를 해본 기억이 관계를 깊게 합니다</li>
        </ul>
      </>
    ),
  },
  {
    id: "workplace",
    title: "직장에서의 인간관계",
    body: (
      <>
        <p>
          커뮤니티에서 가장 많이 올라오는 고민: &quot;직장 인간관계가 너무 힘들어요.&quot;
          직장 관계는 친구 관계와 다릅니다. 선택할 수 없고, 매일 봐야 합니다.
        </p>
        <h3 className="text-lg font-semibold mt-6 mb-3">직장 인간관계 생존 원칙</h3>
        <ol className="list-decimal list-inside space-y-3 ml-4">
          <li>
            <strong>모든 사람과 친할 필요 없다</strong>
            <p className="text-sm text-gray-500 ml-6">호감 30% + 보통 40% + 불편 30% = 어디나 비슷합니다.</p>
          </li>
          <li>
            <strong>업무 관계와 사적 관계를 분리한다</strong>
            <p className="text-sm text-gray-500 ml-6">좋은 동료 ≠ 좋은 친구. 혼동하면 둘 다 잃습니다.</p>
          </li>
          <li>
            <strong>감정보다 사실로 말한다</strong>
            <p className="text-sm text-gray-500 ml-6">&quot;기분 나빠요&quot; → &quot;이 업무의 기한을 확인하고 싶습니다&quot;</p>
          </li>
          <li>
            <strong>에너지를 뺏는 사람과는 최소한의 접점만 유지한다</strong>
            <p className="text-sm text-gray-500 ml-6">모든 사람을 감당할 필요 없습니다. 거리를 두는 것도 기술입니다.</p>
          </li>
        </ol>
      </>
    ),
  },
  {
    id: "digital",
    title: "디지털 시대의 소통",
    body: (
      <>
        <p>
          카톡, 문자, DM... 디지털 소통은 편리하지만 오해의 온상입니다.
          표정과 톤이 빠지면 같은 말도 다르게 읽힙니다.
        </p>
        <h3 className="text-lg font-semibold mt-6 mb-3">디지털 소통 원칙</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>중요한 대화는 만나서 하세요</strong> — 텍스트로는 뉘앙스가 전달되지 않습니다</li>
          <li><strong>읽씹에 의미 부여하지 마세요</strong> — 상대가 바쁜 것일 뿐입니다</li>
          <li><strong>&quot;ㅇㅇ&quot; &quot;ㅋ&quot; 같은 단답은 피하세요</strong> — 관심 없어 보입니다</li>
          <li><strong>감정이 격할 때는 메시지를 보내지 마세요</strong> — 써놓고 1시간 후에 다시 읽어보세요</li>
          <li><strong>이모티콘을 적절히 사용하세요</strong> — 텍스트의 차가움을 보완합니다</li>
        </ul>
      </>
    ),
  },
];

const updateLogs: UpdateLog[] = [
  {
    version: 1,
    date: "2026-08-13",
    changes: [
      "초판 발행: 10가지 핵심 원칙 선정",
      "경청, 소통, 공감, 거리두기, 감사 등 12개 상세 섹션 작성",
      "커뮤니티 실제 질문 기반 콘텐츠 구성",
    ],
  },
];

export default function RelationshipsPage() {
  return (
    <GuideBook
      bookId="relationships"
      title="인간관계를 좋게 하는 방법"
      emoji="🤝"
      subtitle="듣고, 외우고, 실천하는 살아있는 가이드"
      topItems={topItems}
      sections={sections}
      updateLogs={updateLogs}
      currentVersion={1}
    />
  );
}
