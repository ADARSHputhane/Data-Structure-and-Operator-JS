"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  // IN ES6 we use define the method using this method
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // orderDeliver: function (obj) {
  //   console.log(obj);
  // },

  //Destructuring the object in the function arguments
  // orderDeliver: function ({ starterIndex, mainIndex }) {
  //   // console.log(starterIndex, mainIndex);
  //   console.log(
  //     `Order Received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}`
  //   );
  // },

  //To set default values
  orderDeliver: function ({ starterIndex = 1, mainIndex = 2, time, address }) {
    // console.log(starterIndex, mainIndex);
    console.log(
      `Order Received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} the order wil be delivered at ${time} at address ${address}`
    );
  },
  // openingHours: openingHours,

  // ES6 enhanced object literals
  openingHours,
  // oderPasta: function (ing1, ing2, ing3) {
  //   console.log(`Here is your pasta with ${ing1}, ${ing2},${ing3}`);
  // },
  // oderPasta with reest paramater
  oderPasta: function (...ing) {
    console.log(`Your Pasta with ingredent are`, ...ing);
  },
};
// // Destructuring an array is an es6 future that allows us to unpack the array or object in to seperate varibles
// const arr = [2, 3, 4];
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];

// // destructuring the array
// const [x, y, z] = arr;
// console.log(x, y, z);

// // skipping the element in the middle
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // To switch the array elements
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// // to do it simply we use
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //Receive 2 return values from a function
// // console.log(restaurant.order(2, 0));
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // For Nested Array

// const nestedArr = [2, 4, [5, 6]];
// const [a, , b] = nestedArr;
// console.log(a, b);

// // Destructuring the nested array

// const [i, , [j, k]] = nestedArr;
// console.log(i, j, k);

// //Default values

// const [p = 1, q = 1, r = 1] = [8, 9]; // it will return the default vaule if assigned or it will return undefined
// console.log(p, q, r);

// Dstructuring the object

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// //varible names to be different from property name
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // to set default values like that in array
// const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu, starter);

// // Mutating varibles
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj); // to overwrite we use() around object ({}=obj)
// console.log(a, b);

// //Nested objects

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);
// restaurant.orderDeliver({
//   time: "22:30",
//   address: "Rt Nage",
//   mainIndex: 2,
//   starterIndex: 0,
// });

//--------------------------the Spred oprerator---------------------------------// Spread operator will expand the array into indivisual value
// const arr = [4, 5, 6];
// const newArr = [1, 2, ...arr]; // without ... just by array it will just copy the entire array
// console.log(newArr);
// console.log(...newArr); //spread opearator will give us the indivisual value of the array

// const newMenu = [...restaurant.mainMenu, "Bandi masala"];
// console.log(newMenu);

// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // Spead operator works on all the iterables like arrays, strings, maps, sets not object

// // Strings
// const str = "Adarsh";
// const letters = [...str];
// console.log(letters);
// console.log(...str);
// //======== spread operator is used to only in function
// // console.log(`${...str} Puthane`);
// console.log(`${[...str]} Puthane`);

// // const ingredients = [
// //   prompt("Let's make pasta! Ing 1 ?"),
// //   prompt("Ing 2 ?"),
// //   prompt("Ing 3 ?"),
// // ];
// // console.log(ingredients);

// // restaurant.oderPasta(...ingredients); // Used to pass array using the spread opearator

// // Objects
// const newRestaurant = {
//   foundedIn: 1998,
//   ...restaurant,
//   founder: "Baba ramdeav",
// };
// console.log(newRestaurant);

// // Copy in deep using spread which does not change the object

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "New Restaurant";
// console.log(restaurant.name);
// console.log(restaurantCopy.name);

// //------------------------------- Rest Pattern and Parameters -------------------------------------//
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);
// const [a, b, ...others] = [1, 2, 3, 4, 5]; ///...others rest pattern collects the rest array and store in other varible
// console.log(a, b, others);
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ]; // The rest Element should be the last element
// console.log(pizza, risotto, otherFood);

// //Objects

// const { sat, ...weekdays } = restaurant.openingHours;

// console.log(weekdays);

// //Functions // ------Rest Parameters------// Rest opeartor will do the opposite of spread rest will take multiple values and packs in 1 array

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// };
// console.log(add(2, 3), add(5, 3, 7, 2), add(2, 3, 4, 5, 6, 7));

// const x = [23, 7, 5];
// console.log(add(...x)); // We are spreading the arry and in the function the array is kept back using the reset opeartor

// restaurant.oderPasta("weat", "water", "cheese");

// //-------------------short circuiting (&& and ||)--------------------//
// //Use any data type, return any data type, short-circuting

// console.log("Puthane" || "Adarsh"); // Return the 1st truth value
// console.log(3 || "Adarsh");
// console.log(true || 0);
// console.log(undefined || null);

// restaurant.numGuests = 0;

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; // This program will not show the 0 even though 0 is valid case of gustes to avoid this we use ?? opeartor
// console.log(guests1);

// // simple using the short circuiting
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log("---------------------AND---------------------");
// console.log(0 && "Adarsh"); //Resturn the 1st false value
// console.log(3 && "Adarsh");
// console.log(true && 0);
// console.log(undefined && null);

// // short circuting
// if (restaurant.oderPasta) {
//   restaurant.oderPasta("weat", "steam");
// }
// restaurant.oderPasta && restaurant.oderPasta("Weat", "love that i dont have");

// //--------------------The Nullish coalescing operator (??) -----------------------// Works with knowledge values insted of false value Nullish : Null and Undefined (Not 0 or '')

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);
// console.log(0 ?? "Adarsh"); //Resturn the 1st false value
// console.log(3 ?? "Adarsh");
// console.log(true ?? 0);
// console.log(undefined ?? null);

// //----------------------------Logical Assignment Operators --------------------------------------//
// const rest1 = {
//   name: "rest 1",
//   numGuest: 20,

//   // if numGuest value is 0 it will assign to numGuest to avoid that we use ??
// };

// const rest2 = {
//   name: "rest 2",
//   owner: "Someone",
// };

// // rest1.numGuest = rest1.numGuest || 10;
// // rest2.numGuest = rest2.numGuest || 10;

// //OR assignment operator
// // The above coade can be return in the given below form

// // rest1.numGuest ||= 10;
// // rest2.numGuest ||= 10;

// rest1.numGuest ??= 10;
// rest2.numGuest ??= 10;

// // rest1.owner = rest1.owner && "Someone else";
// // rest2.owner = rest2.owner && "Someone Else";

// rest1.owner &&= "Someone else";
// rest2.owner &&= "Someone else";

// console.log(rest1);
// console.log(rest2); // rest 2 will return the value numGuest 10 because it does not have any value

// //-------------------- for of loop --------------------------------//

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // for (const item of menu) console.log(item);
// // for (const item of menu.entries()) {
// //   console.log(...item);
// // }

// // Using the destructing in the for of loop

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}:${el}`);
//}

// Enhanced Object Literals Line numner 3,5,52

//--------- Optional chaining(?.)--------------------------//

if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon);
if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);
// With Optional chaining

console.log(restaurant.openingHours.mon?.open); // only if the property before the quesion mark exists then it will execute the .method otherwise it will return undefined
console.log(restaurant.openingHours.sat?.open); // only if the property before the quesion mark exists then it will execute the .method otherwise it will return undefined

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? "closed "; //openingHours.mon , openingHours.tue ....
  console.log(`On ${day}, we Open at ${open}`);
}

// On Method
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

//ON arrays
const users = [{ name: "Adarsh", email: "adarshputhane@haha.com" }];
console.log(users[0]?.name ?? "User array empty");
