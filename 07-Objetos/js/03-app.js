// Veamos como asignar variables hacia un objeto


const producto = {
    nombre: "Monitor 20 pulgadas", // La , es importante, sin ella tendriamos un error
    precio: 30,
    disponible: true, // el último elemento puede o no tener la ,
}


// const nombre = producto.nombre;
//
// console.log(nombre);


// Otra forma de hacerlo y que también es nueva, es con algo llamado object destructuring...

// Destructuring significa, sacar de una esctructura, puede ser complejo,
// no lo es tanto sobretodo cuando lo practicas.
// ademas de extraer el dato del objeto , estamos creando una variable

const { nombre } = producto;
console.log(nombre);

const { precio,  disponible } = producto;
console.log(precio, disponible);

// si deseas extraer más variables;
// const { precio } = producto;
//
// console.log(nombre)
// console.log(precio)

// O puedes hacerlo mejor con

// const {nombre, precio} = producto;
