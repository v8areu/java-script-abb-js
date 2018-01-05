function addTogether() {

  if (arguments.length === 1) {
    let x = arguments[0];
    if (typeof(x) !== "number") {
      console.log(typeof(x));
      return undefined;
    }

    return function(y) {
      if (typeof(y) !== "number") {
        return undefined;
      } else {
        return y + x;
      }
    };

  } else {
    let sum = 0;
	  for (let arg of arguments) {
	    if (typeof(arg) !== "number") {
	      return undefined;
	    } else {
	      sum += arg;
	    }
	  }
    return sum;
  }
  return undefined;
}

addTogether("a");
