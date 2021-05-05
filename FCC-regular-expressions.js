// Regular expressions Regex
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line

// Match literal strings
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);

// Match a Literal String with Different Possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);

//  Ignore Case While Matching - add i flag - after forward slash
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);

//  Extract Matches
// Note that the .match syntax is the "opposite" of the .test method you have been using thus far:
'string'.match(/regex/);
/regex/.test('string');

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line

//  Find More Than the First Match - add g flag
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line

//  Match Anything with Wildcard Period - eg match hug, huh, hut with /hu./
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);

//  Match Single Character with Multiple Possibilities
//  You want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this. 
//  The [aiu] is the character class that will only match the characters a, i, or u.
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line

//  Match Letters of the Alphabet
//  to match lowercase letters a through e you would use [a-e].
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line

//  Match Numbers and Letters of the Alphabet
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

// Match Single Characters Not Specified - you could also create a set of characters that you do not want to match
//  called negated character sets
let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

// Match Characters that Occur One or More Times



