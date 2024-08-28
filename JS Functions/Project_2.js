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
    firtName: "Bikash",
    lastName: "Yamphu Rai"
}
const person2 = {
    firstName: "John",
    lastName: "Doe"
}

console.log(person.fullName.call(person1));