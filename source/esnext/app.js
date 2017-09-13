function toggle(trigger, target, className) {
  trigger.on('click', () => {
    target.toggleClass(className)
  })
}

(function ($) {
  $('#carousel-2').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: $('#carousel-2-control')
  })
  $('#carousel-2-control').slick({
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: $('#carousel-2')
  })
})(jQuery)
;(function ($) {
  const activate = $('#activate')
  const content = $('#content')
  const activate2 = $('#s2-activate')
  const content2 = $('#s2-content')

  toggle(activate, content, 'active')
  toggle(activate2, content2, 'active')
})(jQuery)
;(function ($) {
  const btnMenu = $('.st__menu-toggle')
  const sidebarTransition = $('.st')
  toggle(btnMenu, sidebarTransition, 'show')
})(jQuery)
;(function ($) {
  const mobileNavBtn = $('.app-mobile-header__btn')
  const mobileNav = $('.app-mobile-header__list')
  toggle(mobileNavBtn, mobileNav, 'show')
})(jQuery)
;(function ($) {
  $('.f__control-2').map(function (index, inputEl) {
    if (inputEl.value.trim() !== '') {
      inputEl.addClass('f__control-2_filled')
    }

    inputEl.addEventListener('focus', onInputFocus)
    inputEl.addEventListener('blur', onInputBlur)
  })

  function onInputFocus(ev) {
    $(ev.target).addClass('f__control-2_filled')
  }

  function onInputBlur(ev) {
    if (ev.target.value.trim() === '') {
      $(ev.target).removeClass('f__control-2_filled')
    }
  }
})(jQuery)
