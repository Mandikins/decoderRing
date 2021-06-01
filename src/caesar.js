// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alpha = "abcdefghijklmnopqrstuvwxyz";

  function caesar(input, shift, encode = true) {
    if (shift == 0 || shift < -25 || shift > 25) return false; //checking if entry is valid
    // CODE FOR ENCODING
    if (encode) {
      let before = input.toLowerCase(); //capitilaization is ignored
      let output = "";
      for (let char in before) {
        if (!alpha.includes(before[char])) output += before[char];
        // Checking for any non alpha characters
        else {
          const lettersIndex = alpha.indexOf(before[char]);
          if (alpha[lettersIndex + shift])
            output += alpha[lettersIndex + shift]; //shifting up in range
          if (lettersIndex + shift < 0)
            output += alpha[lettersIndex + shift + 26]; //shifting up out of range
          if (lettersIndex + shift > 25)
            output += alpha[lettersIndex + shift - 26]; //shifting up out of range
        }
      }
      return output;
    }
    // CODE FOR DECRYPTING
    else {
      let before = input.toLowerCase(); //capitilaization is ignored
      let output = "";
      for (let char in before) {
        if (!alpha.includes(before[char])) output += before[char];
        // Checking for any non alpha chars
        else {
          const lettersIndex = alpha.indexOf(before[char]); //checking index of char
          if (alpha[lettersIndex - shift])
            output += alpha[lettersIndex - shift]; //shifting down in range
          if (lettersIndex - shift < 0)
            output += alpha[lettersIndex - shift + 26]; //shifting down out of range
          if (lettersIndex - shift > 25)
            output += alpha[lettersIndex - shift - 26]; //shifting down out of range
        }
      }
      return output;
    }
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
