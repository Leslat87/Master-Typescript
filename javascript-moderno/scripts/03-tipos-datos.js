// String
let nombre = "Ismael Parada";

// Number
let numero = 14;
let decimal = 3.2;


// Boolean / boleano
let mayor_edad = true;
let menor_edad = 0; // 1 es true, 0 es false

// Array
let paises = ['España', 'Mexico', 'Colombia', 'Argentina'];

// Null
let vacio = null;

//Undefined

let nodefinido = undefined;

// JSON - Javascript Object Notation - Objetos literales

let pelicula = {

    clave: "valor",
    titulo: "Space Jam",
    genero: "animacion",
    year: 2002,
    director: "Tarantino",
    mostrar: function(){
        return `
            ***** La pelicula de la semana *****
            Titulo:  ${this.titulo} - ${this.genero} \n
            Indefinido: ${this.pelicula}

            Año: ${this.year} \n
            Director: ${this.dir}
        
        `
    }
};

pelicula["pais"] = "Estados Unidos";
delete pelicula.director;
//delete pelicula['year'];
pelicula.genero = null;


//console.log('year' in pelicula);

for(let propiedad in pelicula){
    let dato_actual = pelicula[propiedad];
    if (dato_actual !== null && typeof(dato_actual) !== "function"){
console.log(pelicula[propiedad]);
    }
}




/*
console.log(typeof nombre,
    typeof numero,
    typeof decimal,
    typeof mayor_edad,
    typeof menor_edad,
    typeof paises,
    typeof paises[1],
    typeof vacio,
    typeof nodefinido
);*/

//. Symbol

let animal = Symbol("tigre");
let animal2 = Symbol("tigre");

let user = {
    id: 1,
    nombre: "Ismael", 
    web: "Ismaelweb.com"

}

let id = Symbol('id');
user[id] = 7;


console.log(user);

