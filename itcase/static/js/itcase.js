$(function() {

  var content = $('.wy-nav-content-wrap');
  var sidebar = $('.wy-nav-side');
  var sidebar_button = $('.wy-nav-side-switch');
  var sidebar_arrow = $('.wy-nav-side-switch__arrow');


  function toggle_sidebar() {
    console.log(sidebar.width());
    if (content.hasClass("wy-nav-content-wrap-collapse"))
      expand_sidebar();
    else
      collapse_sidebar();
  }

  function collapse_sidebar(navHeight) {
    content.addClass("wy-nav-content-wrap-collapse");
    sidebar.css({ 'width': '12px', 'height': sidebar.height() });
    sidebar_arrow.text('»');
    sidebar.attr('title', _('Expand sidebar'));
    document.cookie = 'sidebar=collapsed';
  }

  function expand_sidebar() {
    content.removeClass("wy-nav-content-wrap-collapse");
    sidebar.css({ 'width': '300px', 'height': 'auto' });
    sidebar_arrow.text('«');
    sidebar.attr('title', _('Collapse sidebar'));
    document.cookie = 'sidebar=expanded';
  }

  function set_position_from_cookie() {
    if (!document.cookie)
      return;
    var items = document.cookie.split(';');
    for(var k=0; k<items.length; k++) {
      var key_val = items[k].split('=');
      var key = key_val[0];
      if (key == 'sidebar') {
        var value = key_val[1];
        if (value == 'collapsed')
          collapse_sidebar();
        else if (value == 'expanded')
          expand_sidebar();
      }
    }
  }
  sidebar_button.click(toggle_sidebar);
  set_position_from_cookie();
});
