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

  for(const [width,height] of [[1280,800],[390,844],[320,568],[844,390]]) {
    await send('Page.navigate',{url:'about:blank'});
    await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width<500});
    await send('Page.navigate',{url:'http://127.0.0.1:3100/premium/hanja-memory/read#item-42'});
    await wait('document.querySelectorAll("select")[2]?.value === "42"');
    assert.equal(await ev('!!document.querySelector("input[type=search]")'),false);
    assert.equal(await ev('document.body.innerText.includes("책 소개") || document.body.innerText.includes("훈음·연상 듣기")'),false);
    const click=async label=>{await ev('Array.from(document.querySelectorAll("button")).find(b=>b.textContent.trim().replace(/^0[1-4]/,"")==='+JSON.stringify(label)+').click()');await new Promise(r=>setTimeout(r,100));};
    for(const label of ['암기법','예시','쓰기','메모']){
      await click(label);await shot('focus-'+width+'-'+height+'-'+label);
      const bounds=await ev('({doc:document.documentElement.scrollHeight,vh:innerHeight,wide:document.documentElement.scrollWidth,vw:innerWidth,panels:[...document.querySelectorAll("[class*=detailPanel],[class*=focusRead],[class*=focusCard]")].map(e=>({class:e.className,height:e.clientHeight,scroll:e.scrollHeight}))})');
      console.log(width,height,label,JSON.stringify(bounds));
      assert.ok(bounds.doc<=height+2 && bounds.wide<=width+1);
      assert.ok(bounds.panels.every(p=>p.scroll<=p.height+2),JSON.stringify(bounds));
    }
    await click('암기법');await click('가리고 확인');await shot('focus-recall-'+width+'-'+height);
    await click('정답 보기');await shot('focus-answer-'+width+'-'+height);
    assert.ok(await ev('document.documentElement.scrollHeight<=innerHeight+2'));
    assert.ok(await ev('[...document.querySelectorAll("[class*=quizCard],[class*=quizAnswer]")].every(e=>e.scrollHeight<=e.clientHeight+2)'));
    await ev('Array.from(document.querySelectorAll("button")).find(b=>b.textContent.includes("맞혔어요")).click()');
    await click('책 읽기');
    for(const id of [38,121,331,323]){
      await ev('location.hash="item-'+id+'"');
      await wait('document.querySelectorAll("select")[2]?.value === "'+id+'"');
      const ratio=await ev('(()=>{const e=document.querySelector("section[aria-label=\\"선택한 한자\\"] [role=img]"),r=e.getBoundingClientRect();return {actual:r.width/r.height,expected:parseFloat(e.style.getPropertyValue("--image-ratio"))}})()');
      assert.ok(Math.abs(ratio.actual-ratio.expected)<.01,JSON.stringify(ratio));
      if(id===323){await click('표기 안내');await shot('focus-correction-'+width+'-'+height);}
    }
  }
  // Recommended learning: teach five before recall; preview never counts as success.
  await ev('localStorage.removeItem("living-books-hanja-memory-v1")');
  await send('Page.navigate',{url:'about:blank'});
  await send('Emulation.setDeviceMetricsOverride',{width:320,height:568,deviceScaleFactor:1,mobile:true});
  await send('Page.navigate',{url:'http://127.0.0.1:3100/premium/hanja-memory/read'});
  await wait('Array.from(document.querySelectorAll("button")).some(b=>b.textContent.includes("오늘의 학습 시작")&&!b.disabled)');
  const press=async label=>{await ev('Array.from(document.querySelectorAll("button")).find(b=>b.textContent.includes('+JSON.stringify(label)+')).click()');await new Promise(r=>setTimeout(r,150));};
  const fits=async()=>assert.ok(await ev('document.documentElement.scrollHeight<=innerHeight+2 && [...document.querySelectorAll("[class*=quizCard],[class*=quizAnswer],[class*=studyHome]")].every(e=>e.scrollHeight<=e.clientHeight+2)'));
  await fits();await shot('today-home-320');
  await press('오늘의 학습 시작');
  for(let i=0;i<5;i++){
    assert.ok(await ev('document.body.innerText.includes("그림으로 배우기")'));
    await fits();
    assert.equal(await ev('Object.keys(JSON.parse(localStorage.getItem("living-books-hanja-memory-v1")).records).length'),0);
    if(i===0)await shot('today-learn-320');
    await press(i===4?'이제 가리고 확인':'다음 그림 배우기');
  }
  assert.equal(await ev('!!document.querySelector("[class*=quizAnswer]")'),false);
  assert.equal(await ev('document.body.innerText.includes("이번에는 넘기기")'),false);
  for(let i=0;i<5;i++) {await press('정답 보기');await fits();await press(i===0?'다시 연습':'맞혔어요');}
  assert.equal(await ev('Object.keys(JSON.parse(localStorage.getItem("living-books-hanja-memory-v1")).records).length'),5);
  await shot('today-finish-320');
  await press('헷갈린 글자만 한 번 더');await press('정답 보기');await press('맞혔어요');
  assert.equal(await ev('JSON.parse(localStorage.getItem("living-books-hanja-memory-v1")).records[1].stage'),0);
  console.log('PASS: five previews without grading, concealed recall, two ratings, persistence, early retry, compact home and lesson.');
  for(const [width,height] of [[1280,800],[390,844],[320,568],[844,390]]) {
    await ev('(()=>{const s=JSON.parse(localStorage.getItem("living-books-hanja-memory-v1"));s.records[2].due=1;localStorage.setItem("living-books-hanja-memory-v1",JSON.stringify(s))})()');
    await send('Page.navigate',{url:'about:blank'});
    await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width<500});
    await send('Page.navigate',{url:'http://127.0.0.1:3100/premium/hanja-memory/read'});
    await wait('document.body.innerText.includes("복습부터")');
    await fits();await shot('today-due-'+width);
    await press('뜻과 음 → 쓰기');await press('오늘의 학습 시작');
    assert.equal(await ev('document.querySelector("[class*=quizQuestion] h3").textContent'),'달 월');
    assert.equal(await ev('!!document.querySelector("[class*=quizAnswer]")'),false);
    await fits();await press('정답 보기');await fits();
  }
  console.log('PASS: due item prioritized over new items, reverse recall, home and answer at four viewport sizes.');
  assert.deepEqual(errors,[]);
} finally {ws?.close();chrome.kill();}
