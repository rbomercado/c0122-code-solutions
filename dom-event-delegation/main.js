var list = document.querySelector('.task-list');
list.addEventListener('click', theList);

function theList(event) {
  console.log('event.target:', event.target);
  console.log('event.taget.tagName:', event.target.tagName);

  if (event.target && event.target.nodeName === 'BUTTON') {
    var closestLis = event.target.closest('.task-list-item');
    console.log('closest task list item:', closestLis);
    closestLis.remove();
  }
}
