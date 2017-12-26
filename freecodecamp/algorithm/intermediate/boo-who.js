function booWho(val) {
  // What is the new fad diet for ghost developers? The Boolean.
  
  let boolVal;

  // just type checking as usual
  // hack-> typeof(true), can be typeof(false) as well
  // because these are the values which I know for certain
  // for its... booleanity (whatsoever!)
  if (typeof(val) === typeof(true)) {
    boolVal = true;
  } else {
    boolVal = false;
  }
  
  console.log(boolVal);
  return boolVal;
}

booWho('asda');
