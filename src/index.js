export function capitalize(string) {
  const firstLetter = string.slice(0, 1).toUpperCase();
  return firstLetter.concat('', string.slice(1));
}

export function reverseString(string) {
  return string.split('').reverse().join('');
}
