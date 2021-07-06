// .toUpperCase() te va a permitir cambiar un texto a to.do mayusculas
const producto = 'monitor 24 pulgadas ';
console.log(producto.toUpperCase() );

// .toLowerCase()
console.log(producto.toLowerCase() );

// .toString()
const cantidad = 200;
console.log(cantidad);
console.log(cantidad.toString());

console.log(`${producto.charAt(0).toUpperCase()}${producto.slice(1,producto.length)}`);


/** Expresiones Regulares */
console.log('tu cadena de texto'.replace(/\b\w/g, l => l.toUpperCase()));
