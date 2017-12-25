
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  
  // calculate source length
  let sourceLength = Object.keys(source).length;

  for (let item of collection) {

    let tempCount = 0;
    for (let keySource in source ) {

      if (item[keySource] === source[keySource]) {
        tempCount++;
      }

    }

    if (tempCount === sourceLength) {
      arr.push(item);
    }
    
  }

  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { first: "Tybalt", last: "Capulet" });

