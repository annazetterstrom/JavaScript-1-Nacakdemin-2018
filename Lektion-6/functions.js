// Deklarera en funktion
hej(); // OK

function hej(); {
    alert('Hej från filen functions.js');
}

hej2(); // FEL!!! 
// Vi får inte anropa anonyma funktioner före funktionsuttrycket

// Anonym funktion (saknar namn)
let hej2 = function(){
    alert ('Hej från en anonym funktion.');
}

// Detta kallas att skapa ett uttryck med hjälp av en funktion
// Function express 
