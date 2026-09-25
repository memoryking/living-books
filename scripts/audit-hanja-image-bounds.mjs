// Analyze whitespace between atlas illustrations. Keep pixels unchanged; save reviewable display bounds.
import fs from 'node:fs';
import sharp from 'sharp';
const book=JSON.parse(fs.readFileSync('data/hanja-memory/book.json','utf8'));
const out='artifacts/hanja-image-bounds';fs.mkdirSync(out,{recursive:true});
const cache=new Map();const crops=[];
for(const e of book.entries){
  if(!cache.has(e.image))cache.set(e.image,await sharp('public'+e.image).flatten({background:'#fff'}).removeAlpha().raw().toBuffer({resolveWithObject:true}));
  const {data,info:{width:w,height:h,channels}}=cache.get(e.image);
  const cw=w/4,ch=h/4,c=e.imageColumn,r=e.imageRow;
  const ink=(x,y)=>Math.max(0,245-Math.min(...data.subarray((y*w+x)*channels,(y*w+x)*channels+3)))/245;
  function seam(axis,nominal,start,end,cell){
    if(nominal===0 || nominal===(axis==='y'?h:w))return nominal;
    let best=Infinity,found=Math.round(nominal);
    for(let v=Math.round(nominal-cell*.17);v<=Math.round(nominal+cell*.17);v++){
      let mass=0,count=0;
      for(let u=Math.ceil(start)+2;u<Math.floor(end)-2;u++)for(let d=-1;d<=1;d++){
        mass+=axis==='y'?ink(u,v+d):ink(v+d,u);count++;
      }
      const score=mass/count+Math.abs(v-nominal)/cell*.003;
      if(score<best){best=score;found=v;}
    }
    return found;
  }
  const top=seam('y',r*ch,c*cw,(c+1)*cw,ch),bottom=seam('y',(r+1)*ch,c*cw,(c+1)*cw,ch);
  const left=seam('x',c*cw,top,bottom,cw),right=seam('x',(c+1)*cw,top,bottom,cw);
  const item={id:e.id,imageCrop:[left/w,top/h,(right-left)/w,(bottom-top)/h]};
  // This atlas has interlocking silhouettes: use reviewed bounds and a whitespace notch.
  if(e.id===331){item.imageCrop=[594/w,710/h,391/w,137/h];item.imageMask='ellipse(49% 46% at 50% 50%)';}
  if(e.id===332){item.imageCrop=[949/w,610/h,305/w,321/h];item.imageMask='polygon(0 0,100% 0,100% 100%,0 100%,0 72%,12% 72%,12% 31%,0 31%)';}
  crops.push(item);
}
fs.writeFileSync(out+'/candidates.json',JSON.stringify(crops,null,2));
for(let page=0;page<5;page++){
 const items=book.entries.slice(page*96,(page+1)*96).map(e=>{
 const [x,y,w,h]=crops.find(c=>c.id===e.id).imageCrop;
 const size=Math.min(136,150*w/h);
 return `<div class="tile"><b>${e.id} ${e.char} ${e.reading}</b><div style="width:${size}px;height:${size*h/w}px;flex-shrink:0;background-image:url('../../public${e.image}');background-size:${100/w}% ${100/h}%;background-position:${x/(1-w)*100}% ${y/(1-h)*100}%;clip-path:${crops.find(c=>c.id===e.id).imageMask||'none'}"></div></div>`;
 }).join('');
 fs.writeFileSync(`${out}/review-${page+1}.html`,`<!doctype html><meta charset="utf-8"><style>body{margin:0;background:#ddd;font:12px Arial}.grid{display:grid;grid-template-columns:repeat(8,1fr);gap:2px}.tile{height:168px;background:white;display:flex;align-items:center;flex-direction:column;overflow:hidden}.tile b{height:18px}</style><div class="grid">${items}</div>`);
}
console.log('453 candidate bounds and 5 visual review sheets written. Original images and manuscript unchanged.');
