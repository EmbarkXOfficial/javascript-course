/*
Logical Operators:
   - Logical AND (&&)
   - Logical OR (||)
   - Logical NOT (!)
*/


/* 
1. Logical AND (&&)
   - The AND operator (&&) checks if BOTH 
   conditions are true.
   - It returns true only if both are true, 
   otherwise, it returns false.
*/

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// Example
let hasTickets = true;
let hasId = true;
console.log(hasTickets && hasId)

hasId = false;
console.log(hasTickets && hasId)

console.log((5 > 3) && (5 > 6));



/*
2. Logical OR (||)
   - The OR operator (||) checks if AT LEAST 
   ONE condition is true.
   - It returns true if at least one value is 
   true; if both are false, it returns false.
*/


console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);


let isSunny = false;
let hasRaincoat = true;
console.log(isSunny || hasRaincoat);
hasRaincoat = false;
console.log(isSunny || hasRaincoat);




/*
3. Logical NOT (!)
   - The NOT operator (!) inverts the value 
   of a Boolean.
   - It turns true into false and false into 
   true.
*/

console.log(!true);

let isRaining = true;
let shouldStayInside = !isRaining;
console.log(shouldStayInside);


































/*
5. Unary Operators:
   - Increment (++)
   - Decrement (--)
   - typeof operator
   - Logical NOT (!)

6. Ternary Operator:
   - Conditional operator (condition ? value1 : value2)
*/
