/* exported findIndex */
function findIndex(array, value) {
  var number = -1;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      number = (i);
      return number;
    }
  }
  return number;
}
