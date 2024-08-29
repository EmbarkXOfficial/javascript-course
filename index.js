// DATATYPES
// Define the kind of value variable is holding

// PRIMITIVE TYPES
// Number: Represents both integers and floating 
//          point numbers

let age = 70;
console.log(typeof age);
console.log(age);

// String: Represents sequence of characters
let name = "John";
console.log(typeof name);

let city = 'San Jose';
console.log(typeof city);

console.log(name + " " + city);

// Boolean: Represents true or false
let hasGraduated = true;
console.log(typeof hasGraduated);

// Undefined: No value assigned
let area;
console.log(typeof area);

// Null: Represents intentional absence of value
let emptyValue = null;
console.log(emptyValue);

// REFERENCE TYPES
// Object: Used to store complex data in form 
//          of key value pairs
let userAge = 22;
let userName = "John";

let user = {
    name: "John",
    age: 22,
    city: "San Francisco"
}
console.log(user.age);
console.log(user.name);
user.name = "Alice";
console.log(user.name);
console.log(user);

// Array: Used to hold multiple values
let fruit = ["Apple", "Banana", "Strawberry"]
console.log(fruit);
console.log(typeof fruit);

