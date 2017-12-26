function myReplace(str, before, after) {

  let newAfter = "";
  

  for (let i in after) {

    if (i < before.length) {

      if (before[i] === before[i].toLowerCase()) {

        // it is lower case
       newAfter += after[i].toLowerCase();
      } else {

        // it is uppercase
        newAfter += after[i].toUpperCase();

      }
    } else {
      
        newAfter += after[i];

    }
  }

  var reg = new RegExp(before, "i");
  var newStr = str.replace(reg, newAfter);

  console.log(newStr);

  return newStr;
}

myReplace("His name is Sleeping", "Sleeping", "john");
