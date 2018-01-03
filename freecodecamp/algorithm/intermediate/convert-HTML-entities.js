function convertHTML(str) {
  // &colon;&rpar;
  
  let htmlApos = "&apos;";
  let htmlQuote = "&quot;";
  let htmlAmp = "&amp;";
  let htmlLessThan = "&lt;";
  let htmlGreaterThan = "&gt;";

  for (let ch of str) {

    if (ch === "&") {
      answer += htmlAmp;
    } else if (ch === '"') {
      answer += htmlQuote;
    } else if (ch === "'") {
      answer += htmlApos;
    } else if (ch === "<") {
      answer += htmlLessThan;
    } else if (ch === ">") {
      answer += htmlGreaterThan;
    } else {
      answer += ch;
    }

  }

  return str;
}

convertHTML("Dolce & Gabbana");
