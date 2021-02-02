/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.

FACUNDO GONZALEZ

mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numero1,numero2,resultado;
	numero1=document.getElementById("txtIdNumeroUno").value;
	numero2=document.getElementById("txtIdNumeroDos").value;
	resultado = parseInt(numero1) + parseInt(numero2);
	alert (" La suma es: " + resultado);
}

