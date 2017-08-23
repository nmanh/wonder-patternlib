;(function ($) {

  $('#carousel-2').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: $('#carousel-2-control')
  });
  $('#carousel-2-control').slick({
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: $('#carousel-2')
  });
})(jQuery);(function ($) {
  // Sidenav collapse
  var activate = $('#activate');
  var content = $('#content');

  if (activate) {
    activate.on('click', function () {
      content.toggleClass('active');
    });
  }
})(jQuery);