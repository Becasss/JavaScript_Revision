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


