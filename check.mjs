// Checks generated-page integrity, including GitHub Pages project subpaths.
import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'dist');
async function walk(dir) {
  const all=[];
  for(const item of await readdir(dir,{withFileTypes:true})) {
    const path=join(dir,item.name);
    all.push(...(item.isDirectory()?await walk(path):[path]));
  }
  return all;
}
const pages=(await walk(root)).filter(path=>path.endsWith('.html'));
let links=0;
for(const path of pages) {
  const html=await readFile(path,'utf8');
  assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1,`${path}: needs exactly one H1`);
  assert.match(html,/<html lang="en">/);
  assert.match(html,/<main id="main"/);
  assert.match(html,/<title>[^<]+<\/title>/);
  assert.match(html,/name="viewport"/);
  for(const image of html.matchAll(/<img\b[^>]*>/g)) assert.match(image[0],/alt="[^"]+"/,`${path}: meaningful image alt required`);
  for(const [,raw] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if(/^(?:https?:|mailto:|data:)/.test(raw))continue;
    const url=new URL(raw,'https://example.test/engineering-portfolio/'+path.slice(root.length+1).replaceAll('\\','/'));
    const local=url.pathname.replace(/^\/engineering-portfolio\//,'/');
    let target=resolve(root,'.'+decodeURIComponent(local));
    assert.ok((await stat(target)).isFile()||(await stat(target)).isDirectory(),`${path}: missing ${raw}`);
    if((await stat(target)).isDirectory())target=join(target,'index.html');
    if(url.hash)assert.ok((await readFile(target,'utf8')).includes(`id="${decodeURIComponent(url.hash.slice(1))}"`),`${path}: broken fragment ${raw}`);
    links++;
  }
}
const pdf=await readFile(join(root,'assets','daniel-li-resume.pdf'));
assert.equal(pdf.subarray(0,5).toString(),'%PDF-');
assert.ok(pdf.length>1000);
assert.equal(pages.length,7,'Expected home, five projects, and 404');
console.log(`Passed: ${pages.length} pages, ${links} local links, landmarks, headings, image text, and PDF download.`);
