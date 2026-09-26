import QRCode from 'qrcode';
import { PROMO_CARDS } from './promo-cards';
const esc=(s:string)=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');

export async function renderPromo(id:string, a4=false) {
  const cards=id==='all'?PROMO_CARDS:PROMO_CARDS.filter(c=>c.id===id);
  if(!cards.length) return null;
  const pieces=await Promise.all(cards.map(async c=> {
    const qr=await QRCode.toString(c.url,{type:'svg',errorCorrectionLevel:'M',margin:4,color:{dark:'#111111',light:'#ffffff'}});
    return `<article class="card" data-id="${c.id}" style="--accent:${c.color}">
<header><strong>비법연구소</strong><span>${esc(c.kicker)}</span></header>
<div class="hook"><h1>${esc(c.hook).replaceAll('\n','<br>')}</h1><p>${esc(c.sub)}</p></div>
<img class="hero" src="${c.image}" alt="${esc(c.kicker)} 주제 이미지">
<div class="contents"><h2>${esc(c.title)}</h2><p>${c.points.map(esc).join('<br>')}</p><small>${c.health?'건강 정보 학습용 · 개인의 진료·처방을 대신하지 않습니다.':'웹에서 보는 '+(c.id==='hanja-memory'?'암기앱 · 오늘 배울 글자부터 시작하세요.':'전자책 · 내 속도로 읽고 적용하세요.')}</small></div>
<footer><div><b>궁금했던 답,<br>${c.id==='hanja-memory'?'학습 방식부터 보세요.':'목차부터 확인하세요.'}</b><span>카메라로 QR을 비춰 보세요 →</span><a href="${c.url}">${esc(c.url.replace('https://',''))}</a></div><a class="qr" href="${c.url}" aria-label="${esc(c.title)} 소개 페이지 QR">${qr}</a></footer></article>`;
  }));
  // A4 landscape: two copies of the same card, for cutting into take-away leaflets.
  const body=pieces.map(p=>`<section class="sheet">${p}${a4?p:''}</section>`).join('');
  return `<!DOCTYPE html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>A5 홍보카드 · ${esc(id)}</title><style>
@font-face{font-family:Promo;src:url('/promo/fonts/PretendardVariable.woff2') format('woff2');font-weight:100 900;font-display:swap}
*{box-sizing:border-box}body{margin:0;background:#e5e8e6;color:#16251f;font-family:Promo,'Malgun Gothic',sans-serif}.toolbar{padding:18px 24px;background:#fff;position:sticky;top:0;z-index:5;box-shadow:0 1px 6px #0002;display:flex;gap:16px;align-items:center;flex-wrap:wrap}.toolbar p{margin:0;font-size:13px}.toolbar button,.toolbar a{border:0;border-radius:7px;padding:10px 15px;background:#225b48;color:white;text-decoration:none;cursor:pointer;font:inherit;font-size:13px}.preview{padding:20px;overflow:auto}.sheet{width:${a4?'297':'148'}mm;height:210mm;display:flex;position:relative;margin:0 auto 20px;background:white;break-after:page;box-shadow:0 3px 20px #0002;gap:${a4?'1':'0'}mm}.sheet:last-child{break-after:auto}${a4?'.sheet:after{content:"";position:absolute;left:148.5mm;height:100%;border-left:1px dashed #aaa}':''}
.card{width:148mm;height:210mm;flex:none;padding:8mm 9mm;background:#fffdf7;display:grid;grid-template-rows:7mm 30mm 80mm 27mm 38mm;gap:3mm;overflow:hidden;border-top:2mm solid var(--accent);padding-top:6mm}
.card header{display:flex;justify-content:space-between;align-items:center;color:var(--accent);border-bottom:1px solid #ccd3ca;letter-spacing:-.02em;font-size:8pt}.card header strong{font-size:10pt}.hook h1{margin:1mm 0 2.5mm;font-size:25pt;line-height:1.12;font-weight:900;letter-spacing:-.055em;color:var(--accent);word-break:keep-all}.hook p{font-size:9pt;margin:0;line-height:1.45;letter-spacing:-.025em}.hero{display:block;width:120mm;height:80mm;object-fit:contain;justify-self:center;border-radius:3mm}.contents h2{font-size:11pt;line-height:1.4;margin:1mm 0 2mm;letter-spacing:-.03em;word-break:keep-all}.contents p{margin:0;font-size:9pt;line-height:1.6}.contents small{display:block;font-size:6.8pt;color:#58645d;line-height:1.4;margin-top:2mm}
.card footer{display:flex;align-items:center;justify-content:space-between;gap:2mm;border-top:1px solid #ccd3ca;padding-top:2mm}.card footer b{font-size:13pt;line-height:1.35;letter-spacing:-.035em;color:var(--accent)}.card footer span{display:block;font-size:8pt;margin-top:2mm}.card footer a:not(.qr){display:block;color:#273e32;font-size:8pt;margin-top:1.5mm;text-decoration:none;font-weight:700}.qr{display:block;width:35mm;height:35mm;flex:none;background:white}.qr svg{width:100%;height:100%;display:block}
@page{size:${a4?'A4 landscape':'148mm 210mm'};margin:0}@media print{html,body{margin:0;padding:0;background:white;print-color-adjust:exact;-webkit-print-color-adjust:exact}.toolbar{display:none}.preview{padding:0;overflow:visible}.sheet{margin:0;box-shadow:none}}
</style></head><body><nav class="toolbar"><button onclick="window.print()">인쇄 / PDF로 저장</button><a href="?layout=${a4?'a5':'a4'}">${a4?'A5 한 장':'A4 같은 카드 두 장'}</a><a href="/promo/pdf/${id==='all'?'all-'+(a4?'a4':'a5'):id}.pdf" download>완성 PDF 다운로드</a><p>${a4?'A4 가로 · 같은 카드 2장 · 가운데 재단':'A5 세로 · 148×210mm'} / 실제 크기 100% / 배경 그래픽 켜기 / 머리글·바닥글 끄기<br>QR 연결 주소: vipup.site/상품ID · 배치 전 실제 판매 페이지 연결을 확인하세요.</p></nav><main class="preview">${body}</main></body></html>`;
}
