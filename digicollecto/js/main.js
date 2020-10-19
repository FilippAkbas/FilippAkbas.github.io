$( document ).ready(function() {

  var mySwiper = new Swiper ('.main-slider', {
    loop: false,
    slidesPerView: 1,
  });

  $('.menu__burger').on('click', function() {
    $('.nav__menu-mobile').css('display','flex');
    $('.menu__burger').css('visibility','hidden');
  });

  $('#close').on('click', function() {
    $('.nav__menu-mobile').css('display','none');
    $('.menu__burger').css('visibility','visible');
  });

});