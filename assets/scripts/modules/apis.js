import { validateForm } from './formValidation';
import { apiFetch, previewFile } from './fetch';

const initFileInput = ($form) => {

  const fileInput = $form.querySelector('[type="file"]');

  if(!fileInput) return;

  fileInput.addEventListener('change', function(e) {

    previewFile(e.target);

  }); 

}

const initApiBtns = () => {

  const $apiBtnsArr = Array.from(document.querySelectorAll('[data-api]'));

  if(!$apiBtnsArr.length) return;

  $apiBtnsArr.forEach($btn => {

    $btn.addEventListener('click', function(e) {
      e.preventDefault();
      apiFetch(e.target);
    });

  });

}

const initForms = () => {

  const $formsArr = Array.from(document.querySelectorAll('.form'));

  if(!$formsArr.length) return;

  $formsArr.forEach($form => {

    initFileInput($form);

    $form.addEventListener('submit', function(e) {
      e.preventDefault();

      //const isValid = validateForm(e.target);

      //if(!isValid) return;     
       
      apiFetch(e.target);  

    });

  });
  
}

const initAPIs = () => {

  initForms();
  initApiBtns();

}

export default initAPIs;