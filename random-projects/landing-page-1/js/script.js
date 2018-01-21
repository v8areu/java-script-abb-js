document.addEventListener("DOMContentLoaded", function(e) {
	// add function to menu
	let menuToggle = document.querySelector("#menu-toggle");

	menuToggle.addEventListener("click", function(e) {
		document.querySelector(".sidebar-wrapper").classList.toggle("active");

		document.querySelector("#menu-toggle > i").classList.toggle("fa-bars");
		document.querySelector("#menu-toggle > i").classList.toggle("fa-times");
	});
});
