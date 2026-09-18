/* ═══════════════════════════════════════════
   살아있는 정보책 — 전자책 뷰어 공통 JS
   수정하면 모든 전자책에 자동 반영됩니다.
   ═══════════════════════════════════════════ */
(function(){
  var root=document.getElementById('eb-root');
  var fb=document.getElementById('eb-float-toc');
  var toc=document.getElementById('eb-toc');
  var progBar=document.getElementById('eb-prog-bar');
  var inIframe=window.top!==window.self;

  window.ebFont=function(s,btn){
    root.className=root.className.replace(/eb-(sm|md|lg)/g,'eb-'+s);
    root.querySelectorAll('.eb-bar button[data-size]').forEach(function(b){b.classList.remove('active')});
    if(btn)btn.classList.add('active');
    if(inIframe){setTimeout(function(){window.parent.postMessage({type:'eb-resize',height:document.documentElement.scrollHeight},'*');},100);}
  };

  window.ebDark=function(){
    root.classList.toggle('eb-dark');
    var btn=document.getElementById('eb-dark-btn');
    btn.textContent=root.classList.contains('eb-dark')?'☀️':'🌙';
  };

  window.ebNav=function(id){
    var el=document.getElementById(id);
    if(!el)return;
    if(inIframe){
      window.parent.postMessage({type:'eb-scroll',offset:el.offsetTop},'*');
    } else {
      var y=el.getBoundingClientRect().top+window.pageYOffset-150;
      window.scrollTo({top:y,behavior:'smooth'});
    }
  };

  /* ── 챕터 좋아요 ── */
  function getLikedKey(bookId,ch){return 'eb-liked-'+bookId+'-'+ch;}

  window.ebLike=function(bookId,ch,btn){
    var key=getLikedKey(bookId,ch);
    if(localStorage.getItem(key))return;
    localStorage.setItem(key,'1');
    btn.classList.add('liked');
    // 부모에게 API 호출 요청
    if(inIframe){
      window.parent.postMessage({type:'eb-like-post',book_id:bookId,chapter:ch},'*');
    }
    var countEl=document.getElementById('eb-lc-'+ch);
    var cur=parseInt(countEl?countEl.textContent:'')||0;
    var next=cur+1;
    btn.textContent='👍 감사합니다! · '+next+'명';
    if(countEl){countEl.textContent=next+'명이 도움받았어요';}
  };

  // 부모에서 메시지 수신 (리셋, 카운트 데이터)
  window.addEventListener('message',function(e){
    if(!e.data)return;
    if(e.data.type==='eb-reset-likes'){
      Object.keys(localStorage).filter(function(k){return k.startsWith('eb-liked-');}).forEach(function(k){localStorage.removeItem(k);});
      location.reload();
    }
    if(e.data.type==='eb-like-data'&&e.data.counts){
      Object.keys(e.data.counts).forEach(function(ch){
        var el=document.getElementById('eb-lc-'+ch);
        if(el&&e.data.counts[ch]>0){
          el.textContent=e.data.counts[ch]+'명이 도움받았어요';
          var btn=root.querySelector('.eb-like-btn[data-chapter="'+ch+'"]');
          if(btn&&btn.classList.contains('liked')){
            btn.textContent='👍 감사합니다! · '+e.data.counts[ch]+'명';
          }
        }
      });
    }
    if(e.data.type==='eb-parent-scroll'){
      var scrollY=e.data.scrollY;
      var iframeTop=e.data.iframeTop;
      var contentH=document.documentElement.scrollHeight;
      if(progBar&&contentH>0){
        var progress=Math.min(100,Math.max(0,Math.round(((scrollY-iframeTop)/contentH)*100)));
        progBar.style.width=progress+'%';
      }
      if(toc&&fb){
        var tocBottom=toc.offsetTop+toc.offsetHeight;
        fb.style.display=(scrollY-iframeTop)>tocBottom?'block':'none';
      }
    }
  });

  function initLikes(){
    var btns=root.querySelectorAll('.eb-like-btn');
    var bookId='';
    btns.forEach(function(btn){
      var ch=btn.getAttribute('data-chapter');
      var m=btn.getAttribute('onclick').match(/'([^']+)'/);
      if(m)bookId=m[1];
      var key=getLikedKey(bookId,ch);
      if(localStorage.getItem(key)){
        btn.classList.add('liked');
        btn.textContent='👍 감사합니다!';
      }
    });
    // 부모에게 카운트 요청
    if(bookId&&inIframe){
      window.parent.postMessage({type:'eb-like-get',book_id:bookId},'*');
    }
  }
  initLikes();

  /* ── 플로팅 목차 + 진행률 (비iframe) ── */
  if(!inIframe){
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
  }
})();
