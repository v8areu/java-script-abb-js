
function convertToRoman(num) {

  let numString = num.toString();
  let arrNumString = numString.split('');
  let numOrder = [];

  while (arrNumString.length > 0) {
    
    let temp = arrNumString.splice(arrNumString.length - 1, 1);
    numOrder.push(Number(temp));

  }


  let romanNumOrder = [];
  for (let idx in numOrder) {
    // I don't know the heck why idx is a string. wth javascript

    idx = Number(idx);
    let tempRomanString;

    if (numOrder[idx] < 4) {

      let romanDigit;

      if (idx === 0) {

        romanDigit = 'I';

      } else if (idx === 1) {

        romanDigit = 'X';

      } else if (idx === 2) {

        romanDigit = 'C';
        
      } else if (idx === 3) {

        romanDigit = 'M';

      } else {
        
        console.log('something is wrong on the numOrder[idx] < 4');

      }

      // main logic
      tempRomanString = romanDigit.repeat(numOrder[idx]);

    } else if (numOrder[idx] === 4) {

      let romanDigitOnes;
      let romanDigitFives;

      if (idx === 0) {
        
        romanDigitOnes = 'I';
        romanDigitFives = 'V';
      
      } else if (idx === 1) {
        
        romanDigitOnes = 'X';
        romanDigitFives = 'L';

      } else if (idx === 2) {
        
        romanDigitOnes = 'C';
        romanDigitFives = 'D';
      
      } else if (idx === 3) {

        romanDigitOnes = 'M';
        romanDigitFives = romanDigitOnes.repeat(numOrder[idx]);

      } else {
        console.log('something wrong on numOrder[idx] === 4');
      }

      if (idx !== 3) {
        tempRomanString = romanDigitOnes + romanDigitFives;
      } else if (idx === 3) {
        tempRomanString = romanDigitFives;
      } else {
        console.log('something wrong on numOrder[idx] === 4');
      }


    } else if (numOrder[idx] === 5) {

      let romanDigit;

      if (idx === 0) {
        romanDigit = 'V';
      } else if (idx === 1) {
        romanDigit = 'L';
      } else if (idx === 2) {
        romanDigit = 'D';
      } else if (idx === 3) {
        romanDigit = 'M';
      } else {
        console.log('something wrong on numOrder[idx] === 5');
      }

      if (idx !== 3) {

        tempRomanString = romanDigit;

      } else if (idx === 3){
        
        tempRomanString = romanDigit.repeat(numOrder[idx]);

      } else {
        console.log('something wrong on numOrder[idx] === 5');
      }

    } else if (numOrder[idx] < 9) {

      let drivingForce = 5;
      let romanDigitOnes;
      let romanDigitFives;

      if (idx === 0) {
        
        romanDigitOnes = 'I';
        romanDigitFives = 'V';
      
      } else if (idx === 1) {
        
        romanDigitOnes = 'X';
        romanDigitFives = 'L';

      } else if (idx === 2) {
        
        romanDigitOnes = 'C';
        romanDigitFives = 'D';
      
      } else if (idx === 3) {

        romanDigitOnes = 'M';
        romanDigitFives = romanDigitOnes.repeat(drivingForce);

      } else {
        console.log('something wrong on numOrder[idx] < 9');
      }

      tempRomanString = romanDigitFives;
      tempRomanString += romanDigitOnes.repeat(numOrder[idx] - drivingForce);

    } else if (numOrder[idx] === 9) {

      let romanDigitOnes;
      let romanDigitTens;

      if (idx === 0) {
        
        romanDigitOnes = 'I';
        romanDigitTens = 'X';
      
      } else if (idx === 1) {
        
        romanDigitOnes = 'X';
        romanDigitTens = 'C';

      } else if (idx === 2) {
        
        romanDigitOnes = 'C';
        romanDigitTens = 'M';
      
      } else if (idx === 3) {

        romanDigitOnes = 'M';
        romanDigitTens = romanDigitOnes.repeat(numOrder[idx]);

      } else {
        console.log('something wrong on numOrder[idx] === 9');
      }

      if (idx !== 3) {
        tempRomanString = romanDigitOnes + romanDigitTens;
      } else if (idx === 3) {
        tempRomanString = romanDigitTens;
      } else {
        console.log('something wrong on numOrder[idx] === 9');
      }

    } else {

      console.log('something wrong on the big if');
    }

    romanNumOrder.push(tempRomanString);

  }  

  // reverse array
  romanNumOrder.reverse();

  let romanFull = romanNumOrder.join('');

  console.log(romanFull);

  return romanFull;
}

convertToRoman(16);
