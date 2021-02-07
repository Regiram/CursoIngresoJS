function mostrar()
{
	var edadIngresada, estadoCivil;

	edadIngresada=document.getElementById("txtIdEdad").value;
	estadoCivil=document.getElementById("estadoCivil").value;

	if (edadIngresada >= 18 && estadoCivil == "Soltero"){
		alert("Es soltero y no es menor");
	}


}//FIN DE LA FUNCIÓN