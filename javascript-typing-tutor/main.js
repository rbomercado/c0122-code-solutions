
var spans = document.querySelectorAll('span');
document.addEventListener('keydown', keyPushed);
var i = 0;

function keyPushed(event) {
  if (event.key === spans[i].textContent) {
    spans[i].className = 'correct';
    spans[i + 1].className = 'underline';
    i++;
  } else {
    spans[i].className = 'incorrect underline-red';
  }
}
