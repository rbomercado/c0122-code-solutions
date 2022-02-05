/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var suffixArray = [];
  for (var i = 0; i < words.length; i++) {
    suffixArray[i] = (words[i] += suffix);
  }
  return suffixArray;
}
