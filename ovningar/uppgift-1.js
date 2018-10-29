//  Skriv en funktion "welcome" som skriver ut "V\'e4lkommen!" i consolen.\par

function welcome() {

}
console.log("Välkommen");

// Skriv en funktion med ett argument "name". Funktionen ska skriva ut "V\'e4lkommen name!" i consolen.\par

function hello(name) {
    console.log("Välkommen " + name + "!");
}
console.log("Anna");

// Skriv en funktion som tar in tv\'e5 tal, "num1" och "num2". 
// L\'e5t funktionen skriva ut summan av de tv\'e5 talen i consolen.\par

function sum(num1, num2) {
    console.log(num1 + num2);
}
sum(1, 4);


// Skriv en funktion  som tar in två tal, "num1" och "num2". 
// Låt funktionen skriva ut "num1+num2=summan" 
// dvs om num1 = 1 och om num2=2 s\'e5 ska det st\'e5 "1+2=3" i consolen.\par

function sum(num1, num2){
    console.log(num1 + "+" + num2 + "=" + (num1+num2));
}
sum(1,4);

// Skriv en funktion som läser in två tal, "num1" och "num2". 
// Låt funktionen skriva ut "num1^num2=ans" i consolen. 

function tal(num1, num2){
    console.log(num1 + "^" + num2 + "=" + Math.pow(num1,num2));
}

tal(1,4)

// Skriv en funktion som tar in ett tal och returnerar samma tal men utan decimaltecken.
//  Ex: 3.1 ska bli 3 och 4.7 ska bli 4.

function cut(num){
    console.log(Math.round(num));
}
cut(3.7);

// Skriv en funktion utan argument som returnerar ett slumpmässigt heltal mellan 1 och 10

function ran(){
    return Math.floor(Math.random()*10+1)
}
console.log(ran());