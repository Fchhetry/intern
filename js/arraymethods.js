let num = [1,2,3,34,4]
let b = num.toString()
console.log(b , typeof b)// b is a string
let c = num.join("_")
console.log(c, typeof c)// c is also a string
//let r = num.pop()// pop returns the popped elements
//console.log(num)
//let r = num.push(56)// adds an element beyond the last element
//console.log(num)
//let r = num.shift()// removes an element fromt the start of array
//console.log(r,num)
let r = num.unshift(78)
console.log(r,num)