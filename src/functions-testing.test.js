const { capitalize } = require('./index.js');

test('capitalize fn', () => {
  expect(capitalize('word')).toBe('Word');
});

test('capitalize fn perro', () => {
  expect(capitalize('perro')).toBe('Perro');
});
