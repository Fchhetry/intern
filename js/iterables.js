console.log("Working with Iterables");

const myIterableFruits = {
  fruits: ['Apples', 'Grapes', 'Oranges', 'Mangoes'],//property is fruits in array, hamile eslai iterable banauna lageko using for...of loop

  [Symbol.iterator]() {//iterables symbols to iterate over the object
    let index = 0;// array initialization is 0
    let fruitsArray = this.fruits;// storing in fruitsArray

    // This is the iterator object
    return {
      next() {//returns object with two keys
        if (index < fruitsArray.length) {//keeps increasing index each time .next() is called
          return {
            value: fruitsArray[index++],//current fruit 
            done: false // tells if iteration is finished 
          };
        } else {
          return { done: true };
        }
      }
    };
  }
};

console.log("My iterable fruits are:");

// Using for...of with our iterable
for (const fruit of myIterableFruits) { //automatically calls [symbol.iterator]() on myIterableFruits
  console.log(fruit);// calls .next() repeatedly until done: true is returned and value is assigned to fruit and printed
}
