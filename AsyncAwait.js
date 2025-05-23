

async function pooja (){ // creating asynchronous function
let ktmWeather = new Promise((resolve, reject) => { //creating a promise called ktmweather which resolves rainy print bhayeasi after 1 sec
    setTimeout(() =>{
        resolve ("Rainy")
    },1000)
})

let  nepWeather = new Promise((resolve, reject) => { // nepweather is another promise
    setTimeout(()=>{
        resolve ("Slightly Rainy")
    },9000)
})
console.log("Fetching ktm weather please wait...")
 let ktm = await ktmWeather; //tells js to wait for ktmweather to finish ani assign garxa ktm ma
  console.log(ktm); // ya rainy print hunxa
console.log("Ktm weather fetched...")

console.log("Fetching nep weather please wait...")
  let nep = await nepWeather;// first promise finish gars, it waits for nepweather to complete which takes 2 seconds from the start
  console.log(nep);// ya slightly rainy print hunxa
console.log("Nep weather fetched...")

  //return(ktm,nep) //can use return instead of console as well
}

const cherry = () =>{
console.log("hey i am cherry and i am  waiting")
}

const main = async () => {

console.log("welcome to the weather forecast room") // first ma async bhanda agi yo print huncha 
let a = await pooja()//  it calls function pooja which run the async code in background
let b = await cherry()// it calls cherry 

}
main()
