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
var myFirstName = 'Carly';
var myLastName = 'Rich';

//Escaping literal quotes with strings using the ESCAPE key \ backslash
var myStr = "I am a \"double quoted\" string inside \"double quotes\".";

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
var wordBlanks = "The " + myNoun + " was " + myAdjective + " and " + myVerb + " very " + myAdverb;






