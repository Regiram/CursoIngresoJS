/*

FACUNDO GONZALEZ

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo,aumento,sueldoAumentado;
	sueldo=document.getElementById("txtIdSueldo").value;
	sueldoAumentado = parseInt(sueldo * 1.1);
	sueldoAumentado = parseInt(sueldo * 1.1);
	aumento=document.getElementById("txtIdResultado").value = sueldoAumentado;
}
