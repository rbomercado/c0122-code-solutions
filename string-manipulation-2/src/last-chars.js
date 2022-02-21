/* exported lastChars */
/*
fucntion that returns the remaining word after a certain length
input length and string
output string sliced at a particular length
if the length is greater than the string length return the string
if not slice the string at length
*/

function lastChars(length, string) {
  var lastStringLength = (string.length - length);
  if (length > string.length) {
    return string;
  } else {
    return string.slice(lastStringLength);
  }
}
