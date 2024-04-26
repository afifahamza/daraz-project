// Accessing elements
function showlogin() {
  let loginform = document.getElementById("login-form");
  loginform.style.setProperty("display", "block");
  let homepage = document.getElementById("main2");
  homepage.style.setProperty("display", "none");
}
function gotohomepage() {
  let loginform = document.getElementById("login-form");
  loginform.style.setProperty("display", "none");
  let homepage = document.getElementById("main2");
  homepage.style.setProperty("display", "block");
}
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

// write a data structure
let bankaccounts = {
  arslan: ["arslanAhmed", 29.0, "savings-account"],
  afifan: ["afifanoor", 3040.0, "current-account"],
  hamzaa: ["hamzaAhmed", 3884.0, "current-account"],
};

let bankAccounts = [
  {
    first_name: "Arslan",
    last_name: "Ahmad",
    age: 21,
    account_no: "233680986",
    balance: 335.25,
  },
  {
    first_name: "Afifa",
    last_name: "Noor",
    age: 24,
    account_no: "23120986",
    balance: 3395.25,
  },
  {
    first_name: "Hamza",
    last_name: "Ahmad",
    age: 21,
    account_no: "111297777",
    balance: 2235.25,
  },
  {
    first_name: "Khadija",
    last_name: "Ahmad",
    age: 21,
    account_no: "111297777",
    balance: 2235.25,
  },
  {
    first_name: "Sara",
    last_name: "Ahmad",
    age: 21,
    account_no: "111297777",
    balance: 950.25,
  },
];
// Filter
let lowBAccounts = bankAccounts.filter((item) => item.balance < 1000);
console.log("testing filter", lowBAccounts);

function findLowBalanceAccounts(arr) {
  let accountsWithLowBalance = [];
  for (let i = 0; i < arr.length; i++) {
    const currentBankAccount = arr[i];
    if (currentBankAccount.balance < 1000) {
      accountsWithLowBalance.push(currentBankAccount);
    }
  }
  return accountsWithLowBalance;
}

let result = findLowBalanceAccounts(bankAccounts);
console.log("accountswithlowbalance ====>", result);

// Properties
// 1. Length
const totalAccounts = bankAccounts.length;
console.log("totalAccounts ===>", totalAccounts);

// Methods/Built-in array functions
// Slice
const firstTwoAccounts = bankAccounts.slice(1, 3);
console.log("firstTwoAccounts ===>", firstTwoAccounts);
bankAccounts = bankAccounts.slice(0, 2);
console.log("original bank accounts ===>", bankAccounts);

// Push
bankAccounts.push({
  first_name: "Saad",
  last_name: "Ahmad",
  age: 31,
  account_no: "967856568",
  balance: 2983.39,
});
console.log("original bank accounts ===>", bankAccounts);

// Filter
let cart = [
  {
    title: "fruit",
    description: "apple",
    price: 50.0,
    discount: 0.3,
  },
  {
    title: "phone",
    description: "samsung",
    price: 12990.0,
    discount: 0.6,
  },
  {
    title: "vegi",
    description: "eggplant",
    price: 20.0,
    discount: 0.2,
  },
  {
    title: "dairy",
    description: "milk",
    price: 250.0,
    discount: 0.5,
  },
  {
    title: "meat",
    description: "fish",
    price: 5849.0,
    discount: 0.8,
  },
];

let fiftyoff2 = cart.filter((item) => item.discount < 0.6);
let sastyitems = fiftyoff2.filter((item) => item.price < 100);
console.log("task:2 filter method", sastyitems);

let lowbAccounts = bankAccounts.filter((item) => item.balance < 1000);
console.log("testing filter", lowBAccounts);

let Names = ["Afifa", "hamza", "arslan", "Farhan"];

function transformNames(array) {
  let nameArray = [];
  for (let q = 0; q < array.length; q++) {
    const naam = array[q];
    const charlength = naam.length;
    nameArray.push({ name: naam, charCount: charlength });
  }
  return nameArray;
}
let results = transformNames(Names);
console.log("name set===>", results);

let results2 = Names.map((item) => {
  return {
    name: item,
    charcount: item.length,
  };
});
console.log("results2==>", results2);

function generateId() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

let products = [
  {
    id: generateId(),
    title: "milk",
    description: "dairy",
    imgSrc: "milk.png",
  },
  {
    id: generateId(),
    title: "shirt",
    description: "clothing",
    imgSrc: "shirts.png",
  },
  {
    id: generateId(),
    title: "sofa",
    description: "furniture",
    imgSrc: "sofas.jpg",
  },
];

// let counterDiv = document.getElementById('counter');
// counterDiv.innerText = 10

let counter = 0;
function plus() {
  counter = counter + 1;
  let counterDiv = document.getElementById("counter");
  counterDiv.innerText = counter;
}
function minus() {
  counter = counter - 1;
  if (counter < 0) {
    counter = 0;
  }
  let counterDiv = document.getElementById("counter");
  counterDiv.innerText = counter;
}
let title = "";
function onInputTitle(y) {
  console.log(y);
  title = y;
}

let description = "";
function onInputDescription(z) {
  console.log(z);
  description = z;
}

function createProduct() {
  const productDiv = `
    <div class="product-card">
      <h3>title: ${title}</h3>
      <h5>description: ${description}</h5>
    </div>
  `;

  // Insert into HTML
  let productsListDiv = document.getElementById("products-list");
  productsListDiv.innerHTML += productDiv;
}
function clearProduct() {
  let productsListDiv = document.getElementById("products-list");
  productsListDiv.innerHTML = "";
}

function checkpalindrome(word) {
  let string = word.toLowerCase();
  for (let start = 0; start < string.length / 2; start++) {
    let end = string.length - 1 - start;
    if (string[start] !== string[end]) {
      return false;
    }
  }
  return true;
}

let result4 = checkpalindrome("Maham");
console.log("Is palindrome? ===>", result4);

function maxOccurenceCount(string) {
  let word = string.toLowerCase();
  let totalLettersoccurences = [];
  for (let i = 0; i < word.length; i++) {
    let letter = string[i];
    let currentLetteroccurences = [];
    for (let j = 0; j < word.length; j++) {
      let letter2 = string[j];
      if (letter === letter2) {
        currentLetteroccurences.push(letter2);
      }
    }
    totalLettersoccurences.push(currentLetteroccurences);
  }
  let highestOccurenceArr = [];
  let tlo = totalLettersoccurences;
  for (let k = 0; k < tlo.length; k++) {
    let currentArray = tlo[k];
    if (currentArray.length > highestOccurenceArr.length) {
      highestOccurenceArr = currentArray;
    }
  }
  return highestOccurenceArr[0];
}

// let test = 'a'
// x.a = 1
// x['a'] = 1
// x[test] = 1

// let maxOccuringLetter = maxOccurenceCount("hamza");
// console.log("maxOccuringLetter", maxOccuringLetter);

function findMaxOccuringLetter(str) {
  let occurencesMap = {};
  for (let i = 0; i < str.length; i++) {
    const currentLetter = str[i]; // occurencesMap['h']
    if (occurencesMap[currentLetter])
      occurencesMap[currentLetter] = occurencesMap[currentLetter] + 1;
    else occurencesMap[currentLetter] = 1;
  }

  // {h: 1, a:2, m:1, z: 1}

  let highestOccuringLetter = "";
  let highestOccuringCount = 0;
  // ['h', 'a', 'm', 'z']
  Object.keys(occurencesMap).forEach((key) => {
    const currentLetterCount = occurencesMap[key];
    if (currentLetterCount > highestOccuringCount) {
      highestOccuringCount = currentLetterCount;
      highestOccuringLetter = key;
    }
  });
  return highestOccuringLetter;
}

let maxOccuringLetter = findMaxOccuringLetter("hamza");
console.log("maxOccuringLetter", maxOccuringLetter);

//reverse array use for each
testArray = ["1", "2", "3", "4"];
function reverseArray(arr) {
  let reverseArr = [];
  for (let q = testArray.length - 1; q >= 0; q--) {
    const arrayNums = arr[q];
    reverseArr.push(arrayNums);
  }
  return reverseArr;
}
let reverseResult = reverseArray(testArray);
console.log("reverse Array===>", reverseResult);

//array of integers as input and will return an object
// input=[1, 2, 2] output should be {1:1, 2:4, 3:9}

let integer = [1, 2, 3];

function squareMap(arr) {
  let squareObjects = {};
  for (let q = 0; q < arr.length; q++) {
    let currentinteger = arr[q];
    let square = currentinteger * currentinteger;
    squareObjects[currentinteger] = square;
  }
  return squareObjects;
}
let squareinterger = squareMap(integer);
console.log("square integers===>", squareinterger);

// Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not using recursion.
input = 7;
function Prime(num) {
  let primeNumber = {};
  if (num === 1) {
    return false;
  }
  if (num === 2) {
    return true;
  } else {
    for (let f = 2; f < num; f++) {
      if (num % f === 0) {
        return false;
      }
    }
  }
  return true;
}
resultprime = Prime(input);
console.log(input, "is prime number===>", resultprime);
// Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
numberArray = [-2, -7, 6, 4, -19, 10, -17, -4, 5, 2, 9, 7, 6, 7];
let sortedNumberArray = numberArray.sort((a, b) => b - a);
console.log("sortedNumberArray", sortedNumberArray);

function secondLowest(arr) {
  let copyarr = arr;
  for (let j = 0; j < copyarr.length; j++) {
    let hasSwapped = false;
    for (let i = 0; i < copyarr.length - 1; i++) {
      let currentnum = copyarr[i];
      let nextnum = copyarr[i + 1];
      if (currentnum > nextnum) {
        hasSwapped = true;
        let temparr = copyarr[i];
        copyarr[i] = copyarr[i + 1];
        copyarr[i + 1] = temparr;
      }
    }
    if (!hasSwapped) break;
  }
  return copyarr[1];
}
let result2ndlowestnum = secondLowest(numberArray);
console.log("2nd lowest number=", result2ndlowestnum);
