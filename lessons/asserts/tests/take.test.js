import { strict as assert } from 'assert';
import getFunction from '../functions.js';

const take = getFunction();

assert.deepEqual(take(['one', 'two', 'three'], 2), ['one', 'two']);
assert.deepEqual(take(['one', 'two', 8], 9), ['one', 'two', 8]);
assert.deepEqual(take([1, 2]), [1]);
assert.deepEqual(take([]), []);
assert.deepEqual(take([4, 3], -1), []);
