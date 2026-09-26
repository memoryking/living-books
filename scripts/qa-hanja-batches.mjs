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

  const pause=ms=>new Promise(r=>setTimeout(r,ms));
  const exact=async label=>{await ev('[...document.querySelectorAll("button")].find(b=>b.textContent==='+JSON.stringify(label)+').click()');await pause(100);};
  const pick=async value=>{await ev('(()=>{const e=[...document.querySelectorAll("label")].find(e=>e.textContent.startsWith("복습 범위")).querySelector("select");e.value='+JSON.stringify(value)+';e.dispatchEvent(new Event("change",{bubbles:true}))})()');await pause(100);};
  const records=()=>ev('JSON.parse(localStorage.getItem("living-books-hanja-memory-v1")).records');
  const fits=async()=>{const fits=await ev('document.documentElement.scrollHeight<=innerHeight+2 && document.documentElement.scrollWidth<=innerWidth+2 && [...document.querySelectorAll("[class*=quizCard]")].every(e=>e.scrollHeight<=e.clientHeight+2)');if(!fits){await shot('prestudy-overflow');console.log(await ev('[...document.querySelectorAll("[class*=quizCard],[class*=quickSelect]")].map(e=>({class:e.className,client:e.clientHeight,scroll:e.scrollHeight}))'));}assert.ok(fits,'question/answer fits viewport');};
  const guide=async(name,selector)=>{
    await fs.mkdir('artifacts/hanja-guide-screens',{recursive:true});
    const clip=await ev('(()=>{const r=document.querySelector('+JSON.stringify(selector)+').getBoundingClientRect();return {x:r.x,y:r.y,width:r.width,height:r.height,scale:1}})()');
    const r=await send('Page.captureScreenshot',{format:'png',clip});await fs.writeFile('artifacts/hanja-guide-screens/'+name+'.png',Buffer.from(r.data,'base64'));
  };

  const check=async id=>{await ev('[...document.querySelectorAll("input[data-character-id]")].find(e=>e.dataset.characterId==='+JSON.stringify(String(id))+').click()');await pause(80);};
  const revealGrade=async correct=>{await press('정답 보기');await press(correct?'맞혔어요':'다시 확인');};
  for(const [width,height] of [[1280,800],[768,1024],[390,844],[320,568],[844,390]].filter(([w])=>!process.env.HANJA_QA_WIDTHS || process.env.HANJA_QA_WIDTHS.split(',').includes(String(w)))) {
    await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width<500});
    await send('Page.navigate',{url:(process.env.HANJA_QA_BASE || 'http://127.0.0.1:3105')+'/premium/hanja-memory/read'});
    await wait('[...document.querySelectorAll("button")].some(b=>b.textContent.includes("새 글자 배우기")&&!b.disabled)');
    await ev('localStorage.setItem("living-books-hanja-memory-v1-preferences",JSON.stringify({mode:"free",seconds:3}));localStorage.setItem("living-books-hanja-memory-v1",JSON.stringify({version:1,lastId:1,records:Object.fromEntries(Array.from({length:23},(_,i)=>[i+1,{stage:2,due:Date.now()+259200000,last:1,attempts:2,misses:0,needsReview:false}])),bookmarks:[23,22,21,1],notes:{}}))');
    await send('Page.reload');await wait('[...document.querySelectorAll("button")].some(b=>b.textContent.includes("새 글자 배우기")&&!b.disabled)');
    await press('미리 복습');const original=await records();
    assert.ok(await ev('document.body.innerText.includes("현재 범위 전체 23개를 10개씩") && document.body.innerText.includes("미리 복습 시작 · 10개")'));
    await ev('document.querySelector("[class*=directChoice]>summary").click()');
    assert.equal(await ev('document.querySelectorAll("input[type=checkbox]").length'),23);
    assert.equal(await ev('document.querySelectorAll("[class*=directChoice] summary").length'),1,'no nested picker');
    assert.ok(await ev('!document.querySelector("[class*=checklist]").textContent.includes("날 일")'));
    assert.ok(await ev('(()=>{const r=document.querySelector("[class*=checklist]").getBoundingClientRect();return r.left>=0 && r.right<=innerWidth+1 && r.bottom<=innerHeight+1})()'),'panel fits viewport');
    await check(3);await check(1);assert.ok(await ev('!document.querySelector("[class*=quizCard]") && document.querySelector("[class*=checklist]").textContent.includes("2개 선택")'));
    await press('선택 완료');await press('미리 복습 시작');await fits();
    assert.equal(await ev('document.querySelector("[class*=bigHanja]").textContent'),'日','scope order, not click order');
    await revealGrade(true);assert.equal(await ev('document.querySelector("[class*=bigHanja]").textContent'),'夕');await revealGrade(true);
    assert.ok(await ev('document.body.innerText.includes("선택한 2개를 이번 연습에서 모두 맞혔어요")'));assert.deepEqual(await records(),original);
    await press('여기서 마치기');await ev('document.querySelector("[class*=directChoice]>summary").click()');await press('모두 체크');assert.equal(await ev('document.querySelectorAll("input:checked").length'),23);await press('체크 해제');assert.equal(await ev('document.querySelectorAll("input:checked").length'),0);await press('선택 완료');
    await press('미리 복습 시작');
    for(let i=0;i<10;i++)await revealGrade(i!==2);
    assert.ok(await ev('document.body.innerText.includes("아직 확인할 한자 13개") && ![...document.querySelectorAll("button")].some(b=>b.textContent.includes("다음 10개 학습"))'));
    if(width===390)await guide('practice-complete','[class*=sessionSummary]');
    await press('틀린 한자 다시 확인');await revealGrade(false);await press('틀린 한자 다시 확인');await revealGrade(true);
    assert.ok(await ev('document.body.innerText.includes("다음 10개 학습")'));
    await press('다음 10개 학습');
    for(let i=0;i<10;i++)await revealGrade(true);
    assert.ok(await ev('document.body.innerText.includes("다음 3개 학습")'));await press('다음 3개 학습');
    for(let i=0;i<3;i++)await revealGrade(true);
    assert.ok(await ev('document.body.innerText.includes("선택한 23개를 이번 연습에서 모두 맞혔어요")'));assert.deepEqual(await records(),original);
    await press('여기서 마치기');await ev('document.querySelector("[class*=directChoice]>summary").click()');await check(3);await press('선택 완료');await pick('bookmarks');
    await ev('document.querySelector("[class*=directChoice]>summary").click()');assert.equal(await ev('document.querySelectorAll("input:checked").length'),0);
    assert.deepEqual(await ev('[...document.querySelectorAll("input[data-character-id]")].map(e=>+e.dataset.characterId)'),[23,22,21,1]);
    await check(22);await check(1);await press('선택 완료');await press('뜻과 음 → 쓰기');await press('미리 복습 시작');assert.ok(await ev('!!document.querySelector("canvas")'));await revealGrade(true);await revealGrade(true);assert.deepEqual(await records(),original);
    // Meta batching: 11 checked cards; 10 then 1, with a ready dialog at each boundary.
    await press('한자 → 뜻과 음');await pick('all');await ev('document.querySelector("[class*=directChoice]>summary").click()');
    for(let i=1;i<=11;i++)await check(i);await press('선택 완료');await press('메타 학습');await press('미리 복습 시작');await wait('!!document.querySelector("dialog[open]")');await exact('시작');
    const book=JSON.parse(await fs.readFile('data/hanja-memory/book.json','utf8'));
    for(let i=0;i<10;i++){await exact(Array.from(book.entries[i].reading)[0]);await ev('document.querySelector("[class*=gradeButtons] button").click()');await pause(100);}
    assert.ok(await ev('document.body.innerText.includes("다음 1개 학습") && !document.querySelector("progress")'));
    await press('다음 1개 학습');await wait('!!document.querySelector("dialog[open]")');await pause(3100);assert.deepEqual(await records(),original);await exact('시작');await exact(Array.from(book.entries[10].reading)[0]);await ev('document.querySelector("[class*=gradeButtons] button").click()');await pause(100);
    assert.ok(await ev('document.body.innerText.includes("선택한 11개를 이번 연습에서 모두 맞혔어요")'));assert.deepEqual(await records(),original);
    await shot('batch-complete-'+width);console.log('PASS checkbox/batches',width,height);
  }
  assert.deepEqual(errors,[]);
} finally {ws?.close();chrome.kill();}
