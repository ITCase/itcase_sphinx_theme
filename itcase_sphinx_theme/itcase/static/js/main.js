/* globals Cookies */

'use strict'

require('expose-loader?Cookies!./vendor/js.cookie.js')

const leftHeight = $('.page__left').height()
const rightHeight = $('.page__right').height()

require('./vendor/jquery.fancybox')
require('./vendor/enscroll')

require('./openImage')
require('./switchMenu')

const menu = $('.menu')

function setMenuHeight () {
  let spacer = 55
  if ($(window).width() < 768) {
    spacer = 0
  }
  if (menu.height() >= ($(window).height() - spacer)) {
    menu.css({ height: ($(window).height() - spacer) })
    $('.menu-inner').css({ height: menu.height() })
  } else {
    menu.css({ height: 'auto' })
    $('.menu-inner').css({ height: 'auto' })
  }
}

function setMenuPosition () {
  if (rightHeight > leftHeight) {
    const menuHeight = menu.height()
    const wrapperPosition = $('.page').offset().top
    let menuPosition = menu.offset().top + menuHeight
    let screenPosition = $(window).scrollTop() + menuHeight
    let footerPosition = $('.footer').offset().top

    // console.log('menuHeight' + menuHeight)
    // console.log('menuPosition' + menu.offset().top)
    // console.log('wrapperPosition' + wrapperPosition)

    if (menuPosition >= footerPosition && screenPosition >= footerPosition) {
      // Touch Footer
      // console.log('Touch Footer')
      menu.css({
        position: 'absolute',
        top: footerPosition - (menuHeight + 25)
      })
    } else {
      // Sticky
      // console.log('Sticky')
      menu.css({
        position: 'fixed',
        top: 0
      })
      if (menu.offset().top <= wrapperPosition) {
        menu.css({
          position: 'relative',
          top: 0
        })
      }
    }
  }
}

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

setMenuPosition()
