function smallestCommons(arr) {

  // make an array
  let newArr = [];
  for (let i = Math.min(arr[0], arr[1]);
    i <= Math.max(arr[0], arr[1]);
    i++) {
    newArr.push(i);
  }

  let countSCM = 0;
  let baseNum = Math.min(arr[0], arr[1]);
  let n = 1;

  while (countSCM < newArr.length) {
    countSCM = 0;
    for (let num of newArr) {
      if (baseNum * n % num === 0) {
        countSCM++;
      }
    }
    n++;
  }

  let answer = baseNum * (n - 1);

  console.log(answer);

  return answer;
}


smallestCommons([23,18]);
