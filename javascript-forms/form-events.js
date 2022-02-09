function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur eveny fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('value of', event.target.name + ' ' + event.target.value);
}

var names = document.querySelector('[name="name"]');
var email = document.querySelector('[name="email"]');
var message = document.querySelector('[name="message"]');

names.addEventListener('focus', handleFocus);
names.addEventListener('blur', handleBlur);
names.addEventListener('input', handleInput);

email.addEventListener('focus', handleFocus);
email.addEventListener('blur', handleBlur);
email.addEventListener('input', handleInput);

message.addEventListener('focus', handleFocus);
message.addEventListener('blur', handleBlur);
message.addEventListener('input', handleInput);
