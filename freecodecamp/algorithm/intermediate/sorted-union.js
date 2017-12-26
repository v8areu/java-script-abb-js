function uniteUnique(arr) {

  // need to define the base array explicitly
  let oriArr = [];
  
  for (let key in arguments) {
    let tempArr = arguments[key];

    for (let val of tempArr) {

      if (oriArr.indexOf(val) === -1) {

        oriArr.push(val);

      }
    }
  }

  console.log(oriArr);

  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
