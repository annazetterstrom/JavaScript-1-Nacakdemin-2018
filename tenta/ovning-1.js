/*Skapa en array som innehåller en lista över dina favoritböcker. Skriv ut den första boken.
Skriv ut den sista boken.
Skriv ut alla böcker i konsolen i sorterad ordning.
Skriv därefter ut antal böcker.
*/
let myFavoriteBooks = []; 
myFavoriteBooks  = ['Bok5', 'Bok2', 'Bok3', 'Bok4']; 
console.log(myFavoriteBooks[0]);
console.log(myFavoriteBooks.sort());
console.log(myFavoriteBooks.length); 


console.log('---------------------------');

/*Skapa en funktion som heter hello Funktionen visar meddelandet
”Hello World”
i konsolfönstret. Anropa funktionen 5 gånger.
*/
function hello(){
    for (let i = 0; i < 5; i++) {
        console.log('Hello world');
    }
    
}
hello(); 

console.log('----------------------------');
/*
 1. Skapa en funktion som beräknar summan av två tal.
 2. Skapa en funktion som beräknar summan av tre tal.
 */

 let tal1 = 2; 
 let tal2 = 3; 
 let tal3 = 8; 
 function sum(){
    let sum = tal1 + tal2 + tal3
    console.log(sum);
 }
 sum(); 

 console.log('---------------------------');
 /*
 1. Skapa en funktion som beräknar medelvärdet av två tal
 2. Skapa en funktion som beräknar medelvärdet av tre tal.
 */
 let number1 = 8; 
 let number2 = 4; 
 let number3 = 5; 
 function average(){
     let average = (number1 + number2 + number3) /3; 
     console.log(average);
 }
 average(); 

 console.log('--------------------------');
// Skriv ut alla jämna tal mellan 1 och 20

    for (let i = 1; i < 20; i++) {
        if(i % 2 === 0)
        console.log(i);
    }
 
    console.log('-------------------------');
    // Skriv ut alla tal mellan 1 och 100, men enbart tal som är jämnt delbart med 5.

    for (let i = 1; i < 100; i++) {
        if(i % 5 === 0)
        console.log(i);
    }

/*
På en arbetsplats erbjuds man följande lön.
Första dagen tjänar man en krona och sedan fördubblas lönen varje dag.
Skriv ett program som räknar ut hur länge man behöver 
arbeta för att tjäna ihop minst 10 miljoner kronor.
*/

days = 1; 
salary = 1; 
for (days = 1 ; salary <= 10000000 ; days++){
    salary *= 2; 
}

console.log("Du måste jobba " + days + " dagar för att tjäna 10 miljoner!")
