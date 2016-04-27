$(window).scroll(function() {
    'use strict';
    var scroll = $(window).scrollTop();
    var mobScreen = $(window).width();
    if ((scroll >= 1) && (mobScreen < 768)) {
        $('.header').addClass('sticky');
        $('.colorlogo').show();
        $('.toplogo').hide();
    } else if((scroll < 1) && (mobScreen < 768)) {
    console.log('less 1 scroll');
  }
    else if ((scroll < 1) && (mobScreen > 768)) {

        $('.header').removeClass('sticky');
        $('.colorlogo').hide();
        $('.toplogo').show();
    }
    else if ((scroll >= 1) && (mobScreen > 768)) {

        $('.header').addClass('sticky');
        $('.colorlogo').show();
        $('.toplogo').hide();
    }
});

$(document).ready(function(){
    'use strict';
    if ($(window).width() < 768) {

        $('.header').addClass('sticky');
        $('.colorlogo').show();
        $('.toplogo').hide();
    } else {

        $('.header').removeClass('sticky');
        $('.colorlogo').hide();
        $('.toplogo').show();
    }
});

$(window).resize(function(){
    'use strict';
    if ($(window).width() < 768) {

        $('.header').addClass('sticky');
        $('.colorlogo').show();
        $('.toplogo').hide();
    } else {

        $('.header').removeClass('sticky');
        $('.colorlogo').hide();
        $('.toplogo').show();
    }
});
