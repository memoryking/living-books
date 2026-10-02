import {spawn} from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
const base=process.env.HANJA_QA_BASE||'http://localhost:3099';
const dir=path.resolve('artifacts/hanja-fsrs-qa');await fs.mkdir(dir,{recursive:true});await fs.mkdir('artifacts/hanja-guide-screens',{recursive:true});
const chrome=spawn('C:/Program Files/Google/Chrome/Application/chrome.exe',['--headless=new','--disable-gpu','--no-first-run','--remote-debugging-port=9356','--user-data-dir='+path.join(dir,'profile'),'about:blank'],{windowsHide:true,stdio:'ignore'});
let ws;
const delay=ms=>new Promise(r=>setTimeout(r,ms));
try{
 let targets;for(let i=0;i<60;i++){try{targets=await(await fetch('http://127.0.0.1:9356/json')).json();break;}catch{await delay(200);}}assert.ok(targets,'Chrome available');
 ws=new WebSocket(targets.find(t=>t.type==='page').webSocketDebuggerUrl);await new Promise((r,j)=>{ws.onopen=r;ws.onerror=j;});let seq=0;const pending=new Map(),errors=[];
 ws.onmessage=({data})=>{const m=JSON.parse(data);if(m.id){const p=pending.get(m.id);pending.delete(m.id);if(p)m.error?p.j(m.error):p.r(m.result);}if(m.method==='Runtime.exceptionThrown')errors.push(m.params.exceptionDetails.text);};
 const send=(method,params={})=>new Promise((r,j)=>{const id=++seq;pending.set(id,{r,j});ws.send(JSON.stringify({id,method,params}));});
 const ev=async expression=>{const r=await send('Runtime.evaluate',{expression,returnByValue:true});if(r.exceptionDetails)throw Error(JSON.stringify(r.exceptionDetails));return r.result.value;};
 const wait=async expr=>{for(let i=0;i<200;i++){if(await ev(expr))return;await delay(150);}throw Error('Wait: '+expr);};
 const press=async text=>{await ev(`(()=>{const b=[...document.querySelectorAll('button')].find(b=>b.textContent.includes(${JSON.stringify(text)}));if(!b)throw Error('Missing button '+${JSON.stringify(text)});b.click()})()`);await delay(180);};
 const read=()=>ev(`JSON.parse(localStorage.getItem('living-books-hanja-memory-v1'))`);
 const shot=async(name,selector,guide=false)=>{await ev("document.querySelectorAll('nextjs-portal').forEach(e=>e.style.display='none')");let clip;if(selector)clip=await ev(`(()=>{const r=document.querySelector(${JSON.stringify(selector)}).getBoundingClientRect();return {x:r.x+scrollX,y:r.y+scrollY,width:r.width,height:r.height,scale:1}})()`);const r=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,...(clip?{clip}:{})});await fs.writeFile((guide?'artifacts/hanja-guide-screens':dir)+'/'+name+'.png',Buffer.from(r.data,'base64'));};
 const fits=async()=>{const f=await ev('({w:innerWidth,h:innerHeight,sw:document.documentElement.scrollWidth,sh:document.documentElement.scrollHeight})');assert.ok(f.sw<=f.w+2,JSON.stringify(f));};
 await send('Runtime.enable');await send('Page.enable');
 for(const [width,height] of [[1280,900],[768,1024],[390,844],[320,568]]){
  await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width<500});await send('Page.navigate',{url:base+'/premium/hanja-memory/read'});await wait(`document.body.innerText.includes('첫 글자 메타 학습')`);
  await ev(`localStorage.setItem('living-books-hanja-memory-v1',JSON.stringify({version:1,lastId:1,records:Object.fromEntries(Array.from({length:12},(_,i)=>[i+1,{stage:3,due:Date.now()+86400000,last:Date.now()-86400000,attempts:3,misses:0,needsReview:false}])),bookmarks:[1,2],notes:{}}));localStorage.setItem('living-books-hanja-memory-v1-preferences',JSON.stringify({seconds:30}));`);
  await send('Page.reload');await wait(`document.body.innerText.includes('첫 학습 12/')`);assert.ok(!(await ev('document.body.innerText')).includes('자율 학습'));await fits();await shot('today-'+width);
  if(width===390)await shot('today','[class*=dailyHome]',true);
  await press('미리 복습');await shot('round-home-'+width);await fits();if(width===390)await shot('select-list','[class*=studyHome]',true);
  await ev(`document.querySelector('[class*=directChoice] summary').click()`);if(width===390)await shot('choose','[class*=checklist]',true);await press('선택 완료');
  const old=(await read()).records[1];await press('미리 복습 시작');await wait(`!!document.querySelector('dialog[open]')`);if(width===390)await shot('meta-ready','dialog',true);
  await press('시작');await wait(`document.querySelectorAll('[class*=metaChoices] button').length===2`);await fits();if(width===390)await shot('meta-question','[class*=quizCard]',true);
  // Equal legacy stability sorts by ID: first is 日, correct first syllable 날.
  await press('날');await wait(`document.body.innerText.includes('정답 · 저장 완료')`);await fits();assert.deepEqual((await read()).records[1],old);if(width===390)await shot('meta-answer','[class*=quizAnswer]',true);
  await shot('answer-'+width);await ev(`document.querySelector('[class*=gradeButtons] button').click()`);await delay(150);await wait(`document.querySelectorAll('[class*=metaChoices] button').length===2`);
  // Second is 月: force wrong choice and ensure 10-minute scheduling.
  await ev(`(()=>{const b=[...document.querySelectorAll('[class*=metaChoices] button')].find(b=>b.textContent!=='달');b.click()})()`);await delay(200);let s=await read();assert.equal(s.records[2].needsReview,true);assert.ok(s.records[2].due>Date.now()+590000);assert.equal(s.rounds.at(-1).answers[2].result,'wrong');
  await press('복습 나가기');await press('오늘 학습');
  // Make the third item due, then today's result must remove it from the active round.
  await ev(`(()=>{let s=JSON.parse(localStorage.getItem('living-books-hanja-memory-v1'));s.records[3].due=Date.now()-1000;localStorage.setItem('living-books-hanja-memory-v1',JSON.stringify(s));})()`);await send('Page.reload');await wait(`document.body.innerText.includes('지금 학습 시작')`);await press('지금 학습 시작');await press('시작');await press('저');await delay(150);s=await read();assert.equal(s.rounds.at(-1).answers[3].source,'today');
  await press('미리 복습');await wait(`document.body.innerText.includes('3 / 12개 확인')`);await send('Page.reload');await wait(`document.body.innerText.includes('첫 학습 12/')`);await press('미리 복습');assert.ok((await ev('document.body.innerText')).includes('3 / 12개 확인'));
  if(width===390)await shot('practice-complete','[class*=studyHome]',true);
  await press('회차 이어하기');await press('시작');assert.ok(!(await ev(`document.querySelector('[class*=bigHanja]').textContent`)).includes('日'));
  await press('복습 나가기');await press('오늘 학습');await press('새 글자 배우기');if(width===390)await shot('new-lesson','[class*=quizAnswer]',true);await fits();
  await press('학습 안내');assert.ok(!(await ev('document.body.innerText')).includes('자율 학습에서는'));if(width===390){await ev(`Array.from(document.querySelectorAll('h3')).find(e=>e.textContent==='학습 기록 관리').scrollIntoView()`);await shot('backup','[class*=guideProse]',true);}
  console.log('PASS browser',width,height);
 }
 
 // Dedicated all-learned demo for supplementary writing; never alters real user storage.
 await ev(`(()=>{let s=JSON.parse(localStorage.getItem('living-books-hanja-memory-v1'));const r=s.records[4];s.records=Object.fromEntries(Array.from({length:453},(_,i)=>[i+1,{...r}]));localStorage.setItem('living-books-hanja-memory-v1',JSON.stringify(s));})()`);
 await send('Page.reload');await wait(`document.body.innerText.includes('첫 학습 453/')`);await press('미리 복습');await press('보조 학습');await press('정답 보기');await shot('writing-answer','[class*=padWrap]',true);await fits();
 await send('Page.navigate',{url:base+'/premium/hanja-memory'});await wait(`document.body.innerText.includes('첫 글자 메타 학습')`);assert.ok(!(await ev('document.body.innerText')).includes('자율 학습과'));await shot('detail-mobile');
 assert.deepEqual(errors,[]);console.log('PASS all browser checks and cropped guide captures');
}finally{ws?.close();chrome.kill();}
