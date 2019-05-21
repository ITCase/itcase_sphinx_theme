const animation = 'webkitAnimationEnd oanimationend msAnimationEnd animationend'

const $hamburgerButton = $('.main-menu-hamburger')
const hamburgerButtonActiveClass = 'main-menu-hamburger_state_active'

let $mobileMenu = $('.main-menu')
let mobileMenuVisibleClass = 'main-menu_state_visible'
let mobileMenuHiddenClass = 'main-menu_state_hidden'

if ($('.main-menu_type_mobile').length) {
  $mobileMenu = $('.main-menu_type_mobile')
  mobileMenuVisibleClass = 'main-menu_type_mobile_state_visible'
  mobileMenuHiddenClass = 'main-menu_type_mobile_state_hidden'
}

function closeMobileMenu () {
  $hamburgerButton.removeClass(hamburgerButtonActiveClass)
  $mobileMenu
    .addClass(mobileMenuHiddenClass)
    .on(animation, () => {
      $mobileMenu.removeClass([mobileMenuVisibleClass, mobileMenuHiddenClass].join(' ')).off(animation)
    })
}

function openMobileMenu () {
  $hamburgerButton.addClass(hamburgerButtonActiveClass)
  $mobileMenu.addClass(mobileMenuVisibleClass)
}

$hamburgerButton.on('click', function () {
  if ($(this).hasClass(hamburgerButtonActiveClass)) {
    closeMobileMenu()
  } else {
    openMobileMenu()
  }
  return false
})

$(document).on('click', (event) => {
  const $menu = $(event.target).closest('.main-menu_type_mobile')
  if (!$menu.length && $mobileMenu.is(':visible')) {
    closeMobileMenu()
  }
})


const $siteMenuLink = $('.site-menu__link')
const menuLinkActive = 'site-menu__link_state_active'

const $siteMenuPopupLink = $('.site-menu-popup__close')

const $siteMenu = $('.site-menu-popup')
const siteMenuVisible = 'site-menu-popup_state_visible'
const siteMenuHidden = 'site-menu-popup_state_hidden'

const $siteMenuFader = $('.site-menu__fader')
const siteMenuFaderVisible = 'site-menu__fader_state_visible'
const siteMenuFaderHidden = 'site-menu__fader_state_hidden'

function closeSiteMenu () {
  $siteMenuLink.removeClass(menuLinkActive)
  $siteMenuFader.addClass(siteMenuFaderHidden)
  $siteMenu.addClass(siteMenuHidden).on(animation, () => {
    $siteMenuFader.removeClass([siteMenuFaderVisible, siteMenuFaderHidden].join(' '))
    $siteMenu.removeClass([siteMenuVisible, siteMenuHidden].join(' ')).off(animation)
  })
}

function openSiteMenu () {
  $siteMenuLink.addClass(menuLinkActive)
  $siteMenuFader.addClass(siteMenuFaderVisible)
  $siteMenu.addClass(siteMenuVisible)
}

$siteMenuLink.on('click', function () {
  if ($(this).hasClass(menuLinkActive)) {
    closeSiteMenu()
  } else {
    openSiteMenu()
  }
  return false
})

$siteMenuPopupLink.on('click', () => {
  closeSiteMenu()
})

$(document).on('click', (event) => {
  const $siteMenuPopup = $(event.target).closest($siteMenu)

  const siteMenuIsVisible = $siteMenu.is(':visible') &&
                            $siteMenu.css('visibility') !== 'hidden'

  if (!$siteMenuPopup.length && siteMenuIsVisible) {
    closeSiteMenu()
  }
})
