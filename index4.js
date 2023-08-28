// Checking of the property 

let obj = {
    name:"nihir",
    class:12,
    age:17
}

function taker(Obj,property){
    return Object.hasOwn(Obj,property)
}

console.log(taker(obj,'class'))