import fs from 'node:fs';
for(const p of ['src/app/page.tsx','src/lib/generate-widget.ts']) {
  fs.writeFileSync(p,fs.readFileSync(p,'utf8').replaceAll('그림으로 새기는 한자 453','그림으로 기억하는 한자 453'));
}
const p='src/app/premium/hanja-memory/page.tsx';
fs.writeFileSync(p,fs.readFileSync(p,'utf8').replace('key={c.id} href="/premium/hanja-memory/read"','key={c.id} href={"/premium/hanja-memory/read#item-" + ((c.id - 1) * 16 + 1)}'));
