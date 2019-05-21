'use strict'

const animationEvents = 'webkitAnimationEnd oanimationend msAnimationEnd animationend'

const $menu = $('.menu')
const $menuSwitch = $('.menu-switch')

const menuCollapseClass = 'menu_state_collapse'
const menuExpandClass = 'menu_state_expand'

function collapseTree() {
  $menu
    .removeClass(menuExpandClass)
    .addClass(menuCollapseClass)
    .on(animationEvents, () => {
      $menu.removeClass([menuExpandClass].join(' ')).off(animationEvents)
    })
  document.cookie = 'menu-state=collapse;path=/'
}

function expandTree() {
  $menu
    .removeClass(menuCollapseClass)
    .addClass(menuExpandClass)
    .on(animationEvents, () => {
      $menu.removeClass([menuCollapseClass].join(' ')).off(animationEvents)
    })
  document.cookie = 'menu-state=expand;path=/'
}

function switchMenu() {
  if ($menu.hasClass(menuCollapseClass)) {
    expandTree()
  } else {
    collapseTree()
  }
  return false
}

$menuSwitch.on('click', () => {
  switchMenu()
})
