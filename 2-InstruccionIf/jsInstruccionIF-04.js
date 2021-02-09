function mostrar()
{
	var edadIngresada;
	edadIngresada=document.getElementById("txtIdEdad").value;

	edadIngresada = parseInt(edadIngresada);

	if (edadIngresada > 12 && edadIngresada < 18){
		alert("La edad ingresada corresponde a la de un adolecente");
	}
}//FIN DE LA FUNCIÓN