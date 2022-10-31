const openPreview = ($src, $reload = false) => {

  const previewModal = document.getElementById('modalPreview');
  const image = previewModal.querySelector('.modal__image');

  image.setAttribute('src', $src);

  if($reload) {
    const closeBtn = alertModal.querySelector('.modal__close');
    closeBtn.setAttribute('data-reload', 'true');
  }

  previewModal.setAttribute('data-status', 'open');

  return;

}

const openAlert = ($type, $message, $reload = false) => {

  const alertModal = document.getElementById('modalAlert');
  const message = alertModal.querySelector('.modal__message');
  const title = alertModal.querySelector('.modal__title');

  message.textContent = $message;

  if($reload) {
    const closeBtn = alertModal.querySelector('.modal__close');
    closeBtn.setAttribute('data-reload', 'true');
  }

  switch($type) {
    case 'success':
      alertModal.setAttribute('data-alert', 'success');
      title.textContent = 'Success!';
      break;
    case 'error':
      alertModal.setAttribute('data-alert', 'error');
      title.textContent = 'Error!';
      break;
    default:
      alertModal.setAttribute('data-alert', 'information'); 
      title.textContent = 'Information';
  }

  alertModal.setAttribute('data-status', 'open');

}

const toggleModal = ($targetId) => {

  const target = document.getElementById($targetId);
  const isOpen = target.getAttribute('data-status') === 'open';

  if(isOpen) {
    target.setAttribute('data-status', 'close');
  } else {
    target.setAttribute('data-status', 'open');
  }

}

const initToggle = () => {

  const toggleBtns = Array.from(document.querySelectorAll('[data-toggle="modal"]'));

  if(!toggleBtns.length) return;

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      const btnTarget = (e.target).getAttribute('data-target');
      toggleModal(btnTarget);
    });
  });

}

const initClose = () => {

  const closeBtns = Array.from(document.querySelectorAll('[data-close="modal"]'));

  if(!closeBtns.length) return;

  closeBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {

      const btnTarget = document.querySelector('.modal[data-status="open"]');
      const reloadPage = btnTarget.querySelector('[data-reload]');
      
      btnTarget.setAttribute('data-status', 'close');
      if(reloadPage) location.reload();

    });

  });  

}

const initTriggers = () => {

  initToggle();
  initClose();

}

export {
  initTriggers,
  openAlert,
  openPreview
}