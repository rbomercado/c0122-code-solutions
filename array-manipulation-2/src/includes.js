/* exported includes */
/*
function that returns true or false whether or not a value is in an array
input array and value
output true/false
loop through array
if array contains the value return true
default will be false
*/
function includes(array, value) {
  var matches = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      matches = true;
    }
  }
  return matches;
}
