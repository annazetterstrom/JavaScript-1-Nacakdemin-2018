// Arbeta med konstruktioner


// Skapa ett nytt objekt med hjälp av en konstruktor
let anna = new Object(); 
// Egenskaper
anna.name = "Anna Zetterström"; 
anna.age = 23; 

// Metoder

// En metod som skriver ut info i console
anna.print = function(){
    console.log(this.name + " är " + this.age + " år gammal.");
    
}

// En metod som returnerar en sträng
anna.info = function(){
    return this.name + " är " + this.age + " år gammal.";
     // man kan använda backtikcs `

}

// Använd objektets egenskaper 
console.log(anna.name);

// Använda objektets metoder
anna.print();
let i = anna.info();
console.log(i);
console.log(anna.info());


// Repetition
// Skapa en objektliteral
let kalle = {
    name : "Kalle Anka",
    age :  45, 
    print:function(){
        console.log(this.name + " är " + this.age + " år gammal.");
    },
    info:function (){
        return this.name + " är " + this.age + " år gammal."
    }
}

kalle.mobile = "0709876998";
kalle.run = function(){
    console.log(this.name + " is running...");
}
console.log(kalle.info());
console.log(kalle.mobile);
kalle.run(); 
console.log(kalle);


// Skapa en array
let persons = ["Anna", "Kalle"];
let cars = new Array();
car[0] = "Volvo";
cars[1] = "Mazda";
cars = ["Volvo", "Mazda"];

// Sammanfattning - olika sätt att skapa ett objekt i JS
// 1. Literal notation (primitiv typ)
let vadSomHelst = {}; 

// 2. Constructor Notation (objekt)
let ettAnnatObjekt = new Object();


