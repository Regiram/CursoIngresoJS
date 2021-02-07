function mostrar()
{
	var notaAleatoria;
	notaAleatoria = Math.floor(Math.random()*11);

	if (notaAleatoria >= 9){
		alert ("Su calificacion es " + notaAleatoria + " 'EXCELENTE'");
	}
	else if (notaAleatoria >= 5 && notaAleatoria <= 8){
		alert ("Su calificacion es " + notaAleatoria + " 'APROBÓ'");
	}
	else {
		alert ("Su calificacion es "+ notaAleatoria + " 'Vamos, la proxima se puede'") 
	}

}//FIN DE LA FUNCIÓN