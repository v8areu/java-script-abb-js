function fearNotLetter(str) {

  // not defining answer as a empty string will 
  // cause its output as undefined
  // which is what the challange asked
  // if initialized, it will return empty string.
  let answer;
  for (let i = 0; i < str.length - 1; i++) {

    // this two line is for readibility purpose
    let tempCharCode = str.charCodeAt(i);
    let stringTempCharCodeNext = String.fromCharCode(tempCharCode + 1);

    // just check if the next string on str is the same as
    // the next string on ASCII from the stringTempCharCodeNext
    if (str[i + 1] !== stringTempCharCodeNext) {

      // if it is not the same, the answer have to be the ASCII
      // not the str[i+1] because the string is the one which is 
      // faulty
      answer = stringTempCharCodeNext;

    }
  }
  
  return answer;
}

fearNotLetter("abce");
