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
