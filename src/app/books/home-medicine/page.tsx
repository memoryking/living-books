import Link from "next/link";

export const metadata = {
  title: "가정에서 꼭 필요한 상비약과 사용법 | 살아있는 정보책",
  description: "유원소망약국 김약사가 알려드리는 가정 상비약 가이드. 사람들이 진짜 궁금해하는 질문에 약사가 직접 답합니다.",
};

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-16 scroll-mt-24">
      <h2 className="text-2xl font-bold mb-6 pb-3 border-b border-gray-200 dark:border-gray-700">
        {title}
      </h2>
      {children}
    </section>
  );
}

function QA({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <div className="mb-8 p-5 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
      <p className="font-semibold text-blue-600 dark:text-blue-400 mb-3 text-lg">Q. {q}</p>
      <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 p-4 rounded-lg bg-amber-50 dark:bg-amber-950 border-l-4 border-amber-400 text-sm">
      <span className="font-semibold">김약사 TIP</span> {children}
    </div>
  );
}

function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 p-4 rounded-lg bg-red-50 dark:bg-red-950 border-l-4 border-red-400 text-sm">
      <span className="font-semibold">주의</span> {children}
    </div>
  );
}

function DrugCard({
  name,
  ingredient,
  use,
  when,
  caution,
}: {
  name: string;
  ingredient: string;
  use: string;
  when: string;
  caution?: string;
}) {
  return (
    <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 mb-4">
      <h4 className="font-bold text-lg mb-2">{name}</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
        <div><span className="text-gray-500">성분:</span> {ingredient}</div>
        <div><span className="text-gray-500">용도:</span> {use}</div>
        <div className="sm:col-span-2"><span className="text-gray-500">이럴 때 쓰세요:</span> {when}</div>
        {caution && (
          <div className="sm:col-span-2 text-red-600 dark:text-red-400">
            <span className="text-gray-500">주의:</span> {caution}
          </div>
        )}
      </div>
    </div>
  );
}

const toc = [
  { id: "intro", label: "안녕하세요, 김약사입니다" },
  { id: "why", label: "왜 상비약이 필요한가요?" },
  { id: "must-have", label: "꼭 있어야 할 상비약 7종" },
  { id: "pain", label: "타이레놀 vs 이부프로펜, 뭘 먹어야 하나요?" },
  { id: "digest", label: "체했을 때 소화제, 뭐가 좋아요?" },
  { id: "wound", label: "상처 연고 완전 정복 — 후시딘, 마데카솔, 바스포" },
  { id: "bandage", label: "상처 밴드 제대로 고르기 — 듀오덤, 메디폼, 일반밴드" },
  { id: "burn", label: "화상 입었을 때 응급처치와 연고" },
  { id: "acne", label: "여드름 났을 때, 약국에서 살 수 있는 연고" },
  { id: "mouth", label: "입병(구내염) 빨리 낫는 법" },
  { id: "kids", label: "아이가 있는 집은 뭘 더 준비해야 하나요?" },
  { id: "night", label: "밤에 약국 문 닫았을 때 어떡하죠?" },
  { id: "storage", label: "상비약 보관과 유효기간 관리" },
  { id: "sources", label: "출처 및 참고자료" },
];

export default function HomeMedicinePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-10">
        <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 mb-4 inline-block">
          &larr; 전체 목록
        </Link>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-5xl">💊</span>
          <div>
            <h1 className="text-3xl font-bold">가정에서 꼭 필요한 상비약과 사용법</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              유원소망약국 김약사가 친절하게 알려드립니다
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <span>v2</span>
          <span>최종 업데이트: 2026-08-05</span>
          <span className="px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs">
            최신
          </span>
        </div>
      </div>

      {/* 목차 */}
      <nav className="mb-12 p-5 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
        <h3 className="font-semibold mb-3">목차</h3>
        <ol className="space-y-1.5 text-sm">
          {toc.map((item, i) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                {i + 1}. {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* 1. 인사 */}
      <Section id="intro" title="1. 안녕하세요, 김약사입니다">
        <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800">
          <p className="leading-relaxed">
            안녕하세요, <strong>유원소망약국</strong>의 김약사입니다.
            약국에서 매일 환자분들을 만나다 보면, 같은 질문을 정말 많이 받아요.
          </p>
          <p className="mt-3 leading-relaxed">
            &quot;약사님, 후시딘이랑 마데카솔 뭐가 달라요?&quot;<br />
            &quot;타이레놀 먹어야 해요, 이부프로펜 먹어야 해요?&quot;<br />
            &quot;듀오덤이랑 메디폼이랑 뭐가 달라요?&quot;
          </p>
          <p className="mt-3 leading-relaxed">
            이런 질문들, 약국에 오시면 제가 바로 답해드리는데요. 막상 밤에, 주말에, 급할 때는
            물어볼 곳이 없잖아요. 그래서 이 정보책을 만들었습니다.
          </p>
          <p className="mt-3 leading-relaxed font-semibold">
            커뮤니티에서 사람들이 실제로 궁금해하는 질문들을 모아서,
            약사인 제가 직접 검증하고 쉽게 풀어드리겠습니다.
            편하게 읽어주세요!
          </p>
        </div>
      </Section>

      {/* 2. 왜 상비약이 필요한가요? */}
      <Section id="why" title="2. 왜 상비약이 필요한가요?">
        <QA q="집에 약을 굳이 둬야 하나요? 약국 가면 되는 거 아닌가요?">
          <p>
            이 질문, 약국에서도 자주 받아요. 그런데요, 한밤중에 갑자기 열이 펄펄 나는데
            약국은 다 닫았고, 편의점 약은 한정적이고... 이런 경험 한 번쯤 있으시죠?
          </p>
          <p>
            실제로 <strong>편의점 상비약을 사는 이유의 68.8%가
            &quot;약국이 문 닫는 심야·공휴일에 급해서&quot;</strong>라는 조사 결과가 있어요.
          </p>
          <p>
            특히 어린 자녀가 있는 집은 더 절실합니다. 아이들은 꼭 새벽에 열이 오르거든요.
            약국에서 일하다 보면 &quot;어젯밤에 해열제가 있었으면...&quot; 하시는 분들이 정말 많아요.
          </p>
          <Tip>
            상비약은 &quot;만약을 위한 보험&quot;이에요. 1~2만원이면 기본 세트를 갖출 수 있고,
            이 작은 투자가 한밤중의 큰 불안을 막아줍니다.
          </Tip>
        </QA>
      </Section>

      {/* 3. 꼭 있어야 할 상비약 7종 */}
      <Section id="must-have" title="3. 꼭 있어야 할 상비약 7종">
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          제가 약국에서 환자분들께 항상 추천드리는 기본 7종이에요.
          커뮤니티에서도 &quot;이건 진짜 있어야 한다&quot;고 입을 모으는 것들이기도 하고요.
        </p>

        <DrugCard
          name="1. 해열진통제 (타이레놀 등)"
          ingredient="아세트아미노펜"
          use="두통, 발열, 생리통, 치통"
          when="열이 나거나, 머리가 아프거나, 생리통이 올 때. 집에서 가장 먼저 찾게 되는 약이에요."
          caution="하루 4,000mg(8알) 초과 금지. 술 마신 날은 복용하지 마세요. 간에 부담을 줄 수 있습니다."
        />
        <DrugCard
          name="2. 소염진통제 (이지엔6, 부루펜 등)"
          ingredient="이부프로펜"
          use="근육통, 관절통, 치통, 염좌 등 염증성 통증"
          when="타이레놀과 달리 '염증'까지 잡아야 할 때. 부딪혀서 부은 곳, 삔 발목, 근육통에 더 효과적이에요."
          caution="반드시 식후에 복용하세요. 공복에 먹으면 위장장애가 올 수 있어요."
        />
        <DrugCard
          name="3. 소화제 (베아제 / 훼스탈)"
          ingredient="복합 소화효소"
          use="소화불량, 과식, 복부 팽만감"
          when="과식했거나 체했을 때. 뒤에서 베아제와 훼스탈의 차이를 자세히 알려드릴게요."
        />
        <DrugCard
          name="4. 지사제 (정로환, 스멕타 등)"
          ingredient="베르베린 / 아크리놀"
          use="급성 설사, 배탈"
          when="갑자기 배가 아프면서 설사가 날 때. 여행 중에는 특히 필수예요."
          caution="2일 이상 지속되거나 혈변이 있으면 반드시 병원에 가세요."
        />
        <DrugCard
          name="5. 종합감기약 (판콜에이, 콜대원 등)"
          ingredient="복합 성분 (해열+항히스타민+진해거담)"
          use="콧물, 기침, 발열, 몸살 등 감기 증상 전반"
          when="감기 초기 증상이 올 때. 단, 증상이 1주일 이상 가면 병원에 가주세요."
        />
        <DrugCard
          name="6. 항히스타민제 (지르텍 등)"
          ingredient="세티리진"
          use="알레르기 비염, 두드러기, 벌레 물린 데"
          when="갑자기 두드러기가 나거나, 벌레에 물려서 부어오를 때. 알레르기 반응 전반에 대응 가능해요."
          caution="졸음이 올 수 있으므로 운전 전 복용에 주의하세요."
        />
        <DrugCard
          name="7. 상처 치료 세트"
          ingredient="소독약 + 항생제 연고 + 습윤밴드"
          use="베이거나 긁힌 상처, 찰과상"
          when="아래 '상처 연고 완전 정복' 섹션에서 자세히 설명드릴게요!"
        />
      </Section>

      {/* 4. 타이레놀 vs 이부프로펜 */}
      <Section id="pain" title="4. 타이레놀 vs 이부프로펜, 뭘 먹어야 하나요?">
        <QA q="두통인데 타이레놀이랑 이부프로펜 중에 뭐 먹어야 해요?">
          <p>
            약국에서 정말 하루에도 몇 번씩 받는 질문이에요. 결론부터 말씀드릴게요:
          </p>
          <div className="my-4 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                  <th className="text-left py-2 pr-4">구분</th>
                  <th className="text-left py-2 pr-4">타이레놀 (아세트아미노펜)</th>
                  <th className="text-left py-2">이부프로펜</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                <tr>
                  <td className="py-2 pr-4 font-medium">효과</td>
                  <td className="py-2 pr-4">해열 + 진통</td>
                  <td className="py-2">해열 + 진통 + <strong>소염</strong></td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">공복 복용</td>
                  <td className="py-2 pr-4 text-green-600">가능 (위 부담 적음)</td>
                  <td className="py-2 text-red-600">불가 (위장장애 위험)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">이럴 때 선택</td>
                  <td className="py-2 pr-4">단순 두통, 발열</td>
                  <td className="py-2">붓기+통증, 근육통, 치통, 생리통</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">주의</td>
                  <td className="py-2 pr-4">음주 후 금지 (간 손상)</td>
                  <td className="py-2">위장 약한 사람, 신장 질환자 주의</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <strong>쉽게 외워두세요:</strong> &quot;단순히 아프기만 하면 타이레놀, 부어오르면서 아프면 이부프로펜&quot;
          </p>
          <Tip>
            두 약은 성분이 달라서, 하나를 먹고도 효과가 부족하면 4~6시간 간격을 두고
            다른 하나를 드실 수 있어요. 다만 습관적으로 교차복용하시면 안 돼요.
          </Tip>
        </QA>

        <QA q="몸살감기에는 뭘 먹어야 해요?">
          <p>
            온몸이 쑤시는 몸살감기에는 <strong>이부프로펜</strong>이 더 낫습니다.
            몸살의 원인인 염증 반응을 잡아주거든요.
            타이레놀은 열은 내려주지만, 그 쑤시는 느낌은 잘 안 잡혀요.
          </p>
          <p>
            저도 약국에서 몸살감기로 오신 분들께는 소염진통제를 먼저 권해드려요.
          </p>
        </QA>
      </Section>

      {/* 5. 소화제 */}
      <Section id="digest" title="5. 체했을 때 소화제, 뭐가 좋아요?">
        <QA q="베아제랑 훼스탈이랑 뭐가 달라요?">
          <p>
            한국에서 소화제 1, 2위를 다투는 두 약인데요, 사실 <strong>분해하는 영양소가 달라요</strong>.
            많은 분들이 모르시더라고요.
          </p>
          <div className="my-4 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                  <th className="text-left py-2 pr-4">상황</th>
                  <th className="text-left py-2 pr-4">추천 약</th>
                  <th className="text-left py-2">이유</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                <tr>
                  <td className="py-2 pr-4">고기, 기름진 음식 과식</td>
                  <td className="py-2 pr-4 font-semibold">베아제</td>
                  <td className="py-2">단백질·지방 분해 효소가 강함</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">밥, 면, 빵 등 탄수화물 과식</td>
                  <td className="py-2 pr-4 font-semibold">훼스탈</td>
                  <td className="py-2">탄수화물 분해 + 담즙 성분 포함</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">뭘 먹었는지 잘 모르겠고 그냥 체함</td>
                  <td className="py-2 pr-4 font-semibold">둘 다 OK</td>
                  <td className="py-2">복합 소화효소라 어느 것이든 도움</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Tip>
            &quot;삼겹살 먹고 체했으면 베아제, 라면 먹고 체했으면 훼스탈&quot; — 이렇게 외우시면 쉬워요!
          </Tip>
        </QA>

        <QA q="속이 쓰린 건 소화제를 먹어야 하나요?">
          <p>
            아닙니다! 이거 많이 헷갈려하시는데요. 속 쓰림은 <strong>위산 과다</strong>가 원인인 경우가 많아서
            <strong> 제산제</strong>(겔포스, 알마겔 등)를 드셔야 해요. 소화제와는 완전히 다른 약이에요.
          </p>
          <p>
            소화제 = 음식을 빨리 소화시켜주는 약<br />
            제산제 = 위산을 중화시켜 속 쓰림을 잡아주는 약
          </p>
          <Warning>
            속 쓰림이 2주 이상 지속되면 단순 위산 문제가 아닐 수 있어요. 꼭 병원에서 확인하세요.
          </Warning>
        </QA>
      </Section>

      {/* 6. 상처 연고 완전 정복 */}
      <Section id="wound" title="6. 상처 연고 완전 정복 — 후시딘, 마데카솔, 바스포">
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          &quot;약사님, 후시딘 주세요&quot; — 약국에서 가장 많이 듣는 말 중 하나예요.
          그런데 상처 연고가 다 같은 게 아니거든요. 상황에 따라 맞는 연고가 달라요.
          제가 확실하게 정리해드릴게요.
        </p>

        <QA q="후시딘이랑 마데카솔이랑 뭐가 달라요? 그냥 아무거나 발라도 되나요?">
          <p>
            절대 같은 약이 아니에요! 이 차이를 아시는 게 정말 중요합니다.
          </p>
          <div className="my-4 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                  <th className="text-left py-2 pr-4">구분</th>
                  <th className="text-left py-2 pr-4">후시딘</th>
                  <th className="text-left py-2 pr-4">마데카솔</th>
                  <th className="text-left py-2">바스포</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                <tr>
                  <td className="py-2 pr-4 font-medium">역할</td>
                  <td className="py-2 pr-4">항생제 (감염 방지)</td>
                  <td className="py-2 pr-4">재생 촉진 (새살)</td>
                  <td className="py-2">복합 항생제 (강력 감염 방지)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">주성분</td>
                  <td className="py-2 pr-4">퓨시드산나트륨</td>
                  <td className="py-2 pr-4">센텔라아시아티카</td>
                  <td className="py-2">바시트라신+네오마이신+폴리믹신B</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">언제 쓰나요</td>
                  <td className="py-2 pr-4">상처 초기 (감염 우려)</td>
                  <td className="py-2 pr-4">상처 후기 (아물 때)</td>
                  <td className="py-2">상처 초기~중기 (넓은 범위)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">항생제 수</td>
                  <td className="py-2 pr-4">1종</td>
                  <td className="py-2 pr-4">없음</td>
                  <td className="py-2 font-semibold text-blue-600">3종 복합</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <strong>쉽게 정리하면:</strong> 상처 나자마자 → 후시딘이나 바스포 (감염 막기) →
            딱지 생기기 시작하면 → 마데카솔 (흉터 없이 새살 돋기)
          </p>
        </QA>

        <QA q="바스포 연고는 뭐가 좋은 건가요?">
          <p>
            제가 약국에서 상비약으로 특히 추천드리는 연고가 바로 <strong>바스포</strong>예요.
            이유가 있습니다.
          </p>
          <ul className="list-disc list-inside space-y-2 my-3">
            <li>
              <strong>항생제 3종이 복합</strong>되어 있어요 — 바시트라신, 네오마이신, 폴리믹신B.
              후시딘이 항생제 1종인 데 비해, 바스포는 3종이 서로 다른 세균을 잡아주기 때문에
              <strong>더 넓은 범위의 세균 감염을 막아줍니다.</strong>
            </li>
            <li>
              <strong>용도가 넓어요</strong> — 베인 상처, 긁힌 상처, 화상, 농가진, 모낭염, 종기,
              심지어 여드름을 짜고 난 후 감염 방지에도 쓸 수 있어요.
            </li>
            <li>
              <strong>가성비가 좋아요</strong> — 후시딘보다 가격이 저렴하면서도
              커버하는 세균 범위는 더 넓어요.
            </li>
          </ul>
          <Tip>
            상비약으로 연고를 하나만 둔다면? 저는 바스포를 추천드려요.
            상처 초기 감염 방지에 후시딘보다 넓은 항균 범위를 가지고 있어서,
            집에 하나 두면 다양한 상황에 대응할 수 있어요.
          </Tip>
          <Warning>
            항생제 연고는 <strong>7일 이상 연속 사용하지 마세요.</strong> 내성이 생길 수 있어요.
            7일이 지나도 상처가 낫지 않으면 병원에 가셔야 합니다.
          </Warning>
        </QA>

        <QA q="상처 치료 순서가 어떻게 되나요?">
          <p>
            약국에서 제가 항상 안내드리는 순서예요. 이것만 기억하세요:
          </p>
          <ol className="list-decimal list-inside space-y-2 my-4">
            <li><strong>지혈</strong> — 깨끗한 거즈로 상처 부위를 꾹 눌러주세요.</li>
            <li><strong>세척</strong> — 흐르는 깨끗한 물로 상처를 충분히 씻어주세요.</li>
            <li><strong>소독</strong> — 소독약(애니클렌액 등)으로 소독합니다.</li>
            <li><strong>연고</strong> — 바스포나 후시딘을 얇게 발라주세요.</li>
            <li><strong>밴드</strong> — 일반 밴드나 거즈로 덮어주세요.</li>
          </ol>
          <Warning>
            습윤밴드(듀오덤, 메디폼 등)를 쓸 때는 <strong>연고를 바르면 안 돼요!</strong>
            연고의 미끄러운 성분이 밴드의 접착력과 습윤 환경 조성을 방해합니다.
            습윤밴드는 세척 후 바로 붙이세요.
          </Warning>
        </QA>
      </Section>

      {/* 7. 상처 밴드 비교 */}
      <Section id="bandage" title="7. 상처 밴드 제대로 고르기 — 듀오덤, 메디폼, 일반밴드">
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          &quot;약사님, 듀오덤이랑 메디폼이랑 뭐가 달라요?&quot; — 이 질문도 정말 많이 받아요.
          밴드마다 용도가 다르니까, 잘 골라 써야 효과가 있어요.
        </p>

        <QA q="습윤밴드가 일반 밴드보다 무조건 좋은 건가요?">
          <p>
            아닙니다! 상황에 따라 달라요. 제가 표로 정리해드릴게요.
          </p>
          <div className="my-4 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                  <th className="text-left py-2 pr-3">종류</th>
                  <th className="text-left py-2 pr-3">대표 제품</th>
                  <th className="text-left py-2 pr-3">특징</th>
                  <th className="text-left py-2">이럴 때 쓰세요</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                <tr>
                  <td className="py-2 pr-3 font-medium">하이드로콜로이드<br />(얇은 타입)</td>
                  <td className="py-2 pr-3">듀오덤 엑스트라씬,<br />이지덤 씬</td>
                  <td className="py-2 pr-3">얇고 접착력 우수.<br />흡수력은 낮음</td>
                  <td className="py-2">진물이 적은 얕은 상처,<br />관절 등 움직이는 부위</td>
                </tr>
                <tr>
                  <td className="py-2 pr-3 font-medium">폴리우레탄 폼<br />(두꺼운 타입)</td>
                  <td className="py-2 pr-3">메디폼</td>
                  <td className="py-2 pr-3">두껍고 흡수력 우수.<br />쿠션감 있음</td>
                  <td className="py-2">진물이 많은 상처,<br />넓은 찰과상</td>
                </tr>
                <tr>
                  <td className="py-2 pr-3 font-medium">일반 드레싱밴드</td>
                  <td className="py-2 pr-3">대일밴드,<br />밴드에이드</td>
                  <td className="py-2 pr-3">간편하고 저렴.<br />습윤 효과는 없음</td>
                  <td className="py-2">아주 작은 상처,<br />연고 바른 위에 덮을 때</td>
                </tr>
              </tbody>
            </table>
          </div>
        </QA>

        <QA q="듀오덤은 어떻게 붙여야 해요? 진물이 나오는데 떼야 하나요?">
          <p>
            습윤밴드 처음 쓰시는 분들이 가장 당황하는 부분이에요. 순서대로 알려드릴게요.
          </p>
          <ol className="list-decimal list-inside space-y-2 my-4">
            <li><strong>세척만</strong> — 흐르는 물로 상처를 씻고, <strong>소독약과 연고는 바르지 마세요.</strong></li>
            <li><strong>크게 자르기</strong> — 상처보다 <strong>1~2cm 크게</strong> 잘라서 붙이세요. 여유가 있어야 밀착이 잘 돼요.</li>
            <li><strong>30초 꾹</strong> — 붙인 후 <strong>손으로 30초간</strong> 눌러주세요. 체온으로 밀착력이 높아져요.</li>
            <li><strong>2~3일 유지</strong> — 진물이 나와서 하얗게 부풀어 오르는 건 정상이에요! 이 진물 속에 상처를 치유하는 물질이 들어있어요. <strong>바로 떼지 마세요.</strong></li>
            <li><strong>교체 시점</strong> — 진물이 밴드 밖으로 새어나오거나, 밴드가 떨어지려 할 때 새것으로 교체하세요.</li>
          </ol>
          <Tip>
            습윤밴드의 핵심은 &quot;상처를 촉촉하게 유지해서 자연치유를 돕는 것&quot;이에요.
            딱지를 만들지 않고 치유되니까 흉터도 훨씬 적게 남아요.
          </Tip>
        </QA>

        <QA q="습윤밴드 위에 후시딘 바르면 안 되나요?">
          <p>
            <strong>안 됩니다!</strong> 이거 의외로 많이들 실수하세요.
            습윤밴드는 연고 없이 상처의 자연 치유를 돕는 원리예요.
            연고를 바르면 미끄러워서 밴드가 안 붙고, 습윤 환경 조성도 방해돼요.
          </p>
          <p>
            <strong>연고를 쓸 거면 일반 밴드, 습윤밴드를 쓸 거면 연고 없이.</strong>
            이렇게 기억하세요!
          </p>
        </QA>
      </Section>

      {/* 8. 화상 */}
      <Section id="burn" title="8. 화상 입었을 때 응급처치와 연고">
        <QA q="라면 끓이다가 뜨거운 물에 데었어요! 뭘 발라야 해요?">
          <p>
            가정에서 화상, 정말 자주 일어나요. 전체 화상 사고의 65%가 집에서 발생한다는 통계도 있어요.
            당황하지 마시고, 이 순서대로 해주세요:
          </p>
          <ol className="list-decimal list-inside space-y-2 my-4">
            <li>
              <strong>즉시 찬물에 15~20분</strong> — 이게 가장 중요해요! 수돗물 틀어서 흐르는 찬물에
              화상 부위를 충분히 식혀주세요. 얼음은 안 돼요. 피부 손상이 더 심해져요.
            </li>
            <li>
              <strong>물집이 생겼다면 절대 터뜨리지 마세요</strong> — 물집은 천연 보호막이에요.
              터뜨리면 감염 위험이 올라가요.
            </li>
            <li>
              <strong>연고 선택</strong> — 가벼운 화상(1도, 피부가 빨갛기만 한 경우)에는
              화상 전용 연고인 <strong>실바덴크림</strong>이나 <strong>아즈렌S크림</strong>을 발라주세요.
            </li>
            <li>
              <strong>드레싱</strong> — 깨끗한 거즈로 가볍게 덮어주세요.
            </li>
          </ol>
          <Warning>
            치약, 된장, 감자 등을 바르라는 민간요법이 있는데, <strong>절대 하지 마세요.</strong>
            감염 위험을 높이고 의료진의 진단도 방해합니다.
          </Warning>
        </QA>

        <QA q="화상 연고로 뭘 구비해두면 좋을까요?">
          <DrugCard
            name="아즈렌S크림"
            ingredient="구아이아줄렌 (항염 성분)"
            use="가벼운 화상(1도), 피부 진정"
            when="피부가 빨갛게 된 가벼운 화상에 바르세요. 어린이에게도 사용 가능해요."
            caution="물집이 잡힌 2도 이상 화상은 연고 바르지 말고 병원에 가세요."
          />
          <Tip>
            화상 연고는 상비약으로 아즈렌S크림 하나만 있으면 충분해요.
            물집 이상의 화상은 반드시 병원에서 치료받으셔야 합니다.
          </Tip>
        </QA>
      </Section>

      {/* 9. 여드름 */}
      <Section id="acne" title="9. 여드름 났을 때, 약국에서 살 수 있는 연고">
        <QA q="여드름이 심한데 약국에서 바로 살 수 있는 약이 있나요?">
          <p>
            네, 있어요! 처방전 없이 약국에서 바로 구매할 수 있는 여드름 연고들이 있어요.
            다만, 여드름 종류에 따라 맞는 약이 다르니까 잘 보셔야 해요.
          </p>
          <div className="my-4 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                  <th className="text-left py-2 pr-3">여드름 상태</th>
                  <th className="text-left py-2 pr-3">추천 연고</th>
                  <th className="text-left py-2">어떻게 쓰나요</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                <tr>
                  <td className="py-2 pr-3">좁쌀여드름, 블랙헤드<br />(비염증성)</td>
                  <td className="py-2 pr-3 font-semibold">클리어틴 외용액<br />(살리실산)</td>
                  <td className="py-2">각질을 녹여서 모공을 열어줘요.<br />면봉에 묻혀 해당 부위에만 바르세요.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-3">붉고 볼록한 여드름<br />(염증성)</td>
                  <td className="py-2 pr-3 font-semibold">애크논크림<br />(이부프로펜피코놀)</td>
                  <td className="py-2">염증을 가라앉혀줘요.<br />세안 후 해당 부위에 얇게 바르세요.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-3">곪은 여드름 짜고 난 후<br />(감염 우려)</td>
                  <td className="py-2 pr-3 font-semibold">바스포 연고<br />(복합 항생제)</td>
                  <td className="py-2">감염 방지용으로 짜고 난 자리에<br />얇게 발라주세요. 3~5일만!</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Tip>
            여드름을 짜고 난 후에는 바스포 연고를 얇게 발라주시면
            3종 항생제가 감염을 막아줘요. 저도 약국에서 이걸 많이 권해드려요.
          </Tip>
          <Warning>
            여드름 연고는 바르자마자 효과가 나지 않아요. <strong>최소 4~6주</strong>는 꾸준히 발라야
            효과를 볼 수 있어요. 그래도 안 나으면 피부과 진료를 받으세요.
          </Warning>
        </QA>
      </Section>

      {/* 10. 구내염 */}
      <Section id="mouth" title="10. 입병(구내염) 빨리 낫는 법">
        <QA q="입안이 헐었는데 빨리 낫는 약 뭐가 있어요? 알보칠? 오라메디?">
          <p>
            구내염 약도 약국에서 정말 많이 찾으시는데요, 크게 세 가지가 있어요.
            각각 특징이 뚜렷해서 취향(?)에 따라 고르시면 돼요.
          </p>
          <div className="my-4 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                  <th className="text-left py-2 pr-3">약 이름</th>
                  <th className="text-left py-2 pr-3">타입</th>
                  <th className="text-left py-2 pr-3">바를 때 통증</th>
                  <th className="text-left py-2">특징</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                <tr>
                  <td className="py-2 pr-3 font-semibold">알보칠</td>
                  <td className="py-2 pr-3">액체 (소독)</td>
                  <td className="py-2 pr-3 text-red-600 font-bold">매우 아픔</td>
                  <td className="py-2">효과는 빠름. &quot;1주일 고통을 10분에 압축&quot;이라는 후기도 있어요.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-3 font-semibold">오라메디</td>
                  <td className="py-2 pr-3">연고 (스테로이드)</td>
                  <td className="py-2 pr-3 text-green-600">거의 안 아픔</td>
                  <td className="py-2">바르면 막을 형성해서 보호. 통증 적고 사용감 편해요.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-3 font-semibold">페리덱스</td>
                  <td className="py-2 pr-3">연고 (스테로이드)</td>
                  <td className="py-2 pr-3 text-green-600">거의 안 아픔</td>
                  <td className="py-2">오라메디와 비슷. 접착력이 좋아서 잘 안 벗겨져요.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Tip>
            제가 약국에서 드리는 조언은 이래요: <strong>&quot;빨리 낫고 싶고 아픈 거 참을 수 있다 → 알보칠,
            아픈 건 싫다 → 오라메디나 페리덱스&quot;</strong>.
            알보칠을 쓸 때는 면봉에 묻혀서 환부에만 정확하게 찍어주세요. 치아에 닿으면 치아 표면이 손상될 수 있어요!
          </Tip>
          <p>
            참고로 구내염이 2주 이상 안 낫거나 자주 재발하면, 비타민 B 부족이나 다른 원인일 수 있으니
            병원 진료를 한번 받아보세요.
          </p>
        </QA>
      </Section>

      {/* 11. 아이 있는 집 */}
      <Section id="kids" title="11. 아이가 있는 집은 뭘 더 준비해야 하나요?">
        <QA q="아이용 약은 어른 약을 쪼개서 먹이면 안 되나요?">
          <p>
            <strong>절대 안 됩니다.</strong> 이 질문도 약국에서 종종 받는데요,
            어린이용 약은 체중에 맞게 용량이 정밀하게 조절되어 있고,
            시럽 형태라 삼키기도 편해요.
            어른 약을 임의로 쪼개면 용량이 정확하지 않아서 위험합니다.
          </p>
        </QA>

        <p className="mb-4 font-semibold text-lg">아이가 있는 집 추가 필수약</p>
        <DrugCard
          name="어린이 해열제 시럽 (내린다시럽 등)"
          ingredient="아세트아미노펜"
          use="소아 발열, 통증"
          when="아이가 열이 38.5도 이상일 때. 체중에 맞는 용량을 반드시 지켜주세요."
          caution="해열제를 먹여도 열이 안 내리면 4~6시간 후 이부프로펜 시럽(부루펜)으로 교차 투여 가능해요."
        />
        <DrugCard
          name="어린이 이부프로펜 시럽 (부루펜시럽)"
          ingredient="이부프로펜"
          use="소아 발열, 염증성 통증"
          when="아세트아미노펜으로 열이 안 내릴 때 교차 투여. 6개월 이상부터 사용 가능해요."
          caution="반드시 식후 복용. 탈수 상태에서는 신장에 부담이 될 수 있으니 수분 보충을 먼저 해주세요."
        />
        <DrugCard
          name="어린이 항알레르기약 (세노바액 등)"
          ingredient="세티리진 시럽"
          use="소아 알레르기, 두드러기"
          when="아이가 갑자기 두드러기가 나거나, 벌레에 물려 많이 부었을 때."
        />

        <Tip>
          <strong>디지털 체온계는 반드시 구비하세요.</strong>
          &quot;손으로 만져보니 뜨거운 것 같아요&quot;라고 하시는 분들이 많은데,
          정확한 체온을 알아야 해열제 투여 시점을 판단할 수 있어요.
          체온계 하나가 불필요한 응급실행을 막아줍니다.
        </Tip>
      </Section>

      {/* 12. 밤에 약국 문 닫았을 때 */}
      <Section id="night" title="12. 밤에 약국 문 닫았을 때 어떡하죠?">
        <QA q="새벽 2시에 아이 열이 나는데 약이 없어요. 어디서 약을 구해요?">
          <p>
            이 상황, 약사인 저도 마음이 아파요. 방법은 3가지가 있습니다:
          </p>
          <ol className="list-decimal list-inside space-y-3 my-4">
            <li>
              <strong>편의점 상비약</strong> — 가장 빠른 방법이에요. 현재 편의점에서 살 수 있는 약은
              해열진통제(타이레놀, 어린이 부루펜 시럽 포함), 감기약(판콜에이), 소화제(훼스탈, 베아제),
              파스 등 <strong>11종</strong>입니다. 2026년 하반기에 20종으로 확대될 예정이에요.
            </li>
            <li>
              <strong>24시간 약국 / 당번약국</strong> — 네이버에 &quot;야간 약국&quot; 또는
              &quot;당번약국&quot;을 검색하면 가까운 곳을 찾을 수 있어요.
            </li>
            <li>
              <strong>응급실</strong> — 38.5도 이상 고열이 안 떨어지거나, 경련이 있거나,
              의식이 흐릿하면 주저하지 말고 응급실로 가세요.
            </li>
          </ol>
          <Warning>
            이런 상황을 안 겪으려면, 이 정보책에서 소개한 기본약들을 미리 구비해두는 게 최선이에요.
            만약의 보험이라고 생각하세요.
          </Warning>
        </QA>

        <QA q="편의점 약이랑 약국 약이랑 다른 건가요?">
          <p>
            같은 브랜드라도 <strong>편의점용은 소포장이고 알 수가 적을 수 있어요.</strong>
            성분 자체는 동일하니 걱정 마세요. 다만 약국보다 가격 대비 약간 비쌀 수 있어요.
            그래도 급할 때는 정말 고마운 존재입니다!
          </p>
        </QA>
      </Section>

      {/* 13. 보관과 유효기간 */}
      <Section id="storage" title="13. 상비약 보관과 유효기간 관리">
        <QA q="상비약 유효기간이 지나면 어떻게 되나요?">
          <p>
            유효기간이 지난 약은 <strong>효과가 떨어지거나, 변질되어 오히려 해로울 수 있어요.</strong>
            &quot;조금 지났으니 괜찮겠지&quot;는 위험한 생각이에요.
          </p>
          <p>특히 시럽류, 연고류는 개봉 후 유효기간이 따로 있어요:</p>
          <ul className="list-disc list-inside space-y-1 my-3">
            <li>시럽제: 개봉 후 <strong>1개월</strong> 이내</li>
            <li>연고류: 개봉 후 <strong>6개월</strong> 이내</li>
            <li>알약/캡슐: 포장 상태 유효기간까지 (보통 2~3년)</li>
          </ul>
          <Tip>
            6개월에 한 번 상비약 박스를 열어서 유효기간 체크하세요.
            스마트폰 캘린더에 &quot;상비약 점검&quot; 반복 알림을 걸어두면 편해요.
          </Tip>
        </QA>

        <QA q="약을 어디에 보관해야 하나요?">
          <p>
            <strong>화장실은 최악의 장소예요!</strong> 습하고 온도 변화가 큰 화장실 캐비닛에
            약을 넣어두는 분들이 많은데, 약이 변질되기 딱 좋은 환경이거든요.
          </p>
          <p>
            <strong>좋은 보관 장소:</strong> 직사광선이 닿지 않는 서늘하고 건조한 곳.
            거실 서랍장이나 현관 수납함 등이 좋아요.
            아이가 있는 집은 아이 손이 닿지 않는 높은 곳에 두세요.
          </p>
        </QA>
      </Section>

      {/* 출처 */}
      <Section id="sources" title="14. 출처 및 참고자료">
        <div className="text-sm space-y-2 text-gray-500 dark:text-gray-400">
          <p className="font-semibold text-gray-700 dark:text-gray-300 mb-3">
            이 정보책은 다음 자료를 기반으로 작성되고, 약사가 직접 교차 검증했습니다:
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li>하이닥 전문가칼럼 — &quot;처방전 없이도 살 수 있는 필수 상비약 8가지&quot;</li>
            <li>약사공론 — &quot;상비약 체크리스트&quot;, &quot;상처엔 어떤 연고 써야하지?&quot;</li>
            <li>우먼센스 — &quot;전문 약사가 추천하는 가정용 필수 상비약&quot;, &quot;상처 치료 연고, 똑같지 않다&quot;</li>
            <li>한국경제 — &quot;소화제 1,2위 다투는 훼스탈·베아제 차이&quot;, &quot;입안 염증 치료약 비교&quot;</li>
            <li>닥터나우 — &quot;후시딘, 에스로반, 마데카솔, 비판텐 차이&quot;, &quot;베아제와 훼스탈 차이점&quot;</li>
            <li>얼루어코리아 — &quot;후시딘 vs 마데카솔 상처 대처법&quot;, &quot;여드름 약국 연고 5&quot;</li>
            <li>서울경제 — &quot;메디폼, 듀오덤, 이지덤 습윤밴드 비교&quot;</li>
            <li>메디셜 블로그 — &quot;타이레놀 vs 이부프로펜 비교&quot;</li>
            <li>정책브리핑 — &quot;편의점 상비약 제도&quot;, &quot;야간 약국 찾는 법&quot;</li>
            <li>하이닥 — &quot;외과 전문의가 말하는 화상 대처법&quot;</li>
            <li>데일리팜 — &quot;화상 관리부터 연고 선택까지 A to Z&quot;</li>
            <li>GQ코리아, 하퍼스바자 — &quot;증상별 약국 여드름 연고 가이드&quot;</li>
            <li>에펨코리아 — 약사 유튜버 상비약 리뷰 (커뮤니티 반응)</li>
            <li>Michigan State University Pharmacy, Texas A&M Health, Cleveland Clinic</li>
          </ul>
        </div>

        <div className="mt-8 p-4 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 text-sm">
          <p className="font-semibold mb-2">안내 말씀</p>
          <p className="text-gray-600 dark:text-gray-400">
            이 정보책은 유원소망약국 김약사가 일반적인 건강 정보 제공 목적으로 작성했습니다.
            개인의 건강 상태, 기저질환, 복용 중인 약에 따라 상비약의 선택과 용량이 달라질 수 있으므로,
            구체적인 사항은 가까운 약국이나 병원에서 상담하시기 바랍니다.
            궁금하신 점은 유원소망약국으로 편하게 문의해주세요!
          </p>
        </div>
      </Section>

      {/* Footer */}
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
        <p className="text-sm text-gray-400">
          이 정보책은 계속 업데이트됩니다.<br />
          커뮤니티에서 새로운 질문이나 유용한 정보가 나오면 김약사가 검증 후 반영합니다.
        </p>
        <p className="text-sm text-gray-500 mt-2 font-medium">
          유원소망약국 김약사 드림
        </p>
        <Link
          href="/"
          className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline text-sm"
        >
          &larr; 다른 정보책 보기
        </Link>
      </div>
    </main>
  );
}
