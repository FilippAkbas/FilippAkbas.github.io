const mainSlider = new Swiper("#main-slider", {
  // Optional parameters
  loop: true,
  direction: "vertical",
  slidesPerView: 1,
  margin: '25px',

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
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
    },
  
    // Navigation arrows
    navigation: false,
  });