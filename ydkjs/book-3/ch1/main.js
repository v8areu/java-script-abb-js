function identify() {
  return this.name.toUpperCase();
}

function speak() {
  var greeting = "hello, I am " + identify.call(this);
  console.log(greeting);
}

var me = {
  name: "fahru"
}

var you = {
  name: "eko"
}

identify.call(me);
identify.call(you);

speak.call(me);
speak.call(you);
