import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFileSync } from 'node:fs';
function app() {
  let now = 0; let tick;
  const elements = new Map(); const saved = new Map(); const listeners = {};
  const element = id => { if(!elements.has(id))elements.set(id,{hidden:false,disabled:false,style:{},classList:{add(){},remove(){}},focus(){},querySelectorAll(){return []}});return elements.get(id) };
  const context=vm.createContext({console, performance:{now:()=>now}, localStorage:{getItem:k=>saved.get(k),setItem:(k,v)=>saved.set(k,v)}, document:{getElementById:element,querySelectorAll:()=>[],body:{style:{}},activeElement:element('trigger'),addEventListener:(k,v)=>listeners[k]=v,hidden:false},window:{scrollTo(){}},navigator:{},setInterval:fn=>{tick=fn;return 1},clearInterval:()=>{tick=null}});
  for(const file of ['session-engine.js','premium.js'])vm.runInContext(readFileSync(new URL('../'+file,import.meta.url),'utf8'),context);
  return {run:code=>vm.runInContext(code,context),element,saved,listeners,context,advance:ms=>{now+=ms;tick?.()}};
}
test('Reformer waits for confirmation at every step and cannot bypass via next',()=>{
  const a=app();a.run("start('reformer-start')");a.advance(200000);
  assert.equal(a.run('step'),0);assert.equal(a.run('running'),false);a.run('change(1)');assert.equal(a.run('step'),0);
  a.element('setup-ready').onclick();a.advance(180000);assert.equal(a.run('step'),1);assert.equal(a.run('needsSetup'),true);
});
test('skipped steps produce partial history and finishing twice adds no duplicate',()=>{
  const a=app();a.run("start('mat-flow')");a.advance(2000);a.run('change(1);change(1);change(1);change(1);change(1);finish()');
  const history=JSON.parse(a.saved.get('ps-history'));assert.equal(history.length,1);assert.equal(history[0].status,'partial');assert.equal(history[0].seconds,2);assert.equal(history[0].minutes,0);
});
test('background pauses player until explicit resume',()=>{
  const a=app();a.run("start('mat-flow')");a.advance(2000);a.context.document.hidden=true;a.listeners.visibilitychange();a.advance(300000);
  assert.equal(a.run('step'),0);assert.equal(a.run('running'),false);a.run('finish()');assert.equal(JSON.parse(a.saved.get('ps-history'))[0].seconds,2);
});
