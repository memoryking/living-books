import fs from 'node:fs/promises';
import crypto from 'node:crypto';
const cards=JSON.parse(await fs.readFile('public/promo/manifest.json','utf8')).cards;
const results=[];
for(let i=0;i<cards.length;i+=4){
  results.push(...await Promise.all(cards.slice(i,i+4).map(async ({id,url})=>{
    try{const r=await fetch(url,{signal:AbortSignal.timeout(25000)});const html=await r.text();return {id,url,status:r.status,final:r.url,title:html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1],canonical:html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1],notFound:/페이지를 찾을 수|존재하지 않는 페이지|page not found/i.test(html),hash:crypto.createHash('sha256').update(html).digest('hex'),note:'HTTP 응답 확인. 실제 상품 일치는 별도 검수 필요.'};}catch(e){return {id,url,error:e.message};}
  })));
}
await fs.writeFile('artifacts/promo-qa/links.json',JSON.stringify(results,null,2));
await fs.writeFile('public/promo/link-status.json',JSON.stringify({checkedAt:new Date().toISOString(),results:results.map(r=>({id:r.id,url:r.url,status:r.status??null,login:r.canonical?.includes('/login')||false,confirmedProduct:false}))},null,2));
console.log(JSON.stringify(results.map(({id,status,title,canonical,notFound,error})=>({id,status,title,canonical,notFound,error})),null,2));
