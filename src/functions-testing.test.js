import { capitalize, reverseString, calculator } from './index';

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
  const num1 = 2;
  const num2 = 3;
  for (const operation in calculator) {
    switch (operation) {
      case 'add':
        expect(calculator[operation](num1, num2)).toBe(5);
        break;
      case 'subtract':
        expect(calculator[operation](num1, num2)).toBe(-1);
        break;
      case 'multiply':
        expect(calculator[operation](num1, num2)).toBe(6);
        break;
      case 'divide':
        expect(calculator[operation](num1, num2)).toBeCloseTo(0.666);
        break;
      default:
        break;
    }
  }
});
