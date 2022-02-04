/* exported filterOutStrings */
function filterOutStrings(values) {
  var newValues = [];
  for (var i = 0; i < values.length; i++) {
    var type = typeof values[i];
    if (type !== 'string') {
      newValues.push(values[i]);
    }
  }
  return newValues;
}
