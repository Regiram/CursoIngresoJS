function mostrar()
{
	var edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;

	if (edadIngresada >= 18){
		alert("La persona es mayor de edad");
	}
	else if (edadIngresada >= 13 && edadIngresada <= 17){
		alert ("La edad de la persona corresponde a la de un adolecente");
	
	}
	else {
		alert ("La edada de la persona ingresada corresponde a la de un niño")
	}
}//FIN DE LA FUNCIÓN