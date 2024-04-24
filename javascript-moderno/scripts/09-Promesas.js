let productos =[
{
    nombre:"ordenador portatil",
    marca: "MSI",
    precio: 1800
},
{
    nombre: "telefono",
    marca: "xiaomi mi 10",
    precio: 1000
},
{
    nombre: "camara fotografica",
    marca: "canon",
    precio: 2000
}

];

function mostrarProductos() {
    return new Promise((resolve, reject) => {
    console.log("Mostrando productos...");
    setTimeout (() => {
    resolve(productos);
    //reject(Error("A problem occured"))
    }, 3500); 
});

}

function productoComprado(nombre) {
    return new Promise((resolve, reject) => {
        console.log("Comprando productos...")
         
        setTimeout(() => {
            resolve({
                producto: nombre,
                cliente: "Ismael Parada",
                precio: productos[0].precio
            });
            // recject(Error("A problem occured"))
        }, 2000);;    
    });

}

function procesarVenta(venta) {
    console.log("Producto comprado: ", venta); 

    productos = productos.filter(producto => {
       return producto.nombre != venta.producto
    });

    return productos;
}

mostrarProductos()
    .then(items => {
        console.log("Productos disponibles", items);
        return productoComprado("ordenador portatil");
    }) 
    .then(venta => {
        procesarVenta(venta);
        return productoComprado("telefono");
    }) 
    .then(venta => {
        procesarVenta(venta);
        return productoComprado("camara fotografica");
    }) 
    .then(venta => {
        procesarVenta(venta);   
    })
    .catch(error => console.log(error.name))
    .finally((items) => {
        
       if(productos.length >= 1){
        console.log("Productos que quedan disponible: ", productos)
       }else{
        console.log("No hay productos disponibles")
    }
        
        
        console.log("Finalizando ...")
    });
;