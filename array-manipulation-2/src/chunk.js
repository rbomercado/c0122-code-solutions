/* exported chunk */

/*
function that returns arrays that are based on the size given as a
output is based on size parameter in on array and everything after the size will be in an another array
need a new array for new split arrays
go through the array given and split the array based on the size given
add the split array ino the new array
*/
function chunk(array, size) {
  var newArray = [];
  for (var i = 0; i < array.length; i += size) {
    var splitArray = array.slice(i, i + size);
    newArray.push(splitArray);
  }
  return newArray;
}
