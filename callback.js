function greetUser(name) { //callback function define garney
  console.log("Hello, " + name + "! Welcome to JavaScript.");
}

function askName(callback) {
     setTimeout(() => {
    const name = "Pooja"; // imagine this was user input
    callback(name); // call the callback with user name
  }, 2000);
}

askName(greetUser); //function call garera callback pass garney