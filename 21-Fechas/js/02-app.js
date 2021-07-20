// MomentJS
// https://momentjs.com/
const diaHoy = new Date();
moment.locale('es');
console.log(  moment().format('MMMM Do YYYY, h:mm:ss a', diaHoy) );




console.log ( moment().add(3, 'days').calendar() ); // sumamos tres dias al dia actual



console.log( moment().format('LLLL', diaHoy) )
