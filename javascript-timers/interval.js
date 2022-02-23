
var intervalText = document.querySelector('.countdown-display');
var counter = 4;
var intervalId = setInterval(setCountdown, 1000);

function setCountdown() {
  intervalText.textContent = counter;
  counter--;
  if (counter < 0) {
    intervalText.textContent = '~Earth Beeeeelooowww Ussss~';
    clearInterval(intervalId);
  }
}
