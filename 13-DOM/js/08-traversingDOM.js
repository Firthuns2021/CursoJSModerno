// Veamos lo que se conoce como Traversing the DOM

// To.do en JavaScript esta conectado en el document, la forma en que te moverás
// entre diferentes elementos se le conoce como Traversing the DOM, ir recorriendolo..


const navegacion = document.querySelector('.navegacion');
console.log("%cnavegacion: %o", "color: red ;",navegacion);

// Cada elemento en la navegación los diferentes elementos se les conoce como Nodos... y podrás listarlos de la siguiente forma...
console.log("%cnavegacion.childNodes: %o", "color: red ;",navegacion.childNodes);

// también existe algo llamado Children
console.log("%cnavegacion.children: %o", "color: red ;",navegacion.children);

// La diferencia es que childNodes te va a mostrar hasta los espacios en blanco, children te muestra solo los elementos...

// Hay mucha información aqui...
// Tipo de Node = 1 es un eleemnto
console.log("%cnavegacion.children[0].nodeType: %o", "color: red ;",navegacion.children[0].nodeType);

// Que etiqueta es...
console.log("%cnavegacion.children[0].nodeName: %o", "color: red ;",navegacion.children[0].nodeName);


// Por ejemplo si selecciono el primer card...

const card = document.querySelector('.card');

console.log("%ccard.nodeType: %o", "color: red ;",card.nodeType);
console.log("%ccard.nodeName: %o", "color: red ;",card.nodeName);

// 1 = Elemento
// 2 - Atributo
// 3 - Text node
// 8 - Commentario
// 9 - Documento
// 10 doctype

// en javascript puedes seleccionar un elemento y navegar en sus diferentes elementos... por ejemplo el card...

console.log("%ccard.children: %o", "color: red ;",card.children);

// Si quieres acceder a ese div con la clase de info puedes colocar...

console.log("%ccard.children[1]: %o", "color: red ;",card.children[1]);

// Si quieres accedera  los elementos hijos de ese info... recuerda puedes anidar las propiedades.

console.log("%ccard.children[1].children[1]: %o", "color: red ;",card.children[1].children[1]);

// Acceder al titulo
console.log("%ccard.children[1].children[1].textContent: %o", "color: red ;",card.children[1].children[1].textContent);

// Modificar ese titulo con un traversing
card.children[1].children[1].textContent = 'Cambiando el Texto con traversing...'

// Intenta cambiar el texto que dice concierto por algo más siguiendo esta sintaxis de ir navegando por el DOM...


// No lo hemos visto, pero veamos por ejemplo como acceder a esa imagen...
console.log(card.children);
console.log(card.children[0]);
console.log(card.children[0].src);

// Cambiar la imagen...
card.children[0].src = 'img/hacer2.jpg';






// Children es una buena forma de acceder a los elementos por su posición, pero supongamos que de nuestra navegación queremos acceder al primer o último enlace...

console.log(navegacion.lastChild);
console.log(navegacion.lastElementChild);


// Si desesa acceder al primero
console.log(navegacion.firstChild)
console.log(navegacion.firstElementChild);

// Cambiar el primer texto...
navegacion.firstElementChild.textContent = 'Nuevo Enlace...';




// En el video anterior vimos como hacer traversing de un elemento padre hacia el hijo,
// JavaScript también te permite seleccionar un elemento hijo e ir navegando hacia el padre...


// vamos a seleccionar el primer enlace...
const enlace = document.querySelector('a');
console.log(enlace);


// Hay diferente sformas...

console.log(enlace.parentNode)
console.log(enlace.parentElement)

// En algunos casos ambos van a dar el mismo resultado, en otros recuerda el espacio es importante...


// También puedes ir al padre del padre...
console.log(enlace.parentElement.parentElement)





// En JavaScript también es posible de hacer traversing a elementos que estan en el mismo nivel ,
// digamos el vecino aunque en javascript se les conoce como hermanos...

console.log(enlace);
console.log(enlace.nextElementSibling);
console.log(enlace.nextElementSibling.nextElementSibling);

console.log(card.nextElementSibling);


// También hay una forma de ir digamos en la otra dirección...


const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard)

console.log(ultimoCard.previousElementSibling);
