const formValidate = ($form) => {

  const fieldsArray = Array.from($form.querySelectorAll('.control__field'));

  fieldsArray.forEach(field => {
    checkField(field);
  });

  return checkAllFields($form);

}

const initFields = ($form) => {

  const fieldsArray = Array.from($form.querySelectorAll('.control__field'));
  fieldsArray.forEach(field => {
    field.addEventListener('blur', function(e) {
      checkField(e.target);
    })
  })

}

const checkAllFields = ($form) => {
  let isValid = false;
  const invalidFields = Array.from($form.querySelectorAll('.control__field[aria-invalid]'));

  if(!invalidFields.length) {
    isValid = true;
  }

  return isValid;


}

const checkField = ($field) => {

  const isRequired = $field.hasAttribute('required');
  const fieldValue = $field.value;
  if (isRequired && !fieldValue.length) {
    $field.setAttribute('aria-invalid', 'true');
  } else {
    $field.removeAttribute('aria-invalid');
  } 

}

export {
  formValidate,
  initFields
};