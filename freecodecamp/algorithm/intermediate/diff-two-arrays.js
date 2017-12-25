function diffArray(arr1, arr2) {
  var newArr = [];

  var greaterArr = [];
  var lesserArr = [];

  if (arr1.length > arr2.length) {
    greaterArr = arr1;
    lesserArr = arr2;
  } else {
    greaterArr = arr2;
    lesserArr = arr1;
  }

  for (let elem of greaterArr) {
    if (lesserArr.indexOf(elem) === -1) {
      newArr.push(elem);
    }
  }

  for (let elem of lesserArr) {
    if (greaterArr.indexOf(elem) === -1) {
      newArr.push(elem);
    }
  }

  return newArr;
}

let a = diffArray([1, "calf", 3, "piglet"], [7, "filly"]);

console.log(a);
