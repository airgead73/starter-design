const handleError = () => {

  function redirectTo404() {
    document.location.href = '/error'
  }

  redirectTo404();

}

const handleSuccess = ($message) => {
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