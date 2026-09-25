import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
const dir = 'public/hanja-memory';
let before = 0, after = 0;
for (const name of (await fs.readdir(dir)).filter(n => n.endsWith('.png'))) {
  const input = path.join(dir, name);
  const output = input.replace(/\.png$/, '.webp');
  before += (await fs.stat(input)).size;
  await sharp(input).webp({quality: 88, effort: 5}).toFile(output);
  after += (await fs.stat(output)).size;
}
console.log(JSON.stringify({originalMB: +(before/1048576).toFixed(1), webMB: +(after/1048576).toFixed(1)}));
