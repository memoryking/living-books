import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import ts from 'typescript';
await fs.mkdir('artifacts',{recursive:true});
await fs.writeFile('artifacts/hanja-study-test.mjs',ts.transpile(await fs.readFile('src/lib/hanja-study.ts','utf8'),{module:ts.ModuleKind.ES2022,target:ts.ScriptTarget.ES2022}));
const m=await import('../artifacts/hanja-study-test.mjs?'+Date.now());
const t=new Date(2026,9,3,9).getTime();
let s=m.parseStudy({version:1,lastId:1,records:{1:{stage:5,due:t+86400000,last:t-86400000,attempts:20,misses:2,needsReview:false},2:{stage:2,due:t-1,last:t-86400000,attempts:3,misses:0,needsReview:false}},bookmarks:[1],notes:{1:'keep me'}});
assert.ok(s);assert.equal(s.version,2);assert.equal(s.records[1].due,t+86400000);assert.equal(s.notes[1],'keep me');
s=m.beginRound(s,[1,2],'weak',t);
const old=structuredClone(s.records[1]);
s=m.evaluate(s,1,'correct','practice',t+1,'early1');s=m.evaluate(s,1,'correct','practice',t+2,'early2');
assert.deepEqual(s.records[1],old);assert.equal(s.events.at(-1).modelApplied,false);assert.equal(m.roundRemaining(m.activeRound(s)).length,1);
s=m.evaluate(s,2,'correct','today',t+3,'due2');assert.equal(m.roundRemaining(m.activeRound(s)).length,0);assert.equal(m.activeRound(s).answers[2].source,'today');
assert.deepEqual(m.evaluate(s,2,'correct','today',t+3,'due2'),s,'duplicate event id must not grade twice');
s=m.beginRound(s,[1,2],'random',t+4);assert.equal(m.roundRemaining(m.activeRound(s)).length,2);
s=m.evaluate(s,1,'wrong','practice',t+5,'wrong');const failureDue=s.records[1].due;
assert.equal(failureDue,t+5+m.TEN_MINUTES);assert.ok(s.records[1].card);assert.equal(s.records[1].migration,'legacy-estimate');
s=m.evaluate(s,1,'correct','practice',t+6,'early-retry');assert.equal(s.records[1].due,failureDue);assert.equal(m.activeRound(s).answers[1].result,'wrong');
s=m.evaluate(s,1,'wrong','practice',t+7,'early-wrong');assert.equal(s.records[1].due,failureDue,'do not push pending retry farther away');
s=m.evaluate(s,1,'wrong','today',failureDue,'due-wrong');assert.equal(s.records[1].due,failureDue+m.TEN_MINUTES);
s=m.evaluate(s,1,'correct','today',s.records[1].due,'relearn-good');assert.equal(s.records[1].needsReview,false);assert.equal(m.activeRound(s).answers[1].result,'wrong');
assert.deepEqual(m.parseStudy(JSON.parse(JSON.stringify(s))),s,'v2 export/import roundtrip');
assert.equal(m.parseStudy({...s,appId:'english-memory'}),null);
assert.equal(m.parseStudy({...s,rounds:[{...s.rounds[0],ids:[99999]}]}),null);
assert.equal(m.parseStudy({...s,records:{1:{...s.records[1],card:{...s.records[1].card,stability:-1}}}}),null);
const before=JSON.stringify(s.records);m.dailyPlan(s,1000,t+7*86400000);assert.equal(JSON.stringify(s.records),before,'absence never reschedules or creates failures');
const fresh=m.evaluate(structuredClone(m.EMPTY_STUDY),1,'correct','today',t,'new');assert.equal(fresh.events[0].kind,'new');assert.ok(fresh.records[1].due>t);
const plan=m.dailyPlan(structuredClone(m.EMPTY_STUDY),1000,t);assert.equal(plan.newGoal,50);assert.equal(plan.day,1);
const absent={...fresh,course:{...fresh.course,started:t}};assert.equal(m.dailyPlan(absent,1000,t+21*86400000).newGoal,0);assert.equal(m.dailyPlan(absent,1000,t+21*86400000).late,true);
const bulk={...fresh,records:Object.fromEntries(Array.from({length:700},(_,i)=>[i+1,{...fresh.records[1],due:t-1}]))};assert.equal(m.dailyPlan(bulk,1000,t).reviewGoal,180);assert.equal(m.dailyPlan(bulk,1000,t).overload,true);assert.equal(m.dailyPlan(bulk,1000,t).newGoal,0);
// Changing order never reintroduces the 20 already assessed in a 100-item round.
let hundred={...structuredClone(m.EMPTY_STUDY),records:Object.fromEntries(Array.from({length:100},(_,i)=>[i+1,{...old}]))};
hundred=m.beginRound(hundred,Array.from({length:100},(_,i)=>i+1),'weak',t);
for(let id=1;id<=20;id++)hundred=m.evaluate(hundred,id,'correct','practice',t+id,'round-'+id);
for(const order of ['weak','random','oldest']){const ids=m.orderIds(m.roundRemaining(m.activeRound(hundred)),hundred,order);assert.equal(ids.length,80);assert.ok(ids.every(id=>id>20));assert.equal(new Set(ids).size,80);}
const timed=m.evaluate(hundred,21,'timeout','practice',t+21,'timeout');assert.equal(timed.records[21].due,t+21+m.TEN_MINUTES);assert.equal(timed.events.at(-1).result,'timeout');assert.equal(m.activeRound(timed).answers[21].result,'timeout');
for(const days of [1,3,7]){const p=m.dailyPlan(fresh,1000,t+days*86400000);assert.ok(p.newGoal>=0&&p.reviewGoal>=0);assert.ok(p.newGoal*40+p.reviewGoal*20<=3600);}
console.log('PASS: FSRS, early protection, relearning, round credit, first-result preservation, 20/100 sorting, timeout, idempotency, v1 migration, v2 backup validation, absence and 60-minute planning.');
