import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';

const base=process.env.BOOK_BASE||'http://127.0.0.1:3121';
const dir=path.resolve('artifacts/love-skills-2');
await fs.mkdir(dir,{recursive:true});
const files=(await fs.readdir('data/love-skills-2/content')).filter(f=>f.endsWith('.md')).sort();
const texts=await Promise.all(files.map(f=>fs.readFile('data/love-skills-2/content/'+f,'utf8')));
const manuscript=texts.join('\n\n');
assert.equal(files.length,10);
assert.equal((texts.slice(1,6).join('\n').match(/^## \d{2}\. /gm)||[]).length,20);
assert.equal((manuscript.match(/남길 것 — D\d{2}/g)||[]).length,20);
assert.equal((texts[7].match(/^## \d+\. /gm)||[]).length,20);
assert.equal((texts[6].match(/^## 빈 양식 /gm)||[]).length,6);
assert.ok(!manuscript.includes('\ufffd'));
assert.ok(manuscript.length>25000,'Full manuscript, not outline');
await fs.writeFile(path.join(dir,'manuscript.md'),manuscript);
const chrome=spawn('C:/Program Files/Google/Chrome/Application/chrome.exe',['--headless=new','--disable-gpu','--no-first-run','--remote-debugging-port=9361','--user-data-dir='+path.join(dir,'browser'),'about:blank'],{windowsHide:true,stdio:'ignore'});
let ws;
const checks=[];
try{
  let tabs;for(let i=0;i<80;i++){try{tabs=await(await fetch('http://127.0.0.1:9361/json')).json();break;}catch{await new Promise(r=>setTimeout(r,200));}}
  assert.ok(tabs,'Chrome started');
  ws=new WebSocket(tabs.find(t=>t.type==='page').webSocketDebuggerUrl);
  await new Promise((r,j)=>{ws.onopen=r;ws.onerror=j;});
  let n=0;const pending=new Map();
  ws.onmessage=({data})=>{const m=JSON.parse(data);if(m.id){const p=pending.get(m.id);pending.delete(m.id);if(p)m.error?p.reject(m.error):p.resolve(m.result);}};
  const send=(method,params={})=>new Promise((resolve,reject)=>{const id=++n;pending.set(id,{resolve,reject});ws.send(JSON.stringify({id,method,params}));});
  const ev=async expression=>{const r=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw Error(JSON.stringify(r.exceptionDetails));return r.result.value;};
  const wait=async expression=>{for(let i=0;i<150;i++){if(await ev(expression))return;await new Promise(r=>setTimeout(r,100));}throw Error('Timeout: '+expression);};
  await send('Page.enable');await send('Runtime.enable');
  const shot=async name=>{const s=await send('Page.captureScreenshot',{format:'png'});await fs.writeFile(path.join(dir,name+'.png'),Buffer.from(s.data,'base64'));};
  await send('Page.navigate',{url:base+'/admin/export'});
  await wait('Array.from(document.querySelectorAll("code")).some(e=>e.textContent==="love-skills-2")');
  await ev(`window.card=[...document.querySelectorAll('code')].find(e=>e.textContent==='love-skills-2').parentElement.parentElement;Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async t=>window.__copied=t}});true`);
  await wait('Object.keys(card.querySelector("button")).some(k=>k.startsWith("__reactProps$"))');
  for(const [label,file] of [['전자책 내용 복사','export-manuscript.md'],['iframe 코드 복사','imweb-iframe.html'],['뷰어 코드 복사','viewer-fragment.html'],['상세페이지 코드 복사','detail-fragment.html'],['표지 프롬프트','cover-prompt.txt'],['마케팅문구','marketing-copy.txt'],['썸네일 프롬프트','thumbnail-prompt.txt'],['메타 설명','meta-description.txt']]){
    console.log('COPY',label);
    await ev(`window.__copied='';[...card.querySelectorAll('button')].find(b=>b.textContent.includes(${JSON.stringify(label)})).click()`);
    await wait('window.__copied.length>0');
    const value=await ev('window.__copied');
    await fs.writeFile(path.join(dir,file),value);
    if(file==='imweb-iframe.html')assert.ok(value.includes('/embed/love-skills-2')&&value.includes('data-lb-hide-imweb-footer'));
    if(file==='export-manuscript.md')assert.ok(value.includes('D20')&&value.includes('부록 C.'));
  }
  checks.push('admin: manuscript, iframe, viewer, detail, cover, thumbnail, marketing and meta copy');
  const widget=await fs.readFile(path.join(dir,'viewer-fragment.html'),'utf8');
  const detail=await fs.readFile(path.join(dir,'detail-fragment.html'),'utf8');
  await fs.writeFile(path.join(dir,'read.html'),'<!doctype html><html lang="ko"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>연애의 기술2</title><body>'+widget+'</body></html>');
  await fs.writeFile(path.join(dir,'detail.html'),'<!doctype html><html lang="ko"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>연애의 기술2 소개</title><body>'+detail+'</body></html>');
  for(const width of [1440,820,390]){
    await send('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:width<500});
    await send('Page.navigate',{url:base+'/premium/love-skills-2'});
    await wait('!!document.querySelector(".ls2-detail")');
    assert.ok(await ev('document.documentElement.scrollWidth<=innerWidth+1'));
    await shot('detail-'+width);
    await send('Page.navigate',{url:base+'/premium/love-skills-2/read'});
    await wait('[...document.querySelectorAll("button")].some(b=>b.textContent.includes("전체 내용"))');
    await new Promise(r=>setTimeout(r,300));
    await ev('[...document.querySelectorAll("button")].find(b=>b.textContent.includes("전체 내용")).click()');
    await wait('!!document.getElementById("ls2-section-9")');
    assert.ok(await ev('document.documentElement.scrollWidth<=innerWidth+1'));
    assert.equal(await ev('document.querySelectorAll("section[id^=ls2-section-]").length'),10);
    await ev('document.getElementById("ls2-section-2").scrollIntoView()');
    await shot('reading-'+width);
    // Same exported viewer fragment as Imweb, local copies of the unchanged shared assets.
    const localWidget=widget.replaceAll('https://living-books-beta.vercel.app/widget',base+'/widget');
    const host=`<!doctype html><html><meta name="viewport" content="width=device-width,initial-scale=1"><body style="margin:0"><iframe title="QA" style="width:100%;height:850px;border:0" srcdoc="${('<!doctype html><html lang="ko"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><body>'+localWidget+'</body></html>').replaceAll('&','&amp;').replaceAll('"','&quot;')}"></iframe></body></html>`;
    await send('Page.navigate',{url:base+'/premium/love-skills-2'});
    await wait('document.readyState==="complete"');
    const frameTree=await send('Page.getFrameTree');
    await send('Page.setDocumentContent',{frameId:frameTree.frameTree.frame.id,html:host});
    await wait('typeof document.querySelector("iframe")?.contentWindow?.ebToggleMode==="function"');
    await ev('window.f=document.querySelector("iframe").contentWindow;f.localStorage.removeItem("eb-mode");true');
    assert.equal(await ev('f.document.querySelectorAll("#eb-content .eb-section").length'),10);
    if(await ev('f.document.getElementById("eb-root").classList.contains("eb-page-mode")'))await ev('f.ebToggleMode()');
    assert.ok(await ev('f.document.documentElement.scrollWidth<=f.innerWidth+1'));
    await shot('widget-scroll-'+width);
    await ev('f.ebToggleMode()');
    await wait('f.document.getElementById("eb-root").classList.contains("eb-page-mode") && Number(f.document.getElementById("eb-page-info").textContent.split("/")[1])>1');
    await ev('f.ebNextPage()');
    await wait('f.document.getElementById("eb-page-info").textContent.trim().startsWith("2")');
    await ev('f.ebFont("lg",f.document.querySelector("button[data-size=lg]"))');
    await new Promise(r=>setTimeout(r,250));
    await shot('widget-page-'+width);
    await ev('f.ebShowToc()');
    assert.ok(await ev('f.document.getElementById("eb-toc-overlay").getBoundingClientRect().height>0'));
    await ev('f.ebHideToc();f.ebToggleMode()');
    checks.push(width+': detail, full reader, no horizontal overflow, 10 sections, exported widget scroll/page/next/font/TOC');
  }
  for(const route of ['/premium/love-skills','/premium/love-skills/read','/embed/love-skills-2'])assert.equal((await fetch(base+route)).status,200,route);
  await fs.writeFile(path.join(dir,'qa.json'),JSON.stringify({date:new Date().toISOString(),manuscriptCharacters:manuscript.length,sections:files.length,lessons:20,dialogues:20,blankForms:6,checks},null,2));
  console.log('PASS',JSON.stringify({characters:manuscript.length,checks}));
}finally{ws?.close();chrome.kill();}
