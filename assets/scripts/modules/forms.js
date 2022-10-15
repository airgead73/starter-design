import apiFetch from './fetch';
import { formValidate, initFields } from './formValidate';

const initForms = ($formsArr) => {

  $formsArr.forEach($form => {
    $form.addEventListener('submit', function(e) {
      e.preventDefault();
      initFields(e.target);
      const isValid = formValidate(e.target);
      if(isValid) {
        apiFetch(e.target);
      } else {
        return;
      }
    });
  });
  
}

export default initForms;