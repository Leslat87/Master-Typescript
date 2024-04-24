// Spread


let heroes = ["Batman", "Superman", "Hulk", "Boundman"];

console.log(...heroes);

function mostrarHeroes (heroe1, heroe2) { 
    console.log(`
        **** Mïs dos heroes favoritos***
        - ${heroe1}
        - ${heroe2}
        fin.
    `);
} 

mostrarHeroes(...heroes);

let superheroes = ["snakeman","cataman", ...heroes];

console.log(superheroes)


// REST

function peliculas(pelicula1, pelicula2, ...peliculas){
        console.log(pelicula1);
        console.log(pelicula2);

        for (pelicula of peliculas){
            console.log(pelicula);
        }
}

peliculas("ESLA", "UFO", "Pelicula Imposible", "La Pelicula 4", "Dracula 5");