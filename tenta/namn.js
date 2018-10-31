/* Skapa ett program som läser in ett namn via en prompt.
Skicka namnet till en funktion som returnerar följande hälsningsfras.
”Hello namn!”.
Visa meddelandet på webbsidan.
(ej alert eller console).
*/

let elName = document.getElementById("name");  // Detta är för att kunna använda inner.HTML för att skriva ut det på sidan

let name = prompt('Vad heter du?'); 

function namn(){
    elName.innerHTML = 'Hello ' + name; // inner.HTML skirver ut på sidan
    
}
 namn(); // Kallar på funktionen


