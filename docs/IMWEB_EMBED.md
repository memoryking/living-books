# 아임웹 iframe 내보내기

`/admin/export`의 **iframe 코드 복사 (추천)**와 **암기앱 iframe 코드 복사**는 해당 아임웹 페이지의 푸터를 숨기는 스타일을 포함한다.

- 공통 스타일: `src/lib/imweb-embed.ts`
- 적용 대상: `data-lb-hide-imweb-footer` 속성이 있는 iframe이 존재하는 문서의 `#doz_footer_wrap`, `#doz_footer`. 실제 vipup.site/hanja의 푸터 ID를 확인했다.
- 다른 페이지 및 iframe 내부 콘텐츠에는 적용하지 않는다. 일반 `footer` 태그를 일괄 숨기지 않는다.
- CSS `:has()`를 지원하는 브라우저에서 작동하며, 늦게 삽입된 푸터도 숨긴다. 마지막 해당 iframe이 제거되면 푸터가 다시 표시된다.
- 기존 아임웹 위젯은 새 내보내기 코드로 한 번 교체하고 저장·게시해야 한다. 이후 원격 전자책 내부 변경은 자동 반영되지만, 호스트 위젯 코드 변경은 다시 복사해야 한다.
- 직접 뷰어 코드·상세페이지 코드 복사에는 이 처리를 적용하지 않는다.

확인: PC·모바일 크기에서 호스트 푸터 숨김, 일반 footer 및 iframe 내부 footer 유지, 동적 푸터 삽입, iframe 제거 시 복원.
