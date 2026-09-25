import assert from 'node:assert/strict';
const base='https://living-books-beta.vercel.app';
const pages=[
  ['/admin/export','hanja-memory'],
  ['/premium/hanja-memory','그림으로'],
  ['/premium/hanja-memory/read','그림으로 기억하는 한자'],
  ['/premium/hanja-memory/read/full','그림으로 기억하는 한자 453'],
  ['/embed/hanja-memory?preview=1','atlas-30.webp'],
];
for(const [route,needle] of pages){
  const response=await fetch(base+route);
  const html=await response.text();
  assert.equal(response.status,200,route);
  assert.ok(html.includes(needle),'Missing content: '+route);
  if(route==='/admin/export') {assert.ok(html.includes('① 그림 학습형'));assert.ok(html.includes('② 기존 전자책형'));}
  if(route==='/premium/hanja-memory/read') {
    assert.ok(!html.includes('기존 방식으로 읽기'));
    assert.ok(!html.includes('type="search"'));
    assert.ok(!html.includes('훈음·연상 듣기'));
    assert.ok(!html.includes('책 소개 ↗'));
    assert.ok(html.includes('오늘 복습 시작') && html.includes('새 글자 배우기') && html.includes('골라 학습') && html.includes('focusApp'));
  }
  if(route==='/premium/hanja-memory/read/full') {assert.ok(!html.includes('꼭 알아야 할 10가지'));assert.ok(!html.includes('전체 목록으로'));assert.ok(html.includes('페이지형'));assert.ok(html.includes('목차로 가기'));}
  console.log('PASS',route,response.status);
  if(route.includes('/read/full') || route.startsWith('/embed/')) {assert.ok(html.includes('data-image-id="38"'));assert.ok(html.includes('data-image-id="42"'));assert.ok(html.includes('data-image-id="121"'));}
  if(route.includes('/read/full') || route.startsWith('/embed/')) assert.ok(html.includes('hanja-reader.js?v=5'));
}
const reader=await fetch(base+'/widget/hanja-reader.js?v=5');
assert.equal(reader.status,200);
assert.ok((await reader.text()).includes('eb-unit-entry'));
const assets=['cover',...Array.from({length:30},(_,i)=>'atlas-'+String(i+1).padStart(2,'0'))];
const results=await Promise.all(assets.map(async name=>{
  const r=await fetch(base+'/hanja-memory/'+name+'.webp',{method:'HEAD'});
  assert.equal(r.status,200,name);
  assert.ok(r.headers.get('content-type')?.includes('image/webp'),name);
  return name;
}));
console.log('PASS',results.length,'production image assets');
