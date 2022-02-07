/* exported tail */
function tail(array) {
  var twoTails = [];
  for (var i = 1; i < array.length; i++) {
    twoTails.push(array[i]);
  }
  return twoTails;
}
