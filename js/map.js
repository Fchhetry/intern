// Create a Map
const myMap = new Map();

// Add key-value pairs key strings name, age and even number
myMap.set('name', 'Alice');
myMap.set('age', 30);
myMap.set(100, 'One hundred');

// Get values by key
console.log("Name:", myMap.get('name'));  // Alice
console.log("Age:", myMap.get('age'));    // 30

// Check if a key exists
console.log("Has 'age'?", myMap.has('age')); // true, retrives the value associated with the given key

// Iterate over entries
console.log("Map contents:"); // checks if a key exists in the map
for (const [key, value] of myMap) { // uses for..of to iterate over the map
  console.log(key, "=>", value);
}

// Map size
console.log("Map size:", myMap.size);// .size gives the total number of key-value pairs in the map
