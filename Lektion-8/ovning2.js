// Skapa en array som innehåller info om dina favoritrecept (minst 2 recept)

function Recepi(namn, howToDo, ){
    this.namn = namn; 
    this.howToDo = howToDo; 
    this.ingredients = [];
}

let recepiOne = new Recepi("Kladdkaka", "Blanda alla ingredienser, häll smeten i en form och låt grädda i ugn i 15 min på 175 grader");
let recepiTwo = new Recepi("Pannkaka", "Blanda alla ingredienser och stek i en stekpanna");

recepiOne.ingredients.push("Mjöl", "Kakao", "Socker", "Smör", "Vaniljsocker", "Ägg"); 
recepiTwo.ingredients.push("Mjöl", "Mjölk", "Ägg", "Salt");

console.log(recepiOne, recepiTwo);
