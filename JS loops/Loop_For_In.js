// The For In loop

/**     
 //syntax:
  for(key in object){
        // Code block to be executed
 }
 */


 const person = {fname: 'John',
    lname: 'Doe',
    age: 30
 }

 let text = "";
 for(let x in person) {
    text += person[x].name;
 }
 console.log(text);
