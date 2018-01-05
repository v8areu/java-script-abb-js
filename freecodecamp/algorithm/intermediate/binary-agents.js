function binaryAgent(str) {

  // make array of the binaries
  let binaryArrays = str.split(" ");

  let strDecoded = "";
  for (let bin of binaryArrays) {

    let tempCharCode = 0;
    for (let i = bin.length - 1; i >= 0; i--) {
      if (Number(bin[i]) === 1) {
        tempCharCode += Math.pow(2, (bin.length - 1 - i));
      }
    }
    strDecoded += String.fromCharCode(tempCharCode);

  }

  return strDecoded;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
