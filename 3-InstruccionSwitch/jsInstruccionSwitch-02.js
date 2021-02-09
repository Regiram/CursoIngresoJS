function mostrar()
{
	var mesAño;

	mesAño = document.getElementById("txtIdMes").value;

	if (mesAño == "Septiembre" || mesAño == "Octubre" || mesAño == "Noviembre" || mesAño == "Diciembre" || mesAño =="Enero" || mesAño == "Febrero"){
		alert ("Ya pasamos el frio, ahora calor!!");
	}
	else if (mesAño == "Julio" || mesAño == "Agosto"){
		alert ("Abrigate que hace frio!!");
	}
	else {
		alert ("Falta para el invierno");
	}




}//FIN DE LA FUNCIÓN