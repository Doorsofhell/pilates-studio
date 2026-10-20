import {defaults,type Profile} from '../profile/model';
export function read<T>(key:string,fallback:T):T{try{const raw=localStorage.getItem('ps-'+key);return raw?JSON.parse(raw) as T:fallback}catch{return fallback}}
export function write<T>(key:string,value:T):void{localStorage.setItem('ps-'+key,JSON.stringify(value))}
export function migrate(storage:Storage=localStorage){
 const keys=['ps-profile','ps-history','ps-favorites'];
 if(!storage.getItem('ps-backup-v1'))storage.setItem('ps-backup-v1',JSON.stringify(Object.fromEntries(keys.map(k=>[k,storage.getItem(k)]))));
 const parse=(key:string,fallback:unknown):unknown=>{try{return JSON.parse(storage.getItem(key)||'null')??fallback}catch{return fallback}};
 const raw=parse('ps-profile',{});const p=raw&&typeof raw==='object'?raw as Record<string,unknown>:{};
 const profile:Profile={...defaults};for(const key of ['name','goal','level','equipment','practice','matLevel','reformerLevel','machine'] as const)if(typeof p[key]==='string')profile[key]=p[key].slice(0,120) as never;
 if(!p.matLevel&&typeof p.level==='string')profile.matLevel=p.level;
 if(!p.reformerLevel&&typeof p.level==='string')profile.reformerLevel=p.level;
 if(!p.practice)profile.practice=p.equipment==='Tapis'?'Sol':p.equipment==='Reformer'?'Reformer':'Mixte';
 profile.onboarded=p.onboarded===true;profile.duration=typeof p.duration==='number'&&[10,15,20,30,45].includes(p.duration)?p.duration:20;profile.frequency=typeof p.frequency==='number'&&p.frequency>=1&&p.frequency<=7?p.frequency:3;profile.accessories=Array.isArray(p.accessories)?p.accessories.filter((x):x is string=>typeof x==='string'):[];
 const history=parse('ps-history',[]);const favorites=parse('ps-favorites',[]);
 storage.setItem('ps-schema','2');return {profile,history:Array.isArray(history)?history.filter(h=>h&&typeof h==='object'&&typeof h.id==='string'&&typeof h.title==='string'&&typeof h.date==='string'&&Number.isFinite(h.minutes)&&h.minutes>=0).map(h=>({...h,seconds:typeof h.seconds==='number'&&Number.isFinite(h.seconds)&&h.seconds>=0?h.seconds:undefined,status:['completed','partial'].includes(h.status)?h.status:undefined})):[],favorites:Array.isArray(favorites)?favorites.filter((x):x is string=>typeof x==='string'):[]};
}
