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
  // ASCII code for 'a', 'A', 'z', 'Z'
  // Used to determine if a character is uppercase or lowercase
  const aCode = 'a'.charCodeAt(0);
  const ACode = 'A'.charCodeAt(0);
  const zCode = 'z'.charCodeAt(0);
  const ZCode = 'Z'.charCodeAt(0);

  //mod function to handle negative shifts and shifts larger than 26
  //example: mod(-5, 26) = ((-5 % 26) + 26) = 21 % 26 = 21
  const mod = (n, m) => ((n % m) + m) % m;
  let ciphered = '';

  for (const char of str) {
    const charCode = char.charCodeAt(0);

    // Check if character is uppercase, lowercase or non-alphabetic
    if (charCode >= ACode && charCode <= ZCode) {
      //find shifted character code with wrap-around using mod function
      const shifted = ACode + mod(charCode - ACode + shift, 26);
      //convert back to character
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
