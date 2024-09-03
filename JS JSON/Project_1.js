// JSON Syntax Rules

// JSON Data -  A Name & A Value


// converting a JSON text to a Javascript Object

let text = '{"employees" : [ '+
'{"firstName":"BIkassh", "lastName":"Yamphu Rai"},' + 
    '{"firstName":"Ann", "lastName":"Smih"},' + 
    '{"firstName":"John", "lastName":"Doe"}]}';


const obj = JSON.parse(text);
    
console.log(obj.employees[0].firstName);



// JSON Example:

// JSON Data - A Name and  a Value // "name" : "John"


const myObj = {
    name: "John",
    age: 30,
    city: "New York"
};
myObj.name = "Bikash";
document.getElementById("demo").innerHTML = myObj.name;

// 


