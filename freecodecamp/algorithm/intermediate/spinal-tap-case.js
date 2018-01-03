function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  // first, need to check if the case is uppercase or not
  // if it's uppercase and no space before it, add space
 
  let re = new RegExp(/([ _])/g);
  let re2 = new RegExp(/([a-z]+)([A-Z])/g);

  let str2 = str.replace(re2, "$1 $2");
  let str3 = str2.replace(re, "-").toLowerCase();
  console.log(str3);

  return str;
}

spinalCase('ThisIs_Spinal Tap');
