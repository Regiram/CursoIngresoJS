/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"

FACUNDO GONZALEZ

ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero1,numero2,resultado;
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;
	resultado = parseInt(numero1) + parseInt(numero2)
	alert(" La suma es: " + resultado);	
}

function restar()
{
	var numero1,numero2,resultado
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;
	resultado = parseInt(numero1) - parseInt(numero2);
	alert(" La resta es: " + resultado);
}

function multiplicar()
{ 
	var numero1,numero2,resultado;
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;
	resultado = parseInt(numero1) * parseInt(numero2);
	alert( "La multiplicacíon es: " + resultado);
}

function dividir()
{
	var numero1,numero2,resultado;
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;
	resultado = parseInt(numero1) / parseInt(numero2);
	alert(" La division es: " + resultado);
}

