
// FACUNDO GONZALEZ
// EJERCICIO SWITCH #04 CORREGIDO 

function mostrar()
{
	var mesAño;
	mesAño = document.getElementById("txtIdMes").value;
	
	switch (mesAño){
		case "Febrero":
			alert ("Este mes tiene 28 dias");
			break;
		case "Abril":
		case "Junio":
		case "Noviembre":
		case "Septiembre":
			alert ("Este mes tiene 30 dias");
			break;
		default:
			alert ("Este mes tiene 31 dias");
			break;
	}
	


}//FIN DE LA FUNCIÓN