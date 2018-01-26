$(document).ready(function() {
  "use strict";

  // change navbar color when scrolling
  // let scrollStart = 0;
  let startNavChange = $('.header-mockup');
  let offset = startNavChange.offset();

  // define minimum size for media queries
  // the color change only when the minimum size is 992px
  const mq = window.matchMedia("(min-width: 992px)");

  $(document).scroll(function() {
    let scrollStart = $(this).scrollTop();
    
    // hide the navbar small when the user scroll
    // or when user click any menu
    if (scrollStart != 0) {
      $('#navbar-checkbox').prop('checked', false);
    }

    // navbar change color if scroll begin
    if (scrollStart > 0 && mq.matches) {
      $('#page-nav').addClass('navbar-colored');
      $('#page-nav a').css('color', '#fff');
    } else {
      $('#page-nav').removeClass('navbar-colored');
      $('#page-nav a').css('color', '#000');
    }
  });

  // smooth scrolling
  // first, select all anchor tag which start with hash
  $('a[href*="#"]')
    // which not # and #0
    .not('a[href="#"]')
    .not('a[href="#0"]')
    .click(function(event) {

      if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname) {
        let target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

        if (target.length) { // target.length if true is = 1
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, "easeInOutCirc", function() {
            // callback after animation
            // must change focus
            let $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          });
        }
      }
    });

    // change device image if landscape
    // default
    if (window.matchMedia("(orientation: portrait)").matches) {
      // you're in PORTRAIT mode
      console.log("portrait-default");
    } else {
      console.log("landscape-default");
    }    

    $(window).bind('orientationchange', function(event) {
      
      console.log(screen.orientation);

      if (window.matchMedia("(orientation: landscape)").matches) {
        // you're in PORTRAIT mode
        console.log("landscape");
  
      } else {
        console.log("portrait");

      }

    });



    $('#page-device-top')
});