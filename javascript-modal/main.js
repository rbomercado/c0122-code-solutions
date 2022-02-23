var activate = true;
var openModal = document.querySelector('.open-modal-button');
var modalShow = document.querySelector('.container');
var closeModal = document.querySelector('.no-button');

openModal.addEventListener('click', activateModal);
function activateModal(event) {
  if (activate === true) {
    openModal.className = 'open-modal-button hidden';
    modalShow.className = 'container show';
    activate = false;
  } else {
    activate = true;
  }
  return activateModal;
}

closeModal.addEventListener('click', deActivateModal);
function deActivateModal(event) {
  if (activate === true) {
    modalShow.className = 'container hidden';
    activate = false;
  } else {
    activate = true;
  }
  return deActivateModal;
}
