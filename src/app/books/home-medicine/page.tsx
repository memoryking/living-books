import Link from "next/link";

export const metadata = {
  title: "가정에서 꼭 필요한 상비약과 사용법 | 살아있는 정보책",
  description: "밤에 약국 문 닫았을 때 당황하지 않는 법. 사람들이 진짜 궁금해하는 상비약 질문과 약사가 검증한 답변.",
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
      <span className="font-semibold">TIP</span> {children}
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
        <div className="sm:col-span-2"><span className="text-gray-500">이럴 때 드세요:</span> {when}</div>
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
  { id: "why", label: "왜 상비약이 필요한가요?" },
  { id: "must-have", label: "꼭 있어야 할 상비약 7종" },
  { id: "pain", label: "타이레놀 vs 이부프로펜, 뭘 먹어야 하나요?" },
  { id: "digest", label: "체했을 때 소화제, 뭐가 좋아요?" },
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
              밤에 약국 문 닫았을 때 당황하지 않는 법
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <span>v1</span>
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

      {/* 1. 왜 상비약이 필요한가요? */}
      <Section id="why" title="1. 왜 상비약이 필요한가요?">
        <QA q="집에 약을 굳이 둬야 하나요? 약국 가면 되는 거 아닌가요?">
          <p>
            한밤중에 갑자기 열이 펄펄 나는데 약국은 다 닫았고, 편의점 약은 한정적이고...
            이런 경험 한 번쯤 있으시죠? 실제로 <strong>편의점 상비약을 사는 이유의 68.8%가
            &quot;약국이 문 닫는 심야·공휴일에 급해서&quot;</strong>라는 조사 결과가 있습니다.
          </p>
          <p>
            특히 어린 자녀가 있는 집은 더 절실합니다. 아이들은 꼭 새벽에 열이 오르거든요.
            미리 해열제 하나만 있었어도 응급실까지 안 갔을 텐데... 하는 후회, 정말 많습니다.
          </p>
          <Tip>
            상비약은 &quot;만약을 위한 보험&quot;입니다. 1~2만원이면 기본 세트를 갖출 수 있고,
            이 작은 투자가 한밤중의 큰 불안을 막아줍니다.
          </Tip>
        </QA>
      </Section>

      {/* 2. 꼭 있어야 할 상비약 7종 */}
      <Section id="must-have" title="2. 꼭 있어야 할 상비약 7종">
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          약사들이 공통으로 추천하고, 커뮤니티에서도 &quot;이건 진짜 있어야 한다&quot;고 입을 모으는 7가지입니다.
        </p>

        <DrugCard
          name="1. 해열진통제 (타이레놀 등)"
          ingredient="아세트아미노펜"
          use="두통, 발열, 생리통, 치통"
          when="열이 나거나, 머리가 아프거나, 생리통이 올 때. 가장 먼저 찾게 되는 약입니다."
          caution="하루 4,000mg(8알) 초과 금지. 술 마신 날은 복용하지 마세요. 간에 부담을 줄 수 있습니다."
        />
        <DrugCard
          name="2. 소염진통제 (이지엔6, 부루펜 등)"
          ingredient="이부프로펜"
          use="근육통, 관절통, 치통, 염좌 등 염증성 통증"
          when="타이레놀과 달리 '염증'까지 잡아야 할 때. 부딪혀서 부은 곳, 삔 발목, 근육통에 더 효과적."
          caution="반드시 식후에 복용. 공복에 먹으면 위장장애가 올 수 있습니다."
        />
        <DrugCard
          name="3. 소화제 (베아제 / 훼스탈)"
          ingredient="복합 소화효소"
          use="소화불량, 과식, 복부 팽만감"
          when="과식했거나 체했을 때. 고기 많이 먹었으면 베아제, 밥·면 위주면 훼스탈이 더 맞습니다."
        />
        <DrugCard
          name="4. 지사제 (정로환, 스멕타 등)"
          ingredient="베르베린 / 아크리놀"
          use="급성 설사, 배탈"
          when="갑자기 배가 아프면서 설사가 날 때. 여행 중 특히 필수."
          caution="2일 이상 지속되거나 혈변이 있으면 반드시 병원에 가세요."
        />
        <DrugCard
          name="5. 종합감기약 (판콜에이, 콜대원 등)"
          ingredient="복합 성분 (해열+항히스타민+진해거담)"
          use="콧물, 기침, 발열, 몸살 등 감기 증상 전반"
          when="감기 초기 증상이 올 때. 단, 증상이 1주일 이상 가면 병원 가세요."
        />
        <DrugCard
          name="6. 항히스타민제 (지르텍 등)"
          ingredient="세티리진"
          use="알레르기 비염, 두드러기, 벌레 물린 데"
          when="갑자기 두드러기가 나거나, 벌레에 물려서 부어오르거나, 알레르기 반응이 왔을 때."
          caution="졸음이 올 수 있으므로 운전 전 복용 주의."
        />
        <DrugCard
          name="7. 상처 치료 세트"
          ingredient="-"
          use="소독 + 연고 + 밴드"
          when="베이거나 긁혔을 때. 소독약(애니클렌액 등) → 항생제 연고(후시딘/바스포) → 밴드(하이드로콜로이드 추천) 순서로."
          caution="하이드로콜로이드 밴드 위에는 연고를 바르지 마세요. 밀착이 안 됩니다."
        />
      </Section>

      {/* 3. 타이레놀 vs 이부프로펜 */}
      <Section id="pain" title='3. 타이레놀 vs 이부프로펜, 뭘 먹어야 하나요?'>
        <QA q="두통인데 타이레놀이랑 이부프로펜 중에 뭐 먹어야 해요?">
          <p>
            이거 진짜 많이 물어보는 질문입니다. 결론부터 말하면:
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
            <strong>쉽게 외우기:</strong> &quot;단순히 아프기만 하면 타이레놀, 부어오르면서 아프면 이부프로펜&quot;
          </p>
          <Tip>
            두 약은 성분이 다르기 때문에, 하나를 먹고도 효과가 없으면 4-6시간 간격을 두고
            다른 하나를 먹을 수 있습니다. 단, 습관적으로 교차복용하지는 마세요.
          </Tip>
        </QA>

        <QA q="몸살감기에는 뭘 먹어야 해요?">
          <p>
            온몸이 쑤시는 몸살감기에는 <strong>이부프로펜</strong>이 더 낫습니다.
            몸살의 원인인 염증 반응을 잡아주거든요.
            타이레놀은 열은 내려주지만 몸살 쑤시는 건 잘 안 잡힙니다.
          </p>
          <p>
            약사들도 &quot;몸살감기로 오시면 소염진통제를 먼저 추천한다&quot;고 말합니다.
          </p>
        </QA>
      </Section>

      {/* 4. 소화제 */}
      <Section id="digest" title="4. 체했을 때 소화제, 뭐가 좋아요?">
        <QA q="베아제랑 훼스탈이랑 뭐가 달라요?">
          <p>
            한국에서 소화제 1, 2위를 다투는 두 약인데, 사실 <strong>분해하는 영양소가 다릅니다</strong>.
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
            &quot;삼겹살 먹고 체했으면 베아제, 라면 먹고 체했으면 훼스탈&quot; — 이렇게 외우면 쉽습니다.
          </Tip>
        </QA>

        <QA q="속이 쓰린 건 소화제를 먹어야 하나요?">
          <p>
            아닙니다! 속 쓰림은 <strong>위산 과다</strong>가 원인인 경우가 많아서
            <strong>제산제</strong>(겔포스, 알마겔 등)를 먹어야 합니다. 소화제와는 다른 약이에요.
          </p>
          <p>
            소화제 = 음식을 빨리 소화시켜주는 약<br />
            제산제 = 위산을 중화시켜 속 쓰림을 잡아주는 약
          </p>
          <Warning>
            속 쓰림이 2주 이상 지속되면 단순 위산이 아닐 수 있습니다. 꼭 병원에서 확인하세요.
          </Warning>
        </QA>
      </Section>

      {/* 5. 아이 있는 집 */}
      <Section id="kids" title="5. 아이가 있는 집은 뭘 더 준비해야 하나요?">
        <QA q="아이용 약은 어른 약을 쪼개서 먹이면 안 되나요?">
          <p>
            <strong>절대 안 됩니다.</strong> 어린이용 약은 체중에 맞게 용량이 조절되어 있고,
            시럽 형태라 목에 걸릴 위험도 없습니다. 어른 약을 임의로 쪼개면
            용량 조절이 정확하지 않아 위험할 수 있습니다.
          </p>
        </QA>

        <p className="mb-4 font-semibold text-lg">아이가 있는 집 추가 필수약</p>
        <DrugCard
          name="어린이 해열제 (시럽)"
          ingredient="아세트아미노펜 (내린다시럽 등)"
          use="소아 발열, 통증"
          when="아이가 열이 38.5도 이상일 때. 체중에 맞는 용량을 지켜주세요."
          caution="해열제를 먹여도 열이 안 내리면 4-6시간 후 이부프로펜 시럽(부루펜)으로 교차 투여 가능."
        />
        <DrugCard
          name="어린이 이부프로펜 시럽 (부루펜시럽)"
          ingredient="이부프로펜"
          use="소아 발열, 염증성 통증"
          when="아세트아미노펜으로 열이 안 내릴 때 교차 투여. 6개월 이상부터 사용 가능."
          caution="반드시 식후 복용. 탈수 상태에서는 신장에 부담을 줄 수 있으니 수분 보충 먼저."
        />
        <DrugCard
          name="어린이 항알레르기약 (세노바액 등)"
          ingredient="세티리진 시럽"
          use="소아 알레르기, 두드러기"
          when="아이가 갑자기 두드러기가 나거나, 벌레에 물려 많이 부었을 때."
        />

        <Tip>
          <strong>체온계는 필수입니다.</strong> 디지털 체온계 하나 꼭 구비해두세요.
          아이가 열나는 것 같을 때 &quot;손으로 만져보니 뜨거운데...&quot;가 아니라,
          정확한 체온을 알아야 해열제 투여 시점을 판단할 수 있습니다.
        </Tip>
      </Section>

      {/* 6. 밤에 약국 문 닫았을 때 */}
      <Section id="night" title="6. 밤에 약국 문 닫았을 때 어떡하죠?">
        <QA q="새벽 2시에 아이 열이 나는데 약이 없어요. 어디서 약을 구해요?">
          <p>
            이 상황, 정말 많은 분들이 겪습니다. 방법은 3가지가 있습니다:
          </p>
          <ol className="list-decimal list-inside space-y-3 my-4">
            <li>
              <strong>편의점 상비약</strong> — 가장 빠른 방법. 현재 편의점에서 살 수 있는 약은
              해열진통제(타이레놀, 어린이 부루펜 시럽 포함), 감기약(판콜에이), 소화제(훼스탈, 베아제),
              파스 등 <strong>11종</strong>입니다. 2026년 하반기에 20종으로 확대될 예정입니다.
            </li>
            <li>
              <strong>24시간 약국 / 당번약국</strong> — 네이버에 &quot;야간 약국&quot; 또는
              &quot;당번약국&quot;을 검색하면 가까운 곳을 찾을 수 있습니다.
              정부 정책브리핑 사이트에서도 확인 가능합니다.
            </li>
            <li>
              <strong>응급실</strong> — 38.5도 이상 고열이 떨어지지 않거나, 경련이 있거나,
              의식이 흐릿하면 주저하지 말고 응급실로 가세요.
            </li>
          </ol>
          <Warning>
            이런 상황을 겪지 않으려면, 이 글에서 소개한 기본 7종을 미리 구비해두는 것이 최선입니다.
            만약의 보험이에요.
          </Warning>
        </QA>

        <QA q="편의점 약이랑 약국 약이랑 다른 건가요?">
          <p>
            같은 브랜드라도 <strong>편의점용은 소포장이고 용량이 적을 수 있습니다.</strong>
            성분 자체는 동일하지만, 약국에서 파는 것보다 한 박스에 들어있는 알 수가 적고,
            가격 대비 약간 비쌀 수 있어요. 그래도 급할 때는 정말 고마운 존재입니다.
          </p>
        </QA>
      </Section>

      {/* 7. 보관과 유효기간 */}
      <Section id="storage" title="7. 상비약 보관과 유효기간 관리">
        <QA q="상비약 유효기간이 지나면 어떻게 되나요?">
          <p>
            유효기간이 지난 약은 <strong>효과가 떨어지거나, 변질되어 오히려 해로울 수 있습니다.</strong>
            &quot;조금 지났으니 괜찮겠지&quot;는 위험한 생각입니다.
          </p>
          <p>특히 시럽류, 연고류는 개봉 후 유효기간이 따로 있습니다:</p>
          <ul className="list-disc list-inside space-y-1 my-3">
            <li>시럽제: 개봉 후 <strong>1개월</strong> 이내 사용</li>
            <li>연고류: 개봉 후 <strong>6개월</strong> 이내 사용</li>
            <li>알약/캡슐: 포장 상태 유효기간까지 (보통 2~3년)</li>
          </ul>
          <Tip>
            6개월에 한 번 상비약 박스를 열어서 유효기간 체크하는 습관을 들이세요.
            스마트폰 캘린더에 &quot;상비약 점검&quot; 반복 알림을 걸어두면 편합니다.
          </Tip>
        </QA>

        <QA q="약을 어디에 보관해야 하나요?">
          <p>
            <strong>화장실은 최악의 장소</strong>입니다. 습하고 온도 변화가 큰 화장실 캐비닛에
            약을 넣어두는 분들이 많은데, 약이 변질되기 가장 좋은 환경이에요.
          </p>
          <p>
            <strong>적정 보관 장소:</strong> 직사광선이 닿지 않는 서늘하고 건조한 곳.
            거실 서랍장이나 현관 신발장 위 수납함 등이 좋습니다.
            아이 손이 닿지 않는 높은 곳에 두세요.
          </p>
        </QA>
      </Section>

      {/* 출처 */}
      <Section id="sources" title="8. 출처 및 참고자료">
        <div className="text-sm space-y-2 text-gray-500 dark:text-gray-400">
          <p className="font-semibold text-gray-700 dark:text-gray-300 mb-3">
            이 정보책은 다음 자료를 기반으로 작성되고 교차 검증되었습니다:
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li>하이닥 전문가칼럼 — &quot;처방전 없이도 살 수 있는 필수 상비약 8가지&quot;</li>
            <li>약사공론 — &quot;상비약 체크리스트 준비했다면, 한 박스 완성 뚝딱&quot;</li>
            <li>우먼센스 — &quot;전문 약사(권도영)가 추천하는 가정용 필수 상비약&quot;</li>
            <li>한국경제 — &quot;소화제 1,2위 다투는 훼스탈·베아제 차이&quot;</li>
            <li>닥터나우 — &quot;베아제와 훼스탈의 차이점&quot;</li>
            <li>메디셜 블로그 — &quot;타이레놀 vs 이부프로펜 비교&quot;</li>
            <li>정책브리핑 — &quot;약국 문 닫아 밤새 끙끙, 편의점 상비약 제도&quot;</li>
            <li>약사공론 — &quot;편의점약 511억원 유통, 해열진통소염제 80%&quot;</li>
            <li>에펨코리아 — 약사 유튜버 상비약 훈수두기 콘텐츠 (커뮤니티 반응)</li>
            <li>Michigan State University Pharmacy — &quot;Essential Medicine Cabinet&quot;</li>
            <li>Texas A&M Health — &quot;12 Medicine Cabinet Essentials&quot;</li>
            <li>Cleveland Clinic — &quot;What Should Be in a First-Aid Kit&quot;</li>
          </ul>
        </div>

        <div className="mt-8 p-4 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 text-sm">
          <p className="font-semibold mb-2">면책 고지</p>
          <p className="text-gray-600 dark:text-gray-400">
            이 정보책의 내용은 일반적인 건강 정보 제공 목적이며, 의학적 진단이나 처방을 대체하지 않습니다.
            개인의 건강 상태, 기저질환, 복용 중인 약에 따라 상비약의 선택과 용량이 달라질 수 있으므로,
            구체적인 사항은 반드시 의사 또는 약사와 상담하시기 바랍니다.
          </p>
        </div>
      </Section>

      {/* Footer */}
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
        <p className="text-sm text-gray-400">
          이 정보책은 계속 업데이트됩니다.<br />
          커뮤니티에서 새로운 질문이나 유용한 정보가 나오면 반영합니다.
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
