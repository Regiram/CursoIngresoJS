/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).

FACUNDO GONZALEZ

*/
function Sumar () 
{
    var precio1, precio2, precio3, resultado;
    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    resultado = parseFloat(precio1) + parseFloat(precio2) + parseFloat(precio3);
	alert ("La suma de los numeros ingresados es de: " + resultado);
}
function Promedio () 
{
	var precio1, precio2, precio3, resultado;
    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    resultado = (parseFloat(precio1) + parseFloat(precio2) + parseFloat(precio3)) / 3;
    alert ("El promedio de los numeros ingresados es de: " + resultado);
}
function PrecioFinal () 
{
	var precio1, precio2, precio3, resultado;
    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    resultado = (parseFloat(precio1) + parseFloat(precio2) + parseFloat(precio3)) * 1.21;
    alert ("La suma de los precios incluyendo el IVA es de: " + resultado);
}