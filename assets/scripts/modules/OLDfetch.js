const getAttrs = ($target) => {

  const attrs = new Object;

  const attrNames = $target.getAttributeNames();

  attrNames.forEach(name => {    
    attrs[name] = $target.getAttribute(name);    
  });

  console.log(attrs);  

}

const getBody = ($target) => {

  let body = new Object;

  let formElements = Array.from($target.elements);
  formElements = formElements.filter(element => {
    if(element.hasAttribute('name')) {
      return element;
    }
  });

  formElements.forEach(element => {
    const property = element.getAttribute('name');
    const value = $form[property].value;
    body[property] = value;
  });

  body = JSON.stringify(body);

  return body;

}

const apiFetch = ($target) => {

 getAttrs($target);

}

export default apiFetch;