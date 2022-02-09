/* exported isVowel */
/*
make a function that checks if a charcter is a value or not
variable to indicate false
look at the character
if character is a vowel then true
retireve value as true or false
*/

function isVowel(char) {
  var lowerChar = char.toLowerCase();
  var vowel = false;
  if (lowerChar === 'e' || lowerChar === 'a' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u') {
    vowel = true;
  }
  return vowel;
}
