(function($){

  'use strict';

  $(window).load(function(){

    var content = $('.wy-nav-content-wrap'),
        sidebar = $('.wy-nav-side'),
        sidebarButton = $('.wy-nav-side-switch'),
        sidebarArrow = $('.wy-nav-side-switch__arrow');

    function toggleSidebar() {
      if (content.hasClass('wy-nav-content-wrap-collapse')) {
        expandSidebar();
      } else {
        collapseSidebar();
      }
    }

    function collapseSidebar(navHeight) {
      content.addClass('wy-nav-content-wrap-collapse');
      sidebar.css({ width: '12px', height: navHeight });
      sidebarArrow.text('»');
      sidebar.attr('title', ('Expand sidebar'));
      document.cookie = 'sidebar=collapsed';
    }

    function expandSidebar() {
      content.removeClass('wy-nav-content-wrap-collapse');
      sidebar.css({ width: '300px', height: 'auto' });
      sidebarArrow.text('«');
      sidebar.attr('title', ('Collapse sidebar'));
      document.cookie = 'sidebar=expanded';
    }

    function getSidebarState() {
      if (!document.cookie) { return; }
      var items = document.cookie.split(';');
      for(var k=0; k<items.length; k++) {
        var keyVal = items[k].split('=');
        var key = keyVal[0];
        if (key === 'sidebar') {
          var value = keyVal[1];
          if (value === 'collapsed'){
            collapseSidebar();
          } else if (value === 'expanded') {
            expandSidebar();
          }
        }
      }
    }

    sidebarButton.click(toggleSidebar);
    getSidebarState();

    window.SphinxRtdTheme = (function(jquery) {
      var stickyNav = (function() {
        var navBar,
            win,
            stickyNavCssClass = 'stickynav',
            applyStickNav = function() {
              if (navBar.height() <= win.height()) {
                navBar.addClass(stickyNavCssClass);
              } else {
                navBar.removeClass(stickyNavCssClass);
              }
            },
            enable = function() {
              applyStickNav();
              win.on('resize', applyStickNav);
            },
            init = function() {
              navBar = jquery('nav.wy-nav-side:first');
              win    = jquery(window);
            };
        jquery(init);
        return {
          enable : enable
        };
      }());
      return {
        StickyNav : stickyNav
      };
    }($));

    $(document ).ready(function() {
      // Shift nav in mobile when clicking the menu.
      $(document).on('click', '[data-toggle="wy-nav-top"]', function() {
        $('[data-toggle="wy-nav-shift"]').toggleClass('shift');
        $('[data-toggle="rst-versions"]').toggleClass('shift');
      });

      // Close menu when you click a link.
      $(document).on('click',
        '.wy-menu-vertical .current ul li a',function() {
          $('[data-toggle="wy-nav-shift"]').removeClass('shift');
          $('[data-toggle="rst-versions"]').toggleClass('shift');
        });

      $(document).on('click',
        '[data-toggle="rst-current-version"]', function(){
          $('[data-toggle="rst-versions"]').toggleClass('shift-up');
        });

      // Make tables responsive
      $('table.docutils:not(.field-list)').wrap(
          '<div class="wy-table-responsive"></div>');
    });

    $(document).on('click', '.rst-other-versions', function() {
      $('.rst-other-versions').show();
      console.log('click');
    });

  });
})(jQuery);