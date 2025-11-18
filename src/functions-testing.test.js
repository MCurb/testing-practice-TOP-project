import { capitalize } from './index';

test('capitalize fn', () => {
  expect(capitalize('word')).toBe('Word');
});

test('capitalize fn perro', () => {
  expect(capitalize('perro')).toBe('Perro');
});
