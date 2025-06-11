//let num = [1,2,3,4,5,6,7,8,9]
let num_more =[11,12,13,14,15,16,17,18,19]
let num_even_more =[211,212,213,214,215,216,217,218,219]

console.log(num.length)// ya lenght 9 xa
delete num[0]
console.log(num.length)// even after deleting length hudeina ani 9 nei hunxa

let newArray = num.concat(num_more,num_even_more)
console.log(newArray)
console.log(num, num_more)
console.log(num,num_even_more)

//sort method
//let num = [551,22,3,14,5,6,7,8,229]
num.sort()
console.log(num)// first digit 1 bata start gardei sort garxa
//acsending order sorting
let compare = (a,b) =>{
return a - b
}
// let num = [551,22,3,14,5,6,7,8,229]
 num.sort(compare)
num.reverse()//array lai ulta garxa
console.log(num)
 //splice and slice
 //let num = [551, 22, 3, 14, 5, 6, 7, 8,229]
 num.splice(2, 3, 1021, 1023)
 console.log(num)
let num = [551, 22, 3, 14, 5, 6, 7, 8,229]
let deletedValues = num.splice(2, 3, 1021, 1023)
 console.log(deletedValues)

let newNum=num.slice(3,5)
console.log(newNum)