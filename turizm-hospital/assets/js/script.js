let burger = document.querySelector('.mobile-burger');
let header = document.querySelector('.header');

burger.addEventListener('click', ()=> {
    burger.classList.toggle('active');

    if(burger.classList.contains('active')) {
      header.classList.add('active');
    } else {
      header.classList.remove('active')
    }
});

window.addEventListener('scroll', ()=> {
  const scroll = document.documentElement.scrollTop;
  if (scroll > 0) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
})