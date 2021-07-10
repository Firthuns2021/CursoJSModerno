// utilizamos un framework de css -> tailwind
//Variables

const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');
const resetBtn = document.querySelector('#resetBtn');

//VARIABLES PARA CAMPOS
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', iniciarApp);

    // campos del formulario
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    // Boton de enviar en el submit
    formulario.addEventListener('submit', enviarEmail);

    // Boton de reset
    resetBtn.addEventListener('click', resetFormulario);
}


// Funciones
function iniciarApp(){
    console.log('Iniciando...')
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}




//valida formulario
function validarFormulario(e){

    // console.log(e.target.type); // nos dice que tipo se trata

  if (e.target.value.length > 0){
      // elimina los errores....
      const error = document.querySelector('p.error');
      if(error !== null){
          error.remove(); // elimina losmensajes de error, una vez hayamos insertado bien los comentarios.
      }


      e.target.classList.remove('border', 'border-red-500', 'mt-5', 'text-center');
     e.target.classList.add('border', 'border-green-500', 'mt-5', 'text-center');
  }else{
      // console.log('No hay nada');
      e.target.classList.remove('border', 'border-green-500', 'mt-5', 'text-center');
      e.target.classList.add('border', 'border-red-500', 'mt-5', 'text-center');

      mostrarError('Todos los campos son Obligatorios');
  }
      // if(e.target.value.length > 0 ) {
      //     campo.style.borderBottomColor = 'green';
      //     campo.classList.remove('error');
      // } else {
      //     e.target.classList.add('border', 'border-red-500');
      // }
    /**
     Enlace web donde nos ofrecen expresiones regulares para la validación de correos electrónicos
     https://emailregex.com/
     * */

      // Validar unicamente el email
      if( e.target.type  === 'email') {


          // validarEmail(this);
          // const resultado = e.target.value.indexOf('@'); //validacion regular poco profesional
          if (er.test( e.target.value )){
              // elimina los errores....
              const error = document.querySelector('p.error');
              if(error !== null){
                  error.remove(); // elimina losmensajes de error, una vez hayamos insertado bien los comentarios.
              }


              e.target.classList.remove('border', 'border-red-500', 'mt-5', 'text-center');
              e.target.classList.add('border', 'border-green-500', 'mt-5', 'text-center');
          }else{
              e.target.classList.remove('border', 'border-green-500', 'mt-5', 'text-center');
              e.target.classList.add('border', 'border-red-500', 'mt-5', 'text-center');

              mostrarError('email no válido');
          }

      }


      if( er.test(email.value ) && asunto.value !== '' && mensaje.value !== '' ) {

          console.log('Pasaste la validación');

          btnEnviar.disabled = false;
          btnEnviar.classList.remove('opacity-50');
          btnEnviar.classList.remove('cursor-not-allowed');
      }


}



function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'mt-5', 'text-center', 'error');

    // utilizamos el querySelectorAll, para poder llegar al metodo/funcion .length de la linea 83; y nos devuelve una colección de elementos
    const errores = document.querySelectorAll('.error');
    if( errores.length === 0){
        formulario.appendChild(mensajeError);
        // formularioEnviar.insertBefore(mensajeError, document.querySelector('.mb-10'));//otra forma de sacar el recuado de error
    }
    const error = document.querySelector("p.error"); // selecc. etiqueta P que tenga clase error
    if (error !== null) {
        error.remove();
    }

}


// // Cuando se envia el correo
function enviarEmail(e) {

    e.preventDefault();


    // Spinner al presionar Enviar
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    // Ocultar Spinner y mostrar gif de enviado
    setTimeout( () => {
        spinner.style.display = 'none';
        // Gif que envia email
        const parrafo = document.createElement('p');
        parrafo.textContent = 'Mensaje Enviado Correctamente';
        parrafo.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500', 'text-white', 'font-bold', 'uppercase');

        //insertame el parrafo antes del spinner
        formulario.insertBefore(parrafo, spinner);
        setTimeout( () => {
       parrafo.remove();
          resetFormulario() // eliminar el mensaje de exito
        }, 1000 );
    }, 1000);


}



function validarEmail(campo) {
    const mensaje = campo.value;

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if( re.test(mensaje.toLowerCase()) ) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}
// // Resetear el formulario
function resetFormulario() {
    formulario.reset();

    iniciarApp();
}
