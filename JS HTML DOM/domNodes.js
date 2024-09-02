// Create new HTML elements (Nodes)

const para = document.createElement('p');
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementsById("div1");
element.appendChild(para);



// Creating new HTML Elements - insertBefore()

const newPara = document.createElement("p");
const nodee = document.createTextNode("This is new.");
newPara.appendChild(nodee);

const elementt = document.getElementById("div2");
const child = document.getElementById("p3");
elementt.insertBefore(newPara, child);



// Removing Existing HTML Elements

function myFunction() {
    document.getElementById("p5").remove();
}


// Removing child Element

const p = document.getElementById("div4");
const q = document.getElementById("p7");

p.removeChild(q);


// Replacing HTML Elements

const a = document.getElementById("div5");
const b = document.createElement("p9");
const c = document.createTextNode("p");
const d = document.createTextNode("This is new.");
c.appendChild(d);
a.replaceChild(c,b);