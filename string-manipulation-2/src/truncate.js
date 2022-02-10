/* exported truncate */
function truncate(length, string) {
  var ellip = '...';
  var emptyString = '';
  if (string === emptyString) {
    return ellip;
  } else {
    return string.slice(0, length) + ellip;
  }
}
