//implicit binding
function foo() {
  console.log(this.a);
}
var a = 44;
var obj = {
  a: 2,
  foo: foo
};

obj.foo();
