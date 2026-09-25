# 승인된 구현과 작업 위치

화면 참고: [그림 학습형](reader-desktop.png), [두 형식 내보내기](export-mobile.png). 화면을 복원하거나 새 주제에 적용할 때 확인한다.

기준 프로젝트: `C:/Users/memoryking/00_DEV/14_전자책/living-books`.
상세 운영 기록: 프로젝트의 `data/hanja-memory/README.md`. 2026-09-24 기준 이미지 경계 보정, 도구 자동 숨김, 단원 정답 펼치기 해결 및 검증 범위를 기록했다. 다음 수정에서도 해당 문서를 함께 갱신한다.
운영 서비스: `https://living-books-beta.vercel.app`.
프로젝트가 존재하면 최신 파일과 AGENTS.md를 먼저 확인한다. 없으면 `content-model.md`와 스킬의 기능 명세를 사용해 새 프로젝트에 구현한다. 환경 파일·인증·기존 배포 ID를 새 프로젝트에 복사하지 않는다.

## 파일 지도

- `data/hanja-memory/book.json`: 유일한 편집 원본. entries, chapters, comparisons.
- `source.tsv`: 최초 입력 보존본. 교정으로 덮어쓰지 않는다.
- `scripts/build-hanja.mjs`: 공통 JSON에서 본문·비교·교정표 및 호환 TSV/JSON 생성. `lessons.tsv`, `editorial.json`, `chapters.json`, `comparisons.json`은 생성물이다.
- `package.json`: prebuild·predev가 content:sync 실행. 운영 빌드에도 적용. 개발 서버 실행 중 수정 시 content:sync 실행.
- `src/lib/hanja-book.ts`: 그림형에서 같은 JSON을 직접 import.
- `src/components/hanja/`: HanjaReader, HanjaImage, WritingPad, CSS. 대상 주제로 일반화하여 사용.
- `src/lib/hanja-study.ts`: ID별 학습 상태·복습 간격·기록 파일 검증.
- `/premium/hanja-memory/read`: 그림 학습형.
- `/premium/hanja-memory/read/full/route.ts`: generateWidget의 동일한 기존형 뷰어를 완전한 HTML로 응답. 목차·전체 본문·페이지/스크롤 전환·고정 목차 버튼 포함. 일반 GuideBook으로 바꾸면 페이지 기능이 누락되므로 주의한다.
- `src/lib/generate-widget.ts`: 공통 본문으로 기존 스크롤·페이지형 위젯 출력.
- `public/widget/hanja-reader.js`: 번호 제목별 한 항목 한 페이지와 서문 흐름형 페이지를 결합한 뷰어. 전체 본문 URL·iframe·독립 HTML 모두 이 스크립트를 사용한다. 항목 내 세로 스크롤, 확대/답 펼침 후 동일 ID 유지, 453개 항목과 다음 항목 이동을 `scripts/qa-hanja-classic.mjs`로 검증한다.
- `src/app/admin/export/WidgetExportClient.tsx`: 두 카드와 코드·미리보기. 새 책에서는 hanja ID 조건을 책별 formats 설정으로 일반화.
- `public/hanja-memory/`: 생성 이미지. 4×4 묶음은 CSS 배경 위치로 한 장면씩 표시한다. 개별 이미지 방식도 가능.
- 묶음 이미지를 정확한 4등분으로 가정하지 않는다. 공통 원고의 `imageCrop`은 실제 그림 경계 `[왼쪽, 위, 너비, 높이]`를 원본 대비 0~1로 기록하며 `imageMask`는 이웃 그림과 경계가 맞물리는 예외만 처리한다. React·기존형·독립 HTML에 같은 범위와 종횡비를 적용한다. 아래쪽만 일괄 가리면 말의 머리처럼 주 대상이 잘릴 수 있다. `scripts/audit-hanja-image-bounds.mjs`는 원본을 바꾸지 않고 검토 후보만 만든다. 투명 픽셀은 흰 배경으로 해석하며, 전체 검토 이미지와 실제 화면을 확인한 후 원고에 반영한다.
- `scripts/export-hanja.mjs`: 동기화 후 이미지·CSS·JS를 포함한 단일 HTML 출력. 내려받은 파일은 고정 사본.

## 변경 작업

어느 화면을 가리켜도 공통 book.json의 해당 ID를 수정한다. 같은 설명을 두 번 수정하지 않는다. 그림과 교정·출처도 공통 데이터에 반영한다. 서문·학습 안내처럼 특정 형식에만 있는 편집 요소는 해당 원고에서 수정한다.

`npm run content:sync` → `npm run test:memory-sync` → `node scripts/check-hanja.mjs` → `npm run build`로 확인한다. 새 책에서는 453·29 같은 고정 검사를 실제 입력 수로 바꾼다. 옛 TSV 편집 방식으로 돌아가 JSON을 덮어쓰지 않는다.

## 모바일·배포

한자 그림 학습형의 최신 검증은 `scripts/qa-hanja-compact.mjs`다. 1280×800·390×844·320×568·844×390에서 단일 화면 읽기/회상, 패널 넘침 없음, 검색/소개/듣기 제거, 종횡비 유지, 구성 글자와 교정 안내 표시를 확인한다. `TextPages.tsx`는 긴 설명을 잘라 버리지 않고 높이에 맞춘 설명 페이지로 나눈다. 이전 `qa-hanja-browser.mjs`의 검색·옛 목록 테스트는 현 UI에 그대로 적용하지 않는다.

단원 끝 ‘이 장을 덮기 전에’와 ‘단원 정답 펼치기’도 항목 페이지처럼 한 페이지 안에서 세로로 펼친다. 다단 흐름형으로 처리하면 긴 정답 목록이 다음 칸으로 밀려 빈 상자로 보인다. 29개 복습 페이지와 PC·모바일에서 첫/마지막 정답 표시를 검증한다. Markdown 정답 목록에는 `- 33.`처럼 목록을 중첩하지 말고 `- **033** · 한자 · 훈음`을 쓴다.

320·360·390·430·768px에서 가로 넘침·검색·목차·그림·터치 쓰기·지우기·다음 카드 상단 이동·복습을 검사한다. 자동 터치 검사에서는 획 종료 뒤 안정 시간을 두어 다음 탭과 제스처가 겹치지 않게 한다. 입력 글자 16px, 터치 영역 44px를 기본으로 삼는다.

기록은 브라우저 저장이며 기기간 자동 동기화가 아니다. 새 책의 저장 키를 분리하고 개정 시 ID를 유지한다. iframe의 저장소 제한도 안내하고 기록 내보내기를 제공한다.

배포는 대화에서 허가한 대상에 수행한다. 스킬 자체를 배포 허가로 해석하지 않는다. .vercelignore는 artifacts·outputs·원본 PNG를 제외하고 웹용 그림과 원고는 포함한다. 실제 페이지·이미지 응답을 검증한다.
