/* exported ransomCase */

/*
//function with 1 parameter that will capitalize every other word
input a string
output new string (need a var for new string)
loop through each character 1 by 1
if the i is not divisible by 2 then uppercase add to new string
if the i is anything else then lowercase add to new string
return the new string
*/

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
