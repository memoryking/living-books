/* ═══════════════════════════════════════════
   살아있는 정보책 — 전자책 뷰어 공통 JS
   수정하면 모든 전자책에 자동 반영됩니다.
   ═══════════════════════════════════════════ */
(function(){
  console.log('[EB] script loaded, eb-root:', !!document.getElementById('eb-root'), 'eb-content:', !!document.getElementById('eb-content'));
  var root=document.getElementById('eb-root');
  var fb=document.getElementById('eb-float-toc');
  var toc=document.getElementById('eb-toc');
  var progBar=document.getElementById('eb-prog-bar');
  var content=document.getElementById('eb-content');
  var pageNav=document.getElementById('eb-page-nav');
  var pageInfo=document.getElementById('eb-page-info');
  var modeBtn=document.getElementById('eb-mode-btn');
  var inIframe=window.top!==window.self;

  /* ── State ── */
  var isPageMode=false;
  var currentPage=0;
  var totalPages=1;
  var pageWidth=0;
  var contentHeight=0;
  var parentViewportHeight=0;

  /* ═══════════════════════════════════════════
     공통 기능: 글꼴, 다크모드, 목차 네비게이션
     ═══════════════════════════════════════════ */

  window.ebFont=function(s,btn){
    root.className=root.className.replace(/eb-(sm|md|lg)/g,'eb-'+s);
    root.querySelectorAll('.eb-bar button[data-size]').forEach(function(b){b.classList.remove('active')});
    if(btn)btn.classList.add('active');
    if(isPageMode){
      setTimeout(function(){ebRecalcPages();},100);
    } else {
      if(inIframe){setTimeout(function(){window.parent.postMessage({type:'eb-resize',height:document.documentElement.scrollHeight},'*');},100);}
    }
  };

  window.ebDark=function(){
    root.classList.toggle('eb-dark');
    var btn=document.getElementById('eb-dark-btn');
    btn.textContent=root.classList.contains('eb-dark')?'☀️':'🌙';
    /* Update page-nav dark mode class */
    if(pageNav){
      if(root.classList.contains('eb-dark')){
        pageNav.classList.add('eb-dark-nav');
      } else {
        pageNav.classList.remove('eb-dark-nav');
      }
    }
  };

  window.ebNav=function(id){
    var el=document.getElementById(id);
    if(!el)return;
    if(isPageMode){
      ebHideToc();
      ebNavToElementPage(el);
    } else {
      if(inIframe){
        window.parent.postMessage({type:'eb-scroll',offset:el.offsetTop},'*');
      } else {
        var y=el.getBoundingClientRect().top+window.pageYOffset-150;
        window.scrollTo({top:y,behavior:'smooth'});
      }
    }
  };

  /* ═══════════════════════════════════════════
     모드 전환 (스크롤 ↔ 페이지)
     ═══════════════════════════════════════════ */

  window.ebToggleMode=function(){
    console.log('[EB] toggle mode called, current:', isPageMode?'page':'scroll');
    if(isPageMode){
      exitPageMode();
    } else {
      enterPageMode();
    }
    try{localStorage.setItem('eb-mode',isPageMode?'page':'scroll');}catch(e){}
  };

  function enterPageMode(){
    console.log('[EB] entering page mode');
    isPageMode=true;
    root.classList.add('eb-page-mode');
    if(!modeBtn)modeBtn=document.getElementById('eb-mode-btn');
    if(!content)content=document.getElementById('eb-content');
    if(!pageInfo)pageInfo=document.getElementById('eb-page-info');
    var arrowL=document.getElementById('eb-arrow-l');
    var arrowR=document.getElementById('eb-arrow-r');
    var pageBar=document.getElementById('eb-page-bar');
    if(modeBtn)modeBtn.textContent='📜';
    if(arrowL)arrowL.style.display='flex';
    if(arrowR)arrowR.style.display='flex';
    if(pageBar)pageBar.style.display='flex';
    if(fb)fb.style.display='none';
    /* Tell parent to snap iframe to viewport */
    if(inIframe){
      window.parent.postMessage({type:'eb-page-mode',enabled:true},'*');
    }
    /* Hide TOC overlay */
    var overlay=document.getElementById('eb-toc-overlay');
    if(overlay)overlay.classList.remove('show');
    currentPage=0;
    /* Prevent body scroll in page mode */
    document.body.style.overflow='hidden';
    document.documentElement.style.overflow='hidden';
    setTimeout(function(){
      ebRecalcPages();
      updatePageDisplay();
      console.log('[EB] pages:', totalPages, 'pageWidth:', pageWidth, 'contentHeight:', contentHeight);
    },200);
  }

  function exitPageMode(){
    /* Save approximate position before exiting */
    var approxRatio=totalPages>1?currentPage/(totalPages-1):0;
    isPageMode=false;
    root.classList.remove('eb-page-mode');
    if(modeBtn)modeBtn.textContent='📖';
    var arrowL=document.getElementById('eb-arrow-l');
    var arrowR=document.getElementById('eb-arrow-r');
    var pageBarEl=document.getElementById('eb-page-bar');
    if(arrowL)arrowL.style.display='none';
    if(arrowR)arrowR.style.display='none';
    if(pageBarEl)pageBarEl.style.display='none';
    root.style.height='';
    if(content){
      content.style.columnWidth='';
      content.style.height='';
      content.style.transform='';
    }
    document.body.style.overflow='';
    document.documentElement.style.overflow='';
    if(inIframe){
      window.parent.postMessage({type:'eb-page-mode',enabled:false},'*');
      setTimeout(function(){
        window.parent.postMessage({type:'eb-resize',height:document.documentElement.scrollHeight},'*');
      },100);
    }
    /* Restore approximate scroll position */
    var totalH=document.documentElement.scrollHeight-window.innerHeight;
    if(totalH>0){
      var targetY=Math.round(approxRatio*totalH);
      if(inIframe){
        window.parent.postMessage({type:'eb-scroll',offset:targetY},'*');
      } else {
        window.scrollTo(0,targetY);
      }
    }
  }

  /* ═══════════════════════════════════════════
     페이지 모드: 계산 및 네비게이션
     ═══════════════════════════════════════════ */

  function ebRecalcPages(){
    if(!content||!isPageMode)return;
    /* Determine available height (viewport - bar height - page nav height) */
    var bar=root.querySelector('.eb-bar');
    var progEl=root.querySelector('.eb-progress');
    var barH=bar?bar.offsetHeight:0;
    var progH=progEl?progEl.offsetHeight:0;
    var viewH=(inIframe&&parentViewportHeight>0)?parentViewportHeight:window.innerHeight;
    /* root 높이를 뷰포트에 고정 */
    root.style.height=viewH+'px';
    var pageBarEl=document.getElementById('eb-page-bar');
    var pageBarH=pageBarEl?pageBarEl.offsetHeight:36;
    contentHeight=viewH-barH-progH-pageBarH-8;
    if(contentHeight<200)contentHeight=200;

    pageWidth=root.offsetWidth;
    if(pageWidth<100)pageWidth=window.innerWidth;

    content.style.columnWidth=pageWidth+'px';
    content.style.height=contentHeight+'px';

    /* Wait for layout reflow, then measure */
    requestAnimationFrame(function(){
      var scrollW=content.scrollWidth;
      totalPages=Math.max(1,Math.round(scrollW/pageWidth));
      if(currentPage>=totalPages)currentPage=totalPages-1;
      updatePageDisplay();
    });
  }

  function updatePageDisplay(){
    if(!content)return;
    var offset=-currentPage*pageWidth;
    content.style.transform='translateX('+offset+'px)';
    if(pageInfo)pageInfo.textContent=(currentPage+1)+' / '+totalPages;
    /* Update progress bar */
    if(progBar&&totalPages>0){
      var pct=Math.round(((currentPage+1)/totalPages)*100);
      progBar.style.width=pct+'%';
    }
  }

  window.ebNextPage=function(){
    if(!isPageMode)return;
    console.log('[EB] nextPage: '+currentPage+' → '+(currentPage+1)+' / '+totalPages);
    if(currentPage<totalPages-1){
      currentPage++;
      updatePageDisplay();
    }
  };

  window.ebPrevPage=function(){
    if(!isPageMode)return;
    if(currentPage>0){
      currentPage--;
      updatePageDisplay();
    }
  };

  window.ebGoToPage=function(n){
    if(!isPageMode)return;
    currentPage=Math.max(0,Math.min(n,totalPages-1));
    updatePageDisplay();
  };

  /* TOC overlay */
  window.ebShowToc=function(){
    var overlay=document.getElementById('eb-toc-overlay');
    if(overlay)overlay.classList.add('show');
  };
  window.ebHideToc=function(){
    var overlay=document.getElementById('eb-toc-overlay');
    if(overlay)overlay.classList.remove('show');
  };

  /* Navigate to the page containing a specific element */
  function ebNavToElementPage(el){
    if(!content||!isPageMode)return;
    /* Temporarily remove transform to measure true offset */
    content.style.transition='none';
    content.style.transform='translateX(0px)';
    /* Force reflow */
    void content.offsetWidth;
    var elLeft=el.offsetLeft;
    var targetPage=Math.floor(elLeft/pageWidth);
    currentPage=Math.max(0,Math.min(targetPage,totalPages-1));
    content.style.transition='';
    updatePageDisplay();
  }

  /* ═══════════════════════════════════════════
     페이지 모드: 터치/스와이프 지원
     ═══════════════════════════════════════════ */

  var touchStartX=0,touchStartY=0,touchMoved=false;

  document.addEventListener('touchstart',function(e){
    if(!isPageMode)return;
    touchStartX=e.touches[0].clientX;
    touchStartY=e.touches[0].clientY;
    touchMoved=false;
  },{passive:true});

  document.addEventListener('touchmove',function(e){
    if(!isPageMode)return;
    var dx=Math.abs(e.touches[0].clientX-touchStartX);
    var dy=Math.abs(e.touches[0].clientY-touchStartY);
    if(dx>dy&&dx>10){
      touchMoved=true;
      e.preventDefault();
    }
  },{passive:false});

  document.addEventListener('touchend',function(e){
    if(!isPageMode)return;
    if(!touchMoved)return;
    var endX=e.changedTouches[0].clientX;
    var diff=touchStartX-endX;
    if(Math.abs(diff)>50){
      if(diff>0){ebNextPage();}
      else{ebPrevPage();}
    }
  },{passive:true});

  /* ── 페이지 모드: 클릭으로 넘기기 ── */
  document.addEventListener('click',function(e){
    if(!isPageMode)return;
    var tag=e.target.tagName.toLowerCase();
    if(tag==='a'||tag==='button'||tag==='input'||tag==='select'||tag==='textarea')return;
    if(e.target.closest&&(e.target.closest('a')||e.target.closest('button')||e.target.closest('.eb-bar')||e.target.closest('.eb-page-nav')))return;
    var x=e.clientX;
    var w=window.innerWidth;
    console.log('[EB] click at x:'+x+' w:'+w+' → '+(x>w/2?'NEXT':'PREV'));
    if(x>w/2){ebNextPage();}
    else{ebPrevPage();}
  });

  /* ── 페이지 모드: 키보드 (← →) ── */
  document.addEventListener('keydown',function(e){
    if(!isPageMode)return;
    if(e.key==='ArrowRight'||e.key==='Right'){e.preventDefault();ebNextPage();}
    else if(e.key==='ArrowLeft'||e.key==='Left'){e.preventDefault();ebPrevPage();}
  });

  /* ── 창 크기 변경 시 재계산 ── */
  var resizeTimer;
  window.addEventListener('resize',function(){
    if(!isPageMode)return;
    clearTimeout(resizeTimer);
    resizeTimer=setTimeout(function(){ebRecalcPages();},200);
  });

  /* ═══════════════════════════════════════════
     스크롤 모드: 플로팅 목차 + 진행률
     (기존 기능 그대로 유지)
     ═══════════════════════════════════════════ */

  if(inIframe){
    window.addEventListener('message',function(e){
      if(e.data&&e.data.type==='eb-viewport-height'){
        parentViewportHeight=e.data.height;
        console.log('[EB] received viewport height:', parentViewportHeight);
        if(isPageMode){ebRecalcPages();updatePageDisplay();}
      }
      if(e.data&&e.data.type==='eb-parent-scroll'){
        if(isPageMode)return; /* page mode handles its own progress */
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
  } else {
    var lastScroll=0;
    function onScroll(){
      if(isPageMode)return;
      var now=Date.now();
      if(now-lastScroll<50)return;
      lastScroll=now;
      if(toc&&fb){var r=toc.getBoundingClientRect();fb.style.display=r.bottom<0?'block':'none';}
      var h=document.documentElement.scrollHeight-window.innerHeight;
      if(h>0&&progBar){progBar.style.width=Math.min(100,Math.round(window.scrollY/h*100))+'%';}
    }
    window.addEventListener('scroll',onScroll);
    onScroll();
  }

  /* ═══════════════════════════════════════════
     초기화: localStorage에서 저장된 모드 복원
     ═══════════════════════════════════════════ */

  try{
    var saved=localStorage.getItem('eb-mode');
    if(saved==='page'){
      /* Delay to let layout settle */
      setTimeout(function(){enterPageMode();},300);
    }
  }catch(e){}

})();
