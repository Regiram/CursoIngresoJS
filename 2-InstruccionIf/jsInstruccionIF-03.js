function mostrar()
{
	var edadIngresada;
	edadIngresada=document.getElementById("txtIdEdad").value;

	if (edadIngresada >= 18){
		alert ("Es mayor de edad");
	}
	else{
		alert ("El individuo no cumple la mayoria de edad");
	}
}//FIN DE LA FUNCIÓN