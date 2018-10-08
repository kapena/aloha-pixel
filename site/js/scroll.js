var scroll = new SmoothScroll('a[href*="#"]');
var scroll = new SmoothScroll();
var options = {
  speed: 1000,
  easing:'easeInOutCubic',
  offset:25
}
scroll.animateScroll(options);
