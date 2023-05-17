// intro console.log
// Diff var let and const
// conversation string to number and number to string
//another method of conversion of string to number and number to string using Number() and String() and Boolean()
// parseInt() and parseFloat() 
// Ways to get NaN
//Data types
// Arithmatic operater,Assignmnet operater,Comparison Operators,Exponent Operater,Increment and Decrement
// coerced value
console.log('Hello World');

// Use Strict Mode

// Diff var let and const

/* 
var samename = "rahul";
console.log(samename);
var samename = "raj";
let sname = "vaidik";
sname = "karan";
console.log(samename);
console.log(sname);


// constant

const pi=3.14;
//pi=4;// can't reassign
console.log(`value of pi ${pi}`);
console.log(pi);

*/
//function scope and block scope in future

// conversation string to number and number to string
// let str="55.55";
// console.log(typeof str);
// str=+str;
// console.log(str);
// str=str+30;
// console.log(str);
// console.log(typeof str);


// let a=44;
// a=a+"";
// console.log(a);
// console.log(typeof a);
// a=a+55;
// console.log(a);
/*
let amount='hello';
amount=55.56;
amount=parseInt(amount);
amount=''
//amount=+amount;
//amount=parseFloat(amount);
amount=Boolean(amount);
console.log(amount);

// Ways to get NaN
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo' / 3);

*/
//another method of conversion of string to number and number to string

/*
let num=5;
let st=String(num);
console.log(st);
console.log(typeof st);

let s="77.88";
let number=Number(s);
console.log(number);
console.log(typeof number);
*/

/*
// Data-Type

// String
const firstName = 'Sara';

// Number
const age = 30;
const temp = 98.9;

// Boolean
const hasKids = true;

// Null
const aptNumber = null;

// Undefined
// let score;
const score = undefined;

// Symbol
const id = Symbol('id');

// BigInt
const n = 9007199254740991n;

// Reference Types

const numbers = [1, 2, 3, 4];

const person = {
  name: 'Brad',
};

function sayHello() {
  console.log('Hello');
}

const output = sayHello;

console.log(output, typeof output);


// stack and heap 
// Value is stored in the stack
const name = 'John';
const age1 = 30;


// Reference is stored in the heap

const person1={
    name:"pd",
    age:22
}

const newperson=person1;
newperson.name="ddddd";

console.log(person,newperson);

*/ 

//-------------------------Operaters-------------------------------------------------
// 1. Arithmetic Operators
/*
let x;

x = 5 + 5;
x = 5 - 5;
x = 5 * 5;
x = 5 / 5;
x = 7 % 5;

// Concatenation
x = 'Hello' + ' ' + 'World';

// Exponent
x = 2 ** 3;

// Increment
x = 1;
// x = x + 1;
x++;

// Decrement
// x = x - 1;
x--;

// 2. Assignment Operators

x = 10;

x += 5;
x -= 5;
x *= 5;
x /= 5;
x %= 5;
x **= 5;

// 3. Comparison Operators

// Equal to (Just the value, not the type)
x = 2 == '2';

// Equal to (Type and value)
x = 2 === '2';

// Not equal to (Just the value, not the type)
x = 2 != '2';

// Not equal to (Type and value)
x = 2 !== 2;

// Greater than and less than
x = 10 > 5;
x = 10 < 5;
x = 10 <= 5;
x = 10 >= 5;

console.log(x);
*/

let x;

// Coerced to a string
x = 5 + '5';
console.log(x, typeof x);

x = 5 + Number('5');

// Coerced to a number
x = 5 * '5';
console.log(x, typeof x);

// null is coerced to 0 as it is a `falsy` value
x = 5 + null;

x = Number(null);

x = Number(true);
x = Number(false);

// true is coerced to a 1
x = 5 + true;
console.log(x, typeof x);

// false is coerced to 0 (falsy)
x = 5 + false;
console.log(x, typeof x);

// Undefined is coerced to 0 (falsy)
x = 5 + undefined;

console.log(x, typeof x);




