/*

FACUNDO GONZALEZ

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var sueldo,descuento,sueldoDescontado;

	sueldo = document.getElementById("txtIdImporte").value;

	//descuento = parseInt(sueldo * (1/4));

	/*descuento = parseInt(sueldo * 0.25);
	sueldodescontado = sueldo - descuento;*/

	//sueldoDescontado = parseInt(sueldo - (sueldo * 0.25));

	sueldoDescontado = parseInt(sueldo * 0.75);

	descuento = document.getElementById("txtIdResultado").value = sueldoDescontado;
}
