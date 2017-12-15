$(document).ready(function() {
  // function click for input form to be changed
  var expanded = false;
  $(".search-icon").click(function(event) {
    

	$(".search-icon input").css({
          "width" : "250px",
          "border-radius" : "30px",
          "transition" : "0.25s",
          "cursor" : "auto",
          "padding" : "0 15px 0 15px"
    });
	
	if (!expanded) {

		$(".close-search").toggleClass("close-search-expand");
		$(".close-search-expand").toggleClass("close-search");
		expanded = true;

	}

  });

	$(".close-search").click(function(event) {
	
		expanded = false;

		$(".search-icon input").css({
			"width" : "34px",
			"height" : "34px",
			"margin" : "10px",
			"transition" : "0.25s",
			"cursor" : "auto",
		});


	});	
});
