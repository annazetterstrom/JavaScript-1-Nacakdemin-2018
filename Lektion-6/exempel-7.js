// Funktioner med return

function fullName_v1 (firstName, lastName){ 
    let name; 
     name = firstName + " " + lastName; 
     // OBS! funktionen returnerar en sträng
     return name; 
} // VERSION 1

function fullname_v2(firsName, lastName){
    // Snabare och proffsigare
    return firsName + " " + lastName; 
}

let name1 = fullName_v1("Anna" , "Zetterström"); 
console.log("Hej " + name1);
// eller skriv ut dirket 
console.log(fullname_v2("Anna" , "Wiktoria")); 

