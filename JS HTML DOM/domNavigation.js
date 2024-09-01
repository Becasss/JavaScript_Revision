document.getElementById("id02").innerHTML = document.getElementById("id01").innerHTML;


document.getElementById("id04").innerHTML = document.getElementById("id03").firstChild.nodeValue;


document.getElementById('id06').innerHTML = document.getElementById("id05").childNodes[0].nodeValue;



// DOM Root Nodes

document.getElementById("id07").innerHTML = document.body.innerHTML;


// Node Name Property
document.getElementById("id08").innerHTML = document.getElementById("id09").nodeName;