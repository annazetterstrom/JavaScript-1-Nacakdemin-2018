// Några användbara metoder i Window

// 1. Prompt
let person = prompt("Vad heter du?");
//alert("Hej " + person);

// 2. setTimeout. Kör en funktion efter ett antal sekunder

setTimeout(helloPopup , 3000) // 3000 = 3 sekunder


// 3. setIntervall. Repeterar en funktion flera gånger, efter ett visst antal sekunder

setInterval(helloConsole, 1000);

function helloPopup(){
    alert("Hej " + person);
}

function helloConsole(){
    console.log(person);
}

