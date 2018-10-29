/* Visa aktuellt datum i detta format YYYY-MM-DD
Använd inte metoden toDateString(); */


// Skapa ett datum objekt 
let now = new Date();  // Hämtar aktuellt datum
// now = new Date("2019-01-01"); 
console.log(now); 

// Hämta år
let year = now.getFullYear(); 
console.log(year);

// Hämta månad
let month = now.getMonth() + 1; 
if(month<10){
    month = "0" + month;  // Sträng plus number returnerar en sträng 
}
console.log(month);

// Hämta dag
let day = now.getDate();
if(day<10){
    day = "0" + day;
}
console.log(day);

// Skapa en sträng i detta format YYYY-MM-DD
let today = year + "-" + month + "-" + day; 

console.log(today);

/* Visa aktuellt datum i detta format YYYY-MM-DD
Du måste använd metoden toDateString(); 
OBS! Använd inte metoderna getFullYear(), getMonth och getDate()*/

// Steg 1 - Skapa ett datumobjekt

let today2 = new Date(); 
let today2Str = today2.toDateString();
console.log(today2.toDateString());

// Hämta år från strängen 'Fri Oct 26 2018'
let y = today2Str.substring(11);
console.log(y);

// Hämta dag från strängenm 'Fri Oct 26 2018'
let d = today2Str.substring(8,10); 
console.log(d);

// Hämta månad från strängenm 'Fri Oct 26 2018'
let m = today2Str.substring(4,7);
switch(m){
    case 'Jan' : m = '01'; break;
    case 'Feb' : m = '02'; break;
    case 'Mar' : m = '03'; break;
    case 'Apr' : m = '04'; break;
    case 'May' : m = '05'; break;
    case 'Jun' : m = '06'; break;
    case 'Jul' : m = '07'; break;
    case 'Aug' : m = '08'; break;
    case 'Sep' : m = '09'; break;
    case 'Oct' : m = '10'; break;
    case 'Nov' : m = '11'; break;
    case 'Dec' : m = '12'; break;

}
console.log(m);

// Skapa strängen
let result = y + '-' + m + '-' + d;
console.log(result);

/* 
Visa aktuellt datum i detta format
YYYY-MM-DD t.ex. 2018-10-26
*/
console.log(new Date().toLocaleDateString());


/* 
Visa klockan i detta format HH:MM:SS t.ex 14.05.10
Tips använd metoden toTimeString()
*/
datum = new Date(); 
console.log(datum.toTimeString().substring(0,8));


/* Vissa datum i detta format 
Dagen den xx månad år t.ex 
Onsdagen den 17 oktober 2018
Tips: Använd arrayer för att lagra veckodagar och månader
*/
datum = new Date(); 
console.log(datum);

year = datum.getFullYear(); // 2018
month = datum.getMonth(); // 9 (0-11)
date = datum.getDate();  // 26 (1-31)
day = datum.getDay(); // 5 (0-6)
console.log(year, month, date);

let monthArray = [
    'januari',
    'februari', 
    'mars', 
    'april', 
    'maj', 
    'juni', 
    'juli', 
    'augusti', 
    'september', 
    'oktober', 
    'november', 
    'december'
];

let weekdays = [
    'söndag',
    'Måndag', 
    'Tisdag', 
    'Onsdag', 
    'Torsdag', 
    'Fredag',
    'Lördag'
];

day = weekdays[day];

month = monthArray[month];

result = day + ' den ' + date + ' ' + month + ' ' + year
console.log(result);


// Skapa en liveklocka
