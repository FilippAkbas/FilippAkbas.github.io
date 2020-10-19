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

    $('.product-list ul li a').click(function (e) {
        e.preventDefault();
        $('.product-list ul li a').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.product-grid').not(tab).css({
            'display': 'none'
        });
        $(tab).fadeIn(400);
    });
});