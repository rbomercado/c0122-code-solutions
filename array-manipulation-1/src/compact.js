/* exported compact */

/* function to retrieve a list of words
input array
output new array  with false values ommited
 look at each value one at a time
variable assigned to check if a value is true/falsy
 if value is true add value to new array
 give back new list of values
*/

function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    var falseValue = Boolean(array[i]);
    if (falseValue === true) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
