import {execFileSync} from 'node:child_process';import {readFileSync} from 'node:fs';
const paths=execFileSync('git',['ls-files','--cached','--others','--exclude-standard'],{encoding:'utf8'}).trim().split('\n');
const rules=[/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,/AKIA[0-9A-Z]{16}/,/gh[pousr]_[A-Za-z0-9]{30,}/];
let failed=false;for(const path of paths){if(path=== 'scripts/security-check.mjs')continue;let text;try{text=readFileSync(path,'utf8')}catch{continue}if(rules.some(r=>r.test(text))){console.error('Potential secret: '+path);failed=true}if(/\.tsx?$/.test(path)&&/dangerouslySetInnerHTML/.test(text)){console.error('Unreviewed HTML rendering: '+path);failed=true}}
if(failed)process.exit(1);console.log('Focused source checks passed (not a complete security audit).');
