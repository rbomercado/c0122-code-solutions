/* exported capitalizeWord */
function capitalizeWord(word) {
  var java = 'javascript';
  var javaScript = 'JavaScript';
  var upper = (word.charAt(0));
  var lower = (word.slice(1));
  if (java === word.toLowerCase()) {
    return javaScript;
  } else {
    return (upper.toUpperCase() + lower.toLowerCase());
  }
}
