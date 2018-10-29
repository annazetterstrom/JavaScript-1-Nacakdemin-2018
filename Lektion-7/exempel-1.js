// Scope (räckvidd)

// Lokala variabler

{
    let x = 10; 
    console.log(x);
}

// console.log(x); // ReferenceError x finns inte utanför kodblocket 

{
    var y = 10; 
    console.log(y);
}

console.log(y);
console.log("----------Lokala variabler-------------");

// Variabler inne i funktioner är alltid lokala
// Detta är viktitigt att förstå
function demo(){
    var local_1 = 1;
    let local_2 = 2;
    console.log(local_1);
    console.log(local_2);
 }
 demo();
//  Att skriva ut lokala variabler utanför funktionen => ERROR
//  console.log(local_1); // ReferenceError: local_1 is not defined
//  console.log(local_2); // ReferenceError: local_2 is not defined

console.log("----------Globala variabler---------------");

// Globala variabler (The Global Scope) undvik globala variabler

var global_1 = 10; 
let global_2 = 20;
console.log(global_1);
console.log(global_2);

console.log("---------Globala och lokala variabler----------");

var global_3 = "En global variabel"; 

function demo2(){
    let local_3 = "En lokal variabel";
    // OBS! om du glömmer let/var så skapar JS en global variabel
    console.log(local_3);
}
demo2();
console.log(global_3);
console.log(local_3); // ReferenceError: local_3 is not defined
