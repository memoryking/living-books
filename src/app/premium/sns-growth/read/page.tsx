import GuideBook from "@/components/GuideBook";
import type {
  TopItem,
  ContentSection,
  UpdateLog,
} from "@/components/GuideBook";

export const metadata = {
  title: "돈 한푼 들이지 않고 SNS 계정 키우기 — 본문 | 살아있는 정보책",
  description:
    "광고비 0원, 참여율과 알고리즘만으로 성장하는 60일 전략. 서문 + 10개 챕터 + 부록 전문. 플랫폼 선택, 첫 100명, AIDA 콘텐츠, 해시태그·SEO, 소통 전략, 콘텐츠 캘린더, 협업, 분석, 60일 로드맵까지.",
};

const topItems: TopItem[] = [
  {
    number: 1,
    title: "0원으로 시작하는 SNS 성장의 원리",
    oneLiner: "팔로워 50,000명인데 좋아요 30개인 계정보다 500명인데 댓글 50개인 계정이 더 강하다.",
    description:
      "참여율 계산법과 플랫폼별 기준, 80/20 법칙(가치 80%+홍보 20%), 일관성과 최적 게시 시간대, 메인 플랫폼 1개 집중 원칙, 무료 성장 3엔진(가치 콘텐츠·커뮤니티·알고리즘).",
    situation: "팔로워 수에 집착하며 '왜 안 늘지?' 고민할 때",
    action: "최근 게시물 10개의 참여율을 계산하고 플랫폼 평균과 비교하세요.",
    mission: "메인 플랫폼 1개를 선택하고, 주 3회 게시 일정을 캘린더에 등록하세요.",
  },
  {
    number: 2,
    title: "나에게 맞는 플랫폼 찾기 — 6대 SNS 완전 비교",
    oneLiner: "모든 플랫폼을 다 하려고 하면, 어디서도 제대로 못 한다.",
    description:
      "인스타그램·유튜브·네이버 블로그·틱톡·카카오톡 채널·스레드 6대 플랫폼 비교, 연령대·콘텐츠 형태·성장 속도·수익화별 분석, 플랫폼 선택 의사결정 플로우, 추천 조합 TOP 5.",
    situation: "인스타도 해야 하고 유튜브도 해야 할 것 같아 막막할 때",
    action: "타깃 고객 연령대, 편한 콘텐츠 형태, 주요 목표를 기준으로 플랫폼을 선택하세요.",
    mission: "메인 1개 + 서브 1개를 확정하고 최소 60일간 집중하세요.",
  },
  {
    number: 3,
    title: "첫 100명의 진짜 팔로워 만들기",
    oneLiner: "맞팔·선팔·구매 팔로워는 숫자만 늘리고 계정을 망친다.",
    description:
      "프로필 최적화 체크리스트(사진·이름·바이오·링크), 7가지 초기 성장 전술(네트워크·커뮤니티·진심 댓글·콘텐츠 채우기·블로그 검색·릴스·리퍼포징), 14일 액션 플랜, 절대 하지 말아야 할 3가지.",
    situation: "게시물을 올려도 아무도 보지 않아 의욕이 사라질 때",
    action: "프로필 3줄 공식(누구+무엇+CTA)으로 바이오를 다시 쓰세요.",
    mission: "14일 액션 플랜을 따라 진성 팔로워 100명을 확보하세요.",
  },
  {
    number: 4,
    title: "AIDA로 만드는 중독성 콘텐츠",
    oneLiner: "사람들은 SNS에서 평균 1.3초 안에 게시물을 볼지 결정한다.",
    description:
      "AIDA 프레임워크(주의→관심→욕구→행동), 첫 줄 Hook 5가지 공식(충격·질문·숫자·비밀·타임라인), Bucket Brigade 기법, Before-After-Bridge 구조, CTA 하나만 명확하게.",
    situation: "정성 들여 만든 콘텐츠인데 반응이 없을 때",
    action: "5가지 Hook 공식 중 하나를 골라 게시물 첫 줄을 다시 쓰세요.",
    mission: "AIDA 템플릿으로 게시물 1개를 작성하고 업로드하세요.",
  },
  {
    number: 5,
    title: "해시태그 · SEO · 알고리즘 — 무료 노출 극대화",
    oneLiner: "같은 콘텐츠라도 노출 전략을 아는 사람과 모르는 사람의 결과는 10배 차이 난다.",
    description:
      "해시태그 3단계 피라미드(대형 20%·중형 50%·소형 30%), 네이버 블로그 SEO 핵심(C-Rank·D.I.A.), 프로필 키워드 최적화, 알고리즘이 좋아하는 6가지 신호(저장>공유>댓글), AI 도구 활용법.",
    situation: "좋은 콘텐츠인데 사람들에게 도달하지 못할 때",
    action: "핵심 키워드 5개로 해시태그 세트 3개를 만들어 돌려가며 사용하세요.",
    mission: "프로필 이름에 검색 키워드를 추가하고, 해시태그 리서치 시트를 완성하세요.",
  },
  {
    number: 6,
    title: "댓글 · DM · 스토리 — 관계를 수익으로 바꾸는 소통 전략",
    oneLiner: "SNS는 일방향 방송이 아니라 쌍방향 대화다.",
    description:
      "댓글 관리법과 매일 15분 소통 루틴, DM 자연스러운 접근법과 템플릿, 스토리 참여 도구(투표·퀴즈·질문 스티커), 관계를 수익으로 전환하는 5단계 퍼널, 한국형 전환 채널 연결.",
    situation: "팔로워는 있는데 매출이나 방문으로 이어지지 않을 때",
    action: "게시 후 30분 내 모든 댓글에 답글을 다는 루틴을 시작하세요.",
    mission: "하루 45분 소통 루틴(아침·점심·저녁·취침 전)을 1주일간 실행하세요.",
  },
  {
    number: 7,
    title: "콘텐츠 캘린더 시스템 — 주 3회 게시로 매일 성장",
    oneLiner: "매일 올리다 지쳐서 포기하는 것보다, 주 3회를 1년간 꾸준히 올리는 것이 100배 낫다.",
    description:
      "요일별 콘텐츠 유형 배분(월·수·금), 월간 캘린더 템플릿, 주말 2시간 배치 제작 시스템, 무료 예약 발행 도구, 아이디어 고갈 방지법(1주제→5콘텐츠), 시즌 콘텐츠·재활용 전략.",
    situation: "'오늘 뭘 올리지?' 매일 고민하다 결국 아무것도 안 올릴 때",
    action: "핵심 주제 5개를 선정하고 4주 캘린더를 작성하세요.",
    mission: "주말 2시간 배치 제작을 시작하고, 예약 발행 도구를 설정하세요.",
  },
  {
    number: 8,
    title: "협업과 크로스 프로모션 — 돈 없이 팔로워 2배 만들기",
    oneLiner: "비슷한 크기의 인접 분야 계정과 팔로워를 교환하면 광고비 0원으로 2배 성장한다.",
    description:
      "협업 3유형(콘텐츠 콜라보·상호 태그·공동 이벤트), 이상적 파트너 조건(비슷한 규모·겹치는 타깃·인접 분야), 협업 DM 템플릿, 내 플랫폼 간·오프라인→온라인 크로스 프로모션, 성과 측정법.",
    situation: "혼자 꾸준히 하는데 성장 속도가 답답할 때",
    action: "인접 분야 협업 파트너 5명을 리스트업하세요.",
    mission: "이번 달 안에 협업 DM 3건을 보내고 1건 이상 성사시키세요.",
  },
  {
    number: 9,
    title: "분석과 최적화 — 숫자로 보는 내 계정의 건강 상태",
    oneLiner: "감으로 판단하면 반드시 실패한다 — 데이터가 답이다.",
    description:
      "핵심 KPI 3세트(성장·참여·전환), 플랫폼별 무료 분석 도구(인스타 인사이트·네이버 통계·유튜브 스튜디오), 주간 15분 분석 루틴, 데이터→실행 연결 프레임워크, A/B 테스트법, 정체기 대응 전략.",
    situation: "좋아요 수만 보고 성과를 판단하고 있을 때",
    action: "주간 분석 체크리스트를 만들고 매주 15분 분석 루틴을 시작하세요.",
    mission: "이번 주 게시 시간을 바꿔보는 A/B 테스트 1건을 실행하세요.",
  },
  {
    number: 10,
    title: "60일 SNS 성장 로드맵 — 0에서 1,000 팔로워까지",
    oneLiner: "완벽하게 하는 것이 아니라 멈추지 않는 것이 핵심이다.",
    description:
      "Phase 1(기반 구축, 1~14일) → Phase 2(성장 가속, 15~30일) → Phase 3(확장·도약, 31~45일) → Phase 4(1,000명 돌파, 46~60일). 일별 할 일과 체크포인트, 1,000명 이후 장기 성장 전략.",
    situation: "모든 전략은 배웠지만 '어디서부터?' 막막할 때",
    action: "오늘 날짜부터 60일을 캘린더에 표시하세요.",
    mission: "Phase 1의 1일 차 할 일(플랫폼 선택+계정 생성)을 오늘 실행하세요.",
  },
];

const sections: ContentSection[] = [
  {
    id: "sec-0",
    title: "들어가며 — 광고비 0원, SNS만으로 비즈니스를 만드는 시대",
    body: (
      <>
        <p>한국 SNS 이용자 수 <strong>약 4,700만 명</strong>(인구의 90% 이상). 이 거대한 시장에서 체계적으로 SNS를 운영하는 소상공인은 아직 <strong>소수</strong>입니다. 지금 제대로 된 전략으로 시작하면 후발주자가 아니라 선두주자가 될 수 있습니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">이 책의 구성</h3>
        <p><strong>1~3장</strong> — 성장 원리, 플랫폼 선택, 첫 100명 만들기</p>
        <p><strong>4~5장</strong> — AIDA 콘텐츠 공식, 해시태그·SEO·알고리즘</p>
        <p><strong>6~7장</strong> — 소통 전략, 콘텐츠 캘린더 시스템</p>
        <p><strong>8~10장</strong> — 협업, 분석·최적화, 60일 실행 로드맵</p>
        <p><strong>부록</strong> — 바로 복사해 쓰는 체크리스트·템플릿·양식 6종 + 추천 도구.</p>

        <blockquote className="border-l-4 border-violet-400 pl-4 py-2 my-4 bg-violet-50 dark:bg-violet-950 rounded-r-lg">
          <p><strong>서문 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>SNS 성장에 필요한 것은 돈이 아니라 <strong>전략과 꾸준함</strong>이다.</li>
            <li>이 책은 읽고 끝나는 책이 아니라, 직접 따라 하는 <strong>60일 워크북</strong>이다.</li>
            <li><strong>1~3장이 모든 챕터의 기초이므로 반드시 먼저 읽으세요.</strong></li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-1",
    title: "Ch.1 0원으로 시작하는 SNS 성장의 원리",
    body: (
      <>
        <p>팔로워 50,000명인데 좋아요 30개인 계정보다 <strong>500명인데 댓글 50개인 계정</strong>이 더 건강합니다. SNS 성장의 진짜 지표는 <strong>참여율(Engagement Rate)</strong>입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">80/20 법칙과 일관성</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>가치 콘텐츠 80%</strong>(정보·교육·영감) + <strong>홍보 20%</strong>를 지켜야 성장한다.</li>
          <li>하루 10개 올리고 일주일 쉬는 것보다 <strong>주 3회 꾸준히</strong>가 압도적으로 효과적.</li>
          <li>골든 타임은 <strong>오후 9~11시</strong> — 가장 높은 참여율 구간.</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">무료 성장의 3가지 엔진</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>가치 기반 콘텐츠</strong> — 저장하고 공유하고 싶은 정보</li>
          <li><strong>커뮤니티 참여</strong> — 진심 어린 댓글이 광고보다 강하다</li>
          <li><strong>알고리즘 최적화</strong> — 해시태그, SEO, 게시 시간 활용</li>
        </ol>

        <blockquote className="border-l-4 border-violet-400 pl-4 py-2 my-4 bg-violet-50 dark:bg-violet-950 rounded-r-lg">
          <p><strong>1챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>팔로워 수보다 <strong>참여율</strong>이 진짜 건강 지표다.</li>
            <li>메인 플랫폼 1개에 70%의 에너지를 집중하라.</li>
            <li><strong>오늘부터 실행</strong>: 최근 게시물 10개의 참여율을 계산하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-2",
    title: "Ch.2 나에게 맞는 플랫폼 찾기 — 6대 SNS 완전 비교",
    body: (
      <>
        <p>모든 플랫폼에서 잘할 수는 없습니다. <strong>나의 강점과 타깃 고객이 만나는 플랫폼 하나</strong>에 올인해야 합니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">플랫폼 선택 기준</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>글 쓰는 게 편하다</strong> &rarr; 네이버 블로그, 스레드, 브런치</li>
          <li><strong>사진 찍는 걸 좋아한다</strong> &rarr; 인스타그램</li>
          <li><strong>말하는 게 자신 있다</strong> &rarr; 유튜브, 팟캐스트</li>
          <li><strong>짧은 영상이 재밌다</strong> &rarr; 틱톡, 릴스, 쇼츠</li>
          <li><strong>전문 지식 나누기</strong> &rarr; 네이버 블로그 + 카카오톡 채널</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">추천 조합 TOP 3</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>인스타그램 + 네이버 블로그</strong> — 1인 사업자, 소상공인에 최적</li>
          <li><strong>유튜브 + 네이버 블로그</strong> — 전문가, 교육자에 최적</li>
          <li><strong>네이버 블로그 + 카카오톡 채널</strong> — 지역 사업자에 최적</li>
        </ol>

        <blockquote className="border-l-4 border-violet-400 pl-4 py-2 my-4 bg-violet-50 dark:bg-violet-950 rounded-r-lg">
          <p><strong>2챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>카카오톡 채널은 유입이 아닌 <strong>전환(구매·재방문)</strong> 도구로 활용하라.</li>
            <li>숏폼 1개를 4플랫폼에 동시 업로드하면 효율 극대화.</li>
            <li><strong>오늘부터 실행</strong>: 메인 1개 + 서브 1개를 확정하고 60일간 집중하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-3",
    title: "Ch.3 첫 100명의 진짜 팔로워 만들기",
    body: (
      <>
        <p>SNS에서 가장 힘든 구간은 <strong>0에서 100</strong>입니다. 하지만 100명만 넘기면 알고리즘이 작동하고, 사회적 증거가 생기고, 피드백 루프가 만들어집니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">첫 100명을 만드는 핵심 전술</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>주변 네트워크 활성화</strong>(30명) — 카톡, 명함, 이메일에 링크 추가</li>
          <li><strong>커뮤니티 참여</strong>(20명) — 네이버 카페·오픈카톡에서 가치 제공</li>
          <li><strong>진심 댓글</strong>(20명) — 매일 관련 계정 10개에 의미 있는 댓글</li>
          <li><strong>콘텐츠 9~12개 먼저 채우기</strong> — 빈 프로필은 팔로우 안 함</li>
          <li><strong>릴스/쇼츠 바이럴 도전</strong>(10명) — 팔로워 0이어도 수천 조회 가능</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">절대 하지 말아야 할 3가지</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>팔로워 구매</strong> — 참여율 0%로 알고리즘이 노출을 차단한다.</li>
          <li><strong>무차별 맞팔/선팔</strong> — 섀도우밴 위험, 2020년 이전 전략이다.</li>
          <li><strong>댓글 봇/자동화</strong> — 계정 정지 사유. 수동이 가장 안전하고 효과적.</li>
        </ol>

        <blockquote className="border-l-4 border-violet-400 pl-4 py-2 my-4 bg-violet-50 dark:bg-violet-950 rounded-r-lg">
          <p><strong>3챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>프로필 최적화(사진·이름·바이오)가 팔로우 전환율을 3배 높인다.</li>
            <li>14일이면 진성 100명 달성 가능 &mdash; 핵심은 꾸준한 실행.</li>
            <li><strong>오늘부터 실행</strong>: 바이오를 3줄 공식으로 다시 쓰세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-4",
    title: "Ch.4 AIDA로 만드는 중독성 콘텐츠",
    body: (
      <>
        <p>정성 들여 만든 콘텐츠인데 반응이 없다면 <strong>질이 아니라 구조의 문제</strong>입니다. 100년 넘게 검증된 설득 공식 <strong>AIDA</strong>(Attention &rarr; Interest &rarr; Desire &rarr; Action)를 적용하세요.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">첫 줄(Hook) 5가지 공식</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>충격/반전</strong> &mdash; &quot;영양제 10개 먹는 것보다 이것 하나가 낫습니다&quot;</li>
          <li><strong>질문형</strong> &mdash; &quot;혹시 이 3가지 중 하나라도 해당되시나요?&quot;</li>
          <li><strong>숫자+혜택</strong> &mdash; &quot;매일 5분 투자로 달라지는 3가지 습관&quot;</li>
          <li><strong>비밀/내부 정보</strong> &mdash; &quot;약사만 아는 비타민 고르는 법&quot;</li>
          <li><strong>타임라인</strong> &mdash; &quot;3개월 만에 팔로워 0에서 5,000까지 간 방법&quot;</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">핵심 기법</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>Bucket Brigade</strong> &mdash; &quot;그런데 여기서 반전이...&quot; 식으로 다음 문장으로 끌기</li>
          <li><strong>Before-After-Bridge</strong> &mdash; 고통 묘사 &rarr; 변화된 미래 &rarr; 해결책 연결</li>
          <li><strong>CTA는 하나만</strong> &mdash; 여러 개를 넣으면 아무것도 안 하게 된다</li>
        </ul>

        <blockquote className="border-l-4 border-violet-400 pl-4 py-2 my-4 bg-violet-50 dark:bg-violet-950 rounded-r-lg">
          <p><strong>4챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>첫 줄(Hook)이 실패하면 나머지는 의미 없다 &mdash; 1.3초가 승부처.</li>
            <li>사람들은 통계보다 <strong>이야기</strong>에 3배 반응한다.</li>
            <li><strong>오늘부터 실행</strong>: AIDA 템플릿으로 게시물 1개를 작성하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-5",
    title: "Ch.5 해시태그 · SEO · 알고리즘 — 무료 노출 극대화",
    body: (
      <>
        <p>같은 콘텐츠라도 <strong>노출 전략</strong>을 아는 사람과 모르는 사람의 결과는 10배 이상 차이 납니다. 돈 한 푼 쓰지 않고 더 많은 사람에게 도달하는 3가지 무기를 다룹니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">해시태그 3단계 피라미드</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>대형(100만+)</strong> 20% &mdash; 넓은 노출, 치열한 경쟁</li>
          <li><strong>중형(1만~100만)</strong> 50% &mdash; 핵심 타깃 도달</li>
          <li><strong>소형/니치(1만 미만)</strong> 30% &mdash; 상위 노출 용이</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">알고리즘이 좋아하는 신호 (가중치 순)</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>저장</strong> &mdash; &quot;다시 보고 싶다&quot;는 가장 강한 신호</li>
          <li><strong>공유</strong> &mdash; 다른 사람에게 보여줄 만큼 가치 있다</li>
          <li><strong>댓글</strong> &mdash; 대화를 유발하는 콘텐츠</li>
          <li><strong>체류 시간</strong> &mdash; 오래 본 콘텐츠 = 좋은 콘텐츠</li>
        </ol>

        <blockquote className="border-l-4 border-violet-400 pl-4 py-2 my-4 bg-violet-50 dark:bg-violet-950 rounded-r-lg">
          <p><strong>5챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>네이버 블로그 SEO는 <strong>C-Rank(전문성) + D.I.A.(품질)</strong>가 핵심.</li>
            <li>&quot;좋아요를 눌러주세요&quot;보다 <strong>&quot;저장해 두세요&quot;</strong>가 알고리즘에 3배 효과적.</li>
            <li><strong>오늘부터 실행</strong>: 해시태그 세트 3개를 만들어 돌려가며 사용하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-6",
    title: "Ch.6 댓글 · DM · 스토리 — 관계를 수익으로 바꾸는 소통 전략",
    body: (
      <>
        <p>많은 사람들이 SNS를 <strong>일방향 방송</strong>처럼 사용합니다. 하지만 SNS의 진짜 힘은 <strong>쌍방향 소통</strong>에 있고, 이 관계 자본이 모이면 수익이 됩니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">매일 15분 소통 루틴</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li>같은 분야 크리에이터 <strong>5개 계정</strong>에 의미 있는 댓글 (5분)</li>
          <li>타깃 고객이 모인 계정 <strong>5개</strong>에 정보성 댓글 (5분)</li>
          <li>내 게시물 댓글 <strong>모두 답글</strong> (5분)</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">관계 &rarr; 수익 전환 5단계 퍼널</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>발견</strong> &mdash; 해시태그/검색/추천으로 콘텐츠 발견</li>
          <li><strong>팔로우</strong> &mdash; 프로필 확인 후 팔로우</li>
          <li><strong>참여</strong> &mdash; 좋아요, 댓글, DM으로 소통 시작</li>
          <li><strong>신뢰</strong> &mdash; 꾸준한 가치 제공으로 관계 형성</li>
          <li><strong>전환</strong> &mdash; 제품/서비스 구매, 방문, 상담 신청</li>
        </ol>

        <blockquote className="border-l-4 border-violet-400 pl-4 py-2 my-4 bg-violet-50 dark:bg-violet-950 rounded-r-lg">
          <p><strong>6챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>게시 후 <strong>30분~1시간 내 댓글 답글</strong>이 알고리즘에 가장 효과적.</li>
            <li>DM은 먼저 관계를 만들고, 상대가 필요를 표현할 때 자연스럽게 제안하라.</li>
            <li><strong>오늘부터 실행</strong>: 하루 45분 소통 루틴을 1주일간 실행하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-7",
    title: "Ch.7 콘텐츠 캘린더 시스템 — 주 3회 게시로 매일 성장",
    body: (
      <>
        <p>매일 올리다 지쳐서 포기하는 것보다 <strong>주 3회를 1년간 꾸준히</strong> 올리는 것이 100배 낫습니다. 핵심은 빈도가 아니라 <strong>시스템</strong>입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">요일별 콘텐츠 배분</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>월요일</strong> &mdash; 정보/교육형 (가치 제공)</li>
          <li><strong>수요일</strong> &mdash; 스토리텔링/경험형 (관계 형성)</li>
          <li><strong>금요일</strong> &mdash; 참여 유도/가벼운 콘텐츠 (소통 + 가끔 홍보)</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">주말 2시간 배치 제작</h3>
        <p>주제 확정 20분 &rarr; 게시물 3개 제작 60분 &rarr; 해시태그·캡션 점검 20분 &rarr; 예약 발행 설정 20분. <strong>무료 도구</strong>: Meta Business Suite, 네이버 예약 발행, 유튜브 스튜디오, Buffer 무료 플랜.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">아이디어 고갈 방지</h3>
        <p>핵심 주제 <strong>10개</strong>만 있으면 각 주제에서 5개씩, <strong>50개 이상의 콘텐츠</strong> 생산 가능. 3개월 전 게시물도 디자인만 바꿔 재활용해도 됩니다.</p>

        <blockquote className="border-l-4 border-violet-400 pl-4 py-2 my-4 bg-violet-50 dark:bg-violet-950 rounded-r-lg">
          <p><strong>7챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>요일별 유형을 미리 정해두면 &quot;뭘 올리지?&quot; 고민이 사라진다.</li>
            <li>주 1회 배치 제작(2시간)으로 1주일 치를 한 번에 만들기.</li>
            <li><strong>오늘부터 실행</strong>: 핵심 주제 5개를 선정하고 4주 캘린더를 작성하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-8",
    title: "Ch.8 협업과 크로스 프로모션 — 돈 없이 팔로워 2배 만들기",
    body: (
      <>
        <p>혼자서 성장하는 데는 한계가 있습니다. <strong>비슷한 크기의 인접 분야 계정과 서로 팔로워를 교환</strong>하면 광고비 0원으로 2배 성장이 가능합니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">협업 3가지 유형</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>콘텐츠 콜라보</strong> &mdash; 공동 게시물, 듀엣 릴스, 합동 라이브</li>
          <li><strong>상호 태그 &amp; 멘션</strong> &mdash; 서로 콘텐츠를 언급하고 스토리 공유</li>
          <li><strong>공동 이벤트/챌린지</strong> &mdash; 양쪽 팔로워 참여 조건으로 모두 팔로우</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">이상적 파트너 조건</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li>팔로워 수가 <strong>비슷한 규모</strong>(&plusmn;50%)</li>
          <li>같은 분야보다 <strong>인접 분야</strong>가 이상적 (경쟁 아닌 시너지)</li>
          <li>콘텐츠 품질과 톤이 비슷한 수준</li>
        </ul>

        <blockquote className="border-l-4 border-violet-400 pl-4 py-2 my-4 bg-violet-50 dark:bg-violet-950 rounded-r-lg">
          <p><strong>8챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>내 플랫폼 간 크로스 프로모션(인스타&rarr;블로그, 블로그&rarr;카톡 채널)도 놓치지 마라.</li>
            <li>협업 후 반드시 <strong>성과를 측정</strong>하고, 효과적인 파트너와 정기 협업.</li>
            <li><strong>오늘부터 실행</strong>: 인접 분야 파트너 5명을 리스트업하고 DM 3건을 보내세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-9",
    title: "Ch.9 분석과 최적화 — 숫자로 보는 내 계정의 건강 상태",
    body: (
      <>
        <p><strong>감으로 판단하면 반드시 실패합니다.</strong> 좋아요가 적어도 저장이 높으면 알고리즘에 긍정 신호를 보내고 있을 수 있습니다. 무료 분석 도구만으로 정확히 진단하세요.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">데이터 &rarr; 실행 프레임워크</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>도달 높고 참여 낮음</strong> &rarr; Hook(첫 줄)과 CTA 개선</li>
          <li><strong>참여 높고 도달 낮음</strong> &rarr; 해시태그/SEO/게시 시간 개선</li>
          <li><strong>좋아요 많고 저장 적음</strong> &rarr; 정보성·실용성 강화</li>
          <li><strong>팔로워 늘고 참여 감소</strong> &rarr; 타깃이 아닌 팔로워 유입, 주제 재정비</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">A/B 테스트와 정체기 대응</h3>
        <p>한 번에 <strong>하나의 변수만</strong> 바꿔 비교하세요. 게시 시간, Hook 유형, CTA 문구 등. 성장 정체기는 모든 계정이 겪는 자연스러운 현상 &mdash; <strong>감정 대신 데이터</strong>로 대응하세요.</p>

        <blockquote className="border-l-4 border-violet-400 pl-4 py-2 my-4 bg-violet-50 dark:bg-violet-950 rounded-r-lg">
          <p><strong>9챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>핵심 지표: 참여율, 도달, 저장율, 프로필 방문, 링크 클릭.</li>
            <li>주 15분 분석 루틴으로 데이터를 실행으로 연결하라.</li>
            <li><strong>오늘부터 실행</strong>: 주간 분석 체크리스트를 만들고 A/B 테스트 1건을 시작하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-10",
    title: "Ch.10 60일 SNS 성장 로드맵 — 0에서 1,000 팔로워까지",
    body: (
      <>
        <p>9개 챕터의 모든 전략을 <strong>60일 로드맵</strong>으로 통합합니다. 하루 30분~1시간, 주 3회 게시로 <strong>진성 팔로워 1,000명</strong>을 달성하는 구체적 일정표입니다.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">4단계 Phase</h3>
        <ul className="list-disc list-inside space-y-1 my-4">
          <li><strong>Phase 1 (1~14일)</strong> &mdash; 기반 구축: 프로필 완성, 초기 콘텐츠 9개, 100명 달성</li>
          <li><strong>Phase 2 (15~30일)</strong> &mdash; 성장 가속: 캘린더 시스템 안착, A/B 테스트 시작, 300명</li>
          <li><strong>Phase 3 (31~45일)</strong> &mdash; 확장·도약: 협업 시작, 바이럴 도전, 서브 플랫폼, 600명</li>
          <li><strong>Phase 4 (46~60일)</strong> &mdash; 1,000명 돌파: 반응 좋은 콘텐츠 집중, 리퍼포징 극대화, 전환 채널 오픈</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">1,000명 이후 스케일링</h3>
        <p><strong>0~1,000</strong>: 콘텐츠 품질 + 소통 &rarr; <strong>1,000~5,000</strong>: 시스템화 + 협업 &rarr; <strong>5,000~10,000</strong>: 브랜딩 + 수익화 &rarr; <strong>10,000+</strong>: 팀 빌딩 + 다각화.</p>

        <blockquote className="border-l-4 border-violet-400 pl-4 py-2 my-4 bg-violet-50 dark:bg-violet-950 rounded-r-lg">
          <p><strong>10챕터 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>2주마다 체크포인트로 전략을 점검하고 조정하라.</li>
            <li>이 로드맵은 하루 30분~1시간 기준 &mdash; 직장 다니면서도 가능.</li>
            <li><strong>오늘부터 실행</strong>: 캘린더에 60일을 표시하고 1일 차(플랫폼 선택)를 지금 시작하세요.</li>
          </ul>
        </blockquote>
      </>
    ),
  },
  {
    id: "sec-11",
    title: "부록 — 실행 도구 모음: 체크리스트, 템플릿, 양식",
    body: (
      <>
        <p>책 전체의 전략을 <strong>바로 복사해서 사용할 수 있는 실행 도구</strong>로 정리했습니다. 프린트하거나 노션에 복사해서 활용하세요.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">6종 실행 도구</h3>
        <ol className="list-decimal list-inside space-y-1 my-4">
          <li><strong>플랫폼별 콘텐츠 체크리스트</strong> &mdash; 인스타 피드·릴스, 블로그, 유튜브, 카톡 채널, 스레드</li>
          <li><strong>해시태그 리서치 템플릿</strong> &mdash; 키워드 10개 + 대/중/소 수집 + 세트 3개 조합</li>
          <li><strong>콘텐츠 캘린더 양식</strong> &mdash; 월간 캘린더 + 아이디어 뱅크 + 시즌 키워드 연간표</li>
          <li><strong>바이오 작성 공식</strong> &mdash; 3줄 공식 + 분야별 예시 4종</li>
          <li><strong>60일 로드맵 캘린더</strong> &mdash; Phase 1~4 일별 체크리스트 (인쇄용)</li>
          <li><strong>추천 무료 도구 목록</strong> &mdash; Canva, CapCut, 네이버 키워드 플래너 등 10종</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">마지막 한마디</h3>
        <p>60일 후, 체크리스트에 체크 표시가 가득 찬 모습을 보면 뿌듯함을 느끼게 될 것입니다. 그리고 그때의 여러분은 지금과는 <strong>완전히 다른 SNS 운영자</strong>가 되어 있을 것입니다.</p>

        <blockquote className="border-l-4 border-violet-400 pl-4 py-2 my-4 bg-violet-50 dark:bg-violet-950 rounded-r-lg">
          <p><strong>부록 핵심 정리</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>모든 도구는 노션·구글 독스·종이에 바로 옮겨 쓸 수 있다.</li>
            <li>완벽하게 채우려 하지 마세요 &mdash; 하나씩, 조금씩, 꾸준히가 최고의 전략.</li>
            <li>&quot;시작하는 데 완벽할 필요는 없다. 하지만 시작해야 완벽해질 수 있다.&quot;</li>
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
    changes: ["초판 발행: 0원 SNS 성장 10챕터 + 부록 실행 키트"],
  },
];

export default function SnsGrowthRead() {
  return (
    <GuideBook
      bookId="sns-growth"
      title="돈 한푼 들이지 않고 SNS 계정 키우기"
      emoji="\u{1F4F1}"
      subtitle="광고비 0원, 참여율과 알고리즘만으로 성장하는 60일 전략"
      topItems={topItems}
      sections={sections}
      updateLogs={updateLogs}
      currentVersion={1}
    />
  );
}
