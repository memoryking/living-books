import {createEmptyCard,fsrs,Rating,State,type Card} from 'ts-fsrs';
const DAY=86400000;
export const TEN_MINUTES=600000;
export const SCHEDULER='ts-fsrs-5.4.2-meta-v1';
const scheduler=fsrs({request_retention:0.9,enable_fuzz:false,learning_steps:['10m'],relearning_steps:['10m']});
type StoredCard=Omit<Card,'due'|'last_review'>&{due:number;last_review?:number};
export interface StudyRecord {stage:number;due:number;last:number;attempts:number;misses:number;needsReview:boolean;card?:StoredCard;migration?:'legacy-estimate'}
export type SortOrder='weak'|'random'|'oldest';
export type AnswerResult='correct'|'wrong'|'timeout';
export type StudyEvent={key:string;id:number;at:number;result:AnswerResult;source:'today'|'practice';kind:'early'|'scheduled'|'relearning'|'new';modelApplied:boolean;due:number;scheduler:string};
export type RoundAnswer={at:number;result:AnswerResult;source:'today'|'practice'};
export type PracticeRound={id:string;number:number;ids:number[];answers:Record<number,RoundAnswer>;started:number;completed?:number;order:SortOrder};
export interface StudyState {version:2;appId:'hanja-memory';lastId:number;records:Record<number,StudyRecord>;bookmarks:number[];notes:Record<number,string>;events:StudyEvent[];rounds:PracticeRound[];activeRound?:string;course:{started:number;days:number;learningDays:number;minutes:number;dailyNew:number};activity:Record<string,number>}
export const EMPTY_STUDY:StudyState={version:2,appId:'hanja-memory',lastId:1,records:{},bookmarks:[],notes:{},events:[],rounds:[],course:{started:0,days:30,learningDays:20,minutes:60,dailyNew:50},activity:{}};
export const INTERVAL_DAYS=[1,3,7,14,30] as const; // Legacy migration only.
export const REVIEW_STAGES=[{label:'집중 연습',background:'#b91c1c',color:'#ffffff'},{label:'익히는 중',background:'#fde580',color:'#463800'},{label:'안정적으로 기억',background:'#afe0bd',color:'#164b2d'}] as const;
function liveCard(r:StudyRecord,now:number):Card {
 if(r.card)return {...r.card,due:new Date(r.due),last_review:r.card.last_review===undefined?undefined:new Date(r.card.last_review)};
 // Aggregate legacy records cannot reconstruct history. Preserve due and mark the estimate.
 return {...createEmptyCard(new Date(r.due)),stability:r.stage?INTERVAL_DAYS[Math.min(4,r.stage-1)]:0.2,difficulty:5,state:r.needsReview?State.Relearning:State.Review,reps:r.attempts,lapses:r.misses,last_review:new Date(Math.min(r.last||now,now)),scheduled_days:Math.max(0,(r.due-r.last)/DAY)};
}
export function stability(r?:StudyRecord){return r?r.card?.stability??(r.stage?INTERVAL_DAYS[Math.min(4,r.stage-1)]:0.2):0;}
export function reviewStage(r?:StudyRecord){return r?REVIEW_STAGES[stability(r)<1?0:stability(r)<7?1:2]:{label:'새 항목',background:'#f1f3f4',color:'#40504a'};}
export function isPassed(r?:StudyRecord){return !!r&&r.attempts>0&&!r.needsReview;}
export function gradeRecord(old:StudyRecord|undefined,correct:boolean,now:number):StudyRecord {
 if(old&&correct&&now<old.due)return old;
 const next=scheduler.next(old?liveCard(old,now):createEmptyCard(new Date(now)),new Date(now),correct?Rating.Good:Rating.Again).card;
 const due=!correct?(old?.needsReview&&old.due>now?old.due:now+TEN_MINUTES):next.due.getTime();
 return {stage:next.stability<1?0:next.stability<7?1:2,due,last:now,attempts:(old?.attempts??0)+1,misses:(old?.misses??0)+(correct?0:1),needsReview:!correct,card:{...next,due,last_review:next.last_review?.getTime()},...((old&&!old.card)||old?.migration?{migration:'legacy-estimate' as const}:{})};
}
export function dueIds(ids:number[],records:StudyState['records'],now:number){
 const risk=(id:number)=>scheduler.get_retrievability(liveCard(records[id],now),new Date(now),false);
 return ids.filter(id=>records[id]?.due<=now).sort((a,b)=>Number(records[b].needsReview)-Number(records[a].needsReview)||risk(a)-risk(b)||records[a].due-records[b].due||a-b);
}
export function planStudy(ids:number[],records:StudyState['records'],now:number){const due=dueIds(ids,records,now);return due.length?{ids:due.slice(0,10),learning:false}:{ids:ids.filter(id=>!records[id]).slice(0,10),learning:true};}
export function activeRound(s:StudyState){return s.rounds.find(r=>r.id===s.activeRound);}
export function roundRemaining(r?:PracticeRound){return r?r.ids.filter(id=>!r.answers[id]):[];}
export function orderIds(ids:number[],s:StudyState,order:SortOrder){
 if(order==='random')return shuffled(ids);
 const last:Record<number,number>={};if(order==='oldest')for(const e of s.events)last[e.id]=Math.max(last[e.id]??0,e.at);
 return [...ids].sort((a,b)=>order==='weak'?stability(s.records[a])-stability(s.records[b])||a-b:(last[a]??s.records[a]?.last??0)-(last[b]??s.records[b]?.last??0)||a-b);
}
export function beginRound(s:StudyState,ids:number[],order:SortOrder,now:number):StudyState {
 const valid=[...new Set(ids)].filter(id=>s.records[id]?.attempts);if(!valid.length)return s;
 const r:PracticeRound={id:`${now}-${s.rounds.length+1}`,number:s.rounds.length+1,ids:valid,answers:{},started:now,order};return {...s,rounds:[...s.rounds,r],activeRound:r.id};
}
export function evaluate(s:StudyState,id:number,result:AnswerResult,source:StudyEvent['source'],now:number,key:string):StudyState {
 if(s.events.some(e=>e.key===key))return s;
 const old=s.records[id],early=!!old&&now<old.due,modelApplied=result!=='correct'||!early;
 const record=gradeRecord(old,result==='correct',now);
 const event:StudyEvent={key,id,at:now,result,source,kind:!old?'new':early?'early':old.needsReview?'relearning':'scheduled',modelApplied,due:record.due,scheduler:SCHEDULER};
 const rounds=s.rounds.map(r=>{if(r.id!==s.activeRound||r.completed||!r.ids.includes(id)||r.answers[id])return r;const answers={...r.answers,[id]:{at:now,result,source}};return {...r,answers,...(Object.keys(answers).length===r.ids.length?{completed:now}:{})};});
 return {...s,lastId:id,records:{...s.records,[id]:record},events:[...s.events,event],rounds,course:{...s.course,started:s.course.started||now}};
}
export function dayKey(now:number){const d=new Date(now);return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
function dayNumber(now:number){const d=new Date(now);return Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())/DAY;}
export function dailyPlan(s:StudyState,total:number,now:number){
 const day=s.course.started?Math.max(1,dayNumber(now)-dayNumber(s.course.started)+1):1,today=dayKey(now),used=s.activity[today]||0;
 const learned=Object.keys(s.records).length,remaining=Math.max(0,total-learned),introduced=s.events.filter(e=>e.kind==='new'&&dayKey(e.at)===today).length;
 const due=Object.values(s.records).filter(r=>r.due<=now).length;
 const target=Math.min(remaining+introduced,Math.max(s.course.dailyNew,Math.ceil((remaining+introduced)/Math.max(1,s.course.learningDays-day+1))));
 // Planning estimates (20 sec/review, 40 sec/new), not an FSRS workload simulation or hard lock.
 const available=Math.max(0,s.course.minutes*60-used),reviewGoal=Math.min(due,Math.floor(available/20));
 const newGoal=day>s.course.learningDays?0:Math.min(Math.max(0,target-introduced),Math.floor(Math.max(0,available-reviewGoal*20)/40));
 return {day,learned,remaining,introduced,used,reviewGoal,newGoal,target,overload:due*20>available,late:remaining>0&&day>s.course.learningDays};
}
export function shuffled<T>(items:T[]):T[]{const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
export function parseStudy(value:unknown,total=453):StudyState|null {
 if(!value||typeof value!=='object'||Array.isArray(value))return null;
 const v=value as StudyState,version=(value as {version:number}).version;
 if(![1,2].includes(version)||(version===2&&v.appId!=='hanja-memory')||!v.records||typeof v.records!=='object'||Array.isArray(v.records)||!Array.isArray(v.bookmarks)||!v.notes||typeof v.notes!=='object'||Array.isArray(v.notes))return null;
 const valid=(id:number)=>Number.isInteger(id)&&id>=1&&id<=total;
 const finite=(n:unknown)=>typeof n==='number'&&Number.isFinite(n)&&n>=0&&n<=8.64e15;
 const records:StudyState['records']={};
 for(const [key,r] of Object.entries(v.records)){
  if(!valid(Number(key))||!r||![r.stage,r.due,r.last,r.attempts,r.misses].every(finite)||!Number.isInteger(r.stage)||r.stage>5||!Number.isInteger(r.attempts)||!Number.isInteger(r.misses)||r.misses>r.attempts||typeof r.needsReview!=='boolean')return null;
  if(r.card){const c=r.card;if(![c.due,c.stability,c.difficulty,c.elapsed_days,c.scheduled_days,c.learning_steps,c.reps,c.lapses,c.state].every(finite)||c.difficulty>10||c.state>3||!Number.isInteger(c.state)||!Number.isInteger(c.reps)||!Number.isInteger(c.lapses)||!Number.isInteger(c.learning_steps)||(c.last_review!==undefined&&!finite(c.last_review))||c.due!==r.due)return null;}
  records[Number(key)]={stage:r.stage,due:r.due,last:r.last,attempts:r.attempts,misses:r.misses,needsReview:r.needsReview,...(version===2&&r.card?{card:r.card}:{}),...(r.migration==='legacy-estimate'?{migration:r.migration}:{})};
 }
 if(!v.bookmarks.every(valid))return null;
 const notes:StudyState['notes']={};for(const [key,note] of Object.entries(v.notes)){if(!valid(Number(key))||typeof note!=='string'||note.length>2000)return null;notes[Number(key)]=note;}
 const base={...EMPTY_STUDY,records,notes,bookmarks:[...new Set(v.bookmarks)],lastId:valid(v.lastId)?v.lastId:1};if(version===1)return base;
 if(!Array.isArray(v.events)||!Array.isArray(v.rounds)||!v.course||!v.activity||typeof v.activity!=='object'||Array.isArray(v.activity))return null;
 if(![v.course.started,v.course.days,v.course.learningDays,v.course.minutes,v.course.dailyNew].every(finite)||v.course.days<1||v.course.days>366||v.course.learningDays<1||v.course.learningDays>v.course.days||v.course.minutes<1||v.course.minutes>240||v.course.dailyNew<1||v.course.dailyNew>1000)return null;
 const results=['correct','wrong','timeout'],sources=['today','practice'];
 if(v.events.some(e=>!e||!valid(e.id)||typeof e.key!=='string'||!finite(e.at)||!finite(e.due)||!results.includes(e.result)||!sources.includes(e.source)||!['new','early','relearning','scheduled'].includes(e.kind)||typeof e.modelApplied!=='boolean'||typeof e.scheduler!=='string')||new Set(v.events.map(e=>e.key)).size!==v.events.length)return null;
 if(v.rounds.some(r=>!r||typeof r.id!=='string'||!finite(r.started)||!Number.isInteger(r.number)||r.number<1||!Array.isArray(r.ids)||!r.ids.length||!r.ids.every(valid)||new Set(r.ids).size!==r.ids.length||!['weak','oldest','random'].includes(r.order)||!r.answers||typeof r.answers!=='object'||Array.isArray(r.answers)||Object.entries(r.answers).some(([id,a])=>!r.ids.includes(Number(id))||!a||!finite(a.at)||!results.includes(a.result)||!sources.includes(a.source))||(r.completed!==undefined&&(!finite(r.completed)||Object.keys(r.answers).length!==r.ids.length))))return null;
 if(new Set(v.rounds.map(r=>r.id)).size!==v.rounds.length||(v.activeRound!==undefined&&!v.rounds.some(r=>r.id===v.activeRound)))return null;
 if(Object.entries(v.activity).some(([key,n])=>!/^\d{4}-\d{2}-\d{2}$/.test(key)||!finite(n)))return null;
 return {...base,events:v.events,rounds:v.rounds,activeRound:v.activeRound,course:v.course,activity:v.activity};
}
