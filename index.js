/*
1. Arrays
   Arrays are used to store multiple values in 
   a single variable.

   Creating Arrays:
   You can create an array by enclosing its 
   elements within square brackets ([]).
*/

let numbers = [1, 2, 3, 4]
console.log(numbers);

let fruits = ["apple", "banana", "orange"]
console.log(fruits);

// [1, 2, 3, 4]
//  0  1  2  3
console.log(numbers[3]);
console.log(fruits[1]);

fruits[1] = "cherry";
console.log(fruits[1]);

let matrix = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
]
console.log(matrix[0]);
console.log(matrix[0][1]);


/*
push(): Adds an element to the end.
pop(): Removes the last element.
shift(): Removes the first element.
unshift(): Adds an element to the beginning.
slice(): Copies a portion of an array.
splice(): Adds or removes elements at a 
        specific index.
*/

console.log(fruits.length);

// push()
fruits.push("banana");
console.log(fruits);
console.log(fruits.length);

// pop()
let lastFruit = fruits.pop();
console.log(fruits);
console.log(lastFruit);

// shift()
let firstFruit = fruits.shift();
console.log(fruits);
console.log(firstFruit);

// unshift()
let newLength = fruits.unshift("apple again");
console.log(fruits);
console.log(newLength);

// slice()
let newFruits = ["apple", "banana", "orange", 
        "strawberry"]
let slicedArray = newFruits.slice(1,3);
console.log(slicedArray);

// splice()
let deletedItems = fruits.splice(1,2, "New Item", "New Item Again");
console.log(fruits);
console.log(deletedItems);