// Skapa egna konstruktorer (Constructors)
// Skapa en blueprint (ritning) på en helt ny grej t.ex. personer, bilar osv.

// Exempel - Skapa en konstruktor som beskriver en person
// Person blir en ny typ (prototyp)
function Person(name, age){
    this.name = name; 
    this.age = age; 
    this.children = [];
    this.email = [];
    this.cars = [];

}

// Skapa en konstruktor (prototyp) som beskriver en bil
function Car(regnr , fabrikat ){
    this.regnr = regnr; 
    this.fabrikat = fabrikat;
}

// Skapa en instants av Car = skapa ett objekt
let c1 = new Car("ABC123" , "Volvo"); // Måste använda new för att 
// console.log(c1.regnr);
let c2 = new Car("XYZ098" , "Mazda");

// Skapa flera objekt av Person() = skapa nya instanser
let anna = new Person("Anna", 23); // Vi kan inte använda {}
let kalle = new Person("Kalle", 10); 
// Anna och kalle blir två nya referenser till två olika objekt


// Anna har köpr c1 och c2 (två bilar)
anna.cars.push(c1, c2);


// Ändra Annas egenskaper, med punktnotation (dot notation)
anna.name = "Zetterström";
anna.age++;

// Lägg till egenskaper
anna.height = 169; 

console.log(anna);
console.log(kalle);


// Skapa en array av ett antal objekt
let persons = [anna, kalle];
console.log(persons);
// Visa info om det första objektet
console.log(persons[0].name);
// Ändra namnet
persons[0].name = "Anna";
console.log(persons[0].name);

// Objektet kan innehålla arrayer
// anna.children = [];

kalle.name = "Frida"
anna.children.push(kalle);

console.log(anna);
