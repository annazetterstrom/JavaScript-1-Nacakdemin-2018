
// Övning 2

let table = "";
console.log("x\tx^2\tx^3");
for (let row = 1; row <= 12; row++) {
    let sqr = Math.pow(row, 2)
    let kubik = Math.pow(row, 3)
    console.log(row +"\t" +sqr +"\t" +kubik);

}

// Övning 4
/*
Skriv ett program som läser in ett heltal (n), via en prompt.
Kontrollera att du får ett heltal och visa lämpliga felmeddelanden vid fel.
Beräkna summan av n (dvs. 1+2+3+4+... n)
Exempel: om talet n är 5 så skall programmet räkna ut 1+2+3+4+5 = 15
Tips! Använd Number.isInteger()
*/


