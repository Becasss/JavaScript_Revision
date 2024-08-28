class Car{
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

const myCar1 = new Car("Ford", 2015);
const myCar2 = new Car("Ford", 2016);


console.log(myCar1.name + " " + myCar2.name);