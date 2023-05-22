// Array Literal
// Array Constucter
// Array method like push,pop,unshift,shift,reverse,includes,indexOf
// Array Challange

// for loop traditional
// for in 
// for of
// for each
// array advance method like map.filter,reduce 
// array destructuring
let x;

// Array Literal
const numbers = [12, 45, 33, 29, 39, 102];
const mixed = [12, 'Hello', true, null];

//console.log(mixed);
// Array Constructor

const fruits = new Array('apple', 'grape', 'orange');
//console.log(fruits);
// Get value by index

x = numbers[0];
x = numbers[0] + numbers[3];
x = `My favorite fruit is an ${fruits[2]}`;
x=numbers.length;

fruits[2]='pear'
// length is not read only
fruits.length=2;

fruits[3] = 'strawberry';
// Using the length as the index will always add on the the end
fruits[fruits.length] = 'blueberry';
fruits[fruits.length] = 'peach';

x=fruits;


const arr = [28, 38, 44, 29, 109];

// push() - Push a value on to the end of the array
arr.push(100);

// pop() - Take the last value off
arr.pop();

// unshift() - Add a value to the beginning of the array
arr.unshift(99);

// shift() - Remove first value
arr.shift();

// reverse() - Reverse an array
arr.reverse();

// includes() - Check to see if something is in the array
x = arr.includes(445);

// indexOf() - Return the index of the first match
x = arr.indexOf(28);

// Return array as a string
x = arr.toString();
x = arr.join();

// slice() returns selected elements in an array, 
//as a new array. Slice takes in the index of the first element 
//and the index of the last element to be included in the new array.
x = arr.slice(1, 4);
// splice() works like slice() except it takes the index of the first element and the number of elements after that as a second argument. it also mutates the original array where slice() does not
x = arr.splice(1, 3);

// Chaining methods - Some methods can be chained depending on the return value.
x = arr.slice(1, 4).reverse().toString().charAt(0);


const fruits1 = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

// Nesting arrays
// Nesting berries inside of fruits
        //fruits1.push(berries);
//console.log(fruits1);
// Now we can access 'blueberry' with the following
        //x = fruits1[3][1];
// Create a new variable and nest both arrays
const allFruits = [fruits1, berries];

x=allFruits;
x = allFruits[1][2];

// concat() - Concatenate arrays
x = fruits1.concat(berries);

// spread operator (...) - Concatenate with
x = [...fruits1, ...berries];

// flat() - Flatten an array
const arr1 = [1, 2, [3, 4, 5], 6, [7, 8]];
x = arr1.flat();
// isArray() - Check is is an array
x = Array.isArray(fruits);
// from() - Create an array from an array like value
x = Array.from('12345');
// of() - Create an array from a set of values
const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

let number=[2,3,4,6,7,1];

// for(let i=0;i<number.length;i++)
// {

//         console.log(number[i]);

// }


// for (const iterator of number) {
//         console.log(iterator);
// }
// console.log('\n');

// for (const key in number) {
//         console.log(key);
// }
// console.log('\n');

// number.forEach(element => {
//      console.log(element);   
// });

// number.forEach((element)=>{
        
//         console.log(element);
        
// });


// const number1 = number.map((ele)=>{
//         return ele;
// }).filter((ele)=>{
//         return ele>5
// }).reduce((acc,ele)=>{
//         return acc+ele;
// },0);

// const fruitsmix =["banana","apple","orange","mango"];
// const sortedfruits = fruitsmix.sort();

// fruitsmix.sort((a,b)=>{
//         return a-b;
// });

//console.log(fruitsmix);

//console.log(sfruit);


const ary1 = ["Cat","Boy","dog","ele","man","pot"];

 let [ar3,ar2,...ar]=ary1;

 console.log(ar3);
 console.log(ar2);
 console.log(ar);






























