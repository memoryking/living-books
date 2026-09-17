/* ═══════════════════════════════════════════
   살아있는 정보책 — 전자책 뷰어 공통 JS
   수정하면 모든 전자책에 자동 반영됩니다.
   ═══════════════════════════════════════════ */
(function(){
  var root=document.getElementById('eb-root');
  var fb=document.getElementById('eb-float-toc');
  var toc=document.getElementById('eb-toc');
  var progBar=document.getElementById('eb-prog-bar');

  window.ebFont=function(s,btn){
    root.className=root.className.replace(/eb-(sm|md|lg)/g,'eb-'+s);
    root.querySelectorAll('.eb-bar button[data-size]').forEach(function(b){b.classList.remove('active')});
    if(btn)btn.classList.add('active');
  };

  window.ebDark=function(){
    root.classList.toggle('eb-dark');
    var btn=document.getElementById('eb-dark-btn');
    btn.textContent=root.classList.contains('eb-dark')?'☀️':'🌙';
  };

  window.ebNav=function(id){
    var el=document.getElementById(id);
    if(!el)return;
    var y=el.getBoundingClientRect().top+window.pageYOffset-150;
    window.scrollTo({top:y,behavior:'smooth'});
  };

  var lastScroll=0;
  function onScroll(){
    var now=Date.now();
    if(now-lastScroll<50)return;
    lastScroll=now;
    if(toc){var r=toc.getBoundingClientRect();fb.style.display=r.bottom<0?'block':'none';}
    var h=document.documentElement.scrollHeight-window.innerHeight;
    if(h>0&&progBar){progBar.style.width=Math.min(100,Math.round(window.scrollY/h*100))+'%';}
  }
  window.addEventListener('scroll',onScroll);
  onScroll();
})();
