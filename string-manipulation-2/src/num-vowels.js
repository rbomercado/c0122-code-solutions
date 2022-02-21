/* exported numVowels */

/*
function that counts the vowels in a string
input a string
output a nunmber that represents num of vowels
var to keep track of num of vowels
loop through each character in a string
if char is a vowel increment var by one
*/

function numVowels(string) {
  var counter = 0;
  for (var i = 0; i < string.length; i++) {
    var lower = string[i].toLowerCase();
    if (lower === 'e' || lower === 'a' || lower === 'i' || lower === 'o' || lower === 'u') {
      counter++;
    }
  }
  return counter;
}
