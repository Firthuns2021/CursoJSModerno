// Veamos como hacer destructuring de un objeto que esta dentro de otro objeto..

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion : {
        medidas: {
            peso: '1kg',
            medida: '1m'
        },
        fabricacion: {
            pais: 'China'
        }
    }
}


// const { nombre, informacion, informacion: { peso, medida } } = producto;
//vamos a intentar acceder al objeto fabricacion
// const { nombre, informacion: {fabricacion}} = producto;


// console.log(nombre)
// console.log(fabricacion)
// console.log(informacion) // da error, debdido a que en la linea 21, solo estoy creando la variable para
// fabricacion tendria que declararlo de la siguiente manera>>>
// const { nombre, informacion, informacion: {fabricacion}} = producto;
// console.log(nombre);
// console.log(fabricacion);
// console.log(informacion);
// console.log(medida)
// const { nombre, informacion, informacion: {fabricacion: { pais}}} = producto;
// console.log(nombre);
// console.log(informacion);
// // console.log(fabricacion);// asi me daría undefined, por lo explicado lineas arriba
//
// console.log(pais)

const { nombre, informacion, informacion: {fabricacion,  fabricacion: { pais}}} = producto;
console.log(nombre);
console.log(informacion);
console.log(fabricacion);// asi me daría undefined, por lo explicado lineas arriba

console.log(pais)
