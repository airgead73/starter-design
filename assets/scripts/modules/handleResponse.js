import { openAlert } from './modals';

const handleError = () => {

  function redirectTo404() {
    document.location.href = '/error'
  }

  redirectTo404();

}

const handleSuccess = ($target, $message) => {

  $target.reset();
  openAlert('success', $message);

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