/* exported firstChars */
function firstChars(length, string) {
  var lastStringLength = (length);
  if (length > string.length) {
    return string;
  } else {
    return string.slice(0, lastStringLength);
  }
}
