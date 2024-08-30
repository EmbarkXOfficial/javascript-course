/*
Ternary Operator:
   - Conditional operator 
   (condition ? value1 : value2)
*/

let x = 4;
let message = (x > 5) ? "x is > 5" : "x is < 5";
console.log(message);


let number = 5;
let result = (number % 2 === 0) ? "even" : "odd";
console.log(result);

// Nested Ternary Operator
// age < 13 -> Child
// age 13-20 -> Teenager
// age > 20 -> Adult

let age = 22;
let category = (age < 13) ? "Child" : 
        (age < 20 ) ? "Teenager" : "Adult";
console.log(category);