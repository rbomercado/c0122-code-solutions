/* exported isLowerCased */
/* make a function that gives true if all characters are lower case
input word
output variable with a boolean to indicate false(or true)
look at the characters of the word to see if they are all lower case
if they are all lower case=true if not = false
retireve true or false
*/
function isLowerCased(word) {
  var words = false;
  if (word === word.toLowerCase()) {
    words = true;
  }
  return words;
}
