
// Steg 1: Läs in data
let myMinutes; 
let myPrice;
let discount = 0; 

myMinutes = prompt("Hur många minuter ringer du i snitt per månad?"); 
myPrice = prompt("Vad är din minutkostnad?"); 

// Steg 2: Beräkningar
// Beräkna total kostnad
let discountAmount = 0.10; 
let totalCost = myMinutes * myPrice;
console.log(totalCost); 

// Beräkna rabatt (10% om man har en kostand över 1000kr)
if(totalCost >= 1000){
    discount = totalCost * 0.10;
    // Beräkna ny total kostnad 
    // Okej men lite mer komplicerad:  totalCost = totalCost * (1- discountAmount); 
    totalCost = totalCost - discount; 
}

// Steg 3: Visa resultatet
let myCost = "Din kostnad per månad är : " + totalCost + "kr"; 
myCost += "\n"; 
myCost += "Din rabatt är : " + discount + "kr"; 

alert(myCost); 
