Math.max(1, 3, 5);
var maximumValue = (Math.max(1, 3, 5));
console.log('max value is:' + ' ' + maximumValue);

var heroes = ['batman', 'Dr Strange', 'thor', 'iron man'];

var randomNumber = Math.random();
randomNumber = (randomNumber *= heroes.length);

var randomIndex = Math.floor(randomNumber);
console.log('random index:' + ' ' + randomIndex);
var randomHero = heroes[randomIndex];
console.log('random hero:' + ' ' + randomHero);

var library = [
  {
    title: 'Haunting of Hill House',
    author: 'Shirley Jackson'
  },

  {
    title: 'Stores of your life',
    author: 'Ted Chiang'
  },

  {
    title: ' the night circus',
    author: 'erin morgenstern '
  }

];
var lastBook = library.pop();
console.log('last book:' + ' ', lastBook);

var firstBook = library.shift();
console.log('first book' + ' ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice([2]);
console.log(library);

var fullName = 'Bo Mercado';
var firstAndLastName = fullName.split(' ');
console.log(firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase(firstName);
console.log(sayMyName);
