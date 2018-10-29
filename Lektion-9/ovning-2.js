/*Skapa en funktion som har en parameter. Ange funktionsnamnet maxArray.
Funktionen ska ta en array av ett godtyckligt antal tal.
Funktionen ska returnera det största talet i arrayen.
*/

function maxArray(biggestnum){ 
    return Math.max(...biggestnum); // Med .max måste man skriva ... det är en opperator i JS som heter spread operator
}
console.log(maxArray([10,4,5])); // 10
console.log(maxArray([4,5,15])); // 15

