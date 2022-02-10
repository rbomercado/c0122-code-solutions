/* exported lastChars */
function lastChars(length, string) {
  var lastStringLength = (string.length - length);
  if (length > string.length) {
    return string;
  } else {
    return string.slice(lastStringLength);
  }
}
