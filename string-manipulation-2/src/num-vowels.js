/* exported numVowels */
function numVowels(string) {
  var counter = 0;
  for (var i = 0; i < string.length; i++) {
    var lower = string[i].toLowerCase();
    if (lower === 'e' || lower === 'a' || lower === 'i' || lower === 'o' || lower === 'u') {
      counter++;
    }
  }
  return counter;
}
