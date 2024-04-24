// let frutas = ["manzana", "pera", "kiwi", "melón"];


// // let manzana = frutas[0];
// // let pera = frutas[1];

// // Desestructuración

// let [manzana, pera, kiwi, melón] = frutas;

// console.log(pera);
// console.log(kiwi);
// console.log(melón);
// console.log(manzana);

// // Desestructuración de objetos

// let heroe = {
//     name: "Faren",
//     poder: "poder",
//     ataque: "ataque",
//     defensa: "defensa",
//     hometown: "Elantris"
// };

// let {name: nombre, poder, ataque, defensa, hometown} = heroe;

// console.log(nombre);
// console.log(poder);

// Desestructuración de strings

let usuario = "Faren Skyward Rodriguez 454555941W 16/02/1987 Elantris";

let [nombre, apellido, apellido2, dni, fechaNac, hometown] = usuario.split(" ");

// Crear varias Variables

let lenguaje = 'TS', 
    framework = 'ANGULAR', 
    editor = 'VISUAL STUDIO';

    // UTILIDAD PARAMETROS FUNCIONES

function mostrarUsuario ({nombre, apellido = 'unknow', ciudad}){
    console.log(nombre, apellido, ciudad);

}

mostrarUsuario({nombre: 'raul', ciudad: 'Elantris'});