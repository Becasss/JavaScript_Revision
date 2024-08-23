// The if statement: 

if(new Date().getHours()< 18){
    document.getElementById("demo").innerHTML = 
    "Good Day!";
}


// The else statement:

const hour = new Date().getHours();
let greeting;

if(hour < 12){
    greeting = "Good Morning!";
}
else{
    greeting = "Good Evening!";
}

console.log(greeting);