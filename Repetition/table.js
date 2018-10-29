

function print(){
    let tab = ('x \t x^2 \t x^3 \n');
for(let x = 1 ; x <= 12 ; x++){
    tab += x + ' \t ' + x*x + ' \t ' + x*x*x + '\n';
}
return tab; 
}
console.log(print());

