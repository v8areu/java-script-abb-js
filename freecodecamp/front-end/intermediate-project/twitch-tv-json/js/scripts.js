document.addEventListener("DOMContentLoaded", function(event) {

	// main logic
	let a = "all";
	toggleStatus(a);

	// =========== function definitions ===========
	function toggleStatus (statusInfo) {
		let query = document.querySelector('.twitch-status > #' + statusInfo);
		if (query) {
			query.addEventListener("click", function(event) {

			});
		}
	}


});
