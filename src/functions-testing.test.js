import {
  capitalize,
  reverseString,
  calculator,
  analyzeArray,
  caesarCipher,
} from './index';

//Capitalize:

describe('Capitalize Tests', () => {
  describe.each([
    ['computer', 'Computer'],
    ['house', 'House'],
    ['long string', 'Long string'],
  ])('capitalize different strings', (string, expected) => {
    test(`capitalize ${string}`, () => {
      expect(capitalize(string)).toBe(expected);
    });
  });

  test('does not capitalize empty string', () => {
    expect(capitalize('')).toBe('');
  });

  test('throws on non-string', () => {
    expect(() => capitalize(123)).toThrow(TypeError);
  });
});

//Reverse String:

describe.each([
  ['Marcos', 'socraM', 'string'],
  ['this is a long string', 'gnirts gnol a si siht', 'long string'],
  ['', '', 'empty string'],
  ['a💖b', 'b💖a', 'string with emojies and surrogate pairs'],
])('Reverse String Tests', (string, expected, stringType) => {
  test(`reverse ${stringType}`, () => {
    expect(reverseString(string)).toBe(expected);
  });
});

//Calculator:
const num1 = 25;
const num2 = 321;
describe.each([
  [num1, num2, 'add', num1 + num2],
  [num1, num2, 'subtract', num1 - num2],
  [num1, num2, 'multiply', num1 * num2],
  [num1, num2, 'divide', num1 / num2],
])('Calculator Tests', (num1, num2, operation, expected) => {
  test(operation, () => {
    expect(calculator[operation](num1, num2)).toBe(expected);
  });
});

//Analyze Array

test('test object analysis', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

//Caesar Cipher

describe.each([
  ['hello', 3, 'khoor', 'cipher word'],
  ['xyz', 3, 'abc', 'wrapping'],
  ['HeLLo', 3, 'KhOOr', 'case perseveration'],
  ['Hello, World!', 3, 'Khoor, Zruog!', 'puntuation'],
])('Caesar Cipher Tests', (string, shift, expected, description) => {
  test(description, () => {
    expect(caesarCipher(string, shift)).toBe(expected);
  });
});
