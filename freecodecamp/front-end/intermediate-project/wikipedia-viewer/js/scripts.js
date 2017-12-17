$(document).ready(function() {
	// function click for input form to be changed
	let expanded = false;
	let onTop = false;

	// expand magnifier
	$(".search-icon input").click(function(event) {

    // it will only executed when the magnifier is not
    // expanded with the expanded variable
		if (!expanded) {

      // switch the class
			$(".search-icon").toggleClass("search-icon-expand");
			$(".search-icon-expand").toggleClass("search-icon");

			$(".close-search").toggleClass("close-search-expand");
			$(".close-search-expand").toggleClass("close-search");

      // if the magnifier is expanded, add true value
			expanded = true;

		}
	});

	// un-expand magnifier
	$(".close-search").click(function(event) {

		expanded = false;

    // switch the class
		$(".search-icon-expand").toggleClass("search-icon");
		$(".search-icon").toggleClass("search-icon-expand");

		$(".close-search-expand").toggleClass("close-search");
		$(".close-search").toggleClass("close-search-expand");

    // remove container wiki div
    $("#container-query-result").remove();

    // if the search is onTop of the page, make it
    // move to the center with display: table cell
    // and add the "Click icon to search" paraghraph
    // below
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
	$("#search-query").keyup(function(e) {
    // 13 is the code for Enter key.
    // it will run if the enter is pressed
		if (e.keyCode === 13) {

      // get value from input box
			value = $("#search-query").val();

      // move the box to top
			$(".middle").css({"display": "block"});

			// delete the "Click icon to search" paraghraph
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

			// add <ul> tag
			jQuery("<ul/>", {
				id: 'ul-query-result',
			}).appendTo("#row-query-result");

			// loop each wikipedia API
			// JSON URL
      // note, origin=* for bypassing the cross origin problem
			let wikiBASE = 'https://en.wikipedia.org';
			let wikiAPI = "" +
        "/w/api.php?action=query" +
        "&origin=*" +
        "&format=json" +
        "&prop=extracts" +
        "&generator=search" +
        "&exsentences=1" +
        "&exintro=1" +
        "&explaintext=1" +
        "&excontinue=1&" +
        "gsrsearch=";
			let searchQuery = $("#search-query").val();

      $.ajax({
        url: wikiBASE + wikiAPI + searchQuery,
        datatype: 'jsonp',
        success: function(wikiData, dataStatus, jqXHR) {

          let wikiPage = wikiData.query.pages;

          $.each(wikiPage, function(id, wikiInfo) {
            jQuery("<li/>", {
              class: 'query-result-box col-lg-8',
              text: 'hey ' + id
            }).appendTo("#ul-query-result");
          });


        }
      });
		} // if close bracket
	});
});
