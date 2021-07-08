// ==== Callbacks ====  

let consume = function(a, b, cb) {
  return cb(a, b)
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

let add = function(a, b) {
  return a + b;
}

let multiply = function(a, b) {
  return a * b;
}

let greeting = function(a, b) {
  return `Hello ${a} ${b}, nice to meet you!`;
}

console.log(consume(3, 4, add));
console.log(consume(3, 4, multiply));
console.log(consume('Erika', 'Madrigal', greeting));


/* Step 3: Check your work by un-commenting the following calls to consume(): */
// console.log(consume(2, 2, add)); // 4
// console.log(consume(10, 16, multiply)); // 160
// console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why the 'nestedfunction' can access the variable internal.

// Explanation: The nested function looks inside the function scope first, then up the chain for help in completing the task, which is to console.log the internal string.


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
