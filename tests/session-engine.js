/* Shared domain logic: no DOM, audio or persistence dependencies. */
(function (root) {
  'use strict';
  class SessionClock {
    constructor(now = () => performance.now()) { this.now = now; this.activeMs = 0; this.startedAt = null; }
    start() { if (this.startedAt === null) this.startedAt = this.now(); }
    pause() { if (this.startedAt !== null) { this.activeMs += Math.max(0, this.now() - this.startedAt); this.startedAt = null; } }
    seconds() { return (this.activeMs + (this.startedAt === null ? 0 : Math.max(0, this.now() - this.startedAt))) / 1000; }
  }
  function outcome(durations, practiced) {
    const seconds = durations.reduce((sum, duration, index) => sum + Math.min(duration, Math.max(0, practiced[index] || 0)), 0);
    const completed = durations.every((duration, index) => (practiced[index] || 0) >= duration);
    return { seconds, minutes: Math.floor(seconds / 60), status: completed ? 'completed' : 'partial' };
  }
  root.PilatesEngine = { SessionClock, outcome };
})(globalThis);
