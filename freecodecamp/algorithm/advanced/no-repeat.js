function permAlone(str) {

  // calculate str length\
  const strLength = str.length;

  // change str to array of char
  const strArray = str.split('');

  // recursive function
  let permRecursive = function(strArray, strDeep, countPerm, recursiveArray) {
    
    if (strDeep === str.length - 1) {
      return countPerm;
    } else {
      strArray.forEach((char, charIndex) => {
        const tempRec = permRecursive(strArray, charIndex, countPerm);
        recursiveArray.push(tempRec);
      });
    }

  };

  // console.log(permRecursive(str, 0, 0));

  return str;
}

permAlone('aab');
