'use strict';

if (typeof $ === 'undefined') { require('jquery'); }
if (typeof Cookies === 'undefined') {
  var Cookies = require('./vendor/js.cookie.js');
}


(function($){
  $(window).ready(function(){

    require('./vendor/jquery.fancybox.js');

    $('.internal.image-reference').fancybox({
      padding : 3,
      beforeShow : function() {
        var alt = this.element.find('img').attr('alt');
        this.inner.find('img').attr('alt', alt);
        this.title = alt;
      },
      helpers : {
        title : {
          type : 'over'
        },
        overlay: {
          locked: false
        }
      }
    });

    var menu = $('.menu'),
        menuSwitch = $('.menu-switch'),
        menuSwitchArrow = $('.menu-switch__arrow');

    var pageLeft = $('.page__left'),
        pageRight = $('.page__right');

    function getTreeState() {
      if(!document.cookie) { 
        pageLeft.css({ visibility: 'visible' });
        pageRight.css({ visibility: 'visible' });
        return;
      }
      var menuState = Cookies.get('menu-state');
      if (menuState === 'collapse') {
        collapseTree();
      } else if (menuState === 'expand') {
        expandTree();
      }
      pageLeft.css({ visibility: 'visible' });
      pageRight.css({ visibility: 'visible' });
    }

    function collapseTree() {
      menu.css({ height: menu.height()});
      menu.data('state', 'collapse');
      menu.addClass('menu__state_collapse');
      pageLeft.addClass('page__left_state_collapse');
      pageRight.addClass('page__right_state_expand');
      menuSwitchArrow.text('»');
      document.cookie = 'menu-state=collapse';
    }

    function expandTree() {
      menu.css({ height: 'auto'});
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

    $('.internal.image-reference').on('click', function(event){
      event.preventDefault();
    });

    getTreeState();
  });
})(jQuery);
