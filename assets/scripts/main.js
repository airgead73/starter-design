import { initMenu, initForms, initRemove } from './modules/index';

const removeBtns = Array.from(document.querySelectorAll('button[data-method="delete"]'));

initMenu();
initForms();
if(removeBtns) initRemove(removeBtns);