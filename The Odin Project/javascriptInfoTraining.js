// javascript.info variables course:

// to add separate js files to html - <script src="/path/to/script.js"></script>

alert("I'm Javascript!");
// <script src="alert.js"></script>

let message;

let message;
message = "Hello!";

let message = "Hello!"; // define the variable and assign the value
alert(message); // Hello!

let user = "John",
  age = 25,
  message = "Hello";
// better readability:
let user = "John";
let age = 25;
let message = "Hello";
// other ways:
let user = "John",
  age = 25,
  message = "Hello";
//and
let user = "John",
  age = 25,
  message = "Hello";

//The var keyword is almost the same as let. It also declares a variable, but in a slightly different, “old-school” way.
let message;
message = "Hello!";
message = "World!"; // value changed
alert(message);

let hello = "Hello world!";
let message;
// copy 'Hello world' from hello into message
message = hello;
// now two variables hold the same data
alert(hello); // Hello world!
alert(message); // Hello world!

// A variable should be declared only once. A repeated declaration of the same variable is an error:
let message = "This";
// repeated 'let' leads to an error
let message = "That"; // SyntaxError: 'message' has already been declared
// So, we should declare a variable once and then refer to it without let.

let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"
alert($ + _); // 3

// let 1a; cannot start with a digit

// let my-name; hyphens '-' aren't allowed in the name

// let let = 5; // can't name a variable "let", error!
// let return = 5; // also can't name it "return", error!

// To declare a constant (unchanging) variable, use const instead of let:
const myBirthday = "18.04.1982";
// Variables declared using const are called “constants”. They cannot be reassigned. An attempt to do so would cause an error:
const myBirthday = "18.04.1982";
myBirthday = "01.01.2001"; // error, can't reassign the constant!

// There is a widespread practice to use constants as aliases for difficult-to-remember values that are known prior to execution.
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";
// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00

// const pageLoadTime = /* time taken by a webpage to load */;
// The value of pageLoadTime is not known prior to the page load, so it’s named normally.
// But it’s still a constant because it doesn’t change after assignment.

// DESCRIPTIVE
// AND
// CONCISE
// VARIABLE NAMING

/* SUMMARY
We can declare variables to store data by using the var, let, or const keywords.
let – is a modern variable declaration.
var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.
const – is like let, but the value of the variable can’t be changed.
Variables should be named in a way that allows us to easily understand what’s inside them. */

// Tasks:
let admin;
let name;
name = "John";
admin = name;
alert(admin);

let ourPlanetName = "Earth";
let currentWebsiteVisitor = "John";

const BIRTHDAY = "18.04.1982"; // hardcoded so can be uppercase
const age = someCode(birthday); // age changes so not as constant as birthday

// data types:

let message = "hello";
message = 123456;
// js is “dynamically typed” so that data types exist but variables are not bound to them.

// The number type represents both integer and floating point numbers.
let n = 123;
n = 12.345;
// There are many operations for numbers, e.g. multiplication *, division /, addition +, subtraction -, and so on.
// Besides regular numbers, there are so-called “special numeric values” which also belong to this data type:
// Infinity, -Infinity and NaN.
alert(1 / 0); // Infinity
alert(Infinity); // Infinity
alert("not a number" / 2); // NaN, such division is erroneous
alert("not a number" / 2 + 5); // NaN

// a string in js should be surrounded by quotes
let str = "Hello";
let str2 = "Single quotes are ok too";
let phrase = `can embed another ${str}`;
let name = "John";
// embed a variable
alert(`Hello, ${name}!`); // Hello, John!
// embed an expression
alert(`the result is ${1 + 2}`); // the result is 3

// The boolean type has only two values: true and false. Commonly stores yes/no values
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked
let isGreater = 4 > 1;
alert(isGreater); // true (the comparison result is "yes")

// The special null value does not belong to any of the types described above.
// It forms a separate type of its own which contains only the null value:
let age = null;

// The special value undefined also stands apart. It makes a type of its own, just like null.
// The meaning of undefined is “value is not assigned”.
// If a variable is declared, but not assigned, then its value is undefined:
let age;
alert(age); // shows "undefined"

// The object type is special. All other types are called “primitive” because their values can contain only a single thing
// The typeof operator returns the type of the argument.
typeof undefined; // "undefined"
typeof 0; // "number"
typeof 10n; // "bigint"
typeof true; // "boolean"
typeof "foo"; // "string"
typeof Symbol("id"); // "symbol"
typeof Math; // "object"  (1)
typeof null; // "object"  (2)
typeof alert; // "function"  (3)

/*
There are 8 basic data types in JavaScript.

number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
bigint is for integer numbers of arbitrary length.
string for strings. A string may have zero or more characters, there’s no separate single-character type.
boolean for true/false.
null for unknown values – a standalone type that has a single value null.
undefined for unassigned values – a standalone type that has a single value undefined.
object for more complex data structures.
symbol for unique identifiers.
The typeof operator allows us to see which type is stored in a variable.

Two forms: typeof x or typeof(x).
Returns a string with the name of the type, like "string".
For null returns "object" – this is an error in the language, it’s not actually an object. */

alert("Hello"); //opens a modal window in the browser
result = prompt(title); //opens a modal window in the browser with input field
result = confirm(question); //opens a modal window in the browser with a question and ok/cancel options
let isBoss = confirm("Are you the boss?");
alert(isBoss); // true if OK is pressed
