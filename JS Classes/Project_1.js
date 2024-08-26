// Javascript Classes are templates for javascript objects


/*
// syntax: class ClassName{
constructor(){.....}
}
*/




// Javascript Classes

class car {
    constructor(name, year)
{
    this.name = name;
    this.year = year;
}
}
const myCar1 = new car("Ford", 2014);
const myCar2 = new car("Audi", 2019);

console.log(myCar1);
console.log(myCar2);



// Javascript Class Methods

class Car {
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
age(){
    const date = new Date();
    return date.getFullYear() - this.year;
}}

const myCar = new Car("Ford", 2014);
console.log(`The age of car is :${myCar.age()} years old.`);