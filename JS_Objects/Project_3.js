// Objects methods are actions that can be performed on objects.

// Example:
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName());



// Adding a Method:
person.name = function () {
    return this.lastName + " " + this.firstName;
};

console.log(person.name());


// Javascript Methods:
const car = {
    brand: 'Tesla',
    model: 'Model S',
    year: 2021,
    startEngine: function () {
        console.log('Engine started');
    }
};

car.company = function () {
    return (this.brand + " " + this.model).toUpperCase();
};

console.log(car.company());