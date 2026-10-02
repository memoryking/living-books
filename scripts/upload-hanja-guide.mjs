import {S3Client,PutObjectCommand} from '@aws-sdk/client-s3';
import {config} from 'dotenv';
import fs from 'node:fs/promises';
config({path:'.env.local',quiet:true});
const env=process.env;
for(const name of ['R2_ACCOUNT_ID','R2_ACCESS_KEY_ID','R2_SECRET_ACCESS_KEY'])if(!env[name])throw Error('Missing configuration: '+name);
const client=new S3Client({region:'auto',endpoint:`https://${env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,credentials:{accessKeyId:env.R2_ACCESS_KEY_ID,secretAccessKey:env.R2_SECRET_ACCESS_KEY}});
const base=(env.R2_PUBLIC_URL || 'https://pub-d0d60c2fafe34c62a9d8993114fe64ca.r2.dev').replace(/\/$/,'');
const batch=new Date().toISOString().replace(/[:.]/g,'-');
const shots=[['practice-complete',6,'회차 최초 결과와 저장된 진행'],['meta-ready',4,'첫 글자 메타 학습 준비'],['meta-question',1,'첫 글자 두 선택지와 막대 타이머'],['meta-answer',4,'전체 훈음 확인과 자동 저장 결과'],['select-list',3,'회차 범위를 고르고 시작하기'],['today',2,'하루 계획과 지금 복습'],['new-lesson',1,'새 글자의 그림과 암기법'],['choose',3,'훈음을 숨긴 체크박스와 기억 상태'],['writing-answer',7,'보조 쓰기 정답 겹쳐 비교'],['backup',8,'학습 계획 조정과 백업 관리']];
const only=process.argv.slice(2);
const manifest=only.length?JSON.parse(await fs.readFile('data/hanja-memory/guide-screens.json','utf8')).filter(s=>!only.includes(s.id)):[];
for(const [id,section,title] of shots){
  if(only.length && !only.includes(id))continue;
  const key=`ebook/hanja-memory/guide/${batch}/${id}.png`;
  const body=await fs.readFile(`artifacts/hanja-guide-screens/${id}.png`);
  await client.send(new PutObjectCommand({Bucket:env.R2_BUCKET || 'livingbooks-media',Key:key,Body:body,ContentType:'image/png',CacheControl:'public, max-age=31536000, immutable'}));
  const url=base+'/'+key;const check=await fetch(url,{method:'HEAD'});
  if(!check.ok || !check.headers.get('content-type')?.includes('image/png'))throw Error('Public image unavailable: '+id);
  manifest.push({id,section,title,url,width:body.readUInt32BE(16),height:body.readUInt32BE(20)});console.log('Uploaded and verified:',id);
}
await fs.writeFile('data/hanja-memory/guide-screens.json',JSON.stringify(manifest,null,2)+'\n');
