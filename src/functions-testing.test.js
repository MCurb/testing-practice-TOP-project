import { capitalize } from './index';

test('capitalize word', () => {
  expect(capitalize('word')).toBe('Word');
});

test('capitalize house', () => {
  expect(capitalize('house')).toBe('House');
});

test('capitalize long sentence', () => {
  expect(capitalize('this is a long string')).toBe('This is a long string');
});
