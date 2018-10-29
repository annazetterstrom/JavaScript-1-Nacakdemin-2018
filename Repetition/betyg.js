
function results(){
    while(true){
let grade = +prompt("Ange vad du fick för poäng (0-45)"); 
if(grade === null)
    break; 
if(grade > 45 || grade < 0 || isNaN(grade)){
    alert('Felaktig inmatning')
    continue; 
}

let results = ''; 

if(grade < 25)
    results = "Du fick F"
else if(grade >= 25)
    results = 'Du fick E'
else if(grade >= 30)
    results = 'Du fick D'
else if(grade >=35)
    results = 'Du fick C'
else if(grade >= 40)
    results = 'Du fick B'
else if(grade >= 45)
    results = 'Du fick A'
    
    alert('Du fick betyg: ' + results + ' på provet'); 
} //Avslutar while loopen
}
results();


// Lösning med switch istället 
/*switch(true){
    case (grade >= 45):   results = 'A'; break;
    case (grade >= 40):   results = 'B'; break;  
    case (grade >= 35):   results = 'C'; break; 
    case (grade >= 30):   results = 'D'; break; 
    case (grade >= 25):   results = 'E'; break; 
    case (grade <  25):   results = 'F'; break; 

}

alert(results); */

