// Array Destructuring - Al igual que los objetos algunas veces quieres crear
// la variable y el valor del arreglo, veamos algunos ejemplos:

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// destructuring con Arreglos
const numeros = [10,20,30,40,50];

const [primero, segundo, tercero] = numeros;
console.log(primero);
console.log(segundo);
console.log(tercero);
console.log('***********************')
// Si quieres saltarte un valor, pon una coma....
const [primer, ,segund, tercer] = numeros;
console.log(primer);
console.log(segund);
console.log(tercer);



console.log('***********************')
// ahora, como extraes todos los otros valores, digamos que solo quieres crear
// la primer variable, mantener el arreglo original..

const [prime, , segun, ...terce ] = numeros;
console.log(prime);
console.log(segun);
console.log(terce);
