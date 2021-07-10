// Variables
const carrito = document.querySelector('#carrito'); //id linea 23 html
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBrn = document.querySelector('#vaciar-carrito'); ////id linea 38 html
const listaCursos = document.querySelector('#lista-cursos');

let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners() {
    // cuando agregar un curso presionando 'agregar al carrito'
    listaCursos.addEventListener('click', agregarCurso);
    // elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    //vaciar el carrito
    carrito.addEventListener('click',  ()=> {
        console.log('vaciando carrito');
        articulosCarrito = [];
      limpiarHTML();
    });
}


// funciones
function agregarCurso(e) {
    e.preventDefault();// nos quita el efecto de una vezx efectuado click sobre le boton nos mande la página hacia arriba, id=#
    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        // console.log('Agregando al carrito...', e.target.parentElement.parentElement );
        leerDatosCursos(cursoSeleccionado);
    }

}


// ELIMINA UN CURSO DEL CARRITO
function  eliminarCurso(e){
    if (e.target.classList.contains('borrar-curso')){
        const cursoId= e.target.getAttribute('data-id');
        //elimina del arreglo
        articulosCarrito = articulosCarritos.filter ( curso =>{

            if(curso.id === cursoId){

                if(curso.cantidad>1){

                    curso.cantidad--;

                    return curso;

                }else{

                    delete curso;

                }

            }else{

                return curso;

            }

        });
        carritoHTML();


    }

    // console.log('desde eliminarCurso', e.target.classList );
}

// leer el contenido del html que le dimo click y extrae info curso
function leerDatosCursos(cursoSeleccionado) {
// console.log(cursoSeleccionado);
//crear objeto con el contenido actual
    const infoCurso = {
        image: cursoSeleccionado.querySelector('img').src,
        titulo: cursoSeleccionado.querySelector('h4').textContent,
        precio: cursoSeleccionado.querySelector('.precio span').textContent,
        id: cursoSeleccionado.querySelector('a').getAttribute('data-id'),
        cantidad: 1

    }

    //revisa si un elemento ya existe en el carrito
    const  existe = articulosCarrito.some(curso => curso.id === infoCurso.id );
        if (existe){
            //actualizamos la cantidad

            const cursos = articulosCarrito.map( curso => {
                if (curso.id === infoCurso.id){
                    curso.cantidad++;
                    return curso; // retorna los objetos actualizado
                }else{
                    return curso; // retorna los objetos que nos duplicados
                }
            });
            articulosCarrito = [...cursos];
        }else {
            //agrega elementos al arreglo de carrito
            articulosCarrito = [...articulosCarrito, infoCurso];
        }

// vamos a agregar al carrito de la compra


    console.log(articulosCarrito);
    carritoHTML();
}

// muestra el carrito de compras en el html
function carritoHTML() {
    // antes de crear el html, procedemos a limpiar para evitar solapamiento de codigo innecesario
    limpiarHTML();

    //recorre el carrito y gemera e l HTML
    articulosCarrito.forEach(curso => {
        const { image, titulo, precio, cantidad} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
          <td><img src="${image}" width="100"  alt="${curso.id}"></td>
          <td>${titulo}   </td>
          <td>${precio}   </td>
          <td>${cantidad} </td>
          <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}"> X </a>
          </td>
        `;
        //Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    })
}

//ELIMINAR LOS CURSOS DEL TBODY
function limpiarHTML() {
    //FORMA LENTA
    contenedorCarrito.innerHTML = '';
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}

