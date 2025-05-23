//regular function
const person = {
  name: "Pooja",
  greet: function () {
    console.log("Hello, " + this.name); // 'this' refers to person
  }
};

person.greet(); // Hello, Pooja

//arrow function in settimeout
const per = {
  name: "Pooja",
  greet: function () {
    setTimeout(() => { // arrow le greet bata this inherit gardei xa
      console.log("Hello from setTimeout, " + this.name);
    }, 1000);
  }
};

per.greet(); // Hello from setTimeout, Pooja

//arrow function in methods
const pers = {
  name: "Pooja",
  greet: () => {
    console.log("Hello, " + this.name); // 'this' is undefined or window, meaning this does no refer to a person it refers to global object 
  }
};

pers.greet(); // Hello, undefined