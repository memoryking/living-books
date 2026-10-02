from pathlib import Path
root=Path(__file__).resolve().parents[2]
p=root/'.agents/skills/memory-learning-ebook-set/SKILL.md'
s=p.read_text(encoding='utf-8')
block='''
## 2026-10-03 최신 앱 동작 — 아래 과거 학습 규칙보다 우선

앱 루트 `docs/MEMORY_APP_IMPLEMENTATION_2026-10-03.md`와 `docs/MEMORY_APP_30_DAY_SPEC.md`를 먼저 읽는다. 한자 주 학습은 첫 글자 메타 학습만 제공한다. 전체 훈음 보기와 첫 글자 보기의 비교이며 직접 회상보다 우수하다고 주장하지 않는다. `ts-fsrs` 기본 설정+예정 전 정답 보호를 사용한다. 조기 성공은 S/due 보존, 오답은 10분 재학습, 예정 후 평가는 메뉴 무관 정규 계산. S 색과 재학습 대기를 분리한다.

회차는 저장·이어하기하며 최초 결과를 보존한다. 현재 회차의 미확인 항목을 오늘 학습에서 평가하면 한 번 인정한다. 별도 오답 재도전 대기열과 자율 모드, 마지막 10일 별도 시험을 만들지 않는다. 보조 쓰기는 모든 항목 첫 학습 이후이며 주 기록에 영향을 주지 않는다. v1 기록은 백업·마이그레이션하고 v2 평가/회차/계획을 보존한다. 현재 원고는 453개다. 영어 앱은 별개의 향후 앱이며 이미 구현된 것으로 안내하지 않는다.

아래 2026-09-26의 records 불변·임시 회차·고정 간격·자율/메타 선택은 과거 기록이다. 새 검사 `scripts/test-hanja-fsrs.mjs`, `scripts/qa-hanja-fsrs.mjs`와 기존 콘텐츠 동기화 검사를 유지한다. 기능·안내·R2 부분 캡처·상세페이지를 같은 변경에 맞춘다.

'''
marker='# 메모리학습 세트 전자책\n'
if '## 2026-10-03 최신 앱 동작' not in s:s=s.replace(marker,marker+block,1)
p.write_text(s,encoding='utf-8')
(root/'living-books/docs/skills/memory-learning-ebook-set/SKILL.md').write_text(s,encoding='utf-8')
p=root/'AGENTS.md';s=p.read_text(encoding='utf-8');line='\n2026-10-03 구현 갱신: `living-books/docs/MEMORY_APP_IMPLEMENTATION_2026-10-03.md`가 한자 앱의 최신 동작 기준이다. 기존 미구현 표시는 대화 당시 상태다. 영어 앱은 별도 향후 작업이다.\n'
if line not in s:p.write_text(s+line,encoding='utf-8')
print('Project skill and repository copy synchronized; personal global skill untouched.')
