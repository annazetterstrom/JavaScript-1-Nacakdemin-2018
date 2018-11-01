
function getTime(){
    let el = document.getElementById('time'); // sparar frågan till trädet så vi bara frpgar en gång! ökar prestandan
    setInterval(function(){
        el.innerHTML
     = new Date().toTimeString().substring(0,8);
    }, 1000 ) // sätter intervallen i millisekunder 
    // annars blir det en dyr opperation för att den uppdateras varje millisekund
   
}

// InnerHTML ändrar html taggen
// toTimeString gör om datumet till en string
// substring() kan man välja ut vilka tecken som ska visas (nollrelativt)