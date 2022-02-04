/* exported countdown */
function countdown(number) {
  var numbers = [];
  while (number <= 10 && number >= 0) {
    numbers.push(number);
    number--;
  }
  return numbers;
}
