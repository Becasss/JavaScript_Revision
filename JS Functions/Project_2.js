function toCelcius(f) {
    return (f - 32) * 5 / 9;
    
}

let values = toCelcius(89);
document.write("The following values are" + values);




// Method Reuse - call() Method

const person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
const person1 = {
    firstName: "Bikash",
    lastName: "Yamphu Rai"
}
const person2 = {
    firstName: "John",
    lastName: "Doe"
}

console.log(person.fullName.call(person1));
console.log(person.fullName.call(person2));




// call() Method with Arguments

const person3 = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + " " + country;
    }
}
const person4 = {
    firstName: "Jane",
    lastName: "Doe"
}
const person5 = {
    firstName: "Mary",
    lastName: "Smith"
}

console.log(person.fullName.call(person4, "Oslo", 'Norway'));




// Method Reuse - apply() Method

const prsn = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
const pesn1 = {
    firstName: "Bikash",
    lastName: "Yamphu Rai"
}
console.log(person.fullName.apply(pesn1));