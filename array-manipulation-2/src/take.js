/* exported take */
/*
function that returns the first past of an array up to a number count
input is array and count
output is new array
need a place to hold values
loop through array
if the count is greater than the array length return empty array
all other values aftter numb count can be moved into new array
*/
function take(array, count) {
  var newArray = [];
  for (var i = 0; i < count; i++) {
    if (count > array.length) {
      newArray = [];
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
