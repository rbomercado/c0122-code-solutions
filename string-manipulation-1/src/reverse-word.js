/* exported reverseWord */
/*
make a function that reverses a word
input word
output is a string
look at the characters of the word in a reverse order starting with the last character
retireve new string */
function reverseWord(word) {
  var newString = '';
  for (var i = word.length - 1; i >= 0; i--) {
    newString += word[i];
  }
  return newString;

}
