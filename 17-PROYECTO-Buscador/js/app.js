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
    // mostrarAutos();
    tabla(); // muestras los automoviles al cargar

    //llenar las opciones de años
    llenarSelect();
});

//event listener para los select de búsquedas, leyendo su contenido
marca.addEventListener('change', marca => {
    // console.log('cambio...', marca.target.value );
    datosBusqueda.marca = marca.target.value;
    console.log('datosBusqueda...', datosBusqueda );
});
year.addEventListener('change', year => {
     datosBusqueda.year = year.target.value;
    console.log('datosBusqueda...', datosBusqueda );
});
minimo.addEventListener('change', minimo => {
    datosBusqueda.minimo = minimo.target.value;
    console.log('datosBusqueda...', datosBusqueda );
});

maximo.addEventListener('change', maximo => {
    datosBusqueda.maximo = maximo.target.value;
    console.log('datosBusqueda...', datosBusqueda );
});

transmision.addEventListener('change', transmision => {
    datosBusqueda.transmision = transmision.target.value;
    console.log('datosBusqueda...', datosBusqueda );
});
puertas.addEventListener('change', puertas => {
    datosBusqueda.puertas = puertas.target.value;
    console.log('datosBusqueda...', datosBusqueda );
});
color.addEventListener('change', color => {
    datosBusqueda.color = color.target.value;
    console.log('datosBusqueda...', datosBusqueda );
});

// // funciones
// function mostrarAutos(){
//     autos.forEach( auto => {
//
//         const { marca, modelo, year, puertas, transmision, precio, color } = auto;
//         const autoHTML = document.createElement('p');
//
//         autoHTML.textContent =`
//          ${marca}-${modelo}-${year}-${puertas} Puertas- Transimisión:${transmision}
//          -Precio: ${precio}- Color:${color }
//         `;
//
//         resultado.appendChild(autoHTML)
//     });
// }

//pinta la cabecera de la tabla

function crearTabla() {
    var c, r, t;

    t = document.createElement('thead');
    r = t.insertRow(0);

    c = r.insertCell(0);
    c.innerHTML = "Marca";

    c = r.insertCell(1);
    c.innerHTML = "Año";

    c = r.insertCell(2);
    c.innerHTML = "Precio";

    c = r.insertCell(3);
    c.innerHTML = "Puertas";

    c = r.insertCell(4);
    c.innerHTML = "Color";

    c = r.insertCell(5);
    c.innerHTML = "transmision";

    resultado.appendChild(t);
}

//pinta el cuerpo de la tabla

function mostrarCoches() {
    autos.forEach(autos => {
        const { marca, year, precio, puertas, color,transmision } = autos;
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <tbody>
            <tr>
                <td>${marca}</td>
                <td>${year}</td>
                <td>${precio}</td>
                <td>${puertas}</td>
                <td>${color}</td>
                <td>${transmision}</td>
                </tr>
            </tbody>
        `;
        resultado.appendChild(tr);
    });
}
//creo el elemento table aqui y no en la funcion de crear tabla (como lo tenía antes) y además instancio las funciones anteriores

function tabla() {
    const k = crearTabla();
    const m = mostrarCoches();

    const resulta = document.createElement('table');
    // resulta.innerHTML = resultado.appendChild(k, m);

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
