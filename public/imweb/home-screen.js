/* VIPUP home-screen guide. This is guidance, not a PWA installer. */
(() => {
  'use strict';
  const preview = document.currentScript?.dataset.preview === 'true';
  if (window.top !== window.self || document.getElementById('vipup-home-guide')) return;
  if (!preview && (!['vipup.site', 'www.vipup.site'].includes(location.hostname) || location.pathname !== '/')) return;
  const standalone = () => matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  const key = 'vipup-home-guide-v1';
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(key) || '{}') || {}; } catch {}
  // Interpret older seven-day dismissals as a dismissal on their original day.
  const today = new Date().toDateString();
  const dismissedOn = saved.dismissedOn || (typeof saved.until === 'number' ? new Date(saved.until - 7*86400000).toDateString() : null);
  if (!preview && (standalone() || saved.done || dismissedOn === today)) return;
  function mount() {
    if (document.getElementById('vipup-home-guide')) return;
    const host = document.createElement('div'); host.id = 'vipup-home-guide';
    const root = host.attachShadow({mode:'open'});
    root.innerHTML = `<style>
      :host{all:initial;position:fixed;bottom:max(14px,env(safe-area-inset-bottom));left:50%;transform:translateX(-50%);width:min(440px,calc(100% - 24px));z-index:10000;font-family:Arial,'Malgun Gothic',sans-serif;color:#203e36;font-size:14px;line-height:1.6;word-break:keep-all;overflow-wrap:break-word}
      *{box-sizing:border-box}section{background:#fff;border:1px solid #cddbd2;border-radius:18px;box-shadow:0 8px 35px #163a342b;padding:18px;max-height:calc(100dvh - 32px);overflow:auto}header{display:flex;align-items:start;gap:12px}h2{font-size:17px;line-height:1.5;margin:0;flex:1}p{margin:8px 0 12px;font-size:13px;color:#52675f}button,a{font:inherit}button{cursor:pointer;border:1px solid #cedbd2;border-radius:9px;padding:9px 12px;background:#fff;color:#245c4b;min-height:44px}button:focus-visible,a:focus-visible{outline:3px solid #c38c24;outline-offset:2px}.close{border:0;padding:0;min-width:36px;min-height:36px;font-size:24px;margin-top:-5px}.primary{background:#245c4b;color:white;border-color:#245c4b;width:100%;font-weight:bold}.tabs{display:flex;gap:5px;margin:12px 0}.tabs button{flex:1;padding:8px 4px;font-size:12px}.tabs button[aria-pressed=true]{background:#eaf2e8;font-weight:bold}ol{margin:12px 0;padding-left:23px}li{margin:8px 0}a{color:#245c4b}.actions{display:flex;gap:8px;margin-top:12px}.actions button{flex:1;font-size:13px}small{display:block;color:#6b776f;font-size:12px;margin-top:10px}[hidden]{display:none!important}
      </style><section aria-label="VIPUP 홈 화면 추가 안내"><header><h2>홈 화면에 담고,<br>매일 한 번 읽어보세요</h2><button class="close" aria-label="안내 닫기 · 오늘 하루 숨기기">×</button></header><p>VIPUP 아이콘 하나로 무료·유료 전자책 메뉴에 다시 방문하세요.</p><button class="primary" id="open" aria-expanded="false" aria-controls="instructions">홈 화면에 추가하는 방법</button><div id="instructions" hidden><div class="tabs" aria-label="기기 선택"><button data-device="ios">아이폰·아이패드</button><button data-device="android">안드로이드</button><button data-device="desktop">PC</button></div><div id="steps" aria-live="polite"></div><small>현재 페이지를 직접 추가해 주세요. 인터넷 연결이 필요하며, 유료 책의 로그인·이용 권한은 그대로 적용됩니다.</small><div class="actions"><button id="done">추가했어요 · 안내 그만 보기</button><button id="later">오늘은 그만 보기</button></div></div></section>`;
    const ua = navigator.userAgent;
    const inApp = /KAKAOTALK|Instagram|FBAN|FBAV|NAVER\(/i.test(ua);
    const select = device => {
      root.querySelectorAll('[data-device]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.device === device)));
      const notes = inApp ? '<p><strong>앱 안에서 보고 계신가요?</strong> 이 앱의 메뉴에서 외부 브라우저로 열거나, Safari·Chrome에서 vipup.site를 직접 열어 주세요.</p>' : '';
      const content = {
        ios: '<ol><li>Safari에서 <strong>vipup.site</strong>를 엽니다.</li><li>공유 버튼(위쪽 화살표)을 누릅니다. 메뉴 안에 있을 수도 있어요.</li><li><strong>홈 화면에 추가</strong>를 선택합니다.</li><li>‘웹 앱으로 열기’가 보이면 켠 뒤 <strong>추가</strong>를 누릅니다.</li></ol>',
        android: '<ol><li>Chrome에서 <strong>vipup.site</strong>를 엽니다.</li><li>주소창 옆 <strong>⋮ 메뉴</strong>를 누릅니다.</li><li><strong>설치 및 바로가기 만들기 → 바로가기 만들기</strong>를 선택합니다. 버전에 따라 ‘홈 화면에 추가’로 표시될 수 있어요.</li><li>이름을 확인하고 <strong>추가</strong>를 누릅니다.</li></ol>',
        desktop: '<ol><li>브라우저에서 <strong>vipup.site</strong>를 엽니다.</li><li>주소창의 별표를 누르거나 <strong>Ctrl+D</strong>를 누릅니다. Mac에서는 <strong>⌘D</strong>를 사용하세요.</li><li>‘VIPUP 전자책’으로 저장하면 즐겨찾기에서 바로 방문할 수 있어요.</li></ol>'
      };
      root.getElementById('steps').innerHTML = notes + content[device];
    };
    select(/iPhone|iPad|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) ? 'ios' : /Android/.test(ua) ? 'android' : 'desktop');
    root.querySelectorAll('[data-device]').forEach(b => b.onclick = () => select(b.dataset.device));
    root.getElementById('open').onclick = () => {const panel=root.getElementById('instructions');panel.hidden=!panel.hidden;root.getElementById('open').setAttribute('aria-expanded',String(!panel.hidden));};
    const dismiss = done => {try {localStorage.setItem(key,JSON.stringify(done?{done:true}:{dismissedOn:new Date().toDateString()}));} catch {} host.remove();};
    root.querySelector('.close').onclick = () => dismiss(false);
    root.getElementById('later').onclick = () => dismiss(false);
    root.getElementById('done').onclick = () => dismiss(true);
    host.addEventListener('keydown', e => {if(e.key==='Escape')dismiss(false);});
    document.body.append(host);
    matchMedia('(display-mode: standalone)').addEventListener('change', e => {if(e.matches)host.remove();});
    window.addEventListener('appinstalled', () => dismiss(true), {once:true});
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount, {once:true}); else mount();
})();
