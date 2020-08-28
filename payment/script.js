$('.payment-tabs_title li a').click(function (e) {
    e.preventDefault();
    $('.payment-tabs_title li .active').removeClass('active');
    $(this).addClass('active');
    var tab = $(this).attr('href');
    $('.box-content').not(tab).css({
        'display': 'none'
    });
    $(tab).fadeIn(400);
});