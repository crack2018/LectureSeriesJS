// Date And Time 
// let d;

// // Get today's date and time
// d = new Date();

// // Set to a string
// d = d.toString();

// // Get a specific date
// // Important: the month is 0-based, so 0 is January and 11 is December
// d = new Date(2021, 0, 10, 12, 30, 0);

// // Pass in a string
// d = new Date('2021-07-10T12:30:00');
// d = new Date('07/10/2021 12:30:00');
// d = new Date('2022-07-10');
// d = new Date('07-10-2022');

// // Get current timestamp
// d = Date.now();

// // Get the timestamp of a specific date
// d = new Date();

// d = d.getTime();
// console.log(d);

// d = d.valueOf();

// // Create a date from a timestamp
// d = new Date(1666962049745);

// console.log(d);
let x;
let d = new Date();

console.log(d);

x = d.toString();
x = d.getTime();
x = d.valueOf();
x = d.getFullYear();
x = d.getDate();
x = d.getDay();
x = d.getHours();
x = d.getMonth();
x = d.getMinutes();
x = d.getMilliseconds();


x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
x=Intl.DateTimeFormat('en-US').format(d);
x=Intl.DateTimeFormat('en-GB').format(d);
x=Intl.DateTimeFormat('bn-IN').format(d);
x=Intl.DateTimeFormat('default').format(d);
x=Intl.DateTimeFormat('default',{month:'long'}).format(d);


x = d.toLocaleString('default', { month: 'short' });
x=d.toLocaleString('default');
x=d.toLocaleDateString('default',{
    weekday:'long',
    year:'numeric',
    month:'long',
    day:'numeric',
    hour:'numeric',
    minute:'numeric',
    second:'numeric',
    timeZone:'Asia/Kolkata'
})

console.log(x);
























