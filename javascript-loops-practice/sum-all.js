/* exported sumAll */
function sumAll(numbers) {
  var addAll = [];
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    addAll.push(sum += numbers[i]);
  }
  return sum;
}
