/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.

FACUNDO GONZALEZ

*/
function mostrar()
{
	var numeroIngresado, numeroValido;
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	numeroIngresado = parseInt (numeroIngresado);

	while ((numeroIngresado < 0) || (numeroIngresado > 9)){
		numeroIngresado = prompt("Ingreso un numero no valido. Ingrese un numero entre 0 y 9 ");
	} 
	numeroValido = document.getElementById("txtIdNumero").value= ("Ingreso el numero: " + numeroIngresado)
}//FIN DE LA FUNCIÓN