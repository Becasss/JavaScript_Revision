// Create new HTML elements (Nodes)

const para = document.createElement('p');
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementsById("div1");
element.appendChild(para);