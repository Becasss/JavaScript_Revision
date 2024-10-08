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



/*
// JSON Example:
{"employees":[
{"firstName": "John", "LastName": "Doe"},
{"firstName": "Anna" , "LastName": "Smith"},
{"firstName": "peter", "LastName": "Jones"}
]}
 */



/* 
// XML Example
<employees>
<employees> 
<firstName> John</firstName> <lastName>Doe</lastName>
</employees>
<employees>
<firstName> Anna</firstName> <lastName> Smith</lastName>
</employees> 
<employees>
<firstName> Peter</firstName> <lastName> Jones</lastName>
</employees>
</employees>
*/




// JSON Data types


// JSON Strings :  {"name": "John"}


// JSON Numbers :  {"age": 30}


// JSON Objects : {"employees" : "name": "John", "age": 30, "city": "New York}}


// JSON Arrays: {"employees" : ['John', "Anna", "Peter"]}



// JSON Booleans : {"sale"  true}


// JSON Null : {"middlename": null}


