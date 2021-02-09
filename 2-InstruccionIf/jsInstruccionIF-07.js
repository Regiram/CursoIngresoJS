// FACUNDO GONZAELZ

function mostrar()
{
	var edadIngresada, estado;

	edadIngresada = document.getElementById("txtIdEdad").value;
	estado = document.getElementById("estadoCivil").value;

	edadIngresada = parseInt (edadIngresada);

	if (edadIngresada < 18 && estado != "Soltero"){
		alert ("El individuo es muy joven para NO ser soltero");
	}


}//FIN DE LA FUNCIÓN