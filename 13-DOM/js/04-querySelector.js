

//  querySelector va a retornar máximo 1 elemento, si hay múltiples coincidencias
//  sólo va a retornar el primero...
// QuerySelctor utiliza una sintaxis como de selector de CSS,
// por lo tanto si deseas seleccionar una clase, debe tener un punto al inicio...
const card = document.querySelector('.card');

// nota como a pesar de tener múltiples cards, solo selecciona 1

console.log('card',card);

// al ser una sintaaxis tipo CSS puedes utilizar selectores más especificos...

const info = document.querySelector('.premium .info');
console.log('info', info);
// console.log('premium', premium);

// Seleccionar el segundo card... de hospedaje
const segundoCard = document.querySelector('.hospedaje .card:nth-child(2)');
console.log('segundoCard', segundoCard);

// Ahora estas son classes, veamos como seleccionar un ID
// En CSS seleccionas los ID con un signo de numeral..
const formulario = document.querySelector('#formulario');
console.log('formulario',formulario);
// También los ID pueden tener selectores especificos como el de arriba,
// pero recuerda un ID es único asi que no tendría mucho sentido no?

// Si un selector no existe,
const noExiste = document.querySelector('#no-existe');
console.log('noExiste', noExiste);

// Recuerda que también en CSS puedes seleccionar etiquetas asi que si quieres
// seleccionar la navegación podrías tener algo asi:
const nav = document.querySelector('nav');
console.log('nav', nav);
