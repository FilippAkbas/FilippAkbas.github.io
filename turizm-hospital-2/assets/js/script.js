let burger = document.querySelector('.mobile-burger');
let navMenu = document.querySelector('.nav-menu');
let header = document.querySelector('.header');

burger.addEventListener('click', ()=> {
    burger.classList.toggle('active');

    if(burger.classList.contains('active')) {
      navMenu.classList.add('active');
    } else {
      navMenu.classList.remove('active')
    }
});

window.addEventListener('scroll', ()=> {
  const scroll = document.documentElement.scrollTop;
  if (scroll > 0) {
    header.classList.add("no-fixed");
  } else {
    header.classList.remove("no-fixed");
  }
})