// Arbeta med objektet Number

let PI = 3.14159;
console.log(typeof PI);

// Avrunda till två decimaler
console.log(PI.toFixed(2));
console.log(PI.toPrecision(2));


// Visa Max-värdet på ett nummer i JS
console.log(Number.MAX_VALUE);
console.log(-Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(-Number.MIN_VALUE);
console.log(Number.MAX_VALUE * 2); // Infinity
console.log(-Number.MAX_VALUE); // -Infinity


// NaN
let x; 
console.log(x); // undefined
x = x+2;
console.log(x); // NaN
//  Statiska metoder
console.log(Number.isNaN()); // false
console.log(Number.isNaN(x)); // true



