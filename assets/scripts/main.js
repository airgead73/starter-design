import { initMenu, initForms, initRemove, initSuccess } from './modules/index';

const forms = Array.from(document.querySelectorAll('.form'));
const removeBtns = Array.from(document.querySelectorAll('button[data-method="delete"]'));
const modals = Array.from(document.querySelectorAll('.modal'));

initMenu();
if(forms) initForms(forms);
if(removeBtns) initRemove(removeBtns);
if(modals) initSuccess();