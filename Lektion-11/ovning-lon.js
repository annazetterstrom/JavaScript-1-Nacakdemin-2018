/*På en arbetsplats erbjuds man följande lön.
Första dagen tjänar man en krona och sedan fördubblas lönen varje dag.
Skriv ett program som räknar ut hur länge man behöver arbeta för att tjäna ihop minst 10 miljoner kronor.*/

// Steg 1 - skapa nödvändiga variabler

let days = 1; 
let salary = 1; //1kr

// Steg 2 - Arbeta med villkoret (minst 10 miljoner)
while(salary <= 10000000){
    // Måste jobba
    days++; 
    // Lön fördubblas ry 
    salary = salary * 2; // salary *= 2     båda funkar
    console.log("Dag " + days + ", Lön: " + salary);
}

// Sluta jobba - lön är mer än 10 miljoner kr
console.log("------------while-sats---------------");
console.log("Du måste jobba " + days + " för att tjäna 10 miljoner!");

// Samma problem med for-sats istället
days = 1; 
salary = 1; 
for (days = 1 ; salary <= 10000000 ; days++){
    salary *= 2; 
}

console.log("-----------for-sats---------------");
console.log("Du måste jobba " + days + " för att tjäna 10 miljoner!")