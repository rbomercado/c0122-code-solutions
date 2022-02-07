/* exported isVowel */
/*
make a function that checks if a charcter is a value or not
variable to indicate false
look at the character
if character is a vowel then true
retireve value as true or false
*/

function isVowel(char) {
  var vowel = false;
  for (var i = 0; i < char.length; i++) {
    // eslint-disable-next-line eqeqeq
    if (char === 'e' || char === 'A' || char === 'a' || char === 'E' ||
    char === 'I' || char === 'i' || char === 'o' || char === 'O' || char === 'u' || char === 'U') {
      vowel = true;
    }
  }
  return vowel;

}
