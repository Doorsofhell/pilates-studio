import {readFileSync} from 'node:fs';
const evidence=JSON.parse(readFileSync('docs/release-evidence.json','utf8'));
const required=['pedagogy','media','androidDevice','releaseInstall','upgrade','visualReview','securityReview'];
const missing=required.filter(k=>evidence[k]!==true);
if(missing.length){console.error('PRODUCTION BLOCKED: '+missing.join(', '));process.exit(1)}
if(evidence.commit!==process.env.RELEASE_SHA||!evidence.artifactSha256){console.error('Commit/artifact evidence mismatch');process.exit(1)}
