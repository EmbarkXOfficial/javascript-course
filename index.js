/*
Arrow functions provide a more concise way 
for writing functions.
*/
function sayHello() {
  console.log("Hello");
}

let greet = function() {
  console.log("Hello");
}

let greetArrow = () => console.log("Hello");

let greetArrowMultiple = () => {
  console.log("Hello 1");
  console.log("Hello 2");
}

let greetArrowParam1 = (name) => {
  console.log(`Hello 1 ${name}`);
  console.log("Hello 2");
}

let greetArrowParam2 = (name, age) => {
  console.log(`Hello 1 ${name}`);
  console.log(`Hello 2 ${age}`);
}

let greetArrow1 = (name) => console.log("Hello", name);

sayHello();
greet();
greetArrow();
greetArrowMultiple();
greetArrowParam1("John");
greetArrowParam2("John", 32);
greetArrow1("Nadar");


// Return values
let sum = (a,b) => a + b;

console.log(sum(10,20));