function greet(name, age) {
  console.log(`Hello, ${name}!`, typeof name);
  console.log(`You are ${age} years old`, typeof age);
  console.log("You are now logged in.");
}

// Function with default parameter value
function greetPerson(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

// Function with Rest Parameter
function calculateSum(...numbers) {
  let sum = 0;
  for(let number of numbers){
    sum += number;
  }
  console.log(sum);
}

// Boolean parameters
function checkEligibility(isMember) {
  console.log((isMember) ? "Eligible" 
                        : "Not eligible");
}

// Functions with objects as parameters
function printAddress({street, city, zip}) {
  console.log(`Address: ${street}, ${city}, ${zip}`)
}

// Functions with Arrays as parameters
function printNumbers(numbers){
  console.log(numbers);
}

greet("Alice", 22);
greet("John", 21);
greet("Lousy", "29");

greetPerson("Ron");

calculateSum(10,20);
calculateSum(10,20,30);
calculateSum(10,20,30,80);

checkEligibility(false);

let address = {
  street: "Street1",
  city: "City1",
  zip: "052754"
};
printAddress(address);
printAddress({street: "ABC", city:"City22"});

printNumbers([1,2,3,4,5,6]);