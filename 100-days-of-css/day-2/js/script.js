document.addEventListener("DOMContentLoaded", function(e) {
  
  let isCross = false;
  // get the horizontal bar
  const horizontalBar = document.querySelectorAll(".horizontal-bar");

  // get the button
  const pressMeButton = document.querySelector("#button-press-me");

  // when button is pressed, do the thing!
  pressMeButton.addEventListener("click", function(e) {

    if (!isCross) {
      isCross = true;
    } else {
      isCross = false;
    }

    if (isCross) {

	    // first, remove the middle horizontal bar
	    document.querySelector("#item-2").classList.toggle("horizontal-bar-gone");
	
	    // transform the item-1
	    document.querySelector("#item-1").classList.toggle("horizontal-bar-top");
	    document.querySelector("#item-3").classList.toggle("horizontal-bar-bottom");
	
	    const backgroundCss = document.createElement("style");
	    backgroundCss.type = "text/css";
	    backgroundCss.innerHTML = ".wrapper {background-image: linear-gradient(to top left), red, #80D11B; transition: 0.5s;}";
	    document.head.appendChild(backgroundCss);
    }

    if (!isCross) {

	    // transform the item-1
	    document.querySelector("#item-1").classList.toggle("horizontal-bar-top");
	    document.querySelector("#item-3").classList.toggle("horizontal-bar-bottom");

	    document.querySelector("#item-2").classList.toggle("horizontal-bar-gone");
    }

  });
});
