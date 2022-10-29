import { initMenu, initForms, initRemove } from './modules/index';

const forms = Array.from(document.querySelectorAll('.form'));
const removeBtns = Array.from(document.querySelectorAll('button[data-method="delete"]'));

initMenu();
if(forms) initForms(forms);
if(removeBtns) initRemove(removeBtns);