$('.toggle').click(function(e) {
  	e.preventDefault();
  
    var $this = $(this);
    $('.toggle').children().children().attr('data-icon', 'minus');
  
    if ($this.next().hasClass('show')) {
        console.log('minus');
        $this.next().removeClass('show');
        $this.children().children().attr('data-icon', 'minus');
        $this.next().slideUp(350);
    } else {
        console.log('plus');
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.children().children().attr('data-icon', 'plus');
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});