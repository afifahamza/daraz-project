// TASK 1

// Define a cart with 5 items
// Every item will have following properties:
// Title (type string),
// description (type string)
// price (type float)
// discount (type float within range 0 to 0.9 representing 10% to 90%)

// TASK 2

// Write a function using for loop to find items that have atleast 50% discount

// TASK 3

// Use array filter method to acheive the same result as in task 2

// BONUS TASK
// Use any approach to find out any items in the cart that have atleast 50% discount OR are priced less than 100

//task 1
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

//task 2
function fiftypercentdiscount(array) {
  let itemshaving50off = [];
  for (let a = 0; a < array.length; a++) {
    const discounteditems = array[a];
    if (discounteditems.discount < 0.6) {
      itemshaving50off.push(discounteditems);
    }
  }
  return itemshaving50off;
}
let result = fiftypercentdiscount(cart);
console.log("task 1: items have atleast 50%off ===>", result);

//task 3
let fiftyoff = cart.filter((item) => item.discount < 0.6);
console.log("task:2 filter method", fiftyoff);

//bonus
let sastyitems = cart.filter((item) => item.discount < 0.6 && item.price < 100);
console.log("task:2 filter method", sastyitems);
