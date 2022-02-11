var container = document.querySelector('.tab-container');

var tabs = document.querySelectorAll('.tab');

var view = document.querySelectorAll('.view');

container.addEventListener('click', listener);

function listener(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < tabs.length; i++) {
      if (tabs[i] === event.target) {
        tabs[i].className = 'tab active';
      } else (tabs[i].className = 'tab');

      var dataView = event.target.getAttribute('data-view');
      for (var x = 0; x < view.length; x++) {
        if ((view[x].getAttribute('data-view')) === dataView) {
          view[x].className = 'view';
        } else {
          view[x].className = 'view hidden';
        }
      }
    }
  }
}
