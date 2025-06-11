console.log("Working with Iterators");
//iterators

function fruitsIterators(values) { // values is the array i want to iterate
    let nextIndex = 0; // keeps track of the current position in the array
    //we are returning an object here
    return {
next : function(){
    if (nextIndex < values.length){
        //we are returning an object below
       return {
value : values[nextIndex++],
done : false
        }
    }
        else{
           return {
            //we are returning below object,with only done 
            done : true
        }
    }
}
    }

}
const myArray = ['Apples','Grapes','Oranges', 'Mangoes'];
console.log("My array is : ", myArray) // this is the array

//using the iterators
const fruits = fruitsIterators(myArray)// fruits is an object with a .next() method
console.log(fruits.next().value) // .next is a method used by the function to return an object
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value) // ya aayeara chi undefined print hunxa coz we only have four elements in our array