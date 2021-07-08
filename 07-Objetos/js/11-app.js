const nombre = "Hola";
const precio = 20;
// En este video estaremos viendo la palabra this... (palabra reservada)
// This se refiere al valor sobre el objeto o context que se esta ejecutando en ese momento


const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    mostrarInfo: function (){
        console.log(`el producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    }
}


producto.mostrarInfo()
