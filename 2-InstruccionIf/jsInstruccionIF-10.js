// FACUNDO GONZALEZ

function mostrar()
{
	var notaAleatoria;
	notaAleatoria = parseInt((Math.random()*11));

	if (notaAleatoria > 8){
		alert ("Su calificacion es " + notaAleatoria + " 'EXCELENTE'");
	}
	else {
		if (notaAleatoria > 4 && notaAleatoria < 9){
		alert ("Su calificacion es " + notaAleatoria + " 'APROBÓ'");
		}
	    else {
		alert ("Su calificacion es "+ notaAleatoria + " 'Vamos, la proxima se puede'") 
		}
	}

}//FIN DE LA FUNCIÓN