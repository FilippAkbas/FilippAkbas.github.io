document.addEventListener("DOMContentLoaded", function () {
    const customersSlider = new Swiper(".customers-slider", {
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loop: false,
      slidesPerView: 7,
      spaceBetween: 60,
    });
});
