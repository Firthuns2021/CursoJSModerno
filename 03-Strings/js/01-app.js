// Los strings o cadenas de texto representan un Texto que se puede asignar a una variable
// existen 3 formas de crearlos que son más populares.


// Las otras 2 formas crean lo que se conoce como una cadena primitiva
const producto = 'Monitor 20 Pulgadas';
const producto2 = String('Monitor 24"');


// // La siguiente forma es menos común
const producto3 = new String('Monitor 30 Pulgadas'); // Esto crea un objeto cadena, uno por cada letra

console.log(producto);
console.log(producto2);
console.log(producto3);

// Veamos algunas reglas para crear los strings:
const producto4 = 'Monitor 20 Pulgadas'; // Utiliza comillas sencillas
const producto5 = "Monitor 20 Pulgadas"; // Utiliza comillas o dobles

// pero nunca las mezcles

// const producto6 = "Monitor 20 Pulgadas';

// Ejemplo con Pulgadas
const producto7 = "Monitor 24\"";

console.log(producto7);
