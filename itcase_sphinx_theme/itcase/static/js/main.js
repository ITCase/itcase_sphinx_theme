'use strict';

if (typeof $ === 'undefined') { require('jquery'); }

require('./vendor/enscroll');

var Cookies = require('./vendor/js.cookie.js');


(function($){
  $(window).load(function(){

    var menu = $('.menu'),
        menuSwitch = $('.menu-switch'),
        menuSwitchArrow = $('.menu-switch__arrow');

    var pageLeft = $('.page__left'),
        pageRight = $('.page__right');

    function getTreeState() {
      if(!document.cookie) { return; }
      var menuState = Cookies.get('menu-state');
      if (menuState === 'collapse') {
        collapseTree();
      } else if (menuState === 'expand') {
        expandTree();
      }
    }

    // $('.tree').enscroll({
    //   showOnHover: true,
    //   verticalTrackClass: 'vertical-track',
    //   verticalHandleClass: 'vertical-handle'
    // });

    function collapseTree() {
      menu.data('state', 'collapse');
      menu.addClass('menu__state_collapse');
      pageLeft.addClass('page__left_state_collapse');
      pageRight.addClass('page__right_state_expand');
      menuSwitchArrow.text('»');
      document.cookie = 'menu-state=collapse';
    }

    function expandTree() {
      menu.data('state', 'expand');
      menu.removeClass('menu__state_collapse');
      pageLeft.removeClass('page__left_state_collapse');
      pageRight.removeClass('page__right_state_expand');
      menuSwitchArrow.text('«');
      document.cookie = 'menu-state=expande';
    }

    $(menuSwitch).on('click', function(){
      if(menu.data('state') === 'collapse') {
        expandTree();
        menu.data('state', 'expand');
      } else if (menu.data('state') === 'expand') {
        collapseTree();
        menu.data('state', 'collapse');
      }
    });

    getTreeState();

  });
})(jQuery);