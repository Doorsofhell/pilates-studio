export type Phase = 'preparation'|'exercise'|'pause'|'transition'|'recovery'|'finished'|'abandoned';
export type Step = {id:string;seconds:number;kind:'exercise'|'recovery';requiresReady:boolean};
export type Snapshot = {runId:string;sessionId:string;index:number;phase:Phase;practiced:number[];completed:string[];skipped:string[]};
/** No DOM, storage or timers. Call tick from any scheduler; elapsed time comes only from now. */
export class SessionEngine {
  state:Snapshot;
  private anchor:number|null=null;
  constructor(readonly steps:Step[], sessionId:string, private now:()=>number=()=>performance.now(), snapshot?:Snapshot){
    if(!steps.length||steps.some(s=>!Number.isFinite(s.seconds)||s.seconds<=0))throw Error('Invalid steps');
    const validIds=new Set(steps.map(s=>s.id));
    if(snapshot&&!(snapshot.sessionId===sessionId&&typeof snapshot.runId==='string'&&Number.isInteger(snapshot.index)&&snapshot.index>=0&&snapshot.index<steps.length&&Array.isArray(snapshot.practiced)&&snapshot.practiced.length===steps.length&&snapshot.practiced.every((n,i)=>Number.isFinite(n)&&n>=0&&n<=steps[i].seconds)&&Array.isArray(snapshot.completed)&&snapshot.completed.every(id=>validIds.has(id))&&Array.isArray(snapshot.skipped)&&snapshot.skipped.every(id=>validIds.has(id))))snapshot=undefined;
    this.state=snapshot?{...snapshot,phase:['finished','abandoned'].includes(snapshot.phase)?snapshot.phase:'pause',practiced:[...snapshot.practiced],completed:[...snapshot.completed],skipped:[...snapshot.skipped]}:{runId:crypto.randomUUID(),sessionId,index:0,phase:'preparation',practiced:steps.map(()=>0),completed:[],skipped:[]};
  }
  get step(){return this.steps[this.state.index]}
  get terminal(){return ['finished','abandoned'].includes(this.state.phase)}
  get activeSeconds(){this.tick();return this.state.practiced.reduce((a,b)=>a+b,0)}
  get remaining(){return Math.max(0,this.step.seconds-this.state.practiced[this.state.index])}
  ready(){if(this.terminal)return;if(['preparation','transition','pause'].includes(this.state.phase)){this.state.phase=this.step.kind;this.anchor=this.now()}}
  tick(){if(this.anchor===null)return;const at=this.now();const delta=Math.max(0,at-this.anchor)/1000;this.anchor=at;const i=this.state.index;this.state.practiced[i]=Math.min(this.step.seconds,Math.round((this.state.practiced[i]+delta)*1000)/1000);if(this.remaining===0){if(!this.state.completed.includes(this.step.id))this.state.completed.push(this.step.id);this.anchor=null;this.move(1,false)}}
  pause(){this.tick();if(this.terminal)return;this.anchor=null;if(!['preparation','transition'].includes(this.state.phase))this.state.phase='pause'}
  resume(){if(this.state.phase==='pause'){this.state.phase='preparation'}}
  move(direction:number,manual=true){if(this.terminal)return;if(manual)this.pause();if(direction<0&&this.state.index===0)return;if(manual&&direction>0&&!this.state.completed.includes(this.step.id)&&!this.state.skipped.includes(this.step.id))this.state.skipped.push(this.step.id);const next=this.state.index+direction;this.anchor=null;if(next>=this.steps.length){this.state.phase='finished';return}this.state.index=next;this.state.phase=next===0?'preparation':'transition'}
  abandon(){this.pause();if(!this.terminal)this.state.phase='abandoned'}
  snapshot():Snapshot {this.pause();return structuredClone(this.state)}
  result(){const seconds=this.activeSeconds;return {runId:this.state.runId,id:this.state.sessionId,seconds,minutes:Math.floor(seconds/60),status:this.state.phase==='finished'&&this.state.completed.length===this.steps.length?'completed' as const:'partial' as const,completed:[...this.state.completed],skipped:[...this.state.skipped]}}
}
