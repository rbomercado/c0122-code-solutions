
var intervalText = document.querySelector('.countdown-display');
var counter = 4;

var theCountdown = function () {
  document.querySelector('.countdown-display').textContent = counter;
  counter--;
  if (counter < 0) {
    intervalText.textContent = '~Earth Beeeeelooowww Ussss~';
    clearInterval(theCountdown);
  }
};

setInterval(theCountdown, 1000);
