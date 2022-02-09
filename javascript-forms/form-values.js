
var contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  var name = contactForm.name.value;
  var email = contactForm.email.value;
  var message = contactForm.message.value;
  var data = {
    name: name,
    email: email,
    message: message
  };
  console.log('data', data);
  contactForm.reset();
}
