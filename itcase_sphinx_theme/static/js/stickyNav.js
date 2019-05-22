'use strict'

const header = $('.header')

const nav = $('.header__wrapper')
const navStateShow = 'header__wrapper_state_show'
const navStateHide = 'header__wrapper_state_hide'

const navMenu = $('.main-menu_type_mobile')

if (nav.length && header.data('sticky')) {
  let lastScrollTop = 0

  $(window).scroll(function() {
    let scrollTop = $(this).scrollTop()

    if (scrollTop !== 0) {
      let navHeight = nav.outerHeight()
      let offsetNav = $(window).height() / 2
      let mobileMenuHeight = $(window).outerHeight() - nav.outerHeight()
      if ($('.main-menu').hasClass('main-menu_type_mobile_state_visible')) {
        if ($('.main-menu-list').outerHeight() > mobileMenuHeight) {
          navMenu.css({ height: mobileMenuHeight })
        }
        navHeight = 0
        offsetNav = 0
      }
      if (Math.abs(lastScrollTop - scrollTop) <= 200) {
        return
      } else {
        if (scrollTop > lastScrollTop && scrollTop > navHeight) {
          nav
            .removeClass(navStateShow)
            .addClass(navStateHide)
            .css({ top: -navHeight })
          header.css({ 'padding-bottom': navHeight })
        } else {
          if (scrollTop > navHeight + offsetNav) {
            if (scrollTop + $(window).height() < $(document).height()) {
              nav
                .removeClass(navStateHide)
                .addClass(navStateShow)
                .css({ top: 0 })
            }
          }
        }
      }
    } else {
      nav
        .removeAttr('style')
        .removeClass(navStateShow)
        .removeClass(navStateHide)
      header.removeAttr('style')
    }

    lastScrollTop = scrollTop
  })
}
