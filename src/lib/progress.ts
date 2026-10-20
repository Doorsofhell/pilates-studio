export type Entry={id:string;title:string;minutes:number;date:string};
export function summarize(history:Entry[]){return {sessions:history.length,minutes:history.reduce((n,h)=>n+h.minutes,0),days:new Set(history.map(h=>h.date.slice(0,10))).size}}
export function completedEntry(id:string,title:string,minutes:number,elapsedSeconds:number,date=new Date()):Entry{return{id,title,minutes:Math.max(1,Math.min(minutes,Math.round(elapsedSeconds/60))),date:date.toISOString()}}
