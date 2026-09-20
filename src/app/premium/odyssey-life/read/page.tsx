import GuideBook from "@/components/GuideBook";
import type {
  TopItem,
  ContentSection,
  UpdateLog,
} from "@/components/GuideBook";

export const metadata = {
  title:
    "오디세이아, 3,000년 전 영웅이 알려주는 인생 항해술 — 본문 | 살아있는 정보책",
  description:
    "호메로스의 서사시에서 배우는 리더십·인내·유혹·귀환의 심리학. 서문 + 10개 챕터 + 부록 전문. 번아웃, 겸손, 환경설계, 컴포트존 탈출, 결정장애, 전략적 인내, 멘토, 목적 재발견, 조용한 자신감, 내면의 귀환까지.",
};

const topItems: TopItem[] = [
  {
    number: 1,
    title: "트로이를 떠나며: 승리 후에 오는 진짜 시련",
    oneLiner:
      "'목표가 삶에 의미를 부여했던 것이지, 달성이 의미를 주는 것이 아니다.'",
    description:
      "도착 오류(Arrival Fallacy), 승리 후 번아웃 5단계, 성과와 정체성 분리, 다음 항해 설계 프레임워크, 트로이 프로토콜, 마이크로 액션의 과학.",
    situation: "큰 목표를 달성한 뒤 '이제 뭘 하지?' 공허함이 밀려올 때",
    action:
      "6개월 후 도달하고 싶은 '다음 이타카'를 한 문장으로 적고, 내일 첫 노 젓기를 시작하세요.",
    mission:
      "지난 1년간 달성한 목표 3가지를 적고, 달성 후 감정을 솔직하게 기록하세요.",
  },
  {
    number: 2,
    title: "키클롭스와 오만의 대가: 이겨도 지는 법",
    oneLiner:
      "'겸손은 성격이 아니라 전략이다. 입을 다무는 것은 가장 강한 자기 통제다.'",
    description:
      "승자의 저주 심리학, SNS 시대의 자랑 역풍, 리더의 침묵 전략, Nobody 전략, 72시간 규칙, 자만 트리거 파악법, 겸손 체크리스트.",
    situation:
      "성공한 후 자랑하고 싶은 충동이 올라올 때, SNS에 과시하고 싶을 때",
    action:
      "성취를 이룬 후 72시간 동안 SNS에 올리지 마세요. 도파민이 가라앉은 뒤 판단하세요.",
    mission:
      "이번 달 가장 큰 성과에 기여한 사람 3명에게 감사 메시지를 보내세요.",
  },
  {
    number: 3,
    title: "세이렌의 노래: 유혹을 이기는 시스템 설계",
    oneLiner:
      "'가장 강한 사람은 유혹과 싸우는 사람이 아니라, 유혹과 싸울 필요가 없는 환경을 만드는 사람이다.'",
    description:
      "의지력 고갈 이론, 사전 약속 전략(Precommitment), 밀랍과 돛대 프레임워크, 디지털·소비·시간 유혹 차단법, 아침 루틴 설계, 관계 속 세이렌 대처.",
    situation: "스마트폰·SNS·넷플릭스 등 도파민 유혹을 끊겠다고 다짐만 반복할 때",
    action:
      "스마트폰을 침실 밖에서 충전하고, 알람 시계를 따로 사세요. 아침 첫 1시간을 보호하세요.",
    mission:
      "나의 상위 3가지 세이렌을 적고, 각각 밀랍(차단)과 돛대(시스템) 전략을 설계하세요.",
  },
  {
    number: 4,
    title: "칼립소의 섬: 편안함이라는 감옥",
    oneLiner:
      "'편안함과 의미 사이에서, 의미를 선택하는 것이 인간다운 삶이다.'",
    description:
      "컴포트존 5단계(안착→적응→합리화→마비→깨달음), '좋은 것'과 '내 것'의 차이, 칼립소 테스트, 불멸 거부의 용기, 탈출 4전략, 7년의 의미.",
    situation:
      "안정적이지만 의미 없는 직장·관계에 갇혀 '이게 아닌데'라고 느낄 때",
    action:
      "'만약 지금 떠나면?' 최악·최선·현실적 시나리오를 적어보세요. 기한을 정하세요.",
    mission:
      "현재 삶에서 '편안하지만 의미 없는 영역' 3가지를 적고, 진짜 원하는 것(이타카)을 옆에 적으세요.",
  },
  {
    number: 5,
    title: "스킬라와 카립디스: 양자택일의 리더십",
    oneLiner:
      "'완벽한 선택을 찾느라 아무것도 선택하지 않는 것이 최악의 선택이다.'",
    description:
      "최소 손실 원칙, 분석 마비·결정 미루기·완벽주의 함정, 70% 확신 실행법, 결정 후 흔들림 관리, 일방통행 vs 양방향 문, 결정 근육 키우기.",
    situation:
      "어느 쪽이든 손실인 양자택일 앞에서 결정을 계속 미루고 있을 때",
    action:
      "보류 중인 결정의 최악·최선·회복 가능성을 표로 정리하고, 이번 주 안에 결정하세요.",
    mission:
      "과거에 후회하는 결정에서 배운 것 3가지를 적고, 그 결정의 문을 닫으세요.",
  },
  {
    number: 6,
    title: "페넬로페의 인내: 기다림의 전략적 가치",
    oneLiner:
      "'전략적 인내는 약함이 아니라, 가장 정교한 형태의 강함이다.'",
    description:
      "수동적 기다림 vs 전략적 인내, 수의 짜기 전략, 인내의 4단계 프레임워크(목표 확인→기한 설정→행동 계획→트리거), 구혼자 압박 대처법, 인내 vs 집착 구분.",
    situation: "주변의 '빨리 해' 압박 속에서 기다려야 할지 행동해야 할지 모를 때",
    action:
      "기다림의 기한을 정하세요. '몇 월까지 변화 없으면 다음 단계로 간다'를 적어두세요.",
    mission:
      "기다리는 동안 할 3가지 행동(실력 강화·네트워크·정보 수집)을 정하고 이번 주 시작하세요.",
  },
  {
    number: 7,
    title: "텔레마코스의 성장: 아버지 없이 어른이 되는 법",
    oneLiner:
      "'당신이 찾는 것이 무엇이든, 먼저 떠나라. 길은 걷는 자에게만 보인다.'",
    description:
      "아버지의 부재 6가지 형태, 멘토 찾기 기술, 정체성은 행동이 만든다, 성장의 3관문(떠남→만남→귀환), 불완전한 롤모델에게 배우기, 매일의 작은 출발.",
    situation:
      "멘토도 롤모델도 없이 방향을 모르는 채 정체성이 불확실할 때",
    action:
      "이번 달 안에 익숙한 환경 밖으로 한 발 나가세요. 새 모임, 새 강연, 새로운 사람과의 대화.",
    mission:
      "나에게 영향을 주는 사람(직접/간접)을 기술·경험·정서·간접 멘토로 분류해 적어보세요.",
  },
  {
    number: 8,
    title: "로토스 먹는 자들: 잊혀지는 목적",
    oneLiner:
      "'진짜 위험은 고통이 아니라 쾌락이다. 당신의 이타카를 매일, 매 순간 기억하라.'",
    description:
      "도파민 트랩의 과학, 목적 상실 4단계 회복(인식→분리→재연결→대체), 디지털 로토스 차단 전략, 목적 선명도 테스트, 이타카 기억 장치 5종.",
    situation:
      "숏폼·SNS·게임에 시간이 증발하면서 '왜 시작했는지' 목적을 잃어가고 있을 때",
    action:
      "가장 많이 쓰는 SNS 앱 하나를 1주일간 삭제하세요. 브라우저 접속만 허용하세요.",
    mission:
      "'나의 이타카'를 한 문장으로 적어 스마트폰 배경화면에 설정하세요.",
  },
  {
    number: 9,
    title: "귀환과 활 시험: 변한 세상에서 나를 증명하기",
    oneLiner:
      "'진짜 실력은 선언이 아니라 증거로 말한다. 누더기를 입어도 왕은 왕이다.'",
    description:
      "거지처럼 시작하라(겸손한 진입), 관찰→동맹→연합→감정 통제, 조용한 자신감(Quiet Confidence), 키클롭스 vs 활 시험 대비, 증거를 쌓는 법.",
    situation:
      "이직·복귀·전직 후 아무도 나를 모르는 새 환경에서 다시 증명해야 할 때",
    action:
      "새 환경에서 과거 경력을 내세우지 말고, 작은 성과를 차근차근 쌓아 결과로 말하세요.",
    mission:
      "나의 핵심 역량 3가지를 적고, 각각을 증명할 구체적 증거(결과물)를 함께 적으세요.",
  },
  {
    number: 10,
    title: "이타카에 도착하고도: 진짜 귀환은 내면에 있다",
    oneLiner:
      "'인생에 최종 도착지는 없다. 모든 도착은 새로운 출발이다.'",
    description:
      "도착 후 공허감, 여정 중심 사고 vs 목표 중심 사고, 올리브 나무 침대(변하지 않는 가치), 내면의 귀환을 위한 자기 대화, 인생은 계속되는 오디세이, 10가지 항해 원칙 총정리.",
    situation:
      "원하던 것을 이뤘는데 '이게 내가 원하던 건가?' 하는 공허감이 밀려올 때",
    action:
      "나의 올리브 나무(절대 변하지 않을 가치·관계·신념)를 3가지 적고, 가까운 사람에게 선언하세요.",
    mission:
      "이 책에서 가장 크게 와닿은 챕터의 실천 과제를 골라, 오늘 시작하세요.",
  },
];

const sections: ContentSection[] = [
  {
    id: "sec-0",
    title: "서문 — 왜 지금 오디세이아를 읽어야 하는가",
    body: (
      <>
        <p>지중해의 검푸른 바다 위, 한 남자가 뗏목에 의지한 채 수평선을 바라보고 있다. 트로이 전쟁의 영웅 오디세우스. 10년간의 전쟁에서 승리하고도, 고향 이타카까지 또 다른 10년의 항해가 그를 기다리고 있다는 걸 이 남자는 아직 모른다.</p>
        <p>괴물과 마녀, 유혹과 폭풍. 그가 마주한 시련의 목록은 끝이 없다. 그런데 이상한 점이 있다. <strong>이 이야기가 3,000년이 지난 지금도 우리 가슴을 뛰게 한다는 것이다.</strong> 왜일까?</p>
        <p>호메로스가 오디세이아를 노래했을 때, 그는 단순히 모험 이야기를 들려준 것이 아니었다. 그는 <strong>인간이 살면서 반드시 마주하는 보편적 시련의 지도</strong>를 그린 것이다. 트로이 승리 후 공허함은 현대인의 번아웃이고, 키클롭스 앞에서의 자만은 SNS 과시이며, 세이렌의 노래는 스마트폰 중독이고, 칼립소의 낙원은 컴포트존이라는 감옥이다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">이 책의 10가지 항해</h3>
        <p><strong>1~2장</strong> &mdash; 승리 후 공허함(번아웃)을 넘어서고, 이기고도 입을 다무는 겸손의 전략을 배운다.</p>
        <p><strong>3~5장</strong> &mdash; 유혹을 이기는 시스템 설계, 편안함의 감옥 탈출, 양자택일의 리더십을 다룬다.</p>
        <p><strong>6~8장</strong> &mdash; 전략적 인내의 기술, 멘토 없이 성장하는 법, 잃어버린 목적을 되찾는 방법을 제시한다.</p>
        <p><strong>9~10장</strong> &mdash; 변한 세상에서 나를 증명하는 법과 진짜 귀환의 의미를 탐구한다.</p>
        <p><strong>부록</strong> &mdash; 전체 줄거리 요약, 등장인물 관계도, 에피소드별 적용표, 추천 도서, 30일 실천 플래너.</p>

        <blockquote className="border-l-4 border-indigo-400 pl-4 py-2 my-4 bg-indigo-50 dark:bg-indigo-950 rounded-r-lg">
          <p><strong>서문 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>이 책은 오디세이아를 &lsquo;읽는&rsquo; 책이 아니라 &lsquo;사는&rsquo; 책이다.</li>
            <li>각 챕터는 원작 장면 묘사 &rarr; 현대적 해석 &rarr; 실전 적용 가이드 3층 구조로 되어 있다.</li>
            <li><strong>완벽하지 않았기에 끝까지 항해할 수 있었다 &mdash; 중요한 것은 도착이 아니라, 항해 그 자체다.</strong></li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-1",
    title: "Ch.1 트로이를 떠나며: 승리 후에 오는 진짜 시련",
    body: (
      <>
        <p>트로이가 함락된 아침, 오디세우스는 전쟁의 최고 영웅으로 칭송받았다. 그런데 축제의 한복판에서 그의 눈은 이미 바다를 향해 있었다. 승리의 기쁨은 놀랍도록 빠르게 사라졌고, 가슴을 채우는 것은 <strong>이상한 공허함</strong>이었다.</p>
        <p>현대 심리학에서는 이것을 <strong>&ldquo;도착 오류(Arrival Fallacy)&rdquo;</strong>라고 부른다. 목표를 달성하면 행복해질 것이라는 믿음이 실제로는 환상이라는 것이다. 대학 합격 후 공허함, 승진 후 더 무거운 짐 &mdash; 매번 &ldquo;그 다음은?&rdquo;이 뒤따른다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">도착 오류를 극복하는 3단계: 인정 &rarr; 분리 &rarr; 재설계</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>인정</strong> &mdash; 공허함은 자연스러운 감정이다. 영웅도 공허함을 느낀다.</li>
          <li><strong>분리</strong> &mdash; 하나의 성취가 당신의 전부가 아니다. 과거의 자신을 내려놓아라.</li>
          <li><strong>재설계</strong> &mdash; 다음 이타카를 설정하라. 방향이 있다는 것 자체가 중요하다.</li>
        </ul>
        <p>오디세우스만이 진정한 귀환에 성공한 이유는, 항해 중 끊임없이 <strong>적응하고 변화했기</strong> 때문이다. 트로이의 영웅이라는 과거에 집착하지 않았다. 핵심은 <strong>&ldquo;쉬되, 머무르지 않기&rdquo;</strong>다.</p>

        <blockquote className="border-l-4 border-indigo-400 pl-4 py-2 my-4 bg-indigo-50 dark:bg-indigo-950 rounded-r-lg">
          <p><strong>1챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>목표가 삶에 의미를 부여했던 것이지, 달성이 의미를 주는 것이 아니다.</li>
            <li>승리 후 번아웃은 실패가 아니라 성장할 준비가 되었다는 신호다.</li>
            <li><strong>오늘부터 실행</strong>: &ldquo;나의 다음 이타카&rdquo;를 한 문장으로 적고, 내일 첫 노 젓기를 시작하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-2",
    title: "Ch.2 키클롭스와 오만의 대가: 이겨도 지는 법",
    body: (
      <>
        <p>키클롭스 폴리페모스의 동굴에서 오디세우스는 천재적인 작전을 세웠다. &ldquo;내 이름은 아무도 아닌 자(Nobody)&rdquo;라며 거인을 속이고, 술에 취한 거인의 눈을 찔러 탈출했다. 여기까지는 완벽했다.</p>
        <p>그런데 배에 올라탄 뒤, 오디세우스는 참지 못했다. <strong>&ldquo;너를 이긴 것은 이타카의 왕 오디세우스다!&rdquo;</strong> 이 한마디가 모든 것을 무너뜨렸다. 폴리페모스는 포세이돈의 아들이었고, 아버지에게 저주를 빌었다. 이후 오디세우스의 항해는 10년간의 지옥이 되었다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">현대판 &ldquo;Nobody&rdquo; 전략</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>성과는 크게, 자랑은 작게</strong> &mdash; 결과물이 스스로 말하게 하라.</li>
          <li><strong>72시간 규칙</strong> &mdash; 큰 성취 후 72시간 동안 SNS에 올리지 않기.</li>
          <li><strong>공로 재분배</strong> &mdash; 승리의 순간 가장 먼저 함께한 사람들을 언급하기.</li>
        </ul>
        <p>역사상 위대한 리더들은 이 교훈을 알고 있었다. 링컨은 남북전쟁 승리 후 남부를 조롱하지 않았고, 워런 버핏은 성공해도 자신의 실수를 공개적으로 이야기한다. <strong>진정한 강자는 이겼을 때 조용하다.</strong></p>

        <blockquote className="border-l-4 border-indigo-400 pl-4 py-2 my-4 bg-indigo-50 dark:bg-indigo-950 rounded-r-lg">
          <p><strong>2챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>겸손은 성격이 아니라 전략이다. 입을 다무는 것은 가장 강한 형태의 자기 통제다.</li>
            <li>자만의 트리거(승리 직후, 칭찬 연속, 술자리)를 미리 파악해두면 경보를 울릴 수 있다.</li>
            <li><strong>오늘부터 실행</strong>: 성과에 기여한 사람 3명에게 감사 메시지를 보내세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-3",
    title: "Ch.3 세이렌의 노래: 유혹을 이기는 시스템 설계",
    body: (
      <>
        <p>세이렌의 노래를 듣고 살아남은 자는 없었다. 오디세우스는 마녀 키르케의 경고를 받고 <strong>의지력으로 유혹에 맞서는 것을 포기했다.</strong> 대신 부하들의 귀에 밀랍을 채우고, 자신은 돛대에 묶었다. &ldquo;내가 풀어달라고 소리쳐도, 더 단단히 묶어라.&rdquo;</p>
        <p>현대 심리학의 불편한 진실 &mdash; <strong>의지력은 자원이 한정되어 있다.</strong> 유혹을 참는 데 의지력을 소모하면 다른 곳에 쓸 에너지가 남지 않는다. 매일 &ldquo;스마트폰 줄이겠다&rdquo;는 다짐이 하루를 넘기지 못하는 이유다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">사전 약속 전략 4단계</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>나의 세이렌 파악</strong> &mdash; 지난 한 달간 가장 많이 넘어간 유혹 3가지를 적어라.</li>
          <li><strong>트리거 분석</strong> &mdash; 언제, 어디서, 어떤 감정 상태에서 발생하는지 파악하라.</li>
          <li><strong>밀랍과 돛대 설계</strong> &mdash; 밀랍(유혹 차단)과 돛대(행동 차단) 둘 다 필요하다.</li>
          <li><strong>저항 무력화 장치</strong> &mdash; 미래의 자신이 저항할 것을 예상하고, 그 저항마저 무력화하라.</li>
        </ol>
        <p><strong>밀랍으로 귀를 막으면 의지력이 필요 없다. 돛대에 묶여 있으면 의지력이 필요 없다.</strong> 시스템이 의지력을 대신한다. 스마트폰을 끊겠다고 매일 다짐하지 마라. 알림을 끄고, 앱을 삭제하고, 충전기를 다른 방에 두어라.</p>

        <blockquote className="border-l-4 border-indigo-400 pl-4 py-2 my-4 bg-indigo-50 dark:bg-indigo-950 rounded-r-lg">
          <p><strong>3챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>유혹을 이기는 것은 의지력이 아니라 설계다.</li>
            <li>아침 첫 1시간을 로토스 없는 시간으로 보호하라 &mdash; 이 한 시간이 하루 전체를 결정한다.</li>
            <li><strong>오늘부터 실행</strong>: 스마트폰을 침실 밖에서 충전하고, 알람 시계를 따로 구비하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-4",
    title: "Ch.4 칼립소의 섬: 편안함이라는 감옥",
    body: (
      <>
        <p>오기기아 섬. 영원히 시들지 않는 꽃, 맑은 샘물, 따뜻한 바람. 여신 칼립소는 오디세우스에게 영원한 젊음과 불멸을 제안했다. 오디세우스는 7년을 머물렀다. 그리고 <strong>매일 저녁 바닷가 바위에 앉아 바다를 바라보며 울었다.</strong> 낙원에서, 불멸을 약속받은 채로.</p>
        <p>왜? 그가 원한 것은 불멸이 아니라 <strong>이타카</strong>였기 때문이다. 불멸을 거부하고 죽음을 선택한 남자 &mdash; 이것이 오디세이아의 가장 아름다운 장면이다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">컴포트존에 갇히는 5단계</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>안착</strong> &mdash; &ldquo;여기도 괜찮네.&rdquo;</li>
          <li><strong>적응</strong> &mdash; 편안함이 일상이 된다. 불편함에 대한 내성이 약해진다.</li>
          <li><strong>합리화</strong> &mdash; &ldquo;여기가 최선이야. 바깥은 위험해.&rdquo;</li>
          <li><strong>마비</strong> &mdash; 떠나고 싶은 마음 자체가 사라진다.</li>
          <li><strong>깨달음</strong> &mdash; &ldquo;이건 내 삶이 아니야.&rdquo; 일부만 이 단계에 도달한다.</li>
        </ol>
        <p><strong>&ldquo;좋은 것이 반드시 내 것은 아니다.&rdquo;</strong> 남이 보기에 완벽한 곳이라도, 그곳이 내 이타카가 아니면 감옥이다. 탈출은 작은 불편함부터 시작하라 &mdash; 새로운 카페, 모르는 분야의 책, 가보지 않은 길.</p>

        <blockquote className="border-l-4 border-indigo-400 pl-4 py-2 my-4 bg-indigo-50 dark:bg-indigo-950 rounded-r-lg">
          <p><strong>4챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>편안함과 의미 사이에서, 의미를 선택하는 것이 인간다운 삶이다.</li>
            <li>오디세우스가 7년이나 걸린 것은 그가 약해서가 아니라, 컴포트존의 힘이 그만큼 강하기 때문이다.</li>
            <li><strong>오늘부터 실행</strong>: 이번 주 일상의 루틴 하나를 깨뜨려보세요. 작은 탈출이 변화의 근육을 키웁니다.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-5",
    title: "Ch.5 스킬라와 카립디스: 양자택일의 리더십",
    body: (
      <>
        <p>메시나 해협의 양쪽에 괴물이 하나씩 자리 잡고 있다. 스킬라(여섯 명을 물어가는 괴물)와 카립디스(배 전체를 삼키는 소용돌이). 어느 쪽으로도 피할 수 없다. 오디세우스는 <strong>덜 나쁜 쪽</strong>을 골라 스킬라 쪽으로 배를 몰았다. 여섯 명의 비명을 들으며 노를 저었다.</p>
        <p>이 장면이 위대한 이유는, 영웅에게조차 <strong>완벽한 선택지가 없었다</strong>는 것을 보여주기 때문이다. 현대인은 &ldquo;완벽한 선택&rdquo;이라는 환상에 시달린다. 끝없이 고민하고, 비교하고, 결국 아무것도 선택하지 못한다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">불완전한 결정을 내리는 기술</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>최소 손실 원칙</strong> &mdash; 각 선택지의 최악의 결과를 비교하라.</li>
          <li><strong>되돌릴 수 있는 쪽을 선택하라</strong> &mdash; 아마존 베조스의 &ldquo;일방통행 vs 양방향 문&rdquo; 프레임워크.</li>
          <li><strong>70% 확신이면 실행하라</strong> &mdash; 미 해병대 원칙. 나머지 30%는 실행하면서 보정.</li>
        </ul>
        <p>결정 후가 더 중요하다. <strong>&ldquo;결정된 문은 닫아라.&rdquo;</strong> 같은 결정이라도 이후 어떻게 실행하느냐에 따라 결과는 달라진다. 후회를 자책이 아니라 데이터로 활용하라.</p>

        <blockquote className="border-l-4 border-indigo-400 pl-4 py-2 my-4 bg-indigo-50 dark:bg-indigo-950 rounded-r-lg">
          <p><strong>5챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>완벽한 선택을 찾느라 아무것도 선택하지 않는 것이 최악의 선택이다.</li>
            <li>리더십은 정답을 아는 것이 아니라, 정답이 없는 상황에서 방향을 정하는 것이다.</li>
            <li><strong>오늘부터 실행</strong>: 보류 중인 결정 하나를 표로 정리하고, 이번 주 안에 결정하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-6",
    title: "Ch.6 페넬로페의 인내: 기다림의 전략적 가치",
    body: (
      <>
        <p>남편이 떠난 지 20년. 108명의 구혼자가 왕궁에 들어앉아 재혼을 요구했다. 페넬로페는 &ldquo;시아버지의 수의를 짜야 하니, 끝나면 재혼하겠습니다&rdquo;라고 말한 뒤, <strong>낮에 짜고 밤마다 풀었다.</strong> 3년 동안. 매일 짜고, 매일 풀었다.</p>
        <p>그녀의 기다림은 수동적 인내가 아니라 <strong>능동적 전략</strong>이었다. 기다리는 동안 구혼자들의 분열을 유도했고, 아들의 성장을 도왔으며, 충성스러운 하인 네트워크를 유지했다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">전략적 인내의 4단계 프레임워크</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>목표 재확인</strong> &mdash; 무엇을, 왜 기다리는가? 답할 수 없다면 방황이다.</li>
          <li><strong>기한 설정</strong> &mdash; 영원히 기다릴 수 없다. 구체적 기한을 정하라.</li>
          <li><strong>행동 계획</strong> &mdash; 실력 강화, 네트워크 구축, 정보 수집. 빈 시간이 아니다.</li>
          <li><strong>트리거 설정</strong> &mdash; &ldquo;이 조건이 충족되면 즉시 행동한다&rdquo;를 미리 정하라.</li>
        </ol>
        <p>전략적 인내와 맹목적 집착은 다르다. 인내에는 기한이 있고 전략이 있지만, 집착은 무한정이고 새 정보를 무시한다. <strong>&ldquo;5년 후에도 계속 기다릴 것인가?&rdquo;</strong> 이 질문에 &ldquo;예&rdquo;라면, 인내가 아니라 집착일 수 있다.</p>

        <blockquote className="border-l-4 border-indigo-400 pl-4 py-2 my-4 bg-indigo-50 dark:bg-indigo-950 rounded-r-lg">
          <p><strong>6챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>전략적 인내는 약함이 아니라, 가장 정교한 형태의 강함이다.</li>
            <li>기다리는 동안 무엇을 하느냐가 기다림의 결과를 결정한다.</li>
            <li><strong>오늘부터 실행</strong>: 기다림의 기한과 트리거를 정하고, 보이는 곳에 붙여두세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-7",
    title: "Ch.7 텔레마코스의 성장: 아버지 없이 어른이 되는 법",
    body: (
      <>
        <p>텔레마코스는 아버지의 얼굴을 기억하지 못한다. 궁전의 108명 구혼자는 &ldquo;아버지 없는 애가 뭘 할 수 있겠어?&rdquo;라고 조롱했다. 여신 아테나가 멘토르의 모습으로 나타나 조언했다. <strong>&ldquo;아버지를 찾아 떠나라.&rdquo;</strong> 텔레마코스는 배를 타고 바다로 나갔다. 그리고 아버지가 아니라 <strong>자기 자신을 찾았다.</strong></p>

        <h3 className="text-xl font-bold mt-8 mb-4">성장의 3가지 관문</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>떠남</strong> &mdash; 익숙한 환경(컴포트존)을 떠나는 용기. 준비되지 않아도 떠나라.</li>
          <li><strong>만남</strong> &mdash; 다양한 사람과 세계를 경험하라. 자기 세계 밖을 봐야 자기 세계를 이해할 수 있다.</li>
          <li><strong>귀환</strong> &mdash; 돌아온 그는 떠나기 전의 그가 아니다. 구혼자들 앞에 당당히 선 어른이 되었다.</li>
        </ul>
        <p>텔레마코스의 핵심 교훈 &mdash; <strong>행동이 정체성을 만든다.</strong> &ldquo;나는 영웅의 아들이다&rdquo;라는 생각만으로 성장하지 않았다. 직접 바다에 나가고, 왕들을 만나고, 위험을 감수했다. 멘토는 당신이 움직일 때 나타난다.</p>

        <blockquote className="border-l-4 border-indigo-400 pl-4 py-2 my-4 bg-indigo-50 dark:bg-indigo-950 rounded-r-lg">
          <p><strong>7챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>아버지를 찾아 떠난 소년은, 결국 자기 자신을 찾아 돌아왔다.</li>
            <li>완벽한 롤모델은 없다. 불완전한 롤모델에게서 배울 점만 취하라.</li>
            <li><strong>오늘부터 실행</strong>: 이번 달 안에 익숙한 환경 밖으로 한 발 나가세요. 새 모임이든 새 강연이든.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-8",
    title: "Ch.8 로토스 먹는 자들: 잊혀지는 목적",
    body: (
      <>
        <p>로토스 열매를 먹은 선원들은 고향도, 가족도, 귀환해야 한다는 사명도 모두 잊었다. 눈은 멍하고 얼굴에는 몽롱한 미소가 떠 있었다. 이 짧은 에피소드가 어쩌면 오디세이아에서 <strong>가장 무서운 이야기</strong>다. 로토스는 사람을 죽이지 않는다. 그 대신 <strong>사람에게서 목적을 빼앗는다.</strong></p>
        <p>현대의 로토스 &mdash; 숏폼 영상(&ldquo;이것만 보고...&rdquo; &rarr; 2시간 증발), SNS 피드, 넷플릭스 자동재생, 온라인 쇼핑. 모두 <strong>도파민 시스템을 해킹</strong>한다. 쉬운 쾌감에 중독되면, 어려운 보상(공부, 운동, 프로젝트)이 상대적으로 매력 없어진다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">목적 상실에서 회복하는 4단계</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>인식</strong> &mdash; 내가 로토스를 먹고 있다는 사실을 자각하라. 시간이 어디로 갔는지 모르겠다면 이미 먹고 있는 것이다.</li>
          <li><strong>분리</strong> &mdash; 물리적으로 로토스에서 분리하라. 앱 삭제, 스크린 타임 제한, 흑백 화면 모드.</li>
          <li><strong>재연결</strong> &mdash; &ldquo;왜 이 일을 시작했지?&rdquo; 잊혀진 이타카를 다시 떠올려라.</li>
          <li><strong>대체</strong> &mdash; 로토스 자리를 의미 있는 활동으로 채워라. 빈 공간은 다시 채워진다.</li>
        </ol>
        <p><strong>로토스를 이기는 것은 의지력이 아니라, 더 강한 목적이다.</strong> 선원들에게 이타카는 &ldquo;돌아가면 좋은 곳&rdquo;이었지만, 오디세우스에게는 &ldquo;반드시 돌아가야 하는 곳&rdquo;이었다. 그 차이가 운명을 갈랐다.</p>

        <blockquote className="border-l-4 border-indigo-400 pl-4 py-2 my-4 bg-indigo-50 dark:bg-indigo-950 rounded-r-lg">
          <p><strong>8챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>진짜 위험은 고통이 아니라 쾌락이다. 달콤한 망각을 경계하라.</li>
            <li>목적의 선명도를 올리는 것이 로토스에 대한 가장 근본적인 해독제다.</li>
            <li><strong>오늘부터 실행</strong>: 3일간 스마트폰 앱별 사용 시간을 기록하고, &ldquo;나의 이타카&rdquo;를 한 문장으로 적어 배경화면에 설정하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-9",
    title: "Ch.9 귀환과 활 시험: 변한 세상에서 나를 증명하기",
    body: (
      <>
        <p>20년 만에 이타카에 도착한 오디세우스를 아테나 여신이 <strong>늙고 초라한 거지</strong>로 변장시켰다. 자기 궁전의 문턱에 앉아 구걸했다. 구혼자들은 그를 발로 차고 음식 찌꺼기를 던졌다. 이번에는 이름을 외치지 않았다. <strong>침묵 속에서 관찰했다.</strong></p>
        <p>페넬로페의 활 시험. 108명의 구혼자가 누구도 시위를 걸지 못했다. 마지막에, 초라한 거지가 활을 집어 들었다. 아무런 힘도 들이지 않는 것처럼 시위를 걸고, 화살을 쏘아 12개의 도끼 구멍을 관통시켰다. <strong>&ldquo;나는 오디세우스다.&rdquo;</strong></p>

        <h3 className="text-xl font-bold mt-8 mb-4">새 환경에서 실력을 증명하는 4단계</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>거지처럼 시작하라</strong> &mdash; 이전의 지위나 경력을 내세우지 마라. 겸손하게 시작.</li>
          <li><strong>관찰하라</strong> &mdash; 새 환경의 규칙, 문화, 핵심 인물을 파악하라.</li>
          <li><strong>작은 것으로 먼저 증명하라</strong> &mdash; 작은 성과를 차근차근 쌓아라.</li>
          <li><strong>결과가 말하게 하라</strong> &mdash; 말로 설명하지 마라. 결과물이 스스로 증명하게 하라.</li>
        </ol>
        <p>키클롭스 때는 먼저 자랑하고 저주를 받았다. 활 시험에서는 먼저 증명하고 왕좌를 되찾았다. <strong>20년의 시간이 영웅을 자만에서 지혜로 변화시켰다.</strong> 조용한 자신감은 긍정적 자기 암시가 아니라, 실제 경험과 성취의 축적으로 만들어진다.</p>

        <blockquote className="border-l-4 border-indigo-400 pl-4 py-2 my-4 bg-indigo-50 dark:bg-indigo-950 rounded-r-lg">
          <p><strong>9챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>진짜 실력은 선언이 아니라 증거로 말한다. 누더기를 입어도 왕은 왕이다.</li>
            <li>겉모습이 어떻든 당신의 본질은 변하지 않는다. 때가 오면 활을 쏠 기회가 온다.</li>
            <li><strong>오늘부터 실행</strong>: 이번 주 한 가지 일을 할 때, &ldquo;이만큼 노력했어요&rdquo;가 아니라 완성된 결과물만 제출하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-10",
    title: "Ch.10 이타카에 도착하고도: 진짜 귀환은 내면에 있다",
    body: (
      <>
        <p>구혼자들은 쓰러졌다. 20년 만의 귀환, 20년 만의 승리. 그런데 호메로스는 여기서 이야기를 끝내지 않는다. 오디세우스와 페넬로페는 서로를 즉시 끌어안지 않는다. 페넬로페가 시험한다. &ldquo;침대를 옮겨주세요.&rdquo; 오디세우스가 화를 낸다. <strong>&ldquo;그 침대는 옮길 수 없소! 내가 직접 올리브 나무를 깎아 만든 침대이고, 뿌리가 아직 땅에 박혀 있소!&rdquo;</strong></p>
        <p>올리브 나무 침대 &mdash; 20년간 모든 것이 변했지만, <strong>진짜 중요한 것은 변하지 않았다.</strong> 이것이 오디세이아의 가장 아름다운 상징이다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">여정 중심 사고 vs 목표 중심 사고</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>목표 중심</strong> &mdash; &ldquo;도착하면 행복할 거야&rdquo; &rarr; 도착 후 공허.</li>
          <li><strong>여정 중심</strong> &mdash; &ldquo;지금 이 과정에서 무엇을 배우고 있는가&rdquo; &rarr; 매일 의미를 발견.</li>
        </ul>
        <p>키클롭스에서 배운 겸손, 세이렌에서 배운 자기 통제, 칼립소에서 배운 선택의 용기, 스킬라에서 배운 리더십 &mdash; <strong>여정의 모든 순간이 오디세우스를 만들었다.</strong> 삶은 하나의 오디세이가 끝나면 다른 오디세이가 시작되는, 끝없는 항해다.</p>
        <p>그리스 시인 카바피의 시 &ldquo;이타카&rdquo;는 말한다. <strong>&ldquo;이타카가 당신에게 준 것은 아름다운 여정이다. 이타카가 없었다면, 당신은 결코 출발하지 않았을 것이다.&rdquo;</strong></p>

        <blockquote className="border-l-4 border-indigo-400 pl-4 py-2 my-4 bg-indigo-50 dark:bg-indigo-950 rounded-r-lg">
          <p><strong>10챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>인생에 최종 도착지는 없다. 모든 도착은 새로운 출발이다.</li>
            <li>폭풍 같은 변화의 시대에, 우리에게도 올리브 나무 침대(변하지 않는 가치)가 필요하다.</li>
            <li><strong>오늘부터 실행</strong>: 나의 올리브 나무(절대 변하지 않을 가치) 3가지를 적고, 가까운 사람에게 선언하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-11",
    title: "부록 — 오디세이아 완전 가이드 & 30일 실천 플래너",
    body: (
      <>
        <p>이 부록에는 오디세이아의 전체 줄거리, 등장인물 관계도, 에피소드별 현대 적용표, 추천 도서, 그리고 <strong>30일 실천 플래너</strong>를 담았습니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">10가지 항해 원칙 총정리</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>트로이 출발</strong> &mdash; 승리는 끝이 아니라 다음 항해의 시작</li>
          <li><strong>키클롭스</strong> &mdash; 이겨도 입을 다물 줄 아는 것이 지혜</li>
          <li><strong>세이렌</strong> &mdash; 의지력이 아닌 시스템으로 유혹을 이겨라</li>
          <li><strong>칼립소</strong> &mdash; 편안함보다 의미를 선택하라</li>
          <li><strong>스킬라/카립디스</strong> &mdash; 완벽한 선택은 없다, 결정하고 나아가라</li>
          <li><strong>페넬로페</strong> &mdash; 전략적으로 기다리되, 기다리는 동안 행동하라</li>
          <li><strong>텔레마코스</strong> &mdash; 답은 기다린다고 오지 않는다, 찾아 나서라</li>
          <li><strong>로토스 열매</strong> &mdash; 달콤한 망각을 경계하고 목적을 기억하라</li>
          <li><strong>활 시험</strong> &mdash; 말이 아닌 행동으로 증명하라</li>
          <li><strong>이타카 도착</strong> &mdash; 진짜 귀환은 내면에 있다</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">30일 &ldquo;나의 오디세이&rdquo; 플래너 핵심</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>Week 1 (출발과 겸손)</strong> &mdash; 성취 기록, 다음 이타카 선언, 72시간 SNS 금지, 감사 전하기</li>
          <li><strong>Week 2 (유혹과 선택)</strong> &mdash; 세이렌 목록 작성, 디지털 디톡스, 칼립소 점검, 보류 결정 처리</li>
          <li><strong>Week 3 (인내와 성장)</strong> &mdash; 기다림 전략 점검, 멘토 지도 작성, 스마트폰 사용 기록, SNS 앱 삭제 실험</li>
          <li><strong>Week 4 (증명과 귀환)</strong> &mdash; 핵심 역량+증거, 결과로 말하기, 올리브 나무 선언, 편지 쓰기</li>
          <li><strong>Day 29~30</strong> &mdash; 30일 돌아보기, &ldquo;나의 다음 오디세이&rdquo; 선언문 작성</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">추천 도서 5권</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>오디세이아</strong> (호메로스, 천병희 역) &mdash; 원전을 직접 읽는 경험</li>
          <li><strong>천의 얼굴을 가진 영웅</strong> (조지프 캠벨) &mdash; 영웅의 여정 구조를 체계화한 고전</li>
          <li><strong>그릭</strong> (스티븐 프라이) &mdash; 그리스 신화를 유머와 통찰로 재해석</li>
          <li><strong>스토아 수업</strong> (마시모 피글리우치) &mdash; 인내와 지혜를 철학적으로 확장</li>
          <li><strong>습관의 힘</strong> (찰스 두히그) &mdash; 세이렌·로토스 챕터의 과학적 배경</li>
        </ul>

        <blockquote className="border-l-4 border-indigo-400 pl-4 py-2 my-4 bg-indigo-50 dark:bg-indigo-950 rounded-r-lg">
          <p><strong>부록 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>30일 플래너는 하루 15~20분 투자 기준 &mdash; 작지만 꾸준한 실천이 방향을 바꾼다.</li>
            <li>오디세이아의 가장 큰 교훈: <strong>&ldquo;항해는 끝나지 않는다.&rdquo;</strong></li>
            <li>노를 놓지 마라. 이타카가 기다리고 있다. 당신의 다음 오디세이는 이 순간 시작된다.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
];

const updateLogs: UpdateLog[] = [
  {
    version: 1,
    date: "2026-09-20",
    changes: ["초판 발행: 오디세이아 인생 항해술 10챕터 + 부록"],
  },
];

export default function OdysseyLifeRead() {
  return (
    <GuideBook
      bookId="odyssey-life"
      title="오디세이아, 3,000년 전 영웅이 알려주는 인생 항해술"
      emoji="⚓"
      subtitle="호메로스의 서사시에서 배우는 리더십·인내·유혹·귀환의 심리학"
      topItems={topItems}
      sections={sections}
      updateLogs={updateLogs}
      currentVersion={1}
    />
  );
}
