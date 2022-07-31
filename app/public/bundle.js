(function () {
'use strict';

const initMenu = () => {
  const navBtn = document.getElementById('menu__btn');
  const navList = document.getElementById('nav__list');
  
  navBtn.addEventListener('click', function(e) {
    e.preventDefault();
    navList.classList.toggle('show');
  });
  
};

initMenu();

}());
//# sourceMappingURL=bundle.js.map
