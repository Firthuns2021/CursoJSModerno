// Al Igual que los objetos un arreglo se puede modificar a pesar de utilizar la
// palabra const

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

console.log(meses);
// meses[0] = 'Nuevo Mes' -> me pisa la posicion [0] del array, desapareciendo 'enero'
meses.unshift('Nuevo Mes')

// También se puede añadir al final
// meses[meses.length +1] = 'Ultimo Mes'; // me lo
meses.push('último més');
// Al igual que los objetos en los arrays existen métodos que son bastante útiles,
// así que veamos algunos ejemplos en los siguientes videos.

console.log(meses);
