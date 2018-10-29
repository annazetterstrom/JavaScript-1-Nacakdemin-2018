// Objektet Date. Datum och tid i JS

// Skapa en instans av objektet Date 
let today = new Date(); 
console.log(today);
console.log(today.getFullYear());
console.log(today.getMonth()); // 9 vilket betyder oktober, indexeringen börjar på 0
console.log(today.getDate()); // 17, 17 oktober idag (dagar börjar indexeringen på 1)
console.log(today.getDay()); // 3, onsdag (0:Sun. 1:Mon, osv)


console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());


console.log(today.toDateString());
console.log(today.toTimeString());
