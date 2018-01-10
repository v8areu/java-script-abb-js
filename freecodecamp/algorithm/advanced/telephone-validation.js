function telephoneCheck(str) {
  /* Good luck!
  const str1 = "555-555-5555";
  const str2 = "(555)555-5555";
  const str3 = "(555) 555-5555";
  const str4 = "555 555 5555";
  const str5 = "5555555555";
  const str6 = "1 555 555 5555";
  const str7 = "(1234567891)"; // false
  const str8 = "2 (757) 622-7382"; // false
  const str9 = "-1 (757) 622-7382"; // false
  const str10 = "2 757 622-7382"; // false
  const str11 = "10 (757) 622-7382"; // false
  const str12 = "27576227382"; // false
  const str13 = "2(757)622-7382"; // false
  const str14 = "(555-555-5555"; // false
  const str15 = "1 555-555-5555"; // true
  const str16 = "1 (555) 555-5555";
  const str17 = "1(555)555-5555";
  */

  const re = new RegExp(/^[1]*\s*\d{3}-\d{3}-\d{4}$|^[1]*\(\d{3}\)\d{3}-\d{4}$|^[1]*\s*\(\d{3}\)\s\d{3}-\d{4}$|^[1]*\s*\d{3}\s\d{3}\s\d{4}$|^\d{10}$/);
  
  // will return true or false. the test() method is suitable since it's returning true or false
  return re.test(str);
}

telephoneCheck("555-555-5555");
