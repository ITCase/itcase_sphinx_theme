'use strict'

require('expose-loader?Cookies!./vendor/js.cookie.js')

const leftHeight = $('.page__left').height()
const rightHeight = $('.page__right').height()

require('./vendor/jquery.fancybox.js')
require('./vendor/enscroll.js')

$('.internal.image-reference').fancybox({
  padding: 3,
  beforeShow: function () {
    var alt = this.element.find('img').attr('alt')
    this.inner.find('img').attr('alt', alt)
    this.title = alt
  },
  helpers: {
    title: {
      type: 'over'
    },
    overlay: {
      locked: false
    }
  }
})

const menu = $('.menu')
const menuSwitch = $('.menu-switch')
const menuSwitchArrow = $('.menu-switch__arrow')

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
    width: '12px'
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
  menuSwitchArrow.text('»')
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
  menuSwitchArrow.text('«')
  document.cookie = 'menu-state=expande;path=/'
}

$(menuSwitch).on('click', () => {
  if (menu.data('state') === 'collapse') {
    expandTree()
    menu.data('state', 'expand')
  } else if (menu.data('state') === 'expand') {
    collapseTree()
    menu.data('state', 'collapse')
  }
})

$('.internal.image-reference').on('click', (event) => {
  event.preventDefault()
})

getTreeState()

function setMenuHeight () {
  if ($('.menu').height() >= ($(window).height() - 55)) {
    $('.menu').css({ height: ($(window).height() - 55) })
    $('.menu-inner').css({ height: $('.menu').height() })
  } else {
    $('.menu').css({ height: 'auto' })
    $('.menu-inner').css({ height: 'auto' })
  }
}

function setMenuPosition() {
  if (rightHeight > leftHeight) {
    const menuHeight = $('.menu').height()
    const wrapperPosition = $('.page').offset().top
    let menuPosition = $('.menu').offset().top + menuHeight
    let screenPosition = $(window).scrollTop() + menuHeight
    let footerPosition = $('.footer').offset().top

    // console.log('menuHeight' + menuHeight)
    // console.log('menuPosition' + $('.menu').offset().top)
    // console.log('wrapperPosition' + wrapperPosition)

    if (menuPosition >= footerPosition && screenPosition >= footerPosition) {
      // Touch Footer
      // console.log('Touch Footer')
      $('.menu').css({
        position: 'absolute',
        top: footerPosition - (menuHeight + 25)
      })
    } else {
      // Sticky
      // console.log('Sticky')
      $('.menu').css({
        position: 'fixed',
        top: 0
      })
      if ($('.menu').offset().top <= wrapperPosition) {
        $('.menu').css({
          position: 'relative',
          top: 0
        })
      }
    }
  }
}

setMenuPosition()

if (window.STICKY_MENU === true) {
  $('.menu-inner').enscroll({
    showOnHover: true,
    verticalTrackClass: 'menu-track',
    verticalHandleClass: 'menu-handle'
  })

  setMenuHeight()

  $(window).bind('stickyMenu', () => {
    $(window).scroll(() => {
      setMenuPosition()
    })
  }).trigger('stickyMenu')
}

$(window).resize(() => {
  setMenuHeight()
})
