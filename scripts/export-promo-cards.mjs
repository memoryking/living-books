import fs from 'node:fs/promises';
import path from 'node:path';
import {spawn} from 'node:child_process';
import assert from 'node:assert/strict';
import QRCode from 'qrcode';
import jsQR from 'jsqr';
import {PNG} from 'pngjs';

const base=process.env.PROMO_BASE||'http://127.0.0.1:3109';
const out=path.resolve('public/promo/pdf'),qa=path.resolve('artifacts/promo-qa');
await fs.mkdir(out,{recursive:true});await fs.mkdir(qa,{recursive:true});
const chrome=spawn('C:/Program Files/Google/Chrome/Application/chrome.exe',['--headless=new','--disable-gpu','--no-first-run','--remote-debugging-port=9343','--user-data-dir='+path.join(qa,'browser'),'about:blank'],{windowsHide:true,stdio:'ignore'});
let ws;
try {
  let targets;for(let i=0;i<60;i++){try{targets=await(await fetch('http://127.0.0.1:9343/json')).json();break;}catch{await new Promise(r=>setTimeout(r,250));}}
  assert.ok(targets,'Chrome must start');
  ws=new WebSocket(targets.find(t=>t.type==='page').webSocketDebuggerUrl);await new Promise((r,j)=>{ws.onopen=r;ws.onerror=j;});
  let seq=0;const pending=new Map();
  ws.onmessage=({data})=>{const m=JSON.parse(data);if(m.id){const p=pending.get(m.id);pending.delete(m.id);if(p)m.error?p.j(m.error):p.r(m.result);}};
  const send=(method,params={})=>new Promise((r,j)=>{const id=++seq;pending.set(id,{r,j});ws.send(JSON.stringify({id,method,params}));});
  const ev=async expression=>{const r=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw Error(JSON.stringify(r.exceptionDetails));return r.result.value;};
  const wait=async expression=>{for(let i=0;i<150;i++){if(await ev(expression))return;await new Promise(r=>setTimeout(r,100));}throw Error(expression);};
  async function navigate(route){await send('Page.navigate',{url:base+route});await wait('document.readyState==="complete" && document.querySelector(".card")');await ev('document.fonts.ready.then(()=>true)');await wait('[...document.images].every(i=>i.complete&&i.naturalWidth>0)');}
  await send('Page.enable');await send('Runtime.enable');await send('Emulation.setDeviceMetricsOverride',{width:1250,height:950,deviceScaleFactor:1,mobile:false});
  await navigate('/admin/promo/all');
  const ids=await ev('[...document.querySelectorAll(".card")].map(c=>c.dataset.id)');
  assert.equal(new Set(ids).size,ids.length);
  assert.ok(ids.length>=34);
  const manifest=[];
  for(const id of ids){
    await navigate('/admin/promo/'+id);
    const bounds=await ev(`(()=>{const c=document.querySelector('.card');return [...c.children].map(e=>({tag:e.tagName,overflow:e.scrollHeight-e.clientHeight,bottom:e.getBoundingClientRect().bottom,limit:c.getBoundingClientRect().bottom}));})()`);
    assert.ok(bounds.every(b=>b.overflow<=2 && b.bottom<=b.limit+1),id+JSON.stringify(bounds));
    const links=await ev('[...document.querySelectorAll(".card a")].map(a=>a.href)');
    assert.ok(links.every(l=>l==='https://vipup.site/'+id),id+' QR URL');
    // Decode the QR as actually rendered in the card, not just its input string.
    const box=await ev(`(()=>{const r=document.querySelector('.qr').getBoundingClientRect();return {x:r.x,y:r.y,width:r.width,height:r.height,scale:3}})()`);
    const qrshot=await send('Page.captureScreenshot',{format:'png',clip:box});
    const pixels=PNG.sync.read(Buffer.from(qrshot.data,'base64'));
    const decoded=jsQR(new Uint8ClampedArray(pixels.data),pixels.width,pixels.height);
    assert.equal(decoded?.data,links[0],id+' rendered QR decoding');
    const png=PNG.sync.read(await QRCode.toBuffer(links[0],{scale:6,margin:4,errorCorrectionLevel:'M'}));
    assert.equal(jsQR(new Uint8ClampedArray(png.data),png.width,png.height)?.data,links[0]);
    const rect=await ev(`(()=>{const r=document.querySelector('.card').getBoundingClientRect();return {x:r.x,y:r.y,width:r.width,height:r.height,scale:1.5}})()`);
    const image=await send('Page.captureScreenshot',{format:'png',clip:rect});await fs.writeFile(path.join(qa,id+'.png'),Buffer.from(image.data,'base64'));
    const pdf=await send('Page.printToPDF',{printBackground:true,preferCSSPageSize:true,displayHeaderFooter:false});
    await fs.writeFile(path.join(out,id+'.pdf'),Buffer.from(pdf.data,'base64'));
    manifest.push({id,url:links[0],pdf:'/promo/pdf/'+id+'.pdf',qa:'layout + rendered QR decoded'});
    console.log('PASS',id);
  }
  for(const layout of ['a5','a4']){
    await navigate('/admin/promo/all?layout='+layout);
    assert.equal(await ev('document.querySelectorAll(".card").length'),layout==='a4'?ids.length*2:ids.length);
    const pdf=await send('Page.printToPDF',{printBackground:true,preferCSSPageSize:true,displayHeaderFooter:false});
    await fs.writeFile(path.join(out,'all-'+layout+'.pdf'),Buffer.from(pdf.data,'base64'));
  }
  await fs.writeFile('public/promo/manifest.json',JSON.stringify({date:new Date().toISOString(),count:ids.length,cards:manifest},null,2));
  console.log(`DONE: ${ids.length} individual A5 PDFs + A5 bundle + A4 two-up bundle.`);
}finally{ws?.close();chrome.kill();}
