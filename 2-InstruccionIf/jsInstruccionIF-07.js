function mostrar()
{
	var edadIngresada, estado;

	edadIngresada = document.getElementById("txtIdEdad").value;
	estado = document.getElementById("estadoCivil").value;

	if (edadIngresada <= 17 && estado != "Soltero"){
		alert ("El individuo es muy joven para NO ser soltero");
	}


}//FIN DE LA FUNCIÓN