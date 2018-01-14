function updateInventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!
  // check if arr2 empty, if it is, return arr1
  if (arr2.length === 0) {
    return arr1;
  } else {
    if (arr1.length === 0) {
      // sort arr2
      arr2.sort((a, b) => {
        return a[1] > b[1] ? 1 : -1;
      });
      console.log(arr2);
      return arr2;
    }

    // sort arr2, ascending on the item type
    arr2.sort((a, b) => {
      return a[1] > b[1] ? 1 : -1;
    });

    // loop over arr2
    for (let newItem of arr2) {
      const tempNewItemType = newItem[1];
      const tempNewItemCount = newItem[0];

      // loop over arr1, if the newItem is found there, add the number
      // if not, insert it with splice
      let isThere = false;
      for (let i = 0; i < arr1.length; i++) {
        if (tempNewItemType === arr1[i][1]) {
          arr1[i][0] += tempNewItemCount;
          isThere = true;
        }
      }

      if (!isThere) {
        for (let i = 0; i < arr1.length; i++) {
          if (arr1[i][1] > tempNewItemType) {
            arr1.splice(i, 0, newItem);
            break;
          }
          if (i === arr1.length - 1) {
            arr1.splice(i, 0, newItem);
            break;
          }
        }
      }
    }
  }

  // sort arr1
  arr1.sort((a, b) => {
    return a[1] > b[1] ? 1 : -1;
  });

  console.log(arr1);
  
  return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [9, "Qiqi"],
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
