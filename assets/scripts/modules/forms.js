import apiFetch from './fetch';
import { validateForm, initFields } from './formValidation';

const initForms = ($formsArr) => {

  $formsArr.forEach($form => {
    $form.addEventListener('submit', function(e) {
      e.preventDefault();
      initFields(e.target);

      const isValid = validateForm(e.target);

      if(isValid) return apiFetch(e.target);

      return;

    });
  });
  
}

export default initForms;