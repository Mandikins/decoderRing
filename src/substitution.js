// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const alpha = "abcdefghijklmnopqrstuvwxyz"; //normal alphabet key

  function substitution(input, alphabet, encode = true) {
    let output = "";
    if (!alphabet) return false; // is false if not alphabet
    if (!(alphabet.length == 26)) return false; // checks for correct number of letters in alpha
    for (let character in alphabet) {
      let count = 0;
      for (let i = 0; i < 26; i++) {
        if (alphabet[character] == alphabet[i]) count++;
      }
      if (count > 1) return false; //if duplicate is found, return false
    }
    // CODE FOR ENCRYPTING
    if (encode) {
      let before = input.toLowerCase();
      for (let character in before) {
        if (!alphabet.includes(before[character])) output += before[character];
        //checks for spacing or symbols
        else {
          const alphaIndex = alpha.indexOf(before[character]);
          output += alphabet[alphaIndex];
        }
      }
      return output;
    }
    // CODE FOR DECRYPTING
    else {
      let before = input.toLowerCase();
      for (let character in before) {
        if (!alphabet.includes(before[character])) output += before[character];
        //checks for spacing or symbols
        else {
          const alphaIndex = alphabet.indexOf(before[character]);
          output += alpha[alphaIndex];
        }
      }
      return output;
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
