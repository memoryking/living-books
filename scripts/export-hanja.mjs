import fs from 'node:fs/promises';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import ts from 'typescript';
import './build-hanja.mjs';
const out=path.resolve('outputs');
await fs.mkdir(out,{recursive:true});
const compiled=ts.transpileModule(await fs.readFile('src/lib/generate-widget.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText;
const modulePath=path.join(out,'.hanja-widget-builder.mjs');
await fs.writeFile(modulePath,compiled);
const {generateWidget}=await import(pathToFileURL(modulePath).href);
let html=generateWidget('hanja-memory');
const css=await fs.readFile('public/widget/eb-style.css','utf8');
const js=await fs.readFile('public/widget/hanja-reader.js','utf8');
html=html.replace(/<link[^>]*>/g,'').replace(/<script src=[^>]*><\/script>/g,'');
const variables=[];
for(let i=1;i<=30;i++) {
  const name='atlas-'+String(i).padStart(2,'0')+'.webp';
  const data=(await fs.readFile('public/hanja-memory/'+name)).toString('base64');
  variables.push(`--hanja-atlas-${i}:url(data:image/webp;base64,${data});`);
  html=html.replaceAll(`url('https://living-books-beta.vercel.app/hanja-memory/${name}')`,`var(--hanja-atlas-${i})`);
}
const cover=(await fs.readFile('public/hanja-memory/cover.webp')).toString('base64');
html=html.replaceAll('https://living-books-beta.vercel.app/hanja-memory/cover.webp','data:image/webp;base64,'+cover);
const full=`<!DOCTYPE html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>그림으로 기억하는 한자 453</title><style>${css}\n:root{${variables.join('')}}body{margin:0;background:#fafaf5}.eb-viewer{background:#fff}.eb-content img{max-width:100%;max-height:520px;object-fit:contain;display:block;margin:auto}.eb-content details{border:1px solid #dce3d8;border-radius:8px;padding:12px 16px;margin:16px 0}.eb-content summary{cursor:pointer;font-weight:700}.eb-content [role=img]{break-inside:avoid}.eb-section{overflow-wrap:anywhere}.eb-content table{display:block;overflow-x:auto}button{cursor:pointer}</style></head><body>${html}<script>${js}</script></body></html>`;
const file=path.join(out,'한자453_전자책.html');
await fs.writeFile(file,full);
await fs.unlink(modulePath);
console.log(file+' ('+(Buffer.byteLength(full)/1048576).toFixed(1)+' MB)');
