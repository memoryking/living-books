import type { DetailOutput } from './generate-detail-page';

const origin = 'https://living-books-beta.vercel.app';
export function hanjaDetails(): DetailOutput[] {
  return (['hanja-memory', 'hanja'] as const).map(id => {
    const app = id === 'hanja-memory';
    const kind = app ? '암기앱' : '전자책';
    const title = `그림으로 기억하는 한자 453 · ${kind}`;
    const hook = app ? '봤을 땐 아는데,<br>가리면 막히나요?' : '복잡한 한 획이,<br>선명한 한 장면으로.';
    const intro = app ? '읽었다는 느낌을 넘어, 직접 꺼내 보는 공부.' : '한자 · 그림 · 암기 문장 · 활용 예시를 한 흐름으로.';
    const features = app ? [
      ['오늘 학습', '지금 복습할 한자를 먼저, 새 한자는 5개씩 그림으로 익힙니다.'],
      ['미리 복습', '시험 전에는 단원·책갈피·직접 고르기로 최대 10개씩. 원래 복습 일정은 유지됩니다.'],
      ['자율 학습과 메타 학습', '충분히 생각하거나, 기본 5초 안에 훈음의 첫 글자를 골라 확인합니다.'],
      ['손으로 써서 비교', '뜻과 음을 보고 쓴 글씨 위에 정답을 겹쳐 확인합니다. 자동 채점은 하지 않습니다.'],
    ] : [
      ['한 글자, 한 장면', '그림과 글자 모양을 연결하는 짧은 연상 문장으로 뜻에 접근합니다.'],
      ['453개 항목 · 906개 예시', '한자·부수·구성 요소를 29개 단원으로 읽고 실제 단어와 구성 예시로 다시 만납니다.'],
      ['내 속도로 읽기', '목차에서 찾아 읽고, 스크롤형 또는 한 글자씩 보는 페이지형을 선택합니다.'],
      ['전자책 전용 부록', '日·曰, 土·士처럼 헷갈리는 글자의 차이를 비교합니다. 이 부록은 암기앱에 포함되지 않습니다.'],
    ];
    const read = app ? '/premium/hanja-memory/read' : '/premium/hanja/read';
    const detailHtml = `<style>.hm-detail{font-family:Arial,'Malgun Gothic',sans-serif;color:#183e33;max-width:860px;margin:auto;background:#faf9f2;line-height:1.75;word-break:keep-all;overflow-wrap:break-word}.hm-detail *{box-sizing:border-box}.hm-detail section{padding:56px 36px}.hm-detail h1{font-size:clamp(34px,7vw,64px);font-weight:850;line-height:1.2;letter-spacing:-.06em;margin:20px 0}.hm-detail h2{font-size:30px;font-weight:750;line-height:1.4;margin:0 0 24px}.hm-detail h3{font-weight:700;margin:0 0 12px}.hm-detail p{margin:12px 0 24px}.hm-detail .hm-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px}.hm-detail article{padding:24px;background:white;border:1px solid #dbe3d8;border-radius:16px}.hm-detail img{width:100%;height:auto;display:block;border-radius:12px}.hm-detail a{display:inline-block;padding:14px 24px;border-radius:9px;background:#225b48;color:white;text-decoration:none;font-weight:bold}@media(max-width:600px){.hm-detail section{padding:36px 20px}.hm-detail h2{font-size:26px}.hm-detail .hm-grid{grid-template-columns:1fr}}</style>
<div class="hm-detail"><section><strong>그림으로 기억하는 한자 453 · ${kind}</strong><h1>${hook}</h1><p>${intro}</p><img src="${origin}/promo/art/${id}.png" alt="${app ? '태양이 떠오르는 학습 화면' : '책에서 펼쳐지는 자연의 기억 장면'}"></section>
<section><h2>${app ? '정답을 보기 전에,<br>기억부터 꺼내 보세요.' : '외울 내용을,<br>떠올릴 장면으로 바꾸세요.'}</h2><div class="hm-grid">${features.map(([h,p]) => `<article><h3>${h}</h3><p>${p}</p></article>`).join('')}</div></section>
<section style="background:#183e33;color:white"><h2>보고 → 연결하고 → 가리고 확인하기</h2><p>그림은 시작점입니다. 글자와 뜻을 연결한 다음, 답을 가리고 직접 떠올려 봅니다.</p><p>창작 암기 이야기는 역사적 어원 설명과 구분합니다. 학습 효과는 학습 방법과 반복에 따라 달라집니다.</p></section>
<section><h2>이런 분에게 권합니다.</h2><p>한자를 보면 익숙하지만 훈음이 잘 떠오르지 않는 분 · 그림과 짧은 문장으로 배우고 싶은 분 · ${app ? '복습할 시점을 정리하고 시험 전에 미리 연습하고 싶은 분' : '단원별로 차근차근 읽으며 헷갈리는 글자를 비교하고 싶은 분'}</p><h2>시작 전에 알아두세요.</h2><p>${app ? '학습 기록은 사용 중인 브라우저에 저장됩니다. 기기 간 자동 동기화는 없으며 기록 내보내기·가져오기를 사용합니다. 메타 학습은 훈음 첫 글자 선택 문제로, 훈음 전체를 쓰는 시험과 다릅니다.' : '웹에서 읽는 전자책입니다. 글자 크기를 조절하고 목차로 이동할 수 있습니다. 복습 일정 관리와 타이머 문제 풀이는 별도의 암기앱에서 제공합니다.'}</p><p>암기앱과 전자책은 한자별 학습 내용만 공통 원고로 연결됩니다. 헷갈림 비교는 전자책 전용 부록입니다.</p><a href="${origin}${read}" target="_blank" rel="noopener">${kind} 화면 살펴보기 →</a></section></div>`;
    const scene = app ? '짙은 에메랄드 공간, 거대한 스마트폰 화면에서 황금빛 태양이 떠오르는 한 장면' : '펼친 상아색 책에서 황금 태양, 은빛 달, 초록 산과 푸른 물이 미니어처처럼 펼쳐지는 장면';
    const commonPrompt = `프리미엄 입체 일러스트, ${scene}. 강한 명암, 선명한 질감, 한눈에 들어오는 중심 피사체. 제목을 넣을 여백 확보. 가짜 UI와 숫자·로고·워터마크 없이 이미지 생성. 한국어 문구는 후편집으로 정확히 조판.`;
    const shortHook = app ? '봤을 땐 아는데, 가리면 막히나요?' : '한자 453개, 장면으로 읽어보세요.';
    return {id,title,emoji:'字',detailHtml,detailSize:detailHtml.length,
      coverPrompt:`세로 2:3 표지, ${commonPrompt}\n후편집 제목: 그림으로 기억하는 한자 453\n구분: ${kind}\n보조 문구: ${intro}`,
      thumbnailPrompt:`정사각형 1:1, 1500×1500px 원본(750×750px 사용 가능). ${commonPrompt}\n후편집 문구: ${app ? '가리면 기억나나요?' : '한 획을 한 장면으로'}\n큰 제목 2줄 이내, 작은 글씨 최소화, 짙은 초록과 황금색 대비.`,
      marketingCopy:[`[인스타그램] ${shortHook} ${intro} ${features[0][1]} → https://vipup.site/${id}`,`[스레드] ${app ? '한자를 오래 보는 것과, 가리고 답하는 것은 다릅니다. 오늘 복습할 글자부터 꺼내 보세요.' : '日은 태양, 月은 달. 익숙한 글자에서 시작해 한 장면씩 연결합니다. 그림 옆 짧은 문장이 다음 회상의 단서가 됩니다.'} https://vipup.site/${id}`,`[블로그 도입] ${title}. ${features.map(f=>f[1]).join(' ')}`,`[문자·메신저] ${shortHook} ${kind} 구성 보기: https://vipup.site/${id}`,`[짧은 광고] ${app ? '읽기만 했다면, 이제 가려보세요. 오늘 학습으로 기억 확인.' : '빽빽한 획 대신, 또렷한 한 장면. 그림으로 읽는 한자 453.'}`].join('\n\n'),
      metaDesc:`${title}. ${app ? '오늘 학습·미리 복습·자율 및 메타 학습·쓰기 비교로 한자를 가리고 확인합니다. 브라우저에 복습 기록 저장.' : '453개 학습 항목과 906개 활용 예시, 29개 단원. 목차·스크롤·페이지형 읽기와 전용 헷갈림 비교 부록.'}`};
  });
}
