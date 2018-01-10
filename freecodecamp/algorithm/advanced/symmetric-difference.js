function sym(args) {
  
  // make new array 
  let arr2d = [];
  for (const idx in arguments) {
    arr2d.push(arguments[idx]);
  }

  // use reduce
  const newArr = arr2d.reduce(function(tempNewArr, currentArr) {

    // delete duplicate in currentArr
    currentArr = [...new Set(currentArr)];
    
    // make arr2d into 1d array
    for (const num of currentArr) {

      if (tempNewArr.indexOf(num) !== -1) {

        let tempIdx = tempNewArr.indexOf(num);
        tempNewArr.splice(tempIdx, 1);

      } else {

        tempNewArr.push(num);

      }
    }

    return tempNewArr;
  }, []);

  console.log(newArr);

  return newArr;
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);



