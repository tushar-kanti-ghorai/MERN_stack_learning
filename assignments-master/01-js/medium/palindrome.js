/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const lowerString = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  console.log("Processed string:", lowerString);

  for (let i = 0; i < lowerString.length / 2; i++) {
      if (lowerString[i] !== lowerString[lowerString.length - 1 - i]) {
          return false;
      }
  }

  return true;
}

module.exports = isPalindrome;

