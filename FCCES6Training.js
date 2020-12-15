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

// Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};

// ES6: Use the Spread Operator to Evaluate Arrays In-Place
// allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // returns 89 this is ES5 code,
// ES6 below:
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89
// copy arr1 into arr2 using the spread operator:
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;

arr2 = [...arr1]; // Change this line

console.log(arr2);

// ES6: Use Destructuring Assignment to Extract Values from Objects, for neatly assigning values taken directly from an object.
// ES5 code:
const user = { name: "John Doe", age: 34 };

const name = user.name; // name = 'John Doe'
const age = user.age; // age = 34
// vs ES6 code:
const user = { name: "John Doe", age: 34 };
const { name, age } = user;
// name = 'John Doe', age = 34
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};
const { today, tomorrow } = HIGH_TEMPERATURES;

// ES6: Use Destructuring Assignment to Assign Variables from Objects, Destructuring allows you to assign a new variable name when extracting values
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

// Use Destructuring Assignment to Assign Variables from Nested Objects, destructure values from nested objects.
const user = {
  johnDoe: {
    age: 34,
    email: "johnDoe@freeCodeCamp.com",
  },
};
// Here's how to extract the values of object properties and assign them to variables with the same name:
const {
  johnDoe: { age, email },
} = user;
const {
  johnDoe: { age: userAge, email: userEmail },
} = user;
// challenge
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};
const {
  today: { low: lowToday, high: highToday },
} = LOCAL_FORECAST;

// ES6: Use Destructuring Assignment to Assign Variables from Arrays
/*
ES6 makes destructuring arrays as easy as destructuring objects.
One key difference between the spread operator and array destructuring is that the spread operator unpacks all 
contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to 
assign to variables. */
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2
// The variable a is assigned the first value of the array, and b is assigned the second value of the array.
// We can also access the value at any index in an array with destructuring by using commas to reach the desired index:
const [a, b, , , c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5
// challenge
let a = 8,
  b = 6;
[a, b] = [b, a];

// ES6: Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements,
// collect the rest of the elements into a separate array. results similar to ES5 Array.prototype.slice()
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]
// challenge- so that arr is a sub-array of the original array source with the first two elements omitted.
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  const [a, b, ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);

// ES6: Use Destructuring Assignment to Pass an Object as a Function's Parameters, you can destructure the object in a function argument itself.
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
  // do something with these variables
};
// code above which destructuresthe object sent into the function, this is done in-place below
const profileUpdate = ({ name, age, nationality, location }) => {
  /* do something with these fields */
};
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};
const half = ({ max, min }) => {
  return max / 2 + min / 2;
};

// ES6: Create Strings using Template Literals
// Template literals allow you to create multi-line strings and to use string interpolation features to create strings.
const person = {
  name: "Zodiac Hasbro",
  age: 56,
};

// Template literal with multi-line and string interpolation
// Template literals allow you to create multi-line strings and to use string interpolation features to create strings.
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting); // prints
// Hello, my name is Zodiac Hasbro!
// I am 56 years old.

/*
A lot of things happened there. Firstly, the example uses backticks (`), not quotes (' or "), to wrap the string. 
Secondly, notice that the string is multi-line, both in the code and the output. This saves inserting \n within strings. 
The ${variable} syntax used above is a placeholder. Basically, you won't have to use concatenation with the + operator anymore. 
To add variables to strings, you just drop the variable in a template string and wrap it with ${ and }. 
Similarly, you can include other expressions in your string literal, for example ${a + b}. 
This new way of creating strings gives you more flexibility to create robust strings.

Use template literal syntax with backticks to create an array of list element (li) strings. 
Each list element's text should be one of the array elements from the failure property on the result object and 
have a class attribute with the value text-warning. The makeList function should return the array of list item strings.

Use an iterator method (any kind of loop) to get the desired output (shown below). */
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [
    `<li class="text-warning">${result.failure[0]}</li>`,
    `<li class="text-warning">${result.failure[1]}</li>`,
    `<li class="text-warning">${result.failure[2]}</li>`,
  ];

  function checkResult() {
    failureItems.includes("no-var");
    failureItems.includes("var-on-top");
    failureItems.includes("linebreak");
  }
  failureItems.forEach(checkResult);
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);

// ES6: Write Concise Object Literal Declarations Using Object Property Shorthand
// change this:
const getMousePosition = (x, y) => ({
  x: x,
  y: y,
});
// to this: (ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x.)
const getMousePosition = (x, y) => ({ x, y });
// Use object property shorthand with object literals to create and return an object with name, age and gender properties.
const createPerson = (name, age, gender) => ({
  name,
  age,
  gender,
});

// ES6: Write Concise Declarative Functions with ES6
// change this:
const person = {
  name: "Taylor",
  sayHello: function () {
    return `Hello! My name is ${this.name}.`;
  },
};
// To this with ES6: (You can remove the function keyword and colon altogether when defining functions in objects)
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  },
};
// challenge
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  },
};
bicycle.setGear(3);
console.log(bicycle.gear);

// ES6: Use class Syntax to Define a Constructor Function
// the class syntax is just syntax, The class syntax simply replaces the constructor function creation
// From this:
var SpaceShuttle = function (targetPlanet) {
  this.targetPlanet = targetPlanet;
};
var zeus = new SpaceShuttle("Jupiter");
// To this in ES6:
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle("Jupiter");
