import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
// Mutate an isolated copy; never alter the user's working manuscript for a test.
const base=path.resolve('artifacts');
fs.mkdirSync(base,{recursive:true});
const temp=fs.mkdtempSync(path.join(base,'memory-sync-'));
const book=JSON.parse(fs.readFileSync('data/hanja-memory/book.json','utf8'));
const before=fs.readFileSync('data/hanja-memory/book.json','utf8');
const run=()=>execFileSync(process.execPath,['scripts/build-hanja.mjs',temp],{stdio:'pipe'});
try {
  fs.copyFileSync('data/hanja-memory/source.tsv',path.join(temp,'source.tsv'));
  book.entries[0].memory='SYNC-MEMORY-ONE: a revised shared mnemonic.';
  book.entries[0].examples[0]='SYNC-EXAMPLE: a revised shared example.';
  book.entries[0].note='SYNC-NOTE: a revised shared correction.';
  book.entries[0].imageColumn=2;
  book.entries[0].imageCrop=[0.5,0,0.25,0.25];
  book.comparisons[0].cue='SYNC-COMPARE: a revised contrast.';
  fs.writeFileSync(path.join(temp,'book.json'),JSON.stringify(book));
  run();
  const chapter=fs.readFileSync(path.join(temp,'content/01-chapter.md'),'utf8');
  const cardData=JSON.parse(fs.readFileSync(path.join(temp,'book.json'),'utf8'));
  for(const value of [cardData.entries[0].memory,cardData.entries[0].examples[0],cardData.entries[0].note])assert.ok(chapter.includes(value));
  assert.ok(chapter.includes('background-position:66.66666666666666%'));
  assert.ok(fs.readFileSync(path.join(temp,'content/31-comparisons.md'),'utf8').includes(book.comparisons[0].cue));
  book.entries[0].memory='SYNC-MEMORY-TWO: second revision replaces the old text.';
  fs.writeFileSync(path.join(temp,'book.json'),JSON.stringify(book));
  run();
  const revised=fs.readFileSync(path.join(temp,'content/01-chapter.md'),'utf8');
  assert.ok(revised.includes(book.entries[0].memory));assert.ok(!revised.includes('SYNC-MEMORY-ONE'));
  assert.equal(fs.readFileSync('data/hanja-memory/book.json','utf8'),before);
  console.log('PASS: one source synchronizes mnemonic, examples, correction, image positioning and comparisons; second edit replaces stale text.');
} finally {
  // Only delete the freshly created test directory under the verified artifacts root.
  const resolved=fs.realpathSync(temp);
  assert.ok(resolved.startsWith(fs.realpathSync(base)+path.sep));
  fs.rmSync(resolved,{recursive:true,force:true});
}
