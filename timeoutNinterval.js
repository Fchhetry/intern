//setTimeout ma kunei euta function lai 3 sec ma run hunu deko xa bhaney that function runs after 3 sec and ends there itself
//setInterval after every 3 sec the function run time and again like a loop, meaning keep running in that given interval of time

console.log ("HELLO")// first ma yo print hunxa

const readline = require("readline");//importing built-in readline module that helps read i/p from the user in the terminal

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let a = setTimeout(function() {
    console.log("I am inside of settimeout")
},5000) // after 2000 ms yo print hunxa

 rl.question("Do you want to run the setTimeout? (y/n): ", function (b) {// asking the question whether or not to run the timeout
if (b.toLowerCase() === "n") {
    clearTimeout(a);
    console.log("Timeout was cleared.");
}else{
    console.log("Timeout will run.");
}
console.log(a) // timeout ma bhako object lai print garxa
//   eg: Timeout {
//     ...
//     _destroyed : true
//     ... 
//   }
rl.close(); //closes input stream
 });
 

 console.log("arguments afterwards")
 const sum = (a,b) => {
    console.log("Yes I am running" + (a + b))
    a + b
 }

 setTimeout(sum, 1000, 1, 2)// syntax(function,delay,arg1,arg2)
setInterval(function(){
    console.log("setInterval")
   
},3000) // infinite while loop bhitra interval
