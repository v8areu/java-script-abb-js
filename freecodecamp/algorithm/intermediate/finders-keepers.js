function findElement(arr, func) {


  for (let num of arr) {
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
