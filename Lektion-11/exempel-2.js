// While-satsen

let i = 1; 

while (i<=10) {
    console.log(i + " x 5 =" + i*5);
    i++; 
}
console.log("---------------------");

// Skriv koden ovan i for-sats istället 
for (let i = 1; i<=10; i++) 
    console.log(i + " x 10 =" + i*5);
    
// Break-satsen

while(true){
    let name = prompt("Vad heter du?");
    if(name === null){
        alert("Hejdå");
        break;
    }
    alert("Välkommen " + name);
} // Slut på while-satsen
// Hit kommer vi när vi break exekveras




