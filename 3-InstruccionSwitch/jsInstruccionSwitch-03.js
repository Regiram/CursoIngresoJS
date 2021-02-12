
// FACUNDO GONZALEZ

function mostrar()
{
	var mesAño;
	mesAño = document.getElementById("txtIdMes").value
	
	switch (mesAño){
		case "Febrero":
			alert ("Este mes no tiene mas de 29 dias");
			break;
		default:
			alert ("Este mes tiene 30 o mas dias");
			break;
	}
}//FIN DE LA FUNCIÓN