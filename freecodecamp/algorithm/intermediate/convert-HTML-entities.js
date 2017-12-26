function convertHTML(str) {
  // &colon;&rpar;
  
  let re = new RegExp(/[&><"']/, 'g');

  let htmlApos = "&apos;";
  let htmlQuote = "&quot;";
  let htmlAmp = "&amp;";
  let htmlLessThan = "&lt;";
  let htmlGreaterThan = "&gt;";

  for (let ch of str) {



  }

  return str;
}

convertHTML("Dolce & Gabbana");
