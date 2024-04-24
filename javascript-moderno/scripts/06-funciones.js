
// Parametros por defecto
function saludo(persona = "Juan"){
    let yer =2022;
    let resta = 30 - 5;

    console.log("te mando un saludo a " + persona +  " en el año " + yer + " hay una resta de " + resta + " dias");


}

saludo();


//Funciones Flecha

let saludo2 = function(nombre){

    return "hola, te mando un saludo a " + nombre;


}

console.log(saludo2("Juan"));

let saludo3 = nombre => "hola, te mando un saludo a " + nombre;

console.log(saludo3("Juan"));

let saludo4 = (nombre, pais) => "hola, te mando un saludo a " + nombre + " en el pais " + pais;

console.log(saludo4("Juan", "España"));

let saludo5 = (nombre, pais) => {
    let continente = "Europa";
  
    if (pais == "España") {
      continente = "Europa";
    } else if (pais!== "España") {
      continente = "Asia";
    }
  
    return "hola, te mando un saludo a " + nombre + " en el pais " + pais + "y el continente es " + continente;
  };

  console.log(saludo5("Juan", "España"));

  // Resumen 

  let multiplicacion = (a, b) => console.log(a * b);

  multiplicacion(2, 3);

  // JSON

  let tienda = {
    nombre: "GAME",
  videojuegos: ["gta", "Fifa", "FFVII"],
  mostrar: function () {
      console.log(this.nombre);
  },

  mostrar2(){
    this.videojuegos.forEach(juego => {
    if (juego === "FFVII") {
      console.log("el mejor juego de la historia: ");
  
  }

  console.log(juego);

});
  },
  mostrar3: () =>{
    console.log(tienda.nombre);


  }


};

tienda.mostrar();
tienda.mostrar2();

