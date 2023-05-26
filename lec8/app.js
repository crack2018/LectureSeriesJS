let x;

// Creating an object
const person = {
    name: 'John Doe',
    age: 30,
    isAdmin: true,
    address: {
        street: '123 Main st',
        city: 'Boston',
        state: 'MA',
    },
    hobbies: ['music', 'sports'],
};

//document.writeln(`name is ${person.name} and age is about ${person.age}`);

// Accessing object properties

x = person.name; // Dot notation
x = person['age']; // Bracket notation

x = person.address.state;
x = person.hobbies[0];

// Updating properties
person.name = 'Jane Doe';
person['isAdmin'] = false;

// Deleting properties
delete person.age;

// Create new properties
person.hasChildren = true;

// Add functions
person.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
};

//person.greet();

// Keys with multiple words
const person2 = {
    'first name': 'Rahul',
    'last name': 'Raj',
};

x = person2['first name'];

// console.log(x);
// console.log(person2);
// console.log(person);

// Create object using the object constructor
const todo = new Object();

// add property on it
todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;

//
x = todo;

// Object Person
const person5 = {
    address: {
        coords: {
            lat: 43.444,
            lon: 32.987,
        },
    },

}

console.log(person5.address.coords.lat);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };


// using spread operater
// same as using ... operater
const obj4 = Object.assign({}, obj1, obj2);

const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);
// console.log(obj4);

// Array of objects
const todos = [
    {
        id: 1,
        name: 'Buy Milk'
    },
    {
        id: 2,
        name: 'Pickup kids from school'
    }
    ,
    {
        id: 3,
        name: 'out of trash'
    }
];

x = todos[0].name;
console.log(todos);
// Get array of object keys

x = Object.keys(todo);
x = Object.keys(todo).length;
x = Object.values(todo);

x = Object.entries(todo);

// Check if object has a property
x = todo.hasOwnProperty('age');

console.log(x);


















