// Övning 1
/*Visa aktuellt datum i detta format YYYY-MM-DD t.ex. 2018-10-12
OBS! Använd inte metoden toDateString()
*/

console.log("Dagens Datum");
let today = new Date(); 

let year = today.getFullYear();
let month = today.getMonth() +1;
let day = today.getDate(); 

console.log(year + "-" + month + "-" + day);



// Övning 2
/*Visa klockan i detta format HH:MM:SS t.ex. 14:05:10
Tips! Använd metoden toTimeString()
*/

console.log("Aktuella tiden\n");

let newTime = new Date(); 
console.log(newTime.toTimeString());



// Övning 3
/*Visa datum i detta format Dag den xx månad år t.ex.
Onsdag den 17 oktober 2018
Tips: Använd arrayer för att lagra veckodagar och månader.
*/

console.log("Dagens datum utskrivet\n");

let weekDays = ["Sunday", "Monday", "Tuseday", "Wednesday", "Thursday", "Friday", "Saturday" ]
let thisMonth = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

console.log(weekDays[3] + " " + "the " + day + " " + thisMonth[9] + " " + year );

// Övning 4
//Skapa en live digital klocka och visa den i webbläsaren!




// Övning 5
/* Avståndsformeln kan användas för att beräkna avståndet mellan två punkter i ett koordinatsystem.
Skriv ett program som läser in två punkter och beräknar avståndet mellan punkterna.
*/

