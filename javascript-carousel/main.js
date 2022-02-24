var backArrow = document.querySelector('.back');
var nextArrow = document.querySelector('.next');
// var circlesI = document.querySelector('.circles');
var allImg = document.querySelectorAll('img');
// var allcircles = document.querySelector('.round');
var counter = 0;
backArrow.addEventListener('click', moveImgBack);
nextArrow.addEventListener('click', moveImgNext);
// circlesI.addEventListener('click', directImg);

function moveImg(number) {
  if (number > allImg.length) {
    number = 0;
  } else if (number < 0) {
    number = allImg.length - 1;
  }
  for (var i = 0; i < allImg.length; i++) {
    allImg[i].className = 'view hidden';
    // allcircles[i].className = 'view hidden';
    allImg[number].className = 'view';
  // allcircles[number].className = 'view';
  }
}

function moveImgBack() {
  counter--;
  moveImg(counter);
}

function moveImgNext() {
  counter++;
  moveImg(counter);
}

// function directImg(event) {
//  if (event.target.nodeName === 'I') {
//    var value = event.target.getAttribute('value');
//    moveImg(value);
//  }
// }
// console.log(allImg);
