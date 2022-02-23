
var intervalText = document.querySelector('.countdown-display');
var counter = 4;

var theCountdown = function () {
  intervalText.textContent = counter;
  counter--;
  if (counter < 0) {
    intervalText.textContent = '~Earth Beeeeelooowww Ussss~';
    clearInterval(theCountdown);
  }
};

setInterval(theCountdown, 1000);
