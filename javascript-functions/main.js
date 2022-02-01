function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

var fiveMin = convertMinutesToSeconds(5);
console.log('convertMinutesToSeconds function:', fiveMin);

function greet(name) {
  return 'Hey,' + ' ' + name;
}
var hisName = greet('Beavis');
console.log('greet function:' + ' ' + hisName);

function getArea(width, height) {
  return width * height;
}

var myArea = getArea(17, 42);
console.log('getArea function:' + ' ' + myArea);

function getFirstName(person) {
  return person.firstName;
}

var myName = {
  firstName: 'Lelouche',
  lastNmae: 'Lamerouge'
};

var myFirstName = getFirstName(myName);
console.log('getFirstName function:' + ' ' + myFirstName);

function getLastElement(array) {
  return array[array.length - 1];
}
var jedis = ['yoda', 'luke', 'rey'];

var theLastJedis = getLastElement(jedis);

console.log('getLastElementfunction:' + ' ' + theLastJedis);
