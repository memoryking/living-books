<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## 전자책 기획·집필·홍보 공통 기준

기존 제작 프롬프트·전문 스킬이 기본이며 새 자료는 기획·목차·본문·부록·상세페이지의 내용 품질 보완에만 적용한다. HTML 전자책·아임웹 코드/iframe 임베딩·뷰어·관리자 내보내기 방식을 변경하지 않는다. PDF 전자책으로 전환하지 않는다. 별도 인쇄 홍보카드 PDF는 기존대로 유지한다. 충돌하면 기존 제작/출력 규칙이 우선한다.

전자책 제작·개정 작업은 `docs/EBOOK_CREATION_PROMPT.md`를 먼저 읽고 필요한 단계에 `docs/EBOOK_PROMPT_MODULES.md`를 적용한다. 메모리학습 세트와 A5 홍보카드는 각각 `docs/skills/memory-learning-ebook-set/SKILL.md`, `docs/skills/ebook-promo-card/SKILL.md`의 전문 규칙을 함께 따른다. 웹 전자책 기본 형식, 공통 원고, 안정적 ID, 전자책 전용 부록을 유지한다. 부분 수정은 관련 단계만 적용한다.

제작 규칙을 바꾸면 `docs/EBOOK_PROMPT_CHANGELOG.md`에 실제 날짜·버전·이유·변경 전후·영향 파일·검증·소급 적용 여부를 같은 작업에서 기록한다. 공통 문서와 관련 전문 스킬을 연결하고 프로젝트 `.agents/skills/`와 `docs/skills/` 사본을 일치시킨다. 개인 전역 스킬은 별도이며 수행하지 않은 동기화를 주장하지 않는다. 새 자료의 실제 내용과 분석 추론을 구분하고 원본 자료 전문을 공개 디렉터리에 복제하지 않는다.

## 기능과 학습 안내의 동시 갱신 (필수)

한자 세트는 `book.json`의 한자별 학습 내용만 앱·전자책에 공통 연동한다. `ebook-appendix.json`의 헷갈림 비교는 전자책 전용 부록이며 앱 메뉴/데이터에서 제외한다. 부록 편집은 전자책에만 반영하고 `scripts/test-hanja-sync.mjs`로 분리 상태를 검증한다.

사용자가 기능 변경을 요청하면 별도 요청을 기다리지 말고 같은 작업에서 학습 안내도 갱신한다. 기능만 수정하고 안내를 다음 작업으로 남기지 않는다. 세부 절차는 `docs/LEARNING_GUIDE_MAINTENANCE.md`를 따른다.

- 변경 전 실제 동작과 안내를 함께 확인한다. 버튼·메뉴·필터·출제 순서·복습 일정·저장/백업·쓰기 비교가 바뀌면 설명, 예시, FAQ의 관련 부분을 모두 수정한다.
- 설명 대상 화면이 달라지면 필요한 조작 영역만 다시 캡처해 R2 새 경로에 업로드하고 `guide-screens.json`을 갱신한다. 변경되지 않은 캡처는 재사용한다.
- 안내는 PC에서 이미지 왼쪽/설명 오른쪽, 모바일에서 이미지 위/설명 아래로 표시한다. 전체 화면 캡처와 별도 ‘화면 보기’ 링크로 되돌리지 않는다.
- 기능 검사와 관련 안내/이미지 표시 검사를 마친 뒤 소스·안내·매니페스트·문서를 같은 커밋에 포함하고 GitHub 푸시 → Vercel 자동 배포 → 운영 확인 순서로 진행한다.
- 이는 담당 에이전트의 필수 작업 규칙이다. 앱이 임의의 코드 변경을 감지해 설명을 자동 집필하는 런타임 기능이 있다고 표현하지 않는다.
