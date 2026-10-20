import type {Session} from '../data/catalog';import type {Profile} from '../profile/model';
export type Filters={query:string;practice:string;level:string;maxMinutes:number;favoritesOnly:boolean;compatibleOnly:boolean};
export function compatible(s:Session,p:Profile){return (s.category==='Reformer'?p.practice!=='Sol'&&!!p.machine:p.practice!=='Reformer')}
export function filterSessions(items:Session[],f:Filters,p:Profile,favorites:string[]){return items.filter(s=>(s.title+' '+s.focus).toLocaleLowerCase('fr').includes(f.query.toLocaleLowerCase('fr'))&&(f.practice==='Tout'||s.category===f.practice)&&(f.level==='Tous'||s.level===f.level)&&s.minutes<=f.maxMinutes&&(!f.favoritesOnly||favorites.includes(s.id))&&(!f.compatibleOnly||compatible(s,p)))}
