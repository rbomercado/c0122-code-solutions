/* exported swapChars */

/*
make function that with 3 parameters
input of 3 parameters index index and a string
need to make a new string with first/second index swapped
need 2 variable that equal the indexes that are swapped
loop through the string  at each index
set conidions if i=firstindex and if i=second index and everything else
can run per usual
return the new string
*/

function swapChars(firstIndex, secondIndex, string) {
  var newString = '';
  var firstIndexSwap = string[firstIndex];
  var secondIndexSwap = string[secondIndex];
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString = newString + secondIndexSwap;
    } else if (i === secondIndex) {
      newString = newString + firstIndexSwap;
    } else {
      newString = newString + string[i];
    }
  }
  return newString;
}
