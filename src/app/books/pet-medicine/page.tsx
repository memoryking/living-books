import Link from "next/link";

export const metadata = {
  title: "김약사가 알려주는 동물의약품 | 살아있는 정보책",
  description: "유원소망약국 김약사가 알려드리는 반려동물 의약품 가이드. 동물약국 이용법부터 절대 먹이면 안 되는 사람약까지.",
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
      <span className="font-semibold">절대 주의</span> {children}
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
        <div><span className="text-gray-500">성분/타입:</span> {ingredient}</div>
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
  { id: "pharmacy", label: "동물약국, 이렇게 이용하세요" },
  { id: "otc", label: "처방전 없이 살 수 있는 동물약" },
  { id: "heartworm", label: "심장사상충 예방약 완전 정복" },
  { id: "flea", label: "벼룩·진드기 구제약 비교" },
  { id: "internal", label: "내부 기생충약 (구충제)" },
  { id: "eye-ear", label: "눈물자국·귀 세정제, 뭐가 좋아요?" },
  { id: "skin", label: "피부병·상처에 쓸 수 있는 약" },
  { id: "supplement", label: "반려동물 영양제, 꼭 필요한가요?" },
  { id: "danger", label: "절대 먹이면 안 되는 사람약" },
  { id: "firstaid", label: "반려동물 응급 상비 키트" },
  { id: "sources", label: "출처 및 참고자료" },
];

export default function PetMedicinePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-10">
        <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 mb-4 inline-block">
          &larr; 전체 목록
        </Link>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-5xl">🐾</span>
          <div>
            <h1 className="text-3xl font-bold">김약사가 알려주는 동물의약품</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              우리 아이 약, 약국에서도 살 수 있어요
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

      {/* 1. 인사 */}
      <Section id="intro" title="1. 안녕하세요, 김약사입니다">
        <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800">
          <p className="leading-relaxed">
            안녕하세요, <strong>유원소망약국</strong>의 김약사입니다.
            요즘 약국에 반려동물 약 관련 문의가 정말 많아졌어요.
          </p>
          <p className="mt-3 leading-relaxed">
            &quot;약사님, 강아지 심장사상충약 여기서 살 수 있어요?&quot;<br />
            &quot;사람 타이레놀 쪼개서 먹여도 되나요?&quot;<br />
            &quot;동물병원 가기 전에 약국에서 뭐 살 수 있어요?&quot;
          </p>
          <p className="mt-3 leading-relaxed">
            동물의약품은 사람약과 다른 점이 많고, 잘못 쓰면 정말 위험할 수 있어요.
            특히 <strong>사람약을 함부로 먹이면 생명이 위험</strong>해질 수 있습니다.
          </p>
          <p className="mt-3 leading-relaxed font-semibold">
            보호자분들이 가장 궁금해하는 질문들을 모아서,
            약사 입장에서 정확하고 안전한 정보를 알려드릴게요.
            우리 아이들 건강, 함께 지켜요!
          </p>
        </div>
      </Section>

      {/* 2. 동물약국 이용법 */}
      <Section id="pharmacy" title="2. 동물약국, 이렇게 이용하세요">
        <QA q="동물약국이 뭐예요? 일반 약국이랑 다른 건가요?">
          <p>
            의외로 모르시는 분들이 많은데요, <strong>약사면허가 있는 약국이 보건소에 동물약국 개설 신청</strong>을 하면
            동물용 의약품을 함께 판매할 수 있어요. 간판에 &apos;동물약국&apos;이라고 표시되어 있답니다.
          </p>
          <p>
            동물약국에는 동물약 전용 진열 공간과 조제 공간, 냉장고가 별도로 갖춰져 있어요.
            일반 약국과 같은 건물에 있지만, 동물약 전용 구역이 따로 있는 거예요.
          </p>
          <Tip>
            가까운 동물약국을 찾으려면 인터넷에 <strong>&quot;OO동 동물약국&quot;</strong>으로 검색하세요.
            방문 전에 전화해서 원하는 제품이 있는지 꼭 확인하시는 게 좋아요.
            모든 동물약국이 모든 제품을 다 갖추고 있지는 않거든요.
          </Tip>
        </QA>

        <QA q="동물약국에서 처방전 없이 살 수 있는 약이 있나요?">
          <p>
            네, 꽤 많아요! 약사법 제85조 7항에 따라 동물약국에서 <strong>처방전 없이</strong> 살 수 있는 약이 있어요.
            크게 나누면 이렇습니다:
          </p>
          <div className="my-4 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                  <th className="text-left py-2 pr-4">처방전 없이 OK</th>
                  <th className="text-left py-2">처방전 필요</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                <tr>
                  <td className="py-2 pr-4">심장사상충 경구약·바르는약</td>
                  <td className="py-2">주사용 항생제</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">벼룩·진드기 구제약</td>
                  <td className="py-2">주사용 백신 (일부 제외)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">경구용·외용 항생제</td>
                  <td className="py-2">마취제</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">소화제, 지사제, 멀미약</td>
                  <td className="py-2">호르몬제</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">비타민, 영양제</td>
                  <td className="py-2">항진균제·항바이러스제 (주사)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">소독약, 피부 상처 치료제</td>
                  <td className="py-2" />
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            단, 경구용·외용 항생제를 살 때는 판매 기록(구매자 인적사항, 전화번호 등)을 남겨야 해요.
            이건 항생제 내성 관리를 위한 제도예요.
          </p>
        </QA>
      </Section>

      {/* 3. 처방전 없이 살 수 있는 동물약 */}
      <Section id="otc" title="3. 처방전 없이 살 수 있는 동물약">
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          동물약국에서 보호자가 직접 구매할 수 있는 대표적인 약들을 정리해드릴게요.
          동물병원보다 가격이 저렴한 경우도 있어서, 알아두시면 좋아요.
        </p>

        <DrugCard
          name="심장사상충 예방약"
          ingredient="이버맥틴, 밀베마이신 등 (경구형/스팟온)"
          use="심장사상충 감염 예방"
          when="매달 1회, 4계절 내내 투여. 아래에서 제품별로 자세히 비교해드릴게요."
          caution="투여 전 심장사상충 감염 여부 검사 필수. 감염 상태에서 예방약 투여 시 쇼크 위험!"
        />
        <DrugCard
          name="벼룩·진드기 구제약"
          ingredient="피프로닐, 아폭솔라너 등 (바르는/먹는 타입)"
          use="벼룩, 진드기, 이 등 외부 기생충 구제"
          when="봄~가을 야외 활동 시 필수. 매달 또는 3개월 간격."
        />
        <DrugCard
          name="내부 구충제"
          ingredient="펜벤다졸, 피란텔 등"
          use="회충, 편충, 십이지장충 등 내부 기생충 구제"
          when="새끼 때 2~3회, 이후 3~6개월마다 정기 투여."
        />
        <DrugCard
          name="소화제·지사제"
          ingredient="동물용 복합 성분"
          use="소화불량, 설사"
          when="가벼운 소화 불량이나 설사 시. 2일 이상 지속되면 병원으로!"
        />
        <DrugCard
          name="소독약·상처 치료제"
          ingredient="동물용 소독·외용 항생제"
          use="가벼운 상처 소독 및 감염 예방"
          when="작은 상처, 긁힌 곳 소독할 때."
          caution="동물이 핥을 수 있으므로 넥카라(엘리자베스 칼라) 착용 권장."
        />
        <DrugCard
          name="비타민·영양제"
          ingredient="유산균, 오메가3, 글루코사민 등"
          use="장 건강, 피모 개선, 관절 건강"
          when="평소 건강 유지 및 노령 동물의 관절 관리에."
          caution="사람용 영양제에 자일리톨·포도 성분이 있을 수 있으니 반드시 동물 전용 제품을 쓰세요!"
        />
      </Section>

      {/* 4. 심장사상충 예방약 */}
      <Section id="heartworm" title="4. 심장사상충 예방약 완전 정복">
        <QA q="심장사상충이 뭐예요? 꼭 예방해야 하나요?">
          <p>
            심장사상충은 모기에 물려서 감염되는 기생충이에요.
            감염되면 <strong>심장과 폐동맥에 기생하면서 심부전을 일으키고, 치료하지 않으면 사망</strong>할 수 있어요.
            치료비도 수십~수백만원이 들고, 치료 과정 자체도 위험해요.
          </p>
          <p>
            그래서 <strong>예방이 절대적으로 중요</strong>합니다. 매달 예방약 한 알이면 되거든요.
            치료가 아니라 예방인 거예요. 비용도 월 1~2만원이면 충분해요.
          </p>
          <Warning>
            예방약을 처음 시작하기 전에 <strong>반드시 동물병원에서 감염 여부 검사</strong>를 받으세요.
            이미 감염된 상태에서 예방약을 먹이면 심장사상충 유충이 한꺼번에 죽으면서
            혈관을 막아 <strong>쇼크로 사망</strong>할 수 있어요. 정말 중요합니다!
          </Warning>
        </QA>

        <QA q="심장사상충약 종류가 많은데, 뭘 골라야 해요?">
          <p>
            약국에서 가장 많이 물어보시는 질문이에요. 제가 표로 깔끔하게 정리해드릴게요.
          </p>
          <div className="my-4 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                  <th className="text-left py-2 pr-3">제품명</th>
                  <th className="text-left py-2 pr-3">타입</th>
                  <th className="text-left py-2 pr-3">예방 범위</th>
                  <th className="text-left py-2">특징</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                <tr>
                  <td className="py-2 pr-3 font-semibold">하트가드</td>
                  <td className="py-2 pr-3">먹는 약 (츄어블)</td>
                  <td className="py-2 pr-3">심장사상충 + 내부기생충 일부</td>
                  <td className="py-2">오래된 제품, 안전성 검증. 소고기맛이라 잘 먹어요. 외부기생충은 별도 필요.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-3 font-semibold">넥스가드 스펙트라</td>
                  <td className="py-2 pr-3">먹는 약 (츄어블)</td>
                  <td className="py-2 pr-3">심장사상충 + 내부·외부기생충 전부</td>
                  <td className="py-2">범위가 가장 넓어요. 이것 하나면 진드기·벼룩까지 커버. 강아지 전용.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-3 font-semibold">레볼루션</td>
                  <td className="py-2 pr-3">바르는 약 (스팟온)</td>
                  <td className="py-2 pr-3">심장사상충 + 벼룩 + 귀진드기</td>
                  <td className="py-2">고양이도 사용 가능! 약 먹이기 힘든 아이에게 좋아요.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-3 font-semibold">애드보킷</td>
                  <td className="py-2 pr-3">바르는 약 (스팟온)</td>
                  <td className="py-2 pr-3">심장사상충 + 내부기생충 + 벼룩</td>
                  <td className="py-2">강아지·고양이 모두 가능. 진드기 예방은 미포함.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Tip>
            <strong>강아지</strong>에게 올인원을 원하시면 → <strong>넥스가드 스펙트라</strong> (먹는 약 하나로 끝)<br />
            <strong>고양이</strong>에게는 → <strong>레볼루션</strong> 또는 <strong>애드보킷</strong> (바르는 타입)<br />
            약 먹이기 어려운 아이에게는 → 바르는 타입(스팟온)이 편해요.
          </Tip>
        </QA>

        <QA q="심장사상충약은 여름에만 먹이면 되나요?">
          <p>
            <strong>아니요, 4계절 내내 매달 먹여주셔야 해요.</strong>
            모기가 활동하지 않는 겨울에도 심장사상충 유충이 체내에서 발육할 수 있거든요.
            한 달이라도 빼먹으면 예방 효과에 구멍이 생겨요.
          </p>
          <p>
            &quot;겨울에는 모기가 없으니까 괜찮겠지&quot; 하고 빼먹다가 감염되는 경우가 생각보다 많아요.
            꼭 12개월 연속으로 투여해주세요.
          </p>
        </QA>
      </Section>

      {/* 5. 벼룩·진드기 구제약 */}
      <Section id="flea" title="5. 벼룩·진드기 구제약 비교">
        <QA q="산책 다녀오면 진드기가 걱정돼요. 어떤 약이 좋아요?">
          <p>
            봄~가을에 풀밭 산책을 많이 하신다면 외부 기생충 예방은 필수예요.
            크게 먹는 타입과 바르는 타입이 있어요.
          </p>
          <div className="my-4 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                  <th className="text-left py-2 pr-3">제품</th>
                  <th className="text-left py-2 pr-3">타입</th>
                  <th className="text-left py-2 pr-3">지속기간</th>
                  <th className="text-left py-2">대상</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                <tr>
                  <td className="py-2 pr-3 font-semibold">넥스가드</td>
                  <td className="py-2 pr-3">먹는 약</td>
                  <td className="py-2 pr-3">1개월</td>
                  <td className="py-2">강아지 전용</td>
                </tr>
                <tr>
                  <td className="py-2 pr-3 font-semibold">브라벡토</td>
                  <td className="py-2 pr-3">먹는 약</td>
                  <td className="py-2 pr-3">3개월</td>
                  <td className="py-2">강아지 전용</td>
                </tr>
                <tr>
                  <td className="py-2 pr-3 font-semibold">프론트라인 플러스</td>
                  <td className="py-2 pr-3">바르는 약</td>
                  <td className="py-2 pr-3">1개월</td>
                  <td className="py-2">강아지·고양이</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Warning>
            <strong>강아지용 제품을 고양이에게 절대 사용하지 마세요!</strong>
            특히 퍼메트린 성분이 들어간 강아지용 진드기약을 고양이에게 쓰면
            경련, 마비 등 치명적인 중독 증상이 나타날 수 있어요.
            고양이에게는 반드시 고양이 전용 제품을 써야 합니다.
          </Warning>
        </QA>
      </Section>

      {/* 6. 내부 기생충약 */}
      <Section id="internal" title="6. 내부 기생충약 (구충제)">
        <QA q="강아지 구충제는 꼭 먹여야 하나요? 얼마나 자주요?">
          <p>
            네, 필수예요! 내부 기생충(회충, 편충 등)은 눈에 보이지 않아서 방심하기 쉬운데,
            감염되면 설사, 구토, 영양 불량, 심하면 장폐색까지 올 수 있어요.
          </p>
          <ul className="list-disc list-inside space-y-2 my-3">
            <li><strong>새끼 강아지:</strong> 생후 2주부터 2~4주 간격으로 3회 이상</li>
            <li><strong>성견:</strong> 3~6개월마다 정기적으로</li>
            <li><strong>고양이:</strong> 실내 고양이도 3~6개월마다 (사람 신발에 묻어 들어올 수 있어요)</li>
          </ul>
          <Tip>
            동물약국에서 구충제를 구매할 때, <strong>보호자 본인의 구충제도 함께 구매</strong>할 수 있어요.
            반려동물과 같이 사는 분들은 보호자 구충도 함께 하시면 더 안전해요.
            대한동물약국협회에서도 이 점을 안내하고 있답니다.
          </Tip>
        </QA>
      </Section>

      {/* 7. 눈물자국·귀 세정제 */}
      <Section id="eye-ear" title="7. 눈물자국·귀 세정제, 뭐가 좋아요?">
        <QA q="강아지 눈물 자국이 심한데, 약국에서 살 수 있는 게 있나요?">
          <p>
            눈물자국은 단순 미용 문제가 아니라 <strong>&apos;유루증&apos;이라는 질환</strong>일 수 있어요.
            원인이 다양하거든요 — 눈 주변 털 자극, 알레르기, 비루관 막힘 등.
          </p>
          <p>
            동물약국에서 구매 가능한 눈물자국 치료제(타일로신 성분 경구약)가 있어요.
            다만 먼저 동물병원에서 원인을 파악하신 후에 약을 쓰시는 게 안전해요.
          </p>
          <p>
            일반 세정용으로는 펫 전용 눈물자국 물티슈나 세정제를 쓰셔도 돼요.
            이건 온라인이나 펫숍에서도 쉽게 구하실 수 있어요.
          </p>
        </QA>

        <QA q="강아지 귀에서 냄새가 나요. 세정제만 쓰면 될까요?">
          <p>
            강아지 귀는 L자 형태라서 습기가 차기 쉽고, 세균·곰팡이가 번식하기 좋은 구조예요.
            냄새가 난다면 이미 <strong>외이도염</strong>이 시작되었을 수 있어요.
          </p>
          <p>
            <strong>가벼운 냄새 + 귀지만 있다면:</strong> 귀 세정제로 주 1~2회 청소해주세요.<br />
            <strong>심한 냄새 + 빨갛게 부어있다면:</strong> 병원에서 진료 먼저 받으세요. 세정제만으로는 해결이 안 돼요.
          </p>
          <Tip>
            귀 세정제 사용법: 세정제를 귀 안에 넣고 → 귀 밑부분을 <strong>30초간 부드럽게 주물러주세요</strong> →
            강아지가 머리를 흔들면서 귀지가 나와요 → 면봉은 절대 쓰지 마세요, 솜이나 거즈로만 닦아주세요.
          </Tip>
        </QA>
      </Section>

      {/* 8. 피부병·상처 */}
      <Section id="skin" title="8. 피부병·상처에 쓸 수 있는 약">
        <QA q="강아지가 자꾸 긁어요. 피부에 뭘 발라줘도 되나요?">
          <p>
            반려동물 피부 문제는 원인이 정말 다양해요 — 알레르기, 곰팡이, 세균, 기생충 등.
            원인에 따라 약이 완전히 달라지기 때문에, <strong>심하다면 병원 진료가 우선</strong>이에요.
          </p>
          <p>
            다만 가벼운 상처나 긁힌 곳에는 동물약국에서 구매할 수 있는
            동물용 외용 항생제 연고를 쓸 수 있어요.
          </p>
          <Warning>
            연고를 바른 후 <strong>반드시 넥카라(엘리자베스 칼라)를 씌워주세요.</strong>
            동물들은 약을 바른 곳을 핥으려고 해요. 핥으면 약 효과도 없어지고,
            약 성분을 먹게 되어 위장장애가 생길 수 있어요.
          </Warning>
        </QA>

        <QA q="사람 후시딘을 강아지 상처에 발라도 되나요?">
          <p>
            이 질문도 약국에서 정말 많이 받아요. 결론부터 말하면,
            <strong>사람용 외용 연고를 반려동물에게 쓰는 것은 권장하지 않아요.</strong>
          </p>
          <p>
            사람용 연고에는 동물에게 맞지 않는 부형제나 첨가물이 포함될 수 있고,
            무엇보다 동물이 핥아먹을 수 있어요. 동물용으로 나온 제품을 쓰시는 게 안전합니다.
          </p>
          <Tip>
            급한 상황에서 상처 소독은 깨끗한 물이나 식염수로 먼저 세척하고,
            거즈로 가볍게 덮은 후 최대한 빨리 동물병원이나 동물약국을 방문하세요.
          </Tip>
        </QA>
      </Section>

      {/* 9. 영양제 */}
      <Section id="supplement" title="9. 반려동물 영양제, 꼭 필요한가요?">
        <QA q="강아지 영양제 종류가 너무 많은데, 뭘 먹여야 해요?">
          <p>
            솔직히 건강한 성견이 좋은 사료를 먹고 있다면 영양제가 필수는 아니에요.
            하지만 <strong>특정 상황</strong>에서는 분명히 도움이 돼요.
          </p>
          <div className="my-4 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                  <th className="text-left py-2 pr-3">상황</th>
                  <th className="text-left py-2 pr-3">추천 영양제</th>
                  <th className="text-left py-2">효과</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                <tr>
                  <td className="py-2 pr-3">설사가 잦거나 장이 약한 아이</td>
                  <td className="py-2 pr-3 font-semibold">유산균 (프로바이오틱스)</td>
                  <td className="py-2">장내 균형 개선, 변 상태 호전</td>
                </tr>
                <tr>
                  <td className="py-2 pr-3">털이 푸석하거나 피부가 건조한 아이</td>
                  <td className="py-2 pr-3 font-semibold">오메가3 (EPA/DHA)</td>
                  <td className="py-2">피모 윤기 개선, 피부 염증 완화</td>
                </tr>
                <tr>
                  <td className="py-2 pr-3">7세 이상 노령견, 슬개골 탈구</td>
                  <td className="py-2 pr-3 font-semibold">글루코사민 + MSM</td>
                  <td className="py-2">관절 연골 보호, 통증 완화</td>
                </tr>
                <tr>
                  <td className="py-2 pr-3">면역력이 약한 아이</td>
                  <td className="py-2 pr-3 font-semibold">종합비타민</td>
                  <td className="py-2">전반적 건강 유지</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Warning>
            <strong>사람용 영양제를 절대 주지 마세요!</strong>
            사람 유산균에 <strong>자일리톨</strong>이 들어있는 경우가 있는데,
            자일리톨은 강아지에게 급성 저혈당과 간부전을 일으켜 <strong>치명적</strong>이에요.
            포도 분말이 포함된 제품도 마찬가지로 위험해요.
            반드시 <strong>반려동물 전용</strong> 영양제를 쓰세요.
          </Warning>
        </QA>
      </Section>

      {/* 10. 절대 먹이면 안 되는 사람약 */}
      <Section id="danger" title="10. 절대 먹이면 안 되는 사람약">
        <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950 border-2 border-red-300 dark:border-red-700 mb-6">
          <p className="font-bold text-red-700 dark:text-red-300 text-lg mb-3">
            이것만은 꼭 기억해주세요
          </p>
          <p className="text-red-600 dark:text-red-400">
            사람약을 임의로 반려동물에게 먹이는 것은 <strong>동물학대</strong>에 해당할 수 있으며,
            심각한 부작용으로 <strong>생명이 위험</strong>해질 수 있습니다.
            인간과 동물은 약물 대사 과정이 완전히 다릅니다.
          </p>
        </div>

        <QA q="아이가 아파 보이는데, 일단 타이레놀이라도 먹여도 될까요?">
          <p>
            <strong>절대 안 됩니다!</strong> 약국에서 이 질문을 받을 때마다 정말 깜짝 놀라요.
          </p>
          <p>
            특히 <strong>고양이에게 타이레놀(아세트아미노펜)은 치명적</strong>이에요.
            고양이는 아세트아미노펜을 분해하는 효소가 거의 없어서,
            체중 kg당 50mg만 먹어도 독성이 나타나고, <strong>몇 시간 내에 사망</strong>할 수도 있어요.
          </p>
          <p>
            강아지도 마찬가지예요. kg당 150mg 이상에서 간 손상이 시작되고,
            적혈구가 파괴되어 산소 운반이 안 될 수 있어요.
          </p>
        </QA>

        <p className="mb-4 font-semibold text-lg">반려동물에게 위험한 대표적인 사람약</p>
        <div className="my-4 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-red-300 dark:border-red-600">
                <th className="text-left py-2 pr-3">사람약</th>
                <th className="text-left py-2 pr-3">강아지</th>
                <th className="text-left py-2 pr-3">고양이</th>
                <th className="text-left py-2">증상</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              <tr>
                <td className="py-2 pr-3 font-semibold">타이레놀 (아세트아미노펜)</td>
                <td className="py-2 pr-3 text-red-600">위험</td>
                <td className="py-2 pr-3 text-red-600 font-bold">치명적</td>
                <td className="py-2">간 괴사, 적혈구 파괴, 사망</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-semibold">이부프로펜</td>
                <td className="py-2 pr-3 text-red-600">위험</td>
                <td className="py-2 pr-3 text-red-600">매우 위험</td>
                <td className="py-2">위장출혈, 신부전</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-semibold">감기약 (종합)</td>
                <td className="py-2 pr-3 text-red-600">위험</td>
                <td className="py-2 pr-3 text-red-600">위험</td>
                <td className="py-2">신경증상, 췌장염, 간괴사</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-semibold">수면제·항불안제</td>
                <td className="py-2 pr-3 text-red-600">위험</td>
                <td className="py-2 pr-3 text-red-600">위험</td>
                <td className="py-2">과도한 진정, 호흡 억제</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-semibold">변비약 (사람용)</td>
                <td className="py-2 pr-3 text-orange-600">주의</td>
                <td className="py-2 pr-3 text-orange-600">주의</td>
                <td className="py-2">심한 설사, 탈수</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Tip>
          반려동물이 아파 보이면, 사람약을 먹이지 말고 <strong>동물병원에 전화</strong>부터 해주세요.
          24시간 응급 동물병원도 있어요. 약을 먹이는 것보다 전화 한 통이 훨씬 안전해요.
        </Tip>
      </Section>

      {/* 11. 응급 상비 키트 */}
      <Section id="firstaid" title="11. 반려동물 응급 상비 키트">
        <QA q="집에 반려동물용으로 뭘 준비해두면 좋을까요?">
          <p>
            사람 상비약처럼, 반려동물용 응급 키트도 있으면 정말 유용해요.
            제가 추천드리는 기본 키트를 정리해드릴게요.
          </p>
          <div className="my-4 space-y-3">
            <p className="font-semibold">기본 응급 키트 구성</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>거즈 패드 + 접착 테이프</strong> — 상처 응급 처치, 지혈</li>
              <li><strong>식염수</strong> — 상처 세척, 눈 세척</li>
              <li><strong>디지털 체온계</strong> — 정상 체온: 강아지 38~39.2도, 고양이 38~39도</li>
              <li><strong>경구용 주사기 (주사바늘 없는)</strong> — 약이나 물 급여 시</li>
              <li><strong>넥카라 (엘리자베스 칼라)</strong> — 상처 핥기 방지</li>
              <li><strong>핀셋/틱 리무버</strong> — 진드기 제거용</li>
              <li><strong>일회용 장갑</strong> — 위생 처치용</li>
              <li><strong>수건</strong> — 보정, 체온 유지, 지혈 압박용</li>
            </ul>
          </div>
          <Tip>
            이 키트에 <strong>가까운 24시간 동물병원 전화번호</strong>를 적어서 함께 보관하세요.
            응급 상황에서 병원 검색할 시간이 없을 수 있어요.
            미리 적어두면 당황하지 않아요.
          </Tip>
        </QA>

        <QA q="반려동물이 뭔가를 먹었어요! 토하게 해야 하나요?">
          <p>
            <strong>함부로 토하게 하지 마세요.</strong> 삼킨 물질에 따라 대응이 달라요.
          </p>
          <ul className="list-disc list-inside space-y-2 my-3">
            <li><strong>초콜릿, 자일리톨 등 먹었을 때:</strong> 즉시 동물병원에 전화. 수의사 지시 없이 구토 유도하지 마세요.</li>
            <li><strong>날카로운 물건(뼈 조각 등):</strong> 절대 토하게 하면 안 돼요. 식도가 다칠 수 있어요.</li>
            <li><strong>세제, 화학물질:</strong> 토하게 하면 오히려 식도 화상. 바로 병원으로!</li>
          </ul>
          <Warning>
            가장 중요한 건 <strong>뭘 얼마나 먹었는지 파악</strong>하는 거예요.
            남은 포장지나 제품을 가지고 병원에 가시면 수의사가 훨씬 빠르게 대응할 수 있어요.
          </Warning>
        </QA>
      </Section>

      {/* 출처 */}
      <Section id="sources" title="12. 출처 및 참고자료">
        <div className="text-sm space-y-2 text-gray-500 dark:text-gray-400">
          <p className="font-semibold text-gray-700 dark:text-gray-300 mb-3">
            이 정보책은 다음 자료를 기반으로 작성되고, 약사가 직접 교차 검증했습니다:
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li>현대불교 — &quot;동네약국 사용설명서: 동물 의약품&quot;</li>
            <li>데일리벳 — &quot;동물약국 처방제 현황&quot;, &quot;반려동물에게 해로운 10가지 사람 약&quot;</li>
            <li>대한민국 정책브리핑 — &quot;동물용의약품의 약국 판매 제도 개선 추진&quot;</li>
            <li>대한동물약국협회 — &quot;반려동물과 보호자의 구충제&quot;, &quot;동물용 안약 이용 방법&quot;</li>
            <li>비마이펫 라이프 — &quot;고양이 타이레놀 중독의 위험성&quot;, &quot;강아지 영양제 추천 15가지&quot;</li>
            <li>오마이뉴스 — &quot;사람이 먹는 약, 강아지에게 먹인다고?&quot;</li>
            <li>매일신문 — &quot;사람 해열제 먹이면 안돼요&quot;</li>
            <li>헬스경향 — &quot;사람 진통제, 반려동물에게는 치명적인 독&quot;</li>
            <li>한국소비자원 — &quot;반려견 예방약 판매가격 실태조사&quot;</li>
            <li>Texas A&M Veterinary Medicine — &quot;Pet First Aid Kit&quot;</li>
            <li>Michigan State University CVM — &quot;Pet First Aid&quot;</li>
          </ul>
        </div>

        <div className="mt-8 p-4 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 text-sm">
          <p className="font-semibold mb-2">안내 말씀</p>
          <p className="text-gray-600 dark:text-gray-400">
            이 정보책은 유원소망약국 김약사가 일반적인 반려동물 건강 정보 제공 목적으로 작성했습니다.
            동물의약품의 선택과 용량은 반려동물의 종, 체중, 건강 상태에 따라 달라지므로,
            구체적인 사항은 수의사 또는 동물약국 약사와 상담하시기 바랍니다.
            반려동물이 아플 때는 사람약을 먹이지 마시고, 반드시 동물병원에 먼저 연락해주세요.
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
