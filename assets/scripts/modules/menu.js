const initMenu = () => {
  const navBtn = document.getElementById('nav__btn');
  const navList = document.getElementById('nav__list');
  const navIcon = document.getElementById('nav__icon');

  const toggleMenuIcon = () => {
    const isHamburger = navIcon.classList.contains('fa-bars');
    if(isHamburger) {
      navIcon.classList.remove('fa-bars');
      navIcon.classList.add('fa-xmark');
    } else {
      navIcon.classList.remove('fa-xmark');
      navIcon.classList.add('fa-bars');
    }
  }
  
  navBtn.addEventListener('click', function(e) {
    e.preventDefault();
    navList.classList.toggle('show');
    toggleMenuIcon();
  });
  
}

export default initMenu;