import { capitalize, reverseString } from './index';

//Capitalize:

test('capitalize word', () => {
  expect(capitalize('word')).toBe('Word');
});

test('capitalize house', () => {
  expect(capitalize('house')).toBe('House');
});

test('capitalize long sentence', () => {
  expect(capitalize('this is a long string')).toBe('This is a long string');
});

//Reverse String:

test('reverse string 1', () => {
  expect(reverseString('Marcos')).toBe('socraM');
});

test('reverse long string', () => {
  expect(reverseString('this is a long string')).toBe('gnirts gnol a si siht');
});
