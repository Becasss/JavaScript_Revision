class Car{
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

const myCar1 = new Car("Ford", 2015);
const myCar2 = new Car("Audi", 2016);


console.log(myCar1.name + " " + myCar2.name);


// Class Methods

class fruits {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    } age() {
        const date = new Date();
        return date.getFullYear() - this.year;

    }
}

const fruit = new fruits("Ford", 2014);
console.log(`My car is ${fruit.age()} years.`);



// Class Inheritance
class car {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return "I have a " + this.carname;
    
    }
}
class Model extends car{
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return this.present() + ", it is a " + this.model;
    }
}

const myCar = new Model("FOrd", "Mustang");
console.log(myCar.show());


// getter and setter functions 
class person{
    constructor(name) {
        this.personname = name;
    }
    get pname() {
        return this.personname;
    }
    set pname(x) {
        this.personname = x;
    }
}

const p1 = new person("John");
console.log(p1.pname);



// static Methods
class math{
    constructor(name) {
        this.name = name;
    }
    static hello() {
        return "Hello!";
    }
}
const myMath = new math("Ford");

// You can call "hello(" on the math class:
console.log(math.hello());

// But not on a Car Object:

/* document.getElementById("demo").innerHTML 
= myMath.hello();
// this will raise an error 
*/


// Example 2:
class bike {
    constructor(name) {
        this.name = name;
    
    }

    static hlo() {
        return "Hello!"; + x.name;
    }
}
const mYBike = new bike("YBike");
console.log(bike.hlo(mYBike));
