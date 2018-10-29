// Arbeta med Javascripts globala objekt


// Varning
/* Om du deklrerar variabler
som råkar ha samma namn som objektets egenskaper 
då skriver du över dessa egenskaper
Lösning: använd let istället.
*/
var innerWidth = 100; 
var innerHeight = 200; 

function demo(){
    console.log(this.innerWidth + "px");
    console.log(this.innerHeight + "px");
    // this pekar på ett objekt som heter window (i webbläsaren)
}
// demo();


// Två bra metoder i objektet window 