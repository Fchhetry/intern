// Create a Map
const myMap = new Map();

// Add key-value pairs
myMap.set('name', 'Alice');
myMap.set('age', 30);
myMap.set(100, 'One hundred');

// Get values by key
console.log("Name:", myMap.get('name'));  // Alice
console.log("Age:", myMap.get('age'));    // 30

// Check if a key exists
console.log("Has 'age'?", myMap.has('age')); // true

// Iterate over entries
console.log("Map contents:");
for (const [key, value] of myMap) {
  console.log(key, "=>", value);
}

// Map size
console.log("Map size:", myMap.size);
