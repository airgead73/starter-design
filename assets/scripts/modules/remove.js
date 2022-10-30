import { getAttrs } from './utils';
import { openSuccess, openError, openAlert } from './modals';

const buildRequest = ($url) => {

  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  const request = new Request($url, options);

  return request;

}

const apiRemove = async($url) => {

  try {

    const request = buildRequest($url);
    const response = await fetch(request);
    const json = await response.json();

    const { success, message } = json;

    if(success) {

      openAlert('success', message, true);

    } else {

      openAlert('error', message);
      
    }

  } catch(error) {

    openError('error', error);

  }

}

const handleRemove = ($target) => {

  const attrs = getAttrs($target);
  const url = attrs["data-action"];
  const message = attrs["data-message"];
  const isConfirmed = confirm(message);
  
  if(isConfirmed) return apiRemove(url);

  return;  

}

const initRemove = () => {
  const $btns = Array.from(document.querySelectorAll('button[data-method="delete"]'));

  if(!$btns.length) return;
  
  $btns.forEach($btn => {
    $btn.addEventListener('click', function(e) {
      handleRemove(e.target);      
    });
  });
  
}

export default initRemove;