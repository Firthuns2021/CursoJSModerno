 /** Variables*/
const listaTweets = document.querySelector('#lista-tweets');
const formulario = document.querySelector('#formulario');
let tweets = [];
//
// // Event Listeners
eventListeners();
//
function eventListeners() {
    //Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);
//
//     // Borrar Tweets
    listaTweets.addEventListener('click', borrarTweet);
//
//     //Cuando el documento se encuentre listo, me carga del localestorage en caso de tener elementos
    document.addEventListener('DOMContentLoaded', () => {
        //intenta buscar un arreglo con nombre 'tweets', pero sei encuentra null -> assignará un arreglo vacio
        tweets = JSON.parse( localStorage.getItem('tweets') ) || []  ;
        console.log(tweets);
        crearHTML();
    });
}
//
 /** Añadir tweet del formulario  */
function agregarTweet(e) {
    e.preventDefault();
     // leer el valor del textarea
    const tweet = document.querySelector('#tweet').value;
        console.log(tweet);
        /**   validación  */
    if(tweet === '') {
        mostrarError('Un mensaje no puede ir vacio');
        return; // evita que se ejecuten más lineas de código
    }

        /** Crear un objeto Tweet  */
    const tweetObj = {
        id: Date.now(),
        tweet
    }
// linea 39: cuando la declaracion y la variable tiene el mismo nombre, javaScript permite
// que se haga declaración tal cual está, en caso contraio-> texto: tweet
         /**   Añadirlo a mis tweets  */
    tweets = [...tweets, tweetObj];
    console.log(tweets);
//      Una vez agregado, vamos a crear el HTML
    crearHTML();
//
     console.log('agregado tweet');
//     Reiniciar el formulario
    formulario.reset();
}
//
function mostrarError(error) {
    const mensajeEerror = document.createElement('p');
    mensajeEerror.textContent = error;
    mensajeEerror.classList.add('error');

    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeEerror);
// solo ejecuta una vez -> setTimeout()....
    setTimeout(() => {
        mensajeEerror.remove();
    }, 3000);
}
/** Muestra un listado de los tweets */
function crearHTML() {
    limpiarHTML();

    if(tweets.length > 0 ) {
        tweets.forEach( tweet =>  {
            // Agregar boton de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            // añadir la funcion de eliminar
            btnEliminar.onclick = ()=> {
                borrarTweet(tweet.id);
            }

            // Crear elemento y añadirle el contenido a la lista
            const li = document.createElement('li');

            // Añade el texto
            li.innerText = tweet.tweet;

            // asignar el botón de borrar al tweet
            li.appendChild(btnEliminar);

            // // añade un atributo único...
            // li.dataset.tweetId = tweet.id;

            // añade el tweet a la lista
            listaTweets.appendChild(li);
        });
    }

    sincronizarStorage();
}
//
 /** Elimina el Tweet del DOM  */
function borrarTweet(id) {
 // con el filter cnos traeremos todos los demas tweet excepto el que le pasamos
    tweets = tweets.filter( tweet => tweet.id !== id );
    console.log(tweets);


    // console.log(e.target.parentElement.dataset.tweetId);
    // const id = e.target.parentElement.dataset.tweetId;
    // tweets = tweets.filter( tweet => tweet.id !== id  );
    crearHTML();
}

 /** Agrega tweet a local storage  */
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}


 /** Elimina los cursos del carrito en el DOM  */
function limpiarHTML() {
    while(listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}
