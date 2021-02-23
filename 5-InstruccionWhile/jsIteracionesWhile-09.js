/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.

FACUNDO GONZALEZ

*/
function mostrar()
{	
	var banderaPrimero;
	var banderaNumeroPar;
	var banderaNumeroNegativo;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var pregunta;
	var menorPar;
	var mayorNegativo;

	banderaPrimero="primero";
	pregunta ='si';
	banderaNumeroPar = "par"
	banderaNumeroNegativo = "negativo"

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
		if ((banderaNumeroPar == "par" && numeroIngresado % 2 == 0)  || numeroIngresado < menorPar){
			menorPar = numeroIngresado;
			banderaNumeroPar = "impar";
		}
		if ((banderaNumeroNegativo == "negativo" && numeroIngresado < 0) || (numeroIngresado > mayorNegativo && numeroIngresado < 0)){
			mayorNegativo = numeroIngresado;
			banderaNumeroNegativo = "positivo";
		}
		pregunta=prompt("desea continuar? (si/no)");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
	alert ("De los numeros ingresados el menor dentro de los pares es: " + menorPar +" y el mayor dentro de nuemeros negativos " + mayorNegativo);
}