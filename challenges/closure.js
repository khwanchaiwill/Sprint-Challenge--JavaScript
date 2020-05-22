// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


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

// Explanation: 
`Because of nestedFunction is the child function fo myFunction, the Child function alwasy can get what ever Parent function have.
or other words the it pass from outside to inside never inside to outside`

/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
let count = 4;
function sumation(){
  
  return function counter(){
    for (let i = 0; i <=count; i++)
     console.log (count++);
  }
   
}
sumation();