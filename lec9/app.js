// creating Object
// accessing Object properties
// updating Object propperties using dot and bracket notation
// delete propertie
// creating new properties
// add function to the object
// keys with multiple words use bracket notation



//creating Object
const person = {

    name: 'kavan das',
    age: 30,
    isAdmin: true,
    hobbies: ['cricket', 'football', 'basketball'],
    address: {
        city: 'bhvanagar',
        pin: 364500
    }
}

// accessing Object properties
let x;
x = person.name;// dot notation
x = person['age'];// bracket notation
x = person.hobbies[0];
x = person.address.city;


// updating Object propperties using dot and bracket notation

person.name = 'rahul raj';
person['age'] = 44;

// delete propertie
delete person.address.pin;

// creating new properties
person.hasKids = false;


// add function to the object

person.geet = function () {
    console.log(` my name is ${this.name}`)
}

//person.geet();

// keys with multiple words use bracket notation
person['first name'] = 'rahul '

const person2 = {
    'first name': 'karan raj',
    'last name': 'vijan gupta'
}

// console.log(person2);
//console.log(x);
// console.log(person)


    // create object using object constructer
    // nesting of object
    // spread operater
    // Object.assign() same as spread
    // Array of objects
    // Get array of object keys
    // Get array of object values
    // Get array of object key/value pairs
    // Check if object has a property




// create object using object constructer
const todo = new Object();

todo.id = 123;
todo.name = 'Buy Milk';
todo.completed = false;

// object nesting

const person3 = {
    name: 'aaa bbb',
    address: {
        cord: {
            longi: 143.22,
            latit: 222.33
        }
    }
}
x = person3;
x = person3.address.cord.latit;


const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// spread operater

const obj3 = {...obj1,...obj2};
// same as spread operater
const obj4=Object.assign({},obj1,obj2);

x=obj4;

// Array of objects
const todos = [
    { id: 1, name: 'Buy Milk' },
    { id: 2, name: 'Pickup kids from school' },
    { id: 3, name: 'Take out trash' },
  ];

x = todos[0].name;

// Get array of object keys
x = Object.keys(todo);
// Get length of an object
x = Object.keys(todo).length;

// Get array of object values
x = Object.values(todo);

// Get array of object key/value pairs
x = Object.entries(todo);

// Check if object has a property
x = todo.hasOwnProperty('age');



// setting object properties withsame name as variable name
// Destucturing Object Properties

const first_name = "kishor kumar";
const last_name = "shubhash ghai";
const age  = 30

const personobj = {first_name,last_name,age};
//console.log(personobj);
//console.log(personobj.age);

// Destucturing Object Properties
// Destructuring arrays & using the rest/spread operator
let todolist = {
    id:1,
    title:'take out of rush',
    user:{name:'john smith'}
}

let{id:todoid,title,user:{name}} = todolist;

// console.log(todoid);
// console.log(title);
// console.log(name);

// const numbers = [33,44,55,66,7,11];
// const[first,second,...rest]=numbers;

// console.log(first);
// console.log(second);
// console.log(rest);


// JSON stringify 
// JSON parse
// Array and JSON

const post = {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
  };

const str = JSON.stringify(post);// object to json string

const objectcon = JSON.parse(str); // json string to object 

console.log(objectcon);

console.log(str);
console.log(post);

// JSON and Array

const posts = [
    {
        id: 1,
        title: 'Post One',
        body: 'This is the body1',
    },
    {
        id: 2,
        title: 'Post Two',
        body: 'This is the body2',
    },
    { id: 3,
        title: 'Post Three',
        body: 'This is the body3',
    }
];

const str2 = JSON.stringify(posts);
console.log(str2);











