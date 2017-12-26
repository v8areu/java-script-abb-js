document.addEventListener("DOMContentLoaded", function(event) {

  // function to capture when user click button
  let calcButtons = document.getElementsByTagName("button");
  let calcButtonsParentID = []; 
  for (let calcButton of calcButtons) {
    calcButtonsParentID.push(calcButton.parentNode.id);
  }

  // get the upper and lower screen paraghraphs
  let screenUpperP = document.querySelector("#screen-upper p");
  let screenLowerP = document.querySelector("#screen-lower p");

});
