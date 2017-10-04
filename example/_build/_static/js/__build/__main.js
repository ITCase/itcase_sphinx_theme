/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/itcase_sphinx_theme/itcase/static/js/__build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./itcase_sphinx_theme/itcase/static/js/main.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("./node_modules/expose-loader/index.js?Cookies!./itcase_sphinx_theme/itcase/static/js/vendor/js.cookie.js");

const leftHeight = $('.page__left').height();
const rightHeight = $('.page__right').height();

__webpack_require__("./itcase_sphinx_theme/itcase/static/js/vendor/jquery.fancybox.js");
__webpack_require__("./itcase_sphinx_theme/itcase/static/js/vendor/enscroll.js");

$('.internal.image-reference').fancybox({
  padding: 3,
  beforeShow: function () {
    var alt = this.element.find('img').attr('alt');
    this.inner.find('img').attr('alt', alt);
    this.title = alt;
  },
  helpers: {
    title: {
      type: 'over'
    },
    overlay: {
      locked: false
    }
  }
});

const menu = $('.menu');
const menuSwitch = $('.menu-switch');
const menuSwitchArrow = $('.menu-switch__arrow');

const pageLeft = $('.page__left');
const pageRight = $('.page__right');

function getTreeState() {
  if (!document.cookie) {
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
  menu.css({
    width: '12px',
    height: menu.height()
  });
  menu.data('state', 'collapse');
  menu.addClass('menu_state_collapse');
  pageLeft.addClass('page__left_state_collapse');
  pageRight.addClass('page__right_state_expand');
  menuSwitchArrow.text('»');
  document.cookie = 'menu-state=collapse;path=/';
}

function expandTree() {
  menu.css({
    width: '300px',
    height: 'auto'
  });
  menu.data('state', 'expand');
  menu.removeClass('menu_state_collapse');
  pageLeft.removeClass('page__left_state_collapse');
  pageRight.removeClass('page__right_state_expand');
  menuSwitchArrow.text('«');
  document.cookie = 'menu-state=expande;path=/';
}

$(menuSwitch).on('click', () => {
  if (menu.data('state') === 'collapse') {
    expandTree();
    menu.data('state', 'expand');
  } else if (menu.data('state') === 'expand') {
    collapseTree();
    menu.data('state', 'collapse');
  }
});

$('.internal.image-reference').on('click', event => {
  event.preventDefault();
});

getTreeState();

if (STICKY_MENU === true) {
  $('.menu-inner').enscroll({
    showOnHover: true,
    verticalTrackClass: 'menu-track',
    verticalHandleClass: 'menu-handle'
  });

  if (leftHeight < rightHeight) {
    $('.menu').css({
      position: 'fixed',
      top: '25'
    });
  }
  if ($('.menu').height() >= $(window).height() - '55') {
    $('.menu').css({ height: $(window).height() - '55' });
    $('.menu-inner').css({ height: $('.menu').height() });
  } else {
    $('.menu').css({ height: 'auto' });
  }
}

if (STICKY_MENU === true) {
  $(window).bind('stickyMenu', () => {
    $(window).scroll(() => {
      $('.menu').css({ height: $(window).height() - '55' });
      $('.menu-inner').css({ height: $('.menu').height() });
      if (leftHeight < rightHeight) {
        const menuPosition = $('.menu').offset().top + $('.menu').height();
        const screenPosition = $(window).scrollTop() + $('.menu').height();
        const footerPosition = $('.footer').offset().top;

        if (menuPosition >= footerPosition) {
          if (screenPosition <= footerPosition) {
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

$(window).resize(() => {
  if ($('.menu').height() >= $(window).height() - '55') {
    $('.menu').css({ height: $(window).height() - '55' });
    $('.menu-inner').css({ height: $('.menu').height() });
  } else {
    $('.menu').css({ height: 'auto' });
  }
});

/***/ }),

/***/ "./itcase_sphinx_theme/itcase/static/js/vendor/enscroll.js":
/***/ (function(module, exports) {

/*global jQuery:false*/

/**
 * enscroll.js - jQuery plugin to add custom scrollbars to HTML block elements
 * Copyright (C) 2012 Jason T. Stoudt
 * Released under the MIT license
 * http://enscrollplugin.com/license.html
 **/

;(function ($, win, doc, undefined) {

	var defaultSettings = {
		verticalScrolling: true,
		horizontalScrolling: false,
		verticalScrollerSide: 'right',
		showOnHover: false,
		scrollIncrement: 20,
		minScrollbarLength: 40,
		pollChanges: true,
		drawCorner: true,
		drawScrollButtons: false,
		clickTrackToScroll: true,
		easingDuration: 500,
		propagateWheelEvent: true,
		verticalTrackClass: 'vertical-track',
		horizontalTrackClass: 'horizontal-track',
		horizontalHandleClass: 'horizontal-handle',
		verticalHandleClass: 'vertical-handle',
		scrollUpButtonClass: 'scroll-up-btn',
		scrollDownButtonClass: 'scroll-down-btn',
		scrollLeftButtonClass: 'scroll-left-btn',
		scrollRightButtonClass: 'scroll-right-btn',
		cornerClass: 'scrollbar-corner',
		zIndex: 1,
		addPaddingToPane: true,
		horizontalHandleHTML: '<div class="left"></div><div class="right"></div>',
		verticalHandleHTML: '<div class="top"></div><div class="bottom"></div>'
	},
	    preventDefault = function (event) {
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}

		if (event.stopPropagation) {
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		}
	},


	// normalize requestAnimationFrame function and polyfill if needed
	reqAnimFrame = win.requestAnimationFrame || win.mozRequestAnimationFrame || win.webkitRequestAnimationFrame || win.oRequestAnimationFrame || win.msRequestAnimationFrame || function (f) {
		setTimeout(f, 17);
	},
	    getComputedValue = function (elem, property) {
		var w = $(elem).css(property),
		    matches = /^-?\d+/.exec(w);
		return matches ? +matches[0] : 0;
	},
	    testScrollHeight = function (nodeName) {
		var styles = {
			width: '5px',
			height: '1px',
			overflow: 'hidden',
			padding: '8px 0',
			visibility: 'hidden',
			whiteSpace: 'pre-line',
			font: '10px/1 serif'
		},
		    pane = document.createElement(nodeName),
		    textNode = document.createTextNode('a\na'),
		    result,
		    attr;

		for (attr in styles) {
			pane.style[attr] = styles[attr];
		}

		pane.appendChild(textNode);
		document.body.appendChild(pane);

		result = pane.scrollHeight < 28;

		document.body.removeChild(pane);

		return result;
	},
	    PI_OVER_2 = 0.5 * Math.PI,
	    TEN_LOG2 = 10 * Math.log(2),
	    easeOutSin = function (c, d, t) {
		var b = PI_OVER_2 / d,
		    a = c * b;

		return Math.round(a * Math.cos(b * t));
	},
	    easeOutExpo = function (c, d, t) {
		return Math.round(c * TEN_LOG2 * Math.pow(2, -10 * t / d + 1) / d);
	},
	    timeFromPosition = function (b, c, d, x) {
		return 2 * d / Math.PI * Math.asin((x - b) / c);
	},
	    showScrollbars = function (scheduleHide) {
		var data = $(this).data('enscroll'),
		    that = this,
		    settings = data.settings,
		    hideScrollbars = function () {
			var data = $(this).data('enscroll'),
			    settings = data.settings;

			if (data && settings.showOnHover) {
				if (settings.verticalScrolling && $(data.verticalTrackWrapper).is(':visible')) {
					$(data.verticalTrackWrapper).stop().fadeTo(275, 0);
				}

				if (settings.horizontalScrolling && $(data.horizontalTrackWrapper).is(':visible')) {
					$(data.horizontalTrackWrapper).stop().fadeTo(275, 0);
				}
				data._fadeTimer = null;
			}
		};

		if (data && settings.showOnHover) {
			if (data._fadeTimer) {
				clearTimeout(data._fadeTimer);
			} else {
				if (settings.verticalScrolling && $(data.verticalTrackWrapper).is(':visible')) {
					$(data.verticalTrackWrapper).stop().fadeTo(275, 1);
				}

				if (settings.horizontalScrolling && $(data.horizontalTrackWrapper).is(':visible')) {
					$(data.horizontalTrackWrapper).stop().fadeTo(275, 1);
				}
			}

			if (scheduleHide !== false) {
				data._fadeTimer = setTimeout(function () {
					hideScrollbars.call(that);
				}, 1750);
			}
		}
	},
	    scrollVertical = function (pane, dy) {
		var $pane = $(pane),
		    data = $pane.data('enscroll'),
		    y0 = $pane.scrollTop();

		if (data && data.settings.verticalScrolling) {
			$pane.scrollTop(y0 + dy);
			if (data.settings.showOnHover) {
				showScrollbars.call(pane);
			}
		}
	},
	    scrollHorizontal = function (pane, dx) {
		var $pane = $(pane),
		    data = $pane.data('enscroll'),
		    x0 = $pane.scrollLeft();
		if (data && data.settings.horizontalScrolling) {
			$pane.scrollLeft(x0 + dx);
			if (data.settings.showOnHover) {
				showScrollbars.call(pane);
			}
		}
	},
	    startVerticalDrag = function (event) {
		// only handle events for left mouse button dragging
		if (event.which !== 1) {
			return;
		}

		var pane = event.data.pane,
		    $pane = $(pane),
		    data = $pane.data('enscroll'),
		    dragging = true,
		    $track,
		    handle,
		    handleY,
		    oldHandleY,
		    mouseYOffset,
		    trackYOffset,
		    bodyCursor,
		    trackDiff,
		    paneDiff,
		    moveHandle = function () {
			if (!dragging) {
				return;
			}

			if (handleY !== oldHandleY) {
				if (!data._scrollingY) {
					data._scrollingY = true;
					data._startY = $pane.scrollTop();
					reqAnimFrame(function () {
						scrollAnimate($pane);
					});
				}

				handle.style.top = handleY + 'px';

				data._endY = handleY * paneDiff / trackDiff;
				oldHandleY = handleY;
			}

			reqAnimFrame(moveHandle);

			if (data.settings.showOnHover) {
				showScrollbars.call(pane);
			}
		},
		    moveDrag = function (event) {
			if (dragging) {
				handleY = event.clientY - trackYOffset - mouseYOffset;
				handleY = Math.min(handleY < 0 ? 0 : handleY, trackDiff);
			}
			return false;
		},
		    endDrag = function () {
			dragging = false;

			doc.body.style.cursor = bodyCursor;
			this.style.cursor = '';
			$track.removeClass('dragging');

			$(doc.body).off('mousemove.enscroll.vertical').off('mouseup.enscroll.vertical');

			$(doc).off('mouseout.enscroll.vertical');

			$pane.on('scroll.enscroll.pane', function (event) {
				paneScrolled.call(this, event);
			});

			return false;
		};

		$track = $(data.verticalTrackWrapper).find('.enscroll-track');
		handle = $track.children().first()[0];
		handleY = parseInt(handle.style.top, 10);
		paneDiff = pane.scrollHeight - (data._scrollHeightNoPadding ? $(pane).height() : $(pane).innerHeight());

		mouseYOffset = event.clientY - $(handle).offset().top;
		trackDiff = $track.height() - $(handle).outerHeight();
		trackYOffset = $track.offset().top;

		$pane.off('scroll.enscroll.pane');

		$(doc.body).on({
			'mousemove.enscroll.vertical': moveDrag,
			'mouseup.enscroll.vertical': function (event) {
				endDrag.call(handle, event);
			}
		});

		$(doc).on('mouseout.enscroll.vertical', function (event) {
			if (event.target.nodeName && event.target.nodeName.toUpperCase() === 'HTML') {
				endDrag.call(handle, event);
			}
		});

		if (!$track.hasClass('dragging')) {
			$track.addClass('dragging');
			bodyCursor = $(doc.body).css('cursor');
			this.style.cursor = doc.body.style.cursor = 'ns-resize';
		}

		reqAnimFrame(moveHandle);

		return false;
	},
	    startHorizontalDrag = function (event) {
		// dragging the scrollbar handle only works with left mouse button
		if (event.which !== 1) {
			return;
		}

		var pane = event.data.pane,
		    $pane = $(pane),
		    data = $(pane).data('enscroll'),
		    dragging = true,
		    $track,
		    handle,
		    handleX,
		    oldHandleX,
		    paneDiff,
		    mouseXOffset,
		    trackXOffset,
		    bodyCursor,
		    trackDiff,
		    moveHandle = function () {
			if (!dragging) {
				return;
			}

			if (handleX !== oldHandleX) {
				if (!data._scrollingX) {
					data._scrollingX = true;
					data._startX = $pane.scrollLeft();
					reqAnimFrame(function () {
						scrollAnimate($pane);
					});
				}

				handle.style.left = handleX + 'px';

				data._endX = handleX * paneDiff / trackDiff;
				oldHandleX = handleX;
			}

			reqAnimFrame(moveHandle);

			if (data.settings.showOnHover) {
				showScrollbars.call(pane);
			}
		},
		    moveDrag = function (event) {
			if (dragging) {
				handleX = event.clientX - trackXOffset - mouseXOffset;
				handleX = Math.min(handleX < 0 ? 0 : handleX, trackDiff);
			}
			return false;
		},
		    endDrag = function () {
			dragging = false;

			$track.removeClass('dragging');

			doc.body.style.cursor = bodyCursor;
			this.style.cursor = '';
			$track.removeClass('dragging');

			$(doc.body).off('mousemove.enscroll.horizontal').off('mouseup.enscroll.horizontal');

			$(doc).off('mouseout.enscroll.horizontal');

			$pane.on('scroll.enscroll.pane', function (event) {
				paneScrolled.call(this, event);
			});

			return false;
		};

		$track = $(data.horizontalTrackWrapper).find('.enscroll-track');
		handle = $track.children().first()[0];
		handleX = parseInt(handle.style.left, 10);
		paneDiff = pane.scrollWidth - $(pane).innerWidth();
		mouseXOffset = event.clientX - $(handle).offset().left;
		trackDiff = $track.width() - $(handle).outerWidth();
		trackXOffset = $track.offset().left;

		$pane.off('scroll.enscroll.pane');

		$(doc.body).on({
			'mousemove.enscroll.horizontal': moveDrag,
			'mouseup.enscroll.horizontal': function (event) {
				endDrag.call(handle, event);
			}
		});

		$(doc).on('mouseout.enscroll.horizontal', function (event) {
			if (event.target.nodeName && event.target.nodeName.toUpperCase() === 'HTML') {
				endDrag.call(handle, event);
			}
		});

		if (!$track.hasClass('dragging')) {
			$track.addClass('dragging');
			bodyCursor = $('body').css('cursor');
			this.style.cursor = doc.body.style.cursor = 'ew-resize';
		}

		reqAnimFrame(moveHandle);

		return false;
	},
	    scrollAnimate = function ($pane) {
		var data = $pane.data('enscroll'),
		    d = data._duration,
		    c,
		    curPos,
		    t;

		if (data._scrollingX === true) {
			c = data._endX - data._startX;
			if (c === 0) {
				data._scrollingX = false;
			} else {
				curPos = $pane.scrollLeft();
				t = timeFromPosition(data._startX, c, d, curPos);
				if (c > 0) {
					if (curPos >= data._endX || curPos < data._startX) {
						data._scrollingX = false;
					} else {
						scrollHorizontal($pane, Math.max(1, easeOutSin(c, d, t)));
						reqAnimFrame(function () {
							scrollAnimate($pane);
						});
					}
				} else {
					if (curPos <= data._endX || curPos > data._startX) {
						data._scrollingX = false;
					} else {
						scrollHorizontal($pane, Math.min(-1, easeOutSin(c, d, t)));
						reqAnimFrame(function () {
							scrollAnimate($pane);
						});
					}
				}
			}
		}

		if (data._scrollingY === true) {
			c = data._endY - data._startY;
			if (c === 0) {
				data._scrollingY = false;
			} else {
				curPos = $pane.scrollTop();
				t = timeFromPosition(data._startY, c, d, curPos);
				if (c > 0) {
					if (curPos >= data._endY || curPos < data._startY) {
						data._scrollingY = false;
					} else {
						scrollVertical($pane, Math.max(1, easeOutSin(c, d, t)));
						reqAnimFrame(function () {
							scrollAnimate($pane);
						});
					}
				} else {
					if (curPos <= data._endY || curPos > data._startY) {
						data._scrollingY = false;
					} else {
						scrollVertical($pane, Math.min(-1, easeOutSin(c, d, t)));
						reqAnimFrame(function () {
							scrollAnimate($pane);
						});
					}
				}
			}
		}
	},
	    scrollAnimateHorizontal = function ($pane, delta) {
		var data = $pane.data('enscroll'),
		    curPos = $pane.scrollLeft(),
		    scrollMax = $pane[0].scrollWidth - $pane.innerWidth();

		if (!data.settings.horizontalScrolling || data._scrollingY) {
			return false;
		}

		if (!data._scrollingX) {
			data._scrollingX = true;
			data._startX = curPos;
			data._endX = data._startX;
			reqAnimFrame(function () {
				scrollAnimate($pane);
			});
		}

		data._endX = delta > 0 ? Math.min(curPos + delta, scrollMax) : Math.max(0, curPos + delta);

		return delta < 0 && curPos > 0 || delta > 0 && curPos < scrollMax;
	},
	    scrollAnimateVertical = function ($pane, delta) {
		var data = $pane.data('enscroll'),
		    curPos = $pane.scrollTop(),
		    scrollMax = $pane[0].scrollHeight - (data._scrollHeightNoPadding ? $pane.height() : $pane.innerHeight());

		if (!data.settings.verticalScrolling || data._scrollingX) {
			return false;
		}

		if (!data._scrollingY) {
			data._scrollingY = true;
			data._startY = curPos;
			data._endY = data._startY;
			reqAnimFrame(function () {
				scrollAnimate($pane);
			});
		}

		data._endY = delta > 0 ? Math.min(curPos + delta, scrollMax) : Math.max(0, curPos + delta);

		return delta < 0 && curPos > 0 || delta > 0 && curPos < scrollMax;
	},
	    mouseScroll = function (event) {
		var $pane = $(this),
		    data = $pane.data('enscroll'),
		    scrollIncrement = data.settings.scrollIncrement,
		    deltaX = 'deltaX' in event ? -event.deltaX : 'wheelDeltaX' in event ? event.wheelDeltaX : 0,
		    deltaY = 'deltaY' in event ? -event.deltaY : 'wheelDeltaY' in event ? event.wheelDeltaY : 'wheelDelta' in event ? event.wheelDelta : 0,
		    delta;

		if (Math.abs(deltaX) > Math.abs(deltaY)) {
			delta = (deltaX > 0 ? -scrollIncrement : scrollIncrement) << 2;
			if (scrollAnimateHorizontal($pane, delta) || !data.settings.propagateWheelEvent) {
				preventDefault(event);
			}
		} else {
			delta = (deltaY > 0 ? -scrollIncrement : scrollIncrement) << 2;
			if (scrollAnimateVertical($pane, delta) || !data.settings.propagateWheelEvent) {
				preventDefault(event);
			}
		}
	},
	    paneScrolled = function () {
		var $this = $(this),
		    data = $this.data('enscroll'),
		    handle,
		    track,
		    pct;

		if (data) {
			if (data.settings.verticalScrolling) {
				track = $(data.verticalTrackWrapper).find('.enscroll-track')[0];
				handle = track.firstChild;
				pct = $this.scrollTop() / (this.scrollHeight - (data._scrollHeightNoPadding ? $this.height() : $this.innerHeight()));
				pct = isNaN(pct) ? 0 : pct;

				handle.style.top = pct * ($(track).height() - $(handle).outerHeight()) + 'px';
			}

			if (data.settings.horizontalScrolling) {
				track = $(data.horizontalTrackWrapper).find('.enscroll-track')[0];
				handle = track.firstChild;
				pct = $this.scrollLeft() / (this.scrollWidth - $this.innerWidth());
				pct = isNaN(pct) ? 0 : pct;

				handle.style.left = pct * ($(track).width() - $(handle).innerWidth()) + 'px';
			}
		}
	},
	    keyHandler = function (event) {
		var $this = $(this),
		    data = $this.data('enscroll'),
		    scrollIncrement;

		// dont' have key events if this element is a user-input element
		if (/(input)|(select)|(textarea)/i.test(this.nodeName)) {
			return;
		}

		// don't handle events that have just bubbled up
		if (event.target === this && data) {
			scrollIncrement = data.settings.scrollIncrement;

			switch (event.keyCode) {
				case 32: // space
				case 34:
					// page down
					scrollAnimateVertical($this, $this.height());
					return false;
				case 33:
					// page up
					scrollAnimateVertical($this, -$this.height());
					return false;
				case 35:
					// end
					scrollAnimateVertical($this, this.scrollHeight);
					return false;
				case 36:
					// home
					scrollAnimateVertical($this, -this.scrollHeight);
					return false;
				case 37:
					// left
					scrollAnimateHorizontal($this, -scrollIncrement);
					return false;
				case 38:
					// up
					scrollAnimateVertical($this, -scrollIncrement);
					return false;
				case 39:
					// right
					scrollAnimateHorizontal($this, scrollIncrement);
					return false;
				case 40:
					// down
					scrollAnimateVertical($this, scrollIncrement);
					return false;
			}

			return true;
		}
	},
	    dragHandler = function () {
		var pane = this,
		    settings = $(pane).data('enscroll').settings,
		    dragging = true,
		    deltaX = 0,
		    deltaY = 0,
		    paneTop = $(pane).offset().top,
		    paneBottom = paneTop + $(pane).outerHeight(),
		    paneLeft = $(pane).offset().left,
		    paneRight = paneLeft + $(pane).outerWidth(),
		    dragMove = function (event) {
			var x = event.pageX,
			    y = event.pageY;

			deltaX = x < paneLeft ? x - paneLeft : x > paneRight ? x - paneRight : 0;

			deltaY = y < paneTop ? y - paneTop : y > paneBottom ? y - paneBottom : 0;
		},
		    dragPoll = function () {
			if (settings.horizontalScrolling && deltaX) {
				scrollHorizontal(pane, parseInt(deltaX / 4, 10));
			}
			if (settings.verticalScrolling && deltaY) {
				scrollVertical(pane, parseInt(deltaY / 4, 10));
			}
			if (dragging) {
				reqAnimFrame(dragPoll);
			}
		},
		    dragEnd = function () {
			dragging = false;
			$(doc).off('mousemove.enscroll.pane').off('mouseup.enscroll.pane');
		};

		reqAnimFrame(dragPoll);

		$(doc).on({
			'mousemove.enscroll.pane': dragMove,
			'mouseup.enscroll.pane': dragEnd
		});
	},
	    touchStart = function (event) {
		var touchX,
		    touchY,
		    touchAxis,
		    touchX0,
		    touchY0,
		    touchStarted,
		    touchDelta,
		    pane = this,
		    touchMove = function (event) {
			touchX = event.touches[0].clientX;
			touchY = event.touches[0].clientY;

			if (!touchAxis) {
				touchAxis = touchY === touchY0 && touchX === touchX0 ? undefined : Math.abs(touchY0 - touchY) > Math.abs(touchX0 - touchX) ? 'y' : 'x';
			}

			preventDefault(event);
		},
		    touchPoll = function () {
			if (!touchStarted) {
				return;
			}

			if (touchAxis === 'y') {
				scrollVertical(pane, touchY0 - touchY);
				touchDelta = touchY0 - touchY;
				touchY0 = touchY;
			} else if (touchAxis === 'x') {
				scrollHorizontal(pane, touchX0 - touchX);
				touchDelta = touchX0 - touchX;
				touchX0 = touchX;
			}

			reqAnimFrame(touchPoll);
		},
		    touchEnd = function () {
			var t = 0,
			    d = Math.abs(touchDelta * 1.5);

			this.removeEventListener('touchmove', touchMove, false);
			this.removeEventListener('touchend', touchEnd, false);
			touchStarted = false;

			reqAnimFrame(function touchFinish() {
				var dx;

				if (t === d || touchStarted) {
					return;
				}

				dx = easeOutExpo(touchDelta, d, t);

				if (!isNaN(dx) && dx !== 0) {
					t += 1;
					if (touchAxis === 'y') {
						scrollVertical(pane, dx);
					} else {
						scrollHorizontal(pane, dx);
					}

					reqAnimFrame(touchFinish);
				}
			});
		};

		if (event.touches.length === 1) {
			touchX0 = event.touches[0].clientX;
			touchY0 = event.touches[0].clientY;
			touchStarted = true;
			this.addEventListener('touchmove', touchMove, false);
			this.addEventListener('touchend', touchEnd, false);
			reqAnimFrame(touchPoll);
		}
	},
	    api = {
		reposition: function () {
			return this.each(function () {
				var $this = $(this),
				    data = $this.data('enscroll'),
				    positionElem = function (elem, x, y) {
					elem.style.left = x + 'px';
					elem.style.top = y + 'px';
				},
				    corner,
				    trackWrapper,
				    offset;

				if (data) {
					offset = $this.position();
					corner = data.corner;
					if (data.settings.verticalScrolling) {
						trackWrapper = data.verticalTrackWrapper;
						positionElem(trackWrapper, data.settings.verticalScrollerSide === 'right' ? offset.left + $this.outerWidth() - $(trackWrapper).width() - getComputedValue(this, 'border-right-width') : offset.left + getComputedValue(this, 'border-left-width'), offset.top + getComputedValue(this, 'border-top-width'));
					}

					if (data.settings.horizontalScrolling) {
						trackWrapper = data.horizontalTrackWrapper;
						positionElem(trackWrapper, offset.left + getComputedValue(this, 'border-left-width'), offset.top + $this.outerHeight() - $(trackWrapper).height() - getComputedValue(this, 'border-bottom-width'));
					}

					if (corner) {
						positionElem(corner, offset.left + $this.outerWidth() - $(corner).outerWidth() - getComputedValue(this, 'border-right-width'), offset.top + $this.outerHeight() - $(corner).outerHeight() - getComputedValue(this, 'border-bottom-width'));
					}
				}
			});
		},

		resize: function () {
			return this.each(function () {
				var $this = $(this),
				    data = $this.data('enscroll'),
				    settings,
				    paneHeight,
				    paneWidth,
				    trackWrapper,
				    pct,
				    track,
				    trackWidth,
				    trackHeight,
				    $scrollUpBtn,
				    $scrollDownBtn,
				    $scrollLeftBtn,
				    $scrollRightBtn,
				    handle,
				    handleWidth,
				    handleHeight,
				    prybar;

				if (!data) {
					return true;
				}

				settings = data.settings;

				if ($this.is(':visible')) {
					if (settings.verticalScrolling) {
						trackWrapper = data.verticalTrackWrapper;
						paneHeight = $this.innerHeight();
						pct = paneHeight / this.scrollHeight;
						track = $(trackWrapper).find('.enscroll-track')[0];
						$scrollUpBtn = $(trackWrapper).find('.' + settings.scrollUpButtonClass);
						$scrollDownBtn = $(trackWrapper).find('.' + settings.scrollDownButtonClass);

						trackHeight = settings.horizontalScrolling ? paneHeight - $(data.horizontalTrackWrapper).find('.enscroll-track').outerHeight() : paneHeight;
						trackHeight -= $(track).outerHeight() - $(track).height() + $scrollUpBtn.outerHeight() + $scrollDownBtn.outerHeight();

						handle = track.firstChild;
						handleHeight = Math.max(pct * trackHeight, settings.minScrollbarLength);
						handleHeight -= $(handle).outerHeight() - $(handle).height();

						// hide the track first -- this causes less reflows and
						// fixes an IE8 bug that prevents background images
						// from being redrawn
						trackWrapper.style.display = 'none';
						track.style.height = trackHeight + 'px';
						handle.style.height = handleHeight + 'px';
						if (pct < 1) {
							pct = $this.scrollTop() / (this.scrollHeight - $this.height());
							handle.style.top = pct * (trackHeight - handleHeight) + 'px';
							trackWrapper.style.display = 'block';
						}
					}

					if (settings.horizontalScrolling) {
						trackWrapper = data.horizontalTrackWrapper;
						paneWidth = $this.innerWidth();
						pct = paneWidth / this.scrollWidth;
						track = $(trackWrapper).find('.enscroll-track')[0];
						$scrollLeftBtn = $(trackWrapper).find('.' + settings.scrollLeftButtonClass);
						$scrollRightBtn = $(trackWrapper).find('.' + settings.scrollRightButtonClass);

						trackWidth = settings.verticalScrolling ? paneWidth - $(data.verticalTrackWrapper).find('.enscroll-track').outerWidth() : paneWidth;
						trackWidth -= $(track).outerWidth() - $(track).width() + $scrollLeftBtn.outerWidth() + $scrollRightBtn.outerWidth();

						handle = track.firstChild;
						handleWidth = Math.max(pct * trackWidth, settings.minScrollbarLength);
						handleWidth -= $(handle).outerWidth() - $(handle).width();

						// see comment above
						trackWrapper.style.display = 'none';
						track.style.width = trackWidth + 'px';
						handle.style.width = handleWidth + 'px';
						if (pct < 1) {
							pct = $this.scrollLeft() / (this.scrollWidth - $this.width());
							handle.style.left = pct * (trackWidth - handleWidth) + 'px';
							trackWrapper.style.display = 'block';
						}

						if (data._prybar) {
							prybar = data._prybar;
							this.removeChild(prybar);
							if (settings.verticalScrolling) {
								prybar.style.width = this.scrollWidth + $(data.verticalTrackWrapper).find('.enscroll-track').outerWidth() + 'px';
								this.appendChild(prybar);
							}
						}
					}
					if (data.corner) {
						data.corner.style.display = data.verticalTrackWrapper && data.horizontalTrackWrapper && $(data.verticalTrackWrapper).is(':visible') && $(data.horizontalTrackWrapper).is(':visible') ? '' : 'none';
					}
				} else {
					if (settings.verticalScrolling) {
						data.verticalTrackWrapper.style.display = 'none';
					}
					if (settings.horizontalScrolling) {
						data.horizontalTrackWrapper.style.display = 'none';
					}
					if (data.corner) {
						data.corner.style.display = 'none';
					}
				}
			});
		},

		startPolling: function () {
			return this.each(function () {
				var data = $(this).data('enscroll'),
				    pane = this,
				    $pane = $(pane),
				    paneWidth = -1,
				    paneHeight = -1,
				    paneScrollWidth = -1,
				    paneScrollHeight = -1,
				    paneOffset,
				    paneChangeListener = function () {
					if (data.settings.pollChanges) {
						var sw = pane.scrollWidth,
						    sh = pane.scrollHeight,
						    pw = $pane.width(),
						    ph = $pane.height(),
						    offset = $pane.offset();

						if (data.settings.verticalScrolling && (ph !== paneHeight || sh !== paneScrollHeight) || data.settings.horizontalScrolling && (pw !== paneWidth || sw !== paneScrollWidth)) {
							paneScrollWidth = sw;
							paneScrollHeight = sh;

							api.resize.call($pane);
						}

						if (paneOffset.left !== offset.left || paneOffset.top !== offset.top || pw !== paneWidth || ph !== paneHeight) {

							paneOffset = offset;
							paneWidth = pw;
							paneHeight = ph;

							api.reposition.call($pane);
						}

						setTimeout(paneChangeListener, 350);
					}
				};

				if (data) {
					data.settings.pollChanges = true;
					paneScrollHeight = pane.scrollHeight;
					paneScrollWidth = pane.scrollWidth;
					paneOffset = $pane.offset();
					paneChangeListener();
				}
			});
		},

		stopPolling: function () {
			return this.each(function () {
				var data = $(this).data('enscroll');
				if (data) {
					data.settings.pollChanges = false;
				}
			});
		},

		destroy: function () {
			return this.each(function () {
				var $this = $(this),
				    data = $this.data('enscroll'),
				    trackWrapper,
				    mouseScrollHandler;
				if (data) {

					api.stopPolling.call($this);

					mouseScrollHandler = data._mouseScrollHandler;

					if (data.settings.verticalScrolling) {
						trackWrapper = data.verticalTrackWrapper;

						$(trackWrapper).remove();
						trackWrapper = null;
					}

					if (data.settings.horizontalScrolling) {
						trackWrapper = data.horizontalTrackWrapper;

						$(trackWrapper).remove();
						trackWrapper = null;
					}

					// clear the fade timer to prevent an error being thrown
					// when the plugin object is destroyed while the fading
					// scrollbar is visible - shoutout to gpurves
					if (data._fadeTimer) {
						clearTimeout(data._fadeTimer);
					}

					if (data.corner) {
						$(data.corner).remove();
					}

					if (data._prybar && data._prybar.parentNode && data._prybar.parentNode === this) {
						$(data._prybar).remove();
					}

					this.setAttribute('style', data._style || '');

					if (!data._hadTabIndex) {
						$this.removeAttr('tabindex');
					}

					$this.off('scroll.enscroll.pane').off('keydown.enscroll.pane').off('mouseenter.enscroll.pane').off('mousedown.enscroll.pane').data('enscroll', null);

					if (this.removeEventListener) {
						this.removeEventListener('wheel', mouseScrollHandler, false);
						this.removeEventListener('mousewheel', mouseScrollHandler, false);
						this.removeEventListener('touchstart', touchStart, false);
					} else if (this.detachEvent) {
						this.detachEvent('onmousewheel', mouseScrollHandler);
					}

					$(win).off('resize.enscroll.window');
				}
			});
		}
	};

	$.fn.enscroll = function (opts) {

		var settings;
		// handle API method calls
		if (api[opts]) {
			return api[opts].call(this);
		}
		// otherwise, initialize the enscroll element

		// use default settings, and overwrite defaults with options passed in
		settings = $.extend({}, defaultSettings, opts);

		return this.each(function () {

			// don't apply this plugin when both scrolling settings are false
			if (!settings.verticalScrolling && !settings.horizontalScrolling) {
				return;
			}

			var $this = $(this),
			    pane = this,
			    oldStyle = $this.attr('style'),
			    hadTabIndex = true,
			    horizontalTrackWrapper,
			    verticalTrackWrapper,
			    horizontalTrack,
			    verticalTrack,
			    horizontalHandle,
			    verticalHandle,
			    verticalUpButton,
			    verticalDownButton,
			    horizontalLeftButton,
			    horizontalRightButton,
			    trackHeight,
			    trackWidth,
			    corner,
			    outline,
			    tabindex,
			    outlineWidth,
			    prybar,
			    paddingSide,
			    trackWrapperCSS = {
				'position': 'absolute',
				'z-index': settings.zIndex,
				'margin': 0,
				'padding': 0
			},


			// closures to bind events to handlers
			mouseScrollHandler = function (event) {
				mouseScroll.call(pane, event);
			},
			    addHandleHTML = function (handle, html) {
				if (typeof html === 'string') {
					$(handle).html(html);
				} else {
					handle.appendChild(html);
				}
			};

			// if we want vertical scrolling, create and initialize
			// the horizontal scrollbar and its components
			if (settings.verticalScrolling) {
				verticalTrackWrapper = doc.createElement('div');
				verticalTrack = doc.createElement('div');
				verticalHandle = doc.createElement('a');

				$(verticalTrack).css('position', 'relative').addClass('enscroll-track').addClass(settings.verticalTrackClass).appendTo(verticalTrackWrapper);

				if (settings.drawScrollButtons) {
					verticalUpButton = doc.createElement('a');
					verticalDownButton = doc.createElement('a');

					$(verticalUpButton).css({
						'display': 'block',
						'text-decoration': 'none'
					}).attr('href', '').html('&nbsp;').addClass(settings.scrollUpButtonClass).on('click', function () {
						scrollVertical(pane, -settings.scrollIncrement);
						return false;
					}).insertBefore(verticalTrack);

					$(verticalDownButton).css({
						'display': 'block',
						'text-decoration': 'none'
					}).attr('href', '').html('&nbsp;').on('click', function () {
						scrollVertical(pane, settings.scrollIncrement);
						return false;
					}).addClass(settings.scrollDownButtonClass).appendTo(verticalTrackWrapper);
				}

				if (settings.clickTrackToScroll) {
					$(verticalTrack).on('click', function (event) {
						if (event.target === this) {
							scrollAnimateVertical($this, event.pageY > $(verticalHandle).offset().top ? $this.height() : -$this.height());
						}
					});
				}

				$(verticalHandle).css({
					'position': 'absolute',
					'z-index': 1
				}).attr('href', '').addClass(settings.verticalHandleClass).mousedown({ pane: this }, startVerticalDrag).click(function () {
					return false;
				}).appendTo(verticalTrack);

				addHandleHTML(verticalHandle, settings.verticalHandleHTML);

				$(verticalTrackWrapper).css(trackWrapperCSS).insertAfter(this);

				if (settings.showOnHover) {
					$(verticalTrackWrapper).css('opacity', 0).on('mouseover.enscroll.vertical', function () {
						showScrollbars.call(pane, false);
					}).on('mouseout.enscroll.vertical', function () {
						showScrollbars.call(pane);
					});
				}

				trackWidth = $(verticalTrack).outerWidth();

				// move the content in the pane over to make room for
				// the vertical scrollbar
				if (settings.addPaddingToPane) {
					if (settings.verticalScrollerSide === 'right') {
						paddingSide = {
							'padding-right': getComputedValue(this, 'padding-right') + trackWidth + 'px'
						};
					} else {
						paddingSide = {
							'padding-left': getComputedValue(this, 'padding-left') + trackWidth + 'px'
						};
					}

					$this.css($.extend({
						'width': $this.width() - trackWidth + 'px'
					}, paddingSide));
				}

				try {

					outlineWidth = parseInt($this.css('outline-width'), 10);

					if ((outlineWidth === 0 || isNaN(outlineWidth)) && $this.css('outline-style') === 'none') {
						$this.css('outline', 'none');
					}
				} catch (ex) {
					$this.css('outline', 'none');
				}
			}

			// if we want horizontal scrolling, create the elements for and
			// initialize the horizontal track and handle
			if (settings.horizontalScrolling) {
				horizontalTrackWrapper = doc.createElement('div');
				horizontalTrack = doc.createElement('div');
				horizontalHandle = doc.createElement('a');

				$(horizontalTrack).css({
					'position': 'relative',
					'z-index': 1
				}).addClass('enscroll-track').addClass(settings.horizontalTrackClass).appendTo(horizontalTrackWrapper);

				if (settings.drawScrollButtons) {
					horizontalLeftButton = doc.createElement('a');
					horizontalRightButton = doc.createElement('a');

					$(horizontalLeftButton).css('display', 'block').attr('href', '').on('click', function () {
						scrollHorizontal(pane, -settings.scrollIncrement);
						return false;
					}).addClass(settings.scrollLeftButtonClass).insertBefore(horizontalTrack);

					$(horizontalRightButton).css('display', 'block').attr('href', '').on('click', function () {
						scrollHorizontal(pane, settings.scrollIncrement);
						return false;
					}).addClass(settings.scrollRightButtonClass).appendTo(horizontalTrackWrapper);
				}

				if (settings.clickTrackToScroll) {
					$(horizontalTrack).on('click', function (event) {
						if (event.target === this) {
							scrollAnimateHorizontal($this, event.pageX > $(horizontalHandle).offset().left ? $this.width() : -$this.width());
						}
					});
				}

				$(horizontalHandle).css({
					'position': 'absolute',
					'z-index': 1
				}).attr('href', '').addClass(settings.horizontalHandleClass).click(function () {
					return false;
				}).mousedown({ pane: this }, startHorizontalDrag).appendTo(horizontalTrack);

				addHandleHTML(horizontalHandle, settings.horizontalHandleHTML);

				$(horizontalTrackWrapper).css(trackWrapperCSS).insertAfter(this);

				if (settings.showOnHover) {
					$(horizontalTrackWrapper).css('opacity', 0).on('mouseover.enscroll.horizontal', function () {
						showScrollbars.call(pane, false);
					}).on('mouseout.enscroll.horizontal', function () {
						showScrollbars.call(pane);
					});
				}

				trackHeight = $(horizontalTrack).outerHeight();

				if (settings.addPaddingToPane) {
					$this.css({
						'height': $this.height() - trackHeight + 'px',
						'padding-bottom': parseInt($this.css('padding-bottom'), 10) + trackHeight + 'px'
					});
				}

				// we need to add an element to the pane in order to
				// stretch to the scrollWidth of the pane so the content
				// scrolls horizontally beyond the vertical scrollbar
				prybar = document.createElement('div');
				$(prybar).css({
					'width': '1px',
					'height': '1px',
					'visibility': 'hidden',
					'padding': 0,
					'margin': '-1px'
				}).appendTo(this);
			}

			if (settings.verticalScrolling && settings.horizontalScrolling && settings.drawCorner) {
				corner = doc.createElement('div');
				$(corner).addClass(settings.cornerClass).css(trackWrapperCSS).insertAfter(this);
			}

			// add a tabindex attribute to the pane if it doesn't already have one
			// if the element does not have a tabindex in IE6, undefined is returned,
			// all other browsers return an empty string
			tabindex = $this.attr('tabindex');
			if (!tabindex) {
				$this.attr('tabindex', 0);
				hadTabIndex = false;
			}

			// if the outline style is not specified in IE6/7/8, null is returned
			// all other browsers return an empty string
			try {
				outline = $this.css('outline');
				if (!outline || outline.length < 1) {
					$this.css('outline', 'none');
				}
			} catch (ex) {
				$this.css('outline', 'none');
			}

			// register an handler that listens for the pane to scroll, and
			// sync the scrollbars' positions
			$this.on({
				'scroll.enscroll.pane': function (event) {
					paneScrolled.call(this, event);
				},
				'keydown.enscroll.pane': keyHandler,
				'mousedown.enscroll.pane': dragHandler
			}).css('overflow', 'hidden')
			// store the data we need for handling events and destruction
			.data('enscroll', {
				settings: settings,
				horizontalTrackWrapper: horizontalTrackWrapper,
				verticalTrackWrapper: verticalTrackWrapper,
				corner: corner,
				_prybar: prybar,
				_mouseScrollHandler: mouseScrollHandler,
				_hadTabIndex: hadTabIndex,
				_style: oldStyle,
				_scrollingX: false,
				_scrollingY: false,
				_startX: 0,
				_startY: 0,
				_endX: 0,
				_endY: 0,
				_duration: parseInt(settings.easingDuration / 16.66666, 10),
				_scrollHeightNoPadding: testScrollHeight(this.nodeName)
			});

			// reposition the scrollbars if the window is resized
			$(win).on('resize.enscroll.window', function () {
				api.reposition.call($this);
			});

			// if showOnHover is set, attach the hover listeners
			if (settings.showOnHover) {
				$this.on('mouseenter.enscroll.pane', function () {
					showScrollbars.call(this);
				});
			}

			// listen for mouse wheel and touch events and scroll appropriately
			if (this.addEventListener) {
				if ('onwheel' in this || 'WheelEvent' in win && navigator.userAgent.toLowerCase().indexOf('msie') >= 0) {
					this.addEventListener('wheel', mouseScrollHandler, false);
				} else if ('onmousewheel' in this) {
					this.addEventListener('mousewheel', mouseScrollHandler, false);
				}

				this.addEventListener('touchstart', touchStart, false);
			} else if (this.attachEvent) {
				// oldie love
				this.attachEvent('onmousewheel', mouseScrollHandler);
			}

			// start polling for changes in dimension and position
			if (settings.pollChanges) {
				api.startPolling.call($this);
			}

			api.resize.call($this);
			api.reposition.call($this);
		});
	};
})(jQuery, window, document);

/***/ }),

/***/ "./itcase_sphinx_theme/itcase/static/js/vendor/jquery.fancybox.js":
/***/ (function(module, exports) {

/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.5 (Fri, 14 Jun 2013)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */

(function (window, document, $, undefined) {
	"use strict";

	var H = $("html"),
	    W = $(window),
	    D = $(document),
	    F = $.fancybox = function () {
		F.open.apply(this, arguments);
	},
	    IE = navigator.userAgent.match(/msie/i),
	    didUpdate = null,
	    isTouch = document.createTouch !== undefined,
	    isQuery = function (obj) {
		return obj && obj.hasOwnProperty && obj instanceof $;
	},
	    isString = function (str) {
		return str && $.type(str) === "string";
	},
	    isPercentage = function (str) {
		return isString(str) && str.indexOf('%') > 0;
	},
	    isScrollable = function (el) {
		return el && !(el.style.overflow && el.style.overflow === 'hidden') && (el.clientWidth && el.scrollWidth > el.clientWidth || el.clientHeight && el.scrollHeight > el.clientHeight);
	},
	    getScalar = function (orig, dim) {
		var value = parseInt(orig, 10) || 0;

		if (dim && isPercentage(orig)) {
			value = F.getViewport()[dim] / 100 * value;
		}

		return Math.ceil(value);
	},
	    getValue = function (value, dim) {
		return getScalar(value, dim) + 'px';
	};

	$.extend(F, {
		// The current version of fancyBox
		version: '2.1.5',

		defaults: {
			padding: 15,
			margin: 20,

			width: 800,
			height: 600,
			minWidth: 100,
			minHeight: 100,
			maxWidth: 9999,
			maxHeight: 9999,
			pixelRatio: 1, // Set to 2 for retina display support

			autoSize: true,
			autoHeight: false,
			autoWidth: false,

			autoResize: true,
			autoCenter: !isTouch,
			fitToView: true,
			aspectRatio: false,
			topRatio: 0.5,
			leftRatio: 0.5,

			scrolling: 'auto', // 'auto', 'yes' or 'no'
			wrapCSS: '',

			arrows: true,
			closeBtn: true,
			closeClick: false,
			nextClick: false,
			mouseWheel: true,
			autoPlay: false,
			playSpeed: 3000,
			preload: 3,
			modal: false,
			loop: true,

			ajax: {
				dataType: 'html',
				headers: { 'X-fancyBox': true }
			},
			iframe: {
				scrolling: 'auto',
				preload: true
			},
			swf: {
				wmode: 'transparent',
				allowfullscreen: 'true',
				allowscriptaccess: 'always'
			},

			keys: {
				next: {
					13: 'left', // enter
					34: 'up', // page down
					39: 'left', // right arrow
					40: 'up' // down arrow
				},
				prev: {
					8: 'right', // backspace
					33: 'down', // page up
					37: 'right', // left arrow
					38: 'down' // up arrow
				},
				close: [27], // escape key
				play: [32], // space - start/stop slideshow
				toggle: [70] // letter "f" - toggle fullscreen
			},

			direction: {
				next: 'left',
				prev: 'right'
			},

			scrollOutside: true,

			// Override some properties
			index: 0,
			type: null,
			href: null,
			content: null,
			title: null,

			// HTML templates
			tpl: {
				wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
				image: '<img class="fancybox-image" src="{href}" alt="" />',
				iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (IE ? ' allowtransparency="true"' : '') + '></iframe>',
				error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
				closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
				next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
				prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
			},

			// Properties for each animation type
			// Opening fancyBox
			openEffect: 'fade', // 'elastic', 'fade' or 'none'
			openSpeed: 250,
			openEasing: 'swing',
			openOpacity: true,
			openMethod: 'zoomIn',

			// Closing fancyBox
			closeEffect: 'fade', // 'elastic', 'fade' or 'none'
			closeSpeed: 250,
			closeEasing: 'swing',
			closeOpacity: true,
			closeMethod: 'zoomOut',

			// Changing next gallery item
			nextEffect: 'elastic', // 'elastic', 'fade' or 'none'
			nextSpeed: 250,
			nextEasing: 'swing',
			nextMethod: 'changeIn',

			// Changing previous gallery item
			prevEffect: 'elastic', // 'elastic', 'fade' or 'none'
			prevSpeed: 250,
			prevEasing: 'swing',
			prevMethod: 'changeOut',

			// Enable default helpers
			helpers: {
				overlay: true,
				title: true
			},

			// Callbacks
			onCancel: $.noop, // If canceling
			beforeLoad: $.noop, // Before loading
			afterLoad: $.noop, // After loading
			beforeShow: $.noop, // Before changing in current item
			afterShow: $.noop, // After opening
			beforeChange: $.noop, // Before changing gallery item
			beforeClose: $.noop, // Before closing
			afterClose: $.noop // After closing
		},

		//Current state
		group: {}, // Selected group
		opts: {}, // Group options
		previous: null, // Previous element
		coming: null, // Element being loaded
		current: null, // Currently loaded element
		isActive: false, // Is activated
		isOpen: false, // Is currently open
		isOpened: false, // Have been fully opened at least once

		wrap: null,
		skin: null,
		outer: null,
		inner: null,

		player: {
			timer: null,
			isActive: false
		},

		// Loaders
		ajaxLoad: null,
		imgPreload: null,

		// Some collections
		transitions: {},
		helpers: {},

		/*
   *	Static methods
   */

		open: function (group, opts) {
			if (!group) {
				return;
			}

			if (!$.isPlainObject(opts)) {
				opts = {};
			}

			// Close if already active
			if (false === F.close(true)) {
				return;
			}

			// Normalize group
			if (!$.isArray(group)) {
				group = isQuery(group) ? $(group).get() : [group];
			}

			// Recheck if the type of each element is `object` and set content type (image, ajax, etc)
			$.each(group, function (i, element) {
				var obj = {},
				    href,
				    title,
				    content,
				    type,
				    rez,
				    hrefParts,
				    selector;

				if ($.type(element) === "object") {
					// Check if is DOM element
					if (element.nodeType) {
						element = $(element);
					}

					if (isQuery(element)) {
						obj = {
							href: element.data('fancybox-href') || element.attr('href'),
							title: element.data('fancybox-title') || element.attr('title'),
							isDom: true,
							element: element
						};

						if ($.metadata) {
							$.extend(true, obj, element.metadata());
						}
					} else {
						obj = element;
					}
				}

				href = opts.href || obj.href || (isString(element) ? element : null);
				title = opts.title !== undefined ? opts.title : obj.title || '';

				content = opts.content || obj.content;
				type = content ? 'html' : opts.type || obj.type;

				if (!type && obj.isDom) {
					type = element.data('fancybox-type');

					if (!type) {
						rez = element.prop('class').match(/fancybox\.(\w+)/);
						type = rez ? rez[1] : null;
					}
				}

				if (isString(href)) {
					// Try to guess the content type
					if (!type) {
						if (F.isImage(href)) {
							type = 'image';
						} else if (F.isSWF(href)) {
							type = 'swf';
						} else if (href.charAt(0) === '#') {
							type = 'inline';
						} else if (isString(element)) {
							type = 'html';
							content = element;
						}
					}

					// Split url into two pieces with source url and content selector, e.g,
					// "/mypage.html #my_id" will load "/mypage.html" and display element having id "my_id"
					if (type === 'ajax') {
						hrefParts = href.split(/\s+/, 2);
						href = hrefParts.shift();
						selector = hrefParts.shift();
					}
				}

				if (!content) {
					if (type === 'inline') {
						if (href) {
							content = $(isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href); //strip for ie7
						} else if (obj.isDom) {
							content = element;
						}
					} else if (type === 'html') {
						content = href;
					} else if (!type && !href && obj.isDom) {
						type = 'inline';
						content = element;
					}
				}

				$.extend(obj, {
					href: href,
					type: type,
					content: content,
					title: title,
					selector: selector
				});

				group[i] = obj;
			});

			// Extend the defaults
			F.opts = $.extend(true, {}, F.defaults, opts);

			// All options are merged recursive except keys
			if (opts.keys !== undefined) {
				F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
			}

			F.group = group;

			return F._start(F.opts.index);
		},

		// Cancel image loading or abort ajax request
		cancel: function () {
			var coming = F.coming;

			if (!coming || false === F.trigger('onCancel')) {
				return;
			}

			F.hideLoading();

			if (F.ajaxLoad) {
				F.ajaxLoad.abort();
			}

			F.ajaxLoad = null;

			if (F.imgPreload) {
				F.imgPreload.onload = F.imgPreload.onerror = null;
			}

			if (coming.wrap) {
				coming.wrap.stop(true, true).trigger('onReset').remove();
			}

			F.coming = null;

			// If the first item has been canceled, then clear everything
			if (!F.current) {
				F._afterZoomOut(coming);
			}
		},

		// Start closing animation if is open; remove immediately if opening/closing
		close: function (event) {
			F.cancel();

			if (false === F.trigger('beforeClose')) {
				return;
			}

			F.unbindEvents();

			if (!F.isActive) {
				return;
			}

			if (!F.isOpen || event === true) {
				$('.fancybox-wrap').stop(true).trigger('onReset').remove();

				F._afterZoomOut();
			} else {
				F.isOpen = F.isOpened = false;
				F.isClosing = true;

				$('.fancybox-item, .fancybox-nav').remove();

				F.wrap.stop(true, true).removeClass('fancybox-opened');

				F.transitions[F.current.closeMethod]();
			}
		},

		// Manage slideshow:
		//   $.fancybox.play(); - toggle slideshow
		//   $.fancybox.play( true ); - start
		//   $.fancybox.play( false ); - stop
		play: function (action) {
			var clear = function () {
				clearTimeout(F.player.timer);
			},
			    set = function () {
				clear();

				if (F.current && F.player.isActive) {
					F.player.timer = setTimeout(F.next, F.current.playSpeed);
				}
			},
			    stop = function () {
				clear();

				D.unbind('.player');

				F.player.isActive = false;

				F.trigger('onPlayEnd');
			},
			    start = function () {
				if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
					F.player.isActive = true;

					D.bind({
						'onCancel.player beforeClose.player': stop,
						'onUpdate.player': set,
						'beforeLoad.player': clear
					});

					set();

					F.trigger('onPlayStart');
				}
			};

			if (action === true || !F.player.isActive && action !== false) {
				start();
			} else {
				stop();
			}
		},

		// Navigate to next gallery item
		next: function (direction) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.next;
				}

				F.jumpto(current.index + 1, direction, 'next');
			}
		},

		// Navigate to previous gallery item
		prev: function (direction) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.prev;
				}

				F.jumpto(current.index - 1, direction, 'prev');
			}
		},

		// Navigate to gallery item by index
		jumpto: function (index, direction, router) {
			var current = F.current;

			if (!current) {
				return;
			}

			index = getScalar(index);

			F.direction = direction || current.direction[index >= current.index ? 'next' : 'prev'];
			F.router = router || 'jumpto';

			if (current.loop) {
				if (index < 0) {
					index = current.group.length + index % current.group.length;
				}

				index = index % current.group.length;
			}

			if (current.group[index] !== undefined) {
				F.cancel();

				F._start(index);
			}
		},

		// Center inside viewport and toggle position type to fixed or absolute if needed
		reposition: function (e, onlyAbsolute) {
			var current = F.current,
			    wrap = current ? current.wrap : null,
			    pos;

			if (wrap) {
				pos = F._getPosition(onlyAbsolute);

				if (e && e.type === 'scroll') {
					delete pos.position;

					wrap.stop(true, true).animate(pos, 200);
				} else {
					wrap.css(pos);

					current.pos = $.extend({}, current.dim, pos);
				}
			}
		},

		update: function (e) {
			var type = e && e.type,
			    anyway = !type || type === 'orientationchange';

			if (anyway) {
				clearTimeout(didUpdate);

				didUpdate = null;
			}

			if (!F.isOpen || didUpdate) {
				return;
			}

			didUpdate = setTimeout(function () {
				var current = F.current;

				if (!current || F.isClosing) {
					return;
				}

				F.wrap.removeClass('fancybox-tmp');

				if (anyway || type === 'load' || type === 'resize' && current.autoResize) {
					F._setDimension();
				}

				if (!(type === 'scroll' && current.canShrink)) {
					F.reposition(e);
				}

				F.trigger('onUpdate');

				didUpdate = null;
			}, anyway && !isTouch ? 0 : 300);
		},

		// Shrink content to fit inside viewport or restore if resized
		toggle: function (action) {
			if (F.isOpen) {
				F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;

				// Help browser to restore document dimensions
				if (isTouch) {
					F.wrap.removeAttr('style').addClass('fancybox-tmp');

					F.trigger('onUpdate');
				}

				F.update();
			}
		},

		hideLoading: function () {
			D.unbind('.loading');

			$('#fancybox-loading').remove();
		},

		showLoading: function () {
			var el, viewport;

			F.hideLoading();

			el = $('<div id="fancybox-loading"><div></div></div>').click(F.cancel).appendTo('body');

			// If user will press the escape-button, the request will be canceled
			D.bind('keydown.loading', function (e) {
				if ((e.which || e.keyCode) === 27) {
					e.preventDefault();

					F.cancel();
				}
			});

			if (!F.defaults.fixed) {
				viewport = F.getViewport();

				el.css({
					position: 'absolute',
					top: viewport.h * 0.5 + viewport.y,
					left: viewport.w * 0.5 + viewport.x
				});
			}
		},

		getViewport: function () {
			var locked = F.current && F.current.locked || false,
			    rez = {
				x: W.scrollLeft(),
				y: W.scrollTop()
			};

			if (locked) {
				rez.w = locked[0].clientWidth;
				rez.h = locked[0].clientHeight;
			} else {
				// See http://bugs.jquery.com/ticket/6724
				rez.w = isTouch && window.innerWidth ? window.innerWidth : W.width();
				rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
			}

			return rez;
		},

		// Unbind the keyboard / clicking actions
		unbindEvents: function () {
			if (F.wrap && isQuery(F.wrap)) {
				F.wrap.unbind('.fb');
			}

			D.unbind('.fb');
			W.unbind('.fb');
		},

		bindEvents: function () {
			var current = F.current,
			    keys;

			if (!current) {
				return;
			}

			// Changing document height on iOS devices triggers a 'resize' event,
			// that can change document height... repeating infinitely
			W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb') + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);

			keys = current.keys;

			if (keys) {
				D.bind('keydown.fb', function (e) {
					var code = e.which || e.keyCode,
					    target = e.target || e.srcElement;

					// Skip esc key if loading, because showLoading will cancel preloading
					if (code === 27 && F.coming) {
						return false;
					}

					// Ignore key combinations and key events within form elements
					if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
						$.each(keys, function (i, val) {
							if (current.group.length > 1 && val[code] !== undefined) {
								F[i](val[code]);

								e.preventDefault();
								return false;
							}

							if ($.inArray(code, val) > -1) {
								F[i]();

								e.preventDefault();
								return false;
							}
						});
					}
				});
			}

			if ($.fn.mousewheel && current.mouseWheel) {
				F.wrap.bind('mousewheel.fb', function (e, delta, deltaX, deltaY) {
					var target = e.target || null,
					    parent = $(target),
					    canScroll = false;

					while (parent.length) {
						if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
							break;
						}

						canScroll = isScrollable(parent[0]);
						parent = $(parent).parent();
					}

					if (delta !== 0 && !canScroll) {
						if (F.group.length > 1 && !current.canShrink) {
							if (deltaY > 0 || deltaX > 0) {
								F.prev(deltaY > 0 ? 'down' : 'left');
							} else if (deltaY < 0 || deltaX < 0) {
								F.next(deltaY < 0 ? 'up' : 'right');
							}

							e.preventDefault();
						}
					}
				});
			}
		},

		trigger: function (event, o) {
			var ret,
			    obj = o || F.coming || F.current;

			if (!obj) {
				return;
			}

			if ($.isFunction(obj[event])) {
				ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
			}

			if (ret === false) {
				return false;
			}

			if (obj.helpers) {
				$.each(obj.helpers, function (helper, opts) {
					if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
						F.helpers[helper][event]($.extend(true, {}, F.helpers[helper].defaults, opts), obj);
					}
				});
			}

			D.trigger(event);
		},

		isImage: function (str) {
			return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
		},

		isSWF: function (str) {
			return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
		},

		_start: function (index) {
			var coming = {},
			    obj,
			    href,
			    type,
			    margin,
			    padding;

			index = getScalar(index);
			obj = F.group[index] || null;

			if (!obj) {
				return false;
			}

			coming = $.extend(true, {}, F.opts, obj);

			// Convert margin and padding properties to array - top, right, bottom, left
			margin = coming.margin;
			padding = coming.padding;

			if ($.type(margin) === 'number') {
				coming.margin = [margin, margin, margin, margin];
			}

			if ($.type(padding) === 'number') {
				coming.padding = [padding, padding, padding, padding];
			}

			// 'modal' propery is just a shortcut
			if (coming.modal) {
				$.extend(true, coming, {
					closeBtn: false,
					closeClick: false,
					nextClick: false,
					arrows: false,
					mouseWheel: false,
					keys: null,
					helpers: {
						overlay: {
							closeClick: false
						}
					}
				});
			}

			// 'autoSize' property is a shortcut, too
			if (coming.autoSize) {
				coming.autoWidth = coming.autoHeight = true;
			}

			if (coming.width === 'auto') {
				coming.autoWidth = true;
			}

			if (coming.height === 'auto') {
				coming.autoHeight = true;
			}

			/*
    * Add reference to the group, so it`s possible to access from callbacks, example:
    * afterLoad : function() {
    *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
    * }
    */

			coming.group = F.group;
			coming.index = index;

			// Give a chance for callback or helpers to update coming item (type, title, etc)
			F.coming = coming;

			if (false === F.trigger('beforeLoad')) {
				F.coming = null;

				return;
			}

			type = coming.type;
			href = coming.href;

			if (!type) {
				F.coming = null;

				//If we can not determine content type then drop silently or display next/prev item if looping through gallery
				if (F.current && F.router && F.router !== 'jumpto') {
					F.current.index = index;

					return F[F.router](F.direction);
				}

				return false;
			}

			F.isActive = true;

			if (type === 'image' || type === 'swf') {
				coming.autoHeight = coming.autoWidth = false;
				coming.scrolling = 'visible';
			}

			if (type === 'image') {
				coming.aspectRatio = true;
			}

			if (type === 'iframe' && isTouch) {
				coming.scrolling = 'scroll';
			}

			// Build the neccessary markup
			coming.wrap = $(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo(coming.parent || 'body');

			$.extend(coming, {
				skin: $('.fancybox-skin', coming.wrap),
				outer: $('.fancybox-outer', coming.wrap),
				inner: $('.fancybox-inner', coming.wrap)
			});

			$.each(["Top", "Right", "Bottom", "Left"], function (i, v) {
				coming.skin.css('padding' + v, getValue(coming.padding[i]));
			});

			F.trigger('onReady');

			// Check before try to load; 'inline' and 'html' types need content, others - href
			if (type === 'inline' || type === 'html') {
				if (!coming.content || !coming.content.length) {
					return F._error('content');
				}
			} else if (!href) {
				return F._error('href');
			}

			if (type === 'image') {
				F._loadImage();
			} else if (type === 'ajax') {
				F._loadAjax();
			} else if (type === 'iframe') {
				F._loadIframe();
			} else {
				F._afterLoad();
			}
		},

		_error: function (type) {
			$.extend(F.coming, {
				type: 'html',
				autoWidth: true,
				autoHeight: true,
				minWidth: 0,
				minHeight: 0,
				scrolling: 'no',
				hasError: type,
				content: F.coming.tpl.error
			});

			F._afterLoad();
		},

		_loadImage: function () {
			// Reset preload image so it is later possible to check "complete" property
			var img = F.imgPreload = new Image();

			img.onload = function () {
				this.onload = this.onerror = null;

				F.coming.width = this.width / F.opts.pixelRatio;
				F.coming.height = this.height / F.opts.pixelRatio;

				F._afterLoad();
			};

			img.onerror = function () {
				this.onload = this.onerror = null;

				F._error('image');
			};

			img.src = F.coming.href;

			if (img.complete !== true) {
				F.showLoading();
			}
		},

		_loadAjax: function () {
			var coming = F.coming;

			F.showLoading();

			F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
				url: coming.href,
				error: function (jqXHR, textStatus) {
					if (F.coming && textStatus !== 'abort') {
						F._error('ajax', jqXHR);
					} else {
						F.hideLoading();
					}
				},
				success: function (data, textStatus) {
					if (textStatus === 'success') {
						coming.content = data;

						F._afterLoad();
					}
				}
			}));
		},

		_loadIframe: function () {
			var coming = F.coming,
			    iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime())).attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling).attr('src', coming.href);

			// This helps IE
			$(coming.wrap).bind('onReset', function () {
				try {
					$(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
				} catch (e) {}
			});

			if (coming.iframe.preload) {
				F.showLoading();

				iframe.one('load', function () {
					$(this).data('ready', 1);

					// iOS will lose scrolling if we resize
					if (!isTouch) {
						$(this).bind('load.fb', F.update);
					}

					// Without this trick:
					//   - iframe won't scroll on iOS devices
					//   - IE7 sometimes displays empty iframe
					$(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();

					F._afterLoad();
				});
			}

			coming.content = iframe.appendTo(coming.inner);

			if (!coming.iframe.preload) {
				F._afterLoad();
			}
		},

		_preloadImages: function () {
			var group = F.group,
			    current = F.current,
			    len = group.length,
			    cnt = current.preload ? Math.min(current.preload, len - 1) : 0,
			    item,
			    i;

			for (i = 1; i <= cnt; i += 1) {
				item = group[(current.index + i) % len];

				if (item.type === 'image' && item.href) {
					new Image().src = item.href;
				}
			}
		},

		_afterLoad: function () {
			var coming = F.coming,
			    previous = F.current,
			    placeholder = 'fancybox-placeholder',
			    current,
			    content,
			    type,
			    scrolling,
			    href,
			    embed;

			F.hideLoading();

			if (!coming || F.isActive === false) {
				return;
			}

			if (false === F.trigger('afterLoad', coming, previous)) {
				coming.wrap.stop(true).trigger('onReset').remove();

				F.coming = null;

				return;
			}

			if (previous) {
				F.trigger('beforeChange', previous);

				previous.wrap.stop(true).removeClass('fancybox-opened').find('.fancybox-item, .fancybox-nav').remove();
			}

			F.unbindEvents();

			current = coming;
			content = coming.content;
			type = coming.type;
			scrolling = coming.scrolling;

			$.extend(F, {
				wrap: current.wrap,
				skin: current.skin,
				outer: current.outer,
				inner: current.inner,
				current: current,
				previous: previous
			});

			href = current.href;

			switch (type) {
				case 'inline':
				case 'ajax':
				case 'html':
					if (current.selector) {
						content = $('<div>').html(content).find(current.selector);
					} else if (isQuery(content)) {
						if (!content.data(placeholder)) {
							content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter(content).hide());
						}

						content = content.show().detach();

						current.wrap.bind('onReset', function () {
							if ($(this).find(content).length) {
								content.hide().replaceAll(content.data(placeholder)).data(placeholder, false);
							}
						});
					}
					break;

				case 'image':
					content = current.tpl.image.replace('{href}', href);
					break;

				case 'swf':
					content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
					embed = '';

					$.each(current.swf, function (name, val) {
						content += '<param name="' + name + '" value="' + val + '"></param>';
						embed += ' ' + name + '="' + val + '"';
					});

					content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
					break;
			}

			if (!(isQuery(content) && content.parent().is(current.inner))) {
				current.inner.append(content);
			}

			// Give a chance for helpers or callbacks to update elements
			F.trigger('beforeShow');

			// Set scrolling before calculating dimensions
			current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : scrolling === 'no' ? 'hidden' : scrolling);

			// Set initial dimensions and start position
			F._setDimension();

			F.reposition();

			F.isOpen = false;
			F.coming = null;

			F.bindEvents();

			if (!F.isOpened) {
				$('.fancybox-wrap').not(current.wrap).stop(true).trigger('onReset').remove();
			} else if (previous.prevMethod) {
				F.transitions[previous.prevMethod]();
			}

			F.transitions[F.isOpened ? current.nextMethod : current.openMethod]();

			F._preloadImages();
		},

		_setDimension: function () {
			var viewport = F.getViewport(),
			    steps = 0,
			    canShrink = false,
			    canExpand = false,
			    wrap = F.wrap,
			    skin = F.skin,
			    inner = F.inner,
			    current = F.current,
			    width = current.width,
			    height = current.height,
			    minWidth = current.minWidth,
			    minHeight = current.minHeight,
			    maxWidth = current.maxWidth,
			    maxHeight = current.maxHeight,
			    scrolling = current.scrolling,
			    scrollOut = current.scrollOutside ? current.scrollbarWidth : 0,
			    margin = current.margin,
			    wMargin = getScalar(margin[1] + margin[3]),
			    hMargin = getScalar(margin[0] + margin[2]),
			    wPadding,
			    hPadding,
			    wSpace,
			    hSpace,
			    origWidth,
			    origHeight,
			    origMaxWidth,
			    origMaxHeight,
			    ratio,
			    width_,
			    height_,
			    maxWidth_,
			    maxHeight_,
			    iframe,
			    body;

			// Reset dimensions so we could re-check actual size
			wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');

			wPadding = getScalar(skin.outerWidth(true) - skin.width());
			hPadding = getScalar(skin.outerHeight(true) - skin.height());

			// Any space between content and viewport (margin, padding, border, title)
			wSpace = wMargin + wPadding;
			hSpace = hMargin + hPadding;

			origWidth = isPercentage(width) ? (viewport.w - wSpace) * getScalar(width) / 100 : width;
			origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;

			if (current.type === 'iframe') {
				iframe = current.content;

				if (current.autoHeight && iframe.data('ready') === 1) {
					try {
						if (iframe[0].contentWindow.document.location) {
							inner.width(origWidth).height(9999);

							body = iframe.contents().find('body');

							if (scrollOut) {
								body.css('overflow-x', 'hidden');
							}

							origHeight = body.outerHeight(true);
						}
					} catch (e) {}
				}
			} else if (current.autoWidth || current.autoHeight) {
				inner.addClass('fancybox-tmp');

				// Set width or height in case we need to calculate only one dimension
				if (!current.autoWidth) {
					inner.width(origWidth);
				}

				if (!current.autoHeight) {
					inner.height(origHeight);
				}

				if (current.autoWidth) {
					origWidth = inner.width();
				}

				if (current.autoHeight) {
					origHeight = inner.height();
				}

				inner.removeClass('fancybox-tmp');
			}

			width = getScalar(origWidth);
			height = getScalar(origHeight);

			ratio = origWidth / origHeight;

			// Calculations for the content
			minWidth = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
			maxWidth = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);

			minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
			maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);

			// These will be used to determine if wrap can fit in the viewport
			origMaxWidth = maxWidth;
			origMaxHeight = maxHeight;

			if (current.fitToView) {
				maxWidth = Math.min(viewport.w - wSpace, maxWidth);
				maxHeight = Math.min(viewport.h - hSpace, maxHeight);
			}

			maxWidth_ = viewport.w - wMargin;
			maxHeight_ = viewport.h - hMargin;

			if (current.aspectRatio) {
				if (width > maxWidth) {
					width = maxWidth;
					height = getScalar(width / ratio);
				}

				if (height > maxHeight) {
					height = maxHeight;
					width = getScalar(height * ratio);
				}

				if (width < minWidth) {
					width = minWidth;
					height = getScalar(width / ratio);
				}

				if (height < minHeight) {
					height = minHeight;
					width = getScalar(height * ratio);
				}
			} else {
				width = Math.max(minWidth, Math.min(width, maxWidth));

				if (current.autoHeight && current.type !== 'iframe') {
					inner.width(width);

					height = inner.height();
				}

				height = Math.max(minHeight, Math.min(height, maxHeight));
			}

			// Try to fit inside viewport (including the title)
			if (current.fitToView) {
				inner.width(width).height(height);

				wrap.width(width + wPadding);

				// Real wrap dimensions
				width_ = wrap.width();
				height_ = wrap.height();

				if (current.aspectRatio) {
					while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
						if (steps++ > 19) {
							break;
						}

						height = Math.max(minHeight, Math.min(maxHeight, height - 10));
						width = getScalar(height * ratio);

						if (width < minWidth) {
							width = minWidth;
							height = getScalar(width / ratio);
						}

						if (width > maxWidth) {
							width = maxWidth;
							height = getScalar(width / ratio);
						}

						inner.width(width).height(height);

						wrap.width(width + wPadding);

						width_ = wrap.width();
						height_ = wrap.height();
					}
				} else {
					width = Math.max(minWidth, Math.min(width, width - (width_ - maxWidth_)));
					height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
				}
			}

			if (scrollOut && scrolling === 'auto' && height < origHeight && width + wPadding + scrollOut < maxWidth_) {
				width += scrollOut;
			}

			inner.width(width).height(height);

			wrap.width(width + wPadding);

			width_ = wrap.width();
			height_ = wrap.height();

			canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
			canExpand = current.aspectRatio ? width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight : (width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight);

			$.extend(current, {
				dim: {
					width: getValue(width_),
					height: getValue(height_)
				},
				origWidth: origWidth,
				origHeight: origHeight,
				canShrink: canShrink,
				canExpand: canExpand,
				wPadding: wPadding,
				hPadding: hPadding,
				wrapSpace: height_ - skin.outerHeight(true),
				skinSpace: skin.height() - height
			});

			if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
				inner.height('auto');
			}
		},

		_getPosition: function (onlyAbsolute) {
			var current = F.current,
			    viewport = F.getViewport(),
			    margin = current.margin,
			    width = F.wrap.width() + margin[1] + margin[3],
			    height = F.wrap.height() + margin[0] + margin[2],
			    rez = {
				position: 'absolute',
				top: margin[0],
				left: margin[3]
			};

			if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
				rez.position = 'fixed';
			} else if (!current.locked) {
				rez.top += viewport.y;
				rez.left += viewport.x;
			}

			rez.top = getValue(Math.max(rez.top, rez.top + (viewport.h - height) * current.topRatio));
			rez.left = getValue(Math.max(rez.left, rez.left + (viewport.w - width) * current.leftRatio));

			return rez;
		},

		_afterZoomIn: function () {
			var current = F.current;

			if (!current) {
				return;
			}

			F.isOpen = F.isOpened = true;

			F.wrap.css('overflow', 'visible').addClass('fancybox-opened');

			F.update();

			// Assign a click event
			if (current.closeClick || current.nextClick && F.group.length > 1) {
				F.inner.css('cursor', 'pointer').bind('click.fb', function (e) {
					if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
						e.preventDefault();

						F[current.closeClick ? 'close' : 'next']();
					}
				});
			}

			// Create a close button
			if (current.closeBtn) {
				$(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', function (e) {
					e.preventDefault();

					F.close();
				});
			}

			// Create navigation arrows
			if (current.arrows && F.group.length > 1) {
				if (current.loop || current.index > 0) {
					$(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
				}

				if (current.loop || current.index < F.group.length - 1) {
					$(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
				}
			}

			F.trigger('afterShow');

			// Stop the slideshow if this is the last item
			if (!current.loop && current.index === current.group.length - 1) {
				F.play(false);
			} else if (F.opts.autoPlay && !F.player.isActive) {
				F.opts.autoPlay = false;

				F.play();
			}
		},

		_afterZoomOut: function (obj) {
			obj = obj || F.current;

			$('.fancybox-wrap').trigger('onReset').remove();

			$.extend(F, {
				group: {},
				opts: {},
				router: false,
				current: null,
				isActive: false,
				isOpened: false,
				isOpen: false,
				isClosing: false,
				wrap: null,
				skin: null,
				outer: null,
				inner: null
			});

			F.trigger('afterClose', obj);
		}
	});

	/*
  *	Default transitions
  */

	F.transitions = {
		getOrigPosition: function () {
			var current = F.current,
			    element = current.element,
			    orig = current.orig,
			    pos = {},
			    width = 50,
			    height = 50,
			    hPadding = current.hPadding,
			    wPadding = current.wPadding,
			    viewport = F.getViewport();

			if (!orig && current.isDom && element.is(':visible')) {
				orig = element.find('img:first');

				if (!orig.length) {
					orig = element;
				}
			}

			if (isQuery(orig)) {
				pos = orig.offset();

				if (orig.is('img')) {
					width = orig.outerWidth();
					height = orig.outerHeight();
				}
			} else {
				pos.top = viewport.y + (viewport.h - height) * current.topRatio;
				pos.left = viewport.x + (viewport.w - width) * current.leftRatio;
			}

			if (F.wrap.css('position') === 'fixed' || current.locked) {
				pos.top -= viewport.y;
				pos.left -= viewport.x;
			}

			pos = {
				top: getValue(pos.top - hPadding * current.topRatio),
				left: getValue(pos.left - wPadding * current.leftRatio),
				width: getValue(width + wPadding),
				height: getValue(height + hPadding)
			};

			return pos;
		},

		step: function (now, fx) {
			var ratio,
			    padding,
			    value,
			    prop = fx.prop,
			    current = F.current,
			    wrapSpace = current.wrapSpace,
			    skinSpace = current.skinSpace;

			if (prop === 'width' || prop === 'height') {
				ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);

				if (F.isClosing) {
					ratio = 1 - ratio;
				}

				padding = prop === 'width' ? current.wPadding : current.hPadding;
				value = now - padding;

				F.skin[prop](getScalar(prop === 'width' ? value : value - wrapSpace * ratio));
				F.inner[prop](getScalar(prop === 'width' ? value : value - wrapSpace * ratio - skinSpace * ratio));
			}
		},

		zoomIn: function () {
			var current = F.current,
			    startPos = current.pos,
			    effect = current.openEffect,
			    elastic = effect === 'elastic',
			    endPos = $.extend({ opacity: 1 }, startPos);

			// Remove "position" property that breaks older IE
			delete endPos.position;

			if (elastic) {
				startPos = this.getOrigPosition();

				if (current.openOpacity) {
					startPos.opacity = 0.1;
				}
			} else if (effect === 'fade') {
				startPos.opacity = 0.1;
			}

			F.wrap.css(startPos).animate(endPos, {
				duration: effect === 'none' ? 0 : current.openSpeed,
				easing: current.openEasing,
				step: elastic ? this.step : null,
				complete: F._afterZoomIn
			});
		},

		zoomOut: function () {
			var current = F.current,
			    effect = current.closeEffect,
			    elastic = effect === 'elastic',
			    endPos = { opacity: 0.1 };

			if (elastic) {
				endPos = this.getOrigPosition();

				if (current.closeOpacity) {
					endPos.opacity = 0.1;
				}
			}

			F.wrap.animate(endPos, {
				duration: effect === 'none' ? 0 : current.closeSpeed,
				easing: current.closeEasing,
				step: elastic ? this.step : null,
				complete: F._afterZoomOut
			});
		},

		changeIn: function () {
			var current = F.current,
			    effect = current.nextEffect,
			    startPos = current.pos,
			    endPos = { opacity: 1 },
			    direction = F.direction,
			    distance = 200,
			    field;

			startPos.opacity = 0.1;

			if (effect === 'elastic') {
				field = direction === 'down' || direction === 'up' ? 'top' : 'left';

				if (direction === 'down' || direction === 'right') {
					startPos[field] = getValue(getScalar(startPos[field]) - distance);
					endPos[field] = '+=' + distance + 'px';
				} else {
					startPos[field] = getValue(getScalar(startPos[field]) + distance);
					endPos[field] = '-=' + distance + 'px';
				}
			}

			// Workaround for http://bugs.jquery.com/ticket/12273
			if (effect === 'none') {
				F._afterZoomIn();
			} else {
				F.wrap.css(startPos).animate(endPos, {
					duration: current.nextSpeed,
					easing: current.nextEasing,
					complete: F._afterZoomIn
				});
			}
		},

		changeOut: function () {
			var previous = F.previous,
			    effect = previous.prevEffect,
			    endPos = { opacity: 0.1 },
			    direction = F.direction,
			    distance = 200;

			if (effect === 'elastic') {
				endPos[direction === 'down' || direction === 'up' ? 'top' : 'left'] = (direction === 'up' || direction === 'left' ? '-' : '+') + '=' + distance + 'px';
			}

			previous.wrap.animate(endPos, {
				duration: effect === 'none' ? 0 : previous.prevSpeed,
				easing: previous.prevEasing,
				complete: function () {
					$(this).trigger('onReset').remove();
				}
			});
		}
	};

	/*
  *	Overlay helper
  */

	F.helpers.overlay = {
		defaults: {
			closeClick: true, // if true, fancyBox will be closed when user clicks on the overlay
			speedOut: 200, // duration of fadeOut animation
			showEarly: true, // indicates if should be opened immediately or wait until the content is ready
			css: {}, // custom CSS properties
			locked: !isTouch, // if true, the content will be locked into overlay
			fixed: true // if false, the overlay CSS position property will not be set to "fixed"
		},

		overlay: null, // current handle
		fixed: false, // indicates if the overlay has position "fixed"
		el: $('html'), // element that contains "the lock"

		// Public methods
		create: function (opts) {
			opts = $.extend({}, this.defaults, opts);

			if (this.overlay) {
				this.close();
			}

			this.overlay = $('<div class="fancybox-overlay"></div>').appendTo(F.coming ? F.coming.parent : opts.parent);
			this.fixed = false;

			if (opts.fixed && F.defaults.fixed) {
				this.overlay.addClass('fancybox-overlay-fixed');

				this.fixed = true;
			}
		},

		open: function (opts) {
			var that = this;

			opts = $.extend({}, this.defaults, opts);

			if (this.overlay) {
				this.overlay.unbind('.overlay').width('auto').height('auto');
			} else {
				this.create(opts);
			}

			if (!this.fixed) {
				W.bind('resize.overlay', $.proxy(this.update, this));

				this.update();
			}

			if (opts.closeClick) {
				this.overlay.bind('click.overlay', function (e) {
					if ($(e.target).hasClass('fancybox-overlay')) {
						if (F.isActive) {
							F.close();
						} else {
							that.close();
						}

						return false;
					}
				});
			}

			this.overlay.css(opts.css).show();
		},

		close: function () {
			var scrollV, scrollH;

			W.unbind('resize.overlay');

			if (this.el.hasClass('fancybox-lock')) {
				$('.fancybox-margin').removeClass('fancybox-margin');

				scrollV = W.scrollTop();
				scrollH = W.scrollLeft();

				this.el.removeClass('fancybox-lock');

				W.scrollTop(scrollV).scrollLeft(scrollH);
			}

			$('.fancybox-overlay').remove().hide();

			$.extend(this, {
				overlay: null,
				fixed: false
			});
		},

		// Private, callbacks

		update: function () {
			var width = '100%',
			    offsetWidth;

			// Reset width/height so it will not mess
			this.overlay.width(width).height('100%');

			// jQuery does not return reliable result for IE
			if (IE) {
				offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

				if (D.width() > offsetWidth) {
					width = D.width();
				}
			} else if (D.width() > W.width()) {
				width = D.width();
			}

			this.overlay.width(width).height(D.height());
		},

		// This is where we can manipulate DOM, because later it would cause iframes to reload
		onReady: function (opts, obj) {
			var overlay = this.overlay;

			$('.fancybox-overlay').stop(true, true);

			if (!overlay) {
				this.create(opts);
			}

			if (opts.locked && this.fixed && obj.fixed) {
				if (!overlay) {
					this.margin = D.height() > W.height() ? $('html').css('margin-right').replace("px", "") : false;
				}

				obj.locked = this.overlay.append(obj.wrap);
				obj.fixed = false;
			}

			if (opts.showEarly === true) {
				this.beforeShow.apply(this, arguments);
			}
		},

		beforeShow: function (opts, obj) {
			var scrollV, scrollH;

			if (obj.locked) {
				if (this.margin !== false) {
					$('*').filter(function () {
						return $(this).css('position') === 'fixed' && !$(this).hasClass("fancybox-overlay") && !$(this).hasClass("fancybox-wrap");
					}).addClass('fancybox-margin');

					this.el.addClass('fancybox-margin');
				}

				scrollV = W.scrollTop();
				scrollH = W.scrollLeft();

				this.el.addClass('fancybox-lock');

				W.scrollTop(scrollV).scrollLeft(scrollH);
			}

			this.open(opts);
		},

		onUpdate: function () {
			if (!this.fixed) {
				this.update();
			}
		},

		afterClose: function (opts) {
			// Remove overlay if exists and fancyBox is not opening
			// (e.g., it is not being open using afterClose callback)
			//if (this.overlay && !F.isActive) {
			if (this.overlay && !F.coming) {
				this.overlay.fadeOut(opts.speedOut, $.proxy(this.close, this));
			}
		}
	};

	/*
  *	Title helper
  */

	F.helpers.title = {
		defaults: {
			type: 'float', // 'float', 'inside', 'outside' or 'over',
			position: 'bottom' // 'top' or 'bottom'
		},

		beforeShow: function (opts) {
			var current = F.current,
			    text = current.title,
			    type = opts.type,
			    title,
			    target;

			if ($.isFunction(text)) {
				text = text.call(current.element, current);
			}

			if (!isString(text) || $.trim(text) === '') {
				return;
			}

			title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');

			switch (type) {
				case 'inside':
					target = F.skin;
					break;

				case 'outside':
					target = F.wrap;
					break;

				case 'over':
					target = F.inner;
					break;

				default:
					// 'float'
					target = F.skin;

					title.appendTo('body');

					if (IE) {
						title.width(title.width());
					}

					title.wrapInner('<span class="child"></span>');

					//Increase bottom margin so this title will also fit into viewport
					F.current.margin[2] += Math.abs(getScalar(title.css('margin-bottom')));
					break;
			}

			title[opts.position === 'top' ? 'prependTo' : 'appendTo'](target);
		}
	};

	// jQuery plugin initialization
	$.fn.fancybox = function (options) {
		var index,
		    that = $(this),
		    selector = this.selector || '',
		    run = function (e) {
			var what = $(this).blur(),
			    idx = index,
			    relType,
			    relVal;

			if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
				relType = options.groupAttr || 'data-fancybox-group';
				relVal = what.attr(relType);

				if (!relVal) {
					relType = 'rel';
					relVal = what.get(0)[relType];
				}

				if (relVal && relVal !== '' && relVal !== 'nofollow') {
					what = selector.length ? $(selector) : that;
					what = what.filter('[' + relType + '="' + relVal + '"]');
					idx = what.index(this);
				}

				options.index = idx;

				// Stop an event from bubbling if everything is fine
				if (F.open(what, options) !== false) {
					e.preventDefault();
				}
			}
		};

		options = options || {};
		index = options.index || 0;

		if (!selector || options.live === false) {
			that.unbind('click.fb-start').bind('click.fb-start', run);
		} else {
			D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
		}

		this.filter('[data-fancybox-start=1]').trigger('click');

		return this;
	};

	// Tests that need a body at doc ready
	D.ready(function () {
		var w1, w2;

		if ($.scrollbarWidth === undefined) {
			// http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
			$.scrollbarWidth = function () {
				var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
				    child = parent.children(),
				    width = child.innerWidth() - child.height(99).innerWidth();

				parent.remove();

				return width;
			};
		}

		if ($.support.fixedPosition === undefined) {
			$.support.fixedPosition = function () {
				var elem = $('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
				    fixed = elem[0].offsetTop === 20 || elem[0].offsetTop === 15;

				elem.remove();

				return fixed;
			}();
		}

		$.extend(F.defaults, {
			scrollbarWidth: $.scrollbarWidth(),
			fixed: $.support.fixedPosition,
			parent: $('body')
		});

		//Get real width of page scroll-bar
		w1 = $(window).width();

		H.addClass('fancybox-lock-test');

		w2 = $(window).width();

		H.removeClass('fancybox-lock-test');

		$("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head");
	});
})(window, document, jQuery);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./itcase_sphinx_theme/itcase/static/js/vendor/js.cookie.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.0.2
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		var _OldCookies = window.Cookies;
		var api = window.Cookies = factory(window.jQuery);
		api.noConflict = function () {
			window.Cookies = _OldCookies;
			return api;
		};
	}
})(function () {
	function extend() {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[i];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init(converter) {
		function api(key, value, attributes) {
			var result;

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				value = encodeURIComponent(String(value));
				value = value.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				return document.cookie = [key, '=', value, attributes.expires && '; expires=' + attributes.expires.toUTCString(), // use expires attribute, max-age is not supported by IE
				attributes.path && '; path=' + attributes.path, attributes.domain && '; domain=' + attributes.domain, attributes.secure ? '; secure' : ''].join('');
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var name = parts[0].replace(rdecode, decodeURIComponent);
				var cookie = parts.slice(1).join('=');

				if (cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				cookie = converter && converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent);

				if (this.json) {
					try {
						cookie = JSON.parse(cookie);
					} catch (e) {}
				}

				if (key === name) {
					result = cookie;
					break;
				}

				if (!key) {
					result[name] = cookie;
				}
			}

			return result;
		}

		api.get = api.set = api;
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init();
});

/***/ }),

/***/ "./node_modules/expose-loader/index.js?Cookies!./itcase_sphinx_theme/itcase/static/js/vendor/js.cookie.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Cookies"] = __webpack_require__("./node_modules/babel-loader/lib/index.js!./itcase_sphinx_theme/itcase/static/js/vendor/js.cookie.js");
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./itcase_sphinx_theme/itcase/static/js/main.js");


/***/ })

/******/ });
//# sourceMappingURL=__main.js.map