/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos).

FACUNDO GONZALEZ

*/
function mostrar()
{
	//declarar contadores y variables 
	var respuesta, numeroIngresado, sumaNegativos,positivos,ceros,negativos,pares,sumaPositivos,promPositivos,promNegativos,diferenciaPosNeg,banderaNumeros;

	respuesta="y";
	ceros = 0;
	positivos = 0;
	negativos = 0;
	pares = 0;

	while(respuesta=="y")
	{
		numeroIngresado = prompt ("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		if (numeroIngresado == 0){
			ceros = ceros + 1;
		}
		else {
			ceros = "nulo"
		}
		if (numeroIngresado > 0){
			positivos = positivos + 1;
			sumaPositivos = numeroIngresado
		}
		else {
			positivos = "nulo"
		}
		if (numeroIngresado < 0){
			negativos = negativos + 1;
		}
		else {
			negativos = "nulo"
		}
		if ((numeroIngresado % 2) == 0){
			pares = pares + 1;
		}
		else {
			pares = "nulo"
		}
		
		respuesta=prompt("desea continuar? (y/n)");
	}

	//document.write("<h3>La suma de negativos es : "+ sumaNegativos + "</h3></br>");
	//document.write("<h3>La suma de positivos es : "+ sumaPositivos + "</h3></br>");
	document.write("<h3La cantidad de positivos ingresados es : "+ positivos + "</h3></br>");
	document.write("<h3>La cantidad de negativos ingresados es : "+ negativos + "</h3></br>");
	document.write("<h3>La cantidad de ceros ingresados es: "+ ceros + "</h3></br>");
	document.write("<h3>La cantidad de numeros pares ingresados es: " + pares + "</h3></br>");
	//document.write("<h3>El promedio de numero postivos es : " + promPositivos + "</h3></br>");
	//document.write("<h3>El promedio de numeros negativos es : "+ promNegativos + "</h3></br>");
	//document.write("<h3>La diferencia entre positivos y negativos es de : "+ diferenciaPosNeg + "</h3>");
}