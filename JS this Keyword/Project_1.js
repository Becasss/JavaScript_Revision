const person = {
    firstName : "Bikash",
    lastName : "Yamphu Rai",
    age : 30,
    country: "United States",
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName());


// this alone
let x = this;
console.log(x);


// In strict mode: this also refers to the global object
"use strict";
let y = this;
console.log(y); // undefined


// this in a function (Default)
function myFunction(){
    return this;
}
console.log(myFunction());


// this in a function (strict mode)


"use strict";
function myfunction(){
    return this;
}

console.log(myfunction());


/// this in Event Handler


// Explicit Function Binding

const person1 = {
    fullName:function(){
        return this.firstName + " " + this.lastName;
    }
}
const person2 = {
    firstName: "John",
    lastName: "Doe"
}
let z = person.fullName.call(person2);
console.log(z);