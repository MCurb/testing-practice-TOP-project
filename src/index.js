export function capitalize(string) {
  const firstLetter = string.slice(0, 1).toUpperCase();
  return firstLetter.concat('', string.slice(1));
}

export function reverseString(string) {
  return string.split('').reverse().join('');
}

export const calculator = {
  add: (num1, num2) => num1 + num2,
  subtract: (num1, num2) => num1 - num2,
  multiply: (num1, num2) => num1 * num2,
  divide: (num1, num2) => num1 / num2,
};

export function caesarCipher(string, shift) {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  let ciphered = [];

  string.split('').forEach((letter) => {
    let lowerCaseLetter = letter.toLowerCase();
    if (alphabet.includes(lowerCaseLetter)) {
      for (let i = 0; i < alphabet.length; i++) {
        if (alphabet[i] === lowerCaseLetter) {
          let finalLetter;
          if (alphabet.length - 1 < i + shift) {
            finalLetter = alphabet[offFactor(alphabet, i + shift)];
          } else {
            finalLetter = alphabet[i + shift];
          }
          isUpperCase(letter)
            ? ciphered.push(finalLetter.toUpperCase())
            : ciphered.push(finalLetter.toLowerCase());
        }
      }
    } else {
      ciphered.push(letter);
    }
  });

  return ciphered.join('');
}

function offFactor(array, number) {
  let factor = number - array.length;
  return factor;
}

function isUpperCase(character) {
  return character === character.toUpperCase() ? true : false;
}
