document.addEventListener("DOMContentLoaded", function(event) {

	// main logic
	toggleStatus("all");
  toggleStatus("online");
  toggleStatus("offline");

	// =========== function definitions ===========
	function toggleStatus (statusInfo) {
		let query = document.querySelector('.twitch-status > #' + statusInfo);
		if (query) {
			query.addEventListener("click", function(event) {
        // console.log(query.classList.contains("active"));
        if (!query.classList.contains("active")) {
          let queryActive = document.querySelector('.twitch-status > .active');
          queryActive.classList.remove("active");
          query.classList.add("active");
        }
			});
		}
	}

  function twitchAPI() {
    let twitchBASE = "https://wind-bow.glitch.me/twitch-api";
    let twitchSTREAM = "/stream";

    let usrID = "freecodecamp";
    
  }
});
