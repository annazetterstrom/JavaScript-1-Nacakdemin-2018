let score = 40; 

// If satsen
if(score >= 50){
    congratulate();
}
// If -else satsen
else{
    encourage();
}

function congratulate(){
    console.log("Congratulations!");
}

function encourage(){
    console.log("Have another go!");
}

// If... else-if-satsen

let hour = new Date().getHours(); 
// console.log(hour);
let greeting = " "; 
if(hour < 12){
    greeting = "God morgon!";
}
else if(hour < 17){   // Går att skriva bara if 
    greeting = "God dag!"; 

}
console.log(greeting);


// == eller ===
/*let x = "5"; // eller "5"
console.log(typeof x); // string

let y = 5; 
console.log(typeof y); // number

if(x == 5){             // Farligt!!
    console.log(x + 5); // 55. inte addition utan  concat 
}

if(y==5){               // ok men..
    console.log(y + 10); // 15
}

if(y===5){          // False
    console.log(x + 2);
}*/


// Ternary-operator  ? :
// Vilkor ? om sant: om falskt
function getFee(isMember){
    return (isMember ? "20kr" : "100kr");  // () inte obligatoriskt men tydligare
}
// Omvandla functionen till if-else 
// exakt samma funktion med if-else istället för ternary
function getFeeVersion2(isMember){
    if(isMember){
        return "20kr";
    }
    else{
        return "100kr";
    }
}
// Samma men utan klamrar (funkar bara om if-satsen bara har en sats)
function getFeeVersion3(isMember){
    if(isMember)
        return "20kr";
    else
        return "100kr";
    
}
console.log(getFee(true));
console.log(getFee(false));
