# 전자책 A5 홍보카드 제작 프롬프트

프로젝트의 전자책 카탈로그와 실제 원고를 읽고, 각 상품별로 독자가 한 장씩 가져갈 A5 홍보카드를 만들어 주세요.

목표: 멀리서도 한눈에 읽히는 질문형 제목 → 독자의 문제 → 책 안에서 확인할 구체적 내용 → QR 접속. 강한 이미지와 간결한 문구를 사용하되 결과·판매량·후기·의학적 효과를 지어내지 않습니다.

1. 상품 ID·제목·유형·원고·목차·판매 주소를 확인합니다. 암기앱 hanja-memory와 전자책 hanja는 별도 상품이며 한자별 내용만 연결되고 헷갈림 비교는 전자책 전용입니다.
2. 상품별로 대상 독자의 질문 하나를 선택합니다. 2줄 이내 큰 제목, 보조 문장 1개, 실제 목차에 근거한 내용 2개, 짧은 CTA로 제한합니다. 기능 소개를 판매 효과로 과장하지 않습니다.
3. 독립된 히어로 이미지 하나를 실제 생성합니다. 가로 3:2, 최소 1536×1024, 하나의 선명한 시각적 비유, 강한 명암과 재질, 제품별로 다른 장면. 글자·QR·로고·허위 인증은 이미지에 넣지 않습니다. 이미지 프롬프트와 출처 경로를 보관합니다. 인쇄 카드에도 3:2 비율(120×80mm)을 유지하고 object-fit:contain으로 피사체를 자르지 않습니다.
4. 한국어 제목·설명·주소·QR은 편집 가능한 HTML/SVG로 조판합니다. 이미지에 합성된 가짜 QR은 금지합니다. 정식 QR 라이브러리, 흰색 quiet zone 4모듈 이상, 실물 30mm 이상, 검정과 흰색 대비를 유지합니다.
5. 크기는 A5 세로 148×210mm. 중요 내용은 가장자리 7mm 이상 안쪽, 제목 약 25pt·본문 약 9pt·CTA 약 13pt. 한국어 폰트를 동봉하고 라이선스를 보존합니다. 불필요한 작은 글자와 긴 문장은 줄입니다.
6. 기본 링크는 https://vipup.site/상품ID. URL을 임의로 바꾸지 않습니다. QR 해독과 실제 주소 접속은 별도로 검증하고, HTTP 200만으로 올바른 상품 연결이라고 단정하지 않습니다. 확인되지 않은 목적지는 보고합니다.
7. 상품별 A5 PDF, 전체 A5 PDF, A4 가로에 같은 카드 두 장을 넣은 PDF를 만듭니다. A4 중앙 재단선, 배경 인쇄, 실제 크기 100%, 머리글·바닥글 끄기 안내를 제공합니다.
8. 모든 PDF 페이지를 이미지로 렌더링해 글자 잘림·겹침·이미지 구도·QR 여백을 확인합니다. 실제 렌더링된 QR을 해독하여 주소와 일치하는지 검증합니다. 자동 검사와 육안 검사를 모두 통과한 뒤 관리자 내보내기에 연결합니다.
9. 내용 변경 시 src/lib/promo-cards.ts의 문구와 이미지, PDF를 함께 갱신합니다. scripts/export-promo-cards.mjs로 생성하고 기능·주소·PDF 검증 후 GitHub 푸시 → Vercel 자동 배포를 확인합니다.

이미지 기본 프롬프트:
“Create a premium dramatic editorial photographic/3D concept image, landscape 3:2, 1536×1024 or larger. [책별 핵심 주제와 독자의 문제를 표현하는 독특한 시각적 비유]. One bold focal subject, tactile materials, strong light and color contrast, generous safe edges, complete subject visible. No text, numbers, logos, QR codes or invented certifications. No implied guaranteed results. All Korean typography and the real QR will be placed outside this image.”

문구 기본 구성:
- 상단: 브랜드 / 주제
- 제목: “[독자의 생생한 질문 1줄]\n[호기심을 여는 짧은 1줄]”
- 보조: 책이 제공하는 관점 한 문장
- 이미지: 해당 주제의 독립 장면
- 상품명 / 목차 근거 내용 2줄
- CTA: “궁금했던 답, 목차부터 확인하세요.”
- 실물 QR / 읽을 수 있는 주소
