// The new Map() Method:

const fruits = new Map([
    ["apples", 400],
    ["Bananas", 300],
    ["Cherry", 200]
]);
fruits.set('apples',600);

let numb = fruits.get("apples"); // Map.get Method
console.log(numb);


// The Map.set() Method:
const fruit = new Map();

// set Map values
fruit.set("Jery", 500);
fruit.set("Kiwi", 350);
fruit.set("Mango", 450);

// Map.delete() Method:
fruit.delete("Kiwi");

let nmb = fruit.get("Jery");
console.log(nmb);



// Map.size() Method:
console.log(fruit.size);
console.log(fruits.size);

// Map.clear() Method:
fruits.clear();
console.log(fruits.size);


// Map.forEach() Method:
const cities = new Map([
    ["kathmandu", 500],
    ["Tokyo", 600],
    ['Bombay', 700]
]);

let txt = "";
cities.forEach(function(value,key){
    txt += key + ' = ' + value + "<br>";
})
document.getElementById("demo").innerHTML
= txt;


// Map.entries() Method:
let text = "";
for (const x of cities.entries()) {
    text += x + "<br>";
}
document.getElementById("demo1").innerHTML
= text;


// Map.keys() Method:
let key = "";
for (const x of cities.keys()){
    key += x + "<br>";
}
document.getElementById("demo2").innerHTML
= key;


// Map.values() Method:
let value = "";
for (const x of cities.values()){
    value += x + "<br>";
}
document.getElementById("demo3").innerHTML
= value;

console.log(typeof cities);
console.log(typeof fruit);




// Map.groupBy() Method:
const dates = [
    {name:"apples", quantity : 300},
    {name:"bananas", quantity: 500},
    {name:"oranges", quantity: 200},
    {name: "kiwi", quantity: 100}
];

// callback function to select low volumes
function myCallback({quantity}){
    return quantity > 200 ? "Ok" : "Low";
}


// group by ok and low
const result = Map.groupBy(dates, myCallback);

// display results:
let txtt = "These frutis are Ok: <br>";

for (let x of result.get("Ok")){
    txtt += x.name + " " + x.quantity + "<br>";
}
txtt += '<br> These fruits are low: <br>';

document.getElementById("demo4").innerHTML
= txtt;
console.log(result.get("Ok"));