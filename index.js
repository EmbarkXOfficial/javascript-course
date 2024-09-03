// sayHello();
// greet();

let greet = function() {
  console.log("Hello");
}

let multiply = function(a, b) {
  return a * b;
}

// sayHello();
greet();
console.log(multiply(10, 20));


// Functions are objects
function sayHello() {
  console.log("Hello Again!");
}

sayHello();
let a = sayHello;
a();