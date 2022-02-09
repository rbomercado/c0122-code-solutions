/* exported isUpperCased */
/*
make a function that gives true if all characters are upper case and all other
variations false
variable with a boolean to indicate false
look at the characters of the word to see if they are all upper case
if they are all upper case=true if not=false
retireve true or false
*/
function isUpperCased(word) {
  var words = false;
  if (word === word.toUpperCase()) {
    words = true;
  }
  return words;
}
