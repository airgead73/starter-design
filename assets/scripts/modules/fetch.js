import { getAttrs } from './utils';
import { handleSuccess, handleBadRequest, handleError } from './handleResponse';


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

  return body;

}

const buildRequest = ($target) => {

  const { action: url, method }= getAttrs($target);

  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: getBody($target)
  }

  const request = new Request(url, options);

  return request;

}

const apiFetch = async($target) => {

  try {

    const request = buildRequest($target);
    const response = await fetch(request);
    const json = await response.json();

    if(!response.ok) {
      const { errors } = json;
      return handleBadRequest(errors)
    } 

    handleSuccess($target,json.message);  

  } catch(error) {

    handleError();

  }

 

}

export default apiFetch;