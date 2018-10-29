//Skapa en funktion som har en parameter. Ange funktionsnamnet capitalize
// Funktionen ska ta en sträng och ändra den första bokstaven till versal


// Version 1
capitalize = function(str){
    // Den första bokstaven
    let firstChar = str.charAt(0);
    // Omvandla första tecknet till versal
    firstChar = firstChar.toUpperCase();
    // Hämta resten. Från tecken 2 (index 1) till slutet
    let resten = str.slice(1);
    // Skapa en ny sträng
    let result = firstChar + resten; 
    return firstChar + resten; 
    }
let test = "hej jag behöver hjälp!"; 
console.log(capitalize(test));


// Version två
capitalize_v2 = function(str){
    return str.charAt(0).toUpperCase() + str.substring(1);
}
let test2 = "hej jag behöver hjälp!"; 
console.log(capitalize_v2(test2));

