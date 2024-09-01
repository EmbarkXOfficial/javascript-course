/*
JavaScript Objects

Objects allow you to group related data and 
functions together. 

An object is created using curly braces `{}` 
and contains key-value pairs, where each key 
(also called a property) is associated with 
a value.

*/

let person = {
        name: "Alice",
        age: 25,
        isStudent: true
}
console.log(person);

// Accessing Properties
console.log(person.age);
console.log(person["age"]);

// Adding or Updating Properties
person.age = 66;
console.log(person.age);
console.log(person);

person.job = "Engineer";
console.log(person);
console.log(person.job);

// Deleting Properties
delete person.isStudent;
console.log(person);

// Check if property exist
console.log('name' in person);
console.log(person.hasOwnProperty("age"));


// Nested Objects
let student = {
        name: "Bob",
        courses : {
                math: true,
                science: false
        }
}
console.log(student);
console.log(student.courses.math);

// Object Destructuring
let {name, courses} = student;
console.log(name);
console.log(courses);
