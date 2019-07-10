'use strict';

// Document ready
$(document).on('ready', function(){

  $('.users-say__carousel').slick({
    variableWidth: true,
    centerMode: true,
    slidesToShow: 3,
    infinite: true,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="./images/icon/icon-arrow-prev.svg" alt="Prev slide"/></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="./images/icon/icon-arrow-next.svg" alt="Next slide"/></button>'
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

$(window).on('scroll', function() { });
$(window).on('resize', function() { });

function animatedLanding(){
  var controller = new ScrollMagic.Controller();
  var appTopTl = new TimelineMax();
  var whatItTl = new TimelineMax();
  var interfaceTl = new TimelineMax();
  var featuresTl = new TimelineMax();
  var usersSayTl = new TimelineMax();
  var featuredTl = new TimelineMax();
  var appBottomTl = new TimelineMax();
  var footerTl = new TimelineMax();

  appTopTl
    // .to('#loader', 0.4, { autoAlpha: 0 })
    .fromTo('.header__logo', 0.5, {autoAlpha: 0, ease: Power1.easeInOut}, {autoAlpha: 1})
    .fromTo('.section__header--app-top', 0.5, {autoAlpha: 0, x: '-=25px', ease: Power1.easeInOut}, {autoAlpha: 1, x: '0px'})
    .fromTo('.section__content--app-top', 0.5, {autoAlpha: 0, x: '-=25px', ease: Power1.easeInOut}, {autoAlpha: 1, x: '0px'})
    .fromTo('.section__app--app-top', 0.5, {autoAlpha: 0, x: '-=25px', ease: Power1.easeInOut}, {autoAlpha: 1, x: '0px'})
    .staggerFromTo( '.app-top__div img', 0.35, {autoAlpha: 0, x: '+=25px', y: '-=25px', ease: Power1.easeInOut}, {autoAlpha: 1, x: '0%', y: '0%'}, 0.13)
  ; 
  var appTopScene = new ScrollMagic.Scene({
      triggetElement: '.what-it'
    })
    .setTween(appTopTl)
    .addTo(controller);
  
  whatItTl
    .fromTo('.section__header--what', 0.5, {autoAlpha: 0, x: '+=25px', ease: Power1.easeInOut}, {autoAlpha: 1, x: '0px'})
    .fromTo('.section__content--what', 0.5, {autoAlpha: 0, x: '+=25px', ease: Power1.easeInOut}, {autoAlpha: 1, x: '0px'})
    .fromTo('.what-it__cards', 1, {autoAlpha: 0, x: '-=25px', ease: Power1.easeInOut}, {autoAlpha: 1, x: '0px'})
  ;
  var whatItScene = new ScrollMagic.Scene({
      triggerElement: '.what-it',
      reverse: false
    })
    .setTween(whatItTl)
    .addTo(controller);

  interfaceTl
    .fromTo('.section__header--interface', 0.5, {autoAlpha: 0, x: '-=25px', ease: Power1.easeInOut}, {autoAlpha: 1, x: '0px'})
    .fromTo('.section__content--interface', 0.5, {autoAlpha: 0, x: '-=25px', ease: Power1.easeInOut}, {autoAlpha: 1, x: '0px'})
    .fromTo('.interface__img', 0.35, {autoAlpha: 0, ease: Power1.easeInOut}, {autoAlpha: 1})
    .fromTo('.interface__icon--two', 0.35, {autoAlpha: 0, ease: Power1.easeInOut}, {autoAlpha: 1})
    .fromTo('.interface__icon--three', 0.35, {autoAlpha: 0, ease: Power1.easeInOut}, {autoAlpha: 1})
    .fromTo('.interface__icon--one', 0.35, {autoAlpha: 0, ease: Power1.easeInOut}, {autoAlpha: 1})
    .staggerFromTo('.interface__div', 0.35, {autoAlpha: 0, ease: Power1.easeInOut}, {autoAlpha: 1}, 0.2)
  ;
  var whatItScene = new ScrollMagic.Scene({
      triggerElement: '.interface',
      reverse: false
    })
    .setTween(interfaceTl)
    .addTo(controller);

  featuresTl
    .fromTo('.section__header--features', 0.5, {autoAlpha: 0, ease: Power1.easeInOut}, {autoAlpha: 1})
    .staggerFromTo('.features__block', 0.35, {autoAlpha: 0, y: '-=15px', ease: Power1.easeInOut}, {autoAlpha: 1, y: '0px'}, 0.2)
  ;
  var featuresScene = new ScrollMagic.Scene({
      triggerElement: '.features',
      reverse: false
    })
    .setTween(featuresTl)
    .addTo(controller);

  usersSayTl
    .fromTo('.section__header--users-say', 0.5, {autoAlpha: 0, ease: Power1.easeInOut}, {autoAlpha: 1})
    .fromTo('.users-say__carousel', 1, {autoAlpha: 0, ease: Power1.easeInOut}, {autoAlpha: 1})
  ;
  var featuresScene = new ScrollMagic.Scene({
      triggerElement: '.users-say',
      reverse: false
    })
    .setTween(usersSayTl)
    .addTo(controller);

  featuredTl
    .fromTo('.section__header--featured', 0.5, {autoAlpha: 0, ease: Power1.easeInOut}, {autoAlpha: 1})
    .staggerFromTo('.featured__block', 0.35, {autoAlpha: 0, y: '-=15px', ease: Power1.easeInOut}, {autoAlpha: 1, y: '0px'}, 0.2)
  ;
  var featuresScene = new ScrollMagic.Scene({
      triggerElement: '.featured',
      reverse: false
    })
    .setTween(featuredTl)
    .addTo(controller);

  appBottomTl
    .fromTo('.section__header--app-bottom', 0.5, {autoAlpha: 0, x: '+=25px', ease: Power1.easeInOut}, {autoAlpha: 1, x: '0px'})
    .fromTo('.section__content--app-bottom', 0.5, {autoAlpha: 0, x: '+=25px', ease: Power1.easeInOut}, {autoAlpha: 1, x: '0px'})
    .fromTo('.section__app--app-bottom', 0.5, {autoAlpha: 0, x: '+=25px', ease: Power1.easeInOut}, {autoAlpha: 1, x: '0px'})
    .staggerFromTo( '.app-bottom__phones img', 0.35, {autoAlpha: 0, x: '+=25px', y: '-=25px', ease: Power1.easeInOut}, {autoAlpha: 1, x: '0%', y: '0%'}, 0.13)
  ;
  var featuresScene = new ScrollMagic.Scene({
      triggerElement: '.app-bottom',
      reverse: false
    })
    .setTween(appBottomTl)
    .addTo(controller);

  footerTl
    .fromTo('.footer__logo', 0.5, {autoAlpha: 0, y: '+=15px', ease: Power1.easeInOut}, {autoAlpha: 1, y: '0px'}, 1)
    .fromTo('.footer__nav', 0.5, {autoAlpha: 0, y: '+=15px', ease: Power1.easeInOut}, {autoAlpha: 1, y: '0px'})
    .fromTo('.footer__social', 0.5, {autoAlpha: 0, y: '+=15px', ease: Power1.easeInOut}, {autoAlpha: 1, y: '0px'})
  ;
  var footerScene = new ScrollMagic.Scene({
      triggerElement: '.footer',
      triggerHook: 1
    })
    .setTween(footerTl)
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'black',
    //   indent: 20,
    //   colorStart: 'green',
    //   colorEnd: 'red'
    // })
    .addTo(controller);

  var width = $(window).width();

  if (width < 991) {
    controller.destroy(true);
    TweenLite.set('*', {clearProps:"all"});
  }
}

$(document).ready(animatedLanding);
$(window).on('load', function() {
  $(".loader").delay(400).fadeOut("slow");
});