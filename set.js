// Create a Set
const mySet = new Set();

// Add values
mySet.add(1);
mySet.add(2);
mySet.add(2); // Duplicate - will be ignored
mySet.add('hello');

console.log("Set contents:");
for (const value of mySet) {
  console.log(value);
}

// Check if a value exists
console.log("Has 2?", mySet.has(2)); // true

// Remove a value
mySet.delete(1);

// Size of the Set
console.log("Set size:", mySet.size);
