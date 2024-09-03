// Parsing JSON

const obj = JSON.parse('{"name":"John","age":20, "city":"New York"}');
console.log(obj);



// Array as JSON

const text = '["Ford", "BMW", "Audi", "Fiat"]';

const myArr = JSON.parse(text);

console.log(myArr);



// Exceptions : Converting a string into a date:

const date = '{"name":"John","birth":"1986-12-14", "age":20, "city":"New York"}';

const bdate = JSON.parse(date);

console.log(bdate); // Throws error: Invalid Date
console.log(bdate.name);
bdate.birth = new Date(bdate.birth);
console.log(bdate.brith); // Throws error: Invalid




// Converting a string into a date object using reviver parameters:

const txt = '{"name":"John","birth":"1986-12-14", "city":"New York"}';

const ob = JSON.parse(txt, function (key, value) {
    if(key == "birth") {
    return new Date(value);
}else {
    return value;
}

});

console.log(ob.birth); // Outputs: Date object: 1986-12-14T00:00:00.000Z




// Parsing Functions

const a = '{"Name":"John","Birth":"1986-12-14","age": "function(){return 30;}", "City":"New York"}';

const b = JSON.parse(a);
b.age = eval("(" + b.age + ")"); 

console.log(b.name + " " + b.age());