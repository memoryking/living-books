/**
 * 아임웹 쇼핑 상세페이지 HTML + 표지 프롬프트 + 마케팅문구 생성기
 * VITA COACH 상세페이지 템플릿 형식 기반
 */

/* ── 책별 콘텐츠 데이터 ── */

interface BookDetail {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  author: string;
  heroTagline: [string, string]; // 2줄 헤드라인
  heroSub: string;
  features: string[];
  problemLabel: string;
  problemHeadline: [string, string];
  problemSub: string;
  painPoints: string[];
  numbersHeadline: string;
  numbersSub: string;
  stats: string[];
  chaptersLabel: string;
  chaptersHeadline: string;
  chaptersSub: string;
  chapters: string[];
  targetHeadline: string;
  targetSub: string;
  targets: string[];
  previewHeadline: string;
  previewSub: string;
  previewExcerpt: string;
  faqHeadline: string;
  faqSub: string;
  faqs: string[];
  brandHeadline: [string, string];
  brandSub: string;
  brandItems: string[];
  ctaLine: string;
  price: string;
  // colors
  heroBg: string;
  problemBg: string;
  problemBorder: string;
  darkBg: string;
  darkAccent: string;
  chaptersBg: string;
  chaptersBorder: string;
  targetBg: string;
  targetBorder: string;
  previewBg: string;
  faqBg: string;
  brandBg: string;
  // cover prompt
  coverCategory: string;
  coverMainColor: string;
  coverGradient: string;
  coverSymbol: string;
  coverMood: string;
}

const BOOKS: BookDetail[] = [
  {
    id: "diet-secrets",
    title: "다이어트 서바이벌 시스템",
    subtitle: "1,673명의 실패와 성공에서 뽑아낸 생존 가이드",
    emoji: "🏋️",
    author: "김약사 · 유원소망약국",
    heroTagline: ["다이어트는 의지력이", "아닙니다. 시스템입니다."],
    heroSub: "요요 없이 진짜 빠지는 법 — 1,673명의 실전 데이터 기반",
    features: [
      "Reddit 1,673명 실패·성공 분석",
      "10개 챕터 + 보너스 5개",
      "업데이트되는 살아있는 가이드",
    ],
    problemLabel: "혹시 이런 경험 있으시죠?",
    problemHeadline: ["수십 번 시도했는데", "3주 차에 항상 무너집니다"],
    problemSub: "의지력이 아니라 시스템의 문제입니다",
    painPoints: [
      "3주 차에 항상 무너진다 — 의지력이 바닥나는 그 시점",
      "빠지면 다시 찐다 — 요요의 끝없는 반복",
      '"나는 왜 이렇게 의지가 약하지?" — 자기 비난의 늪',
    ],
    numbersHeadline: "이 가이드의 구성",
    numbersSub: "읽고 → 외우고 → 실천하는 구조",
    stats: [
      "10개 챕터 · 80+ 페이지",
      "보너스 가이드 5개 포함",
      "계속 업데이트되는 살아있는 책",
    ],
    chaptersLabel: "목차 미리보기",
    chaptersHeadline: "무엇을 알게 되나요?",
    chaptersSub: "각 챕터는 독립적으로 읽을 수 있습니다",
    chapters: [
      "다이어트의 진짜 적은 음식이 아니다",
      "CICO — 유일한 법칙, 하지만 함정이 있다",
      "환경을 바꾸면 의지력이 필요 없다",
      "감정적 식사 — '왜 먹는지'가 더 중요하다",
      "3주 벽 — 모든 다이어트가 무너지는 그 시점",
      "Fail Fast — 한 끼 실수를 30초에 리셋",
      "즐기면서 빠지는 식단의 현실적 규칙",
      "유지 모드 — 감량보다 중요한 것",
    ],
    targetHeadline: "이런 분께 추천합니다",
    targetSub: "한 가지라도 해당되면 이 가이드가 도움이 됩니다",
    targets: [
      "수십 번 다이어트를 시도했지만 3주를 못 넘긴 분",
      "요요를 반복하며 의지력을 탓하는 분",
      "먹는 즐거움은 포기하고 싶지 않은 분",
    ],
    previewHeadline: "본문 미리보기",
    previewSub: "챕터 3에서 발췌",
    previewExcerpt:
      "실제로 성공한 사람들은 '다이어트'를 하지 않았습니다. 의지력이 아니라 환경을 바꿨습니다. 냉장고와 접시 크기를 바꾸는 것만으로 자동 감량 구조가 만들어집니다.",
    faqHeadline: "자주 묻는 질문",
    faqSub: "궁금한 점을 미리 답변드립니다",
    faqs: [
      "Q. 극단적 칼로리 제한 없이 정말 빠질 수 있나요?",
      "Q. 3주 차에 무너지는 이유가 뭔가요?",
      "Q. 감량 후 요요를 막으려면 어떻게 해야 하나요?",
    ],
    brandHeadline: ["이번이 마지막", "다이어트가 되도록"],
    brandSub: "유원소망약국 김약사가 함께합니다",
    brandItems: [
      "커뮤니티 실전 경험 + 전문가 검증",
      "1회 구매 · 1개월 열람 · 계속 업데이트",
      "1,000원 — 커피 한 잔보다 저렴합니다",
    ],
    ctaLine:
      "이번이 마지막 다이어트가 되는 시스템, 지금 시작하세요.",
    price: "1,000원",
    heroBg: "linear-gradient(145deg, #f0fdf4, #dcfce7)",
    problemBg: "#fff1f2",
    problemBorder: "#e98a8a",
    darkBg: "#14532d",
    darkAccent: "#86efac",
    chaptersBg: "#faf5e9",
    chaptersBorder: "#d8bc6c",
    targetBg: "#edf4e1",
    targetBorder: "#9fbd68",
    previewBg: "#f7fee7",
    faqBg: "#f4f4f5",
    brandBg: "#16a34a",
    coverCategory: "건강/다이어트",
    coverMainColor: "#16a34a",
    coverGradient: "그린(#16a34a)에서 짙은 에메랄드(#064e3b)로",
    coverSymbol:
      "체중계 위에 올라선 사람 실루엣, 주위로 채소·운동화·시계 아이콘이 도는 플랫 일러스트",
    coverMood: "청량, 생기, 실행력",
  },
  {
    id: "endocrine-disruptors",
    title: "생활 속 환경호르몬과 질병",
    subtitle:
      "BPA Free의 함정부터 PFAS, 미세플라스틱까지 — 과학 기반 실천 가이드",
    emoji: "🧪",
    author: "김약사 · 유원소망약국",
    heroTagline: ['"BPA Free"라고', "안전한 거 아닌가요?"],
    heroSub: "과학 기반으로 정리한 환경호르몬 실천 가이드",
    features: [
      "NIH/EPA 자료 교차 검증",
      "10개 챕터 + 보너스 5개",
      "20%만 바꿔도 80% 노출 감소",
    ],
    problemLabel: "이런 불안, 느끼고 계시죠?",
    problemHeadline: ["뭐가 진짜 위험하고", "뭐가 과장인지 모르겠다"],
    problemSub: "정보는 넘치는데 정리된 답은 없습니다",
    painPoints: [
      '"BPA Free"라고 샀는데 BPS가 들어있다고?',
      "아이한테 쓰는 것들이 걱정되는데 뭘 바꿔야 할지",
      "유기농만 사면 되는 건지, 예산은 한정되어 있는데",
    ],
    numbersHeadline: "이 가이드의 구성",
    numbersSub: "불안이 아니라 실천으로 바꿔드립니다",
    stats: [
      "10개 챕터 · 80+ 페이지",
      "보너스 체크리스트 5개 포함",
      "예산별 우선순위 교체 가이드",
    ],
    chaptersLabel: "목차 미리보기",
    chaptersHeadline: "무엇을 알게 되나요?",
    chaptersSub: "각 챕터는 독립적으로 읽을 수 있습니다",
    chapters: [
      "환경호르몬이란 무엇인가",
      'BPA/BPS/프탈레이트 — "BPA Free"의 함정',
      "PFAS — 영원한 화학물질",
      "미세플라스틱 — 이미 당신 안에 있다",
      "주방 — 가장 쉽게 바꿀 수 있는 곳",
      '화장품·세면도구 — "향료"가 위험한 이유',
      "아이와 임산부 — 가장 취약한 그룹",
      "식품과 물 — 먹고 마시는 것의 진실",
    ],
    targetHeadline: "이런 분께 추천합니다",
    targetSub: "한 가지라도 해당되면 이 가이드가 도움이 됩니다",
    targets: [
      "환경호르몬 정보에 혼란스러운 분",
      "아이 용품 선택이 불안한 부모",
      "예산 내에서 가장 효과적으로 바꾸고 싶은 분",
    ],
    previewHeadline: "본문 미리보기",
    previewSub: "챕터 5에서 발췌",
    previewExcerpt:
      "NIH가 공식 인정한 사실: 환경호르몬은 진짜입니다. 하지만 '모든 것이 독'도 아닙니다. 주방 하나만 바꿔도 전체 노출의 80%를 줄일 수 있습니다.",
    faqHeadline: "자주 묻는 질문",
    faqSub: "궁금한 점을 미리 답변드립니다",
    faqs: [
      "Q. BPA Free 제품이 정말 안전한가요?",
      "Q. 유기농 식품만 먹으면 PFAS를 피할 수 있나요?",
      "Q. 예산이 적다면 뭘 먼저 바꿔야 하나요?",
    ],
    brandHeadline: ["불안하지 않아도", "됩니다"],
    brandSub: "유원소망약국 김약사가 정리해드립니다",
    brandItems: [
      "과학 논문 + 커뮤니티 경험 교차 검증",
      "1회 구매 · 1개월 열람 · 계속 업데이트",
      "1,000원 — 불안 대신 실천을 드립니다",
    ],
    ctaLine: "할 수 있는 것 3가지만 바꾸면 80% 해결됩니다.",
    price: "1,000원",
    heroBg: "linear-gradient(145deg, #f0fdfa, #ccfbf1)",
    problemBg: "#fff1f2",
    problemBorder: "#e98a8a",
    darkBg: "#134e4a",
    darkAccent: "#5eead4",
    chaptersBg: "#faf5e9",
    chaptersBorder: "#d8bc6c",
    targetBg: "#edf4e1",
    targetBorder: "#9fbd68",
    previewBg: "#f0fdfa",
    faqBg: "#f4f4f5",
    brandBg: "#0d9488",
    coverCategory: "건강/과학",
    coverMainColor: "#0d9488",
    coverGradient: "틸(#0d9488)에서 짙은 다크틸(#134e4a)로",
    coverSymbol:
      "깨진 플라스틱 용기에서 경고 기호가 떠오르는 플랫 일러스트, 주위에 분자 구조·돋보기 아이콘",
    coverMood: "과학적, 신뢰, 경각심",
  },
  {
    id: "declutter-clean",
    title: "정리와 청소의 기술",
    subtitle: "서랍 하나부터 시작하는 살아있는 가이드",
    emoji: "🧹",
    author: "김약사 · 유원소망약국",
    heroTagline: ["정리는 의지력이", "아닙니다. 시스템입니다."],
    heroSub: "서랍 하나, 5분 타이머 — 이것만으로 시작됩니다",
    features: [
      "Reddit 수백 명 실전 경험 분석",
      "10개 챕터 + 보너스 5개",
      "ADHD/우울증 맞춤 가이드 포함",
    ],
    problemLabel: "혹시 이런 경험 있으시죠?",
    problemHeadline: ["집 전체를 보면", "아무것도 못 하겠다"],
    problemSub: "압도감에 얼어붙는 건 당신 잘못이 아닙니다",
    painPoints: [
      "집 전체를 보면 압도돼서 아무것도 못 한다",
      "주말 폭풍 청소 → 3일 만에 원점의 반복",
      "물건에 감정이 담겨서 못 버린다",
    ],
    numbersHeadline: "이 가이드의 구성",
    numbersSub: "서랍 하나부터 시작하는 구조",
    stats: [
      "10개 챕터 · 80+ 페이지",
      "보너스 가이드 5개 포함",
      "30일 챌린지 + ADHD 특별 가이드",
    ],
    chaptersLabel: "목차 미리보기",
    chaptersHeadline: "무엇을 알게 되나요?",
    chaptersSub: "각 챕터는 독립적으로 읽을 수 있습니다",
    chapters: [
      "왜 정리가 안 되는가",
      "서랍 하나부터 시작하기",
      '"내려놓지 말고 치워라" — 원터치 규칙',
      "5분 타이머의 마법",
      "매일 밤 주방 리셋",
      "감정적 짐 내려놓기",
      "The Basket — ADHD 친화적 시스템",
      "가족/동거인과 함께하는 법",
    ],
    targetHeadline: "이런 분께 추천합니다",
    targetSub: "한 가지라도 해당되면 이 가이드가 도움이 됩니다",
    targets: [
      "시작할 수 없어 얼어붙는 분 (ADHD/우울증 포함)",
      "주말 대청소를 반복하지만 유지가 안 되는 분",
      "가족이 안 도와줘서 혼자 전쟁하는 분",
    ],
    previewHeadline: "본문 미리보기",
    previewSub: "챕터 4에서 발췌",
    previewExcerpt:
      "깨끗한 집을 유지하는 사람들은 '대청소'를 하지 않았습니다. 매일 5~10분, 모든 물건에 자리를 정해두는 것. 이 두 가지만으로 시스템이 자동 작동합니다.",
    faqHeadline: "자주 묻는 질문",
    faqSub: "궁금한 점을 미리 답변드립니다",
    faqs: [
      "Q. 서랍 하나부터 시작하면 집 전체가 바뀌나요?",
      "Q. ADHD가 있어도 따라할 수 있나요?",
      "Q. 가족을 어떻게 참여시키나요?",
    ],
    brandHeadline: ["서랍 하나,", "5분 타이머"],
    brandSub: "오늘부터 시스템이 대신 해줍니다",
    brandItems: [
      "커뮤니티 실전 경험 + 전문가 검증",
      "1회 구매 · 1개월 열람 · 계속 업데이트",
      "1,000원 — 정리 컨설팅보다 1/100 가격",
    ],
    ctaLine: "서랍 하나, 5분 타이머. 오늘부터 시작하세요.",
    price: "1,000원",
    heroBg: "linear-gradient(145deg, #fffbeb, #fef3c7)",
    problemBg: "#fff1f2",
    problemBorder: "#e98a8a",
    darkBg: "#78350f",
    darkAccent: "#fde68a",
    chaptersBg: "#faf5e9",
    chaptersBorder: "#d8bc6c",
    targetBg: "#edf4e1",
    targetBorder: "#9fbd68",
    previewBg: "#fffbeb",
    faqBg: "#f4f4f5",
    brandBg: "#d97706",
    coverCategory: "라이프스타일",
    coverMainColor: "#d97706",
    coverGradient: "앰버(#d97706)에서 짙은 브라운(#78350f)으로",
    coverSymbol:
      "깔끔하게 정리된 서랍장, 위에 타이머 아이콘이 떠 있는 미니멀 플랫 일러스트",
    coverMood: "깔끔, 따뜻함, 실행력",
  },
  {
    id: "glp1-guide",
    title: "약사가 알려주는 GLP-1 비만약 완전 가이드",
    subtitle: "오젬픽·위고비·마운자로 — 실제 경험 + 최신 의학 연구 기반",
    emoji: "💊",
    author: "김약사 · 유원소망약국",
    heroTagline: ["오젬픽, 위고비, 마운자로", "약사가 정리해드립니다"],
    heroSub: "41만 명의 실제 경험 + BMJ·NEJM 최신 연구 기반",
    features: [
      "Reddit 41만 명 경험 분석",
      "10개 챕터 + 보너스 5개",
      "현직 약사가 직접 쓴 가이드",
    ],
    problemLabel: "이런 불안, 느끼고 계시죠?",
    problemHeadline: ["정보는 넘치는데", "정리된 답은 없습니다"],
    problemSub: "3분 진료로는 해소되지 않는 궁금증",
    painPoints: [
      "부작용이 무서워서 시작도 못 하겠다",
      "이미 복용 중인데 이게 정상인지 불안하다",
      "약 끊으면 다 돌아온다면서? 평생 맞아야 해요?",
    ],
    numbersHeadline: "이 가이드의 구성",
    numbersSub: "30분짜리 약사 상담을 한 권에",
    stats: [
      "10개 챕터 · 80+ 페이지",
      "보너스 가이드 5개 포함",
      "BMJ·NEJM·Harvard 연구 교차 검증",
    ],
    chaptersLabel: "목차 미리보기",
    chaptersHeadline: "무엇을 알게 되나요?",
    chaptersSub: "각 챕터는 독립적으로 읽을 수 있습니다",
    chapters: [
      "GLP-1이 뭔가요? — 약사가 쉽게 설명하는 원리",
      "오젬픽 vs 마운자로 — 뭐가 다른 건가요?",
      "시작하기 전에 — 검사, 준비, 마음가짐",
      "부작용 완전 정복 — 증상별 대처법",
      "Food Noise의 소멸 — 뇌가 바뀌는 경험",
      "근손실을 막아라 — 단백질·운동 전략",
      "비용과 접근성 — 한국에서의 현실적 선택지",
      "끊을 것인가, 유지할 것인가 — 장기 전략",
    ],
    targetHeadline: "이런 분께 추천합니다",
    targetSub: "한 가지라도 해당되면 이 가이드가 도움이 됩니다",
    targets: [
      "GLP-1에 관심 있지만 정보 혼란으로 결정 못 하는 분",
      "이미 복용 중인데 부작용·용량이 불안한 분",
      "한국에서 처방 방법·비용이 궁금한 분",
    ],
    previewHeadline: "본문 미리보기",
    previewSub: "챕터 1에서 발췌",
    previewExcerpt:
      "비만은 의지력이 아니라 호르몬의 문제입니다. GLP-1 약물은 혈압약으로 혈압을 관리하는 것과 같은 원리입니다. 대부분의 실패는 '약이 안 듣는 것'이 아니라 '제대로 된 정보 없이 시작한 것'이었습니다.",
    faqHeadline: "자주 묻는 질문",
    faqSub: "궁금한 점을 미리 답변드립니다",
    faqs: [
      "Q. 오젬픽과 마운자로 중 어떤 것이 맞나요?",
      "Q. 근육이 빠진다는데 어떻게 막나요?",
      "Q. 약을 끊으면 체중이 전부 돌아오나요?",
    ],
    brandHeadline: ["30분짜리 약사 상담을", "한 권에 담았습니다"],
    brandSub: "유원소망약국 김약사가 함께합니다",
    brandItems: [
      "41만 명 경험 + 의학 연구 교차 검증",
      "1회 구매 · 1개월 열람 · 계속 업데이트",
      "1,000원 — 지금 결정을 도와드립니다",
    ],
    ctaLine: "30분짜리 약사 상담을 한 권에. 지금 시작하세요.",
    price: "1,000원",
    heroBg: "linear-gradient(145deg, #eff6ff, #dbeafe)",
    problemBg: "#fff1f2",
    problemBorder: "#e98a8a",
    darkBg: "#1e3a5f",
    darkAccent: "#93c5fd",
    chaptersBg: "#faf5e9",
    chaptersBorder: "#d8bc6c",
    targetBg: "#edf4e1",
    targetBorder: "#9fbd68",
    previewBg: "#eff6ff",
    faqBg: "#f4f4f5",
    brandBg: "#2563eb",
    coverCategory: "건강/의약",
    coverMainColor: "#2563eb",
    coverGradient: "딥블루(#2563eb)에서 짙은 네이비(#1e3a5f)로",
    coverSymbol:
      "주사기(펜형)와 체중계, 주위에 분자 구조·그래프 아이콘이 도는 의료 플랫 일러스트",
    coverMood: "전문적, 신뢰, 안심",
  },
];

/* ── 공통 스타일 상수 ── */
const S = {
  section: (bg: string) =>
    `display:block;box-sizing:border-box;max-width:none;min-height:180px;background:${bg};width:100%;margin:0 auto;padding:64px 42px;text-align:center;font-family:Arial,sans-serif;font-size:16px;color:#1e2a21;`,
  small:
    "display:block;margin:0 0 18px;font-size:13px;color:#1e2a21;",
  h2: (border: string) =>
    `display:inline-block;margin:10px 0 24px;padding:8px 16px;font-size:42.8px;font-weight:700;line-height:53.5px;text-align:center;border:2px solid ${border};border-radius:999px;background:rgba(255,255,255,.33);color:#1e2a21;`,
  h2Light: (border: string) =>
    `display:inline-block;margin:10px 0 24px;padding:8px 16px;font-size:42.8px;font-weight:700;line-height:53.5px;text-align:center;border:2px solid ${border};border-radius:999px;background:rgba(255,255,255,.06);`,
  p: "display:block;margin:0 0 22px;font-size:16px;line-height:27.2px;color:#657268;",
  item: `display:flex;min-height:60px;margin:8px 0;padding:15px;background:#f4f5f0;color:#173126;font-size:16px;text-align:left;border:1px solid #dfe6d8;border-radius:8px;box-shadow:0 3px 10px rgba(31,43,32,.06);align-items:center;gap:10px;`,
  itemNo: (bg: string, color: string) =>
    `display:flex;width:28px;height:28px;align-items:center;justify-content:center;flex:0 0 28px;background:${bg};color:${color};font-size:12px;font-weight:700;border-radius:50%;line-height:28px;`,
  span: "display:block;font-size:16px;color:#173126;",
  quote:
    "display:block;margin:16px auto;padding:20px 24px;max-width:640px;text-align:left;font-size:16px;line-height:28px;color:#374151;background:#fff;border-left:4px solid #9ca3af;border-radius:0 8px 8px 0;font-style:italic;",
};

function itemHtml(items: string[], accentBg: string, accentColor: string): string {
  return items
    .map(
      (text, i) => `
        <div style="${S.item}">
          <span style="${S.itemNo(accentBg, accentColor)}">${String(i + 1).padStart(2, "0")}</span>
          <span style="${S.span}">${esc(text)}</span>
        </div>`
    )
    .join("");
}

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/* ── 상세페이지 HTML 생성 ── */

function buildDetailPage(b: BookDetail): string {
  const accent = "#d9e9a0";
  const accentText = "#33421f";

  return `<!-- ${b.emoji} ${b.title} — 아임웹 상세페이지 -->
<main style="display:block;box-sizing:content-box;max-width:860px;margin:0 auto;width:100%;font-family:Arial,sans-serif;font-size:16px;color:#1e2a21;">

  <!-- 히어로 -->
  <section style="${S.section(b.heroBg)}">
    <small style="${S.small}">${esc(b.emoji)} ${esc(b.title)}</small>
    <h2 style="${S.h2("#1e2a21")}">${esc(b.heroTagline[0])}<br>${esc(b.heroTagline[1])}</h2>
    <p style="${S.p}">${esc(b.heroSub)}</p>
${itemHtml(b.features, accent, accentText)}
  </section>

  <!-- 문제 공감 -->
  <section style="${S.section(b.problemBg)}">
    <small style="${S.small}">${esc(b.problemLabel)}</small>
    <h2 style="${S.h2(b.problemBorder)}">${esc(b.problemHeadline[0])}<br>${esc(b.problemHeadline[1])}</h2>
    <p style="${S.p}">${esc(b.problemSub)}</p>
${itemHtml(b.painPoints, accent, accentText)}
  </section>

  <!-- 수치/구성 -->
  <section style="${S.section(b.darkBg)}color:#fff;">
    <small style="display:block;margin:0 0 18px;font-size:13px;color:#fff;">${esc(b.numbersHeadline)}</small>
    <h2 style="${S.h2Light(b.darkAccent)}color:${b.darkAccent};">${esc(b.numbersHeadline)}</h2>
    <p style="display:block;margin:0 0 22px;font-size:16px;line-height:27.2px;color:rgba(255,255,255,.7);">${esc(b.numbersSub)}</p>
${itemHtml(b.stats, accent, accentText)}
  </section>

  <!-- 목차 -->
  <section style="${S.section(b.chaptersBg)}">
    <small style="${S.small}">${esc(b.chaptersLabel)}</small>
    <h2 style="${S.h2(b.chaptersBorder)}">${esc(b.chaptersHeadline)}</h2>
    <p style="${S.p}">${esc(b.chaptersSub)}</p>
${itemHtml(b.chapters, accent, accentText)}
  </section>

  <!-- 추천 대상 -->
  <section style="${S.section(b.targetBg)}">
    <small style="${S.small}">추천 대상</small>
    <h2 style="${S.h2(b.targetBorder)}">${esc(b.targetHeadline)}</h2>
    <p style="${S.p}">${esc(b.targetSub)}</p>
${itemHtml(b.targets, accent, accentText)}
  </section>

  <!-- 미리보기 -->
  <section style="${S.section(b.previewBg)}">
    <small style="${S.small}">${esc(b.previewHeadline)}</small>
    <h2 style="${S.h2("#1e2a21")}">${esc(b.previewHeadline)}</h2>
    <p style="${S.p}">${esc(b.previewSub)}</p>
    <blockquote style="${S.quote}">${esc(b.previewExcerpt)}</blockquote>
  </section>

  <!-- FAQ -->
  <section style="${S.section(b.faqBg)}">
    <small style="${S.small}">${esc(b.faqHeadline)}</small>
    <h2 style="${S.h2("#1e2a21")}">${esc(b.faqHeadline)}</h2>
    <p style="${S.p}">${esc(b.faqSub)}</p>
${itemHtml(b.faqs, accent, accentText)}
  </section>

  <!-- 브랜드/CTA -->
  <section style="${S.section(b.brandBg)}color:#fff;">
    <small style="display:block;margin:0 0 18px;font-size:13px;color:rgba(255,255,255,.8);">살아있는 정보책</small>
    <h2 style="display:inline-block;margin:10px 0 24px;padding:8px 16px;font-size:42.8px;font-weight:700;line-height:53.5px;border:2px solid rgba(255,255,255,.5);border-radius:999px;background:rgba(255,255,255,.1);color:#fff;">${esc(b.brandHeadline[0])}<br>${esc(b.brandHeadline[1])}</h2>
    <p style="display:block;margin:0 0 22px;font-size:16px;line-height:27.2px;color:rgba(255,255,255,.8);">${esc(b.brandSub)}</p>
${itemHtml(b.brandItems, accent, accentText)}
    <p style="display:block;margin:24px 0 0;font-size:18px;font-weight:700;color:#fff;">${esc(b.ctaLine)}</p>
  </section>

</main>`;
}

/* ── 표지 프롬프트 생성 ── */

function buildCoverPrompt(b: BookDetail): string {
  return `# 표지 이미지 프롬프트 — ${b.title}

아래 프롬프트를 나노바나나(Gemini) 또는 ChatGPT에 그대로 복사해 붙여넣으세요.
같은 프롬프트로 3~4장 생성해서 가장 좋은 것을 고르세요.

---

## ① 메인 표지 (세로 2:3 — 판매 대표 이미지용)

\`\`\`
전자책 표지 디자인을 만들어 주세요. 세로형 2:3 비율.

스타일: 미니멀하고 전문적인 한국 베스트셀러 실용서 표지. ${b.coverGradient} 떨어지는 대각선 그라데이션 배경. 중앙 하단에 ${b.coverSymbol}. ${b.coverMood} 분위기.

텍스트(정확한 철자로 크고 선명하게 렌더링):
- 메인 타이틀 "${b.title}" 을 상단에 흰색 굵은 고딕체로 가장 크게
- 그 아래 서브 타이틀 "${b.subtitle.slice(0, 30)}" 을 연한 흰색으로 작게
- 하단에 저자명 "${b.author}" 를 작게

실존 인물, 브랜드 로고, 워터마크 없음. 텍스트가 왜곡되지 않고 또렷해야 합니다.
\`\`\`

## ② 스퀘어 썸네일 (1:1 — 아임웹 대표이미지·인스타용)

\`\`\`
전자책 홍보용 정사각형(1:1) 썸네일 디자인을 만들어 주세요.

스타일: ${b.coverGradient} 그라데이션 배경의 미니멀 디자인. 중앙에 ${b.coverSymbol.split(",")[0]} 아이콘. 여백을 충분히 두어 작은 화면에서도 또렷하게.

텍스트(정확한 철자로 크게): "${b.title.split(" ").slice(0, 3).join(" ")}" 을 가장 크게 노란색(#facc15) 굵은 고딕체로, 그 아래 나머지 제목을 흰색으로. 다른 텍스트는 넣지 않습니다.

실존 인물, 로고, 워터마크 없음.
\`\`\`

## ③ 와이드 배너 (16:9 — 상세페이지 상단용)

\`\`\`
전자책 판매 페이지용 와이드 배너(16:9)를 만들어 주세요.

스타일: 왼쪽은 ${b.coverGradient} 그라데이션에 텍스트 영역, 오른쪽은 ${b.coverSymbol.split(",")[0]} 아이소메트릭 일러스트. 미니멀하고 전문적인 분위기.

텍스트(왼쪽 영역, 정확한 철자로): "${b.title}" 을 흰색 굵은 고딕체로 크게, 그 아래 "${b.subtitle.slice(0, 25)}" 를 작게.

실존 인물, 로고, 워터마크 없음.
\`\`\`

## ④ 대체 버전: 텍스트 없는 배경만 (한글이 깨질 때)

\`\`\`
전자책 표지용 배경 디자인을 만들어 주세요. 세로형 2:3 비율. 텍스트는 절대 넣지 마세요.

스타일: ${b.coverGradient} 떨어지는 대각선 그라데이션. 중앙 하단에 ${b.coverSymbol}. 상단 3분의 2는 제목을 얹을 수 있게 비워 두세요.
글자, 문자, 워터마크 일절 없음.
\`\`\`

---

## 사용 팁
- 나노바나나가 한글 텍스트 렌더링이 상대적으로 좋습니다
- 깨지면 ④번으로 배경만 만든 뒤 캔바(Canva)에서 제목을 직접 얹으세요
- 완성 이미지는 1000×1000px 이상인지 확인하세요
`;
}

/* ── 마케팅문구 생성 ── */

function buildMarketingCopy(b: BookDetail): string {
  return `# SNS 홍보 카피 — ${b.title}

## 인스타그램 캡션 1 (문제 제기형)
${b.painPoints[0]}
이건 의지력의 문제가 아닙니다. 시스템의 문제입니다.
${b.title} — ${b.subtitle}
지금 프로필 링크에서 확인하세요.
#살아있는정보책 #${b.title.replace(/\s/g, "").slice(0, 10)}

## 인스타그램 캡션 2 (수치형)
${b.stats[0]}. ${b.stats[1]}.
${b.heroSub}
${b.price}으로 시작하세요.
#정보책 #실천가이드

## 스레드용 1 (경험 공유형)
${b.previewExcerpt}
이 내용이 담긴 가이드, ${b.price}입니다.

## 스레드용 2 (반전형)
${b.problemHeadline[0]} ${b.problemHeadline[1]}
하지만 답은 생각보다 단순합니다.
${b.ctaLine}

## 블로그 포스팅 제목
"${b.heroTagline[0]} ${b.heroTagline[1]} — ${b.subtitle} (${b.stats[0]})"
`;
}

/* ── 외부 API ── */

export interface DetailOutput {
  id: string;
  title: string;
  emoji: string;
  detailHtml: string;
  detailSize: number;
  coverPrompt: string;
  marketingCopy: string;
}

export function generateAllDetails(): DetailOutput[] {
  return BOOKS.map((b) => {
    const html = buildDetailPage(b);
    return {
      id: b.id,
      title: b.title,
      emoji: b.emoji,
      detailHtml: html,
      detailSize: html.length,
      coverPrompt: buildCoverPrompt(b),
      marketingCopy: buildMarketingCopy(b),
    };
  });
}
