var student = {
  firstName: 'Bo',
  lastName: 'Mercado',
  age: '27'
};
var fullName = (student.firstName + ' ' + student.lastName);
student.livesInIrvine = false;
student.previousOccupation = 'lab tech';

var vehicle = {
  make: 'Kia',
  model: 'Niro',
  year: '2019'
};

vehicle['color'] = 'silver';
vehicle['isConvertable'] = false;

var pet = {
  name: 'Bailey',
  type: 'dog'
};
delete pet.name;
delete pet.type;

console.log('value of fullName:' + ' ' + fullName);
console.log('value of student.livesInIrvine:' + ' ' + student.livesInIrvine);
console.log('value of student.previousOccupation:' + student.previousOccupation);
console.log(' value of student:', student);

console.log('value of vehicle color:', vehicle.color);
console.log('value of vehicle isConvertable:', vehicle.isConvertable);
console.log(' value of vehicle:', vehicle);

console.log(' value of pet:', pet);
