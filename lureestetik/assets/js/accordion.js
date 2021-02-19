$('.toggle').click(function(e) {
  	e.preventDefault();
  
    var $this = $(this);
    $('.toggle').children().children().attr('data-icon', 'plus');
  
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.children().children().attr('data-icon', 'plus');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.children().children().attr('data-icon', 'minus');
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});