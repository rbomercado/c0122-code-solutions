function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
  return handleClick;
}
var buttonClicked = document.querySelector('.click-button');
buttonClicked.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
  return handleMouseover;
}
var mouseHover = document.querySelector('.hover-button');
mouseHover.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
  return handleDoubleClick;
}
var twoClick = document.querySelector('.double-click-button');
twoClick.addEventListener('dblclick', handleDoubleClick);
