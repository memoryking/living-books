# 배포와 소스 보관

- GitHub: `memoryking/living-books`, 운영 브랜치: `master`.
- Vercel: `memoryking/living-books`, GitHub `master`와 연결됨.
- 기본 배포 절차: 변경 검토 → 적절한 검사/빌드 → 커밋 → `git push origin master` → Vercel Git 자동 배포 상태 및 운영 화면 확인.
- 운영: https://living-books-beta.vercel.app
- Vercel CLI 직접 배포는 예외적인 점검/복구에만 사용한다. 직접 배포했다면 GitHub에 같은 소스가 반영되었는지 확인한다. CLI 배포의 Git 메타데이터만으로 해당 커밋과 배포 파일이 동일하다고 판단하지 않는다.
- `.env*`, `.vercel`, 브라우저 프로필/검증 캡처인 `artifacts/`, 재생성 가능한 `outputs/`는 커밋하지 않는다.
- 한자 공통 원고, 생성 스크립트, PNG 원본과 WebP 표시 이미지, R2 안내 이미지 URL 매니페스트는 버전 관리한다. R2 키·비밀 값은 환경 설정으로만 관리한다.
- 상위 작업공간의 메모리학습 세트 스킬은 이 저장소의 `docs/skills/memory-learning-ebook-set/`에도 보관한다. 이 사본은 수동 동기화하며 폴더 사이 자동 동기화 기능은 없다.
