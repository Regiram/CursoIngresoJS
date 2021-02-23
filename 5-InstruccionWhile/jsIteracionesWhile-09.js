/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.

FACUNDO GONZALEZ

*/
function mostrar()
{	
	var banderaPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var pregunta;

	banderaPrimero="primero";
	pregunta='si';

	while (pregunta == "si"){	
		numeroIngresado = prompt ("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if (banderaPrimero == "primero" || numeroIngresado > numeroMaximo){
			numeroMaximo = numeroIngresado;
		}
		if (banderaPrimero == "primero" || numeroIngresado < numeroMinimo){
			numeroMinimo = numeroIngresado;
			banderaPrimero = "no";
		}
		pregunta=prompt("desea continuar? (si/no)");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}