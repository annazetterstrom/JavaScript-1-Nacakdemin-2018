// Skapa ett objekt som beskriver din dator.
//Exempel på egenskaper Tillverkare Processor RAM-Minne Operativsystem

// objekt litteral

let computers = {
    brand:      'Macbook',     
    ramMinne:   128,
    system:     'IOS',

    printInfo:function(){
        console.log('Brand: ' +this.brand + '\nRAM-Minne: ' + this.ramMinne + '\nSystem: ' + this.system);
    }
        
    };

    computers.printInfo(); // anropar funktionen
    
   
    
