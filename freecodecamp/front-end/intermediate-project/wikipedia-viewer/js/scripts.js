$(document).ready(function() {
	// function click for input form to be changed
	let expanded = false;
	let onTop = false;

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

		if (onTop) {
			$(".middle").css({"display": "table-cell"});

			$(".search-info")
				.append("<p> Click icon to search </p>");
			onTop = false;
		}

		// empty the input field
		$("#search-query").val('');
	});

	// make javascript form not reloading the page when pressing
	// enter
	$(function() {
		$("#search-query-form").submit(function() {
			return false;
		});
	});

	let value;
	// get value from input box
	$("#search-query").keyup(function(e) {
		if (e.keyCode === 13) {
			value = $("#search-query").val();
			/*alert(value);*/
			$(".middle").css({"display": "block"});

			// delete the Click icon to search paraghraph
			$(".search-info > p").remove();
			onTop = true;

			// add the container div block

			jQuery("<div/>", {
				id: 'container-query-result',
				class: 'container'
			}).appendTo(".outer");

			// add the row div block
			jQuery("<div/>", {
				id: 'row-query-result',
				class: 'row'
			}).appendTo("#container-query-result");

/*
			// add grid block -> TODO loop it by the API
			jQuery("<div/>", {
				class: "col-lg-12"
			}).addClass("query-result-box")
			.appendTo("#row-query-result");

*/
			// add <ul> tag
			jQuery("<ul/>", {
				id: 'ul-query-result',
			}).appendTo("#row-query-result");

			// loop each wikipedia API
			// JSON URL
			var wikiBASE = 'https://en.wikipedia.org';
			var wikiAPI = "/w/api.php?action=query&origin=*&format=json&prop=extracts&generator=search&exsentences=1&exintro=1&explaintext=1&excontinue=1&gsrsearch=";
			var searchQuery = $("#search-query").val();

      // this is commented because cross origin probleme, need
      // to come up with another method (below this one)
      $.ajax({
        url: wikiBASE + wikiAPI + searchQuery,
        datatype: 'jsonp',
        success: function(wikiData, dataStatus, jqXHR) {
          console.log(wikiData.query);
          //error: function(jqXHR, dataStatus, errorThrown) {
          //    alert("not ok!");
          //}
        }
      });

/*
$.getJSON('http://whateverorigin.org/get?url=' +
    encodeURIComponent(wikiBASE + wikiAPI + searchQuery) + '&callback=?',
    function (data) {
        //console.log("> ", data);

        //If the expected response is text/plain
        // $("#viewer").html(data.contents);

        //If the expected response is JSON
        var response = $.parseJSON(data.contents);
});
*/
		} // if close bracket
	});

});
