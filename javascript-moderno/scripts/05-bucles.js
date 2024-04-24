// nuevos bucles

let nombres = [
    "luis",
    "carl",
    "adrian",
    "james"
];


//Bucle clasico
for (let i = 0; i< nombres.length; i++){
    //console.log(nombres[i])
};

//bucle for of

for (let nombre of nombres){
   // console.log(nombre);
}

//for in

for (let indice in nombres){
   // console.log(indice, nombres[indice]);
}

//foreach

//nombres.forEach((elemento, indice ) => console.log(indice, elemento) );

// iterables

const mi_iterable = nombres[Symbol.iterator]();
//console.log(typeof mi_iterable, mi_iterable);

//console.log(mi_iterable.next());
//console.log(mi_iterable.next());console.log(mi_iterable.next());console.log(mi_iterable.next());


//JSON

let fruta = {
    nombre: "manzana",
    color: "verde",
    temporada: "verano"

};

fruta[Symbol.iterator] = function(){

    let indice = 0;
    let valores = Object.values(this);

    return {
        
        next(){
            

            if (indice >= valores.length){

                return{
                    done: true,
                    value: undefined
                }
            }

            return {

                done: false,
                value: valores[indice++]

            };

    }
};
}

for(let propiedad of fruta){

    console.log(propiedad)
};

for(let propiedad in fruta){
    console.log(propiedad, fruta[propiedad]);

}
//recorrer string

/*let sitioweb = "ismaweb";

fot(let letra of sitioweb){
    console.log(letra)
};*/