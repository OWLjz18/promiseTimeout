import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { performance } from 'node:perf_hooks';
import promiseTimeout from '../src/index.js';

describe('promiseTimeout test', () => {
  it('Yes it takes the time that is established.', async () => {
    const delay = 1000;
    const maxDelay = delay + 50;

    const startTime = performance.now();
    await promiseTimeout(() => {}, delay);
    const endTime = performance.now();
    const timeElapsed = endTime - startTime;

    assert.ok(timeElapsed >= delay && timeElapsed < maxDelay);
  });

  it('If no parameter is passed, it throws an error.', async () => {
    const result = promiseTimeout();

    await assert.rejects(result);
  });

  it('If the callback parameter is not of type function, it throws an error.', async () => {
    const result = promiseTimeout(null);

    await assert.rejects(result);
  });

  it('If the "error" parameter is set to "true", it should throw an error.', async () => {
    const result = promiseTimeout(() => '', 0, { error: true });

    await assert.rejects(result);
  });
});
