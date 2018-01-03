function sumFibs(num) {

  let fiboSeq = [1];

  let base = 0;
  let base2 = 1;
  while (num > 0) {
  
    fiboSeq.push(base + base2);
    base = base2;

    num--;
  }

  return total;
}

sumFibs(4);
