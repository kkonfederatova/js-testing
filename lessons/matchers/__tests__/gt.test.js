import getFunction from '../functions.js';

const gt = getFunction();

test('gt', () => {
  expect(gt(0, 0)).toBe(false);
  expect(gt(1, 0)).toBe(true);
  expect(gt(-3, 1)).toBe(false);
  expect(gt()).toBe(false);
});
  