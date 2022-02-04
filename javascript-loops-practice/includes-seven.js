/* exported includesSeven */
function includesSeven(array) {
  var sevenArray = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      sevenArray = true;
    }
  }
  return sevenArray;
}
