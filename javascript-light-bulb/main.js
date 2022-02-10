var on = true;
var circleOnOff = document.querySelector('.circle-button');
var bodyOnOff = document.querySelector('.container');

circleOnOff.addEventListener('click', circleDrop);

function circleDrop(event) {
  if (on === true) {
    circleOnOff.className = 'circle-button dark';
    bodyOnOff.className = 'container dark';
    on = false;
  } else {
    circleOnOff.className = 'circle-button light';
    bodyOnOff.className = 'container light';
    on = true;
  }
  return circleDrop;
}
