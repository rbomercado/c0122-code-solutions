var userList = document.querySelector('#user-list');
var newXhr = new XMLHttpRequest();
newXhr.responseType = 'json';
newXhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

newXhr.addEventListener('load', function () {
  console.log(newXhr.status);
  console.log(newXhr.response);
  for (var i = 0; i < newXhr.response.length; i++) {
    var li = document.createElement('li');
    li.textContent = newXhr.response[i].name;
    userList.appendChild(li);
  }
});
newXhr.send();
