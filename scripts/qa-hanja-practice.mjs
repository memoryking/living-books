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
  const choose=async (index,value)=>{if(index===2){await ev('document.querySelector("summary[aria-label]").click()');await ev('Array.from(document.querySelectorAll("[data-character-id]")).find(b=>b.dataset.characterId==='+JSON.stringify(value)+').click()');await new Promise(r=>setTimeout(r,100));return;}await ev('(()=>{const e=document.querySelectorAll("select")['+index+'];e.value='+JSON.stringify(value)+';e.dispatchEvent(new Event("change",{bubbles:true}))})()');await new Promise(r=>setTimeout(r,100));};
  for(const [width,height] of [[1920,1080],[1366,768],[1280,800],[768,1024],[1024,768],[390,844],[320,568],[844,390]]) {
    await send('Page.navigate',{url:'about:blank'});
    await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width<500});
    await send('Page.navigate',{url:'http://127.0.0.1:3100/premium/hanja-memory/read'});
    await wait('document.body.innerText.includes("새 글자 배우기")');
    await ev('localStorage.setItem("living-books-hanja-memory-v1",JSON.stringify({version:1,lastId:1,records:{42:{stage:2,due:Date.now()+259200000,last:1,attempts:2,misses:0,needsReview:false}},bookmarks:[42,1,2],notes:{}}))');
    await send('Page.reload');await wait('document.body.innerText.includes("새 글자 배우기")');
    await press('골라 학습');await choose(1,'bookmarks');
    assert.deepEqual(await ev('[...document.querySelectorAll("[data-character-id]")].map(o=>o.dataset.characterId)'),['42','1','2']);
    assert.ok(await ev('!document.querySelector("[class*=characterOptions]").textContent.includes("말 마")'));
    const due=await ev('JSON.parse(localStorage.getItem("living-books-hanja-memory-v1")).records[42].due');
    await shot('practice-question-'+width);
    if(width>=1100)assert.ok(await ev('parseFloat(getComputedStyle(document.querySelector("[class*=bigHanja]")).fontSize)>=180'));
    await press('정답 보기');
    await shot('practice-answer-'+width);
    assert.ok(await ev('document.documentElement.scrollHeight<=innerHeight+2 && [...document.querySelectorAll("[class*=quizCard]")].every(e=>e.scrollHeight<=e.clientHeight+2)'), 'answer overflow');
    await press('맞혔어요');
    assert.equal(await ev('JSON.parse(localStorage.getItem("living-books-hanja-memory-v1")).records[42].due'),due);
    await choose(2,'2');await press('정답 보기');await press('다시 연습');
    assert.equal(await ev('JSON.parse(localStorage.getItem("living-books-hanja-memory-v1")).records[2].needsReview'),true);
    await press('뜻과 음 → 쓰기');await press('선택 범위 시작');
    assert.ok(await ev('[...document.querySelectorAll("[class*=quizCard]")].every(e=>e.scrollHeight<=e.clientHeight+2)'),'writing question overflow');
    const box=await ev('(()=>{const r=document.querySelector("canvas").getBoundingClientRect();return {x:r.x+r.width/2,y:r.y+r.height/2}})()');
    await send('Input.dispatchMouseEvent',{type:'mousePressed',x:box.x,y:box.y,button:'left',clickCount:1});
    await send('Input.dispatchMouseEvent',{type:'mouseMoved',x:box.x+20,y:box.y+20,button:'left',buttons:1});
    await send('Input.dispatchMouseEvent',{type:'mouseReleased',x:box.x+20,y:box.y+20,button:'left'});
    const ink=await ev('document.querySelector("canvas").toDataURL()');
    assert.equal(await ev('!!document.querySelector("[aria-label=비교용정답]")'),false);
    await press('정답 보기');
    assert.equal(await ev('document.querySelector("canvas").toDataURL()'),ink);
    assert.equal(await ev('document.querySelector("[class*=traceAnswer]").textContent'),'馬');
    await shot('practice-writing-'+width);
    const bounds=await ev('({h:innerHeight,doc:document.documentElement.scrollHeight,panels:[...document.querySelectorAll("[class*=quizCard],[class*=quizAnswer],[class*=recallSection]")].map(e=>({name:e.className,h:e.clientHeight,s:e.scrollHeight}))})');
    console.log(JSON.stringify(bounds));assert.ok(bounds.doc<=height+2 && bounds.panels.every(e=>e.s<=e.h+2));
    await press('오늘 학습');assert.ok(await ev('document.body.innerText.includes("오늘 복습 시작")'));
    await press('새 글자 배우기');assert.ok(await ev('document.body.innerText.includes("그림으로 배우기")'));
  }
  assert.deepEqual(errors,[]);
  console.log('PASS: bookmark order, concealed readings, direct selection, preserved due date, failure schedule, retained handwriting overlay, mobile bounds, separate new lessons.');
} finally {ws?.close();chrome.kill();}
