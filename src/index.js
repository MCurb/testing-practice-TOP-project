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

  for (const letter of string.split('')) {
    let lowerCaseLetter = letter.toLowerCase();

    //If it's a non-alphabetical character push it without change
    if (!alphabet.includes(lowerCaseLetter)) {
      ciphered.push(letter);
      continue;
    }

    for (let i = 0; i < alphabet.length; i++) {
      if (alphabet[i] === lowerCaseLetter) {
        let finalLetter;

        //if it's out of alphabet bounds
        if (alphabet.length - 1 < i + shift) {
          finalLetter = alphabet[offFactor(alphabet, i + shift)];
        } else {
          finalLetter = alphabet[i + shift];
        }

        //Preserve character case
        isUpperCase(letter)
          ? ciphered.push(finalLetter.toUpperCase())
          : ciphered.push(finalLetter.toLowerCase());
      }
    }
  }

  return ciphered.join('');
}

//Calculate the index of the beginning of the alphabet
function offFactor(array, number) {
  let factor = number - array.length;
  return factor;
}

function isUpperCase(character) {
  return character === character.toUpperCase() ? true : false;
}

export function analyzeArray(array) {
  const obj = {};
  obj.min = Math.min(...array);
  obj.max = Math.max(...array);
  obj.average = array.reduce((acc, curr) => acc + curr) / array.length;
  obj.length = array.length;
  return obj;
}
