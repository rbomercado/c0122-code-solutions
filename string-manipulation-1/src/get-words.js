/* exported getWords */
/*
make a function that splits a string based on spaces and commas
input is a string
output and retrive the array of strings with oriignal string split

*/
function getWords(string) {
  return string.split(/[' ','']/);
}
