/* exported ransomCase */
function ransomCase(string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    var upper = string[i].toUpperCase();
    var lower = string[i].toLowerCase();
    if (i % 2 !== 0) {
      newString += upper;
    } else {
      newString += lower;
    }
  }
  return newString;
}
