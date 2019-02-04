'use strict'

const animationEvents = 'webkitAnimationEnd oanimationend msAnimationEnd animationend'

const $menu = $('.menu')
const $menuSwitch = $('.menu-switch')

const menuCollapseClass = 'menu_state_collapse'
const menuExpandClass = 'menu_state_expand'

const menuCloseClass = 'menu_state_close'
const menuOpenClass = 'menu_state_open'

function getTreeState() {
  const menuState = Cookies.get('menu-state')
  if (menuState === 'collapse') {
    $menu.addClass(menuCloseClass)
  } else if (menuState === 'expand') {
    $menu.addClass(menuOpenClass)
  }
}

function collapseTree() {
  $menu
    .removeClass(menuExpandClass)
    .addClass(menuCollapseClass)
    .on(animationEvents, () => {
      $menu
        .removeClass([menuExpandClass, menuCloseClass, menuOpenClass].join(' '))
        .off(animationEvents)
    })
    .css({
      height: $menu.height()
    })
  document.cookie = 'menu-state=collapse;path=/'
}

function expandTree() {
  $menu
    .removeClass(menuCollapseClass)
    .addClass(menuExpandClass)
    .on(animationEvents, () => {
      $menu
        .removeClass([menuCollapseClass, menuCloseClass, menuOpenClass].join(' '))
        .off(animationEvents)
    })
  document.cookie = 'menu-state=expand;path=/'
}

function switchMenu() {
  if ($menu.hasClass(menuCollapseClass) || $menu.hasClass(menuCloseClass)) {
    expandTree()
  } else {
    collapseTree()
  }
  return false
}

$menuSwitch.on('click', () => {
  switchMenu()
})

getTreeState()
