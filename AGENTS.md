<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## 기능과 학습 안내의 동시 갱신 (필수)

사용자가 기능 변경을 요청하면 별도 요청을 기다리지 말고 같은 작업에서 학습 안내도 갱신한다. 기능만 수정하고 안내를 다음 작업으로 남기지 않는다. 세부 절차는 `docs/LEARNING_GUIDE_MAINTENANCE.md`를 따른다.

- 변경 전 실제 동작과 안내를 함께 확인한다. 버튼·메뉴·필터·출제 순서·복습 일정·저장/백업·쓰기 비교가 바뀌면 설명, 예시, FAQ의 관련 부분을 모두 수정한다.
- 설명 대상 화면이 달라지면 필요한 조작 영역만 다시 캡처해 R2 새 경로에 업로드하고 `guide-screens.json`을 갱신한다. 변경되지 않은 캡처는 재사용한다.
- 안내는 PC에서 이미지 왼쪽/설명 오른쪽, 모바일에서 이미지 위/설명 아래로 표시한다. 전체 화면 캡처와 별도 ‘화면 보기’ 링크로 되돌리지 않는다.
- 기능 검사와 관련 안내/이미지 표시 검사를 마친 뒤 소스·안내·매니페스트·문서를 같은 커밋에 포함하고 GitHub 푸시 → Vercel 자동 배포 → 운영 확인 순서로 진행한다.
- 이는 담당 에이전트의 필수 작업 규칙이다. 앱이 임의의 코드 변경을 감지해 설명을 자동 집필하는 런타임 기능이 있다고 표현하지 않는다.
