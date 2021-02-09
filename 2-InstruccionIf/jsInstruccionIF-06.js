
// FACUNDO GONZALEZ 


function mostrar()
{
	var edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;

	edadIngresada = parseInt (edadIngresada);

	if (edadIngresada > 17){
		alert("La persona es mayor de edad");
	}
	else { 
		if (edadIngresada > 12 && edadIngresada < 18){
		alert ("La edad de la persona corresponde a la de un adolecente");
	    }
	else {
		alert ("La edada de la persona ingresada corresponde a la de un niño")
	     }
    }
}//FIN DE LA FUNCIÓN