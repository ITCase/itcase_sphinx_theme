/* globals Cookies */

'use strict'

require('expose-loader?Cookies!./vendor/js.cookie.js')

const leftHeight = $('.page__left').height()
const rightHeight = $('.page__right').height()

// require('./vendor/jquery.fancybox')
// require('./vendor/enscroll')
// require('./openImage')

const menu = $('.menu')
const menuSwitch = $('.menu-switch')

const pageLeft = $('.page__left')
const pageRight = $('.page__right')

function getTreeState () {
  const menuState = Cookies.get('menu-state')
  if (menuState === 'collapse') {
    collapseTree()
  } else if (menuState === 'expand') {
    expandTree()
  }
  pageLeft.css({ visibility: 'visible' })
  pageRight.css({ visibility: 'visible' })
}

function collapseTree () {
  menu.animate({
    width: '30px'
  })
  $('.page__right-inner').animate({
    'padding-left': '40px'
  })
  menu.css({
    height: menu.height()
  })
  menu.data('state', 'collapse')
  menu.addClass('menu_state_collapse')
  pageLeft.addClass('page__left_state_collapse')
  pageRight.addClass('page__right_state_expand')
  document.cookie = 'menu-state=collapse;path=/'
}

function expandTree () {
  menu.animate({
    width: '300px'
  })
  $('.page__right-inner').animate({
    'padding-left': '320px'
  })
  menu.data('state', 'expand')
  menu.removeClass('menu_state_collapse')
  pageLeft.removeClass('page__left_state_collapse')
  pageRight.removeClass('page__right_state_expand')
  document.cookie = 'menu-state=expande;path=/'
}

function switchMenu () {
  if (menu.data('state') === 'collapse') {
    expandTree()
    menu.data('state', 'expand')
  } else if (menu.data('state') === 'expand') {
    collapseTree()
    menu.data('state', 'collapse')
  }
}

function setMenuHeight () {
  let padding = 55
  if ($(window).width() < 768) {
    padding = 0
  }
  if ($('.menu').height() >= ($(window).height() - padding)) {
    $('.menu').css({ height: ($(window).height() - padding) })
    $('.menu-inner').css({ height: $('.menu').height() })
  } else {
    $('.menu').css({ height: 'auto' })
    $('.menu-inner').css({ height: 'auto' })
  }
}



// $(menuSwitch).on('click', () => {
//   switchMenu()
// })

// if (window.STICKY_MENU === true) {
//   $('.menu-inner').enscroll({
//     showOnHover: true,
//     verticalTrackClass: 'menu-track',
//     verticalHandleClass: 'menu-handle'
//   })
//   setMenuHeight()
//   $(window).bind('stickyMenu', () => {
//     $(window).scroll(() => {
//       setMenuPosition()
//     })
//   }).trigger('stickyMenu')
// }

// $(window).resize(() => {
//   setMenuHeight()
// })

// setMenuPosition()
// getTreeState()
