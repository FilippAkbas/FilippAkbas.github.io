const header = document.querySelector('.header');
let offerItem = document.querySelector('.topoffer-slider .owl-item.center');
var owl = $('.owl-carousel.topoffer-slider');

owl.on('changed.owl.carousel', function(event) {
  console.log(document.querySelector('.owl-item.center'))
})

console.log(offerItem);

window.addEventListener('scroll', function() {
  if(window.pageYOffset >= 500) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
}); 


$(".bonus-slider").owlCarousel({
  center: true,
  items: 5,
  loop:true,
  nav: true,
  dots: false,
  margin: 30,
  navContainer: ".slider-arrow",
  navText: ["<img src='img/left-arrow.png'>","<img src='img/right-arrow.png'>"],
  responsive:{
    600:{
        items:4
    }
  }
});


$(".topoffer-slider").owlCarousel({
  center: true,
  items: 5,
  loop:true,
  nav: true,
  dots: false,
  margin: 20,
  navContainer: ".topoffer-slider-arrow",
  navText: ["<img src='img/left-arrow-black.png'>","<img src='img/right-arrow-black.png'>"],
  responsive:{
    600:{
        items:4
    }
  }
});

$(".rightchoice-slider").owlCarousel({
  items: 3,
  loop:true,
  nav: true,
  dots: false,
  margin: 40,
  navContainer: ".rightchoice-slider-arrow",
  navText: ["<img src='img/left-arrow-black.png'>","<img src='img/right-arrow-black.png'>"],
});

$(".reviews-slider").owlCarousel({
  items: 2,
  loop:true,
  nav: true,
  dots: false,
  margin: 40,
  navContainer: ".reviews-slider-arrow",
  navText: ["<img src='img/left-arrow-black.png'>","<img src='img/right-arrow-black.png'>"],
});