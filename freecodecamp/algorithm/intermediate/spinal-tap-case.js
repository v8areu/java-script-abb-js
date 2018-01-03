function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  // first, need to check if the case is uppercase or not
  // if it's uppercase and no space before it, add space
 
  let re = new RegExp(/[ _]/);
 
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase() && str[i] !== " ") {
      // let reTest = re.test(str[i - 1]);
      // console.log(i-1, str[i-1], re.test(str[i - 1]));
      // if (!re.test(str[i + 1])) {
       
      // }
    }

    newStr += str[i];
  }
  let replace = str.replace(/[ _]/g, '($1)').toLowerCase();

  console.log(replace);
  return str;
}

spinalCase('ThisIs_Spinal Tap');
