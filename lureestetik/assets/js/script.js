const mainSlider = new Swiper("#main-slider", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  margin: "25px",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  // Navigation arrows
  navigation: false,
});

const blogSlider = new Swiper("#blog-slider", {
  // Optional parameters
  loop: false,
  slidesPerView: 2,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  // Navigation arrows
  navigation: false,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
    },
  },
});

let mobileBurger = document.querySelector(".header-mobile__btn");
let mobileCloseMenu = document.querySelector(".close-mobile__btn a");

let headerMobile = document.querySelector(".header-mobile");

mobileBurger.addEventListener("click", () => {
  headerMobile.classList.add("active");
});

mobileCloseMenu.addEventListener("click", () => {
  headerMobile.classList.remove("active");
});

$(".header-menu li a.item-big__submenu").mouseover(function () {
  $('.menu-item__submenu.big-submenu').addClass("hover");
});

$(".header-menu li.menu-item__lang a").mouseover(function () {
  $('.menu-item__lang .menu-item__submenu').addClass("hover");
});

$(".menu-item__submenu").mouseleave(function () {
  $(this).removeClass("hover");
});
