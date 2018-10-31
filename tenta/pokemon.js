
let pokemon = {
    name:   'Pikachu',
    type:   'Electric',
    health: 70,

    attack: function(){
        console.log('Nu attackerar Pikachu');
    },
    dodge: function(){
        console.log('Nu duckar Pikachu');
    }, 
    evolve: function(){
        console.log('Nu utvecklas Pikachu');
    }
}
pokemon.attack();