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
  const press=async label=>{await ev('Array.from(document.querySelectorAll("button")).find(b=>b.textContent.includes('+JSON.stringify(label)+')).click()');await new Promise(r=>setTimeout(r,100));};
  const choose=async (index,value)=>{await ev('(()=>{const e=document.querySelectorAll("select")['+index+'];e.value='+JSON.stringify(value)+';e.dispatchEvent(new Event("change",{bubbles:true}))})()');await new Promise(r=>setTimeout(r,100));};
  for(const [width,height] of [[1280,800],[390,844],[320,568],[844,390]]){
    await send('Page.navigate',{url:'about:blank'});await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width<500});
    await send('Page.navigate',{url:'http://127.0.0.1:3100/premium/hanja-memory/read'});await wait('document.body.innerText.includes("새 글자 배우기")');
    await ev('localStorage.setItem("living-books-hanja-memory-v1",JSON.stringify({version:1,lastId:1,records:Object.fromEntries([1,2,3,4,5,6].map((id,stage)=>[id,{stage,due:stage===0||stage===5?Date.now()-1000:Date.now()+86400000,last:1,attempts:1,misses:stage?0:1,needsReview:stage===0}])),bookmarks:[1,2,3,4,5,6],notes:{}}))');
    await send('Page.reload');await new Promise(r=>setTimeout(r,500));
    assert.ok(await ev('document.body.innerText.includes("지금 복습할 글자 2개")'));
    await press('선택 학습');await choose(1,'passed');
    assert.deepEqual(await ev('[...document.querySelectorAll("[data-character-id]")].map(e=>Number(e.dataset.characterId))'),[2,3,4,5,6]);
    await choose(1,'review');assert.deepEqual(await ev('[...document.querySelectorAll("[data-character-id]")].map(e=>Number(e.dataset.characterId))'),[1]);
    await choose(1,'bookmarks');await ev('document.querySelector("summary[aria-label]").click()');
    assert.equal(await ev('new Set([...document.querySelectorAll("[data-character-id]")].map(e=>e.style.background)).size'),6);
    assert.equal(await ev('[...document.querySelectorAll("[data-character-id]")].filter(e=>e.textContent.includes("복습 시간 됨")).length'),2);
    const rect=await ev('(()=>{const r=document.querySelector("[class*=characterMenu]").getBoundingClientRect();return {x:r.x,right:r.right,bottom:r.bottom}})()');
    assert.ok(rect.x>=0&&rect.right<=width&&rect.bottom<=height,JSON.stringify(rect));
    await shot('stages-'+width);await ev('document.querySelector("summary[aria-label]").focus()');await send('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape'});
    assert.equal(await ev('document.querySelector("details").open'),false);
    await choose(1,'review');await press('정답 보기');await press('맞혔어요');await choose(1,'passed');
    assert.equal(await ev('document.querySelector("[data-character-id]").dataset.characterId'),'1');
    assert.ok(await ev('document.querySelector("[data-character-id]").textContent.includes("10분")'));
  }
  assert.deepEqual(errors,[]);console.log('PASS: passed/review membership, all six colors, due badges, overdue review collection, mobile picker bounds and Escape.');
}finally{ws?.close();chrome.kill();}
