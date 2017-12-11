$(document).ready(function() {
	// ========== JSON PARSING =========
	
	// ========== NEW QUOTE FUNCTION ==========
	$(".new-quote-button").click(function(event) {
		$.getJSON('quote.json', function(data) {

			var quote = data.quote;
			var quoteLength = quote.length;
			var arr = [...Array(quoteLength).keys()];
			var randomNum = arr[Math.floor(Math.random() *
				arr.length)];

			// First, if .box-new-button is clicked, the
			// background color is changed
			var color = quote[randomNum].bgColor;			
			$(".site-background").css({"background-color" : color});

			// we also need to change the quote text
			var quoteText = quote[randomNum].quoteText;
			$(".box-text").html("<h2>" + quoteText + "</h2>");

			// also change the author!
			var quoteAuthor = quote[randomNum].author;
			$(".box-author").html("<p> - " + quoteAuthor + "</p>");
		});
	});

	// ============= SHARE TO TWITTER FUNCTION ==============
	$(".twitter-button").hover(function(event) {
		// get the quote text
		var quoteText = $('.box-text h2').text();

		// get the quote author
		var quoteAuthor = $('.box-author p').text();
		
		// will change the attribute href according to the quote
		var twitterBase = 'https://twitter.com/intent/tweet';
		var shareText = "?text=\"" + quoteText + "\"";
		shareText += quoteAuthor;
		var shareHashTag = "&hashtags=quote";

		var twitterShare = twitterBase;
		twitterShare += shareText;
		twitterShare += shareHashTag;

		$('.box-social-button a').attr("href", twitterShare);
		
	});
});
