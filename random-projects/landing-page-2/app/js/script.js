$(document).ready(function() {

  // change navbar color when scrolling
  let scrollStart = 0;
  let startNavChange = $('#page-device-top');
  let offset = startNavChange.offset();

  // define minimum size for media queries
  // the color change only when the minimum size is 992px
  const mq = window.matchMedia("(min-width: 992px)");

  $(document).scroll(function() {
    let scrollStart = $(this).scrollTop();
    if (scrollStart > offset.top && mq.matches) {
      $('#page-nav').addClass('navbar-colored');
      $('#page-nav a').css('color', '#fff');
    } else {
      $('#page-nav').removeClass('navbar-colored');
      $('#page-nav a').css('color', '#000');
    }
  });
});