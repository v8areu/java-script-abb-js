//constructed object
var obj1 = new Object();

obj1.key = "kaka";

console.log(obj1.key);

//literal object
var obj2 = {
  key: "qiqi",
  kuy: "qoqo"
};

console.log(obj2.key);

//built-in object
var strPrimitive = "Imma a string";
var typeofStriPrimitive = typeof strPrimitive;
console.log(typeofStriPrimitive);
var test_1 = strPrimitive instanceof String;
console.log(test_1);

var strObject = new String("Imma a String");
var typeofStriObject = typeof strObject;
var test_2 = strObject instanceof String;
console.log(typeofStriObject + " " + test_2);
//inspect the object subtype
var test_3 = Object.prototype.toString.call(strObject);
console.log(test_3);
