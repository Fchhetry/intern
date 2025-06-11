//using structuredclone()
const original = {
  name: "Pooja",
  address: { city: "Birtamod", pincode: 248001 }
};
// Deep copy
const deepCopy = structuredClone(original);
// Change nested object in deep copy
deepCopy.address.city = "Kathmandu";
console.log(original.address.city);  // Birtamod  original is safe
console.log(deepCopy.address.city);  // Kathmandu


// simple objects without functions, undefined, Date, Map
const orignal = {
  nme: "Pooja",
  adress: { ct: "Birtamod", pncode: 248001 }
};
const deepCpy = JSON.parse(JSON.stringify(orignal));
deepCpy.adress.ct = "Kathmandu";
console.log(orignal.adress.ct);  // Birtamod 
console.log(deepCpy.adress.ct);  // Kathmandu
