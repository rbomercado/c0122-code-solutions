/* eslint-disable quotes */

var library = [
  {
    title: 'The Giving Tree',
    isbn: 6028451,
    author: 'Shel Silverstein'
  },
  {
    title: 'Brown Bear Brown Bear, What do you see?',
    isbn: 805047905,
    author: 'Bill Martin Jr'
  },
  {
    title: 'The Very Hungry Caterpillar',
    isbn: 399226907,
    author: 'Eric Carle'
  }

];
console.log('My library', library);
console.log('Librarys is a type of:', typeof library);

console.log('JSON Library', JSON.stringify(library));
console.log('JSON Library is type of', typeof (JSON.stringify(library)));

var student = '{ "studentID": 12345, "name": "Bo Mercado" }';
console.log('student JSON format', student);
console.log('JSON String', student);
console.log('JSON String is a type of ', typeof (student));

var studentJSON = JSON.parse(student);
console.log('JSON parce', studentJSON);
console.log('JSON parce is a type of', typeof (studentJSON));
