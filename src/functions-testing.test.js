import { capitalize, reverseString, calculator, caesarCipher } from './index';

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

//Calculator:

test('test each calculator operation', () => {
  const num1 = 25;
  const num2 = 321;
  for (const operation in calculator) {
    switch (operation) {
      case 'add':
        expect(calculator[operation](num1, num2)).toBe(num1 + num2);
        break;
      case 'subtract':
        expect(calculator[operation](num1, num2)).toBe(num1 - num2);
        break;
      case 'multiply':
        expect(calculator[operation](num1, num2)).toBe(num1 * num2);
        break;
      case 'divide':
        expect(calculator[operation](num1, num2)).toBe(num1 / num2);
        break;
      default:
        break;
    }
  }
});

//Caesar Cipher

test('test ciphering works', () => {
  expect(caesarCipher('hello', 3)).toBe('khoor');
});

test('test wrapping', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('test case perseveration', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('test punctuation', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
