// String indexing 
// string concatenation 
//template String
// Methods on String
// booleans & comparison operator 
// truthy and falsey value
//if and else
// ternary operator 
//String Challange





//let firstName = "rahulharshitdfjakldsfdf";

//  r    a   h   u   l   h    a
//  0    1   2   3   4   5   6

// console.log(firstName[0]);
// length of string 
// firstName.length 

//console.log(firstName.length);

//console.log(firstName[firstName.length-2]);

// last Index : length - 1 


// let firstName=" rahulraj ";

// console.log(firstName);
// console.log(firstName.length);
// console.log(firstName.trim());
// console.log(firstName.toUpperCase());

// let newstring=firstName.slice(2);
// console.log(newstring);
// newstring=firstName.slice(3,5);
// console.log(newstring);

// string concatenation 

let string1 = "17";
let string2 = "10";

// let newString = +string1 + +string2;
// console.log(newString);
// console.log(typeof newString);

//template String

// let age=20;
// let name="rahul";

// let aboutme="My name is "+ name +" and my age is "+ age;
// let usingtemp=`My name is ${name} and my age is ${age}`;
// console.log(aboutme);
// console.log(usingtemp);

//Create String Object
// let x;
// const s = new String('Hello World');
// //const s ="rahul raj"
// x=s[0];

// x=s.__proto__;
// x=s.toUpperCase();
// x=s.charAt(1);
// x=s.indexOf('o');
// x=s.lastIndexOf('l');
// x=s.substring(2,5);//search a string for a specified value
// x=s.slice(3,5);    // it will create new string
// x=s.slice(-9,-4);
// x=s.replace('World','duniya');
// x=s.includes('hello');// return true or false
// x=s.valueOf();// returns the primitive value of a variable
// x=s.split(" ");// returns an array of strings

// console.log(x);
// console.log(s);




// let firstName;
// console.log(typeof firstName);
// firstName = "Harshit";
// console.log(typeof firstName, firstName);


// let myVariable = null;
// console.log(myVariable);

// myVariable = "harshit";

// console.log(myVariable, typeof myVariable);
// console.log(typeof null);


// let myNumber = BigInt(12);
// let sameMyNumber = 123n;
// console.log(myNumber);
// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.MIN_VALUE)
// console.log(Number.MAX_VALUE)
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(myNumber+ sameMyNumber);



// booleans & comparison operator 

// booleans 
// true, false 

// let num1 = 7;
// let num2 = "7";

// console.log(num1<num2);

// == vs === 
// console.log(num1 === num2);

// != vs !==

// console.log(num1 !== num2);




// truthy and falsey value

// falsy values 

// false
// ""
// null 
// undefined
// 0



// truthy 
// "abc"
// 1, -1

let fname=0;
if(fname)
{
    console.log(fname);
}else{
    console.log("first name is kinda empty")
}


// Create a new string called "myNewString" that holds the value of "Developer", using the lowercase value from "myString"
const myString = 'developer';

let myNewString;

// Solution 1:
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
// Solution 2:
myNewString = myString[0].toUpperCase() + myString.substring(1);
// Solution 3:
myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;

console.log(myNewString);


