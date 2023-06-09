// Global window object
console.log(window);
// The document object is part of the window object
console.dir(window.document);
// We can access DOM elements directly with properties
console.log(document.body);
console.log(document.links[0]);

// we can set properties of elements 
//document.body.innerHTML='<h1>Hello from Body</h1>';

// The document object has a ton of methods. One is `document.write()`, which will write something to the document
// document.open();
// document.write('Hello from JS');
// document.close();

// We also have methods to select elements more directly

//document.getElementById('main').innerHTML='<h1> Helloo </h1>';

// document.querySelector('#main h1').innerText='how are Yoy DOM??';
//document.querySelector('#main h1').textContent='Say somthing Google';
