
// Define a function
// Invoke, execute or call a function
// Invoke function with arguments
// Assign the returned value to a variable
// Default Arguments
// Rest Parameters
//Object as parameters
//Array as Argument

// Global scope variable
// Access global vars in blocks
// Overwriting global x (variable shadowing)
// An If statement is a block
// var IS function scoped
/// nested function
// Function Declaration vs Function Expression
// arrow function
// Arrow function in a callback
//IFFE syntax



// Define a function
function sayHello() {
    console.log('Hello World');
}

// Invoke, execute or call a function
sayHello();

// Define a function with parameters
function add(num1, num2) {
    //    console.log(num1 + num2);
}


// Invoke function with arguments
add(5, 10);

// Parameters vs. Arguments
// Parameters are the names of the variables that are used to pass data into a function.
// Arguments are the values that are passed into the function
function subtract(num1, num2) {
    return num1 - num2;

    console.log('After the return');
}

// Assign the returned value to a variable
const result = subtract(10, 2);
//console.log(result, subtract(20, 5));
// Default Arguments

function registereduser(user = 'smith') {
    //return `${user} is registered user`;
    return user + ' is registered';
}

//console.log(registereduser());
// Rest Parameters

function sum(...numbers) {
    let total = 0;
    // console.log(numbers);    
    for (let num of numbers) {
        total += num;
    }
    //    console.log(total);
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9);

//Object as params

function loginuser(user) {
    return `The user ${user.name} have id is ${user.id} is login `
}
const user = {
    id: 1,
    name: 'John',
};

// console.log(loginuser(user));
// console.log(loginuser({ id: 2, name: 'Sara', }));
// Array as arguments

function getrandom(arr) {
    let getrandomindex = Math.floor(Math.random() * arr.length);
    const item = arr[getrandomindex];
    // console.log(getrandomindex);
    // console.log(item);
}

//getrandom([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//alert('Hello');

// console.log(innerWidth);
// Global scope variable
// const x = 100;
//console.log(x, 'in global');

function run() {
    // Access global vars in functions
    // console.log(window.innerHeight);
    console.log(x, 'in function');
}

// run();

// Access global vars in blocks
if (true) {
    // console.log(x, 'in block');
}

function add() {
    // Overwriting global x (variable shadowing)
    const x = 1;
    const y = 50;
    console.log(x + y);
}
// Can not access a function scoped variable in global scope
// console.log(y);
// add();

const x = 100;

// An If statement is a block
// if (true) {
//   console.log(x);
//   const y = 200;
//   console.log(x + y);
// }

//console.log(y); // ReferenceError: y is not defined


// A loop is a block
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
//   }

// console.log(i); // ReferenceError: i is not defined


// Using var
if (true) {
    const a = 500;
    let b = 600;
    var c = 700;
}

//console.log(c);
//console.log(a);
//console.log(b);


// var IS function scoped

function run() {
    var d = 100;
    //console.log(d);
}

run();

//console.log(d);

const foo = 1;
var bar = 2; // Put on the window object

/// nested function

function first() {
    const x = 100;

    function second() {
        const y = 200;
        // console.log('inside second', x + y);
    }

    // console.log(y);

    second();
}

first();


if (true) {
    const x = 100;

    if (x === 100) {
        const y = 200;
        // console.log('inside if block', x + y);
    }

    // console.log(y);
}

// Function Declaration
console.log(addDollerSign(220));

function addDollerSign(value) {
    return '$' + value;
}
// When using declarations, you can invoke the function before the declaration. With expressions, you can not

// Function Expression

const addPlusSign = function (value) {
    return '$' + value;
}

console.log(addPlusSign(300));


//arraw function

//  Normal function declaration
// function add(a, b) {
//   return a + b;
// }

// arrow function
const addtwo = (a,b)=>{return a+b};

// Implicit Return
const subtwo = (a,b)=>a-b;

// Can leave off () with a single param
const double = a => a * 2;

// Returning Object
const createObject = () =>({name:'brad'});

const numbers = [1,22,3,41,5,6];

// numbers.forEach(function(n){
//     console.log(n);
// });

// numbers.forEach((n)=>console.log(n));
// Arrow function in a callback




// console.log(double(4));
// console.log(addtwo(3,4));
// console.log(subtwo(3,4));
// console.log(createObject());

//IFFE Syntax
// (function(){
//     const user ='john';
//     console.log(user);
//     const hello = () => console.log('Hello from iifE')
//     hello();
// })();

// // Params
// (function(name){
//     console.log('hello '+name)
// })('shawn')

// (function hello() {
//     console.log('Hello');
//     hello();
// })();
  

function minmax(arr){
        const max= Math.min(...arr);
        console.log('max===',max)
        const min = Math.max(...arr);
        return{
            min,max
        };
}

const m =minmax([2,3,4,53,6,77]);
console.log(m.min);






















