$(document).ready(function() {
  // function click for input form to be changed
  $(".search-icon").click(function(event) {
    $(".search-icon input").css({
          "width" : "250px",
          "border-radius" : "30px",
          "transition" : "0.25s",
          "cursor" : "auto",
          "padding" : "0 15px 0 15px"
    });

    $(".search-icon").addClass("close-input");
  });

  $(".search-icon").click(function(event) {
    $("search-icon input").css({
      "width" : "30px",
      "border-radius" : "50%"
    });
  });
});
