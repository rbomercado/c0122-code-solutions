/* exported countdown */
function countdown(number) {
  var down = [];
  var i = number;
  while (i >= 0) {
    down.push(i);
    i--;
  }
  return down;
}
