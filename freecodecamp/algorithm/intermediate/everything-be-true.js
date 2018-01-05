function truthCheck(collection, pre) {
  // Is everyone being true?
  for (let obj of collection) {
    if (!obj.hasOwnProperty(pre) || !obj[pre]) {
      console.log(false);
      return false;
    }
  }
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": null}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
