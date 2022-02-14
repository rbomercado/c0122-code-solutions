/* exported takeRight */
/*
function that returns the last part of an array based on a number count
input array and count
output new array with only part of original array based on count
need new array to hold values
loop through array starting at the end of the array
if the count received exceeds the length of the array return all values in the oriignal array
all other values can go in new array

*/
function takeRight(array, count) {
  var newArray = [];
  for (var i = array.length - count; i < array.length; i++) {
    if (count > array.length) {
      newArray = array;
    } else { newArray.push(array[i]); }
  }
  return newArray;
}
