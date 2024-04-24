let nombre = "Ismael";
let apellidos = "Parada";
let profesion = "Desarrollador Web";

let nya = nombre + " " + apellidos + "\n" + profesion;
document.addEventListener(
  "DOMContentLoaded",
  function () {
    // Template Strings
    let plantilla = `${nombre} ${apellidos}
${profesion}

`;

    console.log(nya);
    console.log(plantilla);

    function ficha(nombre, apellidos, profesion) {
      let fichaTecnica = `

    <div class="ficha">
        <h2>${nombre} ${apellidos}</h2>
        <h3>${profesion}</h3>
        <p>Forma parte del equipo de Ismaelparada.es</p>
        </div>

    `;
      return fichaTecnica;
    }

    let cajaFicha = document.createElement("section");

    cajaFicha.innerHTML = ficha("Ismael", "Parada", "Desarrollador Web");
    cajaFicha.innerHTML += ficha("Javier", "Moreno", "Delineador");
    cajaFicha.innerHTML += ficha("Juan", "gomez", "Escritor");

    document.querySelector("#contenedor").appendChild(cajaFicha);
  },
  false
);
