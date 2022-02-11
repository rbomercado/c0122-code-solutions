/* exported firstChars */
/*
function that splices a string at a particular length and returns the string
input length and a string
output string that is only as long as length
if length is greater than string length return string
if not return the string starting at index 0 to index determine by length
*/

function firstChars(length, string) {
  var lastStringLength = (length);
  if (length > string.length) {
    return string;
  } else {
    return string.slice(0, lastStringLength);
  }
}
