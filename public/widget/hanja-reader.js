/* Hanja classic reader: numbered lessons are indivisible, vertically scrollable pages. */
(function () {
  var root = document.getElementById('eb-root');
  if (!root) return;
  var content = document.getElementById('eb-content');
  var bar = root.querySelector('.eb-bar');
  var info = document.getElementById('eb-page-info');
  var footer = document.getElementById('eb-page-bar');
  var floating = document.getElementById('eb-float-toc');
  var overlay = document.getElementById('eb-toc-overlay');
  var progress = document.getElementById('eb-prog-bar');
  var left = document.getElementById('eb-arrow-l'), right = document.getElementById('eb-arrow-r');
  var framed = window.top !== window.self;
  var paging = false, pages = [], index = 0, units = [], viewHeight = 0, width = 0, height = 0;
  var style = document.createElement('style');
  style.textContent = '.eb-page-mode.eb-unit-mode{height:100dvh;margin-top:0!important}.eb-unit-mode .eb-bar{position:relative!important;top:auto!important;opacity:1!important;pointer-events:auto!important}.eb-unit-mode #eb-content{column-width:auto!important;transform:none!important;overflow:hidden!important;touch-action:pan-y!important;position:relative}.eb-unit-mode .eb-section{display:contents!important}.eb-unit-mode .eb-unit{display:none;box-sizing:border-box;margin:0}.eb-unit-mode .eb-unit-active{display:block}.eb-unit-mode .eb-unit-entry{height:100%;overflow-y:auto;overflow-x:hidden;padding:8px 38px 100px;overscroll-behavior:contain;touch-action:pan-y}.eb-unit-mode .eb-unit-entry>*{break-inside:auto!important}.eb-unit-mode .eb-unit-entry>h2{margin-top:12px}.eb-unit-mode .eb-unit-prose{padding:0;column-gap:0;column-fill:auto}.eb-unit-mode .eb-unit-prose>*{margin-left:24px;margin-right:24px}.eb-unit-mode .eb-back{display:none!important}.eb-unit-mode .eb-arrow{z-index:250;width:30px}.eb-unit-mode #eb-page-bar{min-height:38px}.eb-unit-mode #eb-float-toc{bottom:70px}.eb-unit-mode .eb-unit-entry details{overflow:visible}.eb-unit-mode .eb-unit-entry table{display:block;overflow-x:auto}';
  document.head.appendChild(style);
  // Chapter answer keys, like lessons, must expand vertically rather than fragment into columns.
  style.textContent = style.textContent.replaceAll('.eb-unit-entry', '.eb-unit-scroll');
  var mobileStyle = document.createElement('style');
  mobileStyle.textContent = '#eb-root #eb-toc-overlay{position:absolute;inset:0;height:100%;max-height:100%;min-height:0;box-sizing:border-box;overflow-y:auto;overflow-x:hidden;overscroll-behavior:none;touch-action:pan-y;padding:20px 20px 24px}#eb-root #eb-toc-overlay>ol{margin-bottom:0}#eb-root .eb-bar{transition:opacity .3s} @media(max-width:640px){#eb-root .eb-bar{flex-wrap:nowrap;gap:4px;padding:6px 4px}#eb-root .eb-bar button{box-sizing:border-box;flex:0 0 auto;min-width:44px;min-height:44px;padding:6px 8px;margin-left:0!important;white-space:nowrap;font-size:14px}#eb-root .eb-bar.eb-bar-hidden{opacity:0!important;pointer-events:none!important}#eb-root .eb-progress{transition:opacity .3s}#eb-root:has(.eb-bar-hidden) .eb-progress{opacity:0}}';
  mobileStyle.textContent += '#eb-root .eb-bar.eb-bar-hidden{opacity:0!important;pointer-events:none!important}#eb-root:has(.eb-bar-hidden) .eb-progress{opacity:0}';
  document.head.appendChild(mobileStyle);
  var barTimer;
  function showBar() {
    clearTimeout(barTimer);
    bar.classList.remove('eb-bar-hidden');
    barTimer = setTimeout(function () {
      if (!bar.querySelector(':focus-visible')) bar.classList.add('eb-bar-hidden');
    }, 3000);
  }
  // Only the reader's top strip reveals hidden controls; content taps keep them hidden.
  document.addEventListener('pointerdown', function (event) {
    if (overlay.classList.contains('show')) return;
    var bounds = root.getBoundingClientRect();
    if (bar.contains(event.target) || (event.clientY >= 0 && event.clientY <= 60 && event.clientX >= bounds.left && event.clientX <= bounds.right)) showBar();
  }, {passive:true});
  bar.addEventListener('focusin', showBar);
  bar.addEventListener('focusout', showBar);

  // Group each numbered heading with all of its content until the next lesson.
  content.querySelectorAll('.eb-section').forEach(function (section) {
    var current = null;
    Array.from(section.children).forEach(function (node) {
      var match = node.tagName === 'H2' && node.textContent.trim().match(/^(\d{3})\s*[·.]/);
      var ending = node.tagName === 'H3' && node.textContent.trim() === '이 장을 덮기 전에';
      if (!current || match || (ending && current.dataset.entryId)) {
        current = document.createElement('div');
        current.className = 'eb-unit ' + (match ? 'eb-unit-entry eb-unit-scroll' : ending ? 'eb-unit-review eb-unit-scroll' : 'eb-unit-prose');
        if (ending) current.id = section.id + '-review';
        if (match) { current.dataset.entryId = match[1]; current.id = 'eb-entry-' + match[1]; }
        section.insertBefore(current, node);
        units.push(current);
      }
      current.appendChild(node);
    });
  });

  function tellParent(message) { if (framed) window.parent.postMessage(message, '*'); }
  function sizeParent() { if (!paging) tellParent({type:'eb-resize',height:document.documentElement.scrollHeight}); }
  function selected() { return pages[index]; }
  function render(resetScroll) {
    var page = selected(); if (!page) return;
    units.forEach(function (unit) { unit.classList.toggle('eb-unit-active', unit === page.unit); });
    if (page.unit.classList.contains('eb-unit-scroll')) {
      page.unit.style.transform = ''; if (resetScroll) page.unit.scrollTop = 0;
    } else page.unit.style.transform = 'translateX(' + (-page.offset * width) + 'px)';
    info.textContent = (index + 1) + ' / ' + pages.length + (page.unit.dataset.entryId ? ' · ' + page.unit.dataset.entryId : '');
    left.disabled = index === 0; right.disabled = index === pages.length - 1;
    progress.style.width = ((index + 1) / pages.length * 100) + '%';
  }
  function recalculate() {
    if (!paging) return;
    var old = selected();
    var scroll = old && old.unit.scrollTop;
    width = root.clientWidth;
    var vh = viewHeight || window.innerHeight;
    root.style.height = vh + 'px';
    height = Math.max(160, vh - bar.offsetHeight - footer.offsetHeight - 8);
    content.style.height = height + 'px';
    pages = [];
    units.forEach(function (unit) {
      unit.classList.remove('eb-unit-active'); unit.style.transform = '';
      if (unit.classList.contains('eb-unit-scroll')) { pages.push({unit:unit,offset:0}); return; }
      unit.style.width = width + 'px'; unit.style.height = height + 'px'; unit.style.columnWidth = width + 'px';
      unit.style.display = 'block';
      var count = Math.max(1, Math.ceil((unit.scrollWidth - 1) / width));
      for (var n = 0; n < count; n++) pages.push({unit:unit,offset:n});
      unit.style.display = '';
    });
    if (old) {
      var same = pages.findIndex(function (p) { return p.unit === old.unit && p.offset === old.offset; });
      if (same < 0) same = pages.findIndex(function (p) { return p.unit === old.unit; });
      index = Math.max(0, same);
    } else index = 0;
    render(false); if (old) old.unit.scrollTop = scroll;
  }
  function enter() {
    paging = true; root.classList.add('eb-page-mode', 'eb-unit-mode');
    footer.style.display = 'flex'; left.style.display = right.style.display = 'flex';
    document.body.style.overflow = document.documentElement.style.overflow = 'hidden';
    if (!framed) window.scrollTo(0,0);
    tellParent({type:'eb-page-mode',enabled:true}); recalculate(); showBar();
  }
  function leave() {
    var page = selected(); paging = false; root.classList.remove('eb-page-mode','eb-unit-mode');
    root.style.height = ''; content.style.height = '';
    footer.style.display = left.style.display = right.style.display = 'none';
    units.forEach(function (unit) { unit.classList.remove('eb-unit-active'); unit.style.cssText = ''; });
    document.body.style.overflow = document.documentElement.style.overflow = '';
    window.ebHideToc(); tellParent({type:'eb-page-mode',enabled:false}); sizeParent();
    if (page && !framed) page.unit.scrollIntoView({block:'start'});
  }
  window.ebToggleMode = function () {
    if (paging) leave(); else enter();
    try { localStorage.setItem('eb-mode',paging?'page':'scroll'); } catch (_) {}
  };
  window.ebFont = function (size, button) {
    root.className = root.className.replace(/eb-(sm|md|lg)/g,'eb-'+size);
    root.querySelectorAll('[data-size]').forEach(function (b) { b.classList.toggle('active',b===button); });
    if (paging) recalculate(); else sizeParent();
  };
  window.ebDark = function () { root.classList.toggle('eb-dark'); document.getElementById('eb-dark-btn').textContent=root.classList.contains('eb-dark')?'☀️':'🌙'; };
  window.ebNextPage = function () { if(paging && index<pages.length-1){index++;render(true);} };
  window.ebPrevPage = function () { if(paging && index>0){index--;render(true);} };
  window.ebGoToPage = function (n) { if(paging){index=Math.max(0,Math.min(n,pages.length-1));render(true);} };
  window.ebShowToc = function () { overlay.classList.add('show'); overlay.scrollTop=0; };
  window.ebHideToc = function () { overlay.classList.remove('show'); };
  window.ebNav = function (id) {
    if(paging && id==='eb-toc'){window.ebShowToc();return;}
    var target=document.getElementById(id);if(!target)return;
    if(paging){
      var unit=target.closest('.eb-unit') || target.querySelector('.eb-unit');
      var n=pages.findIndex(function(p){return p.unit===unit;});
      if(n>=0){index=n;render(true);}window.ebHideToc();
    } else if(framed) tellParent({type:'eb-scroll',offset:target.getBoundingClientRect().top+window.scrollY});
    else window.scrollTo({top:target.getBoundingClientRect().top+window.scrollY-150,behavior:'smooth'});
  };
  // No body-click navigation: expanding an answer or selecting text must never turn a page.
  document.addEventListener('keydown',function(e){
    if(!paging || overlay.classList.contains('show') || e.target.closest('input,textarea,select,summary,button,[contenteditable]'))return;
    if(e.key==='ArrowRight'){e.preventDefault();window.ebNextPage();}
    if(e.key==='ArrowLeft'){e.preventDefault();window.ebPrevPage();}
  });
  content.addEventListener('toggle',function(e){
    if(paging && !e.target.closest('.eb-unit-scroll'))recalculate();else sizeParent();
  },true);
  var timer;
  window.addEventListener('resize',function(){clearTimeout(timer);timer=setTimeout(recalculate,100);});
  window.addEventListener('load',function(){if(paging)recalculate();else sizeParent();});
  window.addEventListener('message',function(e){
    if(e.source!==window.parent || !e.data)return;
    if(e.data.type==='eb-viewport-height' && Number.isFinite(e.data.height)){viewHeight=e.data.height;recalculate();}
  });
  window.addEventListener('scroll',function(){if(!paging){var h=document.documentElement.scrollHeight-innerHeight;if(h>0)progress.style.width=Math.min(100,window.scrollY/h*100)+'%';}});
  floating.style.display='block';
  showBar();
  try{if(localStorage.getItem('eb-mode')==='page')enter();}catch(_){}
})();
