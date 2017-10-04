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
  if (!document.cookie) {
    pageLeft.css({ visibility: 'visible' })
    pageRight.css({ visibility: 'visible' })
    return
  }
  var menuState = Cookies.get('menu-state')
  if (menuState === 'collapse') {
    collapseTree()
  } else if (menuState === 'expand') {
    expandTree()
  }
  pageLeft.css({ visibility: 'visible' })
  pageRight.css({ visibility: 'visible' })
}

function collapseTree () {
  menu.css({
    width: '12px',
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
  menu.css({
    width: '300px',
    height: 'auto'
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

if (STICKY_MENU === true) {
  $('.menu-inner').enscroll({
    showOnHover: true,
    verticalTrackClass: 'menu-track',
    verticalHandleClass: 'menu-handle'
  })

  if (leftHeight < rightHeight) {
    $('.menu').css({
      position: 'fixed',
      top: '25'
    })
  }
  if ($('.menu').height() >= ($(window).height() - '55')) {
    $('.menu').css({ height: ($(window).height() - '55') })
    $('.menu-inner').css({ height: $('.menu').height() })
  } else {
    $('.menu').css({ height: 'auto' })
  }
}

if (STICKY_MENU === true) {
  $(window).bind('stickyMenu', () => {
    $(window).scroll(() => {
      $('.menu').css({ height: ($(window).height() - '55') })
      $('.menu-inner').css({ height: $('.menu').height() })
      if (leftHeight < rightHeight) {
        const menuPosition = $('.menu').offset().top + $('.menu').height()
        const screenPosition = $(window).scrollTop() + $('.menu').height()
        const footerPosition = $('.footer').offset().top;

        if (menuPosition >= footerPosition) {
          if (screenPosition <= footerPosition) {
            $('.menu').css({
              position: 'fixed',
              top: '25',
              margin: 0
            })
          } else {
            $('.menu').css({
              position: 'relative',
              'margin-top': footerPosition - $('.menu').height() - 25
            })
          }
        } else {
          $('.menu').css({
            position: 'fixed',
            top: '25'
          })
        }
      } else {
        $('.menu').css({
          position: 'position',
          top: '0'
        })
      }
    })
  }).trigger('stickyMenu')
}

$(window).resize(() => {
  if ($('.menu').height() >= ($(window).height() - '55')) {
    $('.menu').css({ height: ($(window).height() - '55') })
    $('.menu-inner').css({ height: $('.menu').height() })
  } else {
    $('.menu').css({ height: 'auto' })
  }
})
