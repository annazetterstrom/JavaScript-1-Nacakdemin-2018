// Switch satsen

function getDay(){

    let day; 
    let today = new Date().getDay(); 
    switch(today){
        case 0: day = "Sunday";     break; 
        case 1: day = "Monday";     break;
        case 2: day = "Tuseday";    break;
        case 3: day = "Wednesday";  break;
        case 4: day = "Thursday";   break;
        case 5: day = "Friday";     break;
        case 6: day = "Saturday";   break;

    }
    return day; 
}
console.log("Today is  " + getDay());
