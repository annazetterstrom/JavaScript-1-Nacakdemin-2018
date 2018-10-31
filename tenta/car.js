

let car = {  // skapar objektet med informationen
    name:      'Fiat',
    model:      500, 
    weight:     '850kg', 
    color:      'White', 

    start: function (){  // skapar metoder (saker bilen kan göra)
        console.log('Nu startar bilen');
    },
    drive: function (){
        console.log('Nu kör bilen');
    },
    brake: function(){
        console.log('Nu stannar bilen');
    },
    stop: function(){
        console.log('Nu har bilen stannat');
    }
   
}
car.start();
car.drive(); 
