/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)

FACUNDO GONZALEZ

*/
function mostrar()
{
	var claveIngresada, contador;
	claveIngresada = prompt("ingrese el número clave.");
	contador = parseInt (1);
	while ((claveIngresada != "utn750") && (contador != 3) ){
		claveIngresada =  prompt("La clave ingresada es incorrecta, intentelo de nuevo");
		contador = contador + 1;
		if (contador == 3) {
			alert ("Ah excedido la cantidad de intentos permitidos")
	 	}
	 	else{
		 	alert ("Ingreso correctamente al sistema");
	 	}
	}
}//FIN DE LA FUNCIÓN
