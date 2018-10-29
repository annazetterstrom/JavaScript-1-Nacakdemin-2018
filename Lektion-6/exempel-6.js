// Deklarera en funktion med en parameter
function hello(message = "Welcome to my site!"){ // (defualt parameter) standard parameter (welcome to my site)

    console.log(message);

}

// Anropa funktionen
hello("Här kommer ett meddelande nr 1!");
hello("Här kommer ett meddelande nr 2!");
hello("Här kommer ett meddelande nr 3!");
// Data som skickas vid anropet kallas argument!

hello(12345); 
hello(true); 
hello();    //unddefined! Löser det med en förvald parameter (defualt parameter)

// Funktioner med två parametrar
// Skapa en funktion som beräknar summan av två tal
function sum(x = 0 , y = 0){

    console.log(x+y);

}

sum(7,9); 
sum (); 

