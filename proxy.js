const p1 = { //target object p1 which holds personal informations
fname: 'POOJA',
lname: 'FUYAL',
age: 18,
};

const p1Proxy =  new Proxy(p1, {
    get(target,prop) { // intercepts property access
        if (prop in target) return target[prop];
    return false; // property like fname,lname exist garxa bhaney tesko value return garnu or else return false instead of undefined
    },
    set (target, prop, value) { // intercepts property modifications, such that already exist na bhako property set garna khojyo jastei hometown then it in return throws error
      if (!(prop in target)) 
        throw new Error(`${prop} does not exixtx`);
      switch(prop){
        case 'fname': // checks fname and lname must be a string
        case 'lname':
            if (typeof value !== 'string') throw new Error(`${prop} must be a string`)
      break
        case 'age': // checks age must be a positive number
        if (typeof value !== 'number') 
            throw new Error(`${prop} must be a number`)
            if (value <= 0) throw new Error (`${prop} must be > zero`)
        }
   // Reflect.set(target,prop,value);// call a default behaviours use reflect
    target [prop]=value; // validate vako case ma update hunxa
    },
});

p1Proxy.age = 1; // negative value dida ni error fyalxa as we have set age must be greater than zero
p1Proxy.fname = '10'; //error fyalxa coz fname must be a string

console.log(p1Proxy); // will print the updated object