document.addEventListener("DOMContentLoaded", function(e) {

  // ====================================
  // ========= GLOBAL VARIABLES =========
  // ====================================
  // 1. powerOn: check if the switch button is on or not
  // false -> off
  // true -> on
  let powerOn = false;
  // 2. simonStart: start simon by clicking the start button
  let simonStart = false;

  // ====================================
  // ========== MISC FUNCTIONS ==========
  // ====================================
  // 1. text beep function on the screen

  let textBeep = function() {
    
    // define variables
    let pageScreen = document.getElementsByClassName("control-panel-screen")[0];
    let textPageScreen = pageScreen.firstElementChild.childNodes[0].nodeValue;

    // remove the <p> tag and add it again
    pageScreen.removeChild(pageScreen.firstElementChild);
    pageScreen.appendChild(document.createElement("p"));
    setTimeout(function() {pageScreen.firstElementChild.appendChild(document.createTextNode(textPageScreen));}, 200);

  };

  // on off switch function
  document.getElementById("on-off-button")
    .addEventListener("click", function(e) {

      // define variables
      let pageScreen = document.getElementsByClassName("control-panel-screen")[0];

      // toggle class between switch-flex-row
      // and switch-flex-row-reverse
      this.classList.toggle("switch-flex-row-reverse");
      this.classList.toggle("switch-flex-row");

      // if the switch is on -> row-reverse class
      if (this.className === "switch-flex-row-reverse") {
        powerOn = true;
      } else if (this.className === "switch-flex-row") {
        powerOn = false;
      }

      // function if powerOn is true
      if (powerOn) {

        // add the paragraph on count screen
        // then add "--" notating the initialization

        pageScreen.appendChild(document.createElement("p"));
        pageScreen.firstElementChild
          .appendChild(document.createTextNode("--"));
        
      } else { // if powerOn is false

        pageScreen.removeChild(pageScreen.firstElementChild);
        // variables initialization
        simonStart = false;

      }
    });

  // start button function
  document.getElementById("start-button")
    .addEventListener("click", function(e) {
      // the button only works when the power is on
      if (powerOn) {
        simonStart = true;

        // beep the screen
        textBeep();

        setInterval(function() {console.log("a");}, 1000);
        console.log("adadad");

      }
    });
});
