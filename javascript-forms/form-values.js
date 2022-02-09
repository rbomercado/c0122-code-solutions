
var contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  var name = contactForm.elements.name.value;
  var email = contactForm.elements.email.value;
  var message = contactForm.elements.message.value;
  var data = {
    name: name,
    email: email,
    message: message
  };
  console.log('data', data);
  contactForm.reset();
}
