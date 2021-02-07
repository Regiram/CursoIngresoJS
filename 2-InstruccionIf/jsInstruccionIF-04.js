function mostrar()
{
	var edadIngresada;
	edadIngresada=document.getElementById("txtIdEdad").value;

	if (edadIngresada >= 13 && edadIngresada <= 17){
		alert("La edad ingresada corresponde a la de un adolecente");
	}
}//FIN DE LA FUNCIÓN