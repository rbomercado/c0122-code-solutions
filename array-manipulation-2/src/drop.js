/* exported drop */
/*
fucnction that returns first part of an array after a number count
input array a number count
output new array
need new array to hold values
loop through array
*/
function drop(array, count) {
  var newArray = [];
  for (var i = count; i < array.length; i++) {
    if (count > array.length) {
      newArray = [];
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
