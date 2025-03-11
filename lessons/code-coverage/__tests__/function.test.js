import getImplementation from '../implementations/index.js';

const getDaysInMonth = getImplementation();

test('testing function getDaysInMonth()', () => {
  expect(getDaysInMonth(4, 2023)).toBe(30);
  expect(getDaysInMonth(13, 2022)).toBeNull();
  expect(getDaysInMonth(2, 2023)).toBe(28);
  expect(getDaysInMonth(2, 2020)).toBe(29);
  expect(getDaysInMonth(5, 2023)).toBe(31);
  expect(getDaysInMonth(9, 2023)).toBe(30);
});