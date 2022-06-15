AOS.init();

$('.experience-carousel').owlCarousel({
  responsiveClass:true,
  responsive:{
    0:{
        items:1,
        nav:true
    },
    600:{
        items:1,
        nav:true
    },
    1000:{
        items:1,
        nav:true,
    }
  }
})

$('.partners-carousel').owlCarousel({
  items:4,
  nav: true,
  autoplay: true,
  loop: false,
  infinite:false,
  margin: 10,
  responsiveClass:true,
  responsive:{
    0:{
        items:1,
        nav:true
    },
    600:{
        items:2,
        nav:true
    },
    1000:{
        items:3,
        nav:true,
    }
  }
})

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', ()=> {
  burger.classList.toggle('active')
  menu.classList.toggle('active')
})

// const text = gsap.utils.toArray(".text");
// text.forEach((container) => {
//   gsap.to(container, {
//     autoAlpha: 1,
//     ease: "power1.in",
//     scrollTrigger: {
//       trigger: container,
//       start: 'top top',
//       pin: true,
//       scrub: true
//     }
//   });
// });