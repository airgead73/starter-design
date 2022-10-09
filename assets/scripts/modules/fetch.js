import { getAttrs } from './utils';

const getBody = ($target) => {
  let body = new Object;
  let formElements = Array.from($target.elements);
  formElements = formElements.filter(element => {
    if(element.hasAttribute('name')) return element;
  });

  formElements.forEach(element => {
    const property = element.getAttribute('name');
    const value = $target[property].value;
    body[property] = value;
  });

  body = JSON.stringify(body);

  console.log(body);
}



const apiFetch = ($target) => {

  const { action, method }= getAttrs($target);

  console.log(method)

}

export default apiFetch;