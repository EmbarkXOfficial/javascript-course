/*
Type Conversion
- Javascript is a loosely typed language
- Javascript supports implicit and explicit 
        conversion
*/

let example1 = '5' + 1; // '5' + '1'
console.log(example1);
console.log(typeof example1);

// console.log("Hi" + "hello")

let example2 = '5' - 1;
console.log(example2);
console.log(typeof example2);


let example3 = '5' * 1;
console.log(example3);
console.log(typeof example3);

let example4 = true + 1;
console.log(example4);
console.log(typeof example4);


// Converting values explicitly

// toString(), String()
let num = 123;
let bool = true;

let numToString = String(num);
console.log(numToString, typeof numToString);
let boolToString = String(bool);
console.log(boolToString, typeof boolToString);

let numToString1 = num.toString();
console.log(numToString1, typeof numToString1);
let boolToString1 = bool.toString();
console.log(boolToString1, typeof boolToString1);

// Number(), parseInt(), parseFloat()
let strNum = "456";
let strFloat = "12.55";

let strToNum = Number(strNum);
console.log(strToNum, typeof strToNum);

let strToInt = parseInt(strFloat);
console.log(strToInt, typeof strToInt);

let strToFloat = parseFloat(strFloat);
console.log(strToFloat, typeof strToFloat);

let invalidNum = Number("hello");
console.log(invalidNum, typeof invalidNum);

// Boolean()

let zero = 0;
let nonEmptyString = "Hello";

let zeroToBoolean = Boolean(zero);
console.log(zeroToBoolean, typeof zeroToBoolean);

let strToBoolean = Boolean(nonEmptyString);
console.log(strToBoolean, typeof strToBoolean);

