// ========================
// PUBLIC API (exports)
// ========================

//Capitalize
export function capitalize(string) {
  if (!string) return '';
  return string[0].toUpperCase() + string.slice(1);
}

//Reverse String
export function reverseString(string) {
  if (!string) return '';
  return Array.from(string).reverse().join('');
}

//Calculator
export const calculator = {
  add: (num1, num2) => num1 + num2,
  subtract: (num1, num2) => num1 - num2,
  multiply: (num1, num2) => num1 * num2,
  divide: (num1, num2) => num1 / num2,
};

//Analyze Array
export function analyzeArray(array) {
  const obj = {};
  obj.min = Math.min(...array);
  obj.max = Math.max(...array);
  obj.average = array.reduce((acc, curr) => acc + curr) / array.length;
  obj.length = array.length;
  return obj;
}

// Caesar Cipher

export function caesarCipher(str, shift) {
  //Save the codes of uppercase A and Z, and lowercase a and z
  //I need them to find out if a character is upper or lower case

  const aCode = 'a'.charCodeAt(0);
  const ACode = 'A'.charCodeAt(0);
  const zCode = 'z'.charCodeAt(0);
  const ZCode = 'Z'.charCodeAt(0);

  const mod = (n, m) => ((n % m) + m) % m;
  let ciphered = '';

  //loop over each character of str
  for (const char of str) {
    //generate the ASCII code of the current character
    const charCode = char.charCodeAt(0);
    //if the code number is between the code of A and Z, then it's uppercase
    if (charCode >= ACode && charCode <= ZCode) {
      const shifted = ACode + mod(charCode - ACode + shift, 26);
      ciphered += String.fromCharCode(shifted);
    } else if (charCode >= aCode && charCode <= zCode) {
      const shifted = aCode + mod(charCode - aCode + shift, 26);
      ciphered += String.fromCharCode(shifted);
    } else {
      ciphered += char;
    }
  }
  return ciphered;
}
