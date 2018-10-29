// Arbeta med inbyggda globala JS-Objekt

// Objektet String

let firstName = "Anna"; 
console.log(typeof firstName); // typen är string

let antal = firstName.length;

console.log(antal); // 4

// Konvertera till gemener
firstName.toLowerCase(); // Ej lagrat i firstName aka inget kommer hända
console.log(firstName);
// OBS! Vi måste lagra resultatet
firstName = firstName.toLowerCase(); // anna
console.log(firstName);

firstName = firstName.toLocaleUpperCase(); // ANNA
console.log(firstName);


// Konkatenering 
let lastName = "Wiktoria Zetterström"; 
let fullName = firstName.concat(" ", lastName); // Plussar ihop strängar
// let fullName = firstName + " " + lastName;
console.log(fullName);

// Substring()
console.log(fullName.substring(0,6));
console.log(fullName.substring(7));
let space = fullName.indexOf(" ");
console.log(space);
console.log(fullName.substring(space+1));

// Substr()
// "Anna Wiktoria Zetterström"
console.log(fullName.substr(5,8)); // Wiktoria

// Strängar i JS indexeras som samma sätt som arrayer
console.log(fullName[0]); //A
// Skriv ut sista tecknet i strängen
console.log(fullName[fullName.length-1]); // m

// Skriv ut index på första mellanslaget
console.log(fullName.indexOf(" "));

// Skriv ut index på första mellanslaget
console.log(fullName.lastIndexOf(" "));


let newName = "Kalle Anka ";
console.log(newName.indexOf(" ")); // 5 
console.log(newName.lastIndexOf(" ")); // 10 varför?

console.log(fullName.charAt(2)); // 0=A 1=N 2=N


// Split
// Metoden split() skapar en array
let nameArray = fullName.split();
console.log(nameArray); // Skriver ut hela strängen i en array
nameArray = fullName.split(""); // OBS en tom sträng
console.log(nameArray);  // A',
nameArray = fullName.split(" "); // OBS! mellanslag
console.log(nameArray);
fullName = "Anna;Wiktoria;Zetterström";
nameArray = fullName.split(";"); // [ "Anna", "Wiktoria", "Zetterström"]
fullName = "Anna|Wiktoria|Zetterström"; 


fullName = "   Anna Wiktoria Zetterström"; 
fullName = fullName.trim(); 
nameArray = fullName.split(" "); 
// Chaining. En sats istället för två föregående satser
nameArray = fullName.trim().split(" "); 
console.log(nameArray);

// Rensa alla mellanslag men behåll ett
fullName = "   Anna Wiktoria Zetterström ";
console.log(fullName);
nameArray = fullName.replace(/ +/g , ""); // RegExp (Överkurs)
console.log(nameArray);


fullName = "Anna;Wiktoria;Zetterström";
// byt ut ; mot mellanslag
fullName = fullName.replace(";", " ");
console.log(fullName);



// Escape-tecken
// \n new line
// \" för att visa" i en sträng
console.log("Hej \nVälkommen till \"JS\".\n\nIdag har vi jobbat med string\n\n");
console.log("Hej och välkommen till \'JS\'");
console.log("Namn E-post"); //Utan tab
console.log("Anna anna.wiktoria@me.com"); //Utan tab
console.log("Namn\tE-post"); // Snyggare
console.log("Anna\tanna.wiktoria@me.com"); //Snyggare

 















