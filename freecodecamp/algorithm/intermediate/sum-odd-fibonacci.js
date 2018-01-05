function sumFibs(num) {

  let fiboSeq = [0, 1];
  let tempNum = 1;
  let sum = 0;
  let i = 2;

  while (tempNum < num) {

    tempNum = fiboSeq[i - 2] + fiboSeq[i - 1];
    if (tempNum <= num) {
      fiboSeq.push(tempNum);
    }
    i++;

  }

  // sum all the odd value
  for (let fiboNum of fiboSeq) {
    if (fiboNum % 2 !== 0) {
      sum += fiboNum;
    }
  }

  console.log(sum);
  return sum;
}

sumFibs(75025);
