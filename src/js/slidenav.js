$(window).scroll(function(){
    // select slide nav
    var slideNavtrigger = $('.slide-nav-trigger');
    // if user scrolls past 200px show slide-nav-trigger
    if($(window).scrollTop() > 500){
        // slideNavtrigger.css('visibility','visible');
        $('.slide-nav-trigger').addClass('show');
        slideNavtrigger.removeClass('hide');
    }else if($(window).scrollTop() < 600){
        slideNavtrigger.addClass('hide');
        slideNavtrigger.removeClass('show');
        // slideNavtrigger.css('visibility','hidden');
    }
});

var paper = Snap('.pixelblok');
// select rects
var rect1 = paper.select('#rect1');
var rect2 = paper.select('#rect2');
var rect3 = paper.select('#rect3');

// adds class to animate
paper.click(function(){
  rect1.toggleClass('movedown1');
  rect3.toggleClass('movedown3');
});

// click event on slide-nav-trigger
$(document).ready(function(){

var slideNavAnimating = false;
var navlink = $('.navlink');
var slidenav = $('.slide-nav');
var pixeltop = $('#rect1');
var pixelbottom = $('#rect3');

$('.slide-nav-trigger').on('click',function(event){
  // test if event works with alert
  // prevent bubbleing
  event.preventDefault();
  // modinizer to test for csstransitions
  if(Modernizr.csstransitions){
    slideNavAnimating = true;
  } else{
    slideNavAnimating = false;
  }

  $('body').toggleClass('navigation-is-open');
    if ($('body').hasClass('navigation-is-open')){ slidenav.animate({
      opacity:1 }, 1000, function (){});
    }

      else {
        slidenav.animate({
      opacity:0 }, 1000, function (){});
    }

});
  navlink.on('click',function(event){
  $('body').toggleClass('navigation-is-open');
  // replace pixels to original position
  pixeltop.removeClass('movedown1');
  pixelbottom.removeClass('movedown3');
});

});
