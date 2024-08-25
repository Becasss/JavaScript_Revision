// Try and Catch
try{
    adddlert("Welcome to guest!");

}
catch(err){
    console.log("An error occurred: " + err);
}

// Input validation Example

function myFunction(){
    const message = document.getElementById('p01');
    message.innerHTML= "";
    let x = document.getElementById("demo").value;
    try{
        if(x.trim() == "") throw "empty";
        if(isNaN(x)) throw "not a nubmer";
        x = Number(x);
        if(x < 5) throw "too low";
        if (x > 10) throw "too high";
    }
    catch(err){
        message.innerHTML= "Input error: " + err;
      
    }
}