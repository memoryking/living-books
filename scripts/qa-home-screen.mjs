import {spawn} from 'node:child_process';
import path from 'node:path';
import assert from 'node:assert/strict';
const base=process.env.IMWEB_QA_BASE||'http://127.0.0.1:3118';
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
  const source=await (await import('node:fs/promises')).readFile('public/imweb/home-screen.js','utf8');
  // Only the hostname allowlist is adapted for this local-origin fixture.
  const fixture=source.replace("['vipup.site', 'www.vipup.site']", "['127.0.0.1']");
  const run=()=>ev(fixture);
  const root="document.getElementById('vipup-home-guide').shadowRoot";
  for(const [width,ua,device] of [[390,'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X)','ios'],[360,'Mozilla/5.0 (Linux; Android 15) Chrome/140','android'],[1280,'Mozilla/5.0 (Windows NT 10.0) Chrome/140','desktop']]){
    await send('Emulation.setDeviceMetricsOverride',{width,height:740,deviceScaleFactor:1,mobile:width<500});
    await send('Emulation.setUserAgentOverride',{userAgent:ua});
    await send('Page.navigate',{url:base+'/imweb/home-screen-preview.html'});
    await new Promise(r=>setTimeout(r,600));
    await wait('!!document.getElementById("vipup-home-guide")');
    await ev('history.replaceState(null,"","/");document.getElementById("vipup-home-guide").remove();localStorage.removeItem("vipup-home-guide-v1");true');
    await run();await run();
    assert.equal(await ev('document.querySelectorAll("#vipup-home-guide").length'),1);
    assert.equal(await ev(root+".querySelector('[aria-pressed=true]').dataset.device"),device);
    await ev(root+".getElementById('open').click()");
    assert.equal(await ev(root+".getElementById('instructions').hidden"),false);
    assert.ok(await ev(`(()=>{const r=${root}.querySelector('section').getBoundingClientRect();return r.left>=0&&r.right<=innerWidth&&r.top>=0&&r.bottom<=innerHeight})()`));
    const shot=await send('Page.captureScreenshot',{format:'png'});await (await import('node:fs/promises')).writeFile('artifacts/home-guide-'+device+'.png',Buffer.from(shot.data,'base64'));
    await ev(root+".querySelector('.close').click()");await run();assert.equal(await ev('!!document.getElementById("vipup-home-guide")'),false);
    await ev('localStorage.setItem("vipup-home-guide-v1",JSON.stringify({until:Date.now()-1}))');await run();
    await ev(root+".getElementById('done').click()");await run();assert.equal(await ev('!!document.getElementById("vipup-home-guide")'),false);
    await ev('localStorage.removeItem("vipup-home-guide-v1");history.replaceState(null,"","/hanja-memory")');await run();assert.equal(await ev('!!document.getElementById("vipup-home-guide")'),false);
    await ev('history.replaceState(null,"","/");Object.defineProperty(navigator,"standalone",{configurable:true,value:true});true');await run();assert.equal(await ev('!!document.getElementById("vipup-home-guide")'),false);
    await ev('Object.defineProperty(navigator,"standalone",{configurable:true,value:false});Storage.prototype.setItem=function(){throw Error("blocked")};true');await run();await ev(root+".querySelector('.close').click()");assert.equal(await ev('!!document.getElementById("vipup-home-guide")'),false);
    console.log('PASS',device,'guide, bounds, duplicate, dismiss, expiry, completed, learning path, standalone, blocked storage');
  }
} finally {ws?.close();chrome.kill();}
