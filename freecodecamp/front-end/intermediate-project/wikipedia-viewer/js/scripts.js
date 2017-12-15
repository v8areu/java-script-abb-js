$(document).ready(function() {
	// function click for input form to be changed
	let expanded = false;
	
	// expand magnifier
	$(".search-icon input").click(function(event) {

		if (!expanded) {

			$(".search-icon").toggleClass("search-icon-expand");
			$(".search-icon-expand").toggleClass("search-icon");	

			$(".close-search").toggleClass("close-search-expand");
			$(".close-search-expand").toggleClass("close-search");
			
			expanded = true;

		}

	});

	// un-expand magnifier
	$(".close-search").click(function(event) {
	
		expanded = false;

		$(".search-icon-expand").toggleClass("search-icon");
		$(".search-icon").toggleClass("search-icon-expand");

		$(".close-search-expand").toggleClass("close-search");
		$(".close-search").toggleClass("close-search-expand");
	});	

	let value;
	// get value from input box
	$("#search-query").keyup(function(e) {
		if (e.keyCode === 13) {
			value = $("#search-query").val();
			alert(value);
		}
	});
});
