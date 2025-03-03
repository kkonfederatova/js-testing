import getFunction from '../functions.js';

const without = getFunction();

test('without', () => {
    expect(without([], 3)).toEqual([]);
    expect(without([3, 8, 9, 8, 10], 8, 10)).toEqual([3, 9]);
  });
  