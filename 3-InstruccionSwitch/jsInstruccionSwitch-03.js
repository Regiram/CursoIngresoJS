function mostrar()
{
	var mesAño;
	mesAño = document.getElementById("txtIdMes").value
	
	if (mesAño == "Febrero"){
		alert ("Este mes no tiene mas de 29 dias");
	}
	else{
		alert ("Este mes tiene 30 o mas dias");
	}
}//FIN DE LA FUNCIÓN