const ProjectSwiper = new Swiper('.projects-slider', {
    slidesPerView: 4,
    spaceBetween: 50,
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        1366: {
            slidesPerView: 4,
            spaceBetween: 50
        }
    },
        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
    },
});
const priceSwiper = new Swiper('.price-slider', {
    slidesPerView: 4,
    spaceBetween: 50,
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        1366: {
            slidesPerView: 4,
            spaceBetween: 50
        }
    },
        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
    },
});