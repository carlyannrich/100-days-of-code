//hello this is a one line comment
/* This is a
multi
line comment */

//I declare a variable and call it myName
var myName;

//I declare a variable 'a' and assign it a value of 7
var a;
a = 7;

//I'm assigning the value of 'a' to 'b'
var a;
a = 5;
var b;
b = a;

//I'm initialising a variable, shorthand create var and value
var a = 9;

//assign values to 'a' 'b' 'c' so they are not undefined
//So 'a' = 6, 'b' = 15 and c = I am a String!

var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

//camelCase match the declarations and assignments so there is no difference in case
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//add numbers
var sum = 10 + 10;

//subtract numbers
var difference = 45 - 33;

//multiply numbers
var product = 8 * 10;

//divide numbers
var quotient = 66 / 33;

//increment a number
var myVar = 87;
myVar++;

//decrement a number
var myVar = 11;
myVar--;

//store decimals or floats in a variable
var myDecimal = 5.7;

//multiply decimals
var product = 2.0 * 2.5;

//divide decimals
var quotient = 4.4 / 2.0;

//finding a remainder, note that % is not modulus in js it is 'remainder'
var remainder = 11 % 3;

// += operator does a mathematical operation and assignment in one step
// myVar = myVar + 5; is the same outcome as myVar += 5;
//compound assignment with augmented addition
var a = 3;
var b = 17;
var c = 12;

a += 12;
b += 9;
c += 7;

// compound assignment with augmented subtraction -=
var a = 11;
var b = 9;
var c = 3;

a -= 6;
b -= 15;
c -= 1;

//coumpound assignment with augmented multiplication *=
var a = 5;
var b = 12;
var c = 4.6;

a *= 5;
b *= 3;
c *= 10;

//compound assignment with augmented division /=
var a = 48;
var b = 108;
var c = 33;

a /= 12;
b /= 4;
c /= 11;

//declaring string variables
var myFirstName = "Carly";
var myLastName = "Rich";

//Escaping literal quotes with strings using the ESCAPE key \ backslash
var myStr = 'I am a "double quoted" string inside "double quotes".';

//using single and double quotes for strings
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

//Escape sequences in strings
/* 
code and output:
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed
*/
//write "FirstLinenewlinetabbackslashSecondLinenewlineThirdLine"
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

//concatenating strings with + operator
var myStr = "This is the start. " + "This is the end.";

//concatenating strings with += operator
var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

//constructing strings with variables - fill in the blanks with var
var myName = "Carly";
var myStr = "My name is " + myName + " and I am well!";

//appending variables to strings - can build variables to a string using += operator
var someAdjective = "great";
var myStr = "Learning to code is ";
myStr += someAdjective;

//find the length of a string (using .length property)
var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;

//using [square] bracket notation to find the first character (at index 0) in a string
var firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName[0];

//String immutability - cannot change a single character in a string, have to reassign the whole string
var myStr = "Jello World";
myStr = "Hello World";
// Cannot do myStr[0] = "H";

//use bracket nottion to find the nth character in a string
var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];

//use bracket notation to find the last character in a string
var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];

//use bracket notation to find the nth last character in a string
var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length - 2];

//Create variable string made up of variables and strings
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";
var wordBlanks =
  "The " +
  myNoun +
  " was " +
  myAdjective +
  " and " +
  myVerb +
  " very " +
  myAdverb;

//multiple values stored in one variable using js arrays
var myArray = ["Cherry", 20];

//nest one array within another
var myArray = [
  ["Dog", 1],
  ["Cat", 0],
];

//access array data with indexes
var myArray = [50, 60, 70];
var myData = myArray[0];

//modify array data with indexes note that arrays are mutable and can be changed freely, unlike strings
var myArray = [18, 64, 99];
myArray[0] = 45;

// access multi-dimensional arrays with indexes, change myData value to 8 from arrays
var myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];
var myData = myArray[2][1];

// manipulate arrays with .push() - this takes one or more elements and pushes them onto the end of array
var myArray = [
  ["John", 23],
  ["cat", 2],
];
myArray.push(["dog", 3]);

// manipulate arrays with .pop() - this takes the last element and pops it off the end of an array
var myArray = [
  ["John", 23],
  ["cat", 2],
];
var removedFromMyArray = myArray.pop();
console.log(myArray); // console shows ["John", 23]
console.log(removedFromMyArray); // console shows ["cat", 2]

//manipulate arrays with .shift() - this takes the first element and shifts it off the array
var myArray = [
  ["John", 23],
  ["dog", 3],
];
var removedFromMyArray = myArray.shift();

//manipulate arrays with .unshift() - this adds a element to the start of the array
var myArray = [
  ["John", 23],
  ["dog", 3],
];
myArray.shift();
myArray.unshift(["Paul", 35]);

// create a shopping list
var myList = [
  ["Chocolate", 15],
  ["Pizza", 2],
  ["Chips", 1],
  ["Bread", 3],
  ["Sweets", 30],
  ["Cheese", 2],
  ["Jam", 1],
];

// write reusable js with functions (example prints 'Hello World' to the console log)
function reusableFunction() {
  console.log("Hello World");
}
reusableFunction();

// passing values to functions with arguments
function functionWithArgs(param1, param2) {
  console.log(param1 + param2);
}

functionWithArgs(1, 2);
functionWithArgs(7, 9);

// global scope - variables created without the var keyword are automatically created with global scope which could be bad
var myGlobal = 10;
function fun1() {
  oopsGlobal = 5;
}
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// local scope - variables declared inside a function have local scope
function myLocalScope() {
  var myVar = 0;
  console.log("inside myLocalScope", myVar);
}
myLocalScope();
console.log("outside myLocalScope", myVar);
// console log reads 'ReferenceError: myVar is not defined' shows scope is local

// global vs local scope in functions - can have both local and global variables with the same name
// when this happens, the local takes presidence over the global
var outerWear = "T-Shirt";
function myOutfit() {
  var outerWear = "Sweater";
  return outerWear;
}
myOutfit(); // returns Sweater not T-shirt.

// return a value from a function with return, can pass values into a function with arguments and use return to send a value back out of a function
function timesFive(num) {
  return num * 5;
}
var answer = timesFive(5);
var answer = timesFive(2);
var answer = timesFive(0);

// undefined value returned from function, if the function doesn't have a return statement and you call it, it processes but returns undefined
var sum = 0;
function addThree() {
  sum = sum + 3;
}
function addFive() {
  sum = sum + 5;
}
addThree();
addFive();

// assignment with a returned value -  returned value from processArg function is then assigned to variable processed
var processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);

// in Computer Science a 'queue' is an abstract data structure where items are kept in order.
// new items can be added to the back of the queue and old items taken off the front of the queue
function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}
var testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
console.log(nextInLine([], 1));
console.log(nextInLine([2], 1));
console.log(nextInLine([5, 6, 7, 8, 9], 1));

// understanding boolean values
function welcomeToBooleansTrue() {
  return true;
}
function welcomeToBooleansFalse() {
  return false;
}

// use conditional logic with if statements - if statements are used to make decisions in code
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}

// comparison with the equality operator '=='
// In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another. This is known as "Type Coercion". Once it does, however, it can compare terms as follows:
1 == 1; // true
1 == 2; // false
1 == "1"; // true
"3" == 3; // true

function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}
testEqual(10); // not equal
testEqual(12); // equal
testEqual("12"); // equal

//  comparison with the strict equality operator '==='
// In this example, 3 is a Number type and '3' is a String type.
3 === 3; // true
3 === "3"; // false
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}
testStrict(10); // not equal
testStrict(7); // equal
testStrict("7"); // not equal

//practice comparing different values
// In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:
typeof 3; // returns 'number'
typeof "3"; // returns 'string'
function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

// comparison with the inequality operator '!='
1 != 2; // true
1 != "1"; // false
1 != "1"; // false
1 != true; // false
0 != false; // false
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}
testNotEqual(10);

// comparison with the strict equality operator '!=='
3 !== 3; // false
3 !== "3"; // true
4 !== 3; // true
function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}
testStrictNotEqual(10);

// comparison with the greater than operator '>'
5 > 3; // true
7 > "3"; // true
2 > 3; // false
"1" > 9; // false
function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }

  if (val > 10) {
    return "Over 10";
  }

  return "10 or Under";
}
testGreaterThan(10);

// comparison with the greater to or equal than operator '>='
6 >= 6; // true
7 >= "3"; // true
2 >= 3; // false
"7" >= 9; // false
function testGreaterOrEqual(val) {
  if (val >= 20) {
    // Change this line
    return "20 or Over";
  }

  if (val >= 10) {
    // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}
testGreaterOrEqual(10);

// comparison with the less than operator '<'
2 < 5; // true
"3" < 7; // true
5 < 5; // false
3 < 2; // false
"8" < 4; // false
function testLessThan(val) {
  if (val < 25) {
    // Change this line
    return "Under 25";
  }

  if (val < 55) {
    // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

// comparison with the less than or equal to operator '<='
4 <= 5; // true
"7" <= 7; // true
5 <= 5; // true
3 <= 2; // false
"8" <= 4; // false
function testLessOrEqual(val) {
  if (val <= 12) {
    // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {
    // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

// comparison with the logical And operator '&&'
// returns true if and only if the operands to the left and right of it are true.
// will return "Yes" if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return "No".
function testLogicalAnd(val) {
  if (val >= 25 && val <= 50) {
    return "Yes";
  }
  return "No";
}

testLogicalAnd(10);

// comparison with the logical Or operator '||'
// returns "Outside" if val is not between 10 and 20, inclusive. Otherwise, return "Inside".
function testLogicalOr(val) {
  if (val > 20 || val < 10) {
    return "Outside";
  }
  return "Inside";
}

testLogicalOr(15);

// introducing else statements, instead of two if's, you can do if/else
function testElse(val) {
  var result = "";
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  return result;
}
testElse(4);

// introducing else if statements
// If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}

testElseIf(7);

// logical order in if/else statements
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
orderMyLogic(7);

// chaining if/else statements
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}
testSize(7);

var names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }
  // Only change code above this line
}
golfScore(5, 4);

// selecting from many options with switch statements
//example:
switch (lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}

// case values are tested with strict equality (===).
// The break tells JavaScript to stop executing statements. If the break is omitted, the next statement will be executed.
function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}
caseInSwitch(1);

// adding a default option in a switch statement
// a default statement will be executed if no case statement was matched and should always appear at the end of your code
function switchOfStuff(val) {
  var answer = "";
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
  return answer;
}
switchOfStuff(1);

// multiple identical options in switch statements
// Write a switch statement to set answer for the following ranges:
// 1-3 - "Low"
// 4-6 - "Mid"
// 7-9 - "High"
function sequentialSizes(val) {
  var answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  return answer;
}
sequentialSizes(1);

// Replacing if/else chains with switch, can be easier if you have many options to choose from
function chainToSwitch(val) {
  var answer = "";
  // This if statement can be replaced by the below switch statement
  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }

  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }

  return answer;
}
chainToSwitch(7);

// returning boolean values from functions - example
function isEqual(a, b) {
  return a === b;
}

function isLess(a, b) {
  // Only change code below this line
  if (a < b) {
    return true;
  } else {
    return false;
  }

  return a < b;
  // Only change code above this line
}

isLess(10, 15);

// return early pattern for functions
// When a return statement is reached, the execution of the current function stops and control returns to the calling location.
// example below shows that 'byebye' is never reached as the rest of the function is not executed after return line.
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye");
}
myFun();

// This function only returns undefined and doesn't carry on to the end of the function
function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
abTest(2, 2);

/*
You will write a card counting function. 
It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable 
according to the card's value (see table). The function will then return a string with the current count and the string 
Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision
(Bet or Hold) should be separated by a single space.
*/
