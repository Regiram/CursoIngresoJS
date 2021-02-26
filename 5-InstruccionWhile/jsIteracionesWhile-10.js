/*
WHILE 10
FACUNDO GONZALEZ
*/
function mostrar()
{
	var respuesta, numeroIngresado, sumaNegativos,positivos,ceros,negativos,pares,sumaPositivos,promPositivos,promNegativos,diferenciaPosNeg,maxNegativo,minPar;

	respuesta="y";
	ceros = 0;
	positivos = 0;
	negativos = 0;
	pares = 0;
	sumaNegativos = 0;
	sumaPositivos = 0;

	while(respuesta=="y")
	{
		numeroIngresado = prompt ("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		while (isNaN(numeroIngresado)){
			numeroIngresado = prompt ("FAVOR DE INGRESAR UN NUMERO");
			numeroIngresado = parseInt(numeroIngresado);
		}
		if (numeroIngresado == 0){
			ceros = ceros + 1;
		}
		else{
			if (numeroIngresado < 0){
				if (negativos == 0 || numeroIngresado > maxNegativo){
					maxNegativo = numeroIngresado;
				}
				negativos = negativos + 1;
				sumaNegativos = sumaNegativos + numeroIngresado;
			}
			else{
				positivos = positivos + 1;
				sumaPositivos = sumaPositivos + numeroIngresado;
			}
		}	
		if (numeroIngresado % 2 == 0){
			if (pares == 0 || numeroIngresado < minPar){
				minPar = numeroIngresado;
			}
			pares = pares + 1;
		}
	respuesta=prompt("desea continuar? (y/n)");	
	}

	diferenciaPosNeg = sumaPositivos + sumaNegativos;
	

	document.write("<h3>La suma de negativos es : "+ sumaNegativos + "</h3></br>");
	document.write("<h3>La suma de positivos es : "+ sumaPositivos + "</h3></br>");
	document.write("<h3La cantidad de positivos ingresados es : "+ positivos + "</h3></br>");
	document.write("<h3>La cantidad de negativos ingresados es : "+ negativos + "</h3></br>");
	document.write("<h3>El numero negativo de mayor valor ingresado es : "+ maxNegativo + "</h3></br>");
	document.write("<h3>La cantidad de ceros ingresados es: "+ ceros + "</h3></br>");
	document.write("<h3>La cantidad de numeros pares ingresados es: " + pares + "</h3></br>");
	document.write("<h3>El numero par de menor valor ingresado es: " + minPar + "</h3></br>");
	if (positivos != 0){
		promPositivos = sumaPositivos / positivos;
		document.write("<h3>El promedio de numero postivos es : " + promPositivos + "</h3></br>");
	}
	else{
		document.write("<h3>No se han ingresado numeros positivos</h3></br>");
	}
	if (negativos != 0){
		promNegativos = sumaNegativos / negativos;
		document.write("<h3>El promedio de numeros negativos es : "+ promNegativos + "</h3></br>");
	}
	else{
		document.write("<h3>No se han ingresado numeros negativos</h3></br>");
	}
	document.write("<h3>La diferencia entre positivos y negativos es de : "+ diferenciaPosNeg + "</h3>");
}