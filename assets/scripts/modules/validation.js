const initFields = ($form) => {

  const fieldsArray = Array.from($form.querySelectorAll('.control__field'));
  fieldsArray.forEach(field => {
    field.addEventListener('blur', function(e) {
      checkField(e.target);
    })
  })

}

const formIsValid = ($formId) => {

  let isValid = false;
  const form = document.getElementById($formId);
  const invalidFields = Array.from(form.querySelectorAll('[aria-invalid]'));
  if(invalidFields.length) {
    isValid = false;
  }

  return isValid;

}

const toggleBtn = ($formId) => {
  
  const btn = document.querySelector('button[type="submit"]');
  const turnOffBtn = formIsValid($formId);

  if(turnOffBtn) {
    btn.setAttribute('disabled', 'true');
  } else {
    btn.removeAttribute('disabled');
  }

}

const checkField = ($field) => {
  const isRequired = $field.hasAttribute('required');
  const fieldValue = $field.value;
  const fieldName = $field.getAttribute('name');
  const formId = $field.getAttribute('form');
  if (isRequired && !fieldValue.length) {
    console.log(`add value to ${fieldName}`);
    $field.setAttribute('aria-invalid', 'true');
  } else {
    $field.removeAttribute('aria-invalid');
  }

  toggleBtn(formId);

}

export {
  initFields
}