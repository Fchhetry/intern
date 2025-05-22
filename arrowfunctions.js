const sayHello = (name, greeting) => console.log(greeting + " " + name) // parenthesis skip
 
const x = {
name: "POOJA",
role: "JS developer",
exp : 3,
show : function() {
    // setTimeout(function(){
    console.log(this)
console.log(`the name is ${this.name}`);
    // },2000)
}
 }
//sayHello("POOJA","Good afternoon")
//console.log(x.name,x.exp)
x.show()