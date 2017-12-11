$(document).ready(function() {
	// ========== JSON PARSING =========
	
	// ========== NEW QUOTE FUNCTION ==========
	$(".box-new-button").click(function(event) {
		$.getJSON('quote.json', function(data) {

			var quote = data.quote;
			var quoteLength = quote.length;
			var arr = [...Array(quoteLength).keys()];
			var randomNum = arr[Math.floor(Math.random() *
				arr.length)];

			// First, if .box-new-button is clicked, the
			// background color is changed
			color = quote[randomNum].bgColor;			
			$(".site-background").css({"background-color" : color});

			// we also need to change the quote text
			quoteText = quote[randomNum].quoteText;
			$(".box-text").html("<h2>" + quoteText + "</h2>");

			// also change the author!
			quoteAuthor = quote[randomNum].author;
			$(".box-author").html("<p> - " + quoteAuthor + "</p>");
		});
	});

	// ============= SHARE TO TWITTER FUNCTION ==============
	$(".twitter-button").click(function(event) {
		// will change the attribute href according to the quote
		
	});
});
