/* exported capitalize */

/*
function that makes a word with 1st letter=upper case every other letter=lower case
variable
input is a word
output new word
variable with assignment to method that select
variable with assignment to method that selects every letter after first
give modifed word with one variable to upper case 1st letter and another variable
to lower case rest of word
*/

function capitalize(word) {
  var upper = (word.charAt(0));
  var lower = (word.slice(1));
  return (upper.toUpperCase() + lower.toLowerCase());
}
