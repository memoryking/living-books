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
  const pause=ms=>new Promise(r=>setTimeout(r,ms));
  const centered=async()=>assert.ok(await ev('(()=>{const r=document.querySelector("dialog[open]").getBoundingClientRect();return Math.abs(r.x+r.width/2-innerWidth/2)<2 && Math.abs(r.y+r.height/2-innerHeight/2)<2})()'), 'dialog centered in viewport');
  const records=()=>ev('JSON.parse(localStorage.getItem("living-books-hanja-memory-v1")).records');
  const pickList=async value=>{await ev('(()=>{const e=[...document.querySelectorAll("label")].find(e=>e.textContent.startsWith("학습 목록")).querySelector("select");e.value='+JSON.stringify(value)+';e.dispatchEvent(new Event("change",{bubbles:true}))})()');await pause(150);};
  const exact=async text=>{await ev('[...document.querySelectorAll("button")].find(b=>b.textContent==='+JSON.stringify(text)+').click()');await pause(100);};
  const choice=async correct=>{await ev('[...document.querySelectorAll("[class*=metaChoices] button")].find(b=>b.textContent'+(correct?'===':'!==')+'"말").click()');await pause(100);};
  const guideShot=async (id,selector)=>{
    await fs.mkdir('artifacts/hanja-guide-screens',{recursive:true});
    const clip=await ev('(()=>{const r=document.querySelector('+JSON.stringify(selector)+').getBoundingClientRect();return {x:r.x,y:r.y,width:r.width,height:r.height,scale:1}})()');
    const r=await send('Page.captureScreenshot',{format:'png',clip});await fs.writeFile('artifacts/hanja-guide-screens/'+id+'.png',Buffer.from(r.data,'base64'));
  };
  for(const [width,height] of [[1280,800],[390,844],[320,568],[844,390]]) {
    await send('Page.navigate',{url:'about:blank'});
    await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width<500});
    await send('Page.navigate',{url:process.env.HANJA_QA_BASE?process.env.HANJA_QA_BASE+'/premium/hanja-memory/read':'http://127.0.0.1:3100/premium/hanja-memory/read'});
    await wait('document.body.innerText.includes("자율 학습")');await pause(700);
    await ev('localStorage.setItem("living-books-hanja-memory-v1-preferences",JSON.stringify({mode:"meta",seconds:3}));localStorage.setItem("living-books-hanja-memory-v1",JSON.stringify({version:1,lastId:1,records:{1:{stage:1,due:Date.now()-1000,last:1,attempts:1,misses:0,needsReview:false},42:{stage:2,due:Date.now()+259200000,last:1,attempts:2,misses:0,needsReview:false}},bookmarks:[42,1],notes:{}}))');
    await send('Page.reload');await wait('document.querySelector("select[aria-label]")?.value==="3"');await pause(200);
    await press('선택 학습');await pickList('bookmarks');await wait('!!document.querySelector("dialog[open]")');
    await centered();
    if(process.env.HANJA_DIALOG_ONLY){await shot('meta-ready-centered-'+width);await exact('시작');await ev('window.dispatchEvent(new Event("blur"))');await wait('!!document.querySelector("dialog[open]")');await centered();continue;}
    assert.ok(await ev('!document.querySelector("[class*=bigHanja]")'));
    if(width===390)await guideShot('meta-ready','dialog');
    const before=await records();await pause(3200);assert.deepEqual(await records(),before);
    await exact('시작');
    await press('범위 처음부터');await wait('!!document.querySelector("dialog[open]")');
    assert.deepEqual(await records(),before);await exact('시작');
    await shot('meta-question-'+width);
    assert.ok(await ev('document.documentElement.scrollHeight<=innerHeight+2 && [...document.querySelectorAll("[class*=quizCard]")].every(e=>e.scrollHeight<=e.clientHeight+2)'), 'timed question fits viewport');
    assert.equal(await ev('new Set([...document.querySelectorAll("[class*=metaChoices] button")].map(b=>b.textContent)).size'),2);
    if(width===390)await guideShot('meta-question','[class*=metaActions]');
    await ev('(()=>{const b=[...document.querySelectorAll("[class*=metaChoices] button")].find(b=>b.textContent==="말");b.click();b.click()})()');await pause(100);
    let r=await records();assert.equal(r[42].attempts,3);assert.equal(r[42].due,before[42].due);assert.equal(r[42].stage,2);
    assert.ok(await ev('![...document.querySelectorAll("button")].some(b=>b.textContent.startsWith("맞혔어요")||b.textContent.startsWith("다시 연습"))'));
    if(width===390)await guideShot('meta-answer','[class*=gradeButtons]');
    await pause(3200);assert.equal((await records())[42].attempts,3);
    await ev('document.querySelector("[class*=gradeButtons] button").click()');await wait('!!document.querySelector("[class*=metaChoices]")');
    await ev('[...document.querySelectorAll("[class*=metaChoices] button")].find(b=>b.textContent!=="날").click()');await pause(100);
    assert.equal((await records())[1].needsReview,true);
    await ev('document.querySelector("[class*=gradeButtons] button").click()');await pause(100);await press('범위 처음부터');await exact('시작');
    await ev('window.dispatchEvent(new Event("blur"))');await wait('!!document.querySelector("dialog[open]")');
    const paused=await records();await pause(3200);assert.deepEqual(await records(),paused);
    await exact('계속하기');await wait('document.body.innerText.includes("시간 초과 · 저장 완료")');
    r=await records();assert.equal(r[42].stage,0);assert.equal(r[42].attempts,4);assert.ok(Math.abs(r[42].due-Date.now()-600000)<3000);
    assert.ok(await ev('document.documentElement.scrollHeight<=innerHeight+2 && [...document.querySelectorAll("[class*=quizCard]")].every(e=>e.scrollHeight<=e.clientHeight+2)'));
    await shot('meta-answer-'+width);
    // Restore a due one-day record and verify today's review advances to three days.
    await ev('(()=>{const s=JSON.parse(localStorage.getItem("living-books-hanja-memory-v1"));s.records[1]={stage:1,due:Date.now()-1000,last:1,attempts:1,misses:0,needsReview:false};localStorage.setItem("living-books-hanja-memory-v1",JSON.stringify(s))})()');
    await send('Page.reload');await wait('document.querySelector("select[aria-label]")?.value==="3"');await pause(200);
    await press('오늘 복습 시작');await exact('시작');await exact('날');
    r=await records();assert.equal(r[1].stage,2);assert.ok(Math.abs(r[1].due-Date.now()-259200000)<3000);
    await press('오늘 학습');await press('뜻과 음 → 쓰기');assert.ok(await ev('!document.querySelector("[class*=modeControls]")'));
    await press('선택 학습');await pickList('bookmarks');assert.ok(await ev('!!document.querySelector("canvas") && !document.querySelector("dialog")'));
    await press('오늘 학습');await press('한자 → 뜻과 음');await press('새 글자 배우기');
    assert.ok(await ev('!document.querySelector("dialog") && document.body.innerText.includes("그림으로 배우기")'));
    for(let i=0;i<4;i++)await press('다음 그림 배우기');await press('이제 가리고 확인');await wait('!!document.querySelector("dialog[open]")');
    await exact('시작');await exact('달');assert.equal((await records())[2].stage,1);
    console.log('PASS meta',width,height);
  }
  if(process.env.HANJA_DIALOG_ONLY){assert.deepEqual(errors,[]);console.log('PASS: ready and paused dialogs centered at all four viewport sizes.');}
  else {
  await press('자율 학습');assert.equal(await ev('JSON.parse(localStorage.getItem("living-books-hanja-memory-v1-preferences")).mode'),'free');
  await press('메타 학습');await ev('(()=>{const e=document.querySelector("select[aria-label]");e.value="7";e.dispatchEvent(new Event("change",{bubbles:true}))})()');await pause(100);
  await send('Page.reload');await wait('document.querySelector("select[aria-label]")?.value==="7"');
  assert.deepEqual(errors,[]);
  }
  await ev('localStorage.removeItem("living-books-hanja-memory-v1-preferences")');
} finally {ws?.close();chrome.kill();}
