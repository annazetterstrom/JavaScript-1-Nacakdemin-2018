// Arbeta med objekt i JS

// Objektlitteral (Object Litterla)
// Skapa objekt med hjälp av {}

let car = {};
let kalle = {}; 

let anna = {
    // Egenskaper (man måste sätta komma efter varje)
    name        : "Anna Zetterström", 
    age         : 23,
    isMarried   : false,
    children    : [],
    weight      : 65, 
    // Metoder
    printInfo:function(){
        console.log(this.name + " är " + this.age + " år gammal!");
    }
        

};

console.log(anna); // Skriv ut hela objektet
anna.printInfo(); 


anna.age++; // öka med ett
anna.age += 1; 
anna.age = anna.age + 1; 

anna.age--; // minska med ett
anna.age -= 1; 
anna.age = anna.age - 1; 

// Ta bort egenskap
delete anna.weight; 
console.log(anna.weight); // undefined
console.log(anna);

// Lägg till egenskap
anna.height = 169; 
console.log(anna);


