function getSquare(number) {
  // let result = number * number;
  // return result;

  return number * number;
  // console.log("Hi");
}

// Function returning multiple values [object]
function getUserInfo() {
  return {
    userName: "name test",
    userAge: "age test"
  }
}

// Function return Array
function getDimension() {
  return [200, 300, 500];
}

// No return
function sayHello() {
  console.log("Hello");
}

// Function with multiple return statements
function checkAge(age) {
  if(age > 18){
    return "Adult";
  } else {
    return "Minor";
  }
}

let squareNum = getSquare(4);
console.log(squareNum);

console.log(getUserInfo());
let {userName, userAge} = getUserInfo();
console.log(userName, userAge);

console.log(getDimension());
let [width, height, depth] = getDimension();
console.log(width, height, depth);

let message = sayHello();
console.log(message);

console.log(checkAge(14));
console.log(checkAge(24));