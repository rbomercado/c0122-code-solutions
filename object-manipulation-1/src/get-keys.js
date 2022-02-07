/* exported getKeys */
/*
function that retrieves an array of an objects property keys
input will be an object
output will be a new array with objects property keys
get each property key  one at a time
in array
add values to new array
give final values in new array
*/

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}
