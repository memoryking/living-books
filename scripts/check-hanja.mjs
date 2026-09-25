import fs from 'node:fs';
import assert from 'node:assert/strict';
import ts from 'typescript';
import sharp from 'sharp';
const book = JSON.parse(fs.readFileSync('data/hanja-memory/book.json','utf8'));
const input = fs.readFileSync('data/hanja-memory/source.tsv','utf8').trim().split(/\r?\n/);
assert.equal(book.entries.length,453);
assert.equal(book.chapters.length,29);
for(const [i,e] of book.entries.entries()) {
  assert.equal(e.id,i+1);
  assert.equal(e.originalChar,input[i].split('\t')[0]);
  assert.equal(e.examples.length,2);
  assert.ok(e.memory.length > 20 && e.scene && e.reading);
  assert.ok(fs.existsSync('public'+e.image),e.image);
  assert.ok(e.imageColumn >= 0 && e.imageColumn < 4 && e.imageRow >= 0 && e.imageRow < 4);
}
for(const p of new Set(book.entries.map(e=>e.image))) {
  const m=await sharp('public'+p).metadata(); assert.equal(m.width,m.height);
}
const source=ts.transpileModule(fs.readFileSync('src/lib/hanja-study.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.ESNext}}).outputText;
const {gradeRecord,parseStudy,EMPTY_STUDY,shuffled,planStudy}=await import('data:text/javascript;base64,'+Buffer.from(source).toString('base64'));
const now=1000000;
assert.deepEqual(planStudy([1,2,3,4,5,6],{},now),{ids:[1,2,3,4,5],learning:true});
const scheduled={1:{due:now+1},2:{due:now},3:{due:now-1}};
assert.deepEqual(planStudy([1,2,3,4],scheduled,now),{ids:[3,2],learning:false});
assert.deepEqual(planStudy([1],scheduled,now),{ids:[],learning:true});
assert.equal(planStudy(Array.from({length:20},(_,i)=>i+1),Object.fromEntries(Array.from({length:20},(_,i)=>[i+1,{due:now}])),now).ids.length,10);
const first=gradeRecord(undefined,true,now);
const kept=gradeRecord({...first,stage:2,due:now-1},true,now,true);
assert.equal(kept.due,now-1);assert.equal(kept.stage,2);
assert.equal(gradeRecord(first,true,now,true).due,first.due);
assert.equal(gradeRecord(first,false,now,true).due,now+600000);
assert.equal(first.stage,1); assert.equal(first.due,now+86400000);
const early=gradeRecord(first,true,now+1000);
assert.equal(early.stage,1); assert.equal(early.due,first.due);
const next=gradeRecord(first,true,first.due);
assert.equal(next.stage,2); assert.equal(next.due,first.due+3*86400000);
const wrong=gradeRecord(next,false,next.due);
assert.equal(wrong.stage,0); assert.equal(wrong.needsReview,true); assert.equal(wrong.misses,1);
assert.equal(gradeRecord(wrong,true,wrong.due).stage,1);
assert.deepEqual(parseStudy(EMPTY_STUDY),EMPTY_STUDY);
assert.equal(parseStudy({...EMPTY_STUDY,records:{454:first}}),null);
assert.equal(parseStudy({...EMPTY_STUDY,records:{1:{...first,due:Infinity}}}),null);
assert.equal(parseStudy({...EMPTY_STUDY,notes:{1:'x'.repeat(2001)}}),null);
assert.deepEqual(shuffled([1,2,3]).sort(),[1,2,3]);
console.log('PASS: 453 original rows, 906 examples, 29 chapters, all image assets, recall intervals, backup validation.');
