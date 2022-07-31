import apiFetch from './fetch';

const initForms = ($formsArr) => {

  $formsArr.forEach($form => {
    $form.addEventListener('submit', function(e) {
      e.preventDefault();
      apiFetch(e.target);
    });
  });
  
}

export default initForms;