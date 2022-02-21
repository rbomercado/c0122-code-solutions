/* exported capitalizeWord */

/*
function that upper cases a word
input word
output word with 1st character upper cased
if JavaScript typed in any way return JavaScript
anything else upper case 1st character and add rest of the charcters of the
word lowercased
*/
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
