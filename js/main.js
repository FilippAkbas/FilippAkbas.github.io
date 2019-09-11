$(document).ready(function () {
    var mySwiper = new Swiper ('.swiper-container', {
      loop: true
    });

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 100) {
            $(".header").addClass("fixed-header");
        } else {
            $(".header").removeClass("fixed-header");
        }
    });
});