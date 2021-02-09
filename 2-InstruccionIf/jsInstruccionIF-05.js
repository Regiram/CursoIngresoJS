// FACUNDO GONZALEZ


function mostrar()
{
	var edadIngresada;
	edadIngresada=document.getElementById("txtIdEdad").value;

	edadIngresada = parseInt(edadIngresada);

	if (edadIngresada < 13 && edadIngresada > 17) {
		alert ("La edad ingresada NO es la de un individuo adolecente");
	}
}//FIN DE LA FUNCIÓN