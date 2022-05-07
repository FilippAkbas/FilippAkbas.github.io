let closeBtn = document.querySelector('.close-btn');
let menu = document.querySelector('nav.menu');
let HeaderMenu = document.querySelector('.header-menu ');
let mobileBurger = document.querySelector('.header-mobile-burger');
let CloseMobileMenu = document.querySelector('.header-menu__close');

closeBtn.addEventListener('click', (e)=> {
  let topHeader = e.target.parentNode.parentNode;

  topHeader.style.display = 'none';
});

mobileBurger.addEventListener('click', (e)=> {
  HeaderMenu.classList.add('active');
});

CloseMobileMenu.addEventListener('click', (e)=> {
  HeaderMenu.classList.remove('active');
});