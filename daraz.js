// Accessing elements
let header = document.getElementById("header");
header.onclick = () => {
  let itemsList = document.getElementById("items-list");
  let currentDisplayValue = itemsList.style.getPropertyValue("display");
  if (currentDisplayValue === "none") {
    itemsList.style.setProperty("display", "block");
  } else {
    itemsList.style.setProperty("display", "none");
  }
};

let loginbtn = document.getElementById("login-btn");
loginbtn.onclick = () => {
  let loginform = document.getElementById("login-form");
  loginform.style.setProperty("display", "block");
  let homepage = document.getElementById("homepage");
  homepage.style.setProperty("display", "none");
};
let backbtn = document.getElementById("back-btn");
backbtn.onclick = () => {
  let loginform = document.getElementById("login-form");
  loginform.style.setProperty("display", "none");
  let homepage = document.getElementById("homepage");
  homepage.style.setProperty("display", "block");
};

let x = 1;
let y = 2;

function add(a, b) {
  return a + b;
}

let z = add(x, y);

// function abc() {
//   console.log("hello world");
// }

// arrow function / anonymous function / callback function
// let add = (a,b) => {
//   return a + b
// }

// let helpers = {
//   a: 2,
//   b: 30,
//   c: "abc",
//   fruits: ["apple", "mango", "banana"],
//   d: {
//     x: 1,
//   },
//   printFruits: (fruit) => {
//     console.log(fruit)
//   }
// }

// helpers.printFruits()
