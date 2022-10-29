const successContainer = document.getElementById('modalSuccess');
const successDismiss = successContainer.querySelector('.modal__dismiss');
const message = successContainer.querySelector('.modal__message');

const openSuccess = ($message) => {

  successContainer.classList.add('open');
  message.textContent = $message;

}

const initSuccess = () => {
  console.log('success init');
  successDismiss.addEventListener('click', function(e) {
    successContainer.classList.remove('open');
    message.textContent = ' ';
  });
}

export {
  openSuccess,
  initSuccess
}