import apiFetch from './fetch';
import { validateForm } from './formValidation';

const initForms = () => {

  const $formsArr = Array.from(document.querySelectorAll('.form'));

  if(!$formsArr.length) return;

  $formsArr.forEach($form => {
    $form.addEventListener('submit', function(e) {
      e.preventDefault();

      const isValid = validateForm(e.target);

      if(isValid) return apiFetch(e.target);

      return;

    });
  });
  
}

export default initForms;