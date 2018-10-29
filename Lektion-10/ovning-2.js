/*Skapa ett program som läser in (via en prompt) priset för ett årskort, priset för en biljett
samt antalet gånger man planerar att besöka gymmet under ett år.
Där efter skall programmet visa (via en alert) om det lönar sig att köpa årskort eller inte.*/

let yearlyMembership = prompt("Vad kostar ett årskort?"); 
let ticket = prompt("Vad kostar en engångs biljett?"); 
let visits = prompt("Hur många gånger planerar du att besöka gymmet på ett år?");

let myCost = ticket * visits
let cost = ""; 
if(myCost < yearlyMembership){
   cost ="Du borde köpa engångsbiljetter";
}
else if(myCost > yearlyMembership){
    cost = "Du borde köpa ett årskort";
}

alert(cost);