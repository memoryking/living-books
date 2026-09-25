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
  const base=process.env.HANJA_QA_BASE||'http://127.0.0.1:3100';
  const seed=async expression=>{
    await ev('localStorage.removeItem("living-books-hanja-memory-v1-preferences");localStorage.setItem("living-books-hanja-memory-v1",JSON.stringify('+expression+'))');
    await send('Page.reload');await wait('document.body.innerText.includes("지금 가능한 복습")');await pause(600);
  };
  const activeToday=()=>ev('[...document.querySelectorAll("nav button")].find(b=>b.textContent.includes("오늘 학습")).getAttribute("aria-pressed")==="true"');
  for(const [width,height] of [[1280,800],[390,844],[320,568],[844,390]]){
    await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width<500});
    await send('Page.navigate',{url:base+'/premium/hanja-memory/read'});await wait('document.body.innerText.includes("자율 학습")');await pause(600);
    await seed('{version:1,lastId:1,records:{1:{stage:1,due:Date.now()-1000,last:1,attempts:1,misses:0,needsReview:false}},bookmarks:[],notes:{}}');
    await press('오늘 복습 시작');await press('정답 보기');await press('다시 연습');
    assert.ok(await activeToday());
    assert.ok(await ev('document.body.innerText.includes("지금 복습할 한자가 없습니다") && document.body.innerText.includes("10분 뒤") && !document.body.innerText.includes("헷갈린 글자만 한 번 더") && !document.querySelector("[class*=missedList] button")'));
    await shot('today-complete-'+width);
    if(width===390){
      const clip=await ev('(()=>{const r=document.querySelector("[class*=completionDue]").getBoundingClientRect();return {x:r.x,y:r.y,width:r.width,height:r.height,scale:1}})()');
      const r=await send('Page.captureScreenshot',{format:'png',clip});await fs.writeFile('artifacts/hanja-guide-screens/today-complete.png',Buffer.from(r.data,'base64'));
    }
    // Today's date is insufficient: wait for the exact timestamp without reloading.
    await seed('{version:1,lastId:1,records:{1:{stage:1,due:Date.now()+3500,last:1,attempts:1,misses:0,needsReview:false}},bookmarks:[],notes:{}}');
    assert.ok(await ev('[...document.querySelectorAll("button")].find(b=>b.textContent.includes("오늘 복습 시작")).disabled'));
    await wait('[...document.querySelectorAll("button")].some(b=>b.textContent.includes("오늘 복습 시작")&&!b.disabled)');
    await press('오늘 복습 시작');await press('정답 보기');await press('맞혔어요');assert.ok(await activeToday());
    assert.ok(await ev('document.body.innerText.includes("지금 복습할 한자가 없습니다")'));
    console.log('PASS completion and exact due',width,height);
  }
  // A second eligible batch must remain in today's scheduled review.
  await seed('{version:1,lastId:1,records:Object.fromEntries(Array.from({length:11},(_,i)=>[i+1,{stage:1,due:Date.now()-1000,last:1,attempts:1,misses:0,needsReview:false}])),bookmarks:[],notes:{}}');
  await press('오늘 복습 시작');for(let i=0;i<10;i++){await press('정답 보기');await press('다시 연습');}
  assert.ok(await ev('document.body.innerText.includes("지금 복습할 한자 1개가 남아")'));await press('오늘 복습 시작');assert.ok(await activeToday());
  assert.deepEqual(errors,[]);
}finally{ws?.close();chrome.kill();}
