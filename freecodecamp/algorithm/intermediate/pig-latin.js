function translatePigLatin(str) {

  // array of vowel
  let vowel = ['a', 'e', 'i', 'o', 'u'];

  // check if first char of str is vowel
  if (vowel.indexOf(str[0]) !== -1) {

    str += "way";

  } else { // if the first char (or char cluster) is a consonant

    let i = 0;
    let firstChars = "";

    // loop until it meets the first vowel
    while(vowel.indexOf(str[i]) === -1) {
      firstChars += str[i];
      i++;
    }

    str = str.substr(i);

    str += firstChars;
    str += "ay";

  }

  console.log(str);
  return str;
}

translatePigLatin("paraghraphs");
