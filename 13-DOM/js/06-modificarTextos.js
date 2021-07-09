// Seleccionar elementos del DOM nos va a permitir modificar nuestro HTML y hacerlo más interactivo..

// Veamos por ejemplo como modificar el texto de la parte superior..

// Primero tenemos que seleccionarlo...

const encabezado = document.querySelector('.contenido-hero h1');

console.log("%cencabezado: %o", "color: red ;",encabezado);

// Si deseas acceder al texto hay 3 formas de hacerlo...
console.log( "%cinnerText: %o", "color: red ;", encabezado.innerText);
console.log("%ctextContent: %o", "color: red ;",encabezado.textContent);
console.log("%cinnerHTML: %o", "color: red ;",encabezado.innerHTML);

// Cual es la diferencia entre estas 3... bueno, si le ponemos a ese elemento visibility: hidden; en el CSS,

// Puedes ver que innerText no puede acceder a ese contenido...

// Ahora, si añadimos algo de HTML,

// TextContent va a ignorar esas etiquetas HTML y traer solo el texto, mientras que innerhTML si se trae
// el HTML..

const encabezado2 = document.querySelector('.contenido-hero h1').textContent;
console.log("%cencabezado2: %o", "color: red ;",encabezado2);
// ahora también puedes tener algo de encadenamiento o chaining...
const textoEncabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(textoEncabezado);

// Ahora, aquí puedes ver que estoy asignando el Texto a una variable, pero también puedes modificarlo
// de diferentes formas...

document.querySelector('.contenido-hero h1').textContent = 'Nuevo Heading'

// otra opción seria con una variable.

const nuevoTexto = 'Nuevo Heading';
document.querySelector('.contenido-hero h1').textContent = nuevoTexto;


// También puedes cambiar una imagen...

// No lo hemos visto, pero veamos por ejemplo como acceder a esa imagen...

const imagen = document.querySelector('.card img');
console.log("%cimagen.src: %o", "color: red ;",imagen.src);
// Cambiar la imagen...
imagen.src = 'img/hacer2.jpg';
