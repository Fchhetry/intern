//for array
const original = [1, 2, [3, 4]];

// Shallow copy using spread
const shalowCopy = [...original];

// Modify top-level element
shalowCopy[0] = 100;  // Affects only the copy
console.log(original);      // [1, 2, [3, 4]]
console.log(shalowCopy);   // [100, 2, [3, 4]]

// Modify nested element
shalowCopy[2][0] = 999;  // Affects both!
console.log(original);      // [1, 2, [999, 4]]
console.log(shalowCopy);   // [100, 2, [999, 4]]


//for objects
const orignal = {
  name: "Pooja",
  address: { city: "Dehradun" }
};

// Shallow copy using spread
const shallowCopy = { ...orignal };

// Modify top-level key
shallowCopy.name = "Asha";
console.log(orignal.name);      // Pooja
console.log(shallowCopy.name);   // Asha

// Modify nested object
shallowCopy.address.city = "Delhi";
console.log(orignal.address.city);  // Delhi (changed!)
