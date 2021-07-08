// Hoisting: Javascript en su funcionamiento da dos vueltas al codigo antes de ejecutar el codigo,
// 1º par escanear el codigo y creacion de variables y localización de funciones
// 2º para ejecutar el codigo

/** Ademas de las muy notables diferencias en sintaxis, quiero mostrarte las diferencias entre ambas...
 si llamamos la función antes de declararla, el function expression va a funcionar bien,
 mientras que el otro nos va a marcar un error.. */
// Declaración de función (function Declaration)
sumar();
function sumar() {
    console.log(2 + 2);
}

//Expresión de función (Function)  // este código no funcionará
sumar2(); // al poner la llamada a la función el código no se ejecutara correctamente.
const sumar2 = function() {
    console.log(3 + 3);
}

sumar2(); // en cambio aqui si, digamos que existe una jerarquía de prioridades con la declaración 'const'
/** Eso pasa porque JavaScript se ejecuta digamos en 2 vueltas - Eso se le conoce como Hoisting ,
 la primer vuelta registra todas las funciones y determina las variables, esta etapa se le llama de creación,
 la segunda pasada es la que executa tu codigo, se llama de ejecución.

 Por lo tanto el primer código funciona porque function se registra primero y después se ejecuta el código.

 el segundo no funciona porque si bien es una función no es declarada como tal, lo ve más bien como una variable...

 Esto se le conoce como hosting que basicamente son esas 2 etapas (creación y ejecución)

 básicamente tu código se ejecuta asi:
 */

// const sumar3;  // da error
// // sumar3(); // a estas alturas es undefined...
//  sumar3 = function() {
//     console.log(3 + 3); // pero como ya habiamos llamado la función, se queda como undefined
// }

// Y esta es pregunta para obtener un trabajo como JS Developer...
