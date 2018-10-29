function meddelande(){
    console.log("Jag har anropats!");
}

meddelande(); 
meddelande();
meddelande();

// Skapa en funktion med två parametrar, förnamn och efternamn
// Funktionen visar meddelandet "Hej förnamn efternamn!" i console.

function namn(firstName, lastName){
    
    console.log("Hej " + firstName + " " + lastName + "!");

}

namn("Anna", "Zetterström");

// Skapa en funktion som multiplicerar två tal
function multiply(a=0,b=0){
    console.log("***** Multiply ******");
    console.log(a*b);
    console.log("*********************");

}

multiply(10,5); // 50
multiply(); //NaN (0 när man väljer förvalda parametrar)
multiply(100); //NaN
multiply("TEXT", 50); // NaN
multiply();   // 0 pga förvalda parametrar

// En egen log-funktion
function log(text){
    console.log("***************");
    console.log("*" + text);
    console.log("****************");

}

log("Hej Anna!")

// En funktion som anropar en annan funktion
function hello3(msg){
    log(msg);
} 

hello3("Lite info och annat..."); 


// Funktioner med tre parametrar
function age(firstName, lastName, age){
    console.log(firstName + " är " + age + " år gammal!");

}

age("Anna" , "Zetterström" , 23); 
age("Kalle" , "Anka" , 35); 

// En funktion med ett godtyckligt antal parametrar
function manyThings(...things){ // ... skapar en array
    console.log(things);
}
manyThings(1); 
manyThings(1,2); 
manyThings(1,2,3); 
manyThings("Anna", "Kalle", "Emma"); 
manyThings("Anna", "Zetterström", 23); 
manyThings(); 

// Övning 1 a
function medelvarde(a, b){
    console.log((a+b)/2);

}
medelvarde(4,8); 


// Övning 1 b
function medelvarde2(a, b, c){
    console.log((a+b+c)/3);
}
medelvarde2(4,8,10); 

// Övning 2 



