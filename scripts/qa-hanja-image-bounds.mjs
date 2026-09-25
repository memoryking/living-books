import {spawnSync} from 'node:child_process';
import {pathToFileURL} from 'node:url';
import path from 'node:path';
import fs from 'node:fs';
const dir=path.resolve('artifacts/hanja-image-bounds');
for(let page=1;page<=5;page++){
 const result=spawnSync('C:/Program Files/Google/Chrome/Application/chrome.exe',['--headless=new','--disable-gpu','--no-first-run','--user-data-dir='+path.join(dir,'browser-profile'),'--screenshot='+path.join(dir,`review-${page}.png`),'--window-size=1200,2150','--hide-scrollbars',pathToFileURL(path.join(dir,`review-${page}.html`)).href],{windowsHide:true,encoding:'utf8',timeout:60000});
 if(result.status!==0 || !fs.existsSync(path.join(dir,`review-${page}.png`)))throw Error(result.stderr);
 console.log('Rendered sheet',page);
}
