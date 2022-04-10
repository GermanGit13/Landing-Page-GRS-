const formulario = document.getElementById('formulario'); //para acceder al formulario por su id
const inputs = document.querySelectorAll('#formulario input'); //donde almacenados todos los input del formulario #porque es un id

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]{1,40}$/, // Letras y espacios, pueden llevar acentos. Minimo 1 caracteres maximo 16 y la ñ
	apellido: /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]{1,40}$/, // Letras y espacios, pueden llevar acentos. Minimo 1 caracteres maximo 16
	correo: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,4}\.[0-9]{1,4}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
	asunto: /^[a-zA-ZÀ-ÿ0-9\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ0-9\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ0-9\u00f1\u00d1]{1,40}$/, // Letras, espacios, números pueden llevar acentos. Minimo 1 caracteres maximo 16 y la ñ
	mensaje: /^[a-zA-ZÀ-ÿ0-9\u00f1\u00d1\_\]+(\s*[a-zA-ZÀ-ÿ0-9\u00f1\u00d1\_\]*)*[a-zA-ZÀ-ÿ0-9\u00f1\u00d1]{1,40}$/ // Letras y espacios, números y guión bajo pueden llevar acentos. Minimo 1 caracteres maximo 16 y la ñ
}

const campos = { /*ponemos las costantes en la false para que cuando se validen pase a true*/
	nombre: false,
	apellido: false,
	correo: false,
	telefono: false,
	asunto: false,
	mensaje: false
}

const validarFormulario = (e) => { //para acceder a los name que pusimos por cada campo en el formulario
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre'); //solo se ejecutara cuando coincidan los name creados en el html
		break;
		case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido'); //solo se ejecutara cuando coincidan los name creados en el html
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo'); //solo se ejecutara cuando coincidan los name creados en el html
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono'); //solo se ejecutara cuando coincidan los name creados en el html
		break;
		case "asunto":
			validarCampo(expresiones.asunto, e.target, 'asunto'); //solo se ejecutara cuando coincidan los name creados en el html
		break;
		case "mensaje":
			validarCampo(expresiones.mensaje, e.target, 'mensaje'); //solo se ejecutara cuando coincidan los name creados en el html
		break; 
	}
}

/*Funcion que llama al campo pasando los parametros para validarlos  y añadir los fa de correcto e incorrecto*/ 
const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}
/*FIN Funcion que llama al campo pasando los parametros para validarlos  y añadir los fa de correcto e incorrecto*/ 

inputs.forEach((input) => { //para que por cada input ejecute la función
	input.addEventListener('keyup', validarFormulario); //por cada input cada tecla que pulsa el usuario valida con la funcion creada comprobando los campos
	input.addEventListener('blur', validarFormulario); //por cada input para que cuando pulse fuera del campo se ejecute la funcion creada para comproba los campos 
});

formulario.addEventListener('submit', (e) => { //para cuando apretemos el boton enviar validar los campos y reiniciar los campos para que esten vacios 
	e.preventDefault(); //

	if(campos.nombre && campos.apellido && campos.correo && campos.telefono && campos.asunto && campos.mensaje){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});