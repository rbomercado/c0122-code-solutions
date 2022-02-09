/* exported reverse */

/*
function that retrieves values in a reverse order
input will be an array
output will be a new array
look at each value in array one at a time starting from last value
in array

add values to new array
give final list in new array
*/

function reverse(array) {
  var backwardArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    backwardArray.push(array[i]);
  }
  return backwardArray;
}
