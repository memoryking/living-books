import GuideBook from "@/components/GuideBook";
import type {
  TopItem,
  ContentSection,
  UpdateLog,
} from "@/components/GuideBook";

export const metadata = {
  title: "망하지 않는 사업 아이디어 검증법 — 본문 | 살아있는 정보책",
  description:
    "시장 조사부터 MVP·피벗까지 — 실패 확률을 줄이는 데이터 중심 검증 시스템. 서문 + 10개 챕터 + 부록 전문. 페르소나, 가설 검증, A/B 테스트, MVP, 애자일, 피벗, 피드백 루프, 스케일링, 지속적 검증, 90일 로드맵까지.",
};

const topItems: TopItem[] = [
  {
    number: 1,
    title: "내게 맞는 시장 찾기: 페르소나부터 틈새시장까지",
    oneLiner: "'모든 사람을 위한 제품'은 '아무도 위한 것이 아닌 제품'이다.",
    description:
      "이상적 고객 페르소나(인구통계+심리통계), 표면적 니즈·숨겨진 문제·근본 욕구 구분, 6가지 시장 조사 방법, 경쟁사 분석 3단계, 7가지 틈새시장 발견법.",
    situation: "내 아이디어가 누구를 위한 건지 명확하지 않을 때",
    action: "타겟 페르소나를 인구통계 5항목 + 심리통계 5항목으로 작성하세요.",
    mission: "스마트스토어 별점 1~2점 리뷰 20개를 읽고 고객의 진짜 문제를 정리하세요.",
  },
  {
    number: 2,
    title: "가설 검증하기: 검증되지 않은 믿음이 사업을 망친다",
    oneLiner: "검증하지 않은 가정 위에 사업을 세우는 것은 모래 위에 빌딩을 짓는 것이다.",
    description:
      "4가지 가정 유형(시장·고객·제품·비즈니스 모델), 가정 우선순위 매트릭스, 실험 설계 6단계, 토스의 핵심 가설 검증 사례.",
    situation: "'내가 필요하면 남들도 필요할 것'이라는 확증 편향에 빠져 있을 때",
    action: "내 사업 아이디어의 가정을 4가지 유형별로 최소 2개씩 적어보세요.",
    mission: "'가장 위험한 가정' 1개를 골라 다음 주까지 검증할 실험을 설계하세요.",
  },
  {
    number: 3,
    title: "심화 검증 기법: A/B 테스트, 파일럿, 스모크 테스트",
    oneLiner: "'말'이 아니라 '행동'을 측정하라 — 행동 데이터가 설문보다 신뢰도가 높다.",
    description:
      "A/B 테스팅 핵심 원칙과 활용 영역, 파일럿 프로그램 설계 5단계, 스모크 테스트(랜딩페이지) 실행법, 전환율 기준표, 한국 실전 사례.",
    situation: "설문과 인터뷰만으로는 확신이 서지 않을 때",
    action: "3가지 기법 중 지금 당장 실행할 수 있는 1가지를 선택하세요.",
    mission: "랜딩페이지를 아임웹이나 노션으로 만들고 소액 광고를 집행하세요.",
  },
  {
    number: 4,
    title: "최소 기능 제품(MVP) 만들기: 완벽보다 속도가 먼저",
    oneLiner: "MVP의 목적은 '멋진 제품'이 아니라 '이 아이디어가 통하는지' 확인하는 것이다.",
    description:
      "5가지 MVP 유형(컨시어지·위자드오브오즈·랜딩페이지·싱글피처·패치워크) 비교, 3가지 버킷 범위 정의, 3단계 로드맵, 배달의민족 초기 사례.",
    situation: "완벽한 제품을 만들려다 출시가 계속 늦어질 때",
    action: "내 아이디어의 기능을 3가지 버킷(필수/있으면 좋은/나중에)으로 분류하세요.",
    mission: "버킷 1(필수) 기능이 3개를 넘으면 다시 뺄셈하세요.",
  },
  {
    number: 5,
    title: "애자일 MVP 개발: 단순함과 정교함의 균형",
    oneLiner: "애자일의 핵심은 속도가 아니라 학습 주기의 단축이다.",
    description:
      "애자일 4대 원칙 MVP 적용법, 단순함 vs 정교함 균형점('10분 테스트'), 사용자 피드백 수집 5가지 방법, Build-Measure-Learn 루프 2주 사이클.",
    situation: "MVP를 얼마나 단순하게 만들어야 할지 판단이 어려울 때",
    action: "첫 번째 스프린트(2주) 계획을 세워보세요.",
    mission: "'이번 2주 동안 고객에게 보여줄 가장 중요한 한 가지'를 정하고 집중하세요.",
  },
  {
    number: 6,
    title: "피벗인가 지속인가: 방향 전환의 기술",
    oneLiner: "피벗은 실패가 아니라 데이터 기반의 전략적 방향 전환이다.",
    description:
      "Slack·Instagram·배달의민족 피벗 사례, 지속 신호 5가지 vs 피벗 신호 6가지, 피벗의 10가지 유형, MVP에서 완전 제품으로 전환 4단계, PMF 확인법.",
    situation: "MVP 반응이 기대에 못 미쳐 계속할지 방향을 바꿀지 고민될 때",
    action: "지속 신호 5개와 피벗 신호 6개를 솔직하게 체크하세요.",
    mission: "부록의 '피벗 vs 지속 결정 프레임워크'로 냉정하게 판단하세요.",
  },
  {
    number: 7,
    title: "고객 피드백 루프: 듣고, 분석하고, 실행하라",
    oneLiner: "피드백 없는 제품 개발은 눈 감고 운전하는 것이다.",
    description:
      "피드백 시스템 5단계(수집→분류→분석→실행→확인), 설문 기법 비교표(리커트·스킵로직·마이크로설문 등), ICE 스코어링, 확증 편향 방지 4전략, '시끄러운 소수' 주의법.",
    situation: "고객 의견을 듣고 있다고 생각하지만 체계적 시스템이 없을 때",
    action: "지금 받고 있는 피드백을 5가지 유형으로 분류해보세요.",
    mission: "노션 DB나 에어테이블에 피드백 수집 허브를 만드세요.",
  },
  {
    number: 8,
    title: "검증에서 실행으로: MVP를 확장 가능한 사업으로",
    oneLiner: "10명에게 통한 것이 10,000명에게도 통하려면 체계적인 확장 전략이 필요하다.",
    description:
      "확장의 4축(기술 인프라·제품 전략·팀·재정), CAC·LTV·소진율 핵심 재무 지표, 한국 스타트업 자금 조달 단계(프리시드~시리즈B+), 정부 지원(팁스·K-스타트업) 활용법.",
    situation: "MVP가 검증되었지만 어떻게 확장해야 할지 막막할 때",
    action: "LTV/CAC 비율을 계산해보세요 (3 미만이면 확장보다 개선 먼저).",
    mission: "4가지 확장 축 중 현재 가장 취약한 1가지를 파악하고 개선 계획을 세우세요.",
  },
  {
    number: 9,
    title: "지속적 검증: 시장은 멈추지 않으니 검증도 멈추면 안 된다",
    oneLiner: "MVP를 검증했다고 끝이 아니다 — 시장은 끊임없이 변한다.",
    description:
      "주간·월간·분기별 모니터링 체계, NLP 기반 감성 분석, 예측 분석(이탈·LTV·수요), 코호트 분석, 애자일 마인드셋 조직 문화, 한국 스타트업 생태계 자원.",
    situation: "'MVP 검증 끝났으니 이제 개발에만 집중하자'고 생각할 때",
    action: "주간/월간/분기별 검증 루틴을 캘린더에 등록하세요.",
    mission: "주간 30분(월요일 오전), 월간 2시간(첫째 주 금요일)을 습관으로 만드세요.",
  },
  {
    number: 10,
    title: "90일 아이디어 검증 로드맵: 오늘부터 시작하기",
    oneLiner: "완벽한 준비를 기다리면 영원히 시작하지 못한다. 부족한 채로 시작하고 가면서 배워라.",
    description:
      "Phase 1(시장 조사+페르소나, 1~30일), Phase 2(가설 검증+MVP, 31~60일), Phase 3(피드백+피벗/확장, 61~90일) — 주차별 체크리스트와 판단 기준.",
    situation: "모든 이론은 배웠지만 '어디서부터 시작하지?'가 막막할 때",
    action: "캘린더를 열고 오늘부터 12주를 표시하세요.",
    mission: "1주차 할 일 3가지를 내일 시작할 수 있도록 준비하세요.",
  },
];

const sections: ContentSection[] = [
  {
    id: "preface",
    title: "들어가며 — 사업 실패의 42%는 '시장이 원하지 않는 것을 만들었기 때문'",
    body: (
      <>
        <p>CB Insights가 101개 스타트업의 실패 원인을 분석한 결과, <strong>1위는 &lsquo;시장 수요 부재(No Market Need)&rsquo;로 42%</strong>를 차지했습니다. 자금 부족(29%)도, 팀 문제(23%)도 아닌 &quot;아무도 원하지 않는 것을 만들었다&quot;가 압도적 1위였습니다.</p>

        <p>한국도 예외가 아닙니다. 중소벤처기업부 통계에 따르면 창업 기업의 <strong>5년 생존율은 약 29%</strong>. 10곳 중 7곳이 5년 안에 문을 닫으며, 그 핵심 원인은 검증 없이 시작한 사업입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">이 책의 구성</h3>
        <p><strong>1~3장</strong> — 시장을 이해하고, 가설을 세우고, 심화 검증 기법을 다룹니다.</p>
        <p><strong>4~5장</strong> — MVP를 만들고 애자일하게 개발하는 방법을 배웁니다.</p>
        <p><strong>6~7장</strong> — 피벗 결정과 고객 피드백 루프를 구축합니다.</p>
        <p><strong>8~10장</strong> — 확장, 지속적 검증, 그리고 90일 실행 계획을 제시합니다.</p>
        <p><strong>부록</strong> — 바로 복사해서 쓸 수 있는 실행 키트 8종 + FAQ 10선.</p>

        <blockquote className="border-l-4 border-cyan-400 pl-4 py-2 my-4 bg-cyan-50 dark:bg-cyan-950 rounded-r-lg">
          <p><strong>서문 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>사업 실패 1위 원인은 &lsquo;시장 수요 부재&rsquo; — 검증 없이 시작하면 42%가 실패한다.</li>
            <li>이 책은 읽고 끝나는 책이 아니라, 읽으면서 바로 실행하는 워크북이다.</li>
            <li><strong>1~3장이 모든 챕터의 기초이므로 반드시 먼저 읽으세요.</strong></li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch1",
    title: "Ch.1 내게 맞는 시장 찾기: 페르소나부터 틈새시장까지",
    body: (
      <>
        <p>&quot;모든 사람을 위한 제품&quot;은 &quot;아무도 위한 것이 아닌 제품&quot;입니다. 시장 조사의 첫 단계는 <strong>이상적 고객 페르소나(Ideal Customer Persona)</strong>를 구체적으로 그리는 것입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">페르소나의 두 축</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>인구통계(Demographics)</strong> — 나이, 성별, 직업, 소득, 거주지</li>
          <li><strong>심리통계(Psychographics)</strong> — 가치관, 라이프스타일, 고민, 목표</li>
        </ul>
        <p>인구통계는 &quot;누구인가&quot;를, 심리통계는 &quot;왜 행동하는가&quot;를 알려줍니다. 네이버 카페 게시글, 블라인드 댓글, 크몽 구매 후기에서 심리통계 단서를 얻을 수 있습니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">고객의 진짜 문제 3층 구조</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>표면적 니즈</strong> — 고객이 직접 말하는 것 (&quot;회계 프로그램이 필요해요&quot;)</li>
          <li><strong>숨겨진 문제점</strong> — 진짜 불편함 (&quot;매달 세금 신고 때마다 스트레스받아요&quot;)</li>
          <li><strong>근본 욕구</strong> — 궁극적으로 원하는 것 (&quot;사업에만 집중하고 싶어요&quot;)</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">7가지 틈새시장 발견법</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>과소 서비스 시장</strong> — 기존 서비스가 충분히 만족시키지 못하는 고객군</li>
          <li><strong>지역 특화</strong> — 전국 서비스의 지역 맞춤 버전</li>
          <li><strong>가격 격차</strong> — 프리미엄과 저가 사이의 빈 공간</li>
          <li><strong>기술 전환기</strong> — AI, 블록체인 등 새 기술이 만드는 시장 재편</li>
          <li><strong>규제 변화</strong> — 새 법규가 만드는 새 수요</li>
          <li><strong>인구 변화</strong> — 1인 가구 증가, 고령화, MZ세대 가치관 변화</li>
          <li><strong>교차 시장</strong> — 두 시장의 교집합에서 새 기회 발견</li>
        </ol>

        <blockquote className="border-l-4 border-cyan-400 pl-4 py-2 my-4 bg-cyan-50 dark:bg-cyan-950 rounded-r-lg">
          <p><strong>1챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>페르소나 없이 시장 조사를 하면 방향 없는 탐색이 된다.</li>
            <li>별점 1~2점 리뷰에 고객의 진짜 문제가 담겨 있다.</li>
            <li><strong>오늘부터 실행</strong>: 페르소나를 인구통계 5항목 + 심리통계 5항목으로 작성하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch2",
    title: "Ch.2 가설 검증하기: 검증되지 않은 믿음이 사업을 망친다",
    body: (
      <>
        <p>모든 사업 아이디어에는 <strong>검증되지 않은 가정(Unvalidated Assumptions)</strong>이 숨어 있습니다. &quot;고객이 이 기능을 원할 것이다&quot;, &quot;월 5만 원이면 기꺼이 낼 것이다&quot; — 이 모든 것이 가정입니다. 검증하지 않은 가정 위에 사업을 세우는 것은 <strong>모래 위에 빌딩을 짓는 것</strong>과 같습니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">4가지 가정 유형</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>시장 가정</strong> — 시장 규모(TAM/SAM/SOM), 성장률, 진입 장벽</li>
          <li><strong>고객 가정</strong> — 문제의 실재성, 심각도, 지불 의향과 능력</li>
          <li><strong>제품 가정</strong> — 솔루션 효과성, 기술적 구현 가능성, 선호 형태</li>
          <li><strong>비즈니스 모델 가정</strong> — 수익 모델, CAC/LTV, 유통 채널 효과</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">실험 설계 6단계</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>가설 명확화</strong> — &quot;[타겟 고객]이 [특정 문제] 때문에 [제안 솔루션]에 [구체적 행동]을 할 것이다&quot;</li>
          <li><strong>성공 기준 정의</strong> — 검증 전에 숫자로 미리 정한다</li>
          <li><strong>실험 방법 선택</strong> — 인터뷰, 설문, 랜딩페이지, 사전 판매 중 선택</li>
          <li><strong>표본 크기 결정</strong> — 정성 최소 10~15명, 정량 최소 100명</li>
          <li><strong>실험 실행</strong> — 정해진 기간 내 집중적으로</li>
          <li><strong>결과 분석</strong> — 성공 기준과 비교하여 진행/수정/중단 결정</li>
        </ol>

        <blockquote className="border-l-4 border-cyan-400 pl-4 py-2 my-4 bg-cyan-50 dark:bg-cyan-950 rounded-r-lg">
          <p><strong>2챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>초기 토스는 &quot;공인인증서 없는 간편 송금&quot; 가정을 가장 먼저 검증했다.</li>
            <li>&quot;가장 위험한 가정&quot;부터 검증하라 — 이것이 틀리면 나머지 모든 것이 무의미.</li>
            <li><strong>오늘부터 실행</strong>: 가정을 4유형별로 2개씩 적고, 가장 위험한 1개의 실험을 설계하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch3",
    title: "Ch.3 심화 검증 기법: A/B 테스트, 파일럿, 스모크 테스트",
    body: (
      <>
        <p>1~2장에서 시장을 파악하고 가설을 세웠다면, 이제 <strong>더 정교한 검증 기법</strong>으로 확신의 수준을 높일 차례입니다. &quot;말&quot;이 아니라 &quot;행동&quot;을 측정하는 3가지 기법을 소개합니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">A/B 테스팅 핵심 원칙</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li>한 번에 <strong>하나의 변수만</strong> 바꾼다</li>
          <li>충분한 표본 크기 확보 (최소 각 그룹 100명 이상)</li>
          <li>통계적 유의성 확인 (95% 신뢰 수준 이상)</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">파일럿 프로그램 설계 5단계</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>참여자 선정</strong> — 얼리어답터 5~20곳/명 모집</li>
          <li><strong>기간 설정</strong> — 보통 2~4주</li>
          <li><strong>측정 지표 정의</strong> — 사용 빈도, 만족도, NPS, 유료 전환 의향</li>
          <li><strong>피드백 수집 구조화</strong> — 주 1회 체크인 미팅 또는 짧은 설문</li>
          <li><strong>결과 분석 및 의사 결정</strong> — 사전 기준과 비교</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">스모크 테스트 전환율 기준</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>이메일 등록</strong> — 약한 신호 2% 미만 / 보통 2~5% / 강한 신호 5% 이상</li>
          <li><strong>사전 결제</strong> — 약한 신호 0.5% 미만 / 보통 0.5~2% / 강한 신호 2% 이상</li>
          <li><strong>유료 사전 주문</strong> — 약한 신호 0.1% 미만 / 보통 0.1~1% / 강한 신호 1% 이상</li>
        </ul>

        <blockquote className="border-l-4 border-cyan-400 pl-4 py-2 my-4 bg-cyan-50 dark:bg-cyan-950 rounded-r-lg">
          <p><strong>3챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>예산이 적으면 스모크 테스트, 프로토타입이 있으면 파일럿, 두 옵션 사이 고민이면 A/B 테스트.</li>
            <li>한국 도구: 네이버 광고 A/B 테스트, 카카오 비즈보드, 메타 분할 테스트.</li>
            <li><strong>오늘부터 실행</strong>: 3가지 기법 중 1가지를 선택하고 이번 주 안에 실행하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch4",
    title: "Ch.4 최소 기능 제품(MVP) 만들기: 완벽보다 속도가 먼저",
    body: (
      <>
        <p>MVP(Minimum Viable Product)는 <strong>핵심 가치를 전달할 수 있는 가장 단순한 형태의 제품</strong>입니다. &quot;최소한&quot;은 품질이 낮다는 뜻이 아니라, 핵심 가치 하나를 확실하게 전달하되 나머지는 과감히 빼라는 뜻입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">5가지 MVP 유형</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>컨시어지 MVP</strong> — 자동화 없이 수동으로 서비스 제공 (1~2주, 매우 낮은 비용)</li>
          <li><strong>위자드 오브 오즈 MVP</strong> — 겉은 자동화, 뒤에서 수동 처리 (2~4주)</li>
          <li><strong>랜딩페이지 MVP</strong> — 제품 설명 페이지로 수요 측정 (1~3일)</li>
          <li><strong>싱글 피처 MVP</strong> — 핵심 기능 하나만 구현 (4~8주)</li>
          <li><strong>패치워크 MVP</strong> — 기존 도구(노션+재피어+스트라이프) 조합 (1~2주)</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">범위 정의: 3가지 버킷</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>버킷 1 — 필수(Must Have)</strong> — 없으면 핵심 가치 전달 불가. MVP에 반드시 포함.</li>
          <li><strong>버킷 2 — 있으면 좋은(Nice to Have)</strong> — UX 향상이지만 없어도 핵심 가치 전달 가능.</li>
          <li><strong>버킷 3 — 나중에(Later)</strong> — 확장 기능. 시장 검증 후 로드맵에 배치.</li>
        </ul>

        <blockquote className="border-l-4 border-cyan-400 pl-4 py-2 my-4 bg-cyan-50 dark:bg-cyan-950 rounded-r-lg">
          <p><strong>4챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>초기 배달의민족은 전화번호부 앱이었다 — 핵심 가치 검증에 충분했다.</li>
            <li>MVP의 핵심은 과감한 뺄셈. 버킷 1이 3개를 넘으면 다시 질문하라.</li>
            <li><strong>오늘부터 실행</strong>: 내 아이디어의 기능을 3가지 버킷으로 분류하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch5",
    title: "Ch.5 애자일 MVP 개발: 단순함과 정교함의 균형",
    body: (
      <>
        <p>애자일(Agile)은 단순히 &quot;빠르게 만드는 것&quot;이 아닙니다. <strong>빠르게 만들고, 빠르게 보여주고, 빠르게 배우는 것</strong>입니다. 핵심은 속도가 아니라 <strong>학습 주기의 단축</strong>입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">MVP에 적용하는 애자일 4원칙</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>동작하는 제품</strong>이 완벽한 문서보다 낫다</li>
          <li><strong>고객 협업</strong>이 계약 협상보다 중요하다</li>
          <li><strong>변화에 대응</strong>하는 것이 계획을 따르는 것보다 낫다</li>
          <li><strong>작동하는 기능의 지속적 전달</strong>이 핵심이다</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">균형점 찾기 — &quot;10분 테스트&quot;</h3>
        <p>MVP를 처음 보는 사람이 <strong>10분 안에</strong> 이 3가지를 이해할 수 있으면 충분합니다:</p>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li>이 제품이 어떤 문제를 해결하는지</li>
          <li>어떻게 사용하는지</li>
          <li>왜 기존 방법보다 나은지</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">Build-Measure-Learn 루프</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>Build</strong> — 가설을 검증할 최소한의 기능을 만든다</li>
          <li><strong>Measure</strong> — 허영 지표가 아닌 실행 지표(리텐션, 전환율, NPS)에 집중</li>
          <li><strong>Learn</strong> — &quot;다음에 무엇을 바꿔야 하는가?&quot;</li>
        </ul>
        <p>이 루프를 <strong>2주 간격</strong>으로 반복하면, 3개월에 6번의 학습 주기 = 전통적 방식의 6개월치 학습입니다.</p>

        <blockquote className="border-l-4 border-cyan-400 pl-4 py-2 my-4 bg-cyan-50 dark:bg-cyan-950 rounded-r-lg">
          <p><strong>5챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>2주마다 고객이 체감할 수 있는 개선을 하나라도 보여주라.</li>
            <li>&quot;10분 테스트&quot; 3가지가 전달되면 나머지는 있으면 좋은 것이다.</li>
            <li><strong>오늘부터 실행</strong>: 첫 스프린트(2주) 계획을 세우고 &quot;가장 중요한 한 가지&quot;에 집중하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch6",
    title: "Ch.6 피벗인가 지속인가: 방향 전환의 기술",
    body: (
      <>
        <p>피벗(Pivot)은 실패가 아닙니다. <strong>&quot;이 방향이 아니라는 것을 데이터로 확인하고, 더 나은 방향으로 전환하는 전략적 의사 결정&quot;</strong>입니다. Slack은 게임 회사에서, Instagram은 체크인 앱에서, 배달의민족은 전화번호부 앱에서 시작했습니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">지속 신호 vs 피벗 신호</h3>
        <p><strong>지속해야 할 신호:</strong></p>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li>핵심 지표(리텐션, NPS)가 꾸준히 개선 중</li>
          <li>고객이 자발적으로 추천 (구전 계수 &gt; 0.5)</li>
          <li>유료 전환율이 업계 평균 이상</li>
          <li>&quot;이거 없으면 곤란하다&quot; 반응이 나온다</li>
        </ul>
        <p><strong>피벗해야 할 신호:</strong></p>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li>3개월 이상 핵심 지표 정체/하락</li>
          <li>CAC가 지속 상승, 유료 전환 거의 없음</li>
          <li>&quot;있으면 좋지만 없어도 된다&quot; 반응 반복</li>
          <li>경쟁사가 압도적 우위를 점했다</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">MVP에서 완전 제품으로: 전환 4단계</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>PMF 확인</strong> — 숀 엘리스 테스트: &quot;이 제품이 없으면?&quot; 40% 이상이 &quot;매우 실망&quot; 응답</li>
          <li><strong>핵심 기능 강화</strong> — 가장 많이 사용된 기능에 집중 투자</li>
          <li><strong>보조 기능 추가</strong> — 버킷 2 기능을 우선순위에 따라 추가</li>
          <li><strong>확장 준비</strong> — 기술 인프라, 운영 프로세스, 팀 구조 정비</li>
        </ol>

        <blockquote className="border-l-4 border-cyan-400 pl-4 py-2 my-4 bg-cyan-50 dark:bg-cyan-950 rounded-r-lg">
          <p><strong>6챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>피벗의 10가지 유형(줌인·줌아웃·고객세그먼트·채널·수익모델 등)을 알아야 올바른 방향 전환이 가능하다.</li>
            <li>지속 신호 3개 이상 + 피벗 신호 2개 이하 &rarr; 지속. 반대면 피벗 검토.</li>
            <li><strong>오늘부터 실행</strong>: 지속 신호 5개와 피벗 신호 6개를 솔직하게 체크하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch7",
    title: "Ch.7 고객 피드백 루프: 듣고, 분석하고, 실행하라",
    body: (
      <>
        <p>간헐적으로 고객 메일을 읽거나 앱 리뷰를 훑어보는 것은 피드백 루프가 아닙니다. 진짜 피드백 루프란 <strong>듣고 &rarr; 분류하고 &rarr; 분석하고 &rarr; 실행하고 &rarr; 확인하는 연속적 과정</strong>입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">피드백 시스템 5단계</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>수집(Collect)</strong> — 능동적(설문, 인터뷰) + 수동적(리뷰, 문의) + 행동 데이터</li>
          <li><strong>분류(Categorize)</strong> — 버그/기능요청/사용성/칭찬/이탈 5유형</li>
          <li><strong>분석(Analyze)</strong> — 빈도·심각도·트렌드·세그먼트 분석 병행</li>
          <li><strong>실행(Act)</strong> — ICE 스코어링(영향력+확신도+용이성)으로 우선순위 결정</li>
          <li><strong>확인(Verify)</strong> — 관련 지표 개선 여부, 같은 불만 감소 여부 확인</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">확증 편향 방지 4전략</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>악마의 대변인</strong> — &quot;왜 이 데이터가 틀릴 수 있는가?&quot; 질문하는 역할</li>
          <li><strong>부정적 피드백 우선</strong> — 긍정보다 부정 피드백을 먼저 읽기</li>
          <li><strong>정량 교차 확인</strong> — &quot;좋다고 말한 기능&quot;의 실제 사용 데이터 비교</li>
          <li><strong>외부 시각 도입</strong> — 팀 외부 사람에게 데이터 해석 요청</li>
        </ul>

        <blockquote className="border-l-4 border-cyan-400 pl-4 py-2 my-4 bg-cyan-50 dark:bg-cyan-950 rounded-r-lg">
          <p><strong>7챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>&quot;시끄러운 소수(Vocal Minority)&quot;에 휘둘리지 마라 — 3명의 강력한 요구보다 100명의 행동 데이터가 신뢰할 수 있다.</li>
            <li>모든 피드백을 한곳(노션 DB, 에어테이블)에 모아야 소음이 아닌 신호가 된다.</li>
            <li><strong>오늘부터 실행</strong>: 현재 피드백을 5가지 유형으로 분류하고 가장 많은 유형을 확인하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch8",
    title: "Ch.8 검증에서 실행으로: MVP를 확장 가능한 사업으로",
    body: (
      <>
        <p>MVP가 통했다고 사업이 성공하는 것은 아닙니다. <strong>10명에게 통한 것이 10,000명에게도 통하려면</strong> 4가지 축에서 동시에 확장해야 합니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">확장의 4축</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>기술 인프라</strong> — 클라우드(AWS, NCP), 자동화, 모니터링, 보안(PIPA 준수)</li>
          <li><strong>제품 전략</strong> — 깊이 확장(핵심 기능 강화) + 폭 확장(새 기능/시장)</li>
          <li><strong>팀</strong> — 현재 병목 영역부터 채용, 데이터 기반 의사 결정 문화</li>
          <li><strong>재정</strong> — CAC, LTV, 소진율(Burn Rate), 런웨이 12~18개월 확보</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">한국 스타트업 자금 조달 단계</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>프리시드</strong> (1,000만~5,000만 원) — 엔젤, 액셀러레이터. 아이디어+팀 필요.</li>
          <li><strong>시드</strong> (5,000만~5억 원) — 초기 VC, 팁스(TIPS). MVP+초기 트랙션 필요.</li>
          <li><strong>시리즈 A</strong> (5억~50억 원) — VC. PMF+성장 지표 필요.</li>
          <li><strong>시리즈 B+</strong> (50억 원 이상) — 대형 VC. 확장 중인 매출 필요.</li>
        </ul>

        <blockquote className="border-l-4 border-cyan-400 pl-4 py-2 my-4 bg-cyan-50 dark:bg-cyan-950 rounded-r-lg">
          <p><strong>8챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>LTV/CAC 비율 3 미만이면 확장보다 단위 경제학 개선이 먼저다.</li>
            <li>팁스(TIPS)는 최대 5억 원까지 R&amp;D 자금 지원 — 적극 활용하라.</li>
            <li><strong>오늘부터 실행</strong>: LTV/CAC 비율을 계산하고, 4가지 축 중 가장 취약한 1가지를 파악하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch9",
    title: "Ch.9 지속적 검증: 시장은 멈추지 않으니 검증도 멈추면 안 된다",
    body: (
      <>
        <p>시장은 끊임없이 변합니다. 쿠팡이 로켓배송을 도입했을 때, 기존 이커머스 업체들은 &quot;배송 속도는 그렇게 중요하지 않다&quot;고 판단했습니다. <strong>지속적으로 모니터링하지 않은 결과, 시장 점유율을 크게 빼앗겼습니다.</strong></p>

        <h3 className="text-xl font-bold mt-8 mb-4">정기적 시장 모니터링 체계</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>주간 30분</strong> — 핵심 지표 대시보드, 고객 피드백 요약, 경쟁사 동향</li>
          <li><strong>월간 2시간</strong> — 코호트별 리텐션, NPS 추이, 세그먼트별 행동 변화</li>
          <li><strong>분기별 반나절</strong> — TAM/SAM/SOM 재산정, 경쟁 환경 재분석, 피벗 필요성 평가</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">고급 분석 기법 3가지</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>NLP 기반 감성 분석</strong> — 수천 개 피드백에서 긍정/부정/중립 트렌드 자동 파악</li>
          <li><strong>예측 분석</strong> — 이탈 예측, LTV 예측, 수요 예측 (엑셀 회귀 분석으로 시작)</li>
          <li><strong>코호트 분석</strong> — 가입 시점별 그룹화하여 행동 패턴 비교</li>
        </ul>

        <blockquote className="border-l-4 border-cyan-400 pl-4 py-2 my-4 bg-cyan-50 dark:bg-cyan-950 rounded-r-lg">
          <p><strong>9챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>검증은 일회성 이벤트가 아니라 사업 전체 생애 주기에 걸친 시스템이다.</li>
            <li>데이터 민주화 + 가설 중심 업무 + 빠른 실패·빠른 학습 = 애자일 조직 문화.</li>
            <li><strong>오늘부터 실행</strong>: 주간/월간/분기별 검증 루틴을 캘린더에 등록하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "ch10",
    title: "Ch.10 90일 아이디어 검증 로드맵: 오늘부터 시작하기",
    body: (
      <>
        <p>90일은 <strong>충분히 길어서 의미 있는 검증이 가능하고, 충분히 짧아서 긴장감을 유지</strong>할 수 있는 기간입니다. 3개월 안에 시장성을 판단하지 못한다면, 문제는 기간이 아니라 방법에 있습니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">Phase 1: 시장 조사 + 페르소나 (1~30일)</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>1~2주</strong> — 아이디어 한 문장 정의, 경쟁사 20개 리스트업, 인터뷰 10명</li>
          <li><strong>3~4주</strong> — 설문 100명, 경쟁 분석 3단계, 가설 수립, Go/Pivot/Kill 결정</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">Phase 2: 가설 검증 + MVP (31~60일)</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>5~6주</strong> — 스모크 테스트 + A/B 테스트, MVP 유형 선택 + 범위 정의</li>
          <li><strong>7~8주</strong> — MVP 제작, 얼리어답터 20~50명 공개, 핵심 지표 측정</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">Phase 3: 피드백 + 피벗/확장 (61~90일)</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>9~10주</strong> — 피드백 루프 5단계, Build-Measure-Learn 1회전, NPS 재측정</li>
          <li><strong>11~12주</strong> — 피벗 vs 지속 결정, 90일 종합 리포트, 다음 90일 계획</li>
        </ul>

        <blockquote className="border-l-4 border-cyan-400 pl-4 py-2 my-4 bg-cyan-50 dark:bg-cyan-950 rounded-r-lg">
          <p><strong>10챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>매 Phase 끝에 체크포인트로 &quot;데이터 기반 판단&quot;을 반드시 수행하라.</li>
            <li>이 로드맵은 하루 1~2시간 투자 기준 — 직장 다니면서도 가능하다.</li>
            <li><strong>오늘부터 실행</strong>: 캘린더를 열고 오늘부터 12주를 표시하고, 1주차 할 일 3가지를 준비하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "appendix",
    title: "부록 — 복사해 쓰는 아이디어 검증 실행 키트",
    body: (
      <>
        <p>이 부록에는 책에서 다룬 모든 프레임워크를 <strong>바로 복사해서 사용할 수 있는 템플릿</strong>으로 정리했습니다. 프린트하거나 노션에 복사해서 활용하세요.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">8종 템플릿 목록</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>고객 페르소나 워크시트</strong> — 인구통계 + 심리통계 + 문제-해결 맵</li>
          <li><strong>경쟁사 분석 매트릭스</strong> — 기능·가격·UX·고객평점 비교표</li>
          <li><strong>가정 우선순위 매트릭스</strong> — 불확실성 x 영향력 점수로 검증 순서 결정</li>
          <li><strong>실험 설계 템플릿</strong> — 6단계 프로세스(가설~결과 분석)</li>
          <li><strong>MVP 유형 선택 가이드</strong> — 상황별 체크리스트 + 버킷 범위 정의</li>
          <li><strong>피드백 수집 체크리스트</strong> — 채널 설정 + 주간 리뷰 + ICE 스코어링</li>
          <li><strong>피벗 vs 지속 결정 프레임워크</strong> — 신호 체크 + 판단 기준 + 피벗 시 결정 사항</li>
          <li><strong>90일 검증 로드맵 캘린더</strong> — 주차별 핵심 활동 + 완료 여부 체크</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">FAQ 핵심 5선</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>아이디어가 여러 개일 때</strong> — 랜딩페이지 스모크 테스트를 각각 실행, 전환율이 가장 높은 것에 집중</li>
          <li><strong>경쟁사가 너무 많을 때</strong> — 경쟁사가 많다 = 시장이 존재한다는 증거. 차별화 틈이 있는지가 핵심</li>
          <li><strong>돈이 없어도 검증 가능한가</strong> — 컨시어지·랜딩페이지·패치워크 MVP 모두 50만 원 이하 가능</li>
          <li><strong>검증 결과가 애매하면</strong> — &quot;약간 긍정적&quot;은 대부분 부정적. 정말 통하면 명확한 신호가 온다</li>
          <li><strong>검증 후 실패로 판명되면</strong> — 3개월 만에 &quot;안 된다&quot;를 아는 것은 1년과 수천만 원을 절약한 것</li>
        </ul>

        <blockquote className="border-l-4 border-cyan-400 pl-4 py-2 my-4 bg-cyan-50 dark:bg-cyan-950 rounded-r-lg">
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

export default function IdeaValidationReadPage() {
  return (
    <GuideBook
      bookId="idea-validation"
      title="망하지 않는 사업 아이디어 검증법"
      emoji="🔬"
      subtitle="시장 조사부터 MVP·피벗까지 — 실패 확률을 줄이는 데이터 중심 검증 시스템"
      topItems={topItems}
      sections={sections}
      updateLogs={updateLogs}
      currentVersion={1}
    />
  );
}
