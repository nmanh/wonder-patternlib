function toggle(trigger, target, className) {
  trigger.on('click', function () {
    target.toggleClass(className);
  });
}

(function ($) {
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
  var activate = $('#activate');
  var content = $('#content');
  var activate2 = $('#s2-activate');
  var content2 = $('#s2-content');

  toggle(activate, content, 'active');
  toggle(activate2, content2, 'active');
})(jQuery);(function ($) {
  var btnMenu = $('.st__menu-toggle');
  var sidebarTransition = $('.st');
  toggle(btnMenu, sidebarTransition, 'show');
})(jQuery);