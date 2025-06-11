const cart = [
  { id: 1, items: ["apple", "banana"] },
  { id: 2, items: ["milk"] },
  { id: 3, items: ["bread", "butter"] }
];

// Using flatMap to extract all items from the cart
const allItems = cart.flatMap(order => order.items);
console.log(allItems);
// 👉 Output: [ 'apple', 'banana', 'milk', 'bread', 'butter' ]

//mappig and flatening
const numbers = [1, 2, 3];
const result = numbers.flatMap(x => [x, x * 2]);
console.log(result);  // 👉 [1, 2, 2, 4, 3, 6]

//remove empty values
const words = ["hello", "", "world"];
const cleaned = words.flatMap(word => word === "" ? [] : [word]);
console.log(cleaned);  // 👉 ["hello", "world"]

//splitting strings into world
const sentences = ["hello world", "foo bar"];
const word = sentences.flatMap(sentence => sentence.split(" "));
console.log(word);  // 👉 ["hello", "world", "foo", "bar"]

//map() vs flatmap()
const arr = [1, 2];
arr.map(x => [x * 2]);     // [[2], [4]]
arr.flatMap(x => [x * 2]); // [2, 4]
