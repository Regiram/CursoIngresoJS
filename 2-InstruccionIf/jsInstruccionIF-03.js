
// FACUNDO GONZALEZ

function mostrar()
{
	var edadIngresada;
	edadIngresada=document.getElementById("txtIdEdad").value;

	edadIngresada = parseInt(edadIngresada);

	if (edadIngresada >= 18){
		alert ("Es mayor de edad");
	}
	else{
		alert ("El individuo no cumple la mayoria de edad");
	}
}//FIN DE LA FUNCIÓN