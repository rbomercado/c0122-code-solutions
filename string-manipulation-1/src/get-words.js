/* exported getWords */
/*
make a function that splits a string based on spaces and commas
input is a string or empty string
output is a string
retrive the array of strings with oriignal string split at ''
if input is an empty string string need to return an empty array
if not split at ''

*/

function getWords(string) {
  var array = [];
  if (string !== '') {
    return string.split(' ');
  } else {
    return array;
  }
}
