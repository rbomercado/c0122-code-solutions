/* exported oddOrEven */
function oddOrEven(numbers) {
  var number = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      number.push('even');
    } else {
      number.push('odd');
    }
  }
  return number;
}

// if a number of an array is divisible by
// 2=even if its isnt
