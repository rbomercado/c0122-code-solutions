/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
            princess
 */
function isUnderFive(number) {
  if (number < 5) {
    return (true);
  } else {
    return (false);
  }
}

function isEven(number) {
  if (number % 2) {
    return (true);
  } else {
    return (false);
  }
}

function startsWithJ(string) {
  if (string[0] === 'j') {
    return (true);
  } else {
    return (false);
  }
}

var princess = {
  name: 'Princess Peach',
  age: 39
};

function isOldEnoughToDrink(person) {
  if (person.age > 21) {
    return (true);
  } else {
    return (false);
  }
}

function isOldEnoughToDrive(person) {
  if (person.age > 16) {
    return (true);
  } else {
    return (false);
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  if (person.age >= 0) {
    return (false);
  } else {
    return (false);
  }
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return ('neutral');
  } else if (pH <= 7) {
    return ('acid');
  } else if (pH > 7 && pH < 14) {
    return ('base');
  } else { return ('invalid pH level'); }
}

function introduceWarnerBro(name) {
  if (name === 'yakko') {
    return (' Were the warner brothers!');
  } else if (name === 'wakko') {
    return ('were the warner brothers!');
  } else if (name === 'dot') {
    return ('Im cute');
  } else { return ('Goodnight everybody'); }
}
