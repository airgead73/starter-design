const initMenu = () => {

  const menuBtn = document.getElementById('menu__btn');
  const menuIcon = document.getElementById('menu__icon');
  const nav = document.querySelector('[role="navigation"]');


  const toggleNav = () => {

    nav.classList.toggle('open');

  }

  const toggleBtn = ($isOpen) => {   

    if($isOpen) {
      menuBtn.setAttribute('aria-expanded', 'false');
      menuIcon.classList.remove('fa-xmark');
      menuIcon.classList.add('fa-bars');
    } else {
      menuBtn.setAttribute('aria-expanded', 'true');
      menuIcon.classList.remove('fa-bars');
      menuIcon.classList.add('fa-xmark');
    }

  }

  const toggle = ($isOpen) => {

    if(typeof $isOpen !== "boolean") return console.error('Button attribute type is incorrect.');
    

    toggleBtn($isOpen);
    toggleNav();

  }

  menuBtn.addEventListener('click', function(e) {
    const isOpen = menuBtn.getAttribute('aria-expanded') === "true" ? true : false;
    toggle(isOpen);
  })
  
}

export default initMenu;