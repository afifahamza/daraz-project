// Data structures
// 1. String: "abc", "def", "123", "Afifa Noor"
// 2. Integer/Number: 1, 2, 3, 4
// 3. Float: 2.0
// 4. Array: [1, 2, "abc"] // index (starts from 0)
// 5. Object/Dictionary: {a: 1, b: 2, c: "Afifa"}
// 6. Boolean: true/false (For strings, empty strings are false, for numbers: equal to 0 are false)

// Operators
// 1. +
// 2. -
// 3. 1*1
// 4. 1/2
// 5. 10 % 2

// Conditonal Operators
// 1. !x
// 2. ==
// 3. === (checks type as well)
// 4. <
// 5. >
// 6. >=
// 7. <=
// 8. !=
// 9. !==

// Functions
function add(a, b) {
  return a + b; // body
}

function iseven(a) {
  if (a % 2 === 0) {
    return "yes";
  } else {
    return "No";
  }

  //   return a % 2 === 0 ? "Yes" : "No"
}
// let u = 23;
// let result = iseven(u);
// console.log(result);

// Conditionals
// if
// else
// else if
// ternary operator

// if () {
// }
// else if () {
// }
// else {
// }

// x = x + 1 // increment
// x++

// Loops
// While
// For

// for (let x = 1; x < 10; x++) {

// }

// Write a function that takes in a number which represents the height of a triangle
// Print a right angle triangle on the console such that the height of the triangle should be the height specified
// Example: Output if 4 is being passed as a the height
// *
// **
// ***
// ****

// function triangle(height) {
//   for (let x = 1; x <= height; x++) {
//     let row = "";
//     for (let y = 1; y <= x; y++) {
//       row = row + "*";
//     }
//     console.log(row);
//   }
// }
// let result = triangle(6);

// function triangle(height) {
//   for (let x = height; x > 0; x--) {
//     let row = "";
//     for (let y = x; y > 0; y--) {
//       row = row + "*";
//     }
//     console.log(row);
//   }
// }
// triangle(100);

// let a; // declaration
// a = 0; // Assignment
// let x = 1; // Declaration + Assignment
// let y = 7;

// let z = add("00", y);
// console.log("abc", z);

//..*..
//.***.
//*****

function triangle(height) {
  for (let x = 1; x <= height; x++) {
    let row = "";
    for (let y = 1; y <= x; y++) {
      row = row + "*";
    }
    console.log(row);
  }
}

// triangle(3);

let x = 2;
let y = "abc";

let fruits = ["apple", "mango", "kaila"];
let joinedFruits = fruits.join("/");
console.log("joinedFruits", joinedFruits);
let arr = "afifa".split("f");
console.log("arr", arr);

let index = 2;
console.log("fruits:", fruits[index]);
let bank = {
  afifa: 100,
  hamza: 200,
  arslan: 0,
};
console.log("bank:", bank["arslan"]);
