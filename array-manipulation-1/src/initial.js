/* exported initial */
/*
function that retrieves values minus the last value
input will be an array
output will be a new array
look at each value in array one at a time minus the last value
add values to new array
give final list in new array
*/

function initial(array) {
  var noLastElement = [];
  for (var i = 0; i < array.length - 1; i++) {
    noLastElement.push(array[i]);
  }
  return noLastElement;
}
