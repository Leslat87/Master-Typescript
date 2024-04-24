// operador ternario

let persona = ["Ismael Parada", 17];


// Condicion clásica
if(persona[1] >= 18){
    console.log("es mayor de edad");
}else{
    console.log("es menor de edad")
};

// Operador ternario

let edad = (persona[1] >=18) ? "es mayor de edad" : "es menor de edad";
console.log(edad);

let exist = persona ? "existe" : "no existe";
console.log(exist);

// Diferencia entre == y === y != y !==

let edad1 = 80;
let edad2 = "80";

let edadcompar =(edad1 !== edad2) ? "edades iguales" : "edades distintas";
console.log(edadcompar);