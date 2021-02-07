function mostrar()
{
	var edadIngresada;
	edadIngresada=document.getElementById("txtIdEdad").value;

	if (edadIngresada <= 12 && edadIngresada <= 18) {
		alert ("La edad ingresada NO es la de un individuo adolecente");
	}
}//FIN DE LA FUNCIÓN