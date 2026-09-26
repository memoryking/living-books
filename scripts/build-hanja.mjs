import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

// book.json is the only editable lesson source. Every other lesson format is derived.
const root = process.argv[2] || 'data/hanja-memory';
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const originals = read('source.tsv').trim().split(/\r?\n/).map(line => line.split('\t'));
const book = JSON.parse(read('book.json'));
const { entries, chapters } = book;
// Book-only appendix is not imported by the study app.
const { comparisons } = JSON.parse(read('ebook-appendix.json'));
assert.equal(originals.length, 453);
assert.equal(entries.length, 453);
assert.equal(chapters.length, 29);
entries.forEach((e, i) => {
  assert.equal(e.id, i + 1, 'Do not renumber existing study IDs');
  assert.equal(e.originalChar, originals[i][0]);
  assert.equal(e.originalReading, originals[i][1]);
  assert.equal(e.examples.length, 2);
  assert.ok(e.memory && e.reading && e.scene && e.char);
  assert.ok(chapters.some(c => c.id === e.chapter));
});
for (const c of comparisons) for (const id of c.ids) assert.ok(entries.some(e => e.id === id));
fs.mkdirSync(path.join(root, 'content'), { recursive: true });
// Compatibility exports are generated snapshots, never additional editing sources.
fs.writeFileSync(path.join(root,'lessons.tsv'),entries.map(e=>[e.id,e.scene,e.memory,...e.examples,e.englishScene].join('|')).join('\n')+'\n');
fs.writeFileSync(path.join(root,'chapters.json'),JSON.stringify(chapters.map(c=>[c.title,c.description]),null,2)+'\n');
fs.writeFileSync(path.join(root,'comparisons.json'),JSON.stringify(comparisons,null,2)+'\n');
fs.writeFileSync(path.join(root,'editorial.json'),JSON.stringify(Object.fromEntries(entries.filter(e=>e.note).map(e=>[e.id,{char:e.char,reading:e.reading,note:e.note,source:e.source}])),null,2)+'\n');
const overrides = Object.fromEntries(entries.filter(e => Number(e.image.match(/atlas-(\d+)/)?.[1]) !== Math.floor((e.id - 1) / 16) + 1 || e.imageRow * 4 + e.imageColumn !== (e.id - 1) % 16).map(e => [e.id,e.imageRow*4+e.imageColumn]));

const escape = s => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const imageHTML = e => {
  const [x,y,w,h]=e.imageCrop;
  assert.ok(x>=0 && y>=0 && w>0 && h>0 && x+w<=1.000001 && y+h<=1.000001, 'Invalid image bounds: '+e.id);
  return `<div role="img" data-image-id="${e.id}" aria-label="${escape(e.scene)}" style="width:min(100%,360px);aspect-ratio:${w}/${h};margin:24px auto;background-color:#fff;background-image:url('${e.image}');background-size:${100/w}% ${100/h}%;background-position:${x/(1-w)*100}% ${y/(1-h)*100}%;background-repeat:no-repeat;clip-path:${e.imageMask || 'none'}"></div>`;
};
for (const chapter of chapters) {
  const group = entries.filter(e => e.chapter === chapter.id);
  const body = [
    `# ${chapter.id}장. ${chapter.title}`, '', chapter.description, '',
    '**읽는 순서:** 그림을 보고 → 한자의 획을 짚고 → 훈음을 말하고 → 답을 가리고 떠올립니다.', '',
    '> 이 장의 이야기는 기억을 위한 창작 연상입니다. 역사적 자원 설명과 구별하세요. 구성 예시의 부품이 항상 단어의 뜻을 나타내지는 않습니다.', '',
    ...group.flatMap(e => [
      `## ${String(e.id).padStart(3, '0')} · ${e.char} — ${e.reading}`, '', imageHTML(e), '',
      `### 한 장면: ${e.scene}`, '', e.memory, '',
      `**뜻·음 연결:** ${e.char} → ${e.scene} → ${e.reading}`, '',
      '### 단어와 구성에서 다시 만나기', '', `- ${e.examples[0]}`, `- ${e.examples[1]}`, '',
      ...(e.note ? [`> **표기·훈음 메모:** ${e.note}`, '', `입력 원문: ${e.originalChar} · ${e.originalReading}`, '', ...(e.source ? [`[표기 확인 참고](${e.source})`, ''] : [])] : []),
      `<details><summary>가리고 꺼내기 — ${e.char}의 훈음을 먼저 말해 보세요</summary><p><strong>${escape(e.reading)}</strong></p><p>그림을 떠올린 다음, 글자에서 그 장면을 연결한 획을 짚어 보세요. 이어 ${escape(e.examples[0].split(':')[0])}에서 배운 글자를 찾아 설명하세요.</p></details>`, '', '---', '',
    ]),
    '### 이 장을 덮기 전에', '',
    `다음 항목의 훈음을 답을 보지 않고 말해 보세요: **${group.map(e => `${e.char}(${e.id})`).join(' · ')}**`, '',
    '<details><summary>단원 정답 펼치기</summary>', '',
    ...group.map(e => `- **${String(e.id).padStart(3, '0')}** · ${e.char} · ${e.reading}`), '', '</details>', '',
    '같은 모양이 둘 이상이면 부수인지 독립 글자인지 문맥까지 설명합니다. 기억나지 않은 번호는 다시 볼 목록에 넣고 다음 공부에서 먼저 확인하세요.', '',
  ].join('\n');
  fs.writeFileSync(path.join(root, 'content', `${String(chapter.id).padStart(2, '0')}-chapter.md`), body);
}

fs.writeFileSync(path.join(root, 'content', '31-comparisons.md'), [
  '# 부록 · 헷갈림 비교 — 차이 하나로 구별하기', '',
  '이 부록은 전자책에서만 제공하며 암기앱의 학습 메뉴에는 포함되지 않습니다. 한자별 본문·훈음·그림·암기법·예시는 두 형식에서 동일하게 연동됩니다.', '',
  '비슷한 글자를 나란히 보고 차이를 말한 뒤, 한쪽을 가리고 직접 써 보세요.', '',
  ...comparisons.flatMap(c => [`## ${c.title}`, '', `**${c.ids.map(id => `${entries[id - 1].char} · ${entries[id - 1].reading}`).join(' / ')}**`, '', c.cue, '', `**스스로 묻기:** ${c.question}`, '', `<details><summary>답 확인</summary><p>${escape(c.answer)}</p></details>`, '']),
].join('\n'));
fs.writeFileSync(path.join(root, 'content', '32-editorial.md'), [
  '# 원문 대조와 교정 기록', '',
  '입력 순서와 453개 항목을 모두 보존했습니다. 한 글자에 여러 훈음이 있는 경우 이 책의 정답 표기와 원문을 나란히 표시합니다. 아래 목록은 변경 사항과 학습 주의점을 담으며 전체 한자의 모든 뜻을 망라한 사전은 아닙니다.', '',
  '| 번호 | 입력 원문 | 학습 표기 | 설명 |', '|---|---|---|---|',
  ...entries.filter(e => e.note).map(e => `| ${e.id} | ${e.originalChar} · ${e.originalReading} | ${e.char} · ${e.reading} | ${e.note}${e.source ? ` [참고](${e.source})` : ''} |`), '',
  '## 독음과 자형 사용 원칙', '',
  '金·龍·龜·車·參·暴·令은 원문을 보존하면서 본문 표시만 일반 한자 金·龍·龜·車·參·暴·令으로 정규화했습니다. 두음 법칙에 따라 한자 훈음의 록·녀·림 등이 단어에서는 녹·여·임으로 바뀔 수 있습니다. 품사나 용법에 따라 독음이 다른 경우 예시에 별도로 적었습니다.', '',
  '부수·구성 요소는 완전한 단어가 드물어 관련 글자와 문어 표현을 함께 제시했습니다. 개별 설명은 창작 연상이며, 모양만 같다고 모두 동일한 역사적 어원을 가진다고 주장하지 않습니다.', '',
].join('\n'));
const counts = new Map();
for (const e of entries) counts.set(e.originalChar, (counts.get(e.originalChar) || 0) + 1);
fs.writeFileSync(path.join(root, 'audit.json'), JSON.stringify({
  inputRows: originals.length, outputRows: entries.length, examples: entries.length * 2,
  chapters: chapters.length, originalUniqueCharacters: counts.size,
  duplicates: [...counts].filter(([,count]) => count > 1),
  correctedEntries: entries.filter(e => e.corrected).map(e => e.id),
  noteEntries: entries.filter(e => e.note).length,
  componentEntries: entries.filter(e => e.kind === 'component').map(e => e.id),
  imageSheets: 30, imageOverrides: overrides,
}, null, 2) + '\n');
console.log(`Built ${entries.length} entries / ${entries.length * 2} examples / ${chapters.length} chapters.`);
