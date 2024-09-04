let personAlice = {
  name: "Alice",
  age: 33,
  greet: function(){
    console.log(`Hi I am ${this.name}`);
  }
}

let personJohn = {
  name: "John",
  age: 33,
  greet: () => console.log(`Hi I am ${personJohn.name}`)
}

personAlice.greet();
personJohn.greet();


// Counter
let counter = {
  value: 0,
  increment: function(){
    this.value += 1;
    return this.value;
  },
  incrementBy: function(num){
    this.value += num;
    return this.value;
  }
}

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());

console.log(counter.incrementBy(10));

// Defining methods dynamically
let dynamicMethod = {
  value: 0
};

console.log(dynamicMethod.value);

dynamicMethod.sayHi = function() {
  console.log("Hello Dynamic");
}

dynamicMethod.sayHi();


// Nested
let car = {
  brand: "Toyota",
  specs: {
    speed: 120,
    displaySpecs: function(){
      console.log(`Speed `, this.speed);
    }
  }
} 

car.specs.displaySpecs();


// Shorthand version
let personShortHand = {
  name: "Short Hand",
  age: 33,
  greet(){
    console.log(`Hi I am ${this.name}`);
  }
}

personShortHand.greet();