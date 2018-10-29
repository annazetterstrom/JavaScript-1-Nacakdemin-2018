let elevator = {
    whichFloor: "floor",

goTo: function(a){
console.log("Du är påväg till våning: " + a);
this.whichFloor = a; 

},

where:function(){
    console.log("Du är på våning: " + this.whichFloor);
}

};
elevator.goTo(2); 
elevator.where();
