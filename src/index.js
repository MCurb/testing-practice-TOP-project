export function capitalize(string) {
  const firstLetter = string.slice(0, 1).toUpperCase();
  return firstLetter.concat('', string.slice(1));
}

export function reverseString(string) {
  return string.split('').reverse().join('');
}

export const calculator = {
  add: (num1, num2) => {
    return num1 + num2;
  },
  subtract: (num1, num2) => {
    return num1 - num2;
  },
  multiply: (num1, num2) => {
    return num1 * num2;
  },
  divide: (num1, num2) => {
    return num1 / num2;
  },
};
