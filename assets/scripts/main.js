import { initMenu } from './modules/index';
import { initForms } from './modules/index';

const forms = Array.from(document.querySelectorAll('.form'));

initMenu();
if(forms) initForms(forms);