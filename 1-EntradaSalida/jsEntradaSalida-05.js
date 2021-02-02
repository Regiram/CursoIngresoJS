/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/

/* FACUNDO GONZALEZ */

function mostrar()
{	
	var nombreIngresado,apellidoIngresado,edadIngresada;
	nombreIngresado=document.getElementById("txtIdNombre").value;
	edadIngresada=document.getElementById("txtIdEdad").value;
	apellidoIngresado = prompt("Ingrese su apellido: ");
	alert ("Su nombre es " + nombreIngresado + " " + apellidoIngresado + " y su edad es " + edadIngresada);
}

