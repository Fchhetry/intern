//block scoped variable
let name = "Alice";
name = "Bob";  // allowed

//block scoped constant
const PI = 3.14;
// PI = 4;  Error: Cannot reassign a constant

//arrow functions
const add = (a, b) => a + b;

console.log(add(2, 3));  // Output: 5

//template literals
let nn = "Pooja";
let message = `Hello, ${nn}!`;
console.log(message);  // Output: Hello, Pooja!

//destructing
//arrays
const [a, b] = [1, 2];
console.log(a, b);  // Output: 1 2

//objects
const person = { nme: "Pooja", age: 22 };
const { nme, age } = person;
console.log(nme, age);  // Output: Pooja 22

//default parameter
function greet(nam = "Guest") {
  console.log(`Hello, ${nam}`);
}
greet();  // Output: Hello, Guest

//spread operators
//arrays
const nums = [1, 2, 3];
const newNums = [...nums, 4];
console.log(newNums);  // [1, 2, 3, 4]

//objects
const obj = { a: 1 };
const clone = { ...obj, b: 2 };
console.log(clone);  // { a: 1, b: 2 }

//rest parameters
function sum(...args) {
  return args.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3));  // Output: 6

//enhanced object literals
let ne = "Pooja";
let user = {
  ne,
  greet() {
    console.log(`Hi, ${this.ne}`);
  }
};
user.greet();  // Output: Hi, Pooja

//class
class Person {
  constructor(na) {
    this.na = na;
  }

  greet() {
    console.log(`Hello, I'm ${this.na}`);
  }
}

const p = new Person("Pooja");
p.greet();  // Output: Hello, I'm Pooja

//modules
// export const ad = (a, b) => a + b;

// import { ad } from './eg.js';
// console.log(ad(2, 3));  // Output: 5

//promises
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done"), 1000);
});

promise.then(console.log);  // Output after 1s: Done

//async/await
async function fetchData() {
  let result = await promise;
  console.log(result);
}
fetchData();

//optional chaining
const us = { profile: { nm: "Pooja" } };
console.log(us.profile?.nm);      // "Pooja"
console.log(us.address?.street);   // undefined (no error!)

//null coalescig
let n = null;
let finalName = n ?? "Guest";
console.log(finalName);  // Output: Guest
