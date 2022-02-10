/* exported capitalizeWords */
function capitalizeWords(string) {
  var sentence = string.split(' ');
  for (let i = 0; i < sentence.length; i++) {
    var lowerLetter = sentence[i].toLowerCase();
    var upperLetter = sentence[i].charAt(0).toUpperCase();
    sentence[i] = upperLetter + lowerLetter.substring(1);
  }

  return sentence.join(' ');
}
