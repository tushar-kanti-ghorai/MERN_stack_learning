/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  var count = 0;
  const lowerStr = str.toLowerCase();  
  const ch = lowerStr.split("");  

  for (let i = 0; i < ch.length; i++) {
      if (ch[i] == 'a' || ch[i] == 'e' || ch[i] == 'i' || ch[i] == 'o' || ch[i] == 'u') {
          count++;
      }
  }

  return count;  // Return the total count of vowels
}

module.exports = countVowels;