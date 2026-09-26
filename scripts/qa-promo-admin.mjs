import {spawn} from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import jsQR from 'jsqr';
import {PNG} from 'pngjs';
const base=process.env.PROMO_BASE||'http://127.0.0.1:3111';
const dir=path.resolve('artifacts/promo-qa');
const manifest=JSON.parse(await fs.readFile('public/promo/manifest.json','utf8'));
for(const card of manifest.cards){
  const p=PNG.sync.read(await fs.readFile(path.join(dir,'pdf-render',card.id+'.png')));
  assert.equal(jsQR(new Uint8ClampedArray(p.data),p.width,p.height)?.data,card.url,card.id+' final PDF QR');
}
console.log('PASS all final PDF QRs decode correctly');
const chrome=spawn('C:/Program Files/Google/Chrome/Application/chrome.exe',['--headless=new','--disable-gpu','--no-first-run','--remote-debugging-port=9345','--user-data-dir='+path.join(dir,'admin-browser'),'about:blank'],{windowsHide:true,stdio:'ignore'});
let ws;
try{
  let tabs;for(let i=0;i<60;i++){try{tabs=await(await fetch('http://127.0.0.1:9345/json')).json();break;}catch{await new Promise(r=>setTimeout(r,200));}}
  ws=new WebSocket(tabs.find(t=>t.type==='page').webSocketDebuggerUrl);await new Promise((r,j)=>{ws.onopen=r;ws.onerror=j;});
  let n=0;const pending=new Map();ws.onmessage=({data})=>{const m=JSON.parse(data);if(m.id){const p=pending.get(m.id);pending.delete(m.id);if(p)m.error?p.reject(m.error):p.resolve(m.result);}};
  const send=(method,params={})=>new Promise((resolve,reject)=>{const id=++n;pending.set(id,{resolve,reject});ws.send(JSON.stringify({id,method,params}));});
  const ev=async expression=>{const r=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw Error(JSON.stringify(r.exceptionDetails));return r.result.value;};
  const wait=async expression=>{for(let i=0;i<100;i++){if(await ev(expression))return;await new Promise(r=>setTimeout(r,100));}throw Error(expression);};
  await send('Page.enable');await send('Runtime.enable');
  for(const width of [1280,390]){
    await send('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:width<500});
    await send('Page.navigate',{url:base+'/admin/export'});await wait('document.querySelectorAll("code").length>30');await new Promise(r=>setTimeout(r,1000));
    assert.ok(await ev('document.documentElement.scrollWidth<=innerWidth+1'));
    await ev('void Object.defineProperty(navigator,"clipboard",{configurable:true,value:{writeText:async t=>window.__copied=t}})');
    for(const id of ['hanja-memory','hanja']){
      await ev(`window.card=[...document.querySelectorAll('code')].find(e=>e.textContent===${JSON.stringify(id)}).parentElement.parentElement;true`);
      assert.equal(await ev('card.querySelectorAll("button").length>=10'),true);
      await ev(`window.__copied='';[...card.querySelectorAll('button')].find(b=>b.textContent.includes('iframe 코드 복사')).click()`);
      await wait('window.__copied.length>0');
      assert.ok((await ev('window.__copied')).includes(id==='hanja'?'/embed/hanja':'/premium/hanja-memory/read'));
      await ev(`window.__copied='';[...card.querySelectorAll('button')].find(b=>b.textContent.includes('상세페이지 코드 복사')).click()`);
      await wait('window.__copied.length>0');assert.ok((await ev('window.__copied')).includes('/promo/art/'+id+'.png'));
      for(const label of ['표지 프롬프트','마케팅문구','썸네일 프롬프트','메타 설명'])assert.ok(await ev('card.innerText.includes('+JSON.stringify(label)+')'));
    }
    const shot=await send('Page.captureScreenshot',{format:'png'});await fs.writeFile(path.join(dir,'admin-'+width+'.png'),Buffer.from(shot.data,'base64'));
    for(const id of ['hanja','hanja-memory']){
      await send('Page.navigate',{url:base+'/premium/'+id});await wait('document.readyState==="complete" && document.querySelector(".hm-detail img")?.naturalWidth>0');
      assert.ok(await ev('document.documentElement.scrollWidth<=innerWidth+1'));
      const shot=await send('Page.captureScreenshot',{format:'png'});await fs.writeFile(path.join(dir,id+'-detail-'+width+'.png'),Buffer.from(shot.data,'base64'));
    }
  }
  for(const file of ['all-a5','all-a4','hanja','hanja-memory']){const r=await fetch(base+'/promo/pdf/'+file+'.pdf',{method:'HEAD'});assert.equal(r.status,200);assert.ok(r.headers.get('content-type').includes('pdf'));}
  console.log('PASS admin separate IDs, clipboard exports, marketing sections, PC/mobile detail pages, PDF downloads');
}finally{ws?.close();chrome.kill();}
