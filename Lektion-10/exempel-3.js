// Truthy and falsy
// Följande värden är alltid falska i JS
// 0
// null
// NaN
// false
// ''
// ""
// undefined

if(false || 0 || null || NaN || undefined || '' || ""){
    console.log("Vi kommer aldrig hit");
}

let x = ''; 
if(x === ''){ // true
    console.log("x är en tom sträng");
}

if(1){
    console.log("Vi har en etta");
}
/*
if(anna){  //Undefined 
    console.log("Välkommen Anna");
}*/

let anna = "Anna Zetterström"
if(anna){
    console.log("Välkommen Anna");
}


/*let anna; // Blir undefiend 
if(anna){ // false
    console.log("Välkommen Anna");
}
else{
    console.log("Du är inte välkommen, Anna!");
}*/

if([]){
    console.log("Vi har en array");
    // OBS! en tom array är true
}


if({}){
    console.log("Vi har ett tomt objekt");
    // OBS! ett tomt objekt är true
}

if("0"){
    console.log("Vi har en nolla");
    // OBS! Wn sträng som innehåller 0 är true
}

if("false"){
    console.log("Vi har strängen false");
    // OBS! Strängen false blir true
}

if(!NaN){ // Not Not A Number = true
    // !false
    console.log("Test på !NaN");
}
