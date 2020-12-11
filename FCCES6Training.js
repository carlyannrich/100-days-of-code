/*
ECMAScript is a standardized version of JavaScript with the goal of unifying the language's specifications and features. 
As all major browsers and JavaScript-runtimes follow this specification, the term ECMAScript is interchangeable with the term 
JavaScript.

Most of the challenges on freeCodeCamp use the ECMAScript 5 (ES5) specification of the language, finalized in 2009. 
But JavaScript is an evolving programming language. As features are added and revisions are made, new versions of the 
language are released for use by developers.

The most recent standardized version is called ECMAScript 6 (ES6), released in 2015. This new version of the language adds
some powerful features that will be covered in this section of challenges, including:

Arrow functions
Classes
Modules
Promises
Generators
let and const */

// var allows you to accidentally overwrite variables, using let throws an error when a variable is overwritten
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";
}
catTalk();

// var keyword scope is declared globally, or locally when in a function
// let is similar, but if it is declared in a block, statement or expression the scope is limited to inside these
var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
// returns [0, 1, 2]
console.log(i);
// returns 3
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function () {
      return i;
    };
  }
}
console.log(printNumTwo());
// returns 3 this is returned because it returns global declaration
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function () {
      return i;
    };
  }
}
console.log(printNumTwo());
// returns 2
console.log(i);
// returns "i is not defined"

// two different 'i' scopes
function checkScope() {
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

// Declare a Read-Only Variable with the const Keyword
// A common practice when naming constants is to use all uppercase letters, with words separated by an underscore.

function printManyTimes(str) {
  // Only change code below this line

  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i += 2) {
    console.log(SENTENCE);
  }

  // Only change code above this line
}
printManyTimes("freeCodeCamp");

// Some developers prefer to assign all their variables using const by default,
// unless they know they will need to reassign the value. Only in that case, they use let.
// important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable
const s = [5, 6, 7];
s = [1, 2, 3]; // throws error, trying to assign a const
s[2] = 45; // works just as it would with an array declared with var or let
console.log(s); // returns [5, 6, 45]

// change array to be 2,5,7
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  let addIntoArray = s.pop();
  s.unshift(addIntoArray);
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();

// Prevent Object Mutation
// JavaScript provides a function Object.freeze to prevent data mutation.
// Once the object is frozen, you can no longer add, update, or delete properties from it.
//  Any attempt at changing the object will be rejected without an error.
let obj = {
  name: "FreeCodeCamp",
  review: "Awesome",
};
Object.freeze(obj);
obj.review = "bad"; // will be ignored. Mutation not allowed
obj.newProp = "Test"; // will be ignored. Mutation not allowed
console.log(obj);
// { name: "FreeCodeCamp", review:"Awesome"}
// In this challenge you are going to use Object.freeze to prevent mathematical constants from changing.
// You need to freeze the MATH_CONSTANTS object so that no one is able to alter the value of PI, add, or delete properties.
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS);

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

// Use Arrow Functions to Write Concise Anonymous Functions
/*
In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. 
Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else. */
// So this:
const myFunc = function () {
  const myVar = "value";
  return myVar;
};
// can be this with arrow function:
const myFunc = () => {
  const myVar = "value";
  return myVar;
};
// can also omit return keyword:
const myFunc = () => "value";

const magic = () => {
  return new Date();
};

// Write Arrow Functions with Parameters
// doubles input value and returns it
const doubler = (item) => item * 2;
doubler(4); // returns 8

// the same function, without the parameter parentheses
const doubler = (item) => item * 2;

// multiplies the first input value by the second and returns it
const multiplier = (item, multi) => item * multi;
multiplier(4, 2); // returns 8

const myConcat = (arr1, arr2) => {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));

// Set Default Parameters for Your Functions, ES6 introduces default parameters for functions.
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous
// The default parameter kicks in when the argument is not specified (it is undefined).
// As you can see in the example above, the parameter name will receive its default value "Anonymous" when you do
// not provide a value for the parameter. You can add default values for as many parameters as you want.
const increment = (number, value = 1) => number + value;

// Use the Rest Parameter with Function Parameters
// With the rest parameter, you can create functions that take a variable number of arguments.
// These arguments are stored in an array that can be accessed later from inside the function.
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], {})); // You have passed 4 arguments.
