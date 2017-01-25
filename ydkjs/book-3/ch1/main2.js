function identify(context) {
  return context.name.toUpperCase();
}

function speak(context) {
  var greeting = "hello, I am " + identify(context);
  console.log(greeting);
}

you = {
  name: "fahru"
};

speak(you);
