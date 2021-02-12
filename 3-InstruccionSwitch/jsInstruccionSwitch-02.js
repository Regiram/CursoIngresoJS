
// FACUNDO GONZALEZ
// EJERCICIO SWITCH #02 CORREGIDO 

function mostrar()
{
	var mesAño;

	mesAño = document.getElementById("txtIdMes").value;

	switch (mesAño){
		case "Julio":
		case "Agosto":
			alert ("Abrigate que hace frio!!");
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre:":
		case "Diciembre":
		case "Enero":
			alert ("Ya pasamos el invierno, ahora el calor");
			break;
		default:
			alert ("Falta poco para el invierno");
			break;
	}




}//FIN DE LA FUNCIÓN