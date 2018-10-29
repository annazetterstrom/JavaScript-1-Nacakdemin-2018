// Objektet Math
// let π = Math.PI // alt.p för att få π (enbart mac)
// console.log(π);
PI = Math.PI;
console.log(Math.PI);

console.log(Math.E);

console.log(Math.abs(-8769)); // 8769
// Upphöjt
console.log(Math.pow(2,2)); // 4
console.log(Math.pow(2,4)); // 2*2*2*2 = 16
console.log(Math.pow(3,2)); // 9
// Roten ur
console.log(Math.sqrt(25)); // roten ur 25 = 5

// Avrunda till närmaste heltal
let pris = 10.40; 
console.log(Math.round(pris)); //10
pris = 10.50; 
console.log(Math.round(pris)); // 11
console.log(pris.toFixed()); // Anger man inte hur många decimaler kommer den avrunda till närmsta heltal

//  Ceil och Floor
let tal = 10.10; 
console.log(Math.ceil(tal)) // 11
console.log(Math.floor(tal)); // 10


// Max och Min
console.log(Math.max(1,4,743,343,2)); // 743
console.log(Math.min(1,4,743,-343,2)); // -343




