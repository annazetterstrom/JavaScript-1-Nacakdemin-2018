/*
Skapa en konstruktor som heter Dog .Skapa tre instanser av Dog enligt nedan...
Breed, size, age, color

eat, sleep, sit, run
*/

function Dog (breed, size, age, color){
    this.breed = breed; 
    this.size = size; 
    this.age = age; 
    this.color = color;
    
    this.eat = function(){
        console.log('Hunden äter');
    }
    this.sleep = function(){
        console.log('Hunden sover');
    }
    this.sit = function(){
        console.log('Nu sitter hunden');
    }
    this.run = function(){
        console.log('Nu springer hunden');
    }

    this.print = function(){
       console.log(this.breed + '\n' + this.size + '\n' + this.age + '\n' + this.color);
    }

}

let dogOne = new Dog('Nepolitan Mastiff', 'Large', '5 år', 'Black'); 
let dogTwo = new Dog('Maltese', 'Small', '2 år', 'White'); 
let dogThree = new Dog('Chow Chow', 'Medium', '3 år', 'Brown');

dogTwo.print(); 
dogTwo.eat(); 