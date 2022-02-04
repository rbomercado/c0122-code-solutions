/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
            i
 */

function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  while (currentNumber <= 10) {
    console.log(currentNumber);
    numbers.push(currentNumber);
    currentNumber += 1;
  }
  return numbers;
}
console.log('getNumbersToTen:', getNumbersToTen());

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
console.log('getEvenNumbersToTen', getEvenNumbersToTwenty());

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count <= times) {
    repeated += word;
    count += 1;
  }
  return repeated;
}
console.log('repeatWord', repeatWord('Bo', 5));

function logEachCharacter(string) {
  var i = 0;
  for (i = 0; i <= string.length - 1; i++) {
    console.log(string[i]);
  }
}
console.log('logEachCharacter', logEachCharacter('Bo Mercado'));

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] *= 2);
  }
  return doubled;
}
console.log('doubleAll', doubleAll([1, 4, 6]));

function getKeys(object) {
  var keys = [];

  for (var key in object) {
    keys.push(key);
  }
  return keys;
}
var myName = { firstName: 'Richard', lastName: 'Mercado' };
console.log('getKeys', getKeys(myName));

function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}
console.log('getValues', getValues(myName));
