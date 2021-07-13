// Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

//contenedor para los resultado.
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max -10;

// generar un objeto con la búsqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

// eventos

document.addEventListener('DOMContentLoaded', () => {
    //llenar las opciones de años
    llenarSelect();
    mostrarAutos();
    // tabla(); // muestras los automoviles al cargar


});

//event listener para los select de búsquedas, leyendo su contenido
marca.addEventListener('change', marca => {
    // console.log('cambio...', marca.target.value );
    datosBusqueda.marca = marca.target.value;
    // console.log('datosBusqueda...', datosBusqueda );
    filtrarAuto();
});
year.addEventListener('change', year => {
     datosBusqueda.year = parseInt(year.target.value);
    // console.log('datosBusqueda...', datosBusqueda );
    filtrarAuto();
});
minimo.addEventListener('change', minimo => {
    datosBusqueda.minimo = minimo.target.value;
    // console.log('datosBusqueda...', datosBusqueda );
    filtrarAuto();
});

maximo.addEventListener('change', maximo => {
    datosBusqueda.maximo = maximo.target.value;
    // console.log('datosBusqueda...', datosBusqueda );
    filtrarAuto();
});

transmision.addEventListener('change', transmision => {
    datosBusqueda.transmision = transmision.target.value;
    // console.log('datosBusqueda...', datosBusqueda );
    filtrarAuto();
});
puertas.addEventListener('change', puertas => {
    datosBusqueda.puertas = parseInt(puertas.target.value);
    // console.log('datosBusqueda...', datosBusqueda );
    filtrarAuto();
});
color.addEventListener('change', color => {
    datosBusqueda.color = color.target.value;
    console.log('datosBusqueda...', datosBusqueda );
    filtrarAuto();
});

// // funciones
function mostrarAutos(autos){
    autos.forEach( auto => {

        const { marca, modelo, year, puertas, transmision, precio, color } = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent =`
         ${marca}-${modelo}-${year}-${puertas} Puertas- Transimisión:${transmision}
         -Precio: ${precio}- Color:${color }
        `;

        resultado.appendChild(autoHTML)
    });
}


function  limpiarHtml(){
    // Leer el elemento Resultado
    const contenedor = document.querySelector('#resultado');

    // limpiar los resultados anteriores
    while(contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}



//genera los años del select
function llenarSelect(){
    console.log('llenando años...');

    for (let i= max; i >= min ; i-- ){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); //agrega las opciones de año al select
    }

}

// función que filtra en base  a la búsqueda realizada
function  filtrarAuto(){
    limpiarHtml();
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo)
                           .filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision)
                           .filter(filtrarColor);
    console.log( resultado );


    if(resultado.length){
        mostrarAutos( resultado);
    } else {
        noResultado();
    }
}

function noResultado() {
    limpiarHtml();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.appendChild(document.createTextNode('No hay Resultados'));
    document.querySelector('#resultado').appendChild(noResultado);
}
// funiones de alto nivel
function filtrarMarca( auto){
    const {marca } = datosBusqueda;
        if ( marca ){
            console.log('marca:',marca)
            return auto.marca === marca;

        }else {
            return  auto;
        }



}

function filtrarYear( auto ){
    const { year } = datosBusqueda;
    // console.log( new Date( year ).getFullYear() );
    // console.log( typeof year    );
    // console.log(typeof auto.year  );
    if ( year ){
        console.log('year:',year)
        return auto.year === year;
    }else {
        return  auto;
    }
}

function filtrarMinimo( auto ){
    const { minimo } = datosBusqueda;

    if ( minimo ){
        console.log('minimo:', minimo)
        return auto.precio  >=  minimo;
    }else {
        return  auto;
    }
}

function filtrarMaximo( auto ){
    const { maximo } = datosBusqueda;

    if ( maximo ){
        console.log('minimo:', maximo)
        return auto.precio <=  maximo;
    }else {
        return  auto;
    }
}
function filtrarPuertas(auto) {
    // ojo cuando selecciona 2 0 4 puerta del formulario me lo selecciona como un string
    // por tanto hay que que convertirlo en number, yueso se hace previanmente en la linea 68 ->
    const { puertas } = datosBusqueda;
    if (puertas) {
        return auto.puertas === puertas;
    } else {
        return auto;
    }
}
function filtrarTransmision(auto) {
    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision;
    } else {
        return auto;
    }

}

function filtrarColor(auto){
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color;
    }
    else {
        return  auto;
    }
}


//pinta la cabecera de la tabla

// function crearTabla() {
//     var c, r, t;
//
//     t = document.createElement('thead');
//     r = t.insertRow(0);
//
//     c = r.insertCell(0);
//     c.innerHTML = "Marca";
//
//     c = r.insertCell(1);
//     c.innerHTML = "Año";
//
//     c = r.insertCell(2);
//     c.innerHTML = "Precio";
//
//     c = r.insertCell(3);
//     c.innerHTML = "Puertas";
//
//     c = r.insertCell(4);
//     c.innerHTML = "Color";
//
//     c = r.insertCell(5);
//     c.innerHTML = "transmision";
//
//     resultado.appendChild(t);
// }

//pinta el cuerpo de la tabla

// function mostrarAutos(autos) {
//
//     limpiarHtml(); // eliminar HTML PREVIO
//
//     autos.forEach(autos => {
//         const { marca, year, precio, puertas, color,transmision } = autos;
//         const tr = document.createElement('tr');
//         tr.innerHTML = `
//             <tbody>
//             <tr>
//                 <td>${marca}</td>
//                 <td>${year}</td>
//                 <td>${precio}</td>
//                 <td>${puertas}</td>
//                 <td>${color}</td>
//                 <td>${transmision}</td>
//                 </tr>
//             </tbody>
//         `;
//         resultado.appendChild(tr);
//     });
// }
// limpiar html
//creo el elemento table aqui y no en la funcion de crear tabla (como lo tenía antes) y además instancio las funciones anteriores

// function tabla() {
//     const k = crearTabla();
//     // const m = mostrarCoches(autos);
//
//     const resulta = document.createElement('table');
//     // resulta.innerHTML = resultado.appendChild(k, m);
//
// }
