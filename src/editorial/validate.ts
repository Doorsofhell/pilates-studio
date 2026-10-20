import type {Catalog,Review,Technique} from './model';
const reviewValid=(review:Review|undefined,version?:string)=>!!review?.name&&!!review.qualification&&!!review.date&&(!version||review.version===version)&&review.mediaReviewed&&review.comprehensionTested;
export function techniqueErrors(t:Technique):string[]{
 const errors:string[]=[];const required=['id','version','nameFr','internationalName','description','installation','supports','tempo','dosage','recovery','sensations','precautions','stopCriteria','mobility','balance','autonomy'] as const;
 for(const key of required)if(!t[key]?.trim())errors.push(t.id+': missing '+key);
 if(!Number.isInteger(t.level)||t.level<0||t.level>6)errors.push(t.id+': invalid level');
 if(!reviewValid(t.review,t.version)||t.review?.practice!==t.practice)errors.push(t.id+': professional review required');
 for(const key of ['execution','breathing','errors','benefits','muscles','joints','regressions','progressions'] as const)if(!t[key].length)errors.push(t.id+': missing '+key);
 if(!t.sources.length||t.sources.some(s=>!s.organization||!s.accessed||!s.variant||!s.rights||!s.url.startsWith('https://')))errors.push(t.id+': exact sources required');
 if(!t.demonstration.length||t.demonstration.some(m=>!m.validation||m.validation.version!==t.version||m.exerciseId!==t.id||!m.license||!m.source))errors.push(t.id+': validated dedicated demonstration required');
 if(t.practice==='reformer'&&(!t.setups.length||t.setups.some(s=>!s.machineId||!s.validation||!s.springs||!s.footbar||!s.headrest||!s.straps||!s.entry||!s.exit)))errors.push(t.id+': validated machine setup required');
 if(t.benefits.some(b=>b.kind==='evidence'&&(!b.sourceUrl||!b.population||!b.limits)))errors.push(t.id+': evidence benefit needs population and limits');return errors;
}
export function validateCatalog(c:Catalog){const errors:string[]=[],warnings:string[]=[];const ids=new Set<string>();for(const item of [...c.techniques,...c.sessions,...c.programs]){if(ids.has(item.id))errors.push('Duplicate id '+item.id);ids.add(item.id)}
 for(const t of c.techniques.filter(t=>t.status==='published'))errors.push(...techniqueErrors(t));
 for(const s of c.sessions.filter(s=>s.status==='published')){
  if(!reviewValid(s.review,s.version)||s.review?.practice!==s.practice)errors.push(s.id+': review required');
  if(!Number.isInteger(s.level)||s.level<0||s.level>6||!s.intensity)errors.push(s.id+': level/intensity required');
  if(!s.steps.length||s.steps.some(x=>!Number.isFinite(x.seconds)||x.seconds<=0)||s.seconds!==s.steps.reduce((n,x)=>n+x.seconds,0))errors.push(s.id+': inconsistent duration');
  for(const step of s.steps){const t=c.techniques.find(t=>t.id===step.techniqueId);if(!t||t.status!=='published'||techniqueErrors(t).length){errors.push(s.id+': unavailable technique '+step.techniqueId);continue}if(t.practice!==s.practice||t.equipment.some(e=>!s.equipment.includes(e)))errors.push(s.id+': undeclared equipment/practice');if(step.variantId&&!t.regressions.includes(step.variantId)&&!t.progressions.includes(step.variantId))errors.push(s.id+': incompatible variant');if(s.practice==='reformer'&&!t.setups.some(setup=>setup.machineId===step.machineId&&setup.validation))errors.push(s.id+': unknown Reformer configuration')}
 }
 for(const p of c.programs.filter(p=>p.status==='published')){if(!reviewValid(p.review)||p.entries.length!==p.days||new Set(p.entries.map(d=>d.day)).size!==p.days||p.entries.some(d=>d.day<1||d.day>p.days))errors.push(p.id+': missing days/review');for(const d of p.entries)if(d.type==='session'&&!c.sessions.some(s=>s.id===d.sessionId&&s.status==='published'))errors.push(p.id+': unavailable session')}
 for(let i=0;i<c.sessions.length;i++)for(let j=i+1;j<c.sessions.length;j++){const a=c.sessions[i],b=c.sessions[j];const signature=(s:typeof a)=>s.steps.map(x=>x.techniqueId).join('|');if(signature(a)&&signature(a)===signature(b))warnings.push('Editorial sequence duplicate: '+a.id+' / '+b.id)}
 return {errors,warnings,counters:{publishedSessions:c.sessions.filter(x=>x.status==='published').length,tutorials:c.techniques.filter(x=>x.status==='published').length,programs:c.programs.filter(x=>x.status==='published').length,drafts:[...c.techniques,...c.sessions,...c.programs].filter(x=>x.status!=='published').length}};
}
