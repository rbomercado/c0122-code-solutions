/* exported capitalizeWords */

/*
function that returns a string with every word after a space upper case
seperate string by space
loop through the string
lowercase any charcter in the string that isnt after a space
uppercase any character after space
bring the string together
*/

function capitalizeWords(string) {
  var sentence = string.split(' ');
  for (let i = 0; i < sentence.length; i++) {
    var lowerLetter = sentence[i].toLowerCase();
    var upperLetter = sentence[i].charAt(0).toUpperCase();
    sentence[i] = upperLetter + lowerLetter.substring(1);
  }

  return sentence.join(' ');
}
