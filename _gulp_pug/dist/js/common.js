'use strict';

// Document ready
$(document).on('ready', function(){

  $('.svg-to-inline').svgToInline();

  $('.users-say__carousel').slick({
    variableWidth: true,
    centerMode: true,
    slidesToShow: 3,
    infinite: true,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="./images/icon/icon-arrow-prev.svg" alt=""/></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="./images/icon/icon-arrow-next.svg" alt=""/></button>'
  });

  // Chrome Smooth Scroll
  try {
    $.browserSelector();
    if($("html").hasClass("chrome")) {
      $.smoothScroll();
    }
  } catch(err) {

  };
});

$(window).on('load', function() { });
$(window).on('scroll', function() { });
$(window).on('resize', function() { });