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
// challenge - this creates a model of an object 'Vegetable'
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
const carrot = new Vegetable("carrot");
console.log(carrot.name); // Should display 'carrot'

// ES6: Use getters and setters to Control Access to an Object
// You can obtain values from an object and set the value of a property within an object.
/*
Getter functions are meant to simply return (get) the value of an object's private variable to the user 
without the user directly accessing the private variable.
Setter functions are meant to modify (set) the value of an object's private variable based on the value 
passed into the setter function. This change could involve calculations, or even overwriting the previous value completely. 
*/
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book("anonymous");
console.log(novel.writer); // anonymous
novel.writer = "newAuthor";
console.log(novel.writer); // newAuthor
// challenge
class Thermostat {
  constructor(fahrenheit) {
    this.celsius = (5 / 9) * (fahrenheit - 32);
  }
  get temperature() {
    return this.celsius;
  }

  set temperature(updateTemp) {
    this.celsius = updateTemp;
  }
}
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

/*
ES6: Create a Module Script
JavaScript started with a small role to play on an otherwise mostly HTML web. 
Today, it’s huge, and some websites are built almost entirely with JavaScript. 
In order to make JavaScript more modular, clean, and maintainable; 
ES6 introduced a way to easily share code among JavaScript files. 
This involves exporting parts of a file for use in one or more other files, 
and importing the parts you need, where you need them. In order to take advantage of this functionality, 
you need to create a script in your HTML document with a type of module. Here’s an example: */
<script type="module" src="filename.js"></script>;

/* 
ES6: Use export to Share a Code Block
Imagine a file called math_functions.js that contains several functions related to mathematical operations. 
One of them is stored in a variable, add, that takes in two numbers and returns their sum. 
You want to use this function in several different JavaScript files. In order to share it with these other files, 
you first need to export it. */
export const add = (x, y) => {
  return x + y;
};
// also
const add = (x, y) => {
  return x + y;
};

export { add };
// When you export a variable or function, you can import it in another file and use it without having to rewrite the code.
// You can export multiple things by repeating the first example for each thing you want to export,
// or by placing them all in the export statement of the second example, like this:
export { add, subtract };
// challenge
const uppercaseString = (string) => {
  return string.toUpperCase();
};

const lowercaseString = (string) => {
  return string.toLowerCase();
};

export { uppercaseString };
export { lowercaseString };

// ES6: Reuse JavaScript Code Using import, import allows you to choose which parts of a file or module to load.
import { add } from "./math_functions.js";
// more than one function imported here:
import { add, subtract } from "./math_functions.js";
// challenge
import { uppercaseString, lowercaseString } from "./string_functions.js";
uppercaseString("hello");
lowercaseString("WORLD!");

// ES6: Use * to Import Everything from a File
import * as myMathModule from "./math_functions.js";
/* The above import statement will create an object called myMathModule. 
This is just a variable name, you can name it anything. 
The object will contain all of the exports from math_functions.js in it, 
so you can access the functions like you would any other object property. 
Here's how you can use the add and subtract functions that were imported: */
import * as stringFunctions from "./string_functions.js";
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

// ES6: Create an Export Fallback with export default
// Since export default is used to declare a fallback value for a module or file,
// you can only have one value be a default export in each module or file.
// Additionally, you cannot use export default with var, let, or const
// named function
export default function add(x, y) {
  return x + y;
}

// anonymous function
export default function (x, y) {
  return x + y;
}
// challenge
export default function subtract(x, y) {
  return x - y;
}

// ES6: Import a Default Export
import add from "./math_functions.js";
// The syntax differs in one key place. The imported value, add, is not surrounded by curly braces ({}).
// add here is simply a variable name for whatever the default export of the math_functions.js file is.
// You can use any name here when importing a default.
import subtract from "./math_functions.js";
// Only change code above this line

subtract(7, 4);

// ES6: Create a JavaScript Promise
/*
A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously. 
When the task completes, you either fulfill your promise or fail to do so. 
Promise is a constructor function, so you need to use the new keyword to create one. 
It takes a function, as its argument, with two parameters - resolve and reject. 
These are methods used to determine the outcome of the promise. The syntax looks like this: */
const myPromise = new Promise((resolve, reject) => {});
// challenge
const makeServerRequest = new Promise((resolve, reject) => {});

// ES6: Complete a Promise with resolve and reject
/* 
A promise has three states: pending, fulfilled, and rejected. 
The promise you created in the last challenge is forever stuck in the pending state because you did not add 
a way to complete the promise. The resolve and reject parameters given to the promise argument are used to do this. 
resolve is used when you want your promise to succeed, and reject is used when you want it to fail. 
These are methods that take an argument, as seen below. */

const myPromise = new Promise((resolve, reject) => {
  if (conditionHere) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
// The example above uses strings for the argument of these functions, but it can really be anything.
// Often, it might be an object, that you would use data from, to put on your website or elsewhere.
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;

  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});

// ES6: Handle a Fulfilled Promise with then
/*
Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), 
often a server request. When you make a server request it takes some amount of time, and after it completes you usually want 
to do something with the response from the server. This can be achieved by using the then method. 
The then method is executed immediately after your promise is fulfilled with resolve. Here’s an example: */
myPromise.then((result) => {
  // do something with the result.
});
// challenge
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;

  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});

makeServerRequest.then((result) => {
  console.log(result);
});

// ES6: Handle a Rejected Promise with catch
/*
catch is the method used when your promise has been rejected. 
It is executed immediately after a promise's reject method is called. Here’s the syntax: */
myPromise.catch((error) => {
  // do something with the error.
});
// challenge
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;

  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});

makeServerRequest.then((result) => {
  console.log(result);
});

makeServerRequest.catch((error) => {
  console.log(error);
});
