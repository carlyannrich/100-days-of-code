// You can think of variables as simply “storage containers” for data in your code.
// Until recently there was only one way to create a variable in JavaScript — the var statement.
// But in the newest JavaScript versions we have two more ways — let and const.

console.log(23 + 97);

console.log(1 + 2 + 3 + 4 + 5 + 6);

console.log(4 + 6 + 9);

let a = 10;
console.log(a);
9 * a;
let b = 7 * a;
console.log(b);

const max = 57;
let actual = max - 13;
let percentage = actual / max;

function troubleshooting() {
  const a = 1;
  const b = 1;

  return a + b;

  number = Number(prompt("enter a number"));

  function numberChecker() {
    if (number >= 10) {
      return true;
    } else if (number < 10) {
      return false;
    }
  }
}

const a = 1 + 8;
const b = 22 * 3;
const c = 5 % 4;
const d = a - 17;
const e = a + b + c + d;

// Write a function called add7 that takes one number and returns that number + 7.

function add7(oneNumber) {
  return oneNumber + 7;
}

// Write a function called multiply that takes 2 numbers and returns their product.

function multiply(number1, number2) {
  return number1 * number2;
}

// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

function capitalize(sentence) {
  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}

// Write a function called lastLetter that takes a string and returns the very last letter of that string:
// lastLetter("abcd") should return "d"

function lastLetter(str) {
  return str.substr(-1);
}
// fizz buzz program

let answer = parseInt(prompt("Enter number"));

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

/*Test Driven Development (TDD) is a phrase you often hear in the dev world. 
It refers to the practice of writing automated tests that describe how your code should work before you actually write the code. 
For example, if you want to write a function that adds a couple of numbers, 
you would first write a test that uses the function and supplies the expected output. 
Before you write your code the test will fail, and you should be able to know that your code works correctly when the tests pass.*/
