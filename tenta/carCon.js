/*
1. Skapa en konstruktor som beskriver en bil. Kalla konstruktorn Car.
2. Ange följande egenskaper 
• Registreringsnummer 
• Fabrikat
• Växellåda
• Miltal
• Tillverkningsår 
• Bränsle
3. Skapa två objekt som innehåller info om olika bilar.
*/

function Car(reg, model, gear, milage, year, fuel) { // funktion med parametrar som sen tar in argument från objekten nedan 
    this.reg = reg;
    this.model = model;
    this.gear = gear;
    this.milage = milage;
    this.year = year;
    this.fuel = fuel;

    this.print = function () {
        return this.reg + '\n' + this.model + '\n' + this.gear + '\n' + this.milage + '\n' + this.year + '\n' + this.fuel
    }

}

let carOne = new Car('RYY 320', 'Audi', 'Manual', 2000, '1999', 'gas');  // här skapas objekten 
let carTwo = new Car('TDZ 234', 'Citroen', 'Manual', 1500, '2017', 'gas');

console.log(carOne.print());
console.log(carTwo.print());