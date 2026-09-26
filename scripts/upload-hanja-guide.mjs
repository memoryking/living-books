import {S3Client,PutObjectCommand} from '@aws-sdk/client-s3';
import {config} from 'dotenv';
import fs from 'node:fs/promises';
config({path:'.env.local',quiet:true});
const env=process.env;
for(const name of ['R2_ACCOUNT_ID','R2_ACCESS_KEY_ID','R2_SECRET_ACCESS_KEY'])if(!env[name])throw Error('Missing configuration: '+name);
const client=new S3Client({region:'auto',endpoint:`https://${env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,credentials:{accessKeyId:env.R2_ACCESS_KEY_ID,secretAccessKey:env.R2_SECRET_ACCESS_KEY}});
const base=(env.R2_PUBLIC_URL || 'https://pub-d0d60c2fafe34c62a9d8993114fe64ca.r2.dev').replace(/\/$/,'');
const batch=new Date().toISOString().replace(/[:.]/g,'-');
const shots=[['practice-complete',6,'미리 복습에서 틀린 한자만 바로 다시 확인'],["today-complete",5,"오늘 학습 완료 후 다음 복습 시각 안내"],["meta-ready",4,"메타 학습 준비와 시작"],["meta-question",4,"남은 시간과 훈음 첫 글자 선택"],["meta-answer",4,"미리 복습의 자동 판정과 다음 문제"],['select-list',3,'배운 한자의 범위를 고르고 미리 복습 시작'],['today',2,'오늘 복습과 새 글자 학습 선택'],['new-lesson',1,'새 글자의 그림과 암기법 배우기'],['choose',3,'책갈피 범위를 골라 정답 없이 시험하기'],['answer',4,'정답 확인과 두 가지 자기평가'],['writing',7,'뜻과 음을 보고 직접 쓰기'],['writing-answer',7,'내 글씨 뒤에 정답을 겹쳐 비교하기'],['backup',10,'학습 기록 내보내기와 가져오기']];
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
