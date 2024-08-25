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


// The Finally Statement

function myfunction(){
    const mess = document.getElementById('p02');
    mess.innerHTML= "";

    let a = document.getElementById("momo").value;
    try{
        if(a.trim() == "") throw "empty";
        if(isNaN(a)) throw "not a nubmer";
        a = Number(a);
        if(a < 5) throw "too low";
        if (a > 10) throw "too high";

    }
    catch(err){
        mess.innerHTML= "Input error: " + err;
    }
    finally{
    document.getElementById('momo').value = "";
    }
}


// Range Error:

let num = 1;
try{
    num.toPrecision(500);
}
catch(err){
    document.getElementById('p03').innerHTML = err.name;
}



// Reference Error:

let x = 5;
try{
    x = y + 1;
}
catch(err){
    document.getElementById('p04').innerHTML = err.name;
}
