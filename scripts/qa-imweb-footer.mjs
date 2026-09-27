import {spawn} from 'node:child_process';
import path from 'node:path';
import assert from 'node:assert/strict';
const base=process.env.IMWEB_QA_BASE||'http://127.0.0.1:3116';
const chrome=spawn('C:/Program Files/Google/Chrome/Application/chrome.exe',['--headless=new','--disable-gpu','--no-first-run','--remote-debugging-port=9346','--user-data-dir='+path.resolve('artifacts/imweb-footer-browser'),'about:blank'],{windowsHide:true,stdio:'ignore'});
let ws;
try {
  let tabs;
  for(let i=0;i<60;i++){try{tabs=await(await fetch('http://127.0.0.1:9346/json')).json();break;}catch{await new Promise(r=>setTimeout(r,200));}}
  ws=new WebSocket(tabs.find(t=>t.type==='page').webSocketDebuggerUrl);
  await new Promise((r,j)=>{ws.onopen=r;ws.onerror=j;});
  let n=0;const pending=new Map();
  ws.onmessage=({data})=>{const m=JSON.parse(data);if(m.id){const p=pending.get(m.id);pending.delete(m.id);if(p)m.error?p.reject(m.error):p.resolve(m.result);}};
  const send=(method,params={})=>new Promise((resolve,reject)=>{const id=++n;pending.set(id,{resolve,reject});ws.send(JSON.stringify({id,method,params}));});
  const ev=async expression=>{const r=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw Error(JSON.stringify(r.exceptionDetails));return r.result.value;};
  const wait=async expression=>{for(let i=0;i<100;i++){if(await ev(expression))return;await new Promise(r=>setTimeout(r,100));}throw Error(expression);};
  await send('Page.enable');
  for(const width of [1280,390]){
    await send('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:width<500});
    await send('Page.navigate',{url:base+'/admin/export'});
    await wait('document.querySelectorAll("code").length>30');
    await new Promise(r=>setTimeout(r,1200));
    await ev('void Object.defineProperty(navigator,"clipboard",{configurable:true,value:{writeText:async t=>window.__copied=t}})');
    const snippets=[];
    for(const id of ['hanja-memory','hanja']){
      await ev(`window.card=[...document.querySelectorAll('code')].find(e=>e.textContent===${JSON.stringify(id)}).parentElement.parentElement;window.__copied='';[...card.querySelectorAll('button')].find(b=>b.textContent.includes('iframe 코드 복사')).click();true`);
      await wait('window.__copied.length>0');
      const code=await ev('window.__copied');
      assert.ok(code.includes('data-lb-hide-imweb-footer'));
      assert.ok(code.includes(id==='hanja'?'/embed/hanja':'/premium/hanja-memory/read'));
      snippets.push(code);
    }
    for(const code of snippets){
      await send('Page.navigate',{url:'about:blank'});
      await wait('location.href==="about:blank"');
      // Preserve the exported style/marker, isolate remote reader networking and scripts.
      await ev(`document.body.innerHTML=${JSON.stringify(code)};document.querySelector('iframe').removeAttribute('src');document.querySelector('iframe').srcdoc='<footer id="doz_footer_wrap">Reader footer</footer>';document.body.insertAdjacentHTML('beforeend','<footer id="doz_footer_wrap"><div id="doz_footer">Imweb footer</div></footer><footer id="ordinary">Article footer</footer>');true`);
      await wait('document.querySelector("iframe").contentDocument?.querySelector("footer")');
      assert.equal(await ev('getComputedStyle(document.getElementById("doz_footer_wrap")).display'),'none');
      assert.notEqual(await ev('getComputedStyle(document.getElementById("ordinary")).display'),'none');
      assert.notEqual(await ev('getComputedStyle(document.querySelector("iframe").contentDocument.querySelector("footer")).display'),'none');
      await ev('document.getElementById("doz_footer_wrap").remove();document.body.insertAdjacentHTML("beforeend", \'<footer id="doz_footer_wrap">Late footer</footer>\');true');
      assert.equal(await ev('getComputedStyle(document.getElementById("doz_footer_wrap")).display'),'none');
      await ev('document.querySelector("iframe").remove();true');
      assert.notEqual(await ev('getComputedStyle(document.getElementById("doz_footer_wrap")).display'),'none');
    }
  }
  console.log('PASS PC/mobile actual clipboard exports: host footer hidden, ordinary/reader footers preserved, late footer hidden, removal restores footer. '+base);
} finally {ws?.close();chrome.kill();}
