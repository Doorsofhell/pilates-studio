import test from 'node:test';
import assert from 'node:assert/strict';
import '../session-engine.js';
const { SessionClock, outcome } = globalThis.PilatesEngine;
test('wall clock counts actual elapsed time despite delayed interval callbacks', () => {
  let now = 0; const clock = new SessionClock(() => now); clock.start(); now = 4700;
  assert.equal(clock.seconds(), 4.7);
});
test('pause excludes background time and repeated starts cannot reset elapsed time', () => {
  let now = 0; const clock = new SessionClock(() => now); clock.start(); now = 2500; clock.pause();
  now = 20000; assert.equal(clock.seconds(), 2.5); clock.start(); now = 21000; clock.start(); now = 22000;
  assert.equal(clock.seconds(), 4.5);
});
test('skipping to the end cannot record a completed workout or invent a minute', () => {
  assert.deepEqual(outcome([60, 60], [0, 0]), {seconds:0, minutes:0, status:'partial'});
  assert.equal(outcome([60, 60], [60, 12]).status, 'partial');
});
test('replaying an exercise cannot inflate its contribution beyond its duration', () => {
  assert.deepEqual(outcome([60, 60], [120, 60]), {seconds:120, minutes:2, status:'completed'});
});
