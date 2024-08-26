// JSON Syntax Rules

// JSON Data -  A Name & A Value


// converting a JSON text to a Javascript Object

let text = '{"employees" : [ '+
'{"firstName":"BIkassh", "lastName":"Yamphu Rai"},' + 
    '{"firstName":"Ann", "lastName":"Smih"},' + 
    '{"firstName":"John", "lastName":"Doe"}]}';


const obj = JSON.parse(text);
    
console.log(obj.employees[0].firstName);