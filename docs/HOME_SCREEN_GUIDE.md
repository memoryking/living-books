# VIPUP 홈 화면 추가 안내

관리자 `/admin/export` → **VIPUP 홈 화면 추가 안내** → 코드 복사.
아임웹 공통 Body/Footer 코드 또는 홈페이지 코드 위젯에 붙여넣고 저장·게시한다. 푸터가 숨겨져도 스크립트는 document.body에 별도 안내를 생성한다. iframe 안에 넣지 않는다.

공개 스크립트: `/imweb/home-screen.js`. `vipup.site`, `www.vipup.site`의 `/`에서만 실행한다. 전자책과 암기앱 학습 중에는 표시하지 않는다. 중복 삽입과 iframe 실행을 차단하고 Shadow DOM으로 사이트 CSS와 분리한다.

- 안내는 버튼을 눌러 펼친다. 기기 자동 선택과 수동 전환을 제공한다. iPad 데스크톱 UA와 주요 인앱 브라우저도 안내한다.
- 닫기/Escape/오늘은 그만 보기: 기기의 현지 날짜를 저장하여 오늘 하루 숨기고 다음날 방문 시 다시 표시한다. 예전 7일 숨김 기록도 원래 닫은 날짜로 환산하여 적용한다. 추가했어요: 해당 브라우저에서 계속 숨김. 키는 `vipup-home-guide-v1`이다. 실제 설치를 확인했다고 표시하지 않는다.
- standalone 모드 및 appinstalled 이벤트에서는 숨긴다. 일반 바로가기의 존재는 자동 감지할 수 없어 사용자의 ‘추가했어요’ 선택을 사용한다. 저장이 차단되면 현재 화면에서만 닫힌다.
- 미리보기 `/imweb/home-screen-preview.html`은 저장 여부·도메인 제한을 무시하므로 반복 검토할 수 있다.
- 서비스 워커/매니페스트를 설치하지 않는다. 오프라인 읽기·알림·계정 및 기록 동기화를 추가하거나 약속하지 않는다. 기존 앱 학습 안내 및 부분 캡처는 변경 대상이 아니다.

공식 안내 확인 (2026-09-27):
- https://support.google.com/chrome/answer/15085120?co=GENIE.Platform%3DAndroid&hl=en
- https://support.apple.com/guide/iphone/open-as-web-app-iphea86e5236/ios

검증: 기기별 문구, 펼치기/닫기/만료/완료 저장, 저장 차단, 중복 스크립트, 학습 URL 제외, standalone 제외, 모바일 작은 화면의 넘침 및 PC 표시. 실사이트 적용은 아임웹에 위 코드를 저장·게시한 후 완료된다.
