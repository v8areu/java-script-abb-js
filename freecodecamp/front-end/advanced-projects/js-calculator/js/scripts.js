document.addEventListener("DOMContentLoaded", function(event) {

  // define digit limit
  const digitLimit = 8;
  const digitLimitLower = 20;

  // get the upper and lower screen for convenience
  let screenUpper = document.getElementById("screen-upper");
  let screenLower = document.getElementById("screen-lower");

  // global variable to check the number is in decimal
  // mode or not
  // default is false
  let isDecimal = false;

  let isResultDecimal = false;
  // initialized means that it contains the initial 0
  // it should be true from the start since
  // the 0 is there if the calculator is on
  let isInitialized = true;

  // check if it's the first number
  let isFirstNumber = true;
    
  // the user can only press math button if a valid number is already appear
  let isMathOK = false;

  // need to save the variable before computation
  // e.g 3x5 (need to save 3 WHEN pressed x so we can just
  // compute it right away when we pressed 5)
  let numBeforeMath = 0;
  let lastMathProcess = "";

  // isMathProcess is here because we want to delete
  // the math process on upper screen and I guess
  // we need another variable for this
  let isMathProcess = false;

  // function to capture when user click button
  // We will get the parent-id of each button
  // and save it to an object
  let buttons = document.getElementsByTagName("button");
  let buttonsParentID = {}; 
  for (let button of buttons) {

    let tempKey = button.parentNode.id;
    let tempValue = button.parentNode;

    buttonsParentID[tempKey] = tempValue;
  }

  // get the class of each number button
  let buttonsNumber = document.getElementsByClassName("button-number");
  
  // get the class of each math button
  let buttonsMath = document.getElementsByClassName("button-math");

  // loop the buttonsNumber for it to be appearing on
  // the screenlower
  let tempDigit = 0;
  for (let buttonNumber of buttonsNumber) {
    buttonNumber.addEventListener("click", function(e) {

      //let tempButtonNumberTextNode = buttonNumber.firstElementChild.firstChild.cloneNode(true);
      //let tempButtonNumberTextNode2 = buttonNumber.firstElementChild.firstChild.cloneNode(true);

      // first, make sure that the digit appear less than  digitLimit
      if (tempDigit < digitLimit) {

        // remove the initial value (0) or the math process
        if (isInitialized && this.parentNode.id !== "calc-zero") {
          screenUpper.removeChild(screenUpper.firstElementChild);
          screenLower.removeChild(screenLower.firstElementChild);
          isInitialized = false;
        }

        if (isMathProcess) {
          screenUpper.removeChild(screenUpper.firstElementChild);
        }

        // we need to create the <p> tag inside the screen first
        // We can do that by checking if the screenLower
        // and screenUpper contains any element
        // if it's not, create the <p> tag
        if (screenUpper.firstElementChild === null) {
          screenUpper.appendChild(document.createElement("p"));
        }

        if (screenLower.firstElementChild === null) {
          screenLower.appendChild(document.createElement("p"));
        }
        
        // append every button pressed to the <p> child
        // the node itself will keep appending
        // (not the text is appending but the NODE)
        // I want to use innerHTML for appending the text
        // instead but some ppl tell that it contains
        // security concerns
      
        // SPECIAL CASE
        // 1. zero
        if (buttonNumber.parentNode.id === "calc-zero") {

          // this needs some hacks
          // first, the nodeValue of the firstChild of the p of
          // the screen upper (and lower) shouldn't be zero
          // because we must not append the 0 into each other.
          // the max zero on the first text is 1 digit
          // e.g we can't write 000000 if we keep pressing zero
          // the zero can only be used if it's after any other 
          // value like 200 or 312300
          // the (isMathProcess || isDecimal) is needed because
          // 1. when the math button is pressed, we need to still comply with the above rule (no writing 2x0000)
          // 2. if we just add isMathProcess, when user pressed the decimal, they can't press
          // zero after the decimal, we need that to compromise it.
          // e.g we need to write like 2x0.05 (if no isDecimal we will stuck when write 2x0. -> press zero won't have any effect)
          if (!isInitialized && (isMathProcess || isDecimal || isMathOK)) {
            screenUpper.firstElementChild.appendChild(buttonNumber.firstElementChild.firstChild.cloneNode(true));
            tempDigit++;
            isMathOK = true;
          }

          if (!isInitialized && (isMathProcess || isDecimal || isMathOK)) {
            screenLower.firstElementChild.appendChild(buttonNumber.firstElementChild.firstChild.cloneNode(true));

            // the isMathProcess should be false here because if we put it above, the
            // screenLower won't print the 0
            isMathProcess = false;
          }

        } else {

          screenUpper.firstElementChild.appendChild(buttonNumber.firstElementChild.firstChild.cloneNode(true));
          screenLower.firstElementChild.appendChild(buttonNumber.firstElementChild.firstChild.cloneNode(true));

          tempDigit++;
          isMathOK = true;
          isMathProcess = false;
        
        }
      }
    });
  }

  // button dot function
  let buttonDot = buttonsParentID["calc-dot"];
  buttonDot.addEventListener("click", function(e) {
    
    // get the value from screen upper
    let tempNumValue = screenUpper.firstElementChild;
    
    if (screenLower.firstElementChild === null) {
      screenUpper.appendChild(document.createElement("p"));
    }

    if (screenLower.firstElementChild === null) {
      screenLower.appendChild(document.createElement("p"));
    }

    // need to check if it's decimal or not
    // if it's decimal already, the button won't
    // have any additional effect
    // if it's not, the decimal will appear (notated by dot)
    // addition: add isMathProcess because
    // we must not write 3x. -> decimal after math process
    if (!isDecimal && !isMathProcess) {
      isDecimal = true;
      let tempDotTextNode = document.createTextNode(".");
      let tempDotTextNode2 = document.createTextNode(".");
      screenUpper
        .firstElementChild.appendChild(tempDotTextNode);
      screenLower
        .firstElementChild.appendChild(tempDotTextNode2);
      // the initialization should become false because
      // it's not initialized anymore
      isInitialized = false;

      // the digit should be still be 8 if zero
      // is the first digit
      // e.g use 0.1111111 rather than 0.11111111
      if (screenUpper.firstElementChild.firstChild.nodeValue == 0) {
        tempDigit++;
      }
    }
  });

  // EQUATION FUNCTION
  for (let buttonMath of buttonsMath) {
    buttonMath.addEventListener("click", function(e) {

      // get the value from upper screen
      let tempNumValuesArray = screenUpper.firstElementChild.childNodes;
      
      // because the result is the p tag and its children
      // we need to make all children to one variable
      let tempNumValue = "";
      for (let num of tempNumValuesArray) {
        
        // we should explicitly put the string
        // for readibility
        // so we know that all of it will be a String
        // and will be converted to Number later
        tempNumValue += String(num.nodeValue);
      }
      tempNumValue = Number(tempNumValue);

      // special case -> equal
      if (buttonMath.parentNode.id === "calc-equal") {
        let tempMath = "=";

        if (isMathOK) {

          if (lastMathProcess === "/") {

            numBeforeMath = numBeforeMath / tempNumValue;

          } else if (lastMathProcess === "+") {

            numBeforeMath = numBeforeMath + tempNumValue;
            
          } else if (lastMathProcess === "-") {

            numBeforeMath = numBeforeMath - tempNumValue;

          } else if (lastMathProcess === "x") {
            
            numBeforeMath = numBeforeMath * tempNumValue;

          } else {

            // this is for the first number
            numBeforeMath = tempNumValue;

          }

          // remove screen upper and change it to the math process
          screenUpper.removeChild(screenUpper.firstElementChild);

          // display the equal IF the user has input any number
          screenUpper.appendChild(document.createElement("p"));
          screenLower.firstElementChild.appendChild(document.createTextNode(tempMath));

          // check if it's decimal (contains . (dot))
          if (String(numBeforeMath).indexOf(".") !== -1) {
            isResultDecimal = true;
          }

          if (String(numBeforeMath).length > 4 && isResultDecimal) {
            screenUpper.firstElementChild.appendChild(document.createTextNode(numBeforeMath.toFixed(3)));
            screenLower.firstElementChild.appendChild(document.createTextNode(numBeforeMath.toFixed(3)));
          } else {
            screenUpper.firstElementChild.appendChild(document.createTextNode(numBeforeMath));
            screenLower.firstElementChild.appendChild(document.createTextNode(numBeforeMath));
          }

          // isMathProcess set to true too
          // isMathProcess = true;
          
          // variable re-initialization
          isDecimal = false;
          isInitialized = true;
          isMathOK = false;
          isMathProcess = false;
          isFirstNumber = true;
          tempDigit = 0;
          numBeforeMath = 0;
          lastMathProcess = "";
          isResultDecimal = false;
        }

      } else if (buttonMath.parentNode.id === "calc-multiply") {
        let tempMath = "x";
        
        if (isMathOK) {

          if (lastMathProcess === "x") {

            numBeforeMath = numBeforeMath * tempNumValue;

          }
          else if (lastMathProcess === "/") {

            numBeforeMath = numBeforeMath / tempNumValue;

          } else if (lastMathProcess === "+") {

            numBeforeMath = numBeforeMath + tempNumValue;
            
          } else if (lastMathProcess === "-") {

            numBeforeMath = numBeforeMath - tempNumValue;

          } else if (lastMathProcess === "=") {

          } else {

            // this is for the first number
            numBeforeMath = tempNumValue;

          }

          // change lastMathProcess
          lastMathProcess = tempMath;

          // remove screen upper and change it to the math process
          screenUpper.removeChild(screenUpper.firstElementChild);

          // display the cross IF the user has input any number
          screenUpper.appendChild(document.createElement("p"));
          screenUpper.firstElementChild.appendChild(document.createTextNode(tempMath));
          screenLower.firstElementChild.appendChild(document.createTextNode(tempMath));

          isMathProcess = true;
          tempDigit = 0;
          isDecimal = false;
        }

      } else if (buttonMath.parentNode.id === "calc-division") {
        let tempMath = "/";

        if (isMathOK) {

          if (lastMathProcess === "x") {

            numBeforeMath = numBeforeMath * tempNumValue;

          } else if (lastMathProcess === "/") {
            
            numBeforeMath = numBeforeMath / tempNumValue;

          } else if (lastMathProcess === "+") {

            numBeforeMath = numBeforeMath + tempNumValue;
            
          } else if (lastMathProcess === "-") {

            numBeforeMath = numBeforeMath - tempNumValue;

          } else if (lastMathProcess === "=") {

          } else {

            // this is for the first number
            numBeforeMath = tempNumValue;

          }

          // change lastMathProcess
          lastMathProcess = tempMath;

          // remove screen upper and change it to the math process
          screenUpper.removeChild(screenUpper.firstElementChild);

          // display the cross IF the user has input any number
          screenUpper.appendChild(document.createElement("p"));
          screenUpper.firstElementChild.appendChild(document.createTextNode(tempMath));
          screenLower.firstElementChild.appendChild(document.createTextNode(tempMath));

          isMathProcess = true;
          tempDigit = 0;
          isDecimal = false;

        }

      } else if (buttonMath.parentNode.id === "calc-addition") {
        let tempMath = "+";

        if (isMathOK) {

          if (lastMathProcess === "x") {

            numBeforeMath = numBeforeMath * tempNumValue;

          } else if (lastMathProcess === "/") {

            numBeforeMath = numBeforeMath / tempNumValue;
            
          } else if (lastMathProcess === "+") {

            numBeforeMath = numBeforeMath + tempNumValue;
          
          } else if (lastMathProcess === "-") {

            numBeforeMath = numBeforeMath - tempNumValue;

          } else if (lastMathProcess === "=") {

          } else {

            // this is for the first number
            numBeforeMath = tempNumValue;

          }

          // change lastMathProcess
          lastMathProcess = tempMath;

          // remove screen upper and change it to the math process
          screenUpper.removeChild(screenUpper.firstElementChild);

          // display the cross IF the user has input any number
          screenUpper.appendChild(document.createElement("p"));
          screenUpper.firstElementChild.appendChild(document.createTextNode(tempMath));
          screenLower.firstElementChild.appendChild(document.createTextNode(tempMath));

          isMathProcess = true;
          tempDigit = 0;
          isDecimal = false;

        }


      } else if (buttonMath.parentNode.id === "calc-substract") {
        let tempMath = "-";

        if (isMathOK) {

          if (lastMathProcess === "x") {

            numBeforeMath = numBeforeMath * tempNumValue;

          } else if (lastMathProcess === "/") {

            numBeforeMath = numBeforeMath / tempNumValue;
            
          } else if (lastMathProcess === "+") {

            numBeforeMath = numBeforeMath + tempNumValue;

          } else if (lastMathProcess === "-") {

            numBeforeMath = numBeforeMath - tempNumValue;
          
          } else if (lastMathProcess === "=") {

          } else {

            // this is for the first number
            numBeforeMath = tempNumValue;

          }

          // change lastMathProcess
          lastMathProcess = tempMath;

          // remove screen upper and change it to the math process
          screenUpper.removeChild(screenUpper.firstElementChild);

          // display the cross IF the user has input any number
          screenUpper.appendChild(document.createElement("p"));
          screenUpper.firstElementChild.appendChild(document.createTextNode(tempMath));
          screenLower.firstElementChild.appendChild(document.createTextNode(tempMath));

          isMathProcess = true;
          tempDigit = 0;
          isDecimal = false;

        }
      }
    });
  }

  // button AC function
  let buttonAC = buttonsParentID["calc-ac"];
  buttonAC.addEventListener("click", function(e) {
    
    // remove the nodes inside paraghraph of screen upper 
    // and screen lower
    // we need to remove THOSE + the paraghraph tag inside
    let screenUpper = document.getElementById("screen-upper");
    let screenLower = document.getElementById("screen-lower");

    while (screenUpper.firstChild) {
      screenUpper.removeChild(screenUpper.firstChild);
    }

    while (screenLower.firstChild) {
      screenLower.removeChild(screenLower.firstChild);
    }
    
    //add 0
    screenLower.appendChild(document.createElement("p"));
    screenLower.firstElementChild.appendChild(document.createTextNode("0"));
    
    screenUpper.appendChild(document.createElement("p"));
    screenUpper.firstElementChild.appendChild(document.createTextNode("0"));

    // variable re-initialization
    isDecimal = false;
    isInitialized = true;
    isMathOK = false;
    isMathProcess = false;
    isFirstNumber = true;
    tempDigit = 0;
    numBeforeMath = 0;
    lastMathProcess = "";
    isResultDecimal = false;
  });

  // button CE function
  let buttonCE = buttonsParentID["calc-ce"];
  buttonCE.addEventListener("click", function(e) {
        
  });
});
