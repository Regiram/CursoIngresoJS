// FACUNDO GONZALEZ

function mostrar()
{
	var edadIngresada;
	edadIngresada=document.getElementById("txtIdEdad").value;

	edadIngresada = parseInt(edadIngresada);	
	if (edadIngresada > 17){
		alert ("Es mayor de edad");
	}

	

}//FIN DE LA FUNCIÓN