const openSuccess = ($message, $reload = false) => {

  const success = document.getElementById('modalSuccess');
  const message = success.querySelector('.modal__message');
  message.textContent = $message;
  success.setAttribute('data-status', 'open');
  if($reload) {
    const closeBtn = success.querySelector('.modal__close');
    closeBtn.setAttribute('data-reload', 'true');
  }

}

const openError = ($message, $reload = false) => {

  const error = document.getElementById('modalError');
  const message = error.querySelector('.modal__message');
  message.textContent = $message;
  error.setAttribute('data-status', 'open');
  if($reload) {
    const closeBtn = success.querySelector('.modal__close');
    closeBtn.setAttribute('data-reload', 'true');
  }

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
      if(reloadPage) location.reload() ;

    });

  });  

}

const initTriggers = () => {

  initToggle();
  initClose();

}

export {
  initTriggers,
  openSuccess,
  openError
}