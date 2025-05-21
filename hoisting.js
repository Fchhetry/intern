 console.log(a)
 greet()
 function greet() {
    //const greet =() => { eslai function banako bhayea greet access hudeina thio initialize garnu agi as function and class expressions are not hoisted same with var
    console.log("Good morning")
 }

 var a = 9 ; // declaration hoisted to the top but initialization is not
 //let ra const use gareko vayea hoist hunxa top ma but initialize hudeina tei bhayeara error awxa
console.log(a)
