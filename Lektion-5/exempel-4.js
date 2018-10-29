//  Konkatenering
let firstName = "Anna"; 
let lastName = " Zetterström"; 
let fullName = "Hej " +  firstName + " " + lastName; 
console.log(fullName);

x = "1" + "2"; //12
x = "1" + 2; // 12
x = 1 + "2"; // 12
x = "1" + 2 + 3; // 123
x = 1 + 2 + "3"; // 33
x = "1" + (2+3); // 15 () har alltid högre prio

// Implicit typomvandling
// Vi får en automstisk typomvandling
x = "1" - "2"; // -1

x = 1 - "2"; // -1
x = "1" - 2; //

x = "1" * "2"; // 
x = "1" / "2"; 

console.log(x);
