// Create a Set
const mySet = new Set();

// Add values
mySet.add(1);
mySet.add(2);
mySet.add(2); // Duplicate - will be ignored
mySet.add('hello');

console.log("Set contents:");//iterate through the set using for...of 
for (const value of mySet) {
  console.log(value);//prints each unique value
}

// Check if a value exists
console.log("Has 2?", mySet.has(2)); // true

// Remove a value
mySet.delete(1);// removes the value 1 from the set

// Size of the Set
console.log("Set size:", mySet.size); // .size le total number of unique elements in the set return garxa
