const initMenu = () => {
  const navBtn = document.getElementById('nav__btn');
  const navList = document.getElementById('nav__list');
  
  navBtn.addEventListener('click', function(e) {
    e.preventDefault();
    navList.classList.toggle('show');
  });
  
}

export default initMenu;