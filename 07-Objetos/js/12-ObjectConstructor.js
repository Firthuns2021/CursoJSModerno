
// object literal
const producto = {
    nombre: "Monitor 20\" ",
    precio: 30,
    disponible: true,
    mostrarInfo: function() {
        return `El Producto: ${this.nombre}  tiene un precio de ${this.precio}`;
    }
}

console.log(producto.mostrarInfo() );

// object contructor
function Producto( nombre, precio){
    this.nombre = nombre;
    this.precio = precio;

}

const producto2 = new Producto('Monitor  30" ', 450);
console.log(producto2)
// const producto7 = "Monitor 24\"";
const producto3 = new Producto('Television', 300);
console.log(producto3)
