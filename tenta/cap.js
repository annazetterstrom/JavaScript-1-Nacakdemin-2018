/*
Skapa en funktion som har en parameter. Ange funktionsnamnet capitalize
Funktionen ska ta en sträng och ändra den första bokstaven till versal.
Exempel på anropet av funktionen
*/
 
function capitalize(par){
  return par[0].toUpperCase() + par.substring(1,par.length); /* indexerar strängen och gör den första till storbokstav
  samt skriver ut resten av ordet. 1, par.length visar att det ska fortsätta på andra bokstaven 
  och sen skriva ut så långt som ordet är.
*/
}
console.log(capitalize('hejsan')); 

