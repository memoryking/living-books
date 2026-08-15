import GuideBook from "@/components/GuideBook";
import type { TopItem, ContentSection, UpdateLog } from "@/components/GuideBook";

export const metadata = {
  title: "정리와 청소의 기술 — 본문 | 살아있는 정보책",
  description: "서랍 하나부터 시작하는 살아있는 정리 가이드 전문. 5분이면 충분합니다.",
};

const topItems: TopItem[] = [
  {
    number: 1, title: "의지력이 아니라 시스템이다",
    oneLiner: "정리를 못 하는 건 게으른 게 아니라 시스템이 없는 것이다.",
    description: "의지력은 소모 자원입니다. 매일 수십 개의 결정을 내리고 퇴근하면 정리할 에너지가 남아있지 않습니다. 의지력 대신 환경과 루틴이라는 시스템을 만드세요.",
    situation: "정리해야 하는 건 아는데 소파에서 일어나지 못할 때",
    action: "5분 타이머를 맞추세요. 5분만 하고 그만둬도 됩니다. 시작이 전부입니다.",
    mission: "오늘 5분 타이머 1번을 실행하세요. 무엇이든.",
  },
  {
    number: 2, title: "서랍 하나부터 시작하라",
    oneLiner: "3cm x 3cm도 괜찮다. 작은 성공이 다음 성공을 부른다.",
    description: "집 전체를 보면 압도감에 freeze됩니다. 서랍 하나만 보세요. 서랍 하나도 크면 서랍 속 한 구석만. 작은 완료가 도파민을 줍니다.",
    situation: "집이 너무 어질러져서 어디서부터 시작할지 모를 때",
    action: "지금 가장 가까운 서랍 하나를 열고, 확실한 쓰레기 3개만 버리세요.",
    mission: "서랍 하나를 열어서 필요 없는 것 3개를 버리세요.",
  },
  {
    number: 3, title: "'내려놓지 말고 치워라'",
    oneLiner: "물건을 '임시로' 내려놓지 말고, 바로 자리에 치워라.",
    description: "임시로 놓은 것이 영구적 클러터가 됩니다. 모든 물건에 자리를 정하고, 쓴 후에는 바로 자리에 돌려놓으세요. 자리가 없으면 자리를 만들거나 물건을 줄이세요.",
    situation: "택배를 뜯고 빈 박스를 '일단' 바닥에 놓으려 할 때",
    action: "바로 접어서 재활용으로. '일단'은 금지어입니다.",
    mission: "오늘 하루 '일단 여기 놓자'를 한 번도 하지 않는 도전을 해보세요.",
  },
  {
    number: 4, title: "5분이면 충분하다",
    oneLiner: "5분 타이머를 누르면 압도감이 사라진다. 불완벽한 5분 > 완벽한 0분.",
    description: "심리학의 자이가르닉 효과: 시작한 일은 끝내고 싶어집니다. 5분만 시작하면 대부분 더 하게 됩니다. 안 하더라도 5분만으로 충분합니다.",
    situation: "정리할 시간이 없다고 느낄 때",
    action: "핸드폰 타이머 5분. 타이머가 울리면 멈춰도 됩니다.",
    mission: "지금 5분 타이머를 맞추고, 눈에 보이는 쓰레기를 치워보세요.",
  },
  {
    number: 5, title: "매일 밤 주방을 리셋하라",
    oneLiner: "깨끗한 아침이 하루를 바꾼다. Reddit 1위 청소 습관.",
    description: "Reddit에서 가장 많은 공감(좋아요 357)을 받은 습관. 식기세척기 매일 밤 돌리기(안 찼어도), 싱크대 비우기, 조리대 닦기. 15분이면 끝.",
    situation: "아침에 어질러진 주방을 보고 하루가 시작부터 무거울 때",
    action: "오늘 밤 자기 전에 주방 조리대를 닦고, 싱크대를 비우세요.",
    mission: "오늘 밤 자기 전 주방 리셋을 1번 실행하세요.",
  },
  {
    number: 6, title: "물건 ≠ 추억",
    oneLiner: "물건을 버리는 건 추억을 버리는 게 아니다. 추억은 마음에 있다.",
    description: "사진으로 찍고 물건은 보내세요. 손실 회피 본능이 버리기를 어렵게 만들지만, 안 쓰는 물건은 집에서 썩어가는 것일 뿐입니다.",
    situation: "오래된 물건을 버리려는데 감정적으로 힘들 때",
    action: "사진을 찍으세요. 추억은 사진에 남깁니다. 물건은 기부/재활용.",
    mission: "감정적으로 붙어있지만 안 쓰는 물건 1개를 사진 찍고 보내세요.",
  },
  {
    number: 7, title: "The Basket으로 돌아다녀라",
    oneLiner: "바구니 하나로 집을 돌며 잘못 놓인 물건 수집 → 제자리에.",
    description: "ADHD 커뮤니티에서 game changer로 불리는 방법. 방마다 돌아다니며 잘못 놓인 물건을 바구니에 담고, 한 번에 제자리로. 산만함을 시스템으로 활용.",
    situation: "이 방 저 방 왔다 갔다 하면서 결국 아무것도 안 될 때",
    action: "바구니 하나를 들고 집을 한 바퀴 돌면서 잘못 놓인 물건을 수집하세요.",
    mission: "바구니(장바구니, 빨래 바구니 등)로 집 한 바퀴 돌기.",
  },
  {
    number: 8, title: "매일 하나, 방별 요일 배정",
    oneLiner: "월=욕실, 화=먼지, 수=진공... 매일 15분, 주말이 자유로워진다.",
    description: "주말 대청소 대신 매일 15분 하나의 영역만 관리. 해당 요일이 아닌 영역은 신경 안 써도 됩니다. 죄책감 없이.",
    situation: "주말마다 대청소하다 지쳐서 결국 안 하게 될 때",
    action: "요일별 영역을 정하세요. 월=욕실, 화=먼지, 수=바닥... 오늘 해당 영역만 15분.",
    mission: "요일별 청소 영역 스케줄을 핸드폰 메모에 적으세요.",
  },
  {
    number: 9, title: "혼자 하지 마라",
    oneLiner: "15분 가족 타이머, 바디 더블링. 정리는 팀 스포츠다.",
    description: "온 가족이 15분 타이머에 맞춰 함께 정리. 아이에게는 사전 알림(1시간 전, 30분 전). 바디 더블링: 누군가와 같이 있으면 집중력이 올라감.",
    situation: "나만 정리하고 가족은 안 도와줘서 화가 날 때",
    action: "오늘 저녁 가족에게 제안: '10분만 같이 정리하자. 타이머 맞출게.'",
    mission: "가족/동거인에게 10분 함께 정리를 제안해보세요.",
  },
  {
    number: 10, title: "정리는 끝나지 않는다 — 그리고 그것은 괜찮다",
    oneLiner: "끝나는 정리는 없다. 과정 자체가 목적이다. 완벽하지 않아도 괜찮다.",
    description: "장보기도, 빨래도, 설거지도 끝나지 않습니다. 정리도 마찬가지. 이것을 받아들이면 자유로워집니다. 완벽한 상태를 목표로 하지 마세요. 과정을 즐기세요.",
    situation: "'또 어질러졌어'라고 좌절할 때",
    action: "자책 대신 5분 타이머. '완벽하지 않아도 괜찮다'를 기억하세요.",
    mission: "이 가이드에서 가장 마음에 든 팁 1가지를 오늘 실행하세요.",
  },
];

const sections: ContentSection[] = [
  {
    id: "preface", title: "서문 — 소매점에서는 완벽했는데 내 집은 왜?",
    body: (<>
      <p>소매점에서 일할 때, 매장은 완벽했습니다. 진열대 정리, 재고 관리, 청소 루틴. 그런데 집에 오면? 정반대.</p>
      <blockquote className="border-l-4 border-violet-400 pl-4 my-4 italic text-gray-600 dark:text-gray-400">&quot;소매점에서 일할 때는 매장을 완벽하게 관리했는데 내 집은 정반대였다. 내 집에 같은 수준의 노력을 들여야 했다.&quot; — Reddit u/question_03</blockquote>
      <p>이 가이드는 Reddit의 r/declutter, r/CleaningTips, r/konmari, r/ADHD 커뮤니티에서 수백 명이 나눈 실제 경험을 기반으로 만들었습니다.</p>
      <p className="text-lg font-semibold mt-4">핵심: 서랍 하나부터 시작하면 됩니다. 5분이면 충분합니다. 완벽하지 않아도 괜찮습니다.</p>
    </>),
  },
  {
    id: "ch1", title: "Ch.1 왜 정리가 안 되는가",
    body: (<>
      <p>정리를 못 하는 것은 <strong>게으른 것이 아닙니다</strong>. 시스템이 없는 것입니다.</p>
      <h3 className="text-lg font-semibold mt-6 mb-3">결정 피로(Decision Fatigue)</h3>
      <p>하루에 수천 개의 결정을 내립니다. 퇴근하면 뇌는 바닥. &quot;이 서류 어디에 둘까?&quot;조차 결정할 에너지가 없어서 &quot;일단 여기&quot; → 클러터.</p>
      <h3 className="text-lg font-semibold mt-6 mb-3">완벽주의의 함정</h3>
      <p>&quot;전부 다 해야 해&quot; → 너무 큼 → 시작 못 함 → 자책 → 더 안 함. 이 악순환이 정리를 막는 진짜 적입니다.</p>
      <blockquote className="border-l-4 border-violet-400 pl-4 my-4 italic text-gray-600 dark:text-gray-400">&quot;ADHD가 있어서 '끝나지 않는다'는 말에 완전히 freeze됐다. 내 뇌는 '그럼 시작 안 해'라고 한다.&quot; — Reddit u/TapEfficient3610</blockquote>
      <p>답변: &quot;장보기도 끝나지 않는다. 그렇다고 장을 안 보진 않잖아.&quot;</p>
      <div className="mt-6 p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
        <p className="font-semibold mb-2">실천 과제</p>
        <p className="text-sm">5분 타이머를 맞추고 눈에 보이는 쓰레기만 치워보세요. 5분만.</p>
      </div>
    </>),
  },
  {
    id: "ch2", title: "Ch.2 서랍 하나부터",
    body: (<>
      <p>집 전체를 보지 마세요. <strong>서랍 하나만 보세요.</strong></p>
      <blockquote className="border-l-4 border-violet-400 pl-4 my-4 italic text-gray-600 dark:text-gray-400">&quot;서랍 하나도 못 하겠으면 서랍 속 3cm x 3cm 구역부터 하라. 뇌가 깨어난다. 진짜 도파민이 들어온다.&quot; — u/question_03</blockquote>
      <h3 className="text-lg font-semibold mt-6 mb-3">3단계 서랍 정리법</h3>
      <ol className="list-decimal list-inside space-y-2 ml-4">
        <li><strong>비우기:</strong> 서랍 내용물을 전부 꺼내기</li>
        <li><strong>분류:</strong> 유지/버리기/다른 곳으로 → 3개 구역</li>
        <li><strong>채우기:</strong> 유지할 것만 깔끔하게 다시 넣기</li>
      </ol>
      <p className="mt-4">같은 서랍을 5번 정리해도 매번 안 쓰는 것이 나옵니다. 정상입니다.</p>
      <div className="mt-6 p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
        <p className="font-semibold mb-2">실천 과제</p>
        <p className="text-sm">가장 가까운 서랍을 열고, 확실한 쓰레기 3개를 버리세요.</p>
      </div>
    </>),
  },
  {
    id: "ch3", title: "Ch.3 '내려놓지 말고 치워라'",
    body: (<>
      <blockquote className="border-l-4 border-violet-400 pl-4 my-4 italic text-gray-600 dark:text-gray-400">&quot;Don't put it down, put it away. 물건을 '임시로' 놓지 마라. 바로 자리에 치워라.&quot; — u/Father_Guido</blockquote>
      <h3 className="text-lg font-semibold mt-6 mb-3">1분 룰</h3>
      <p>1분 이내 걸리는 일이면 <strong>지금 당장 하세요.</strong> 옷 걸기, 컵 싱크대에 넣기, 택배 박스 접기. 미루면 30개가 쌓입니다.</p>
      <h3 className="text-lg font-semibold mt-6 mb-3">각 방 청소 스테이션</h3>
      <p>Reddit 2위 팁(좋아요 208): 각 방에 세정제+걸레+작은 쓰레기통. 청소 도구가 바로 있으면 &quot;나중에&quot;가 &quot;지금&quot;이 됩니다.</p>
      <h3 className="text-lg font-semibold mt-6 mb-3">빈손으로 방 이동 금지</h3>
      <p>한 방에서 다른 방으로 갈 때, 그 방에 있으면 안 되는 물건을 하나 들고 가세요. 하루에 수십 번 이동하면 수십 개가 제자리로.</p>
      <div className="mt-6 p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
        <p className="font-semibold mb-2">실천 과제</p>
        <p className="text-sm">오늘 하루 &quot;일단 여기 놓자&quot;를 한 번도 하지 않는 도전.</p>
      </div>
    </>),
  },
  {
    id: "ch4", title: "Ch.4 5분 타이머의 마법",
    body: (<>
      <p><strong>자이가르닉 효과:</strong> 시작한 일은 끝내고 싶어집니다. 5분만 시작하면 대부분 더 합니다.</p>
      <h3 className="text-lg font-semibold mt-6 mb-3">5분 라운드 시스템</h3>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li><strong>라운드 1 (5분):</strong> 쓰레기봉투 들고 집 한 바퀴 → 보이는 쓰레기 전부</li>
        <li><strong>라운드 2 (5분):</strong> 더러운 그릇/컵 수집 → 싱크대/식기세척기로</li>
        <li><strong>라운드 3 (5분):</strong> 빨랫감 수집 → 세탁기로</li>
      </ul>
      <p className="mt-4">15분에 3라운드. 집이 극적으로 달라집니다. 하지만 <strong>1라운드만 해도 충분</strong>합니다.</p>
      <blockquote className="border-l-4 border-violet-400 pl-4 my-4 italic text-gray-600 dark:text-gray-400">&quot;ADHD라서 '3개만 버려' '2분만 만져' 이렇게 축소하면 시작이 된다. '전부 다' 생각하면 시작을 못 한다.&quot; — u/amyzingamy1993</blockquote>
      <div className="mt-6 p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
        <p className="font-semibold mb-2">실천 과제</p>
        <p className="text-sm">지금 5분 타이머를 맞추고 라운드 1(쓰레기 수집)을 해보세요.</p>
      </div>
    </>),
  },
  {
    id: "ch5", title: "Ch.5 매일 밤 주방 리셋",
    body: (<>
      <p>Reddit r/CleaningTips에서 <strong>가장 많은 공감을 받은 습관(좋아요 357):</strong></p>
      <blockquote className="border-l-4 border-violet-400 pl-4 my-4 italic text-gray-600 dark:text-gray-400">&quot;매일 밤 식기세척기를 돌려라. 안 찼어도. 이것이 다음 날 루틴을 완전히 바꾼다.&quot; — u/happy-pilgrim</blockquote>
      <h3 className="text-lg font-semibold mt-6 mb-3">주방 리셋 루틴 (15분)</h3>
      <ol className="list-decimal list-inside space-y-1 ml-4">
        <li>싱크대의 모든 그릇 → 식기세척기/설거지</li>
        <li>조리대 위 전부 치우기</li>
        <li>조리대 닦기</li>
        <li>식기세척기 돌리기</li>
        <li>(선택) 바닥 쓸기</li>
      </ol>
      <p className="mt-4 font-semibold">아침에 깨끗한 주방으로 시작하면 하루의 톤이 바뀝니다.</p>
      <h3 className="text-lg font-semibold mt-6 mb-3">요리하면서 동시에 설거지</h3>
      <p>음식이 익는 동안 쓴 도구를 씻으세요. 식사 후 설거지 양이 절반으로 줍니다.</p>
      <div className="mt-6 p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
        <p className="font-semibold mb-2">실천 과제</p>
        <p className="text-sm">오늘 밤 자기 전 주방 리셋을 해보세요. 내일 아침의 기분을 느껴보세요.</p>
      </div>
    </>),
  },
  {
    id: "ch6", title: "Ch.6 감정적 짐 내려놓기",
    body: (<>
      <p>버리기 어려운 이유: <strong>손실 회피(Loss Aversion)</strong>. 얻는 기쁨보다 잃는 고통이 2배 강합니다.</p>
      <h3 className="text-lg font-semibold mt-6 mb-3">물건에 붙는 감정 3가지</h3>
      <ol className="list-decimal list-inside space-y-2 ml-4">
        <li><strong>과거:</strong> &quot;이건 추억이야&quot; → 사진으로 남기세요. 추억은 마음에.</li>
        <li><strong>미래:</strong> &quot;언젠가 쓸지도&quot; → 1년 안 쓰면 안 쓸 것.</li>
        <li><strong>죄책감:</strong> &quot;비쌌는데&quot; / &quot;선물인데&quot; → 이미 지불한 비용(매몰비용). 안 쓰면 쓰레기.</li>
      </ol>
      <blockquote className="border-l-4 border-violet-400 pl-4 my-4 italic text-gray-600 dark:text-gray-400">&quot;우리가 소유한 모든 것은 결국 쓰레기다. 집에서 썩어가게 두지 말고 지금 빼라. 제2의 삶을 살 수 있도록.&quot; — u/GreenUnderstanding39</blockquote>
      <blockquote className="border-l-4 border-violet-400 pl-4 my-4 italic text-gray-600 dark:text-gray-400">&quot;다른 사람을 대신 정리해주면 안 된다. 내면에서 결정이 나와야 지속된다.&quot; — u/question_03</blockquote>
      <div className="mt-6 p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
        <p className="font-semibold mb-2">실천 과제</p>
        <p className="text-sm">감정적으로 붙어있지만 1년 이상 안 쓴 물건 1개를 사진 찍고 기부하세요.</p>
      </div>
    </>),
  },
  {
    id: "ch7", title: "Ch.7 The Basket",
    body: (<>
      <p>ADHD 커뮤니티에서 <strong>game changer</strong>로 불리는 방법:</p>
      <blockquote className="border-l-4 border-violet-400 pl-4 my-4 italic text-gray-600 dark:text-gray-400">&quot;The Basket: 한 손에 들 수 있는 바구니로 집을 돌면서 잘못 놓인 물건을 수집. 바구니 채로 돌아다니며 제자리에. 정크 서랍 대신 이동식 바구니.&quot; — u/Puzzleheaded-Mix-467 (좋아요 33)</blockquote>
      <h3 className="text-lg font-semibold mt-6 mb-3">사용법</h3>
      <ol className="list-decimal list-inside space-y-1 ml-4">
        <li>바구니를 들고 가장 어지러운 방에서 시작</li>
        <li>그 방에 있으면 안 되는 물건을 바구니에 담기</li>
        <li>다음 방으로 이동 → 바구니에서 이 방 물건 꺼내 제자리에 + 이 방의 잘못 놓인 물건 바구니에</li>
        <li>모든 방을 돌 때까지 반복</li>
      </ol>
      <h3 className="text-lg font-semibold mt-6 mb-3">에스컬레이션 방지</h3>
      <p>바구니가 가득 차면? 비우고 다시 시작. 또는 내일. <strong>바구니 안에 있으면 바닥에 있는 것보다 100배 낫습니다.</strong></p>
      <div className="mt-6 p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
        <p className="font-semibold mb-2">실천 과제</p>
        <p className="text-sm">바구니(장바구니, 빨래바구니 등) 하나 들고 집 한 바퀴를 돌아보세요.</p>
      </div>
    </>),
  },
  {
    id: "ch8", title: "Ch.8 방별 요일 배정",
    body: (<>
      <p>주말 대청소는 지속 불가능합니다. 대신 <strong>매일 15분, 하나의 영역만.</strong></p>
      <div className="overflow-x-auto mt-4">
        <table className="w-full text-sm border-collapse">
          <thead><tr className="bg-gray-100 dark:bg-gray-800"><th className="p-2 border">요일</th><th className="p-2 border">영역</th><th className="p-2 border">시간</th></tr></thead>
          <tbody>
            <tr><td className="p-2 border">월</td><td className="p-2 border">욕실 (변기, 세면대, 거울)</td><td className="p-2 border">15분</td></tr>
            <tr><td className="p-2 border">화</td><td className="p-2 border">먼지 털기 (가구, 선반)</td><td className="p-2 border">15분</td></tr>
            <tr><td className="p-2 border">수</td><td className="p-2 border">진공청소기 (전체 바닥)</td><td className="p-2 border">15분</td></tr>
            <tr><td className="p-2 border">목</td><td className="p-2 border">걸레질 (바닥)</td><td className="p-2 border">15분</td></tr>
            <tr><td className="p-2 border">금</td><td className="p-2 border">빨래 + 정리</td><td className="p-2 border">15분</td></tr>
            <tr><td className="p-2 border">토</td><td className="p-2 border">침구 교체 + 수건</td><td className="p-2 border">15분</td></tr>
            <tr><td className="p-2 border">일</td><td className="p-2 border">자유 (또는 쉼)</td><td className="p-2 border">0분</td></tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4">빨래 팁: 큰 빨래 대신 <strong>소량 빨래를 자주.</strong> 개기 부담이 확 줍니다.</p>
      <div className="mt-6 p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
        <p className="font-semibold mb-2">실천 과제</p>
        <p className="text-sm">나만의 요일별 청소 스케줄을 핸드폰 메모에 적으세요.</p>
      </div>
    </>),
  },
  {
    id: "ch9", title: "Ch.9 가족/동거인과 함께",
    body: (<>
      <h3 className="text-lg font-semibold mt-4 mb-3">15분 가족 타이머</h3>
      <blockquote className="border-l-4 border-violet-400 pl-4 my-4 italic text-gray-600 dark:text-gray-400">&quot;온 가족 10분 타이머, 처음 3~5분은 각자 방, 나머지는 공용 공간. 게임 중인 아이에게는 1시간 전, 30분 전 알림.&quot; — Reddit u/Itchy-Translator-606</blockquote>
      <h3 className="text-lg font-semibold mt-6 mb-3">바디 더블링</h3>
      <p>혼자 하면 안 되는데, 누군가 옆에 있으면 됩니다. 같이 청소할 필요도 없이 <strong>같은 공간에 있는 것만으로</strong> 집중력이 올라갑니다.</p>
      <h3 className="text-lg font-semibold mt-6 mb-3">테러 청소</h3>
      <blockquote className="border-l-4 border-violet-400 pl-4 my-4 italic text-gray-600 dark:text-gray-400">&quot;누군가를 집에 초대하면 급하게 청소하게 된다. 4일 연속 청소해서 보여줄 만한 상태가 됐다.&quot; — u/redcurbs</blockquote>
      <div className="mt-6 p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
        <p className="font-semibold mb-2">실천 과제</p>
        <p className="text-sm">오늘 저녁 가족에게 &quot;10분만 같이 정리하자&quot;고 제안해보세요.</p>
      </div>
    </>),
  },
  {
    id: "ch10", title: "Ch.10 정리는 끝나지 않는다",
    body: (<>
      <blockquote className="border-l-4 border-violet-400 pl-4 my-4 italic text-gray-600 dark:text-gray-400">&quot;정리는 끝나지 않는다. 미안하지만 사실이다. 하지만 첫 대규모 정리 후에는 유지보수 수준이 된다. 한 달에 몇 개 버리는 정도.&quot; — u/coffeeandbookmouse</blockquote>
      <p>장보기도 끝나지 않습니다. 빨래도 끝나지 않습니다. 정리도 마찬가지입니다. <strong>이것을 받아들이면 자유로워집니다.</strong></p>
      <h3 className="text-lg font-semibold mt-6 mb-3">유지보수 시스템 요약</h3>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li><strong>매일:</strong> 1분 룰 + 주방 리셋 + 빈손 이동 금지</li>
        <li><strong>매주:</strong> 방별 요일 청소 + 바구니 한 바퀴</li>
        <li><strong>매달:</strong> 서랍 1~2개 재정리 + 안 쓰는 것 기부</li>
        <li><strong>분기:</strong> 옷장 점검 + 계절 교체</li>
      </ul>
      <div className="mt-6 p-4 rounded-lg bg-violet-50 dark:bg-violet-950 border border-violet-200 dark:border-violet-800 text-center my-6">
        <p className="text-lg font-semibold">서랍 하나부터. 5분이면 충분합니다. 완벽하지 않아도 괜찮습니다.</p>
      </div>
      <div className="mt-6 p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
        <p className="font-semibold mb-2">실천 과제</p>
        <p className="text-sm">이 가이드에서 가장 마음에 든 팁 1가지를 오늘 바로 실행하세요.</p>
      </div>
    </>),
  },
  {
    id: "bonus1", title: "🎁 보너스 1: 5분 타이머 30일 챌린지",
    body: (<>
      <p>매일 5분씩 30일. 하루도 빠지지 않으면 <strong>습관이 됩니다.</strong></p>
      <h3 className="text-lg font-semibold mt-4 mb-3">주차별 미션</h3>
      <div className="space-y-3">
        <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
          <p className="font-semibold text-sm">1주차 (Day 1~7): 쓰레기 · 표면</p>
          <p className="text-xs">매일 5분 타이머 → 보이는 쓰레기 수집, 표면 위 물건 치우기</p>
        </div>
        <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
          <p className="font-semibold text-sm">2주차 (Day 8~14): 서랍 · 수납</p>
          <p className="text-xs">매일 서랍/선반 1개 → 비우기, 분류, 재배치</p>
        </div>
        <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
          <p className="font-semibold text-sm">3주차 (Day 15~21): 깊은 정리</p>
          <p className="text-xs">옷장, 주방, 욕실 등 영역별 5분 집중</p>
        </div>
        <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
          <p className="font-semibold text-sm">4주차 (Day 22~30): 루틴 정착</p>
          <p className="text-xs">아침/저녁 루틴 + 방별 요일 시스템 실행</p>
        </div>
      </div>
      <p className="mt-4 text-sm">못 한 날이 있어도 괜찮습니다. 다음 날 다시 시작하면 됩니다.</p>
    </>),
  },
  {
    id: "bonus2", title: "🎁 보너스 2: 주방 완전 리셋 가이드",
    body: (<>
      <h3 className="text-lg font-semibold mt-4 mb-3">구역 설정</h3>
      <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900 font-mono text-sm">
        <p><strong>싱크대 주변:</strong> 세제, 수세미, 행주 → 최소한으로</p>
        <p><strong>조리대:</strong> 자주 쓰는 것만 (커피머신, 전기포트 정도). 나머지는 수납</p>
        <p><strong>냉장고:</strong> 주 1회 유통기한 확인 → 버리기</p>
        <p><strong>찬장:</strong> 6개월 안 쓴 도구/그릇 → 기부 박스로</p>
      </div>
      <h3 className="text-lg font-semibold mt-6 mb-3">일일/주간 루틴</h3>
      <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
        <li><strong>매일:</strong> 요리 후 즉시 정리 + 밤 리셋(싱크대+조리대)</li>
        <li><strong>주 1회:</strong> 냉장고 정리 + 바닥 걸레질 + 가스레인지 닦기</li>
        <li><strong>월 1회:</strong> 찬장 재점검 + 유통기한 확인 + 안 쓰는 도구 기부</li>
      </ul>
    </>),
  },
  {
    id: "bonus3", title: "🎁 보너스 3: 옷장 정리 마스터 가이드",
    body: (<>
      <h3 className="text-lg font-semibold mt-4 mb-3">곤마리 + 실전 팁</h3>
      <ol className="list-decimal list-inside space-y-2 ml-4">
        <li><strong>전부 꺼내기:</strong> 옷장의 모든 옷을 침대 위에 쌓기 (충격 효과)</li>
        <li><strong>하나씩 들기:</strong> &quot;이것이 기쁨을 주는가?&quot; → Yes=유지, No=감사하고 보내기</li>
        <li><strong>접기:</strong> 서서 세울 수 있게 접기 → 서랍에서 한눈에 보임</li>
        <li><strong>걸기:</strong> 무거운 것→뒤, 가벼운 것→앞. 같은 색끼리</li>
      </ol>
      <blockquote className="border-l-4 border-violet-400 pl-4 my-4 italic text-gray-600 dark:text-gray-400">&quot;4봉지 기부 + 3봉지 버림. 다음 날 아침에 옷장 앞에 앉아서 깨끗함을 음미했다.&quot; — u/_jamocha_shake_ (좋아요 1,200)</blockquote>
      <p className="text-sm"><strong>5년 룰:</strong> 5년간 안 입은 옷 = 앞으로도 안 입을 옷.</p>
    </>),
  },
  {
    id: "bonus4", title: "🎁 보너스 4: ADHD/우울증을 위한 청소 가이드",
    body: (<>
      <p>실행 기능(Executive Function)이 약할 때의 청소는 다른 접근이 필요합니다.</p>
      <h3 className="text-lg font-semibold mt-4 mb-3">에너지 레벨별 대응</h3>
      <div className="space-y-2">
        <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <p className="text-sm"><strong>🟢 에너지 높음:</strong> 서랍 정리, 옷장 정리, Basket 돌기</p>
        </div>
        <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800">
          <p className="text-sm"><strong>🟡 보통:</strong> 5분 타이머, 주방 리셋, 1분 룰</p>
        </div>
        <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800">
          <p className="text-sm"><strong>🔴 에너지 바닥:</strong> 쓰레기 1개만 버리기, 컵 1개만 싱크대에. 그것도 어려우면 내일.</p>
        </div>
      </div>
      <h3 className="text-lg font-semibold mt-6 mb-3">추천 책/자료</h3>
      <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
        <li><strong>&quot;How to Keep House While Drowning&quot;</strong> — KC Davis (Reddit에서 가장 추천)</li>
        <li><strong>Dana K White</strong> — YouTube + 블로그 (aslobcomesclean.com)</li>
        <li><strong>Clutterbug</strong> — 청소 스타일별 맞춤 시스템</li>
      </ul>
      <p className="mt-4 text-sm font-semibold">가장 중요한 것: 자신을 비난하지 마세요. 정리를 못 하는 것은 게으른 것이 아닙니다.</p>
    </>),
  },
  {
    id: "bonus5", title: "🎁 보너스 5: 가족 참여 작전 가이드",
    body: (<>
      <h3 className="text-lg font-semibold mt-4 mb-3">연령별 분담</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead><tr className="bg-gray-100 dark:bg-gray-800"><th className="p-2 border">나이</th><th className="p-2 border">가능한 일</th></tr></thead>
          <tbody>
            <tr><td className="p-2 border">2~3세</td><td className="p-2 border">장난감 상자에 넣기, 휴지 쓰레기통에</td></tr>
            <tr><td className="p-2 border">4~6세</td><td className="p-2 border">침대 정리(대충 OK), 식탁 닦기, 빨래 분류</td></tr>
            <tr><td className="p-2 border">7~10세</td><td className="p-2 border">자기 방 정리, 진공청소기, 식기 정리</td></tr>
            <tr><td className="p-2 border">11세+</td><td className="p-2 border">욕실 청소, 요리 보조, 빨래 전 과정</td></tr>
          </tbody>
        </table>
      </div>
      <h3 className="text-lg font-semibold mt-6 mb-3">배우자/동거인 설득법</h3>
      <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
        <li>&quot;나 힘들어&quot; 대신 &quot;우리 같이 10분만 하자&quot; — 부담 없는 제안</li>
        <li>상대의 자연스러운 동선에 맞추기 — 물건이 쌓이는 곳에 수납 만들기</li>
        <li>비난 대신 감사 — &quot;그릇 넣어줘서 고마워&quot;</li>
        <li>완벽을 요구하지 않기 — 접는 방식이 다르더라도 한 것 자체를 인정</li>
      </ul>
      <blockquote className="border-l-4 border-violet-400 pl-4 my-4 italic text-gray-600 dark:text-gray-400">&quot;물건이 자연스럽게 쌓이는 곳에 수납을 만들어라. 가방이 항상 현관 바닥에 놓인다면 현관에 가방 자리를 만들어라.&quot; — u/bluesylady</blockquote>
    </>),
  },
];

const updateLogs: UpdateLog[] = [{
  version: 1, date: "2026-08-15",
  changes: [
    "초판 발행: Reddit r/declutter, r/CleaningTips, r/konmari, r/ADHD 기반",
    "10가지 핵심 원칙 선정", "10개 챕터 + 보너스 5개 작성",
  ],
}];

export default function DeclutterCleanReadPage() {
  return (
    <GuideBook
      bookId="declutter-clean"
      title="정리와 청소의 기술"
      emoji="🧹"
      subtitle="서랍 하나부터. 5분이면 충분합니다."
      topItems={topItems}
      sections={sections}
      updateLogs={updateLogs}
      currentVersion={1}
    />
  );
}
