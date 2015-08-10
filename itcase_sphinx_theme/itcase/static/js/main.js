'use strict';

if (typeof $ === 'undefined') { require('jquery'); }
if (typeof Cookies === 'undefined') {
  var Cookies = require('./vendor/js.cookie.js');
}

var leftHeight = $('.page__left').height(),
    rightHeight = $('.page__right').height();


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
      menu.css({ width: '12px', height: menu.height()});
      menu.data('state', 'collapse');
      menu.addClass('menu_state_collapse');
      pageLeft.addClass('page__left_state_collapse');
      pageRight.addClass('page__right_state_expand');
      menuSwitchArrow.text('»');
      document.cookie = 'menu-state=collapse;path=/';
    }

    function expandTree() {
      menu.css({ width: '300px', height: 'auto'});
      menu.data('state', 'expand');
      menu.removeClass('menu_state_collapse');
      pageLeft.removeClass('page__left_state_collapse');
      pageRight.removeClass('page__right_state_expand');
      menuSwitchArrow.text('«');
      document.cookie = 'menu-state=expande;path=/';
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

    if(STICKY_MENU === true){

      require('./vendor/enscroll.js');

      $('.menu-inner').enscroll({
          showOnHover: true,
          verticalTrackClass: 'menu-track',
          verticalHandleClass: 'menu-handle'
      });

      if(leftHeight < rightHeight) {
        $('.menu').css({
          position: 'fixed',
          top: '25'
        });
      }
      if($('.menu').height() >= ($(window).height() - '55')){
        $('.menu').css({ height: ($(window).height() - '55') });
        $('.menu-inner').css({ height: $('.menu').height() });
      }  else {
        $('.menu').css({ height: 'auto' });
      }
    }
  });

  if(STICKY_MENU === true){
    $(window).bind('stickyMenu', function() {
      $(window).scroll(function() {

        $('.menu').css({ height: ($(window).height() - '55') });
        $('.menu-inner').css({ height: $('.menu').height() });

        if(leftHeight < rightHeight) {

          var menuPosition =  $('.menu').offset().top + $('.menu').height(),
              screenPosition =  $(window).scrollTop() + $('.menu').height(),
              footerPosition =  $('.footer').offset().top;

          if(menuPosition >= footerPosition) {
            if(screenPosition <= footerPosition){
              $('.menu').css({
                position: 'fixed',
                top: '25',
                margin: 0
              });
            } else {
              $('.menu').css({
                position: 'relative',
                'margin-top': footerPosition - $('.menu').height() - 25
              });
            }
          } else {
            $('.menu').css({
              position: 'fixed',
              top: '25'
            });
          }
        } else {
          $('.menu').css({
            position: 'position',
            top: '0'
          });
        }
      });
    }).trigger('stickyMenu');
  }

  $(window).resize(function() {
    if($('.menu').height() >= ($(window).height() - '55')){
      $('.menu').css({ height: ($(window).height() - '55') });
      $('.menu-inner').css({ height: $('.menu').height() });
    }  else {
      $('.menu').css({ height: 'auto' });
    }
  });

})(jQuery);
