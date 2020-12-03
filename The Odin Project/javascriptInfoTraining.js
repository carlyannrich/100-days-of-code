
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

let hello = 'Hello world!';
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
const myBirthday = '18.04.1982';
// Variables declared using const are called “constants”. They cannot be reassigned. An attempt to do so would cause an error:
const myBirthday = '18.04.1982';
myBirthday = '01.01.2001'; // error, can't reassign the constant!

// There is a widespread practice to use constants as aliases for difficult-to-remember values that are known prior to execution.
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";
// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00

const pageLoadTime = /* time taken by a webpage to load */;
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

const BIRTHDAY = '18.04.1982'; // hardcoded so can be uppercase
const age = someCode(birthday) // age changes so not as constant as birthday

