const handleError = () => {

  function redirectTo404() {
    document.location.href = '/error'
  }

  redirectTo404();

}

const handleSuccess = ($message) => {

  const successControl = document.getElementById('successControl');
  const successMessage = successControl.querySelector('.success__message');
  const successDismiss = successControl.querySelector('.success__dismiss');

  successDismiss.addEventListener('click', function() {
    successControl.classList.remove('show');
    successMessage.textContent = ' ';    
  })

  successMessage.textContent = $message;
  successControl.classList.add('show');

  console.log($message);

}

const handleBadRequest = ($errors) => {
  $errors.forEach($error => {
    const errorField = document.getElementById($error.param);
    errorField.setAttribute('aria-invalid', 'true');
  });
}

export {
  handleError,
  handleBadRequest,
  handleSuccess
}