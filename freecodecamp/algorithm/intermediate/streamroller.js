function steamrollArray(arr) {
  // I'm a steamroller, baby
  // need to use recursion

  let answerArr = [];
  function streamInside (num) {
    if (!Array.isArray(num)) {
      answerArr.push(num);
    } else {
      for (let n of num) {
        streamInside(n);
      }
    }
  }

  streamInside(arr);

  return answerArr;
}

steamrollArray([1, [2, 3], [4, [[5]]]]);
