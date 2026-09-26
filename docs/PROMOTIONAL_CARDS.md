# 상품별 A5 홍보카드

2026-09-26: 관리자 내보내기 30종의 전자책과 한자 암기앱 1종, 별도 공개 가이드 3종(가정 상비약·동물의약품·인간관계)을 포함한 총 34종.

## 상품 분리
- 암기앱: hanja-memory, /premium/hanja-memory/read. 브라우저 기록 키와 학습 항목 ID는 유지.
- 전자책: hanja, /premium/hanja/read, /embed/hanja. 기존 /premium/hanja-memory/read/full 및 /embed/hanja-memory는 호환 경로로 유지.
- 원고는 data/hanja-memory/book.json. 별도 복사본을 만들지 않음. ebook-appendix.json의 비교 부록은 전자책 전용.
- 각각의 상세페이지·표지 프롬프트·SNS 문구 5종·썸네일 프롬프트·메타 설명은 src/lib/hanja-marketing.ts.

## 제작·업데이트
원본: src/lib/promo-cards.ts(책별 카피/주소), src/lib/render-promo.ts(인쇄 조판), public/promo/art(생성 이미지), public/promo/fonts(글꼴·라이선스).

관리자: /admin/export에서 개별 카드와 다운로드, /admin/promo/all에서 전체 보기. A4 인쇄는 ?layout=a4. A4 가로 한 장에 같은 카드 2장, 중앙 재단선. 전체 A4는 34페이지/68장. A5는 34페이지/34장.

빌드 후 새 로컬 서버를 켜고 PROMO_BASE 환경변수로 URL을 지정하여 node scripts/export-promo-cards.mjs 실행. Chrome CDP 9343 포트를 사용하므로 같은 스크립트 중복 실행 금지. 모든 실제 렌더 QR 해독, 레이아웃 검사, 개별 PDF와 통합 PDF, manifest 생성. python scripts/optimize-promo-pdf.py로 사진 스트림만 고품질 JPEG(90)로 압축하고 python scripts/verify-promo-pdf.py로 페이지 크기·수·폰트·잘림 검사와 실제 PDF 렌더링을 수행한다. 원본 PNG·벡터 글자·QR은 유지한다. PyMuPDF가 필요하며 프로젝트 임시 의존성 경로는 artifacts/pdf-python이다. 최종 PDF는 public/promo/pdf.

등록된 프리미엄 카탈로그와 홈의 공개 가이드 목록을 대조하여 제작한다. home-medicine/pet-medicine/relationships는 별도 공개 가이드로 포함한다. 새 상품 등록 시 홍보 카피·이미지를 추가하고 전체 생성·검증을 반복한다. 상품 카피가 없으면 생성이 실패하도록 하여 조용히 누락시키지 않는다.

재사용 사용자 프롬프트: public/promo/PROMPT.md. 실제 생성 이미지 프롬프트 기록: public/promo/image-prompts.json.

## 인쇄와 QR
148×210mm A5, 중요 내용 약 8mm 안쪽. QR 35mm, M 오류정정·4모듈 여백. 실제 크기 100%, 배경 그래픽 켜기, 머리글·바닥글 끄기. PDF는 인쇄용 홍보물이며 웹 전자책을 PDF로 대체하지 않는다.

주소는 사용자 지정 https://vipup.site/상품ID. 외부 아임웹의 슬러그/판매 페이지 설정은 별도 관리된다. QR 코드가 올바른 주소로 해독되는 것과 해당 외부 주소가 원하는 상품으로 연결되는 것은 다른 검사다. HTTP 200/공통 사이트 제목만으로 전 상품 연결 완료를 주장하지 않는다. 최신 확인 결과를 artifacts/promo-qa/links.json에 기록한다.

2026-09-26 확인: 34개 중 4개(ai-sidejob, home-medicine, pet-medicine, relationships)는 404, 15개는 로그인 이동, 15개는 로그인 없이 HTTP 200이다. 목적지 요청 형식은 유지했으며 외부 아임웹 권한을 임의 변경하지 않았다. 관리자 내보내기에 해당 상태를 표시하며 public/promo/link-status.json에서 확인할 수 있다. 사이트에서 올바른 상품이 표시되는 최종 확인 후 인쇄물을 배치한다.

건강 분야 카드는 정보 학습용임을 명시하고 약 구매·용량 변경·치료 효과를 광고하지 않는다. 새 후킹 문구에도 실제 원고에서 제공하지 않는 결과·기간·숫자를 만들어 넣지 않는다.
