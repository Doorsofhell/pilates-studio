export type Entry={id:string;title:string;minutes:number;date:string;runId?:string;seconds?:number;status?:'completed'|'partial';completed?:string[];skipped?:string[];occurrence?:string;difficulty?:string};
export function summarize(history:Entry[]){return {sessions:history.filter(h=>h.status==='completed').length,minutes:Math.floor(history.reduce((n,h)=>n+(h.seconds??h.minutes*60),0)/60),days:new Set(history.filter(h=>(h.seconds??h.minutes*60)>0).map(h=>new Date(h.date).toLocaleDateString('fr-FR'))).size}}
export function appendUnique(history:Entry[],entry:Entry){return entry.runId&&history.some(h=>h.runId===entry.runId)?history:[...history,entry]}
// Legacy helper retained for compatibility; elapsed time never implies a completed run.
export function completedEntry(id:string,title:string,minutes:number,elapsedSeconds:number,date=new Date()):Entry{return{id,title,minutes:Math.floor(Math.max(0,Math.min(minutes*60,elapsedSeconds))/60),date:date.toISOString(),status:'partial'}}
export function occurrenceDone(history:Entry[],occurrence:string){return history.some(h=>h.occurrence===occurrence&&h.status==='completed')}
