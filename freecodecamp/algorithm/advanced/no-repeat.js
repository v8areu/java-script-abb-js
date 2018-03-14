function permAlone(str) {

  let permArr = [];


  function generate(n, arr) {

    if (n === 1) {
      permArr.push(arr.join(""));
    } else {

      for (let i = 0; i < n - 1; i++) {
         generate(n - 1, arr);

        if (n % 2 === 0) {

          let temp = arr[i];
          arr[i] = arr[n - 1];
          arr[n - 1] = temp;

        } else {

          let temp = arr[0];
          arr[0] = arr[n - 1];
          arr[n - 1] = temp;

        }
      }
      generate(n - 1, arr);
    }
  }

  generate(str.length, str.split(""));

  let newPermArr = permArr.filter((item) => {
    let itemLength = item.length;

    // change item to array;
    let itemArray = item.split("");

    let newItemArray = itemArray.filter((char, index, arr) => {

      if (index === 0) {
        if (arr[index] !== arr[index + 1]) {
          return true;
        } else {
          return false;
        }
      } else if (index === arr.length - 1) {
        if (arr[index] !== arr[index - 1]) {
          return true;
        } else {
          return false;
        }
      } else {
        if (arr[index] !== arr[index - 1] && arr[index] !== arr[index + 1]) {
          return true;
        } else {
          return false;
        }
      }
    });

    let newItem = newItemArray.join("");

    if (newItem.length === itemLength) {
      return true;
    }
  });

  return newPermArr.length;
}

permAlone('zzzzzz');
