let name = "Pooja"; // this is a global variable
let greeting = "Hello"; // this is outside function

function sayHello() {
  console.log(greeting + " " + name);
}

sayHello();

console.log(name);     // this prints global variable
console.log(greeting); // this prints inside function variable
