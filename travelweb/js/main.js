$(".owl-carousel").owlCarousel({
  items: 1,
  nav:true,
  margin: 10,
});

const swiper = new Swiper('.more-slider', {
  direction: 'vertical',
  slidesPerView: 4,
  loop: false,
  initialSlide: 0,
  spaceBetween: 20,
  longSwipes: false,
  height: 800,
});

$('.more-slider .swiper-slide').click(function (e) {
    e.preventDefault();
    $('.more-slider .swiper-slide').removeClass('active');
    $(this).addClass('active');
    var tab = $(this).attr('href');
    $('.more-slider__content').not(tab).css({
        'display': 'none'
    });
    $(tab).fadeIn(400);
});

$('.days-list li a').click(function (e) {
    e.preventDefault();
    $('.days-list li a').removeClass('active');
    $(this).addClass('active');
    var tab = $(this).attr('href');
    $('.days-content').not(tab).css({
        'display': 'none'
    });
    $(tab).fadeIn(400);
});