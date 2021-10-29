var nombre = document.getElementById('nombre');
var email = document.getElementById('email');
var mensaje = document.getElementById('mensaje');
var errorcarga = document.getElementById('errorcarga');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras (Pueden tener tilde.
	
}

function enviarFormulario(){
    correo= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/; //Mail tiene que llevar arroba y un dominio
    var mensajedeError = [];
    if(nombre.value === null || nombre.value === ''){
        mensajedeError.push('* Debe ingresar un nombre')
        errornombre.innerHTML = '*'
        nombrecorrecto = false
    }
    else{
        errornombre.innerHTML = ''
        nombrecorrecto = true
    }
    if(correo.test(email.value)){
        errormail.innerHTML = ''
        mailcorrecto = true

    } else{
        mensajedeError.push('* Mail erróneo');
        errormail.innerHTML = '*'
        mailcorrecto = false
    }
    if(mensaje.value === null || mensaje.value === ''){
        mensajedeError.push('* Debe ingresar un mensaje.')
        errormensaje.innerHTML = '*'
        mensajecorrecto = false
    }else{
        errormensaje.innerHTML = ''
        mensajecorrecto = true

    }
        errorcarga.innerHTML = mensajedeError.join('<br>')
        errorcarga.class = 'errorformulario'
    
    if (mensajecorrecto & nombrecorrecto & mailcorrecto){
        alert('Formulario enviado correctamente')
        document.getElementById("formulario").reset();
    }
    return false;
}