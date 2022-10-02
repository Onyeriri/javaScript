// comment in javascript
// Hello
/*Hello*/

// Declare JavaScript Variables
var myName;

// Storing Values with the Assignment Operator
var a;
a = 5;

// Assigning the Value of One Variable to Another
var a;
a = 7;
var b;
b = a;

// Initializing Variables with the Assignment Operator
var a = 9;

// Declare String Variables
var myFirstName = "Victor";
var myLastName = "Onyeriri";

// Understanding Uninitialized Variables
// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

// Understanding Case Sensitivity in Variables
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// Explore Differences Between the var and let Keywords
let catName = "Oliver";
let catSound = "Meow!";

// Declare a Read-Only Variable with the const Keyword
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

// Add Two Numbers with JavaScript
const sum = 10 + 10;

// Subtract One Number from Another with JavaScript
const difference = 45 - 33;

// Multiply Two Numbers with JavaScript
const product = 8 * 10;

// Divide One Number by Another with JavaScript
const quotient = 66 / 33;

// Increment a Number with JavaScript
let myVar = 87;

// Only change code below this line
let mVar = 87;

// Only change code below this line
myVar++;

// Decrement a Number with JavaScript
// let myVar = 11;

// Only change code below this line
myVar--;

// Create Decimal Numbers with JavaScript
const ourDecimal = 5.7;

// Only change code below this line
let myDecimal = 5.7;

// Multiply Two Decimals with JavaScript
const PRODUCT = (2.0 * 5.0) / 2.0;

// Divide One Decimal by Another with JavaScript
const QUOTIENT = 4.4 / 2.0; // Change this line

// Finding a Remainder in JavaScript
const remainder = 11 % 3;

// Compound Assignment With Augmented Addition
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;

// Compound Assignment With Augmented Subtraction
let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

// Compound Assignment With Augmented Multiplication
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= b12;
c *= 10;

// Compound Assignment With Augmented Division
let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

// Escaping Literal Quotes in Strings
const myStr = 'I am a "double quoted" string inside "double quotes".'; // Change this line

// Quoting Strings with Single Quotes
const MY_STR = '<a href="http://www.example.com" target="_blank">Link</a>';

// Escape Sequences in Strings
const mStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

// Concatenating Strings with Plus Operator
const mySt = "This is the start" + "This is the end."; // Change this line

// Concatenating Strings with the Plus Equals Operator
let mytr = "This is the first sentence.";
myStr += " This is the second sentence.";

// Constructing Strings with Variables
// Only change code below this line
const myName = "Victor";
const yStr = "My name is" + myName + "and I am well!";

// Appending Variables to Strings
// Change code below this line
const someAdjective = "Awe";
let mySr = "Learning to code is ";
myStr += someAdjective;

// Find the Length of a String
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

// Use Bracket Notation to Find the First Character in a String
// Setup
let firstLetterOfLastName = "";
const astName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

// Understand String Immutability
// Setup
let ytr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line

// Use Bracket Notation to Find the Nth Character in a String
// Setup
const latName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line

// Use Bracket Notation to Find the Last Character in a String
// Setup
const lstName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

// Use Bracket Notation to Find the Nth-to-Last Character in a String
// Setup
const lastame = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

// Word Blanks
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks =
  "The " +
  myNoun +
  " has " +
  myAdjective +
  " legs " +
  myVerb +
  " very " +
  myAdverb; // Change this line
// Only change code above this line

// Store Multiple Values in one Variable using JavaScript Arrays
// Only change code below this line
const myArray = ["Victor", 1];

// Nest one Array within Another Array
// Only change code below this line
const myrray = [
  ["Hello", 3],
  ["Victor", 2],
];

// Access Array Data with Indexes
const mArray = [50, 60, 70];

const myData = myArray[0];

// Modify Array Data With Indexes
// Setup
const myAray = [18, 64, 99];

// Only change code below this line
myAray[0] = 45;

// Access Multi-Dimensional Arrays With Indexes
const yArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const yData = myArray[2][1];

// Manipulate Arrays With push()
// Setup
const myAray = [
  ["John", 23],
  ["cat", 2],
];

// Only change code below this line
myAray.push(["dog", 3]);

// Manipulate Arrays With pop()
// Setup
const myAr = [
  ["John", 23],
  ["cat", 2],
];

// Only change code below this line
const removedFromMyArray = myAr.pop();

// Manipulate Arrays With shift()
// Setup
const myray = [
  ["John", 23],
  ["dog", 3],
];

// Only change code below this line
const removFromMyArray = myArray.shift();

// Manipulate Arrays With unshift()
// Setup
const array = [
  ["John", 23],
  ["dog", 3],
];
array.shift();

// Only change code below this line
array.unshift(["Paul", 35]);

// Shopping List
const myList = [
  ["Chocolate Bar", 15],
  ["Chocolate Bar", 15],
  ["Chocolate Bar", 15],
  ["Chocolate Bar", 15],
  ["Chocolate Bar", 15],
];

// Write Reusable JavaScript with Functions
function reusableFunction() {
  console.log("Hi World");
}

reusableFunction();

// Passing Values to Functions with Arguments
function functionWithArgs(a, b) {
  let sum = a + b;

  console.log(sum);
}

functionWithArgs(2, 2);

// Return a Value from a Function with Return
function timesFive(a) {
  let answer = a * 5;

  return answer;
}

let answer = timesFive(5);

// Global Scope and Functions
// Declare the myGlobal variable below this line
const myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line

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

// Local Scope and Functions
function myLocalScope() {
  // Only change code below this line
  let myVar;

  console.log("inside myLocalScope", myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log("outside myLocalScope", myVar);

// Global vs. Local Scope in Functions
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();

// Understanding Undefined Value returned from a Function
// Setup
let summ = 0;

function addThree() {
  summ = summ + 3;
}

// Only change code below this line
function addFive() {
  summ += 5;
}

// Only change code above this line

addThree();
addFive();

// Assignment with a Returned Value
// Setup
let processed = 0;

function processArg(num) {
  processed = (num + 3) / 5;

  return processed;
}

// Only change code below this line
processed = processArg(7);

// Stand in Line
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);

  return arr.shift();
  // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log(nextInLine([2], 1));
console.log("After: " + JSON.stringify(testArr));

// Understanding Boolean Values
function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}

welcomeToBooleans();

// Use Conditional Logic with If Statements
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if (wasThatTrue) {
    return "Yes, that was true";
  } else {
    return "No, that was false";
  }
  // Only change code above this line
}

trueOrFalse(true);
trueOrFalse(false);

// Comparison with the Equality Operator
// Setup
function testEqual(val) {
  if (val == 12) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

// Comparison with the Strict Equality Operator
// Setup
function testStrict(val) {
  if (val === 7) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

// Practice comparing different values
// Setup
function compareEquality(a, b) {
  if (a === b) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
compareEquality("20", 20);

// Comparison with the Inequality Operator
// Setup
function testNotEqual(val) {
  if (val != 99) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

// Comparison with the Strict Inequality Operator
// Setup
function testStrictNotEqual(val) {
  if (val !== 17) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

// Comparison with the Greater Than Operator
function testGreaterThan(val) {
  if (val > 100) {
    // Change this line
    return "Over 100";
  }

  if (val > 10) {
    // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);
testGreaterThan(0);
testGreaterThan(11);
testGreaterThan(99);
testGreaterThan(100);
testGreaterThan(101);
testGreaterThan(150);

// Comparison with the Greater Than Or Equal To Operator
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

// Comparison with the Less Than Operator
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

// Comparison with the Less Than Or Equal To Operator
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

// Comparisons with the Logical And Operator
function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
    return "Yes";
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);

// Comparisons with the Logical Or Operator
function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);

// Introducing Else Statements
function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);

// Introducing Else If Statements
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  }

  return "Between 5 and 10";
}

testElseIf(7);

// Introducing Else If Statements
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

// Logical Order in If Else Statements
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

// Chaining If Else Statements
function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else if (num >= 20) {
    return "Huge";
  } else {
    return "Change Me";
  }
  // Only change code above this line
}

testSize(7);

// Golf Code
const names = [
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
  if (strokes === 1) {
    return "Hole-in-one!";
  } else if (strokes === 2) {
    return "Eagle";
  } else if (strokes === 3) {
    return "Birdie";
  } else if (par === 4 && strokes === 4) {
    return "Par";
  } else if (par === 4 && strokes === 5) {
    return "Bogey";
  } else if (par === 4 && strokes === 6) {
    return "Double Bogey";
  } else if (par >= 4 && strokes >= 7) {
    return "Go Home!";
  } else if (par === 5 && strokes === 5) {
    return "Par";
  } else {
    return "Change Me";
  }
  // Only change code above this line
}

golfScore(5, 4);

//
