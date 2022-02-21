/* exported truncate */
/*
function with 2 parameters
input will be a length and a string
output will be a shortned string with ellip addded to end
need a var for ellip
need a variable for the new string
if the string is qual to an empty string only return an empty string
everything else we want to cut the string at length para and add ellip to the end
*/

function truncate(length, string) {
  var ellip = '...';
  var emptyString = '';
  if (string === emptyString) {
    return ellip;
  } else {
    return string.slice(0, length) + ellip;
  }
}
