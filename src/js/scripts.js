jQuery(window).scroll(function() {
  'use strict';
  var scroll = jQuery(window).scrollTop();
  if (scroll >= 1) {
    console.log('color logo');
    jQuery('.header').addClass('sticky');
    jQuery('.colorlogo').show();
    jQuery('.toplogo').hide();
  } else {
    console.log('white logo');
    jQuery('.header').removeClass('sticky');
    jQuery('.colorlogo').hide();
    jQuery('.toplogo').show();
  }
});
