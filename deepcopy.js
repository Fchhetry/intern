//using structuredclone()
const original = {
  name: "Pooja",
  address: { city: "Dehradun", pincode: 248001 }
};
// Deep copy
const deepCopy = structuredClone(original);
// Change nested object in deep copy
deepCopy.address.city = "Delhi";
console.log(original.address.city);  // Dehradun ✅ original is safe
console.log(deepCopy.address.city);  // Delhi


// simple objects without functions, undefined, Date, Map
const orignal = {
  nme: "Pooja",
  adress: { ct: "Dehradun", pncode: 248001 }
};
const deepCpy = JSON.parse(JSON.stringify(orignal));
deepCpy.adress.ct = "Delhi";
console.log(orignal.adress.ct);  // Dehradun ✅
console.log(deepCpy.adress.ct);  // Delhi
