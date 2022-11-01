import { getAttrs } from './utils';

const previewFile = ($target) => {

  const file = ($target).files[0];

  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    $target.setAttribute('data-photo', reader.result);
  }

}

const compileBody = ($target) => {

  let body = new Object;

  let formElements = Array.from($target.elements);

  formElements = formElements.filter(element => {
    if(element.hasAttribute('name')) return element;
  });

  formElements.forEach(element => {
    const property = element.getAttribute('name');
    const isFile = element.getAttribute('type') === 'file';
    let value;

    if(isFile) {
      value = element.getAttribute('data-photo');
    } else {
      value = $target[property].value;
    }

    body[property] = value;    

  });

  body = JSON.stringify(body);

  return body;
  
}

const compileRequest = ($target) => {

  const { action: url, method } = getAttrs($target);

  const needsBody = method === 'POST' || method === 'PUT' || method === 'PATCH';

  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'      
    }
  }

  if(needsBody) options.body = compileBody($target);

  console.log(options);

  const request = new Request(url, options);

  return request;
 
}

const apiFetch = async($target) => {

  try {

    const request = compileRequest($target);
    const response = await fetch(request);
    const json = await response.json();

    console.log(json);

  } catch(err) {

    console.error(err);

  }

  // compileRequest($target);
  // return;

}

export {
  apiFetch,
  previewFile
};