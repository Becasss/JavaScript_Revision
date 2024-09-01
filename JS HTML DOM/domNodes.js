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