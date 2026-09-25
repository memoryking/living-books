import {spawn} from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
const dir=path.resolve('artifacts/hanja-guide-screens');await fs.mkdir(dir,{recursive:true});
const chrome=spawn('C:/Program Files/Google/Chrome/Application/chrome.exe',['--headless=new','--disable-gpu','--no-first-run','--remote-debugging-port=9341','--user-data-dir='+path.join(dir,'browser-profile-guide'),'about:blank'],{windowsHide:true,stdio:'ignore'});
let ws;
try {
  let targets;for(let i=0;i<40;i++){try{targets=await(await fetch('http://127.0.0.1:9341/json')).json();break;}catch{await new Promise(r=>setTimeout(r,250));}}
  ws=new WebSocket(targets.find(t=>t.type==='page').webSocketDebuggerUrl);await new Promise((r,j)=>{ws.onopen=r;ws.onerror=j;});
  let seq=0;const pending=new Map(),errors=[];
  ws.onmessage=({data})=>{const m=JSON.parse(data);if(m.id){const p=pending.get(m.id);pending.delete(m.id);if(p)m.error?p.j(m.error):p.r(m.result);}if(m.method==='Runtime.exceptionThrown')errors.push(m.params.exceptionDetails.text);};
  const send=(method,params={})=>new Promise((r,j)=>{const id=++seq;pending.set(id,{r,j});ws.send(JSON.stringify({id,method,params}));});
  const ev=async expression=>{const r=await send('Runtime.evaluate',{expression,returnByValue:true});if(r.exceptionDetails)throw Error(JSON.stringify(r.exceptionDetails));return r.result.value;};
  const wait=async expression=>{for(let i=0;i<100;i++){if(await ev(expression))return;await new Promise(r=>setTimeout(r,100));}throw Error(expression);};
  const shot=async name=>{const r=await send('Page.captureScreenshot',{format:'png'});await fs.writeFile(path.join(dir,name+'.png'),Buffer.from(r.data,'base64'));};
  await send('Runtime.enable');await send('Page.enable');
  const press=async text=>{await ev('Array.from(document.querySelectorAll("button")).find(b=>b.textContent.includes('+JSON.stringify(text)+')).click()');await new Promise(r=>setTimeout(r,650));};
  await send('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:2,mobile:true});
  await send('Page.navigate',{url:'https://living-books-beta.vercel.app/premium/hanja-memory/read'});
  await wait('document.body.innerText.includes("새 글자 배우기")');
  // Dedicated demonstration profile only: never capture personal notes or real progress.
  await ev('localStorage.setItem("living-books-hanja-memory-v1",JSON.stringify({version:1,lastId:1,records:{42:{stage:1,due:1,last:1,attempts:1,misses:0,needsReview:false}},bookmarks:[42,1,2],notes:{}}))');
  await send('Page.reload');await new Promise(r=>setTimeout(r,1500));
  await shot('today');
  await press('새 글자 배우기');await shot('new-lesson');
  await press('골라 학습');
  await ev('(()=>{const e=document.querySelectorAll("select")[1];e.value="bookmarks";e.dispatchEvent(new Event("change",{bubbles:true}))})()');
  await new Promise(r=>setTimeout(r,700));await shot('choose');
  await press('정답 보기');await shot('answer');
  await press('뜻과 음 → 쓰기');await press('선택 범위 시작');
  const box=await ev('(()=>{const r=document.querySelector("canvas").getBoundingClientRect();return {x:r.x,y:r.y,w:r.width,h:r.height}})()');
  // Example handwritten strokes, intentionally incomplete so comparison is easy to see.
  for(const points of [[[.25,.2],[.65,.2]],[[.25,.2],[.25,.62],[.72,.62]],[[.3,.4],[.65,.4]]]){
    await send('Input.dispatchMouseEvent',{type:'mousePressed',x:box.x+points[0][0]*box.w,y:box.y+points[0][1]*box.h,button:'left',clickCount:1});
    for(const [x,y] of points.slice(1))await send('Input.dispatchMouseEvent',{type:'mouseMoved',x:box.x+x*box.w,y:box.y+y*box.h,button:'left',buttons:1});
    const end=points.at(-1);await send('Input.dispatchMouseEvent',{type:'mouseReleased',x:box.x+end[0]*box.w,y:box.y+end[1]*box.h,button:'left'});
  }
  await shot('writing');await press('정답 보기');await shot('writing-answer');
  await press('학습 안내');
  await ev('Array.from(document.querySelectorAll("h3")).find(e=>e.textContent==="학습 기록 관리").scrollIntoView()');
  await new Promise(r=>setTimeout(r,400));await shot('backup');
  assert.deepEqual(errors,[]);console.log('Captured 7 demonstration screenshots, 390 × 844 viewport, 2x resolution.');
} finally {ws?.close();chrome.kill();}
