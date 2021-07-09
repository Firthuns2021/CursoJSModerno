// En este video estaremos viendo como seleccionar elementos por su clase...

// Seleccionando el header...

                // Todos tus selectores inician con document...
// Es muy importante las mayusculas y minusculas...
const header = document.getElementsByClassName('header');
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

// si las clases existen mas de una vez
// Como las classes se pueden repetir, obviamente todas las coincidencias de classes
// se asignaran a contenedores.
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);


// Si una clase no existe, no va a retornar nada...
const noExiste = document.getElementsByClassName('no-existe');
console.log('noExiste', noExiste);

