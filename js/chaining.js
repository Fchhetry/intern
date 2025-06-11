const user = {
  name: "Alice",
  address: {
    city: "New York",
  },
};

console.log(user.address?.city);      // "New York" coz user.address.city exist
console.log(user.address?.zip);       // undefined (no error) coz user.address.zip doesnot exist
console.log(user.contact?.email);     // undefined (no error) cz user.contact doesnot exist

const users = {
  sayHello: () => "Hello!",
};

console.log(users.sayHello?.());     // "Hello!" checks if function sayHello exist then calls it
console.log(users.sayBye?.());       // undefined (no error) user.sayBye?.() is undefined

const data = {
  items: ["apple", "banana"],
};

console.log(data.items?.[0]);       // "apple"
console.log(data.items?.[2]);       // undefined
console.log(data.list?.[0]);        // undefined (no error)
