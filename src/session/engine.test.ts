import {describe,it,expect} from 'vitest';
import {SessionEngine} from './engine';
const steps=[{id:'one',seconds:10,kind:'exercise' as const,requiresReady:true},{id:'two',seconds:20,kind:'exercise' as const,requiresReady:true}];
function fixture(){let now=0;const engine=new SessionEngine(steps,'a',()=>now);return {engine,advance:(ms:number)=>{now+=ms;engine.tick()}}}
describe('monotonic session engine',()=>{
 it('does not count preparation, material transitions or background pauses',()=>{const {engine:e,advance}=fixture();advance(60000);expect(e.activeSeconds).toBe(0);e.ready();advance(2500);e.pause();advance(60000);expect(e.activeSeconds).toBe(2.5);e.resume();advance(60000);expect(e.activeSeconds).toBe(2.5);e.ready();advance(7500);expect(e.state.phase).toBe('transition');expect(e.state.index).toBe(1);advance(60000);expect(e.activeSeconds).toBe(10)});
 it('does not spill a delayed callback into the next exercise',()=>{const {engine:e,advance}=fixture();e.ready();advance(90000);expect(e.activeSeconds).toBe(10);expect(e.state.completed).toEqual(['one']);expect(e.state.phase).toBe('transition')});
 it('records skipped steps as partial even at the end',()=>{const {engine:e,advance}=fixture();e.ready();advance(2000);e.move(1);e.ready();advance(20000);expect(e.result()).toMatchObject({seconds:22,status:'partial',completed:['two'],skipped:['one']})});
 it('abandon is terminal and cannot resume',()=>{const {engine:e,advance}=fixture();e.ready();advance(1500);e.abandon();e.ready();advance(60000);expect(e.result()).toMatchObject({seconds:1.5,status:'partial'});expect(e.state.phase).toBe('abandoned')});
 it('completes only after every exercise and result is stable',()=>{const {engine:e,advance}=fixture();e.ready();advance(10000);e.ready();advance(20000);const result=e.result();expect(result.status).toBe('completed');e.abandon();e.move(-1);advance(60000);expect(e.result()).toEqual(result)});
 it('restores paused and needs explicit preparation',()=>{const {engine:e,advance}=fixture();e.ready();advance(3000);const saved=e.snapshot();const restored=new SessionEngine(steps,'a',()=>999999,saved);expect(restored.state.phase).toBe('pause');expect(restored.activeSeconds).toBe(3);restored.resume();expect(restored.state.phase).toBe('preparation')});
 it('does not double count a replayed exercise',()=>{const {engine:e,advance}=fixture();e.ready();advance(10000);e.move(-1);e.ready();advance(10000);expect(e.activeSeconds).toBe(10);expect(e.state.completed).toEqual(['one'])});
});

it('ignores malformed interrupted data without crashing',()=>{const e=new SessionEngine(steps,'a',()=>0,{runId:'bad',sessionId:'a',index:99,phase:'pause',practiced:[-2],completed:[],skipped:[]});expect(e.state.index).toBe(0);expect(e.activeSeconds).toBe(0)});
