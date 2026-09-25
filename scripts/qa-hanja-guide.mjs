import {spawn} from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
const dir=path.resolve('artifacts/hanja-qa');await fs.mkdir(dir,{recursive:true});
const chrome=spawn('C:/Program Files/Google/Chrome/Application/chrome.exe',['--headless=new','--disable-gpu','--no-first-run','--remote-debugging-port=9339','--user-data-dir='+path.join(dir,'browser-profile-classic'),'about:blank'],{windowsHide:true,stdio:'ignore'});
let ws;
try {
  let targets;for(let i=0;i<40;i++){try{targets=await(await fetch('http://127.0.0.1:9339/json')).json();break;}catch{await new Promise(r=>setTimeout(r,250));}}
  ws=new WebSocket(targets.find(t=>t.type==='page').webSocketDebuggerUrl);await new Promise((r,j)=>{ws.onopen=r;ws.onerror=j;});
  let seq=0;const pending=new Map(),errors=[];
  ws.onmessage=({data})=>{const m=JSON.parse(data);if(m.id){const p=pending.get(m.id);pending.delete(m.id);if(p)m.error?p.j(m.error):p.r(m.result);}if(m.method==='Runtime.exceptionThrown')errors.push(m.params.exceptionDetails.text);};
  const send=(method,params={})=>new Promise((r,j)=>{const id=++seq;pending.set(id,{r,j});ws.send(JSON.stringify({id,method,params}));});
  const ev=async expression=>{const r=await send('Runtime.evaluate',{expression,returnByValue:true});if(r.exceptionDetails)throw Error(JSON.stringify(r.exceptionDetails));return r.result.value;};
  const wait=async expression=>{for(let i=0;i<100;i++){if(await ev(expression))return;await new Promise(r=>setTimeout(r,100));}throw Error(expression);};
  const shot=async name=>{const r=await send('Page.captureScreenshot',{format:'png'});await fs.writeFile(path.join(dir,name+'.png'),Buffer.from(r.data,'base64'));};
  await send('Runtime.enable');await send('Page.enable');
  for(const width of [390,1280]) {
    await send('Emulation.setDeviceMetricsOverride',{width,height:844,deviceScaleFactor:1,mobile:width<500});
    await send('Page.navigate',{url:(process.env.HANJA_QA_BASE || 'http://127.0.0.1:3100')+'/premium/hanja-memory/read'});
    await wait('Array.from(document.querySelectorAll("button")).some(b=>b.textContent.includes("학습 안내"))');
    await new Promise(r=>setTimeout(r,800));
    await ev('Array.from(document.querySelectorAll("button")).find(b=>b.textContent.includes("학습 안내")).click()');
    await wait('document.querySelectorAll("details").length===10');
    assert.equal(await ev('document.querySelectorAll("details[open]").length'),1);
    assert.equal(await ev('document.querySelectorAll("details img").length'),12);
    assert.equal(await ev('document.querySelectorAll("details a").length'),0);
    await ev('document.querySelectorAll("details").forEach(e=>e.open=true)');
    assert.ok(await ev('document.documentElement.scrollWidth<=innerWidth+1'));
    assert.ok(await ev('document.body.innerText.includes("35개가 되지는") && document.body.innerText.includes("두 기기의 기록을 합치는 기능이 아닙니다")'));
    await shot('guide-expanded-'+width);
    await ev('document.querySelectorAll("details")[2].scrollIntoView()');
    await wait('document.querySelectorAll("details")[2].querySelector("img").naturalWidth>0');
    const layout=await ev('(()=>{const d=document.querySelectorAll("details")[2],i=d.querySelector("figure").getBoundingClientRect(),p=d.querySelector("p").getBoundingClientRect();return {ix:i.x,iy:i.y,ib:i.bottom,ir:i.right,px:p.x,py:p.y}})()');
    assert.ok(width>700 ? layout.px>layout.ir : layout.py>=layout.ib);
    assert.ok(await ev('document.querySelectorAll("details")[2].querySelector("img").naturalHeight<1200'));
    await shot('guide-filter-inline-'+width);
    await ev('document.querySelectorAll("details")[9].scrollIntoView()');
    await shot('guide-backup-'+width);
  }
  assert.deepEqual(errors,[]);console.log('PASS: ten expandable guide sections, mobile width, backup controls and scheduling explanations.');
} finally {ws?.close();chrome.kill();}
