function getUserInfo(user) {
  const name = user.name ?? "Anonymous";
  const age = user.age ?? "Not specified";
  console.log(`Name: ${name}, Age: ${age}`);
}

getUserInfo({ name: "Alice", age: 25 });       // Name: Alice, Age: 25
getUserInfo({ name: null, age: undefined });   // Name: Anonymous, Age: Not specified

//nested
const settings = {
  theme: null,
  fontSize: undefined
};

const theme = settings.theme ?? "light";
const fontSize = settings.fontSize ?? 14;

console.log(theme);     // "light"
console.log(fontSize);  // 14
