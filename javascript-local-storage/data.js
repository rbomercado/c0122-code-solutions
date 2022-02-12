/* exported todos */
var todos = [];
var previousTodosJSON = localStorage.getItem('javascript-local-storage');

window.addEventListener('beforeunload', beforeUnload);
function beforeUnload(event) {
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
  if (previousTodosJSON !== null) {
    todos = JSON.parse(previousTodosJSON);
  }
}
