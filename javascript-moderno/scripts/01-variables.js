// EcmaScript 2021 / ES12 /ES.NEXT

// Variable: var, let, const
// Contenedor de informacion, caja para guardar dato


//VAR: Ámbito Global, funcional
/*var nombre = "Ismael Parada WEB";

function mostrarNombre(){
    nombre= "Pepito";
    var apellidos= "Parada";
    console.log("Dentro:", nombre);
    console.log("Dentro:", apellidos);

}

mostrarNombre();
console.log("Fuera:", nombre);
console.log("Fuera:", apellidos);*/

//LET: ámbito de bloque
let pais= "España";

function mostrarPais(){
console.log(pais);
}

mostrarPais();

if(pais == "España"){
    let continente = "Europa";
    //console.log(continente);

}

//no es accesible desde fuera del bloque
//console.log('fuera:', continente);

for(contador = 0; contador <=5;contador ++ ){
// console.log(contador);

}

// console.log('contador:', contador);

//CONST: Crear constantes o variables que su contenido
// no es variable.

let edad = 18;

console.log('Edad:',edad);

edad = 12;

console.log('Edad:', edad);

const ciudad = 'Cáceres';
const fechaNacimiento = '1987';

console.log(ciudad, fechaNacimiento);



 